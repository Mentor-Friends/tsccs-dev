import { Connection, GetTheConcept, Logger } from "../../app";
import { removeThePrefix } from "../Common/RegexFunction";
import { AddCount } from "./JustIdFormat";


export async function FormatFunctionDataV2(
  connections: Connection[],
  compositionData: Record<number, any> = {},
  reverse: number[] = []
) {
  const logData: any = Logger.logfunction("FormatFunctionDataV2", arguments);

  for (const connection of connections) {
    const reverseFlag = reverse.includes(connection.id);

    const ofTheConcept = await GetTheConcept(connection.ofTheConceptId);
    const toTheConcept = await GetTheConcept(connection.toTheConceptId);
    const linkerConcept = await GetTheConcept(connection.typeId);

    if (ofTheConcept.id === 0 || toTheConcept.id === 0) continue;

    const sourceConcept = reverseFlag ? toTheConcept : ofTheConcept;
    const targetConcept = reverseFlag ? ofTheConcept : toTheConcept;
    const key = sourceConcept.type?.characterValue ?? "self";
    const valueType = targetConcept.type?.characterValue ?? "none";
    const value = targetConcept.characterValue;
    const isSpecial = linkerConcept.characterValue?.includes("_s_");

    // Initialize source if it doesn't exist
    if (!compositionData[sourceConcept.id]) {
      compositionData[sourceConcept.id] = {};
    }

    // Ensure key exists
    if (!compositionData[sourceConcept.id][key]) {
      compositionData[sourceConcept.id][key] = {};
    }

    // Apply value if special
    if (isSpecial) {
      if (!compositionData[targetConcept.id]) {
        compositionData[targetConcept.id] = {};
      }
      compositionData[targetConcept.id][valueType] = value;
    }
  }

  Logger.logUpdate(logData);
  return compositionData;
}


export async function FormatFunctionDataForDataV2(
  connections: Connection[],
  compositionData: Record<number, any> = {},
  reverse: number[] = []
) {
  const logData = Logger.logfunction("FormatFunctionDataForDataV2", arguments);

  for (const connection of connections) {
    const reverseFlag = reverse.includes(connection.id);

    const fromConcept = await GetTheConcept(connection.ofTheConceptId);
    const toConcept = await GetTheConcept(connection.toTheConceptId);
    const linkerConcept = await GetTheConcept(connection.typeId);

    if (fromConcept.id === 0 || toConcept.id === 0) continue;

    const source = reverseFlag ? toConcept : fromConcept;
    const target = reverseFlag ? fromConcept : toConcept;

    const key = source.type?.characterValue ?? "self";
    const valueType = target.type?.characterValue ?? "none";
    const value = target.characterValue;

    const typeCharacterRaw = linkerConcept.characterValue ?? "";
    let dataCharacter = typeCharacterRaw === "" ? removeThePrefix(valueType) : typeCharacterRaw;
    const isSpecial = dataCharacter.includes("_s_");
    const isNumeric = !isNaN(Number(dataCharacter));

    // Prepare data object
    const data = {
      id: target.id,
      data: {
        [valueType]: value,
      },
    };

    // Initialize storage
    if (!compositionData[source.id]) {
      compositionData[source.id] = {};
    }

    if (!(key in compositionData[source.id]) || typeof compositionData[source.id][key] === "string") {
      compositionData[source.id][key] = isNumeric ? [] : {};
    }

    try {
      if (isSpecial) {
        // Do nothing for _s_ types
        continue;
      }

      if (isNumeric) {
        (compositionData[source.id][key] as any[]).push(data);
      } else {
        compositionData[source.id][key][reverseFlag ? `${dataCharacter}_reverse` : dataCharacter] = data;
      }

    } catch (ex) {
      console.error("Error formatting concept data:", ex);
    }
  }

  Logger.logUpdate(logData);
  return compositionData;
}


export async function FormatFromConnectionsAlteredArrayExternalV2(
  connections: Connection[],
  compositionData: Record<number, any>,
  mainComposition: number[],
  reverse: number[] = [],
  CountDictionary: Record<number, any>
) {
  const logData = Logger.logfunction("FormatFromConnectionsAlteredArrayExternal", arguments);
  const mainData: any[] = [];

  for (const conn of connections) {
    const isReversed = reverse.includes(conn.id);
    const ofConcept = await GetTheConcept(conn.ofTheConceptId);
    const toConcept = await GetTheConcept(conn.toTheConceptId);
    const linkerConcept = await GetTheConcept(conn.typeId);

    if (ofConcept.id === 0 || toConcept.id === 0) continue;

    const source = isReversed ? toConcept : ofConcept;
    const target = isReversed ? ofConcept : toConcept;
    const sourceId = source.id;
    const targetId = target.id;

    const sourceKey = source.type?.characterValue ?? "self";
    const reverseKey = linkerConcept.characterValue + "_reverse";
    const linkerKey = linkerConcept.characterValue || target.characterValue || target.type?.characterValue || "";

    // Initialize or clean source container
    if (!compositionData[sourceId]) {
      compositionData[sourceId] = {};
    }
    if (!compositionData[sourceId][sourceKey] || typeof compositionData[sourceId][sourceKey] === "string") {
      compositionData[sourceId][sourceKey] = {};
    }

    const sourceData = compositionData[sourceId][sourceKey];
    const targetData = compositionData[targetId];
    const dataPackage = {
      id: target.id,
      data: targetData,
      created_on: conn.entryTimeStamp,
    };

    AddCount(sourceId, CountDictionary, compositionData[sourceId]);

    try {
      // Handle reverse connection
      if (isReversed) {
        if (Array.isArray(sourceData[reverseKey])) {
          sourceData[reverseKey].push(dataPackage);
        } else {
          if (reverseKey.includes("_s_")) {
            sourceData[reverseKey] = [dataPackage];
          } else {
            sourceData[reverseKey] = dataPackage;
          }
        }
      } else {
        // Normal connection
        if (Array.isArray(sourceData)) {
          sourceData.push(targetData);
        } else if (Array.isArray(sourceData[linkerKey])) {
          sourceData[linkerKey].push(dataPackage);
        } else {
          if (linkerKey.includes("_s_")) {
            sourceData[linkerKey] = [dataPackage];
          } else {
            sourceData[linkerKey] = dataPackage;
          }
        }

        AddCount(targetId, CountDictionary, dataPackage);
      }
    } catch (err) {
      console.error("Error processing connection:", err);
    }
  }

  // Assemble main data
  for (const id of mainComposition) {
    const mainConcept = await GetTheConcept(id);
    mainData.push({
      id,
      data: compositionData[id],
      created_on: mainConcept.entryTimeStamp,
    });
  }

  Logger.logUpdate(logData);
  return mainData;
}
