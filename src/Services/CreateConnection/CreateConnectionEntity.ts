import { Concept, Logger } from "../../app";
import { CreateTheConnectionLocal } from "../Local/CreateTheConnectionLocal";
import { MakeTheTypeConceptLocal } from "../Local/MakeTheTypeLocal";

export async function CreateConnectionBetweenEntityLocal(
    concept1Data: Concept,
    concept2Data: Concept,
    linker: string
  ) {
    Logger.logfunction("CreateConnectionBetweenEntityLocal", [concept1Data.id, concept2Data.id, linker]);
    const userId: number = concept1Data.userId;
    const sessionInformationId = 999;
    const sessionInformationUserId = 999;
    const prefix = concept1Data.type?.characterValue;
    const linkerAdd = linker;
    const forwardLinker = prefix + "_" + linkerAdd;
    const connectionConcept = await MakeTheTypeConceptLocal(
      forwardLinker,
      sessionInformationId,
      sessionInformationUserId,
      userId
    );
    console.log(
      await CreateTheConnectionLocal(
        concept1Data.id,
        concept2Data.id,
        connectionConcept.id,
        1000
      )
    );
  }