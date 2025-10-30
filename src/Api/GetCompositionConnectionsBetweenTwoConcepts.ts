import { Connection } from "../DataStructures/Connection";
import { ConnectionData } from "../DataStructures/ConnectionData";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import {
  HandleHttpError,
  HandleInternalError,
  UpdatePackageLogWithError,
} from "../Services/Common/ErrorPosting";
import { handleServiceWorkerException, Logger, sendMessage, serviceWorker } from "../app";

/**
 * Retrieves composition connections between two concepts.
 * Fetches connections linking two concepts filtered by a main key.
 *
 * @param ofConceptId - Source concept ID
 * @param toConcept - Target concept ID
 * @param mainKey - Main key to filter connections
 * @returns Array of Connection objects between the two concepts
 *
 * @example
 * const connections = await GetCompositionConnectionsBetweenTwoConcepts(123, 456, 789);
 */
export async function GetCompositionConnectionsBetweenTwoConcepts(
  ofConceptId: number,
  toConcept: number,
  mainKey: number
) {
  const logData : any = Logger.logfunction("GetCompositionConnectionsBetweenTwoConcepts", arguments) || {};
  var connectionList: Connection[] = [];
  try {
    if (serviceWorker) {
      logData.serviceWorker = true;
      try {
        const res: any = await sendMessage(
          "GetCompositionConnectionsBetweenTwoConcepts",
          { ofConceptId, toConcept, mainKey }
        );
        Logger.logUpdate(logData);  
        return res.data;
      } catch (error) {
        console.error("GetCompositionConnectionsBetweenTwoConcepts sw error: ", error);
        UpdatePackageLogWithError(logData, 'GetCompositionConnectionsBetweenTwoConcepts', error);
        handleServiceWorkerException(error);
      }
    }

    var formdata = new FormData();
    formdata.append("ofConceptId", ofConceptId.toString());
    formdata.append("mainKey", mainKey.toString());
    formdata.append("toConceptId", toConcept.toString());
    const response = await fetch(
      BaseUrl.GetCompositionConnectionBetweenTwoConceptsUrl(),
      {
        method: "POST",
        body: formdata,
        redirect: "follow",
      }
    );
    if (response.ok) {
      const result = await response.json();
      for (var i = 0; i < result.length; i++) {
        ConnectionData.AddConnection(result[i]);
        connectionList.push(result[i]);
      }
      Logger.logUpdate(logData)
    } else {
      console.log(
        "Get composition connection between two concepts",
        response.status
      );
      HandleHttpError(response);
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log(
        "Get composition connection between two concepts error message: ",
        error.message
      );
    } else {
      console.log(
        "Get composition connection between two concepts unexpected error: ",
        error
      );
    }
    HandleInternalError(
      error,
      BaseUrl.GetCompositionConnectionBetweenTwoConceptsUrl()
    );
    UpdatePackageLogWithError(logData, 'GetCompositionConnectionsBetweenTwoConcepts', error);
  }
  return connectionList;
}
