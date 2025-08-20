import { Concept, Connection, GetConceptBulk, GetTheConcept, Logger } from "../../app";
import { removeThePrefix } from "../Common/RegexFunction";
import { AddCount } from "./JustIdFormat";

/**
 * ## Format DATA-ID ##
 * this function takes in connections and creates a single level objects so that all the data are added to its object/ array.
 * This is then passed on further for stiching.
 * @param connections
 * @param compositionData
 * @param reverse
 * @returns
 */
export async function FormatFunctionDataForData(
  connections: Connection[],
  compositionData: any[] = [],
  reverse: number[] = []
) {
  const logData: any = Logger.logfunction("FormatFunctionDataForData", arguments);

  // Collect unique concept IDs
  const conceptIds = new Set<number>();
  for (const conn of connections) {
    conceptIds.add(conn.ofTheConceptId);
    conceptIds.add(conn.toTheConceptId);
    conceptIds.add(conn.typeId);
  }

  // Fetch all concepts in parallel
  const idList = Array.from(conceptIds);
  const concepts = await GetConceptBulk(idList);

  const conceptMap = new Map<number, any>();
  concepts.forEach((concept) => {
    conceptMap.set(concept.id, concept);
  });

  // Helper: ensure nested object exists
  const ensureKey = (obj: any, key: string | number, defaultVal: any) => {
    if (!(key in obj)) obj[key] = defaultVal;
    return obj[key];
  };

  // Process each connection
  for (const conn of connections) {
    const isReversed = reverse.includes(conn.id);

    const ofConcept = conceptMap.get(conn.ofTheConceptId);
    const toConcept = conceptMap.get(conn.toTheConceptId);
    const linkerConcept = conceptMap.get(conn.typeId);

    if (!ofConcept || !toConcept || ofConcept.id === 0 || toConcept.id === 0) continue;

    try {
      if (isReversed) {
        const key = toConcept.type?.characterValue ?? "self";
        const newData = ensureKey(compositionData, conn.toTheConceptId, {});
        ensureKey(newData, key, {});

        let mytype = ofConcept?.type?.characterValue ?? "none";
        let value = ofConcept.characterValue;
        let dataCharacter = linkerConcept.characterValue || removeThePrefix(mytype);
        const reverseCharacter = dataCharacter + "_reverse";

        if (!reverseCharacter.includes("_s_")) {
          if (typeof newData[key] === "string") newData[key] = {};
          newData[key][reverseCharacter] = {
            id: ofConcept.id,
            data: { [mytype]: value }
          };
        }

      } else {
        const key = ofConcept.type?.characterValue ?? "self";
        const newData = ensureKey(compositionData, conn.ofTheConceptId, {});
        ensureKey(newData, key, {});

        let mytype = toConcept?.type?.characterValue ?? "none";
        let value = toConcept.characterValue;
        let dataCharacter = linkerConcept.characterValue || removeThePrefix(mytype);

        const data = {
          id: toConcept.id,
          data: { [mytype]: value }
        };

        if (isNaN(Number(dataCharacter))) {
          if (!dataCharacter.includes("_s_")) {
            if (typeof newData[key] === "string") newData[key] = {};
            newData[key][dataCharacter] = data;
          }
        } else {
          if (!Array.isArray(newData[key])) newData[key] = [];
          newData[key].push(data);
        }
      }
    } catch (ex) {
      console.log("this is error", ex);
    }
  }

  Logger.logUpdate(logData);
  return compositionData;
}

/**
 * ############ Format is data-id and is used for list. ############
 * This is helpful in building a format that has multiple mainCompositions i.e. in the context of the list
 * The list format is helpful because you do not have to go over each individual query.
 * @param connections the type connections that need (external connections) to be passed
 * @param compositionData  this is a dictionary type of format that has all the build compositions {id: { actual data}}
 * @param mainComposition this is list of  ids of the main composition that builds the tree
 * @param reverse this is the list of connections ids that needs to go to the reverse direction (to---->from)
 * @returns
 */
export async function FormatFromConnectionsAlteredArrayExternal(
  connections: Connection[],
  compositionData: any[],
  newCompositionData: any,
  mainComposition: number[],
  reverse: number[] = [],
  CountDictionary: any[]
) {
  const logData: any = Logger.logfunction(
    "FormatFromConnectionsAlteredArrayExternal",
    arguments
  );

  // Collect all unique concept IDs to fetch once
const uniqueConceptIds = new Set<number>();
for (const conn of connections) {
  uniqueConceptIds.add(conn.ofTheConceptId);
  uniqueConceptIds.add(conn.toTheConceptId);
  uniqueConceptIds.add(conn.typeId);
}
for (const id of mainComposition) {
  uniqueConceptIds.add(id);
}

// Fetch all concepts in bulk using GetConceptBulk
const conceptList = await GetConceptBulk(Array.from(uniqueConceptIds));

// Create a concept cache map from fetched data
const conceptCache = new Map<number, Concept>();
for (const concept of conceptList) {
  if (concept && typeof concept.id === "number") {
    conceptCache.set(concept.id, concept);
  }
}

  let mainData: any[] = [];

  for (let i = 0; i < connections.length; i++) {
    let reverseFlag = reverse.includes(connections[i].id);

    const ofTheConcept = conceptCache.get(connections[i].ofTheConceptId)!;
    const toTheConcept = conceptCache.get(connections[i].toTheConceptId)!;

    if (reverseFlag) {
      if (ofTheConcept.id !== 0 && toTheConcept.id !== 0) {
        if (toTheConcept.id in compositionData) {
          let newData: any;
          const linkerConcept = conceptCache.get(connections[i].typeId)!;
          const key = toTheConcept.type?.characterValue ?? "self";
          let flag = false;

          if (connections[i].toTheConceptId in compositionData) {
            flag = true;
          }
          if (connections[i].toTheConceptId in compositionData) {
            newData = compositionData[connections[i].toTheConceptId];
            if (typeof newData[key] === "string") {
              newData[key] = {};
            }
          } else {
            newData = {};
            newData[key] = {};
            compositionData[connections[i].toTheConceptId] = newData;
          }
          AddCount(toTheConcept.id, CountDictionary, newData);
          try {
            const isComp = compositionData[connections[i].ofTheConceptId];
            if (isComp) {
              const data = {
                id: ofTheConcept.id,
                data: compositionData[connections[i].ofTheConceptId],
                created_on: connections[i].entryTimeStamp,
              };
              const reverseCharater = linkerConcept.characterValue + "_reverse";
              if (Array.isArray(newData[key][reverseCharater])) {
                newData[key][reverseCharater].push(data);
              } else {
                if (reverseCharater.includes("_s_")) {
                  newData[key][reverseCharater] = [];
                  newData[key][reverseCharater].push(data);
                } else {
                  newData[key][reverseCharater] = data;
                }
              }
            }
          } catch (ex) {
            console.log("this is error", ex);
          }
        }
      }
    }

    if (ofTheConcept.id !== 0 && toTheConcept.id !== 0) {
      if (ofTheConcept.id in compositionData) {
        let newData: any;
        const linkerConcept = conceptCache.get(connections[i].typeId)!;
        const key = ofTheConcept.type?.characterValue ?? "self";
        let flag = false;
        if (connections[i].toTheConceptId in compositionData) {
          flag = true;
        }
        if (connections[i].ofTheConceptId in compositionData) {
          newData = compositionData[connections[i].ofTheConceptId];
          if (typeof newData[key] === "string") {
            newData[key] = {};
          }
        } else {
          newData = {};
          newData[key] = {};
          compositionData[connections[i].ofTheConceptId] = newData;
        }

        AddCount(ofTheConcept.id, CountDictionary, newData);

        let isComp = true;
        let linkerConceptValue = linkerConcept.characterValue;
        if (linkerConceptValue === "") {
          linkerConceptValue = toTheConcept.characterValue;
          isComp = true;
        }
        if (linkerConceptValue === "") {
          linkerConceptValue = toTheConcept?.type?.characterValue || "";
        }

        try {
          const mytype = toTheConcept?.type?.characterValue ?? "none";
          const myData = compositionData[connections[i].toTheConceptId];
          if (myData) {
            const data = {
              id: toTheConcept.id,
              data: compositionData[connections[i].toTheConceptId],
              created_on: connections[i].entryTimeStamp,
            };
            if (Array.isArray(newData[key])) {
              newData[key].push(myData);
            } else {
              if (Array.isArray(newData[key][linkerConceptValue])) {
                newData[key][linkerConcept.characterValue].push(data);
              } else {
                if (linkerConceptValue.includes("_s_")) {
                  newData[key][linkerConceptValue] = [];
                  newData[key][linkerConceptValue].push(data);
                } else {
                  newData[key][linkerConceptValue] = data;
                }
              }
            }
            AddCount(toTheConcept.id, CountDictionary, data);
          }
        } catch (ex) {
          console.log("this is error", ex);
        }
      }
    }
  }

  // === Final output generation ===
  for (let i = 0; i < mainComposition.length; i++) {
    const id = mainComposition[i];
    const mainConcept = conceptCache.get(id);
    const data = compositionData[id] ?? {}; 
    const mymainData = {
      id: id,
      data: data,
      created_on: mainConcept?.entryTimeStamp,
    };
    mainData.push(mymainData);
  }

  Logger.logUpdate(logData);
  return mainData;
}

/**
 * ## Format DATA-ID ##
 * this function takes in connections and creates a single level objects so that all the data are added to its object/ array.
 * This is then passed on further for stiching.
 * @param connections
 * @param compositionData
 * @param reverse
 * @returns
 */
export async function FormatFunctionData(
  connections: Connection[],
  compositionData: any[],
  reverse: number[] = []
) {
  const logData: any = Logger.logfunction("FormatFunctionData", arguments);

  // Step 1: Collect all concept IDs used
  const conceptIds = new Set<number>();
  for (const conn of connections) {
    conceptIds.add(conn.ofTheConceptId);
    conceptIds.add(conn.toTheConceptId);
    conceptIds.add(conn.typeId);
  }

  // Step 2: Fetch all required concepts in parallel
  const conceptIdArray = Array.from(conceptIds);
  const conceptResults = await GetConceptBulk(conceptIdArray);

  // Step 3: Create a concept lookup map
  const conceptMap = new Map<number, any>();
  conceptIdArray.forEach((id, index) => {
    conceptMap.set(id, conceptResults[index]);
  });

  // Step 4: Process connections
  for (const conn of connections) {
    const isReversed = reverse.includes(conn.id);
    const ofConcept = conceptMap.get(conn.ofTheConceptId);
    const toConcept = conceptMap.get(conn.toTheConceptId);
    const linkerConcept = conceptMap.get(conn.typeId);

    if (!ofConcept || !toConcept || ofConcept.id === 0 || toConcept.id === 0) continue;

    try {
      if (isReversed) {
        const key = toConcept.type?.characterValue ?? "self";
        const newData = compositionData[conn.toTheConceptId] || {};
        newData[key] = newData[key] || {};
        compositionData[conn.toTheConceptId] = newData;

        const mytype = ofConcept?.type?.characterValue ?? "none";
        const value = ofConcept.characterValue;
        const reverseChar = linkerConcept.characterValue + "_reverse";

        if (reverseChar.includes("_s_")) {
          compositionData[ofConcept.id] = compositionData[ofConcept.id] || {};
          compositionData[ofConcept.id][mytype] = value;
        }

        compositionData[toConcept.id] = {};
      } else {
        const key = ofConcept.type?.characterValue ?? "self";
        const newData = compositionData[conn.ofTheConceptId] || {};
        newData[key] = newData[key] || {};
        compositionData[conn.ofTheConceptId] = newData;

        const mytype = toConcept?.type?.characterValue ?? "none";
        const value = toConcept.characterValue;

        if (linkerConcept.characterValue.includes("_s_")) {
          compositionData[toConcept.id] = compositionData[toConcept.id] || {};
          compositionData[toConcept.id][mytype] = value;
        }

        compositionData[ofConcept.id] = {};
      }
    } catch (err) {
      console.log("this is error", err);
    }
  }

  Logger.logUpdate(logData);
  return compositionData;
}
