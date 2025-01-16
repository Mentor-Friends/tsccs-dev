import { Connection } from "../../app";

export function orderTheConnections(connections: Connection[], order: string = "DESC"){
  console.log("this is the order", order);
    if(order == "ASC"){

        connections.sort(function(x: Connection, y:Connection){
          return x.id - y.id;
        })
      }
      else{
        connections.sort(function(x: Connection, y:Connection){
          return y.id - x.id;
        })
      }
      return connections;
}