import { Concept } from "../DataStructures/Concept";
import { ReferentInfo } from "../DataStructures/ReferentInfo";
import GetTheConcept from "./GetTheConcept";

export default async function GetTheReferent(id:number, userId:number, referentId:number){
    let myref:number = referentId ?? 0;
    let referent = await GetTheConcept(referentId) as Concept;

    //let result: ReferentInfo = new ReferentInfo(referent.id, referent.userId, referent.referentId, referent.referentUserId);

    return referent;


}