import { Concept } from "../DataStructures/Concept";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";

type ConceptResponse = {
  id?: number;
  userId?: number;
  typeId?: number;
  categoryId?: number;
  referentId?: number | null;
  characterValue?: string;
  accessId?: number;
  typeCharacter?: string;
  isComposition?: boolean;
  ghostId?: number;
  entryTimeStamp?: Date | string;
  updatedTimeStamp?: Date | string;
};

function hasKey(data: object, key: keyof ConceptResponse) {
  return Object.prototype.hasOwnProperty.call(data, key);
}

function createDefaultInstanceConcept(): Concept {
  const now = new Date();
  return new Concept(0, 0, 0, 0, 0, "", 0, false, now, now, "");
}

function parseConcept(data: unknown): Concept {
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    return createDefaultInstanceConcept();
  }

  try {
    const conceptData = data as ConceptResponse;
    const defaultConcept = createDefaultInstanceConcept();
    const concept = new Concept(
      conceptData.id ?? 0,
      conceptData.userId ?? 0,
      conceptData.typeId ?? 0,
      conceptData.categoryId ?? 0,
      hasKey(conceptData, "referentId") ? conceptData.referentId ?? null : 0,
      conceptData.characterValue ?? "",
      conceptData.accessId ?? 4,
      false,
      conceptData.entryTimeStamp ?? defaultConcept.entryTimeStamp,
      conceptData.updatedTimeStamp ?? defaultConcept.updatedTimeStamp,
      ""
    );

    concept.typeCharacter = conceptData.typeCharacter ?? "";
    concept.isComposition = conceptData.isComposition ?? false;

    if (hasKey(conceptData, "ghostId")) {
      concept.ghostId = conceptData.ghostId as number;
    }

    return concept;
  } catch (error) {
    console.log("Error parsing concept:", error);
    return createDefaultInstanceConcept();
  }
}

/**
 * Fetches an instance concept from the backend API by its character value and type.
 *
 * @param characterValue - The character value of the concept, such as a URL or identifier.
 * @param type - The type string that qualifies the character value, such as "the_source_url".
 * @returns The matching Concept object, or a default empty Concept if not found.
 */
export async function GetInstanceConceptByCharacterType(
  characterValue: string,
  type: string
): Promise<Concept> {
  let result = createDefaultInstanceConcept();

  if (!characterValue || !type) {
    return result;
  }

  try {
    const response = await fetch(BaseUrl.GetInstanceConceptByCharacterTypeUrl(), {
      method: "POST",
      headers: GetRequestHeader("application/json"),
      body: JSON.stringify({
        characterValue,
        type,
      }),
    });

    if (response.status === 200) {
      const jsonData = await response.json();
      result = parseConcept(jsonData);
    } else {
      console.log(`GetInstanceConceptByCharacterType error: HTTP ${response.status}`);
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : error;
    if (error instanceof TypeError) {
      console.log(`GetInstanceConceptByCharacterType network error: ${message}`);
    } else {
      console.log(`GetInstanceConceptByCharacterType unexpected error: ${message}`);
    }
  }

  return result;
}
