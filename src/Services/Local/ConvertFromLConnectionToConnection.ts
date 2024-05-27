import { Connection } from "../../DataStructures/Connection";
import { LConnection } from "../../DataStructures/Local/LConnection";

export function ConvertFromLConnectionToConnection(lconnection: LConnection){
    let connection: Connection = new Connection(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
    connection.ofTheConceptId = lconnection.ofTheConceptId;
    connection.OfTheConceptId = lconnection.OfTheConceptId;
    connection.toTheConceptId = lconnection.toTheConceptId;
    connection.ToTheConceptId = lconnection.ToTheConceptId;
    connection.typeId = lconnection.typeId;
    connection.orderId = lconnection.orderId;
    connection.id = lconnection.id;
    return connection;
}