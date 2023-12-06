import { Concept } from "../DataStructures/Concept";
import { ReferentInfo } from "../DataStructures/ReferentInfo";
import GetTheConcept from "./GetTheConcept";

export default async function GetTheReferent(id:number, userId:number, referentId:number){
    var myref:number = referentId ?? 0;
    var referent = await GetTheConcept(referentId) as Concept;

    //var result: ReferentInfo = new ReferentInfo(referent.id, referent.userId, referent.referentId, referent.referentUserId);

    return referent;


}