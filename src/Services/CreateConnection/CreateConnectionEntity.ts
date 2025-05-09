import { Concept, handleServiceWorkerException, InnerActions, Logger, sendMessage, serviceWorker } from "../../app";
import { CreateTheConnectionLocal } from "../Local/CreateTheConnectionLocal";
import { MakeTheTypeConceptLocal } from "../Local/MakeTheTypeLocal";

export async function CreateConnectionBetweenEntityLocal(
    concept1Data: Concept,
    concept2Data: Concept,
    linker: string,
    actions: InnerActions = {concepts: [], connections: []}
  ) {
    const logData : any = Logger.logfunction("CreateConnectionBetweenEntityLocal", [concept1Data.id, concept2Data.id, linker]);
    
    if (serviceWorker) {
      try {
        const res: any = await sendMessage('CreateConnectionBetweenEntityLocal', { concept1Data, concept2Data, linker, actions })
        if (res?.actions?.concepts?.length) actions.concepts = JSON.parse(JSON.stringify(res.actions.concepts));
        if (res?.actions?.connections?.length) actions.connections = JSON.parse(JSON.stringify(res.actions.connections));
        return res.data
      } catch (error) {
        console.log('CreateConnectionBetweenEntityLocal error sw: ', error)
        handleServiceWorkerException(error)
      }
    }
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
      userId,
      actions
    );
    console.log(
      await CreateTheConnectionLocal(
        concept1Data.id,
        concept2Data.id,
        connectionConcept.id,
        1000,
        undefined,
        undefined,
        actions
      )
    );
    Logger.logUpdate(logData);
  }