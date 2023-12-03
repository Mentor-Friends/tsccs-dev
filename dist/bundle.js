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
exports.BASE_URL = "https://localhost:7053";
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
                    yield CreateTheComposition(json[key], concept.id, concept.userId, localMainKey, userId, accessId, sessionInformationId);
                }
                else {
                    var ofThe = ofTheConceptId !== null && ofTheConceptId !== void 0 ? ofTheConceptId : 999;
                    var ofTheUser = ofTheConceptUserId !== null && ofTheConceptUserId !== void 0 ? ofTheConceptUserId : 10267;
                    var localMainKey = MainKeyLocal;
                    var conceptString = yield (0, MakeTheInstanceConcept_1.default)(key, "", true, localUserId, localAccessId, localSessionId);
                    var concept = conceptString;
                    console.log("of the concept");
                    console.log(concept.id);
                    yield (0, CreateTheConnection_1.default)(ofThe, ofTheUser, concept.id, concept.userId, localMainKey, localSessionId, concept.userId);
                    yield CreateTheComposition(json[key], concept.id, concept.userId, localMainKey, userId, accessId, sessionInformationId);
                }
            }
            else {
                var ofThe = ofTheConceptId !== null && ofTheConceptId !== void 0 ? ofTheConceptId : 999;
                var ofTheUser = ofTheConceptUserId !== null && ofTheConceptUserId !== void 0 ? ofTheConceptUserId : 10267;
                var localMainKey = MainKeyLocal;
                var conceptString = yield (0, MakeTheInstanceConcept_1.default)(key, json[key], false, localUserId, localAccessId, localSessionId);
                var concept = conceptString;
                yield (0, CreateTheConnection_1.default)(ofThe, ofTheUser, concept.id, concept.userId, localMainKey, localSessionId, concept.userId);
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
        console.log("this is the reserved id");
        console.log(id);
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
        concept.type = typeConcept;
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
exports.SyncData = exports.CreateConnectionBetweenTwoConcepts = exports.CreateComposition = exports.GetComposition = exports.GetCompositionList = exports.SplitStrings = void 0;
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
var SyncData_1 = __webpack_require__(/*! ./DataStructures/SyncData */ "./src/DataStructures/SyncData.ts");
Object.defineProperty(exports, "SyncData", ({ enumerable: true, get: function () { return SyncData_1.SyncData; } }));
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
// setInterval(function(){
//     console.log("syncing");
//     SyncData.SyncDataOnline()
// }, 5000);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ2pKQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHNjY3Mvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3RzY2NzLy4vc3JjL0FwaS9DcmVhdGUvQ3JlYXRlVGhlQ2hhcmFjdGVyLnRzIiwid2VicGFjazovL3RzY2NzLy4vc3JjL0FwaS9DcmVhdGUvQ3JlYXRlVGhlQ29uY2VwdEFwaS50cyIsIndlYnBhY2s6Ly90c2Njcy8uL3NyYy9BcGkvQ3JlYXRlL0NyZWF0ZVRoZUNvbm5lY3Rpb25BcGkudHMiLCJ3ZWJwYWNrOi8vdHNjY3MvLi9zcmMvQXBpL0NyZWF0ZS9DcmVhdGVUaGVUZXh0RGF0YS50cyIsIndlYnBhY2s6Ly90c2Njcy8uL3NyYy9BcGkvR2V0QWxsQ29uY2VwdHNCeVR5cGUudHMiLCJ3ZWJwYWNrOi8vdHNjY3MvLi9zcmMvQXBpL0dldEFsbENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvbi50cyIsIndlYnBhY2s6Ly90c2Njcy8uL3NyYy9BcGkvR2V0Q29uY2VwdC50cyIsIndlYnBhY2s6Ly90c2Njcy8uL3NyYy9BcGkvR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyQW5kVHlwZS50cyIsIndlYnBhY2s6Ly90c2Njcy8uL3NyYy9BcGkvR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyVmFsdWUudHMiLCJ3ZWJwYWNrOi8vdHNjY3MvLi9zcmMvQXBpL0dldFJlc2VydmVkSWRzLnRzIiwid2VicGFjazovL3RzY2NzLy4vc3JjL0NvbnN0YW50cy9BcGlDb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vdHNjY3MvLi9zcmMvRGF0YVN0cnVjdHVyZXMvQ29uY2VwdC50cyIsIndlYnBhY2s6Ly90c2Njcy8uL3NyYy9EYXRhU3RydWN0dXJlcy9Db25jZXB0RGF0YS50cyIsIndlYnBhY2s6Ly90c2Njcy8uL3NyYy9EYXRhU3RydWN0dXJlcy9Db25uZWN0aW9uLnRzIiwid2VicGFjazovL3RzY2NzLy4vc3JjL0RhdGFTdHJ1Y3R1cmVzL0Nvbm5lY3Rpb25EYXRhLnRzIiwid2VicGFjazovL3RzY2NzLy4vc3JjL0RhdGFTdHJ1Y3R1cmVzL1Jlc2VydmVkSWRzLnRzIiwid2VicGFjazovL3RzY2NzLy4vc3JjL0RhdGFTdHJ1Y3R1cmVzL1N5bmNEYXRhLnRzIiwid2VicGFjazovL3RzY2NzLy4vc3JjL0RhdGFTdHJ1Y3R1cmVzL1RoZUNoYXJhY3Rlci50cyIsIndlYnBhY2s6Ly90c2Njcy8uL3NyYy9EYXRhU3RydWN0dXJlcy9UaGVUZXh0cy50cyIsIndlYnBhY2s6Ly90c2Njcy8uL3NyYy9TZXJ2aWNlcy9DcmVhdGVDb25uZWN0aW9uQmV0d2VlblR3b0NvbmNlcHRzLnRzIiwid2VicGFjazovL3RzY2NzLy4vc3JjL1NlcnZpY2VzL0NyZWF0ZVRoZUNvbXBvc2l0aW9uLnRzIiwid2VicGFjazovL3RzY2NzLy4vc3JjL1NlcnZpY2VzL0NyZWF0ZVRoZUNvbmNlcHQudHMiLCJ3ZWJwYWNrOi8vdHNjY3MvLi9zcmMvU2VydmljZXMvQ3JlYXRlVGhlQ29ubmVjdGlvbi50cyIsIndlYnBhY2s6Ly90c2Njcy8uL3NyYy9TZXJ2aWNlcy9HZXRDb21wb3NpdGlvbi50cyIsIndlYnBhY2s6Ly90c2Njcy8uL3NyYy9TZXJ2aWNlcy9HZXRDb21wb3NpdGlvbkxpc3QudHMiLCJ3ZWJwYWNrOi8vdHNjY3MvLi9zcmMvU2VydmljZXMvR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyLnRzIiwid2VicGFjazovL3RzY2NzLy4vc3JjL1NlcnZpY2VzL01ha2VUaGVDaGFyYWN0ZXIudHMiLCJ3ZWJwYWNrOi8vdHNjY3MvLi9zcmMvU2VydmljZXMvTWFrZVRoZUNoYXJhY3RlckRhdGEudHMiLCJ3ZWJwYWNrOi8vdHNjY3MvLi9zcmMvU2VydmljZXMvTWFrZVRoZUNvbmNlcHQudHMiLCJ3ZWJwYWNrOi8vdHNjY3MvLi9zcmMvU2VydmljZXMvTWFrZVRoZUluc3RhbmNlQ29uY2VwdC50cyIsIndlYnBhY2s6Ly90c2Njcy8uL3NyYy9TZXJ2aWNlcy9NYWtlVGhlVHlwZUNvbmNlcHQudHMiLCJ3ZWJwYWNrOi8vdHNjY3MvLi9zcmMvU2VydmljZXMvU3BsaXRTdHJpbmdzLnRzIiwid2VicGFjazovL3RzY2NzLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly90c2Njcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90c2Njcy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RzY2NzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90c2Njcy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJ0c2Njc1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ0c2Njc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ0c2Njc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsICgpID0+IHtcbnJldHVybiAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5DcmVhdGVUaGVDaGFyYWN0ZXIgPSB2b2lkIDA7XG5jb25zdCBBcGlDb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuLi8uLi9Db25zdGFudHMvQXBpQ29uc3RhbnRzXCIpO1xuZnVuY3Rpb24gQ3JlYXRlVGhlQ2hhcmFjdGVyKGNoYXJhY3RlckRhdGEpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coY2hhcmFjdGVyRGF0YSk7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKEFwaUNvbnN0YW50c18xLkNyZWF0ZVRoZUNoYXJhY3RlckRhdGFVcmwsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNoYXJhY3RlckRhdGEpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdFN0cmluZyA9IHlpZWxkIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHJlc3VsdFN0cmluZztcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBtZXNzYWdlOiAnLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1bmV4cGVjdGVkIGVycm9yOiAnLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5DcmVhdGVUaGVDaGFyYWN0ZXIgPSBDcmVhdGVUaGVDaGFyYWN0ZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5DcmVhdGVUaGVDb25jZXB0QXBpID0gdm9pZCAwO1xuY29uc3QgQXBpQ29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vLi4vQ29uc3RhbnRzL0FwaUNvbnN0YW50c1wiKTtcbmZ1bmN0aW9uIENyZWF0ZVRoZUNvbmNlcHRBcGkoY29uY2VwdERhdGEpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChBcGlDb25zdGFudHNfMS5DcmVhdGVUaGVDb25jZXB0VXJsLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjb25jZXB0RGF0YSksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzdWx0U3RyaW5nID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVzdWx0U3RyaW5nO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIG1lc3NhZ2U6ICcsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VuZXhwZWN0ZWQgZXJyb3I6ICcsIGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLkNyZWF0ZVRoZUNvbmNlcHRBcGkgPSBDcmVhdGVUaGVDb25jZXB0QXBpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ3JlYXRlVGhlQ29ubmVjdGlvbkFwaSA9IHZvaWQgMDtcbmNvbnN0IEFwaUNvbnN0YW50c18xID0gcmVxdWlyZShcIi4uLy4uL0NvbnN0YW50cy9BcGlDb25zdGFudHNcIik7XG5mdW5jdGlvbiBDcmVhdGVUaGVDb25uZWN0aW9uQXBpKGNvbm5lY3Rpb25EYXRhKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBqc29uRGF0YSA9IEpTT04uc3RyaW5naWZ5KGNvbm5lY3Rpb25EYXRhKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goQXBpQ29uc3RhbnRzXzEuQ3JlYXRlVGhlQ29ubmVjdGlvblVybCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keToganNvbkRhdGFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgbWVzc2FnZTogJywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndW5leHBlY3RlZCBlcnJvcjogJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuQ3JlYXRlVGhlQ29ubmVjdGlvbkFwaSA9IENyZWF0ZVRoZUNvbm5lY3Rpb25BcGk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5DcmVhdGVUZXh0RGF0YSA9IHZvaWQgMDtcbmNvbnN0IEFwaUNvbnN0YW50c18xID0gcmVxdWlyZShcIi4uLy4uL0NvbnN0YW50cy9BcGlDb25zdGFudHNcIik7XG5mdW5jdGlvbiBDcmVhdGVUZXh0RGF0YSh0ZXh0RGF0YSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKEFwaUNvbnN0YW50c18xLkNyZWF0ZVRoZVRleHREYXRhVXJsLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0ZXh0RGF0YSksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzdWx0U3RyaW5nID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVzdWx0U3RyaW5nO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIG1lc3NhZ2U6ICcsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VuZXhwZWN0ZWQgZXJyb3I6ICcsIGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLkNyZWF0ZVRleHREYXRhID0gQ3JlYXRlVGV4dERhdGE7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HZXRBbGxDb25jZXB0c0J5VHlwZSA9IHZvaWQgMDtcbmNvbnN0IENvbmNlcHREYXRhXzEgPSByZXF1aXJlKFwiLi8uLi9EYXRhU3RydWN0dXJlcy9Db25jZXB0RGF0YVwiKTtcbmNvbnN0IEFwaUNvbnN0YW50c18xID0gcmVxdWlyZShcIi4vLi4vQ29uc3RhbnRzL0FwaUNvbnN0YW50c1wiKTtcbmZ1bmN0aW9uIEdldEFsbENvbmNlcHRzQnlUeXBlKHR5cGUsIHVzZXJJZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgdXJsZW5jb2RlZCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICAgICAgICAgIHVybGVuY29kZWQuYXBwZW5kKFwidHlwZVwiLCB0eXBlKTtcbiAgICAgICAgICAgIHVybGVuY29kZWQuYXBwZW5kKFwidXNlcl9pZFwiLCBcIjEwMjY3XCIpO1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChBcGlDb25zdGFudHNfMS5HZXRBbGxDb25jZXB0c0J5VHlwZVVybCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiB1cmxlbmNvZGVkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBDb25jZXB0RGF0YV8xLkNvbmNlcHRzRGF0YS5BZGRDb25jZXB0KHJlc3VsdFtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBtZXNzYWdlOiAnLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1bmV4cGVjdGVkIGVycm9yOiAnLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5HZXRBbGxDb25jZXB0c0J5VHlwZSA9IEdldEFsbENvbmNlcHRzQnlUeXBlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2V0QWxsQ29ubmVjdGlvbnNPZkNvbXBvc2l0aW9uID0gdm9pZCAwO1xuY29uc3QgQ29ubmVjdGlvbkRhdGFfMSA9IHJlcXVpcmUoXCIuLi9EYXRhU3RydWN0dXJlcy9Db25uZWN0aW9uRGF0YVwiKTtcbmNvbnN0IEFwaUNvbnN0YW50c18xID0gcmVxdWlyZShcIi4vLi4vQ29uc3RhbnRzL0FwaUNvbnN0YW50c1wiKTtcbmZ1bmN0aW9uIEdldEFsbENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvbihjb21wb3NpdGlvbl9pZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKEFwaUNvbnN0YW50c18xLkdldEFsbENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvblVybCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBgY29tcG9zaXRpb25faWQ9JHtjb21wb3NpdGlvbl9pZH1gXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgQ29ubmVjdGlvbkRhdGFfMS5Db25uZWN0aW9uRGF0YS5BZGRDb25uZWN0aW9uKHJlc3VsdFtpXSk7XG4gICAgICAgICAgICAgICAgQ29ubmVjdGlvbkRhdGFfMS5Db25uZWN0aW9uRGF0YS5BZGRUb0RpY3Rpb25hcnkocmVzdWx0W2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIG1lc3NhZ2U6ICcsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VuZXhwZWN0ZWQgZXJyb3I6ICcsIGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLkdldEFsbENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvbiA9IEdldEFsbENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdldENvbmNlcHQgPSB2b2lkIDA7XG5jb25zdCBDb25jZXB0RGF0YV8xID0gcmVxdWlyZShcIi4vLi4vRGF0YVN0cnVjdHVyZXMvQ29uY2VwdERhdGFcIik7XG5jb25zdCBBcGlDb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuLy4uL0NvbnN0YW50cy9BcGlDb25zdGFudHNcIik7XG5mdW5jdGlvbiBHZXRDb25jZXB0KGlkKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBDb25jZXB0ID0gQ29uY2VwdERhdGFfMS5Db25jZXB0c0RhdGEuR2V0Q29uY2VwdChpZCk7XG4gICAgICAgICAgICBpZiAoQ29uY2VwdCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIENvbmNlcHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKEFwaUNvbnN0YW50c18xLkdldENvbmNlcHRVcmwsIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBgaWQ9JHtpZH1gXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSAoeWllbGQgcmVzcG9uc2UuanNvbigpKTtcbiAgICAgICAgICAgICAgICBDb25jZXB0RGF0YV8xLkNvbmNlcHRzRGF0YS5BZGRDb25jZXB0KHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIG1lc3NhZ2U6ICcsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VuZXhwZWN0ZWQgZXJyb3I6ICcsIGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLkdldENvbmNlcHQgPSBHZXRDb25jZXB0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyQW5kVHlwZSA9IHZvaWQgMDtcbmNvbnN0IENvbmNlcHREYXRhXzEgPSByZXF1aXJlKFwiLi8uLi9EYXRhU3RydWN0dXJlcy9Db25jZXB0RGF0YVwiKTtcbmNvbnN0IEFwaUNvbnN0YW50c18xID0gcmVxdWlyZShcIi4vLi4vQ29uc3RhbnRzL0FwaUNvbnN0YW50c1wiKTtcbmZ1bmN0aW9uIEdldENvbmNlcHRCeUNoYXJhY3RlckFuZFR5cGUoY2hhcmFjdGVyVmFsdWUsIHR5cGVJZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIganNvbiA9IHtcbiAgICAgICAgICAgICAgICAnY2hhcmFjdGVyX3ZhbHVlJzogY2hhcmFjdGVyVmFsdWUsXG4gICAgICAgICAgICAgICAgJ3R5cGVfaWQnOiB0eXBlSWRcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgdG9TZW5kSnNvbiA9IEpTT04uc3RyaW5naWZ5KGpzb24pO1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChBcGlDb25zdGFudHNfMS5HZXRDb25jZXB0QnlDaGFyYWN0ZXJBbmRUeXBlVXJsLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiB0b1NlbmRKc29uLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIENvbmNlcHREYXRhXzEuQ29uY2VwdHNEYXRhLkFkZENvbmNlcHQocmVzdWx0KTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBtZXNzYWdlOiAnLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1bmV4cGVjdGVkIGVycm9yOiAnLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5HZXRDb25jZXB0QnlDaGFyYWN0ZXJBbmRUeXBlID0gR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyQW5kVHlwZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdldENvbmNlcHRCeUNoYXJhY3RlclZhbHVlID0gdm9pZCAwO1xuY29uc3QgQ29uY2VwdERhdGFfMSA9IHJlcXVpcmUoXCIuLy4uL0RhdGFTdHJ1Y3R1cmVzL0NvbmNlcHREYXRhXCIpO1xuY29uc3QgQXBpQ29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi8uLi9Db25zdGFudHMvQXBpQ29uc3RhbnRzXCIpO1xuZnVuY3Rpb24gR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyVmFsdWUoY2hhcmFjdGVyVmFsdWUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChBcGlDb25zdGFudHNfMS5HZXRDb25jZXB0QnlDaGFyYWN0ZXJWYWx1ZVVybCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBgY2hhcmFjdGVyX3ZhbHVlPSR7Y2hhcmFjdGVyVmFsdWV9YFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIENvbmNlcHREYXRhXzEuQ29uY2VwdHNEYXRhLkFkZENvbmNlcHQocmVzdWx0KTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBtZXNzYWdlOiAnLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1bmV4cGVjdGVkIGVycm9yOiAnLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5HZXRDb25jZXB0QnlDaGFyYWN0ZXJWYWx1ZSA9IEdldENvbmNlcHRCeUNoYXJhY3RlclZhbHVlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2V0UmVzZXJ2ZWRJZHMgPSB2b2lkIDA7XG5jb25zdCBBcGlDb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuLy4uL0NvbnN0YW50cy9BcGlDb25zdGFudHNcIik7XG5jb25zdCBSZXNlcnZlZElkc18xID0gcmVxdWlyZShcIi4uL0RhdGFTdHJ1Y3R1cmVzL1Jlc2VydmVkSWRzXCIpO1xuZnVuY3Rpb24gR2V0UmVzZXJ2ZWRJZHMoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goQXBpQ29uc3RhbnRzXzEuR2V0UmVzZXJ2ZWRJZFVybCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgUmVzZXJ2ZWRJZHNfMS5SZXNlcnZlZElkcy5BZGRJZChyZXN1bHRbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgbWVzc2FnZTogJywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndW5leHBlY3RlZCBlcnJvcjogJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuR2V0UmVzZXJ2ZWRJZHMgPSBHZXRSZXNlcnZlZElkcztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5DcmVhdGVUaGVDb25uZWN0aW9uVXJsID0gZXhwb3J0cy5DcmVhdGVUaGVDb25jZXB0VXJsID0gZXhwb3J0cy5DcmVhdGVUaGVDaGFyYWN0ZXJEYXRhVXJsID0gZXhwb3J0cy5DcmVhdGVUaGVUZXh0RGF0YVVybCA9IGV4cG9ydHMuR2V0UmVzZXJ2ZWRJZFVybCA9IGV4cG9ydHMuR2V0QWxsQ29uY2VwdHNCeVR5cGVVcmwgPSBleHBvcnRzLkdldENoYXJhY3RlckJ5Q2hhcmFjdGVyVXJsID0gZXhwb3J0cy5HZXRDb25jZXB0QnlDaGFyYWN0ZXJBbmRUeXBlVXJsID0gZXhwb3J0cy5HZXRDb25jZXB0QnlDaGFyYWN0ZXJWYWx1ZVVybCA9IGV4cG9ydHMuR2V0QWxsQ29ubmVjdGlvbnNPZkNvbXBvc2l0aW9uVXJsID0gZXhwb3J0cy5HZXRBbGxDb25uZWN0aW9uc09mVXNlclVybCA9IGV4cG9ydHMuR2V0QWxsQ29uY2VwdHNPZlVzZXJVcmwgPSBleHBvcnRzLkdldENvbmNlcHRVcmwgPSBleHBvcnRzLkJBU0VfVVJMID0gdm9pZCAwO1xuZXhwb3J0cy5CQVNFX1VSTCA9IFwiaHR0cHM6Ly9sb2NhbGhvc3Q6NzA1M1wiO1xuZXhwb3J0cy5HZXRDb25jZXB0VXJsID0gZXhwb3J0cy5CQVNFX1VSTCArICcvYXBpL2dldENvbmNlcHQnO1xuZXhwb3J0cy5HZXRBbGxDb25jZXB0c09mVXNlclVybCA9IGV4cG9ydHMuQkFTRV9VUkwgKyAnL2FwaS9nZXRfYWxsX2NvbmNlcHRzX29mX3VzZXInO1xuZXhwb3J0cy5HZXRBbGxDb25uZWN0aW9uc09mVXNlclVybCA9IGV4cG9ydHMuQkFTRV9VUkwgKyAnL2FwaS9nZXRfYWxsX2Nvbm5lY3Rpb25zX29mX3VzZXInO1xuZXhwb3J0cy5HZXRBbGxDb25uZWN0aW9uc09mQ29tcG9zaXRpb25VcmwgPSBleHBvcnRzLkJBU0VfVVJMICsgJy9hcGkvZ2V0X2FsbF9jb25uZWN0aW9uc19vZl9jb21wb3NpdGlvbic7XG5leHBvcnRzLkdldENvbmNlcHRCeUNoYXJhY3RlclZhbHVlVXJsID0gZXhwb3J0cy5CQVNFX1VSTCArICcvYXBpL2dldF9jb25jZXB0X2J5X2NoYXJhY3Rlcl92YWx1ZSc7XG5leHBvcnRzLkdldENvbmNlcHRCeUNoYXJhY3RlckFuZFR5cGVVcmwgPSBleHBvcnRzLkJBU0VfVVJMICsgJy9hcGkvZ2V0X2NvbmNlcHRfYnlfY2hhcmFjdGVyX2FuZF90eXBlJztcbmV4cG9ydHMuR2V0Q2hhcmFjdGVyQnlDaGFyYWN0ZXJVcmwgPSBleHBvcnRzLkJBU0VfVVJMICsgJy9hcGkvZ2V0X2NoYXJhY3Rlcl9ieV9jaGFyYWN0ZXInO1xuZXhwb3J0cy5HZXRBbGxDb25jZXB0c0J5VHlwZVVybCA9IGV4cG9ydHMuQkFTRV9VUkwgKyAnL2FwaS9nZXRfYWxsX2NvbmNlcHRzX2J5X3R5cGUnO1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vIEFQSSBGb3IgUmVzZXJ2ZWQgSWRzIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuZXhwb3J0cy5HZXRSZXNlcnZlZElkVXJsID0gZXhwb3J0cy5CQVNFX1VSTCArICcvYXBpL2dldF9yZXNlcnZlZF9pZHMnO1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy9BUEkgRm9yIENyZWF0aW5nIERhdGEgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmV4cG9ydHMuQ3JlYXRlVGhlVGV4dERhdGFVcmwgPSBleHBvcnRzLkJBU0VfVVJMICsgJy9hcGkvY3JlYXRlX3RleHRfZGF0YSc7XG5leHBvcnRzLkNyZWF0ZVRoZUNoYXJhY3RlckRhdGFVcmwgPSBleHBvcnRzLkJBU0VfVVJMICsgJy9hcGkvY3JlYXRlX2NoYXJhY3Rlcl9kYXRhJztcbmV4cG9ydHMuQ3JlYXRlVGhlQ29uY2VwdFVybCA9IGV4cG9ydHMuQkFTRV9VUkwgKyAnL2FwaS9jcmVhdGVfdGhlX2NvbmNlcHQnO1xuZXhwb3J0cy5DcmVhdGVUaGVDb25uZWN0aW9uVXJsID0gZXhwb3J0cy5CQVNFX1VSTCArICcvYXBpL2NyZWF0ZV90aGVfY29ubmVjdGlvbic7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ29uY2VwdCA9IHZvaWQgMDtcbmNvbnN0IENvbmNlcHREYXRhXzEgPSByZXF1aXJlKFwiLi9Db25jZXB0RGF0YVwiKTtcbmNsYXNzIENvbmNlcHQge1xuICAgIGNvbnN0cnVjdG9yKGlkLCB1c2VySWQsIHR5cGVJZCwgdHlwZVVzZXJJZCwgY2F0ZWdvcnlJZCwgY2F0ZWdvcnlVc2VySWQsIHJlZmVyZW50SWQsIHJlZmVyZW50VXNlcklkLCBjaGFyYWN0ZXJWYWx1ZSwgc2VjdXJpdHlJZCwgc2VjdXJpdHlVc2VySWQsIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQsIHNlc3Npb25JZCwgc2Vzc2lvblVzZXJJZCwgaXNOZXcgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMudXNlcklkID0gdXNlcklkO1xuICAgICAgICB0aGlzLnR5cGVJZCA9IHR5cGVJZDtcbiAgICAgICAgdGhpcy50eXBlVXNlcklkID0gdHlwZVVzZXJJZDtcbiAgICAgICAgdGhpcy5jYXRlZ29yeUlkID0gY2F0ZWdvcnlJZDtcbiAgICAgICAgdGhpcy5jYXRlZ29yeVVzZXJJZCA9IGNhdGVnb3J5VXNlcklkO1xuICAgICAgICB0aGlzLnJlZmVyZW50SWQgPSByZWZlcmVudElkO1xuICAgICAgICB0aGlzLnJlZmVyZW50ID0gcmVmZXJlbnRJZDtcbiAgICAgICAgdGhpcy5yZWZlcmVudFVzZXJJZCA9IHJlZmVyZW50VXNlcklkO1xuICAgICAgICB0aGlzLmNoYXJhY3RlclZhbHVlID0gY2hhcmFjdGVyVmFsdWU7XG4gICAgICAgIHRoaXMuc2VjdXJpdHlJZCA9IHNlY3VyaXR5SWQ7XG4gICAgICAgIHRoaXMuc2VjdXJpdHlVc2VySWQgPSBzZWN1cml0eVVzZXJJZDtcbiAgICAgICAgdGhpcy5hY2Nlc3NJZCA9IGFjY2Vzc0lkO1xuICAgICAgICB0aGlzLmFjY2Vzc1VzZXJJZCA9IGFjY2Vzc1VzZXJJZDtcbiAgICAgICAgdGhpcy5zZXNzaW9uSWQgPSBzZXNzaW9uSWQ7XG4gICAgICAgIHRoaXMuc2Vzc2lvblVzZXJJZCA9IHNlc3Npb25Vc2VySWQ7XG4gICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIHRoaXMudHlwZSA9IG51bGw7XG4gICAgICAgIHRoaXMuaXNOZXcgPSBpc05ldztcbiAgICAgICAgQ29uY2VwdERhdGFfMS5Db25jZXB0c0RhdGEuQWRkQ29uY2VwdCh0aGlzKTtcbiAgICB9XG4gICAgZ2V0VHlwZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy50eXBlSWQpO1xuICAgIH1cbn1cbmV4cG9ydHMuQ29uY2VwdCA9IENvbmNlcHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ29uY2VwdHNEYXRhID0gdm9pZCAwO1xuY2xhc3MgQ29uY2VwdHNEYXRhIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJjb25jZXB0c0FycmF5XCI7XG4gICAgfVxuICAgIHN0YXRpYyBDaGVja0NvbnRhaW5zKGNvbmNlcHQpIHtcbiAgICAgICAgdmFyIGNvbnRhaW5zID0gZmFsc2U7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb25jZXB0c0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25jZXB0c0FycmF5W2ldLmlkID09IGNvbmNlcHQuaWQpIHtcbiAgICAgICAgICAgICAgICBjb250YWlucyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5zO1xuICAgIH1cbiAgICBzdGF0aWMgQWRkQ29uY2VwdChjb25jZXB0KSB7XG4gICAgICAgIHZhciBjb250YWlucyA9IHRoaXMuQ2hlY2tDb250YWlucyhjb25jZXB0KTtcbiAgICAgICAgdGhpcy5jb25jZXB0RGljdGlvbmFyeVtjb25jZXB0LmlkXSA9IGNvbmNlcHQ7XG4gICAgICAgIGlmIChjb250YWlucykge1xuICAgICAgICAgICAgdGhpcy5SZW1vdmVDb25jZXB0KGNvbmNlcHQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29uY2VwdHNBcnJheS5wdXNoKGNvbmNlcHQpO1xuICAgIH1cbiAgICBzdGF0aWMgUmVtb3ZlQ29uY2VwdChjb25jZXB0KSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb25jZXB0c0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25jZXB0c0FycmF5W2ldLmlkID09IGNvbmNlcHQuaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmNlcHRzQXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBHZXRDb25jZXB0KGlkKSB7XG4gICAgICAgIHZhciBteUNvbmNlcHQ7XG4gICAgICAgIG15Q29uY2VwdCA9IG51bGw7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb25jZXB0c0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25jZXB0c0FycmF5W2ldLmlkID09IGlkKSB7XG4gICAgICAgICAgICAgICAgbXlDb25jZXB0ID0gdGhpcy5jb25jZXB0c0FycmF5W2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBteUNvbmNlcHQ7XG4gICAgfVxuICAgIHN0YXRpYyBHZXRDb25jZXB0QnlDaGFyYWN0ZXIoY2hhcmFjdGVyVmFsdWUpIHtcbiAgICAgICAgdmFyIG15Q29uY2VwdDtcbiAgICAgICAgbXlDb25jZXB0ID0gbnVsbDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbmNlcHRzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmNlcHRzQXJyYXlbaV0uY2hhcmFjdGVyVmFsdWUgPT0gY2hhcmFjdGVyVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBteUNvbmNlcHQgPSB0aGlzLmNvbmNlcHRzQXJyYXlbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG15Q29uY2VwdDtcbiAgICB9XG4gICAgc3RhdGljIEdldENvbmNlcHRzQnlUeXBlSWQodHlwZUlkKSB7XG4gICAgICAgIHZhciBteUNvbmNlcHQ7XG4gICAgICAgIHZhciBDb25jZXB0TGlzdCA9IFtdO1xuICAgICAgICBteUNvbmNlcHQgPSBudWxsO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29uY2VwdHNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29uY2VwdHNBcnJheVtpXS50eXBlSWQgPT0gdHlwZUlkKSB7XG4gICAgICAgICAgICAgICAgQ29uY2VwdExpc3QucHVzaCh0aGlzLmNvbmNlcHRzQXJyYXlbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBDb25jZXB0TGlzdDtcbiAgICB9XG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG59XG5leHBvcnRzLkNvbmNlcHRzRGF0YSA9IENvbmNlcHRzRGF0YTtcbkNvbmNlcHRzRGF0YS5jb25jZXB0c0FycmF5ID0gW107XG5Db25jZXB0c0RhdGEuY29uY2VwdERpY3Rpb25hcnkgPSBbXTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Db25uZWN0aW9uID0gdm9pZCAwO1xuY2xhc3MgQ29ubmVjdGlvbiB7XG4gICAgY29uc3RydWN0b3IoaWQgPSAwLCBvZlRoZUNvbmNlcHRJZCwgdG9UaGVDb25jZXB0SWQsIG9mVGhlQ29uY2VwdFVzZXJJZCwgdG9UaGVDb25jZXB0VXNlcklkLCB1c2VySWQsIHR5cGVJZCwgdHlwZVVzZXJJZCwgb3JkZXJJZCwgb3JkZXJVc2VySWQsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkKSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5PZlRoZUNvbmNlcHRJZCA9IG9mVGhlQ29uY2VwdElkO1xuICAgICAgICB0aGlzLlRvVGhlQ29uY2VwdElkID0gdG9UaGVDb25jZXB0SWQ7XG4gICAgICAgIHRoaXMub2ZUaGVDb25jZXB0SWQgPSBvZlRoZUNvbmNlcHRJZDtcbiAgICAgICAgdGhpcy50b1RoZUNvbmNlcHRJZCA9IHRvVGhlQ29uY2VwdElkO1xuICAgICAgICB0aGlzLk9mVGhlQ29uY2VwdFVzZXJJZCA9IG9mVGhlQ29uY2VwdFVzZXJJZDtcbiAgICAgICAgdGhpcy5Ub1RoZUNvbmNlcHRVc2VySWQgPSB0b1RoZUNvbmNlcHRVc2VySWQ7XG4gICAgICAgIHRoaXMudXNlcklkID0gdXNlcklkO1xuICAgICAgICB0aGlzLnR5cGVJZCA9IHR5cGVJZDtcbiAgICAgICAgdGhpcy50eXBlVXNlcklkID0gdHlwZVVzZXJJZDtcbiAgICAgICAgdGhpcy5vcmRlcklkID0gb3JkZXJJZDtcbiAgICAgICAgdGhpcy5vcmRlclVzZXJJZCA9IG9yZGVyVXNlcklkO1xuICAgICAgICB0aGlzLnNlY3VyaXR5SWQgPSBzZWN1cml0eUlkO1xuICAgICAgICB0aGlzLnNlY3VyaXR5VXNlcklkID0gc2VjdXJpdHlVc2VySWQ7XG4gICAgICAgIHRoaXMuYWNjZXNzSWQgPSBhY2Nlc3NJZDtcbiAgICAgICAgdGhpcy5hY2Nlc3NVc2VySWQgPSBhY2Nlc3NVc2VySWQ7XG4gICAgICAgIHRoaXMuc2Vzc2lvbkluZm9ybWF0aW9uSWQgPSBzZXNzaW9uSW5mb3JtYXRpb25JZDtcbiAgICAgICAgdGhpcy5zZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQgPSBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQ7XG4gICAgfVxufVxuZXhwb3J0cy5Db25uZWN0aW9uID0gQ29ubmVjdGlvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Db25uZWN0aW9uRGF0YSA9IHZvaWQgMDtcbmNsYXNzIENvbm5lY3Rpb25EYXRhIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJDb25uZWN0aW9uIEFycmF5XCI7XG4gICAgfVxuICAgIHN0YXRpYyBDaGVja0NvbnRhaW5zKGNvbm5lY3Rpb24pIHtcbiAgICAgICAgdmFyIGNvbnRhaW5zID0gZmFsc2U7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb25uZWN0aW9uQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25BcnJheVtpXS5pZCA9PSBjb25uZWN0aW9uLmlkKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbnMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250YWlucztcbiAgICB9XG4gICAgc3RhdGljIEFkZENvbm5lY3Rpb24oY29ubmVjdGlvbikge1xuICAgICAgICB2YXIgY29udGFpbnMgPSB0aGlzLkNoZWNrQ29udGFpbnMoY29ubmVjdGlvbik7XG4gICAgICAgIGlmICghY29udGFpbnMpIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbkFycmF5LnB1c2goY29ubmVjdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIEFkZFRvRGljdGlvbmFyeShjb25uZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbkRpY3Rpb25hcnlbY29ubmVjdGlvbi5pZF0gPSBjb25uZWN0aW9uO1xuICAgIH1cbiAgICBzdGF0aWMgUmVtb3ZlQ29ubmVjdGlvbihjb25uZWN0aW9uKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb25uZWN0aW9uQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25BcnJheVtpXS5pZCA9PSBjb25uZWN0aW9uLmlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uQXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBHZXRDb25uZWN0aW9uKGlkKSB7XG4gICAgICAgIHZhciBteUNvbmNlcHQ7XG4gICAgICAgIG15Q29uY2VwdCA9IG51bGw7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb25uZWN0aW9uQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25BcnJheVtpXS5pZCA9PSBpZCkge1xuICAgICAgICAgICAgICAgIG15Q29uY2VwdCA9IHRoaXMuY29ubmVjdGlvbkFycmF5W2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBteUNvbmNlcHQ7XG4gICAgfVxuICAgIHN0YXRpYyBHZXRDb25uZWN0aW9uc09mQ29tcG9zaXRpb24oaWQpIHtcbiAgICAgICAgdmFyIGNvbm5lY3Rpb25MaXN0ID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb25uZWN0aW9uQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25BcnJheVtpXS50eXBlSWQgPT0gaWQpIHtcbiAgICAgICAgICAgICAgICBjb25uZWN0aW9uTGlzdC5wdXNoKHRoaXMuY29ubmVjdGlvbkFycmF5W2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29ubmVjdGlvbkxpc3Q7XG4gICAgfVxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxufVxuZXhwb3J0cy5Db25uZWN0aW9uRGF0YSA9IENvbm5lY3Rpb25EYXRhO1xuQ29ubmVjdGlvbkRhdGEuY29ubmVjdGlvbkFycmF5ID0gW107XG5Db25uZWN0aW9uRGF0YS5jb25uZWN0aW9uRGljdGlvbmFyeSA9IFtdO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUmVzZXJ2ZWRJZHMgPSB2b2lkIDA7XG5jb25zdCBHZXRSZXNlcnZlZElkc18xID0gcmVxdWlyZShcIi4uL0FwaS9HZXRSZXNlcnZlZElkc1wiKTtcbmNsYXNzIFJlc2VydmVkSWRzIHtcbiAgICBzdGF0aWMgZ2V0SWQoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmlkcy5sZW5ndGgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaWRzLmxlbmd0aCA8IDUpIHtcbiAgICAgICAgICAgICAgICB2YXIgaWRzID0geWllbGQgKDAsIEdldFJlc2VydmVkSWRzXzEuR2V0UmVzZXJ2ZWRJZHMpKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaWQgPSB0aGlzLmlkc1swXTtcbiAgICAgICAgICAgIHRoaXMuaWRzLnNoaWZ0KCk7XG4gICAgICAgICAgICByZXR1cm4gaWQ7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgQWRkSWQoaWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlkcy5pbmNsdWRlcyhpZCkpIHtcbiAgICAgICAgICAgIHRoaXMuaWRzLnB1c2goaWQpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5SZXNlcnZlZElkcyA9IFJlc2VydmVkSWRzO1xuUmVzZXJ2ZWRJZHMuaWRzID0gW107XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU3luY0RhdGEgPSB2b2lkIDA7XG5jb25zdCBDcmVhdGVUaGVDb25jZXB0QXBpXzEgPSByZXF1aXJlKFwiLi4vQXBpL0NyZWF0ZS9DcmVhdGVUaGVDb25jZXB0QXBpXCIpO1xuY29uc3QgQ3JlYXRlVGhlQ29ubmVjdGlvbkFwaV8xID0gcmVxdWlyZShcIi4uL0FwaS9DcmVhdGUvQ3JlYXRlVGhlQ29ubmVjdGlvbkFwaVwiKTtcbmNvbnN0IENvbmNlcHREYXRhXzEgPSByZXF1aXJlKFwiLi9Db25jZXB0RGF0YVwiKTtcbmNsYXNzIFN5bmNEYXRhIHtcbiAgICBzdGF0aWMgQ2hlY2tDb250YWlucyhjb25jZXB0KSB7XG4gICAgICAgIHZhciBjb250YWlucyA9IGZhbHNlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29uY2VwdHNTeW5jQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmNlcHRzU3luY0FycmF5W2ldLmlkID09IGNvbmNlcHQuaWQpIHtcbiAgICAgICAgICAgICAgICBjb250YWlucyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5zO1xuICAgIH1cbiAgICBzdGF0aWMgQ2hlY2tDb250YWluc0Nvbm5lY3Rpb24oY29ubmVjdGlvbikge1xuICAgICAgICB2YXIgY29udGFpbnMgPSBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbm5lY3Rpb25TeW5jQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25TeW5jQXJyYXlbaV0uaWQgPT0gY29ubmVjdGlvbi5pZCkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5zID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGFpbnM7XG4gICAgfVxuICAgIHN0YXRpYyBBZGRDb25jZXB0KGNvbmNlcHQpIHtcbiAgICAgICAgdmFyIGNvbnRhaW5zID0gZmFsc2U7XG4gICAgICAgIENvbmNlcHREYXRhXzEuQ29uY2VwdHNEYXRhLkFkZENvbmNlcHQoY29uY2VwdCk7XG4gICAgICAgIGlmICghY29udGFpbnMpIHtcbiAgICAgICAgICAgIHRoaXMuY29uY2VwdHNTeW5jQXJyYXkucHVzaChjb25jZXB0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgUmVtb3ZlQ29uY2VwdChjb25jZXB0KSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb25jZXB0c1N5bmNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29uY2VwdHNTeW5jQXJyYXlbaV0uaWQgPT0gY29uY2VwdC5pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29uY2VwdHNTeW5jQXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBBZGRDb25uZWN0aW9uKGNvbm5lY3Rpb24pIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jb25uZWN0aW9uU3luY0FycmF5KTtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uU3luY0FycmF5LnB1c2goY29ubmVjdGlvbik7XG4gICAgfVxuICAgIHN0YXRpYyBSZW1vdmVDb25uZWN0aW9uKGNvbm5lY3Rpb24pIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbm5lY3Rpb25TeW5jQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25TeW5jQXJyYXlbaV0uaWQgPT0gY29ubmVjdGlvbi5pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvblN5bmNBcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIFN5bmNEYXRhT25saW5lKCkge1xuICAgICAgICBpZiAodGhpcy5jb25jZXB0c1N5bmNBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAoMCwgQ3JlYXRlVGhlQ29uY2VwdEFwaV8xLkNyZWF0ZVRoZUNvbmNlcHRBcGkpKHRoaXMuY29uY2VwdHNTeW5jQXJyYXkpO1xuICAgICAgICAgICAgdGhpcy5jb25jZXB0c1N5bmNBcnJheSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25TeW5jQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgKDAsIENyZWF0ZVRoZUNvbm5lY3Rpb25BcGlfMS5DcmVhdGVUaGVDb25uZWN0aW9uQXBpKSh0aGlzLmNvbm5lY3Rpb25TeW5jQXJyYXkpO1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uU3luY0FycmF5ID0gW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiZG9uZVwiO1xuICAgIH1cbn1cbmV4cG9ydHMuU3luY0RhdGEgPSBTeW5jRGF0YTtcblN5bmNEYXRhLmNvbmNlcHRzU3luY0FycmF5ID0gW107XG5TeW5jRGF0YS5jb25uZWN0aW9uU3luY0FycmF5ID0gW107XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVGhlQ2hhcmFjdGVyID0gdm9pZCAwO1xuY2xhc3MgVGhlQ2hhcmFjdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcih1c2VySWQsIGRhdGEsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSWQsIHNlc3Npb25Vc2VySWQsIGVudHJ5VGltZXN0YW1wLCBpc05ldykge1xuICAgICAgICB0aGlzLmlkID0gMDtcbiAgICAgICAgdGhpcy5pc05ldyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5zZWN1cml0eUlkID0gc2VjdXJpdHlJZDtcbiAgICAgICAgdGhpcy5zZWN1cml0eVVzZXJJZCA9IHNlY3VyaXR5VXNlcklkO1xuICAgICAgICB0aGlzLmFjY2Vzc0lkID0gYWNjZXNzSWQ7XG4gICAgICAgIHRoaXMuYWNjZXNzVXNlcklkID0gYWNjZXNzVXNlcklkO1xuICAgICAgICB0aGlzLnNlc3Npb25JZCA9IHNlc3Npb25JZDtcbiAgICAgICAgdGhpcy5zZXNzaW9uVXNlcklkID0gc2Vzc2lvblVzZXJJZDtcbiAgICAgICAgdGhpcy5pc05ldyA9IGlzTmV3O1xuICAgIH1cbn1cbmV4cG9ydHMuVGhlQ2hhcmFjdGVyID0gVGhlQ2hhcmFjdGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlRoZVRleHRzID0gdm9pZCAwO1xuY2xhc3MgVGhlVGV4dHMge1xuICAgIGNvbnN0cnVjdG9yKHVzZXJJZCwgZGF0YSwgc2VjdXJpdHlJZCwgc2VjdXJpdHlVc2VySWQsIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQsIHNlc3Npb25JZCwgc2Vzc2lvblVzZXJJZCwgZW50cnlUaW1lc3RhbXAsIGlzTmV3KSB7XG4gICAgICAgIHRoaXMuaWQgPSAwO1xuICAgICAgICB0aGlzLnVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5zZWN1cml0eUlkID0gc2VjdXJpdHlJZDtcbiAgICAgICAgdGhpcy5zZWN1cml0eVVzZXJJZCA9IHNlY3VyaXR5VXNlcklkO1xuICAgICAgICB0aGlzLmFjY2Vzc0lkID0gYWNjZXNzSWQ7XG4gICAgICAgIHRoaXMuYWNjZXNzVXNlcklkID0gYWNjZXNzVXNlcklkO1xuICAgICAgICB0aGlzLnNlc3Npb25JZCA9IHNlc3Npb25JZDtcbiAgICAgICAgdGhpcy5zZXNzaW9uVXNlcklkID0gc2Vzc2lvblVzZXJJZDtcbiAgICAgICAgdGhpcy5lbnRyeVRpbWVzdGFtcCA9IGVudHJ5VGltZXN0YW1wO1xuICAgICAgICB0aGlzLmlzTmV3ID0gaXNOZXc7XG4gICAgfVxufVxuZXhwb3J0cy5UaGVUZXh0cyA9IFRoZVRleHRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ3JlYXRlQ29ubmVjdGlvbkJldHdlZW5Ud29Db25jZXB0cyA9IHZvaWQgMDtcbmNvbnN0IENvbm5lY3Rpb25fMSA9IHJlcXVpcmUoXCIuLi9EYXRhU3RydWN0dXJlcy9Db25uZWN0aW9uXCIpO1xuY29uc3QgU3luY0RhdGFfMSA9IHJlcXVpcmUoXCIuLi9EYXRhU3RydWN0dXJlcy9TeW5jRGF0YVwiKTtcbmNvbnN0IE1ha2VUaGVJbnN0YW5jZUNvbmNlcHRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9NYWtlVGhlSW5zdGFuY2VDb25jZXB0XCIpKTtcbmZ1bmN0aW9uIENyZWF0ZUNvbm5lY3Rpb25CZXR3ZWVuVHdvQ29uY2VwdHMoY29uY2VwdDFEYXRhLCBjb25jZXB0MkRhdGEsIGxpbmtlciwgYm90aCA9IGZhbHNlKSB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgdXNlcklkID0gY29uY2VwdDFEYXRhLnVzZXJJZDtcbiAgICAgICAgdmFyIG9yZGVyVXNlcklkID0gdXNlcklkO1xuICAgICAgICB2YXIgc2VjdXJpdHlJZCA9IDk5OTtcbiAgICAgICAgdmFyIHNlY3VyaXR5VXNlcklkID0gdXNlcklkO1xuICAgICAgICB2YXIgYWNjZXNzSWQgPSA0O1xuICAgICAgICB2YXIgYWNjZXNzVXNlcklkID0gdXNlcklkO1xuICAgICAgICB2YXIgc2Vzc2lvbkluZm9ybWF0aW9uSWQgPSA5OTk7XG4gICAgICAgIHZhciBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQgPSA5OTk7XG4gICAgICAgIGlmIChib3RoKSB7XG4gICAgICAgICAgICBsZXQgcHJlZml4MSA9ICgoX2EgPSBjb25jZXB0MURhdGEudHlwZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNoYXJhY3RlclZhbHVlKSArIFwiX3NcIjtcbiAgICAgICAgICAgIGxldCBsaW5rZXJBZGQxID0gbGlua2VyICsgXCJfYnlcIjtcbiAgICAgICAgICAgIGxldCBiYWNrd2FyZExpbmtlciA9IHByZWZpeDEgKyBcIl9cIiArIGxpbmtlckFkZDE7XG4gICAgICAgICAgICB2YXIgY29ubmVjdGlvbkNvbmNlcHQgPSB5aWVsZCAoMCwgTWFrZVRoZUluc3RhbmNlQ29uY2VwdF8xLmRlZmF1bHQpKFwiY29ubmVjdGlvblwiLCBiYWNrd2FyZExpbmtlciwgZmFsc2UsIDk5OSwgOTk5LCA5OTkpO1xuICAgICAgICAgICAgdmFyIG5ld0Nvbm5lY3Rpb24gPSBuZXcgQ29ubmVjdGlvbl8xLkNvbm5lY3Rpb24oMCwgY29uY2VwdDFEYXRhLmlkLCBjb25jZXB0MkRhdGEuaWQsIGNvbmNlcHQxRGF0YS51c2VySWQsIGNvbmNlcHQyRGF0YS51c2VySWQsIGNvbmNlcHQxRGF0YS51c2VySWQsIGNvbm5lY3Rpb25Db25jZXB0LmlkLCBjb25uZWN0aW9uQ29uY2VwdC51c2VySWQsIDMsIHVzZXJJZCwgc2VjdXJpdHlJZCwgc2VjdXJpdHlVc2VySWQsIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQsIHNlc3Npb25JbmZvcm1hdGlvbklkLCBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQpO1xuICAgICAgICAgICAgU3luY0RhdGFfMS5TeW5jRGF0YS5BZGRDb25uZWN0aW9uKG5ld0Nvbm5lY3Rpb24pO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwcmVmaXggPSAoKF9iID0gY29uY2VwdDFEYXRhLnR5cGUpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jaGFyYWN0ZXJWYWx1ZSkgKyBcIl9zXCI7XG4gICAgICAgIGxldCBsaW5rZXJBZGQgPSBsaW5rZXIgKyBcIl9zXCI7XG4gICAgICAgIGxldCBmb3J3YXJkTGlua2VyID0gcHJlZml4ICsgXCJfXCIgKyBsaW5rZXJBZGQ7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRpbmcgY29ubmVjdGlvbiBiZXR3ZWVuIHR3byBjb25jZXB0c1wiKTtcbiAgICAgICAgY29uc29sZS5sb2coY29uY2VwdDFEYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2coY29uY2VwdDJEYXRhKTtcbiAgICAgICAgdmFyIGNvbm5lY3Rpb25Db25jZXB0ID0geWllbGQgKDAsIE1ha2VUaGVJbnN0YW5jZUNvbmNlcHRfMS5kZWZhdWx0KShcImNvbm5lY3Rpb25cIiwgZm9yd2FyZExpbmtlciwgZmFsc2UsIDk5OSwgOTk5LCA5OTkpO1xuICAgICAgICB2YXIgbmV3Q29ubmVjdGlvbiA9IG5ldyBDb25uZWN0aW9uXzEuQ29ubmVjdGlvbigwLCBjb25jZXB0MURhdGEuaWQsIGNvbmNlcHQyRGF0YS5pZCwgY29uY2VwdDFEYXRhLnVzZXJJZCwgY29uY2VwdDJEYXRhLnVzZXJJZCwgY29uY2VwdDFEYXRhLnVzZXJJZCwgY29ubmVjdGlvbkNvbmNlcHQuaWQsIGNvbm5lY3Rpb25Db25jZXB0LnVzZXJJZCwgMywgdXNlcklkLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCk7XG4gICAgICAgIFN5bmNEYXRhXzEuU3luY0RhdGEuQWRkQ29ubmVjdGlvbihuZXdDb25uZWN0aW9uKTtcbiAgICB9KTtcbn1cbmV4cG9ydHMuQ3JlYXRlQ29ubmVjdGlvbkJldHdlZW5Ud29Db25jZXB0cyA9IENyZWF0ZUNvbm5lY3Rpb25CZXR3ZWVuVHdvQ29uY2VwdHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQ3JlYXRlVGhlQ29ubmVjdGlvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0NyZWF0ZVRoZUNvbm5lY3Rpb25cIikpO1xuY29uc3QgTWFrZVRoZUluc3RhbmNlQ29uY2VwdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL01ha2VUaGVJbnN0YW5jZUNvbmNlcHRcIikpO1xuZnVuY3Rpb24gQ3JlYXRlVGhlQ29tcG9zaXRpb24oanNvbiwgb2ZUaGVDb25jZXB0SWQgPSBudWxsLCBvZlRoZUNvbmNlcHRVc2VySWQgPSBudWxsLCBtYWluS2V5ID0gbnVsbCwgdXNlcklkID0gbnVsbCwgYWNjZXNzSWQgPSBudWxsLCBzZXNzaW9uSW5mb3JtYXRpb25JZCA9IG51bGwpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgbG9jYWxVc2VySWQgPSB1c2VySWQgIT09IG51bGwgJiYgdXNlcklkICE9PSB2b2lkIDAgPyB1c2VySWQgOiAxMDI2NztcbiAgICAgICAgdmFyIGxvY2FsQWNjZXNzSWQgPSBhY2Nlc3NJZCAhPT0gbnVsbCAmJiBhY2Nlc3NJZCAhPT0gdm9pZCAwID8gYWNjZXNzSWQgOiAxMDI2NztcbiAgICAgICAgdmFyIGxvY2FsU2Vzc2lvbklkID0gc2Vzc2lvbkluZm9ybWF0aW9uSWQgIT09IG51bGwgJiYgc2Vzc2lvbkluZm9ybWF0aW9uSWQgIT09IHZvaWQgMCA/IHNlc3Npb25JbmZvcm1hdGlvbklkIDogMTAyNjc7XG4gICAgICAgIHZhciBNYWluS2V5TG9jYWwgPSBtYWluS2V5ICE9PSBudWxsICYmIG1haW5LZXkgIT09IHZvaWQgMCA/IG1haW5LZXkgOiAwO1xuICAgICAgICB2YXIgTWFpbkNvbmNlcHQ7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGpzb24pIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YganNvbltrZXldICE9ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9mVGhlQ29uY2VwdElkID09IG51bGwgJiYgb2ZUaGVDb25jZXB0VXNlcklkID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxvY2FsTWFpbktleSA9IE1haW5LZXlMb2NhbDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbmNlcHRTdHJpbmcgPSB5aWVsZCAoMCwgTWFrZVRoZUluc3RhbmNlQ29uY2VwdF8xLmRlZmF1bHQpKGtleSwgXCJcIiwgdHJ1ZSwgbG9jYWxVc2VySWQsIGxvY2FsQWNjZXNzSWQsIGxvY2FsU2Vzc2lvbklkKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmNlcHQgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICBNYWluQ29uY2VwdCA9IGNvbmNlcHQ7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsTWFpbktleSA9IGNvbmNlcHQuaWQ7XG4gICAgICAgICAgICAgICAgICAgIE1haW5LZXlMb2NhbCA9IGNvbmNlcHQuaWQ7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIENyZWF0ZVRoZUNvbXBvc2l0aW9uKGpzb25ba2V5XSwgY29uY2VwdC5pZCwgY29uY2VwdC51c2VySWQsIGxvY2FsTWFpbktleSwgdXNlcklkLCBhY2Nlc3NJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9mVGhlID0gb2ZUaGVDb25jZXB0SWQgIT09IG51bGwgJiYgb2ZUaGVDb25jZXB0SWQgIT09IHZvaWQgMCA/IG9mVGhlQ29uY2VwdElkIDogOTk5O1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2ZUaGVVc2VyID0gb2ZUaGVDb25jZXB0VXNlcklkICE9PSBudWxsICYmIG9mVGhlQ29uY2VwdFVzZXJJZCAhPT0gdm9pZCAwID8gb2ZUaGVDb25jZXB0VXNlcklkIDogMTAyNjc7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsb2NhbE1haW5LZXkgPSBNYWluS2V5TG9jYWw7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb25jZXB0U3RyaW5nID0geWllbGQgKDAsIE1ha2VUaGVJbnN0YW5jZUNvbmNlcHRfMS5kZWZhdWx0KShrZXksIFwiXCIsIHRydWUsIGxvY2FsVXNlcklkLCBsb2NhbEFjY2Vzc0lkLCBsb2NhbFNlc3Npb25JZCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb25jZXB0ID0gY29uY2VwdFN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvZiB0aGUgY29uY2VwdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29uY2VwdC5pZCk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkICgwLCBDcmVhdGVUaGVDb25uZWN0aW9uXzEuZGVmYXVsdCkob2ZUaGUsIG9mVGhlVXNlciwgY29uY2VwdC5pZCwgY29uY2VwdC51c2VySWQsIGxvY2FsTWFpbktleSwgbG9jYWxTZXNzaW9uSWQsIGNvbmNlcHQudXNlcklkKTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgQ3JlYXRlVGhlQ29tcG9zaXRpb24oanNvbltrZXldLCBjb25jZXB0LmlkLCBjb25jZXB0LnVzZXJJZCwgbG9jYWxNYWluS2V5LCB1c2VySWQsIGFjY2Vzc0lkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIG9mVGhlID0gb2ZUaGVDb25jZXB0SWQgIT09IG51bGwgJiYgb2ZUaGVDb25jZXB0SWQgIT09IHZvaWQgMCA/IG9mVGhlQ29uY2VwdElkIDogOTk5O1xuICAgICAgICAgICAgICAgIHZhciBvZlRoZVVzZXIgPSBvZlRoZUNvbmNlcHRVc2VySWQgIT09IG51bGwgJiYgb2ZUaGVDb25jZXB0VXNlcklkICE9PSB2b2lkIDAgPyBvZlRoZUNvbmNlcHRVc2VySWQgOiAxMDI2NztcbiAgICAgICAgICAgICAgICB2YXIgbG9jYWxNYWluS2V5ID0gTWFpbktleUxvY2FsO1xuICAgICAgICAgICAgICAgIHZhciBjb25jZXB0U3RyaW5nID0geWllbGQgKDAsIE1ha2VUaGVJbnN0YW5jZUNvbmNlcHRfMS5kZWZhdWx0KShrZXksIGpzb25ba2V5XSwgZmFsc2UsIGxvY2FsVXNlcklkLCBsb2NhbEFjY2Vzc0lkLCBsb2NhbFNlc3Npb25JZCk7XG4gICAgICAgICAgICAgICAgdmFyIGNvbmNlcHQgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICAgICAgICAgIHlpZWxkICgwLCBDcmVhdGVUaGVDb25uZWN0aW9uXzEuZGVmYXVsdCkob2ZUaGUsIG9mVGhlVXNlciwgY29uY2VwdC5pZCwgY29uY2VwdC51c2VySWQsIGxvY2FsTWFpbktleSwgbG9jYWxTZXNzaW9uSWQsIGNvbmNlcHQudXNlcklkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTWFpbkNvbmNlcHQ7XG4gICAgfSk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBDcmVhdGVUaGVDb21wb3NpdGlvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBDb25jZXB0XzEgPSByZXF1aXJlKFwiLi4vRGF0YVN0cnVjdHVyZXMvQ29uY2VwdFwiKTtcbmNvbnN0IFJlc2VydmVkSWRzXzEgPSByZXF1aXJlKFwiLi4vRGF0YVN0cnVjdHVyZXMvUmVzZXJ2ZWRJZHNcIik7XG5jb25zdCBTeW5jRGF0YV8xID0gcmVxdWlyZShcIi4uL0RhdGFTdHJ1Y3R1cmVzL1N5bmNEYXRhXCIpO1xuZnVuY3Rpb24gQ3JlYXRlVGhlQ29uY2VwdChyZWZlcmVudCwgdXNlcklkLCBjYXRlZ29yeUlkLCBjYXRlZ29yeVVzZXJJZCwgdHlwZUlkLCB0eXBlVXNlcklkLCByZWZlcmVudElkLCByZWZlcmVudFVzZXJJZCwgc2VjdXJpdHlJZCwgc2VjdXJpdHlVc2VySWQsIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQsIHNlc3Npb25JbmZvcm1hdGlvbklkLCBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgaWQgPSB5aWVsZCBSZXNlcnZlZElkc18xLlJlc2VydmVkSWRzLmdldElkKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgcmVzZXJ2ZWQgaWRcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKGlkKTtcbiAgICAgICAgdmFyIGlzTmV3ID0gdHJ1ZTtcbiAgICAgICAgdmFyIGNvbmNlcHQgPSBuZXcgQ29uY2VwdF8xLkNvbmNlcHQoaWQsIHVzZXJJZCwgdHlwZUlkLCB0eXBlVXNlcklkLCBjYXRlZ29yeUlkLCBjYXRlZ29yeVVzZXJJZCwgcmVmZXJlbnRJZCwgcmVmZXJlbnRVc2VySWQsIHJlZmVyZW50LCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCwgaXNOZXcpO1xuICAgICAgICBTeW5jRGF0YV8xLlN5bmNEYXRhLkFkZENvbmNlcHQoY29uY2VwdCk7XG4gICAgICAgIHJldHVybiBjb25jZXB0O1xuICAgIH0pO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gQ3JlYXRlVGhlQ29uY2VwdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQ29ubmVjdGlvbl8xID0gcmVxdWlyZShcIi4uL0RhdGFTdHJ1Y3R1cmVzL0Nvbm5lY3Rpb25cIik7XG5jb25zdCBTeW5jRGF0YV8xID0gcmVxdWlyZShcIi4uL0RhdGFTdHJ1Y3R1cmVzL1N5bmNEYXRhXCIpO1xuZnVuY3Rpb24gY3JlYXRlVGhlQ29ubmVjdGlvbihvZlRoZUNvbmNlcHRJZCwgb2ZUaGVDb25jZXB0VXNlcklkLCB0b1RoZUNvbmNlcHRJZCwgdG9UaGVDb25jZXB0VXNlcklkLCB0eXBlSWQsIHNlc3Npb25JbmZvcm1hdGlvbklkLCBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQpIHtcbiAgICB2YXIgb3JkZXJJZCA9IDE7XG4gICAgdmFyIG9yZGVyVXNlcklkID0gb2ZUaGVDb25jZXB0VXNlcklkO1xuICAgIHZhciB0eXBlVXNlcklkID0gb2ZUaGVDb25jZXB0VXNlcklkO1xuICAgIHZhciB1c2VySWQgPSBvZlRoZUNvbmNlcHRVc2VySWQ7XG4gICAgdmFyIHNlY3VyaXR5SWQgPSAwO1xuICAgIHZhciBzZWN1cml0eVVzZXJJZCA9IG9mVGhlQ29uY2VwdFVzZXJJZDtcbiAgICB2YXIgYWNjZXNzSWQgPSA0O1xuICAgIHZhciBhY2Nlc3NVc2VySWQgPSBvZlRoZUNvbmNlcHRVc2VySWQ7XG4gICAgdmFyIGNvbm5lY3Rpb24gPSBuZXcgQ29ubmVjdGlvbl8xLkNvbm5lY3Rpb24oMCwgb2ZUaGVDb25jZXB0SWQsIHRvVGhlQ29uY2VwdElkLCBvZlRoZUNvbmNlcHRVc2VySWQsIHRvVGhlQ29uY2VwdFVzZXJJZCwgdXNlcklkLCB0eXBlSWQsIHR5cGVVc2VySWQsIG9yZGVySWQsIG9yZGVyVXNlcklkLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCk7XG4gICAgU3luY0RhdGFfMS5TeW5jRGF0YS5BZGRDb25uZWN0aW9uKGNvbm5lY3Rpb24pO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlVGhlQ29ubmVjdGlvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdldENvbXBvc2l0aW9uID0gdm9pZCAwO1xuY29uc3QgR2V0Q29uY2VwdF8xID0gcmVxdWlyZShcIi4uL0FwaS9HZXRDb25jZXB0XCIpO1xuY29uc3QgR2V0QWxsQ29ubmVjdGlvbnNPZkNvbXBvc2l0aW9uXzEgPSByZXF1aXJlKFwiLi4vQXBpL0dldEFsbENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvblwiKTtcbmNvbnN0IENvbmNlcHREYXRhXzEgPSByZXF1aXJlKFwiLi4vRGF0YVN0cnVjdHVyZXMvQ29uY2VwdERhdGFcIik7XG5jb25zdCBDb25uZWN0aW9uRGF0YV8xID0gcmVxdWlyZShcIi4uL0RhdGFTdHJ1Y3R1cmVzL0Nvbm5lY3Rpb25EYXRhXCIpO1xuZnVuY3Rpb24gR2V0Q29tcG9zaXRpb24oaWQpIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBjb25uZWN0aW9uTGlzdCA9IFtdO1xuICAgICAgICB2YXIgcmV0dXJuT3V0cHV0ID0ge307XG4gICAgICAgIC8vY29ubmVjdGlvbkxpc3QgPSBDb25uZWN0aW9uRGF0YS5HZXRDb25uZWN0aW9uc09mQ29tcG9zaXRpb24oaWQpO1xuICAgICAgICB5aWVsZCAoMCwgR2V0QWxsQ29ubmVjdGlvbnNPZkNvbXBvc2l0aW9uXzEuR2V0QWxsQ29ubmVjdGlvbnNPZkNvbXBvc2l0aW9uKShpZCk7XG4gICAgICAgIGNvbm5lY3Rpb25MaXN0ID0gQ29ubmVjdGlvbkRhdGFfMS5Db25uZWN0aW9uRGF0YS5HZXRDb25uZWN0aW9uc09mQ29tcG9zaXRpb24oaWQpO1xuICAgICAgICB2YXIgY29tcG9zaXRpb25MaXN0ID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29ubmVjdGlvbkxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghY29tcG9zaXRpb25MaXN0LmluY2x1ZGVzKGNvbm5lY3Rpb25MaXN0W2ldLm9mVGhlQ29uY2VwdElkKSkge1xuICAgICAgICAgICAgICAgIGNvbXBvc2l0aW9uTGlzdC5wdXNoKGNvbm5lY3Rpb25MaXN0W2ldLm9mVGhlQ29uY2VwdElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgY29uY2VwdCA9IENvbmNlcHREYXRhXzEuQ29uY2VwdHNEYXRhLkdldENvbmNlcHQoaWQpO1xuICAgICAgICBpZiAoY29uY2VwdCA9PSBudWxsICYmIGlkICE9IG51bGwgJiYgaWQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2YXIgY29uY2VwdFN0cmluZyA9IHlpZWxkICgwLCBHZXRDb25jZXB0XzEuR2V0Q29uY2VwdCkoaWQpO1xuICAgICAgICAgICAgY29uY2VwdCA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG91dHB1dCA9IHlpZWxkIHJlY3Vyc2l2ZUZldGNoKGlkLCBjb25uZWN0aW9uTGlzdCwgY29tcG9zaXRpb25MaXN0KTtcbiAgICAgICAgdmFyIG1haW5TdHJpbmcgPSAoX2IgPSAoX2EgPSBjb25jZXB0ID09PSBudWxsIHx8IGNvbmNlcHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbmNlcHQudHlwZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNoYXJhY3RlclZhbHVlKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBcInRvcFwiO1xuICAgICAgICByZXR1cm5PdXRwdXRbbWFpblN0cmluZ10gPSBvdXRwdXQ7XG4gICAgICAgIHJldHVybiByZXR1cm5PdXRwdXQ7XG4gICAgfSk7XG59XG5leHBvcnRzLkdldENvbXBvc2l0aW9uID0gR2V0Q29tcG9zaXRpb247XG5mdW5jdGlvbiByZWN1cnNpdmVGZXRjaChpZCwgY29ubmVjdGlvbkxpc3QsIGNvbXBvc2l0aW9uTGlzdCkge1xuICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgb3V0cHV0ID0ge307XG4gICAgICAgIHZhciBhcnJvdXRwdXQgPSBbXTtcbiAgICAgICAgdmFyIGNvbmNlcHQgPSBDb25jZXB0RGF0YV8xLkNvbmNlcHRzRGF0YS5HZXRDb25jZXB0KGlkKTtcbiAgICAgICAgaWYgKGNvbmNlcHQgPT0gbnVsbCAmJiBpZCAhPSBudWxsICYmIGlkICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFyIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCAoMCwgR2V0Q29uY2VwdF8xLkdldENvbmNlcHQpKGlkKTtcbiAgICAgICAgICAgIGNvbmNlcHQgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb25jZXB0KSB7XG4gICAgICAgICAgICBpZiAoY29uY2VwdC50eXBlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB2YXIgdG9Db25jZXB0VHlwZUlkID0gY29uY2VwdC50eXBlSWQ7XG4gICAgICAgICAgICAgICAgdmFyIHRvQ29uY2VwdFR5cGUgPSBDb25jZXB0RGF0YV8xLkNvbmNlcHRzRGF0YS5HZXRDb25jZXB0KHRvQ29uY2VwdFR5cGVJZCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSB0byBjb25jZXB0IHR5cGVcIik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codG9Db25jZXB0VHlwZSk7XG4gICAgICAgICAgICAgICAgY29uY2VwdC50eXBlID0gdG9Db25jZXB0VHlwZTtcbiAgICAgICAgICAgICAgICBpZiAodG9Db25jZXB0VHlwZSA9PSBudWxsICYmIHRvQ29uY2VwdFR5cGVJZCAhPSBudWxsICYmIHRvQ29uY2VwdFR5cGVJZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCAoMCwgR2V0Q29uY2VwdF8xLkdldENvbmNlcHQpKHRvQ29uY2VwdFR5cGVJZCk7XG4gICAgICAgICAgICAgICAgICAgIHRvQ29uY2VwdFR5cGUgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICBjb25jZXB0LnR5cGUgPSB0b0NvbmNlcHRUeXBlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgbWFpblN0cmluZyA9IChfYiA9IChfYSA9IGNvbmNlcHQgPT09IG51bGwgfHwgY29uY2VwdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29uY2VwdC50eXBlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2hhcmFjdGVyVmFsdWUpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IFwidG9wXCI7XG4gICAgICAgIGlmICghY29tcG9zaXRpb25MaXN0LmluY2x1ZGVzKGlkKSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbmNlcHQgPT09IG51bGwgfHwgY29uY2VwdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29uY2VwdC5jaGFyYWN0ZXJWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29ubmVjdGlvbkxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoY29ubmVjdGlvbkxpc3RbaV0ub2ZUaGVDb25jZXB0SWQgPT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvQ29uY2VwdElkID0gY29ubmVjdGlvbkxpc3RbaV0udG9UaGVDb25jZXB0SWQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0b0NvbmNlcHQgPSBDb25jZXB0RGF0YV8xLkNvbmNlcHRzRGF0YS5HZXRDb25jZXB0KHRvQ29uY2VwdElkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvQ29uY2VwdCA9PSBudWxsICYmIHRvQ29uY2VwdElkICE9IG51bGwgJiYgdG9Db25jZXB0SWQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29uY2VwdFN0cmluZyA9IHlpZWxkICgwLCBHZXRDb25jZXB0XzEuR2V0Q29uY2VwdCkodG9Db25jZXB0SWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9Db25jZXB0ID0gY29uY2VwdFN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodG9Db25jZXB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHRvQ29uY2VwdCA9PT0gbnVsbCB8fCB0b0NvbmNlcHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRvQ29uY2VwdC50eXBlKSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRvQ29uY2VwdFR5cGVJZCA9IHRvQ29uY2VwdC50eXBlSWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRvQ29uY2VwdFR5cGUgPSBDb25jZXB0RGF0YV8xLkNvbmNlcHRzRGF0YS5HZXRDb25jZXB0KHRvQ29uY2VwdFR5cGVJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSB0byBjb25jZXB0IHR5cGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codG9Db25jZXB0VHlwZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9Db25jZXB0LnR5cGUgPSB0b0NvbmNlcHRUeXBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b0NvbmNlcHRUeXBlID09IG51bGwgJiYgdG9Db25jZXB0VHlwZUlkICE9IG51bGwgJiYgdG9Db25jZXB0VHlwZUlkICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29uY2VwdFN0cmluZyA9IHlpZWxkICgwLCBHZXRDb25jZXB0XzEuR2V0Q29uY2VwdCkodG9Db25jZXB0VHlwZUlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9Db25jZXB0VHlwZSA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvQ29uY2VwdC50eXBlID0gdG9Db25jZXB0VHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlZ2V4ID0gXCJ0aGVfXCI7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsb2NhbG1haW5TdHJpbmcgPSAoX2QgPSAoX2MgPSB0b0NvbmNlcHQgPT09IG51bGwgfHwgdG9Db25jZXB0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0b0NvbmNlcHQudHlwZSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmNoYXJhY3RlclZhbHVlKSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiBcInRvcFwiO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFmdGVyIHRvIGNvbmNlcHRcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvQ29uY2VwdCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsb2NhbEtleSA9IGxvY2FsbWFpblN0cmluZy5yZXBsYWNlKHJlZ2V4LCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTmFOKE51bWJlcihsb2NhbEtleSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9jYWxLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCByZWN1cnNpdmVGZXRjaCh0b0NvbmNlcHRJZCwgY29ubmVjdGlvbkxpc3QsIGNvbXBvc2l0aW9uTGlzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0W2xvY2FsS2V5XSA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIHJlY3Vyc2l2ZUZldGNoKHRvQ29uY2VwdElkLCBjb25uZWN0aW9uTGlzdCwgY29tcG9zaXRpb25MaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm91dHB1dFtsb2NhbEtleV0gPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQgPSBhcnJvdXRwdXQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9KTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdldENvbXBvc2l0aW9uTGlzdCA9IHZvaWQgMDtcbmNvbnN0IEdldEFsbENvbmNlcHRzQnlUeXBlXzEgPSByZXF1aXJlKFwiLi4vQXBpL0dldEFsbENvbmNlcHRzQnlUeXBlXCIpO1xuY29uc3QgQ29uY2VwdERhdGFfMSA9IHJlcXVpcmUoXCIuLi9EYXRhU3RydWN0dXJlcy9Db25jZXB0RGF0YVwiKTtcbmNvbnN0IEdldENvbXBvc2l0aW9uXzEgPSByZXF1aXJlKFwiLi9HZXRDb21wb3NpdGlvblwiKTtcbmNvbnN0IEdldENvbmNlcHRCeUNoYXJhY3Rlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0dldENvbmNlcHRCeUNoYXJhY3RlclwiKSk7XG5mdW5jdGlvbiBHZXRDb21wb3NpdGlvbkxpc3QoY29tcG9zaXRpb25OYW1lKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIGNvbmNlcHQgPSB5aWVsZCAoMCwgR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyXzEuZGVmYXVsdCkoY29tcG9zaXRpb25OYW1lKTtcbiAgICAgICAgdmFyIENvbXBvc2l0aW9uTGlzdCA9IFtdO1xuICAgICAgICBpZiAoY29uY2VwdCkge1xuICAgICAgICAgICAgeWllbGQgKDAsIEdldEFsbENvbmNlcHRzQnlUeXBlXzEuR2V0QWxsQ29uY2VwdHNCeVR5cGUpKGNvbXBvc2l0aW9uTmFtZSwgMTAyNjcpO1xuICAgICAgICAgICAgdmFyIGNvbmNlcHRMaXN0ID0gQ29uY2VwdERhdGFfMS5Db25jZXB0c0RhdGEuR2V0Q29uY2VwdHNCeVR5cGVJZChjb25jZXB0LmlkKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29uY2VwdExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY29tcG9zaXRpb25TdHJpbmcgPSB5aWVsZCAoMCwgR2V0Q29tcG9zaXRpb25fMS5HZXRDb21wb3NpdGlvbikoY29uY2VwdExpc3RbaV0uaWQpO1xuICAgICAgICAgICAgICAgIHZhciBqc29uID0gSlNPTi5zdHJpbmdpZnkoY29tcG9zaXRpb25TdHJpbmcpO1xuICAgICAgICAgICAgICAgIENvbXBvc2l0aW9uTGlzdC5wdXNoKGpzb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBDb21wb3NpdGlvbkxpc3Q7XG4gICAgfSk7XG59XG5leHBvcnRzLkdldENvbXBvc2l0aW9uTGlzdCA9IEdldENvbXBvc2l0aW9uTGlzdDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBHZXRDb25jZXB0QnlDaGFyYWN0ZXJWYWx1ZV8xID0gcmVxdWlyZShcIi4uL0FwaS9HZXRDb25jZXB0QnlDaGFyYWN0ZXJWYWx1ZVwiKTtcbmNvbnN0IENvbmNlcHREYXRhXzEgPSByZXF1aXJlKFwiLi4vRGF0YVN0cnVjdHVyZXMvQ29uY2VwdERhdGFcIik7XG5mdW5jdGlvbiBHZXRDb25jZXB0QnlDaGFyYWN0ZXIoY2hhcmFjdGVyVmFsdWUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgY29uY2VwdCA9IENvbmNlcHREYXRhXzEuQ29uY2VwdHNEYXRhLkdldENvbmNlcHRCeUNoYXJhY3RlcihjaGFyYWN0ZXJWYWx1ZSk7XG4gICAgICAgIGlmIChjb25jZXB0ID09IG51bGwgJiYgY2hhcmFjdGVyVmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBjb25jZXB0U3RyaW5nID0geWllbGQgKDAsIEdldENvbmNlcHRCeUNoYXJhY3RlclZhbHVlXzEuR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyVmFsdWUpKGNoYXJhY3RlclZhbHVlKTtcbiAgICAgICAgICAgIGNvbmNlcHQgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb25jZXB0O1xuICAgIH0pO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEdldENvbmNlcHRCeUNoYXJhY3RlckFuZFR5cGVfMSA9IHJlcXVpcmUoXCIuLi9BcGkvR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyQW5kVHlwZVwiKTtcbmNvbnN0IE1ha2VUaGVDaGFyYWN0ZXJEYXRhXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTWFrZVRoZUNoYXJhY3RlckRhdGFcIikpO1xuY29uc3QgTWFrZVRoZUNvbmNlcHRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9NYWtlVGhlQ29uY2VwdFwiKSk7XG5mdW5jdGlvbiBNYWtlVGhlQ2hhcmFjdGVyKHRoZV9jaGFyYWN0ZXJfZGF0YSwgdXNlcklkLCBzZWN1cml0eUlkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSWQpIHtcbiAgICB2YXIgYWNjZXNzVXNlcklkO1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBjYXRlZ29yeVVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdmFyIHNlY3VyaXR5VXNlcklkID0gdXNlcklkO1xuICAgICAgICBhY2Nlc3NVc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHZhciBjYXRlZ29yeUlkID0gNDtcbiAgICAgICAgdmFyIHR5cGVJZCA9IDUxO1xuICAgICAgICB2YXIgdHlwZVVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdmFyIHNlc3Npb25Vc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHZhciBsZW5ndGhPZkNoYXJhY3RlcnMgPSB0aGVfY2hhcmFjdGVyX2RhdGEubGVuZ3RoO1xuICAgICAgICB2YXIgY29uY2VwdDtcbiAgICAgICAgaWYgKGxlbmd0aE9mQ2hhcmFjdGVycyA9PSAxKSB7XG4gICAgICAgICAgICB2YXIgY2hhcmFjdGVyRGF0YVN0cmluZyA9IHlpZWxkICgwLCBNYWtlVGhlQ2hhcmFjdGVyRGF0YV8xLmRlZmF1bHQpKHRoZV9jaGFyYWN0ZXJfZGF0YSwgdXNlcklkLCBzZWN1cml0eUlkLCBhY2Nlc3NJZCwgc2Vzc2lvbklkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBjaGFyYWN0ZXJEYXRhU3RyaW5nID0geWllbGQgKDAsIE1ha2VUaGVDaGFyYWN0ZXJEYXRhXzEuZGVmYXVsdCkodGhlX2NoYXJhY3Rlcl9kYXRhLCB1c2VySWQsIHNlY3VyaXR5SWQsIGFjY2Vzc0lkLCBzZXNzaW9uSWQpO1xuICAgICAgICAgICAgdmFyIGNoYXJhY3RlckRhdGEgPSBjaGFyYWN0ZXJEYXRhU3RyaW5nO1xuICAgICAgICAgICAgaWYgKGNoYXJhY3RlckRhdGEuaXNOZXcpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29uY2VwdFN0cmluZyA9IHlpZWxkICgwLCBNYWtlVGhlQ29uY2VwdF8xLmRlZmF1bHQpKHRoZV9jaGFyYWN0ZXJfZGF0YSwgdXNlcklkLCBjYXRlZ29yeUlkLCBjYXRlZ29yeVVzZXJJZCwgdHlwZUlkLCB0eXBlVXNlcklkLCBjaGFyYWN0ZXJEYXRhLmlkLCBjaGFyYWN0ZXJEYXRhLnVzZXJJZCwgc2VjdXJpdHlJZCwgc2VjdXJpdHlVc2VySWQsIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQsIHNlc3Npb25JZCwgc2Vzc2lvblVzZXJJZCk7XG4gICAgICAgICAgICAgICAgY29uY2VwdCA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgbXlzdHJpbmcgPSB5aWVsZCAoMCwgR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyQW5kVHlwZV8xLkdldENvbmNlcHRCeUNoYXJhY3RlckFuZFR5cGUpKHRoZV9jaGFyYWN0ZXJfZGF0YSwgdHlwZUlkKTtcbiAgICAgICAgICAgICAgICBjb25jZXB0ID0gbXlzdHJpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbmNlcHQ7XG4gICAgfSk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBNYWtlVGhlQ2hhcmFjdGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IENyZWF0ZVRoZUNoYXJhY3Rlcl8xID0gcmVxdWlyZShcIi4uL0FwaS9DcmVhdGUvQ3JlYXRlVGhlQ2hhcmFjdGVyXCIpO1xuY29uc3QgVGhlQ2hhcmFjdGVyXzEgPSByZXF1aXJlKFwiLi4vRGF0YVN0cnVjdHVyZXMvVGhlQ2hhcmFjdGVyXCIpO1xuZnVuY3Rpb24gTWFrZVRoZUNoYXJhY3RlckRhdGEodGhlX2NoYXJhY3Rlcl9kYXRhLCB1c2VySWQsIHNlY3VyaXR5SWQsIGFjY2Vzc0lkLCBzZXNzaW9uSWQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgY2F0ZWdvcnlVc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHZhciBhY2Nlc3NVc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHZhciBzZWN1cml0eVVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdmFyIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdmFyIHRoZUNoYXJhY3RlciA9IG5ldyBUaGVDaGFyYWN0ZXJfMS5UaGVDaGFyYWN0ZXIodXNlcklkLCB0aGVfY2hhcmFjdGVyX2RhdGEsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCwgXCJcIiwgZmFsc2UpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImNoYXJhY3RlciB0ZXN0aW5nXCIpO1xuICAgICAgICB2YXIgb3V0cHV0ID0geWllbGQgKDAsIENyZWF0ZVRoZUNoYXJhY3Rlcl8xLkNyZWF0ZVRoZUNoYXJhY3RlcikodGhlQ2hhcmFjdGVyKTtcbiAgICAgICAgdmFyIHJldHVybmVyID0gb3V0cHV0O1xuICAgICAgICByZXR1cm4gcmV0dXJuZXI7XG4gICAgfSk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBNYWtlVGhlQ2hhcmFjdGVyRGF0YTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBHZXRDb25jZXB0QnlDaGFyYWN0ZXJBbmRUeXBlXzEgPSByZXF1aXJlKFwiLi4vQXBpL0dldENvbmNlcHRCeUNoYXJhY3RlckFuZFR5cGVcIik7XG5jb25zdCBDcmVhdGVUaGVDb25jZXB0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vQ3JlYXRlVGhlQ29uY2VwdFwiKSk7XG5mdW5jdGlvbiBNYWtlVGhlQ29uY2VwdChyZWZlcmVudCwgdXNlcklkLCBjYXRlZ29yeUlkLCBjYXRlZ29yeVVzZXJJZCwgdHlwZUlkLCB0eXBlVXNlcklkLCByZWZlcmVudElkLCByZWZlcmVudFVzZXJJZCwgc2VjdXJpdHlJZCwgc2VjdXJpdHlVc2VySWQsIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQsIHNlc3Npb25JbmZvcm1hdGlvbklkLCBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgY29uY2VwdFN0cmluZyA9IHlpZWxkICgwLCBHZXRDb25jZXB0QnlDaGFyYWN0ZXJBbmRUeXBlXzEuR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyQW5kVHlwZSkocmVmZXJlbnQsIHR5cGVJZCk7XG4gICAgICAgIHZhciBjb25jZXB0ID0gY29uY2VwdFN0cmluZztcbiAgICAgICAgaWYgKGNvbmNlcHQuaWQgPT0gMCkge1xuICAgICAgICAgICAgY29uY2VwdFN0cmluZyA9IHlpZWxkICgwLCBDcmVhdGVUaGVDb25jZXB0XzEuZGVmYXVsdCkocmVmZXJlbnQsIHVzZXJJZCwgY2F0ZWdvcnlJZCwgY2F0ZWdvcnlVc2VySWQsIHR5cGVJZCwgdHlwZVVzZXJJZCwgcmVmZXJlbnRJZCwgcmVmZXJlbnRVc2VySWQsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkKTtcbiAgICAgICAgICAgIGNvbmNlcHQgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb25jZXB0O1xuICAgIH0pO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gTWFrZVRoZUNvbmNlcHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQ3JlYXRlVGhlVGV4dERhdGFfMSA9IHJlcXVpcmUoXCIuLi9BcGkvQ3JlYXRlL0NyZWF0ZVRoZVRleHREYXRhXCIpO1xuY29uc3QgR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyQW5kVHlwZV8xID0gcmVxdWlyZShcIi4uL0FwaS9HZXRDb25jZXB0QnlDaGFyYWN0ZXJBbmRUeXBlXCIpO1xuY29uc3QgVGhlVGV4dHNfMSA9IHJlcXVpcmUoXCIuLi9EYXRhU3RydWN0dXJlcy9UaGVUZXh0c1wiKTtcbmNvbnN0IENyZWF0ZVRoZUNvbmNlcHRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9DcmVhdGVUaGVDb25jZXB0XCIpKTtcbmNvbnN0IE1ha2VUaGVUeXBlQ29uY2VwdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL01ha2VUaGVUeXBlQ29uY2VwdFwiKSk7XG5mdW5jdGlvbiBNYWtlVGhlSW5zdGFuY2VDb25jZXB0KHR5cGUsIHJlZmVyZW50LCBjb21wb3NpdGlvbiA9IGZhbHNlLCB1c2VySWQsIGFjY2Vzc0lkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCA9IDk5OSkge1xuICAgIHZhciBzZXNzaW9uSW5mb3JtYXRpb25JZCwgYWNjZXNzSWQ7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgc2Vzc2lvbkluZm9ybWF0aW9uSWQgPSA5OTk7XG4gICAgICAgIHZhciBjYXRlZ29yeUlkID0gNDtcbiAgICAgICAgdmFyIGNhdGVnb3J5VXNlcklkID0gdXNlcklkO1xuICAgICAgICB2YXIgcmVmZXJlbnRJZCA9IDA7XG4gICAgICAgIHZhciByZWZlcmVudFVzZXJJZCA9IDk5OTtcbiAgICAgICAgdmFyIHNlY3VyaXR5SWQgPSA5OTk7XG4gICAgICAgIHZhciBzZWN1cml0eVVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdmFyIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgYWNjZXNzSWQgPSA0O1xuICAgICAgICB2YXIgYWNjZXNzVXNlcklkID0gdXNlcklkO1xuICAgICAgICB2YXIgc3RyaW5nVG9DaGVjayA9IFwiXCI7XG4gICAgICAgIHZhciBzdHJpbmdMZW5ndGggPSByZWZlcmVudC5sZW5ndGg7XG4gICAgICAgIHZhciB0eXBlQ29uY2VwdDtcbiAgICAgICAgdmFyIGNvbmNlcHQ7XG4gICAgICAgIHZhciBzdGFydHNXaXRoVGhlID0gdHlwZS5zdGFydHNXaXRoKFwidGhlX1wiKTtcbiAgICAgICAgaWYgKHN0YXJ0c1dpdGhUaGUpIHtcbiAgICAgICAgICAgIHN0cmluZ1RvQ2hlY2sgPSB0eXBlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3RyaW5nVG9DaGVjayA9IFwidGhlX1wiICsgdHlwZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29tcG9zaXRpb24pIHtcbiAgICAgICAgICAgIHZhciB0eXBlQ29uY2VwdFN0cmluZyA9IHlpZWxkICgwLCBNYWtlVGhlVHlwZUNvbmNlcHRfMS5kZWZhdWx0KSh0eXBlLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgdXNlcklkLCB1c2VySWQpO1xuICAgICAgICAgICAgdHlwZUNvbmNlcHQgPSB0eXBlQ29uY2VwdFN0cmluZztcbiAgICAgICAgICAgIHZhciBjb25jZXB0U3RyaW5nID0geWllbGQgKDAsIENyZWF0ZVRoZUNvbmNlcHRfMS5kZWZhdWx0KShyZWZlcmVudCwgdXNlcklkLCBjYXRlZ29yeUlkLCB1c2VySWQsIHR5cGVDb25jZXB0LmlkLCB0eXBlQ29uY2VwdC51c2VySWQsIHJlZmVyZW50SWQsIHJlZmVyZW50VXNlcklkLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCk7XG4gICAgICAgICAgICBjb25jZXB0ID0gY29uY2VwdFN0cmluZztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdHJpbmdMZW5ndGggPiAyNTUpIHtcbiAgICAgICAgICAgIHZhciB0eXBlQ29uY2VwdFN0cmluZyA9IHlpZWxkICgwLCBNYWtlVGhlVHlwZUNvbmNlcHRfMS5kZWZhdWx0KShzdHJpbmdUb0NoZWNrLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkLCB1c2VySWQpO1xuICAgICAgICAgICAgdHlwZUNvbmNlcHQgPSB0eXBlQ29uY2VwdFN0cmluZztcbiAgICAgICAgICAgIHZhciBjb25jZXB0U3RyaW5nID0geWllbGQgKDAsIENyZWF0ZVRoZUNvbmNlcHRfMS5kZWZhdWx0KShyZWZlcmVudCwgdXNlcklkLCBjYXRlZ29yeUlkLCB1c2VySWQsIHR5cGVDb25jZXB0LmlkLCB0eXBlQ29uY2VwdC51c2VySWQsIHJlZmVyZW50SWQsIHJlZmVyZW50VXNlcklkLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCk7XG4gICAgICAgICAgICBjb25jZXB0ID0gY29uY2VwdFN0cmluZztcbiAgICAgICAgICAgIHZhciBUaGVUZXh0c0RhdGEgPSBuZXcgVGhlVGV4dHNfMS5UaGVUZXh0cyh1c2VySWQsIHJlZmVyZW50LCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCwgRGF0ZS5ub3coKS50b1N0cmluZygpLCB0cnVlKTtcbiAgICAgICAgICAgIHZhciBUZXh0RGF0YVN0cmluZyA9IHlpZWxkICgwLCBDcmVhdGVUaGVUZXh0RGF0YV8xLkNyZWF0ZVRleHREYXRhKShUaGVUZXh0c0RhdGEpO1xuICAgICAgICAgICAgdmFyIFRleHREYXRhID0gVGV4dERhdGFTdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgdHlwZUNvbmNlcHRTdHJpbmcgPSB5aWVsZCAoMCwgTWFrZVRoZVR5cGVDb25jZXB0XzEuZGVmYXVsdCkoc3RyaW5nVG9DaGVjaywgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCwgdXNlcklkKTtcbiAgICAgICAgICAgIHR5cGVDb25jZXB0ID0gdHlwZUNvbmNlcHRTdHJpbmc7XG4gICAgICAgICAgICB2YXIgY29uY2VwdEJ5Q2hhclR5cGVTdHJpbmcgPSB5aWVsZCAoMCwgR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyQW5kVHlwZV8xLkdldENvbmNlcHRCeUNoYXJhY3RlckFuZFR5cGUpKHJlZmVyZW50LCB0eXBlQ29uY2VwdC5pZCk7XG4gICAgICAgICAgICB2YXIgY29uY2VwdFR5cGVDaGFyYWN0ZXIgPSBjb25jZXB0QnlDaGFyVHlwZVN0cmluZztcbiAgICAgICAgICAgIGNvbmNlcHQgPSBjb25jZXB0VHlwZUNoYXJhY3RlcjtcbiAgICAgICAgICAgIGlmIChjb25jZXB0VHlwZUNoYXJhY3Rlci5pZCA9PSAwICYmIGNvbmNlcHRUeXBlQ2hhcmFjdGVyLnVzZXJJZCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCAoMCwgQ3JlYXRlVGhlQ29uY2VwdF8xLmRlZmF1bHQpKHJlZmVyZW50LCB1c2VySWQsIGNhdGVnb3J5SWQsIHVzZXJJZCwgdHlwZUNvbmNlcHQuaWQsIHR5cGVDb25jZXB0LnVzZXJJZCwgcmVmZXJlbnRJZCwgcmVmZXJlbnRVc2VySWQsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkKTtcbiAgICAgICAgICAgICAgICBjb25jZXB0ID0gY29uY2VwdFN0cmluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25jZXB0LnR5cGUgPSB0eXBlQ29uY2VwdDtcbiAgICAgICAgcmV0dXJuIGNvbmNlcHQ7XG4gICAgfSk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBNYWtlVGhlSW5zdGFuY2VDb25jZXB0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IENyZWF0ZVRoZUNvbmNlcHRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9DcmVhdGVUaGVDb25jZXB0XCIpKTtcbmNvbnN0IEdldENvbmNlcHRCeUNoYXJhY3Rlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0dldENvbmNlcHRCeUNoYXJhY3RlclwiKSk7XG5jb25zdCBNYWtlVGhlQ2hhcmFjdGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTWFrZVRoZUNoYXJhY3RlclwiKSk7XG5jb25zdCBTcGxpdFN0cmluZ3NfMSA9IHJlcXVpcmUoXCIuL1NwbGl0U3RyaW5nc1wiKTtcbmZ1bmN0aW9uIE1ha2VUaGVUeXBlQ29uY2VwdCh0eXBlU3RyaW5nLCBzZXNzaW9uSWQsIHNlc3Npb25Vc2VySWQsIHVzZXJJZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciByZWZlcmVudElkID0gOTk5O1xuICAgICAgICB2YXIgc2VjdXJpdHlJZCA9IDk5OTtcbiAgICAgICAgdmFyIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCA9IDk5OTtcbiAgICAgICAgdmFyIGFjY2Vzc0lkID0gOTk5O1xuICAgICAgICB2YXIgc2VjdXJpdHlVc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHZhciBhY2Nlc3NVc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHZhciBjYXRlZ29yeVVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdmFyIHNlY3VyaXR5VXNlcklkID0gdXNlcklkO1xuICAgICAgICB2YXIgZXhpc3RpbmdDb25jZXB0ID0geWllbGQgKDAsIEdldENvbmNlcHRCeUNoYXJhY3Rlcl8xLmRlZmF1bHQpKHR5cGVTdHJpbmcpO1xuICAgICAgICBpZiAoZXhpc3RpbmdDb25jZXB0KSB7XG4gICAgICAgICAgICBpZiAoZXhpc3RpbmdDb25jZXB0LmlkID09IDAgfHwgZXhpc3RpbmdDb25jZXB0LnVzZXJJZCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNwbGl0dGVkU3RyaW5nQXJyYXkgPSAoMCwgU3BsaXRTdHJpbmdzXzEuU3BsaXRTdHJpbmdzKSh0eXBlU3RyaW5nKTtcbiAgICAgICAgICAgICAgICBpZiAoc3BsaXR0ZWRTdHJpbmdBcnJheVswXSA9PSB0eXBlU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb25jZXB0U3RyaW5nID0geWllbGQgKDAsIE1ha2VUaGVDaGFyYWN0ZXJfMS5kZWZhdWx0KSh0eXBlU3RyaW5nLCB1c2VySWQsIHNlY3VyaXR5SWQsIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQsIHNlc3Npb25JZCk7XG4gICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nQ29uY2VwdCA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2F0ZWdvcnlJZCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjYXRlZ29yeUNvbmNlcHQgPSBNYWtlVGhlVHlwZUNvbmNlcHQoc3BsaXR0ZWRTdHJpbmdBcnJheVswXSwgc2Vzc2lvbklkLCBzZXNzaW9uVXNlcklkLCB1c2VySWQpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdHlwZUNvbmNlcHQgPSB5aWVsZCBNYWtlVGhlVHlwZUNvbmNlcHQoc3BsaXR0ZWRTdHJpbmdBcnJheVsxXSwgc2Vzc2lvbklkLCBzZXNzaW9uVXNlcklkLCB1c2VySWQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZUNvbmNlcHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb25jZXB0ID0geWllbGQgKDAsIENyZWF0ZVRoZUNvbmNlcHRfMS5kZWZhdWx0KSh0eXBlU3RyaW5nLCB1c2VySWQsIGNhdGVnb3J5SWQsIHVzZXJJZCwgdHlwZUNvbmNlcHQuaWQsIHVzZXJJZCwgcmVmZXJlbnRJZCwgdXNlcklkLCBzZWN1cml0eUlkLCB1c2VySWQsIGFjY2Vzc0lkLCB1c2VySWQsIHNlc3Npb25JZCwgdXNlcklkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nQ29uY2VwdCA9IGNvbmNlcHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nQ29uY2VwdDtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IE1ha2VUaGVUeXBlQ29uY2VwdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TcGxpdFN0cmluZ3MgPSB2b2lkIDA7XG5mdW5jdGlvbiBTcGxpdFN0cmluZ3ModHlwZVN0cmluZykge1xuICAgIGNvbnN0IFNwbGl0dGVkU3RyaW5ncyA9IHR5cGVTdHJpbmcuc3BsaXQoXCJfXCIpO1xuICAgIHJldHVybiBTcGxpdHRlZFN0cmluZ3M7XG59XG5leHBvcnRzLlNwbGl0U3RyaW5ncyA9IFNwbGl0U3RyaW5ncztcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TeW5jRGF0YSA9IGV4cG9ydHMuQ3JlYXRlQ29ubmVjdGlvbkJldHdlZW5Ud29Db25jZXB0cyA9IGV4cG9ydHMuQ3JlYXRlQ29tcG9zaXRpb24gPSBleHBvcnRzLkdldENvbXBvc2l0aW9uID0gZXhwb3J0cy5HZXRDb21wb3NpdGlvbkxpc3QgPSBleHBvcnRzLlNwbGl0U3RyaW5ncyA9IHZvaWQgMDtcbnZhciBTcGxpdFN0cmluZ3NfMSA9IHJlcXVpcmUoXCIuL1NlcnZpY2VzL1NwbGl0U3RyaW5nc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlNwbGl0U3RyaW5nc1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gU3BsaXRTdHJpbmdzXzEuU3BsaXRTdHJpbmdzOyB9IH0pO1xudmFyIEdldENvbXBvc2l0aW9uTGlzdF8xID0gcmVxdWlyZShcIi4vU2VydmljZXMvR2V0Q29tcG9zaXRpb25MaXN0XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiR2V0Q29tcG9zaXRpb25MaXN0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBHZXRDb21wb3NpdGlvbkxpc3RfMS5HZXRDb21wb3NpdGlvbkxpc3Q7IH0gfSk7XG52YXIgR2V0Q29tcG9zaXRpb25fMSA9IHJlcXVpcmUoXCIuL1NlcnZpY2VzL0dldENvbXBvc2l0aW9uXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiR2V0Q29tcG9zaXRpb25cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEdldENvbXBvc2l0aW9uXzEuR2V0Q29tcG9zaXRpb247IH0gfSk7XG52YXIgQ3JlYXRlVGhlQ29tcG9zaXRpb25fMSA9IHJlcXVpcmUoXCIuL1NlcnZpY2VzL0NyZWF0ZVRoZUNvbXBvc2l0aW9uXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQ3JlYXRlQ29tcG9zaXRpb25cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9faW1wb3J0RGVmYXVsdChDcmVhdGVUaGVDb21wb3NpdGlvbl8xKS5kZWZhdWx0OyB9IH0pO1xudmFyIENyZWF0ZUNvbm5lY3Rpb25CZXR3ZWVuVHdvQ29uY2VwdHNfMSA9IHJlcXVpcmUoXCIuL1NlcnZpY2VzL0NyZWF0ZUNvbm5lY3Rpb25CZXR3ZWVuVHdvQ29uY2VwdHNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJDcmVhdGVDb25uZWN0aW9uQmV0d2VlblR3b0NvbmNlcHRzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBDcmVhdGVDb25uZWN0aW9uQmV0d2VlblR3b0NvbmNlcHRzXzEuQ3JlYXRlQ29ubmVjdGlvbkJldHdlZW5Ud29Db25jZXB0czsgfSB9KTtcbnZhciBTeW5jRGF0YV8xID0gcmVxdWlyZShcIi4vRGF0YVN0cnVjdHVyZXMvU3luY0RhdGFcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJTeW5jRGF0YVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gU3luY0RhdGFfMS5TeW5jRGF0YTsgfSB9KTtcbi8vIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXlGb3JtJykgYXMgSFRNTEZvcm1FbGVtZW50O1xuLy8gLy9jb25zdCBmb3JtMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1c2VyRm9ybScpIGFzIEhUTUxGb3JtRWxlbWVudDtcbi8vIGNvbnN0IGZvcm0zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbXBvc2l0aW9uRm9ybScpIGFzIEhUTUxGb3JtRWxlbWVudDtcbi8vIGNvbnN0IGpzb25Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzb25Gb3JtJykgYXMgSFRNTEZvcm1FbGVtZW50O1xuLy8gY29uc3QgbmFtZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZWZvcm0nKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG4vLyBjb25zdCBnZXRuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dldG5hbWUnKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG4vLyB2YXIganNvbiA9IHtcbi8vICAgICBcImFzZGdzYWRkZmZcIjoge1xuLy8gICAgICAgICBcImFkZ2FzZGZzZGZcIjoge1xuLy8gICAgICAgICAgICAgXCJhc2RnXCI6IFwidGFtZVwiLFxuLy8gICAgICAgICAgICAgXCJicmlkZXJhcnJcIjogW1wiaGVsbG9cIiwgXCJ0cmVcIl1cbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vIH07XG4vLyBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xuLy8gICAgIGNvbnNvbGUubG9nKFwic3luY2luZ1wiKTtcbi8vICAgICBTeW5jRGF0YS5TeW5jRGF0YU9ubGluZSgpXG4vLyB9LCA1MDAwKTtcbi8vIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4vLyAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgY29uc3QgY29uY2VwdElkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb25jZXB0aWQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuLy8gICAgY29uc3QgY29uY2VwdElkID0gY29uY2VwdElkRWxlbWVudC52YWx1ZTtcbi8vICAgIEdldENvbXBvc2l0aW9uKE51bWJlcihjb25jZXB0SWQpKS50aGVuKG91dHB1dD0+e1xuLy8gICAgIGNvbnN0IGpzb25FbGVtbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanNvbm91dHB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4vLyAgICAgdmFyIGpzb24gPSBKU09OLnN0cmluZ2lmeShvdXRwdXQpO1xuLy8gICAgIGNvbnNvbGUubG9nKGpzb24pO1xuLy8gICAgIGpzb25FbGVtbnQuaW5uZXJIVE1MID0ganNvbjtcbi8vICAgIH0pO1xuLy8gfSk7XG4vLyBnZXRuYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgY29uc3QgY29uY2VwdElkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lY29uY2VwdGlkJykgYXMgSFRNTElucHV0RWxlbWVudDtcbi8vICAgICBjb25zdCBjb25jZXB0SWQgPSBjb25jZXB0SWRFbGVtZW50LnZhbHVlO1xuLy8gICAgIEdldENvbXBvc2l0aW9uKE51bWJlcihjb25jZXB0SWQpKS50aGVuKG91dHB1dD0+e1xuLy8gICAgICAgICBjb25zdCBmaXJzdE5hbWVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpcnN0bmFtZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4vLyAgICAgICAgIGNvbnN0IGxhc3ROYW1lRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYXN0bmFtZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKG91dHB1dCk7XG4vLyAgICAgICAgIGZpcnN0TmFtZUVsZW1lbnQudmFsdWUgPSBvdXRwdXQubmFtZWRhdGEuZmlyc3RuYW1lO1xuLy8gICAgICAgICBsYXN0TmFtZUVsZW1lbnQudmFsdWUgPSBvdXRwdXQubmFtZWRhdGEubGFzdG5hbWU7XG4vLyAgICAgfSk7XG4vLyAgfSk7XG4vLyBuYW1lRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbi8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgIGNvbnN0IGZpcnN0TmFtZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlyc3RuYW1lJykgYXMgSFRNTElucHV0RWxlbWVudDtcbi8vICAgICBjb25zdCBmaXJzdG5hbWUgPSBmaXJzdE5hbWVFbGVtZW50LnZhbHVlO1xuLy8gICAgIGNvbnN0IGxhc3ROYW1lRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYXN0bmFtZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4vLyAgICAgY29uc3QgbGFzdG5hbWUgPSBsYXN0TmFtZUVsZW1lbnQudmFsdWU7XG4vLyAgICAgdmFyIGpzb24gPSB7XG4vLyAgICAgICAgIFwibmFtZWRhdGFcIjp7XG4vLyAgICAgICAgICAgICBcImZpcnN0bmFtZVwiOiBmaXJzdG5hbWUsXG4vLyAgICAgICAgICAgICBcImxhc3RuYW1lXCI6IGxhc3RuYW1lXG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgY29uc29sZS5sb2coanNvbik7XG4vLyAgICAgQ3JlYXRlVGhlQ29tcG9zaXRpb24oanNvbikudGhlbigodmFsdWUpPT57XG4vLyAgICAgICAgIGNvbnN0IG91dHB1dGlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI291dHB1dGlkJykgYXMgSFRNTElucHV0RWxlbWVudDtcbi8vICAgICAgICAgdmFyIGNvbmNlcHQgPSB2YWx1ZSBhcyBDb25jZXB0O1xuLy8gICAgICAgICBvdXRwdXRpZC5pbm5lckhUTUwgPSBjb25jZXB0LmlkLnRvU3RyaW5nKCk7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzIHRoZSB0ZXN0IGZvciBmaW5hbCcpO1xuLy8gICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4vLyAgICAgfSk7XG4vLyAgICAgfSk7XG4vLyBqc29uRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+e1xuLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgY29uc3QgY29tcG9zaXRpb25OYW1lRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjanNvbmRhdGFcIikgYXMgSFRNTElucHV0RWxlbWVudDtcbi8vICAgICBjb25zdCBjb21wb3NpdGlvbk5hbWUgPSBjb21wb3NpdGlvbk5hbWVFbGVtZW50LnZhbHVlO1xuLy8gICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgY29tcG9zaXRpb24gbmFtZVwiKTtcbi8vICAgICBjb25zb2xlLmxvZyhjb21wb3NpdGlvbk5hbWUpO1xuLy8gICAgIHZhciBqb24gPSBKU09OLnBhcnNlKGNvbXBvc2l0aW9uTmFtZSk7XG4vLyAgICAgQ3JlYXRlVGhlQ29tcG9zaXRpb24oam9uKS50aGVuKCh2YWx1ZSk9Pntcbi8vICAgICAgICAgY29uc3Qgb3V0cHV0aWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3V0cHV0aWQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuLy8gICAgICAgICB2YXIgY29uY2VwdCA9IHZhbHVlIGFzIENvbmNlcHQ7XG4vLyAgICAgICAgIG91dHB1dGlkLmlubmVySFRNTCA9IGNvbmNlcHQuaWQudG9TdHJpbmcoKTtcbi8vICAgICAgICAgY29uc29sZS5sb2coJ3RoaXMgaXMgdGhlIHRlc3QgZm9yIGZpbmFsJyk7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbi8vICAgICB9KTtcbi8vIH0pO1xuLy8gZm9ybTMuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4vLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbi8vICAgICBjb25zdCBjb21wb3NpdGlvbk5hbWVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb21wb3NpdGlvbl9uYW1lXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4vLyAgICAgY29uc3QgY29tcG9zaXRpb25OYW1lID0gY29tcG9zaXRpb25OYW1lRWxlbWVudC52YWx1ZTtcbi8vICAgICBHZXRDb21wb3NpdGlvbkxpc3QoY29tcG9zaXRpb25OYW1lKS50aGVuKG91dHB1dD0+e1xuLy8gICAgICAgICBjb25zdCBqc29uRWxlbW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzb25vdXRwdXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuLy8gICAgICAgICB2YXIganNvbiA9IEpTT04uc3RyaW5naWZ5KG91dHB1dCk7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGpzb24pO1xuLy8gICAgICAgICBqc29uRWxlbW50LmlubmVySFRNTCA9IEpTT04uc3RyaW5naWZ5KGpzb24pO1xuLy8gICAgIH0pO1xuLy8gfSk7XG4vLyAvLyBmb3JtMi5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbi8vIC8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gLy8gICAgIGNvbnN0IHVzZXJJZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VzZXJpZFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuLy8gLy8gICAgIGNvbnN0IHVzZXJJZCA9IHVzZXJJZEVsZW1lbnQudmFsdWU7XG4vLyAvLyAgICAgR2V0QWxsVXNlckNvbmNlcHRzKE51bWJlcih1c2VySWQpKTtcbi8vIC8vICAgICBHZXRBbGxVc2VyQ29ubmVjdGlvbnMoTnVtYmVyKHVzZXJJZCkpLnRoZW4oKCk9Pntcbi8vIC8vICAgICAgICAgY29uc29sZS5sb2coXCJnb3QgYWxsIHRoZSBkYXRhXCIpO1xuLy8gLy8gICAgIH0pO1xuLy8gLy8gIH0pO1xuLy8gd2luZG93Lm9ubW91c2Vkb3duID0gKGV2OiBNb3VzZUV2ZW50KTogYW55ID0+IHtcbi8vICAgICB2YXIgaXNNb3VzZURvd24gPSB0cnVlO1xuLy8gICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXlDYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbi8vICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJykgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIDtcbi8vICAgICB2YXIgX2RpZmZlcmVuY2VfZnJvbV93aW5kb3cgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4vLyAgICAgdmFyIHdpZHRoX2RpZmZlcmVuY2UgPSAwO1xuLy8gICAgIHZhciBoZWlnaHRfZGlmZmVyZW5jZSA9IDA7XG4vLyAgICAgLy9VcGRhdGUgbW91c2UgcG9zaXRpb24gYXQgdGltZSBvZiBkb3duXG4vLyAgICAgdmFyIG1vdXNlX3hfY29vcmRpbmF0ZSA9IGV2LnggLSBfZGlmZmVyZW5jZV9mcm9tX3dpbmRvdy5sZWZ0ICsgd2luZG93LnNjcm9sbFg7XG4vLyAgICAgdmFyIG1vdXNlX3lfY29vcmRpbmF0ZSA9IGV2LnkgLSBfZGlmZmVyZW5jZV9mcm9tX3dpbmRvdy50b3AgKyB3aW5kb3cuc2Nyb2xsWTtcbi8vICAgICB2YXIgc2VsZWN0ZWRfY29uY2VwdF9vYmplY3QgPSBzZWxlY3RDb25jZXB0T2JqZWN0KG1vdXNlX3hfY29vcmRpbmF0ZSwgbW91c2VfeV9jb29yZGluYXRlKTtcbi8vICAgICB3aW5kb3cub25tb3VzZW1vdmUgPSAoZXY6IE1vdXNlRXZlbnQpOiBhbnkgPT4ge1xuLy8gICAgICAgICB2YXIgcHJldmlvdXNfbW91c2VfeCA9IG1vdXNlX3hfY29vcmRpbmF0ZTtcbi8vICAgICAgICAgdmFyIHByZXZpb3VzX21vdXNlX3kgPSBtb3VzZV95X2Nvb3JkaW5hdGU7XG4vLyAgICAgICAgIHZhciBuZXdfbW91c2VfeF9jb29yZGluYXRlID0gZXYueCAtIF9kaWZmZXJlbmNlX2Zyb21fd2luZG93LmxlZnQgKyB3aW5kb3cuc2Nyb2xsWDtcbi8vICAgICAgICAgdmFyIG5ld19tb3VzZV95X2Nvb3JkaW5hdGUgPSBldi55IC0gX2RpZmZlcmVuY2VfZnJvbV93aW5kb3cudG9wICsgd2luZG93LnNjcm9sbFk7XG4vLyAgICAgICAgIC8vaG93IG11Y2ggZGlkIHRoZSBtb3VzZSBtb3ZlXG4vLyAgICAgICAgIHZhciBtb3VzZV94X2RpZmZlcmVuY2UgPSBuZXdfbW91c2VfeF9jb29yZGluYXRlIC0gcHJldmlvdXNfbW91c2VfeDtcbi8vICAgICAgICAgdmFyIG1vdXNlX3lfZGlmZmVyZW5jZSA9IG5ld19tb3VzZV95X2Nvb3JkaW5hdGUgLSBwcmV2aW91c19tb3VzZV95O1xuLy8gICAgICAgICBpZihzZWxlY3RlZF9jb25jZXB0X29iamVjdCl7XG4vLyAgICAgICAgICAgICBpZihpc01vdXNlRG93bil7XG4vLyAgICAgICAgICAgICAgICAgc2VsZWN0ZWRfY29uY2VwdF9vYmplY3QueCA9IG5ld19tb3VzZV94X2Nvb3JkaW5hdGU7XG4vLyAgICAgICAgICAgICAgICAgc2VsZWN0ZWRfY29uY2VwdF9vYmplY3QueSA9IG5ld19tb3VzZV95X2Nvb3JkaW5hdGU7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgd2luZG93Lm9ubW91c2V1cCA9IChldjogTW91c2VFdmVudCk6IGFueSA9PiB7XG4vLyAgICAgICAgIGlzTW91c2VEb3duID0gZmFsc2U7XG4vLyAgICAgICAgIHNlbGVjdGVkX2NvbmNlcHRfb2JqZWN0ICA9IG51bGw7XG4vLyAgICAgfVxuLy99XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXBwLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9