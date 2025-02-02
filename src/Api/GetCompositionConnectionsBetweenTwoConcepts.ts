import { Connection } from "../DataStructures/Connection";
import { ConnectionData } from "../DataStructures/ConnectionData";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import {
  HandleHttpError,
  HandleInternalError,
} from "../Services/Common/ErrorPosting";
import { handleServiceWorkerException, Logger, sendMessage, serviceWorker } from "../app";

export async function GetCompositionConnectionsBetweenTwoConcepts(
  ofConceptId: number,
  toConcept: number,
  mainKey: number
) {
  Logger.logfunction("GetCompositionConnectionsBetweenTwoConcepts", arguments);
  var connectionList: Connection[] = [];
  try {
    if (serviceWorker) {
      try {
        const res: any = await sendMessage(
          "GetCompositionConnectionsBetweenTwoConcepts",
          { ofConceptId, toConcept, mainKey }
        );
        return res.data;
      } catch (error) {
        console.error("GetCompositionConnectionsBetweenTwoConcepts sw error: ", error);
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
  }
  return connectionList;
}
