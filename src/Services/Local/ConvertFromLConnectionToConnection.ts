import { Connection } from "../../DataStructures/Connection";

export function ConvertFromLConnectionToConnection(lconnection: Connection){
    let connection: Connection = new Connection(0,0,0,0,0,0,0);
    connection.ofTheConceptId = lconnection.ofTheConceptId;
    connection.toTheConceptId = lconnection.toTheConceptId;
    connection.typeId = lconnection.typeId;
    connection.orderId = lconnection.orderId;
    connection.id = lconnection.id;
    return connection;
}