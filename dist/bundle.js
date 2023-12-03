(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("tsccs", [], factory);
	else if(typeof exports === 'object')
		exports["tsccs"] = factory();
	else
		root["tsccs"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Api/Create/CreateTheCharacter.ts":
/*!**********************************************!*\
  !*** ./src/Api/Create/CreateTheCharacter.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateTheCharacter = void 0;
const ApiConstants_1 = __webpack_require__(/*! ../../Constants/ApiConstants */ "./src/Constants/ApiConstants.ts");
function CreateTheCharacter(characterData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log(characterData);
            const response = yield fetch(ApiConstants_1.CreateTheCharacterDataUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(characterData),
            });
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
            const resultString = yield response.json();
            const result = resultString;
            return result;
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
                return error.message;
            }
            else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    });
}
exports.CreateTheCharacter = CreateTheCharacter;


/***/ }),

/***/ "./src/Api/Create/CreateTheConceptApi.ts":
/*!***********************************************!*\
  !*** ./src/Api/Create/CreateTheConceptApi.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateTheConceptApi = void 0;
const ApiConstants_1 = __webpack_require__(/*! ../../Constants/ApiConstants */ "./src/Constants/ApiConstants.ts");
function CreateTheConceptApi(conceptData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(ApiConstants_1.CreateTheConceptUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(conceptData),
            });
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
            const resultString = yield response.json();
            const result = resultString;
            return result;
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
                return error.message;
            }
            else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    });
}
exports.CreateTheConceptApi = CreateTheConceptApi;


/***/ }),

/***/ "./src/Api/Create/CreateTheConnectionApi.ts":
/*!**************************************************!*\
  !*** ./src/Api/Create/CreateTheConnectionApi.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateTheConnectionApi = void 0;
const ApiConstants_1 = __webpack_require__(/*! ../../Constants/ApiConstants */ "./src/Constants/ApiConstants.ts");
function CreateTheConnectionApi(connectionData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var jsonData = JSON.stringify(connectionData);
            const response = yield fetch(ApiConstants_1.CreateTheConnectionUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: jsonData
            });
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
            const result = yield response.json();
            return result;
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
                return error.message;
            }
            else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    });
}
exports.CreateTheConnectionApi = CreateTheConnectionApi;


/***/ }),

/***/ "./src/Api/Create/CreateTheTextData.ts":
/*!*********************************************!*\
  !*** ./src/Api/Create/CreateTheTextData.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateTextData = void 0;
const ApiConstants_1 = __webpack_require__(/*! ../../Constants/ApiConstants */ "./src/Constants/ApiConstants.ts");
function CreateTextData(textData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(ApiConstants_1.CreateTheTextDataUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(textData),
            });
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
            const resultString = yield response.json();
            const result = resultString;
            return result;
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
                return error.message;
            }
            else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    });
}
exports.CreateTextData = CreateTextData;


/***/ }),

/***/ "./src/Api/GetAllConceptsByType.ts":
/*!*****************************************!*\
  !*** ./src/Api/GetAllConceptsByType.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetAllConceptsByType = void 0;
const ConceptData_1 = __webpack_require__(/*! ./../DataStructures/ConceptData */ "./src/DataStructures/ConceptData.ts");
const ApiConstants_1 = __webpack_require__(/*! ./../Constants/ApiConstants */ "./src/Constants/ApiConstants.ts");
function GetAllConceptsByType(type, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var urlencoded = new URLSearchParams();
            urlencoded.append("type", type);
            urlencoded.append("user_id", "10267");
            const response = yield fetch(ApiConstants_1.GetAllConceptsByTypeUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: urlencoded
            });
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
            const result = yield response.json();
            for (var i = 0; i < result.length; i++) {
                ConceptData_1.ConceptsData.AddConcept(result[i]);
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
                return error.message;
            }
            else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    });
}
exports.GetAllConceptsByType = GetAllConceptsByType;


/***/ }),

/***/ "./src/Api/GetAllConnectionsOfComposition.ts":
/*!***************************************************!*\
  !*** ./src/Api/GetAllConnectionsOfComposition.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetAllConnectionsOfComposition = void 0;
const ConnectionData_1 = __webpack_require__(/*! ../DataStructures/ConnectionData */ "./src/DataStructures/ConnectionData.ts");
const ApiConstants_1 = __webpack_require__(/*! ./../Constants/ApiConstants */ "./src/Constants/ApiConstants.ts");
function GetAllConnectionsOfComposition(composition_id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(ApiConstants_1.GetAllConnectionsOfCompositionUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `composition_id=${composition_id}`
            });
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
            const result = yield response.json();
            console.log(result);
            for (var i = 0; i < result.length; i++) {
                ConnectionData_1.ConnectionData.AddConnection(result[i]);
                ConnectionData_1.ConnectionData.AddToDictionary(result[i]);
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
                return error.message;
            }
            else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    });
}
exports.GetAllConnectionsOfComposition = GetAllConnectionsOfComposition;


/***/ }),

/***/ "./src/Api/GetConcept.ts":
/*!*******************************!*\
  !*** ./src/Api/GetConcept.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetConcept = void 0;
const ConceptData_1 = __webpack_require__(/*! ./../DataStructures/ConceptData */ "./src/DataStructures/ConceptData.ts");
const ApiConstants_1 = __webpack_require__(/*! ./../Constants/ApiConstants */ "./src/Constants/ApiConstants.ts");
function GetConcept(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var Concept = ConceptData_1.ConceptsData.GetConcept(id);
            if (Concept != null) {
                return Concept;
            }
            else {
                const response = yield fetch(ApiConstants_1.GetConceptUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: `id=${id}`
                });
                if (!response.ok) {
                    throw new Error(`Error! status: ${response.status}`);
                }
                const result = (yield response.json());
                ConceptData_1.ConceptsData.AddConcept(result);
                return result;
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
                return error.message;
            }
            else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    });
}
exports.GetConcept = GetConcept;


/***/ }),

/***/ "./src/Api/GetConceptByCharacterAndType.ts":
/*!*************************************************!*\
  !*** ./src/Api/GetConceptByCharacterAndType.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetConceptByCharacterAndType = void 0;
const ConceptData_1 = __webpack_require__(/*! ./../DataStructures/ConceptData */ "./src/DataStructures/ConceptData.ts");
const ApiConstants_1 = __webpack_require__(/*! ./../Constants/ApiConstants */ "./src/Constants/ApiConstants.ts");
function GetConceptByCharacterAndType(characterValue, typeId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var json = {
                'character_value': characterValue,
                'type_id': typeId
            };
            var toSendJson = JSON.stringify(json);
            const response = yield fetch(ApiConstants_1.GetConceptByCharacterAndTypeUrl, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: toSendJson,
            });
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
            const result = yield response.json();
            ConceptData_1.ConceptsData.AddConcept(result);
            return result;
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
                return error.message;
            }
            else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    });
}
exports.GetConceptByCharacterAndType = GetConceptByCharacterAndType;


/***/ }),

/***/ "./src/Api/GetConceptByCharacterValue.ts":
/*!***********************************************!*\
  !*** ./src/Api/GetConceptByCharacterValue.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetConceptByCharacterValue = void 0;
const ConceptData_1 = __webpack_require__(/*! ./../DataStructures/ConceptData */ "./src/DataStructures/ConceptData.ts");
const ApiConstants_1 = __webpack_require__(/*! ./../Constants/ApiConstants */ "./src/Constants/ApiConstants.ts");
function GetConceptByCharacterValue(characterValue) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(ApiConstants_1.GetConceptByCharacterValueUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `character_value=${characterValue}`
            });
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
            const result = yield response.json();
            ConceptData_1.ConceptsData.AddConcept(result);
            return result;
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
                return error.message;
            }
            else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    });
}
exports.GetConceptByCharacterValue = GetConceptByCharacterValue;


/***/ }),

/***/ "./src/Api/GetReservedIds.ts":
/*!***********************************!*\
  !*** ./src/Api/GetReservedIds.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetReservedIds = void 0;
const ApiConstants_1 = __webpack_require__(/*! ./../Constants/ApiConstants */ "./src/Constants/ApiConstants.ts");
const ReservedIds_1 = __webpack_require__(/*! ../DataStructures/ReservedIds */ "./src/DataStructures/ReservedIds.ts");
function GetReservedIds() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(ApiConstants_1.GetReservedIdUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            });
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
            const result = yield response.json();
            for (var i = 0; i < result.length; i++) {
                ReservedIds_1.ReservedIds.AddId(result[i]);
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
                return error.message;
            }
            else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    });
}
exports.GetReservedIds = GetReservedIds;


/***/ }),

/***/ "./src/Constants/ApiConstants.ts":
/*!***************************************!*\
  !*** ./src/Constants/ApiConstants.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateTheConnectionUrl = exports.CreateTheConceptUrl = exports.CreateTheCharacterDataUrl = exports.CreateTheTextDataUrl = exports.GetReservedIdUrl = exports.GetAllConceptsByTypeUrl = exports.GetCharacterByCharacterUrl = exports.GetConceptByCharacterAndTypeUrl = exports.GetConceptByCharacterValueUrl = exports.GetAllConnectionsOfCompositionUrl = exports.GetAllConnectionsOfUserUrl = exports.GetAllConceptsOfUserUrl = exports.GetConceptUrl = exports.BASE_URL = void 0;
exports.BASE_URL = "https://alpha.freeschema.com";
exports.GetConceptUrl = exports.BASE_URL + '/api/getConcept';
exports.GetAllConceptsOfUserUrl = exports.BASE_URL + '/api/get_all_concepts_of_user';
exports.GetAllConnectionsOfUserUrl = exports.BASE_URL + '/api/get_all_connections_of_user';
exports.GetAllConnectionsOfCompositionUrl = exports.BASE_URL + '/api/get_all_connections_of_composition';
exports.GetConceptByCharacterValueUrl = exports.BASE_URL + '/api/get_concept_by_character_value';
exports.GetConceptByCharacterAndTypeUrl = exports.BASE_URL + '/api/get_concept_by_character_and_type';
exports.GetCharacterByCharacterUrl = exports.BASE_URL + '/api/get_character_by_character';
exports.GetAllConceptsByTypeUrl = exports.BASE_URL + '/api/get_all_concepts_by_type';
//////////////////////////////////////////////////////////////////////////////
//////////////// API For Reserved Ids ///////////////////////////////////////
exports.GetReservedIdUrl = exports.BASE_URL + '/api/get_reserved_ids';
/////////////////////////////////////////////////////////////////////////////
////////////////API For Creating Data //////////////////////////////////////
exports.CreateTheTextDataUrl = exports.BASE_URL + '/api/create_text_data';
exports.CreateTheCharacterDataUrl = exports.BASE_URL + '/api/create_character_data';
exports.CreateTheConceptUrl = exports.BASE_URL + '/api/create_the_concept';
exports.CreateTheConnectionUrl = exports.BASE_URL + '/api/create_the_connection';


/***/ }),

/***/ "./src/DataStructures/Concept.ts":
/*!***************************************!*\
  !*** ./src/DataStructures/Concept.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Concept = void 0;
const ConceptData_1 = __webpack_require__(/*! ./ConceptData */ "./src/DataStructures/ConceptData.ts");
class Concept {
    constructor(id, userId, typeId, typeUserId, categoryId, categoryUserId, referentId, referentUserId, characterValue, securityId, securityUserId, accessId, accessUserId, sessionId, sessionUserId, isNew = false) {
        this.id = id;
        this.userId = userId;
        this.typeId = typeId;
        this.typeUserId = typeUserId;
        this.categoryId = categoryId;
        this.categoryUserId = categoryUserId;
        this.referentId = referentId;
        this.referent = referentId;
        this.referentUserId = referentUserId;
        this.characterValue = characterValue;
        this.securityId = securityId;
        this.securityUserId = securityUserId;
        this.accessId = accessId;
        this.accessUserId = accessUserId;
        this.sessionId = sessionId;
        this.sessionUserId = sessionUserId;
        this.x = 0;
        this.y = 0;
        this.type = null;
        this.isNew = isNew;
        ConceptData_1.ConceptsData.AddConcept(this);
    }
    getType() {
        console.log(this.typeId);
    }
}
exports.Concept = Concept;


/***/ }),

/***/ "./src/DataStructures/ConceptData.ts":
/*!*******************************************!*\
  !*** ./src/DataStructures/ConceptData.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConceptsData = void 0;
class ConceptsData {
    constructor() {
        this.name = "conceptsArray";
    }
    static CheckContains(concept) {
        var contains = false;
        for (var i = 0; i < this.conceptsArray.length; i++) {
            if (this.conceptsArray[i].id == concept.id) {
                contains = true;
            }
        }
        return contains;
    }
    static AddConcept(concept) {
        var contains = this.CheckContains(concept);
        this.conceptDictionary[concept.id] = concept;
        if (contains) {
            this.RemoveConcept(concept);
        }
        this.conceptsArray.push(concept);
    }
    static RemoveConcept(concept) {
        for (var i = 0; i < this.conceptsArray.length; i++) {
            if (this.conceptsArray[i].id == concept.id) {
                this.conceptsArray.splice(i, 1);
            }
        }
    }
    static GetConcept(id) {
        var myConcept;
        myConcept = null;
        for (var i = 0; i < this.conceptsArray.length; i++) {
            if (this.conceptsArray[i].id == id) {
                myConcept = this.conceptsArray[i];
            }
        }
        return myConcept;
    }
    static GetConceptByCharacter(characterValue) {
        var myConcept;
        myConcept = null;
        for (var i = 0; i < this.conceptsArray.length; i++) {
            if (this.conceptsArray[i].characterValue == characterValue) {
                myConcept = this.conceptsArray[i];
            }
        }
        return myConcept;
    }
    static GetConceptsByTypeId(typeId) {
        var myConcept;
        var ConceptList = [];
        myConcept = null;
        for (var i = 0; i < this.conceptsArray.length; i++) {
            if (this.conceptsArray[i].typeId == typeId) {
                ConceptList.push(this.conceptsArray[i]);
            }
        }
        return ConceptList;
    }
    getName() {
        return this.name;
    }
}
exports.ConceptsData = ConceptsData;
ConceptsData.conceptsArray = [];
ConceptsData.conceptDictionary = [];


/***/ }),

/***/ "./src/DataStructures/Connection.ts":
/*!******************************************!*\
  !*** ./src/DataStructures/Connection.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Connection = void 0;
class Connection {
    constructor(id = 0, ofTheConceptId, toTheConceptId, ofTheConceptUserId, toTheConceptUserId, userId, typeId, typeUserId, orderId, orderUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId) {
        this.id = id;
        this.OfTheConceptId = ofTheConceptId;
        this.ToTheConceptId = toTheConceptId;
        this.ofTheConceptId = ofTheConceptId;
        this.toTheConceptId = toTheConceptId;
        this.OfTheConceptUserId = ofTheConceptUserId;
        this.ToTheConceptUserId = toTheConceptUserId;
        this.userId = userId;
        this.typeId = typeId;
        this.typeUserId = typeUserId;
        this.orderId = orderId;
        this.orderUserId = orderUserId;
        this.securityId = securityId;
        this.securityUserId = securityUserId;
        this.accessId = accessId;
        this.accessUserId = accessUserId;
        this.sessionInformationId = sessionInformationId;
        this.sessionInformationUserId = sessionInformationUserId;
    }
}
exports.Connection = Connection;


/***/ }),

/***/ "./src/DataStructures/ConnectionData.ts":
/*!**********************************************!*\
  !*** ./src/DataStructures/ConnectionData.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConnectionData = void 0;
class ConnectionData {
    constructor() {
        this.name = "Connection Array";
    }
    static CheckContains(connection) {
        var contains = false;
        for (var i = 0; i < this.connectionArray.length; i++) {
            if (this.connectionArray[i].id == connection.id) {
                contains = true;
            }
        }
        return contains;
    }
    static AddConnection(connection) {
        var contains = this.CheckContains(connection);
        if (!contains) {
            this.connectionArray.push(connection);
        }
    }
    static AddToDictionary(connection) {
        this.connectionDictionary[connection.id] = connection;
    }
    static RemoveConnection(connection) {
        for (var i = 0; i < this.connectionArray.length; i++) {
            if (this.connectionArray[i].id == connection.id) {
                this.connectionArray.splice(i, 1);
            }
        }
    }
    static GetConnection(id) {
        var myConcept;
        myConcept = null;
        for (var i = 0; i < this.connectionArray.length; i++) {
            if (this.connectionArray[i].id == id) {
                myConcept = this.connectionArray[i];
            }
        }
        return myConcept;
    }
    static GetConnectionsOfComposition(id) {
        var connectionList = [];
        for (var i = 0; i < this.connectionArray.length; i++) {
            if (this.connectionArray[i].typeId == id) {
                connectionList.push(this.connectionArray[i]);
            }
        }
        return connectionList;
    }
    getName() {
        return this.name;
    }
}
exports.ConnectionData = ConnectionData;
ConnectionData.connectionArray = [];
ConnectionData.connectionDictionary = [];


/***/ }),

/***/ "./src/DataStructures/ReservedIds.ts":
/*!*******************************************!*\
  !*** ./src/DataStructures/ReservedIds.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReservedIds = void 0;
const GetReservedIds_1 = __webpack_require__(/*! ../Api/GetReservedIds */ "./src/Api/GetReservedIds.ts");
class ReservedIds {
    static getId() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(this.ids.length);
            if (this.ids.length < 5) {
                var ids = yield (0, GetReservedIds_1.GetReservedIds)();
            }
            var id = this.ids[0];
            this.ids.shift();
            return id;
        });
    }
    static AddId(id) {
        if (!this.ids.includes(id)) {
            this.ids.push(id);
        }
    }
}
exports.ReservedIds = ReservedIds;
ReservedIds.ids = [];


/***/ }),

/***/ "./src/DataStructures/SyncData.ts":
/*!****************************************!*\
  !*** ./src/DataStructures/SyncData.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SyncData = void 0;
const CreateTheConceptApi_1 = __webpack_require__(/*! ../Api/Create/CreateTheConceptApi */ "./src/Api/Create/CreateTheConceptApi.ts");
const CreateTheConnectionApi_1 = __webpack_require__(/*! ../Api/Create/CreateTheConnectionApi */ "./src/Api/Create/CreateTheConnectionApi.ts");
const ConceptData_1 = __webpack_require__(/*! ./ConceptData */ "./src/DataStructures/ConceptData.ts");
class SyncData {
    static CheckContains(concept) {
        var contains = false;
        for (var i = 0; i < this.conceptsSyncArray.length; i++) {
            if (this.conceptsSyncArray[i].id == concept.id) {
                contains = true;
            }
        }
        return contains;
    }
    static CheckContainsConnection(connection) {
        var contains = false;
        for (var i = 0; i < this.connectionSyncArray.length; i++) {
            if (this.connectionSyncArray[i].id == connection.id) {
                contains = true;
            }
        }
        return contains;
    }
    static AddConcept(concept) {
        var contains = false;
        ConceptData_1.ConceptsData.AddConcept(concept);
        if (!contains) {
            this.conceptsSyncArray.push(concept);
        }
    }
    static RemoveConcept(concept) {
        for (var i = 0; i < this.conceptsSyncArray.length; i++) {
            if (this.conceptsSyncArray[i].id == concept.id) {
                this.conceptsSyncArray.splice(i, 1);
            }
        }
    }
    static AddConnection(connection) {
        console.log(this.connectionSyncArray);
        this.connectionSyncArray.push(connection);
    }
    static RemoveConnection(connection) {
        for (var i = 0; i < this.connectionSyncArray.length; i++) {
            if (this.connectionSyncArray[i].id == connection.id) {
                this.connectionSyncArray.splice(i, 1);
            }
        }
    }
    static SyncDataOnline() {
        if (this.conceptsSyncArray.length > 0) {
            (0, CreateTheConceptApi_1.CreateTheConceptApi)(this.conceptsSyncArray);
            this.conceptsSyncArray = [];
        }
        if (this.connectionSyncArray.length > 0) {
            (0, CreateTheConnectionApi_1.CreateTheConnectionApi)(this.connectionSyncArray);
            this.connectionSyncArray = [];
        }
        return "done";
    }
}
exports.SyncData = SyncData;
SyncData.conceptsSyncArray = [];
SyncData.connectionSyncArray = [];


/***/ }),

/***/ "./src/DataStructures/TheCharacter.ts":
/*!********************************************!*\
  !*** ./src/DataStructures/TheCharacter.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TheCharacter = void 0;
class TheCharacter {
    constructor(userId, data, securityId, securityUserId, accessId, accessUserId, sessionId, sessionUserId, entryTimestamp, isNew) {
        this.id = 0;
        this.isNew = false;
        this.userId = userId;
        this.data = data;
        this.securityId = securityId;
        this.securityUserId = securityUserId;
        this.accessId = accessId;
        this.accessUserId = accessUserId;
        this.sessionId = sessionId;
        this.sessionUserId = sessionUserId;
        this.isNew = isNew;
    }
}
exports.TheCharacter = TheCharacter;


/***/ }),

/***/ "./src/DataStructures/TheTexts.ts":
/*!****************************************!*\
  !*** ./src/DataStructures/TheTexts.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TheTexts = void 0;
class TheTexts {
    constructor(userId, data, securityId, securityUserId, accessId, accessUserId, sessionId, sessionUserId, entryTimestamp, isNew) {
        this.id = 0;
        this.userId = userId;
        this.data = data;
        this.securityId = securityId;
        this.securityUserId = securityUserId;
        this.accessId = accessId;
        this.accessUserId = accessUserId;
        this.sessionId = sessionId;
        this.sessionUserId = sessionUserId;
        this.entryTimestamp = entryTimestamp;
        this.isNew = isNew;
    }
}
exports.TheTexts = TheTexts;


/***/ }),

/***/ "./src/Services/CreateConnectionBetweenTwoConcepts.ts":
/*!************************************************************!*\
  !*** ./src/Services/CreateConnectionBetweenTwoConcepts.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateConnectionBetweenTwoConcepts = void 0;
const Connection_1 = __webpack_require__(/*! ../DataStructures/Connection */ "./src/DataStructures/Connection.ts");
const SyncData_1 = __webpack_require__(/*! ../DataStructures/SyncData */ "./src/DataStructures/SyncData.ts");
const MakeTheInstanceConcept_1 = __importDefault(__webpack_require__(/*! ./MakeTheInstanceConcept */ "./src/Services/MakeTheInstanceConcept.ts"));
function CreateConnectionBetweenTwoConcepts(concept1Data, concept2Data, linker, both = false) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        var userId = concept1Data.userId;
        var orderUserId = userId;
        var securityId = 999;
        var securityUserId = userId;
        var accessId = 4;
        var accessUserId = userId;
        var sessionInformationId = 999;
        var sessionInformationUserId = 999;
        if (both) {
            let prefix1 = ((_a = concept1Data.type) === null || _a === void 0 ? void 0 : _a.characterValue) + "_s";
            let linkerAdd1 = linker + "_by";
            let backwardLinker = prefix1 + "_" + linkerAdd1;
            var connectionConcept = yield (0, MakeTheInstanceConcept_1.default)("connection", backwardLinker, false, 999, 999, 999);
            var newConnection = new Connection_1.Connection(0, concept1Data.id, concept2Data.id, concept1Data.userId, concept2Data.userId, concept1Data.userId, connectionConcept.id, connectionConcept.userId, 3, userId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId);
            SyncData_1.SyncData.AddConnection(newConnection);
        }
        let prefix = ((_b = concept1Data.type) === null || _b === void 0 ? void 0 : _b.characterValue) + "_s";
        let linkerAdd = linker + "_s";
        let forwardLinker = prefix + "_" + linkerAdd;
        console.log("creating connection between two concepts");
        console.log(concept1Data);
        console.log(concept2Data);
        var connectionConcept = yield (0, MakeTheInstanceConcept_1.default)("connection", forwardLinker, false, 999, 999, 999);
        var newConnection = new Connection_1.Connection(0, concept1Data.id, concept2Data.id, concept1Data.userId, concept2Data.userId, concept1Data.userId, connectionConcept.id, connectionConcept.userId, 3, userId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId);
        SyncData_1.SyncData.AddConnection(newConnection);
    });
}
exports.CreateConnectionBetweenTwoConcepts = CreateConnectionBetweenTwoConcepts;


/***/ }),

/***/ "./src/Services/CreateTheComposition.ts":
/*!**********************************************!*\
  !*** ./src/Services/CreateTheComposition.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const CreateTheConnection_1 = __importDefault(__webpack_require__(/*! ./CreateTheConnection */ "./src/Services/CreateTheConnection.ts"));
const MakeTheInstanceConcept_1 = __importDefault(__webpack_require__(/*! ./MakeTheInstanceConcept */ "./src/Services/MakeTheInstanceConcept.ts"));
function CreateTheComposition(json, ofTheConceptId = null, ofTheConceptUserId = null, mainKey = null, userId = null, accessId = null, sessionInformationId = null) {
    return __awaiter(this, void 0, void 0, function* () {
        var localUserId = userId !== null && userId !== void 0 ? userId : 10267;
        var localAccessId = accessId !== null && accessId !== void 0 ? accessId : 10267;
        var localSessionId = sessionInformationId !== null && sessionInformationId !== void 0 ? sessionInformationId : 10267;
        var MainKeyLocal = mainKey !== null && mainKey !== void 0 ? mainKey : 0;
        var MainConcept;
        for (const key in json) {
            if (typeof json[key] != 'string') {
                if (ofTheConceptId == null && ofTheConceptUserId == null) {
                    var localMainKey = MainKeyLocal;
                    let conceptString = yield (0, MakeTheInstanceConcept_1.default)(key, "", true, localUserId, localAccessId, localSessionId);
                    var concept = conceptString;
                    MainConcept = concept;
                    localMainKey = concept.id;
                    MainKeyLocal = concept.id;
                    CreateTheComposition(json[key], concept.id, concept.userId, localMainKey, userId, accessId, sessionInformationId);
                }
                else {
                    var ofThe = ofTheConceptId !== null && ofTheConceptId !== void 0 ? ofTheConceptId : 999;
                    var ofTheUser = ofTheConceptUserId !== null && ofTheConceptUserId !== void 0 ? ofTheConceptUserId : 10267;
                    var localMainKey = MainKeyLocal;
                    var conceptString = yield (0, MakeTheInstanceConcept_1.default)(key, "", true, localUserId, localAccessId, localSessionId);
                    var concept = conceptString;
                    console.log("of the concept");
                    console.log(concept.id);
                    (0, CreateTheConnection_1.default)(ofThe, ofTheUser, concept.id, concept.userId, localMainKey, localSessionId, concept.userId);
                    CreateTheComposition(json[key], concept.id, concept.userId, localMainKey, userId, accessId, sessionInformationId);
                }
            }
            else {
                var ofThe = ofTheConceptId !== null && ofTheConceptId !== void 0 ? ofTheConceptId : 999;
                var ofTheUser = ofTheConceptUserId !== null && ofTheConceptUserId !== void 0 ? ofTheConceptUserId : 10267;
                var localMainKey = MainKeyLocal;
                var conceptString = yield (0, MakeTheInstanceConcept_1.default)(key, json[key], false, localUserId, localAccessId, localSessionId);
                var concept = conceptString;
                (0, CreateTheConnection_1.default)(ofThe, ofTheUser, concept.id, concept.userId, localMainKey, localSessionId, concept.userId);
            }
        }
        return MainConcept;
    });
}
exports["default"] = CreateTheComposition;


/***/ }),

/***/ "./src/Services/CreateTheConcept.ts":
/*!******************************************!*\
  !*** ./src/Services/CreateTheConcept.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Concept_1 = __webpack_require__(/*! ../DataStructures/Concept */ "./src/DataStructures/Concept.ts");
const ReservedIds_1 = __webpack_require__(/*! ../DataStructures/ReservedIds */ "./src/DataStructures/ReservedIds.ts");
const SyncData_1 = __webpack_require__(/*! ../DataStructures/SyncData */ "./src/DataStructures/SyncData.ts");
function CreateTheConcept(referent, userId, categoryId, categoryUserId, typeId, typeUserId, referentId, referentUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId) {
    return __awaiter(this, void 0, void 0, function* () {
        var id = yield ReservedIds_1.ReservedIds.getId();
        var isNew = true;
        var concept = new Concept_1.Concept(id, userId, typeId, typeUserId, categoryId, categoryUserId, referentId, referentUserId, referent, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId, isNew);
        SyncData_1.SyncData.AddConcept(concept);
        return concept;
    });
}
exports["default"] = CreateTheConcept;


/***/ }),

/***/ "./src/Services/CreateTheConnection.ts":
/*!*********************************************!*\
  !*** ./src/Services/CreateTheConnection.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Connection_1 = __webpack_require__(/*! ../DataStructures/Connection */ "./src/DataStructures/Connection.ts");
const SyncData_1 = __webpack_require__(/*! ../DataStructures/SyncData */ "./src/DataStructures/SyncData.ts");
function createTheConnection(ofTheConceptId, ofTheConceptUserId, toTheConceptId, toTheConceptUserId, typeId, sessionInformationId, sessionInformationUserId) {
    var orderId = 1;
    var orderUserId = ofTheConceptUserId;
    var typeUserId = ofTheConceptUserId;
    var userId = ofTheConceptUserId;
    var securityId = 0;
    var securityUserId = ofTheConceptUserId;
    var accessId = 4;
    var accessUserId = ofTheConceptUserId;
    var connection = new Connection_1.Connection(0, ofTheConceptId, toTheConceptId, ofTheConceptUserId, toTheConceptUserId, userId, typeId, typeUserId, orderId, orderUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId);
    SyncData_1.SyncData.AddConnection(connection);
}
exports["default"] = createTheConnection;


/***/ }),

/***/ "./src/Services/GetComposition.ts":
/*!****************************************!*\
  !*** ./src/Services/GetComposition.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetComposition = void 0;
const GetConcept_1 = __webpack_require__(/*! ../Api/GetConcept */ "./src/Api/GetConcept.ts");
const GetAllConnectionsOfComposition_1 = __webpack_require__(/*! ../Api/GetAllConnectionsOfComposition */ "./src/Api/GetAllConnectionsOfComposition.ts");
const ConceptData_1 = __webpack_require__(/*! ../DataStructures/ConceptData */ "./src/DataStructures/ConceptData.ts");
const ConnectionData_1 = __webpack_require__(/*! ../DataStructures/ConnectionData */ "./src/DataStructures/ConnectionData.ts");
function GetComposition(id) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        var connectionList = [];
        var returnOutput = {};
        //connectionList = ConnectionData.GetConnectionsOfComposition(id);
        yield (0, GetAllConnectionsOfComposition_1.GetAllConnectionsOfComposition)(id);
        connectionList = ConnectionData_1.ConnectionData.GetConnectionsOfComposition(id);
        var compositionList = [];
        for (var i = 0; i < connectionList.length; i++) {
            if (!compositionList.includes(connectionList[i].ofTheConceptId)) {
                compositionList.push(connectionList[i].ofTheConceptId);
            }
        }
        var concept = ConceptData_1.ConceptsData.GetConcept(id);
        if (concept == null && id != null && id != undefined) {
            var conceptString = yield (0, GetConcept_1.GetConcept)(id);
            concept = conceptString;
        }
        var output = yield recursiveFetch(id, connectionList, compositionList);
        var mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "top";
        returnOutput[mainString] = output;
        return returnOutput;
    });
}
exports.GetComposition = GetComposition;
function recursiveFetch(id, connectionList, compositionList) {
    var _a, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function* () {
        var output = {};
        var arroutput = [];
        var concept = ConceptData_1.ConceptsData.GetConcept(id);
        if (concept == null && id != null && id != undefined) {
            var conceptString = yield (0, GetConcept_1.GetConcept)(id);
            concept = conceptString;
        }
        if (concept) {
            if (concept.type == null) {
                var toConceptTypeId = concept.typeId;
                var toConceptType = ConceptData_1.ConceptsData.GetConcept(toConceptTypeId);
                console.log("this is the to concept type");
                console.log(toConceptType);
                concept.type = toConceptType;
                if (toConceptType == null && toConceptTypeId != null && toConceptTypeId != undefined) {
                    var conceptString = yield (0, GetConcept_1.GetConcept)(toConceptTypeId);
                    toConceptType = conceptString;
                    concept.type = toConceptType;
                }
            }
        }
        var mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "top";
        if (!compositionList.includes(id)) {
            return concept === null || concept === void 0 ? void 0 : concept.characterValue;
        }
        else {
            for (var i = 0; i < connectionList.length; i++) {
                if (connectionList[i].ofTheConceptId == id) {
                    var toConceptId = connectionList[i].toTheConceptId;
                    var toConcept = ConceptData_1.ConceptsData.GetConcept(toConceptId);
                    if (toConcept == null && toConceptId != null && toConceptId != undefined) {
                        var conceptString = yield (0, GetConcept_1.GetConcept)(toConceptId);
                        toConcept = conceptString;
                    }
                    if (toConcept) {
                        if ((toConcept === null || toConcept === void 0 ? void 0 : toConcept.type) == null) {
                            var toConceptTypeId = toConcept.typeId;
                            var toConceptType = ConceptData_1.ConceptsData.GetConcept(toConceptTypeId);
                            console.log("this is the to concept type");
                            console.log(toConceptType);
                            toConcept.type = toConceptType;
                            if (toConceptType == null && toConceptTypeId != null && toConceptTypeId != undefined) {
                                var conceptString = yield (0, GetConcept_1.GetConcept)(toConceptTypeId);
                                toConceptType = conceptString;
                                toConcept.type = toConceptType;
                            }
                        }
                    }
                    var regex = "the_";
                    var localmainString = (_d = (_c = toConcept === null || toConcept === void 0 ? void 0 : toConcept.type) === null || _c === void 0 ? void 0 : _c.characterValue) !== null && _d !== void 0 ? _d : "top";
                    console.log("after to concept");
                    console.log(toConcept);
                    var localKey = localmainString.replace(regex, "");
                    if (isNaN(Number(localKey))) {
                        if (localKey) {
                            const result = yield recursiveFetch(toConceptId, connectionList, compositionList);
                            output[localKey] = result;
                        }
                    }
                    else {
                        const result = yield recursiveFetch(toConceptId, connectionList, compositionList);
                        arroutput[localKey] = result;
                        output = arroutput;
                    }
                }
            }
        }
        return output;
    });
}


/***/ }),

/***/ "./src/Services/GetCompositionList.ts":
/*!********************************************!*\
  !*** ./src/Services/GetCompositionList.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetCompositionList = void 0;
const GetAllConceptsByType_1 = __webpack_require__(/*! ../Api/GetAllConceptsByType */ "./src/Api/GetAllConceptsByType.ts");
const ConceptData_1 = __webpack_require__(/*! ../DataStructures/ConceptData */ "./src/DataStructures/ConceptData.ts");
const GetComposition_1 = __webpack_require__(/*! ./GetComposition */ "./src/Services/GetComposition.ts");
const GetConceptByCharacter_1 = __importDefault(__webpack_require__(/*! ./GetConceptByCharacter */ "./src/Services/GetConceptByCharacter.ts"));
function GetCompositionList(compositionName) {
    return __awaiter(this, void 0, void 0, function* () {
        var concept = yield (0, GetConceptByCharacter_1.default)(compositionName);
        var CompositionList = [];
        if (concept) {
            yield (0, GetAllConceptsByType_1.GetAllConceptsByType)(compositionName, 10267);
            var conceptList = ConceptData_1.ConceptsData.GetConceptsByTypeId(concept.id);
            for (var i = 0; i < conceptList.length; i++) {
                var compositionString = yield (0, GetComposition_1.GetComposition)(conceptList[i].id);
                var json = JSON.stringify(compositionString);
                CompositionList.push(json);
            }
        }
        return CompositionList;
    });
}
exports.GetCompositionList = GetCompositionList;


/***/ }),

/***/ "./src/Services/GetConceptByCharacter.ts":
/*!***********************************************!*\
  !*** ./src/Services/GetConceptByCharacter.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const GetConceptByCharacterValue_1 = __webpack_require__(/*! ../Api/GetConceptByCharacterValue */ "./src/Api/GetConceptByCharacterValue.ts");
const ConceptData_1 = __webpack_require__(/*! ../DataStructures/ConceptData */ "./src/DataStructures/ConceptData.ts");
function GetConceptByCharacter(characterValue) {
    return __awaiter(this, void 0, void 0, function* () {
        var concept = ConceptData_1.ConceptsData.GetConceptByCharacter(characterValue);
        if (concept == null && characterValue) {
            var conceptString = yield (0, GetConceptByCharacterValue_1.GetConceptByCharacterValue)(characterValue);
            concept = conceptString;
        }
        return concept;
    });
}
exports["default"] = GetConceptByCharacter;


/***/ }),

/***/ "./src/Services/MakeTheCharacter.ts":
/*!******************************************!*\
  !*** ./src/Services/MakeTheCharacter.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const GetConceptByCharacterAndType_1 = __webpack_require__(/*! ../Api/GetConceptByCharacterAndType */ "./src/Api/GetConceptByCharacterAndType.ts");
const MakeTheCharacterData_1 = __importDefault(__webpack_require__(/*! ./MakeTheCharacterData */ "./src/Services/MakeTheCharacterData.ts"));
const MakeTheConcept_1 = __importDefault(__webpack_require__(/*! ./MakeTheConcept */ "./src/Services/MakeTheConcept.ts"));
function MakeTheCharacter(the_character_data, userId, securityId, accessId, accessUserId, sessionId) {
    var accessUserId;
    return __awaiter(this, void 0, void 0, function* () {
        var categoryUserId = userId;
        var securityUserId = userId;
        accessUserId = userId;
        var categoryId = 4;
        var typeId = 51;
        var typeUserId = userId;
        var sessionUserId = userId;
        var lengthOfCharacters = the_character_data.length;
        var concept;
        if (lengthOfCharacters == 1) {
            var characterDataString = yield (0, MakeTheCharacterData_1.default)(the_character_data, userId, securityId, accessId, sessionId);
        }
        else {
            var characterDataString = yield (0, MakeTheCharacterData_1.default)(the_character_data, userId, securityId, accessId, sessionId);
            var characterData = characterDataString;
            if (characterData.isNew) {
                var conceptString = yield (0, MakeTheConcept_1.default)(the_character_data, userId, categoryId, categoryUserId, typeId, typeUserId, characterData.id, characterData.userId, securityId, securityUserId, accessId, accessUserId, sessionId, sessionUserId);
                concept = conceptString;
            }
            else {
                var mystring = yield (0, GetConceptByCharacterAndType_1.GetConceptByCharacterAndType)(the_character_data, typeId);
                concept = mystring;
            }
        }
        return concept;
    });
}
exports["default"] = MakeTheCharacter;


/***/ }),

/***/ "./src/Services/MakeTheCharacterData.ts":
/*!**********************************************!*\
  !*** ./src/Services/MakeTheCharacterData.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const CreateTheCharacter_1 = __webpack_require__(/*! ../Api/Create/CreateTheCharacter */ "./src/Api/Create/CreateTheCharacter.ts");
const TheCharacter_1 = __webpack_require__(/*! ../DataStructures/TheCharacter */ "./src/DataStructures/TheCharacter.ts");
function MakeTheCharacterData(the_character_data, userId, securityId, accessId, sessionId) {
    return __awaiter(this, void 0, void 0, function* () {
        var categoryUserId = userId;
        var accessUserId = userId;
        var securityUserId = userId;
        var sessionInformationUserId = userId;
        var theCharacter = new TheCharacter_1.TheCharacter(userId, the_character_data, securityId, securityUserId, accessId, accessUserId, sessionId, sessionInformationUserId, "", false);
        console.log("character testing");
        var output = yield (0, CreateTheCharacter_1.CreateTheCharacter)(theCharacter);
        var returner = output;
        return returner;
    });
}
exports["default"] = MakeTheCharacterData;


/***/ }),

/***/ "./src/Services/MakeTheConcept.ts":
/*!****************************************!*\
  !*** ./src/Services/MakeTheConcept.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const GetConceptByCharacterAndType_1 = __webpack_require__(/*! ../Api/GetConceptByCharacterAndType */ "./src/Api/GetConceptByCharacterAndType.ts");
const CreateTheConcept_1 = __importDefault(__webpack_require__(/*! ./CreateTheConcept */ "./src/Services/CreateTheConcept.ts"));
function MakeTheConcept(referent, userId, categoryId, categoryUserId, typeId, typeUserId, referentId, referentUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId) {
    return __awaiter(this, void 0, void 0, function* () {
        var conceptString = yield (0, GetConceptByCharacterAndType_1.GetConceptByCharacterAndType)(referent, typeId);
        var concept = conceptString;
        if (concept.id == 0) {
            conceptString = yield (0, CreateTheConcept_1.default)(referent, userId, categoryId, categoryUserId, typeId, typeUserId, referentId, referentUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId);
            concept = conceptString;
        }
        return concept;
    });
}
exports["default"] = MakeTheConcept;


/***/ }),

/***/ "./src/Services/MakeTheInstanceConcept.ts":
/*!************************************************!*\
  !*** ./src/Services/MakeTheInstanceConcept.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const CreateTheTextData_1 = __webpack_require__(/*! ../Api/Create/CreateTheTextData */ "./src/Api/Create/CreateTheTextData.ts");
const GetConceptByCharacterAndType_1 = __webpack_require__(/*! ../Api/GetConceptByCharacterAndType */ "./src/Api/GetConceptByCharacterAndType.ts");
const TheTexts_1 = __webpack_require__(/*! ../DataStructures/TheTexts */ "./src/DataStructures/TheTexts.ts");
const CreateTheConcept_1 = __importDefault(__webpack_require__(/*! ./CreateTheConcept */ "./src/Services/CreateTheConcept.ts"));
const MakeTheTypeConcept_1 = __importDefault(__webpack_require__(/*! ./MakeTheTypeConcept */ "./src/Services/MakeTheTypeConcept.ts"));
function MakeTheInstanceConcept(type, referent, composition = false, userId, accessId, sessionInformationId = 999) {
    var sessionInformationId, accessId;
    return __awaiter(this, void 0, void 0, function* () {
        sessionInformationId = 999;
        var categoryId = 4;
        var categoryUserId = userId;
        var referentId = 0;
        var referentUserId = 999;
        var securityId = 999;
        var securityUserId = userId;
        var sessionInformationUserId = userId;
        accessId = 4;
        var accessUserId = userId;
        var stringToCheck = "";
        var stringLength = referent.length;
        var typeConcept;
        var concept;
        var startsWithThe = type.startsWith("the_");
        if (startsWithThe) {
            stringToCheck = type;
        }
        else {
            stringToCheck = "the_" + type;
        }
        if (composition) {
            var typeConceptString = yield (0, MakeTheTypeConcept_1.default)(type, sessionInformationId, userId, userId);
            typeConcept = typeConceptString;
            var conceptString = yield (0, CreateTheConcept_1.default)(referent, userId, categoryId, userId, typeConcept.id, typeConcept.userId, referentId, referentUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId);
            concept = conceptString;
        }
        else if (stringLength > 255) {
            var typeConceptString = yield (0, MakeTheTypeConcept_1.default)(stringToCheck, sessionInformationId, sessionInformationUserId, userId);
            typeConcept = typeConceptString;
            var conceptString = yield (0, CreateTheConcept_1.default)(referent, userId, categoryId, userId, typeConcept.id, typeConcept.userId, referentId, referentUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId);
            concept = conceptString;
            var TheTextsData = new TheTexts_1.TheTexts(userId, referent, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId, Date.now().toString(), true);
            var TextDataString = yield (0, CreateTheTextData_1.CreateTextData)(TheTextsData);
            var TextData = TextDataString;
        }
        else {
            var typeConceptString = yield (0, MakeTheTypeConcept_1.default)(stringToCheck, sessionInformationId, sessionInformationUserId, userId);
            typeConcept = typeConceptString;
            var conceptByCharTypeString = yield (0, GetConceptByCharacterAndType_1.GetConceptByCharacterAndType)(referent, typeConcept.id);
            var conceptTypeCharacter = conceptByCharTypeString;
            concept = conceptTypeCharacter;
            if (conceptTypeCharacter.id == 0 && conceptTypeCharacter.userId == 0) {
                var conceptString = yield (0, CreateTheConcept_1.default)(referent, userId, categoryId, userId, typeConcept.id, typeConcept.userId, referentId, referentUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId);
                concept = conceptString;
            }
        }
        return concept;
    });
}
exports["default"] = MakeTheInstanceConcept;


/***/ }),

/***/ "./src/Services/MakeTheTypeConcept.ts":
/*!********************************************!*\
  !*** ./src/Services/MakeTheTypeConcept.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const CreateTheConcept_1 = __importDefault(__webpack_require__(/*! ./CreateTheConcept */ "./src/Services/CreateTheConcept.ts"));
const GetConceptByCharacter_1 = __importDefault(__webpack_require__(/*! ./GetConceptByCharacter */ "./src/Services/GetConceptByCharacter.ts"));
const MakeTheCharacter_1 = __importDefault(__webpack_require__(/*! ./MakeTheCharacter */ "./src/Services/MakeTheCharacter.ts"));
const SplitStrings_1 = __webpack_require__(/*! ./SplitStrings */ "./src/Services/SplitStrings.ts");
function MakeTheTypeConcept(typeString, sessionId, sessionUserId, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        var referentId = 999;
        var securityId = 999;
        var sessionInformationUserId = 999;
        var accessId = 999;
        var securityUserId = userId;
        var accessUserId = userId;
        var categoryUserId = userId;
        var securityUserId = userId;
        var existingConcept = yield (0, GetConceptByCharacter_1.default)(typeString);
        if (existingConcept) {
            if (existingConcept.id == 0 || existingConcept.userId == 0) {
                var splittedStringArray = (0, SplitStrings_1.SplitStrings)(typeString);
                if (splittedStringArray[0] == typeString) {
                    var conceptString = yield (0, MakeTheCharacter_1.default)(typeString, userId, securityId, accessId, accessUserId, sessionId);
                    existingConcept = conceptString;
                }
                else {
                    var categoryId = 1;
                    var categoryConcept = MakeTheTypeConcept(splittedStringArray[0], sessionId, sessionUserId, userId);
                    var typeConcept = yield MakeTheTypeConcept(splittedStringArray[1], sessionId, sessionUserId, userId);
                    if (typeConcept) {
                        var concept = yield (0, CreateTheConcept_1.default)(typeString, userId, categoryId, userId, typeConcept.id, userId, referentId, userId, securityId, userId, accessId, userId, sessionId, userId);
                        existingConcept = concept;
                    }
                }
            }
        }
        return existingConcept;
    });
}
exports["default"] = MakeTheTypeConcept;


/***/ }),

/***/ "./src/Services/SplitStrings.ts":
/*!**************************************!*\
  !*** ./src/Services/SplitStrings.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SplitStrings = void 0;
function SplitStrings(typeString) {
    const SplittedStrings = typeString.split("_");
    return SplittedStrings;
}
exports.SplitStrings = SplitStrings;


/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateConnectionBetweenTwoConcepts = exports.CreateComposition = exports.GetComposition = exports.GetCompositionList = exports.SplitStrings = void 0;
const SyncData_1 = __webpack_require__(/*! ./DataStructures/SyncData */ "./src/DataStructures/SyncData.ts");
var SplitStrings_1 = __webpack_require__(/*! ./Services/SplitStrings */ "./src/Services/SplitStrings.ts");
Object.defineProperty(exports, "SplitStrings", ({ enumerable: true, get: function () { return SplitStrings_1.SplitStrings; } }));
var GetCompositionList_1 = __webpack_require__(/*! ./Services/GetCompositionList */ "./src/Services/GetCompositionList.ts");
Object.defineProperty(exports, "GetCompositionList", ({ enumerable: true, get: function () { return GetCompositionList_1.GetCompositionList; } }));
var GetComposition_1 = __webpack_require__(/*! ./Services/GetComposition */ "./src/Services/GetComposition.ts");
Object.defineProperty(exports, "GetComposition", ({ enumerable: true, get: function () { return GetComposition_1.GetComposition; } }));
var CreateTheComposition_1 = __webpack_require__(/*! ./Services/CreateTheComposition */ "./src/Services/CreateTheComposition.ts");
Object.defineProperty(exports, "CreateComposition", ({ enumerable: true, get: function () { return __importDefault(CreateTheComposition_1).default; } }));
var CreateConnectionBetweenTwoConcepts_1 = __webpack_require__(/*! ./Services/CreateConnectionBetweenTwoConcepts */ "./src/Services/CreateConnectionBetweenTwoConcepts.ts");
Object.defineProperty(exports, "CreateConnectionBetweenTwoConcepts", ({ enumerable: true, get: function () { return CreateConnectionBetweenTwoConcepts_1.CreateConnectionBetweenTwoConcepts; } }));
// const form = document.querySelector('#myForm') as HTMLFormElement;
// //const form2 = document.querySelector('#userForm') as HTMLFormElement;
// const form3 = document.querySelector('#compositionForm') as HTMLFormElement;
// const jsonForm = document.querySelector('#jsonForm') as HTMLFormElement;
// const nameForm = document.querySelector('#nameform') as HTMLFormElement;
// const getname = document.querySelector('#getname') as HTMLFormElement;
// var json = {
//     "asdgsaddff": {
//         "adgasdfsdf": {
//             "asdg": "tame",
//             "briderarr": ["hello", "tre"]
//         }
//     }
// };
setInterval(function () {
    console.log("syncing");
    SyncData_1.SyncData.SyncDataOnline();
}, 5000);
// form.addEventListener('submit', (event) => {
//    event.preventDefault();
//    const conceptIdElement = document.querySelector('#conceptid') as HTMLInputElement;
//    const conceptId = conceptIdElement.value;
//    GetComposition(Number(conceptId)).then(output=>{
//     const jsonElemnt = document.querySelector('#jsonoutput') as HTMLInputElement;
//     var json = JSON.stringify(output);
//     console.log(json);
//     jsonElemnt.innerHTML = json;
//    });
// });
// getname.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const conceptIdElement = document.querySelector('#nameconceptid') as HTMLInputElement;
//     const conceptId = conceptIdElement.value;
//     GetComposition(Number(conceptId)).then(output=>{
//         const firstNameElement = document.querySelector('#firstname') as HTMLInputElement;
//         const lastNameElement = document.querySelector('#lastname') as HTMLInputElement;
//         console.log(output);
//         firstNameElement.value = output.namedata.firstname;
//         lastNameElement.value = output.namedata.lastname;
//     });
//  });
// nameForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const firstNameElement = document.querySelector('#firstname') as HTMLInputElement;
//     const firstname = firstNameElement.value;
//     const lastNameElement = document.querySelector('#lastname') as HTMLInputElement;
//     const lastname = lastNameElement.value;
//     var json = {
//         "namedata":{
//             "firstname": firstname,
//             "lastname": lastname
//         }
//     }
//     console.log(json);
//     CreateTheComposition(json).then((value)=>{
//         const outputid = document.querySelector('#outputid') as HTMLInputElement;
//         var concept = value as Concept;
//         outputid.innerHTML = concept.id.toString();
//         console.log('this is the test for final');
//         console.log(value);
//     });
//     });
// jsonForm.addEventListener('submit', (event) =>{
//     event.preventDefault();
//     const compositionNameElement = document.querySelector("#jsondata") as HTMLInputElement;
//     const compositionName = compositionNameElement.value;
//     console.log("this is the composition name");
//     console.log(compositionName);
//     var jon = JSON.parse(compositionName);
//     CreateTheComposition(jon).then((value)=>{
//         const outputid = document.querySelector('#outputid') as HTMLInputElement;
//         var concept = value as Concept;
//         outputid.innerHTML = concept.id.toString();
//         console.log('this is the test for final');
//         console.log(value);
//     });
// });
// form3.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const compositionNameElement = document.querySelector("#composition_name") as HTMLInputElement;
//     const compositionName = compositionNameElement.value;
//     GetCompositionList(compositionName).then(output=>{
//         const jsonElemnt = document.querySelector('#jsonoutput') as HTMLInputElement;
//         var json = JSON.stringify(output);
//         console.log(json);
//         jsonElemnt.innerHTML = JSON.stringify(json);
//     });
// });
// // form2.addEventListener('submit', (event) => {
// //     event.preventDefault();
// //     const userIdElement = document.querySelector("#userid") as HTMLInputElement;
// //     const userId = userIdElement.value;
// //     GetAllUserConcepts(Number(userId));
// //     GetAllUserConnections(Number(userId)).then(()=>{
// //         console.log("got all the data");
// //     });
// //  });
// window.onmousedown = (ev: MouseEvent): any => {
//     var isMouseDown = true;
//     var canvas = document.querySelector('#myCanvas') as HTMLCanvasElement;
//     var ctx = canvas.getContext('2d') as CanvasRenderingContext2D ;
//     var _difference_from_window = canvas.getBoundingClientRect();
//     var width_difference = 0;
//     var height_difference = 0;
//     //Update mouse position at time of down
//     var mouse_x_coordinate = ev.x - _difference_from_window.left + window.scrollX;
//     var mouse_y_coordinate = ev.y - _difference_from_window.top + window.scrollY;
//     var selected_concept_object = selectConceptObject(mouse_x_coordinate, mouse_y_coordinate);
//     window.onmousemove = (ev: MouseEvent): any => {
//         var previous_mouse_x = mouse_x_coordinate;
//         var previous_mouse_y = mouse_y_coordinate;
//         var new_mouse_x_coordinate = ev.x - _difference_from_window.left + window.scrollX;
//         var new_mouse_y_coordinate = ev.y - _difference_from_window.top + window.scrollY;
//         //how much did the mouse move
//         var mouse_x_difference = new_mouse_x_coordinate - previous_mouse_x;
//         var mouse_y_difference = new_mouse_y_coordinate - previous_mouse_y;
//         if(selected_concept_object){
//             if(isMouseDown){
//                 selected_concept_object.x = new_mouse_x_coordinate;
//                 selected_concept_object.y = new_mouse_y_coordinate;
//             }
//         }
//     }
//     window.onmouseup = (ev: MouseEvent): any => {
//         isMouseDown = false;
//         selected_concept_object  = null;
//     }
//}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDaEpBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90c2Njcy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vdHNjY3MvLi9zcmMvQXBpL0NyZWF0ZS9DcmVhdGVUaGVDaGFyYWN0ZXIudHMiLCJ3ZWJwYWNrOi8vdHNjY3MvLi9zcmMvQXBpL0NyZWF0ZS9DcmVhdGVUaGVDb25jZXB0QXBpLnRzIiwid2VicGFjazovL3RzY2NzLy4vc3JjL0FwaS9DcmVhdGUvQ3JlYXRlVGhlQ29ubmVjdGlvbkFwaS50cyIsIndlYnBhY2s6Ly90c2Njcy8uL3NyYy9BcGkvQ3JlYXRlL0NyZWF0ZVRoZVRleHREYXRhLnRzIiwid2VicGFjazovL3RzY2NzLy4vc3JjL0FwaS9HZXRBbGxDb25jZXB0c0J5VHlwZS50cyIsIndlYnBhY2s6Ly90c2Njcy8uL3NyYy9BcGkvR2V0QWxsQ29ubmVjdGlvbnNPZkNvbXBvc2l0aW9uLnRzIiwid2VicGFjazovL3RzY2NzLy4vc3JjL0FwaS9HZXRDb25jZXB0LnRzIiwid2VicGFjazovL3RzY2NzLy4vc3JjL0FwaS9HZXRDb25jZXB0QnlDaGFyYWN0ZXJBbmRUeXBlLnRzIiwid2VicGFjazovL3RzY2NzLy4vc3JjL0FwaS9HZXRDb25jZXB0QnlDaGFyYWN0ZXJWYWx1ZS50cyIsIndlYnBhY2s6Ly90c2Njcy8uL3NyYy9BcGkvR2V0UmVzZXJ2ZWRJZHMudHMiLCJ3ZWJwYWNrOi8vdHNjY3MvLi9zcmMvQ29uc3RhbnRzL0FwaUNvbnN0YW50cy50cyIsIndlYnBhY2s6Ly90c2Njcy8uL3NyYy9EYXRhU3RydWN0dXJlcy9Db25jZXB0LnRzIiwid2VicGFjazovL3RzY2NzLy4vc3JjL0RhdGFTdHJ1Y3R1cmVzL0NvbmNlcHREYXRhLnRzIiwid2VicGFjazovL3RzY2NzLy4vc3JjL0RhdGFTdHJ1Y3R1cmVzL0Nvbm5lY3Rpb24udHMiLCJ3ZWJwYWNrOi8vdHNjY3MvLi9zcmMvRGF0YVN0cnVjdHVyZXMvQ29ubmVjdGlvbkRhdGEudHMiLCJ3ZWJwYWNrOi8vdHNjY3MvLi9zcmMvRGF0YVN0cnVjdHVyZXMvUmVzZXJ2ZWRJZHMudHMiLCJ3ZWJwYWNrOi8vdHNjY3MvLi9zcmMvRGF0YVN0cnVjdHVyZXMvU3luY0RhdGEudHMiLCJ3ZWJwYWNrOi8vdHNjY3MvLi9zcmMvRGF0YVN0cnVjdHVyZXMvVGhlQ2hhcmFjdGVyLnRzIiwid2VicGFjazovL3RzY2NzLy4vc3JjL0RhdGFTdHJ1Y3R1cmVzL1RoZVRleHRzLnRzIiwid2VicGFjazovL3RzY2NzLy4vc3JjL1NlcnZpY2VzL0NyZWF0ZUNvbm5lY3Rpb25CZXR3ZWVuVHdvQ29uY2VwdHMudHMiLCJ3ZWJwYWNrOi8vdHNjY3MvLi9zcmMvU2VydmljZXMvQ3JlYXRlVGhlQ29tcG9zaXRpb24udHMiLCJ3ZWJwYWNrOi8vdHNjY3MvLi9zcmMvU2VydmljZXMvQ3JlYXRlVGhlQ29uY2VwdC50cyIsIndlYnBhY2s6Ly90c2Njcy8uL3NyYy9TZXJ2aWNlcy9DcmVhdGVUaGVDb25uZWN0aW9uLnRzIiwid2VicGFjazovL3RzY2NzLy4vc3JjL1NlcnZpY2VzL0dldENvbXBvc2l0aW9uLnRzIiwid2VicGFjazovL3RzY2NzLy4vc3JjL1NlcnZpY2VzL0dldENvbXBvc2l0aW9uTGlzdC50cyIsIndlYnBhY2s6Ly90c2Njcy8uL3NyYy9TZXJ2aWNlcy9HZXRDb25jZXB0QnlDaGFyYWN0ZXIudHMiLCJ3ZWJwYWNrOi8vdHNjY3MvLi9zcmMvU2VydmljZXMvTWFrZVRoZUNoYXJhY3Rlci50cyIsIndlYnBhY2s6Ly90c2Njcy8uL3NyYy9TZXJ2aWNlcy9NYWtlVGhlQ2hhcmFjdGVyRGF0YS50cyIsIndlYnBhY2s6Ly90c2Njcy8uL3NyYy9TZXJ2aWNlcy9NYWtlVGhlQ29uY2VwdC50cyIsIndlYnBhY2s6Ly90c2Njcy8uL3NyYy9TZXJ2aWNlcy9NYWtlVGhlSW5zdGFuY2VDb25jZXB0LnRzIiwid2VicGFjazovL3RzY2NzLy4vc3JjL1NlcnZpY2VzL01ha2VUaGVUeXBlQ29uY2VwdC50cyIsIndlYnBhY2s6Ly90c2Njcy8uL3NyYy9TZXJ2aWNlcy9TcGxpdFN0cmluZ3MudHMiLCJ3ZWJwYWNrOi8vdHNjY3MvLi9zcmMvYXBwLnRzIiwid2VicGFjazovL3RzY2NzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RzY2NzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdHNjY3Mvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RzY2NzL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcInRzY2NzXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInRzY2NzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInRzY2NzXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgKCkgPT4ge1xucmV0dXJuICIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkNyZWF0ZVRoZUNoYXJhY3RlciA9IHZvaWQgMDtcbmNvbnN0IEFwaUNvbnN0YW50c18xID0gcmVxdWlyZShcIi4uLy4uL0NvbnN0YW50cy9BcGlDb25zdGFudHNcIik7XG5mdW5jdGlvbiBDcmVhdGVUaGVDaGFyYWN0ZXIoY2hhcmFjdGVyRGF0YSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjaGFyYWN0ZXJEYXRhKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goQXBpQ29uc3RhbnRzXzEuQ3JlYXRlVGhlQ2hhcmFjdGVyRGF0YVVybCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY2hhcmFjdGVyRGF0YSksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzdWx0U3RyaW5nID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVzdWx0U3RyaW5nO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIG1lc3NhZ2U6ICcsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VuZXhwZWN0ZWQgZXJyb3I6ICcsIGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLkNyZWF0ZVRoZUNoYXJhY3RlciA9IENyZWF0ZVRoZUNoYXJhY3RlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkNyZWF0ZVRoZUNvbmNlcHRBcGkgPSB2b2lkIDA7XG5jb25zdCBBcGlDb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuLi8uLi9Db25zdGFudHMvQXBpQ29uc3RhbnRzXCIpO1xuZnVuY3Rpb24gQ3JlYXRlVGhlQ29uY2VwdEFwaShjb25jZXB0RGF0YSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKEFwaUNvbnN0YW50c18xLkNyZWF0ZVRoZUNvbmNlcHRVcmwsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNvbmNlcHREYXRhKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXN1bHRTdHJpbmcgPSB5aWVsZCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSByZXN1bHRTdHJpbmc7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgbWVzc2FnZTogJywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndW5leHBlY3RlZCBlcnJvcjogJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuQ3JlYXRlVGhlQ29uY2VwdEFwaSA9IENyZWF0ZVRoZUNvbmNlcHRBcGk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5DcmVhdGVUaGVDb25uZWN0aW9uQXBpID0gdm9pZCAwO1xuY29uc3QgQXBpQ29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vLi4vQ29uc3RhbnRzL0FwaUNvbnN0YW50c1wiKTtcbmZ1bmN0aW9uIENyZWF0ZVRoZUNvbm5lY3Rpb25BcGkoY29ubmVjdGlvbkRhdGEpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIGpzb25EYXRhID0gSlNPTi5zdHJpbmdpZnkoY29ubmVjdGlvbkRhdGEpO1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChBcGlDb25zdGFudHNfMS5DcmVhdGVUaGVDb25uZWN0aW9uVXJsLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBqc29uRGF0YVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBtZXNzYWdlOiAnLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1bmV4cGVjdGVkIGVycm9yOiAnLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5DcmVhdGVUaGVDb25uZWN0aW9uQXBpID0gQ3JlYXRlVGhlQ29ubmVjdGlvbkFwaTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkNyZWF0ZVRleHREYXRhID0gdm9pZCAwO1xuY29uc3QgQXBpQ29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vLi4vQ29uc3RhbnRzL0FwaUNvbnN0YW50c1wiKTtcbmZ1bmN0aW9uIENyZWF0ZVRleHREYXRhKHRleHREYXRhKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goQXBpQ29uc3RhbnRzXzEuQ3JlYXRlVGhlVGV4dERhdGFVcmwsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRleHREYXRhKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXN1bHRTdHJpbmcgPSB5aWVsZCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSByZXN1bHRTdHJpbmc7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgbWVzc2FnZTogJywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndW5leHBlY3RlZCBlcnJvcjogJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuQ3JlYXRlVGV4dERhdGEgPSBDcmVhdGVUZXh0RGF0YTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdldEFsbENvbmNlcHRzQnlUeXBlID0gdm9pZCAwO1xuY29uc3QgQ29uY2VwdERhdGFfMSA9IHJlcXVpcmUoXCIuLy4uL0RhdGFTdHJ1Y3R1cmVzL0NvbmNlcHREYXRhXCIpO1xuY29uc3QgQXBpQ29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi8uLi9Db25zdGFudHMvQXBpQ29uc3RhbnRzXCIpO1xuZnVuY3Rpb24gR2V0QWxsQ29uY2VwdHNCeVR5cGUodHlwZSwgdXNlcklkKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciB1cmxlbmNvZGVkID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgICAgICAgICAgdXJsZW5jb2RlZC5hcHBlbmQoXCJ0eXBlXCIsIHR5cGUpO1xuICAgICAgICAgICAgdXJsZW5jb2RlZC5hcHBlbmQoXCJ1c2VyX2lkXCIsIFwiMTAyNjdcIik7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKEFwaUNvbnN0YW50c18xLkdldEFsbENvbmNlcHRzQnlUeXBlVXJsLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IHVybGVuY29kZWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIENvbmNlcHREYXRhXzEuQ29uY2VwdHNEYXRhLkFkZENvbmNlcHQocmVzdWx0W2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIG1lc3NhZ2U6ICcsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VuZXhwZWN0ZWQgZXJyb3I6ICcsIGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLkdldEFsbENvbmNlcHRzQnlUeXBlID0gR2V0QWxsQ29uY2VwdHNCeVR5cGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HZXRBbGxDb25uZWN0aW9uc09mQ29tcG9zaXRpb24gPSB2b2lkIDA7XG5jb25zdCBDb25uZWN0aW9uRGF0YV8xID0gcmVxdWlyZShcIi4uL0RhdGFTdHJ1Y3R1cmVzL0Nvbm5lY3Rpb25EYXRhXCIpO1xuY29uc3QgQXBpQ29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi8uLi9Db25zdGFudHMvQXBpQ29uc3RhbnRzXCIpO1xuZnVuY3Rpb24gR2V0QWxsQ29ubmVjdGlvbnNPZkNvbXBvc2l0aW9uKGNvbXBvc2l0aW9uX2lkKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goQXBpQ29uc3RhbnRzXzEuR2V0QWxsQ29ubmVjdGlvbnNPZkNvbXBvc2l0aW9uVXJsLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IGBjb21wb3NpdGlvbl9pZD0ke2NvbXBvc2l0aW9uX2lkfWBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBDb25uZWN0aW9uRGF0YV8xLkNvbm5lY3Rpb25EYXRhLkFkZENvbm5lY3Rpb24ocmVzdWx0W2ldKTtcbiAgICAgICAgICAgICAgICBDb25uZWN0aW9uRGF0YV8xLkNvbm5lY3Rpb25EYXRhLkFkZFRvRGljdGlvbmFyeShyZXN1bHRbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgbWVzc2FnZTogJywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndW5leHBlY3RlZCBlcnJvcjogJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuR2V0QWxsQ29ubmVjdGlvbnNPZkNvbXBvc2l0aW9uID0gR2V0QWxsQ29ubmVjdGlvbnNPZkNvbXBvc2l0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2V0Q29uY2VwdCA9IHZvaWQgMDtcbmNvbnN0IENvbmNlcHREYXRhXzEgPSByZXF1aXJlKFwiLi8uLi9EYXRhU3RydWN0dXJlcy9Db25jZXB0RGF0YVwiKTtcbmNvbnN0IEFwaUNvbnN0YW50c18xID0gcmVxdWlyZShcIi4vLi4vQ29uc3RhbnRzL0FwaUNvbnN0YW50c1wiKTtcbmZ1bmN0aW9uIEdldENvbmNlcHQoaWQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIENvbmNlcHQgPSBDb25jZXB0RGF0YV8xLkNvbmNlcHRzRGF0YS5HZXRDb25jZXB0KGlkKTtcbiAgICAgICAgICAgIGlmIChDb25jZXB0ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gQ29uY2VwdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goQXBpQ29uc3RhbnRzXzEuR2V0Q29uY2VwdFVybCwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IGBpZD0ke2lkfWBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9ICh5aWVsZCByZXNwb25zZS5qc29uKCkpO1xuICAgICAgICAgICAgICAgIENvbmNlcHREYXRhXzEuQ29uY2VwdHNEYXRhLkFkZENvbmNlcHQocmVzdWx0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgbWVzc2FnZTogJywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndW5leHBlY3RlZCBlcnJvcjogJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuR2V0Q29uY2VwdCA9IEdldENvbmNlcHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HZXRDb25jZXB0QnlDaGFyYWN0ZXJBbmRUeXBlID0gdm9pZCAwO1xuY29uc3QgQ29uY2VwdERhdGFfMSA9IHJlcXVpcmUoXCIuLy4uL0RhdGFTdHJ1Y3R1cmVzL0NvbmNlcHREYXRhXCIpO1xuY29uc3QgQXBpQ29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi8uLi9Db25zdGFudHMvQXBpQ29uc3RhbnRzXCIpO1xuZnVuY3Rpb24gR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyQW5kVHlwZShjaGFyYWN0ZXJWYWx1ZSwgdHlwZUlkKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBqc29uID0ge1xuICAgICAgICAgICAgICAgICdjaGFyYWN0ZXJfdmFsdWUnOiBjaGFyYWN0ZXJWYWx1ZSxcbiAgICAgICAgICAgICAgICAndHlwZV9pZCc6IHR5cGVJZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciB0b1NlbmRKc29uID0gSlNPTi5zdHJpbmdpZnkoanNvbik7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKEFwaUNvbnN0YW50c18xLkdldENvbmNlcHRCeUNoYXJhY3RlckFuZFR5cGVVcmwsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IHRvU2VuZEpzb24sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgQ29uY2VwdERhdGFfMS5Db25jZXB0c0RhdGEuQWRkQ29uY2VwdChyZXN1bHQpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIG1lc3NhZ2U6ICcsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VuZXhwZWN0ZWQgZXJyb3I6ICcsIGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLkdldENvbmNlcHRCeUNoYXJhY3RlckFuZFR5cGUgPSBHZXRDb25jZXB0QnlDaGFyYWN0ZXJBbmRUeXBlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyVmFsdWUgPSB2b2lkIDA7XG5jb25zdCBDb25jZXB0RGF0YV8xID0gcmVxdWlyZShcIi4vLi4vRGF0YVN0cnVjdHVyZXMvQ29uY2VwdERhdGFcIik7XG5jb25zdCBBcGlDb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuLy4uL0NvbnN0YW50cy9BcGlDb25zdGFudHNcIik7XG5mdW5jdGlvbiBHZXRDb25jZXB0QnlDaGFyYWN0ZXJWYWx1ZShjaGFyYWN0ZXJWYWx1ZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKEFwaUNvbnN0YW50c18xLkdldENvbmNlcHRCeUNoYXJhY3RlclZhbHVlVXJsLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IGBjaGFyYWN0ZXJfdmFsdWU9JHtjaGFyYWN0ZXJWYWx1ZX1gXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgQ29uY2VwdERhdGFfMS5Db25jZXB0c0RhdGEuQWRkQ29uY2VwdChyZXN1bHQpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIG1lc3NhZ2U6ICcsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VuZXhwZWN0ZWQgZXJyb3I6ICcsIGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLkdldENvbmNlcHRCeUNoYXJhY3RlclZhbHVlID0gR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyVmFsdWU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HZXRSZXNlcnZlZElkcyA9IHZvaWQgMDtcbmNvbnN0IEFwaUNvbnN0YW50c18xID0gcmVxdWlyZShcIi4vLi4vQ29uc3RhbnRzL0FwaUNvbnN0YW50c1wiKTtcbmNvbnN0IFJlc2VydmVkSWRzXzEgPSByZXF1aXJlKFwiLi4vRGF0YVN0cnVjdHVyZXMvUmVzZXJ2ZWRJZHNcIik7XG5mdW5jdGlvbiBHZXRSZXNlcnZlZElkcygpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChBcGlDb25zdGFudHNfMS5HZXRSZXNlcnZlZElkVXJsLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBSZXNlcnZlZElkc18xLlJlc2VydmVkSWRzLkFkZElkKHJlc3VsdFtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBtZXNzYWdlOiAnLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1bmV4cGVjdGVkIGVycm9yOiAnLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5HZXRSZXNlcnZlZElkcyA9IEdldFJlc2VydmVkSWRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkNyZWF0ZVRoZUNvbm5lY3Rpb25VcmwgPSBleHBvcnRzLkNyZWF0ZVRoZUNvbmNlcHRVcmwgPSBleHBvcnRzLkNyZWF0ZVRoZUNoYXJhY3RlckRhdGFVcmwgPSBleHBvcnRzLkNyZWF0ZVRoZVRleHREYXRhVXJsID0gZXhwb3J0cy5HZXRSZXNlcnZlZElkVXJsID0gZXhwb3J0cy5HZXRBbGxDb25jZXB0c0J5VHlwZVVybCA9IGV4cG9ydHMuR2V0Q2hhcmFjdGVyQnlDaGFyYWN0ZXJVcmwgPSBleHBvcnRzLkdldENvbmNlcHRCeUNoYXJhY3RlckFuZFR5cGVVcmwgPSBleHBvcnRzLkdldENvbmNlcHRCeUNoYXJhY3RlclZhbHVlVXJsID0gZXhwb3J0cy5HZXRBbGxDb25uZWN0aW9uc09mQ29tcG9zaXRpb25VcmwgPSBleHBvcnRzLkdldEFsbENvbm5lY3Rpb25zT2ZVc2VyVXJsID0gZXhwb3J0cy5HZXRBbGxDb25jZXB0c09mVXNlclVybCA9IGV4cG9ydHMuR2V0Q29uY2VwdFVybCA9IGV4cG9ydHMuQkFTRV9VUkwgPSB2b2lkIDA7XG5leHBvcnRzLkJBU0VfVVJMID0gXCJodHRwczovL2FscGhhLmZyZWVzY2hlbWEuY29tXCI7XG5leHBvcnRzLkdldENvbmNlcHRVcmwgPSBleHBvcnRzLkJBU0VfVVJMICsgJy9hcGkvZ2V0Q29uY2VwdCc7XG5leHBvcnRzLkdldEFsbENvbmNlcHRzT2ZVc2VyVXJsID0gZXhwb3J0cy5CQVNFX1VSTCArICcvYXBpL2dldF9hbGxfY29uY2VwdHNfb2ZfdXNlcic7XG5leHBvcnRzLkdldEFsbENvbm5lY3Rpb25zT2ZVc2VyVXJsID0gZXhwb3J0cy5CQVNFX1VSTCArICcvYXBpL2dldF9hbGxfY29ubmVjdGlvbnNfb2ZfdXNlcic7XG5leHBvcnRzLkdldEFsbENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvblVybCA9IGV4cG9ydHMuQkFTRV9VUkwgKyAnL2FwaS9nZXRfYWxsX2Nvbm5lY3Rpb25zX29mX2NvbXBvc2l0aW9uJztcbmV4cG9ydHMuR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyVmFsdWVVcmwgPSBleHBvcnRzLkJBU0VfVVJMICsgJy9hcGkvZ2V0X2NvbmNlcHRfYnlfY2hhcmFjdGVyX3ZhbHVlJztcbmV4cG9ydHMuR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyQW5kVHlwZVVybCA9IGV4cG9ydHMuQkFTRV9VUkwgKyAnL2FwaS9nZXRfY29uY2VwdF9ieV9jaGFyYWN0ZXJfYW5kX3R5cGUnO1xuZXhwb3J0cy5HZXRDaGFyYWN0ZXJCeUNoYXJhY3RlclVybCA9IGV4cG9ydHMuQkFTRV9VUkwgKyAnL2FwaS9nZXRfY2hhcmFjdGVyX2J5X2NoYXJhY3Rlcic7XG5leHBvcnRzLkdldEFsbENvbmNlcHRzQnlUeXBlVXJsID0gZXhwb3J0cy5CQVNFX1VSTCArICcvYXBpL2dldF9hbGxfY29uY2VwdHNfYnlfdHlwZSc7XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8gQVBJIEZvciBSZXNlcnZlZCBJZHMgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5leHBvcnRzLkdldFJlc2VydmVkSWRVcmwgPSBleHBvcnRzLkJBU0VfVVJMICsgJy9hcGkvZ2V0X3Jlc2VydmVkX2lkcyc7XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vL0FQSSBGb3IgQ3JlYXRpbmcgRGF0YSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuZXhwb3J0cy5DcmVhdGVUaGVUZXh0RGF0YVVybCA9IGV4cG9ydHMuQkFTRV9VUkwgKyAnL2FwaS9jcmVhdGVfdGV4dF9kYXRhJztcbmV4cG9ydHMuQ3JlYXRlVGhlQ2hhcmFjdGVyRGF0YVVybCA9IGV4cG9ydHMuQkFTRV9VUkwgKyAnL2FwaS9jcmVhdGVfY2hhcmFjdGVyX2RhdGEnO1xuZXhwb3J0cy5DcmVhdGVUaGVDb25jZXB0VXJsID0gZXhwb3J0cy5CQVNFX1VSTCArICcvYXBpL2NyZWF0ZV90aGVfY29uY2VwdCc7XG5leHBvcnRzLkNyZWF0ZVRoZUNvbm5lY3Rpb25VcmwgPSBleHBvcnRzLkJBU0VfVVJMICsgJy9hcGkvY3JlYXRlX3RoZV9jb25uZWN0aW9uJztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Db25jZXB0ID0gdm9pZCAwO1xuY29uc3QgQ29uY2VwdERhdGFfMSA9IHJlcXVpcmUoXCIuL0NvbmNlcHREYXRhXCIpO1xuY2xhc3MgQ29uY2VwdCB7XG4gICAgY29uc3RydWN0b3IoaWQsIHVzZXJJZCwgdHlwZUlkLCB0eXBlVXNlcklkLCBjYXRlZ29yeUlkLCBjYXRlZ29yeVVzZXJJZCwgcmVmZXJlbnRJZCwgcmVmZXJlbnRVc2VySWQsIGNoYXJhY3RlclZhbHVlLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbklkLCBzZXNzaW9uVXNlcklkLCBpc05ldyA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy51c2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHRoaXMudHlwZUlkID0gdHlwZUlkO1xuICAgICAgICB0aGlzLnR5cGVVc2VySWQgPSB0eXBlVXNlcklkO1xuICAgICAgICB0aGlzLmNhdGVnb3J5SWQgPSBjYXRlZ29yeUlkO1xuICAgICAgICB0aGlzLmNhdGVnb3J5VXNlcklkID0gY2F0ZWdvcnlVc2VySWQ7XG4gICAgICAgIHRoaXMucmVmZXJlbnRJZCA9IHJlZmVyZW50SWQ7XG4gICAgICAgIHRoaXMucmVmZXJlbnQgPSByZWZlcmVudElkO1xuICAgICAgICB0aGlzLnJlZmVyZW50VXNlcklkID0gcmVmZXJlbnRVc2VySWQ7XG4gICAgICAgIHRoaXMuY2hhcmFjdGVyVmFsdWUgPSBjaGFyYWN0ZXJWYWx1ZTtcbiAgICAgICAgdGhpcy5zZWN1cml0eUlkID0gc2VjdXJpdHlJZDtcbiAgICAgICAgdGhpcy5zZWN1cml0eVVzZXJJZCA9IHNlY3VyaXR5VXNlcklkO1xuICAgICAgICB0aGlzLmFjY2Vzc0lkID0gYWNjZXNzSWQ7XG4gICAgICAgIHRoaXMuYWNjZXNzVXNlcklkID0gYWNjZXNzVXNlcklkO1xuICAgICAgICB0aGlzLnNlc3Npb25JZCA9IHNlc3Npb25JZDtcbiAgICAgICAgdGhpcy5zZXNzaW9uVXNlcklkID0gc2Vzc2lvblVzZXJJZDtcbiAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgdGhpcy50eXBlID0gbnVsbDtcbiAgICAgICAgdGhpcy5pc05ldyA9IGlzTmV3O1xuICAgICAgICBDb25jZXB0RGF0YV8xLkNvbmNlcHRzRGF0YS5BZGRDb25jZXB0KHRoaXMpO1xuICAgIH1cbiAgICBnZXRUeXBlKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnR5cGVJZCk7XG4gICAgfVxufVxuZXhwb3J0cy5Db25jZXB0ID0gQ29uY2VwdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Db25jZXB0c0RhdGEgPSB2b2lkIDA7XG5jbGFzcyBDb25jZXB0c0RhdGEge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm5hbWUgPSBcImNvbmNlcHRzQXJyYXlcIjtcbiAgICB9XG4gICAgc3RhdGljIENoZWNrQ29udGFpbnMoY29uY2VwdCkge1xuICAgICAgICB2YXIgY29udGFpbnMgPSBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbmNlcHRzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmNlcHRzQXJyYXlbaV0uaWQgPT0gY29uY2VwdC5pZCkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5zID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGFpbnM7XG4gICAgfVxuICAgIHN0YXRpYyBBZGRDb25jZXB0KGNvbmNlcHQpIHtcbiAgICAgICAgdmFyIGNvbnRhaW5zID0gdGhpcy5DaGVja0NvbnRhaW5zKGNvbmNlcHQpO1xuICAgICAgICB0aGlzLmNvbmNlcHREaWN0aW9uYXJ5W2NvbmNlcHQuaWRdID0gY29uY2VwdDtcbiAgICAgICAgaWYgKGNvbnRhaW5zKSB7XG4gICAgICAgICAgICB0aGlzLlJlbW92ZUNvbmNlcHQoY29uY2VwdCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb25jZXB0c0FycmF5LnB1c2goY29uY2VwdCk7XG4gICAgfVxuICAgIHN0YXRpYyBSZW1vdmVDb25jZXB0KGNvbmNlcHQpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbmNlcHRzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmNlcHRzQXJyYXlbaV0uaWQgPT0gY29uY2VwdC5pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29uY2VwdHNBcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIEdldENvbmNlcHQoaWQpIHtcbiAgICAgICAgdmFyIG15Q29uY2VwdDtcbiAgICAgICAgbXlDb25jZXB0ID0gbnVsbDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbmNlcHRzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmNlcHRzQXJyYXlbaV0uaWQgPT0gaWQpIHtcbiAgICAgICAgICAgICAgICBteUNvbmNlcHQgPSB0aGlzLmNvbmNlcHRzQXJyYXlbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG15Q29uY2VwdDtcbiAgICB9XG4gICAgc3RhdGljIEdldENvbmNlcHRCeUNoYXJhY3RlcihjaGFyYWN0ZXJWYWx1ZSkge1xuICAgICAgICB2YXIgbXlDb25jZXB0O1xuICAgICAgICBteUNvbmNlcHQgPSBudWxsO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29uY2VwdHNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29uY2VwdHNBcnJheVtpXS5jaGFyYWN0ZXJWYWx1ZSA9PSBjaGFyYWN0ZXJWYWx1ZSkge1xuICAgICAgICAgICAgICAgIG15Q29uY2VwdCA9IHRoaXMuY29uY2VwdHNBcnJheVtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbXlDb25jZXB0O1xuICAgIH1cbiAgICBzdGF0aWMgR2V0Q29uY2VwdHNCeVR5cGVJZCh0eXBlSWQpIHtcbiAgICAgICAgdmFyIG15Q29uY2VwdDtcbiAgICAgICAgdmFyIENvbmNlcHRMaXN0ID0gW107XG4gICAgICAgIG15Q29uY2VwdCA9IG51bGw7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb25jZXB0c0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25jZXB0c0FycmF5W2ldLnR5cGVJZCA9PSB0eXBlSWQpIHtcbiAgICAgICAgICAgICAgICBDb25jZXB0TGlzdC5wdXNoKHRoaXMuY29uY2VwdHNBcnJheVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIENvbmNlcHRMaXN0O1xuICAgIH1cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cbn1cbmV4cG9ydHMuQ29uY2VwdHNEYXRhID0gQ29uY2VwdHNEYXRhO1xuQ29uY2VwdHNEYXRhLmNvbmNlcHRzQXJyYXkgPSBbXTtcbkNvbmNlcHRzRGF0YS5jb25jZXB0RGljdGlvbmFyeSA9IFtdO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkNvbm5lY3Rpb24gPSB2b2lkIDA7XG5jbGFzcyBDb25uZWN0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihpZCA9IDAsIG9mVGhlQ29uY2VwdElkLCB0b1RoZUNvbmNlcHRJZCwgb2ZUaGVDb25jZXB0VXNlcklkLCB0b1RoZUNvbmNlcHRVc2VySWQsIHVzZXJJZCwgdHlwZUlkLCB0eXBlVXNlcklkLCBvcmRlcklkLCBvcmRlclVzZXJJZCwgc2VjdXJpdHlJZCwgc2VjdXJpdHlVc2VySWQsIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQsIHNlc3Npb25JbmZvcm1hdGlvbklkLCBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLk9mVGhlQ29uY2VwdElkID0gb2ZUaGVDb25jZXB0SWQ7XG4gICAgICAgIHRoaXMuVG9UaGVDb25jZXB0SWQgPSB0b1RoZUNvbmNlcHRJZDtcbiAgICAgICAgdGhpcy5vZlRoZUNvbmNlcHRJZCA9IG9mVGhlQ29uY2VwdElkO1xuICAgICAgICB0aGlzLnRvVGhlQ29uY2VwdElkID0gdG9UaGVDb25jZXB0SWQ7XG4gICAgICAgIHRoaXMuT2ZUaGVDb25jZXB0VXNlcklkID0gb2ZUaGVDb25jZXB0VXNlcklkO1xuICAgICAgICB0aGlzLlRvVGhlQ29uY2VwdFVzZXJJZCA9IHRvVGhlQ29uY2VwdFVzZXJJZDtcbiAgICAgICAgdGhpcy51c2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHRoaXMudHlwZUlkID0gdHlwZUlkO1xuICAgICAgICB0aGlzLnR5cGVVc2VySWQgPSB0eXBlVXNlcklkO1xuICAgICAgICB0aGlzLm9yZGVySWQgPSBvcmRlcklkO1xuICAgICAgICB0aGlzLm9yZGVyVXNlcklkID0gb3JkZXJVc2VySWQ7XG4gICAgICAgIHRoaXMuc2VjdXJpdHlJZCA9IHNlY3VyaXR5SWQ7XG4gICAgICAgIHRoaXMuc2VjdXJpdHlVc2VySWQgPSBzZWN1cml0eVVzZXJJZDtcbiAgICAgICAgdGhpcy5hY2Nlc3NJZCA9IGFjY2Vzc0lkO1xuICAgICAgICB0aGlzLmFjY2Vzc1VzZXJJZCA9IGFjY2Vzc1VzZXJJZDtcbiAgICAgICAgdGhpcy5zZXNzaW9uSW5mb3JtYXRpb25JZCA9IHNlc3Npb25JbmZvcm1hdGlvbklkO1xuICAgICAgICB0aGlzLnNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCA9IHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZDtcbiAgICB9XG59XG5leHBvcnRzLkNvbm5lY3Rpb24gPSBDb25uZWN0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkNvbm5lY3Rpb25EYXRhID0gdm9pZCAwO1xuY2xhc3MgQ29ubmVjdGlvbkRhdGEge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm5hbWUgPSBcIkNvbm5lY3Rpb24gQXJyYXlcIjtcbiAgICB9XG4gICAgc3RhdGljIENoZWNrQ29udGFpbnMoY29ubmVjdGlvbikge1xuICAgICAgICB2YXIgY29udGFpbnMgPSBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbm5lY3Rpb25BcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvbkFycmF5W2ldLmlkID09IGNvbm5lY3Rpb24uaWQpIHtcbiAgICAgICAgICAgICAgICBjb250YWlucyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5zO1xuICAgIH1cbiAgICBzdGF0aWMgQWRkQ29ubmVjdGlvbihjb25uZWN0aW9uKSB7XG4gICAgICAgIHZhciBjb250YWlucyA9IHRoaXMuQ2hlY2tDb250YWlucyhjb25uZWN0aW9uKTtcbiAgICAgICAgaWYgKCFjb250YWlucykge1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uQXJyYXkucHVzaChjb25uZWN0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgQWRkVG9EaWN0aW9uYXJ5KGNvbm5lY3Rpb24pIHtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uRGljdGlvbmFyeVtjb25uZWN0aW9uLmlkXSA9IGNvbm5lY3Rpb247XG4gICAgfVxuICAgIHN0YXRpYyBSZW1vdmVDb25uZWN0aW9uKGNvbm5lY3Rpb24pIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbm5lY3Rpb25BcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvbkFycmF5W2ldLmlkID09IGNvbm5lY3Rpb24uaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25BcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIEdldENvbm5lY3Rpb24oaWQpIHtcbiAgICAgICAgdmFyIG15Q29uY2VwdDtcbiAgICAgICAgbXlDb25jZXB0ID0gbnVsbDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbm5lY3Rpb25BcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvbkFycmF5W2ldLmlkID09IGlkKSB7XG4gICAgICAgICAgICAgICAgbXlDb25jZXB0ID0gdGhpcy5jb25uZWN0aW9uQXJyYXlbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG15Q29uY2VwdDtcbiAgICB9XG4gICAgc3RhdGljIEdldENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvbihpZCkge1xuICAgICAgICB2YXIgY29ubmVjdGlvbkxpc3QgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbm5lY3Rpb25BcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvbkFycmF5W2ldLnR5cGVJZCA9PSBpZCkge1xuICAgICAgICAgICAgICAgIGNvbm5lY3Rpb25MaXN0LnB1c2godGhpcy5jb25uZWN0aW9uQXJyYXlbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb25uZWN0aW9uTGlzdDtcbiAgICB9XG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG59XG5leHBvcnRzLkNvbm5lY3Rpb25EYXRhID0gQ29ubmVjdGlvbkRhdGE7XG5Db25uZWN0aW9uRGF0YS5jb25uZWN0aW9uQXJyYXkgPSBbXTtcbkNvbm5lY3Rpb25EYXRhLmNvbm5lY3Rpb25EaWN0aW9uYXJ5ID0gW107XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5SZXNlcnZlZElkcyA9IHZvaWQgMDtcbmNvbnN0IEdldFJlc2VydmVkSWRzXzEgPSByZXF1aXJlKFwiLi4vQXBpL0dldFJlc2VydmVkSWRzXCIpO1xuY2xhc3MgUmVzZXJ2ZWRJZHMge1xuICAgIHN0YXRpYyBnZXRJZCgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaWRzLmxlbmd0aCk7XG4gICAgICAgICAgICBpZiAodGhpcy5pZHMubGVuZ3RoIDwgNSkge1xuICAgICAgICAgICAgICAgIHZhciBpZHMgPSB5aWVsZCAoMCwgR2V0UmVzZXJ2ZWRJZHNfMS5HZXRSZXNlcnZlZElkcykoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBpZCA9IHRoaXMuaWRzWzBdO1xuICAgICAgICAgICAgdGhpcy5pZHMuc2hpZnQoKTtcbiAgICAgICAgICAgIHJldHVybiBpZDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBBZGRJZChpZCkge1xuICAgICAgICBpZiAoIXRoaXMuaWRzLmluY2x1ZGVzKGlkKSkge1xuICAgICAgICAgICAgdGhpcy5pZHMucHVzaChpZCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlJlc2VydmVkSWRzID0gUmVzZXJ2ZWRJZHM7XG5SZXNlcnZlZElkcy5pZHMgPSBbXTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TeW5jRGF0YSA9IHZvaWQgMDtcbmNvbnN0IENyZWF0ZVRoZUNvbmNlcHRBcGlfMSA9IHJlcXVpcmUoXCIuLi9BcGkvQ3JlYXRlL0NyZWF0ZVRoZUNvbmNlcHRBcGlcIik7XG5jb25zdCBDcmVhdGVUaGVDb25uZWN0aW9uQXBpXzEgPSByZXF1aXJlKFwiLi4vQXBpL0NyZWF0ZS9DcmVhdGVUaGVDb25uZWN0aW9uQXBpXCIpO1xuY29uc3QgQ29uY2VwdERhdGFfMSA9IHJlcXVpcmUoXCIuL0NvbmNlcHREYXRhXCIpO1xuY2xhc3MgU3luY0RhdGEge1xuICAgIHN0YXRpYyBDaGVja0NvbnRhaW5zKGNvbmNlcHQpIHtcbiAgICAgICAgdmFyIGNvbnRhaW5zID0gZmFsc2U7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb25jZXB0c1N5bmNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29uY2VwdHNTeW5jQXJyYXlbaV0uaWQgPT0gY29uY2VwdC5pZCkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5zID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGFpbnM7XG4gICAgfVxuICAgIHN0YXRpYyBDaGVja0NvbnRhaW5zQ29ubmVjdGlvbihjb25uZWN0aW9uKSB7XG4gICAgICAgIHZhciBjb250YWlucyA9IGZhbHNlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29ubmVjdGlvblN5bmNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvblN5bmNBcnJheVtpXS5pZCA9PSBjb25uZWN0aW9uLmlkKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbnMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250YWlucztcbiAgICB9XG4gICAgc3RhdGljIEFkZENvbmNlcHQoY29uY2VwdCkge1xuICAgICAgICB2YXIgY29udGFpbnMgPSBmYWxzZTtcbiAgICAgICAgQ29uY2VwdERhdGFfMS5Db25jZXB0c0RhdGEuQWRkQ29uY2VwdChjb25jZXB0KTtcbiAgICAgICAgaWYgKCFjb250YWlucykge1xuICAgICAgICAgICAgdGhpcy5jb25jZXB0c1N5bmNBcnJheS5wdXNoKGNvbmNlcHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBSZW1vdmVDb25jZXB0KGNvbmNlcHQpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbmNlcHRzU3luY0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25jZXB0c1N5bmNBcnJheVtpXS5pZCA9PSBjb25jZXB0LmlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25jZXB0c1N5bmNBcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIEFkZENvbm5lY3Rpb24oY29ubmVjdGlvbikge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbm5lY3Rpb25TeW5jQXJyYXkpO1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb25TeW5jQXJyYXkucHVzaChjb25uZWN0aW9uKTtcbiAgICB9XG4gICAgc3RhdGljIFJlbW92ZUNvbm5lY3Rpb24oY29ubmVjdGlvbikge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29ubmVjdGlvblN5bmNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvblN5bmNBcnJheVtpXS5pZCA9PSBjb25uZWN0aW9uLmlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uU3luY0FycmF5LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgU3luY0RhdGFPbmxpbmUoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbmNlcHRzU3luY0FycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICgwLCBDcmVhdGVUaGVDb25jZXB0QXBpXzEuQ3JlYXRlVGhlQ29uY2VwdEFwaSkodGhpcy5jb25jZXB0c1N5bmNBcnJheSk7XG4gICAgICAgICAgICB0aGlzLmNvbmNlcHRzU3luY0FycmF5ID0gW107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvblN5bmNBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAoMCwgQ3JlYXRlVGhlQ29ubmVjdGlvbkFwaV8xLkNyZWF0ZVRoZUNvbm5lY3Rpb25BcGkpKHRoaXMuY29ubmVjdGlvblN5bmNBcnJheSk7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25TeW5jQXJyYXkgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCJkb25lXCI7XG4gICAgfVxufVxuZXhwb3J0cy5TeW5jRGF0YSA9IFN5bmNEYXRhO1xuU3luY0RhdGEuY29uY2VwdHNTeW5jQXJyYXkgPSBbXTtcblN5bmNEYXRhLmNvbm5lY3Rpb25TeW5jQXJyYXkgPSBbXTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5UaGVDaGFyYWN0ZXIgPSB2b2lkIDA7XG5jbGFzcyBUaGVDaGFyYWN0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHVzZXJJZCwgZGF0YSwgc2VjdXJpdHlJZCwgc2VjdXJpdHlVc2VySWQsIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQsIHNlc3Npb25JZCwgc2Vzc2lvblVzZXJJZCwgZW50cnlUaW1lc3RhbXAsIGlzTmV3KSB7XG4gICAgICAgIHRoaXMuaWQgPSAwO1xuICAgICAgICB0aGlzLmlzTmV3ID0gZmFsc2U7XG4gICAgICAgIHRoaXMudXNlcklkID0gdXNlcklkO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLnNlY3VyaXR5SWQgPSBzZWN1cml0eUlkO1xuICAgICAgICB0aGlzLnNlY3VyaXR5VXNlcklkID0gc2VjdXJpdHlVc2VySWQ7XG4gICAgICAgIHRoaXMuYWNjZXNzSWQgPSBhY2Nlc3NJZDtcbiAgICAgICAgdGhpcy5hY2Nlc3NVc2VySWQgPSBhY2Nlc3NVc2VySWQ7XG4gICAgICAgIHRoaXMuc2Vzc2lvbklkID0gc2Vzc2lvbklkO1xuICAgICAgICB0aGlzLnNlc3Npb25Vc2VySWQgPSBzZXNzaW9uVXNlcklkO1xuICAgICAgICB0aGlzLmlzTmV3ID0gaXNOZXc7XG4gICAgfVxufVxuZXhwb3J0cy5UaGVDaGFyYWN0ZXIgPSBUaGVDaGFyYWN0ZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVGhlVGV4dHMgPSB2b2lkIDA7XG5jbGFzcyBUaGVUZXh0cyB7XG4gICAgY29uc3RydWN0b3IodXNlcklkLCBkYXRhLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbklkLCBzZXNzaW9uVXNlcklkLCBlbnRyeVRpbWVzdGFtcCwgaXNOZXcpIHtcbiAgICAgICAgdGhpcy5pZCA9IDA7XG4gICAgICAgIHRoaXMudXNlcklkID0gdXNlcklkO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLnNlY3VyaXR5SWQgPSBzZWN1cml0eUlkO1xuICAgICAgICB0aGlzLnNlY3VyaXR5VXNlcklkID0gc2VjdXJpdHlVc2VySWQ7XG4gICAgICAgIHRoaXMuYWNjZXNzSWQgPSBhY2Nlc3NJZDtcbiAgICAgICAgdGhpcy5hY2Nlc3NVc2VySWQgPSBhY2Nlc3NVc2VySWQ7XG4gICAgICAgIHRoaXMuc2Vzc2lvbklkID0gc2Vzc2lvbklkO1xuICAgICAgICB0aGlzLnNlc3Npb25Vc2VySWQgPSBzZXNzaW9uVXNlcklkO1xuICAgICAgICB0aGlzLmVudHJ5VGltZXN0YW1wID0gZW50cnlUaW1lc3RhbXA7XG4gICAgICAgIHRoaXMuaXNOZXcgPSBpc05ldztcbiAgICB9XG59XG5leHBvcnRzLlRoZVRleHRzID0gVGhlVGV4dHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5DcmVhdGVDb25uZWN0aW9uQmV0d2VlblR3b0NvbmNlcHRzID0gdm9pZCAwO1xuY29uc3QgQ29ubmVjdGlvbl8xID0gcmVxdWlyZShcIi4uL0RhdGFTdHJ1Y3R1cmVzL0Nvbm5lY3Rpb25cIik7XG5jb25zdCBTeW5jRGF0YV8xID0gcmVxdWlyZShcIi4uL0RhdGFTdHJ1Y3R1cmVzL1N5bmNEYXRhXCIpO1xuY29uc3QgTWFrZVRoZUluc3RhbmNlQ29uY2VwdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL01ha2VUaGVJbnN0YW5jZUNvbmNlcHRcIikpO1xuZnVuY3Rpb24gQ3JlYXRlQ29ubmVjdGlvbkJldHdlZW5Ud29Db25jZXB0cyhjb25jZXB0MURhdGEsIGNvbmNlcHQyRGF0YSwgbGlua2VyLCBib3RoID0gZmFsc2UpIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciB1c2VySWQgPSBjb25jZXB0MURhdGEudXNlcklkO1xuICAgICAgICB2YXIgb3JkZXJVc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHZhciBzZWN1cml0eUlkID0gOTk5O1xuICAgICAgICB2YXIgc2VjdXJpdHlVc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHZhciBhY2Nlc3NJZCA9IDQ7XG4gICAgICAgIHZhciBhY2Nlc3NVc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHZhciBzZXNzaW9uSW5mb3JtYXRpb25JZCA9IDk5OTtcbiAgICAgICAgdmFyIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCA9IDk5OTtcbiAgICAgICAgaWYgKGJvdGgpIHtcbiAgICAgICAgICAgIGxldCBwcmVmaXgxID0gKChfYSA9IGNvbmNlcHQxRGF0YS50eXBlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2hhcmFjdGVyVmFsdWUpICsgXCJfc1wiO1xuICAgICAgICAgICAgbGV0IGxpbmtlckFkZDEgPSBsaW5rZXIgKyBcIl9ieVwiO1xuICAgICAgICAgICAgbGV0IGJhY2t3YXJkTGlua2VyID0gcHJlZml4MSArIFwiX1wiICsgbGlua2VyQWRkMTtcbiAgICAgICAgICAgIHZhciBjb25uZWN0aW9uQ29uY2VwdCA9IHlpZWxkICgwLCBNYWtlVGhlSW5zdGFuY2VDb25jZXB0XzEuZGVmYXVsdCkoXCJjb25uZWN0aW9uXCIsIGJhY2t3YXJkTGlua2VyLCBmYWxzZSwgOTk5LCA5OTksIDk5OSk7XG4gICAgICAgICAgICB2YXIgbmV3Q29ubmVjdGlvbiA9IG5ldyBDb25uZWN0aW9uXzEuQ29ubmVjdGlvbigwLCBjb25jZXB0MURhdGEuaWQsIGNvbmNlcHQyRGF0YS5pZCwgY29uY2VwdDFEYXRhLnVzZXJJZCwgY29uY2VwdDJEYXRhLnVzZXJJZCwgY29uY2VwdDFEYXRhLnVzZXJJZCwgY29ubmVjdGlvbkNvbmNlcHQuaWQsIGNvbm5lY3Rpb25Db25jZXB0LnVzZXJJZCwgMywgdXNlcklkLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCk7XG4gICAgICAgICAgICBTeW5jRGF0YV8xLlN5bmNEYXRhLkFkZENvbm5lY3Rpb24obmV3Q29ubmVjdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHByZWZpeCA9ICgoX2IgPSBjb25jZXB0MURhdGEudHlwZSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNoYXJhY3RlclZhbHVlKSArIFwiX3NcIjtcbiAgICAgICAgbGV0IGxpbmtlckFkZCA9IGxpbmtlciArIFwiX3NcIjtcbiAgICAgICAgbGV0IGZvcndhcmRMaW5rZXIgPSBwcmVmaXggKyBcIl9cIiArIGxpbmtlckFkZDtcbiAgICAgICAgY29uc29sZS5sb2coXCJjcmVhdGluZyBjb25uZWN0aW9uIGJldHdlZW4gdHdvIGNvbmNlcHRzXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhjb25jZXB0MURhdGEpO1xuICAgICAgICBjb25zb2xlLmxvZyhjb25jZXB0MkRhdGEpO1xuICAgICAgICB2YXIgY29ubmVjdGlvbkNvbmNlcHQgPSB5aWVsZCAoMCwgTWFrZVRoZUluc3RhbmNlQ29uY2VwdF8xLmRlZmF1bHQpKFwiY29ubmVjdGlvblwiLCBmb3J3YXJkTGlua2VyLCBmYWxzZSwgOTk5LCA5OTksIDk5OSk7XG4gICAgICAgIHZhciBuZXdDb25uZWN0aW9uID0gbmV3IENvbm5lY3Rpb25fMS5Db25uZWN0aW9uKDAsIGNvbmNlcHQxRGF0YS5pZCwgY29uY2VwdDJEYXRhLmlkLCBjb25jZXB0MURhdGEudXNlcklkLCBjb25jZXB0MkRhdGEudXNlcklkLCBjb25jZXB0MURhdGEudXNlcklkLCBjb25uZWN0aW9uQ29uY2VwdC5pZCwgY29ubmVjdGlvbkNvbmNlcHQudXNlcklkLCAzLCB1c2VySWQsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkKTtcbiAgICAgICAgU3luY0RhdGFfMS5TeW5jRGF0YS5BZGRDb25uZWN0aW9uKG5ld0Nvbm5lY3Rpb24pO1xuICAgIH0pO1xufVxuZXhwb3J0cy5DcmVhdGVDb25uZWN0aW9uQmV0d2VlblR3b0NvbmNlcHRzID0gQ3JlYXRlQ29ubmVjdGlvbkJldHdlZW5Ud29Db25jZXB0cztcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBDcmVhdGVUaGVDb25uZWN0aW9uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vQ3JlYXRlVGhlQ29ubmVjdGlvblwiKSk7XG5jb25zdCBNYWtlVGhlSW5zdGFuY2VDb25jZXB0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTWFrZVRoZUluc3RhbmNlQ29uY2VwdFwiKSk7XG5mdW5jdGlvbiBDcmVhdGVUaGVDb21wb3NpdGlvbihqc29uLCBvZlRoZUNvbmNlcHRJZCA9IG51bGwsIG9mVGhlQ29uY2VwdFVzZXJJZCA9IG51bGwsIG1haW5LZXkgPSBudWxsLCB1c2VySWQgPSBudWxsLCBhY2Nlc3NJZCA9IG51bGwsIHNlc3Npb25JbmZvcm1hdGlvbklkID0gbnVsbCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBsb2NhbFVzZXJJZCA9IHVzZXJJZCAhPT0gbnVsbCAmJiB1c2VySWQgIT09IHZvaWQgMCA/IHVzZXJJZCA6IDEwMjY3O1xuICAgICAgICB2YXIgbG9jYWxBY2Nlc3NJZCA9IGFjY2Vzc0lkICE9PSBudWxsICYmIGFjY2Vzc0lkICE9PSB2b2lkIDAgPyBhY2Nlc3NJZCA6IDEwMjY3O1xuICAgICAgICB2YXIgbG9jYWxTZXNzaW9uSWQgPSBzZXNzaW9uSW5mb3JtYXRpb25JZCAhPT0gbnVsbCAmJiBzZXNzaW9uSW5mb3JtYXRpb25JZCAhPT0gdm9pZCAwID8gc2Vzc2lvbkluZm9ybWF0aW9uSWQgOiAxMDI2NztcbiAgICAgICAgdmFyIE1haW5LZXlMb2NhbCA9IG1haW5LZXkgIT09IG51bGwgJiYgbWFpbktleSAhPT0gdm9pZCAwID8gbWFpbktleSA6IDA7XG4gICAgICAgIHZhciBNYWluQ29uY2VwdDtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4ganNvbikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBqc29uW2tleV0gIT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBpZiAob2ZUaGVDb25jZXB0SWQgPT0gbnVsbCAmJiBvZlRoZUNvbmNlcHRVc2VySWQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbG9jYWxNYWluS2V5ID0gTWFpbktleUxvY2FsO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY29uY2VwdFN0cmluZyA9IHlpZWxkICgwLCBNYWtlVGhlSW5zdGFuY2VDb25jZXB0XzEuZGVmYXVsdCkoa2V5LCBcIlwiLCB0cnVlLCBsb2NhbFVzZXJJZCwgbG9jYWxBY2Nlc3NJZCwgbG9jYWxTZXNzaW9uSWQpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29uY2VwdCA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgIE1haW5Db25jZXB0ID0gY29uY2VwdDtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxNYWluS2V5ID0gY29uY2VwdC5pZDtcbiAgICAgICAgICAgICAgICAgICAgTWFpbktleUxvY2FsID0gY29uY2VwdC5pZDtcbiAgICAgICAgICAgICAgICAgICAgQ3JlYXRlVGhlQ29tcG9zaXRpb24oanNvbltrZXldLCBjb25jZXB0LmlkLCBjb25jZXB0LnVzZXJJZCwgbG9jYWxNYWluS2V5LCB1c2VySWQsIGFjY2Vzc0lkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2ZUaGUgPSBvZlRoZUNvbmNlcHRJZCAhPT0gbnVsbCAmJiBvZlRoZUNvbmNlcHRJZCAhPT0gdm9pZCAwID8gb2ZUaGVDb25jZXB0SWQgOiA5OTk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvZlRoZVVzZXIgPSBvZlRoZUNvbmNlcHRVc2VySWQgIT09IG51bGwgJiYgb2ZUaGVDb25jZXB0VXNlcklkICE9PSB2b2lkIDAgPyBvZlRoZUNvbmNlcHRVc2VySWQgOiAxMDI2NztcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxvY2FsTWFpbktleSA9IE1haW5LZXlMb2NhbDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCAoMCwgTWFrZVRoZUluc3RhbmNlQ29uY2VwdF8xLmRlZmF1bHQpKGtleSwgXCJcIiwgdHJ1ZSwgbG9jYWxVc2VySWQsIGxvY2FsQWNjZXNzSWQsIGxvY2FsU2Vzc2lvbklkKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmNlcHQgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9mIHRoZSBjb25jZXB0XCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb25jZXB0LmlkKTtcbiAgICAgICAgICAgICAgICAgICAgKDAsIENyZWF0ZVRoZUNvbm5lY3Rpb25fMS5kZWZhdWx0KShvZlRoZSwgb2ZUaGVVc2VyLCBjb25jZXB0LmlkLCBjb25jZXB0LnVzZXJJZCwgbG9jYWxNYWluS2V5LCBsb2NhbFNlc3Npb25JZCwgY29uY2VwdC51c2VySWQpO1xuICAgICAgICAgICAgICAgICAgICBDcmVhdGVUaGVDb21wb3NpdGlvbihqc29uW2tleV0sIGNvbmNlcHQuaWQsIGNvbmNlcHQudXNlcklkLCBsb2NhbE1haW5LZXksIHVzZXJJZCwgYWNjZXNzSWQsIHNlc3Npb25JbmZvcm1hdGlvbklkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgb2ZUaGUgPSBvZlRoZUNvbmNlcHRJZCAhPT0gbnVsbCAmJiBvZlRoZUNvbmNlcHRJZCAhPT0gdm9pZCAwID8gb2ZUaGVDb25jZXB0SWQgOiA5OTk7XG4gICAgICAgICAgICAgICAgdmFyIG9mVGhlVXNlciA9IG9mVGhlQ29uY2VwdFVzZXJJZCAhPT0gbnVsbCAmJiBvZlRoZUNvbmNlcHRVc2VySWQgIT09IHZvaWQgMCA/IG9mVGhlQ29uY2VwdFVzZXJJZCA6IDEwMjY3O1xuICAgICAgICAgICAgICAgIHZhciBsb2NhbE1haW5LZXkgPSBNYWluS2V5TG9jYWw7XG4gICAgICAgICAgICAgICAgdmFyIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCAoMCwgTWFrZVRoZUluc3RhbmNlQ29uY2VwdF8xLmRlZmF1bHQpKGtleSwganNvbltrZXldLCBmYWxzZSwgbG9jYWxVc2VySWQsIGxvY2FsQWNjZXNzSWQsIGxvY2FsU2Vzc2lvbklkKTtcbiAgICAgICAgICAgICAgICB2YXIgY29uY2VwdCA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgICAgICAgICAgKDAsIENyZWF0ZVRoZUNvbm5lY3Rpb25fMS5kZWZhdWx0KShvZlRoZSwgb2ZUaGVVc2VyLCBjb25jZXB0LmlkLCBjb25jZXB0LnVzZXJJZCwgbG9jYWxNYWluS2V5LCBsb2NhbFNlc3Npb25JZCwgY29uY2VwdC51c2VySWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBNYWluQ29uY2VwdDtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IENyZWF0ZVRoZUNvbXBvc2l0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IENvbmNlcHRfMSA9IHJlcXVpcmUoXCIuLi9EYXRhU3RydWN0dXJlcy9Db25jZXB0XCIpO1xuY29uc3QgUmVzZXJ2ZWRJZHNfMSA9IHJlcXVpcmUoXCIuLi9EYXRhU3RydWN0dXJlcy9SZXNlcnZlZElkc1wiKTtcbmNvbnN0IFN5bmNEYXRhXzEgPSByZXF1aXJlKFwiLi4vRGF0YVN0cnVjdHVyZXMvU3luY0RhdGFcIik7XG5mdW5jdGlvbiBDcmVhdGVUaGVDb25jZXB0KHJlZmVyZW50LCB1c2VySWQsIGNhdGVnb3J5SWQsIGNhdGVnb3J5VXNlcklkLCB0eXBlSWQsIHR5cGVVc2VySWQsIHJlZmVyZW50SWQsIHJlZmVyZW50VXNlcklkLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBpZCA9IHlpZWxkIFJlc2VydmVkSWRzXzEuUmVzZXJ2ZWRJZHMuZ2V0SWQoKTtcbiAgICAgICAgdmFyIGlzTmV3ID0gdHJ1ZTtcbiAgICAgICAgdmFyIGNvbmNlcHQgPSBuZXcgQ29uY2VwdF8xLkNvbmNlcHQoaWQsIHVzZXJJZCwgdHlwZUlkLCB0eXBlVXNlcklkLCBjYXRlZ29yeUlkLCBjYXRlZ29yeVVzZXJJZCwgcmVmZXJlbnRJZCwgcmVmZXJlbnRVc2VySWQsIHJlZmVyZW50LCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCwgaXNOZXcpO1xuICAgICAgICBTeW5jRGF0YV8xLlN5bmNEYXRhLkFkZENvbmNlcHQoY29uY2VwdCk7XG4gICAgICAgIHJldHVybiBjb25jZXB0O1xuICAgIH0pO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gQ3JlYXRlVGhlQ29uY2VwdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQ29ubmVjdGlvbl8xID0gcmVxdWlyZShcIi4uL0RhdGFTdHJ1Y3R1cmVzL0Nvbm5lY3Rpb25cIik7XG5jb25zdCBTeW5jRGF0YV8xID0gcmVxdWlyZShcIi4uL0RhdGFTdHJ1Y3R1cmVzL1N5bmNEYXRhXCIpO1xuZnVuY3Rpb24gY3JlYXRlVGhlQ29ubmVjdGlvbihvZlRoZUNvbmNlcHRJZCwgb2ZUaGVDb25jZXB0VXNlcklkLCB0b1RoZUNvbmNlcHRJZCwgdG9UaGVDb25jZXB0VXNlcklkLCB0eXBlSWQsIHNlc3Npb25JbmZvcm1hdGlvbklkLCBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQpIHtcbiAgICB2YXIgb3JkZXJJZCA9IDE7XG4gICAgdmFyIG9yZGVyVXNlcklkID0gb2ZUaGVDb25jZXB0VXNlcklkO1xuICAgIHZhciB0eXBlVXNlcklkID0gb2ZUaGVDb25jZXB0VXNlcklkO1xuICAgIHZhciB1c2VySWQgPSBvZlRoZUNvbmNlcHRVc2VySWQ7XG4gICAgdmFyIHNlY3VyaXR5SWQgPSAwO1xuICAgIHZhciBzZWN1cml0eVVzZXJJZCA9IG9mVGhlQ29uY2VwdFVzZXJJZDtcbiAgICB2YXIgYWNjZXNzSWQgPSA0O1xuICAgIHZhciBhY2Nlc3NVc2VySWQgPSBvZlRoZUNvbmNlcHRVc2VySWQ7XG4gICAgdmFyIGNvbm5lY3Rpb24gPSBuZXcgQ29ubmVjdGlvbl8xLkNvbm5lY3Rpb24oMCwgb2ZUaGVDb25jZXB0SWQsIHRvVGhlQ29uY2VwdElkLCBvZlRoZUNvbmNlcHRVc2VySWQsIHRvVGhlQ29uY2VwdFVzZXJJZCwgdXNlcklkLCB0eXBlSWQsIHR5cGVVc2VySWQsIG9yZGVySWQsIG9yZGVyVXNlcklkLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCk7XG4gICAgU3luY0RhdGFfMS5TeW5jRGF0YS5BZGRDb25uZWN0aW9uKGNvbm5lY3Rpb24pO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlVGhlQ29ubmVjdGlvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdldENvbXBvc2l0aW9uID0gdm9pZCAwO1xuY29uc3QgR2V0Q29uY2VwdF8xID0gcmVxdWlyZShcIi4uL0FwaS9HZXRDb25jZXB0XCIpO1xuY29uc3QgR2V0QWxsQ29ubmVjdGlvbnNPZkNvbXBvc2l0aW9uXzEgPSByZXF1aXJlKFwiLi4vQXBpL0dldEFsbENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvblwiKTtcbmNvbnN0IENvbmNlcHREYXRhXzEgPSByZXF1aXJlKFwiLi4vRGF0YVN0cnVjdHVyZXMvQ29uY2VwdERhdGFcIik7XG5jb25zdCBDb25uZWN0aW9uRGF0YV8xID0gcmVxdWlyZShcIi4uL0RhdGFTdHJ1Y3R1cmVzL0Nvbm5lY3Rpb25EYXRhXCIpO1xuZnVuY3Rpb24gR2V0Q29tcG9zaXRpb24oaWQpIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBjb25uZWN0aW9uTGlzdCA9IFtdO1xuICAgICAgICB2YXIgcmV0dXJuT3V0cHV0ID0ge307XG4gICAgICAgIC8vY29ubmVjdGlvbkxpc3QgPSBDb25uZWN0aW9uRGF0YS5HZXRDb25uZWN0aW9uc09mQ29tcG9zaXRpb24oaWQpO1xuICAgICAgICB5aWVsZCAoMCwgR2V0QWxsQ29ubmVjdGlvbnNPZkNvbXBvc2l0aW9uXzEuR2V0QWxsQ29ubmVjdGlvbnNPZkNvbXBvc2l0aW9uKShpZCk7XG4gICAgICAgIGNvbm5lY3Rpb25MaXN0ID0gQ29ubmVjdGlvbkRhdGFfMS5Db25uZWN0aW9uRGF0YS5HZXRDb25uZWN0aW9uc09mQ29tcG9zaXRpb24oaWQpO1xuICAgICAgICB2YXIgY29tcG9zaXRpb25MaXN0ID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29ubmVjdGlvbkxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghY29tcG9zaXRpb25MaXN0LmluY2x1ZGVzKGNvbm5lY3Rpb25MaXN0W2ldLm9mVGhlQ29uY2VwdElkKSkge1xuICAgICAgICAgICAgICAgIGNvbXBvc2l0aW9uTGlzdC5wdXNoKGNvbm5lY3Rpb25MaXN0W2ldLm9mVGhlQ29uY2VwdElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgY29uY2VwdCA9IENvbmNlcHREYXRhXzEuQ29uY2VwdHNEYXRhLkdldENvbmNlcHQoaWQpO1xuICAgICAgICBpZiAoY29uY2VwdCA9PSBudWxsICYmIGlkICE9IG51bGwgJiYgaWQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2YXIgY29uY2VwdFN0cmluZyA9IHlpZWxkICgwLCBHZXRDb25jZXB0XzEuR2V0Q29uY2VwdCkoaWQpO1xuICAgICAgICAgICAgY29uY2VwdCA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG91dHB1dCA9IHlpZWxkIHJlY3Vyc2l2ZUZldGNoKGlkLCBjb25uZWN0aW9uTGlzdCwgY29tcG9zaXRpb25MaXN0KTtcbiAgICAgICAgdmFyIG1haW5TdHJpbmcgPSAoX2IgPSAoX2EgPSBjb25jZXB0ID09PSBudWxsIHx8IGNvbmNlcHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbmNlcHQudHlwZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNoYXJhY3RlclZhbHVlKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBcInRvcFwiO1xuICAgICAgICByZXR1cm5PdXRwdXRbbWFpblN0cmluZ10gPSBvdXRwdXQ7XG4gICAgICAgIHJldHVybiByZXR1cm5PdXRwdXQ7XG4gICAgfSk7XG59XG5leHBvcnRzLkdldENvbXBvc2l0aW9uID0gR2V0Q29tcG9zaXRpb247XG5mdW5jdGlvbiByZWN1cnNpdmVGZXRjaChpZCwgY29ubmVjdGlvbkxpc3QsIGNvbXBvc2l0aW9uTGlzdCkge1xuICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgb3V0cHV0ID0ge307XG4gICAgICAgIHZhciBhcnJvdXRwdXQgPSBbXTtcbiAgICAgICAgdmFyIGNvbmNlcHQgPSBDb25jZXB0RGF0YV8xLkNvbmNlcHRzRGF0YS5HZXRDb25jZXB0KGlkKTtcbiAgICAgICAgaWYgKGNvbmNlcHQgPT0gbnVsbCAmJiBpZCAhPSBudWxsICYmIGlkICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFyIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCAoMCwgR2V0Q29uY2VwdF8xLkdldENvbmNlcHQpKGlkKTtcbiAgICAgICAgICAgIGNvbmNlcHQgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb25jZXB0KSB7XG4gICAgICAgICAgICBpZiAoY29uY2VwdC50eXBlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB2YXIgdG9Db25jZXB0VHlwZUlkID0gY29uY2VwdC50eXBlSWQ7XG4gICAgICAgICAgICAgICAgdmFyIHRvQ29uY2VwdFR5cGUgPSBDb25jZXB0RGF0YV8xLkNvbmNlcHRzRGF0YS5HZXRDb25jZXB0KHRvQ29uY2VwdFR5cGVJZCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSB0byBjb25jZXB0IHR5cGVcIik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codG9Db25jZXB0VHlwZSk7XG4gICAgICAgICAgICAgICAgY29uY2VwdC50eXBlID0gdG9Db25jZXB0VHlwZTtcbiAgICAgICAgICAgICAgICBpZiAodG9Db25jZXB0VHlwZSA9PSBudWxsICYmIHRvQ29uY2VwdFR5cGVJZCAhPSBudWxsICYmIHRvQ29uY2VwdFR5cGVJZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCAoMCwgR2V0Q29uY2VwdF8xLkdldENvbmNlcHQpKHRvQ29uY2VwdFR5cGVJZCk7XG4gICAgICAgICAgICAgICAgICAgIHRvQ29uY2VwdFR5cGUgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICBjb25jZXB0LnR5cGUgPSB0b0NvbmNlcHRUeXBlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgbWFpblN0cmluZyA9IChfYiA9IChfYSA9IGNvbmNlcHQgPT09IG51bGwgfHwgY29uY2VwdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29uY2VwdC50eXBlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2hhcmFjdGVyVmFsdWUpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IFwidG9wXCI7XG4gICAgICAgIGlmICghY29tcG9zaXRpb25MaXN0LmluY2x1ZGVzKGlkKSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbmNlcHQgPT09IG51bGwgfHwgY29uY2VwdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29uY2VwdC5jaGFyYWN0ZXJWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29ubmVjdGlvbkxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoY29ubmVjdGlvbkxpc3RbaV0ub2ZUaGVDb25jZXB0SWQgPT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvQ29uY2VwdElkID0gY29ubmVjdGlvbkxpc3RbaV0udG9UaGVDb25jZXB0SWQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0b0NvbmNlcHQgPSBDb25jZXB0RGF0YV8xLkNvbmNlcHRzRGF0YS5HZXRDb25jZXB0KHRvQ29uY2VwdElkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvQ29uY2VwdCA9PSBudWxsICYmIHRvQ29uY2VwdElkICE9IG51bGwgJiYgdG9Db25jZXB0SWQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29uY2VwdFN0cmluZyA9IHlpZWxkICgwLCBHZXRDb25jZXB0XzEuR2V0Q29uY2VwdCkodG9Db25jZXB0SWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9Db25jZXB0ID0gY29uY2VwdFN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodG9Db25jZXB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHRvQ29uY2VwdCA9PT0gbnVsbCB8fCB0b0NvbmNlcHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRvQ29uY2VwdC50eXBlKSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRvQ29uY2VwdFR5cGVJZCA9IHRvQ29uY2VwdC50eXBlSWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRvQ29uY2VwdFR5cGUgPSBDb25jZXB0RGF0YV8xLkNvbmNlcHRzRGF0YS5HZXRDb25jZXB0KHRvQ29uY2VwdFR5cGVJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSB0byBjb25jZXB0IHR5cGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codG9Db25jZXB0VHlwZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9Db25jZXB0LnR5cGUgPSB0b0NvbmNlcHRUeXBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b0NvbmNlcHRUeXBlID09IG51bGwgJiYgdG9Db25jZXB0VHlwZUlkICE9IG51bGwgJiYgdG9Db25jZXB0VHlwZUlkICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29uY2VwdFN0cmluZyA9IHlpZWxkICgwLCBHZXRDb25jZXB0XzEuR2V0Q29uY2VwdCkodG9Db25jZXB0VHlwZUlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9Db25jZXB0VHlwZSA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvQ29uY2VwdC50eXBlID0gdG9Db25jZXB0VHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlZ2V4ID0gXCJ0aGVfXCI7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsb2NhbG1haW5TdHJpbmcgPSAoX2QgPSAoX2MgPSB0b0NvbmNlcHQgPT09IG51bGwgfHwgdG9Db25jZXB0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0b0NvbmNlcHQudHlwZSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmNoYXJhY3RlclZhbHVlKSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiBcInRvcFwiO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFmdGVyIHRvIGNvbmNlcHRcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvQ29uY2VwdCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsb2NhbEtleSA9IGxvY2FsbWFpblN0cmluZy5yZXBsYWNlKHJlZ2V4LCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTmFOKE51bWJlcihsb2NhbEtleSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9jYWxLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCByZWN1cnNpdmVGZXRjaCh0b0NvbmNlcHRJZCwgY29ubmVjdGlvbkxpc3QsIGNvbXBvc2l0aW9uTGlzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0W2xvY2FsS2V5XSA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIHJlY3Vyc2l2ZUZldGNoKHRvQ29uY2VwdElkLCBjb25uZWN0aW9uTGlzdCwgY29tcG9zaXRpb25MaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm91dHB1dFtsb2NhbEtleV0gPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQgPSBhcnJvdXRwdXQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9KTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdldENvbXBvc2l0aW9uTGlzdCA9IHZvaWQgMDtcbmNvbnN0IEdldEFsbENvbmNlcHRzQnlUeXBlXzEgPSByZXF1aXJlKFwiLi4vQXBpL0dldEFsbENvbmNlcHRzQnlUeXBlXCIpO1xuY29uc3QgQ29uY2VwdERhdGFfMSA9IHJlcXVpcmUoXCIuLi9EYXRhU3RydWN0dXJlcy9Db25jZXB0RGF0YVwiKTtcbmNvbnN0IEdldENvbXBvc2l0aW9uXzEgPSByZXF1aXJlKFwiLi9HZXRDb21wb3NpdGlvblwiKTtcbmNvbnN0IEdldENvbmNlcHRCeUNoYXJhY3Rlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0dldENvbmNlcHRCeUNoYXJhY3RlclwiKSk7XG5mdW5jdGlvbiBHZXRDb21wb3NpdGlvbkxpc3QoY29tcG9zaXRpb25OYW1lKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIGNvbmNlcHQgPSB5aWVsZCAoMCwgR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyXzEuZGVmYXVsdCkoY29tcG9zaXRpb25OYW1lKTtcbiAgICAgICAgdmFyIENvbXBvc2l0aW9uTGlzdCA9IFtdO1xuICAgICAgICBpZiAoY29uY2VwdCkge1xuICAgICAgICAgICAgeWllbGQgKDAsIEdldEFsbENvbmNlcHRzQnlUeXBlXzEuR2V0QWxsQ29uY2VwdHNCeVR5cGUpKGNvbXBvc2l0aW9uTmFtZSwgMTAyNjcpO1xuICAgICAgICAgICAgdmFyIGNvbmNlcHRMaXN0ID0gQ29uY2VwdERhdGFfMS5Db25jZXB0c0RhdGEuR2V0Q29uY2VwdHNCeVR5cGVJZChjb25jZXB0LmlkKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29uY2VwdExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY29tcG9zaXRpb25TdHJpbmcgPSB5aWVsZCAoMCwgR2V0Q29tcG9zaXRpb25fMS5HZXRDb21wb3NpdGlvbikoY29uY2VwdExpc3RbaV0uaWQpO1xuICAgICAgICAgICAgICAgIHZhciBqc29uID0gSlNPTi5zdHJpbmdpZnkoY29tcG9zaXRpb25TdHJpbmcpO1xuICAgICAgICAgICAgICAgIENvbXBvc2l0aW9uTGlzdC5wdXNoKGpzb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBDb21wb3NpdGlvbkxpc3Q7XG4gICAgfSk7XG59XG5leHBvcnRzLkdldENvbXBvc2l0aW9uTGlzdCA9IEdldENvbXBvc2l0aW9uTGlzdDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBHZXRDb25jZXB0QnlDaGFyYWN0ZXJWYWx1ZV8xID0gcmVxdWlyZShcIi4uL0FwaS9HZXRDb25jZXB0QnlDaGFyYWN0ZXJWYWx1ZVwiKTtcbmNvbnN0IENvbmNlcHREYXRhXzEgPSByZXF1aXJlKFwiLi4vRGF0YVN0cnVjdHVyZXMvQ29uY2VwdERhdGFcIik7XG5mdW5jdGlvbiBHZXRDb25jZXB0QnlDaGFyYWN0ZXIoY2hhcmFjdGVyVmFsdWUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgY29uY2VwdCA9IENvbmNlcHREYXRhXzEuQ29uY2VwdHNEYXRhLkdldENvbmNlcHRCeUNoYXJhY3RlcihjaGFyYWN0ZXJWYWx1ZSk7XG4gICAgICAgIGlmIChjb25jZXB0ID09IG51bGwgJiYgY2hhcmFjdGVyVmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBjb25jZXB0U3RyaW5nID0geWllbGQgKDAsIEdldENvbmNlcHRCeUNoYXJhY3RlclZhbHVlXzEuR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyVmFsdWUpKGNoYXJhY3RlclZhbHVlKTtcbiAgICAgICAgICAgIGNvbmNlcHQgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb25jZXB0O1xuICAgIH0pO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEdldENvbmNlcHRCeUNoYXJhY3RlckFuZFR5cGVfMSA9IHJlcXVpcmUoXCIuLi9BcGkvR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyQW5kVHlwZVwiKTtcbmNvbnN0IE1ha2VUaGVDaGFyYWN0ZXJEYXRhXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTWFrZVRoZUNoYXJhY3RlckRhdGFcIikpO1xuY29uc3QgTWFrZVRoZUNvbmNlcHRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9NYWtlVGhlQ29uY2VwdFwiKSk7XG5mdW5jdGlvbiBNYWtlVGhlQ2hhcmFjdGVyKHRoZV9jaGFyYWN0ZXJfZGF0YSwgdXNlcklkLCBzZWN1cml0eUlkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSWQpIHtcbiAgICB2YXIgYWNjZXNzVXNlcklkO1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBjYXRlZ29yeVVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdmFyIHNlY3VyaXR5VXNlcklkID0gdXNlcklkO1xuICAgICAgICBhY2Nlc3NVc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHZhciBjYXRlZ29yeUlkID0gNDtcbiAgICAgICAgdmFyIHR5cGVJZCA9IDUxO1xuICAgICAgICB2YXIgdHlwZVVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdmFyIHNlc3Npb25Vc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHZhciBsZW5ndGhPZkNoYXJhY3RlcnMgPSB0aGVfY2hhcmFjdGVyX2RhdGEubGVuZ3RoO1xuICAgICAgICB2YXIgY29uY2VwdDtcbiAgICAgICAgaWYgKGxlbmd0aE9mQ2hhcmFjdGVycyA9PSAxKSB7XG4gICAgICAgICAgICB2YXIgY2hhcmFjdGVyRGF0YVN0cmluZyA9IHlpZWxkICgwLCBNYWtlVGhlQ2hhcmFjdGVyRGF0YV8xLmRlZmF1bHQpKHRoZV9jaGFyYWN0ZXJfZGF0YSwgdXNlcklkLCBzZWN1cml0eUlkLCBhY2Nlc3NJZCwgc2Vzc2lvbklkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBjaGFyYWN0ZXJEYXRhU3RyaW5nID0geWllbGQgKDAsIE1ha2VUaGVDaGFyYWN0ZXJEYXRhXzEuZGVmYXVsdCkodGhlX2NoYXJhY3Rlcl9kYXRhLCB1c2VySWQsIHNlY3VyaXR5SWQsIGFjY2Vzc0lkLCBzZXNzaW9uSWQpO1xuICAgICAgICAgICAgdmFyIGNoYXJhY3RlckRhdGEgPSBjaGFyYWN0ZXJEYXRhU3RyaW5nO1xuICAgICAgICAgICAgaWYgKGNoYXJhY3RlckRhdGEuaXNOZXcpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29uY2VwdFN0cmluZyA9IHlpZWxkICgwLCBNYWtlVGhlQ29uY2VwdF8xLmRlZmF1bHQpKHRoZV9jaGFyYWN0ZXJfZGF0YSwgdXNlcklkLCBjYXRlZ29yeUlkLCBjYXRlZ29yeVVzZXJJZCwgdHlwZUlkLCB0eXBlVXNlcklkLCBjaGFyYWN0ZXJEYXRhLmlkLCBjaGFyYWN0ZXJEYXRhLnVzZXJJZCwgc2VjdXJpdHlJZCwgc2VjdXJpdHlVc2VySWQsIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQsIHNlc3Npb25JZCwgc2Vzc2lvblVzZXJJZCk7XG4gICAgICAgICAgICAgICAgY29uY2VwdCA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgbXlzdHJpbmcgPSB5aWVsZCAoMCwgR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyQW5kVHlwZV8xLkdldENvbmNlcHRCeUNoYXJhY3RlckFuZFR5cGUpKHRoZV9jaGFyYWN0ZXJfZGF0YSwgdHlwZUlkKTtcbiAgICAgICAgICAgICAgICBjb25jZXB0ID0gbXlzdHJpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbmNlcHQ7XG4gICAgfSk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBNYWtlVGhlQ2hhcmFjdGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IENyZWF0ZVRoZUNoYXJhY3Rlcl8xID0gcmVxdWlyZShcIi4uL0FwaS9DcmVhdGUvQ3JlYXRlVGhlQ2hhcmFjdGVyXCIpO1xuY29uc3QgVGhlQ2hhcmFjdGVyXzEgPSByZXF1aXJlKFwiLi4vRGF0YVN0cnVjdHVyZXMvVGhlQ2hhcmFjdGVyXCIpO1xuZnVuY3Rpb24gTWFrZVRoZUNoYXJhY3RlckRhdGEodGhlX2NoYXJhY3Rlcl9kYXRhLCB1c2VySWQsIHNlY3VyaXR5SWQsIGFjY2Vzc0lkLCBzZXNzaW9uSWQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgY2F0ZWdvcnlVc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHZhciBhY2Nlc3NVc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHZhciBzZWN1cml0eVVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdmFyIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdmFyIHRoZUNoYXJhY3RlciA9IG5ldyBUaGVDaGFyYWN0ZXJfMS5UaGVDaGFyYWN0ZXIodXNlcklkLCB0aGVfY2hhcmFjdGVyX2RhdGEsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCwgXCJcIiwgZmFsc2UpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImNoYXJhY3RlciB0ZXN0aW5nXCIpO1xuICAgICAgICB2YXIgb3V0cHV0ID0geWllbGQgKDAsIENyZWF0ZVRoZUNoYXJhY3Rlcl8xLkNyZWF0ZVRoZUNoYXJhY3RlcikodGhlQ2hhcmFjdGVyKTtcbiAgICAgICAgdmFyIHJldHVybmVyID0gb3V0cHV0O1xuICAgICAgICByZXR1cm4gcmV0dXJuZXI7XG4gICAgfSk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBNYWtlVGhlQ2hhcmFjdGVyRGF0YTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBHZXRDb25jZXB0QnlDaGFyYWN0ZXJBbmRUeXBlXzEgPSByZXF1aXJlKFwiLi4vQXBpL0dldENvbmNlcHRCeUNoYXJhY3RlckFuZFR5cGVcIik7XG5jb25zdCBDcmVhdGVUaGVDb25jZXB0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vQ3JlYXRlVGhlQ29uY2VwdFwiKSk7XG5mdW5jdGlvbiBNYWtlVGhlQ29uY2VwdChyZWZlcmVudCwgdXNlcklkLCBjYXRlZ29yeUlkLCBjYXRlZ29yeVVzZXJJZCwgdHlwZUlkLCB0eXBlVXNlcklkLCByZWZlcmVudElkLCByZWZlcmVudFVzZXJJZCwgc2VjdXJpdHlJZCwgc2VjdXJpdHlVc2VySWQsIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQsIHNlc3Npb25JbmZvcm1hdGlvbklkLCBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgY29uY2VwdFN0cmluZyA9IHlpZWxkICgwLCBHZXRDb25jZXB0QnlDaGFyYWN0ZXJBbmRUeXBlXzEuR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyQW5kVHlwZSkocmVmZXJlbnQsIHR5cGVJZCk7XG4gICAgICAgIHZhciBjb25jZXB0ID0gY29uY2VwdFN0cmluZztcbiAgICAgICAgaWYgKGNvbmNlcHQuaWQgPT0gMCkge1xuICAgICAgICAgICAgY29uY2VwdFN0cmluZyA9IHlpZWxkICgwLCBDcmVhdGVUaGVDb25jZXB0XzEuZGVmYXVsdCkocmVmZXJlbnQsIHVzZXJJZCwgY2F0ZWdvcnlJZCwgY2F0ZWdvcnlVc2VySWQsIHR5cGVJZCwgdHlwZVVzZXJJZCwgcmVmZXJlbnRJZCwgcmVmZXJlbnRVc2VySWQsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkKTtcbiAgICAgICAgICAgIGNvbmNlcHQgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb25jZXB0O1xuICAgIH0pO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gTWFrZVRoZUNvbmNlcHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQ3JlYXRlVGhlVGV4dERhdGFfMSA9IHJlcXVpcmUoXCIuLi9BcGkvQ3JlYXRlL0NyZWF0ZVRoZVRleHREYXRhXCIpO1xuY29uc3QgR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyQW5kVHlwZV8xID0gcmVxdWlyZShcIi4uL0FwaS9HZXRDb25jZXB0QnlDaGFyYWN0ZXJBbmRUeXBlXCIpO1xuY29uc3QgVGhlVGV4dHNfMSA9IHJlcXVpcmUoXCIuLi9EYXRhU3RydWN0dXJlcy9UaGVUZXh0c1wiKTtcbmNvbnN0IENyZWF0ZVRoZUNvbmNlcHRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9DcmVhdGVUaGVDb25jZXB0XCIpKTtcbmNvbnN0IE1ha2VUaGVUeXBlQ29uY2VwdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL01ha2VUaGVUeXBlQ29uY2VwdFwiKSk7XG5mdW5jdGlvbiBNYWtlVGhlSW5zdGFuY2VDb25jZXB0KHR5cGUsIHJlZmVyZW50LCBjb21wb3NpdGlvbiA9IGZhbHNlLCB1c2VySWQsIGFjY2Vzc0lkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCA9IDk5OSkge1xuICAgIHZhciBzZXNzaW9uSW5mb3JtYXRpb25JZCwgYWNjZXNzSWQ7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgc2Vzc2lvbkluZm9ybWF0aW9uSWQgPSA5OTk7XG4gICAgICAgIHZhciBjYXRlZ29yeUlkID0gNDtcbiAgICAgICAgdmFyIGNhdGVnb3J5VXNlcklkID0gdXNlcklkO1xuICAgICAgICB2YXIgcmVmZXJlbnRJZCA9IDA7XG4gICAgICAgIHZhciByZWZlcmVudFVzZXJJZCA9IDk5OTtcbiAgICAgICAgdmFyIHNlY3VyaXR5SWQgPSA5OTk7XG4gICAgICAgIHZhciBzZWN1cml0eVVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdmFyIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgYWNjZXNzSWQgPSA0O1xuICAgICAgICB2YXIgYWNjZXNzVXNlcklkID0gdXNlcklkO1xuICAgICAgICB2YXIgc3RyaW5nVG9DaGVjayA9IFwiXCI7XG4gICAgICAgIHZhciBzdHJpbmdMZW5ndGggPSByZWZlcmVudC5sZW5ndGg7XG4gICAgICAgIHZhciB0eXBlQ29uY2VwdDtcbiAgICAgICAgdmFyIGNvbmNlcHQ7XG4gICAgICAgIHZhciBzdGFydHNXaXRoVGhlID0gdHlwZS5zdGFydHNXaXRoKFwidGhlX1wiKTtcbiAgICAgICAgaWYgKHN0YXJ0c1dpdGhUaGUpIHtcbiAgICAgICAgICAgIHN0cmluZ1RvQ2hlY2sgPSB0eXBlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3RyaW5nVG9DaGVjayA9IFwidGhlX1wiICsgdHlwZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29tcG9zaXRpb24pIHtcbiAgICAgICAgICAgIHZhciB0eXBlQ29uY2VwdFN0cmluZyA9IHlpZWxkICgwLCBNYWtlVGhlVHlwZUNvbmNlcHRfMS5kZWZhdWx0KSh0eXBlLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgdXNlcklkLCB1c2VySWQpO1xuICAgICAgICAgICAgdHlwZUNvbmNlcHQgPSB0eXBlQ29uY2VwdFN0cmluZztcbiAgICAgICAgICAgIHZhciBjb25jZXB0U3RyaW5nID0geWllbGQgKDAsIENyZWF0ZVRoZUNvbmNlcHRfMS5kZWZhdWx0KShyZWZlcmVudCwgdXNlcklkLCBjYXRlZ29yeUlkLCB1c2VySWQsIHR5cGVDb25jZXB0LmlkLCB0eXBlQ29uY2VwdC51c2VySWQsIHJlZmVyZW50SWQsIHJlZmVyZW50VXNlcklkLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCk7XG4gICAgICAgICAgICBjb25jZXB0ID0gY29uY2VwdFN0cmluZztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdHJpbmdMZW5ndGggPiAyNTUpIHtcbiAgICAgICAgICAgIHZhciB0eXBlQ29uY2VwdFN0cmluZyA9IHlpZWxkICgwLCBNYWtlVGhlVHlwZUNvbmNlcHRfMS5kZWZhdWx0KShzdHJpbmdUb0NoZWNrLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkLCB1c2VySWQpO1xuICAgICAgICAgICAgdHlwZUNvbmNlcHQgPSB0eXBlQ29uY2VwdFN0cmluZztcbiAgICAgICAgICAgIHZhciBjb25jZXB0U3RyaW5nID0geWllbGQgKDAsIENyZWF0ZVRoZUNvbmNlcHRfMS5kZWZhdWx0KShyZWZlcmVudCwgdXNlcklkLCBjYXRlZ29yeUlkLCB1c2VySWQsIHR5cGVDb25jZXB0LmlkLCB0eXBlQ29uY2VwdC51c2VySWQsIHJlZmVyZW50SWQsIHJlZmVyZW50VXNlcklkLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCk7XG4gICAgICAgICAgICBjb25jZXB0ID0gY29uY2VwdFN0cmluZztcbiAgICAgICAgICAgIHZhciBUaGVUZXh0c0RhdGEgPSBuZXcgVGhlVGV4dHNfMS5UaGVUZXh0cyh1c2VySWQsIHJlZmVyZW50LCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCwgRGF0ZS5ub3coKS50b1N0cmluZygpLCB0cnVlKTtcbiAgICAgICAgICAgIHZhciBUZXh0RGF0YVN0cmluZyA9IHlpZWxkICgwLCBDcmVhdGVUaGVUZXh0RGF0YV8xLkNyZWF0ZVRleHREYXRhKShUaGVUZXh0c0RhdGEpO1xuICAgICAgICAgICAgdmFyIFRleHREYXRhID0gVGV4dERhdGFTdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgdHlwZUNvbmNlcHRTdHJpbmcgPSB5aWVsZCAoMCwgTWFrZVRoZVR5cGVDb25jZXB0XzEuZGVmYXVsdCkoc3RyaW5nVG9DaGVjaywgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCwgdXNlcklkKTtcbiAgICAgICAgICAgIHR5cGVDb25jZXB0ID0gdHlwZUNvbmNlcHRTdHJpbmc7XG4gICAgICAgICAgICB2YXIgY29uY2VwdEJ5Q2hhclR5cGVTdHJpbmcgPSB5aWVsZCAoMCwgR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyQW5kVHlwZV8xLkdldENvbmNlcHRCeUNoYXJhY3RlckFuZFR5cGUpKHJlZmVyZW50LCB0eXBlQ29uY2VwdC5pZCk7XG4gICAgICAgICAgICB2YXIgY29uY2VwdFR5cGVDaGFyYWN0ZXIgPSBjb25jZXB0QnlDaGFyVHlwZVN0cmluZztcbiAgICAgICAgICAgIGNvbmNlcHQgPSBjb25jZXB0VHlwZUNoYXJhY3RlcjtcbiAgICAgICAgICAgIGlmIChjb25jZXB0VHlwZUNoYXJhY3Rlci5pZCA9PSAwICYmIGNvbmNlcHRUeXBlQ2hhcmFjdGVyLnVzZXJJZCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCAoMCwgQ3JlYXRlVGhlQ29uY2VwdF8xLmRlZmF1bHQpKHJlZmVyZW50LCB1c2VySWQsIGNhdGVnb3J5SWQsIHVzZXJJZCwgdHlwZUNvbmNlcHQuaWQsIHR5cGVDb25jZXB0LnVzZXJJZCwgcmVmZXJlbnRJZCwgcmVmZXJlbnRVc2VySWQsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkKTtcbiAgICAgICAgICAgICAgICBjb25jZXB0ID0gY29uY2VwdFN0cmluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29uY2VwdDtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IE1ha2VUaGVJbnN0YW5jZUNvbmNlcHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQ3JlYXRlVGhlQ29uY2VwdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0NyZWF0ZVRoZUNvbmNlcHRcIikpO1xuY29uc3QgR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyXCIpKTtcbmNvbnN0IE1ha2VUaGVDaGFyYWN0ZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9NYWtlVGhlQ2hhcmFjdGVyXCIpKTtcbmNvbnN0IFNwbGl0U3RyaW5nc18xID0gcmVxdWlyZShcIi4vU3BsaXRTdHJpbmdzXCIpO1xuZnVuY3Rpb24gTWFrZVRoZVR5cGVDb25jZXB0KHR5cGVTdHJpbmcsIHNlc3Npb25JZCwgc2Vzc2lvblVzZXJJZCwgdXNlcklkKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIHJlZmVyZW50SWQgPSA5OTk7XG4gICAgICAgIHZhciBzZWN1cml0eUlkID0gOTk5O1xuICAgICAgICB2YXIgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkID0gOTk5O1xuICAgICAgICB2YXIgYWNjZXNzSWQgPSA5OTk7XG4gICAgICAgIHZhciBzZWN1cml0eVVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdmFyIGFjY2Vzc1VzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdmFyIGNhdGVnb3J5VXNlcklkID0gdXNlcklkO1xuICAgICAgICB2YXIgc2VjdXJpdHlVc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHZhciBleGlzdGluZ0NvbmNlcHQgPSB5aWVsZCAoMCwgR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyXzEuZGVmYXVsdCkodHlwZVN0cmluZyk7XG4gICAgICAgIGlmIChleGlzdGluZ0NvbmNlcHQpIHtcbiAgICAgICAgICAgIGlmIChleGlzdGluZ0NvbmNlcHQuaWQgPT0gMCB8fCBleGlzdGluZ0NvbmNlcHQudXNlcklkID09IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgc3BsaXR0ZWRTdHJpbmdBcnJheSA9ICgwLCBTcGxpdFN0cmluZ3NfMS5TcGxpdFN0cmluZ3MpKHR5cGVTdHJpbmcpO1xuICAgICAgICAgICAgICAgIGlmIChzcGxpdHRlZFN0cmluZ0FycmF5WzBdID09IHR5cGVTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCAoMCwgTWFrZVRoZUNoYXJhY3Rlcl8xLmRlZmF1bHQpKHR5cGVTdHJpbmcsIHVzZXJJZCwgc2VjdXJpdHlJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbklkKTtcbiAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdDb25jZXB0ID0gY29uY2VwdFN0cmluZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjYXRlZ29yeUlkID0gMTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhdGVnb3J5Q29uY2VwdCA9IE1ha2VUaGVUeXBlQ29uY2VwdChzcGxpdHRlZFN0cmluZ0FycmF5WzBdLCBzZXNzaW9uSWQsIHNlc3Npb25Vc2VySWQsIHVzZXJJZCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0eXBlQ29uY2VwdCA9IHlpZWxkIE1ha2VUaGVUeXBlQ29uY2VwdChzcGxpdHRlZFN0cmluZ0FycmF5WzFdLCBzZXNzaW9uSWQsIHNlc3Npb25Vc2VySWQsIHVzZXJJZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlQ29uY2VwdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmNlcHQgPSB5aWVsZCAoMCwgQ3JlYXRlVGhlQ29uY2VwdF8xLmRlZmF1bHQpKHR5cGVTdHJpbmcsIHVzZXJJZCwgY2F0ZWdvcnlJZCwgdXNlcklkLCB0eXBlQ29uY2VwdC5pZCwgdXNlcklkLCByZWZlcmVudElkLCB1c2VySWQsIHNlY3VyaXR5SWQsIHVzZXJJZCwgYWNjZXNzSWQsIHVzZXJJZCwgc2Vzc2lvbklkLCB1c2VySWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdDb25jZXB0ID0gY29uY2VwdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXhpc3RpbmdDb25jZXB0O1xuICAgIH0pO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gTWFrZVRoZVR5cGVDb25jZXB0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlNwbGl0U3RyaW5ncyA9IHZvaWQgMDtcbmZ1bmN0aW9uIFNwbGl0U3RyaW5ncyh0eXBlU3RyaW5nKSB7XG4gICAgY29uc3QgU3BsaXR0ZWRTdHJpbmdzID0gdHlwZVN0cmluZy5zcGxpdChcIl9cIik7XG4gICAgcmV0dXJuIFNwbGl0dGVkU3RyaW5ncztcbn1cbmV4cG9ydHMuU3BsaXRTdHJpbmdzID0gU3BsaXRTdHJpbmdzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkNyZWF0ZUNvbm5lY3Rpb25CZXR3ZWVuVHdvQ29uY2VwdHMgPSBleHBvcnRzLkNyZWF0ZUNvbXBvc2l0aW9uID0gZXhwb3J0cy5HZXRDb21wb3NpdGlvbiA9IGV4cG9ydHMuR2V0Q29tcG9zaXRpb25MaXN0ID0gZXhwb3J0cy5TcGxpdFN0cmluZ3MgPSB2b2lkIDA7XG5jb25zdCBTeW5jRGF0YV8xID0gcmVxdWlyZShcIi4vRGF0YVN0cnVjdHVyZXMvU3luY0RhdGFcIik7XG52YXIgU3BsaXRTdHJpbmdzXzEgPSByZXF1aXJlKFwiLi9TZXJ2aWNlcy9TcGxpdFN0cmluZ3NcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJTcGxpdFN0cmluZ3NcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFNwbGl0U3RyaW5nc18xLlNwbGl0U3RyaW5nczsgfSB9KTtcbnZhciBHZXRDb21wb3NpdGlvbkxpc3RfMSA9IHJlcXVpcmUoXCIuL1NlcnZpY2VzL0dldENvbXBvc2l0aW9uTGlzdFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkdldENvbXBvc2l0aW9uTGlzdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gR2V0Q29tcG9zaXRpb25MaXN0XzEuR2V0Q29tcG9zaXRpb25MaXN0OyB9IH0pO1xudmFyIEdldENvbXBvc2l0aW9uXzEgPSByZXF1aXJlKFwiLi9TZXJ2aWNlcy9HZXRDb21wb3NpdGlvblwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkdldENvbXBvc2l0aW9uXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBHZXRDb21wb3NpdGlvbl8xLkdldENvbXBvc2l0aW9uOyB9IH0pO1xudmFyIENyZWF0ZVRoZUNvbXBvc2l0aW9uXzEgPSByZXF1aXJlKFwiLi9TZXJ2aWNlcy9DcmVhdGVUaGVDb21wb3NpdGlvblwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkNyZWF0ZUNvbXBvc2l0aW9uXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2ltcG9ydERlZmF1bHQoQ3JlYXRlVGhlQ29tcG9zaXRpb25fMSkuZGVmYXVsdDsgfSB9KTtcbnZhciBDcmVhdGVDb25uZWN0aW9uQmV0d2VlblR3b0NvbmNlcHRzXzEgPSByZXF1aXJlKFwiLi9TZXJ2aWNlcy9DcmVhdGVDb25uZWN0aW9uQmV0d2VlblR3b0NvbmNlcHRzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQ3JlYXRlQ29ubmVjdGlvbkJldHdlZW5Ud29Db25jZXB0c1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gQ3JlYXRlQ29ubmVjdGlvbkJldHdlZW5Ud29Db25jZXB0c18xLkNyZWF0ZUNvbm5lY3Rpb25CZXR3ZWVuVHdvQ29uY2VwdHM7IH0gfSk7XG4vLyBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI215Rm9ybScpIGFzIEhUTUxGb3JtRWxlbWVudDtcbi8vIC8vY29uc3QgZm9ybTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlckZvcm0nKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG4vLyBjb25zdCBmb3JtMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21wb3NpdGlvbkZvcm0nKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG4vLyBjb25zdCBqc29uRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqc29uRm9ybScpIGFzIEhUTUxGb3JtRWxlbWVudDtcbi8vIGNvbnN0IG5hbWVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWVmb3JtJykgYXMgSFRNTEZvcm1FbGVtZW50O1xuLy8gY29uc3QgZ2V0bmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnZXRuYW1lJykgYXMgSFRNTEZvcm1FbGVtZW50O1xuLy8gdmFyIGpzb24gPSB7XG4vLyAgICAgXCJhc2Rnc2FkZGZmXCI6IHtcbi8vICAgICAgICAgXCJhZGdhc2Rmc2RmXCI6IHtcbi8vICAgICAgICAgICAgIFwiYXNkZ1wiOiBcInRhbWVcIixcbi8vICAgICAgICAgICAgIFwiYnJpZGVyYXJyXCI6IFtcImhlbGxvXCIsIFwidHJlXCJdXG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9O1xuc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKFwic3luY2luZ1wiKTtcbiAgICBTeW5jRGF0YV8xLlN5bmNEYXRhLlN5bmNEYXRhT25saW5lKCk7XG59LCA1MDAwKTtcbi8vIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4vLyAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgY29uc3QgY29uY2VwdElkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb25jZXB0aWQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuLy8gICAgY29uc3QgY29uY2VwdElkID0gY29uY2VwdElkRWxlbWVudC52YWx1ZTtcbi8vICAgIEdldENvbXBvc2l0aW9uKE51bWJlcihjb25jZXB0SWQpKS50aGVuKG91dHB1dD0+e1xuLy8gICAgIGNvbnN0IGpzb25FbGVtbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanNvbm91dHB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4vLyAgICAgdmFyIGpzb24gPSBKU09OLnN0cmluZ2lmeShvdXRwdXQpO1xuLy8gICAgIGNvbnNvbGUubG9nKGpzb24pO1xuLy8gICAgIGpzb25FbGVtbnQuaW5uZXJIVE1MID0ganNvbjtcbi8vICAgIH0pO1xuLy8gfSk7XG4vLyBnZXRuYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgY29uc3QgY29uY2VwdElkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lY29uY2VwdGlkJykgYXMgSFRNTElucHV0RWxlbWVudDtcbi8vICAgICBjb25zdCBjb25jZXB0SWQgPSBjb25jZXB0SWRFbGVtZW50LnZhbHVlO1xuLy8gICAgIEdldENvbXBvc2l0aW9uKE51bWJlcihjb25jZXB0SWQpKS50aGVuKG91dHB1dD0+e1xuLy8gICAgICAgICBjb25zdCBmaXJzdE5hbWVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpcnN0bmFtZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4vLyAgICAgICAgIGNvbnN0IGxhc3ROYW1lRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYXN0bmFtZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKG91dHB1dCk7XG4vLyAgICAgICAgIGZpcnN0TmFtZUVsZW1lbnQudmFsdWUgPSBvdXRwdXQubmFtZWRhdGEuZmlyc3RuYW1lO1xuLy8gICAgICAgICBsYXN0TmFtZUVsZW1lbnQudmFsdWUgPSBvdXRwdXQubmFtZWRhdGEubGFzdG5hbWU7XG4vLyAgICAgfSk7XG4vLyAgfSk7XG4vLyBuYW1lRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbi8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgIGNvbnN0IGZpcnN0TmFtZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlyc3RuYW1lJykgYXMgSFRNTElucHV0RWxlbWVudDtcbi8vICAgICBjb25zdCBmaXJzdG5hbWUgPSBmaXJzdE5hbWVFbGVtZW50LnZhbHVlO1xuLy8gICAgIGNvbnN0IGxhc3ROYW1lRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYXN0bmFtZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4vLyAgICAgY29uc3QgbGFzdG5hbWUgPSBsYXN0TmFtZUVsZW1lbnQudmFsdWU7XG4vLyAgICAgdmFyIGpzb24gPSB7XG4vLyAgICAgICAgIFwibmFtZWRhdGFcIjp7XG4vLyAgICAgICAgICAgICBcImZpcnN0bmFtZVwiOiBmaXJzdG5hbWUsXG4vLyAgICAgICAgICAgICBcImxhc3RuYW1lXCI6IGxhc3RuYW1lXG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgY29uc29sZS5sb2coanNvbik7XG4vLyAgICAgQ3JlYXRlVGhlQ29tcG9zaXRpb24oanNvbikudGhlbigodmFsdWUpPT57XG4vLyAgICAgICAgIGNvbnN0IG91dHB1dGlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI291dHB1dGlkJykgYXMgSFRNTElucHV0RWxlbWVudDtcbi8vICAgICAgICAgdmFyIGNvbmNlcHQgPSB2YWx1ZSBhcyBDb25jZXB0O1xuLy8gICAgICAgICBvdXRwdXRpZC5pbm5lckhUTUwgPSBjb25jZXB0LmlkLnRvU3RyaW5nKCk7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzIHRoZSB0ZXN0IGZvciBmaW5hbCcpO1xuLy8gICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4vLyAgICAgfSk7XG4vLyAgICAgfSk7XG4vLyBqc29uRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+e1xuLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgY29uc3QgY29tcG9zaXRpb25OYW1lRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjanNvbmRhdGFcIikgYXMgSFRNTElucHV0RWxlbWVudDtcbi8vICAgICBjb25zdCBjb21wb3NpdGlvbk5hbWUgPSBjb21wb3NpdGlvbk5hbWVFbGVtZW50LnZhbHVlO1xuLy8gICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgY29tcG9zaXRpb24gbmFtZVwiKTtcbi8vICAgICBjb25zb2xlLmxvZyhjb21wb3NpdGlvbk5hbWUpO1xuLy8gICAgIHZhciBqb24gPSBKU09OLnBhcnNlKGNvbXBvc2l0aW9uTmFtZSk7XG4vLyAgICAgQ3JlYXRlVGhlQ29tcG9zaXRpb24oam9uKS50aGVuKCh2YWx1ZSk9Pntcbi8vICAgICAgICAgY29uc3Qgb3V0cHV0aWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3V0cHV0aWQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuLy8gICAgICAgICB2YXIgY29uY2VwdCA9IHZhbHVlIGFzIENvbmNlcHQ7XG4vLyAgICAgICAgIG91dHB1dGlkLmlubmVySFRNTCA9IGNvbmNlcHQuaWQudG9TdHJpbmcoKTtcbi8vICAgICAgICAgY29uc29sZS5sb2coJ3RoaXMgaXMgdGhlIHRlc3QgZm9yIGZpbmFsJyk7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbi8vICAgICB9KTtcbi8vIH0pO1xuLy8gZm9ybTMuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4vLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbi8vICAgICBjb25zdCBjb21wb3NpdGlvbk5hbWVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb21wb3NpdGlvbl9uYW1lXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4vLyAgICAgY29uc3QgY29tcG9zaXRpb25OYW1lID0gY29tcG9zaXRpb25OYW1lRWxlbWVudC52YWx1ZTtcbi8vICAgICBHZXRDb21wb3NpdGlvbkxpc3QoY29tcG9zaXRpb25OYW1lKS50aGVuKG91dHB1dD0+e1xuLy8gICAgICAgICBjb25zdCBqc29uRWxlbW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzb25vdXRwdXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuLy8gICAgICAgICB2YXIganNvbiA9IEpTT04uc3RyaW5naWZ5KG91dHB1dCk7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGpzb24pO1xuLy8gICAgICAgICBqc29uRWxlbW50LmlubmVySFRNTCA9IEpTT04uc3RyaW5naWZ5KGpzb24pO1xuLy8gICAgIH0pO1xuLy8gfSk7XG4vLyAvLyBmb3JtMi5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbi8vIC8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gLy8gICAgIGNvbnN0IHVzZXJJZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VzZXJpZFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuLy8gLy8gICAgIGNvbnN0IHVzZXJJZCA9IHVzZXJJZEVsZW1lbnQudmFsdWU7XG4vLyAvLyAgICAgR2V0QWxsVXNlckNvbmNlcHRzKE51bWJlcih1c2VySWQpKTtcbi8vIC8vICAgICBHZXRBbGxVc2VyQ29ubmVjdGlvbnMoTnVtYmVyKHVzZXJJZCkpLnRoZW4oKCk9Pntcbi8vIC8vICAgICAgICAgY29uc29sZS5sb2coXCJnb3QgYWxsIHRoZSBkYXRhXCIpO1xuLy8gLy8gICAgIH0pO1xuLy8gLy8gIH0pO1xuLy8gd2luZG93Lm9ubW91c2Vkb3duID0gKGV2OiBNb3VzZUV2ZW50KTogYW55ID0+IHtcbi8vICAgICB2YXIgaXNNb3VzZURvd24gPSB0cnVlO1xuLy8gICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXlDYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbi8vICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJykgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIDtcbi8vICAgICB2YXIgX2RpZmZlcmVuY2VfZnJvbV93aW5kb3cgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4vLyAgICAgdmFyIHdpZHRoX2RpZmZlcmVuY2UgPSAwO1xuLy8gICAgIHZhciBoZWlnaHRfZGlmZmVyZW5jZSA9IDA7XG4vLyAgICAgLy9VcGRhdGUgbW91c2UgcG9zaXRpb24gYXQgdGltZSBvZiBkb3duXG4vLyAgICAgdmFyIG1vdXNlX3hfY29vcmRpbmF0ZSA9IGV2LnggLSBfZGlmZmVyZW5jZV9mcm9tX3dpbmRvdy5sZWZ0ICsgd2luZG93LnNjcm9sbFg7XG4vLyAgICAgdmFyIG1vdXNlX3lfY29vcmRpbmF0ZSA9IGV2LnkgLSBfZGlmZmVyZW5jZV9mcm9tX3dpbmRvdy50b3AgKyB3aW5kb3cuc2Nyb2xsWTtcbi8vICAgICB2YXIgc2VsZWN0ZWRfY29uY2VwdF9vYmplY3QgPSBzZWxlY3RDb25jZXB0T2JqZWN0KG1vdXNlX3hfY29vcmRpbmF0ZSwgbW91c2VfeV9jb29yZGluYXRlKTtcbi8vICAgICB3aW5kb3cub25tb3VzZW1vdmUgPSAoZXY6IE1vdXNlRXZlbnQpOiBhbnkgPT4ge1xuLy8gICAgICAgICB2YXIgcHJldmlvdXNfbW91c2VfeCA9IG1vdXNlX3hfY29vcmRpbmF0ZTtcbi8vICAgICAgICAgdmFyIHByZXZpb3VzX21vdXNlX3kgPSBtb3VzZV95X2Nvb3JkaW5hdGU7XG4vLyAgICAgICAgIHZhciBuZXdfbW91c2VfeF9jb29yZGluYXRlID0gZXYueCAtIF9kaWZmZXJlbmNlX2Zyb21fd2luZG93LmxlZnQgKyB3aW5kb3cuc2Nyb2xsWDtcbi8vICAgICAgICAgdmFyIG5ld19tb3VzZV95X2Nvb3JkaW5hdGUgPSBldi55IC0gX2RpZmZlcmVuY2VfZnJvbV93aW5kb3cudG9wICsgd2luZG93LnNjcm9sbFk7XG4vLyAgICAgICAgIC8vaG93IG11Y2ggZGlkIHRoZSBtb3VzZSBtb3ZlXG4vLyAgICAgICAgIHZhciBtb3VzZV94X2RpZmZlcmVuY2UgPSBuZXdfbW91c2VfeF9jb29yZGluYXRlIC0gcHJldmlvdXNfbW91c2VfeDtcbi8vICAgICAgICAgdmFyIG1vdXNlX3lfZGlmZmVyZW5jZSA9IG5ld19tb3VzZV95X2Nvb3JkaW5hdGUgLSBwcmV2aW91c19tb3VzZV95O1xuLy8gICAgICAgICBpZihzZWxlY3RlZF9jb25jZXB0X29iamVjdCl7XG4vLyAgICAgICAgICAgICBpZihpc01vdXNlRG93bil7XG4vLyAgICAgICAgICAgICAgICAgc2VsZWN0ZWRfY29uY2VwdF9vYmplY3QueCA9IG5ld19tb3VzZV94X2Nvb3JkaW5hdGU7XG4vLyAgICAgICAgICAgICAgICAgc2VsZWN0ZWRfY29uY2VwdF9vYmplY3QueSA9IG5ld19tb3VzZV95X2Nvb3JkaW5hdGU7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgd2luZG93Lm9ubW91c2V1cCA9IChldjogTW91c2VFdmVudCk6IGFueSA9PiB7XG4vLyAgICAgICAgIGlzTW91c2VEb3duID0gZmFsc2U7XG4vLyAgICAgICAgIHNlbGVjdGVkX2NvbmNlcHRfb2JqZWN0ICA9IG51bGw7XG4vLyAgICAgfVxuLy99XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXBwLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9