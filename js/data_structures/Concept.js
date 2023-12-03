export  class Concept{
    constructor(id, userId, typeId, typeUserId, categoryId, categoryUserId, referentId, referentUserId, characterValue,
            securityId, securityUserId, accessId, accessUserId, sessionId, sessionUserId){
        this.id = id;
        this.userId = userId;
        this.typeId  = typeId;
        this.typeUserId = typeUserId;
        this.categoryId = categoryId;
        this.categoryUserId = categoryUserId;
        this.referentId = referentId;
        this.referentUserId = referentUserId;
        this.characterValue = characterValue;
        this.securityId = securityId;
        this.securityUserId = securityUserId;
        this.accessId = accessId;
        this.accessUserId = accessUserId;
        this.sessionId = sessionId;
        this.sessionUserId = sessionUserId;
    }

    getType(){
        console.log(this.typeId);
    }

    









}