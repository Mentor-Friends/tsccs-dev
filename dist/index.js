/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Api/Create/CreateTheCharacter.ts":
/*!**********************************************!*\
  !*** ./src/Api/Create/CreateTheCharacter.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateTheCharacter: () => (/* binding */ CreateTheCharacter)
/* harmony export */ });
/* harmony import */ var _Constants_ApiConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Constants/ApiConstants */ "./src/Constants/ApiConstants.ts");
/* harmony import */ var _DataStructures_CharacterRepository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../DataStructures/CharacterRepository */ "./src/DataStructures/CharacterRepository.ts");
/* harmony import */ var _DataStructures_Returner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../DataStructures/Returner */ "./src/DataStructures/Returner.ts");
/* harmony import */ var _DataStructures_TheCharacter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../DataStructures/TheCharacter */ "./src/DataStructures/TheCharacter.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




function CreateTheCharacter(characterData) {
    var characterData;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            characterData = _DataStructures_CharacterRepository__WEBPACK_IMPORTED_MODULE_1__.CharacterRepository.GetCharacter(characterData.data);
            if (characterData.id == 0) {
                const response = yield fetch(_Constants_ApiConstants__WEBPACK_IMPORTED_MODULE_0__.CreateTheCharacterDataUrl, {
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
                var savingCharacter = new _DataStructures_TheCharacter__WEBPACK_IMPORTED_MODULE_3__.TheCharacter(result.userId, characterData.data, 0, 0, 4, 4, 999, 999, "", false);
                savingCharacter.id = result.id;
                _DataStructures_CharacterRepository__WEBPACK_IMPORTED_MODULE_1__.CharacterRepository.AddCharacter(savingCharacter);
                return result;
            }
            else {
                var returningData = new _DataStructures_Returner__WEBPACK_IMPORTED_MODULE_2__.Returner(characterData.id, characterData.userId, 0, false);
                return returningData;
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


/***/ }),

/***/ "./src/Api/Create/CreateTheConceptApi.ts":
/*!***********************************************!*\
  !*** ./src/Api/Create/CreateTheConceptApi.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateTheConceptApi: () => (/* binding */ CreateTheConceptApi)
/* harmony export */ });
/* harmony import */ var _Constants_ApiConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Constants/ApiConstants */ "./src/Constants/ApiConstants.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function CreateTheConceptApi(conceptData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(_Constants_ApiConstants__WEBPACK_IMPORTED_MODULE_0__.CreateTheConceptUrl, {
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


/***/ }),

/***/ "./src/Api/Create/CreateTheConnectionApi.ts":
/*!**************************************************!*\
  !*** ./src/Api/Create/CreateTheConnectionApi.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateTheConnectionApi: () => (/* binding */ CreateTheConnectionApi)
/* harmony export */ });
/* harmony import */ var _Constants_ApiConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Constants/ApiConstants */ "./src/Constants/ApiConstants.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function CreateTheConnectionApi(connectionData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var jsonData = JSON.stringify(connectionData);
            const response = yield fetch(_Constants_ApiConstants__WEBPACK_IMPORTED_MODULE_0__.CreateTheConnectionUrl, {
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


/***/ }),

/***/ "./src/Api/Create/CreateTheTextData.ts":
/*!*********************************************!*\
  !*** ./src/Api/Create/CreateTheTextData.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateTextData: () => (/* binding */ CreateTextData)
/* harmony export */ });
/* harmony import */ var _Constants_ApiConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Constants/ApiConstants */ "./src/Constants/ApiConstants.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function CreateTextData(textData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(_Constants_ApiConstants__WEBPACK_IMPORTED_MODULE_0__.CreateTheTextDataUrl, {
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


/***/ }),

/***/ "./src/Api/GetAiData.ts":
/*!******************************!*\
  !*** ./src/Api/GetAiData.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetAiData: () => (/* binding */ GetAiData)
/* harmony export */ });
/* harmony import */ var _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DataStructures/ConceptData */ "./src/DataStructures/ConceptData.ts");
/* harmony import */ var _Services_InitializeSystem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/InitializeSystem */ "./src/Services/InitializeSystem.ts");
/* harmony import */ var _Constants_ApiConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Constants/ApiConstants */ "./src/Constants/ApiConstants.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function GetAiData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const start = new Date().getTime();
            const response = yield fetch(_Constants_ApiConstants__WEBPACK_IMPORTED_MODULE_2__.GetAllAiData, {
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
                _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_0__.ConceptsData.AddConcept(result[i]);
            }
            (0,_Services_InitializeSystem__WEBPACK_IMPORTED_MODULE_1__.PurgatoryDatabaseUpdated)();
            let elapsed = new Date().getTime() - start;
            console.log("The time taken is ", elapsed);
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


/***/ }),

/***/ "./src/Api/GetAllConceptsByType.ts":
/*!*****************************************!*\
  !*** ./src/Api/GetAllConceptsByType.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetAllConceptsByType: () => (/* binding */ GetAllConceptsByType)
/* harmony export */ });
/* harmony import */ var _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../DataStructures/ConceptData */ "./src/DataStructures/ConceptData.ts");
/* harmony import */ var _Constants_ApiConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Constants/ApiConstants */ "./src/Constants/ApiConstants.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function GetAllConceptsByType(type, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var urlencoded = new URLSearchParams();
            urlencoded.append("type", type);
            urlencoded.append("user_id", userId.toString());
            const response = yield fetch(_Constants_ApiConstants__WEBPACK_IMPORTED_MODULE_1__.GetAllConceptsByTypeUrl, {
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
                _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_0__.ConceptsData.AddConcept(result[i]);
            }
            console.log("added");
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


/***/ }),

/***/ "./src/Api/GetAllConnectionsOfComposition.ts":
/*!***************************************************!*\
  !*** ./src/Api/GetAllConnectionsOfComposition.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetAllConnectionsOfComposition: () => (/* binding */ GetAllConnectionsOfComposition),
/* harmony export */   GetAllConnectionsOfCompositionOnline: () => (/* binding */ GetAllConnectionsOfCompositionOnline)
/* harmony export */ });
/* harmony import */ var _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DataStructures/ConnectionData */ "./src/DataStructures/ConnectionData.ts");
/* harmony import */ var _Constants_ApiConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Constants/ApiConstants */ "./src/Constants/ApiConstants.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function GetAllConnectionsOfComposition(composition_id) {
    return __awaiter(this, void 0, void 0, function* () {
        var connectionList = [];
        connectionList = _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_0__.ConnectionData.GetConnectionsOfCompositionLocal(composition_id);
        if (connectionList.length == 0) {
            var connectionListString = yield GetAllConnectionsOfCompositionOnline(composition_id);
            connectionList = connectionListString;
        }
        else {
            GetAllConnectionsOfCompositionOnline(composition_id);
        }
        return connectionList;
    });
}
function GetAllConnectionsOfCompositionOnline(composition_id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var connectionList = [];
            const response = yield fetch(_Constants_ApiConstants__WEBPACK_IMPORTED_MODULE_1__.GetAllConnectionsOfCompositionUrl, {
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
            for (var i = 0; i < result.length; i++) {
                _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_0__.ConnectionData.AddConnection(result[i]);
                _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_0__.ConnectionData.AddToDictionary(result[i]);
                connectionList.push(result[i]);
            }
            return connectionList;
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


/***/ }),

/***/ "./src/Api/GetConcept.ts":
/*!*******************************!*\
  !*** ./src/Api/GetConcept.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetConcept: () => (/* binding */ GetConcept)
/* harmony export */ });
/* harmony import */ var _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../DataStructures/ConceptData */ "./src/DataStructures/ConceptData.ts");
/* harmony import */ var _Constants_ApiConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Constants/ApiConstants */ "./src/Constants/ApiConstants.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function GetConcept(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var conceptUse = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_0__.ConceptsData.GetConcept(id);
            if (conceptUse.id != 0) {
                return conceptUse;
            }
            else {
                console.log("getting data from online");
                const response = yield fetch(_Constants_ApiConstants__WEBPACK_IMPORTED_MODULE_1__.GetConceptUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: `id=${id}`
                });
                if (!response.ok) {
                    throw new Error(`Error! status: ${response.status}`);
                }
                const result = yield response.json();
                if (result.id > 0) {
                    _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_0__.ConceptsData.AddConcept(result);
                    return result;
                }
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


/***/ }),

/***/ "./src/Api/GetConceptByCharacterAndType.ts":
/*!*************************************************!*\
  !*** ./src/Api/GetConceptByCharacterAndType.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetConceptByCharacterAndType: () => (/* binding */ GetConceptByCharacterAndType)
/* harmony export */ });
/* harmony import */ var _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../DataStructures/ConceptData */ "./src/DataStructures/ConceptData.ts");
/* harmony import */ var _Constants_ApiConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Constants/ApiConstants */ "./src/Constants/ApiConstants.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function GetConceptByCharacterAndType(characterValue, typeId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var concept = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_0__.ConceptsData.GetConceptByCharacterAndTypeLocal(characterValue, typeId);
            if (concept == null || concept.id == 0) {
                console.log("could not find");
                var json = {
                    'character_value': `${characterValue}`,
                    'type_id': typeId
                };
                var toSendJson = JSON.stringify(json);
                const response = yield fetch(_Constants_ApiConstants__WEBPACK_IMPORTED_MODULE_1__.GetConceptByCharacterAndTypeUrl, {
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
                var conceptString = yield response.json();
                concept = conceptString;
                _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_0__.ConceptsData.AddConcept(concept);
            }
            return concept;
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


/***/ }),

/***/ "./src/Api/GetConceptByCharacterValue.ts":
/*!***********************************************!*\
  !*** ./src/Api/GetConceptByCharacterValue.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetConceptByCharacterValue: () => (/* binding */ GetConceptByCharacterValue)
/* harmony export */ });
/* harmony import */ var _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../DataStructures/ConceptData */ "./src/DataStructures/ConceptData.ts");
/* harmony import */ var _Constants_ApiConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Constants/ApiConstants */ "./src/Constants/ApiConstants.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function GetConceptByCharacterValue(characterValue) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(_Constants_ApiConstants__WEBPACK_IMPORTED_MODULE_1__.GetConceptByCharacterValueUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `character_value=${characterValue}`
            });
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
            else {
                const result = yield response.json();
                if (result.id > 0) {
                    _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_0__.ConceptsData.AddConcept(result);
                    return result;
                }
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


/***/ }),

/***/ "./src/Api/GetConnectionOfTheConcept.ts":
/*!**********************************************!*\
  !*** ./src/Api/GetConnectionOfTheConcept.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetConnectionOfTheConcept: () => (/* binding */ GetConnectionOfTheConcept)
/* harmony export */ });
/* harmony import */ var _Constants_ApiConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../Constants/ApiConstants */ "./src/Constants/ApiConstants.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function GetConnectionOfTheConcept(typeId, ofTheConceptId, userId, inpage = 10, page = 1) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var urlencoded = new URLSearchParams();
            urlencoded.append("typeId", `${typeId}`);
            urlencoded.append("ofTheConceptId", `${ofTheConceptId}`);
            urlencoded.append("userId", `${userId}`);
            urlencoded.append("inpage", `${inpage}`);
            urlencoded.append("page", `${page}`);
            const response = yield fetch(_Constants_ApiConstants__WEBPACK_IMPORTED_MODULE_0__.GetAllConnectionsOfConceptUrl, {
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


/***/ }),

/***/ "./src/Api/GetReservedIds.ts":
/*!***********************************!*\
  !*** ./src/Api/GetReservedIds.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetReservedIds: () => (/* binding */ GetReservedIds)
/* harmony export */ });
/* harmony import */ var _Constants_ApiConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../Constants/ApiConstants */ "./src/Constants/ApiConstants.ts");
/* harmony import */ var _DataStructures_ReservedIds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataStructures/ReservedIds */ "./src/DataStructures/ReservedIds.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function GetReservedIds() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(_Constants_ApiConstants__WEBPACK_IMPORTED_MODULE_0__.GetReservedIdUrl, {
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
                _DataStructures_ReservedIds__WEBPACK_IMPORTED_MODULE_1__.ReservedIds.AddId(result[i]);
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


/***/ }),

/***/ "./src/Constants/ApiConstants.ts":
/*!***************************************!*\
  !*** ./src/Constants/ApiConstants.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BASE_URL: () => (/* binding */ BASE_URL),
/* harmony export */   CreateTheCharacterDataUrl: () => (/* binding */ CreateTheCharacterDataUrl),
/* harmony export */   CreateTheConceptUrl: () => (/* binding */ CreateTheConceptUrl),
/* harmony export */   CreateTheConnectionUrl: () => (/* binding */ CreateTheConnectionUrl),
/* harmony export */   CreateTheTextDataUrl: () => (/* binding */ CreateTheTextDataUrl),
/* harmony export */   GetAllAiData: () => (/* binding */ GetAllAiData),
/* harmony export */   GetAllConceptsByTypeUrl: () => (/* binding */ GetAllConceptsByTypeUrl),
/* harmony export */   GetAllConceptsOfUserUrl: () => (/* binding */ GetAllConceptsOfUserUrl),
/* harmony export */   GetAllConnectionsOfCompositionUrl: () => (/* binding */ GetAllConnectionsOfCompositionUrl),
/* harmony export */   GetAllConnectionsOfConceptUrl: () => (/* binding */ GetAllConnectionsOfConceptUrl),
/* harmony export */   GetAllConnectionsOfUserUrl: () => (/* binding */ GetAllConnectionsOfUserUrl),
/* harmony export */   GetCharacterByCharacterUrl: () => (/* binding */ GetCharacterByCharacterUrl),
/* harmony export */   GetConceptByCharacterAndTypeUrl: () => (/* binding */ GetConceptByCharacterAndTypeUrl),
/* harmony export */   GetConceptByCharacterValueUrl: () => (/* binding */ GetConceptByCharacterValueUrl),
/* harmony export */   GetConceptUrl: () => (/* binding */ GetConceptUrl),
/* harmony export */   GetReservedIdUrl: () => (/* binding */ GetReservedIdUrl)
/* harmony export */ });
const BASE_URL = "MISSING_ENV_VAR".BASE_URL || 'https://apischema.freeschema.com';
const GetConceptUrl = BASE_URL + '/api/getConcept';
const GetAllConceptsOfUserUrl = BASE_URL + '/api/get_all_concepts_of_user';
const GetAllConnectionsOfUserUrl = BASE_URL + '/api/get_all_connections_of_user';
const GetAllConnectionsOfCompositionUrl = BASE_URL + '/api/get_all_connections_of_composition';
const GetConceptByCharacterValueUrl = BASE_URL + '/api/get_concept_by_character_value';
const GetConceptByCharacterAndTypeUrl = BASE_URL + '/api/get_concept_by_character_and_type';
const GetCharacterByCharacterUrl = BASE_URL + '/api/get_character_by_character';
const GetAllConceptsByTypeUrl = BASE_URL + '/api/get_all_concepts_by_type';
const GetAllConnectionsOfConceptUrl = BASE_URL + '/api/get-link-connections';
const GetAllAiData = "MISSING_ENV_VAR".AI_URL || 'https://devai.freeschema.com/api/get_ranked_type_id?inpage=500';
//////////////////////////////////////////////////////////////////////////////
//////////////// API For Reserved Ids ///////////////////////////////////////
const GetReservedIdUrl = BASE_URL + '/api/get_reserved_ids';
/////////////////////////////////////////////////////////////////////////////
////////////////API For Creating Data //////////////////////////////////////
const CreateTheTextDataUrl = BASE_URL + '/api/create_text_data';
const CreateTheCharacterDataUrl = BASE_URL + '/api/create_character_data';
const CreateTheConceptUrl = BASE_URL + '/api/create_the_concept';
const CreateTheConnectionUrl = BASE_URL + '/api/create_the_connection';


/***/ }),

/***/ "./src/DataStructures/BinaryCharacterTree.ts":
/*!***************************************************!*\
  !*** ./src/DataStructures/BinaryCharacterTree.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BinaryCharacterTree: () => (/* binding */ BinaryCharacterTree)
/* harmony export */ });
/* harmony import */ var _IdentifierFlags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IdentifierFlags */ "./src/DataStructures/IdentifierFlags.ts");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Node */ "./src/DataStructures/Node.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class BinaryCharacterTree {
    static waitForDataToLoad() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.checkFlag(resolve);
                setTimeout(() => {
                    reject("not");
                }, 25000);
            });
        });
    }
    static checkFlag(resolve) {
        if (_IdentifierFlags__WEBPACK_IMPORTED_MODULE_0__.IdentifierFlags.isCharacterLoaded) {
            return resolve("done");
        }
        else {
            setTimeout(BinaryCharacterTree.checkFlag, 1000, resolve);
        }
    }
    ;
    static addNodeToTree(node) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.characterRoot == null) {
                this.characterRoot = node;
                return this.characterRoot;
            }
            else {
                this.characterRoot = this.characterRoot.addCharacterNode(node, this.characterRoot, this.characterRoot.height);
            }
            return this.characterRoot;
        });
    }
    static addConceptToTree(concept) {
        if (concept.characterValue != "") {
            var node = new _Node__WEBPACK_IMPORTED_MODULE_1__.Node(concept.characterValue, concept, null, null);
            this.addNodeToTree(node);
        }
    }
    static getNodeFromTree(value) {
        if (this.characterRoot) {
            var Node = this.characterRoot.getCharacterFromNode(value, this.characterRoot);
            return Node;
        }
        return this.characterRoot;
    }
    static getCharacterAndTypeFromTree(value, typeId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var data = yield this.waitForDataToLoad();
            }
            catch (exception) {
                return null;
            }
            if (this.characterRoot) {
                console.log("searching .................");
                console.log(value);
                var Node = this.characterRoot.getFromNodeWithCharacterAndType(value, typeId, this.characterRoot);
                return Node;
            }
            return this.characterRoot;
        });
    }
}
BinaryCharacterTree.characterRoot = null;


/***/ }),

/***/ "./src/DataStructures/BinaryTree.ts":
/*!******************************************!*\
  !*** ./src/DataStructures/BinaryTree.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BinaryTree: () => (/* binding */ BinaryTree)
/* harmony export */ });
/* harmony import */ var _BinaryCharacterTree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BinaryCharacterTree */ "./src/DataStructures/BinaryCharacterTree.ts");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Node */ "./src/DataStructures/Node.ts");
/* harmony import */ var _IdentifierFlags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IdentifierFlags */ "./src/DataStructures/IdentifierFlags.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class BinaryTree {
    static addNodeToTree(node) {
        if (this.root == null) {
            this.root = node;
            return this.root;
        }
        else {
            this.root = this.root.addNode(node, this.root, this.root.height);
        }
    }
    static waitForDataToLoad() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.checkFlag(resolve);
                setTimeout(() => {
                    reject("not");
                }, 25000);
            });
        });
    }
    static checkFlag(resolve) {
        if (_IdentifierFlags__WEBPACK_IMPORTED_MODULE_2__.IdentifierFlags.isDataLoaded) {
            return resolve("done");
        }
        else {
            setTimeout(BinaryTree.checkFlag, 1000, resolve);
        }
    }
    ;
    static addConceptToTree(concept) {
        var node = new _Node__WEBPACK_IMPORTED_MODULE_1__.Node(concept.id, concept, null, null);
        var characterNode = new _Node__WEBPACK_IMPORTED_MODULE_1__.Node(concept.characterValue, concept, null, null);
        _BinaryCharacterTree__WEBPACK_IMPORTED_MODULE_0__.BinaryCharacterTree.addNodeToTree(characterNode);
        this.addNodeToTree(node);
    }
    static getNodeFromTree(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var data = yield this.waitForDataToLoad();
            }
            catch (exception) {
                return null;
            }
            if (this.root) {
                var Node = this.root.getFromNode(id, this.root);
                return Node;
            }
            return this.root;
        });
    }
}
BinaryTree.root = null;


/***/ }),

/***/ "./src/DataStructures/BinaryTypeTree.ts":
/*!**********************************************!*\
  !*** ./src/DataStructures/BinaryTypeTree.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BinaryTypeTree: () => (/* binding */ BinaryTypeTree)
/* harmony export */ });
/* harmony import */ var _DataStructures_Concept__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DataStructures/Concept */ "./src/DataStructures/Concept.ts");
/* harmony import */ var _IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IdentifierFlags */ "./src/DataStructures/IdentifierFlags.ts");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Node */ "./src/DataStructures/Node.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class BinaryTypeTree {
    static addNodeToTree(node) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.typeRoot == null) {
                console.log("this is type root ", node);
                this.typeRoot = node;
                return this.typeRoot;
            }
            else {
                this.typeRoot = this.typeRoot.addTypeNode(node, this.typeRoot, this.typeRoot.height);
            }
            return this.typeRoot;
        });
    }
    static addConceptToTree(concept) {
        if (concept.typeId != 0) {
            var node = new _Node__WEBPACK_IMPORTED_MODULE_2__.Node(concept.typeId, concept, null, null);
            this.addNodeToTree(node);
        }
    }
    static getNodeFromTree(id) {
        if (this.typeRoot) {
            var Node = this.typeRoot.getFromNode(id, this.typeRoot);
            return Node;
        }
        return this.typeRoot;
    }
    static getTypeVariantsFromTree(typeId) {
        var Node = this.getNodeFromTree(typeId);
        var concepts = [];
        if (Node) {
            concepts.push(Node === null || Node === void 0 ? void 0 : Node.value);
            for (let i = 0; i < Node.variants.length; i++) {
                concepts.push(Node.variants[i].value);
            }
            return concepts;
        }
    }
    static waitForDataToLoad() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.checkFlag(resolve);
                setTimeout(() => {
                    reject("not");
                }, 25000);
            });
        });
    }
    static checkFlag(resolve) {
        if (_IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__.IdentifierFlags.isTypeLoaded) {
            return resolve("done");
        }
        else {
            setTimeout(BinaryTypeTree.checkFlag, 1000, resolve);
        }
    }
    ;
    static getTypeVariantsFromTreeWithUserId(typeId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            var concepts = [];
            try {
                var data = yield this.waitForDataToLoad();
            }
            catch (exception) {
                return concepts;
            }
            var Node = this.getNodeFromTree(typeId);
            if (Node) {
                if (Node.value.userId == userId) {
                    concepts.push(Node === null || Node === void 0 ? void 0 : Node.value);
                }
                for (let i = 0; i < Node.variants.length; i++) {
                    if (Node.variants[i].value.userId == userId) {
                        concepts.push(Node.variants[i].value);
                    }
                }
            }
            return concepts;
        });
    }
    static getTypeVariantsWithCharacterValue(characterValue, typeId) {
        return __awaiter(this, void 0, void 0, function* () {
            var concept = new _DataStructures_Concept__WEBPACK_IMPORTED_MODULE_0__.Concept(0, 0, 0, 0, 0, 0, 0, 0, "0", 0, 0, 0, 0, 0, 0, false);
            try {
                var data = yield this.waitForDataToLoad();
            }
            catch (exception) {
                return concept;
            }
            var Node = this.getNodeFromTree(typeId);
            if (Node) {
                if (Node.value.characterValue == characterValue) {
                    concept = Node.value;
                }
                for (let i = 0; i < Node.variants.length; i++) {
                    if (Node.variants[i].value.characterValue == characterValue) {
                        concept = Node.variants[i].value;
                    }
                }
            }
            return concept;
        });
    }
}
BinaryTypeTree.typeRoot = null;


/***/ }),

/***/ "./src/DataStructures/CharacterRepository.ts":
/*!***************************************************!*\
  !*** ./src/DataStructures/CharacterRepository.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CharacterRepository: () => (/* binding */ CharacterRepository)
/* harmony export */ });
/* harmony import */ var _TheCharacter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheCharacter */ "./src/DataStructures/TheCharacter.ts");

class CharacterRepository {
    constructor() {
        this.name = "character Repository";
    }
    static AddCharacter(character) {
        this.characterData[character.id] = character;
    }
    static GetCharacter(value) {
        var theCharacter = new _TheCharacter__WEBPACK_IMPORTED_MODULE_0__.TheCharacter(0, "0", 0, 0, 0, 0, 0, 0, "0", false);
        for (var i = 0; i < this.characterData.length; i++) {
            if (this.characterData[i].data == value) {
                theCharacter = this.characterData[i];
            }
        }
        return theCharacter;
    }
}
CharacterRepository.characterData = [];


/***/ }),

/***/ "./src/DataStructures/Concept.ts":
/*!***************************************!*\
  !*** ./src/DataStructures/Concept.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Concept: () => (/* binding */ Concept)
/* harmony export */ });
class Concept {
    constructor(id, userId, typeId, typeUserId, categoryId, categoryUserId, referentId, referentUserId, characterValue, securityId, securityUserId, accessId, accessUserId, sessionId, sessionUserId, isNew = false) {
        this.isTemp = false;
        this.id = id;
        this.userId = userId;
        this.typeId = typeId;
        this.typeUserId = typeUserId;
        this.categoryId = categoryId;
        this.categoryUserId = categoryUserId;
        this.referentId = referentId;
        this.referent = referentId;
        this.referentUserId = referentUserId;
        this.characterValue = `${characterValue}`;
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
        // ConceptsData.AddConcept(this);
    }
    getType() {
        console.log(this.typeId);
    }
}


/***/ }),

/***/ "./src/DataStructures/ConceptData.ts":
/*!*******************************************!*\
  !*** ./src/DataStructures/ConceptData.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConceptsData: () => (/* binding */ ConceptsData)
/* harmony export */ });
/* harmony import */ var _Concept__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Concept */ "./src/DataStructures/Concept.ts");
/* harmony import */ var _Database_indexeddb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Database/indexeddb */ "./src/Database/indexeddb.ts");
/* harmony import */ var _BinaryTree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BinaryTree */ "./src/DataStructures/BinaryTree.ts");
/* harmony import */ var _BinaryCharacterTree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BinaryCharacterTree */ "./src/DataStructures/BinaryCharacterTree.ts");
/* harmony import */ var _BinaryTypeTree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BinaryTypeTree */ "./src/DataStructures/BinaryTypeTree.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





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
        if (concept.id > 0) {
            //var contains = this.CheckContains(concept);
            // this.conceptDictionary[concept.id] = concept;
            //    if(contains){
            //   this.RemoveConcept(concept);
            //  }
            (0,_Database_indexeddb__WEBPACK_IMPORTED_MODULE_1__.storeToDatabase)("concept", concept);
            _BinaryTree__WEBPACK_IMPORTED_MODULE_2__.BinaryTree.addConceptToTree(concept);
            _BinaryTypeTree__WEBPACK_IMPORTED_MODULE_4__.BinaryTypeTree.addConceptToTree(concept);
            _BinaryCharacterTree__WEBPACK_IMPORTED_MODULE_3__.BinaryCharacterTree.addConceptToTree(concept);
            this.conceptsArray.push(concept);
        }
    }
    static AddConceptTemporary(concept) {
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
        (0,_Database_indexeddb__WEBPACK_IMPORTED_MODULE_1__.removeFromDatabase)("concept", concept.id);
    }
    static GetConcept(id) {
        return __awaiter(this, void 0, void 0, function* () {
            var myConcept = new _Concept__WEBPACK_IMPORTED_MODULE_0__.Concept(0, 0, 0, 0, 0, 0, 0, 0, "0", 0, 0, 0, 0, 0, 0, false);
            var node = yield _BinaryTree__WEBPACK_IMPORTED_MODULE_2__.BinaryTree.getNodeFromTree(id);
            if (node === null || node === void 0 ? void 0 : node.value) {
                var returnedConcept = node.value;
                if (returnedConcept) {
                    myConcept = returnedConcept;
                }
            }
            // if(myConcept.id == 0 || myConcept == null){
            //     for(var i=0; i<this.conceptsArray.length; i++){
            //         if(this.conceptsArray[i].id == id){
            //             myConcept = this.conceptsArray[i];
            //         }
            //     }
            // }
            return myConcept;
        });
    }
    static GetConceptByCharacter(characterValue) {
        return __awaiter(this, void 0, void 0, function* () {
            var concept = new _Concept__WEBPACK_IMPORTED_MODULE_0__.Concept(0, 0, 0, 0, 0, 0, 0, 0, "0", 0, 0, 0, 0, 0, 0, false);
            //  for(var i=0; i<this.conceptsArray.length; i++){
            //      if(this.conceptsArray[i].characterValue == characterValue){
            //         concept = this.conceptsArray[i];
            //      }
            //  }
            var Node = _BinaryCharacterTree__WEBPACK_IMPORTED_MODULE_3__.BinaryCharacterTree.getNodeFromTree(characterValue);
            if (Node) {
                console.log("got the character");
                concept = Node.value;
            }
            // console.log(characterValue);
            // var Node = BinaryCharacterTree.getNodeFromTree(characterValue);
            // if(Node){
            //     console.log(Node.value);
            //     return Node.value;
            // }
            return concept;
        });
    }
    static GetConceptByCharacterAndTypeLocal(character_value, typeId) {
        return __awaiter(this, void 0, void 0, function* () {
            var concept = new _Concept__WEBPACK_IMPORTED_MODULE_0__.Concept(0, 0, 0, 0, 0, 0, 0, 0, "0", 0, 0, 0, 0, 0, 0, false);
            //var Node = await BinaryCharacterTree.getCharacterAndTypeFromTree(character_value,typeId);
            concept = yield _BinaryTypeTree__WEBPACK_IMPORTED_MODULE_4__.BinaryTypeTree.getTypeVariantsWithCharacterValue(character_value, typeId);
            // if(Node){
            //     concept =  Node.value;
            //     console.log("found the output");
            //     console.log(concept);
            // }
            return concept;
        });
    }
    static GetConceptsByTypeId(typeId) {
        var myConcept;
        let ConceptList = [];
        myConcept = null;
        for (var i = 0; i < this.conceptsArray.length; i++) {
            if (this.conceptsArray[i].typeId == typeId) {
                ConceptList.push(this.conceptsArray[i]);
            }
        }
        //  getFromDatabaseWithType("concept","typeId",typeId).then(conceptList=>{
        //     console.log("thi sis my list");
        //  });
        //   var dbConceptList = await getFromDatabaseWithTypeOld("concept","typeId", typeId);
        //   console.log(dbConceptList);
        //   if(Array.isArray(dbConceptList)){
        //         console.log(dbConceptList);
        //         console.log(dbConceptList.length);
        //  for(var i=0; i< dbConceptList.length; i++){
        //     console.log("here to push firsts");
        //     var contains: boolean = false;
        //     for(var j=0; j< ConceptList.length; j++){
        //         if(dbConceptList[i].id == ConceptList[j].id){
        //             contains = true;
        //         }
        //     }
        //     console.log("here to push");
        //     if(!contains){
        //         ConceptList.push(dbConceptList[i]);
        //     }
        //  }
        // }
        // console.log("this is the concept list");
        // console.log(ConceptList);
        return ConceptList;
    }
    static GetConceptsByTypeIdAndUser(typeId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let ConceptList = [];
            ConceptList = yield _BinaryTypeTree__WEBPACK_IMPORTED_MODULE_4__.BinaryTypeTree.getTypeVariantsFromTreeWithUserId(typeId, userId);
            return ConceptList;
        });
    }
    getName() {
        return this.name;
    }
}
ConceptsData.conceptsArray = [];
ConceptsData.conceptDictionary = [];


/***/ }),

/***/ "./src/DataStructures/Connection.ts":
/*!******************************************!*\
  !*** ./src/DataStructures/Connection.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Connection: () => (/* binding */ Connection)
/* harmony export */ });
class Connection {
    constructor(id = 0, ofTheConceptId, toTheConceptId, ofTheConceptUserId, toTheConceptUserId, userId, typeId, typeUserId, orderId, orderUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId) {
        this.isTemp = false;
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
        this.entryTimeStamp = new Date();
        this.terminationDateTime = new Date();
        this.localSyncTime = new Date();
    }
}


/***/ }),

/***/ "./src/DataStructures/ConnectionData.ts":
/*!**********************************************!*\
  !*** ./src/DataStructures/ConnectionData.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConnectionData: () => (/* binding */ ConnectionData)
/* harmony export */ });
/* harmony import */ var _Database_indexeddb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Database/indexeddb */ "./src/Database/indexeddb.ts");

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
        if (contains) {
            this.RemoveConnection(connection);
        }
        if (connection.id != 0 || connection.isTemp) {
            (0,_Database_indexeddb__WEBPACK_IMPORTED_MODULE_0__.storeToDatabase)("connection", connection);
        }
        this.connectionArray.push(connection);
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
        if (connection.id != 0) {
            (0,_Database_indexeddb__WEBPACK_IMPORTED_MODULE_0__.removeFromDatabase)("connection", connection.id);
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
    static GetConnectionsOfCompositionLocal(id) {
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
ConnectionData.connectionArray = [];
ConnectionData.connectionDictionary = [];


/***/ }),

/***/ "./src/DataStructures/IdentifierFlags.ts":
/*!***********************************************!*\
  !*** ./src/DataStructures/IdentifierFlags.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IdentifierFlags: () => (/* binding */ IdentifierFlags)
/* harmony export */ });
class IdentifierFlags {
}
IdentifierFlags.isTypeLoaded = false;
IdentifierFlags.isCharacterLoaded = false;
IdentifierFlags.isDataLoaded = false;
IdentifierFlags.isLocalDataLoaded = false;
IdentifierFlags.isLocalCharacterLoaded = false;
IdentifierFlags.isLocalTypeLoaded = false;
IdentifierFlags.isLocalConnectionLoaded = false;


/***/ }),

/***/ "./src/DataStructures/Local/LocalBinaryCharacterTree.ts":
/*!**************************************************************!*\
  !*** ./src/DataStructures/Local/LocalBinaryCharacterTree.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalBinaryCharacterTree: () => (/* binding */ LocalBinaryCharacterTree)
/* harmony export */ });
/* harmony import */ var _IdentifierFlags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../IdentifierFlags */ "./src/DataStructures/IdentifierFlags.ts");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Node */ "./src/DataStructures/Node.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class LocalBinaryCharacterTree {
    static waitForDataToLoad() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.checkFlag(resolve);
                setTimeout(() => {
                    reject("not");
                }, 25000);
            });
        });
    }
    static checkFlag(resolve) {
        if (_IdentifierFlags__WEBPACK_IMPORTED_MODULE_0__.IdentifierFlags.isLocalCharacterLoaded) {
            return resolve("done");
        }
        else {
            setTimeout(LocalBinaryCharacterTree.checkFlag, 1000, resolve);
        }
    }
    ;
    static addNodeToTree(node) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.LocalCharacterRoot == null) {
                this.LocalCharacterRoot = node;
                return this.LocalCharacterRoot;
            }
            else {
                this.LocalCharacterRoot = this.LocalCharacterRoot.addCharacterNode(node, this.LocalCharacterRoot, this.LocalCharacterRoot.height);
            }
            return this.LocalCharacterRoot;
        });
    }
    static addConceptToTree(concept) {
        if (concept.characterValue != "") {
            var node = new _Node__WEBPACK_IMPORTED_MODULE_1__.Node(concept.characterValue, concept, null, null);
            this.addNodeToTree(node);
        }
    }
    static getNodeFromTree(value) {
        if (this.LocalCharacterRoot) {
            var Node = this.LocalCharacterRoot.getCharacterFromNode(value, this.LocalCharacterRoot);
            return Node;
        }
        return this.LocalCharacterRoot;
    }
    static getCharacterAndTypeFromTree(value, typeId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var data = yield this.waitForDataToLoad();
            }
            catch (exception) {
                return null;
            }
            if (this.LocalCharacterRoot) {
                console.log("searching .................");
                console.log(value);
                var Node = this.LocalCharacterRoot.getFromNodeWithCharacterAndType(value, typeId, this.LocalCharacterRoot);
                return Node;
            }
            return this.LocalCharacterRoot;
        });
    }
}
LocalBinaryCharacterTree.LocalCharacterRoot = null;


/***/ }),

/***/ "./src/DataStructures/Local/LocalBinaryTree.ts":
/*!*****************************************************!*\
  !*** ./src/DataStructures/Local/LocalBinaryTree.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalBinaryTree: () => (/* binding */ LocalBinaryTree)
/* harmony export */ });
/* harmony import */ var _IdentifierFlags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IdentifierFlags */ "./src/DataStructures/IdentifierFlags.ts");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Node */ "./src/DataStructures/Node.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class LocalBinaryTree {
    static addNodeToTree(node) {
        if (this.root == null) {
            this.root = node;
            return this.root;
        }
        else {
            this.root = this.root.addNode(node, this.root, this.root.height);
        }
    }
    static addConceptToTree(concept) {
        var node = new _Node__WEBPACK_IMPORTED_MODULE_1__.Node(concept.id, concept, null, null);
        var characterNode = new _Node__WEBPACK_IMPORTED_MODULE_1__.Node(concept.characterValue, concept, null, null);
        this.addNodeToTree(node);
    }
    static waitForDataToLoad() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.checkFlag(resolve);
                setTimeout(() => {
                    reject("not");
                }, 25000);
            });
        });
    }
    static checkFlag(resolve) {
        if (_IdentifierFlags__WEBPACK_IMPORTED_MODULE_0__.IdentifierFlags.isLocalDataLoaded) {
            return resolve("done");
        }
        else {
            setTimeout(LocalBinaryTree.checkFlag, 1000, resolve);
        }
    }
    ;
    static getNodeFromTree(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var data = yield this.waitForDataToLoad();
            }
            catch (exception) {
                return null;
            }
            if (this.root) {
                var Node = this.root.getFromNode(id, this.root);
                return Node;
            }
            return this.root;
        });
    }
    static getCharacterAndTypeFromTree(value, typeId) {
        if (this.root) {
            var Node = this.root.getFromNodeWithCharacterAndType(value, typeId, this.root);
            return Node;
        }
        return this.root;
    }
}
LocalBinaryTree.root = null;


/***/ }),

/***/ "./src/DataStructures/Local/LocalBinaryTypeTree.ts":
/*!*********************************************************!*\
  !*** ./src/DataStructures/Local/LocalBinaryTypeTree.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalBinaryTypeTree: () => (/* binding */ LocalBinaryTypeTree)
/* harmony export */ });
/* harmony import */ var _IdentifierFlags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../IdentifierFlags */ "./src/DataStructures/IdentifierFlags.ts");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Node */ "./src/DataStructures/Node.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class LocalBinaryTypeTree {
    static addNodeToTree(node) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.LocalTypeRoot == null) {
                console.log("this is type root ", node);
                this.LocalTypeRoot = node;
                return this.LocalTypeRoot;
            }
            else {
                this.LocalTypeRoot = this.LocalTypeRoot.addTypeNode(node, this.LocalTypeRoot, this.LocalTypeRoot.height);
            }
            return this.LocalTypeRoot;
        });
    }
    static addConceptToTree(concept) {
        if (concept.typeId != 0) {
            var node = new _Node__WEBPACK_IMPORTED_MODULE_1__.Node(concept.typeId, concept, null, null);
            this.addNodeToTree(node);
        }
    }
    static getNodeFromTree(id) {
        if (this.LocalTypeRoot) {
            var Node = this.LocalTypeRoot.getFromNode(id, this.LocalTypeRoot);
            return Node;
        }
        return this.LocalTypeRoot;
    }
    static getTypeVariantsFromTree(typeId) {
        var Node = this.getNodeFromTree(typeId);
        var concepts = [];
        if (Node) {
            concepts.push(Node === null || Node === void 0 ? void 0 : Node.value);
            for (let i = 0; i < Node.variants.length; i++) {
                concepts.push(Node.variants[i].value);
            }
            return concepts;
        }
    }
    static waitForDataToLoad() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.checkFlag(resolve);
                setTimeout(() => {
                    reject("not");
                }, 25000);
            });
        });
    }
    static checkFlag(resolve) {
        if (_IdentifierFlags__WEBPACK_IMPORTED_MODULE_0__.IdentifierFlags.isLocalTypeLoaded) {
            return resolve("done");
        }
        else {
            setTimeout(LocalBinaryTypeTree.checkFlag, 1000, resolve);
        }
    }
    ;
    static getTypeVariantsFromTreeWithUserId(typeId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            var concepts = [];
            try {
                var data = yield this.waitForDataToLoad();
            }
            catch (exception) {
                return concepts;
            }
            var Node = this.getNodeFromTree(typeId);
            if (Node) {
                if (Node.value.userId == userId) {
                    concepts.push(Node === null || Node === void 0 ? void 0 : Node.value);
                }
                for (let i = 0; i < Node.variants.length; i++) {
                    if (Node.variants[i].value.userId == userId) {
                        concepts.push(Node.variants[i].value);
                    }
                }
            }
            return concepts;
        });
    }
}
LocalBinaryTypeTree.LocalTypeRoot = null;


/***/ }),

/***/ "./src/DataStructures/Local/LocalConceptData.ts":
/*!******************************************************!*\
  !*** ./src/DataStructures/Local/LocalConceptData.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalConceptsData: () => (/* binding */ LocalConceptsData)
/* harmony export */ });
/* harmony import */ var _Concept__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../Concept */ "./src/DataStructures/Concept.ts");
/* harmony import */ var _Database_indexdblocal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Database/indexdblocal */ "./src/Database/indexdblocal.ts");
/* harmony import */ var _LocalBinaryTree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LocalBinaryTree */ "./src/DataStructures/Local/LocalBinaryTree.ts");
/* harmony import */ var _LocalBinaryCharacterTree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LocalBinaryCharacterTree */ "./src/DataStructures/Local/LocalBinaryCharacterTree.ts");
/* harmony import */ var _LocalBinaryTypeTree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LocalBinaryTypeTree */ "./src/DataStructures/Local/LocalBinaryTypeTree.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





class LocalConceptsData {
    constructor() {
        this.name = "conceptsArray";
    }
    static CheckContains(concept) {
        var contains = false;
        for (var i = 0; i < this.localconceptsArray.length; i++) {
            if (this.localconceptsArray[i].id == concept.id) {
                contains = true;
            }
        }
        return contains;
    }
    static AddConcept(concept) {
        if (concept.id > 0) {
            (0,_Database_indexdblocal__WEBPACK_IMPORTED_MODULE_1__.storeToDatabase)("localconcept", concept);
            _LocalBinaryTree__WEBPACK_IMPORTED_MODULE_2__.LocalBinaryTree.addConceptToTree(concept);
            _LocalBinaryCharacterTree__WEBPACK_IMPORTED_MODULE_3__.LocalBinaryCharacterTree.addConceptToTree(concept);
            _LocalBinaryTypeTree__WEBPACK_IMPORTED_MODULE_4__.LocalBinaryTypeTree.addConceptToTree(concept);
            this.localconceptsArray.push(concept);
        }
    }
    static AddConceptTemporary(concept) {
        var contains = this.CheckContains(concept);
        this.localconceptsArray[concept.id] = concept;
        if (contains) {
            this.RemoveConcept(concept);
        }
        this.localconceptsArray.push(concept);
    }
    static RemoveConcept(concept) {
        for (var i = 0; i < this.localconceptsArray.length; i++) {
            if (this.localconceptsArray[i].id == concept.id) {
                this.localconceptsArray.splice(i, 1);
            }
        }
        //  removeFromDatabase("concept",concept.id);
    }
    static GetConcept(id) {
        return __awaiter(this, void 0, void 0, function* () {
            var myConcept = new _Concept__WEBPACK_IMPORTED_MODULE_0__.Concept(0, 0, 0, 0, 0, 0, 0, 0, "0", 0, 0, 0, 0, 0, 0, false);
            var node = yield _LocalBinaryTree__WEBPACK_IMPORTED_MODULE_2__.LocalBinaryTree.getNodeFromTree(id);
            if (node === null || node === void 0 ? void 0 : node.value) {
                var returnedConcept = node.value;
                if (returnedConcept) {
                    myConcept = returnedConcept;
                }
            }
            return myConcept;
        });
    }
    static GetConceptByCharacter(characterValue) {
        return __awaiter(this, void 0, void 0, function* () {
            var concept = new _Concept__WEBPACK_IMPORTED_MODULE_0__.Concept(0, 0, 0, 0, 0, 0, 0, 0, "0", 0, 0, 0, 0, 0, 0, false);
            //  for(var i=0; i<this.conceptsArray.length; i++){
            //      if(this.conceptsArray[i].characterValue == characterValue){
            //         concept = this.conceptsArray[i];
            //      }
            //  }
            var Node = _LocalBinaryCharacterTree__WEBPACK_IMPORTED_MODULE_3__.LocalBinaryCharacterTree.getNodeFromTree(characterValue);
            if (Node) {
                console.log("got the character");
                concept = Node.value;
            }
            return concept;
        });
    }
    static GetConceptByCharacterAndTypeLocal(character_value, typeId) {
        return __awaiter(this, void 0, void 0, function* () {
            var concept = new _Concept__WEBPACK_IMPORTED_MODULE_0__.Concept(0, 0, 0, 0, 0, 0, 0, 0, "0", 0, 0, 0, 0, 0, 0, false);
            // let conceptList:Concept[] = await this.GetConceptsByTypeId(typeId);
            // for(var i=0;i<conceptList.length; i++){
            //     if(character_value == conceptList[i].characterValue){
            //         concept = conceptList[i];
            //     }
            // }
            var Node = yield _LocalBinaryCharacterTree__WEBPACK_IMPORTED_MODULE_3__.LocalBinaryCharacterTree.getCharacterAndTypeFromTree(character_value, typeId);
            if (Node) {
                concept = Node.value;
                console.log("found the output");
                console.log(concept);
            }
            return concept;
        });
    }
    static GetConceptsByTypeId(typeId) {
        var myConcept;
        let ConceptList = [];
        myConcept = null;
        for (var i = 0; i < this.localconceptsArray.length; i++) {
            if (this.localconceptsArray[i].typeId == typeId) {
                ConceptList.push(this.localconceptsArray[i]);
            }
        }
        return ConceptList;
    }
    static GetConceptsByTypeIdAndUser(typeId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            var myConcept;
            let ConceptList = [];
            // myConcept = null;
            //  for(var i=0; i<this.conceptsArray.length; i++){
            //      if(this.conceptsArray[i].typeId == typeId && this.conceptsArray[i].userId == userId){
            //          ConceptList.push(this.conceptsArray[i]);
            //      }
            //  }
            ConceptList = yield _LocalBinaryTypeTree__WEBPACK_IMPORTED_MODULE_4__.LocalBinaryTypeTree.getTypeVariantsFromTreeWithUserId(typeId, userId);
            return ConceptList;
        });
    }
    getName() {
        return this.name;
    }
}
LocalConceptsData.localconceptsArray = [];


/***/ }),

/***/ "./src/DataStructures/Local/LocalConnectionData.ts":
/*!*********************************************************!*\
  !*** ./src/DataStructures/Local/LocalConnectionData.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalConnectionData: () => (/* binding */ LocalConnectionData)
/* harmony export */ });
/* harmony import */ var _Database_indexdblocal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Database/indexdblocal */ "./src/Database/indexdblocal.ts");
/* harmony import */ var _IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../IdentifierFlags */ "./src/DataStructures/IdentifierFlags.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class LocalConnectionData {
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
        if (contains) {
            this.RemoveConnection(connection);
        }
        if (connection.id != 0 || connection.isTemp) {
            (0,_Database_indexdblocal__WEBPACK_IMPORTED_MODULE_0__.storeToDatabase)("localconnection", connection);
        }
        this.connectionArray.push(connection);
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
        if (connection.id != 0) {
            //  removeFromDatabase("connection",connection.id);
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
    static waitForDataToLoad() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.checkFlag(resolve);
                setTimeout(() => {
                    reject("not");
                }, 25000);
            });
        });
    }
    static checkFlag(resolve) {
        if (_IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__.IdentifierFlags.isLocalConnectionLoaded) {
            return resolve("done");
        }
        else {
            setTimeout(LocalConnectionData.checkFlag, 1000, resolve);
        }
    }
    ;
    static GetConnectionsOfCompositionLocal(id) {
        return __awaiter(this, void 0, void 0, function* () {
            var connectionList = [];
            try {
                var data = yield this.waitForDataToLoad();
                for (var i = 0; i < this.connectionArray.length; i++) {
                    if (this.connectionArray[i].typeId == id) {
                        connectionList.push(this.connectionArray[i]);
                    }
                }
                return connectionList;
            }
            catch (exception) {
                return connectionList;
            }
        });
    }
    getName() {
        return this.name;
    }
}
LocalConnectionData.connectionArray = [];
LocalConnectionData.connectionDictionary = [];


/***/ }),

/***/ "./src/DataStructures/Node.ts":
/*!************************************!*\
  !*** ./src/DataStructures/Node.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Node: () => (/* binding */ Node)
/* harmony export */ });
class Node {
    constructor(key, value, leftNode, rightNode) {
        this.variants = [];
        this.height = 1;
        this.key = key;
        this.value = value;
        this.leftNode = leftNode;
        this.rightNode = rightNode;
        this.currentNode = null;
    }
    addCurrentNode(passedNode, node) {
        if (node == null) {
            node = passedNode;
            return node;
        }
        if (passedNode.value.typeId != node.value.typeId) {
            node.currentNode = this.addCurrentNode(passedNode, node.currentNode);
        }
        return node;
    }
    addCurrentNodeType(passedNode, node) {
        if (node == null) {
            node = passedNode;
            return node;
        }
        var contains = false;
        for (let i = 0; i < node.variants.length; i++) {
            if (node.variants[i].value.id == passedNode.value.id) {
                contains = true;
            }
        }
        if (!contains) {
            node.variants.push(passedNode);
        }
        //node.currentNode = this.addCurrentNode(passedNode, node.currentNode);
        return node;
    }
    addNode(passedNode, node, height) {
        if (node == null) {
            node = passedNode;
            return node;
        }
        var LeftNode = node.leftNode;
        var RightNode = node.rightNode;
        if (node.key > passedNode.key) {
            node.leftNode = this.addNode(passedNode, LeftNode, height);
        }
        else if (node.key < passedNode.key) {
            node.rightNode = this.addNode(passedNode, RightNode, height);
        }
        // else if (node.key == passedNode.key && node.key != ""){
        //     node.currentNode = passedNode;
        // }
        else {
            return node;
        }
        node.height = 1 + Math.max(this.getHeight(node.leftNode), this.getHeight(node.rightNode));
        let balancingFactor = this.getBalanceFactor(node);
        if (balancingFactor > 1) {
            if (node.leftNode) {
                if (passedNode.key < node.leftNode.key) {
                    return this.rightRotate(node);
                }
                else if (passedNode.key > node.leftNode.key) {
                    node.leftNode = this.leftRotate(node.leftNode);
                    return this.rightRotate(node);
                }
            }
        }
        if (balancingFactor < -1) {
            if (node.rightNode) {
                if (passedNode.key > node.rightNode.key) {
                    return this.leftRotate(node);
                }
                else if (passedNode.key < node.rightNode.key) {
                    node.rightNode = this.rightRotate(node.rightNode);
                    return this.leftRotate(node);
                }
            }
        }
        return node;
    }
    addCharacterNode(passedNode, node, height) {
        var debugFlag = false;
        if (passedNode.value.characterValue != "") {
            // if(passedNode.value.characterValue == "Default"){
            //     console.log("default here");
            //     debugFlag = true;
            // }
            if (node == null) {
                if (debugFlag) {
                    console.log("equal here", node);
                }
                node = passedNode;
                return node;
            }
            // if (node.key == passedNode.key && node.key != "" ){
            //     if(passedNode.value.characterValue == "Default"){
            //         console.log("equal");
            //     }
            //     node.currentNode = passedNode;
            //     return node;
            // }
            var LeftNode = node.leftNode;
            var RightNode = node.rightNode;
            if (node.key > passedNode.key) {
                if (debugFlag) {
                    console.log("left  here", node);
                }
                node.leftNode = this.addCharacterNode(passedNode, LeftNode, height);
            }
            else if (node.key < passedNode.key) {
                if (debugFlag) {
                    console.log("right here", node, RightNode);
                }
                node.rightNode = this.addCharacterNode(passedNode, RightNode, height);
            }
            // else if (node.key == passedNode.key && node.key != ""){
            //     node.currentNode = passedNode;
            // }
            else {
                if (debugFlag) {
                    console.log("else here", node, passedNode);
                }
                if (node.key == passedNode.key && node.key != "") {
                    node.currentNode = this.addCurrentNode(passedNode, node.currentNode);
                }
                return node;
            }
            node.height = 1 + Math.max(this.getHeight(node.leftNode), this.getHeight(node.rightNode));
            if (debugFlag) {
                console.log("height here", node.height);
            }
            let balancingFactor = this.getBalanceFactor(node);
            if (debugFlag) {
                console.log("balancingFactor here", balancingFactor);
            }
            if (balancingFactor > 1) {
                if (node.leftNode) {
                    if (passedNode.key < node.leftNode.key) {
                        var returner = this.rightRotate(node);
                        if (debugFlag) {
                            console.log("returning here 1 ", returner);
                        }
                        return returner;
                    }
                    else if (passedNode.key > node.leftNode.key) {
                        node.leftNode = this.leftRotate(node.leftNode);
                        var returner = this.rightRotate(node);
                        if (debugFlag) {
                            console.log("returning here 2 ", returner);
                        }
                        return returner;
                    }
                }
            }
            if (balancingFactor < -1) {
                if (node.rightNode) {
                    if (passedNode.key > node.rightNode.key) {
                        var returner = this.leftRotate(node);
                        if (debugFlag) {
                            console.log("returning here 3 ", returner);
                        }
                        return returner;
                    }
                    else if (passedNode.key < node.rightNode.key) {
                        node.rightNode = this.rightRotate(node.rightNode);
                        var returner = this.leftRotate(node);
                        if (debugFlag) {
                            console.log("returning here4 ", returner, node);
                        }
                        return returner;
                    }
                }
            }
        }
        else {
            if (debugFlag) {
                console.log("what here", node);
            }
        }
        if (debugFlag) {
            console.log("returning here 6", node);
        }
        return node;
    }
    addTypeNode(passedNode, node, height) {
        var debugFlag = false;
        if (passedNode.value.typeId != 0) {
            // if(passedNode.value.characterValue == "Default"){
            //     console.log("default here");
            //     debugFlag = true;
            // }
            if (node == null) {
                if (debugFlag) {
                    console.log("equal here", node);
                }
                node = passedNode;
                return node;
            }
            var LeftNode = node.leftNode;
            var RightNode = node.rightNode;
            if (node.key > passedNode.key) {
                if (debugFlag) {
                    console.log("left  here", node);
                }
                node.leftNode = this.addTypeNode(passedNode, LeftNode, height);
            }
            else if (node.key < passedNode.key) {
                if (debugFlag) {
                    console.log("right here", node, RightNode);
                }
                node.rightNode = this.addTypeNode(passedNode, RightNode, height);
            }
            else {
                if (debugFlag) {
                    console.log("else here", node, passedNode);
                }
                if (node.key == passedNode.key && node.key != 0) {
                    node.addCurrentNodeType(passedNode, node);
                }
                return node;
            }
            node.height = 1 + Math.max(this.getHeight(node.leftNode), this.getHeight(node.rightNode));
            if (debugFlag) {
                console.log("height here", node.height);
            }
            let balancingFactor = this.getBalanceFactor(node);
            if (debugFlag) {
                console.log("balancingFactor here", balancingFactor);
            }
            if (balancingFactor > 1) {
                if (node.leftNode) {
                    if (passedNode.key < node.leftNode.key) {
                        var returner = this.rightRotate(node);
                        if (debugFlag) {
                            console.log("returning here 1 ", returner);
                        }
                        return returner;
                    }
                    else if (passedNode.key > node.leftNode.key) {
                        node.leftNode = this.leftRotate(node.leftNode);
                        var returner = this.rightRotate(node);
                        if (debugFlag) {
                            console.log("returning here 2 ", returner);
                        }
                        return returner;
                    }
                }
            }
            if (balancingFactor < -1) {
                if (node.rightNode) {
                    if (passedNode.key > node.rightNode.key) {
                        var returner = this.leftRotate(node);
                        if (debugFlag) {
                            console.log("returning here 3 ", returner);
                        }
                        return returner;
                    }
                    else if (passedNode.key < node.rightNode.key) {
                        node.rightNode = this.rightRotate(node.rightNode);
                        var returner = this.leftRotate(node);
                        if (debugFlag) {
                            console.log("returning here4 ", returner, node);
                        }
                        return returner;
                    }
                }
            }
        }
        else {
            if (debugFlag) {
                console.log("what here", node);
            }
        }
        if (debugFlag) {
            console.log("returning here 6", node);
        }
        return node;
    }
    rightRotate(y) {
        if (y) {
            let x = y.leftNode;
            if (x) {
                let T2 = x.rightNode;
                y.leftNode = T2;
                x.rightNode = y;
                y.height = Math.max(this.getHeight(y.leftNode), this.getHeight(y.rightNode)) + 1;
                x.height = Math.max(this.getHeight(x.leftNode), this.getHeight(x.rightNode)) + 1;
                return x;
            }
            // return x;
        }
        return y;
    }
    leftRotate(x) {
        if (x) {
            let y = x.rightNode;
            if (y) {
                let T2 = y.leftNode;
                y.leftNode = x;
                x.rightNode = T2;
                x.height = Math.max(this.getHeight(x.leftNode), this.getHeight(x.rightNode) + 1);
                y.height = Math.max(this.getHeight(y.leftNode), this.getHeight(x.rightNode) + 1);
                return y;
            }
            //return y;
        }
        return x;
    }
    getHeight(node) {
        if (node) {
            return node.height;
        }
        return 0;
    }
    getBalanceFactor(N) {
        if (N == null) {
            return 0;
        }
        return this.getHeight(N.leftNode) - this.getHeight(N.rightNode);
    }
    getFromNode(id, node) {
        if (node) {
            if (id == node.key) {
                return node;
            }
            else if (id < node.key) {
                return this.getFromNode(id, node.leftNode);
            }
            else if (id > node.key) {
                return this.getFromNode(id, node.rightNode);
            }
            return node;
        }
        return node;
    }
    getCharacterFromNode(value, node) {
        if (node) {
            if (value == node.key) {
                return node;
            }
            else if (value < node.key) {
                return this.getCharacterFromNode(value, node.leftNode);
            }
            else if (value > node.key) {
                return this.getCharacterFromNode(value, node.rightNode);
            }
            return node;
        }
        return node;
    }
    getFromNodeWithCharacterAndType(value, typeId, node) {
        value = `${value}`;
        if (node) {
            if (value == node.key) {
                if (value == node.value.characterValue && typeId == node.value.typeId) {
                    return node;
                }
                else {
                    return this.getFromNodeWithCharacterAndType(value, typeId, node.currentNode);
                }
            }
            else if (value < node.key) {
                return this.getFromNodeWithCharacterAndType(value, typeId, node.leftNode);
            }
            else if (value > node.key) {
                return this.getFromNodeWithCharacterAndType(value, typeId, node.rightNode);
            }
            return null;
        }
        return node;
    }
}


/***/ }),

/***/ "./src/DataStructures/ReservedIds.ts":
/*!*******************************************!*\
  !*** ./src/DataStructures/ReservedIds.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReservedIds: () => (/* binding */ ReservedIds)
/* harmony export */ });
/* harmony import */ var _Api_GetReservedIds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Api/GetReservedIds */ "./src/Api/GetReservedIds.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class ReservedIds {
    static getId() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.ids.length < 5) {
                var ids = yield (0,_Api_GetReservedIds__WEBPACK_IMPORTED_MODULE_0__.GetReservedIds)();
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
ReservedIds.ids = [];


/***/ }),

/***/ "./src/DataStructures/Returner.ts":
/*!****************************************!*\
  !*** ./src/DataStructures/Returner.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Returner: () => (/* binding */ Returner)
/* harmony export */ });
class Returner {
    constructor(id, userId, referentId, isNew) {
        this.id = id;
        this.userId = userId;
        this.referentId = referentId;
        this.isNew = isNew;
    }
}


/***/ }),

/***/ "./src/DataStructures/SettingData.ts":
/*!*******************************************!*\
  !*** ./src/DataStructures/SettingData.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingData: () => (/* binding */ SettingData)
/* harmony export */ });
class SettingData {
    constructor(isOnlineSync) {
        this.id = 1;
        this.isOnlineSync = false;
        this.isOnlineSync = isOnlineSync;
    }
}


/***/ }),

/***/ "./src/DataStructures/Settings.ts":
/*!****************************************!*\
  !*** ./src/DataStructures/Settings.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Settings: () => (/* binding */ Settings)
/* harmony export */ });
class Settings {
}
Settings.isUpdated = false;
Settings.isOnlineSync = false;


/***/ }),

/***/ "./src/DataStructures/SyncData.ts":
/*!****************************************!*\
  !*** ./src/DataStructures/SyncData.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SyncData: () => (/* binding */ SyncData)
/* harmony export */ });
/* harmony import */ var _Database_indexeddb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../Database/indexeddb */ "./src/Database/indexeddb.ts");
/* harmony import */ var _Api_Create_CreateTheConceptApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Api/Create/CreateTheConceptApi */ "./src/Api/Create/CreateTheConceptApi.ts");
/* harmony import */ var _Api_Create_CreateTheConnectionApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Api/Create/CreateTheConnectionApi */ "./src/Api/Create/CreateTheConnectionApi.ts");
/* harmony import */ var _ConceptData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ConceptData */ "./src/DataStructures/ConceptData.ts");
/* harmony import */ var _ConnectionData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ConnectionData */ "./src/DataStructures/ConnectionData.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





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
    static SyncDataDelete(id) {
        for (var i = 0; i < this.conceptsSyncArray.length; i++) {
            if (id == this.conceptsSyncArray[i].id) {
                this.conceptsSyncArray.splice(i, 1);
            }
        }
        for (var i = 0; i < this.connectionSyncArray.length; i++) {
            if (this.connectionSyncArray[i].ofTheConceptId == id || this.connectionSyncArray[i].toTheConceptId == id || this.connectionSyncArray[i].typeId == id) {
                this.connectionSyncArray.splice(i, 1);
            }
        }
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
        // ConceptsData.AddConceptTemporary(concept);
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
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < this.conceptsSyncArray.length; i++) {
                _ConceptData__WEBPACK_IMPORTED_MODULE_3__.ConceptsData.AddConcept(this.conceptsSyncArray[i]);
            }
            for (let i = 0; i < this.connectionSyncArray.length; i++) {
                _ConnectionData__WEBPACK_IMPORTED_MODULE_4__.ConnectionData.AddConnection(this.connectionSyncArray[i]);
            }
            if (this.conceptsSyncArray.length > 0) {
                yield (0,_Api_Create_CreateTheConceptApi__WEBPACK_IMPORTED_MODULE_1__.CreateTheConceptApi)(this.conceptsSyncArray);
                this.conceptsSyncArray = [];
            }
            if (this.connectionSyncArray.length > 0) {
                yield (0,_Api_Create_CreateTheConnectionApi__WEBPACK_IMPORTED_MODULE_2__.CreateTheConnectionApi)(this.connectionSyncArray);
                this.connectionSyncArray = [];
            }
            return "done";
        });
    }
    static syncDataLocalDb() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.conceptsSyncArray.length > 0) {
                for (let i = 0; i < this.conceptsSyncArray.length; i++) {
                    (0,_Database_indexeddb__WEBPACK_IMPORTED_MODULE_0__.storeToDatabase)("localconcept", this.conceptsSyncArray[i]);
                }
                this.conceptsSyncArray = [];
            }
            if (this.connectionSyncArray.length > 0) {
                for (let i = 0; i < this.connectionSyncArray.length; i++) {
                    (0,_Database_indexeddb__WEBPACK_IMPORTED_MODULE_0__.storeToDatabase)("localconnection", this.connectionSyncArray[i]);
                }
                this.connectionSyncArray = [];
                console.log(this.connectionSyncArray);
            }
            return "done";
        });
    }
}
SyncData.conceptsSyncArray = [];
SyncData.connectionSyncArray = [];


/***/ }),

/***/ "./src/DataStructures/TheCharacter.ts":
/*!********************************************!*\
  !*** ./src/DataStructures/TheCharacter.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TheCharacter: () => (/* binding */ TheCharacter)
/* harmony export */ });
class TheCharacter {
    constructor(userId, data, securityId, securityUserId, accessId, accessUserId, sessionId, sessionUserId, entryTimestamp, isNew) {
        this.id = 0;
        this.isNew = false;
        this.userId = userId;
        this.data = `${data}`;
        this.securityId = securityId;
        this.securityUserId = securityUserId;
        this.accessId = accessId;
        this.accessUserId = accessUserId;
        this.sessionId = sessionId;
        this.sessionUserId = sessionUserId;
        this.isNew = isNew;
    }
}


/***/ }),

/***/ "./src/DataStructures/TheTexts.ts":
/*!****************************************!*\
  !*** ./src/DataStructures/TheTexts.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TheTexts: () => (/* binding */ TheTexts)
/* harmony export */ });
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


/***/ }),

/***/ "./src/Database/indexdblocal.ts":
/*!**************************************!*\
  !*** ./src/Database/indexdblocal.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAllFromLocalDb: () => (/* binding */ getAllFromLocalDb),
/* harmony export */   openDatabase: () => (/* binding */ openDatabase),
/* harmony export */   removeFromDatabase: () => (/* binding */ removeFromDatabase),
/* harmony export */   storeToDatabase: () => (/* binding */ storeToDatabase)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var version = 4;
function openDatabase(databaseName) {
    let db;
    const request = indexedDB.open("FreeSchemaLocal", version);
    request.onerror = (event) => {
        console.error("Why didn't you allow my web app to use IndexedDB?!");
    };
    request.onsuccess = function (event) {
        var target = event.target;
        var db = target.result;
        let transaction = db.transaction(databaseName, "readwrite");
    };
    request.onupgradeneeded = (event) => {
        var target = event.target;
        var db = target.result;
        var conceptDb = "localconcept";
        var connectionDb = "localconnection";
        if (!db.objectStoreNames.contains(conceptDb)) { // if there's no database name
            let objectStore = db.createObjectStore(conceptDb, { keyPath: 'id' }); // create it
            objectStore.transaction.oncomplete = (event) => {
            };
        }
        if (!db.objectStoreNames.contains(connectionDb)) { // if there's no database name
            let objectStore = db.createObjectStore(connectionDb, { keyPath: 'id' }); // create it
            objectStore.transaction.oncomplete = (event) => {
            };
        }
    };
}
function storeToDatabase(databaseName, object) {
    openDatabase(databaseName);
    let db;
    const request = indexedDB.open("FreeSchemaLocal", version);
    request.onerror = (event) => {
        console.error("Why didn't you allow my web app to use IndexedDB?!");
    };
    request.onsuccess = function (event) {
        var target = event.target;
        var db = target.result;
        let transaction = db.transaction(databaseName, "readwrite");
        let objStore = transaction.objectStore(databaseName);
        objStore.add(object);
    };
}
function getAllFromLocalDb(databaseName) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(function (resolve, reject) {
            openDatabase(databaseName);
            const request = indexedDB.open("FreeSchemaLocal", version);
            var concept;
            var ConceptList = [];
            request.onsuccess = function (event) {
                var target = event.target;
                var db = target.result;
                let transaction = db.transaction(databaseName, "readwrite");
                let objectStore = transaction.objectStore(databaseName);
                var allobjects = objectStore.getAll();
                allobjects.onsuccess = () => {
                    const students = allobjects.result;
                    for (var i = 0; i < students.length; i++) {
                        ConceptList.push(students[i]);
                    }
                    resolve(ConceptList);
                };
                //   // Database opened successfully
                // };
            };
            request.onerror = function (event) {
                reject(event);
            };
        });
        // return ConceptList;
    });
}
function removeFromDatabase(databaseName, id) {
    openDatabase(databaseName);
    const request = indexedDB.open("FreeSchemaLocal", version);
    request.onsuccess = function (event) {
        var target = event.target;
        var db = target.result;
        let transaction = db.transaction(databaseName, "readwrite");
        let objectStore = transaction.objectStore(databaseName);
        let getRequest = objectStore.delete(id);
        getRequest.onsuccess = function (event) {
            let target = event.target;
            // concept =  event.target.result;
            // Access the retrieved data
        };
    };
}


/***/ }),

/***/ "./src/Database/indexeddb.ts":
/*!***********************************!*\
  !*** ./src/Database/indexeddb.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AiUpdateFlag: () => (/* binding */ AiUpdateFlag),
/* harmony export */   GetStatsFromDatabase: () => (/* binding */ GetStatsFromDatabase),
/* harmony export */   getFromDatabase: () => (/* binding */ getFromDatabase),
/* harmony export */   getFromDatabaseWithType: () => (/* binding */ getFromDatabaseWithType),
/* harmony export */   getFromDatabaseWithTypeOld: () => (/* binding */ getFromDatabaseWithTypeOld),
/* harmony export */   openDatabase: () => (/* binding */ openDatabase),
/* harmony export */   removeFromDatabase: () => (/* binding */ removeFromDatabase),
/* harmony export */   storeToDatabase: () => (/* binding */ storeToDatabase)
/* harmony export */ });
/* harmony import */ var _DataStructures_SettingData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DataStructures/SettingData */ "./src/DataStructures/SettingData.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

var version = 4;
function openDatabase(databaseName) {
    let db;
    const request = indexedDB.open("FreeSchema", version);
    request.onerror = (event) => {
        console.error("Why didn't you allow my web app to use IndexedDB?!");
    };
    request.onsuccess = function (event) {
        var target = event.target;
        var db = target.result;
        let transaction = db.transaction(databaseName, "readwrite");
    };
    request.onupgradeneeded = (event) => {
        var target = event.target;
        var db = target.result;
        var conceptDb = "concept";
        var connectionDb = "connection";
        var settings = "settings";
        if (!db.objectStoreNames.contains(conceptDb)) { // if there's no database name
            let objectStore = db.createObjectStore(conceptDb, { keyPath: 'id' }); // create it
            objectStore.transaction.oncomplete = (event) => {
                // Store values in the newly created objectStore.
                // const myObjectStore = db
                // .transaction(databaseName, "readwrite")
                // .objectStore(databaseName);
                // myObjectStore.add(object);
            };
        }
        if (!db.objectStoreNames.contains(connectionDb)) { // if there's no database name
            let objectStore = db.createObjectStore(connectionDb, { keyPath: 'id' }); // create it
            objectStore.transaction.oncomplete = (event) => {
            };
        }
        if (!db.objectStoreNames.contains(settings)) {
            let objectStore = db.createObjectStore(settings, { keyPath: 'id' }); // create it
            objectStore.transaction.oncomplete = (event) => {
            };
        }
    };
}
function storeToDatabase(databaseName, object) {
    openDatabase(databaseName);
    let db;
    const request = indexedDB.open("FreeSchema", version);
    request.onerror = (event) => {
        console.error("Why didn't you allow my web app to use IndexedDB?!");
    };
    request.onsuccess = function (event) {
        if (object.id != 0) {
            var target = event.target;
            var db = target.result;
            let transaction = db.transaction(databaseName, "readwrite");
            let objStore = transaction.objectStore(databaseName);
            objStore.add(object);
        }
    };
    // request.onupgradeneeded = (event) => {
    //     var target = event.target as IDBOpenDBRequest;
    //     var db = target.result as IDBDatabase;
    //     var conceptDb = "concept";
    //     var connectionDb = "connection";
    //     var settings = "settings"
    //     if (!db.objectStoreNames.contains(conceptDb)) { // if there's no database name
    //       let  objectStore = db.createObjectStore(conceptDb, {keyPath: 'id'}); // create it
    //       objectStore.transaction.oncomplete = (event: Event) => {
    //             // Store values in the newly created objectStore.
    //             // const myObjectStore = db
    //             // .transaction(databaseName, "readwrite")
    //             // .objectStore(databaseName);
    //             // myObjectStore.add(object);
    //       }
    //     }
    //     if (!db.objectStoreNames.contains(connectionDb)) { // if there's no database name
    //       let  objectStore = db.createObjectStore(connectionDb, {keyPath: 'id'}); // create it
    //       objectStore.transaction.oncomplete = (event: Event) => {
    //       }
    //     }
    //     if(!db.objectStoreNames.contains(settings)){
    //       let  objectStore = db.createObjectStore(settings, {keyPath: 'id'}); // create it
    //       objectStore.transaction.oncomplete = (event: Event) => {
    //       }
    //     }
    // }
}
function getFromDatabase(databaseName, id) {
    openDatabase(databaseName);
    const request = indexedDB.open("FreeSchema", version);
    var concept;
    request.onsuccess = function (event) {
        var target = event.target;
        var db = target.result;
        let transaction = db.transaction(databaseName, "readwrite");
        let objectStore = transaction.objectStore(databaseName);
        let getRequest = objectStore.get(id);
        getRequest.onsuccess = function (event) {
            let target = event.target;
            concept = target.result;
            return concept;
            // concept =  event.target.result;
            // Access the retrieved data
        };
        return concept;
        //   // Database opened successfully
        // };
    };
}
function GetStatsFromDatabase() {
    return new Promise(function (resolve, reject) {
        var databaseName = "settings";
        openDatabase(databaseName);
        const request = indexedDB.open("FreeSchema", version);
        request.onsuccess = function (event) {
            var target = event.target;
            var db = target.result;
            let transaction = db.transaction(databaseName, "readwrite");
            let objectStore = transaction.objectStore(databaseName);
            var allobjects = objectStore.getAll();
            allobjects.onsuccess = () => {
                var settingsData = new _DataStructures_SettingData__WEBPACK_IMPORTED_MODULE_0__.SettingData(false);
                var settingsArray = allobjects.result;
                for (let i = 0; i < settingsArray.length; i++) {
                    settingsData = settingsArray[i];
                    settingsData = settingsData;
                }
                resolve(settingsData);
            };
        };
        request.onerror = function (event) {
            reject(event);
        };
    });
}
function AiUpdateFlag(object) {
    var databaseName = "settings";
    openDatabase(databaseName);
    const request = indexedDB.open("FreeSchema", version);
    request.onsuccess = function (event) {
        var target = event.target;
        var db = target.result;
        let transaction = db.transaction(databaseName, "readwrite");
        let objStore = transaction.objectStore(databaseName);
        console.log(object);
        objStore.put(object);
    };
}
function getFromDatabaseWithType(databaseName, type, id) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(function (resolve, reject) {
            openDatabase(databaseName);
            const request = indexedDB.open("FreeSchema", version);
            var concept;
            var ConceptList = [];
            request.onsuccess = function (event) {
                var target = event.target;
                var db = target.result;
                let transaction = db.transaction(databaseName, "readwrite");
                let objectStore = transaction.objectStore(databaseName);
                const getCursorRequest = objectStore.openCursor();
                getCursorRequest.onsuccess = e => {
                    // Cursor logic here
                    let target = e.target;
                    let cursor = target.result;
                    if (cursor) {
                        if (cursor.value[type] == id) {
                            concept = cursor.value;
                            ConceptList.push(concept);
                        }
                        cursor.continue();
                    }
                };
                resolve(ConceptList);
                //   // Database opened successfully
                // };
            };
            request.onerror = function (event) {
                reject(event);
            };
        });
        // return ConceptList;
    });
}
function getFromDatabaseWithTypeOld(databaseName) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(function (resolve, reject) {
            openDatabase(databaseName);
            const request = indexedDB.open("FreeSchema", version);
            var concept;
            var ConceptList = [];
            request.onsuccess = function (event) {
                var target = event.target;
                var db = target.result;
                let transaction = db.transaction(databaseName, "readwrite");
                let objectStore = transaction.objectStore(databaseName);
                var allobjects = objectStore.getAll();
                allobjects.onsuccess = () => {
                    const students = allobjects.result;
                    for (var i = 0; i < students.length; i++) {
                        ConceptList.push(students[i]);
                    }
                    resolve(ConceptList);
                };
                //   // Database opened successfully
                // };
            };
            request.onerror = function (event) {
                reject(event);
            };
        });
        // return ConceptList;
    });
}
//   export async function getFromDatabaseWithCharacterOld(databaseName:string, type:string, characterValue:string){
//     return new Promise(function(resolve, reject){
//     openDatabase(databaseName);
//     const request = indexedDB.open("FreeSchema",version);
//     var concept: Concept|null;
//     request.onsuccess = function(event) {
//         var target = event.target as IDBOpenDBRequest;
//         var db = target.result as IDBDatabase;
//       let transaction = db.transaction(databaseName, "readwrite") as IDBTransaction;
//       let objectStore =transaction.objectStore(databaseName) as IDBObjectStore;
//       var allobjects = objectStore.getAll();
//       allobjects.onsuccess = ()=> {
//         const students = allobjects.result;
//         for(var i=0; i<students.length; i++){
//           if(students[i].character_value == characterValue){
//             concept = students[i];
//           }
//         }
//         console.log("resolving");
//         resolve(concept); 
//     }
//     //   // Database opened successfully
//     // };
//     }
//     request.onerror =function(event){
//       reject(event);
//     }
// });
//    // return ConceptList;
//   }
function removeFromDatabase(databaseName, id) {
    openDatabase(databaseName);
    const request = indexedDB.open("FreeSchema", version);
    request.onsuccess = function (event) {
        var target = event.target;
        var db = target.result;
        let transaction = db.transaction(databaseName, "readwrite");
        let objectStore = transaction.objectStore(databaseName);
        let getRequest = objectStore.delete(id);
        getRequest.onsuccess = function (event) {
            let target = event.target;
            // concept =  event.target.result;
            // Access the retrieved data
        };
    };
}


/***/ }),

/***/ "./src/Services/CreateBinaryTreeFromData.ts":
/*!**************************************************!*\
  !*** ./src/Services/CreateBinaryTreeFromData.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateBinaryTreeFromData)
/* harmony export */ });
/* harmony import */ var _DataStructures_BinaryTree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DataStructures/BinaryTree */ "./src/DataStructures/BinaryTree.ts");
/* harmony import */ var _DataStructures_Node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataStructures/Node */ "./src/DataStructures/Node.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app */ "./src/app.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function CreateBinaryTreeFromData() {
    return __awaiter(this, void 0, void 0, function* () {
        var startTime = new Date().getTime();
        var conceptList = yield (0,_app__WEBPACK_IMPORTED_MODULE_2__.getFromDatabaseWithTypeOld)("concept");
        if (Array.isArray(conceptList)) {
            for (var i = 0; i < conceptList.length; i++) {
                let concept = conceptList[i];
                let node = new _DataStructures_Node__WEBPACK_IMPORTED_MODULE_1__.Node(concept.id, concept, null, null);
                _DataStructures_BinaryTree__WEBPACK_IMPORTED_MODULE_0__.BinaryTree.addNodeToTree(node);
            }
        }
        var endTime = new Date().getTime();
        var time = endTime - startTime;
    });
}


/***/ }),

/***/ "./src/Services/CreateCharacterBinaryTreeFromData.ts":
/*!***********************************************************!*\
  !*** ./src/Services/CreateCharacterBinaryTreeFromData.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateCharacterBinaryTreeFromData: () => (/* binding */ CreateCharacterBinaryTreeFromData)
/* harmony export */ });
/* harmony import */ var _DataStructures_BinaryCharacterTree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DataStructures/BinaryCharacterTree */ "./src/DataStructures/BinaryCharacterTree.ts");
/* harmony import */ var _DataStructures_Node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataStructures/Node */ "./src/DataStructures/Node.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app */ "./src/app.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function CreateCharacterBinaryTreeFromData() {
    return __awaiter(this, void 0, void 0, function* () {
        var tree = new _DataStructures_BinaryCharacterTree__WEBPACK_IMPORTED_MODULE_0__.BinaryCharacterTree();
        var startTime = new Date().getTime();
        var conceptList = yield (0,_app__WEBPACK_IMPORTED_MODULE_2__.getFromDatabaseWithTypeOld)("concept");
        if (Array.isArray(conceptList)) {
            for (var i = 0; i < conceptList.length; i++) {
                let concept = conceptList[i];
                let node = new _DataStructures_Node__WEBPACK_IMPORTED_MODULE_1__.Node(concept.characterValue, concept, null, null);
                _DataStructures_BinaryCharacterTree__WEBPACK_IMPORTED_MODULE_0__.BinaryCharacterTree.addNodeToTree(node);
            }
        }
        console.log("what is this");
        console.log(_DataStructures_BinaryCharacterTree__WEBPACK_IMPORTED_MODULE_0__.BinaryCharacterTree.characterRoot);
        var endTime = new Date().getTime();
        var time = endTime - startTime;
    });
}


/***/ }),

/***/ "./src/Services/CreateConnectionBetweenTwoConcepts.ts":
/*!************************************************************!*\
  !*** ./src/Services/CreateConnectionBetweenTwoConcepts.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateConnectionBetweenTwoConcepts: () => (/* binding */ CreateConnectionBetweenTwoConcepts)
/* harmony export */ });
/* harmony import */ var _DataStructures_Connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DataStructures/Connection */ "./src/DataStructures/Connection.ts");
/* harmony import */ var _DataStructures_SyncData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataStructures/SyncData */ "./src/DataStructures/SyncData.ts");
/* harmony import */ var _MakeTheInstanceConcept__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MakeTheInstanceConcept */ "./src/Services/MakeTheInstanceConcept.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



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
            var connectionConceptReverse = yield (0,_MakeTheInstanceConcept__WEBPACK_IMPORTED_MODULE_2__["default"])("connection", backwardLinker, false, 999, 999, 999);
            var newConnection = new _DataStructures_Connection__WEBPACK_IMPORTED_MODULE_0__.Connection(0, concept2Data.id, concept1Data.id, concept2Data.userId, concept1Data.userId, concept2Data.userId, connectionConceptReverse.id, connectionConceptReverse.userId, 1000, userId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId);
            _DataStructures_SyncData__WEBPACK_IMPORTED_MODULE_1__.SyncData.AddConnection(newConnection);
        }
        let prefix = ((_b = concept1Data.type) === null || _b === void 0 ? void 0 : _b.characterValue) + "_s";
        let linkerAdd = linker + "_s";
        let forwardLinker = prefix + "_" + linkerAdd;
        var connectionConcept = yield (0,_MakeTheInstanceConcept__WEBPACK_IMPORTED_MODULE_2__["default"])("connection", forwardLinker, false, 999, 999, 999);
        var newConnection = new _DataStructures_Connection__WEBPACK_IMPORTED_MODULE_0__.Connection(0, concept1Data.id, concept2Data.id, concept1Data.userId, concept2Data.userId, concept1Data.userId, connectionConcept.id, connectionConcept.userId, 1000, userId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId);
        _DataStructures_SyncData__WEBPACK_IMPORTED_MODULE_1__.SyncData.AddConnection(newConnection);
    });
}


/***/ }),

/***/ "./src/Services/CreateTheComposition.ts":
/*!**********************************************!*\
  !*** ./src/Services/CreateTheComposition.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateTheComposition)
/* harmony export */ });
/* harmony import */ var _DataStructures_Concept__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DataStructures/Concept */ "./src/DataStructures/Concept.ts");
/* harmony import */ var _CreateTheConnection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateTheConnection */ "./src/Services/CreateTheConnection.ts");
/* harmony import */ var _MakeTheInstanceConcept__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MakeTheInstanceConcept */ "./src/Services/MakeTheInstanceConcept.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function CreateTheComposition(json, ofTheConceptId = null, ofTheConceptUserId = null, mainKey = null, userId = null, accessId = null, sessionInformationId = null) {
    return __awaiter(this, void 0, void 0, function* () {
        var localUserId = userId !== null && userId !== void 0 ? userId : 10267;
        var localAccessId = accessId !== null && accessId !== void 0 ? accessId : 10267;
        var localSessionId = sessionInformationId !== null && sessionInformationId !== void 0 ? sessionInformationId : 10267;
        var MainKeyLocal = mainKey !== null && mainKey !== void 0 ? mainKey : 0;
        var MainConcept = new _DataStructures_Concept__WEBPACK_IMPORTED_MODULE_0__.Concept(0, 0, 0, 0, 0, 0, 0, 0, "0", 0, 0, 0, 0, 0, 0, false);
        for (const key in json) {
            if (typeof json[key] != 'string' && typeof json[key] != 'number') {
                if (ofTheConceptId == null && ofTheConceptUserId == null) {
                    var localMainKey = MainKeyLocal;
                    let conceptString = yield (0,_MakeTheInstanceConcept__WEBPACK_IMPORTED_MODULE_2__["default"])(key, "", true, localUserId, localAccessId, localSessionId);
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
                    var conceptString = yield (0,_MakeTheInstanceConcept__WEBPACK_IMPORTED_MODULE_2__["default"])(key, "", true, localUserId, localAccessId, localSessionId);
                    var concept = conceptString;
                    yield (0,_CreateTheConnection__WEBPACK_IMPORTED_MODULE_1__["default"])(ofThe, ofTheUser, concept.id, concept.userId, localMainKey, localSessionId, concept.userId);
                    yield CreateTheComposition(json[key], concept.id, concept.userId, localMainKey, userId, accessId, sessionInformationId);
                }
            }
            else {
                var ofThe = ofTheConceptId !== null && ofTheConceptId !== void 0 ? ofTheConceptId : 999;
                var ofTheUser = ofTheConceptUserId !== null && ofTheConceptUserId !== void 0 ? ofTheConceptUserId : 10267;
                var localMainKey = MainKeyLocal;
                var conceptString = yield (0,_MakeTheInstanceConcept__WEBPACK_IMPORTED_MODULE_2__["default"])(key, json[key], false, localUserId, localAccessId, localSessionId);
                var concept = conceptString;
                yield (0,_CreateTheConnection__WEBPACK_IMPORTED_MODULE_1__["default"])(ofThe, ofTheUser, concept.id, concept.userId, localMainKey, localSessionId, concept.userId);
            }
        }
        return MainConcept;
    });
}


/***/ }),

/***/ "./src/Services/CreateTheConcept.ts":
/*!******************************************!*\
  !*** ./src/Services/CreateTheConcept.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateTheConcept)
/* harmony export */ });
/* harmony import */ var _DataStructures_Concept__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DataStructures/Concept */ "./src/DataStructures/Concept.ts");
/* harmony import */ var _DataStructures_ReservedIds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataStructures/ReservedIds */ "./src/DataStructures/ReservedIds.ts");
/* harmony import */ var _DataStructures_SyncData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DataStructures/SyncData */ "./src/DataStructures/SyncData.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function CreateTheConcept(referent, userId, categoryId, categoryUserId, typeId, typeUserId, referentId, referentUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId) {
    return __awaiter(this, void 0, void 0, function* () {
        var id = yield _DataStructures_ReservedIds__WEBPACK_IMPORTED_MODULE_1__.ReservedIds.getId();
        var isNew = true;
        var concept = new _DataStructures_Concept__WEBPACK_IMPORTED_MODULE_0__.Concept(id, userId, typeId, typeUserId, categoryId, categoryUserId, referentId, referentUserId, referent, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId, isNew);
        concept.isTemp = true;
        _DataStructures_SyncData__WEBPACK_IMPORTED_MODULE_2__.SyncData.AddConcept(concept);
        return concept;
    });
}


/***/ }),

/***/ "./src/Services/CreateTheConnection.ts":
/*!*********************************************!*\
  !*** ./src/Services/CreateTheConnection.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTheConnection)
/* harmony export */ });
/* harmony import */ var _DataStructures_Connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DataStructures/Connection */ "./src/DataStructures/Connection.ts");
/* harmony import */ var _DataStructures_SyncData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataStructures/SyncData */ "./src/DataStructures/SyncData.ts");


function createTheConnection(ofTheConceptId, ofTheConceptUserId, toTheConceptId, toTheConceptUserId, typeId, sessionInformationId, sessionInformationUserId) {
    var orderId = 1;
    var orderUserId = ofTheConceptUserId;
    var typeUserId = ofTheConceptUserId;
    var userId = ofTheConceptUserId;
    var securityId = 0;
    var securityUserId = ofTheConceptUserId;
    var accessId = 4;
    var accessUserId = ofTheConceptUserId;
    if (ofTheConceptId != toTheConceptId) {
        var connection = new _DataStructures_Connection__WEBPACK_IMPORTED_MODULE_0__.Connection(0, ofTheConceptId, toTheConceptId, ofTheConceptUserId, toTheConceptUserId, userId, typeId, typeUserId, orderId, orderUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId);
        connection.isTemp = true;
        connection.id = Math.floor(Math.random() * 100000000);
        _DataStructures_SyncData__WEBPACK_IMPORTED_MODULE_1__.SyncData.AddConnection(connection);
    }
}


/***/ }),

/***/ "./src/Services/CreateTypeTreeFromData.ts":
/*!************************************************!*\
  !*** ./src/Services/CreateTypeTreeFromData.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateTypeTreeFromData: () => (/* binding */ CreateTypeTreeFromData)
/* harmony export */ });
/* harmony import */ var _DataStructures_BinaryTypeTree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DataStructures/BinaryTypeTree */ "./src/DataStructures/BinaryTypeTree.ts");
/* harmony import */ var _DataStructures_Node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataStructures/Node */ "./src/DataStructures/Node.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app */ "./src/app.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function CreateTypeTreeFromData() {
    return __awaiter(this, void 0, void 0, function* () {
        var startTime = new Date().getTime();
        var conceptList = yield (0,_app__WEBPACK_IMPORTED_MODULE_2__.getFromDatabaseWithTypeOld)("concept");
        if (Array.isArray(conceptList)) {
            for (var i = 0; i < conceptList.length; i++) {
                let concept = conceptList[i];
                let node = new _DataStructures_Node__WEBPACK_IMPORTED_MODULE_1__.Node(concept.typeId, concept, null, null);
                _DataStructures_BinaryTypeTree__WEBPACK_IMPORTED_MODULE_0__.BinaryTypeTree.addNodeToTree(node);
            }
        }
        console.log("what is this");
        console.log(_DataStructures_BinaryTypeTree__WEBPACK_IMPORTED_MODULE_0__.BinaryTypeTree.typeRoot);
        var endTime = new Date().getTime();
        var time = endTime - startTime;
    });
}


/***/ }),

/***/ "./src/Services/GetComposition.ts":
/*!****************************************!*\
  !*** ./src/Services/GetComposition.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetComposition: () => (/* binding */ GetComposition),
/* harmony export */   GetCompositionWithId: () => (/* binding */ GetCompositionWithId)
/* harmony export */ });
/* harmony import */ var _Api_GetConcept__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Api/GetConcept */ "./src/Api/GetConcept.ts");
/* harmony import */ var _Api_GetAllConnectionsOfComposition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Api/GetAllConnectionsOfComposition */ "./src/Api/GetAllConnectionsOfComposition.ts");
/* harmony import */ var _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DataStructures/ConceptData */ "./src/DataStructures/ConceptData.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function GetComposition(id) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        var connectionList = [];
        var returnOutput = {};
        var connectionListString = yield (0,_Api_GetAllConnectionsOfComposition__WEBPACK_IMPORTED_MODULE_1__.GetAllConnectionsOfComposition)(id);
        connectionList = connectionListString;
        //connectionList = ConnectionData.GetConnectionsOfComposition(id);
        var compositionList = [];
        for (var i = 0; i < connectionList.length; i++) {
            if (!compositionList.includes(connectionList[i].ofTheConceptId)) {
                compositionList.push(connectionList[i].ofTheConceptId);
            }
        }
        var concept = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConcept(id);
        if (concept == null && id != null && id != undefined) {
            var conceptString = yield (0,_Api_GetConcept__WEBPACK_IMPORTED_MODULE_0__.GetConcept)(id);
            concept = conceptString;
        }
        var output = yield recursiveFetch(id, connectionList, compositionList);
        var mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "";
        returnOutput[mainString] = output;
        return returnOutput;
    });
}
function GetCompositionWithId(id) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        var connectionList = [];
        var returnOutput = {};
        var connectionListString = yield (0,_Api_GetAllConnectionsOfComposition__WEBPACK_IMPORTED_MODULE_1__.GetAllConnectionsOfComposition)(id);
        connectionList = connectionListString;
        var compositionList = [];
        for (var i = 0; i < connectionList.length; i++) {
            if (!compositionList.includes(connectionList[i].ofTheConceptId)) {
                compositionList.push(connectionList[i].ofTheConceptId);
            }
        }
        var concept = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConcept(id);
        if (concept == null && id != null && id != undefined) {
            var conceptString = yield (0,_Api_GetConcept__WEBPACK_IMPORTED_MODULE_0__.GetConcept)(id);
            concept = conceptString;
        }
        var output = yield recursiveFetch(id, connectionList, compositionList);
        var mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "";
        returnOutput[mainString] = output;
        var FinalReturn = {};
        FinalReturn['data'] = returnOutput;
        FinalReturn['id'] = id;
        return FinalReturn;
    });
}
function recursiveFetch(id, connectionList, compositionList) {
    var _a, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function* () {
        var output = {};
        var arroutput = [];
        var concept = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConcept(id);
        if ((concept == null || concept.id == 0) && id != null && id != undefined) {
            var conceptString = yield (0,_Api_GetConcept__WEBPACK_IMPORTED_MODULE_0__.GetConcept)(id);
            concept = conceptString;
        }
        if (concept) {
            if (concept.type == null) {
                var toConceptTypeId = concept.typeId;
                var toConceptType = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConcept(toConceptTypeId);
                concept.type = toConceptType;
                if (toConceptType == null && toConceptTypeId != null && toConceptTypeId != undefined) {
                    var conceptString = yield (0,_Api_GetConcept__WEBPACK_IMPORTED_MODULE_0__.GetConcept)(toConceptTypeId);
                    toConceptType = conceptString;
                    concept.type = toConceptType;
                }
            }
        }
        var mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "";
        if (!compositionList.includes(id)) {
            return concept === null || concept === void 0 ? void 0 : concept.characterValue;
        }
        else {
            for (var i = 0; i < connectionList.length; i++) {
                if (connectionList[i].ofTheConceptId == id) {
                    var toConceptId = connectionList[i].toTheConceptId;
                    var toConcept = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConcept(toConceptId);
                    if ((toConcept == null || toConcept.id == 0) && toConceptId != null && toConceptId != undefined) {
                        var conceptString = yield (0,_Api_GetConcept__WEBPACK_IMPORTED_MODULE_0__.GetConcept)(toConceptId);
                        toConcept = conceptString;
                    }
                    if (toConcept) {
                        if ((toConcept === null || toConcept === void 0 ? void 0 : toConcept.type) == null) {
                            var toConceptTypeId = toConcept.typeId;
                            var toConceptType = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConcept(toConceptTypeId);
                            toConcept.type = toConceptType;
                            if (toConceptType == null && toConceptTypeId != null && toConceptTypeId != undefined) {
                                var conceptString = yield (0,_Api_GetConcept__WEBPACK_IMPORTED_MODULE_0__.GetConcept)(toConceptTypeId);
                                toConceptType = conceptString;
                                toConcept.type = toConceptType;
                            }
                        }
                    }
                    var regex = "the_";
                    var localmainString = (_d = (_c = toConcept === null || toConcept === void 0 ? void 0 : toConcept.type) === null || _c === void 0 ? void 0 : _c.characterValue) !== null && _d !== void 0 ? _d : "";
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetCompositionList: () => (/* binding */ GetCompositionList),
/* harmony export */   GetCompositionListWithId: () => (/* binding */ GetCompositionListWithId)
/* harmony export */ });
/* harmony import */ var _Api_GetAllConceptsByType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Api/GetAllConceptsByType */ "./src/Api/GetAllConceptsByType.ts");
/* harmony import */ var _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataStructures/ConceptData */ "./src/DataStructures/ConceptData.ts");
/* harmony import */ var _GetComposition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GetComposition */ "./src/Services/GetComposition.ts");
/* harmony import */ var _GetConceptByCharacter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GetConceptByCharacter */ "./src/Services/GetConceptByCharacter.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




function GetCompositionList(compositionName, userId, inpage = 10, page = 1) {
    return __awaiter(this, void 0, void 0, function* () {
        var concept = yield (0,_GetConceptByCharacter__WEBPACK_IMPORTED_MODULE_3__["default"])(compositionName);
        var CompositionList = [];
        if (concept) {
            yield (0,_Api_GetAllConceptsByType__WEBPACK_IMPORTED_MODULE_0__.GetAllConceptsByType)(compositionName, userId);
            var conceptList = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_1__.ConceptsData.GetConceptsByTypeIdAndUser(concept.id, userId);
            console.log("this is the listed data", conceptList);
            var startPage = inpage * (page - 1);
            for (var i = startPage; i < startPage + inpage; i++) {
                if (conceptList[i]) {
                    var compositionJson = yield (0,_GetComposition__WEBPACK_IMPORTED_MODULE_2__.GetComposition)(conceptList[i].id);
                    CompositionList.push(compositionJson);
                }
            }
        }
        return CompositionList;
    });
}
function GetCompositionListWithId(compositionName, userId, inpage = 10, page = 1) {
    return __awaiter(this, void 0, void 0, function* () {
        var concept = yield (0,_GetConceptByCharacter__WEBPACK_IMPORTED_MODULE_3__["default"])(compositionName);
        var CompositionList = [];
        console.log("what a list", concept);
        if (concept) {
            yield (0,_Api_GetAllConceptsByType__WEBPACK_IMPORTED_MODULE_0__.GetAllConceptsByType)(compositionName, userId);
            var conceptList = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_1__.ConceptsData.GetConceptsByTypeIdAndUser(concept.id, userId);
            var startPage = inpage * (page - 1);
            for (var i = startPage; i < startPage + inpage; i++) {
                if (conceptList[i]) {
                    var compositionJson = yield (0,_GetComposition__WEBPACK_IMPORTED_MODULE_2__.GetCompositionWithId)(conceptList[i].id);
                    CompositionList.push(compositionJson);
                }
            }
        }
        return CompositionList;
    });
}


/***/ }),

/***/ "./src/Services/GetConceptByCharacter.ts":
/*!***********************************************!*\
  !*** ./src/Services/GetConceptByCharacter.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetConceptByCharacter)
/* harmony export */ });
/* harmony import */ var _Api_GetConceptByCharacterValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Api/GetConceptByCharacterValue */ "./src/Api/GetConceptByCharacterValue.ts");
/* harmony import */ var _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataStructures/ConceptData */ "./src/DataStructures/ConceptData.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function GetConceptByCharacter(characterValue) {
    return __awaiter(this, void 0, void 0, function* () {
        var concept = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_1__.ConceptsData.GetConceptByCharacter(characterValue);
        var literalCharacter = `${characterValue}`;
        if ((concept == null || (concept === null || concept === void 0 ? void 0 : concept.id) == 0) && literalCharacter) {
            yield (0,_Api_GetConceptByCharacterValue__WEBPACK_IMPORTED_MODULE_0__.GetConceptByCharacterValue)(characterValue);
            concept = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_1__.ConceptsData.GetConceptByCharacter(characterValue);
        }
        return concept;
    });
}


/***/ }),

/***/ "./src/Services/GetDataFromIndexDb.ts":
/*!********************************************!*\
  !*** ./src/Services/GetDataFromIndexDb.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetDataFromIndexDb: () => (/* binding */ GetDataFromIndexDb),
/* harmony export */   GetDataFromIndexDbLocal: () => (/* binding */ GetDataFromIndexDbLocal)
/* harmony export */ });
/* harmony import */ var _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DataStructures/ConceptData */ "./src/DataStructures/ConceptData.ts");
/* harmony import */ var _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataStructures/ConnectionData */ "./src/DataStructures/ConnectionData.ts");
/* harmony import */ var _DataStructures_Local_LocalConnectionData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DataStructures/Local/LocalConnectionData */ "./src/DataStructures/Local/LocalConnectionData.ts");
/* harmony import */ var _Database_indexdblocal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Database/indexdblocal */ "./src/Database/indexdblocal.ts");
/* harmony import */ var _Database_indexeddb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Database/indexeddb */ "./src/Database/indexeddb.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





function GetDataFromIndexDb() {
    return __awaiter(this, void 0, void 0, function* () {
        var conceptList = yield (0,_Database_indexeddb__WEBPACK_IMPORTED_MODULE_4__.getFromDatabaseWithTypeOld)("concept");
        GetConnectionsFromIndexDb();
        console.log(conceptList);
        if (Array.isArray(conceptList)) {
            for (var i = 0; i < conceptList.length; i++) {
                _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_0__.ConceptsData.AddConcept(conceptList[i]);
            }
        }
    });
}
function GetDataFromIndexDbLocal() {
    return __awaiter(this, void 0, void 0, function* () {
        // var conceptList = await getAllFromLocalDb("localconcept");
        GetConnectionsFromIndexDbLocal();
        // if(Array.isArray(conceptList)){
        //     for(var i=0 ;i < conceptList.length ;i++){
        //         LocalConceptsData.AddConcept(conceptList[i]);
        //     }
        // }
    });
}
function GetConnectionsFromIndexDb() {
    return __awaiter(this, void 0, void 0, function* () {
        var connectionList = yield (0,_Database_indexeddb__WEBPACK_IMPORTED_MODULE_4__.getFromDatabaseWithTypeOld)("connection");
        if (Array.isArray(connectionList)) {
            for (var i = 0; i < connectionList.length; i++) {
                _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_1__.ConnectionData.AddConnection(connectionList[i]);
            }
        }
    });
}
function GetConnectionsFromIndexDbLocal() {
    return __awaiter(this, void 0, void 0, function* () {
        var connectionList = yield (0,_Database_indexdblocal__WEBPACK_IMPORTED_MODULE_3__.getAllFromLocalDb)("localconnection");
        if (Array.isArray(connectionList)) {
            for (var i = 0; i < connectionList.length; i++) {
                _DataStructures_Local_LocalConnectionData__WEBPACK_IMPORTED_MODULE_2__.LocalConnectionData.AddConnection(connectionList[i]);
            }
        }
    });
}


/***/ }),

/***/ "./src/Services/GetLink.ts":
/*!*********************************!*\
  !*** ./src/Services/GetLink.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetLink: () => (/* binding */ GetLink)
/* harmony export */ });
/* harmony import */ var _Api_GetConceptByCharacterAndType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Api/GetConceptByCharacterAndType */ "./src/Api/GetConceptByCharacterAndType.ts");
/* harmony import */ var _Api_GetConnectionOfTheConcept__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Api/GetConnectionOfTheConcept */ "./src/Api/GetConnectionOfTheConcept.ts");
/* harmony import */ var _GetComposition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GetComposition */ "./src/Services/GetComposition.ts");
/* harmony import */ var _GetTheConcept__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GetTheConcept */ "./src/Services/GetTheConcept.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




function GetLink(id, linker) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        var output = [];
        var concept = yield (0,_GetTheConcept__WEBPACK_IMPORTED_MODULE_3__["default"])(id);
        var linkString = ((_a = concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) + "_s" + "_" + linker;
        var relatedConceptString = yield (0,_Api_GetConceptByCharacterAndType__WEBPACK_IMPORTED_MODULE_0__.GetConceptByCharacterAndType)(linkString, 16);
        var relatedConcept = relatedConceptString;
        if (relatedConcept.id > 0) {
            var connectionsString = yield (0,_Api_GetConnectionOfTheConcept__WEBPACK_IMPORTED_MODULE_1__.GetConnectionOfTheConcept)(relatedConcept.id, concept.id, concept.userId);
            var connections = connectionsString;
            for (var i = 0; i < connections.length; i++) {
                let toConceptId = connections[i].toTheConceptId;
                let toConcept = yield (0,_GetTheConcept__WEBPACK_IMPORTED_MODULE_3__["default"])(toConceptId);
                let newComposition = yield (0,_GetComposition__WEBPACK_IMPORTED_MODULE_2__.GetCompositionWithId)(toConcept.id);
                output.push(newComposition);
            }
        }
        return output;
    });
}


/***/ }),

/***/ "./src/Services/GetTheConcept.ts":
/*!***************************************!*\
  !*** ./src/Services/GetTheConcept.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetTheConcept)
/* harmony export */ });
/* harmony import */ var _Api_GetConcept__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Api/GetConcept */ "./src/Api/GetConcept.ts");
/* harmony import */ var _DataStructures_Concept__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataStructures/Concept */ "./src/DataStructures/Concept.ts");
/* harmony import */ var _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DataStructures/ConceptData */ "./src/DataStructures/ConceptData.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function GetTheConcept(id) {
    return __awaiter(this, void 0, void 0, function* () {
        var concept = new _DataStructures_Concept__WEBPACK_IMPORTED_MODULE_1__.Concept(0, 0, 0, 0, 0, 0, 0, 0, "0", 0, 0, 0, 0, 0, 0, false);
        concept = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConcept(id);
        if ((concept == null || concept.id == 0) && id != null && id != undefined) {
            var conceptString = yield (0,_Api_GetConcept__WEBPACK_IMPORTED_MODULE_0__.GetConcept)(id);
            concept = conceptString;
        }
        if (concept) {
            if (concept.type == null) {
                var conceptType = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConcept(concept.typeId);
                if (conceptType == null && concept.typeId != null && concept.typeId != undefined) {
                    var typeConceptString = yield (0,_Api_GetConcept__WEBPACK_IMPORTED_MODULE_0__.GetConcept)(concept.typeId);
                    var typeConcept = typeConceptString;
                    concept.type = typeConcept;
                }
            }
        }
        return concept;
    });
}


/***/ }),

/***/ "./src/Services/GetTheReferent.ts":
/*!****************************************!*\
  !*** ./src/Services/GetTheReferent.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetTheReferent)
/* harmony export */ });
/* harmony import */ var _GetTheConcept__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GetTheConcept */ "./src/Services/GetTheConcept.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function GetTheReferent(id, userId, referentId) {
    return __awaiter(this, void 0, void 0, function* () {
        var myref = referentId !== null && referentId !== void 0 ? referentId : 0;
        var referent = yield (0,_GetTheConcept__WEBPACK_IMPORTED_MODULE_0__["default"])(referentId);
        //var result: ReferentInfo = new ReferentInfo(referent.id, referent.userId, referent.referentId, referent.referentUserId);
        return referent;
    });
}


/***/ }),

/***/ "./src/Services/InitializeSystem.ts":
/*!******************************************!*\
  !*** ./src/Services/InitializeSystem.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PurgatoryDatabaseUpdated: () => (/* binding */ PurgatoryDatabaseUpdated),
/* harmony export */   "default": () => (/* binding */ InitializeSystem)
/* harmony export */ });
/* harmony import */ var _Api_GetAiData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Api/GetAiData */ "./src/Api/GetAiData.ts");
/* harmony import */ var _DataStructures_SettingData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataStructures/SettingData */ "./src/DataStructures/SettingData.ts");
/* harmony import */ var _DataStructures_Settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DataStructures/Settings */ "./src/DataStructures/Settings.ts");
/* harmony import */ var _Database_indexeddb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Database/indexeddb */ "./src/Database/indexeddb.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




function InitializeSystem() {
    return __awaiter(this, void 0, void 0, function* () {
        var statsData = yield (0,_Database_indexeddb__WEBPACK_IMPORTED_MODULE_3__.GetStatsFromDatabase)();
        var settings = statsData;
        if (!settings.isOnlineSync) {
            console.log("getting the ai data");
            yield (0,_Api_GetAiData__WEBPACK_IMPORTED_MODULE_0__.GetAiData)();
        }
        else {
            return true;
        }
    });
}
function PurgatoryDatabaseUpdated() {
    return __awaiter(this, void 0, void 0, function* () {
        _DataStructures_Settings__WEBPACK_IMPORTED_MODULE_2__.Settings.isOnlineSync = true;
        var settingData = new _DataStructures_SettingData__WEBPACK_IMPORTED_MODULE_1__.SettingData(_DataStructures_Settings__WEBPACK_IMPORTED_MODULE_2__.Settings.isOnlineSync);
        (0,_Database_indexeddb__WEBPACK_IMPORTED_MODULE_3__.AiUpdateFlag)(settingData);
    });
}


/***/ }),

/***/ "./src/Services/Local/CreateLocalBinaryTreeFromData.ts":
/*!*************************************************************!*\
  !*** ./src/Services/Local/CreateLocalBinaryTreeFromData.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateLocalBinaryTreeFromData)
/* harmony export */ });
/* harmony import */ var _DataStructures_Local_LocalBinaryTree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DataStructures/Local/LocalBinaryTree */ "./src/DataStructures/Local/LocalBinaryTree.ts");
/* harmony import */ var _DataStructures_Node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../DataStructures/Node */ "./src/DataStructures/Node.ts");
/* harmony import */ var _Database_indexdblocal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Database/indexdblocal */ "./src/Database/indexdblocal.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function CreateLocalBinaryTreeFromData() {
    return __awaiter(this, void 0, void 0, function* () {
        var startTime = new Date().getTime();
        var conceptList = yield (0,_Database_indexdblocal__WEBPACK_IMPORTED_MODULE_2__.getAllFromLocalDb)("localconcept");
        if (Array.isArray(conceptList)) {
            for (var i = 0; i < conceptList.length; i++) {
                let concept = conceptList[i];
                let node = new _DataStructures_Node__WEBPACK_IMPORTED_MODULE_1__.Node(concept.id, concept, null, null);
                _DataStructures_Local_LocalBinaryTree__WEBPACK_IMPORTED_MODULE_0__.LocalBinaryTree.addNodeToTree(node);
            }
        }
        var endTime = new Date().getTime();
        var time = endTime - startTime;
    });
}


/***/ }),

/***/ "./src/Services/Local/CreateLocalBinaryTypeTreeFromData.ts":
/*!*****************************************************************!*\
  !*** ./src/Services/Local/CreateLocalBinaryTypeTreeFromData.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateLocalBinaryTypeTreeFromData: () => (/* binding */ CreateLocalBinaryTypeTreeFromData)
/* harmony export */ });
/* harmony import */ var _DataStructures_Local_LocalBinaryTypeTree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DataStructures/Local/LocalBinaryTypeTree */ "./src/DataStructures/Local/LocalBinaryTypeTree.ts");
/* harmony import */ var _DataStructures_Node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../DataStructures/Node */ "./src/DataStructures/Node.ts");
/* harmony import */ var _Database_indexdblocal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Database/indexdblocal */ "./src/Database/indexdblocal.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function CreateLocalBinaryTypeTreeFromData() {
    return __awaiter(this, void 0, void 0, function* () {
        var startTime = new Date().getTime();
        var conceptList = yield (0,_Database_indexdblocal__WEBPACK_IMPORTED_MODULE_2__.getAllFromLocalDb)("localconcept");
        if (Array.isArray(conceptList)) {
            for (var i = 0; i < conceptList.length; i++) {
                let concept = conceptList[i];
                let node = new _DataStructures_Node__WEBPACK_IMPORTED_MODULE_1__.Node(concept.typeId, concept, null, null);
                _DataStructures_Local_LocalBinaryTypeTree__WEBPACK_IMPORTED_MODULE_0__.LocalBinaryTypeTree.addNodeToTree(node);
            }
        }
        console.log(_DataStructures_Local_LocalBinaryTypeTree__WEBPACK_IMPORTED_MODULE_0__.LocalBinaryTypeTree.LocalTypeRoot);
        var endTime = new Date().getTime();
        var time = endTime - startTime;
    });
}


/***/ }),

/***/ "./src/Services/Local/CreateLocalCharacterBinaryTree.ts":
/*!**************************************************************!*\
  !*** ./src/Services/Local/CreateLocalCharacterBinaryTree.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateLocalCharacterBinaryTreeFromData: () => (/* binding */ CreateLocalCharacterBinaryTreeFromData)
/* harmony export */ });
/* harmony import */ var _DataStructures_Local_LocalBinaryCharacterTree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DataStructures/Local/LocalBinaryCharacterTree */ "./src/DataStructures/Local/LocalBinaryCharacterTree.ts");
/* harmony import */ var _DataStructures_Node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../DataStructures/Node */ "./src/DataStructures/Node.ts");
/* harmony import */ var _Database_indexdblocal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Database/indexdblocal */ "./src/Database/indexdblocal.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function CreateLocalCharacterBinaryTreeFromData() {
    return __awaiter(this, void 0, void 0, function* () {
        var startTime = new Date().getTime();
        var conceptList = yield (0,_Database_indexdblocal__WEBPACK_IMPORTED_MODULE_2__.getAllFromLocalDb)("localconcept");
        if (Array.isArray(conceptList)) {
            for (var i = 0; i < conceptList.length; i++) {
                let concept = conceptList[i];
                let node = new _DataStructures_Node__WEBPACK_IMPORTED_MODULE_1__.Node(concept.characterValue, concept, null, null);
                _DataStructures_Local_LocalBinaryCharacterTree__WEBPACK_IMPORTED_MODULE_0__.LocalBinaryCharacterTree.addNodeToTree(node);
            }
        }
        console.log("what is this");
        console.log(_DataStructures_Local_LocalBinaryCharacterTree__WEBPACK_IMPORTED_MODULE_0__.LocalBinaryCharacterTree.LocalCharacterRoot);
        var endTime = new Date().getTime();
        var time = endTime - startTime;
    });
}


/***/ }),

/***/ "./src/Services/Local/CreateTheCompositionLocal.ts":
/*!*********************************************************!*\
  !*** ./src/Services/Local/CreateTheCompositionLocal.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateTheCompositionLocal: () => (/* binding */ CreateTheCompositionLocal)
/* harmony export */ });
/* harmony import */ var _DataStructures_Concept__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DataStructures/Concept */ "./src/DataStructures/Concept.ts");
/* harmony import */ var _CreateTheConnectionLocal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateTheConnectionLocal */ "./src/Services/Local/CreateTheConnectionLocal.ts");
/* harmony import */ var _MakeTheInstanceConceptLocal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MakeTheInstanceConceptLocal */ "./src/Services/Local/MakeTheInstanceConceptLocal.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function CreateTheCompositionLocal(json, ofTheConceptId = null, ofTheConceptUserId = null, mainKey = null, userId = null, accessId = null, sessionInformationId = null) {
    return __awaiter(this, void 0, void 0, function* () {
        var localUserId = userId !== null && userId !== void 0 ? userId : 10267;
        var localAccessId = accessId !== null && accessId !== void 0 ? accessId : 10267;
        var localSessionId = sessionInformationId !== null && sessionInformationId !== void 0 ? sessionInformationId : 10267;
        var MainKeyLocal = mainKey !== null && mainKey !== void 0 ? mainKey : 0;
        var MainConcept = new _DataStructures_Concept__WEBPACK_IMPORTED_MODULE_0__.Concept(0, 0, 0, 0, 0, 0, 0, 0, "0", 0, 0, 0, 0, 0, 0, false);
        for (const key in json) {
            if (typeof json[key] != 'string' && typeof json[key] != 'number') {
                if (ofTheConceptId == null && ofTheConceptUserId == null) {
                    var localMainKey = MainKeyLocal;
                    let conceptString = yield (0,_MakeTheInstanceConceptLocal__WEBPACK_IMPORTED_MODULE_2__.MakeTheInstanceConceptLocal)(key, "", true, localUserId, localAccessId, localSessionId);
                    var concept = conceptString;
                    MainConcept = concept;
                    localMainKey = concept.id;
                    MainKeyLocal = concept.id;
                    yield CreateTheCompositionLocal(json[key], concept.id, concept.userId, localMainKey, userId, accessId, sessionInformationId);
                }
                else {
                    var ofThe = ofTheConceptId !== null && ofTheConceptId !== void 0 ? ofTheConceptId : 999;
                    var ofTheUser = ofTheConceptUserId !== null && ofTheConceptUserId !== void 0 ? ofTheConceptUserId : 10267;
                    var localMainKey = MainKeyLocal;
                    var conceptString = yield (0,_MakeTheInstanceConceptLocal__WEBPACK_IMPORTED_MODULE_2__.MakeTheInstanceConceptLocal)(key, "", true, localUserId, localAccessId, localSessionId);
                    var concept = conceptString;
                    yield (0,_CreateTheConnectionLocal__WEBPACK_IMPORTED_MODULE_1__["default"])(ofThe, ofTheUser, concept.id, concept.userId, localMainKey, localSessionId, concept.userId);
                    yield CreateTheCompositionLocal(json[key], concept.id, concept.userId, localMainKey, userId, accessId, sessionInformationId);
                }
            }
            else {
                var ofThe = ofTheConceptId !== null && ofTheConceptId !== void 0 ? ofTheConceptId : 999;
                var ofTheUser = ofTheConceptUserId !== null && ofTheConceptUserId !== void 0 ? ofTheConceptUserId : 10267;
                var localMainKey = MainKeyLocal;
                var conceptString = yield (0,_MakeTheInstanceConceptLocal__WEBPACK_IMPORTED_MODULE_2__.MakeTheInstanceConceptLocal)(key, json[key], false, localUserId, localAccessId, localSessionId);
                var concept = conceptString;
                yield (0,_CreateTheConnectionLocal__WEBPACK_IMPORTED_MODULE_1__["default"])(ofThe, ofTheUser, concept.id, concept.userId, localMainKey, localSessionId, concept.userId);
            }
        }
        return MainConcept;
    });
}


/***/ }),

/***/ "./src/Services/Local/CreateTheConceptLocal.ts":
/*!*****************************************************!*\
  !*** ./src/Services/Local/CreateTheConceptLocal.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateTheConceptLocal)
/* harmony export */ });
/* harmony import */ var _DataStructures_Concept__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DataStructures/Concept */ "./src/DataStructures/Concept.ts");
/* harmony import */ var _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../DataStructures/Local/LocalConceptData */ "./src/DataStructures/Local/LocalConceptData.ts");
/* harmony import */ var _Database_indexdblocal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Database/indexdblocal */ "./src/Database/indexdblocal.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function CreateTheConceptLocal(referent, userId, categoryId, categoryUserId, typeId, typeUserId, referentId, referentUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId) {
    return __awaiter(this, void 0, void 0, function* () {
        var id = Math.floor(Math.random() * 100000000);
        var isNew = true;
        var concept = new _DataStructures_Concept__WEBPACK_IMPORTED_MODULE_0__.Concept(id, userId, typeId, typeUserId, categoryId, categoryUserId, referentId, referentUserId, referent, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId, isNew);
        concept.isTemp = true;
        _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_1__.LocalConceptsData.AddConcept(concept);
        console.log("adding this concept to local");
        console.log(concept);
        (0,_Database_indexdblocal__WEBPACK_IMPORTED_MODULE_2__.storeToDatabase)("localconcept", concept);
        return concept;
    });
}


/***/ }),

/***/ "./src/Services/Local/CreateTheConnectionLocal.ts":
/*!********************************************************!*\
  !*** ./src/Services/Local/CreateTheConnectionLocal.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateTheConnectionLocal)
/* harmony export */ });
/* harmony import */ var _DataStructures_Connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DataStructures/Connection */ "./src/DataStructures/Connection.ts");
/* harmony import */ var _DataStructures_Local_LocalConnectionData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../DataStructures/Local/LocalConnectionData */ "./src/DataStructures/Local/LocalConnectionData.ts");
/* harmony import */ var _Database_indexdblocal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Database/indexdblocal */ "./src/Database/indexdblocal.ts");



function CreateTheConnectionLocal(ofTheConceptId, ofTheConceptUserId, toTheConceptId, toTheConceptUserId, typeId, sessionInformationId, sessionInformationUserId) {
    var orderId = 1;
    var orderUserId = ofTheConceptUserId;
    var typeUserId = ofTheConceptUserId;
    var userId = ofTheConceptUserId;
    var securityId = 0;
    var securityUserId = ofTheConceptUserId;
    var accessId = 4;
    var accessUserId = ofTheConceptUserId;
    if (ofTheConceptId != toTheConceptId) {
        var connection = new _DataStructures_Connection__WEBPACK_IMPORTED_MODULE_0__.Connection(0, ofTheConceptId, toTheConceptId, ofTheConceptUserId, toTheConceptUserId, userId, typeId, typeUserId, orderId, orderUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId);
        connection.isTemp = true;
        connection.id = Math.floor(Math.random() * 100000000);
        _DataStructures_Local_LocalConnectionData__WEBPACK_IMPORTED_MODULE_1__.LocalConnectionData.AddConnection(connection);
        (0,_Database_indexdblocal__WEBPACK_IMPORTED_MODULE_2__.storeToDatabase)("localconnection", connection);
    }
}


/***/ }),

/***/ "./src/Services/Local/GetCompositionListLocal.ts":
/*!*******************************************************!*\
  !*** ./src/Services/Local/GetCompositionListLocal.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetCompositionListLocal: () => (/* binding */ GetCompositionListLocal),
/* harmony export */   GetCompositionListLocalWithId: () => (/* binding */ GetCompositionListLocalWithId)
/* harmony export */ });
/* harmony import */ var _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DataStructures/Local/LocalConceptData */ "./src/DataStructures/Local/LocalConceptData.ts");
/* harmony import */ var _GetCompositionLocal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GetCompositionLocal */ "./src/Services/Local/GetCompositionLocal.ts");
/* harmony import */ var _GetConceptByCharacterLocal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GetConceptByCharacterLocal */ "./src/Services/Local/GetConceptByCharacterLocal.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function GetCompositionListLocal(compositionName, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        var concept = yield (0,_GetConceptByCharacterLocal__WEBPACK_IMPORTED_MODULE_2__["default"])(compositionName);
        var CompositionList = [];
        if (concept) {
            var conceptList = yield _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_0__.LocalConceptsData.GetConceptsByTypeIdAndUser(concept.id, userId);
            for (var i = 0; i < conceptList.length; i++) {
                var compositionJson = yield (0,_GetCompositionLocal__WEBPACK_IMPORTED_MODULE_1__.GetCompositionLocal)(conceptList[i].id);
                CompositionList.push(compositionJson);
            }
        }
        return CompositionList;
    });
}
function GetCompositionListLocalWithId(compositionName, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        var concept = yield (0,_GetConceptByCharacterLocal__WEBPACK_IMPORTED_MODULE_2__["default"])(compositionName);
        var CompositionList = [];
        if (concept) {
            var conceptList = yield _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_0__.LocalConceptsData.GetConceptsByTypeIdAndUser(concept.id, userId);
            for (var i = 0; i < conceptList.length; i++) {
                var compositionJson = yield (0,_GetCompositionLocal__WEBPACK_IMPORTED_MODULE_1__.GetCompositionLocalWithId)(conceptList[i].id);
                CompositionList.push(compositionJson);
            }
        }
        return CompositionList;
    });
}


/***/ }),

/***/ "./src/Services/Local/GetCompositionLocal.ts":
/*!***************************************************!*\
  !*** ./src/Services/Local/GetCompositionLocal.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetCompositionLocal: () => (/* binding */ GetCompositionLocal),
/* harmony export */   GetCompositionLocalWithId: () => (/* binding */ GetCompositionLocalWithId)
/* harmony export */ });
/* harmony import */ var _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DataStructures/Local/LocalConceptData */ "./src/DataStructures/Local/LocalConceptData.ts");
/* harmony import */ var _DataStructures_Local_LocalConnectionData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../DataStructures/Local/LocalConnectionData */ "./src/DataStructures/Local/LocalConnectionData.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function GetCompositionLocal(id) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        var connectionList = [];
        var returnOutput = {};
        connectionList = yield _DataStructures_Local_LocalConnectionData__WEBPACK_IMPORTED_MODULE_1__.LocalConnectionData.GetConnectionsOfCompositionLocal(id);
        //connectionList = ConnectionData.GetConnectionsOfComposition(id);
        var compositionList = [];
        for (var i = 0; i < connectionList.length; i++) {
            if (!compositionList.includes(connectionList[i].ofTheConceptId)) {
                compositionList.push(connectionList[i].ofTheConceptId);
            }
        }
        var concept = yield _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_0__.LocalConceptsData.GetConcept(id);
        var output = yield recursiveFetchLocal(id, connectionList, compositionList);
        var mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "top";
        returnOutput[mainString] = output;
        return returnOutput;
    });
}
function GetCompositionLocalWithId(id) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        var connectionList = [];
        var returnOutput = {};
        connectionList = yield _DataStructures_Local_LocalConnectionData__WEBPACK_IMPORTED_MODULE_1__.LocalConnectionData.GetConnectionsOfCompositionLocal(id);
        var compositionList = [];
        for (var i = 0; i < connectionList.length; i++) {
            if (!compositionList.includes(connectionList[i].ofTheConceptId)) {
                compositionList.push(connectionList[i].ofTheConceptId);
            }
        }
        var concept = yield _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_0__.LocalConceptsData.GetConcept(id);
        if (concept.id != 0) {
            var output = yield recursiveFetchLocal(id, connectionList, compositionList);
            var mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "top";
            returnOutput[mainString] = output;
            var FinalReturn = {};
        }
        FinalReturn['data'] = returnOutput;
        FinalReturn['id'] = id;
        return FinalReturn;
    });
}
function recursiveFetchLocal(id, connectionList, compositionList) {
    var _a, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function* () {
        var output = {};
        var arroutput = [];
        var concept = yield _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_0__.LocalConceptsData.GetConcept(id);
        if (concept.id != 0) {
            if (concept.type == null) {
                var toConceptTypeId = concept.typeId;
                var toConceptType = yield _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_0__.LocalConceptsData.GetConcept(toConceptTypeId);
                concept.type = toConceptType;
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
                    var toConcept = yield _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_0__.LocalConceptsData.GetConcept(toConceptId);
                    if (toConcept.id != 0) {
                        if ((toConcept === null || toConcept === void 0 ? void 0 : toConcept.type) == null) {
                            var toConceptTypeId = toConcept.typeId;
                            var toConceptType = yield _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_0__.LocalConceptsData.GetConcept(toConceptTypeId);
                            toConcept.type = toConceptType;
                        }
                    }
                    var regex = "the_";
                    var localmainString = (_d = (_c = toConcept === null || toConcept === void 0 ? void 0 : toConcept.type) === null || _c === void 0 ? void 0 : _c.characterValue) !== null && _d !== void 0 ? _d : "top";
                    var localKey = localmainString.replace(regex, "");
                    if (isNaN(Number(localKey))) {
                        if (localKey) {
                            const result = yield recursiveFetchLocal(toConceptId, connectionList, compositionList);
                            output[localKey] = result;
                        }
                    }
                    else {
                        const result = yield recursiveFetchLocal(toConceptId, connectionList, compositionList);
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

/***/ "./src/Services/Local/GetConceptByCharacterLocal.ts":
/*!**********************************************************!*\
  !*** ./src/Services/Local/GetConceptByCharacterLocal.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetConceptByCharacterLocal)
/* harmony export */ });
/* harmony import */ var _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DataStructures/Local/LocalConceptData */ "./src/DataStructures/Local/LocalConceptData.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function GetConceptByCharacterLocal(characterValue) {
    return __awaiter(this, void 0, void 0, function* () {
        var concept = yield _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_0__.LocalConceptsData.GetConceptByCharacter(characterValue);
        return concept;
    });
}


/***/ }),

/***/ "./src/Services/Local/MakeTheConceptLocal.ts":
/*!***************************************************!*\
  !*** ./src/Services/Local/MakeTheConceptLocal.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MakeTheConceptLocal)
/* harmony export */ });
/* harmony import */ var _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DataStructures/Local/LocalConceptData */ "./src/DataStructures/Local/LocalConceptData.ts");
/* harmony import */ var _CreateTheConceptLocal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateTheConceptLocal */ "./src/Services/Local/CreateTheConceptLocal.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function MakeTheConceptLocal(referent, userId, categoryId, categoryUserId, typeId, typeUserId, referentId, referentUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId) {
    return __awaiter(this, void 0, void 0, function* () {
        var conceptString = yield _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_0__.LocalConceptsData.GetConceptByCharacterAndTypeLocal(referent, typeId);
        var concept = conceptString;
        if (concept.id == 0) {
            conceptString = yield (0,_CreateTheConceptLocal__WEBPACK_IMPORTED_MODULE_1__["default"])(referent, userId, categoryId, categoryUserId, typeId, typeUserId, referentId, referentUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId);
            concept = conceptString;
        }
        return concept;
    });
}


/***/ }),

/***/ "./src/Services/Local/MakeTheInstanceConceptLocal.ts":
/*!***********************************************************!*\
  !*** ./src/Services/Local/MakeTheInstanceConceptLocal.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MakeTheInstanceConceptLocal: () => (/* binding */ MakeTheInstanceConceptLocal)
/* harmony export */ });
/* harmony import */ var _Api_Create_CreateTheTextData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Api/Create/CreateTheTextData */ "./src/Api/Create/CreateTheTextData.ts");
/* harmony import */ var _DataStructures_TheTexts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../DataStructures/TheTexts */ "./src/DataStructures/TheTexts.ts");
/* harmony import */ var _CreateTheConcept__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CreateTheConcept */ "./src/Services/CreateTheConcept.ts");
/* harmony import */ var _CreateTheConceptLocal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CreateTheConceptLocal */ "./src/Services/Local/CreateTheConceptLocal.ts");
/* harmony import */ var _MakeTheTypeLocal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MakeTheTypeLocal */ "./src/Services/Local/MakeTheTypeLocal.ts");
/* harmony import */ var _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../DataStructures/Local/LocalConceptData */ "./src/DataStructures/Local/LocalConceptData.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






function MakeTheInstanceConceptLocal(type, referent, composition = false, userId, accessId, sessionInformationId = 999) {
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
            var typeConceptString = yield (0,_MakeTheTypeLocal__WEBPACK_IMPORTED_MODULE_4__["default"])(type, sessionInformationId, userId, userId);
            typeConcept = typeConceptString;
            var conceptString = yield (0,_CreateTheConceptLocal__WEBPACK_IMPORTED_MODULE_3__["default"])(referent, userId, categoryId, userId, typeConcept.id, typeConcept.userId, referentId, referentUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId);
            concept = conceptString;
        }
        else if (stringLength > 255) {
            var typeConceptString = yield (0,_MakeTheTypeLocal__WEBPACK_IMPORTED_MODULE_4__["default"])(stringToCheck, sessionInformationId, sessionInformationUserId, userId);
            typeConcept = typeConceptString;
            var conceptString = yield (0,_CreateTheConcept__WEBPACK_IMPORTED_MODULE_2__["default"])(referent, userId, categoryId, userId, typeConcept.id, typeConcept.userId, referentId, referentUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId);
            concept = conceptString;
            var TheTextsData = new _DataStructures_TheTexts__WEBPACK_IMPORTED_MODULE_1__.TheTexts(userId, referent, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId, Date.now().toString(), true);
            var TextDataString = yield (0,_Api_Create_CreateTheTextData__WEBPACK_IMPORTED_MODULE_0__.CreateTextData)(TheTextsData);
            var TextData = TextDataString;
        }
        else {
            var typeConceptString = yield (0,_MakeTheTypeLocal__WEBPACK_IMPORTED_MODULE_4__["default"])(stringToCheck, sessionInformationId, sessionInformationUserId, userId);
            typeConcept = typeConceptString;
            var conceptByCharTypeString = yield _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_5__.LocalConceptsData.GetConceptByCharacterAndTypeLocal(referent, typeConcept.id);
            var conceptTypeCharacter = conceptByCharTypeString;
            // var makeTheNameString = await MakeTheName(referent,userId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId,typeConcept.id, typeConcept.userId,conceptTypeCharacter );
            // var makeTheNameConcept = makeTheNameString as Concept;
            concept = conceptTypeCharacter;
            if (conceptTypeCharacter.id == 0 && conceptTypeCharacter.userId == 0) {
                var conceptString = yield (0,_CreateTheConceptLocal__WEBPACK_IMPORTED_MODULE_3__["default"])(referent, userId, categoryId, userId, typeConcept.id, typeConcept.userId, 0, 0, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId);
                concept = conceptString;
            }
        }
        concept.type = typeConcept;
        return concept;
    });
}


/***/ }),

/***/ "./src/Services/Local/MakeTheTypeLocal.ts":
/*!************************************************!*\
  !*** ./src/Services/Local/MakeTheTypeLocal.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MakeTheTypeConceptLocal)
/* harmony export */ });
/* harmony import */ var _CreateTheConceptLocal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateTheConceptLocal */ "./src/Services/Local/CreateTheConceptLocal.ts");
/* harmony import */ var _GetConceptByCharacterLocal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GetConceptByCharacterLocal */ "./src/Services/Local/GetConceptByCharacterLocal.ts");
/* harmony import */ var _SplitStrings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SplitStrings */ "./src/Services/SplitStrings.ts");
/* harmony import */ var _MakeTheConceptLocal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MakeTheConceptLocal */ "./src/Services/Local/MakeTheConceptLocal.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




function MakeTheTypeConceptLocal(typeString, sessionId, sessionUserId, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        var referentId = 999;
        var securityId = 999;
        var sessionInformationUserId = 999;
        var accessId = 999;
        var securityUserId = userId;
        var accessUserId = userId;
        var categoryUserId = userId;
        var securityUserId = userId;
        var existingConcept = yield (0,_GetConceptByCharacterLocal__WEBPACK_IMPORTED_MODULE_1__["default"])(typeString);
        console.log("existing here", typeString);
        console.log(existingConcept);
        if (existingConcept) {
            if (existingConcept.id == 0 || existingConcept.userId == 0) {
                var splittedStringArray = (0,_SplitStrings__WEBPACK_IMPORTED_MODULE_2__.SplitStrings)(typeString);
                if (splittedStringArray[0] == typeString) {
                    var concept = yield (0,_MakeTheConceptLocal__WEBPACK_IMPORTED_MODULE_3__["default"])(typeString, userId, 4, userId, 51, userId, referentId, userId, securityId, userId, accessId, userId, sessionId, userId);
                    existingConcept = concept;
                }
                else {
                    var categoryId = 1;
                    var categoryConcept = MakeTheTypeConceptLocal(splittedStringArray[0], sessionId, sessionUserId, userId);
                    var typeConcept = yield MakeTheTypeConceptLocal(splittedStringArray[1], sessionId, sessionUserId, userId);
                    if (typeConcept) {
                        var concept = yield (0,_CreateTheConceptLocal__WEBPACK_IMPORTED_MODULE_0__["default"])(typeString, userId, categoryId, userId, typeConcept.id, userId, referentId, userId, securityId, userId, accessId, userId, sessionId, userId);
                        existingConcept = concept;
                    }
                }
            }
        }
        return existingConcept;
    });
}


/***/ }),

/***/ "./src/Services/MakeTheCharacter.ts":
/*!******************************************!*\
  !*** ./src/Services/MakeTheCharacter.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MakeTheCharacter)
/* harmony export */ });
/* harmony import */ var _MakeTheCharacterData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MakeTheCharacterData */ "./src/Services/MakeTheCharacterData.ts");
/* harmony import */ var _MakeTheConcept__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MakeTheConcept */ "./src/Services/MakeTheConcept.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


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
        var referentUserId = userId;
        var lengthOfCharacters = the_character_data.length;
        var concept;
        if (lengthOfCharacters == 1) {
            var referentId = the_character_data.charCodeAt(0);
            var typeIdForCharacter = 49;
            var characterDataString = yield (0,_MakeTheCharacterData__WEBPACK_IMPORTED_MODULE_0__["default"])(the_character_data, userId, securityId, accessId, sessionId);
            concept = (0,_MakeTheConcept__WEBPACK_IMPORTED_MODULE_1__["default"])(the_character_data, userId, categoryId, categoryUserId, referentId, referentUserId, typeIdForCharacter, typeUserId, securityId, securityUserId, accessId, accessUserId, sessionId, sessionUserId);
        }
        else {
            var characterDataString = yield (0,_MakeTheCharacterData__WEBPACK_IMPORTED_MODULE_0__["default"])(the_character_data, userId, securityId, accessId, sessionId);
            var characterData = characterDataString;
            if (characterData.isNew) {
                var conceptString = yield (0,_MakeTheConcept__WEBPACK_IMPORTED_MODULE_1__["default"])(the_character_data, userId, categoryId, categoryUserId, typeId, typeUserId, characterData.id, characterData.userId, securityId, securityUserId, accessId, accessUserId, sessionId, sessionUserId);
                concept = conceptString;
            }
            else {
                var conceptString = yield (0,_MakeTheConcept__WEBPACK_IMPORTED_MODULE_1__["default"])(the_character_data, userId, categoryId, categoryUserId, typeId, typeUserId, characterData.id, characterData.userId, securityId, securityUserId, accessId, accessUserId, sessionId, sessionUserId);
                concept = conceptString;
            }
        }
        return concept;
    });
}


/***/ }),

/***/ "./src/Services/MakeTheCharacterData.ts":
/*!**********************************************!*\
  !*** ./src/Services/MakeTheCharacterData.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MakeTheCharacterData)
/* harmony export */ });
/* harmony import */ var _Api_Create_CreateTheCharacter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Api/Create/CreateTheCharacter */ "./src/Api/Create/CreateTheCharacter.ts");
/* harmony import */ var _DataStructures_TheCharacter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataStructures/TheCharacter */ "./src/DataStructures/TheCharacter.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function MakeTheCharacterData(the_character_data, userId, securityId, accessId, sessionId) {
    return __awaiter(this, void 0, void 0, function* () {
        var categoryUserId = userId;
        var accessUserId = userId;
        var securityUserId = userId;
        var sessionInformationUserId = userId;
        var theCharacter = new _DataStructures_TheCharacter__WEBPACK_IMPORTED_MODULE_1__.TheCharacter(userId, the_character_data, securityId, securityUserId, accessId, accessUserId, sessionId, sessionInformationUserId, "", false);
        var output = yield (0,_Api_Create_CreateTheCharacter__WEBPACK_IMPORTED_MODULE_0__.CreateTheCharacter)(theCharacter);
        var returner = output;
        return returner;
    });
}


/***/ }),

/***/ "./src/Services/MakeTheConcept.ts":
/*!****************************************!*\
  !*** ./src/Services/MakeTheConcept.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MakeTheConcept)
/* harmony export */ });
/* harmony import */ var _Api_GetConceptByCharacterAndType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Api/GetConceptByCharacterAndType */ "./src/Api/GetConceptByCharacterAndType.ts");
/* harmony import */ var _CreateTheConcept__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateTheConcept */ "./src/Services/CreateTheConcept.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function MakeTheConcept(referent, userId, categoryId, categoryUserId, typeId, typeUserId, referentId, referentUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId) {
    return __awaiter(this, void 0, void 0, function* () {
        var conceptString = yield (0,_Api_GetConceptByCharacterAndType__WEBPACK_IMPORTED_MODULE_0__.GetConceptByCharacterAndType)(referent, typeId);
        var concept = conceptString;
        if (concept.id == 0) {
            conceptString = yield (0,_CreateTheConcept__WEBPACK_IMPORTED_MODULE_1__["default"])(referent, userId, categoryId, categoryUserId, typeId, typeUserId, referentId, referentUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId);
            concept = conceptString;
        }
        return concept;
    });
}


/***/ }),

/***/ "./src/Services/MakeTheInstanceConcept.ts":
/*!************************************************!*\
  !*** ./src/Services/MakeTheInstanceConcept.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MakeTheInstanceConcept)
/* harmony export */ });
/* harmony import */ var _Api_Create_CreateTheTextData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Api/Create/CreateTheTextData */ "./src/Api/Create/CreateTheTextData.ts");
/* harmony import */ var _Api_GetConceptByCharacterAndType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Api/GetConceptByCharacterAndType */ "./src/Api/GetConceptByCharacterAndType.ts");
/* harmony import */ var _DataStructures_Concept__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DataStructures/Concept */ "./src/DataStructures/Concept.ts");
/* harmony import */ var _DataStructures_TheTexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DataStructures/TheTexts */ "./src/DataStructures/TheTexts.ts");
/* harmony import */ var _CreateTheConcept__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CreateTheConcept */ "./src/Services/CreateTheConcept.ts");
/* harmony import */ var _MakeTheName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MakeTheName */ "./src/Services/MakeTheName.ts");
/* harmony import */ var _MakeTheTypeConcept__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MakeTheTypeConcept */ "./src/Services/MakeTheTypeConcept.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







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
        var typeConcept = new _DataStructures_Concept__WEBPACK_IMPORTED_MODULE_2__.Concept(0, 0, 0, 0, 0, 0, 0, 0, "0", 0, 0, 0, 0, 0, 0, false);
        var concept;
        var startsWithThe = type.startsWith("the_");
        if (startsWithThe) {
            stringToCheck = type;
        }
        else {
            stringToCheck = "the_" + type;
        }
        if (composition) {
            var typeConceptString = yield (0,_MakeTheTypeConcept__WEBPACK_IMPORTED_MODULE_6__["default"])(type, sessionInformationId, userId, userId);
            typeConcept = typeConceptString;
            console.log("For compsosition", typeConcept);
            var conceptString = yield (0,_CreateTheConcept__WEBPACK_IMPORTED_MODULE_4__["default"])(referent, userId, categoryId, userId, typeConcept.id, typeConcept.userId, referentId, referentUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId);
            concept = conceptString;
        }
        else if (stringLength > 255) {
            var typeConceptString = yield (0,_MakeTheTypeConcept__WEBPACK_IMPORTED_MODULE_6__["default"])(stringToCheck, sessionInformationId, sessionInformationUserId, userId);
            typeConcept = typeConceptString;
            var conceptString = yield (0,_CreateTheConcept__WEBPACK_IMPORTED_MODULE_4__["default"])(referent, userId, categoryId, userId, typeConcept.id, typeConcept.userId, referentId, referentUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId);
            concept = conceptString;
            var TheTextsData = new _DataStructures_TheTexts__WEBPACK_IMPORTED_MODULE_3__.TheTexts(userId, referent, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId, Date.now().toString(), true);
            var TextDataString = yield (0,_Api_Create_CreateTheTextData__WEBPACK_IMPORTED_MODULE_0__.CreateTextData)(TheTextsData);
            var TextData = TextDataString;
        }
        else {
            var typeConceptString = yield (0,_MakeTheTypeConcept__WEBPACK_IMPORTED_MODULE_6__["default"])(stringToCheck, sessionInformationId, sessionInformationUserId, userId);
            typeConcept = typeConceptString;
            var conceptByCharTypeString = yield (0,_Api_GetConceptByCharacterAndType__WEBPACK_IMPORTED_MODULE_1__.GetConceptByCharacterAndType)(referent, typeConcept.id);
            var conceptTypeCharacter = conceptByCharTypeString;
            var makeTheNameString = yield (0,_MakeTheName__WEBPACK_IMPORTED_MODULE_5__.MakeTheName)(referent, userId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId, typeConcept.id, typeConcept.userId, conceptTypeCharacter);
            var makeTheNameConcept = makeTheNameString;
            concept = conceptTypeCharacter;
            if (conceptTypeCharacter.id == 0 && conceptTypeCharacter.userId == 0) {
                var conceptString = yield (0,_CreateTheConcept__WEBPACK_IMPORTED_MODULE_4__["default"])(referent, userId, categoryId, userId, typeConcept.id, typeConcept.userId, makeTheNameConcept.id, makeTheNameConcept.userId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId);
                concept = conceptString;
            }
        }
        // if(concept){
        //     if(concept.type == null){
        //         var conceptType = ConceptsData.GetConcept(concept.typeId);
        //         if(conceptType == null && concept.typeId != null && concept.typeId != undefined){
        //             var typeConceptStringNew = await GetConcept(concept.typeId);
        //             var newTypeConcept = typeConceptStringNew as Concept;
        //             concept.type = newTypeConcept;
        //         }
        //     }
        // }
        concept.type = typeConcept;
        console.log("this is the concept returned by make the instance concept", concept);
        return concept;
    });
}


/***/ }),

/***/ "./src/Services/MakeTheName.ts":
/*!*************************************!*\
  !*** ./src/Services/MakeTheName.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MakeTheName: () => (/* binding */ MakeTheName)
/* harmony export */ });
/* harmony import */ var _GetTheReferent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GetTheReferent */ "./src/Services/GetTheReferent.ts");
/* harmony import */ var _MakeTheCharacter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MakeTheCharacter */ "./src/Services/MakeTheCharacter.ts");
/* harmony import */ var _MakeTheConcept__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MakeTheConcept */ "./src/Services/MakeTheConcept.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function MakeTheName(theCharacterData, userId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId, typeId, typeUserId, existingConcept) {
    var accessId, accessUserId;
    return __awaiter(this, void 0, void 0, function* () {
        var nameTypeId = 12;
        var categoryId = 4;
        var sessionId = sessionInformationId !== null && sessionInformationId !== void 0 ? sessionInformationId : 999;
        var sessionUserId = sessionInformationUserId !== null && sessionInformationUserId !== void 0 ? sessionInformationUserId : 999;
        accessId = accessId !== null && accessId !== void 0 ? accessId : 4;
        accessUserId = accessUserId !== null && accessUserId !== void 0 ? accessUserId : 999;
        var categoryUserId = 999;
        var referentInfo;
        var characterConcept;
        if (existingConcept.id > 0 && existingConcept.userId > 0) {
            characterConcept = yield (0,_GetTheReferent__WEBPACK_IMPORTED_MODULE_0__["default"])(existingConcept.id, existingConcept.userId, existingConcept.referent);
        }
        else {
            characterConcept = (yield (0,_MakeTheCharacter__WEBPACK_IMPORTED_MODULE_1__["default"])(theCharacterData, userId, securityId, accessId, accessUserId, sessionId));
            existingConcept = yield (0,_MakeTheConcept__WEBPACK_IMPORTED_MODULE_2__["default"])(theCharacterData, userId, categoryId, categoryUserId, nameTypeId, typeUserId, characterConcept.id, characterConcept.userId, securityId, securityUserId, accessId, accessUserId, sessionId, sessionUserId);
        }
        return existingConcept;
    });
}


/***/ }),

/***/ "./src/Services/MakeTheTypeConcept.ts":
/*!********************************************!*\
  !*** ./src/Services/MakeTheTypeConcept.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MakeTheTypeConcept)
/* harmony export */ });
/* harmony import */ var _CreateTheConcept__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateTheConcept */ "./src/Services/CreateTheConcept.ts");
/* harmony import */ var _GetConceptByCharacter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GetConceptByCharacter */ "./src/Services/GetConceptByCharacter.ts");
/* harmony import */ var _MakeTheCharacter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MakeTheCharacter */ "./src/Services/MakeTheCharacter.ts");
/* harmony import */ var _SplitStrings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SplitStrings */ "./src/Services/SplitStrings.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




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
        var existingConcept = yield (0,_GetConceptByCharacter__WEBPACK_IMPORTED_MODULE_1__["default"])(typeString);
        if (existingConcept) {
            if (existingConcept.id == 0 || existingConcept.userId == 0) {
                var splittedStringArray = (0,_SplitStrings__WEBPACK_IMPORTED_MODULE_3__.SplitStrings)(typeString);
                if (splittedStringArray[0] == typeString) {
                    var conceptString = yield (0,_MakeTheCharacter__WEBPACK_IMPORTED_MODULE_2__["default"])(typeString, userId, securityId, accessId, accessUserId, sessionId);
                    existingConcept = conceptString;
                }
                else {
                    var categoryId = 1;
                    var categoryConcept = MakeTheTypeConcept(splittedStringArray[0], sessionId, sessionUserId, userId);
                    var typeConcept = yield MakeTheTypeConcept(splittedStringArray[1], sessionId, sessionUserId, userId);
                    if (typeConcept) {
                        var concept = yield (0,_CreateTheConcept__WEBPACK_IMPORTED_MODULE_0__["default"])(typeString, userId, categoryId, userId, typeConcept.id, userId, referentId, userId, securityId, userId, accessId, userId, sessionId, userId);
                        existingConcept = concept;
                    }
                }
            }
        }
        return existingConcept;
    });
}


/***/ }),

/***/ "./src/Services/SplitStrings.ts":
/*!**************************************!*\
  !*** ./src/Services/SplitStrings.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SplitStrings: () => (/* binding */ SplitStrings)
/* harmony export */ });
function SplitStrings(typeString) {
    const SplittedStrings = typeString.split("_");
    return SplittedStrings;
}


/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Concept: () => (/* reexport safe */ _DataStructures_Concept__WEBPACK_IMPORTED_MODULE_19__.Concept),
/* harmony export */   ConceptsData: () => (/* reexport safe */ _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_20__.ConceptsData),
/* harmony export */   CreateComposition: () => (/* reexport safe */ _Services_CreateTheComposition__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   CreateConnectionBetweenTwoConcepts: () => (/* reexport safe */ _Services_CreateConnectionBetweenTwoConcepts__WEBPACK_IMPORTED_MODULE_10__.CreateConnectionBetweenTwoConcepts),
/* harmony export */   CreateTheCompositionLocal: () => (/* reexport safe */ _Services_Local_CreateTheCompositionLocal__WEBPACK_IMPORTED_MODULE_9__.CreateTheCompositionLocal),
/* harmony export */   CreateTheConnection: () => (/* reexport safe */ _Services_CreateTheConnection__WEBPACK_IMPORTED_MODULE_15__["default"]),
/* harmony export */   GetComposition: () => (/* reexport safe */ _Services_GetComposition__WEBPACK_IMPORTED_MODULE_6__.GetComposition),
/* harmony export */   GetCompositionList: () => (/* reexport safe */ _Services_GetCompositionList__WEBPACK_IMPORTED_MODULE_4__.GetCompositionList),
/* harmony export */   GetCompositionListLocal: () => (/* reexport safe */ _Services_Local_GetCompositionListLocal__WEBPACK_IMPORTED_MODULE_5__.GetCompositionListLocal),
/* harmony export */   GetCompositionListLocalWithId: () => (/* reexport safe */ _Services_Local_GetCompositionListLocal__WEBPACK_IMPORTED_MODULE_5__.GetCompositionListLocalWithId),
/* harmony export */   GetCompositionListWithId: () => (/* reexport safe */ _Services_GetCompositionList__WEBPACK_IMPORTED_MODULE_4__.GetCompositionListWithId),
/* harmony export */   GetCompositionLocal: () => (/* reexport safe */ _Services_Local_GetCompositionLocal__WEBPACK_IMPORTED_MODULE_7__.GetCompositionLocal),
/* harmony export */   GetCompositionLocalWithId: () => (/* reexport safe */ _Services_Local_GetCompositionLocal__WEBPACK_IMPORTED_MODULE_7__.GetCompositionLocalWithId),
/* harmony export */   GetCompositionWithId: () => (/* reexport safe */ _Services_GetComposition__WEBPACK_IMPORTED_MODULE_6__.GetCompositionWithId),
/* harmony export */   GetConceptByCharacter: () => (/* reexport safe */ _Services_GetConceptByCharacter__WEBPACK_IMPORTED_MODULE_16__["default"]),
/* harmony export */   GetLink: () => (/* reexport safe */ _Services_GetLink__WEBPACK_IMPORTED_MODULE_17__.GetLink),
/* harmony export */   GetTheConcept: () => (/* reexport safe */ _Services_GetTheConcept__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   MakeTheInstanceConcept: () => (/* reexport safe */ _Services_MakeTheInstanceConcept__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   MakeTheInstanceConceptLocal: () => (/* reexport safe */ _Services_Local_MakeTheInstanceConceptLocal__WEBPACK_IMPORTED_MODULE_13__.MakeTheInstanceConceptLocal),
/* harmony export */   SplitStrings: () => (/* reexport safe */ _Services_SplitStrings__WEBPACK_IMPORTED_MODULE_3__.SplitStrings),
/* harmony export */   SyncData: () => (/* reexport safe */ _DataStructures_SyncData__WEBPACK_IMPORTED_MODULE_18__.SyncData),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getFromDatabase: () => (/* reexport safe */ _Database_indexeddb__WEBPACK_IMPORTED_MODULE_14__.getFromDatabase),
/* harmony export */   getFromDatabaseWithType: () => (/* reexport safe */ _Database_indexeddb__WEBPACK_IMPORTED_MODULE_14__.getFromDatabaseWithType),
/* harmony export */   getFromDatabaseWithTypeOld: () => (/* reexport safe */ _Database_indexeddb__WEBPACK_IMPORTED_MODULE_14__.getFromDatabaseWithTypeOld),
/* harmony export */   storeToDatabase: () => (/* reexport safe */ _Database_indexeddb__WEBPACK_IMPORTED_MODULE_14__.storeToDatabase)
/* harmony export */ });
/* harmony import */ var _Services_CreateBinaryTreeFromData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Services/CreateBinaryTreeFromData */ "./src/Services/CreateBinaryTreeFromData.ts");
/* harmony import */ var _Services_CreateCharacterBinaryTreeFromData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Services/CreateCharacterBinaryTreeFromData */ "./src/Services/CreateCharacterBinaryTreeFromData.ts");
/* harmony import */ var _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataStructures/IdentifierFlags */ "./src/DataStructures/IdentifierFlags.ts");
/* harmony import */ var _Services_SplitStrings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Services/SplitStrings */ "./src/Services/SplitStrings.ts");
/* harmony import */ var _Services_GetCompositionList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Services/GetCompositionList */ "./src/Services/GetCompositionList.ts");
/* harmony import */ var _Services_Local_GetCompositionListLocal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Services/Local/GetCompositionListLocal */ "./src/Services/Local/GetCompositionListLocal.ts");
/* harmony import */ var _Services_GetComposition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Services/GetComposition */ "./src/Services/GetComposition.ts");
/* harmony import */ var _Services_Local_GetCompositionLocal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Services/Local/GetCompositionLocal */ "./src/Services/Local/GetCompositionLocal.ts");
/* harmony import */ var _Services_CreateTheComposition__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Services/CreateTheComposition */ "./src/Services/CreateTheComposition.ts");
/* harmony import */ var _Services_Local_CreateTheCompositionLocal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Services/Local/CreateTheCompositionLocal */ "./src/Services/Local/CreateTheCompositionLocal.ts");
/* harmony import */ var _Services_CreateConnectionBetweenTwoConcepts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Services/CreateConnectionBetweenTwoConcepts */ "./src/Services/CreateConnectionBetweenTwoConcepts.ts");
/* harmony import */ var _Services_GetTheConcept__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Services/GetTheConcept */ "./src/Services/GetTheConcept.ts");
/* harmony import */ var _Services_MakeTheInstanceConcept__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Services/MakeTheInstanceConcept */ "./src/Services/MakeTheInstanceConcept.ts");
/* harmony import */ var _Services_Local_MakeTheInstanceConceptLocal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Services/Local/MakeTheInstanceConceptLocal */ "./src/Services/Local/MakeTheInstanceConceptLocal.ts");
/* harmony import */ var _Database_indexeddb__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Database/indexeddb */ "./src/Database/indexeddb.ts");
/* harmony import */ var _Services_CreateTheConnection__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Services/CreateTheConnection */ "./src/Services/CreateTheConnection.ts");
/* harmony import */ var _Services_GetConceptByCharacter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Services/GetConceptByCharacter */ "./src/Services/GetConceptByCharacter.ts");
/* harmony import */ var _Services_GetLink__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Services/GetLink */ "./src/Services/GetLink.ts");
/* harmony import */ var _DataStructures_SyncData__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./DataStructures/SyncData */ "./src/DataStructures/SyncData.ts");
/* harmony import */ var _DataStructures_Concept__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./DataStructures/Concept */ "./src/DataStructures/Concept.ts");
/* harmony import */ var _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./DataStructures/ConceptData */ "./src/DataStructures/ConceptData.ts");
/* harmony import */ var _Services_GetDataFromIndexDb__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Services/GetDataFromIndexDb */ "./src/Services/GetDataFromIndexDb.ts");
/* harmony import */ var _Services_Local_CreateLocalBinaryTreeFromData__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Services/Local/CreateLocalBinaryTreeFromData */ "./src/Services/Local/CreateLocalBinaryTreeFromData.ts");
/* harmony import */ var _Services_CreateTypeTreeFromData__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Services/CreateTypeTreeFromData */ "./src/Services/CreateTypeTreeFromData.ts");
/* harmony import */ var _Services_Local_CreateLocalCharacterBinaryTree__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Services/Local/CreateLocalCharacterBinaryTree */ "./src/Services/Local/CreateLocalCharacterBinaryTree.ts");
/* harmony import */ var _Services_Local_CreateLocalBinaryTypeTreeFromData__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Services/Local/CreateLocalBinaryTypeTreeFromData */ "./src/Services/Local/CreateLocalBinaryTypeTreeFromData.ts");
/* harmony import */ var _Services_InitializeSystem__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Services/InitializeSystem */ "./src/Services/InitializeSystem.ts");



























/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Services_InitializeSystem__WEBPACK_IMPORTED_MODULE_26__["default"]);
(0,_Services_InitializeSystem__WEBPACK_IMPORTED_MODULE_26__["default"])().then(() => {
    const start = new Date().getTime();
    (0,_Services_CreateBinaryTreeFromData__WEBPACK_IMPORTED_MODULE_0__["default"])().then(() => {
        _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_2__.IdentifierFlags.isDataLoaded = true;
    });
    (0,_Services_CreateCharacterBinaryTreeFromData__WEBPACK_IMPORTED_MODULE_1__.CreateCharacterBinaryTreeFromData)().then(() => {
        _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_2__.IdentifierFlags.isCharacterLoaded = true;
    });
    (0,_Services_CreateTypeTreeFromData__WEBPACK_IMPORTED_MODULE_23__.CreateTypeTreeFromData)().then(() => {
        _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_2__.IdentifierFlags.isTypeLoaded = true;
        let elapsed = new Date().getTime() - start;
        console.log("The time taken to prepare data is ", elapsed);
    });
    (0,_Services_Local_CreateLocalBinaryTreeFromData__WEBPACK_IMPORTED_MODULE_22__["default"])().then(() => {
        _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_2__.IdentifierFlags.isLocalDataLoaded = true;
        console.log("Data", _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_2__.IdentifierFlags.isLocalDataLoaded);
    });
    (0,_Services_Local_CreateLocalCharacterBinaryTree__WEBPACK_IMPORTED_MODULE_24__.CreateLocalCharacterBinaryTreeFromData)().then(() => {
        _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_2__.IdentifierFlags.isLocalCharacterLoaded = true;
        console.log("character", _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_2__.IdentifierFlags.isLocalCharacterLoaded);
    });
    (0,_Services_Local_CreateLocalBinaryTypeTreeFromData__WEBPACK_IMPORTED_MODULE_25__.CreateLocalBinaryTypeTreeFromData)().then(() => {
        _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_2__.IdentifierFlags.isLocalTypeLoaded = true;
        console.log("type", _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_2__.IdentifierFlags.isLocalTypeLoaded);
    });
    (0,_Services_GetDataFromIndexDb__WEBPACK_IMPORTED_MODULE_21__.GetDataFromIndexDbLocal)().then(() => {
        _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_2__.IdentifierFlags.isLocalConnectionLoaded = true;
    });
});
//  GetDataFromIndexDb(); 
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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UixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3pMQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BtZW50b3JmcmllbmRzL3RzY2NzLy4vc3JjL0FwaS9DcmVhdGUvQ3JlYXRlVGhlQ2hhcmFjdGVyLnRzIiwid2VicGFjazovL0BtZW50b3JmcmllbmRzL3RzY2NzLy4vc3JjL0FwaS9DcmVhdGUvQ3JlYXRlVGhlQ29uY2VwdEFwaS50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9BcGkvQ3JlYXRlL0NyZWF0ZVRoZUNvbm5lY3Rpb25BcGkudHMiLCJ3ZWJwYWNrOi8vQG1lbnRvcmZyaWVuZHMvdHNjY3MvLi9zcmMvQXBpL0NyZWF0ZS9DcmVhdGVUaGVUZXh0RGF0YS50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9BcGkvR2V0QWlEYXRhLnRzIiwid2VicGFjazovL0BtZW50b3JmcmllbmRzL3RzY2NzLy4vc3JjL0FwaS9HZXRBbGxDb25jZXB0c0J5VHlwZS50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9BcGkvR2V0QWxsQ29ubmVjdGlvbnNPZkNvbXBvc2l0aW9uLnRzIiwid2VicGFjazovL0BtZW50b3JmcmllbmRzL3RzY2NzLy4vc3JjL0FwaS9HZXRDb25jZXB0LnRzIiwid2VicGFjazovL0BtZW50b3JmcmllbmRzL3RzY2NzLy4vc3JjL0FwaS9HZXRDb25jZXB0QnlDaGFyYWN0ZXJBbmRUeXBlLnRzIiwid2VicGFjazovL0BtZW50b3JmcmllbmRzL3RzY2NzLy4vc3JjL0FwaS9HZXRDb25jZXB0QnlDaGFyYWN0ZXJWYWx1ZS50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9BcGkvR2V0Q29ubmVjdGlvbk9mVGhlQ29uY2VwdC50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9BcGkvR2V0UmVzZXJ2ZWRJZHMudHMiLCJ3ZWJwYWNrOi8vQG1lbnRvcmZyaWVuZHMvdHNjY3MvLi9zcmMvQ29uc3RhbnRzL0FwaUNvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9EYXRhU3RydWN0dXJlcy9CaW5hcnlDaGFyYWN0ZXJUcmVlLnRzIiwid2VicGFjazovL0BtZW50b3JmcmllbmRzL3RzY2NzLy4vc3JjL0RhdGFTdHJ1Y3R1cmVzL0JpbmFyeVRyZWUudHMiLCJ3ZWJwYWNrOi8vQG1lbnRvcmZyaWVuZHMvdHNjY3MvLi9zcmMvRGF0YVN0cnVjdHVyZXMvQmluYXJ5VHlwZVRyZWUudHMiLCJ3ZWJwYWNrOi8vQG1lbnRvcmZyaWVuZHMvdHNjY3MvLi9zcmMvRGF0YVN0cnVjdHVyZXMvQ2hhcmFjdGVyUmVwb3NpdG9yeS50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9EYXRhU3RydWN0dXJlcy9Db25jZXB0LnRzIiwid2VicGFjazovL0BtZW50b3JmcmllbmRzL3RzY2NzLy4vc3JjL0RhdGFTdHJ1Y3R1cmVzL0NvbmNlcHREYXRhLnRzIiwid2VicGFjazovL0BtZW50b3JmcmllbmRzL3RzY2NzLy4vc3JjL0RhdGFTdHJ1Y3R1cmVzL0Nvbm5lY3Rpb24udHMiLCJ3ZWJwYWNrOi8vQG1lbnRvcmZyaWVuZHMvdHNjY3MvLi9zcmMvRGF0YVN0cnVjdHVyZXMvQ29ubmVjdGlvbkRhdGEudHMiLCJ3ZWJwYWNrOi8vQG1lbnRvcmZyaWVuZHMvdHNjY3MvLi9zcmMvRGF0YVN0cnVjdHVyZXMvSWRlbnRpZmllckZsYWdzLnRzIiwid2VicGFjazovL0BtZW50b3JmcmllbmRzL3RzY2NzLy4vc3JjL0RhdGFTdHJ1Y3R1cmVzL0xvY2FsL0xvY2FsQmluYXJ5Q2hhcmFjdGVyVHJlZS50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9EYXRhU3RydWN0dXJlcy9Mb2NhbC9Mb2NhbEJpbmFyeVRyZWUudHMiLCJ3ZWJwYWNrOi8vQG1lbnRvcmZyaWVuZHMvdHNjY3MvLi9zcmMvRGF0YVN0cnVjdHVyZXMvTG9jYWwvTG9jYWxCaW5hcnlUeXBlVHJlZS50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9EYXRhU3RydWN0dXJlcy9Mb2NhbC9Mb2NhbENvbmNlcHREYXRhLnRzIiwid2VicGFjazovL0BtZW50b3JmcmllbmRzL3RzY2NzLy4vc3JjL0RhdGFTdHJ1Y3R1cmVzL0xvY2FsL0xvY2FsQ29ubmVjdGlvbkRhdGEudHMiLCJ3ZWJwYWNrOi8vQG1lbnRvcmZyaWVuZHMvdHNjY3MvLi9zcmMvRGF0YVN0cnVjdHVyZXMvTm9kZS50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9EYXRhU3RydWN0dXJlcy9SZXNlcnZlZElkcy50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9EYXRhU3RydWN0dXJlcy9SZXR1cm5lci50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9EYXRhU3RydWN0dXJlcy9TZXR0aW5nRGF0YS50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9EYXRhU3RydWN0dXJlcy9TZXR0aW5ncy50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9EYXRhU3RydWN0dXJlcy9TeW5jRGF0YS50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9EYXRhU3RydWN0dXJlcy9UaGVDaGFyYWN0ZXIudHMiLCJ3ZWJwYWNrOi8vQG1lbnRvcmZyaWVuZHMvdHNjY3MvLi9zcmMvRGF0YVN0cnVjdHVyZXMvVGhlVGV4dHMudHMiLCJ3ZWJwYWNrOi8vQG1lbnRvcmZyaWVuZHMvdHNjY3MvLi9zcmMvRGF0YWJhc2UvaW5kZXhkYmxvY2FsLnRzIiwid2VicGFjazovL0BtZW50b3JmcmllbmRzL3RzY2NzLy4vc3JjL0RhdGFiYXNlL2luZGV4ZWRkYi50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9TZXJ2aWNlcy9DcmVhdGVCaW5hcnlUcmVlRnJvbURhdGEudHMiLCJ3ZWJwYWNrOi8vQG1lbnRvcmZyaWVuZHMvdHNjY3MvLi9zcmMvU2VydmljZXMvQ3JlYXRlQ2hhcmFjdGVyQmluYXJ5VHJlZUZyb21EYXRhLnRzIiwid2VicGFjazovL0BtZW50b3JmcmllbmRzL3RzY2NzLy4vc3JjL1NlcnZpY2VzL0NyZWF0ZUNvbm5lY3Rpb25CZXR3ZWVuVHdvQ29uY2VwdHMudHMiLCJ3ZWJwYWNrOi8vQG1lbnRvcmZyaWVuZHMvdHNjY3MvLi9zcmMvU2VydmljZXMvQ3JlYXRlVGhlQ29tcG9zaXRpb24udHMiLCJ3ZWJwYWNrOi8vQG1lbnRvcmZyaWVuZHMvdHNjY3MvLi9zcmMvU2VydmljZXMvQ3JlYXRlVGhlQ29uY2VwdC50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9TZXJ2aWNlcy9DcmVhdGVUaGVDb25uZWN0aW9uLnRzIiwid2VicGFjazovL0BtZW50b3JmcmllbmRzL3RzY2NzLy4vc3JjL1NlcnZpY2VzL0NyZWF0ZVR5cGVUcmVlRnJvbURhdGEudHMiLCJ3ZWJwYWNrOi8vQG1lbnRvcmZyaWVuZHMvdHNjY3MvLi9zcmMvU2VydmljZXMvR2V0Q29tcG9zaXRpb24udHMiLCJ3ZWJwYWNrOi8vQG1lbnRvcmZyaWVuZHMvdHNjY3MvLi9zcmMvU2VydmljZXMvR2V0Q29tcG9zaXRpb25MaXN0LnRzIiwid2VicGFjazovL0BtZW50b3JmcmllbmRzL3RzY2NzLy4vc3JjL1NlcnZpY2VzL0dldENvbmNlcHRCeUNoYXJhY3Rlci50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9TZXJ2aWNlcy9HZXREYXRhRnJvbUluZGV4RGIudHMiLCJ3ZWJwYWNrOi8vQG1lbnRvcmZyaWVuZHMvdHNjY3MvLi9zcmMvU2VydmljZXMvR2V0TGluay50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9TZXJ2aWNlcy9HZXRUaGVDb25jZXB0LnRzIiwid2VicGFjazovL0BtZW50b3JmcmllbmRzL3RzY2NzLy4vc3JjL1NlcnZpY2VzL0dldFRoZVJlZmVyZW50LnRzIiwid2VicGFjazovL0BtZW50b3JmcmllbmRzL3RzY2NzLy4vc3JjL1NlcnZpY2VzL0luaXRpYWxpemVTeXN0ZW0udHMiLCJ3ZWJwYWNrOi8vQG1lbnRvcmZyaWVuZHMvdHNjY3MvLi9zcmMvU2VydmljZXMvTG9jYWwvQ3JlYXRlTG9jYWxCaW5hcnlUcmVlRnJvbURhdGEudHMiLCJ3ZWJwYWNrOi8vQG1lbnRvcmZyaWVuZHMvdHNjY3MvLi9zcmMvU2VydmljZXMvTG9jYWwvQ3JlYXRlTG9jYWxCaW5hcnlUeXBlVHJlZUZyb21EYXRhLnRzIiwid2VicGFjazovL0BtZW50b3JmcmllbmRzL3RzY2NzLy4vc3JjL1NlcnZpY2VzL0xvY2FsL0NyZWF0ZUxvY2FsQ2hhcmFjdGVyQmluYXJ5VHJlZS50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9TZXJ2aWNlcy9Mb2NhbC9DcmVhdGVUaGVDb21wb3NpdGlvbkxvY2FsLnRzIiwid2VicGFjazovL0BtZW50b3JmcmllbmRzL3RzY2NzLy4vc3JjL1NlcnZpY2VzL0xvY2FsL0NyZWF0ZVRoZUNvbmNlcHRMb2NhbC50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9TZXJ2aWNlcy9Mb2NhbC9DcmVhdGVUaGVDb25uZWN0aW9uTG9jYWwudHMiLCJ3ZWJwYWNrOi8vQG1lbnRvcmZyaWVuZHMvdHNjY3MvLi9zcmMvU2VydmljZXMvTG9jYWwvR2V0Q29tcG9zaXRpb25MaXN0TG9jYWwudHMiLCJ3ZWJwYWNrOi8vQG1lbnRvcmZyaWVuZHMvdHNjY3MvLi9zcmMvU2VydmljZXMvTG9jYWwvR2V0Q29tcG9zaXRpb25Mb2NhbC50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9TZXJ2aWNlcy9Mb2NhbC9HZXRDb25jZXB0QnlDaGFyYWN0ZXJMb2NhbC50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9TZXJ2aWNlcy9Mb2NhbC9NYWtlVGhlQ29uY2VwdExvY2FsLnRzIiwid2VicGFjazovL0BtZW50b3JmcmllbmRzL3RzY2NzLy4vc3JjL1NlcnZpY2VzL0xvY2FsL01ha2VUaGVJbnN0YW5jZUNvbmNlcHRMb2NhbC50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9TZXJ2aWNlcy9Mb2NhbC9NYWtlVGhlVHlwZUxvY2FsLnRzIiwid2VicGFjazovL0BtZW50b3JmcmllbmRzL3RzY2NzLy4vc3JjL1NlcnZpY2VzL01ha2VUaGVDaGFyYWN0ZXIudHMiLCJ3ZWJwYWNrOi8vQG1lbnRvcmZyaWVuZHMvdHNjY3MvLi9zcmMvU2VydmljZXMvTWFrZVRoZUNoYXJhY3RlckRhdGEudHMiLCJ3ZWJwYWNrOi8vQG1lbnRvcmZyaWVuZHMvdHNjY3MvLi9zcmMvU2VydmljZXMvTWFrZVRoZUNvbmNlcHQudHMiLCJ3ZWJwYWNrOi8vQG1lbnRvcmZyaWVuZHMvdHNjY3MvLi9zcmMvU2VydmljZXMvTWFrZVRoZUluc3RhbmNlQ29uY2VwdC50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9TZXJ2aWNlcy9NYWtlVGhlTmFtZS50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9TZXJ2aWNlcy9NYWtlVGhlVHlwZUNvbmNlcHQudHMiLCJ3ZWJwYWNrOi8vQG1lbnRvcmZyaWVuZHMvdHNjY3MvLi9zcmMvU2VydmljZXMvU3BsaXRTdHJpbmdzLnRzIiwid2VicGFjazovL0BtZW50b3JmcmllbmRzL3RzY2NzLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQG1lbnRvcmZyaWVuZHMvdHNjY3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0BtZW50b3JmcmllbmRzL3RzY2NzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vQG1lbnRvcmZyaWVuZHMvdHNjY3Mvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL0BtZW50b3JmcmllbmRzL3RzY2NzL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IENyZWF0ZVRoZUNoYXJhY3RlckRhdGFVcmwgfSBmcm9tIFwiLi4vLi4vQ29uc3RhbnRzL0FwaUNvbnN0YW50c1wiO1xuaW1wb3J0IHsgQ2hhcmFjdGVyUmVwb3NpdG9yeSB9IGZyb20gXCIuLi8uLi9EYXRhU3RydWN0dXJlcy9DaGFyYWN0ZXJSZXBvc2l0b3J5XCI7XG5pbXBvcnQgeyBSZXR1cm5lciB9IGZyb20gXCIuLi8uLi9EYXRhU3RydWN0dXJlcy9SZXR1cm5lclwiO1xuaW1wb3J0IHsgVGhlQ2hhcmFjdGVyIH0gZnJvbSBcIi4uLy4uL0RhdGFTdHJ1Y3R1cmVzL1RoZUNoYXJhY3RlclwiO1xuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZVRoZUNoYXJhY3RlcihjaGFyYWN0ZXJEYXRhKSB7XG4gICAgdmFyIGNoYXJhY3RlckRhdGE7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNoYXJhY3RlckRhdGEgPSBDaGFyYWN0ZXJSZXBvc2l0b3J5LkdldENoYXJhY3RlcihjaGFyYWN0ZXJEYXRhLmRhdGEpO1xuICAgICAgICAgICAgaWYgKGNoYXJhY3RlckRhdGEuaWQgPT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goQ3JlYXRlVGhlQ2hhcmFjdGVyRGF0YVVybCwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjaGFyYWN0ZXJEYXRhKSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdFN0cmluZyA9IHlpZWxkIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSByZXN1bHRTdHJpbmc7XG4gICAgICAgICAgICAgICAgdmFyIHNhdmluZ0NoYXJhY3RlciA9IG5ldyBUaGVDaGFyYWN0ZXIocmVzdWx0LnVzZXJJZCwgY2hhcmFjdGVyRGF0YS5kYXRhLCAwLCAwLCA0LCA0LCA5OTksIDk5OSwgXCJcIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHNhdmluZ0NoYXJhY3Rlci5pZCA9IHJlc3VsdC5pZDtcbiAgICAgICAgICAgICAgICBDaGFyYWN0ZXJSZXBvc2l0b3J5LkFkZENoYXJhY3RlcihzYXZpbmdDaGFyYWN0ZXIpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgcmV0dXJuaW5nRGF0YSA9IG5ldyBSZXR1cm5lcihjaGFyYWN0ZXJEYXRhLmlkLCBjaGFyYWN0ZXJEYXRhLnVzZXJJZCwgMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5pbmdEYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgbWVzc2FnZTogJywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndW5leHBlY3RlZCBlcnJvcjogJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgQ3JlYXRlVGhlQ29uY2VwdFVybCB9IGZyb20gXCIuLi8uLi9Db25zdGFudHMvQXBpQ29uc3RhbnRzXCI7XG5leHBvcnQgZnVuY3Rpb24gQ3JlYXRlVGhlQ29uY2VwdEFwaShjb25jZXB0RGF0YSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKENyZWF0ZVRoZUNvbmNlcHRVcmwsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNvbmNlcHREYXRhKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXN1bHRTdHJpbmcgPSB5aWVsZCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSByZXN1bHRTdHJpbmc7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgbWVzc2FnZTogJywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndW5leHBlY3RlZCBlcnJvcjogJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgQ3JlYXRlVGhlQ29ubmVjdGlvblVybCB9IGZyb20gXCIuLi8uLi9Db25zdGFudHMvQXBpQ29uc3RhbnRzXCI7XG5leHBvcnQgZnVuY3Rpb24gQ3JlYXRlVGhlQ29ubmVjdGlvbkFwaShjb25uZWN0aW9uRGF0YSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIganNvbkRhdGEgPSBKU09OLnN0cmluZ2lmeShjb25uZWN0aW9uRGF0YSk7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKENyZWF0ZVRoZUNvbm5lY3Rpb25VcmwsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IGpzb25EYXRhXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIG1lc3NhZ2U6ICcsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VuZXhwZWN0ZWQgZXJyb3I6ICcsIGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IENyZWF0ZVRoZVRleHREYXRhVXJsIH0gZnJvbSBcIi4uLy4uL0NvbnN0YW50cy9BcGlDb25zdGFudHNcIjtcbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVUZXh0RGF0YSh0ZXh0RGF0YSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKENyZWF0ZVRoZVRleHREYXRhVXJsLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0ZXh0RGF0YSksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzdWx0U3RyaW5nID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVzdWx0U3RyaW5nO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIG1lc3NhZ2U6ICcsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VuZXhwZWN0ZWQgZXJyb3I6ICcsIGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IENvbmNlcHRzRGF0YSB9IGZyb20gJy4uL0RhdGFTdHJ1Y3R1cmVzL0NvbmNlcHREYXRhJztcbmltcG9ydCB7IFB1cmdhdG9yeURhdGFiYXNlVXBkYXRlZCB9IGZyb20gJy4uL1NlcnZpY2VzL0luaXRpYWxpemVTeXN0ZW0nO1xuaW1wb3J0IHsgR2V0QWxsQWlEYXRhIH0gZnJvbSAnLi8uLi9Db25zdGFudHMvQXBpQ29uc3RhbnRzJztcbmV4cG9ydCBmdW5jdGlvbiBHZXRBaURhdGEoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKEdldEFsbEFpRGF0YSwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgQ29uY2VwdHNEYXRhLkFkZENvbmNlcHQocmVzdWx0W2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFB1cmdhdG9yeURhdGFiYXNlVXBkYXRlZCgpO1xuICAgICAgICAgICAgbGV0IGVsYXBzZWQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHN0YXJ0O1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGUgdGltZSB0YWtlbiBpcyBcIiwgZWxhcHNlZCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBtZXNzYWdlOiAnLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1bmV4cGVjdGVkIGVycm9yOiAnLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBDb25jZXB0c0RhdGEgfSBmcm9tIFwiLi8uLi9EYXRhU3RydWN0dXJlcy9Db25jZXB0RGF0YVwiO1xuaW1wb3J0IHsgR2V0QWxsQ29uY2VwdHNCeVR5cGVVcmwgfSBmcm9tICcuLy4uL0NvbnN0YW50cy9BcGlDb25zdGFudHMnO1xuZXhwb3J0IGZ1bmN0aW9uIEdldEFsbENvbmNlcHRzQnlUeXBlKHR5cGUsIHVzZXJJZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgdXJsZW5jb2RlZCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICAgICAgICAgIHVybGVuY29kZWQuYXBwZW5kKFwidHlwZVwiLCB0eXBlKTtcbiAgICAgICAgICAgIHVybGVuY29kZWQuYXBwZW5kKFwidXNlcl9pZFwiLCB1c2VySWQudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKEdldEFsbENvbmNlcHRzQnlUeXBlVXJsLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IHVybGVuY29kZWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIENvbmNlcHRzRGF0YS5BZGRDb25jZXB0KHJlc3VsdFtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFkZGVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgbWVzc2FnZTogJywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndW5leHBlY3RlZCBlcnJvcjogJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgQ29ubmVjdGlvbkRhdGEgfSBmcm9tICcuLi9EYXRhU3RydWN0dXJlcy9Db25uZWN0aW9uRGF0YSc7XG5pbXBvcnQgeyBHZXRBbGxDb25uZWN0aW9uc09mQ29tcG9zaXRpb25VcmwgfSBmcm9tICcuLy4uL0NvbnN0YW50cy9BcGlDb25zdGFudHMnO1xuZXhwb3J0IGZ1bmN0aW9uIEdldEFsbENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvbihjb21wb3NpdGlvbl9pZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBjb25uZWN0aW9uTGlzdCA9IFtdO1xuICAgICAgICBjb25uZWN0aW9uTGlzdCA9IENvbm5lY3Rpb25EYXRhLkdldENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvbkxvY2FsKGNvbXBvc2l0aW9uX2lkKTtcbiAgICAgICAgaWYgKGNvbm5lY3Rpb25MaXN0Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICB2YXIgY29ubmVjdGlvbkxpc3RTdHJpbmcgPSB5aWVsZCBHZXRBbGxDb25uZWN0aW9uc09mQ29tcG9zaXRpb25PbmxpbmUoY29tcG9zaXRpb25faWQpO1xuICAgICAgICAgICAgY29ubmVjdGlvbkxpc3QgPSBjb25uZWN0aW9uTGlzdFN0cmluZztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIEdldEFsbENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvbk9ubGluZShjb21wb3NpdGlvbl9pZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbm5lY3Rpb25MaXN0O1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIEdldEFsbENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvbk9ubGluZShjb21wb3NpdGlvbl9pZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgY29ubmVjdGlvbkxpc3QgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goR2V0QWxsQ29ubmVjdGlvbnNPZkNvbXBvc2l0aW9uVXJsLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IGBjb21wb3NpdGlvbl9pZD0ke2NvbXBvc2l0aW9uX2lkfWBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIENvbm5lY3Rpb25EYXRhLkFkZENvbm5lY3Rpb24ocmVzdWx0W2ldKTtcbiAgICAgICAgICAgICAgICBDb25uZWN0aW9uRGF0YS5BZGRUb0RpY3Rpb25hcnkocmVzdWx0W2ldKTtcbiAgICAgICAgICAgICAgICBjb25uZWN0aW9uTGlzdC5wdXNoKHJlc3VsdFtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29ubmVjdGlvbkxpc3Q7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBtZXNzYWdlOiAnLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1bmV4cGVjdGVkIGVycm9yOiAnLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBDb25jZXB0c0RhdGEgfSBmcm9tIFwiLi8uLi9EYXRhU3RydWN0dXJlcy9Db25jZXB0RGF0YVwiO1xuaW1wb3J0IHsgR2V0Q29uY2VwdFVybCB9IGZyb20gJy4vLi4vQ29uc3RhbnRzL0FwaUNvbnN0YW50cyc7XG5leHBvcnQgZnVuY3Rpb24gR2V0Q29uY2VwdChpZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgY29uY2VwdFVzZSA9IHlpZWxkIENvbmNlcHRzRGF0YS5HZXRDb25jZXB0KGlkKTtcbiAgICAgICAgICAgIGlmIChjb25jZXB0VXNlLmlkICE9IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29uY2VwdFVzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0dGluZyBkYXRhIGZyb20gb25saW5lXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goR2V0Q29uY2VwdFVybCwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IGBpZD0ke2lkfWBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmlkID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBDb25jZXB0c0RhdGEuQWRkQ29uY2VwdChyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIG1lc3NhZ2U6ICcsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VuZXhwZWN0ZWQgZXJyb3I6ICcsIGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IENvbmNlcHRzRGF0YSB9IGZyb20gXCIuLy4uL0RhdGFTdHJ1Y3R1cmVzL0NvbmNlcHREYXRhXCI7XG5pbXBvcnQgeyBHZXRDb25jZXB0QnlDaGFyYWN0ZXJBbmRUeXBlVXJsIH0gZnJvbSAnLi8uLi9Db25zdGFudHMvQXBpQ29uc3RhbnRzJztcbmV4cG9ydCBmdW5jdGlvbiBHZXRDb25jZXB0QnlDaGFyYWN0ZXJBbmRUeXBlKGNoYXJhY3RlclZhbHVlLCB0eXBlSWQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIGNvbmNlcHQgPSB5aWVsZCBDb25jZXB0c0RhdGEuR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyQW5kVHlwZUxvY2FsKGNoYXJhY3RlclZhbHVlLCB0eXBlSWQpO1xuICAgICAgICAgICAgaWYgKGNvbmNlcHQgPT0gbnVsbCB8fCBjb25jZXB0LmlkID09IDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvdWxkIG5vdCBmaW5kXCIpO1xuICAgICAgICAgICAgICAgIHZhciBqc29uID0ge1xuICAgICAgICAgICAgICAgICAgICAnY2hhcmFjdGVyX3ZhbHVlJzogYCR7Y2hhcmFjdGVyVmFsdWV9YCxcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGVfaWQnOiB0eXBlSWRcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHZhciB0b1NlbmRKc29uID0gSlNPTi5zdHJpbmdpZnkoanNvbik7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChHZXRDb25jZXB0QnlDaGFyYWN0ZXJBbmRUeXBlVXJsLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBib2R5OiB0b1NlbmRKc29uLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgY29uY2VwdCA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgICAgICAgICAgQ29uY2VwdHNEYXRhLkFkZENvbmNlcHQoY29uY2VwdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29uY2VwdDtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIG1lc3NhZ2U6ICcsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VuZXhwZWN0ZWQgZXJyb3I6ICcsIGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IENvbmNlcHRzRGF0YSB9IGZyb20gXCIuLy4uL0RhdGFTdHJ1Y3R1cmVzL0NvbmNlcHREYXRhXCI7XG5pbXBvcnQgeyBHZXRDb25jZXB0QnlDaGFyYWN0ZXJWYWx1ZVVybCB9IGZyb20gJy4vLi4vQ29uc3RhbnRzL0FwaUNvbnN0YW50cyc7XG5leHBvcnQgZnVuY3Rpb24gR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyVmFsdWUoY2hhcmFjdGVyVmFsdWUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChHZXRDb25jZXB0QnlDaGFyYWN0ZXJWYWx1ZVVybCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBgY2hhcmFjdGVyX3ZhbHVlPSR7Y2hhcmFjdGVyVmFsdWV9YFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmlkID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBDb25jZXB0c0RhdGEuQWRkQ29uY2VwdChyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIG1lc3NhZ2U6ICcsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VuZXhwZWN0ZWQgZXJyb3I6ICcsIGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IEdldEFsbENvbm5lY3Rpb25zT2ZDb25jZXB0VXJsIH0gZnJvbSAnLi8uLi9Db25zdGFudHMvQXBpQ29uc3RhbnRzJztcbmV4cG9ydCBmdW5jdGlvbiBHZXRDb25uZWN0aW9uT2ZUaGVDb25jZXB0KHR5cGVJZCwgb2ZUaGVDb25jZXB0SWQsIHVzZXJJZCwgaW5wYWdlID0gMTAsIHBhZ2UgPSAxKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciB1cmxlbmNvZGVkID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgICAgICAgICAgdXJsZW5jb2RlZC5hcHBlbmQoXCJ0eXBlSWRcIiwgYCR7dHlwZUlkfWApO1xuICAgICAgICAgICAgdXJsZW5jb2RlZC5hcHBlbmQoXCJvZlRoZUNvbmNlcHRJZFwiLCBgJHtvZlRoZUNvbmNlcHRJZH1gKTtcbiAgICAgICAgICAgIHVybGVuY29kZWQuYXBwZW5kKFwidXNlcklkXCIsIGAke3VzZXJJZH1gKTtcbiAgICAgICAgICAgIHVybGVuY29kZWQuYXBwZW5kKFwiaW5wYWdlXCIsIGAke2lucGFnZX1gKTtcbiAgICAgICAgICAgIHVybGVuY29kZWQuYXBwZW5kKFwicGFnZVwiLCBgJHtwYWdlfWApO1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChHZXRBbGxDb25uZWN0aW9uc09mQ29uY2VwdFVybCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiB1cmxlbmNvZGVkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIG1lc3NhZ2U6ICcsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VuZXhwZWN0ZWQgZXJyb3I6ICcsIGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IEdldFJlc2VydmVkSWRVcmwgfSBmcm9tICcuLy4uL0NvbnN0YW50cy9BcGlDb25zdGFudHMnO1xuaW1wb3J0IHsgUmVzZXJ2ZWRJZHMgfSBmcm9tIFwiLi4vRGF0YVN0cnVjdHVyZXMvUmVzZXJ2ZWRJZHNcIjtcbmV4cG9ydCBmdW5jdGlvbiBHZXRSZXNlcnZlZElkcygpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChHZXRSZXNlcnZlZElkVXJsLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBSZXNlcnZlZElkcy5BZGRJZChyZXN1bHRbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgbWVzc2FnZTogJywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndW5leHBlY3RlZCBlcnJvcjogJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImV4cG9ydCBjb25zdCBCQVNFX1VSTCA9IHByb2Nlc3MuZW52LkJBU0VfVVJMIHx8ICdodHRwczovL2RldmJvb20uZnJlZXNjaGVtYS5jb20nO1xuZXhwb3J0IGNvbnN0IEdldENvbmNlcHRVcmwgPSBCQVNFX1VSTCArICcvYXBpL2dldENvbmNlcHQnO1xuZXhwb3J0IGNvbnN0IEdldEFsbENvbmNlcHRzT2ZVc2VyVXJsID0gQkFTRV9VUkwgKyAnL2FwaS9nZXRfYWxsX2NvbmNlcHRzX29mX3VzZXInO1xuZXhwb3J0IGNvbnN0IEdldEFsbENvbm5lY3Rpb25zT2ZVc2VyVXJsID0gQkFTRV9VUkwgKyAnL2FwaS9nZXRfYWxsX2Nvbm5lY3Rpb25zX29mX3VzZXInO1xuZXhwb3J0IGNvbnN0IEdldEFsbENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvblVybCA9IEJBU0VfVVJMICsgJy9hcGkvZ2V0X2FsbF9jb25uZWN0aW9uc19vZl9jb21wb3NpdGlvbic7XG5leHBvcnQgY29uc3QgR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyVmFsdWVVcmwgPSBCQVNFX1VSTCArICcvYXBpL2dldF9jb25jZXB0X2J5X2NoYXJhY3Rlcl92YWx1ZSc7XG5leHBvcnQgY29uc3QgR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyQW5kVHlwZVVybCA9IEJBU0VfVVJMICsgJy9hcGkvZ2V0X2NvbmNlcHRfYnlfY2hhcmFjdGVyX2FuZF90eXBlJztcbmV4cG9ydCBjb25zdCBHZXRDaGFyYWN0ZXJCeUNoYXJhY3RlclVybCA9IEJBU0VfVVJMICsgJy9hcGkvZ2V0X2NoYXJhY3Rlcl9ieV9jaGFyYWN0ZXInO1xuZXhwb3J0IGNvbnN0IEdldEFsbENvbmNlcHRzQnlUeXBlVXJsID0gQkFTRV9VUkwgKyAnL2FwaS9nZXRfYWxsX2NvbmNlcHRzX2J5X3R5cGUnO1xuZXhwb3J0IGNvbnN0IEdldEFsbENvbm5lY3Rpb25zT2ZDb25jZXB0VXJsID0gQkFTRV9VUkwgKyAnL2FwaS9nZXQtbGluay1jb25uZWN0aW9ucyc7XG5leHBvcnQgY29uc3QgR2V0QWxsQWlEYXRhID0gcHJvY2Vzcy5lbnYuQUlfVVJMIHx8ICdodHRwczovL2RldmFpLmZyZWVzY2hlbWEuY29tL2FwaS9nZXRfcmFua2VkX3R5cGVfaWQ/aW5wYWdlPTUwMCc7XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8gQVBJIEZvciBSZXNlcnZlZCBJZHMgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5leHBvcnQgY29uc3QgR2V0UmVzZXJ2ZWRJZFVybCA9IEJBU0VfVVJMICsgJy9hcGkvZ2V0X3Jlc2VydmVkX2lkcyc7XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vL0FQSSBGb3IgQ3JlYXRpbmcgRGF0YSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuZXhwb3J0IGNvbnN0IENyZWF0ZVRoZVRleHREYXRhVXJsID0gQkFTRV9VUkwgKyAnL2FwaS9jcmVhdGVfdGV4dF9kYXRhJztcbmV4cG9ydCBjb25zdCBDcmVhdGVUaGVDaGFyYWN0ZXJEYXRhVXJsID0gQkFTRV9VUkwgKyAnL2FwaS9jcmVhdGVfY2hhcmFjdGVyX2RhdGEnO1xuZXhwb3J0IGNvbnN0IENyZWF0ZVRoZUNvbmNlcHRVcmwgPSBCQVNFX1VSTCArICcvYXBpL2NyZWF0ZV90aGVfY29uY2VwdCc7XG5leHBvcnQgY29uc3QgQ3JlYXRlVGhlQ29ubmVjdGlvblVybCA9IEJBU0VfVVJMICsgJy9hcGkvY3JlYXRlX3RoZV9jb25uZWN0aW9uJztcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgSWRlbnRpZmllckZsYWdzIH0gZnJvbSBcIi4vSWRlbnRpZmllckZsYWdzXCI7XG5pbXBvcnQgeyBOb2RlIH0gZnJvbSBcIi4vTm9kZVwiO1xuZXhwb3J0IGNsYXNzIEJpbmFyeUNoYXJhY3RlclRyZWUge1xuICAgIHN0YXRpYyB3YWl0Rm9yRGF0YVRvTG9hZCgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0ZsYWcocmVzb2x2ZSk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChcIm5vdFwiKTtcbiAgICAgICAgICAgICAgICB9LCAyNTAwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBjaGVja0ZsYWcocmVzb2x2ZSkge1xuICAgICAgICBpZiAoSWRlbnRpZmllckZsYWdzLmlzQ2hhcmFjdGVyTG9hZGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShcImRvbmVcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KEJpbmFyeUNoYXJhY3RlclRyZWUuY2hlY2tGbGFnLCAxMDAwLCByZXNvbHZlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICA7XG4gICAgc3RhdGljIGFkZE5vZGVUb1RyZWUobm9kZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hhcmFjdGVyUm9vdCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJSb290ID0gbm9kZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFyYWN0ZXJSb290O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJSb290ID0gdGhpcy5jaGFyYWN0ZXJSb290LmFkZENoYXJhY3Rlck5vZGUobm9kZSwgdGhpcy5jaGFyYWN0ZXJSb290LCB0aGlzLmNoYXJhY3RlclJvb3QuaGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYXJhY3RlclJvb3Q7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgYWRkQ29uY2VwdFRvVHJlZShjb25jZXB0KSB7XG4gICAgICAgIGlmIChjb25jZXB0LmNoYXJhY3RlclZhbHVlICE9IFwiXCIpIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gbmV3IE5vZGUoY29uY2VwdC5jaGFyYWN0ZXJWYWx1ZSwgY29uY2VwdCwgbnVsbCwgbnVsbCk7XG4gICAgICAgICAgICB0aGlzLmFkZE5vZGVUb1RyZWUobm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGdldE5vZGVGcm9tVHJlZSh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5jaGFyYWN0ZXJSb290KSB7XG4gICAgICAgICAgICB2YXIgTm9kZSA9IHRoaXMuY2hhcmFjdGVyUm9vdC5nZXRDaGFyYWN0ZXJGcm9tTm9kZSh2YWx1ZSwgdGhpcy5jaGFyYWN0ZXJSb290KTtcbiAgICAgICAgICAgIHJldHVybiBOb2RlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNoYXJhY3RlclJvb3Q7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRDaGFyYWN0ZXJBbmRUeXBlRnJvbVRyZWUodmFsdWUsIHR5cGVJZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHlpZWxkIHRoaXMud2FpdEZvckRhdGFUb0xvYWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmNoYXJhY3RlclJvb3QpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNlYXJjaGluZyAuLi4uLi4uLi4uLi4uLi4uLlwiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgdmFyIE5vZGUgPSB0aGlzLmNoYXJhY3RlclJvb3QuZ2V0RnJvbU5vZGVXaXRoQ2hhcmFjdGVyQW5kVHlwZSh2YWx1ZSwgdHlwZUlkLCB0aGlzLmNoYXJhY3RlclJvb3QpO1xuICAgICAgICAgICAgICAgIHJldHVybiBOb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhcmFjdGVyUm9vdDtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuQmluYXJ5Q2hhcmFjdGVyVHJlZS5jaGFyYWN0ZXJSb290ID0gbnVsbDtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgQmluYXJ5Q2hhcmFjdGVyVHJlZSB9IGZyb20gXCIuL0JpbmFyeUNoYXJhY3RlclRyZWVcIjtcbmltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi9Ob2RlXCI7XG5pbXBvcnQgeyBJZGVudGlmaWVyRmxhZ3MgfSBmcm9tIFwiLi9JZGVudGlmaWVyRmxhZ3NcIjtcbmV4cG9ydCBjbGFzcyBCaW5hcnlUcmVlIHtcbiAgICBzdGF0aWMgYWRkTm9kZVRvVHJlZShub2RlKSB7XG4gICAgICAgIGlmICh0aGlzLnJvb3QgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5yb290ID0gbm9kZTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJvb3Q7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJvb3QgPSB0aGlzLnJvb3QuYWRkTm9kZShub2RlLCB0aGlzLnJvb3QsIHRoaXMucm9vdC5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyB3YWl0Rm9yRGF0YVRvTG9hZCgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0ZsYWcocmVzb2x2ZSk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChcIm5vdFwiKTtcbiAgICAgICAgICAgICAgICB9LCAyNTAwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBjaGVja0ZsYWcocmVzb2x2ZSkge1xuICAgICAgICBpZiAoSWRlbnRpZmllckZsYWdzLmlzRGF0YUxvYWRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoXCJkb25lXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dChCaW5hcnlUcmVlLmNoZWNrRmxhZywgMTAwMCwgcmVzb2x2ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgO1xuICAgIHN0YXRpYyBhZGRDb25jZXB0VG9UcmVlKGNvbmNlcHQpIHtcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgTm9kZShjb25jZXB0LmlkLCBjb25jZXB0LCBudWxsLCBudWxsKTtcbiAgICAgICAgdmFyIGNoYXJhY3Rlck5vZGUgPSBuZXcgTm9kZShjb25jZXB0LmNoYXJhY3RlclZhbHVlLCBjb25jZXB0LCBudWxsLCBudWxsKTtcbiAgICAgICAgQmluYXJ5Q2hhcmFjdGVyVHJlZS5hZGROb2RlVG9UcmVlKGNoYXJhY3Rlck5vZGUpO1xuICAgICAgICB0aGlzLmFkZE5vZGVUb1RyZWUobm9kZSk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXROb2RlRnJvbVRyZWUoaWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB5aWVsZCB0aGlzLndhaXRGb3JEYXRhVG9Mb2FkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5yb290KSB7XG4gICAgICAgICAgICAgICAgdmFyIE5vZGUgPSB0aGlzLnJvb3QuZ2V0RnJvbU5vZGUoaWQsIHRoaXMucm9vdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yb290O1xuICAgICAgICB9KTtcbiAgICB9XG59XG5CaW5hcnlUcmVlLnJvb3QgPSBudWxsO1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBDb25jZXB0IH0gZnJvbSBcIi4uL0RhdGFTdHJ1Y3R1cmVzL0NvbmNlcHRcIjtcbmltcG9ydCB7IElkZW50aWZpZXJGbGFncyB9IGZyb20gXCIuL0lkZW50aWZpZXJGbGFnc1wiO1xuaW1wb3J0IHsgTm9kZSB9IGZyb20gXCIuL05vZGVcIjtcbmV4cG9ydCBjbGFzcyBCaW5hcnlUeXBlVHJlZSB7XG4gICAgc3RhdGljIGFkZE5vZGVUb1RyZWUobm9kZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudHlwZVJvb3QgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0eXBlIHJvb3QgXCIsIG5vZGUpO1xuICAgICAgICAgICAgICAgIHRoaXMudHlwZVJvb3QgPSBub2RlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnR5cGVSb290O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50eXBlUm9vdCA9IHRoaXMudHlwZVJvb3QuYWRkVHlwZU5vZGUobm9kZSwgdGhpcy50eXBlUm9vdCwgdGhpcy50eXBlUm9vdC5oZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHlwZVJvb3Q7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgYWRkQ29uY2VwdFRvVHJlZShjb25jZXB0KSB7XG4gICAgICAgIGlmIChjb25jZXB0LnR5cGVJZCAhPSAwKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IG5ldyBOb2RlKGNvbmNlcHQudHlwZUlkLCBjb25jZXB0LCBudWxsLCBudWxsKTtcbiAgICAgICAgICAgIHRoaXMuYWRkTm9kZVRvVHJlZShub2RlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgZ2V0Tm9kZUZyb21UcmVlKGlkKSB7XG4gICAgICAgIGlmICh0aGlzLnR5cGVSb290KSB7XG4gICAgICAgICAgICB2YXIgTm9kZSA9IHRoaXMudHlwZVJvb3QuZ2V0RnJvbU5vZGUoaWQsIHRoaXMudHlwZVJvb3QpO1xuICAgICAgICAgICAgcmV0dXJuIE5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZVJvb3Q7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRUeXBlVmFyaWFudHNGcm9tVHJlZSh0eXBlSWQpIHtcbiAgICAgICAgdmFyIE5vZGUgPSB0aGlzLmdldE5vZGVGcm9tVHJlZSh0eXBlSWQpO1xuICAgICAgICB2YXIgY29uY2VwdHMgPSBbXTtcbiAgICAgICAgaWYgKE5vZGUpIHtcbiAgICAgICAgICAgIGNvbmNlcHRzLnB1c2goTm9kZSA9PT0gbnVsbCB8fCBOb2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBOb2RlLnZhbHVlKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTm9kZS52YXJpYW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbmNlcHRzLnB1c2goTm9kZS52YXJpYW50c1tpXS52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29uY2VwdHM7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIHdhaXRGb3JEYXRhVG9Mb2FkKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRmxhZyhyZXNvbHZlKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwibm90XCIpO1xuICAgICAgICAgICAgICAgIH0sIDI1MDAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIGNoZWNrRmxhZyhyZXNvbHZlKSB7XG4gICAgICAgIGlmIChJZGVudGlmaWVyRmxhZ3MuaXNUeXBlTG9hZGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShcImRvbmVcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KEJpbmFyeVR5cGVUcmVlLmNoZWNrRmxhZywgMTAwMCwgcmVzb2x2ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgO1xuICAgIHN0YXRpYyBnZXRUeXBlVmFyaWFudHNGcm9tVHJlZVdpdGhVc2VySWQodHlwZUlkLCB1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHZhciBjb25jZXB0cyA9IFtdO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHlpZWxkIHRoaXMud2FpdEZvckRhdGFUb0xvYWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29uY2VwdHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgTm9kZSA9IHRoaXMuZ2V0Tm9kZUZyb21UcmVlKHR5cGVJZCk7XG4gICAgICAgICAgICBpZiAoTm9kZSkge1xuICAgICAgICAgICAgICAgIGlmIChOb2RlLnZhbHVlLnVzZXJJZCA9PSB1c2VySWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uY2VwdHMucHVzaChOb2RlID09PSBudWxsIHx8IE5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IE5vZGUudmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE5vZGUudmFyaWFudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKE5vZGUudmFyaWFudHNbaV0udmFsdWUudXNlcklkID09IHVzZXJJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uY2VwdHMucHVzaChOb2RlLnZhcmlhbnRzW2ldLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb25jZXB0cztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRUeXBlVmFyaWFudHNXaXRoQ2hhcmFjdGVyVmFsdWUoY2hhcmFjdGVyVmFsdWUsIHR5cGVJZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdmFyIGNvbmNlcHQgPSBuZXcgQ29uY2VwdCgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCBcIjBcIiwgMCwgMCwgMCwgMCwgMCwgMCwgZmFsc2UpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHlpZWxkIHRoaXMud2FpdEZvckRhdGFUb0xvYWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29uY2VwdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBOb2RlID0gdGhpcy5nZXROb2RlRnJvbVRyZWUodHlwZUlkKTtcbiAgICAgICAgICAgIGlmIChOb2RlKSB7XG4gICAgICAgICAgICAgICAgaWYgKE5vZGUudmFsdWUuY2hhcmFjdGVyVmFsdWUgPT0gY2hhcmFjdGVyVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uY2VwdCA9IE5vZGUudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTm9kZS52YXJpYW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoTm9kZS52YXJpYW50c1tpXS52YWx1ZS5jaGFyYWN0ZXJWYWx1ZSA9PSBjaGFyYWN0ZXJWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uY2VwdCA9IE5vZGUudmFyaWFudHNbaV0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29uY2VwdDtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuQmluYXJ5VHlwZVRyZWUudHlwZVJvb3QgPSBudWxsO1xuIiwiaW1wb3J0IHsgVGhlQ2hhcmFjdGVyIH0gZnJvbSBcIi4vVGhlQ2hhcmFjdGVyXCI7XG5leHBvcnQgY2xhc3MgQ2hhcmFjdGVyUmVwb3NpdG9yeSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiY2hhcmFjdGVyIFJlcG9zaXRvcnlcIjtcbiAgICB9XG4gICAgc3RhdGljIEFkZENoYXJhY3RlcihjaGFyYWN0ZXIpIHtcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJEYXRhW2NoYXJhY3Rlci5pZF0gPSBjaGFyYWN0ZXI7XG4gICAgfVxuICAgIHN0YXRpYyBHZXRDaGFyYWN0ZXIodmFsdWUpIHtcbiAgICAgICAgdmFyIHRoZUNoYXJhY3RlciA9IG5ldyBUaGVDaGFyYWN0ZXIoMCwgXCIwXCIsIDAsIDAsIDAsIDAsIDAsIDAsIFwiMFwiLCBmYWxzZSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGFyYWN0ZXJEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGFyYWN0ZXJEYXRhW2ldLmRhdGEgPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGVDaGFyYWN0ZXIgPSB0aGlzLmNoYXJhY3RlckRhdGFbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoZUNoYXJhY3RlcjtcbiAgICB9XG59XG5DaGFyYWN0ZXJSZXBvc2l0b3J5LmNoYXJhY3RlckRhdGEgPSBbXTtcbiIsImV4cG9ydCBjbGFzcyBDb25jZXB0IHtcbiAgICBjb25zdHJ1Y3RvcihpZCwgdXNlcklkLCB0eXBlSWQsIHR5cGVVc2VySWQsIGNhdGVnb3J5SWQsIGNhdGVnb3J5VXNlcklkLCByZWZlcmVudElkLCByZWZlcmVudFVzZXJJZCwgY2hhcmFjdGVyVmFsdWUsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSWQsIHNlc3Npb25Vc2VySWQsIGlzTmV3ID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5pc1RlbXAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdGhpcy50eXBlSWQgPSB0eXBlSWQ7XG4gICAgICAgIHRoaXMudHlwZVVzZXJJZCA9IHR5cGVVc2VySWQ7XG4gICAgICAgIHRoaXMuY2F0ZWdvcnlJZCA9IGNhdGVnb3J5SWQ7XG4gICAgICAgIHRoaXMuY2F0ZWdvcnlVc2VySWQgPSBjYXRlZ29yeVVzZXJJZDtcbiAgICAgICAgdGhpcy5yZWZlcmVudElkID0gcmVmZXJlbnRJZDtcbiAgICAgICAgdGhpcy5yZWZlcmVudCA9IHJlZmVyZW50SWQ7XG4gICAgICAgIHRoaXMucmVmZXJlbnRVc2VySWQgPSByZWZlcmVudFVzZXJJZDtcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJWYWx1ZSA9IGAke2NoYXJhY3RlclZhbHVlfWA7XG4gICAgICAgIHRoaXMuc2VjdXJpdHlJZCA9IHNlY3VyaXR5SWQ7XG4gICAgICAgIHRoaXMuc2VjdXJpdHlVc2VySWQgPSBzZWN1cml0eVVzZXJJZDtcbiAgICAgICAgdGhpcy5hY2Nlc3NJZCA9IGFjY2Vzc0lkO1xuICAgICAgICB0aGlzLmFjY2Vzc1VzZXJJZCA9IGFjY2Vzc1VzZXJJZDtcbiAgICAgICAgdGhpcy5zZXNzaW9uSWQgPSBzZXNzaW9uSWQ7XG4gICAgICAgIHRoaXMuc2Vzc2lvblVzZXJJZCA9IHNlc3Npb25Vc2VySWQ7XG4gICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIHRoaXMudHlwZSA9IG51bGw7XG4gICAgICAgIHRoaXMuaXNOZXcgPSBpc05ldztcbiAgICAgICAgLy8gQ29uY2VwdHNEYXRhLkFkZENvbmNlcHQodGhpcyk7XG4gICAgfVxuICAgIGdldFR5cGUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudHlwZUlkKTtcbiAgICB9XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IENvbmNlcHQgfSBmcm9tIFwiLi9Db25jZXB0XCI7XG5pbXBvcnQgeyByZW1vdmVGcm9tRGF0YWJhc2UsIHN0b3JlVG9EYXRhYmFzZSB9IGZyb20gXCIuLi9EYXRhYmFzZS9pbmRleGVkZGJcIjtcbmltcG9ydCB7IEJpbmFyeVRyZWUgfSBmcm9tIFwiLi9CaW5hcnlUcmVlXCI7XG5pbXBvcnQgeyBCaW5hcnlDaGFyYWN0ZXJUcmVlIH0gZnJvbSBcIi4vQmluYXJ5Q2hhcmFjdGVyVHJlZVwiO1xuaW1wb3J0IHsgQmluYXJ5VHlwZVRyZWUgfSBmcm9tIFwiLi9CaW5hcnlUeXBlVHJlZVwiO1xuZXhwb3J0IGNsYXNzIENvbmNlcHRzRGF0YSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiY29uY2VwdHNBcnJheVwiO1xuICAgIH1cbiAgICBzdGF0aWMgQ2hlY2tDb250YWlucyhjb25jZXB0KSB7XG4gICAgICAgIHZhciBjb250YWlucyA9IGZhbHNlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29uY2VwdHNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29uY2VwdHNBcnJheVtpXS5pZCA9PSBjb25jZXB0LmlkKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbnMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250YWlucztcbiAgICB9XG4gICAgc3RhdGljIEFkZENvbmNlcHQoY29uY2VwdCkge1xuICAgICAgICBpZiAoY29uY2VwdC5pZCA+IDApIHtcbiAgICAgICAgICAgIC8vdmFyIGNvbnRhaW5zID0gdGhpcy5DaGVja0NvbnRhaW5zKGNvbmNlcHQpO1xuICAgICAgICAgICAgLy8gdGhpcy5jb25jZXB0RGljdGlvbmFyeVtjb25jZXB0LmlkXSA9IGNvbmNlcHQ7XG4gICAgICAgICAgICAvLyAgICBpZihjb250YWlucyl7XG4gICAgICAgICAgICAvLyAgIHRoaXMuUmVtb3ZlQ29uY2VwdChjb25jZXB0KTtcbiAgICAgICAgICAgIC8vICB9XG4gICAgICAgICAgICBzdG9yZVRvRGF0YWJhc2UoXCJjb25jZXB0XCIsIGNvbmNlcHQpO1xuICAgICAgICAgICAgQmluYXJ5VHJlZS5hZGRDb25jZXB0VG9UcmVlKGNvbmNlcHQpO1xuICAgICAgICAgICAgQmluYXJ5VHlwZVRyZWUuYWRkQ29uY2VwdFRvVHJlZShjb25jZXB0KTtcbiAgICAgICAgICAgIEJpbmFyeUNoYXJhY3RlclRyZWUuYWRkQ29uY2VwdFRvVHJlZShjb25jZXB0KTtcbiAgICAgICAgICAgIHRoaXMuY29uY2VwdHNBcnJheS5wdXNoKGNvbmNlcHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBBZGRDb25jZXB0VGVtcG9yYXJ5KGNvbmNlcHQpIHtcbiAgICAgICAgdmFyIGNvbnRhaW5zID0gdGhpcy5DaGVja0NvbnRhaW5zKGNvbmNlcHQpO1xuICAgICAgICB0aGlzLmNvbmNlcHREaWN0aW9uYXJ5W2NvbmNlcHQuaWRdID0gY29uY2VwdDtcbiAgICAgICAgaWYgKGNvbnRhaW5zKSB7XG4gICAgICAgICAgICB0aGlzLlJlbW92ZUNvbmNlcHQoY29uY2VwdCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb25jZXB0c0FycmF5LnB1c2goY29uY2VwdCk7XG4gICAgfVxuICAgIHN0YXRpYyBSZW1vdmVDb25jZXB0KGNvbmNlcHQpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbmNlcHRzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmNlcHRzQXJyYXlbaV0uaWQgPT0gY29uY2VwdC5pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29uY2VwdHNBcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVtb3ZlRnJvbURhdGFiYXNlKFwiY29uY2VwdFwiLCBjb25jZXB0LmlkKTtcbiAgICB9XG4gICAgc3RhdGljIEdldENvbmNlcHQoaWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHZhciBteUNvbmNlcHQgPSBuZXcgQ29uY2VwdCgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCBcIjBcIiwgMCwgMCwgMCwgMCwgMCwgMCwgZmFsc2UpO1xuICAgICAgICAgICAgdmFyIG5vZGUgPSB5aWVsZCBCaW5hcnlUcmVlLmdldE5vZGVGcm9tVHJlZShpZCk7XG4gICAgICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCB8fCBub2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBub2RlLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJldHVybmVkQ29uY2VwdCA9IG5vZGUudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKHJldHVybmVkQ29uY2VwdCkge1xuICAgICAgICAgICAgICAgICAgICBteUNvbmNlcHQgPSByZXR1cm5lZENvbmNlcHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYobXlDb25jZXB0LmlkID09IDAgfHwgbXlDb25jZXB0ID09IG51bGwpe1xuICAgICAgICAgICAgLy8gICAgIGZvcih2YXIgaT0wOyBpPHRoaXMuY29uY2VwdHNBcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAvLyAgICAgICAgIGlmKHRoaXMuY29uY2VwdHNBcnJheVtpXS5pZCA9PSBpZCl7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBteUNvbmNlcHQgPSB0aGlzLmNvbmNlcHRzQXJyYXlbaV07XG4gICAgICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICByZXR1cm4gbXlDb25jZXB0O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIEdldENvbmNlcHRCeUNoYXJhY3RlcihjaGFyYWN0ZXJWYWx1ZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdmFyIGNvbmNlcHQgPSBuZXcgQ29uY2VwdCgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCBcIjBcIiwgMCwgMCwgMCwgMCwgMCwgMCwgZmFsc2UpO1xuICAgICAgICAgICAgLy8gIGZvcih2YXIgaT0wOyBpPHRoaXMuY29uY2VwdHNBcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAvLyAgICAgIGlmKHRoaXMuY29uY2VwdHNBcnJheVtpXS5jaGFyYWN0ZXJWYWx1ZSA9PSBjaGFyYWN0ZXJWYWx1ZSl7XG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbmNlcHQgPSB0aGlzLmNvbmNlcHRzQXJyYXlbaV07XG4gICAgICAgICAgICAvLyAgICAgIH1cbiAgICAgICAgICAgIC8vICB9XG4gICAgICAgICAgICB2YXIgTm9kZSA9IEJpbmFyeUNoYXJhY3RlclRyZWUuZ2V0Tm9kZUZyb21UcmVlKGNoYXJhY3RlclZhbHVlKTtcbiAgICAgICAgICAgIGlmIChOb2RlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnb3QgdGhlIGNoYXJhY3RlclwiKTtcbiAgICAgICAgICAgICAgICBjb25jZXB0ID0gTm9kZS52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNoYXJhY3RlclZhbHVlKTtcbiAgICAgICAgICAgIC8vIHZhciBOb2RlID0gQmluYXJ5Q2hhcmFjdGVyVHJlZS5nZXROb2RlRnJvbVRyZWUoY2hhcmFjdGVyVmFsdWUpO1xuICAgICAgICAgICAgLy8gaWYoTm9kZSl7XG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coTm9kZS52YWx1ZSk7XG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIE5vZGUudmFsdWU7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICByZXR1cm4gY29uY2VwdDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBHZXRDb25jZXB0QnlDaGFyYWN0ZXJBbmRUeXBlTG9jYWwoY2hhcmFjdGVyX3ZhbHVlLCB0eXBlSWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHZhciBjb25jZXB0ID0gbmV3IENvbmNlcHQoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgXCIwXCIsIDAsIDAsIDAsIDAsIDAsIDAsIGZhbHNlKTtcbiAgICAgICAgICAgIC8vdmFyIE5vZGUgPSBhd2FpdCBCaW5hcnlDaGFyYWN0ZXJUcmVlLmdldENoYXJhY3RlckFuZFR5cGVGcm9tVHJlZShjaGFyYWN0ZXJfdmFsdWUsdHlwZUlkKTtcbiAgICAgICAgICAgIGNvbmNlcHQgPSB5aWVsZCBCaW5hcnlUeXBlVHJlZS5nZXRUeXBlVmFyaWFudHNXaXRoQ2hhcmFjdGVyVmFsdWUoY2hhcmFjdGVyX3ZhbHVlLCB0eXBlSWQpO1xuICAgICAgICAgICAgLy8gaWYoTm9kZSl7XG4gICAgICAgICAgICAvLyAgICAgY29uY2VwdCA9ICBOb2RlLnZhbHVlO1xuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiZm91bmQgdGhlIG91dHB1dFwiKTtcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhjb25jZXB0KTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIHJldHVybiBjb25jZXB0O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIEdldENvbmNlcHRzQnlUeXBlSWQodHlwZUlkKSB7XG4gICAgICAgIHZhciBteUNvbmNlcHQ7XG4gICAgICAgIGxldCBDb25jZXB0TGlzdCA9IFtdO1xuICAgICAgICBteUNvbmNlcHQgPSBudWxsO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29uY2VwdHNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29uY2VwdHNBcnJheVtpXS50eXBlSWQgPT0gdHlwZUlkKSB7XG4gICAgICAgICAgICAgICAgQ29uY2VwdExpc3QucHVzaCh0aGlzLmNvbmNlcHRzQXJyYXlbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vICBnZXRGcm9tRGF0YWJhc2VXaXRoVHlwZShcImNvbmNlcHRcIixcInR5cGVJZFwiLHR5cGVJZCkudGhlbihjb25jZXB0TGlzdD0+e1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJ0aGkgc2lzIG15IGxpc3RcIik7XG4gICAgICAgIC8vICB9KTtcbiAgICAgICAgLy8gICB2YXIgZGJDb25jZXB0TGlzdCA9IGF3YWl0IGdldEZyb21EYXRhYmFzZVdpdGhUeXBlT2xkKFwiY29uY2VwdFwiLFwidHlwZUlkXCIsIHR5cGVJZCk7XG4gICAgICAgIC8vICAgY29uc29sZS5sb2coZGJDb25jZXB0TGlzdCk7XG4gICAgICAgIC8vICAgaWYoQXJyYXkuaXNBcnJheShkYkNvbmNlcHRMaXN0KSl7XG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coZGJDb25jZXB0TGlzdCk7XG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coZGJDb25jZXB0TGlzdC5sZW5ndGgpO1xuICAgICAgICAvLyAgZm9yKHZhciBpPTA7IGk8IGRiQ29uY2VwdExpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJoZXJlIHRvIHB1c2ggZmlyc3RzXCIpO1xuICAgICAgICAvLyAgICAgdmFyIGNvbnRhaW5zOiBib29sZWFuID0gZmFsc2U7XG4gICAgICAgIC8vICAgICBmb3IodmFyIGo9MDsgajwgQ29uY2VwdExpc3QubGVuZ3RoOyBqKyspe1xuICAgICAgICAvLyAgICAgICAgIGlmKGRiQ29uY2VwdExpc3RbaV0uaWQgPT0gQ29uY2VwdExpc3Rbal0uaWQpe1xuICAgICAgICAvLyAgICAgICAgICAgICBjb250YWlucyA9IHRydWU7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJoZXJlIHRvIHB1c2hcIik7XG4gICAgICAgIC8vICAgICBpZighY29udGFpbnMpe1xuICAgICAgICAvLyAgICAgICAgIENvbmNlcHRMaXN0LnB1c2goZGJDb25jZXB0TGlzdFtpXSk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSBjb25jZXB0IGxpc3RcIik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKENvbmNlcHRMaXN0KTtcbiAgICAgICAgcmV0dXJuIENvbmNlcHRMaXN0O1xuICAgIH1cbiAgICBzdGF0aWMgR2V0Q29uY2VwdHNCeVR5cGVJZEFuZFVzZXIodHlwZUlkLCB1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGxldCBDb25jZXB0TGlzdCA9IFtdO1xuICAgICAgICAgICAgQ29uY2VwdExpc3QgPSB5aWVsZCBCaW5hcnlUeXBlVHJlZS5nZXRUeXBlVmFyaWFudHNGcm9tVHJlZVdpdGhVc2VySWQodHlwZUlkLCB1c2VySWQpO1xuICAgICAgICAgICAgcmV0dXJuIENvbmNlcHRMaXN0O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG59XG5Db25jZXB0c0RhdGEuY29uY2VwdHNBcnJheSA9IFtdO1xuQ29uY2VwdHNEYXRhLmNvbmNlcHREaWN0aW9uYXJ5ID0gW107XG4iLCJleHBvcnQgY2xhc3MgQ29ubmVjdGlvbiB7XG4gICAgY29uc3RydWN0b3IoaWQgPSAwLCBvZlRoZUNvbmNlcHRJZCwgdG9UaGVDb25jZXB0SWQsIG9mVGhlQ29uY2VwdFVzZXJJZCwgdG9UaGVDb25jZXB0VXNlcklkLCB1c2VySWQsIHR5cGVJZCwgdHlwZVVzZXJJZCwgb3JkZXJJZCwgb3JkZXJVc2VySWQsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkKSB7XG4gICAgICAgIHRoaXMuaXNUZW1wID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5PZlRoZUNvbmNlcHRJZCA9IG9mVGhlQ29uY2VwdElkO1xuICAgICAgICB0aGlzLlRvVGhlQ29uY2VwdElkID0gdG9UaGVDb25jZXB0SWQ7XG4gICAgICAgIHRoaXMub2ZUaGVDb25jZXB0SWQgPSBvZlRoZUNvbmNlcHRJZDtcbiAgICAgICAgdGhpcy50b1RoZUNvbmNlcHRJZCA9IHRvVGhlQ29uY2VwdElkO1xuICAgICAgICB0aGlzLk9mVGhlQ29uY2VwdFVzZXJJZCA9IG9mVGhlQ29uY2VwdFVzZXJJZDtcbiAgICAgICAgdGhpcy5Ub1RoZUNvbmNlcHRVc2VySWQgPSB0b1RoZUNvbmNlcHRVc2VySWQ7XG4gICAgICAgIHRoaXMudXNlcklkID0gdXNlcklkO1xuICAgICAgICB0aGlzLnR5cGVJZCA9IHR5cGVJZDtcbiAgICAgICAgdGhpcy50eXBlVXNlcklkID0gdHlwZVVzZXJJZDtcbiAgICAgICAgdGhpcy5vcmRlcklkID0gb3JkZXJJZDtcbiAgICAgICAgdGhpcy5vcmRlclVzZXJJZCA9IG9yZGVyVXNlcklkO1xuICAgICAgICB0aGlzLnNlY3VyaXR5SWQgPSBzZWN1cml0eUlkO1xuICAgICAgICB0aGlzLnNlY3VyaXR5VXNlcklkID0gc2VjdXJpdHlVc2VySWQ7XG4gICAgICAgIHRoaXMuYWNjZXNzSWQgPSBhY2Nlc3NJZDtcbiAgICAgICAgdGhpcy5hY2Nlc3NVc2VySWQgPSBhY2Nlc3NVc2VySWQ7XG4gICAgICAgIHRoaXMuc2Vzc2lvbkluZm9ybWF0aW9uSWQgPSBzZXNzaW9uSW5mb3JtYXRpb25JZDtcbiAgICAgICAgdGhpcy5zZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQgPSBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQ7XG4gICAgICAgIHRoaXMuZW50cnlUaW1lU3RhbXAgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB0aGlzLnRlcm1pbmF0aW9uRGF0ZVRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB0aGlzLmxvY2FsU3luY1RpbWUgPSBuZXcgRGF0ZSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IHJlbW92ZUZyb21EYXRhYmFzZSwgc3RvcmVUb0RhdGFiYXNlIH0gZnJvbSBcIi4uL0RhdGFiYXNlL2luZGV4ZWRkYlwiO1xuZXhwb3J0IGNsYXNzIENvbm5lY3Rpb25EYXRhIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJDb25uZWN0aW9uIEFycmF5XCI7XG4gICAgfVxuICAgIHN0YXRpYyBDaGVja0NvbnRhaW5zKGNvbm5lY3Rpb24pIHtcbiAgICAgICAgdmFyIGNvbnRhaW5zID0gZmFsc2U7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb25uZWN0aW9uQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25BcnJheVtpXS5pZCA9PSBjb25uZWN0aW9uLmlkKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbnMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250YWlucztcbiAgICB9XG4gICAgc3RhdGljIEFkZENvbm5lY3Rpb24oY29ubmVjdGlvbikge1xuICAgICAgICB2YXIgY29udGFpbnMgPSB0aGlzLkNoZWNrQ29udGFpbnMoY29ubmVjdGlvbik7XG4gICAgICAgIGlmIChjb250YWlucykge1xuICAgICAgICAgICAgdGhpcy5SZW1vdmVDb25uZWN0aW9uKGNvbm5lY3Rpb24pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb25uZWN0aW9uLmlkICE9IDAgfHwgY29ubmVjdGlvbi5pc1RlbXApIHtcbiAgICAgICAgICAgIHN0b3JlVG9EYXRhYmFzZShcImNvbm5lY3Rpb25cIiwgY29ubmVjdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb25uZWN0aW9uQXJyYXkucHVzaChjb25uZWN0aW9uKTtcbiAgICB9XG4gICAgc3RhdGljIEFkZFRvRGljdGlvbmFyeShjb25uZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbkRpY3Rpb25hcnlbY29ubmVjdGlvbi5pZF0gPSBjb25uZWN0aW9uO1xuICAgIH1cbiAgICBzdGF0aWMgUmVtb3ZlQ29ubmVjdGlvbihjb25uZWN0aW9uKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb25uZWN0aW9uQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25BcnJheVtpXS5pZCA9PSBjb25uZWN0aW9uLmlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uQXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjb25uZWN0aW9uLmlkICE9IDApIHtcbiAgICAgICAgICAgIHJlbW92ZUZyb21EYXRhYmFzZShcImNvbm5lY3Rpb25cIiwgY29ubmVjdGlvbi5pZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIEdldENvbm5lY3Rpb24oaWQpIHtcbiAgICAgICAgdmFyIG15Q29uY2VwdDtcbiAgICAgICAgbXlDb25jZXB0ID0gbnVsbDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbm5lY3Rpb25BcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvbkFycmF5W2ldLmlkID09IGlkKSB7XG4gICAgICAgICAgICAgICAgbXlDb25jZXB0ID0gdGhpcy5jb25uZWN0aW9uQXJyYXlbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG15Q29uY2VwdDtcbiAgICB9XG4gICAgc3RhdGljIEdldENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvbkxvY2FsKGlkKSB7XG4gICAgICAgIHZhciBjb25uZWN0aW9uTGlzdCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29ubmVjdGlvbkFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uQXJyYXlbaV0udHlwZUlkID09IGlkKSB7XG4gICAgICAgICAgICAgICAgY29ubmVjdGlvbkxpc3QucHVzaCh0aGlzLmNvbm5lY3Rpb25BcnJheVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbm5lY3Rpb25MaXN0O1xuICAgIH1cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cbn1cbkNvbm5lY3Rpb25EYXRhLmNvbm5lY3Rpb25BcnJheSA9IFtdO1xuQ29ubmVjdGlvbkRhdGEuY29ubmVjdGlvbkRpY3Rpb25hcnkgPSBbXTtcbiIsImV4cG9ydCBjbGFzcyBJZGVudGlmaWVyRmxhZ3Mge1xufVxuSWRlbnRpZmllckZsYWdzLmlzVHlwZUxvYWRlZCA9IGZhbHNlO1xuSWRlbnRpZmllckZsYWdzLmlzQ2hhcmFjdGVyTG9hZGVkID0gZmFsc2U7XG5JZGVudGlmaWVyRmxhZ3MuaXNEYXRhTG9hZGVkID0gZmFsc2U7XG5JZGVudGlmaWVyRmxhZ3MuaXNMb2NhbERhdGFMb2FkZWQgPSBmYWxzZTtcbklkZW50aWZpZXJGbGFncy5pc0xvY2FsQ2hhcmFjdGVyTG9hZGVkID0gZmFsc2U7XG5JZGVudGlmaWVyRmxhZ3MuaXNMb2NhbFR5cGVMb2FkZWQgPSBmYWxzZTtcbklkZW50aWZpZXJGbGFncy5pc0xvY2FsQ29ubmVjdGlvbkxvYWRlZCA9IGZhbHNlO1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBJZGVudGlmaWVyRmxhZ3MgfSBmcm9tIFwiLi8uLi9JZGVudGlmaWVyRmxhZ3NcIjtcbmltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi8uLi9Ob2RlXCI7XG5leHBvcnQgY2xhc3MgTG9jYWxCaW5hcnlDaGFyYWN0ZXJUcmVlIHtcbiAgICBzdGF0aWMgd2FpdEZvckRhdGFUb0xvYWQoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tGbGFnKHJlc29sdmUpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJub3RcIik7XG4gICAgICAgICAgICAgICAgfSwgMjUwMDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgY2hlY2tGbGFnKHJlc29sdmUpIHtcbiAgICAgICAgaWYgKElkZW50aWZpZXJGbGFncy5pc0xvY2FsQ2hhcmFjdGVyTG9hZGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShcImRvbmVcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KExvY2FsQmluYXJ5Q2hhcmFjdGVyVHJlZS5jaGVja0ZsYWcsIDEwMDAsIHJlc29sdmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIDtcbiAgICBzdGF0aWMgYWRkTm9kZVRvVHJlZShub2RlKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5Mb2NhbENoYXJhY3RlclJvb3QgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuTG9jYWxDaGFyYWN0ZXJSb290ID0gbm9kZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Mb2NhbENoYXJhY3RlclJvb3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLkxvY2FsQ2hhcmFjdGVyUm9vdCA9IHRoaXMuTG9jYWxDaGFyYWN0ZXJSb290LmFkZENoYXJhY3Rlck5vZGUobm9kZSwgdGhpcy5Mb2NhbENoYXJhY3RlclJvb3QsIHRoaXMuTG9jYWxDaGFyYWN0ZXJSb290LmhlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5Mb2NhbENoYXJhY3RlclJvb3Q7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgYWRkQ29uY2VwdFRvVHJlZShjb25jZXB0KSB7XG4gICAgICAgIGlmIChjb25jZXB0LmNoYXJhY3RlclZhbHVlICE9IFwiXCIpIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gbmV3IE5vZGUoY29uY2VwdC5jaGFyYWN0ZXJWYWx1ZSwgY29uY2VwdCwgbnVsbCwgbnVsbCk7XG4gICAgICAgICAgICB0aGlzLmFkZE5vZGVUb1RyZWUobm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGdldE5vZGVGcm9tVHJlZSh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5Mb2NhbENoYXJhY3RlclJvb3QpIHtcbiAgICAgICAgICAgIHZhciBOb2RlID0gdGhpcy5Mb2NhbENoYXJhY3RlclJvb3QuZ2V0Q2hhcmFjdGVyRnJvbU5vZGUodmFsdWUsIHRoaXMuTG9jYWxDaGFyYWN0ZXJSb290KTtcbiAgICAgICAgICAgIHJldHVybiBOb2RlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLkxvY2FsQ2hhcmFjdGVyUm9vdDtcbiAgICB9XG4gICAgc3RhdGljIGdldENoYXJhY3RlckFuZFR5cGVGcm9tVHJlZSh2YWx1ZSwgdHlwZUlkKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBkYXRhID0geWllbGQgdGhpcy53YWl0Rm9yRGF0YVRvTG9hZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuTG9jYWxDaGFyYWN0ZXJSb290KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZWFyY2hpbmcgLi4uLi4uLi4uLi4uLi4uLi5cIik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgICAgICAgICAgIHZhciBOb2RlID0gdGhpcy5Mb2NhbENoYXJhY3RlclJvb3QuZ2V0RnJvbU5vZGVXaXRoQ2hhcmFjdGVyQW5kVHlwZSh2YWx1ZSwgdHlwZUlkLCB0aGlzLkxvY2FsQ2hhcmFjdGVyUm9vdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5Mb2NhbENoYXJhY3RlclJvb3Q7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbkxvY2FsQmluYXJ5Q2hhcmFjdGVyVHJlZS5Mb2NhbENoYXJhY3RlclJvb3QgPSBudWxsO1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBJZGVudGlmaWVyRmxhZ3MgfSBmcm9tIFwiLi4vSWRlbnRpZmllckZsYWdzXCI7XG5pbXBvcnQgeyBOb2RlIH0gZnJvbSBcIi4vLi4vTm9kZVwiO1xuZXhwb3J0IGNsYXNzIExvY2FsQmluYXJ5VHJlZSB7XG4gICAgc3RhdGljIGFkZE5vZGVUb1RyZWUobm9kZSkge1xuICAgICAgICBpZiAodGhpcy5yb290ID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMucm9vdCA9IG5vZGU7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yb290O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yb290ID0gdGhpcy5yb290LmFkZE5vZGUobm9kZSwgdGhpcy5yb290LCB0aGlzLnJvb3QuaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgYWRkQ29uY2VwdFRvVHJlZShjb25jZXB0KSB7XG4gICAgICAgIHZhciBub2RlID0gbmV3IE5vZGUoY29uY2VwdC5pZCwgY29uY2VwdCwgbnVsbCwgbnVsbCk7XG4gICAgICAgIHZhciBjaGFyYWN0ZXJOb2RlID0gbmV3IE5vZGUoY29uY2VwdC5jaGFyYWN0ZXJWYWx1ZSwgY29uY2VwdCwgbnVsbCwgbnVsbCk7XG4gICAgICAgIHRoaXMuYWRkTm9kZVRvVHJlZShub2RlKTtcbiAgICB9XG4gICAgc3RhdGljIHdhaXRGb3JEYXRhVG9Mb2FkKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRmxhZyhyZXNvbHZlKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwibm90XCIpO1xuICAgICAgICAgICAgICAgIH0sIDI1MDAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIGNoZWNrRmxhZyhyZXNvbHZlKSB7XG4gICAgICAgIGlmIChJZGVudGlmaWVyRmxhZ3MuaXNMb2NhbERhdGFMb2FkZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKFwiZG9uZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoTG9jYWxCaW5hcnlUcmVlLmNoZWNrRmxhZywgMTAwMCwgcmVzb2x2ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgO1xuICAgIHN0YXRpYyBnZXROb2RlRnJvbVRyZWUoaWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB5aWVsZCB0aGlzLndhaXRGb3JEYXRhVG9Mb2FkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5yb290KSB7XG4gICAgICAgICAgICAgICAgdmFyIE5vZGUgPSB0aGlzLnJvb3QuZ2V0RnJvbU5vZGUoaWQsIHRoaXMucm9vdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yb290O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIGdldENoYXJhY3RlckFuZFR5cGVGcm9tVHJlZSh2YWx1ZSwgdHlwZUlkKSB7XG4gICAgICAgIGlmICh0aGlzLnJvb3QpIHtcbiAgICAgICAgICAgIHZhciBOb2RlID0gdGhpcy5yb290LmdldEZyb21Ob2RlV2l0aENoYXJhY3RlckFuZFR5cGUodmFsdWUsIHR5cGVJZCwgdGhpcy5yb290KTtcbiAgICAgICAgICAgIHJldHVybiBOb2RlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJvb3Q7XG4gICAgfVxufVxuTG9jYWxCaW5hcnlUcmVlLnJvb3QgPSBudWxsO1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBJZGVudGlmaWVyRmxhZ3MgfSBmcm9tIFwiLi8uLi9JZGVudGlmaWVyRmxhZ3NcIjtcbmltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi8uLi9Ob2RlXCI7XG5leHBvcnQgY2xhc3MgTG9jYWxCaW5hcnlUeXBlVHJlZSB7XG4gICAgc3RhdGljIGFkZE5vZGVUb1RyZWUobm9kZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuTG9jYWxUeXBlUm9vdCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHR5cGUgcm9vdCBcIiwgbm9kZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5Mb2NhbFR5cGVSb290ID0gbm9kZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Mb2NhbFR5cGVSb290O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5Mb2NhbFR5cGVSb290ID0gdGhpcy5Mb2NhbFR5cGVSb290LmFkZFR5cGVOb2RlKG5vZGUsIHRoaXMuTG9jYWxUeXBlUm9vdCwgdGhpcy5Mb2NhbFR5cGVSb290LmhlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5Mb2NhbFR5cGVSb290O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIGFkZENvbmNlcHRUb1RyZWUoY29uY2VwdCkge1xuICAgICAgICBpZiAoY29uY2VwdC50eXBlSWQgIT0gMCkge1xuICAgICAgICAgICAgdmFyIG5vZGUgPSBuZXcgTm9kZShjb25jZXB0LnR5cGVJZCwgY29uY2VwdCwgbnVsbCwgbnVsbCk7XG4gICAgICAgICAgICB0aGlzLmFkZE5vZGVUb1RyZWUobm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGdldE5vZGVGcm9tVHJlZShpZCkge1xuICAgICAgICBpZiAodGhpcy5Mb2NhbFR5cGVSb290KSB7XG4gICAgICAgICAgICB2YXIgTm9kZSA9IHRoaXMuTG9jYWxUeXBlUm9vdC5nZXRGcm9tTm9kZShpZCwgdGhpcy5Mb2NhbFR5cGVSb290KTtcbiAgICAgICAgICAgIHJldHVybiBOb2RlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLkxvY2FsVHlwZVJvb3Q7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRUeXBlVmFyaWFudHNGcm9tVHJlZSh0eXBlSWQpIHtcbiAgICAgICAgdmFyIE5vZGUgPSB0aGlzLmdldE5vZGVGcm9tVHJlZSh0eXBlSWQpO1xuICAgICAgICB2YXIgY29uY2VwdHMgPSBbXTtcbiAgICAgICAgaWYgKE5vZGUpIHtcbiAgICAgICAgICAgIGNvbmNlcHRzLnB1c2goTm9kZSA9PT0gbnVsbCB8fCBOb2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBOb2RlLnZhbHVlKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTm9kZS52YXJpYW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbmNlcHRzLnB1c2goTm9kZS52YXJpYW50c1tpXS52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29uY2VwdHM7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIHdhaXRGb3JEYXRhVG9Mb2FkKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRmxhZyhyZXNvbHZlKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwibm90XCIpO1xuICAgICAgICAgICAgICAgIH0sIDI1MDAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIGNoZWNrRmxhZyhyZXNvbHZlKSB7XG4gICAgICAgIGlmIChJZGVudGlmaWVyRmxhZ3MuaXNMb2NhbFR5cGVMb2FkZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKFwiZG9uZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoTG9jYWxCaW5hcnlUeXBlVHJlZS5jaGVja0ZsYWcsIDEwMDAsIHJlc29sdmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIDtcbiAgICBzdGF0aWMgZ2V0VHlwZVZhcmlhbnRzRnJvbVRyZWVXaXRoVXNlcklkKHR5cGVJZCwgdXNlcklkKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB2YXIgY29uY2VwdHMgPSBbXTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB5aWVsZCB0aGlzLndhaXRGb3JEYXRhVG9Mb2FkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbmNlcHRzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIE5vZGUgPSB0aGlzLmdldE5vZGVGcm9tVHJlZSh0eXBlSWQpO1xuICAgICAgICAgICAgaWYgKE5vZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoTm9kZS52YWx1ZS51c2VySWQgPT0gdXNlcklkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmNlcHRzLnB1c2goTm9kZSA9PT0gbnVsbCB8fCBOb2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBOb2RlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOb2RlLnZhcmlhbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChOb2RlLnZhcmlhbnRzW2ldLnZhbHVlLnVzZXJJZCA9PSB1c2VySWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmNlcHRzLnB1c2goTm9kZS52YXJpYW50c1tpXS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29uY2VwdHM7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbkxvY2FsQmluYXJ5VHlwZVRyZWUuTG9jYWxUeXBlUm9vdCA9IG51bGw7XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IENvbmNlcHQgfSBmcm9tIFwiLi8uLi9Db25jZXB0XCI7XG5pbXBvcnQgeyBzdG9yZVRvRGF0YWJhc2UgfSBmcm9tIFwiLi4vLi4vRGF0YWJhc2UvaW5kZXhkYmxvY2FsXCI7XG5pbXBvcnQgeyBMb2NhbEJpbmFyeVRyZWUgfSBmcm9tIFwiLi9Mb2NhbEJpbmFyeVRyZWVcIjtcbmltcG9ydCB7IExvY2FsQmluYXJ5Q2hhcmFjdGVyVHJlZSB9IGZyb20gXCIuL0xvY2FsQmluYXJ5Q2hhcmFjdGVyVHJlZVwiO1xuaW1wb3J0IHsgTG9jYWxCaW5hcnlUeXBlVHJlZSB9IGZyb20gXCIuL0xvY2FsQmluYXJ5VHlwZVRyZWVcIjtcbmV4cG9ydCBjbGFzcyBMb2NhbENvbmNlcHRzRGF0YSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiY29uY2VwdHNBcnJheVwiO1xuICAgIH1cbiAgICBzdGF0aWMgQ2hlY2tDb250YWlucyhjb25jZXB0KSB7XG4gICAgICAgIHZhciBjb250YWlucyA9IGZhbHNlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubG9jYWxjb25jZXB0c0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5sb2NhbGNvbmNlcHRzQXJyYXlbaV0uaWQgPT0gY29uY2VwdC5pZCkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5zID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGFpbnM7XG4gICAgfVxuICAgIHN0YXRpYyBBZGRDb25jZXB0KGNvbmNlcHQpIHtcbiAgICAgICAgaWYgKGNvbmNlcHQuaWQgPiAwKSB7XG4gICAgICAgICAgICBzdG9yZVRvRGF0YWJhc2UoXCJsb2NhbGNvbmNlcHRcIiwgY29uY2VwdCk7XG4gICAgICAgICAgICBMb2NhbEJpbmFyeVRyZWUuYWRkQ29uY2VwdFRvVHJlZShjb25jZXB0KTtcbiAgICAgICAgICAgIExvY2FsQmluYXJ5Q2hhcmFjdGVyVHJlZS5hZGRDb25jZXB0VG9UcmVlKGNvbmNlcHQpO1xuICAgICAgICAgICAgTG9jYWxCaW5hcnlUeXBlVHJlZS5hZGRDb25jZXB0VG9UcmVlKGNvbmNlcHQpO1xuICAgICAgICAgICAgdGhpcy5sb2NhbGNvbmNlcHRzQXJyYXkucHVzaChjb25jZXB0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgQWRkQ29uY2VwdFRlbXBvcmFyeShjb25jZXB0KSB7XG4gICAgICAgIHZhciBjb250YWlucyA9IHRoaXMuQ2hlY2tDb250YWlucyhjb25jZXB0KTtcbiAgICAgICAgdGhpcy5sb2NhbGNvbmNlcHRzQXJyYXlbY29uY2VwdC5pZF0gPSBjb25jZXB0O1xuICAgICAgICBpZiAoY29udGFpbnMpIHtcbiAgICAgICAgICAgIHRoaXMuUmVtb3ZlQ29uY2VwdChjb25jZXB0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvY2FsY29uY2VwdHNBcnJheS5wdXNoKGNvbmNlcHQpO1xuICAgIH1cbiAgICBzdGF0aWMgUmVtb3ZlQ29uY2VwdChjb25jZXB0KSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sb2NhbGNvbmNlcHRzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxvY2FsY29uY2VwdHNBcnJheVtpXS5pZCA9PSBjb25jZXB0LmlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbGNvbmNlcHRzQXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vICByZW1vdmVGcm9tRGF0YWJhc2UoXCJjb25jZXB0XCIsY29uY2VwdC5pZCk7XG4gICAgfVxuICAgIHN0YXRpYyBHZXRDb25jZXB0KGlkKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB2YXIgbXlDb25jZXB0ID0gbmV3IENvbmNlcHQoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgXCIwXCIsIDAsIDAsIDAsIDAsIDAsIDAsIGZhbHNlKTtcbiAgICAgICAgICAgIHZhciBub2RlID0geWllbGQgTG9jYWxCaW5hcnlUcmVlLmdldE5vZGVGcm9tVHJlZShpZCk7XG4gICAgICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCB8fCBub2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBub2RlLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJldHVybmVkQ29uY2VwdCA9IG5vZGUudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKHJldHVybmVkQ29uY2VwdCkge1xuICAgICAgICAgICAgICAgICAgICBteUNvbmNlcHQgPSByZXR1cm5lZENvbmNlcHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG15Q29uY2VwdDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBHZXRDb25jZXB0QnlDaGFyYWN0ZXIoY2hhcmFjdGVyVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHZhciBjb25jZXB0ID0gbmV3IENvbmNlcHQoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgXCIwXCIsIDAsIDAsIDAsIDAsIDAsIDAsIGZhbHNlKTtcbiAgICAgICAgICAgIC8vICBmb3IodmFyIGk9MDsgaTx0aGlzLmNvbmNlcHRzQXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgLy8gICAgICBpZih0aGlzLmNvbmNlcHRzQXJyYXlbaV0uY2hhcmFjdGVyVmFsdWUgPT0gY2hhcmFjdGVyVmFsdWUpe1xuICAgICAgICAgICAgLy8gICAgICAgICBjb25jZXB0ID0gdGhpcy5jb25jZXB0c0FycmF5W2ldO1xuICAgICAgICAgICAgLy8gICAgICB9XG4gICAgICAgICAgICAvLyAgfVxuICAgICAgICAgICAgdmFyIE5vZGUgPSBMb2NhbEJpbmFyeUNoYXJhY3RlclRyZWUuZ2V0Tm9kZUZyb21UcmVlKGNoYXJhY3RlclZhbHVlKTtcbiAgICAgICAgICAgIGlmIChOb2RlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnb3QgdGhlIGNoYXJhY3RlclwiKTtcbiAgICAgICAgICAgICAgICBjb25jZXB0ID0gTm9kZS52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb25jZXB0O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIEdldENvbmNlcHRCeUNoYXJhY3RlckFuZFR5cGVMb2NhbChjaGFyYWN0ZXJfdmFsdWUsIHR5cGVJZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdmFyIGNvbmNlcHQgPSBuZXcgQ29uY2VwdCgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCBcIjBcIiwgMCwgMCwgMCwgMCwgMCwgMCwgZmFsc2UpO1xuICAgICAgICAgICAgLy8gbGV0IGNvbmNlcHRMaXN0OkNvbmNlcHRbXSA9IGF3YWl0IHRoaXMuR2V0Q29uY2VwdHNCeVR5cGVJZCh0eXBlSWQpO1xuICAgICAgICAgICAgLy8gZm9yKHZhciBpPTA7aTxjb25jZXB0TGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAvLyAgICAgaWYoY2hhcmFjdGVyX3ZhbHVlID09IGNvbmNlcHRMaXN0W2ldLmNoYXJhY3RlclZhbHVlKXtcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uY2VwdCA9IGNvbmNlcHRMaXN0W2ldO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIHZhciBOb2RlID0geWllbGQgTG9jYWxCaW5hcnlDaGFyYWN0ZXJUcmVlLmdldENoYXJhY3RlckFuZFR5cGVGcm9tVHJlZShjaGFyYWN0ZXJfdmFsdWUsIHR5cGVJZCk7XG4gICAgICAgICAgICBpZiAoTm9kZSkge1xuICAgICAgICAgICAgICAgIGNvbmNlcHQgPSBOb2RlLnZhbHVlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZm91bmQgdGhlIG91dHB1dFwiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb25jZXB0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb25jZXB0O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIEdldENvbmNlcHRzQnlUeXBlSWQodHlwZUlkKSB7XG4gICAgICAgIHZhciBteUNvbmNlcHQ7XG4gICAgICAgIGxldCBDb25jZXB0TGlzdCA9IFtdO1xuICAgICAgICBteUNvbmNlcHQgPSBudWxsO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubG9jYWxjb25jZXB0c0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5sb2NhbGNvbmNlcHRzQXJyYXlbaV0udHlwZUlkID09IHR5cGVJZCkge1xuICAgICAgICAgICAgICAgIENvbmNlcHRMaXN0LnB1c2godGhpcy5sb2NhbGNvbmNlcHRzQXJyYXlbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBDb25jZXB0TGlzdDtcbiAgICB9XG4gICAgc3RhdGljIEdldENvbmNlcHRzQnlUeXBlSWRBbmRVc2VyKHR5cGVJZCwgdXNlcklkKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB2YXIgbXlDb25jZXB0O1xuICAgICAgICAgICAgbGV0IENvbmNlcHRMaXN0ID0gW107XG4gICAgICAgICAgICAvLyBteUNvbmNlcHQgPSBudWxsO1xuICAgICAgICAgICAgLy8gIGZvcih2YXIgaT0wOyBpPHRoaXMuY29uY2VwdHNBcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAvLyAgICAgIGlmKHRoaXMuY29uY2VwdHNBcnJheVtpXS50eXBlSWQgPT0gdHlwZUlkICYmIHRoaXMuY29uY2VwdHNBcnJheVtpXS51c2VySWQgPT0gdXNlcklkKXtcbiAgICAgICAgICAgIC8vICAgICAgICAgIENvbmNlcHRMaXN0LnB1c2godGhpcy5jb25jZXB0c0FycmF5W2ldKTtcbiAgICAgICAgICAgIC8vICAgICAgfVxuICAgICAgICAgICAgLy8gIH1cbiAgICAgICAgICAgIENvbmNlcHRMaXN0ID0geWllbGQgTG9jYWxCaW5hcnlUeXBlVHJlZS5nZXRUeXBlVmFyaWFudHNGcm9tVHJlZVdpdGhVc2VySWQodHlwZUlkLCB1c2VySWQpO1xuICAgICAgICAgICAgcmV0dXJuIENvbmNlcHRMaXN0O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG59XG5Mb2NhbENvbmNlcHRzRGF0YS5sb2NhbGNvbmNlcHRzQXJyYXkgPSBbXTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgc3RvcmVUb0RhdGFiYXNlIH0gZnJvbSBcIi4uLy4uL0RhdGFiYXNlL2luZGV4ZGJsb2NhbFwiO1xuaW1wb3J0IHsgSWRlbnRpZmllckZsYWdzIH0gZnJvbSBcIi4uL0lkZW50aWZpZXJGbGFnc1wiO1xuZXhwb3J0IGNsYXNzIExvY2FsQ29ubmVjdGlvbkRhdGEge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm5hbWUgPSBcIkNvbm5lY3Rpb24gQXJyYXlcIjtcbiAgICB9XG4gICAgc3RhdGljIENoZWNrQ29udGFpbnMoY29ubmVjdGlvbikge1xuICAgICAgICB2YXIgY29udGFpbnMgPSBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbm5lY3Rpb25BcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvbkFycmF5W2ldLmlkID09IGNvbm5lY3Rpb24uaWQpIHtcbiAgICAgICAgICAgICAgICBjb250YWlucyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5zO1xuICAgIH1cbiAgICBzdGF0aWMgQWRkQ29ubmVjdGlvbihjb25uZWN0aW9uKSB7XG4gICAgICAgIHZhciBjb250YWlucyA9IHRoaXMuQ2hlY2tDb250YWlucyhjb25uZWN0aW9uKTtcbiAgICAgICAgaWYgKGNvbnRhaW5zKSB7XG4gICAgICAgICAgICB0aGlzLlJlbW92ZUNvbm5lY3Rpb24oY29ubmVjdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbm5lY3Rpb24uaWQgIT0gMCB8fCBjb25uZWN0aW9uLmlzVGVtcCkge1xuICAgICAgICAgICAgc3RvcmVUb0RhdGFiYXNlKFwibG9jYWxjb25uZWN0aW9uXCIsIGNvbm5lY3Rpb24pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbkFycmF5LnB1c2goY29ubmVjdGlvbik7XG4gICAgfVxuICAgIHN0YXRpYyBBZGRUb0RpY3Rpb25hcnkoY29ubmVjdGlvbikge1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb25EaWN0aW9uYXJ5W2Nvbm5lY3Rpb24uaWRdID0gY29ubmVjdGlvbjtcbiAgICB9XG4gICAgc3RhdGljIFJlbW92ZUNvbm5lY3Rpb24oY29ubmVjdGlvbikge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29ubmVjdGlvbkFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uQXJyYXlbaV0uaWQgPT0gY29ubmVjdGlvbi5pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbkFycmF5LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY29ubmVjdGlvbi5pZCAhPSAwKSB7XG4gICAgICAgICAgICAvLyAgcmVtb3ZlRnJvbURhdGFiYXNlKFwiY29ubmVjdGlvblwiLGNvbm5lY3Rpb24uaWQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBHZXRDb25uZWN0aW9uKGlkKSB7XG4gICAgICAgIHZhciBteUNvbmNlcHQ7XG4gICAgICAgIG15Q29uY2VwdCA9IG51bGw7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb25uZWN0aW9uQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25BcnJheVtpXS5pZCA9PSBpZCkge1xuICAgICAgICAgICAgICAgIG15Q29uY2VwdCA9IHRoaXMuY29ubmVjdGlvbkFycmF5W2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBteUNvbmNlcHQ7XG4gICAgfVxuICAgIHN0YXRpYyB3YWl0Rm9yRGF0YVRvTG9hZCgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0ZsYWcocmVzb2x2ZSk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChcIm5vdFwiKTtcbiAgICAgICAgICAgICAgICB9LCAyNTAwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBjaGVja0ZsYWcocmVzb2x2ZSkge1xuICAgICAgICBpZiAoSWRlbnRpZmllckZsYWdzLmlzTG9jYWxDb25uZWN0aW9uTG9hZGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShcImRvbmVcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KExvY2FsQ29ubmVjdGlvbkRhdGEuY2hlY2tGbGFnLCAxMDAwLCByZXNvbHZlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICA7XG4gICAgc3RhdGljIEdldENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvbkxvY2FsKGlkKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB2YXIgY29ubmVjdGlvbkxpc3QgPSBbXTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB5aWVsZCB0aGlzLndhaXRGb3JEYXRhVG9Mb2FkKCk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbm5lY3Rpb25BcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uQXJyYXlbaV0udHlwZUlkID09IGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9uTGlzdC5wdXNoKHRoaXMuY29ubmVjdGlvbkFycmF5W2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY29ubmVjdGlvbkxpc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbm5lY3Rpb25MaXN0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG59XG5Mb2NhbENvbm5lY3Rpb25EYXRhLmNvbm5lY3Rpb25BcnJheSA9IFtdO1xuTG9jYWxDb25uZWN0aW9uRGF0YS5jb25uZWN0aW9uRGljdGlvbmFyeSA9IFtdO1xuIiwiZXhwb3J0IGNsYXNzIE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKGtleSwgdmFsdWUsIGxlZnROb2RlLCByaWdodE5vZGUpIHtcbiAgICAgICAgdGhpcy52YXJpYW50cyA9IFtdO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDE7XG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMubGVmdE5vZGUgPSBsZWZ0Tm9kZTtcbiAgICAgICAgdGhpcy5yaWdodE5vZGUgPSByaWdodE5vZGU7XG4gICAgICAgIHRoaXMuY3VycmVudE5vZGUgPSBudWxsO1xuICAgIH1cbiAgICBhZGRDdXJyZW50Tm9kZShwYXNzZWROb2RlLCBub2RlKSB7XG4gICAgICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgICAgICAgIG5vZGUgPSBwYXNzZWROb2RlO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhc3NlZE5vZGUudmFsdWUudHlwZUlkICE9IG5vZGUudmFsdWUudHlwZUlkKSB7XG4gICAgICAgICAgICBub2RlLmN1cnJlbnROb2RlID0gdGhpcy5hZGRDdXJyZW50Tm9kZShwYXNzZWROb2RlLCBub2RlLmN1cnJlbnROb2RlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgYWRkQ3VycmVudE5vZGVUeXBlKHBhc3NlZE5vZGUsIG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgbm9kZSA9IHBhc3NlZE5vZGU7XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY29udGFpbnMgPSBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlLnZhcmlhbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobm9kZS52YXJpYW50c1tpXS52YWx1ZS5pZCA9PSBwYXNzZWROb2RlLnZhbHVlLmlkKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbnMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghY29udGFpbnMpIHtcbiAgICAgICAgICAgIG5vZGUudmFyaWFudHMucHVzaChwYXNzZWROb2RlKTtcbiAgICAgICAgfVxuICAgICAgICAvL25vZGUuY3VycmVudE5vZGUgPSB0aGlzLmFkZEN1cnJlbnROb2RlKHBhc3NlZE5vZGUsIG5vZGUuY3VycmVudE5vZGUpO1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgYWRkTm9kZShwYXNzZWROb2RlLCBub2RlLCBoZWlnaHQpIHtcbiAgICAgICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgbm9kZSA9IHBhc3NlZE5vZGU7XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgTGVmdE5vZGUgPSBub2RlLmxlZnROb2RlO1xuICAgICAgICB2YXIgUmlnaHROb2RlID0gbm9kZS5yaWdodE5vZGU7XG4gICAgICAgIGlmIChub2RlLmtleSA+IHBhc3NlZE5vZGUua2V5KSB7XG4gICAgICAgICAgICBub2RlLmxlZnROb2RlID0gdGhpcy5hZGROb2RlKHBhc3NlZE5vZGUsIExlZnROb2RlLCBoZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5vZGUua2V5IDwgcGFzc2VkTm9kZS5rZXkpIHtcbiAgICAgICAgICAgIG5vZGUucmlnaHROb2RlID0gdGhpcy5hZGROb2RlKHBhc3NlZE5vZGUsIFJpZ2h0Tm9kZSwgaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBlbHNlIGlmIChub2RlLmtleSA9PSBwYXNzZWROb2RlLmtleSAmJiBub2RlLmtleSAhPSBcIlwiKXtcbiAgICAgICAgLy8gICAgIG5vZGUuY3VycmVudE5vZGUgPSBwYXNzZWROb2RlO1xuICAgICAgICAvLyB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5oZWlnaHQgPSAxICsgTWF0aC5tYXgodGhpcy5nZXRIZWlnaHQobm9kZS5sZWZ0Tm9kZSksIHRoaXMuZ2V0SGVpZ2h0KG5vZGUucmlnaHROb2RlKSk7XG4gICAgICAgIGxldCBiYWxhbmNpbmdGYWN0b3IgPSB0aGlzLmdldEJhbGFuY2VGYWN0b3Iobm9kZSk7XG4gICAgICAgIGlmIChiYWxhbmNpbmdGYWN0b3IgPiAxKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5sZWZ0Tm9kZSkge1xuICAgICAgICAgICAgICAgIGlmIChwYXNzZWROb2RlLmtleSA8IG5vZGUubGVmdE5vZGUua2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJpZ2h0Um90YXRlKG5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwYXNzZWROb2RlLmtleSA+IG5vZGUubGVmdE5vZGUua2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUubGVmdE5vZGUgPSB0aGlzLmxlZnRSb3RhdGUobm9kZS5sZWZ0Tm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJpZ2h0Um90YXRlKG5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYmFsYW5jaW5nRmFjdG9yIDwgLTEpIHtcbiAgICAgICAgICAgIGlmIChub2RlLnJpZ2h0Tm9kZSkge1xuICAgICAgICAgICAgICAgIGlmIChwYXNzZWROb2RlLmtleSA+IG5vZGUucmlnaHROb2RlLmtleSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sZWZ0Um90YXRlKG5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwYXNzZWROb2RlLmtleSA8IG5vZGUucmlnaHROb2RlLmtleSkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLnJpZ2h0Tm9kZSA9IHRoaXMucmlnaHRSb3RhdGUobm9kZS5yaWdodE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sZWZ0Um90YXRlKG5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgYWRkQ2hhcmFjdGVyTm9kZShwYXNzZWROb2RlLCBub2RlLCBoZWlnaHQpIHtcbiAgICAgICAgdmFyIGRlYnVnRmxhZyA9IGZhbHNlO1xuICAgICAgICBpZiAocGFzc2VkTm9kZS52YWx1ZS5jaGFyYWN0ZXJWYWx1ZSAhPSBcIlwiKSB7XG4gICAgICAgICAgICAvLyBpZihwYXNzZWROb2RlLnZhbHVlLmNoYXJhY3RlclZhbHVlID09IFwiRGVmYXVsdFwiKXtcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcImRlZmF1bHQgaGVyZVwiKTtcbiAgICAgICAgICAgIC8vICAgICBkZWJ1Z0ZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChkZWJ1Z0ZsYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcXVhbCBoZXJlXCIsIG5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBub2RlID0gcGFzc2VkTm9kZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlmIChub2RlLmtleSA9PSBwYXNzZWROb2RlLmtleSAmJiBub2RlLmtleSAhPSBcIlwiICl7XG4gICAgICAgICAgICAvLyAgICAgaWYocGFzc2VkTm9kZS52YWx1ZS5jaGFyYWN0ZXJWYWx1ZSA9PSBcIkRlZmF1bHRcIil7XG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwiZXF1YWxcIik7XG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gICAgIG5vZGUuY3VycmVudE5vZGUgPSBwYXNzZWROb2RlO1xuICAgICAgICAgICAgLy8gICAgIHJldHVybiBub2RlO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgdmFyIExlZnROb2RlID0gbm9kZS5sZWZ0Tm9kZTtcbiAgICAgICAgICAgIHZhciBSaWdodE5vZGUgPSBub2RlLnJpZ2h0Tm9kZTtcbiAgICAgICAgICAgIGlmIChub2RlLmtleSA+IHBhc3NlZE5vZGUua2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKGRlYnVnRmxhZykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxlZnQgIGhlcmVcIiwgbm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5vZGUubGVmdE5vZGUgPSB0aGlzLmFkZENoYXJhY3Rlck5vZGUocGFzc2VkTm9kZSwgTGVmdE5vZGUsIGhlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChub2RlLmtleSA8IHBhc3NlZE5vZGUua2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKGRlYnVnRmxhZykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJpZ2h0IGhlcmVcIiwgbm9kZSwgUmlnaHROb2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbm9kZS5yaWdodE5vZGUgPSB0aGlzLmFkZENoYXJhY3Rlck5vZGUocGFzc2VkTm9kZSwgUmlnaHROb2RlLCBoZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZWxzZSBpZiAobm9kZS5rZXkgPT0gcGFzc2VkTm9kZS5rZXkgJiYgbm9kZS5rZXkgIT0gXCJcIil7XG4gICAgICAgICAgICAvLyAgICAgbm9kZS5jdXJyZW50Tm9kZSA9IHBhc3NlZE5vZGU7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZGVidWdGbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZWxzZSBoZXJlXCIsIG5vZGUsIHBhc3NlZE5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobm9kZS5rZXkgPT0gcGFzc2VkTm9kZS5rZXkgJiYgbm9kZS5rZXkgIT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICBub2RlLmN1cnJlbnROb2RlID0gdGhpcy5hZGRDdXJyZW50Tm9kZShwYXNzZWROb2RlLCBub2RlLmN1cnJlbnROb2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub2RlLmhlaWdodCA9IDEgKyBNYXRoLm1heCh0aGlzLmdldEhlaWdodChub2RlLmxlZnROb2RlKSwgdGhpcy5nZXRIZWlnaHQobm9kZS5yaWdodE5vZGUpKTtcbiAgICAgICAgICAgIGlmIChkZWJ1Z0ZsYWcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImhlaWdodCBoZXJlXCIsIG5vZGUuaGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBiYWxhbmNpbmdGYWN0b3IgPSB0aGlzLmdldEJhbGFuY2VGYWN0b3Iobm9kZSk7XG4gICAgICAgICAgICBpZiAoZGVidWdGbGFnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJiYWxhbmNpbmdGYWN0b3IgaGVyZVwiLCBiYWxhbmNpbmdGYWN0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGJhbGFuY2luZ0ZhY3RvciA+IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5sZWZ0Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGFzc2VkTm9kZS5rZXkgPCBub2RlLmxlZnROb2RlLmtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJldHVybmVyID0gdGhpcy5yaWdodFJvdGF0ZShub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZWJ1Z0ZsYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJldHVybmluZyBoZXJlIDEgXCIsIHJldHVybmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5lcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwYXNzZWROb2RlLmtleSA+IG5vZGUubGVmdE5vZGUua2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmxlZnROb2RlID0gdGhpcy5sZWZ0Um90YXRlKG5vZGUubGVmdE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJldHVybmVyID0gdGhpcy5yaWdodFJvdGF0ZShub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZWJ1Z0ZsYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJldHVybmluZyBoZXJlIDIgXCIsIHJldHVybmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5lcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChiYWxhbmNpbmdGYWN0b3IgPCAtMSkge1xuICAgICAgICAgICAgICAgIGlmIChub2RlLnJpZ2h0Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGFzc2VkTm9kZS5rZXkgPiBub2RlLnJpZ2h0Tm9kZS5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXR1cm5lciA9IHRoaXMubGVmdFJvdGF0ZShub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZWJ1Z0ZsYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJldHVybmluZyBoZXJlIDMgXCIsIHJldHVybmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5lcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwYXNzZWROb2RlLmtleSA8IG5vZGUucmlnaHROb2RlLmtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5yaWdodE5vZGUgPSB0aGlzLnJpZ2h0Um90YXRlKG5vZGUucmlnaHROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXR1cm5lciA9IHRoaXMubGVmdFJvdGF0ZShub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZWJ1Z0ZsYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJldHVybmluZyBoZXJlNCBcIiwgcmV0dXJuZXIsIG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldHVybmVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRlYnVnRmxhZykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwid2hhdCBoZXJlXCIsIG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkZWJ1Z0ZsYWcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmV0dXJuaW5nIGhlcmUgNlwiLCBub2RlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgYWRkVHlwZU5vZGUocGFzc2VkTm9kZSwgbm9kZSwgaGVpZ2h0KSB7XG4gICAgICAgIHZhciBkZWJ1Z0ZsYWcgPSBmYWxzZTtcbiAgICAgICAgaWYgKHBhc3NlZE5vZGUudmFsdWUudHlwZUlkICE9IDApIHtcbiAgICAgICAgICAgIC8vIGlmKHBhc3NlZE5vZGUudmFsdWUuY2hhcmFjdGVyVmFsdWUgPT0gXCJEZWZhdWx0XCIpe1xuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiZGVmYXVsdCBoZXJlXCIpO1xuICAgICAgICAgICAgLy8gICAgIGRlYnVnRmxhZyA9IHRydWU7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRlYnVnRmxhZykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVxdWFsIGhlcmVcIiwgbm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5vZGUgPSBwYXNzZWROb2RlO1xuICAgICAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIExlZnROb2RlID0gbm9kZS5sZWZ0Tm9kZTtcbiAgICAgICAgICAgIHZhciBSaWdodE5vZGUgPSBub2RlLnJpZ2h0Tm9kZTtcbiAgICAgICAgICAgIGlmIChub2RlLmtleSA+IHBhc3NlZE5vZGUua2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKGRlYnVnRmxhZykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxlZnQgIGhlcmVcIiwgbm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5vZGUubGVmdE5vZGUgPSB0aGlzLmFkZFR5cGVOb2RlKHBhc3NlZE5vZGUsIExlZnROb2RlLCBoZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobm9kZS5rZXkgPCBwYXNzZWROb2RlLmtleSkge1xuICAgICAgICAgICAgICAgIGlmIChkZWJ1Z0ZsYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyaWdodCBoZXJlXCIsIG5vZGUsIFJpZ2h0Tm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5vZGUucmlnaHROb2RlID0gdGhpcy5hZGRUeXBlTm9kZShwYXNzZWROb2RlLCBSaWdodE5vZGUsIGhlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZGVidWdGbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZWxzZSBoZXJlXCIsIG5vZGUsIHBhc3NlZE5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobm9kZS5rZXkgPT0gcGFzc2VkTm9kZS5rZXkgJiYgbm9kZS5rZXkgIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLmFkZEN1cnJlbnROb2RlVHlwZShwYXNzZWROb2RlLCBub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub2RlLmhlaWdodCA9IDEgKyBNYXRoLm1heCh0aGlzLmdldEhlaWdodChub2RlLmxlZnROb2RlKSwgdGhpcy5nZXRIZWlnaHQobm9kZS5yaWdodE5vZGUpKTtcbiAgICAgICAgICAgIGlmIChkZWJ1Z0ZsYWcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImhlaWdodCBoZXJlXCIsIG5vZGUuaGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBiYWxhbmNpbmdGYWN0b3IgPSB0aGlzLmdldEJhbGFuY2VGYWN0b3Iobm9kZSk7XG4gICAgICAgICAgICBpZiAoZGVidWdGbGFnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJiYWxhbmNpbmdGYWN0b3IgaGVyZVwiLCBiYWxhbmNpbmdGYWN0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGJhbGFuY2luZ0ZhY3RvciA+IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5sZWZ0Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGFzc2VkTm9kZS5rZXkgPCBub2RlLmxlZnROb2RlLmtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJldHVybmVyID0gdGhpcy5yaWdodFJvdGF0ZShub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZWJ1Z0ZsYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJldHVybmluZyBoZXJlIDEgXCIsIHJldHVybmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5lcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwYXNzZWROb2RlLmtleSA+IG5vZGUubGVmdE5vZGUua2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmxlZnROb2RlID0gdGhpcy5sZWZ0Um90YXRlKG5vZGUubGVmdE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJldHVybmVyID0gdGhpcy5yaWdodFJvdGF0ZShub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZWJ1Z0ZsYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJldHVybmluZyBoZXJlIDIgXCIsIHJldHVybmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5lcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChiYWxhbmNpbmdGYWN0b3IgPCAtMSkge1xuICAgICAgICAgICAgICAgIGlmIChub2RlLnJpZ2h0Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGFzc2VkTm9kZS5rZXkgPiBub2RlLnJpZ2h0Tm9kZS5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXR1cm5lciA9IHRoaXMubGVmdFJvdGF0ZShub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZWJ1Z0ZsYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJldHVybmluZyBoZXJlIDMgXCIsIHJldHVybmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5lcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwYXNzZWROb2RlLmtleSA8IG5vZGUucmlnaHROb2RlLmtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5yaWdodE5vZGUgPSB0aGlzLnJpZ2h0Um90YXRlKG5vZGUucmlnaHROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXR1cm5lciA9IHRoaXMubGVmdFJvdGF0ZShub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZWJ1Z0ZsYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJldHVybmluZyBoZXJlNCBcIiwgcmV0dXJuZXIsIG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldHVybmVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRlYnVnRmxhZykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwid2hhdCBoZXJlXCIsIG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkZWJ1Z0ZsYWcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmV0dXJuaW5nIGhlcmUgNlwiLCBub2RlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgcmlnaHRSb3RhdGUoeSkge1xuICAgICAgICBpZiAoeSkge1xuICAgICAgICAgICAgbGV0IHggPSB5LmxlZnROb2RlO1xuICAgICAgICAgICAgaWYgKHgpIHtcbiAgICAgICAgICAgICAgICBsZXQgVDIgPSB4LnJpZ2h0Tm9kZTtcbiAgICAgICAgICAgICAgICB5LmxlZnROb2RlID0gVDI7XG4gICAgICAgICAgICAgICAgeC5yaWdodE5vZGUgPSB5O1xuICAgICAgICAgICAgICAgIHkuaGVpZ2h0ID0gTWF0aC5tYXgodGhpcy5nZXRIZWlnaHQoeS5sZWZ0Tm9kZSksIHRoaXMuZ2V0SGVpZ2h0KHkucmlnaHROb2RlKSkgKyAxO1xuICAgICAgICAgICAgICAgIHguaGVpZ2h0ID0gTWF0aC5tYXgodGhpcy5nZXRIZWlnaHQoeC5sZWZ0Tm9kZSksIHRoaXMuZ2V0SGVpZ2h0KHgucmlnaHROb2RlKSkgKyAxO1xuICAgICAgICAgICAgICAgIHJldHVybiB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gcmV0dXJuIHg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHk7XG4gICAgfVxuICAgIGxlZnRSb3RhdGUoeCkge1xuICAgICAgICBpZiAoeCkge1xuICAgICAgICAgICAgbGV0IHkgPSB4LnJpZ2h0Tm9kZTtcbiAgICAgICAgICAgIGlmICh5KSB7XG4gICAgICAgICAgICAgICAgbGV0IFQyID0geS5sZWZ0Tm9kZTtcbiAgICAgICAgICAgICAgICB5LmxlZnROb2RlID0geDtcbiAgICAgICAgICAgICAgICB4LnJpZ2h0Tm9kZSA9IFQyO1xuICAgICAgICAgICAgICAgIHguaGVpZ2h0ID0gTWF0aC5tYXgodGhpcy5nZXRIZWlnaHQoeC5sZWZ0Tm9kZSksIHRoaXMuZ2V0SGVpZ2h0KHgucmlnaHROb2RlKSArIDEpO1xuICAgICAgICAgICAgICAgIHkuaGVpZ2h0ID0gTWF0aC5tYXgodGhpcy5nZXRIZWlnaHQoeS5sZWZ0Tm9kZSksIHRoaXMuZ2V0SGVpZ2h0KHgucmlnaHROb2RlKSArIDEpO1xuICAgICAgICAgICAgICAgIHJldHVybiB5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9yZXR1cm4geTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geDtcbiAgICB9XG4gICAgZ2V0SGVpZ2h0KG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlLmhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgZ2V0QmFsYW5jZUZhY3RvcihOKSB7XG4gICAgICAgIGlmIChOID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmdldEhlaWdodChOLmxlZnROb2RlKSAtIHRoaXMuZ2V0SGVpZ2h0KE4ucmlnaHROb2RlKTtcbiAgICB9XG4gICAgZ2V0RnJvbU5vZGUoaWQsIG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIGlmIChpZCA9PSBub2RlLmtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaWQgPCBub2RlLmtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEZyb21Ob2RlKGlkLCBub2RlLmxlZnROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlkID4gbm9kZS5rZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRGcm9tTm9kZShpZCwgbm9kZS5yaWdodE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIGdldENoYXJhY3RlckZyb21Ob2RlKHZhbHVlLCBub2RlKSB7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT0gbm9kZS5rZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlIDwgbm9kZS5rZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRDaGFyYWN0ZXJGcm9tTm9kZSh2YWx1ZSwgbm9kZS5sZWZ0Tm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh2YWx1ZSA+IG5vZGUua2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2hhcmFjdGVyRnJvbU5vZGUodmFsdWUsIG5vZGUucmlnaHROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgICBnZXRGcm9tTm9kZVdpdGhDaGFyYWN0ZXJBbmRUeXBlKHZhbHVlLCB0eXBlSWQsIG5vZGUpIHtcbiAgICAgICAgdmFsdWUgPSBgJHt2YWx1ZX1gO1xuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09IG5vZGUua2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09IG5vZGUudmFsdWUuY2hhcmFjdGVyVmFsdWUgJiYgdHlwZUlkID09IG5vZGUudmFsdWUudHlwZUlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RnJvbU5vZGVXaXRoQ2hhcmFjdGVyQW5kVHlwZSh2YWx1ZSwgdHlwZUlkLCBub2RlLmN1cnJlbnROb2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh2YWx1ZSA8IG5vZGUua2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RnJvbU5vZGVXaXRoQ2hhcmFjdGVyQW5kVHlwZSh2YWx1ZSwgdHlwZUlkLCBub2RlLmxlZnROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlID4gbm9kZS5rZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRGcm9tTm9kZVdpdGhDaGFyYWN0ZXJBbmRUeXBlKHZhbHVlLCB0eXBlSWQsIG5vZGUucmlnaHROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgR2V0UmVzZXJ2ZWRJZHMgfSBmcm9tIFwiLi4vQXBpL0dldFJlc2VydmVkSWRzXCI7XG5leHBvcnQgY2xhc3MgUmVzZXJ2ZWRJZHMge1xuICAgIHN0YXRpYyBnZXRJZCgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlkcy5sZW5ndGggPCA1KSB7XG4gICAgICAgICAgICAgICAgdmFyIGlkcyA9IHlpZWxkIEdldFJlc2VydmVkSWRzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaWQgPSB0aGlzLmlkc1swXTtcbiAgICAgICAgICAgIHRoaXMuaWRzLnNoaWZ0KCk7XG4gICAgICAgICAgICByZXR1cm4gaWQ7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgQWRkSWQoaWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlkcy5pbmNsdWRlcyhpZCkpIHtcbiAgICAgICAgICAgIHRoaXMuaWRzLnB1c2goaWQpO1xuICAgICAgICB9XG4gICAgfVxufVxuUmVzZXJ2ZWRJZHMuaWRzID0gW107XG4iLCJleHBvcnQgY2xhc3MgUmV0dXJuZXIge1xuICAgIGNvbnN0cnVjdG9yKGlkLCB1c2VySWQsIHJlZmVyZW50SWQsIGlzTmV3KSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy51c2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHRoaXMucmVmZXJlbnRJZCA9IHJlZmVyZW50SWQ7XG4gICAgICAgIHRoaXMuaXNOZXcgPSBpc05ldztcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgU2V0dGluZ0RhdGEge1xuICAgIGNvbnN0cnVjdG9yKGlzT25saW5lU3luYykge1xuICAgICAgICB0aGlzLmlkID0gMTtcbiAgICAgICAgdGhpcy5pc09ubGluZVN5bmMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc09ubGluZVN5bmMgPSBpc09ubGluZVN5bmM7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFNldHRpbmdzIHtcbn1cblNldHRpbmdzLmlzVXBkYXRlZCA9IGZhbHNlO1xuU2V0dGluZ3MuaXNPbmxpbmVTeW5jID0gZmFsc2U7XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IHN0b3JlVG9EYXRhYmFzZSB9IGZyb20gXCIuLy4uL0RhdGFiYXNlL2luZGV4ZWRkYlwiO1xuaW1wb3J0IHsgQ3JlYXRlVGhlQ29uY2VwdEFwaSB9IGZyb20gXCIuLi9BcGkvQ3JlYXRlL0NyZWF0ZVRoZUNvbmNlcHRBcGlcIjtcbmltcG9ydCB7IENyZWF0ZVRoZUNvbm5lY3Rpb25BcGkgfSBmcm9tIFwiLi4vQXBpL0NyZWF0ZS9DcmVhdGVUaGVDb25uZWN0aW9uQXBpXCI7XG5pbXBvcnQgeyBDb25jZXB0c0RhdGEgfSBmcm9tIFwiLi9Db25jZXB0RGF0YVwiO1xuaW1wb3J0IHsgQ29ubmVjdGlvbkRhdGEgfSBmcm9tIFwiLi9Db25uZWN0aW9uRGF0YVwiO1xuZXhwb3J0IGNsYXNzIFN5bmNEYXRhIHtcbiAgICBzdGF0aWMgQ2hlY2tDb250YWlucyhjb25jZXB0KSB7XG4gICAgICAgIHZhciBjb250YWlucyA9IGZhbHNlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29uY2VwdHNTeW5jQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmNlcHRzU3luY0FycmF5W2ldLmlkID09IGNvbmNlcHQuaWQpIHtcbiAgICAgICAgICAgICAgICBjb250YWlucyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5zO1xuICAgIH1cbiAgICBzdGF0aWMgU3luY0RhdGFEZWxldGUoaWQpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbmNlcHRzU3luY0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaWQgPT0gdGhpcy5jb25jZXB0c1N5bmNBcnJheVtpXS5pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29uY2VwdHNTeW5jQXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb25uZWN0aW9uU3luY0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uU3luY0FycmF5W2ldLm9mVGhlQ29uY2VwdElkID09IGlkIHx8IHRoaXMuY29ubmVjdGlvblN5bmNBcnJheVtpXS50b1RoZUNvbmNlcHRJZCA9PSBpZCB8fCB0aGlzLmNvbm5lY3Rpb25TeW5jQXJyYXlbaV0udHlwZUlkID09IGlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uU3luY0FycmF5LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgQ2hlY2tDb250YWluc0Nvbm5lY3Rpb24oY29ubmVjdGlvbikge1xuICAgICAgICB2YXIgY29udGFpbnMgPSBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbm5lY3Rpb25TeW5jQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25TeW5jQXJyYXlbaV0uaWQgPT0gY29ubmVjdGlvbi5pZCkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5zID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGFpbnM7XG4gICAgfVxuICAgIHN0YXRpYyBBZGRDb25jZXB0KGNvbmNlcHQpIHtcbiAgICAgICAgdmFyIGNvbnRhaW5zID0gZmFsc2U7XG4gICAgICAgIC8vIENvbmNlcHRzRGF0YS5BZGRDb25jZXB0VGVtcG9yYXJ5KGNvbmNlcHQpO1xuICAgICAgICBpZiAoIWNvbnRhaW5zKSB7XG4gICAgICAgICAgICB0aGlzLmNvbmNlcHRzU3luY0FycmF5LnB1c2goY29uY2VwdCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIFJlbW92ZUNvbmNlcHQoY29uY2VwdCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29uY2VwdHNTeW5jQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmNlcHRzU3luY0FycmF5W2ldLmlkID09IGNvbmNlcHQuaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmNlcHRzU3luY0FycmF5LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgQWRkQ29ubmVjdGlvbihjb25uZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvblN5bmNBcnJheS5wdXNoKGNvbm5lY3Rpb24pO1xuICAgIH1cbiAgICBzdGF0aWMgUmVtb3ZlQ29ubmVjdGlvbihjb25uZWN0aW9uKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb25uZWN0aW9uU3luY0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uU3luY0FycmF5W2ldLmlkID09IGNvbm5lY3Rpb24uaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25TeW5jQXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBTeW5jRGF0YU9ubGluZSgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb25jZXB0c1N5bmNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIENvbmNlcHRzRGF0YS5BZGRDb25jZXB0KHRoaXMuY29uY2VwdHNTeW5jQXJyYXlbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbm5lY3Rpb25TeW5jQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBDb25uZWN0aW9uRGF0YS5BZGRDb25uZWN0aW9uKHRoaXMuY29ubmVjdGlvblN5bmNBcnJheVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5jb25jZXB0c1N5bmNBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgQ3JlYXRlVGhlQ29uY2VwdEFwaSh0aGlzLmNvbmNlcHRzU3luY0FycmF5KTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmNlcHRzU3luY0FycmF5ID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uU3luY0FycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBDcmVhdGVUaGVDb25uZWN0aW9uQXBpKHRoaXMuY29ubmVjdGlvblN5bmNBcnJheSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uU3luY0FycmF5ID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gXCJkb25lXCI7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgc3luY0RhdGFMb2NhbERiKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29uY2VwdHNTeW5jQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb25jZXB0c1N5bmNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZVRvRGF0YWJhc2UoXCJsb2NhbGNvbmNlcHRcIiwgdGhpcy5jb25jZXB0c1N5bmNBcnJheVtpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuY29uY2VwdHNTeW5jQXJyYXkgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25TeW5jQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb25uZWN0aW9uU3luY0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlVG9EYXRhYmFzZShcImxvY2FsY29ubmVjdGlvblwiLCB0aGlzLmNvbm5lY3Rpb25TeW5jQXJyYXlbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25TeW5jQXJyYXkgPSBbXTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbm5lY3Rpb25TeW5jQXJyYXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFwiZG9uZVwiO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5TeW5jRGF0YS5jb25jZXB0c1N5bmNBcnJheSA9IFtdO1xuU3luY0RhdGEuY29ubmVjdGlvblN5bmNBcnJheSA9IFtdO1xuIiwiZXhwb3J0IGNsYXNzIFRoZUNoYXJhY3RlciB7XG4gICAgY29uc3RydWN0b3IodXNlcklkLCBkYXRhLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbklkLCBzZXNzaW9uVXNlcklkLCBlbnRyeVRpbWVzdGFtcCwgaXNOZXcpIHtcbiAgICAgICAgdGhpcy5pZCA9IDA7XG4gICAgICAgIHRoaXMuaXNOZXcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy51c2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHRoaXMuZGF0YSA9IGAke2RhdGF9YDtcbiAgICAgICAgdGhpcy5zZWN1cml0eUlkID0gc2VjdXJpdHlJZDtcbiAgICAgICAgdGhpcy5zZWN1cml0eVVzZXJJZCA9IHNlY3VyaXR5VXNlcklkO1xuICAgICAgICB0aGlzLmFjY2Vzc0lkID0gYWNjZXNzSWQ7XG4gICAgICAgIHRoaXMuYWNjZXNzVXNlcklkID0gYWNjZXNzVXNlcklkO1xuICAgICAgICB0aGlzLnNlc3Npb25JZCA9IHNlc3Npb25JZDtcbiAgICAgICAgdGhpcy5zZXNzaW9uVXNlcklkID0gc2Vzc2lvblVzZXJJZDtcbiAgICAgICAgdGhpcy5pc05ldyA9IGlzTmV3O1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBUaGVUZXh0cyB7XG4gICAgY29uc3RydWN0b3IodXNlcklkLCBkYXRhLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbklkLCBzZXNzaW9uVXNlcklkLCBlbnRyeVRpbWVzdGFtcCwgaXNOZXcpIHtcbiAgICAgICAgdGhpcy5pZCA9IDA7XG4gICAgICAgIHRoaXMudXNlcklkID0gdXNlcklkO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLnNlY3VyaXR5SWQgPSBzZWN1cml0eUlkO1xuICAgICAgICB0aGlzLnNlY3VyaXR5VXNlcklkID0gc2VjdXJpdHlVc2VySWQ7XG4gICAgICAgIHRoaXMuYWNjZXNzSWQgPSBhY2Nlc3NJZDtcbiAgICAgICAgdGhpcy5hY2Nlc3NVc2VySWQgPSBhY2Nlc3NVc2VySWQ7XG4gICAgICAgIHRoaXMuc2Vzc2lvbklkID0gc2Vzc2lvbklkO1xuICAgICAgICB0aGlzLnNlc3Npb25Vc2VySWQgPSBzZXNzaW9uVXNlcklkO1xuICAgICAgICB0aGlzLmVudHJ5VGltZXN0YW1wID0gZW50cnlUaW1lc3RhbXA7XG4gICAgICAgIHRoaXMuaXNOZXcgPSBpc05ldztcbiAgICB9XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciB2ZXJzaW9uID0gNDtcbmV4cG9ydCBmdW5jdGlvbiBvcGVuRGF0YWJhc2UoZGF0YWJhc2VOYW1lKSB7XG4gICAgbGV0IGRiO1xuICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIub3BlbihcIkZyZWVTY2hlbWFMb2NhbFwiLCB2ZXJzaW9uKTtcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIldoeSBkaWRuJ3QgeW91IGFsbG93IG15IHdlYiBhcHAgdG8gdXNlIEluZGV4ZWREQj8hXCIpO1xuICAgIH07XG4gICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgdmFyIGRiID0gdGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgbGV0IHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24oZGF0YWJhc2VOYW1lLCBcInJlYWR3cml0ZVwiKTtcbiAgICB9O1xuICAgIHJlcXVlc3Qub251cGdyYWRlbmVlZGVkID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIHZhciBkYiA9IHRhcmdldC5yZXN1bHQ7XG4gICAgICAgIHZhciBjb25jZXB0RGIgPSBcImxvY2FsY29uY2VwdFwiO1xuICAgICAgICB2YXIgY29ubmVjdGlvbkRiID0gXCJsb2NhbGNvbm5lY3Rpb25cIjtcbiAgICAgICAgaWYgKCFkYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKGNvbmNlcHREYikpIHsgLy8gaWYgdGhlcmUncyBubyBkYXRhYmFzZSBuYW1lXG4gICAgICAgICAgICBsZXQgb2JqZWN0U3RvcmUgPSBkYi5jcmVhdGVPYmplY3RTdG9yZShjb25jZXB0RGIsIHsga2V5UGF0aDogJ2lkJyB9KTsgLy8gY3JlYXRlIGl0XG4gICAgICAgICAgICBvYmplY3RTdG9yZS50cmFuc2FjdGlvbi5vbmNvbXBsZXRlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmICghZGIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucyhjb25uZWN0aW9uRGIpKSB7IC8vIGlmIHRoZXJlJ3Mgbm8gZGF0YWJhc2UgbmFtZVxuICAgICAgICAgICAgbGV0IG9iamVjdFN0b3JlID0gZGIuY3JlYXRlT2JqZWN0U3RvcmUoY29ubmVjdGlvbkRiLCB7IGtleVBhdGg6ICdpZCcgfSk7IC8vIGNyZWF0ZSBpdFxuICAgICAgICAgICAgb2JqZWN0U3RvcmUudHJhbnNhY3Rpb24ub25jb21wbGV0ZSA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gc3RvcmVUb0RhdGFiYXNlKGRhdGFiYXNlTmFtZSwgb2JqZWN0KSB7XG4gICAgb3BlbkRhdGFiYXNlKGRhdGFiYXNlTmFtZSk7XG4gICAgbGV0IGRiO1xuICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIub3BlbihcIkZyZWVTY2hlbWFMb2NhbFwiLCB2ZXJzaW9uKTtcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIldoeSBkaWRuJ3QgeW91IGFsbG93IG15IHdlYiBhcHAgdG8gdXNlIEluZGV4ZWREQj8hXCIpO1xuICAgIH07XG4gICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgdmFyIGRiID0gdGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgbGV0IHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24oZGF0YWJhc2VOYW1lLCBcInJlYWR3cml0ZVwiKTtcbiAgICAgICAgbGV0IG9ialN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoZGF0YWJhc2VOYW1lKTtcbiAgICAgICAgb2JqU3RvcmUuYWRkKG9iamVjdCk7XG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxGcm9tTG9jYWxEYihkYXRhYmFzZU5hbWUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgb3BlbkRhdGFiYXNlKGRhdGFiYXNlTmFtZSk7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4oXCJGcmVlU2NoZW1hTG9jYWxcIiwgdmVyc2lvbik7XG4gICAgICAgICAgICB2YXIgY29uY2VwdDtcbiAgICAgICAgICAgIHZhciBDb25jZXB0TGlzdCA9IFtdO1xuICAgICAgICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgICAgIHZhciBkYiA9IHRhcmdldC5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgbGV0IHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24oZGF0YWJhc2VOYW1lLCBcInJlYWR3cml0ZVwiKTtcbiAgICAgICAgICAgICAgICBsZXQgb2JqZWN0U3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShkYXRhYmFzZU5hbWUpO1xuICAgICAgICAgICAgICAgIHZhciBhbGxvYmplY3RzID0gb2JqZWN0U3RvcmUuZ2V0QWxsKCk7XG4gICAgICAgICAgICAgICAgYWxsb2JqZWN0cy5vbnN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0dWRlbnRzID0gYWxsb2JqZWN0cy5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R1ZGVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmNlcHRMaXN0LnB1c2goc3R1ZGVudHNbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoQ29uY2VwdExpc3QpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgLy8gICAvLyBEYXRhYmFzZSBvcGVuZWQgc3VjY2Vzc2Z1bGx5XG4gICAgICAgICAgICAgICAgLy8gfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXZlbnQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHJldHVybiBDb25jZXB0TGlzdDtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGcm9tRGF0YWJhc2UoZGF0YWJhc2VOYW1lLCBpZCkge1xuICAgIG9wZW5EYXRhYmFzZShkYXRhYmFzZU5hbWUpO1xuICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIub3BlbihcIkZyZWVTY2hlbWFMb2NhbFwiLCB2ZXJzaW9uKTtcbiAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICB2YXIgZGIgPSB0YXJnZXQucmVzdWx0O1xuICAgICAgICBsZXQgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbihkYXRhYmFzZU5hbWUsIFwicmVhZHdyaXRlXCIpO1xuICAgICAgICBsZXQgb2JqZWN0U3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShkYXRhYmFzZU5hbWUpO1xuICAgICAgICBsZXQgZ2V0UmVxdWVzdCA9IG9iamVjdFN0b3JlLmRlbGV0ZShpZCk7XG4gICAgICAgIGdldFJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgLy8gY29uY2VwdCA9ICBldmVudC50YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgLy8gQWNjZXNzIHRoZSByZXRyaWV2ZWQgZGF0YVxuICAgICAgICB9O1xuICAgIH07XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IFNldHRpbmdEYXRhIH0gZnJvbSBcIi4uL0RhdGFTdHJ1Y3R1cmVzL1NldHRpbmdEYXRhXCI7XG52YXIgdmVyc2lvbiA9IDQ7XG5leHBvcnQgZnVuY3Rpb24gb3BlbkRhdGFiYXNlKGRhdGFiYXNlTmFtZSkge1xuICAgIGxldCBkYjtcbiAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4oXCJGcmVlU2NoZW1hXCIsIHZlcnNpb24pO1xuICAgIHJlcXVlc3Qub25lcnJvciA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiV2h5IGRpZG4ndCB5b3UgYWxsb3cgbXkgd2ViIGFwcCB0byB1c2UgSW5kZXhlZERCPyFcIik7XG4gICAgfTtcbiAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICB2YXIgZGIgPSB0YXJnZXQucmVzdWx0O1xuICAgICAgICBsZXQgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbihkYXRhYmFzZU5hbWUsIFwicmVhZHdyaXRlXCIpO1xuICAgIH07XG4gICAgcmVxdWVzdC5vbnVwZ3JhZGVuZWVkZWQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgdmFyIGRiID0gdGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgdmFyIGNvbmNlcHREYiA9IFwiY29uY2VwdFwiO1xuICAgICAgICB2YXIgY29ubmVjdGlvbkRiID0gXCJjb25uZWN0aW9uXCI7XG4gICAgICAgIHZhciBzZXR0aW5ncyA9IFwic2V0dGluZ3NcIjtcbiAgICAgICAgaWYgKCFkYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKGNvbmNlcHREYikpIHsgLy8gaWYgdGhlcmUncyBubyBkYXRhYmFzZSBuYW1lXG4gICAgICAgICAgICBsZXQgb2JqZWN0U3RvcmUgPSBkYi5jcmVhdGVPYmplY3RTdG9yZShjb25jZXB0RGIsIHsga2V5UGF0aDogJ2lkJyB9KTsgLy8gY3JlYXRlIGl0XG4gICAgICAgICAgICBvYmplY3RTdG9yZS50cmFuc2FjdGlvbi5vbmNvbXBsZXRlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gU3RvcmUgdmFsdWVzIGluIHRoZSBuZXdseSBjcmVhdGVkIG9iamVjdFN0b3JlLlxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IG15T2JqZWN0U3RvcmUgPSBkYlxuICAgICAgICAgICAgICAgIC8vIC50cmFuc2FjdGlvbihkYXRhYmFzZU5hbWUsIFwicmVhZHdyaXRlXCIpXG4gICAgICAgICAgICAgICAgLy8gLm9iamVjdFN0b3JlKGRhdGFiYXNlTmFtZSk7XG4gICAgICAgICAgICAgICAgLy8gbXlPYmplY3RTdG9yZS5hZGQob2JqZWN0KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFkYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKGNvbm5lY3Rpb25EYikpIHsgLy8gaWYgdGhlcmUncyBubyBkYXRhYmFzZSBuYW1lXG4gICAgICAgICAgICBsZXQgb2JqZWN0U3RvcmUgPSBkYi5jcmVhdGVPYmplY3RTdG9yZShjb25uZWN0aW9uRGIsIHsga2V5UGF0aDogJ2lkJyB9KTsgLy8gY3JlYXRlIGl0XG4gICAgICAgICAgICBvYmplY3RTdG9yZS50cmFuc2FjdGlvbi5vbmNvbXBsZXRlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmICghZGIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucyhzZXR0aW5ncykpIHtcbiAgICAgICAgICAgIGxldCBvYmplY3RTdG9yZSA9IGRiLmNyZWF0ZU9iamVjdFN0b3JlKHNldHRpbmdzLCB7IGtleVBhdGg6ICdpZCcgfSk7IC8vIGNyZWF0ZSBpdFxuICAgICAgICAgICAgb2JqZWN0U3RvcmUudHJhbnNhY3Rpb24ub25jb21wbGV0ZSA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gc3RvcmVUb0RhdGFiYXNlKGRhdGFiYXNlTmFtZSwgb2JqZWN0KSB7XG4gICAgb3BlbkRhdGFiYXNlKGRhdGFiYXNlTmFtZSk7XG4gICAgbGV0IGRiO1xuICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIub3BlbihcIkZyZWVTY2hlbWFcIiwgdmVyc2lvbik7XG4gICAgcmVxdWVzdC5vbmVycm9yID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJXaHkgZGlkbid0IHlvdSBhbGxvdyBteSB3ZWIgYXBwIHRvIHVzZSBJbmRleGVkREI/IVwiKTtcbiAgICB9O1xuICAgIHJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmIChvYmplY3QuaWQgIT0gMCkge1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgIHZhciBkYiA9IHRhcmdldC5yZXN1bHQ7XG4gICAgICAgICAgICBsZXQgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbihkYXRhYmFzZU5hbWUsIFwicmVhZHdyaXRlXCIpO1xuICAgICAgICAgICAgbGV0IG9ialN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoZGF0YWJhc2VOYW1lKTtcbiAgICAgICAgICAgIG9ialN0b3JlLmFkZChvYmplY3QpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyByZXF1ZXN0Lm9udXBncmFkZW5lZWRlZCA9IChldmVudCkgPT4ge1xuICAgIC8vICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIElEQk9wZW5EQlJlcXVlc3Q7XG4gICAgLy8gICAgIHZhciBkYiA9IHRhcmdldC5yZXN1bHQgYXMgSURCRGF0YWJhc2U7XG4gICAgLy8gICAgIHZhciBjb25jZXB0RGIgPSBcImNvbmNlcHRcIjtcbiAgICAvLyAgICAgdmFyIGNvbm5lY3Rpb25EYiA9IFwiY29ubmVjdGlvblwiO1xuICAgIC8vICAgICB2YXIgc2V0dGluZ3MgPSBcInNldHRpbmdzXCJcbiAgICAvLyAgICAgaWYgKCFkYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKGNvbmNlcHREYikpIHsgLy8gaWYgdGhlcmUncyBubyBkYXRhYmFzZSBuYW1lXG4gICAgLy8gICAgICAgbGV0ICBvYmplY3RTdG9yZSA9IGRiLmNyZWF0ZU9iamVjdFN0b3JlKGNvbmNlcHREYiwge2tleVBhdGg6ICdpZCd9KTsgLy8gY3JlYXRlIGl0XG4gICAgLy8gICAgICAgb2JqZWN0U3RvcmUudHJhbnNhY3Rpb24ub25jb21wbGV0ZSA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICAvLyAgICAgICAgICAgICAvLyBTdG9yZSB2YWx1ZXMgaW4gdGhlIG5ld2x5IGNyZWF0ZWQgb2JqZWN0U3RvcmUuXG4gICAgLy8gICAgICAgICAgICAgLy8gY29uc3QgbXlPYmplY3RTdG9yZSA9IGRiXG4gICAgLy8gICAgICAgICAgICAgLy8gLnRyYW5zYWN0aW9uKGRhdGFiYXNlTmFtZSwgXCJyZWFkd3JpdGVcIilcbiAgICAvLyAgICAgICAgICAgICAvLyAub2JqZWN0U3RvcmUoZGF0YWJhc2VOYW1lKTtcbiAgICAvLyAgICAgICAgICAgICAvLyBteU9iamVjdFN0b3JlLmFkZChvYmplY3QpO1xuICAgIC8vICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZiAoIWRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoY29ubmVjdGlvbkRiKSkgeyAvLyBpZiB0aGVyZSdzIG5vIGRhdGFiYXNlIG5hbWVcbiAgICAvLyAgICAgICBsZXQgIG9iamVjdFN0b3JlID0gZGIuY3JlYXRlT2JqZWN0U3RvcmUoY29ubmVjdGlvbkRiLCB7a2V5UGF0aDogJ2lkJ30pOyAvLyBjcmVhdGUgaXRcbiAgICAvLyAgICAgICBvYmplY3RTdG9yZS50cmFuc2FjdGlvbi5vbmNvbXBsZXRlID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgIC8vICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZighZGIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucyhzZXR0aW5ncykpe1xuICAgIC8vICAgICAgIGxldCAgb2JqZWN0U3RvcmUgPSBkYi5jcmVhdGVPYmplY3RTdG9yZShzZXR0aW5ncywge2tleVBhdGg6ICdpZCd9KTsgLy8gY3JlYXRlIGl0XG4gICAgLy8gICAgICAgb2JqZWN0U3RvcmUudHJhbnNhY3Rpb24ub25jb21wbGV0ZSA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0RnJvbURhdGFiYXNlKGRhdGFiYXNlTmFtZSwgaWQpIHtcbiAgICBvcGVuRGF0YWJhc2UoZGF0YWJhc2VOYW1lKTtcbiAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4oXCJGcmVlU2NoZW1hXCIsIHZlcnNpb24pO1xuICAgIHZhciBjb25jZXB0O1xuICAgIHJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIHZhciBkYiA9IHRhcmdldC5yZXN1bHQ7XG4gICAgICAgIGxldCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKGRhdGFiYXNlTmFtZSwgXCJyZWFkd3JpdGVcIik7XG4gICAgICAgIGxldCBvYmplY3RTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKGRhdGFiYXNlTmFtZSk7XG4gICAgICAgIGxldCBnZXRSZXF1ZXN0ID0gb2JqZWN0U3RvcmUuZ2V0KGlkKTtcbiAgICAgICAgZ2V0UmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICBjb25jZXB0ID0gdGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICAgIHJldHVybiBjb25jZXB0O1xuICAgICAgICAgICAgLy8gY29uY2VwdCA9ICBldmVudC50YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgLy8gQWNjZXNzIHRoZSByZXRyaWV2ZWQgZGF0YVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gY29uY2VwdDtcbiAgICAgICAgLy8gICAvLyBEYXRhYmFzZSBvcGVuZWQgc3VjY2Vzc2Z1bGx5XG4gICAgICAgIC8vIH07XG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBHZXRTdGF0c0Zyb21EYXRhYmFzZSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgZGF0YWJhc2VOYW1lID0gXCJzZXR0aW5nc1wiO1xuICAgICAgICBvcGVuRGF0YWJhc2UoZGF0YWJhc2VOYW1lKTtcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKFwiRnJlZVNjaGVtYVwiLCB2ZXJzaW9uKTtcbiAgICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICB2YXIgZGIgPSB0YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgbGV0IHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24oZGF0YWJhc2VOYW1lLCBcInJlYWR3cml0ZVwiKTtcbiAgICAgICAgICAgIGxldCBvYmplY3RTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKGRhdGFiYXNlTmFtZSk7XG4gICAgICAgICAgICB2YXIgYWxsb2JqZWN0cyA9IG9iamVjdFN0b3JlLmdldEFsbCgpO1xuICAgICAgICAgICAgYWxsb2JqZWN0cy5vbnN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIHNldHRpbmdzRGF0YSA9IG5ldyBTZXR0aW5nRGF0YShmYWxzZSk7XG4gICAgICAgICAgICAgICAgdmFyIHNldHRpbmdzQXJyYXkgPSBhbGxvYmplY3RzLnJlc3VsdDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNldHRpbmdzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3NEYXRhID0gc2V0dGluZ3NBcnJheVtpXTtcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3NEYXRhID0gc2V0dGluZ3NEYXRhO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHNldHRpbmdzRGF0YSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHJlamVjdChldmVudCk7XG4gICAgICAgIH07XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gQWlVcGRhdGVGbGFnKG9iamVjdCkge1xuICAgIHZhciBkYXRhYmFzZU5hbWUgPSBcInNldHRpbmdzXCI7XG4gICAgb3BlbkRhdGFiYXNlKGRhdGFiYXNlTmFtZSk7XG4gICAgY29uc3QgcmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKFwiRnJlZVNjaGVtYVwiLCB2ZXJzaW9uKTtcbiAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICB2YXIgZGIgPSB0YXJnZXQucmVzdWx0O1xuICAgICAgICBsZXQgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbihkYXRhYmFzZU5hbWUsIFwicmVhZHdyaXRlXCIpO1xuICAgICAgICBsZXQgb2JqU3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShkYXRhYmFzZU5hbWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhvYmplY3QpO1xuICAgICAgICBvYmpTdG9yZS5wdXQob2JqZWN0KTtcbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEZyb21EYXRhYmFzZVdpdGhUeXBlKGRhdGFiYXNlTmFtZSwgdHlwZSwgaWQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgb3BlbkRhdGFiYXNlKGRhdGFiYXNlTmFtZSk7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4oXCJGcmVlU2NoZW1hXCIsIHZlcnNpb24pO1xuICAgICAgICAgICAgdmFyIGNvbmNlcHQ7XG4gICAgICAgICAgICB2YXIgQ29uY2VwdExpc3QgPSBbXTtcbiAgICAgICAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgICAgICB2YXIgZGIgPSB0YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgICAgIGxldCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKGRhdGFiYXNlTmFtZSwgXCJyZWFkd3JpdGVcIik7XG4gICAgICAgICAgICAgICAgbGV0IG9iamVjdFN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoZGF0YWJhc2VOYW1lKTtcbiAgICAgICAgICAgICAgICBjb25zdCBnZXRDdXJzb3JSZXF1ZXN0ID0gb2JqZWN0U3RvcmUub3BlbkN1cnNvcigpO1xuICAgICAgICAgICAgICAgIGdldEN1cnNvclJlcXVlc3Qub25zdWNjZXNzID0gZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEN1cnNvciBsb2dpYyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnNvciA9IHRhcmdldC5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJzb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJzb3IudmFsdWVbdHlwZV0gPT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25jZXB0ID0gY3Vyc29yLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbmNlcHRMaXN0LnB1c2goY29uY2VwdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IuY29udGludWUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShDb25jZXB0TGlzdCk7XG4gICAgICAgICAgICAgICAgLy8gICAvLyBEYXRhYmFzZSBvcGVuZWQgc3VjY2Vzc2Z1bGx5XG4gICAgICAgICAgICAgICAgLy8gfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXZlbnQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHJldHVybiBDb25jZXB0TGlzdDtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRGcm9tRGF0YWJhc2VXaXRoVHlwZU9sZChkYXRhYmFzZU5hbWUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgb3BlbkRhdGFiYXNlKGRhdGFiYXNlTmFtZSk7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4oXCJGcmVlU2NoZW1hXCIsIHZlcnNpb24pO1xuICAgICAgICAgICAgdmFyIGNvbmNlcHQ7XG4gICAgICAgICAgICB2YXIgQ29uY2VwdExpc3QgPSBbXTtcbiAgICAgICAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgICAgICB2YXIgZGIgPSB0YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgICAgIGxldCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKGRhdGFiYXNlTmFtZSwgXCJyZWFkd3JpdGVcIik7XG4gICAgICAgICAgICAgICAgbGV0IG9iamVjdFN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoZGF0YWJhc2VOYW1lKTtcbiAgICAgICAgICAgICAgICB2YXIgYWxsb2JqZWN0cyA9IG9iamVjdFN0b3JlLmdldEFsbCgpO1xuICAgICAgICAgICAgICAgIGFsbG9iamVjdHMub25zdWNjZXNzID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHVkZW50cyA9IGFsbG9iamVjdHMucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0dWRlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDb25jZXB0TGlzdC5wdXNoKHN0dWRlbnRzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKENvbmNlcHRMaXN0KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIC8vICAgLy8gRGF0YWJhc2Ugb3BlbmVkIHN1Y2Nlc3NmdWxseVxuICAgICAgICAgICAgICAgIC8vIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGV2ZW50KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICAvLyByZXR1cm4gQ29uY2VwdExpc3Q7XG4gICAgfSk7XG59XG4vLyAgIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRGcm9tRGF0YWJhc2VXaXRoQ2hhcmFjdGVyT2xkKGRhdGFiYXNlTmFtZTpzdHJpbmcsIHR5cGU6c3RyaW5nLCBjaGFyYWN0ZXJWYWx1ZTpzdHJpbmcpe1xuLy8gICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuLy8gICAgIG9wZW5EYXRhYmFzZShkYXRhYmFzZU5hbWUpO1xuLy8gICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIub3BlbihcIkZyZWVTY2hlbWFcIix2ZXJzaW9uKTtcbi8vICAgICB2YXIgY29uY2VwdDogQ29uY2VwdHxudWxsO1xuLy8gICAgIHJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24oZXZlbnQpIHtcbi8vICAgICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBJREJPcGVuREJSZXF1ZXN0O1xuLy8gICAgICAgICB2YXIgZGIgPSB0YXJnZXQucmVzdWx0IGFzIElEQkRhdGFiYXNlO1xuLy8gICAgICAgbGV0IHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24oZGF0YWJhc2VOYW1lLCBcInJlYWR3cml0ZVwiKSBhcyBJREJUcmFuc2FjdGlvbjtcbi8vICAgICAgIGxldCBvYmplY3RTdG9yZSA9dHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoZGF0YWJhc2VOYW1lKSBhcyBJREJPYmplY3RTdG9yZTtcbi8vICAgICAgIHZhciBhbGxvYmplY3RzID0gb2JqZWN0U3RvcmUuZ2V0QWxsKCk7XG4vLyAgICAgICBhbGxvYmplY3RzLm9uc3VjY2VzcyA9ICgpPT4ge1xuLy8gICAgICAgICBjb25zdCBzdHVkZW50cyA9IGFsbG9iamVjdHMucmVzdWx0O1xuLy8gICAgICAgICBmb3IodmFyIGk9MDsgaTxzdHVkZW50cy5sZW5ndGg7IGkrKyl7XG4vLyAgICAgICAgICAgaWYoc3R1ZGVudHNbaV0uY2hhcmFjdGVyX3ZhbHVlID09IGNoYXJhY3RlclZhbHVlKXtcbi8vICAgICAgICAgICAgIGNvbmNlcHQgPSBzdHVkZW50c1tpXTtcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgY29uc29sZS5sb2coXCJyZXNvbHZpbmdcIik7XG4vLyAgICAgICAgIHJlc29sdmUoY29uY2VwdCk7IFxuLy8gICAgIH1cbi8vICAgICAvLyAgIC8vIERhdGFiYXNlIG9wZW5lZCBzdWNjZXNzZnVsbHlcbi8vICAgICAvLyB9O1xuLy8gICAgIH1cbi8vICAgICByZXF1ZXN0Lm9uZXJyb3IgPWZ1bmN0aW9uKGV2ZW50KXtcbi8vICAgICAgIHJlamVjdChldmVudCk7XG4vLyAgICAgfVxuLy8gfSk7XG4vLyAgICAvLyByZXR1cm4gQ29uY2VwdExpc3Q7XG4vLyAgIH1cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGcm9tRGF0YWJhc2UoZGF0YWJhc2VOYW1lLCBpZCkge1xuICAgIG9wZW5EYXRhYmFzZShkYXRhYmFzZU5hbWUpO1xuICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIub3BlbihcIkZyZWVTY2hlbWFcIiwgdmVyc2lvbik7XG4gICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgdmFyIGRiID0gdGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgbGV0IHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24oZGF0YWJhc2VOYW1lLCBcInJlYWR3cml0ZVwiKTtcbiAgICAgICAgbGV0IG9iamVjdFN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoZGF0YWJhc2VOYW1lKTtcbiAgICAgICAgbGV0IGdldFJlcXVlc3QgPSBvYmplY3RTdG9yZS5kZWxldGUoaWQpO1xuICAgICAgICBnZXRSZXF1ZXN0Lm9uc3VjY2VzcyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgIC8vIGNvbmNlcHQgPSAgZXZlbnQudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICAgIC8vIEFjY2VzcyB0aGUgcmV0cmlldmVkIGRhdGFcbiAgICAgICAgfTtcbiAgICB9O1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBCaW5hcnlUcmVlIH0gZnJvbSBcIi4uL0RhdGFTdHJ1Y3R1cmVzL0JpbmFyeVRyZWVcIjtcbmltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi4vRGF0YVN0cnVjdHVyZXMvTm9kZVwiO1xuaW1wb3J0IHsgZ2V0RnJvbURhdGFiYXNlV2l0aFR5cGVPbGQgfSBmcm9tIFwiLi4vYXBwXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVCaW5hcnlUcmVlRnJvbURhdGEoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgY29uY2VwdExpc3QgPSB5aWVsZCBnZXRGcm9tRGF0YWJhc2VXaXRoVHlwZU9sZChcImNvbmNlcHRcIik7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNvbmNlcHRMaXN0KSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb25jZXB0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBjb25jZXB0ID0gY29uY2VwdExpc3RbaV07XG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBuZXcgTm9kZShjb25jZXB0LmlkLCBjb25jZXB0LCBudWxsLCBudWxsKTtcbiAgICAgICAgICAgICAgICBCaW5hcnlUcmVlLmFkZE5vZGVUb1RyZWUobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVuZFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIHRpbWUgPSBlbmRUaW1lIC0gc3RhcnRUaW1lO1xuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBCaW5hcnlDaGFyYWN0ZXJUcmVlIH0gZnJvbSBcIi4uL0RhdGFTdHJ1Y3R1cmVzL0JpbmFyeUNoYXJhY3RlclRyZWVcIjtcbmltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi4vRGF0YVN0cnVjdHVyZXMvTm9kZVwiO1xuaW1wb3J0IHsgZ2V0RnJvbURhdGFiYXNlV2l0aFR5cGVPbGQgfSBmcm9tIFwiLi4vYXBwXCI7XG5leHBvcnQgZnVuY3Rpb24gQ3JlYXRlQ2hhcmFjdGVyQmluYXJ5VHJlZUZyb21EYXRhKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciB0cmVlID0gbmV3IEJpbmFyeUNoYXJhY3RlclRyZWUoKTtcbiAgICAgICAgdmFyIHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgY29uY2VwdExpc3QgPSB5aWVsZCBnZXRGcm9tRGF0YWJhc2VXaXRoVHlwZU9sZChcImNvbmNlcHRcIik7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNvbmNlcHRMaXN0KSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb25jZXB0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBjb25jZXB0ID0gY29uY2VwdExpc3RbaV07XG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBuZXcgTm9kZShjb25jZXB0LmNoYXJhY3RlclZhbHVlLCBjb25jZXB0LCBudWxsLCBudWxsKTtcbiAgICAgICAgICAgICAgICBCaW5hcnlDaGFyYWN0ZXJUcmVlLmFkZE5vZGVUb1RyZWUobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJ3aGF0IGlzIHRoaXNcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKEJpbmFyeUNoYXJhY3RlclRyZWUuY2hhcmFjdGVyUm9vdCk7XG4gICAgICAgIHZhciBlbmRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciB0aW1lID0gZW5kVGltZSAtIHN0YXJ0VGltZTtcbiAgICB9KTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gXCIuLi9EYXRhU3RydWN0dXJlcy9Db25uZWN0aW9uXCI7XG5pbXBvcnQgeyBTeW5jRGF0YSB9IGZyb20gXCIuLi9EYXRhU3RydWN0dXJlcy9TeW5jRGF0YVwiO1xuaW1wb3J0IE1ha2VUaGVJbnN0YW5jZUNvbmNlcHQgZnJvbSBcIi4vTWFrZVRoZUluc3RhbmNlQ29uY2VwdFwiO1xuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZUNvbm5lY3Rpb25CZXR3ZWVuVHdvQ29uY2VwdHMoY29uY2VwdDFEYXRhLCBjb25jZXB0MkRhdGEsIGxpbmtlciwgYm90aCA9IGZhbHNlKSB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgdXNlcklkID0gY29uY2VwdDFEYXRhLnVzZXJJZDtcbiAgICAgICAgdmFyIG9yZGVyVXNlcklkID0gdXNlcklkO1xuICAgICAgICB2YXIgc2VjdXJpdHlJZCA9IDk5OTtcbiAgICAgICAgdmFyIHNlY3VyaXR5VXNlcklkID0gdXNlcklkO1xuICAgICAgICB2YXIgYWNjZXNzSWQgPSA0O1xuICAgICAgICB2YXIgYWNjZXNzVXNlcklkID0gdXNlcklkO1xuICAgICAgICB2YXIgc2Vzc2lvbkluZm9ybWF0aW9uSWQgPSA5OTk7XG4gICAgICAgIHZhciBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQgPSA5OTk7XG4gICAgICAgIGlmIChib3RoKSB7XG4gICAgICAgICAgICBsZXQgcHJlZml4MSA9ICgoX2EgPSBjb25jZXB0MURhdGEudHlwZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNoYXJhY3RlclZhbHVlKSArIFwiX3NcIjtcbiAgICAgICAgICAgIGxldCBsaW5rZXJBZGQxID0gbGlua2VyICsgXCJfYnlcIjtcbiAgICAgICAgICAgIGxldCBiYWNrd2FyZExpbmtlciA9IHByZWZpeDEgKyBcIl9cIiArIGxpbmtlckFkZDE7XG4gICAgICAgICAgICB2YXIgY29ubmVjdGlvbkNvbmNlcHRSZXZlcnNlID0geWllbGQgTWFrZVRoZUluc3RhbmNlQ29uY2VwdChcImNvbm5lY3Rpb25cIiwgYmFja3dhcmRMaW5rZXIsIGZhbHNlLCA5OTksIDk5OSwgOTk5KTtcbiAgICAgICAgICAgIHZhciBuZXdDb25uZWN0aW9uID0gbmV3IENvbm5lY3Rpb24oMCwgY29uY2VwdDJEYXRhLmlkLCBjb25jZXB0MURhdGEuaWQsIGNvbmNlcHQyRGF0YS51c2VySWQsIGNvbmNlcHQxRGF0YS51c2VySWQsIGNvbmNlcHQyRGF0YS51c2VySWQsIGNvbm5lY3Rpb25Db25jZXB0UmV2ZXJzZS5pZCwgY29ubmVjdGlvbkNvbmNlcHRSZXZlcnNlLnVzZXJJZCwgMTAwMCwgdXNlcklkLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCk7XG4gICAgICAgICAgICBTeW5jRGF0YS5BZGRDb25uZWN0aW9uKG5ld0Nvbm5lY3Rpb24pO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwcmVmaXggPSAoKF9iID0gY29uY2VwdDFEYXRhLnR5cGUpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jaGFyYWN0ZXJWYWx1ZSkgKyBcIl9zXCI7XG4gICAgICAgIGxldCBsaW5rZXJBZGQgPSBsaW5rZXIgKyBcIl9zXCI7XG4gICAgICAgIGxldCBmb3J3YXJkTGlua2VyID0gcHJlZml4ICsgXCJfXCIgKyBsaW5rZXJBZGQ7XG4gICAgICAgIHZhciBjb25uZWN0aW9uQ29uY2VwdCA9IHlpZWxkIE1ha2VUaGVJbnN0YW5jZUNvbmNlcHQoXCJjb25uZWN0aW9uXCIsIGZvcndhcmRMaW5rZXIsIGZhbHNlLCA5OTksIDk5OSwgOTk5KTtcbiAgICAgICAgdmFyIG5ld0Nvbm5lY3Rpb24gPSBuZXcgQ29ubmVjdGlvbigwLCBjb25jZXB0MURhdGEuaWQsIGNvbmNlcHQyRGF0YS5pZCwgY29uY2VwdDFEYXRhLnVzZXJJZCwgY29uY2VwdDJEYXRhLnVzZXJJZCwgY29uY2VwdDFEYXRhLnVzZXJJZCwgY29ubmVjdGlvbkNvbmNlcHQuaWQsIGNvbm5lY3Rpb25Db25jZXB0LnVzZXJJZCwgMTAwMCwgdXNlcklkLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCk7XG4gICAgICAgIFN5bmNEYXRhLkFkZENvbm5lY3Rpb24obmV3Q29ubmVjdGlvbik7XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IENvbmNlcHQgfSBmcm9tIFwiLi4vRGF0YVN0cnVjdHVyZXMvQ29uY2VwdFwiO1xuaW1wb3J0IGNyZWF0ZVRoZUNvbm5lY3Rpb24gZnJvbSBcIi4vQ3JlYXRlVGhlQ29ubmVjdGlvblwiO1xuaW1wb3J0IE1ha2VUaGVJbnN0YW5jZUNvbmNlcHQgZnJvbSBcIi4vTWFrZVRoZUluc3RhbmNlQ29uY2VwdFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlVGhlQ29tcG9zaXRpb24oanNvbiwgb2ZUaGVDb25jZXB0SWQgPSBudWxsLCBvZlRoZUNvbmNlcHRVc2VySWQgPSBudWxsLCBtYWluS2V5ID0gbnVsbCwgdXNlcklkID0gbnVsbCwgYWNjZXNzSWQgPSBudWxsLCBzZXNzaW9uSW5mb3JtYXRpb25JZCA9IG51bGwpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgbG9jYWxVc2VySWQgPSB1c2VySWQgIT09IG51bGwgJiYgdXNlcklkICE9PSB2b2lkIDAgPyB1c2VySWQgOiAxMDI2NztcbiAgICAgICAgdmFyIGxvY2FsQWNjZXNzSWQgPSBhY2Nlc3NJZCAhPT0gbnVsbCAmJiBhY2Nlc3NJZCAhPT0gdm9pZCAwID8gYWNjZXNzSWQgOiAxMDI2NztcbiAgICAgICAgdmFyIGxvY2FsU2Vzc2lvbklkID0gc2Vzc2lvbkluZm9ybWF0aW9uSWQgIT09IG51bGwgJiYgc2Vzc2lvbkluZm9ybWF0aW9uSWQgIT09IHZvaWQgMCA/IHNlc3Npb25JbmZvcm1hdGlvbklkIDogMTAyNjc7XG4gICAgICAgIHZhciBNYWluS2V5TG9jYWwgPSBtYWluS2V5ICE9PSBudWxsICYmIG1haW5LZXkgIT09IHZvaWQgMCA/IG1haW5LZXkgOiAwO1xuICAgICAgICB2YXIgTWFpbkNvbmNlcHQgPSBuZXcgQ29uY2VwdCgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCBcIjBcIiwgMCwgMCwgMCwgMCwgMCwgMCwgZmFsc2UpO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBqc29uKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGpzb25ba2V5XSAhPSAnc3RyaW5nJyAmJiB0eXBlb2YganNvbltrZXldICE9ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9mVGhlQ29uY2VwdElkID09IG51bGwgJiYgb2ZUaGVDb25jZXB0VXNlcklkID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxvY2FsTWFpbktleSA9IE1haW5LZXlMb2NhbDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbmNlcHRTdHJpbmcgPSB5aWVsZCBNYWtlVGhlSW5zdGFuY2VDb25jZXB0KGtleSwgXCJcIiwgdHJ1ZSwgbG9jYWxVc2VySWQsIGxvY2FsQWNjZXNzSWQsIGxvY2FsU2Vzc2lvbklkKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmNlcHQgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICBNYWluQ29uY2VwdCA9IGNvbmNlcHQ7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsTWFpbktleSA9IGNvbmNlcHQuaWQ7XG4gICAgICAgICAgICAgICAgICAgIE1haW5LZXlMb2NhbCA9IGNvbmNlcHQuaWQ7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIENyZWF0ZVRoZUNvbXBvc2l0aW9uKGpzb25ba2V5XSwgY29uY2VwdC5pZCwgY29uY2VwdC51c2VySWQsIGxvY2FsTWFpbktleSwgdXNlcklkLCBhY2Nlc3NJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9mVGhlID0gb2ZUaGVDb25jZXB0SWQgIT09IG51bGwgJiYgb2ZUaGVDb25jZXB0SWQgIT09IHZvaWQgMCA/IG9mVGhlQ29uY2VwdElkIDogOTk5O1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2ZUaGVVc2VyID0gb2ZUaGVDb25jZXB0VXNlcklkICE9PSBudWxsICYmIG9mVGhlQ29uY2VwdFVzZXJJZCAhPT0gdm9pZCAwID8gb2ZUaGVDb25jZXB0VXNlcklkIDogMTAyNjc7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsb2NhbE1haW5LZXkgPSBNYWluS2V5TG9jYWw7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb25jZXB0U3RyaW5nID0geWllbGQgTWFrZVRoZUluc3RhbmNlQ29uY2VwdChrZXksIFwiXCIsIHRydWUsIGxvY2FsVXNlcklkLCBsb2NhbEFjY2Vzc0lkLCBsb2NhbFNlc3Npb25JZCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb25jZXB0ID0gY29uY2VwdFN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgY3JlYXRlVGhlQ29ubmVjdGlvbihvZlRoZSwgb2ZUaGVVc2VyLCBjb25jZXB0LmlkLCBjb25jZXB0LnVzZXJJZCwgbG9jYWxNYWluS2V5LCBsb2NhbFNlc3Npb25JZCwgY29uY2VwdC51c2VySWQpO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBDcmVhdGVUaGVDb21wb3NpdGlvbihqc29uW2tleV0sIGNvbmNlcHQuaWQsIGNvbmNlcHQudXNlcklkLCBsb2NhbE1haW5LZXksIHVzZXJJZCwgYWNjZXNzSWQsIHNlc3Npb25JbmZvcm1hdGlvbklkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgb2ZUaGUgPSBvZlRoZUNvbmNlcHRJZCAhPT0gbnVsbCAmJiBvZlRoZUNvbmNlcHRJZCAhPT0gdm9pZCAwID8gb2ZUaGVDb25jZXB0SWQgOiA5OTk7XG4gICAgICAgICAgICAgICAgdmFyIG9mVGhlVXNlciA9IG9mVGhlQ29uY2VwdFVzZXJJZCAhPT0gbnVsbCAmJiBvZlRoZUNvbmNlcHRVc2VySWQgIT09IHZvaWQgMCA/IG9mVGhlQ29uY2VwdFVzZXJJZCA6IDEwMjY3O1xuICAgICAgICAgICAgICAgIHZhciBsb2NhbE1haW5LZXkgPSBNYWluS2V5TG9jYWw7XG4gICAgICAgICAgICAgICAgdmFyIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCBNYWtlVGhlSW5zdGFuY2VDb25jZXB0KGtleSwganNvbltrZXldLCBmYWxzZSwgbG9jYWxVc2VySWQsIGxvY2FsQWNjZXNzSWQsIGxvY2FsU2Vzc2lvbklkKTtcbiAgICAgICAgICAgICAgICB2YXIgY29uY2VwdCA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgICAgICAgICAgeWllbGQgY3JlYXRlVGhlQ29ubmVjdGlvbihvZlRoZSwgb2ZUaGVVc2VyLCBjb25jZXB0LmlkLCBjb25jZXB0LnVzZXJJZCwgbG9jYWxNYWluS2V5LCBsb2NhbFNlc3Npb25JZCwgY29uY2VwdC51c2VySWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBNYWluQ29uY2VwdDtcbiAgICB9KTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgQ29uY2VwdCB9IGZyb20gXCIuLi9EYXRhU3RydWN0dXJlcy9Db25jZXB0XCI7XG5pbXBvcnQgeyBSZXNlcnZlZElkcyB9IGZyb20gXCIuLi9EYXRhU3RydWN0dXJlcy9SZXNlcnZlZElkc1wiO1xuaW1wb3J0IHsgU3luY0RhdGEgfSBmcm9tIFwiLi4vRGF0YVN0cnVjdHVyZXMvU3luY0RhdGFcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZVRoZUNvbmNlcHQocmVmZXJlbnQsIHVzZXJJZCwgY2F0ZWdvcnlJZCwgY2F0ZWdvcnlVc2VySWQsIHR5cGVJZCwgdHlwZVVzZXJJZCwgcmVmZXJlbnRJZCwgcmVmZXJlbnRVc2VySWQsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIGlkID0geWllbGQgUmVzZXJ2ZWRJZHMuZ2V0SWQoKTtcbiAgICAgICAgdmFyIGlzTmV3ID0gdHJ1ZTtcbiAgICAgICAgdmFyIGNvbmNlcHQgPSBuZXcgQ29uY2VwdChpZCwgdXNlcklkLCB0eXBlSWQsIHR5cGVVc2VySWQsIGNhdGVnb3J5SWQsIGNhdGVnb3J5VXNlcklkLCByZWZlcmVudElkLCByZWZlcmVudFVzZXJJZCwgcmVmZXJlbnQsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkLCBpc05ldyk7XG4gICAgICAgIGNvbmNlcHQuaXNUZW1wID0gdHJ1ZTtcbiAgICAgICAgU3luY0RhdGEuQWRkQ29uY2VwdChjb25jZXB0KTtcbiAgICAgICAgcmV0dXJuIGNvbmNlcHQ7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgeyBDb25uZWN0aW9uIH0gZnJvbSBcIi4uL0RhdGFTdHJ1Y3R1cmVzL0Nvbm5lY3Rpb25cIjtcbmltcG9ydCB7IFN5bmNEYXRhIH0gZnJvbSBcIi4uL0RhdGFTdHJ1Y3R1cmVzL1N5bmNEYXRhXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUaGVDb25uZWN0aW9uKG9mVGhlQ29uY2VwdElkLCBvZlRoZUNvbmNlcHRVc2VySWQsIHRvVGhlQ29uY2VwdElkLCB0b1RoZUNvbmNlcHRVc2VySWQsIHR5cGVJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCkge1xuICAgIHZhciBvcmRlcklkID0gMTtcbiAgICB2YXIgb3JkZXJVc2VySWQgPSBvZlRoZUNvbmNlcHRVc2VySWQ7XG4gICAgdmFyIHR5cGVVc2VySWQgPSBvZlRoZUNvbmNlcHRVc2VySWQ7XG4gICAgdmFyIHVzZXJJZCA9IG9mVGhlQ29uY2VwdFVzZXJJZDtcbiAgICB2YXIgc2VjdXJpdHlJZCA9IDA7XG4gICAgdmFyIHNlY3VyaXR5VXNlcklkID0gb2ZUaGVDb25jZXB0VXNlcklkO1xuICAgIHZhciBhY2Nlc3NJZCA9IDQ7XG4gICAgdmFyIGFjY2Vzc1VzZXJJZCA9IG9mVGhlQ29uY2VwdFVzZXJJZDtcbiAgICBpZiAob2ZUaGVDb25jZXB0SWQgIT0gdG9UaGVDb25jZXB0SWQpIHtcbiAgICAgICAgdmFyIGNvbm5lY3Rpb24gPSBuZXcgQ29ubmVjdGlvbigwLCBvZlRoZUNvbmNlcHRJZCwgdG9UaGVDb25jZXB0SWQsIG9mVGhlQ29uY2VwdFVzZXJJZCwgdG9UaGVDb25jZXB0VXNlcklkLCB1c2VySWQsIHR5cGVJZCwgdHlwZVVzZXJJZCwgb3JkZXJJZCwgb3JkZXJVc2VySWQsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkKTtcbiAgICAgICAgY29ubmVjdGlvbi5pc1RlbXAgPSB0cnVlO1xuICAgICAgICBjb25uZWN0aW9uLmlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwKTtcbiAgICAgICAgU3luY0RhdGEuQWRkQ29ubmVjdGlvbihjb25uZWN0aW9uKTtcbiAgICB9XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IEJpbmFyeVR5cGVUcmVlIH0gZnJvbSBcIi4uL0RhdGFTdHJ1Y3R1cmVzL0JpbmFyeVR5cGVUcmVlXCI7XG5pbXBvcnQgeyBOb2RlIH0gZnJvbSBcIi4uL0RhdGFTdHJ1Y3R1cmVzL05vZGVcIjtcbmltcG9ydCB7IGdldEZyb21EYXRhYmFzZVdpdGhUeXBlT2xkIH0gZnJvbSBcIi4uL2FwcFwiO1xuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZVR5cGVUcmVlRnJvbURhdGEoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgY29uY2VwdExpc3QgPSB5aWVsZCBnZXRGcm9tRGF0YWJhc2VXaXRoVHlwZU9sZChcImNvbmNlcHRcIik7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNvbmNlcHRMaXN0KSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb25jZXB0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBjb25jZXB0ID0gY29uY2VwdExpc3RbaV07XG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBuZXcgTm9kZShjb25jZXB0LnR5cGVJZCwgY29uY2VwdCwgbnVsbCwgbnVsbCk7XG4gICAgICAgICAgICAgICAgQmluYXJ5VHlwZVRyZWUuYWRkTm9kZVRvVHJlZShub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcIndoYXQgaXMgdGhpc1wiKTtcbiAgICAgICAgY29uc29sZS5sb2coQmluYXJ5VHlwZVRyZWUudHlwZVJvb3QpO1xuICAgICAgICB2YXIgZW5kVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgdGltZSA9IGVuZFRpbWUgLSBzdGFydFRpbWU7XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IEdldENvbmNlcHQgfSBmcm9tIFwiLi4vQXBpL0dldENvbmNlcHRcIjtcbmltcG9ydCB7IEdldEFsbENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvbiB9IGZyb20gXCIuLi9BcGkvR2V0QWxsQ29ubmVjdGlvbnNPZkNvbXBvc2l0aW9uXCI7XG5pbXBvcnQgeyBDb25jZXB0c0RhdGEgfSBmcm9tIFwiLi4vRGF0YVN0cnVjdHVyZXMvQ29uY2VwdERhdGFcIjtcbmV4cG9ydCBmdW5jdGlvbiBHZXRDb21wb3NpdGlvbihpZCkge1xuICAgIHZhciBfYSwgX2I7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIGNvbm5lY3Rpb25MaXN0ID0gW107XG4gICAgICAgIHZhciByZXR1cm5PdXRwdXQgPSB7fTtcbiAgICAgICAgdmFyIGNvbm5lY3Rpb25MaXN0U3RyaW5nID0geWllbGQgR2V0QWxsQ29ubmVjdGlvbnNPZkNvbXBvc2l0aW9uKGlkKTtcbiAgICAgICAgY29ubmVjdGlvbkxpc3QgPSBjb25uZWN0aW9uTGlzdFN0cmluZztcbiAgICAgICAgLy9jb25uZWN0aW9uTGlzdCA9IENvbm5lY3Rpb25EYXRhLkdldENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvbihpZCk7XG4gICAgICAgIHZhciBjb21wb3NpdGlvbkxpc3QgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb25uZWN0aW9uTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCFjb21wb3NpdGlvbkxpc3QuaW5jbHVkZXMoY29ubmVjdGlvbkxpc3RbaV0ub2ZUaGVDb25jZXB0SWQpKSB7XG4gICAgICAgICAgICAgICAgY29tcG9zaXRpb25MaXN0LnB1c2goY29ubmVjdGlvbkxpc3RbaV0ub2ZUaGVDb25jZXB0SWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBjb25jZXB0ID0geWllbGQgQ29uY2VwdHNEYXRhLkdldENvbmNlcHQoaWQpO1xuICAgICAgICBpZiAoY29uY2VwdCA9PSBudWxsICYmIGlkICE9IG51bGwgJiYgaWQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2YXIgY29uY2VwdFN0cmluZyA9IHlpZWxkIEdldENvbmNlcHQoaWQpO1xuICAgICAgICAgICAgY29uY2VwdCA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG91dHB1dCA9IHlpZWxkIHJlY3Vyc2l2ZUZldGNoKGlkLCBjb25uZWN0aW9uTGlzdCwgY29tcG9zaXRpb25MaXN0KTtcbiAgICAgICAgdmFyIG1haW5TdHJpbmcgPSAoX2IgPSAoX2EgPSBjb25jZXB0ID09PSBudWxsIHx8IGNvbmNlcHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbmNlcHQudHlwZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNoYXJhY3RlclZhbHVlKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBcIlwiO1xuICAgICAgICByZXR1cm5PdXRwdXRbbWFpblN0cmluZ10gPSBvdXRwdXQ7XG4gICAgICAgIHJldHVybiByZXR1cm5PdXRwdXQ7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gR2V0Q29tcG9zaXRpb25XaXRoSWQoaWQpIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBjb25uZWN0aW9uTGlzdCA9IFtdO1xuICAgICAgICB2YXIgcmV0dXJuT3V0cHV0ID0ge307XG4gICAgICAgIHZhciBjb25uZWN0aW9uTGlzdFN0cmluZyA9IHlpZWxkIEdldEFsbENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvbihpZCk7XG4gICAgICAgIGNvbm5lY3Rpb25MaXN0ID0gY29ubmVjdGlvbkxpc3RTdHJpbmc7XG4gICAgICAgIHZhciBjb21wb3NpdGlvbkxpc3QgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb25uZWN0aW9uTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCFjb21wb3NpdGlvbkxpc3QuaW5jbHVkZXMoY29ubmVjdGlvbkxpc3RbaV0ub2ZUaGVDb25jZXB0SWQpKSB7XG4gICAgICAgICAgICAgICAgY29tcG9zaXRpb25MaXN0LnB1c2goY29ubmVjdGlvbkxpc3RbaV0ub2ZUaGVDb25jZXB0SWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBjb25jZXB0ID0geWllbGQgQ29uY2VwdHNEYXRhLkdldENvbmNlcHQoaWQpO1xuICAgICAgICBpZiAoY29uY2VwdCA9PSBudWxsICYmIGlkICE9IG51bGwgJiYgaWQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2YXIgY29uY2VwdFN0cmluZyA9IHlpZWxkIEdldENvbmNlcHQoaWQpO1xuICAgICAgICAgICAgY29uY2VwdCA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG91dHB1dCA9IHlpZWxkIHJlY3Vyc2l2ZUZldGNoKGlkLCBjb25uZWN0aW9uTGlzdCwgY29tcG9zaXRpb25MaXN0KTtcbiAgICAgICAgdmFyIG1haW5TdHJpbmcgPSAoX2IgPSAoX2EgPSBjb25jZXB0ID09PSBudWxsIHx8IGNvbmNlcHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbmNlcHQudHlwZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNoYXJhY3RlclZhbHVlKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBcIlwiO1xuICAgICAgICByZXR1cm5PdXRwdXRbbWFpblN0cmluZ10gPSBvdXRwdXQ7XG4gICAgICAgIHZhciBGaW5hbFJldHVybiA9IHt9O1xuICAgICAgICBGaW5hbFJldHVyblsnZGF0YSddID0gcmV0dXJuT3V0cHV0O1xuICAgICAgICBGaW5hbFJldHVyblsnaWQnXSA9IGlkO1xuICAgICAgICByZXR1cm4gRmluYWxSZXR1cm47XG4gICAgfSk7XG59XG5mdW5jdGlvbiByZWN1cnNpdmVGZXRjaChpZCwgY29ubmVjdGlvbkxpc3QsIGNvbXBvc2l0aW9uTGlzdCkge1xuICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgb3V0cHV0ID0ge307XG4gICAgICAgIHZhciBhcnJvdXRwdXQgPSBbXTtcbiAgICAgICAgdmFyIGNvbmNlcHQgPSB5aWVsZCBDb25jZXB0c0RhdGEuR2V0Q29uY2VwdChpZCk7XG4gICAgICAgIGlmICgoY29uY2VwdCA9PSBudWxsIHx8IGNvbmNlcHQuaWQgPT0gMCkgJiYgaWQgIT0gbnVsbCAmJiBpZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZhciBjb25jZXB0U3RyaW5nID0geWllbGQgR2V0Q29uY2VwdChpZCk7XG4gICAgICAgICAgICBjb25jZXB0ID0gY29uY2VwdFN0cmluZztcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29uY2VwdCkge1xuICAgICAgICAgICAgaWYgKGNvbmNlcHQudHlwZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRvQ29uY2VwdFR5cGVJZCA9IGNvbmNlcHQudHlwZUlkO1xuICAgICAgICAgICAgICAgIHZhciB0b0NvbmNlcHRUeXBlID0geWllbGQgQ29uY2VwdHNEYXRhLkdldENvbmNlcHQodG9Db25jZXB0VHlwZUlkKTtcbiAgICAgICAgICAgICAgICBjb25jZXB0LnR5cGUgPSB0b0NvbmNlcHRUeXBlO1xuICAgICAgICAgICAgICAgIGlmICh0b0NvbmNlcHRUeXBlID09IG51bGwgJiYgdG9Db25jZXB0VHlwZUlkICE9IG51bGwgJiYgdG9Db25jZXB0VHlwZUlkICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29uY2VwdFN0cmluZyA9IHlpZWxkIEdldENvbmNlcHQodG9Db25jZXB0VHlwZUlkKTtcbiAgICAgICAgICAgICAgICAgICAgdG9Db25jZXB0VHlwZSA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgIGNvbmNlcHQudHlwZSA9IHRvQ29uY2VwdFR5cGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBtYWluU3RyaW5nID0gKF9iID0gKF9hID0gY29uY2VwdCA9PT0gbnVsbCB8fCBjb25jZXB0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb25jZXB0LnR5cGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jaGFyYWN0ZXJWYWx1ZSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogXCJcIjtcbiAgICAgICAgaWYgKCFjb21wb3NpdGlvbkxpc3QuaW5jbHVkZXMoaWQpKSB7XG4gICAgICAgICAgICByZXR1cm4gY29uY2VwdCA9PT0gbnVsbCB8fCBjb25jZXB0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb25jZXB0LmNoYXJhY3RlclZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb25uZWN0aW9uTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChjb25uZWN0aW9uTGlzdFtpXS5vZlRoZUNvbmNlcHRJZCA9PSBpZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdG9Db25jZXB0SWQgPSBjb25uZWN0aW9uTGlzdFtpXS50b1RoZUNvbmNlcHRJZDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvQ29uY2VwdCA9IHlpZWxkIENvbmNlcHRzRGF0YS5HZXRDb25jZXB0KHRvQ29uY2VwdElkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCh0b0NvbmNlcHQgPT0gbnVsbCB8fCB0b0NvbmNlcHQuaWQgPT0gMCkgJiYgdG9Db25jZXB0SWQgIT0gbnVsbCAmJiB0b0NvbmNlcHRJZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb25jZXB0U3RyaW5nID0geWllbGQgR2V0Q29uY2VwdCh0b0NvbmNlcHRJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b0NvbmNlcHQgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b0NvbmNlcHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgodG9Db25jZXB0ID09PSBudWxsIHx8IHRvQ29uY2VwdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogdG9Db25jZXB0LnR5cGUpID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdG9Db25jZXB0VHlwZUlkID0gdG9Db25jZXB0LnR5cGVJZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdG9Db25jZXB0VHlwZSA9IHlpZWxkIENvbmNlcHRzRGF0YS5HZXRDb25jZXB0KHRvQ29uY2VwdFR5cGVJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9Db25jZXB0LnR5cGUgPSB0b0NvbmNlcHRUeXBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b0NvbmNlcHRUeXBlID09IG51bGwgJiYgdG9Db25jZXB0VHlwZUlkICE9IG51bGwgJiYgdG9Db25jZXB0VHlwZUlkICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29uY2VwdFN0cmluZyA9IHlpZWxkIEdldENvbmNlcHQodG9Db25jZXB0VHlwZUlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9Db25jZXB0VHlwZSA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvQ29uY2VwdC50eXBlID0gdG9Db25jZXB0VHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlZ2V4ID0gXCJ0aGVfXCI7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsb2NhbG1haW5TdHJpbmcgPSAoX2QgPSAoX2MgPSB0b0NvbmNlcHQgPT09IG51bGwgfHwgdG9Db25jZXB0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0b0NvbmNlcHQudHlwZSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmNoYXJhY3RlclZhbHVlKSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbG9jYWxLZXkgPSBsb2NhbG1haW5TdHJpbmcucmVwbGFjZShyZWdleCwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc05hTihOdW1iZXIobG9jYWxLZXkpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxvY2FsS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgcmVjdXJzaXZlRmV0Y2godG9Db25jZXB0SWQsIGNvbm5lY3Rpb25MaXN0LCBjb21wb3NpdGlvbkxpc3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dFtsb2NhbEtleV0gPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCByZWN1cnNpdmVGZXRjaCh0b0NvbmNlcHRJZCwgY29ubmVjdGlvbkxpc3QsIGNvbXBvc2l0aW9uTGlzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvdXRwdXRbbG9jYWxLZXldID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gYXJyb3V0cHV0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IEdldEFsbENvbmNlcHRzQnlUeXBlIH0gZnJvbSBcIi4uL0FwaS9HZXRBbGxDb25jZXB0c0J5VHlwZVwiO1xuaW1wb3J0IHsgQ29uY2VwdHNEYXRhIH0gZnJvbSBcIi4uL0RhdGFTdHJ1Y3R1cmVzL0NvbmNlcHREYXRhXCI7XG5pbXBvcnQgeyBHZXRDb21wb3NpdGlvbiwgR2V0Q29tcG9zaXRpb25XaXRoSWQgfSBmcm9tIFwiLi9HZXRDb21wb3NpdGlvblwiO1xuaW1wb3J0IEdldENvbmNlcHRCeUNoYXJhY3RlciBmcm9tIFwiLi9HZXRDb25jZXB0QnlDaGFyYWN0ZXJcIjtcbmV4cG9ydCBmdW5jdGlvbiBHZXRDb21wb3NpdGlvbkxpc3QoY29tcG9zaXRpb25OYW1lLCB1c2VySWQsIGlucGFnZSA9IDEwLCBwYWdlID0gMSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBjb25jZXB0ID0geWllbGQgR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyKGNvbXBvc2l0aW9uTmFtZSk7XG4gICAgICAgIHZhciBDb21wb3NpdGlvbkxpc3QgPSBbXTtcbiAgICAgICAgaWYgKGNvbmNlcHQpIHtcbiAgICAgICAgICAgIHlpZWxkIEdldEFsbENvbmNlcHRzQnlUeXBlKGNvbXBvc2l0aW9uTmFtZSwgdXNlcklkKTtcbiAgICAgICAgICAgIHZhciBjb25jZXB0TGlzdCA9IHlpZWxkIENvbmNlcHRzRGF0YS5HZXRDb25jZXB0c0J5VHlwZUlkQW5kVXNlcihjb25jZXB0LmlkLCB1c2VySWQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSBsaXN0ZWQgZGF0YVwiLCBjb25jZXB0TGlzdCk7XG4gICAgICAgICAgICB2YXIgc3RhcnRQYWdlID0gaW5wYWdlICogKHBhZ2UgLSAxKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBzdGFydFBhZ2U7IGkgPCBzdGFydFBhZ2UgKyBpbnBhZ2U7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChjb25jZXB0TGlzdFtpXSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29tcG9zaXRpb25Kc29uID0geWllbGQgR2V0Q29tcG9zaXRpb24oY29uY2VwdExpc3RbaV0uaWQpO1xuICAgICAgICAgICAgICAgICAgICBDb21wb3NpdGlvbkxpc3QucHVzaChjb21wb3NpdGlvbkpzb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQ29tcG9zaXRpb25MaXN0O1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIEdldENvbXBvc2l0aW9uTGlzdFdpdGhJZChjb21wb3NpdGlvbk5hbWUsIHVzZXJJZCwgaW5wYWdlID0gMTAsIHBhZ2UgPSAxKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIGNvbmNlcHQgPSB5aWVsZCBHZXRDb25jZXB0QnlDaGFyYWN0ZXIoY29tcG9zaXRpb25OYW1lKTtcbiAgICAgICAgdmFyIENvbXBvc2l0aW9uTGlzdCA9IFtdO1xuICAgICAgICBjb25zb2xlLmxvZyhcIndoYXQgYSBsaXN0XCIsIGNvbmNlcHQpO1xuICAgICAgICBpZiAoY29uY2VwdCkge1xuICAgICAgICAgICAgeWllbGQgR2V0QWxsQ29uY2VwdHNCeVR5cGUoY29tcG9zaXRpb25OYW1lLCB1c2VySWQpO1xuICAgICAgICAgICAgdmFyIGNvbmNlcHRMaXN0ID0geWllbGQgQ29uY2VwdHNEYXRhLkdldENvbmNlcHRzQnlUeXBlSWRBbmRVc2VyKGNvbmNlcHQuaWQsIHVzZXJJZCk7XG4gICAgICAgICAgICB2YXIgc3RhcnRQYWdlID0gaW5wYWdlICogKHBhZ2UgLSAxKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBzdGFydFBhZ2U7IGkgPCBzdGFydFBhZ2UgKyBpbnBhZ2U7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChjb25jZXB0TGlzdFtpXSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29tcG9zaXRpb25Kc29uID0geWllbGQgR2V0Q29tcG9zaXRpb25XaXRoSWQoY29uY2VwdExpc3RbaV0uaWQpO1xuICAgICAgICAgICAgICAgICAgICBDb21wb3NpdGlvbkxpc3QucHVzaChjb21wb3NpdGlvbkpzb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQ29tcG9zaXRpb25MaXN0O1xuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBHZXRDb25jZXB0QnlDaGFyYWN0ZXJWYWx1ZSB9IGZyb20gXCIuLi9BcGkvR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyVmFsdWVcIjtcbmltcG9ydCB7IENvbmNlcHRzRGF0YSB9IGZyb20gXCIuLi9EYXRhU3RydWN0dXJlcy9Db25jZXB0RGF0YVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyKGNoYXJhY3RlclZhbHVlKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIGNvbmNlcHQgPSB5aWVsZCBDb25jZXB0c0RhdGEuR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyKGNoYXJhY3RlclZhbHVlKTtcbiAgICAgICAgdmFyIGxpdGVyYWxDaGFyYWN0ZXIgPSBgJHtjaGFyYWN0ZXJWYWx1ZX1gO1xuICAgICAgICBpZiAoKGNvbmNlcHQgPT0gbnVsbCB8fCAoY29uY2VwdCA9PT0gbnVsbCB8fCBjb25jZXB0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb25jZXB0LmlkKSA9PSAwKSAmJiBsaXRlcmFsQ2hhcmFjdGVyKSB7XG4gICAgICAgICAgICB5aWVsZCBHZXRDb25jZXB0QnlDaGFyYWN0ZXJWYWx1ZShjaGFyYWN0ZXJWYWx1ZSk7XG4gICAgICAgICAgICBjb25jZXB0ID0geWllbGQgQ29uY2VwdHNEYXRhLkdldENvbmNlcHRCeUNoYXJhY3RlcihjaGFyYWN0ZXJWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbmNlcHQ7XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IENvbmNlcHRzRGF0YSB9IGZyb20gXCIuLi9EYXRhU3RydWN0dXJlcy9Db25jZXB0RGF0YVwiO1xuaW1wb3J0IHsgQ29ubmVjdGlvbkRhdGEgfSBmcm9tIFwiLi4vRGF0YVN0cnVjdHVyZXMvQ29ubmVjdGlvbkRhdGFcIjtcbmltcG9ydCB7IExvY2FsQ29ubmVjdGlvbkRhdGEgfSBmcm9tIFwiLi4vRGF0YVN0cnVjdHVyZXMvTG9jYWwvTG9jYWxDb25uZWN0aW9uRGF0YVwiO1xuaW1wb3J0IHsgZ2V0QWxsRnJvbUxvY2FsRGIgfSBmcm9tIFwiLi4vRGF0YWJhc2UvaW5kZXhkYmxvY2FsXCI7XG5pbXBvcnQgeyBnZXRGcm9tRGF0YWJhc2VXaXRoVHlwZU9sZCB9IGZyb20gXCIuLi9EYXRhYmFzZS9pbmRleGVkZGJcIjtcbmV4cG9ydCBmdW5jdGlvbiBHZXREYXRhRnJvbUluZGV4RGIoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIGNvbmNlcHRMaXN0ID0geWllbGQgZ2V0RnJvbURhdGFiYXNlV2l0aFR5cGVPbGQoXCJjb25jZXB0XCIpO1xuICAgICAgICBHZXRDb25uZWN0aW9uc0Zyb21JbmRleERiKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGNvbmNlcHRMaXN0KTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY29uY2VwdExpc3QpKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbmNlcHRMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgQ29uY2VwdHNEYXRhLkFkZENvbmNlcHQoY29uY2VwdExpc3RbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gR2V0RGF0YUZyb21JbmRleERiTG9jYWwoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgLy8gdmFyIGNvbmNlcHRMaXN0ID0gYXdhaXQgZ2V0QWxsRnJvbUxvY2FsRGIoXCJsb2NhbGNvbmNlcHRcIik7XG4gICAgICAgIEdldENvbm5lY3Rpb25zRnJvbUluZGV4RGJMb2NhbCgpO1xuICAgICAgICAvLyBpZihBcnJheS5pc0FycmF5KGNvbmNlcHRMaXN0KSl7XG4gICAgICAgIC8vICAgICBmb3IodmFyIGk9MCA7aSA8IGNvbmNlcHRMaXN0Lmxlbmd0aCA7aSsrKXtcbiAgICAgICAgLy8gICAgICAgICBMb2NhbENvbmNlcHRzRGF0YS5BZGRDb25jZXB0KGNvbmNlcHRMaXN0W2ldKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gR2V0Q29ubmVjdGlvbnNGcm9tSW5kZXhEYigpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgY29ubmVjdGlvbkxpc3QgPSB5aWVsZCBnZXRGcm9tRGF0YWJhc2VXaXRoVHlwZU9sZChcImNvbm5lY3Rpb25cIik7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNvbm5lY3Rpb25MaXN0KSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb25uZWN0aW9uTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIENvbm5lY3Rpb25EYXRhLkFkZENvbm5lY3Rpb24oY29ubmVjdGlvbkxpc3RbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBHZXRDb25uZWN0aW9uc0Zyb21JbmRleERiTG9jYWwoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIGNvbm5lY3Rpb25MaXN0ID0geWllbGQgZ2V0QWxsRnJvbUxvY2FsRGIoXCJsb2NhbGNvbm5lY3Rpb25cIik7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNvbm5lY3Rpb25MaXN0KSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb25uZWN0aW9uTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIExvY2FsQ29ubmVjdGlvbkRhdGEuQWRkQ29ubmVjdGlvbihjb25uZWN0aW9uTGlzdFtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyQW5kVHlwZSB9IGZyb20gXCIuLi9BcGkvR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyQW5kVHlwZVwiO1xuaW1wb3J0IHsgR2V0Q29ubmVjdGlvbk9mVGhlQ29uY2VwdCB9IGZyb20gXCIuLi9BcGkvR2V0Q29ubmVjdGlvbk9mVGhlQ29uY2VwdFwiO1xuaW1wb3J0IHsgR2V0Q29tcG9zaXRpb25XaXRoSWQgfSBmcm9tIFwiLi9HZXRDb21wb3NpdGlvblwiO1xuaW1wb3J0IEdldFRoZUNvbmNlcHQgZnJvbSBcIi4vR2V0VGhlQ29uY2VwdFwiO1xuZXhwb3J0IGZ1bmN0aW9uIEdldExpbmsoaWQsIGxpbmtlcikge1xuICAgIHZhciBfYTtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgb3V0cHV0ID0gW107XG4gICAgICAgIHZhciBjb25jZXB0ID0geWllbGQgR2V0VGhlQ29uY2VwdChpZCk7XG4gICAgICAgIHZhciBsaW5rU3RyaW5nID0gKChfYSA9IGNvbmNlcHQudHlwZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNoYXJhY3RlclZhbHVlKSArIFwiX3NcIiArIFwiX1wiICsgbGlua2VyO1xuICAgICAgICB2YXIgcmVsYXRlZENvbmNlcHRTdHJpbmcgPSB5aWVsZCBHZXRDb25jZXB0QnlDaGFyYWN0ZXJBbmRUeXBlKGxpbmtTdHJpbmcsIDE2KTtcbiAgICAgICAgdmFyIHJlbGF0ZWRDb25jZXB0ID0gcmVsYXRlZENvbmNlcHRTdHJpbmc7XG4gICAgICAgIGlmIChyZWxhdGVkQ29uY2VwdC5pZCA+IDApIHtcbiAgICAgICAgICAgIHZhciBjb25uZWN0aW9uc1N0cmluZyA9IHlpZWxkIEdldENvbm5lY3Rpb25PZlRoZUNvbmNlcHQocmVsYXRlZENvbmNlcHQuaWQsIGNvbmNlcHQuaWQsIGNvbmNlcHQudXNlcklkKTtcbiAgICAgICAgICAgIHZhciBjb25uZWN0aW9ucyA9IGNvbm5lY3Rpb25zU3RyaW5nO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb25uZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCB0b0NvbmNlcHRJZCA9IGNvbm5lY3Rpb25zW2ldLnRvVGhlQ29uY2VwdElkO1xuICAgICAgICAgICAgICAgIGxldCB0b0NvbmNlcHQgPSB5aWVsZCBHZXRUaGVDb25jZXB0KHRvQ29uY2VwdElkKTtcbiAgICAgICAgICAgICAgICBsZXQgbmV3Q29tcG9zaXRpb24gPSB5aWVsZCBHZXRDb21wb3NpdGlvbldpdGhJZCh0b0NvbmNlcHQuaWQpO1xuICAgICAgICAgICAgICAgIG91dHB1dC5wdXNoKG5ld0NvbXBvc2l0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBHZXRDb25jZXB0IH0gZnJvbSBcIi4uL0FwaS9HZXRDb25jZXB0XCI7XG5pbXBvcnQgeyBDb25jZXB0IH0gZnJvbSBcIi4uL0RhdGFTdHJ1Y3R1cmVzL0NvbmNlcHRcIjtcbmltcG9ydCB7IENvbmNlcHRzRGF0YSB9IGZyb20gXCIuLi9EYXRhU3RydWN0dXJlcy9Db25jZXB0RGF0YVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2V0VGhlQ29uY2VwdChpZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBjb25jZXB0ID0gbmV3IENvbmNlcHQoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgXCIwXCIsIDAsIDAsIDAsIDAsIDAsIDAsIGZhbHNlKTtcbiAgICAgICAgY29uY2VwdCA9IHlpZWxkIENvbmNlcHRzRGF0YS5HZXRDb25jZXB0KGlkKTtcbiAgICAgICAgaWYgKChjb25jZXB0ID09IG51bGwgfHwgY29uY2VwdC5pZCA9PSAwKSAmJiBpZCAhPSBudWxsICYmIGlkICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFyIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCBHZXRDb25jZXB0KGlkKTtcbiAgICAgICAgICAgIGNvbmNlcHQgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb25jZXB0KSB7XG4gICAgICAgICAgICBpZiAoY29uY2VwdC50eXBlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29uY2VwdFR5cGUgPSB5aWVsZCBDb25jZXB0c0RhdGEuR2V0Q29uY2VwdChjb25jZXB0LnR5cGVJZCk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbmNlcHRUeXBlID09IG51bGwgJiYgY29uY2VwdC50eXBlSWQgIT0gbnVsbCAmJiBjb25jZXB0LnR5cGVJZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHR5cGVDb25jZXB0U3RyaW5nID0geWllbGQgR2V0Q29uY2VwdChjb25jZXB0LnR5cGVJZCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0eXBlQ29uY2VwdCA9IHR5cGVDb25jZXB0U3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICBjb25jZXB0LnR5cGUgPSB0eXBlQ29uY2VwdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbmNlcHQ7XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCBHZXRUaGVDb25jZXB0IGZyb20gXCIuL0dldFRoZUNvbmNlcHRcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdldFRoZVJlZmVyZW50KGlkLCB1c2VySWQsIHJlZmVyZW50SWQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgbXlyZWYgPSByZWZlcmVudElkICE9PSBudWxsICYmIHJlZmVyZW50SWQgIT09IHZvaWQgMCA/IHJlZmVyZW50SWQgOiAwO1xuICAgICAgICB2YXIgcmVmZXJlbnQgPSB5aWVsZCBHZXRUaGVDb25jZXB0KHJlZmVyZW50SWQpO1xuICAgICAgICAvL3ZhciByZXN1bHQ6IFJlZmVyZW50SW5mbyA9IG5ldyBSZWZlcmVudEluZm8ocmVmZXJlbnQuaWQsIHJlZmVyZW50LnVzZXJJZCwgcmVmZXJlbnQucmVmZXJlbnRJZCwgcmVmZXJlbnQucmVmZXJlbnRVc2VySWQpO1xuICAgICAgICByZXR1cm4gcmVmZXJlbnQ7XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IEdldEFpRGF0YSB9IGZyb20gXCIuLi9BcGkvR2V0QWlEYXRhXCI7XG5pbXBvcnQgeyBTZXR0aW5nRGF0YSB9IGZyb20gXCIuLi9EYXRhU3RydWN0dXJlcy9TZXR0aW5nRGF0YVwiO1xuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tIFwiLi4vRGF0YVN0cnVjdHVyZXMvU2V0dGluZ3NcIjtcbmltcG9ydCB7IEFpVXBkYXRlRmxhZywgR2V0U3RhdHNGcm9tRGF0YWJhc2UgfSBmcm9tIFwiLi4vRGF0YWJhc2UvaW5kZXhlZGRiXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbml0aWFsaXplU3lzdGVtKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBzdGF0c0RhdGEgPSB5aWVsZCBHZXRTdGF0c0Zyb21EYXRhYmFzZSgpO1xuICAgICAgICB2YXIgc2V0dGluZ3MgPSBzdGF0c0RhdGE7XG4gICAgICAgIGlmICghc2V0dGluZ3MuaXNPbmxpbmVTeW5jKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImdldHRpbmcgdGhlIGFpIGRhdGFcIik7XG4gICAgICAgICAgICB5aWVsZCBHZXRBaURhdGEoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gUHVyZ2F0b3J5RGF0YWJhc2VVcGRhdGVkKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIFNldHRpbmdzLmlzT25saW5lU3luYyA9IHRydWU7XG4gICAgICAgIHZhciBzZXR0aW5nRGF0YSA9IG5ldyBTZXR0aW5nRGF0YShTZXR0aW5ncy5pc09ubGluZVN5bmMpO1xuICAgICAgICBBaVVwZGF0ZUZsYWcoc2V0dGluZ0RhdGEpO1xuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBMb2NhbEJpbmFyeVRyZWUgfSBmcm9tIFwiLi4vLi4vRGF0YVN0cnVjdHVyZXMvTG9jYWwvTG9jYWxCaW5hcnlUcmVlXCI7XG5pbXBvcnQgeyBOb2RlIH0gZnJvbSBcIi4uLy4uL0RhdGFTdHJ1Y3R1cmVzL05vZGVcIjtcbmltcG9ydCB7IGdldEFsbEZyb21Mb2NhbERiIH0gZnJvbSBcIi4uLy4uL0RhdGFiYXNlL2luZGV4ZGJsb2NhbFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlTG9jYWxCaW5hcnlUcmVlRnJvbURhdGEoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgY29uY2VwdExpc3QgPSB5aWVsZCBnZXRBbGxGcm9tTG9jYWxEYihcImxvY2FsY29uY2VwdFwiKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY29uY2VwdExpc3QpKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbmNlcHRMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNvbmNlcHQgPSBjb25jZXB0TGlzdFtpXTtcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IG5ldyBOb2RlKGNvbmNlcHQuaWQsIGNvbmNlcHQsIG51bGwsIG51bGwpO1xuICAgICAgICAgICAgICAgIExvY2FsQmluYXJ5VHJlZS5hZGROb2RlVG9UcmVlKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBlbmRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciB0aW1lID0gZW5kVGltZSAtIHN0YXJ0VGltZTtcbiAgICB9KTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgTG9jYWxCaW5hcnlUeXBlVHJlZSB9IGZyb20gXCIuLi8uLi9EYXRhU3RydWN0dXJlcy9Mb2NhbC9Mb2NhbEJpbmFyeVR5cGVUcmVlXCI7XG5pbXBvcnQgeyBOb2RlIH0gZnJvbSBcIi4uLy4uL0RhdGFTdHJ1Y3R1cmVzL05vZGVcIjtcbmltcG9ydCB7IGdldEFsbEZyb21Mb2NhbERiIH0gZnJvbSBcIi4uLy4uL0RhdGFiYXNlL2luZGV4ZGJsb2NhbFwiO1xuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZUxvY2FsQmluYXJ5VHlwZVRyZWVGcm9tRGF0YSgpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciBjb25jZXB0TGlzdCA9IHlpZWxkIGdldEFsbEZyb21Mb2NhbERiKFwibG9jYWxjb25jZXB0XCIpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjb25jZXB0TGlzdCkpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29uY2VwdExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgY29uY2VwdCA9IGNvbmNlcHRMaXN0W2ldO1xuICAgICAgICAgICAgICAgIGxldCBub2RlID0gbmV3IE5vZGUoY29uY2VwdC50eXBlSWQsIGNvbmNlcHQsIG51bGwsIG51bGwpO1xuICAgICAgICAgICAgICAgIExvY2FsQmluYXJ5VHlwZVRyZWUuYWRkTm9kZVRvVHJlZShub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhMb2NhbEJpbmFyeVR5cGVUcmVlLkxvY2FsVHlwZVJvb3QpO1xuICAgICAgICB2YXIgZW5kVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgdGltZSA9IGVuZFRpbWUgLSBzdGFydFRpbWU7XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IExvY2FsQmluYXJ5Q2hhcmFjdGVyVHJlZSB9IGZyb20gXCIuLi8uLi9EYXRhU3RydWN0dXJlcy9Mb2NhbC9Mb2NhbEJpbmFyeUNoYXJhY3RlclRyZWVcIjtcbmltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi4vLi4vRGF0YVN0cnVjdHVyZXMvTm9kZVwiO1xuaW1wb3J0IHsgZ2V0QWxsRnJvbUxvY2FsRGIgfSBmcm9tIFwiLi4vLi4vRGF0YWJhc2UvaW5kZXhkYmxvY2FsXCI7XG5leHBvcnQgZnVuY3Rpb24gQ3JlYXRlTG9jYWxDaGFyYWN0ZXJCaW5hcnlUcmVlRnJvbURhdGEoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgY29uY2VwdExpc3QgPSB5aWVsZCBnZXRBbGxGcm9tTG9jYWxEYihcImxvY2FsY29uY2VwdFwiKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY29uY2VwdExpc3QpKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbmNlcHRMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNvbmNlcHQgPSBjb25jZXB0TGlzdFtpXTtcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IG5ldyBOb2RlKGNvbmNlcHQuY2hhcmFjdGVyVmFsdWUsIGNvbmNlcHQsIG51bGwsIG51bGwpO1xuICAgICAgICAgICAgICAgIExvY2FsQmluYXJ5Q2hhcmFjdGVyVHJlZS5hZGROb2RlVG9UcmVlKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwid2hhdCBpcyB0aGlzXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhMb2NhbEJpbmFyeUNoYXJhY3RlclRyZWUuTG9jYWxDaGFyYWN0ZXJSb290KTtcbiAgICAgICAgdmFyIGVuZFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIHRpbWUgPSBlbmRUaW1lIC0gc3RhcnRUaW1lO1xuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBDb25jZXB0IH0gZnJvbSBcIi4uLy4uL0RhdGFTdHJ1Y3R1cmVzL0NvbmNlcHRcIjtcbmltcG9ydCBDcmVhdGVUaGVDb25uZWN0aW9uTG9jYWwgZnJvbSBcIi4vQ3JlYXRlVGhlQ29ubmVjdGlvbkxvY2FsXCI7XG5pbXBvcnQgeyBNYWtlVGhlSW5zdGFuY2VDb25jZXB0TG9jYWwgfSBmcm9tIFwiLi9NYWtlVGhlSW5zdGFuY2VDb25jZXB0TG9jYWxcIjtcbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVUaGVDb21wb3NpdGlvbkxvY2FsKGpzb24sIG9mVGhlQ29uY2VwdElkID0gbnVsbCwgb2ZUaGVDb25jZXB0VXNlcklkID0gbnVsbCwgbWFpbktleSA9IG51bGwsIHVzZXJJZCA9IG51bGwsIGFjY2Vzc0lkID0gbnVsbCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQgPSBudWxsKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIGxvY2FsVXNlcklkID0gdXNlcklkICE9PSBudWxsICYmIHVzZXJJZCAhPT0gdm9pZCAwID8gdXNlcklkIDogMTAyNjc7XG4gICAgICAgIHZhciBsb2NhbEFjY2Vzc0lkID0gYWNjZXNzSWQgIT09IG51bGwgJiYgYWNjZXNzSWQgIT09IHZvaWQgMCA/IGFjY2Vzc0lkIDogMTAyNjc7XG4gICAgICAgIHZhciBsb2NhbFNlc3Npb25JZCA9IHNlc3Npb25JbmZvcm1hdGlvbklkICE9PSBudWxsICYmIHNlc3Npb25JbmZvcm1hdGlvbklkICE9PSB2b2lkIDAgPyBzZXNzaW9uSW5mb3JtYXRpb25JZCA6IDEwMjY3O1xuICAgICAgICB2YXIgTWFpbktleUxvY2FsID0gbWFpbktleSAhPT0gbnVsbCAmJiBtYWluS2V5ICE9PSB2b2lkIDAgPyBtYWluS2V5IDogMDtcbiAgICAgICAgdmFyIE1haW5Db25jZXB0ID0gbmV3IENvbmNlcHQoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgXCIwXCIsIDAsIDAsIDAsIDAsIDAsIDAsIGZhbHNlKTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4ganNvbikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBqc29uW2tleV0gIT0gJ3N0cmluZycgJiYgdHlwZW9mIGpzb25ba2V5XSAhPSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIGlmIChvZlRoZUNvbmNlcHRJZCA9PSBudWxsICYmIG9mVGhlQ29uY2VwdFVzZXJJZCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsb2NhbE1haW5LZXkgPSBNYWluS2V5TG9jYWw7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb25jZXB0U3RyaW5nID0geWllbGQgTWFrZVRoZUluc3RhbmNlQ29uY2VwdExvY2FsKGtleSwgXCJcIiwgdHJ1ZSwgbG9jYWxVc2VySWQsIGxvY2FsQWNjZXNzSWQsIGxvY2FsU2Vzc2lvbklkKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmNlcHQgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICBNYWluQ29uY2VwdCA9IGNvbmNlcHQ7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsTWFpbktleSA9IGNvbmNlcHQuaWQ7XG4gICAgICAgICAgICAgICAgICAgIE1haW5LZXlMb2NhbCA9IGNvbmNlcHQuaWQ7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIENyZWF0ZVRoZUNvbXBvc2l0aW9uTG9jYWwoanNvbltrZXldLCBjb25jZXB0LmlkLCBjb25jZXB0LnVzZXJJZCwgbG9jYWxNYWluS2V5LCB1c2VySWQsIGFjY2Vzc0lkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2ZUaGUgPSBvZlRoZUNvbmNlcHRJZCAhPT0gbnVsbCAmJiBvZlRoZUNvbmNlcHRJZCAhPT0gdm9pZCAwID8gb2ZUaGVDb25jZXB0SWQgOiA5OTk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvZlRoZVVzZXIgPSBvZlRoZUNvbmNlcHRVc2VySWQgIT09IG51bGwgJiYgb2ZUaGVDb25jZXB0VXNlcklkICE9PSB2b2lkIDAgPyBvZlRoZUNvbmNlcHRVc2VySWQgOiAxMDI2NztcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxvY2FsTWFpbktleSA9IE1haW5LZXlMb2NhbDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCBNYWtlVGhlSW5zdGFuY2VDb25jZXB0TG9jYWwoa2V5LCBcIlwiLCB0cnVlLCBsb2NhbFVzZXJJZCwgbG9jYWxBY2Nlc3NJZCwgbG9jYWxTZXNzaW9uSWQpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29uY2VwdCA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIENyZWF0ZVRoZUNvbm5lY3Rpb25Mb2NhbChvZlRoZSwgb2ZUaGVVc2VyLCBjb25jZXB0LmlkLCBjb25jZXB0LnVzZXJJZCwgbG9jYWxNYWluS2V5LCBsb2NhbFNlc3Npb25JZCwgY29uY2VwdC51c2VySWQpO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBDcmVhdGVUaGVDb21wb3NpdGlvbkxvY2FsKGpzb25ba2V5XSwgY29uY2VwdC5pZCwgY29uY2VwdC51c2VySWQsIGxvY2FsTWFpbktleSwgdXNlcklkLCBhY2Nlc3NJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBvZlRoZSA9IG9mVGhlQ29uY2VwdElkICE9PSBudWxsICYmIG9mVGhlQ29uY2VwdElkICE9PSB2b2lkIDAgPyBvZlRoZUNvbmNlcHRJZCA6IDk5OTtcbiAgICAgICAgICAgICAgICB2YXIgb2ZUaGVVc2VyID0gb2ZUaGVDb25jZXB0VXNlcklkICE9PSBudWxsICYmIG9mVGhlQ29uY2VwdFVzZXJJZCAhPT0gdm9pZCAwID8gb2ZUaGVDb25jZXB0VXNlcklkIDogMTAyNjc7XG4gICAgICAgICAgICAgICAgdmFyIGxvY2FsTWFpbktleSA9IE1haW5LZXlMb2NhbDtcbiAgICAgICAgICAgICAgICB2YXIgY29uY2VwdFN0cmluZyA9IHlpZWxkIE1ha2VUaGVJbnN0YW5jZUNvbmNlcHRMb2NhbChrZXksIGpzb25ba2V5XSwgZmFsc2UsIGxvY2FsVXNlcklkLCBsb2NhbEFjY2Vzc0lkLCBsb2NhbFNlc3Npb25JZCk7XG4gICAgICAgICAgICAgICAgdmFyIGNvbmNlcHQgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICAgICAgICAgIHlpZWxkIENyZWF0ZVRoZUNvbm5lY3Rpb25Mb2NhbChvZlRoZSwgb2ZUaGVVc2VyLCBjb25jZXB0LmlkLCBjb25jZXB0LnVzZXJJZCwgbG9jYWxNYWluS2V5LCBsb2NhbFNlc3Npb25JZCwgY29uY2VwdC51c2VySWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBNYWluQ29uY2VwdDtcbiAgICB9KTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgQ29uY2VwdCB9IGZyb20gXCIuLi8uLi9EYXRhU3RydWN0dXJlcy9Db25jZXB0XCI7XG5pbXBvcnQgeyBMb2NhbENvbmNlcHRzRGF0YSB9IGZyb20gXCIuLi8uLi9EYXRhU3RydWN0dXJlcy9Mb2NhbC9Mb2NhbENvbmNlcHREYXRhXCI7XG5pbXBvcnQgeyBzdG9yZVRvRGF0YWJhc2UgfSBmcm9tIFwiLi4vLi4vRGF0YWJhc2UvaW5kZXhkYmxvY2FsXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVUaGVDb25jZXB0TG9jYWwocmVmZXJlbnQsIHVzZXJJZCwgY2F0ZWdvcnlJZCwgY2F0ZWdvcnlVc2VySWQsIHR5cGVJZCwgdHlwZVVzZXJJZCwgcmVmZXJlbnRJZCwgcmVmZXJlbnRVc2VySWQsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIGlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwKTtcbiAgICAgICAgdmFyIGlzTmV3ID0gdHJ1ZTtcbiAgICAgICAgdmFyIGNvbmNlcHQgPSBuZXcgQ29uY2VwdChpZCwgdXNlcklkLCB0eXBlSWQsIHR5cGVVc2VySWQsIGNhdGVnb3J5SWQsIGNhdGVnb3J5VXNlcklkLCByZWZlcmVudElkLCByZWZlcmVudFVzZXJJZCwgcmVmZXJlbnQsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkLCBpc05ldyk7XG4gICAgICAgIGNvbmNlcHQuaXNUZW1wID0gdHJ1ZTtcbiAgICAgICAgTG9jYWxDb25jZXB0c0RhdGEuQWRkQ29uY2VwdChjb25jZXB0KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJhZGRpbmcgdGhpcyBjb25jZXB0IHRvIGxvY2FsXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhjb25jZXB0KTtcbiAgICAgICAgc3RvcmVUb0RhdGFiYXNlKFwibG9jYWxjb25jZXB0XCIsIGNvbmNlcHQpO1xuICAgICAgICByZXR1cm4gY29uY2VwdDtcbiAgICB9KTtcbn1cbiIsImltcG9ydCB7IENvbm5lY3Rpb24gfSBmcm9tIFwiLi4vLi4vRGF0YVN0cnVjdHVyZXMvQ29ubmVjdGlvblwiO1xuaW1wb3J0IHsgTG9jYWxDb25uZWN0aW9uRGF0YSB9IGZyb20gXCIuLi8uLi9EYXRhU3RydWN0dXJlcy9Mb2NhbC9Mb2NhbENvbm5lY3Rpb25EYXRhXCI7XG5pbXBvcnQgeyBzdG9yZVRvRGF0YWJhc2UgfSBmcm9tIFwiLi4vLi4vRGF0YWJhc2UvaW5kZXhkYmxvY2FsXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVUaGVDb25uZWN0aW9uTG9jYWwob2ZUaGVDb25jZXB0SWQsIG9mVGhlQ29uY2VwdFVzZXJJZCwgdG9UaGVDb25jZXB0SWQsIHRvVGhlQ29uY2VwdFVzZXJJZCwgdHlwZUlkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkKSB7XG4gICAgdmFyIG9yZGVySWQgPSAxO1xuICAgIHZhciBvcmRlclVzZXJJZCA9IG9mVGhlQ29uY2VwdFVzZXJJZDtcbiAgICB2YXIgdHlwZVVzZXJJZCA9IG9mVGhlQ29uY2VwdFVzZXJJZDtcbiAgICB2YXIgdXNlcklkID0gb2ZUaGVDb25jZXB0VXNlcklkO1xuICAgIHZhciBzZWN1cml0eUlkID0gMDtcbiAgICB2YXIgc2VjdXJpdHlVc2VySWQgPSBvZlRoZUNvbmNlcHRVc2VySWQ7XG4gICAgdmFyIGFjY2Vzc0lkID0gNDtcbiAgICB2YXIgYWNjZXNzVXNlcklkID0gb2ZUaGVDb25jZXB0VXNlcklkO1xuICAgIGlmIChvZlRoZUNvbmNlcHRJZCAhPSB0b1RoZUNvbmNlcHRJZCkge1xuICAgICAgICB2YXIgY29ubmVjdGlvbiA9IG5ldyBDb25uZWN0aW9uKDAsIG9mVGhlQ29uY2VwdElkLCB0b1RoZUNvbmNlcHRJZCwgb2ZUaGVDb25jZXB0VXNlcklkLCB0b1RoZUNvbmNlcHRVc2VySWQsIHVzZXJJZCwgdHlwZUlkLCB0eXBlVXNlcklkLCBvcmRlcklkLCBvcmRlclVzZXJJZCwgc2VjdXJpdHlJZCwgc2VjdXJpdHlVc2VySWQsIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQsIHNlc3Npb25JbmZvcm1hdGlvbklkLCBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQpO1xuICAgICAgICBjb25uZWN0aW9uLmlzVGVtcCA9IHRydWU7XG4gICAgICAgIGNvbm5lY3Rpb24uaWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApO1xuICAgICAgICBMb2NhbENvbm5lY3Rpb25EYXRhLkFkZENvbm5lY3Rpb24oY29ubmVjdGlvbik7XG4gICAgICAgIHN0b3JlVG9EYXRhYmFzZShcImxvY2FsY29ubmVjdGlvblwiLCBjb25uZWN0aW9uKTtcbiAgICB9XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IExvY2FsQ29uY2VwdHNEYXRhIH0gZnJvbSBcIi4uLy4uL0RhdGFTdHJ1Y3R1cmVzL0xvY2FsL0xvY2FsQ29uY2VwdERhdGFcIjtcbmltcG9ydCB7IEdldENvbXBvc2l0aW9uTG9jYWwsIEdldENvbXBvc2l0aW9uTG9jYWxXaXRoSWQgfSBmcm9tIFwiLi9HZXRDb21wb3NpdGlvbkxvY2FsXCI7XG5pbXBvcnQgR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyTG9jYWwgZnJvbSBcIi4vR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyTG9jYWxcIjtcbmV4cG9ydCBmdW5jdGlvbiBHZXRDb21wb3NpdGlvbkxpc3RMb2NhbChjb21wb3NpdGlvbk5hbWUsIHVzZXJJZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBjb25jZXB0ID0geWllbGQgR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyTG9jYWwoY29tcG9zaXRpb25OYW1lKTtcbiAgICAgICAgdmFyIENvbXBvc2l0aW9uTGlzdCA9IFtdO1xuICAgICAgICBpZiAoY29uY2VwdCkge1xuICAgICAgICAgICAgdmFyIGNvbmNlcHRMaXN0ID0geWllbGQgTG9jYWxDb25jZXB0c0RhdGEuR2V0Q29uY2VwdHNCeVR5cGVJZEFuZFVzZXIoY29uY2VwdC5pZCwgdXNlcklkKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29uY2VwdExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY29tcG9zaXRpb25Kc29uID0geWllbGQgR2V0Q29tcG9zaXRpb25Mb2NhbChjb25jZXB0TGlzdFtpXS5pZCk7XG4gICAgICAgICAgICAgICAgQ29tcG9zaXRpb25MaXN0LnB1c2goY29tcG9zaXRpb25Kc29uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQ29tcG9zaXRpb25MaXN0O1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIEdldENvbXBvc2l0aW9uTGlzdExvY2FsV2l0aElkKGNvbXBvc2l0aW9uTmFtZSwgdXNlcklkKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIGNvbmNlcHQgPSB5aWVsZCBHZXRDb25jZXB0QnlDaGFyYWN0ZXJMb2NhbChjb21wb3NpdGlvbk5hbWUpO1xuICAgICAgICB2YXIgQ29tcG9zaXRpb25MaXN0ID0gW107XG4gICAgICAgIGlmIChjb25jZXB0KSB7XG4gICAgICAgICAgICB2YXIgY29uY2VwdExpc3QgPSB5aWVsZCBMb2NhbENvbmNlcHRzRGF0YS5HZXRDb25jZXB0c0J5VHlwZUlkQW5kVXNlcihjb25jZXB0LmlkLCB1c2VySWQpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb25jZXB0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBjb21wb3NpdGlvbkpzb24gPSB5aWVsZCBHZXRDb21wb3NpdGlvbkxvY2FsV2l0aElkKGNvbmNlcHRMaXN0W2ldLmlkKTtcbiAgICAgICAgICAgICAgICBDb21wb3NpdGlvbkxpc3QucHVzaChjb21wb3NpdGlvbkpzb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBDb21wb3NpdGlvbkxpc3Q7XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IExvY2FsQ29uY2VwdHNEYXRhIH0gZnJvbSBcIi4uLy4uL0RhdGFTdHJ1Y3R1cmVzL0xvY2FsL0xvY2FsQ29uY2VwdERhdGFcIjtcbmltcG9ydCB7IExvY2FsQ29ubmVjdGlvbkRhdGEgfSBmcm9tIFwiLi4vLi4vRGF0YVN0cnVjdHVyZXMvTG9jYWwvTG9jYWxDb25uZWN0aW9uRGF0YVwiO1xuZXhwb3J0IGZ1bmN0aW9uIEdldENvbXBvc2l0aW9uTG9jYWwoaWQpIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBjb25uZWN0aW9uTGlzdCA9IFtdO1xuICAgICAgICB2YXIgcmV0dXJuT3V0cHV0ID0ge307XG4gICAgICAgIGNvbm5lY3Rpb25MaXN0ID0geWllbGQgTG9jYWxDb25uZWN0aW9uRGF0YS5HZXRDb25uZWN0aW9uc09mQ29tcG9zaXRpb25Mb2NhbChpZCk7XG4gICAgICAgIC8vY29ubmVjdGlvbkxpc3QgPSBDb25uZWN0aW9uRGF0YS5HZXRDb25uZWN0aW9uc09mQ29tcG9zaXRpb24oaWQpO1xuICAgICAgICB2YXIgY29tcG9zaXRpb25MaXN0ID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29ubmVjdGlvbkxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghY29tcG9zaXRpb25MaXN0LmluY2x1ZGVzKGNvbm5lY3Rpb25MaXN0W2ldLm9mVGhlQ29uY2VwdElkKSkge1xuICAgICAgICAgICAgICAgIGNvbXBvc2l0aW9uTGlzdC5wdXNoKGNvbm5lY3Rpb25MaXN0W2ldLm9mVGhlQ29uY2VwdElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgY29uY2VwdCA9IHlpZWxkIExvY2FsQ29uY2VwdHNEYXRhLkdldENvbmNlcHQoaWQpO1xuICAgICAgICB2YXIgb3V0cHV0ID0geWllbGQgcmVjdXJzaXZlRmV0Y2hMb2NhbChpZCwgY29ubmVjdGlvbkxpc3QsIGNvbXBvc2l0aW9uTGlzdCk7XG4gICAgICAgIHZhciBtYWluU3RyaW5nID0gKF9iID0gKF9hID0gY29uY2VwdCA9PT0gbnVsbCB8fCBjb25jZXB0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb25jZXB0LnR5cGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jaGFyYWN0ZXJWYWx1ZSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogXCJ0b3BcIjtcbiAgICAgICAgcmV0dXJuT3V0cHV0W21haW5TdHJpbmddID0gb3V0cHV0O1xuICAgICAgICByZXR1cm4gcmV0dXJuT3V0cHV0O1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIEdldENvbXBvc2l0aW9uTG9jYWxXaXRoSWQoaWQpIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBjb25uZWN0aW9uTGlzdCA9IFtdO1xuICAgICAgICB2YXIgcmV0dXJuT3V0cHV0ID0ge307XG4gICAgICAgIGNvbm5lY3Rpb25MaXN0ID0geWllbGQgTG9jYWxDb25uZWN0aW9uRGF0YS5HZXRDb25uZWN0aW9uc09mQ29tcG9zaXRpb25Mb2NhbChpZCk7XG4gICAgICAgIHZhciBjb21wb3NpdGlvbkxpc3QgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb25uZWN0aW9uTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCFjb21wb3NpdGlvbkxpc3QuaW5jbHVkZXMoY29ubmVjdGlvbkxpc3RbaV0ub2ZUaGVDb25jZXB0SWQpKSB7XG4gICAgICAgICAgICAgICAgY29tcG9zaXRpb25MaXN0LnB1c2goY29ubmVjdGlvbkxpc3RbaV0ub2ZUaGVDb25jZXB0SWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBjb25jZXB0ID0geWllbGQgTG9jYWxDb25jZXB0c0RhdGEuR2V0Q29uY2VwdChpZCk7XG4gICAgICAgIGlmIChjb25jZXB0LmlkICE9IDApIHtcbiAgICAgICAgICAgIHZhciBvdXRwdXQgPSB5aWVsZCByZWN1cnNpdmVGZXRjaExvY2FsKGlkLCBjb25uZWN0aW9uTGlzdCwgY29tcG9zaXRpb25MaXN0KTtcbiAgICAgICAgICAgIHZhciBtYWluU3RyaW5nID0gKF9iID0gKF9hID0gY29uY2VwdCA9PT0gbnVsbCB8fCBjb25jZXB0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb25jZXB0LnR5cGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jaGFyYWN0ZXJWYWx1ZSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogXCJ0b3BcIjtcbiAgICAgICAgICAgIHJldHVybk91dHB1dFttYWluU3RyaW5nXSA9IG91dHB1dDtcbiAgICAgICAgICAgIHZhciBGaW5hbFJldHVybiA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIEZpbmFsUmV0dXJuWydkYXRhJ10gPSByZXR1cm5PdXRwdXQ7XG4gICAgICAgIEZpbmFsUmV0dXJuWydpZCddID0gaWQ7XG4gICAgICAgIHJldHVybiBGaW5hbFJldHVybjtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHJlY3Vyc2l2ZUZldGNoTG9jYWwoaWQsIGNvbm5lY3Rpb25MaXN0LCBjb21wb3NpdGlvbkxpc3QpIHtcbiAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIG91dHB1dCA9IHt9O1xuICAgICAgICB2YXIgYXJyb3V0cHV0ID0gW107XG4gICAgICAgIHZhciBjb25jZXB0ID0geWllbGQgTG9jYWxDb25jZXB0c0RhdGEuR2V0Q29uY2VwdChpZCk7XG4gICAgICAgIGlmIChjb25jZXB0LmlkICE9IDApIHtcbiAgICAgICAgICAgIGlmIChjb25jZXB0LnR5cGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHZhciB0b0NvbmNlcHRUeXBlSWQgPSBjb25jZXB0LnR5cGVJZDtcbiAgICAgICAgICAgICAgICB2YXIgdG9Db25jZXB0VHlwZSA9IHlpZWxkIExvY2FsQ29uY2VwdHNEYXRhLkdldENvbmNlcHQodG9Db25jZXB0VHlwZUlkKTtcbiAgICAgICAgICAgICAgICBjb25jZXB0LnR5cGUgPSB0b0NvbmNlcHRUeXBlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBtYWluU3RyaW5nID0gKF9iID0gKF9hID0gY29uY2VwdCA9PT0gbnVsbCB8fCBjb25jZXB0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb25jZXB0LnR5cGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jaGFyYWN0ZXJWYWx1ZSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogXCJ0b3BcIjtcbiAgICAgICAgaWYgKCFjb21wb3NpdGlvbkxpc3QuaW5jbHVkZXMoaWQpKSB7XG4gICAgICAgICAgICByZXR1cm4gY29uY2VwdCA9PT0gbnVsbCB8fCBjb25jZXB0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb25jZXB0LmNoYXJhY3RlclZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb25uZWN0aW9uTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChjb25uZWN0aW9uTGlzdFtpXS5vZlRoZUNvbmNlcHRJZCA9PSBpZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdG9Db25jZXB0SWQgPSBjb25uZWN0aW9uTGlzdFtpXS50b1RoZUNvbmNlcHRJZDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvQ29uY2VwdCA9IHlpZWxkIExvY2FsQ29uY2VwdHNEYXRhLkdldENvbmNlcHQodG9Db25jZXB0SWQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9Db25jZXB0LmlkICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgodG9Db25jZXB0ID09PSBudWxsIHx8IHRvQ29uY2VwdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogdG9Db25jZXB0LnR5cGUpID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdG9Db25jZXB0VHlwZUlkID0gdG9Db25jZXB0LnR5cGVJZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdG9Db25jZXB0VHlwZSA9IHlpZWxkIExvY2FsQ29uY2VwdHNEYXRhLkdldENvbmNlcHQodG9Db25jZXB0VHlwZUlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b0NvbmNlcHQudHlwZSA9IHRvQ29uY2VwdFR5cGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlZ2V4ID0gXCJ0aGVfXCI7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsb2NhbG1haW5TdHJpbmcgPSAoX2QgPSAoX2MgPSB0b0NvbmNlcHQgPT09IG51bGwgfHwgdG9Db25jZXB0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0b0NvbmNlcHQudHlwZSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmNoYXJhY3RlclZhbHVlKSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiBcInRvcFwiO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbG9jYWxLZXkgPSBsb2NhbG1haW5TdHJpbmcucmVwbGFjZShyZWdleCwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc05hTihOdW1iZXIobG9jYWxLZXkpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxvY2FsS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgcmVjdXJzaXZlRmV0Y2hMb2NhbCh0b0NvbmNlcHRJZCwgY29ubmVjdGlvbkxpc3QsIGNvbXBvc2l0aW9uTGlzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0W2xvY2FsS2V5XSA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIHJlY3Vyc2l2ZUZldGNoTG9jYWwodG9Db25jZXB0SWQsIGNvbm5lY3Rpb25MaXN0LCBjb21wb3NpdGlvbkxpc3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3V0cHV0W2xvY2FsS2V5XSA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCA9IGFycm91dHB1dDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBMb2NhbENvbmNlcHRzRGF0YSB9IGZyb20gXCIuLi8uLi9EYXRhU3RydWN0dXJlcy9Mb2NhbC9Mb2NhbENvbmNlcHREYXRhXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHZXRDb25jZXB0QnlDaGFyYWN0ZXJMb2NhbChjaGFyYWN0ZXJWYWx1ZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBjb25jZXB0ID0geWllbGQgTG9jYWxDb25jZXB0c0RhdGEuR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyKGNoYXJhY3RlclZhbHVlKTtcbiAgICAgICAgcmV0dXJuIGNvbmNlcHQ7XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IExvY2FsQ29uY2VwdHNEYXRhIH0gZnJvbSBcIi4uLy4uL0RhdGFTdHJ1Y3R1cmVzL0xvY2FsL0xvY2FsQ29uY2VwdERhdGFcIjtcbmltcG9ydCBDcmVhdGVUaGVDb25jZXB0TG9jYWwgZnJvbSBcIi4vQ3JlYXRlVGhlQ29uY2VwdExvY2FsXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWtlVGhlQ29uY2VwdExvY2FsKHJlZmVyZW50LCB1c2VySWQsIGNhdGVnb3J5SWQsIGNhdGVnb3J5VXNlcklkLCB0eXBlSWQsIHR5cGVVc2VySWQsIHJlZmVyZW50SWQsIHJlZmVyZW50VXNlcklkLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBjb25jZXB0U3RyaW5nID0geWllbGQgTG9jYWxDb25jZXB0c0RhdGEuR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyQW5kVHlwZUxvY2FsKHJlZmVyZW50LCB0eXBlSWQpO1xuICAgICAgICB2YXIgY29uY2VwdCA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgIGlmIChjb25jZXB0LmlkID09IDApIHtcbiAgICAgICAgICAgIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCBDcmVhdGVUaGVDb25jZXB0TG9jYWwocmVmZXJlbnQsIHVzZXJJZCwgY2F0ZWdvcnlJZCwgY2F0ZWdvcnlVc2VySWQsIHR5cGVJZCwgdHlwZVVzZXJJZCwgcmVmZXJlbnRJZCwgcmVmZXJlbnRVc2VySWQsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkKTtcbiAgICAgICAgICAgIGNvbmNlcHQgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb25jZXB0O1xuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBDcmVhdGVUZXh0RGF0YSB9IGZyb20gXCIuLi8uLi9BcGkvQ3JlYXRlL0NyZWF0ZVRoZVRleHREYXRhXCI7XG5pbXBvcnQgeyBUaGVUZXh0cyB9IGZyb20gXCIuLi8uLi9EYXRhU3RydWN0dXJlcy9UaGVUZXh0c1wiO1xuaW1wb3J0IENyZWF0ZVRoZUNvbmNlcHQgZnJvbSBcIi4uL0NyZWF0ZVRoZUNvbmNlcHRcIjtcbmltcG9ydCBDcmVhdGVUaGVDb25jZXB0TG9jYWwgZnJvbSBcIi4vQ3JlYXRlVGhlQ29uY2VwdExvY2FsXCI7XG5pbXBvcnQgTWFrZVRoZVR5cGVDb25jZXB0TG9jYWwgZnJvbSBcIi4vTWFrZVRoZVR5cGVMb2NhbFwiO1xuaW1wb3J0IHsgTG9jYWxDb25jZXB0c0RhdGEgfSBmcm9tIFwiLi4vLi4vRGF0YVN0cnVjdHVyZXMvTG9jYWwvTG9jYWxDb25jZXB0RGF0YVwiO1xuZXhwb3J0IGZ1bmN0aW9uIE1ha2VUaGVJbnN0YW5jZUNvbmNlcHRMb2NhbCh0eXBlLCByZWZlcmVudCwgY29tcG9zaXRpb24gPSBmYWxzZSwgdXNlcklkLCBhY2Nlc3NJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQgPSA5OTkpIHtcbiAgICB2YXIgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIGFjY2Vzc0lkO1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHNlc3Npb25JbmZvcm1hdGlvbklkID0gOTk5O1xuICAgICAgICB2YXIgY2F0ZWdvcnlJZCA9IDQ7XG4gICAgICAgIHZhciBjYXRlZ29yeVVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdmFyIHJlZmVyZW50SWQgPSAwO1xuICAgICAgICB2YXIgcmVmZXJlbnRVc2VySWQgPSA5OTk7XG4gICAgICAgIHZhciBzZWN1cml0eUlkID0gOTk5O1xuICAgICAgICB2YXIgc2VjdXJpdHlVc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHZhciBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIGFjY2Vzc0lkID0gNDtcbiAgICAgICAgdmFyIGFjY2Vzc1VzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdmFyIHN0cmluZ1RvQ2hlY2sgPSBcIlwiO1xuICAgICAgICB2YXIgc3RyaW5nTGVuZ3RoID0gcmVmZXJlbnQubGVuZ3RoO1xuICAgICAgICB2YXIgdHlwZUNvbmNlcHQ7XG4gICAgICAgIHZhciBjb25jZXB0O1xuICAgICAgICB2YXIgc3RhcnRzV2l0aFRoZSA9IHR5cGUuc3RhcnRzV2l0aChcInRoZV9cIik7XG4gICAgICAgIGlmIChzdGFydHNXaXRoVGhlKSB7XG4gICAgICAgICAgICBzdHJpbmdUb0NoZWNrID0gdHlwZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN0cmluZ1RvQ2hlY2sgPSBcInRoZV9cIiArIHR5cGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbXBvc2l0aW9uKSB7XG4gICAgICAgICAgICB2YXIgdHlwZUNvbmNlcHRTdHJpbmcgPSB5aWVsZCBNYWtlVGhlVHlwZUNvbmNlcHRMb2NhbCh0eXBlLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgdXNlcklkLCB1c2VySWQpO1xuICAgICAgICAgICAgdHlwZUNvbmNlcHQgPSB0eXBlQ29uY2VwdFN0cmluZztcbiAgICAgICAgICAgIHZhciBjb25jZXB0U3RyaW5nID0geWllbGQgQ3JlYXRlVGhlQ29uY2VwdExvY2FsKHJlZmVyZW50LCB1c2VySWQsIGNhdGVnb3J5SWQsIHVzZXJJZCwgdHlwZUNvbmNlcHQuaWQsIHR5cGVDb25jZXB0LnVzZXJJZCwgcmVmZXJlbnRJZCwgcmVmZXJlbnRVc2VySWQsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkKTtcbiAgICAgICAgICAgIGNvbmNlcHQgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0cmluZ0xlbmd0aCA+IDI1NSkge1xuICAgICAgICAgICAgdmFyIHR5cGVDb25jZXB0U3RyaW5nID0geWllbGQgTWFrZVRoZVR5cGVDb25jZXB0TG9jYWwoc3RyaW5nVG9DaGVjaywgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCwgdXNlcklkKTtcbiAgICAgICAgICAgIHR5cGVDb25jZXB0ID0gdHlwZUNvbmNlcHRTdHJpbmc7XG4gICAgICAgICAgICB2YXIgY29uY2VwdFN0cmluZyA9IHlpZWxkIENyZWF0ZVRoZUNvbmNlcHQocmVmZXJlbnQsIHVzZXJJZCwgY2F0ZWdvcnlJZCwgdXNlcklkLCB0eXBlQ29uY2VwdC5pZCwgdHlwZUNvbmNlcHQudXNlcklkLCByZWZlcmVudElkLCByZWZlcmVudFVzZXJJZCwgc2VjdXJpdHlJZCwgc2VjdXJpdHlVc2VySWQsIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQsIHNlc3Npb25JbmZvcm1hdGlvbklkLCBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQpO1xuICAgICAgICAgICAgY29uY2VwdCA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgICAgICB2YXIgVGhlVGV4dHNEYXRhID0gbmV3IFRoZVRleHRzKHVzZXJJZCwgcmVmZXJlbnQsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkLCBEYXRlLm5vdygpLnRvU3RyaW5nKCksIHRydWUpO1xuICAgICAgICAgICAgdmFyIFRleHREYXRhU3RyaW5nID0geWllbGQgQ3JlYXRlVGV4dERhdGEoVGhlVGV4dHNEYXRhKTtcbiAgICAgICAgICAgIHZhciBUZXh0RGF0YSA9IFRleHREYXRhU3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHR5cGVDb25jZXB0U3RyaW5nID0geWllbGQgTWFrZVRoZVR5cGVDb25jZXB0TG9jYWwoc3RyaW5nVG9DaGVjaywgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCwgdXNlcklkKTtcbiAgICAgICAgICAgIHR5cGVDb25jZXB0ID0gdHlwZUNvbmNlcHRTdHJpbmc7XG4gICAgICAgICAgICB2YXIgY29uY2VwdEJ5Q2hhclR5cGVTdHJpbmcgPSB5aWVsZCBMb2NhbENvbmNlcHRzRGF0YS5HZXRDb25jZXB0QnlDaGFyYWN0ZXJBbmRUeXBlTG9jYWwocmVmZXJlbnQsIHR5cGVDb25jZXB0LmlkKTtcbiAgICAgICAgICAgIHZhciBjb25jZXB0VHlwZUNoYXJhY3RlciA9IGNvbmNlcHRCeUNoYXJUeXBlU3RyaW5nO1xuICAgICAgICAgICAgLy8gdmFyIG1ha2VUaGVOYW1lU3RyaW5nID0gYXdhaXQgTWFrZVRoZU5hbWUocmVmZXJlbnQsdXNlcklkLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCx0eXBlQ29uY2VwdC5pZCwgdHlwZUNvbmNlcHQudXNlcklkLGNvbmNlcHRUeXBlQ2hhcmFjdGVyICk7XG4gICAgICAgICAgICAvLyB2YXIgbWFrZVRoZU5hbWVDb25jZXB0ID0gbWFrZVRoZU5hbWVTdHJpbmcgYXMgQ29uY2VwdDtcbiAgICAgICAgICAgIGNvbmNlcHQgPSBjb25jZXB0VHlwZUNoYXJhY3RlcjtcbiAgICAgICAgICAgIGlmIChjb25jZXB0VHlwZUNoYXJhY3Rlci5pZCA9PSAwICYmIGNvbmNlcHRUeXBlQ2hhcmFjdGVyLnVzZXJJZCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCBDcmVhdGVUaGVDb25jZXB0TG9jYWwocmVmZXJlbnQsIHVzZXJJZCwgY2F0ZWdvcnlJZCwgdXNlcklkLCB0eXBlQ29uY2VwdC5pZCwgdHlwZUNvbmNlcHQudXNlcklkLCAwLCAwLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCk7XG4gICAgICAgICAgICAgICAgY29uY2VwdCA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uY2VwdC50eXBlID0gdHlwZUNvbmNlcHQ7XG4gICAgICAgIHJldHVybiBjb25jZXB0O1xuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgQ3JlYXRlVGhlQ29uY2VwdExvY2FsIGZyb20gXCIuL0NyZWF0ZVRoZUNvbmNlcHRMb2NhbFwiO1xuaW1wb3J0IEdldENvbmNlcHRCeUNoYXJhY3RlckxvY2FsIGZyb20gXCIuL0dldENvbmNlcHRCeUNoYXJhY3RlckxvY2FsXCI7XG5pbXBvcnQgeyBTcGxpdFN0cmluZ3MgfSBmcm9tIFwiLi4vU3BsaXRTdHJpbmdzXCI7XG5pbXBvcnQgTWFrZVRoZUNvbmNlcHRMb2NhbCBmcm9tIFwiLi9NYWtlVGhlQ29uY2VwdExvY2FsXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWtlVGhlVHlwZUNvbmNlcHRMb2NhbCh0eXBlU3RyaW5nLCBzZXNzaW9uSWQsIHNlc3Npb25Vc2VySWQsIHVzZXJJZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciByZWZlcmVudElkID0gOTk5O1xuICAgICAgICB2YXIgc2VjdXJpdHlJZCA9IDk5OTtcbiAgICAgICAgdmFyIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCA9IDk5OTtcbiAgICAgICAgdmFyIGFjY2Vzc0lkID0gOTk5O1xuICAgICAgICB2YXIgc2VjdXJpdHlVc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHZhciBhY2Nlc3NVc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHZhciBjYXRlZ29yeVVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdmFyIHNlY3VyaXR5VXNlcklkID0gdXNlcklkO1xuICAgICAgICB2YXIgZXhpc3RpbmdDb25jZXB0ID0geWllbGQgR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyTG9jYWwodHlwZVN0cmluZyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXhpc3RpbmcgaGVyZVwiLCB0eXBlU3RyaW5nKTtcbiAgICAgICAgY29uc29sZS5sb2coZXhpc3RpbmdDb25jZXB0KTtcbiAgICAgICAgaWYgKGV4aXN0aW5nQ29uY2VwdCkge1xuICAgICAgICAgICAgaWYgKGV4aXN0aW5nQ29uY2VwdC5pZCA9PSAwIHx8IGV4aXN0aW5nQ29uY2VwdC51c2VySWQgPT0gMCkge1xuICAgICAgICAgICAgICAgIHZhciBzcGxpdHRlZFN0cmluZ0FycmF5ID0gU3BsaXRTdHJpbmdzKHR5cGVTdHJpbmcpO1xuICAgICAgICAgICAgICAgIGlmIChzcGxpdHRlZFN0cmluZ0FycmF5WzBdID09IHR5cGVTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmNlcHQgPSB5aWVsZCBNYWtlVGhlQ29uY2VwdExvY2FsKHR5cGVTdHJpbmcsIHVzZXJJZCwgNCwgdXNlcklkLCA1MSwgdXNlcklkLCByZWZlcmVudElkLCB1c2VySWQsIHNlY3VyaXR5SWQsIHVzZXJJZCwgYWNjZXNzSWQsIHVzZXJJZCwgc2Vzc2lvbklkLCB1c2VySWQpO1xuICAgICAgICAgICAgICAgICAgICBleGlzdGluZ0NvbmNlcHQgPSBjb25jZXB0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhdGVnb3J5SWQgPSAxO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2F0ZWdvcnlDb25jZXB0ID0gTWFrZVRoZVR5cGVDb25jZXB0TG9jYWwoc3BsaXR0ZWRTdHJpbmdBcnJheVswXSwgc2Vzc2lvbklkLCBzZXNzaW9uVXNlcklkLCB1c2VySWQpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdHlwZUNvbmNlcHQgPSB5aWVsZCBNYWtlVGhlVHlwZUNvbmNlcHRMb2NhbChzcGxpdHRlZFN0cmluZ0FycmF5WzFdLCBzZXNzaW9uSWQsIHNlc3Npb25Vc2VySWQsIHVzZXJJZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlQ29uY2VwdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmNlcHQgPSB5aWVsZCBDcmVhdGVUaGVDb25jZXB0TG9jYWwodHlwZVN0cmluZywgdXNlcklkLCBjYXRlZ29yeUlkLCB1c2VySWQsIHR5cGVDb25jZXB0LmlkLCB1c2VySWQsIHJlZmVyZW50SWQsIHVzZXJJZCwgc2VjdXJpdHlJZCwgdXNlcklkLCBhY2Nlc3NJZCwgdXNlcklkLCBzZXNzaW9uSWQsIHVzZXJJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ0NvbmNlcHQgPSBjb25jZXB0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBleGlzdGluZ0NvbmNlcHQ7XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCBNYWtlVGhlQ2hhcmFjdGVyRGF0YSBmcm9tIFwiLi9NYWtlVGhlQ2hhcmFjdGVyRGF0YVwiO1xuaW1wb3J0IE1ha2VUaGVDb25jZXB0IGZyb20gXCIuL01ha2VUaGVDb25jZXB0XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWtlVGhlQ2hhcmFjdGVyKHRoZV9jaGFyYWN0ZXJfZGF0YSwgdXNlcklkLCBzZWN1cml0eUlkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSWQpIHtcbiAgICB2YXIgYWNjZXNzVXNlcklkO1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBjYXRlZ29yeVVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdmFyIHNlY3VyaXR5VXNlcklkID0gdXNlcklkO1xuICAgICAgICBhY2Nlc3NVc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHZhciBjYXRlZ29yeUlkID0gNDtcbiAgICAgICAgdmFyIHR5cGVJZCA9IDUxO1xuICAgICAgICB2YXIgdHlwZVVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdmFyIHNlc3Npb25Vc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHZhciByZWZlcmVudFVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdmFyIGxlbmd0aE9mQ2hhcmFjdGVycyA9IHRoZV9jaGFyYWN0ZXJfZGF0YS5sZW5ndGg7XG4gICAgICAgIHZhciBjb25jZXB0O1xuICAgICAgICBpZiAobGVuZ3RoT2ZDaGFyYWN0ZXJzID09IDEpIHtcbiAgICAgICAgICAgIHZhciByZWZlcmVudElkID0gdGhlX2NoYXJhY3Rlcl9kYXRhLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgICAgICB2YXIgdHlwZUlkRm9yQ2hhcmFjdGVyID0gNDk7XG4gICAgICAgICAgICB2YXIgY2hhcmFjdGVyRGF0YVN0cmluZyA9IHlpZWxkIE1ha2VUaGVDaGFyYWN0ZXJEYXRhKHRoZV9jaGFyYWN0ZXJfZGF0YSwgdXNlcklkLCBzZWN1cml0eUlkLCBhY2Nlc3NJZCwgc2Vzc2lvbklkKTtcbiAgICAgICAgICAgIGNvbmNlcHQgPSBNYWtlVGhlQ29uY2VwdCh0aGVfY2hhcmFjdGVyX2RhdGEsIHVzZXJJZCwgY2F0ZWdvcnlJZCwgY2F0ZWdvcnlVc2VySWQsIHJlZmVyZW50SWQsIHJlZmVyZW50VXNlcklkLCB0eXBlSWRGb3JDaGFyYWN0ZXIsIHR5cGVVc2VySWQsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSWQsIHNlc3Npb25Vc2VySWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGNoYXJhY3RlckRhdGFTdHJpbmcgPSB5aWVsZCBNYWtlVGhlQ2hhcmFjdGVyRGF0YSh0aGVfY2hhcmFjdGVyX2RhdGEsIHVzZXJJZCwgc2VjdXJpdHlJZCwgYWNjZXNzSWQsIHNlc3Npb25JZCk7XG4gICAgICAgICAgICB2YXIgY2hhcmFjdGVyRGF0YSA9IGNoYXJhY3RlckRhdGFTdHJpbmc7XG4gICAgICAgICAgICBpZiAoY2hhcmFjdGVyRGF0YS5pc05ldykge1xuICAgICAgICAgICAgICAgIHZhciBjb25jZXB0U3RyaW5nID0geWllbGQgTWFrZVRoZUNvbmNlcHQodGhlX2NoYXJhY3Rlcl9kYXRhLCB1c2VySWQsIGNhdGVnb3J5SWQsIGNhdGVnb3J5VXNlcklkLCB0eXBlSWQsIHR5cGVVc2VySWQsIGNoYXJhY3RlckRhdGEuaWQsIGNoYXJhY3RlckRhdGEudXNlcklkLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbklkLCBzZXNzaW9uVXNlcklkKTtcbiAgICAgICAgICAgICAgICBjb25jZXB0ID0gY29uY2VwdFN0cmluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBjb25jZXB0U3RyaW5nID0geWllbGQgTWFrZVRoZUNvbmNlcHQodGhlX2NoYXJhY3Rlcl9kYXRhLCB1c2VySWQsIGNhdGVnb3J5SWQsIGNhdGVnb3J5VXNlcklkLCB0eXBlSWQsIHR5cGVVc2VySWQsIGNoYXJhY3RlckRhdGEuaWQsIGNoYXJhY3RlckRhdGEudXNlcklkLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbklkLCBzZXNzaW9uVXNlcklkKTtcbiAgICAgICAgICAgICAgICBjb25jZXB0ID0gY29uY2VwdFN0cmluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29uY2VwdDtcbiAgICB9KTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgQ3JlYXRlVGhlQ2hhcmFjdGVyIH0gZnJvbSBcIi4uL0FwaS9DcmVhdGUvQ3JlYXRlVGhlQ2hhcmFjdGVyXCI7XG5pbXBvcnQgeyBUaGVDaGFyYWN0ZXIgfSBmcm9tIFwiLi4vRGF0YVN0cnVjdHVyZXMvVGhlQ2hhcmFjdGVyXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWtlVGhlQ2hhcmFjdGVyRGF0YSh0aGVfY2hhcmFjdGVyX2RhdGEsIHVzZXJJZCwgc2VjdXJpdHlJZCwgYWNjZXNzSWQsIHNlc3Npb25JZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBjYXRlZ29yeVVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdmFyIGFjY2Vzc1VzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdmFyIHNlY3VyaXR5VXNlcklkID0gdXNlcklkO1xuICAgICAgICB2YXIgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkID0gdXNlcklkO1xuICAgICAgICB2YXIgdGhlQ2hhcmFjdGVyID0gbmV3IFRoZUNoYXJhY3Rlcih1c2VySWQsIHRoZV9jaGFyYWN0ZXJfZGF0YSwgc2VjdXJpdHlJZCwgc2VjdXJpdHlVc2VySWQsIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQsIHNlc3Npb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkLCBcIlwiLCBmYWxzZSk7XG4gICAgICAgIHZhciBvdXRwdXQgPSB5aWVsZCBDcmVhdGVUaGVDaGFyYWN0ZXIodGhlQ2hhcmFjdGVyKTtcbiAgICAgICAgdmFyIHJldHVybmVyID0gb3V0cHV0O1xuICAgICAgICByZXR1cm4gcmV0dXJuZXI7XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IEdldENvbmNlcHRCeUNoYXJhY3RlckFuZFR5cGUgfSBmcm9tIFwiLi4vQXBpL0dldENvbmNlcHRCeUNoYXJhY3RlckFuZFR5cGVcIjtcbmltcG9ydCBDcmVhdGVUaGVDb25jZXB0IGZyb20gXCIuL0NyZWF0ZVRoZUNvbmNlcHRcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1ha2VUaGVDb25jZXB0KHJlZmVyZW50LCB1c2VySWQsIGNhdGVnb3J5SWQsIGNhdGVnb3J5VXNlcklkLCB0eXBlSWQsIHR5cGVVc2VySWQsIHJlZmVyZW50SWQsIHJlZmVyZW50VXNlcklkLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBjb25jZXB0U3RyaW5nID0geWllbGQgR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyQW5kVHlwZShyZWZlcmVudCwgdHlwZUlkKTtcbiAgICAgICAgdmFyIGNvbmNlcHQgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICBpZiAoY29uY2VwdC5pZCA9PSAwKSB7XG4gICAgICAgICAgICBjb25jZXB0U3RyaW5nID0geWllbGQgQ3JlYXRlVGhlQ29uY2VwdChyZWZlcmVudCwgdXNlcklkLCBjYXRlZ29yeUlkLCBjYXRlZ29yeVVzZXJJZCwgdHlwZUlkLCB0eXBlVXNlcklkLCByZWZlcmVudElkLCByZWZlcmVudFVzZXJJZCwgc2VjdXJpdHlJZCwgc2VjdXJpdHlVc2VySWQsIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQsIHNlc3Npb25JbmZvcm1hdGlvbklkLCBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQpO1xuICAgICAgICAgICAgY29uY2VwdCA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbmNlcHQ7XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IENyZWF0ZVRleHREYXRhIH0gZnJvbSBcIi4uL0FwaS9DcmVhdGUvQ3JlYXRlVGhlVGV4dERhdGFcIjtcbmltcG9ydCB7IEdldENvbmNlcHRCeUNoYXJhY3RlckFuZFR5cGUgfSBmcm9tIFwiLi4vQXBpL0dldENvbmNlcHRCeUNoYXJhY3RlckFuZFR5cGVcIjtcbmltcG9ydCB7IENvbmNlcHQgfSBmcm9tIFwiLi4vRGF0YVN0cnVjdHVyZXMvQ29uY2VwdFwiO1xuaW1wb3J0IHsgVGhlVGV4dHMgfSBmcm9tIFwiLi4vRGF0YVN0cnVjdHVyZXMvVGhlVGV4dHNcIjtcbmltcG9ydCBDcmVhdGVUaGVDb25jZXB0IGZyb20gXCIuL0NyZWF0ZVRoZUNvbmNlcHRcIjtcbmltcG9ydCB7IE1ha2VUaGVOYW1lIH0gZnJvbSBcIi4vTWFrZVRoZU5hbWVcIjtcbmltcG9ydCBNYWtlVGhlVHlwZUNvbmNlcHQgZnJvbSBcIi4vTWFrZVRoZVR5cGVDb25jZXB0XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWtlVGhlSW5zdGFuY2VDb25jZXB0KHR5cGUsIHJlZmVyZW50LCBjb21wb3NpdGlvbiA9IGZhbHNlLCB1c2VySWQsIGFjY2Vzc0lkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCA9IDk5OSkge1xuICAgIHZhciBzZXNzaW9uSW5mb3JtYXRpb25JZCwgYWNjZXNzSWQ7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgc2Vzc2lvbkluZm9ybWF0aW9uSWQgPSA5OTk7XG4gICAgICAgIHZhciBjYXRlZ29yeUlkID0gNDtcbiAgICAgICAgdmFyIGNhdGVnb3J5VXNlcklkID0gdXNlcklkO1xuICAgICAgICB2YXIgcmVmZXJlbnRJZCA9IDA7XG4gICAgICAgIHZhciByZWZlcmVudFVzZXJJZCA9IDk5OTtcbiAgICAgICAgdmFyIHNlY3VyaXR5SWQgPSA5OTk7XG4gICAgICAgIHZhciBzZWN1cml0eVVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdmFyIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgYWNjZXNzSWQgPSA0O1xuICAgICAgICB2YXIgYWNjZXNzVXNlcklkID0gdXNlcklkO1xuICAgICAgICB2YXIgc3RyaW5nVG9DaGVjayA9IFwiXCI7XG4gICAgICAgIHZhciBzdHJpbmdMZW5ndGggPSByZWZlcmVudC5sZW5ndGg7XG4gICAgICAgIHZhciB0eXBlQ29uY2VwdCA9IG5ldyBDb25jZXB0KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIFwiMFwiLCAwLCAwLCAwLCAwLCAwLCAwLCBmYWxzZSk7XG4gICAgICAgIHZhciBjb25jZXB0O1xuICAgICAgICB2YXIgc3RhcnRzV2l0aFRoZSA9IHR5cGUuc3RhcnRzV2l0aChcInRoZV9cIik7XG4gICAgICAgIGlmIChzdGFydHNXaXRoVGhlKSB7XG4gICAgICAgICAgICBzdHJpbmdUb0NoZWNrID0gdHlwZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN0cmluZ1RvQ2hlY2sgPSBcInRoZV9cIiArIHR5cGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbXBvc2l0aW9uKSB7XG4gICAgICAgICAgICB2YXIgdHlwZUNvbmNlcHRTdHJpbmcgPSB5aWVsZCBNYWtlVGhlVHlwZUNvbmNlcHQodHlwZSwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHVzZXJJZCwgdXNlcklkKTtcbiAgICAgICAgICAgIHR5cGVDb25jZXB0ID0gdHlwZUNvbmNlcHRTdHJpbmc7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZvciBjb21wc29zaXRpb25cIiwgdHlwZUNvbmNlcHQpO1xuICAgICAgICAgICAgdmFyIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCBDcmVhdGVUaGVDb25jZXB0KHJlZmVyZW50LCB1c2VySWQsIGNhdGVnb3J5SWQsIHVzZXJJZCwgdHlwZUNvbmNlcHQuaWQsIHR5cGVDb25jZXB0LnVzZXJJZCwgcmVmZXJlbnRJZCwgcmVmZXJlbnRVc2VySWQsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkKTtcbiAgICAgICAgICAgIGNvbmNlcHQgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0cmluZ0xlbmd0aCA+IDI1NSkge1xuICAgICAgICAgICAgdmFyIHR5cGVDb25jZXB0U3RyaW5nID0geWllbGQgTWFrZVRoZVR5cGVDb25jZXB0KHN0cmluZ1RvQ2hlY2ssIHNlc3Npb25JbmZvcm1hdGlvbklkLCBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQsIHVzZXJJZCk7XG4gICAgICAgICAgICB0eXBlQ29uY2VwdCA9IHR5cGVDb25jZXB0U3RyaW5nO1xuICAgICAgICAgICAgdmFyIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCBDcmVhdGVUaGVDb25jZXB0KHJlZmVyZW50LCB1c2VySWQsIGNhdGVnb3J5SWQsIHVzZXJJZCwgdHlwZUNvbmNlcHQuaWQsIHR5cGVDb25jZXB0LnVzZXJJZCwgcmVmZXJlbnRJZCwgcmVmZXJlbnRVc2VySWQsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkKTtcbiAgICAgICAgICAgIGNvbmNlcHQgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICAgICAgdmFyIFRoZVRleHRzRGF0YSA9IG5ldyBUaGVUZXh0cyh1c2VySWQsIHJlZmVyZW50LCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCwgRGF0ZS5ub3coKS50b1N0cmluZygpLCB0cnVlKTtcbiAgICAgICAgICAgIHZhciBUZXh0RGF0YVN0cmluZyA9IHlpZWxkIENyZWF0ZVRleHREYXRhKFRoZVRleHRzRGF0YSk7XG4gICAgICAgICAgICB2YXIgVGV4dERhdGEgPSBUZXh0RGF0YVN0cmluZztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0eXBlQ29uY2VwdFN0cmluZyA9IHlpZWxkIE1ha2VUaGVUeXBlQ29uY2VwdChzdHJpbmdUb0NoZWNrLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkLCB1c2VySWQpO1xuICAgICAgICAgICAgdHlwZUNvbmNlcHQgPSB0eXBlQ29uY2VwdFN0cmluZztcbiAgICAgICAgICAgIHZhciBjb25jZXB0QnlDaGFyVHlwZVN0cmluZyA9IHlpZWxkIEdldENvbmNlcHRCeUNoYXJhY3RlckFuZFR5cGUocmVmZXJlbnQsIHR5cGVDb25jZXB0LmlkKTtcbiAgICAgICAgICAgIHZhciBjb25jZXB0VHlwZUNoYXJhY3RlciA9IGNvbmNlcHRCeUNoYXJUeXBlU3RyaW5nO1xuICAgICAgICAgICAgdmFyIG1ha2VUaGVOYW1lU3RyaW5nID0geWllbGQgTWFrZVRoZU5hbWUocmVmZXJlbnQsIHVzZXJJZCwgc2VjdXJpdHlJZCwgc2VjdXJpdHlVc2VySWQsIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQsIHNlc3Npb25JbmZvcm1hdGlvbklkLCBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQsIHR5cGVDb25jZXB0LmlkLCB0eXBlQ29uY2VwdC51c2VySWQsIGNvbmNlcHRUeXBlQ2hhcmFjdGVyKTtcbiAgICAgICAgICAgIHZhciBtYWtlVGhlTmFtZUNvbmNlcHQgPSBtYWtlVGhlTmFtZVN0cmluZztcbiAgICAgICAgICAgIGNvbmNlcHQgPSBjb25jZXB0VHlwZUNoYXJhY3RlcjtcbiAgICAgICAgICAgIGlmIChjb25jZXB0VHlwZUNoYXJhY3Rlci5pZCA9PSAwICYmIGNvbmNlcHRUeXBlQ2hhcmFjdGVyLnVzZXJJZCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCBDcmVhdGVUaGVDb25jZXB0KHJlZmVyZW50LCB1c2VySWQsIGNhdGVnb3J5SWQsIHVzZXJJZCwgdHlwZUNvbmNlcHQuaWQsIHR5cGVDb25jZXB0LnVzZXJJZCwgbWFrZVRoZU5hbWVDb25jZXB0LmlkLCBtYWtlVGhlTmFtZUNvbmNlcHQudXNlcklkLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCk7XG4gICAgICAgICAgICAgICAgY29uY2VwdCA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYoY29uY2VwdCl7XG4gICAgICAgIC8vICAgICBpZihjb25jZXB0LnR5cGUgPT0gbnVsbCl7XG4gICAgICAgIC8vICAgICAgICAgdmFyIGNvbmNlcHRUeXBlID0gQ29uY2VwdHNEYXRhLkdldENvbmNlcHQoY29uY2VwdC50eXBlSWQpO1xuICAgICAgICAvLyAgICAgICAgIGlmKGNvbmNlcHRUeXBlID09IG51bGwgJiYgY29uY2VwdC50eXBlSWQgIT0gbnVsbCAmJiBjb25jZXB0LnR5cGVJZCAhPSB1bmRlZmluZWQpe1xuICAgICAgICAvLyAgICAgICAgICAgICB2YXIgdHlwZUNvbmNlcHRTdHJpbmdOZXcgPSBhd2FpdCBHZXRDb25jZXB0KGNvbmNlcHQudHlwZUlkKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgdmFyIG5ld1R5cGVDb25jZXB0ID0gdHlwZUNvbmNlcHRTdHJpbmdOZXcgYXMgQ29uY2VwdDtcbiAgICAgICAgLy8gICAgICAgICAgICAgY29uY2VwdC50eXBlID0gbmV3VHlwZUNvbmNlcHQ7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIGNvbmNlcHQudHlwZSA9IHR5cGVDb25jZXB0O1xuICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMgaXMgdGhlIGNvbmNlcHQgcmV0dXJuZWQgYnkgbWFrZSB0aGUgaW5zdGFuY2UgY29uY2VwdFwiLCBjb25jZXB0KTtcbiAgICAgICAgcmV0dXJuIGNvbmNlcHQ7XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCBHZXRUaGVSZWZlcmVudCBmcm9tIFwiLi9HZXRUaGVSZWZlcmVudFwiO1xuaW1wb3J0IE1ha2VUaGVDaGFyYWN0ZXIgZnJvbSBcIi4vTWFrZVRoZUNoYXJhY3RlclwiO1xuaW1wb3J0IE1ha2VUaGVDb25jZXB0IGZyb20gXCIuL01ha2VUaGVDb25jZXB0XCI7XG5leHBvcnQgZnVuY3Rpb24gTWFrZVRoZU5hbWUodGhlQ2hhcmFjdGVyRGF0YSwgdXNlcklkLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCwgdHlwZUlkLCB0eXBlVXNlcklkLCBleGlzdGluZ0NvbmNlcHQpIHtcbiAgICB2YXIgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZDtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgbmFtZVR5cGVJZCA9IDEyO1xuICAgICAgICB2YXIgY2F0ZWdvcnlJZCA9IDQ7XG4gICAgICAgIHZhciBzZXNzaW9uSWQgPSBzZXNzaW9uSW5mb3JtYXRpb25JZCAhPT0gbnVsbCAmJiBzZXNzaW9uSW5mb3JtYXRpb25JZCAhPT0gdm9pZCAwID8gc2Vzc2lvbkluZm9ybWF0aW9uSWQgOiA5OTk7XG4gICAgICAgIHZhciBzZXNzaW9uVXNlcklkID0gc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkICE9PSBudWxsICYmIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCAhPT0gdm9pZCAwID8gc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkIDogOTk5O1xuICAgICAgICBhY2Nlc3NJZCA9IGFjY2Vzc0lkICE9PSBudWxsICYmIGFjY2Vzc0lkICE9PSB2b2lkIDAgPyBhY2Nlc3NJZCA6IDQ7XG4gICAgICAgIGFjY2Vzc1VzZXJJZCA9IGFjY2Vzc1VzZXJJZCAhPT0gbnVsbCAmJiBhY2Nlc3NVc2VySWQgIT09IHZvaWQgMCA/IGFjY2Vzc1VzZXJJZCA6IDk5OTtcbiAgICAgICAgdmFyIGNhdGVnb3J5VXNlcklkID0gOTk5O1xuICAgICAgICB2YXIgcmVmZXJlbnRJbmZvO1xuICAgICAgICB2YXIgY2hhcmFjdGVyQ29uY2VwdDtcbiAgICAgICAgaWYgKGV4aXN0aW5nQ29uY2VwdC5pZCA+IDAgJiYgZXhpc3RpbmdDb25jZXB0LnVzZXJJZCA+IDApIHtcbiAgICAgICAgICAgIGNoYXJhY3RlckNvbmNlcHQgPSB5aWVsZCBHZXRUaGVSZWZlcmVudChleGlzdGluZ0NvbmNlcHQuaWQsIGV4aXN0aW5nQ29uY2VwdC51c2VySWQsIGV4aXN0aW5nQ29uY2VwdC5yZWZlcmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjaGFyYWN0ZXJDb25jZXB0ID0gKHlpZWxkIE1ha2VUaGVDaGFyYWN0ZXIodGhlQ2hhcmFjdGVyRGF0YSwgdXNlcklkLCBzZWN1cml0eUlkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSWQpKTtcbiAgICAgICAgICAgIGV4aXN0aW5nQ29uY2VwdCA9IHlpZWxkIE1ha2VUaGVDb25jZXB0KHRoZUNoYXJhY3RlckRhdGEsIHVzZXJJZCwgY2F0ZWdvcnlJZCwgY2F0ZWdvcnlVc2VySWQsIG5hbWVUeXBlSWQsIHR5cGVVc2VySWQsIGNoYXJhY3RlckNvbmNlcHQuaWQsIGNoYXJhY3RlckNvbmNlcHQudXNlcklkLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbklkLCBzZXNzaW9uVXNlcklkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXhpc3RpbmdDb25jZXB0O1xuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgQ3JlYXRlVGhlQ29uY2VwdCBmcm9tIFwiLi9DcmVhdGVUaGVDb25jZXB0XCI7XG5pbXBvcnQgR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyIGZyb20gXCIuL0dldENvbmNlcHRCeUNoYXJhY3RlclwiO1xuaW1wb3J0IE1ha2VUaGVDaGFyYWN0ZXIgZnJvbSBcIi4vTWFrZVRoZUNoYXJhY3RlclwiO1xuaW1wb3J0IHsgU3BsaXRTdHJpbmdzIH0gZnJvbSBcIi4vU3BsaXRTdHJpbmdzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWtlVGhlVHlwZUNvbmNlcHQodHlwZVN0cmluZywgc2Vzc2lvbklkLCBzZXNzaW9uVXNlcklkLCB1c2VySWQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgcmVmZXJlbnRJZCA9IDk5OTtcbiAgICAgICAgdmFyIHNlY3VyaXR5SWQgPSA5OTk7XG4gICAgICAgIHZhciBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQgPSA5OTk7XG4gICAgICAgIHZhciBhY2Nlc3NJZCA9IDk5OTtcbiAgICAgICAgdmFyIHNlY3VyaXR5VXNlcklkID0gdXNlcklkO1xuICAgICAgICB2YXIgYWNjZXNzVXNlcklkID0gdXNlcklkO1xuICAgICAgICB2YXIgY2F0ZWdvcnlVc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHZhciBzZWN1cml0eVVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdmFyIGV4aXN0aW5nQ29uY2VwdCA9IHlpZWxkIEdldENvbmNlcHRCeUNoYXJhY3Rlcih0eXBlU3RyaW5nKTtcbiAgICAgICAgaWYgKGV4aXN0aW5nQ29uY2VwdCkge1xuICAgICAgICAgICAgaWYgKGV4aXN0aW5nQ29uY2VwdC5pZCA9PSAwIHx8IGV4aXN0aW5nQ29uY2VwdC51c2VySWQgPT0gMCkge1xuICAgICAgICAgICAgICAgIHZhciBzcGxpdHRlZFN0cmluZ0FycmF5ID0gU3BsaXRTdHJpbmdzKHR5cGVTdHJpbmcpO1xuICAgICAgICAgICAgICAgIGlmIChzcGxpdHRlZFN0cmluZ0FycmF5WzBdID09IHR5cGVTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCBNYWtlVGhlQ2hhcmFjdGVyKHR5cGVTdHJpbmcsIHVzZXJJZCwgc2VjdXJpdHlJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbklkKTtcbiAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdDb25jZXB0ID0gY29uY2VwdFN0cmluZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjYXRlZ29yeUlkID0gMTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhdGVnb3J5Q29uY2VwdCA9IE1ha2VUaGVUeXBlQ29uY2VwdChzcGxpdHRlZFN0cmluZ0FycmF5WzBdLCBzZXNzaW9uSWQsIHNlc3Npb25Vc2VySWQsIHVzZXJJZCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0eXBlQ29uY2VwdCA9IHlpZWxkIE1ha2VUaGVUeXBlQ29uY2VwdChzcGxpdHRlZFN0cmluZ0FycmF5WzFdLCBzZXNzaW9uSWQsIHNlc3Npb25Vc2VySWQsIHVzZXJJZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlQ29uY2VwdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmNlcHQgPSB5aWVsZCBDcmVhdGVUaGVDb25jZXB0KHR5cGVTdHJpbmcsIHVzZXJJZCwgY2F0ZWdvcnlJZCwgdXNlcklkLCB0eXBlQ29uY2VwdC5pZCwgdXNlcklkLCByZWZlcmVudElkLCB1c2VySWQsIHNlY3VyaXR5SWQsIHVzZXJJZCwgYWNjZXNzSWQsIHVzZXJJZCwgc2Vzc2lvbklkLCB1c2VySWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdDb25jZXB0ID0gY29uY2VwdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXhpc3RpbmdDb25jZXB0O1xuICAgIH0pO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIFNwbGl0U3RyaW5ncyh0eXBlU3RyaW5nKSB7XG4gICAgY29uc3QgU3BsaXR0ZWRTdHJpbmdzID0gdHlwZVN0cmluZy5zcGxpdChcIl9cIik7XG4gICAgcmV0dXJuIFNwbGl0dGVkU3RyaW5ncztcbn1cbiIsImltcG9ydCBDcmVhdGVCaW5hcnlUcmVlRnJvbURhdGEgZnJvbSAnLi9TZXJ2aWNlcy9DcmVhdGVCaW5hcnlUcmVlRnJvbURhdGEnO1xuaW1wb3J0IHsgQ3JlYXRlQ2hhcmFjdGVyQmluYXJ5VHJlZUZyb21EYXRhIH0gZnJvbSAnLi9TZXJ2aWNlcy9DcmVhdGVDaGFyYWN0ZXJCaW5hcnlUcmVlRnJvbURhdGEnO1xuaW1wb3J0IHsgSWRlbnRpZmllckZsYWdzIH0gZnJvbSAnLi9EYXRhU3RydWN0dXJlcy9JZGVudGlmaWVyRmxhZ3MnO1xuZXhwb3J0IHsgU3BsaXRTdHJpbmdzIH0gZnJvbSAnLi9TZXJ2aWNlcy9TcGxpdFN0cmluZ3MnO1xuZXhwb3J0IHsgR2V0Q29tcG9zaXRpb25MaXN0LCBHZXRDb21wb3NpdGlvbkxpc3RXaXRoSWQgfSBmcm9tICcuL1NlcnZpY2VzL0dldENvbXBvc2l0aW9uTGlzdCc7XG5leHBvcnQgeyBHZXRDb21wb3NpdGlvbkxpc3RMb2NhbCwgR2V0Q29tcG9zaXRpb25MaXN0TG9jYWxXaXRoSWQgfSBmcm9tICcuL1NlcnZpY2VzL0xvY2FsL0dldENvbXBvc2l0aW9uTGlzdExvY2FsJztcbmV4cG9ydCB7IEdldENvbXBvc2l0aW9uLCBHZXRDb21wb3NpdGlvbldpdGhJZCB9IGZyb20gJy4vU2VydmljZXMvR2V0Q29tcG9zaXRpb24nO1xuZXhwb3J0IHsgR2V0Q29tcG9zaXRpb25Mb2NhbCwgR2V0Q29tcG9zaXRpb25Mb2NhbFdpdGhJZCB9IGZyb20gJy4vU2VydmljZXMvTG9jYWwvR2V0Q29tcG9zaXRpb25Mb2NhbCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENyZWF0ZUNvbXBvc2l0aW9uIH0gZnJvbSAnLi9TZXJ2aWNlcy9DcmVhdGVUaGVDb21wb3NpdGlvbic7XG5leHBvcnQgeyBDcmVhdGVUaGVDb21wb3NpdGlvbkxvY2FsIH0gZnJvbSAnLi9TZXJ2aWNlcy9Mb2NhbC9DcmVhdGVUaGVDb21wb3NpdGlvbkxvY2FsJztcbmV4cG9ydCB7IENyZWF0ZUNvbm5lY3Rpb25CZXR3ZWVuVHdvQ29uY2VwdHMgfSBmcm9tICcuL1NlcnZpY2VzL0NyZWF0ZUNvbm5lY3Rpb25CZXR3ZWVuVHdvQ29uY2VwdHMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBHZXRUaGVDb25jZXB0IH0gZnJvbSAnLi9TZXJ2aWNlcy9HZXRUaGVDb25jZXB0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFrZVRoZUluc3RhbmNlQ29uY2VwdCB9IGZyb20gJy4vU2VydmljZXMvTWFrZVRoZUluc3RhbmNlQ29uY2VwdCc7XG5leHBvcnQgeyBNYWtlVGhlSW5zdGFuY2VDb25jZXB0TG9jYWwgfSBmcm9tICcuL1NlcnZpY2VzL0xvY2FsL01ha2VUaGVJbnN0YW5jZUNvbmNlcHRMb2NhbCc7XG5leHBvcnQgeyBzdG9yZVRvRGF0YWJhc2UsIGdldEZyb21EYXRhYmFzZSwgZ2V0RnJvbURhdGFiYXNlV2l0aFR5cGUsIGdldEZyb21EYXRhYmFzZVdpdGhUeXBlT2xkIH0gZnJvbSAnLi9EYXRhYmFzZS9pbmRleGVkZGInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDcmVhdGVUaGVDb25uZWN0aW9uIH0gZnJvbSAnLi9TZXJ2aWNlcy9DcmVhdGVUaGVDb25uZWN0aW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyIH0gZnJvbSAnLi9TZXJ2aWNlcy9HZXRDb25jZXB0QnlDaGFyYWN0ZXInO1xuZXhwb3J0IHsgR2V0TGluayB9IGZyb20gJy4vU2VydmljZXMvR2V0TGluayc7XG5leHBvcnQgeyBTeW5jRGF0YSB9IGZyb20gJy4vRGF0YVN0cnVjdHVyZXMvU3luY0RhdGEnO1xuZXhwb3J0IHsgQ29uY2VwdCB9IGZyb20gJy4vRGF0YVN0cnVjdHVyZXMvQ29uY2VwdCc7XG5leHBvcnQgeyBDb25jZXB0c0RhdGEgfSBmcm9tICcuL0RhdGFTdHJ1Y3R1cmVzL0NvbmNlcHREYXRhJztcbmltcG9ydCB7IEdldERhdGFGcm9tSW5kZXhEYkxvY2FsIH0gZnJvbSAnLi9TZXJ2aWNlcy9HZXREYXRhRnJvbUluZGV4RGInO1xuaW1wb3J0IENyZWF0ZUxvY2FsQmluYXJ5VHJlZUZyb21EYXRhIGZyb20gJy4vU2VydmljZXMvTG9jYWwvQ3JlYXRlTG9jYWxCaW5hcnlUcmVlRnJvbURhdGEnO1xuaW1wb3J0IHsgQ3JlYXRlVHlwZVRyZWVGcm9tRGF0YSB9IGZyb20gJy4vU2VydmljZXMvQ3JlYXRlVHlwZVRyZWVGcm9tRGF0YSc7XG5pbXBvcnQgeyBDcmVhdGVMb2NhbENoYXJhY3RlckJpbmFyeVRyZWVGcm9tRGF0YSB9IGZyb20gJy4vU2VydmljZXMvTG9jYWwvQ3JlYXRlTG9jYWxDaGFyYWN0ZXJCaW5hcnlUcmVlJztcbmltcG9ydCB7IENyZWF0ZUxvY2FsQmluYXJ5VHlwZVRyZWVGcm9tRGF0YSB9IGZyb20gJy4vU2VydmljZXMvTG9jYWwvQ3JlYXRlTG9jYWxCaW5hcnlUeXBlVHJlZUZyb21EYXRhJztcbmltcG9ydCBJbml0aWFsaXplU3lzdGVtIGZyb20gJy4vU2VydmljZXMvSW5pdGlhbGl6ZVN5c3RlbSc7XG5leHBvcnQgZGVmYXVsdCBJbml0aWFsaXplU3lzdGVtO1xuSW5pdGlhbGl6ZVN5c3RlbSgpLnRoZW4oKCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgQ3JlYXRlQmluYXJ5VHJlZUZyb21EYXRhKCkudGhlbigoKSA9PiB7XG4gICAgICAgIElkZW50aWZpZXJGbGFncy5pc0RhdGFMb2FkZWQgPSB0cnVlO1xuICAgIH0pO1xuICAgIENyZWF0ZUNoYXJhY3RlckJpbmFyeVRyZWVGcm9tRGF0YSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICBJZGVudGlmaWVyRmxhZ3MuaXNDaGFyYWN0ZXJMb2FkZWQgPSB0cnVlO1xuICAgIH0pO1xuICAgIENyZWF0ZVR5cGVUcmVlRnJvbURhdGEoKS50aGVuKCgpID0+IHtcbiAgICAgICAgSWRlbnRpZmllckZsYWdzLmlzVHlwZUxvYWRlZCA9IHRydWU7XG4gICAgICAgIGxldCBlbGFwc2VkID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydDtcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGUgdGltZSB0YWtlbiB0byBwcmVwYXJlIGRhdGEgaXMgXCIsIGVsYXBzZWQpO1xuICAgIH0pO1xuICAgIENyZWF0ZUxvY2FsQmluYXJ5VHJlZUZyb21EYXRhKCkudGhlbigoKSA9PiB7XG4gICAgICAgIElkZW50aWZpZXJGbGFncy5pc0xvY2FsRGF0YUxvYWRlZCA9IHRydWU7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGF0YVwiLCBJZGVudGlmaWVyRmxhZ3MuaXNMb2NhbERhdGFMb2FkZWQpO1xuICAgIH0pO1xuICAgIENyZWF0ZUxvY2FsQ2hhcmFjdGVyQmluYXJ5VHJlZUZyb21EYXRhKCkudGhlbigoKSA9PiB7XG4gICAgICAgIElkZW50aWZpZXJGbGFncy5pc0xvY2FsQ2hhcmFjdGVyTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGFyYWN0ZXJcIiwgSWRlbnRpZmllckZsYWdzLmlzTG9jYWxDaGFyYWN0ZXJMb2FkZWQpO1xuICAgIH0pO1xuICAgIENyZWF0ZUxvY2FsQmluYXJ5VHlwZVRyZWVGcm9tRGF0YSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICBJZGVudGlmaWVyRmxhZ3MuaXNMb2NhbFR5cGVMb2FkZWQgPSB0cnVlO1xuICAgICAgICBjb25zb2xlLmxvZyhcInR5cGVcIiwgSWRlbnRpZmllckZsYWdzLmlzTG9jYWxUeXBlTG9hZGVkKTtcbiAgICB9KTtcbiAgICBHZXREYXRhRnJvbUluZGV4RGJMb2NhbCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICBJZGVudGlmaWVyRmxhZ3MuaXNMb2NhbENvbm5lY3Rpb25Mb2FkZWQgPSB0cnVlO1xuICAgIH0pO1xufSk7XG4vLyAgR2V0RGF0YUZyb21JbmRleERiKCk7IFxuLy8gY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNteUZvcm0nKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG4vLyAvL2NvbnN0IGZvcm0yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VzZXJGb3JtJykgYXMgSFRNTEZvcm1FbGVtZW50O1xuLy8gY29uc3QgZm9ybTMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tcG9zaXRpb25Gb3JtJykgYXMgSFRNTEZvcm1FbGVtZW50O1xuLy8gY29uc3QganNvbkZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanNvbkZvcm0nKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG4vLyBjb25zdCBuYW1lRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lZm9ybScpIGFzIEhUTUxGb3JtRWxlbWVudDtcbi8vIGNvbnN0IGdldG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2V0bmFtZScpIGFzIEhUTUxGb3JtRWxlbWVudDtcbi8vIHZhciBqc29uID0ge1xuLy8gICAgIFwiYXNkZ3NhZGRmZlwiOiB7XG4vLyAgICAgICAgIFwiYWRnYXNkZnNkZlwiOiB7XG4vLyAgICAgICAgICAgICBcImFzZGdcIjogXCJ0YW1lXCIsXG4vLyAgICAgICAgICAgICBcImJyaWRlcmFyclwiOiBbXCJoZWxsb1wiLCBcInRyZVwiXVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gfTtcbi8vIHNldEludGVydmFsKGZ1bmN0aW9uKCl7XG4vLyAgICAgY29uc29sZS5sb2coXCJzeW5jaW5nXCIpO1xuLy8gICAgIFN5bmNEYXRhLlN5bmNEYXRhT25saW5lKClcbi8vIH0sIDUwMDApO1xuLy8gZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbi8vICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICBjb25zdCBjb25jZXB0SWRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbmNlcHRpZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4vLyAgICBjb25zdCBjb25jZXB0SWQgPSBjb25jZXB0SWRFbGVtZW50LnZhbHVlO1xuLy8gICAgR2V0Q29tcG9zaXRpb24oTnVtYmVyKGNvbmNlcHRJZCkpLnRoZW4ob3V0cHV0PT57XG4vLyAgICAgY29uc3QganNvbkVsZW1udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqc29ub3V0cHV0JykgYXMgSFRNTElucHV0RWxlbWVudDtcbi8vICAgICB2YXIganNvbiA9IEpTT04uc3RyaW5naWZ5KG91dHB1dCk7XG4vLyAgICAgY29uc29sZS5sb2coanNvbik7XG4vLyAgICAganNvbkVsZW1udC5pbm5lckhUTUwgPSBqc29uO1xuLy8gICAgfSk7XG4vLyB9KTtcbi8vIGdldG5hbWUuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4vLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbi8vICAgICBjb25zdCBjb25jZXB0SWRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWVjb25jZXB0aWQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuLy8gICAgIGNvbnN0IGNvbmNlcHRJZCA9IGNvbmNlcHRJZEVsZW1lbnQudmFsdWU7XG4vLyAgICAgR2V0Q29tcG9zaXRpb24oTnVtYmVyKGNvbmNlcHRJZCkpLnRoZW4ob3V0cHV0PT57XG4vLyAgICAgICAgIGNvbnN0IGZpcnN0TmFtZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlyc3RuYW1lJykgYXMgSFRNTElucHV0RWxlbWVudDtcbi8vICAgICAgICAgY29uc3QgbGFzdE5hbWVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xhc3RuYW1lJykgYXMgSFRNTElucHV0RWxlbWVudDtcbi8vICAgICAgICAgY29uc29sZS5sb2cob3V0cHV0KTtcbi8vICAgICAgICAgZmlyc3ROYW1lRWxlbWVudC52YWx1ZSA9IG91dHB1dC5uYW1lZGF0YS5maXJzdG5hbWU7XG4vLyAgICAgICAgIGxhc3ROYW1lRWxlbWVudC52YWx1ZSA9IG91dHB1dC5uYW1lZGF0YS5sYXN0bmFtZTtcbi8vICAgICB9KTtcbi8vICB9KTtcbi8vIG5hbWVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgY29uc3QgZmlyc3ROYW1lRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaXJzdG5hbWUnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuLy8gICAgIGNvbnN0IGZpcnN0bmFtZSA9IGZpcnN0TmFtZUVsZW1lbnQudmFsdWU7XG4vLyAgICAgY29uc3QgbGFzdE5hbWVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xhc3RuYW1lJykgYXMgSFRNTElucHV0RWxlbWVudDtcbi8vICAgICBjb25zdCBsYXN0bmFtZSA9IGxhc3ROYW1lRWxlbWVudC52YWx1ZTtcbi8vICAgICB2YXIganNvbiA9IHtcbi8vICAgICAgICAgXCJuYW1lZGF0YVwiOntcbi8vICAgICAgICAgICAgIFwiZmlyc3RuYW1lXCI6IGZpcnN0bmFtZSxcbi8vICAgICAgICAgICAgIFwibGFzdG5hbWVcIjogbGFzdG5hbWVcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vICAgICBjb25zb2xlLmxvZyhqc29uKTtcbi8vICAgICBDcmVhdGVUaGVDb21wb3NpdGlvbihqc29uKS50aGVuKCh2YWx1ZSk9Pntcbi8vICAgICAgICAgY29uc3Qgb3V0cHV0aWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3V0cHV0aWQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuLy8gICAgICAgICB2YXIgY29uY2VwdCA9IHZhbHVlIGFzIENvbmNlcHQ7XG4vLyAgICAgICAgIG91dHB1dGlkLmlubmVySFRNTCA9IGNvbmNlcHQuaWQudG9TdHJpbmcoKTtcbi8vICAgICAgICAgY29uc29sZS5sb2coJ3RoaXMgaXMgdGhlIHRlc3QgZm9yIGZpbmFsJyk7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbi8vICAgICB9KTtcbi8vICAgICB9KTtcbi8vIGpzb25Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT57XG4vLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbi8vICAgICBjb25zdCBjb21wb3NpdGlvbk5hbWVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNqc29uZGF0YVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuLy8gICAgIGNvbnN0IGNvbXBvc2l0aW9uTmFtZSA9IGNvbXBvc2l0aW9uTmFtZUVsZW1lbnQudmFsdWU7XG4vLyAgICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSBjb21wb3NpdGlvbiBuYW1lXCIpO1xuLy8gICAgIGNvbnNvbGUubG9nKGNvbXBvc2l0aW9uTmFtZSk7XG4vLyAgICAgdmFyIGpvbiA9IEpTT04ucGFyc2UoY29tcG9zaXRpb25OYW1lKTtcbi8vICAgICBDcmVhdGVUaGVDb21wb3NpdGlvbihqb24pLnRoZW4oKHZhbHVlKT0+e1xuLy8gICAgICAgICBjb25zdCBvdXRwdXRpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvdXRwdXRpZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4vLyAgICAgICAgIHZhciBjb25jZXB0ID0gdmFsdWUgYXMgQ29uY2VwdDtcbi8vICAgICAgICAgb3V0cHV0aWQuaW5uZXJIVE1MID0gY29uY2VwdC5pZC50b1N0cmluZygpO1xuLy8gICAgICAgICBjb25zb2xlLmxvZygndGhpcyBpcyB0aGUgdGVzdCBmb3IgZmluYWwnKTtcbi8vICAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xuLy8gICAgIH0pO1xuLy8gfSk7XG4vLyBmb3JtMy5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbi8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgIGNvbnN0IGNvbXBvc2l0aW9uTmFtZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbXBvc2l0aW9uX25hbWVcIikgYXMgSFRNTElucHV0RWxlbWVudDtcbi8vICAgICBjb25zdCBjb21wb3NpdGlvbk5hbWUgPSBjb21wb3NpdGlvbk5hbWVFbGVtZW50LnZhbHVlO1xuLy8gICAgIEdldENvbXBvc2l0aW9uTGlzdChjb21wb3NpdGlvbk5hbWUpLnRoZW4ob3V0cHV0PT57XG4vLyAgICAgICAgIGNvbnN0IGpzb25FbGVtbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanNvbm91dHB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4vLyAgICAgICAgIHZhciBqc29uID0gSlNPTi5zdHJpbmdpZnkob3V0cHV0KTtcbi8vICAgICAgICAgY29uc29sZS5sb2coanNvbik7XG4vLyAgICAgICAgIGpzb25FbGVtbnQuaW5uZXJIVE1MID0gSlNPTi5zdHJpbmdpZnkoanNvbik7XG4vLyAgICAgfSk7XG4vLyB9KTtcbi8vIC8vIGZvcm0yLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuLy8gLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4vLyAvLyAgICAgY29uc3QgdXNlcklkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdXNlcmlkXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4vLyAvLyAgICAgY29uc3QgdXNlcklkID0gdXNlcklkRWxlbWVudC52YWx1ZTtcbi8vIC8vICAgICBHZXRBbGxVc2VyQ29uY2VwdHMoTnVtYmVyKHVzZXJJZCkpO1xuLy8gLy8gICAgIEdldEFsbFVzZXJDb25uZWN0aW9ucyhOdW1iZXIodXNlcklkKSkudGhlbigoKT0+e1xuLy8gLy8gICAgICAgICBjb25zb2xlLmxvZyhcImdvdCBhbGwgdGhlIGRhdGFcIik7XG4vLyAvLyAgICAgfSk7XG4vLyAvLyAgfSk7XG4vLyB3aW5kb3cub25tb3VzZWRvd24gPSAoZXY6IE1vdXNlRXZlbnQpOiBhbnkgPT4ge1xuLy8gICAgIHZhciBpc01vdXNlRG93biA9IHRydWU7XG4vLyAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNteUNhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuLy8gICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgO1xuLy8gICAgIHZhciBfZGlmZmVyZW5jZV9mcm9tX3dpbmRvdyA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbi8vICAgICB2YXIgd2lkdGhfZGlmZmVyZW5jZSA9IDA7XG4vLyAgICAgdmFyIGhlaWdodF9kaWZmZXJlbmNlID0gMDtcbi8vICAgICAvL1VwZGF0ZSBtb3VzZSBwb3NpdGlvbiBhdCB0aW1lIG9mIGRvd25cbi8vICAgICB2YXIgbW91c2VfeF9jb29yZGluYXRlID0gZXYueCAtIF9kaWZmZXJlbmNlX2Zyb21fd2luZG93LmxlZnQgKyB3aW5kb3cuc2Nyb2xsWDtcbi8vICAgICB2YXIgbW91c2VfeV9jb29yZGluYXRlID0gZXYueSAtIF9kaWZmZXJlbmNlX2Zyb21fd2luZG93LnRvcCArIHdpbmRvdy5zY3JvbGxZO1xuLy8gICAgIHZhciBzZWxlY3RlZF9jb25jZXB0X29iamVjdCA9IHNlbGVjdENvbmNlcHRPYmplY3QobW91c2VfeF9jb29yZGluYXRlLCBtb3VzZV95X2Nvb3JkaW5hdGUpO1xuLy8gICAgIHdpbmRvdy5vbm1vdXNlbW92ZSA9IChldjogTW91c2VFdmVudCk6IGFueSA9PiB7XG4vLyAgICAgICAgIHZhciBwcmV2aW91c19tb3VzZV94ID0gbW91c2VfeF9jb29yZGluYXRlO1xuLy8gICAgICAgICB2YXIgcHJldmlvdXNfbW91c2VfeSA9IG1vdXNlX3lfY29vcmRpbmF0ZTtcbi8vICAgICAgICAgdmFyIG5ld19tb3VzZV94X2Nvb3JkaW5hdGUgPSBldi54IC0gX2RpZmZlcmVuY2VfZnJvbV93aW5kb3cubGVmdCArIHdpbmRvdy5zY3JvbGxYO1xuLy8gICAgICAgICB2YXIgbmV3X21vdXNlX3lfY29vcmRpbmF0ZSA9IGV2LnkgLSBfZGlmZmVyZW5jZV9mcm9tX3dpbmRvdy50b3AgKyB3aW5kb3cuc2Nyb2xsWTtcbi8vICAgICAgICAgLy9ob3cgbXVjaCBkaWQgdGhlIG1vdXNlIG1vdmVcbi8vICAgICAgICAgdmFyIG1vdXNlX3hfZGlmZmVyZW5jZSA9IG5ld19tb3VzZV94X2Nvb3JkaW5hdGUgLSBwcmV2aW91c19tb3VzZV94O1xuLy8gICAgICAgICB2YXIgbW91c2VfeV9kaWZmZXJlbmNlID0gbmV3X21vdXNlX3lfY29vcmRpbmF0ZSAtIHByZXZpb3VzX21vdXNlX3k7XG4vLyAgICAgICAgIGlmKHNlbGVjdGVkX2NvbmNlcHRfb2JqZWN0KXtcbi8vICAgICAgICAgICAgIGlmKGlzTW91c2VEb3duKXtcbi8vICAgICAgICAgICAgICAgICBzZWxlY3RlZF9jb25jZXB0X29iamVjdC54ID0gbmV3X21vdXNlX3hfY29vcmRpbmF0ZTtcbi8vICAgICAgICAgICAgICAgICBzZWxlY3RlZF9jb25jZXB0X29iamVjdC55ID0gbmV3X21vdXNlX3lfY29vcmRpbmF0ZTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vICAgICB3aW5kb3cub25tb3VzZXVwID0gKGV2OiBNb3VzZUV2ZW50KTogYW55ID0+IHtcbi8vICAgICAgICAgaXNNb3VzZURvd24gPSBmYWxzZTtcbi8vICAgICAgICAgc2VsZWN0ZWRfY29uY2VwdF9vYmplY3QgID0gbnVsbDtcbi8vICAgICB9XG4vL31cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXBwLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9