(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("mftsccs", [], factory);
	else if(typeof exports === 'object')
		exports["mftsccs"] = factory();
	else
		root["mftsccs"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
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
/* harmony import */ var _DataStructures_CharacterRepository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DataStructures/CharacterRepository */ "./src/DataStructures/CharacterRepository.ts");
/* harmony import */ var _DataStructures_Returner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../DataStructures/Returner */ "./src/DataStructures/Returner.ts");
/* harmony import */ var _DataStructures_TheCharacter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../DataStructures/TheCharacter */ "./src/DataStructures/TheCharacter.ts");
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
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
            characterData = _DataStructures_CharacterRepository__WEBPACK_IMPORTED_MODULE_0__.CharacterRepository.GetCharacter(characterData.data);
            if (characterData.id == 0) {
                const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_3__.BaseUrl.CreateTheCharacterDataUrl(), {
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
                var savingCharacter = new _DataStructures_TheCharacter__WEBPACK_IMPORTED_MODULE_2__.TheCharacter(result.userId, characterData.data, 0, 0, 4, 4, 999, 999, "", false);
                savingCharacter.id = result.id;
                _DataStructures_CharacterRepository__WEBPACK_IMPORTED_MODULE_0__.CharacterRepository.AddCharacter(savingCharacter);
                return result;
            }
            else {
                var returningData = new _DataStructures_Returner__WEBPACK_IMPORTED_MODULE_1__.Returner(characterData.id, characterData.userId, 0, false);
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
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
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
            const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.CreateTheConceptUrl(), {
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
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
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
            const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.CreateTheConnectionUrl(), {
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
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
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
            const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.CreateTheTextDataUrl(), {
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
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
/* harmony import */ var _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataStructures/ConceptData */ "./src/DataStructures/ConceptData.ts");
/* harmony import */ var _Services_InitializeSystem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/InitializeSystem */ "./src/Services/InitializeSystem.ts");
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
            const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.GetAllAiData(), {
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
                _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_1__.ConceptsData.AddConcept(result[i]);
            }
            (0,_Services_InitializeSystem__WEBPACK_IMPORTED_MODULE_2__.PurgatoryDatabaseUpdated)();
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
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
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
            const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.GetAllConceptsByTypeUrl(), {
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
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
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
        connectionList = yield _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_0__.ConnectionData.GetConnectionsOfCompositionLocal(composition_id);
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
            const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.GetAllConnectionsOfCompositionUrl(), {
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
                // ConnectionData.AddToDictionary(result[i]);
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

/***/ "./src/Api/GetAllConnectionsOfCompositionBulk.ts":
/*!*******************************************************!*\
  !*** ./src/Api/GetAllConnectionsOfCompositionBulk.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetAllConnectionsOfCompositionBulk: () => (/* binding */ GetAllConnectionsOfCompositionBulk),
/* harmony export */   GetAllConnectionsOfCompositionOnline: () => (/* binding */ GetAllConnectionsOfCompositionOnline)
/* harmony export */ });
/* harmony import */ var _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DataStructures/ConnectionData */ "./src/DataStructures/ConnectionData.ts");
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
/* harmony import */ var _GetConceptBulk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GetConceptBulk */ "./src/Api/GetConceptBulk.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function GetAllConnectionsOfCompositionBulk(composition_ids = []) {
    return __awaiter(this, void 0, void 0, function* () {
        var connectionList = [];
        var conceptList = [];
        var connectionListString = yield GetAllConnectionsOfCompositionOnline(composition_ids);
        connectionList = connectionListString;
        if (connectionList.length > 0) {
            for (let i = 0; i < connectionList.length; i++) {
                if (!conceptList.includes(connectionList[i].ofTheConceptId)) {
                    conceptList.push(connectionList[i].ofTheConceptId);
                }
                if (!conceptList.includes(connectionList[i].toTheConceptId)) {
                    conceptList.push(connectionList[i].toTheConceptId);
                }
            }
            yield (0,_GetConceptBulk__WEBPACK_IMPORTED_MODULE_2__.GetConceptBulk)(conceptList);
        }
        return connectionList;
    });
}
function GetAllConnectionsOfCompositionOnline(composition_ids = []) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var connectionList = [];
            const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.GetAllConnectionsOfCompositionBulkUrl(), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(composition_ids)
            });
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
            const result = yield response.json();
            for (var i = 0; i < result.length; i++) {
                _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_0__.ConnectionData.AddConnection(result[i]);
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

/***/ "./src/Api/GetAllLinkerConnectionsFromTheConcept.ts":
/*!**********************************************************!*\
  !*** ./src/Api/GetAllLinkerConnectionsFromTheConcept.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetAllLinkerConnectionsFromTheConcept: () => (/* binding */ GetAllLinkerConnectionsFromTheConcept)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ "./src/app.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function GetAllLinkerConnectionsFromTheConcept(conceptId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var connections = [];
            const start = new Date().getTime();
            const response = yield fetch(_app__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.GetAllLinkerConnectionOfConceptUrl() + `?conceptId=${conceptId}`, {
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
                var connection = result[i];
                connections.push(connection);
            }
            return connections;
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
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
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
                const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.GetConceptUrl(), {
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

/***/ "./src/Api/GetConceptBulk.ts":
/*!***********************************!*\
  !*** ./src/Api/GetConceptBulk.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetConceptBulk: () => (/* binding */ GetConceptBulk)
/* harmony export */ });
/* harmony import */ var _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../DataStructures/ConceptData */ "./src/DataStructures/ConceptData.ts");
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function GetConceptBulk(conceptIds) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var bulkConceptFetch = [];
            for (let i = 0; i < conceptIds.length; i++) {
                let conceptUse = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_0__.ConceptsData.GetConcept(conceptIds[i]);
                if (conceptUse.id == 0) {
                    bulkConceptFetch.push(conceptIds[i]);
                }
            }
            if (bulkConceptFetch.length == 0) {
                return bulkConceptFetch;
            }
            else {
                console.log("getting data from online");
                const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.GetConceptBulkUrl(), {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(bulkConceptFetch)
                });
                if (!response.ok) {
                    throw new Error(`Error! status: ${response.status}`);
                }
                const result = yield response.json();
                if (result.length > 0) {
                    for (let i = 0; i < result.length; i++) {
                        let concept = result[i];
                        _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_0__.ConceptsData.AddConcept(concept);
                    }
                }
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
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
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
                var json = {
                    'character_value': `${characterValue}`,
                    'type_id': typeId
                };
                var toSendJson = JSON.stringify(json);
                const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.GetConceptByCharacterAndTypeUrl(), {
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
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
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
            const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.GetConceptByCharacterValueUrl(), {
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

/***/ "./src/Api/GetConnection.ts":
/*!**********************************!*\
  !*** ./src/Api/GetConnection.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetConnection: () => (/* binding */ GetConnection)
/* harmony export */ });
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
/* harmony import */ var _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataStructures/ConnectionData */ "./src/DataStructures/ConnectionData.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function GetConnection(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var connectionUse = yield _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_1__.ConnectionData.GetConnection(id);
            if (connectionUse.id != 0) {
                return connectionUse;
            }
            else {
                console.log("getting connection from online");
                const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.GetConnectionUrl(), {
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
                _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_1__.ConnectionData.AddConnection(result);
                console.log("this is the connection added", result);
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
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
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
            const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.GetAllConnectionsOfConceptUrl(), {
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
/* harmony import */ var _DataStructures_ReservedIds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DataStructures/ReservedIds */ "./src/DataStructures/ReservedIds.ts");
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
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
            const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.GetReservedIdUrl(), {
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
                _DataStructures_ReservedIds__WEBPACK_IMPORTED_MODULE_0__.ReservedIds.AddId(result[i]);
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

/***/ "./src/DataStructures/BaseUrl.ts":
/*!***************************************!*\
  !*** ./src/DataStructures/BaseUrl.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseUrl: () => (/* binding */ BaseUrl)
/* harmony export */ });
class BaseUrl {
    // static GetConceptUrl:string = this.BASE_URL + '/api/getConcept';
    static GetConceptUrl() {
        return this.BASE_URL + '/api/getConcept';
    }
    static GetConnectionUrl() {
        return this.BASE_URL + '/api/get-connection-by-id';
    }
    static GetConceptBulkUrl() {
        return this.BASE_URL + '/api/get_concept_bulk';
    }
    static GetAllConceptsOfUserUrl() {
        return this.BASE_URL + '/api/get_all_concepts_of_user';
    }
    static GetAllConnectionsOfUserUrl() {
        return this.BASE_URL + '/api/get_all_connections_of_user';
    }
    static GetAllConnectionsOfCompositionUrl() {
        return this.BASE_URL + '/api/get_all_connections_of_composition';
    }
    static GetAllConnectionsOfCompositionBulkUrl() {
        return this.BASE_URL + '/api/get_all_connections_of_composition_bulk';
    }
    static GetConceptByCharacterValueUrl() {
        return this.BASE_URL + '/api/get_concept_by_character_value';
    }
    static GetConceptByCharacterAndTypeUrl() {
        return this.BASE_URL + '/api/get_concept_by_character_and_type';
    }
    static GetCharacterByCharacterUrl() {
        return this.BASE_URL + '/api/get_character_by_character';
    }
    static GetAllConceptsByTypeUrl() {
        return this.BASE_URL + '/api/get_all_concepts_by_type';
    }
    static GetAllConnectionsOfConceptUrl() {
        return this.BASE_URL + '/api/get-link-connections';
    }
    static GetAllAiData() {
        return this.AI_URL + '/api/get_ranked_type_id?inpage=5' || 0 || 0;
    }
    static GetAllLinkerConnectionOfConceptUrl() {
        return this.BASE_URL + '/api/get-all-linkers-from-concept';
    }
    //////////////////////////////////////////////////////////////////////////////
    //////////////// API For Reserved Ids ///////////////////////////////////////
    static GetReservedIdUrl() {
        return this.BASE_URL + '/api/get_reserved_ids';
    }
    /////////////////////////////////////////////////////////////////////////////
    ////////////////API For Creating Data //////////////////////////////////////
    static CreateTheTextDataUrl() {
        return this.BASE_URL + '/api/create_text_data';
    }
    static CreateTheCharacterDataUrl() {
        return this.BASE_URL + '/api/create_character_data';
    }
    static CreateTheConceptUrl() {
        return this.BASE_URL + '/api/create_the_concept';
    }
    static CreateTheConnectionUrl() {
        return this.BASE_URL + '/api/create_the_connection';
    }
}
BaseUrl.BASE_URL = "";
BaseUrl.AI_URL = "https://ai.freeschema.com";


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
    static removeNodeByCharacter(character, id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.characterRoot) {
                this.characterRoot.removeNodeWithVariants(this.characterRoot, character, id);
            }
        });
    }
    static countNumberOfNodes() {
        if (this.characterRoot) {
            return this.characterRoot.countNodeBelow(this.characterRoot);
        }
        return 0;
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
    static removeConceptCharacter(id) {
        if (this.characterRoot) {
            this.characterRoot = this.characterRoot.removeNode(this.characterRoot, id);
        }
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
            return null;
        });
    }
    static removeNodeFromTree(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.root) {
                this.root = this.root.removeNode(this.root, id);
            }
        });
    }
    static countNumberOfNodes() {
        if (this.root) {
            return this.root.countNodeBelow(this.root);
        }
        return 0;
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
    static removeTypeConcept(typeId, id) {
        if (this.typeRoot) {
            this.typeRoot = this.typeRoot.removeNodeWithVariants(this.typeRoot, typeId, id);
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
                        var isPresent = false;
                        for (let j = 0; j < concepts.length; j++) {
                            if (concepts[j].id == Node.variants[i].value.id) {
                                isPresent = true;
                            }
                        }
                        if (!isPresent) {
                            concepts.push(Node.variants[i].value);
                        }
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
    static countNumberOfNodes() {
        if (this.typeRoot) {
            return this.typeRoot.countNodeBelow(this.typeRoot);
        }
        return 0;
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
    static GetBinaryCharacterTree() {
        return _BinaryCharacterTree__WEBPACK_IMPORTED_MODULE_3__.BinaryCharacterTree.characterRoot;
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
/* harmony import */ var _Concept__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Concept */ "./src/DataStructures/Concept.ts");

class Connection {
    constructor(id = 0, ofTheConceptId, toTheConceptId, ofTheConceptUserId, toTheConceptUserId, userId, typeId, typeUserId, orderId, orderUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId) {
        this.isTemp = false;
        this.type = new _Concept__WEBPACK_IMPORTED_MODULE_0__.Concept(0, 0, 0, 0, 0, 0, 0, 0, "0", 0, 0, 0, 0, 0, 0, false);
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

/***/ "./src/DataStructures/ConnectionBinaryTree/ConnectionBinaryTree.ts":
/*!*************************************************************************!*\
  !*** ./src/DataStructures/ConnectionBinaryTree/ConnectionBinaryTree.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConnectionBinaryTree: () => (/* binding */ ConnectionBinaryTree)
/* harmony export */ });
/* harmony import */ var _IdentifierFlags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IdentifierFlags */ "./src/DataStructures/IdentifierFlags.ts");
/* harmony import */ var _ConnectionNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConnectionNode */ "./src/DataStructures/ConnectionBinaryTree/ConnectionNode.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class ConnectionBinaryTree {
    static addNodeToTree(node) {
        if (this.connectionroot == null) {
            this.connectionroot = node;
            console.log("null tree", this.connectionroot);
            return this.connectionroot;
        }
        else {
            console.log("not null tree", this.connectionroot);
            this.connectionroot = this.connectionroot.addNode(node, this.connectionroot, this.connectionroot.height);
        }
    }
    static addConnectionToTree(connection) {
        var node = new _ConnectionNode__WEBPACK_IMPORTED_MODULE_1__.ConnectionNode(connection.id, connection, null, null);
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
        if (_IdentifierFlags__WEBPACK_IMPORTED_MODULE_0__.IdentifierFlags.isConnectionLoaded) {
            return resolve("done");
        }
        else {
            setTimeout(ConnectionBinaryTree.checkFlag, 1000, resolve);
        }
    }
    ;
    static removeNodeFromTree(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.connectionroot) {
                this.connectionroot = this.connectionroot.removeNode(this.connectionroot, id);
            }
        });
    }
    static getNodeFromTree(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var data = yield this.waitForDataToLoad();
            }
            catch (exception) {
                return null;
            }
            if (this.connectionroot) {
                var Node = this.connectionroot.getFromNode(id, this.connectionroot);
                return Node;
            }
            return this.connectionroot;
        });
    }
}
ConnectionBinaryTree.connectionroot = null;


/***/ }),

/***/ "./src/DataStructures/ConnectionBinaryTree/ConnectionNode.ts":
/*!*******************************************************************!*\
  !*** ./src/DataStructures/ConnectionBinaryTree/ConnectionNode.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConnectionNode: () => (/* binding */ ConnectionNode)
/* harmony export */ });
class ConnectionNode {
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
            return passedNode;
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
    removeNode(passedNode, id) {
        if (passedNode == null) {
            return passedNode;
        }
        if (passedNode.key > id) {
            passedNode.leftNode = this.removeNode(passedNode.leftNode, id);
            return passedNode;
        }
        else if (passedNode.key < id) {
            passedNode.rightNode = this.removeNode(passedNode.rightNode, id);
            return passedNode;
        }
        // if(passedNode.variants.length > 0){
        //     if(passedNode.value.id == id ){
        //     }
        //     var newNode = passedNode.variants[0];
        //     if(newNode){
        //         passedNode.value = newNode.value;
        //         passedNode.key = newNode.key;
        //         passedNode.currentNode = newNode.currentNode;
        //         return passedNode;
        //     }
        // }
        if (passedNode.leftNode == null) {
            let temp = passedNode.rightNode;
            passedNode = null;
            return temp;
        }
        else if (passedNode.rightNode == null) {
            let temp = passedNode.leftNode;
            passedNode = null;
            return temp;
        }
        else {
            // passing the rightNode to the inOrderSuccessor gives the immediate successor of the node
            var immediateSuccessor = this.inOrderSuccessor(passedNode.rightNode);
            passedNode.value = immediateSuccessor.value;
            passedNode.key = immediateSuccessor.key;
            passedNode.variants = immediateSuccessor.variants;
            passedNode.currentNode = immediateSuccessor.currentNode;
            passedNode.rightNode = this.removeNode(passedNode.rightNode, immediateSuccessor.key);
            return passedNode;
        }
    }
    removeNodeWithVariants(passedNode, typeIdentifier, conceptId) {
        if (passedNode == null) {
            return passedNode;
        }
        if (passedNode.key > typeIdentifier) {
            passedNode.leftNode = this.removeNodeWithVariants(passedNode.leftNode, typeIdentifier, conceptId);
            return passedNode;
        }
        else if (passedNode.key < typeIdentifier) {
            passedNode.rightNode = this.removeNodeWithVariants(passedNode.rightNode, typeIdentifier, conceptId);
            return passedNode;
        }
        if (passedNode.variants.length > 0) {
            //condition if the main node is equal to the value
            if (passedNode.value.id == conceptId) {
                var newNode = passedNode.variants[0];
                if (newNode) {
                    passedNode.value = newNode.value;
                    passedNode.key = newNode.key;
                    passedNode.currentNode = newNode.currentNode;
                    passedNode.variants.splice(0, 1);
                    return passedNode;
                }
            }
            else {
                // in the condition that the main node is not equal to the checking value 
                for (let i = 0; i < passedNode.variants.length; i++) {
                    if (conceptId == passedNode.variants[i].value.id) {
                        passedNode.variants.splice(i, 1);
                        return passedNode;
                    }
                }
            }
        }
        if (passedNode.leftNode == null) {
            let temp = passedNode.rightNode;
            passedNode = null;
            return temp;
        }
        else if (passedNode.rightNode == null) {
            let temp = passedNode.leftNode;
            passedNode = null;
            return temp;
        }
        else {
            // passing the rightNode to the inOrderSuccessor gives the immediate successor of the node
            var immediateSuccessor = this.inOrderSuccessor(passedNode.rightNode);
            passedNode.value = immediateSuccessor.value;
            passedNode.key = immediateSuccessor.key;
            passedNode.variants = immediateSuccessor.variants;
            passedNode.currentNode = immediateSuccessor.currentNode;
            passedNode.rightNode = this.removeNodeWithVariants(passedNode.rightNode, immediateSuccessor.key, conceptId);
            return passedNode;
        }
    }
    inOrderSuccessor(root) {
        while (root.leftNode != null) {
            root = root.leftNode;
        }
        return root;
    }
}


/***/ }),

/***/ "./src/DataStructures/ConnectionBinaryTree/ConnectionTypeTree.ts":
/*!***********************************************************************!*\
  !*** ./src/DataStructures/ConnectionBinaryTree/ConnectionTypeTree.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConnectionTypeTree: () => (/* binding */ ConnectionTypeTree)
/* harmony export */ });
/* harmony import */ var _IdentifierFlags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IdentifierFlags */ "./src/DataStructures/IdentifierFlags.ts");
/* harmony import */ var _ConnectionNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConnectionNode */ "./src/DataStructures/ConnectionBinaryTree/ConnectionNode.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class ConnectionTypeTree {
    static addNodeToTree(node) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.connectionTypeRoot == null) {
                this.connectionTypeRoot = node;
                return this.connectionTypeRoot;
            }
            else {
                this.connectionTypeRoot = this.connectionTypeRoot.addTypeNode(node, this.connectionTypeRoot, this.connectionTypeRoot.height);
            }
            return this.connectionTypeRoot;
        });
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
        if (_IdentifierFlags__WEBPACK_IMPORTED_MODULE_0__.IdentifierFlags.isConnectionTypeLoaded) {
            return resolve("done");
        }
        else {
            setTimeout(ConnectionTypeTree.checkFlag, 1000, resolve);
        }
    }
    ;
    static addConnectionToTree(connection) {
        if (connection.typeId != 0) {
            var node = new _ConnectionNode__WEBPACK_IMPORTED_MODULE_1__.ConnectionNode(connection.typeId, connection, null, null);
            this.addNodeToTree(node);
        }
    }
    static removeTypeConcept(typeId, id) {
        if (this.connectionTypeRoot) {
            this.connectionTypeRoot = this.connectionTypeRoot.removeNodeWithVariants(this.connectionTypeRoot, typeId, id);
        }
    }
    static getNodeFromTree(id) {
        if (this.connectionTypeRoot) {
            var Node = this.connectionTypeRoot.getFromNode(id, this.connectionTypeRoot);
            return Node;
        }
        return this.connectionTypeRoot;
    }
    static getTypeVariantsFromTree(typeId) {
        return __awaiter(this, void 0, void 0, function* () {
            var connection = [];
            try {
                var data = yield this.waitForDataToLoad();
            }
            catch (exception) {
                return connection;
            }
            var Node = this.getNodeFromTree(typeId);
            if (Node) {
                connection.push(Node === null || Node === void 0 ? void 0 : Node.value);
                for (let i = 0; i < Node.variants.length; i++) {
                    connection.push(Node.variants[i].value);
                }
                return connection;
            }
        });
    }
    static getTypeVariantsFromTreeWithUserId(typeId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            var concepts = [];
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
ConnectionTypeTree.connectionTypeRoot = null;


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
/* harmony import */ var _Connection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Connection */ "./src/DataStructures/Connection.ts");
/* harmony import */ var _ConnectionBinaryTree_ConnectionBinaryTree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConnectionBinaryTree/ConnectionBinaryTree */ "./src/DataStructures/ConnectionBinaryTree/ConnectionBinaryTree.ts");
/* harmony import */ var _ConnectionBinaryTree_ConnectionTypeTree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ConnectionBinaryTree/ConnectionTypeTree */ "./src/DataStructures/ConnectionBinaryTree/ConnectionTypeTree.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




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
        //    var contains = this.CheckContains(connection);
        //     if(contains){
        //         this.RemoveConnection(connection);
        //     }
        //     if(connection.id != 0 || connection.isTemp){
        //         storeToDatabase("connection",connection);
        //     }
        //     this.connectionArray.push(connection);
        (0,_Database_indexeddb__WEBPACK_IMPORTED_MODULE_0__.storeToDatabase)("connection", connection);
        _ConnectionBinaryTree_ConnectionBinaryTree__WEBPACK_IMPORTED_MODULE_2__.ConnectionBinaryTree.addConnectionToTree(connection);
        _ConnectionBinaryTree_ConnectionTypeTree__WEBPACK_IMPORTED_MODULE_3__.ConnectionTypeTree.addConnectionToTree(connection);
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
    static GetConnectionTree() {
        return _ConnectionBinaryTree_ConnectionBinaryTree__WEBPACK_IMPORTED_MODULE_2__.ConnectionBinaryTree.connectionroot;
    }
    static GetConnectionTypeTree() {
        return _ConnectionBinaryTree_ConnectionTypeTree__WEBPACK_IMPORTED_MODULE_3__.ConnectionTypeTree.connectionTypeRoot;
    }
    static GetConnection(id) {
        return __awaiter(this, void 0, void 0, function* () {
            //    var  myConcept: Connection|null;
            //    myConcept = null;
            //     for(var i=0; i<this.connectionArray.length; i++){
            //         if(this.connectionArray[i].id == id){
            //             myConcept = this.connectionArray[i];
            //         }
            //     }
            //     return myConcept;
            var myConnection = new _Connection__WEBPACK_IMPORTED_MODULE_1__.Connection(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            var node = yield _ConnectionBinaryTree_ConnectionBinaryTree__WEBPACK_IMPORTED_MODULE_2__.ConnectionBinaryTree.getNodeFromTree(id);
            if (node === null || node === void 0 ? void 0 : node.value) {
                var returnedConcept = node.value;
                if (returnedConcept) {
                    myConnection = returnedConcept;
                }
            }
            // if(myConcept.id == 0 || myConcept == null){
            //     for(var i=0; i<this.conceptsArray.length; i++){
            //         if(this.conceptsArray[i].id == id){
            //             myConcept = this.conceptsArray[i];
            //         }
            //     }
            // }
            return myConnection;
        });
    }
    static GetConnectionsOfCompositionLocal(id) {
        return __awaiter(this, void 0, void 0, function* () {
            var connections = [];
            var node = yield _ConnectionBinaryTree_ConnectionTypeTree__WEBPACK_IMPORTED_MODULE_3__.ConnectionTypeTree.getNodeFromTree(id);
            if (node === null || node === void 0 ? void 0 : node.value) {
                var returnedConnection = node.value;
                if (returnedConnection) {
                    let myConnection = returnedConnection;
                    connections.push(myConnection);
                    for (let i = 0; i < node.variants.length; i++) {
                        connections.push(node.variants[i].value);
                    }
                }
            }
            // if(myConcept.id == 0 || myConcept == null){
            //     for(var i=0; i<this.conceptsArray.length; i++){
            //         if(this.conceptsArray[i].id == id){
            //             myConcept = this.conceptsArray[i];
            //         }
            //     }
            // }
            return connections;
        });
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
IdentifierFlags.isConnectionLoaded = false;
IdentifierFlags.isConnectionTypeLoaded = false;
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
    static removeConceptType(character, id) {
        if (this.LocalCharacterRoot) {
            this.LocalCharacterRoot = this.LocalCharacterRoot.removeNodeWithVariants(this.LocalCharacterRoot, character, id);
        }
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
            return null;
        });
    }
    static getCharacterAndTypeFromTree(value, typeId) {
        if (this.root) {
            var Node = this.root.getFromNodeWithCharacterAndType(value, typeId, this.root);
            return Node;
        }
        return this.root;
    }
    static removeNodeFromTree(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.root) {
                this.root = this.root.removeNode(this.root, id);
            }
        });
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
    static removeConceptType(typeId, id) {
        if (this.LocalTypeRoot) {
            this.LocalTypeRoot = this.LocalTypeRoot.removeNodeWithVariants(this.LocalTypeRoot, typeId, id);
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
            return passedNode;
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
                if (node.key == passedNode.key && node.key != "" && node.value.id != passedNode.value.id) {
                    // node.currentNode = this.addCurrentNode(passedNode, node.currentNode);
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
                if (node.key == passedNode.key && node.key != 0 && node.value.id != passedNode.value.id) {
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
                    for (let i = 0; i < node.variants.length; i++) {
                        if (node.variants[i].value.typeId == typeId) {
                            return node.variants[i];
                        }
                    }
                    // return this.getFromNodeWithCharacterAndType(value, typeId, node.currentNode);
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
    removeNode(passedNode, id) {
        if (passedNode == null) {
            return passedNode;
        }
        if (passedNode.key > id) {
            passedNode.leftNode = this.removeNode(passedNode.leftNode, id);
            return passedNode;
        }
        else if (passedNode.key < id) {
            passedNode.rightNode = this.removeNode(passedNode.rightNode, id);
            return passedNode;
        }
        // if(passedNode.variants.length > 0){
        //     if(passedNode.value.id == id ){
        //     }
        //     var newNode = passedNode.variants[0];
        //     if(newNode){
        //         passedNode.value = newNode.value;
        //         passedNode.key = newNode.key;
        //         passedNode.currentNode = newNode.currentNode;
        //         return passedNode;
        //     }
        // }
        if (passedNode.leftNode == null) {
            let temp = passedNode.rightNode;
            passedNode = null;
            return temp;
        }
        else if (passedNode.rightNode == null) {
            let temp = passedNode.leftNode;
            passedNode = null;
            return temp;
        }
        else {
            // passing the rightNode to the inOrderSuccessor gives the immediate successor of the node
            var immediateSuccessor = this.inOrderSuccessor(passedNode.rightNode);
            passedNode.value = immediateSuccessor.value;
            passedNode.key = immediateSuccessor.key;
            passedNode.variants = immediateSuccessor.variants;
            passedNode.currentNode = immediateSuccessor.currentNode;
            passedNode.rightNode = this.removeNode(passedNode.rightNode, immediateSuccessor.key);
            return passedNode;
        }
    }
    removeNodeWithVariants(passedNode, typeIdentifier, conceptId) {
        if (passedNode == null) {
            return passedNode;
        }
        if (passedNode.key > typeIdentifier) {
            passedNode.leftNode = this.removeNodeWithVariants(passedNode.leftNode, typeIdentifier, conceptId);
            return passedNode;
        }
        else if (passedNode.key < typeIdentifier) {
            passedNode.rightNode = this.removeNodeWithVariants(passedNode.rightNode, typeIdentifier, conceptId);
            return passedNode;
        }
        if (passedNode.variants.length > 0) {
            //condition if the main node is equal to the value
            if (passedNode.value.id == conceptId) {
                var newNode = passedNode.variants[0];
                if (newNode) {
                    passedNode.value = newNode.value;
                    passedNode.key = newNode.key;
                    passedNode.currentNode = newNode.currentNode;
                    passedNode.variants.splice(0, 1);
                    return passedNode;
                }
            }
            else {
                // in the condition that the main node is not equal to the checking value 
                for (let i = 0; i < passedNode.variants.length; i++) {
                    if (conceptId == passedNode.variants[i].value.id) {
                        passedNode.variants.splice(i, 1);
                        return passedNode;
                    }
                }
            }
        }
        if (passedNode.leftNode == null) {
            let temp = passedNode.rightNode;
            passedNode = null;
            return temp;
        }
        else if (passedNode.rightNode == null) {
            let temp = passedNode.leftNode;
            passedNode = null;
            return temp;
        }
        else {
            // passing the rightNode to the inOrderSuccessor gives the immediate successor of the node
            var immediateSuccessor = this.inOrderSuccessor(passedNode.rightNode);
            passedNode.value = immediateSuccessor.value;
            passedNode.key = immediateSuccessor.key;
            passedNode.variants = immediateSuccessor.variants;
            passedNode.currentNode = immediateSuccessor.currentNode;
            passedNode.rightNode = this.removeNodeWithVariants(passedNode.rightNode, immediateSuccessor.key, conceptId);
            return passedNode;
        }
    }
    countNodeBelow(root) {
        if (root == null) {
            return 0;
        }
        //recursive call to left child and right child and
        // add the result of these with 1 ( 1 for counting the root)
        return 1 + this.countNodeBelow(root.leftNode) + this.countNodeBelow(root.rightNode);
    }
    inOrderSuccessor(root) {
        while (root.leftNode != null) {
            root = root.leftNode;
        }
        return root;
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
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
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
    const request = indexedDB.open(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.BASE_URL + "_FreeSchema", version);
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
    const request = indexedDB.open(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.BASE_URL + "_FreeSchema", version);
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
    const request = indexedDB.open(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.BASE_URL + "_FreeSchema", version);
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
        const request = indexedDB.open(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.BASE_URL + "_FreeSchema", version);
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
    const request = indexedDB.open(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.BASE_URL + "_FreeSchema", version);
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
            const request = indexedDB.open(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.BASE_URL + "_FreeSchema", version);
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
            const request = indexedDB.open(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.BASE_URL + "_FreeSchema", version);
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
    const request = indexedDB.open(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.BASE_URL + "_FreeSchema", version);
    request.onsuccess = function (event) {
        var target = event.target;
        var db = target.result;
        let transaction = db.transaction(databaseName, "readwrite");
        let objectStore = transaction.objectStore(databaseName);
        console.log("deleting from the database", id);
        let getRequest = objectStore.delete(Number(id));
        getRequest.onsuccess = function (event) {
            let target = event.target;
            console.log(event);
            console.log("deleted successfully");
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
/* harmony import */ var _Database_indexeddb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Database/indexeddb */ "./src/Database/indexeddb.ts");
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


function CreateBinaryTreeFromData() {
    return __awaiter(this, void 0, void 0, function* () {
        var startTime = new Date().getTime();
        var conceptList = yield (0,_Database_indexeddb__WEBPACK_IMPORTED_MODULE_0__.getFromDatabaseWithTypeOld)("concept");
        if (Array.isArray(conceptList)) {
            for (var i = 0; i < conceptList.length; i++) {
                let concept = conceptList[i];
                _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_1__.ConceptsData.AddConcept(concept);
                // let node = new Node(concept.id, concept, null, null);
                // BinaryTree.addNodeToTree(node);
            }
        }
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

/***/ "./src/Services/DeleteConcept.ts":
/*!***************************************!*\
  !*** ./src/Services/DeleteConcept.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeleteConceptById: () => (/* binding */ DeleteConceptById)
/* harmony export */ });
/* harmony import */ var _DataStructures_BinaryCharacterTree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DataStructures/BinaryCharacterTree */ "./src/DataStructures/BinaryCharacterTree.ts");
/* harmony import */ var _DataStructures_BinaryTree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataStructures/BinaryTree */ "./src/DataStructures/BinaryTree.ts");
/* harmony import */ var _DataStructures_BinaryTypeTree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DataStructures/BinaryTypeTree */ "./src/DataStructures/BinaryTypeTree.ts");
/* harmony import */ var _Database_indexeddb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Database/indexeddb */ "./src/Database/indexeddb.ts");
/* harmony import */ var _GetTheConcept__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GetTheConcept */ "./src/Services/GetTheConcept.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





function DeleteConceptById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        var concept = yield (0,_GetTheConcept__WEBPACK_IMPORTED_MODULE_4__["default"])(id);
        yield _DataStructures_BinaryTree__WEBPACK_IMPORTED_MODULE_1__.BinaryTree.removeNodeFromTree(id);
        var typeId = concept.typeId;
        var character = concept.characterValue;
        yield _DataStructures_BinaryTypeTree__WEBPACK_IMPORTED_MODULE_2__.BinaryTypeTree.removeTypeConcept(typeId, id);
        yield _DataStructures_BinaryCharacterTree__WEBPACK_IMPORTED_MODULE_0__.BinaryCharacterTree.removeNodeByCharacter(character, id);
        (0,_Database_indexeddb__WEBPACK_IMPORTED_MODULE_3__.removeFromDatabase)("concept", id);
        console.log("this is the updated binary tree", _DataStructures_BinaryCharacterTree__WEBPACK_IMPORTED_MODULE_0__.BinaryCharacterTree.characterRoot);
        console.log("this is the number of nodes", _DataStructures_BinaryCharacterTree__WEBPACK_IMPORTED_MODULE_0__.BinaryCharacterTree.countNumberOfNodes());
    });
}


/***/ }),

/***/ "./src/Services/DeleteConnection.ts":
/*!******************************************!*\
  !*** ./src/Services/DeleteConnection.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeleteConnectionById: () => (/* binding */ DeleteConnectionById)
/* harmony export */ });
/* harmony import */ var _DataStructures_ConnectionBinaryTree_ConnectionBinaryTree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DataStructures/ConnectionBinaryTree/ConnectionBinaryTree */ "./src/DataStructures/ConnectionBinaryTree/ConnectionBinaryTree.ts");
/* harmony import */ var _DataStructures_ConnectionBinaryTree_ConnectionTypeTree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataStructures/ConnectionBinaryTree/ConnectionTypeTree */ "./src/DataStructures/ConnectionBinaryTree/ConnectionTypeTree.ts");
/* harmony import */ var _Database_indexeddb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Database/indexeddb */ "./src/Database/indexeddb.ts");
/* harmony import */ var _GetConnections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GetConnections */ "./src/Services/GetConnections.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




function DeleteConnectionById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        var connection = yield (0,_GetConnections__WEBPACK_IMPORTED_MODULE_3__.GetConnectionById)(id);
        console.log("this is the connection", connection);
        console.log("this is the connection binary tree before", _DataStructures_ConnectionBinaryTree_ConnectionTypeTree__WEBPACK_IMPORTED_MODULE_1__.ConnectionTypeTree.connectionTypeRoot);
        (0,_Database_indexeddb__WEBPACK_IMPORTED_MODULE_2__.removeFromDatabase)("connection", id);
        _DataStructures_ConnectionBinaryTree_ConnectionBinaryTree__WEBPACK_IMPORTED_MODULE_0__.ConnectionBinaryTree.removeNodeFromTree(id);
        _DataStructures_ConnectionBinaryTree_ConnectionTypeTree__WEBPACK_IMPORTED_MODULE_1__.ConnectionTypeTree.removeTypeConcept(connection.typeId, id);
        console.log("this is the connection binary tree", _DataStructures_ConnectionBinaryTree_ConnectionTypeTree__WEBPACK_IMPORTED_MODULE_1__.ConnectionTypeTree.connectionTypeRoot);
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
        if (concept.id == 0 && id != null && id != undefined) {
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
        if (concept.id == 0 && id != null && id != undefined) {
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
/* harmony import */ var _Api_GetAllConnectionsOfCompositionBulk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Api/GetAllConnectionsOfCompositionBulk */ "./src/Api/GetAllConnectionsOfCompositionBulk.ts");
/* harmony import */ var _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DataStructures/ConceptData */ "./src/DataStructures/ConceptData.ts");
/* harmony import */ var _GetComposition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GetComposition */ "./src/Services/GetComposition.ts");
/* harmony import */ var _GetConceptByCharacter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GetConceptByCharacter */ "./src/Services/GetConceptByCharacter.ts");
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
        var concept = yield (0,_GetConceptByCharacter__WEBPACK_IMPORTED_MODULE_4__["default"])(compositionName);
        var CompositionList = [];
        if (concept) {
            yield (0,_Api_GetAllConceptsByType__WEBPACK_IMPORTED_MODULE_0__.GetAllConceptsByType)(compositionName, userId);
            var conceptList = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConceptsByTypeIdAndUser(concept.id, userId);
            var startPage = inpage * (page - 1);
            var prefetchComposition = [];
            for (var i = startPage; i < startPage + inpage; i++) {
                if (conceptList[i]) {
                    prefetchComposition.push(conceptList[i].id);
                }
            }
            yield (0,_Api_GetAllConnectionsOfCompositionBulk__WEBPACK_IMPORTED_MODULE_1__.GetAllConnectionsOfCompositionBulk)(prefetchComposition);
            for (var i = startPage; i < startPage + inpage; i++) {
                if (conceptList[i]) {
                    var compositionJson = yield (0,_GetComposition__WEBPACK_IMPORTED_MODULE_3__.GetComposition)(conceptList[i].id);
                    CompositionList.push(compositionJson);
                }
            }
        }
        return CompositionList;
    });
}
function GetCompositionListWithId(compositionName, userId, inpage = 10, page = 1) {
    return __awaiter(this, void 0, void 0, function* () {
        var concept = yield (0,_GetConceptByCharacter__WEBPACK_IMPORTED_MODULE_4__["default"])(compositionName);
        var CompositionList = [];
        console.log("what a list", concept);
        if (concept) {
            yield (0,_Api_GetAllConceptsByType__WEBPACK_IMPORTED_MODULE_0__.GetAllConceptsByType)(compositionName, userId);
            var conceptList = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConceptsByTypeIdAndUser(concept.id, userId);
            var startPage = inpage * (page - 1);
            var prefetchComposition = [];
            console.log("this is the prefetched concept list", conceptList);
            for (var i = startPage; i < startPage + inpage; i++) {
                if (conceptList[i]) {
                    prefetchComposition.push(conceptList[i].id);
                }
            }
            console.log("this is the prefetch", prefetchComposition);
            yield (0,_Api_GetAllConnectionsOfCompositionBulk__WEBPACK_IMPORTED_MODULE_1__.GetAllConnectionsOfCompositionBulk)(prefetchComposition);
            for (var i = startPage; i < startPage + inpage; i++) {
                if (conceptList[i]) {
                    var compositionJson = yield (0,_GetComposition__WEBPACK_IMPORTED_MODULE_3__.GetCompositionWithId)(conceptList[i].id);
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

/***/ "./src/Services/GetConnections.ts":
/*!****************************************!*\
  !*** ./src/Services/GetConnections.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetConnectionById: () => (/* binding */ GetConnectionById)
/* harmony export */ });
/* harmony import */ var _Api_GetConnection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Api/GetConnection */ "./src/Api/GetConnection.ts");
/* harmony import */ var _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataStructures/ConnectionData */ "./src/DataStructures/ConnectionData.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function GetConnectionById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        var connection = yield _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_1__.ConnectionData.GetConnection(id);
        console.log("this is the connection getting from the local data", connection);
        if ((connection == null || connection.id == 0) && id != null && id != undefined) {
            var connectionString = yield (0,_Api_GetConnection__WEBPACK_IMPORTED_MODULE_0__.GetConnection)(id);
            connection = connectionString;
        }
        return connection;
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
/* harmony import */ var _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DataStructures/ConnectionData */ "./src/DataStructures/ConnectionData.ts");
/* harmony import */ var _DataStructures_Local_LocalConnectionData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataStructures/Local/LocalConnectionData */ "./src/DataStructures/Local/LocalConnectionData.ts");
/* harmony import */ var _Database_indexdblocal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Database/indexdblocal */ "./src/Database/indexdblocal.ts");
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




function GetDataFromIndexDb() {
    return __awaiter(this, void 0, void 0, function* () {
        // var conceptList = await getFromDatabaseWithTypeOld("concept");
        GetConnectionsFromIndexDb();
        // console.log(conceptList);
        // if(Array.isArray(conceptList)){
        //     for(var i=0 ;i < conceptList.length ;i++){
        //         ConceptsData.AddConcept(conceptList[i]);
        //     }
        // }
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
        var connectionList = yield (0,_Database_indexeddb__WEBPACK_IMPORTED_MODULE_3__.getFromDatabaseWithTypeOld)("connection");
        console.log("this is the connection list from db", connectionList);
        if (Array.isArray(connectionList)) {
            for (var i = 0; i < connectionList.length; i++) {
                _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_0__.ConnectionData.AddConnection(connectionList[i]);
            }
        }
    });
}
function GetConnectionsFromIndexDbLocal() {
    return __awaiter(this, void 0, void 0, function* () {
        var connectionList = yield (0,_Database_indexdblocal__WEBPACK_IMPORTED_MODULE_2__.getAllFromLocalDb)("localconnection");
        if (Array.isArray(connectionList)) {
            for (var i = 0; i < connectionList.length; i++) {
                _DataStructures_Local_LocalConnectionData__WEBPACK_IMPORTED_MODULE_1__.LocalConnectionData.AddConnection(connectionList[i]);
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
/* harmony import */ var _Api_GetAllConnectionsOfCompositionBulk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Api/GetAllConnectionsOfCompositionBulk */ "./src/Api/GetAllConnectionsOfCompositionBulk.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





function GetLink(id, linker, inpage = 10, page = 1) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        var output = [];
        var concept = yield (0,_GetTheConcept__WEBPACK_IMPORTED_MODULE_3__["default"])(id);
        var linkString = ((_a = concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) + "_s" + "_" + linker;
        var relatedConceptString = yield (0,_Api_GetConceptByCharacterAndType__WEBPACK_IMPORTED_MODULE_0__.GetConceptByCharacterAndType)(linkString, 16);
        var relatedConcept = relatedConceptString;
        if (relatedConcept.id > 0) {
            var connectionsString = yield (0,_Api_GetConnectionOfTheConcept__WEBPACK_IMPORTED_MODULE_1__.GetConnectionOfTheConcept)(relatedConcept.id, concept.id, concept.userId, inpage, page);
            var connections = connectionsString;
            var prefetch = [];
            for (var i = 0; i < connections.length; i++) {
                prefetch.push(connections[i].toTheConceptId);
            }
            yield (0,_Api_GetAllConnectionsOfCompositionBulk__WEBPACK_IMPORTED_MODULE_4__.GetAllConnectionsOfCompositionBulk)(prefetch);
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

/***/ "./src/Services/GetLinkerConnectionFromConcept.ts":
/*!********************************************************!*\
  !*** ./src/Services/GetLinkerConnectionFromConcept.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetLinkerConnectionFromConcepts: () => (/* binding */ GetLinkerConnectionFromConcepts)
/* harmony export */ });
/* harmony import */ var _Api_GetAllLinkerConnectionsFromTheConcept__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Api/GetAllLinkerConnectionsFromTheConcept */ "./src/Api/GetAllLinkerConnectionsFromTheConcept.ts");
/* harmony import */ var _GetTheConcept__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GetTheConcept */ "./src/Services/GetTheConcept.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function GetLinkerConnectionFromConcepts(id) {
    return __awaiter(this, void 0, void 0, function* () {
        var connections = yield (0,_Api_GetAllLinkerConnectionsFromTheConcept__WEBPACK_IMPORTED_MODULE_0__.GetAllLinkerConnectionsFromTheConcept)(id);
        for (var i = 0; i < connections.length; i++) {
            let localConnection = connections[i];
            var connectionIdentifier = localConnection.typeId;
            let concept = yield (0,_GetTheConcept__WEBPACK_IMPORTED_MODULE_1__["default"])(connectionIdentifier);
            localConnection.type = concept;
        }
        return connections;
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
/* harmony import */ var _DataStructures_BinaryTree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataStructures/BinaryTree */ "./src/DataStructures/BinaryTree.ts");
/* harmony import */ var _DataStructures_SettingData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DataStructures/SettingData */ "./src/DataStructures/SettingData.ts");
/* harmony import */ var _DataStructures_Settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DataStructures/Settings */ "./src/DataStructures/Settings.ts");
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





function InitializeSystem() {
    return __awaiter(this, void 0, void 0, function* () {
        var statsData = yield (0,_Database_indexeddb__WEBPACK_IMPORTED_MODULE_4__.GetStatsFromDatabase)();
        var settings = statsData;
        if (!settings.isOnlineSync) {
            yield (0,_Api_GetAiData__WEBPACK_IMPORTED_MODULE_0__.GetAiData)();
            console.log("this is the binary data", _DataStructures_BinaryTree__WEBPACK_IMPORTED_MODULE_1__.BinaryTree.root);
        }
        else {
            return true;
        }
    });
}
function PurgatoryDatabaseUpdated() {
    return __awaiter(this, void 0, void 0, function* () {
        _DataStructures_Settings__WEBPACK_IMPORTED_MODULE_3__.Settings.isOnlineSync = true;
        var settingData = new _DataStructures_SettingData__WEBPACK_IMPORTED_MODULE_2__.SettingData(_DataStructures_Settings__WEBPACK_IMPORTED_MODULE_3__.Settings.isOnlineSync);
        (0,_Database_indexeddb__WEBPACK_IMPORTED_MODULE_4__.AiUpdateFlag)(settingData);
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
/* harmony import */ var _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DataStructures/Local/LocalConceptData */ "./src/DataStructures/Local/LocalConceptData.ts");
/* harmony import */ var _Database_indexdblocal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Database/indexdblocal */ "./src/Database/indexdblocal.ts");
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
        var conceptList = yield (0,_Database_indexdblocal__WEBPACK_IMPORTED_MODULE_1__.getAllFromLocalDb)("localconcept");
        if (Array.isArray(conceptList)) {
            for (var i = 0; i < conceptList.length; i++) {
                let concept = conceptList[i];
                _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_0__.LocalConceptsData.AddConcept(concept);
                // let node = new Node(concept.id, concept, null, null);
                // LocalBinaryTree.addNodeToTree(node);
            }
        }
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
/* harmony export */   BaseUrl: () => (/* reexport safe */ _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_30__.BaseUrl),
/* harmony export */   Concept: () => (/* reexport safe */ _DataStructures_Concept__WEBPACK_IMPORTED_MODULE_23__.Concept),
/* harmony export */   ConceptsData: () => (/* reexport safe */ _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_24__.ConceptsData),
/* harmony export */   ConnectionData: () => (/* reexport safe */ _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_25__.ConnectionData),
/* harmony export */   CreateComposition: () => (/* reexport safe */ _Services_CreateTheComposition__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   CreateConnectionBetweenTwoConcepts: () => (/* reexport safe */ _Services_CreateConnectionBetweenTwoConcepts__WEBPACK_IMPORTED_MODULE_10__.CreateConnectionBetweenTwoConcepts),
/* harmony export */   CreateTheCompositionLocal: () => (/* reexport safe */ _Services_Local_CreateTheCompositionLocal__WEBPACK_IMPORTED_MODULE_9__.CreateTheCompositionLocal),
/* harmony export */   CreateTheConnection: () => (/* reexport safe */ _Services_CreateTheConnection__WEBPACK_IMPORTED_MODULE_15__["default"]),
/* harmony export */   DeleteConceptById: () => (/* reexport safe */ _Services_DeleteConcept__WEBPACK_IMPORTED_MODULE_19__.DeleteConceptById),
/* harmony export */   DeleteConnectionById: () => (/* reexport safe */ _Services_DeleteConnection__WEBPACK_IMPORTED_MODULE_20__.DeleteConnectionById),
/* harmony export */   GetAllConnectionsOfComposition: () => (/* reexport safe */ _Api_GetAllConnectionsOfComposition__WEBPACK_IMPORTED_MODULE_5__.GetAllConnectionsOfComposition),
/* harmony export */   GetComposition: () => (/* reexport safe */ _Services_GetComposition__WEBPACK_IMPORTED_MODULE_6__.GetComposition),
/* harmony export */   GetCompositionList: () => (/* reexport safe */ _Services_GetCompositionList__WEBPACK_IMPORTED_MODULE_3__.GetCompositionList),
/* harmony export */   GetCompositionListLocal: () => (/* reexport safe */ _Services_Local_GetCompositionListLocal__WEBPACK_IMPORTED_MODULE_4__.GetCompositionListLocal),
/* harmony export */   GetCompositionListLocalWithId: () => (/* reexport safe */ _Services_Local_GetCompositionListLocal__WEBPACK_IMPORTED_MODULE_4__.GetCompositionListLocalWithId),
/* harmony export */   GetCompositionListWithId: () => (/* reexport safe */ _Services_GetCompositionList__WEBPACK_IMPORTED_MODULE_3__.GetCompositionListWithId),
/* harmony export */   GetCompositionLocal: () => (/* reexport safe */ _Services_Local_GetCompositionLocal__WEBPACK_IMPORTED_MODULE_7__.GetCompositionLocal),
/* harmony export */   GetCompositionLocalWithId: () => (/* reexport safe */ _Services_Local_GetCompositionLocal__WEBPACK_IMPORTED_MODULE_7__.GetCompositionLocalWithId),
/* harmony export */   GetCompositionWithId: () => (/* reexport safe */ _Services_GetComposition__WEBPACK_IMPORTED_MODULE_6__.GetCompositionWithId),
/* harmony export */   GetConceptByCharacter: () => (/* reexport safe */ _Services_GetConceptByCharacter__WEBPACK_IMPORTED_MODULE_16__["default"]),
/* harmony export */   GetConnectionById: () => (/* reexport safe */ _Services_GetConnections__WEBPACK_IMPORTED_MODULE_21__.GetConnectionById),
/* harmony export */   GetLink: () => (/* reexport safe */ _Services_GetLink__WEBPACK_IMPORTED_MODULE_17__.GetLink),
/* harmony export */   GetLinkerConnectionFromConcepts: () => (/* reexport safe */ _Services_GetLinkerConnectionFromConcept__WEBPACK_IMPORTED_MODULE_18__.GetLinkerConnectionFromConcepts),
/* harmony export */   GetTheConcept: () => (/* reexport safe */ _Services_GetTheConcept__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   MakeTheInstanceConcept: () => (/* reexport safe */ _Services_MakeTheInstanceConcept__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   MakeTheInstanceConceptLocal: () => (/* reexport safe */ _Services_Local_MakeTheInstanceConceptLocal__WEBPACK_IMPORTED_MODULE_13__.MakeTheInstanceConceptLocal),
/* harmony export */   SplitStrings: () => (/* reexport safe */ _Services_SplitStrings__WEBPACK_IMPORTED_MODULE_2__.SplitStrings),
/* harmony export */   SyncData: () => (/* reexport safe */ _DataStructures_SyncData__WEBPACK_IMPORTED_MODULE_22__.SyncData),
/* harmony export */   getFromDatabase: () => (/* reexport safe */ _Database_indexeddb__WEBPACK_IMPORTED_MODULE_14__.getFromDatabase),
/* harmony export */   getFromDatabaseWithType: () => (/* reexport safe */ _Database_indexeddb__WEBPACK_IMPORTED_MODULE_14__.getFromDatabaseWithType),
/* harmony export */   getFromDatabaseWithTypeOld: () => (/* reexport safe */ _Database_indexeddb__WEBPACK_IMPORTED_MODULE_14__.getFromDatabaseWithTypeOld),
/* harmony export */   init: () => (/* binding */ init),
/* harmony export */   storeToDatabase: () => (/* reexport safe */ _Database_indexeddb__WEBPACK_IMPORTED_MODULE_14__.storeToDatabase)
/* harmony export */ });
/* harmony import */ var _Services_CreateBinaryTreeFromData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Services/CreateBinaryTreeFromData */ "./src/Services/CreateBinaryTreeFromData.ts");
/* harmony import */ var _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataStructures/IdentifierFlags */ "./src/DataStructures/IdentifierFlags.ts");
/* harmony import */ var _Services_SplitStrings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Services/SplitStrings */ "./src/Services/SplitStrings.ts");
/* harmony import */ var _Services_GetCompositionList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Services/GetCompositionList */ "./src/Services/GetCompositionList.ts");
/* harmony import */ var _Services_Local_GetCompositionListLocal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Services/Local/GetCompositionListLocal */ "./src/Services/Local/GetCompositionListLocal.ts");
/* harmony import */ var _Api_GetAllConnectionsOfComposition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Api/GetAllConnectionsOfComposition */ "./src/Api/GetAllConnectionsOfComposition.ts");
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
/* harmony import */ var _Services_GetLinkerConnectionFromConcept__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Services/GetLinkerConnectionFromConcept */ "./src/Services/GetLinkerConnectionFromConcept.ts");
/* harmony import */ var _Services_DeleteConcept__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Services/DeleteConcept */ "./src/Services/DeleteConcept.ts");
/* harmony import */ var _Services_DeleteConnection__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Services/DeleteConnection */ "./src/Services/DeleteConnection.ts");
/* harmony import */ var _Services_GetConnections__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Services/GetConnections */ "./src/Services/GetConnections.ts");
/* harmony import */ var _DataStructures_SyncData__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./DataStructures/SyncData */ "./src/DataStructures/SyncData.ts");
/* harmony import */ var _DataStructures_Concept__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./DataStructures/Concept */ "./src/DataStructures/Concept.ts");
/* harmony import */ var _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./DataStructures/ConceptData */ "./src/DataStructures/ConceptData.ts");
/* harmony import */ var _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./DataStructures/ConnectionData */ "./src/DataStructures/ConnectionData.ts");
/* harmony import */ var _Services_GetDataFromIndexDb__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Services/GetDataFromIndexDb */ "./src/Services/GetDataFromIndexDb.ts");
/* harmony import */ var _DataStructures_BinaryCharacterTree__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./DataStructures/BinaryCharacterTree */ "./src/DataStructures/BinaryCharacterTree.ts");
/* harmony import */ var _Services_Local_CreateLocalBinaryTreeFromData__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Services/Local/CreateLocalBinaryTreeFromData */ "./src/Services/Local/CreateLocalBinaryTreeFromData.ts");
/* harmony import */ var _Services_InitializeSystem__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./Services/InitializeSystem */ "./src/Services/InitializeSystem.ts");
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");

































function init(url = "", aiurl = "") {
    _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_30__.BaseUrl.BASE_URL = url;
    _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_30__.BaseUrl.AI_URL = aiurl;
    (0,_Services_InitializeSystem__WEBPACK_IMPORTED_MODULE_29__["default"])().then(() => {
        const start = new Date().getTime();
        (0,_Services_CreateBinaryTreeFromData__WEBPACK_IMPORTED_MODULE_0__["default"])().then(() => {
            _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__.IdentifierFlags.isDataLoaded = true;
            _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__.IdentifierFlags.isCharacterLoaded = true;
            _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__.IdentifierFlags.isTypeLoaded = true;
            let elapsed = new Date().getTime() - start;
            console.log("The time taken to prepare concept  data is  ", elapsed);
            console.log(_DataStructures_BinaryCharacterTree__WEBPACK_IMPORTED_MODULE_27__.BinaryCharacterTree.characterRoot);
        });
        // CreateCharacterBinaryTreeFromData().then(()=>{
        //    IdentifierFlags.isCharacterLoaded= true;
        //    let elapsed = new Date().getTime() - start;
        //    console.log("The time taken to prepare character data is  ", elapsed);
        // });
        // CreateTypeTreeFromData().then(()=>{
        //    IdentifierFlags.isTypeLoaded= true;
        //    let elapsed = new Date().getTime() - start;
        //    console.log("The time taken to prepare data is ", elapsed);
        // });
        (0,_Services_Local_CreateLocalBinaryTreeFromData__WEBPACK_IMPORTED_MODULE_28__["default"])().then(() => {
            _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__.IdentifierFlags.isLocalDataLoaded = true;
            _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__.IdentifierFlags.isLocalTypeLoaded = true;
            _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__.IdentifierFlags.isLocalCharacterLoaded = true;
            let elapsed = new Date().getTime() - start;
            console.log("The time taken to prepare local concept  ", elapsed);
        });
        // CreateLocalCharacterBinaryTreeFromData().then(()=>{
        //    IdentifierFlags.isLocalCharacterLoaded = true;
        // });
        // CreateLocalBinaryTypeTreeFromData().then(()=>{
        //    IdentifierFlags.isLocalTypeLoaded = true;
        //    console.log("type",IdentifierFlags.isLocalTypeLoaded);
        // });
        (0,_Services_GetDataFromIndexDb__WEBPACK_IMPORTED_MODULE_26__.GetDataFromIndexDbLocal)().then(() => {
            _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__.IdentifierFlags.isLocalConnectionLoaded = true;
        });
        (0,_Services_GetDataFromIndexDb__WEBPACK_IMPORTED_MODULE_26__.GetDataFromIndexDb)().then(() => {
            _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__.IdentifierFlags.isConnectionLoaded = true;
            _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__.IdentifierFlags.isConnectionTypeLoaded = true;
            let elapsed = new Date().getTime() - start;
            console.log("The time taken to prepare connections  ", elapsed);
        });
    });
}
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
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsTUFBTTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsMEJBQTBCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxnQ0FBZ0M7QUFDaEU7QUFDQTtB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Q1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDak5BO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWZ0c2Njcy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vbWZ0c2Njcy8uL3NyYy9BcGkvQ3JlYXRlL0NyZWF0ZVRoZUNoYXJhY3Rlci50cyIsIndlYnBhY2s6Ly9tZnRzY2NzLy4vc3JjL0FwaS9DcmVhdGUvQ3JlYXRlVGhlQ29uY2VwdEFwaS50cyIsIndlYnBhY2s6Ly9tZnRzY2NzLy4vc3JjL0FwaS9DcmVhdGUvQ3JlYXRlVGhlQ29ubmVjdGlvbkFwaS50cyIsIndlYnBhY2s6Ly9tZnRzY2NzLy4vc3JjL0FwaS9DcmVhdGUvQ3JlYXRlVGhlVGV4dERhdGEudHMiLCJ3ZWJwYWNrOi8vbWZ0c2Njcy8uL3NyYy9BcGkvR2V0QWlEYXRhLnRzIiwid2VicGFjazovL21mdHNjY3MvLi9zcmMvQXBpL0dldEFsbENvbmNlcHRzQnlUeXBlLnRzIiwid2VicGFjazovL21mdHNjY3MvLi9zcmMvQXBpL0dldEFsbENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvbi50cyIsIndlYnBhY2s6Ly9tZnRzY2NzLy4vc3JjL0FwaS9HZXRBbGxDb25uZWN0aW9uc09mQ29tcG9zaXRpb25CdWxrLnRzIiwid2VicGFjazovL21mdHNjY3MvLi9zcmMvQXBpL0dldEFsbExpbmtlckNvbm5lY3Rpb25zRnJvbVRoZUNvbmNlcHQudHMiLCJ3ZWJwYWNrOi8vbWZ0c2Njcy8uL3NyYy9BcGkvR2V0Q29uY2VwdC50cyIsIndlYnBhY2s6Ly9tZnRzY2NzLy4vc3JjL0FwaS9HZXRDb25jZXB0QnVsay50cyIsIndlYnBhY2s6Ly9tZnRzY2NzLy4vc3JjL0FwaS9HZXRDb25jZXB0QnlDaGFyYWN0ZXJBbmRUeXBlLnRzIiwid2VicGFjazovL21mdHNjY3MvLi9zcmMvQXBpL0dldENvbmNlcHRCeUNoYXJhY3RlclZhbHVlLnRzIiwid2VicGFjazovL21mdHNjY3MvLi9zcmMvQXBpL0dldENvbm5lY3Rpb24udHMiLCJ3ZWJwYWNrOi8vbWZ0c2Njcy8uL3NyYy9BcGkvR2V0Q29ubmVjdGlvbk9mVGhlQ29uY2VwdC50cyIsIndlYnBhY2s6Ly9tZnRzY2NzLy4vc3JjL0FwaS9HZXRSZXNlcnZlZElkcy50cyIsIndlYnBhY2s6Ly9tZnRzY2NzLy4vc3JjL0RhdGFTdHJ1Y3R1cmVzL0Jhc2VVcmwudHMiLCJ3ZWJwYWNrOi8vbWZ0c2Njcy8uL3NyYy9EYXRhU3RydWN0dXJlcy9CaW5hcnlDaGFyYWN0ZXJUcmVlLnRzIiwid2VicGFjazovL21mdHNjY3MvLi9zcmMvRGF0YVN0cnVjdHVyZXMvQmluYXJ5VHJlZS50cyIsIndlYnBhY2s6Ly9tZnRzY2NzLy4vc3JjL0RhdGFTdHJ1Y3R1cmVzL0JpbmFyeVR5cGVUcmVlLnRzIiwid2VicGFjazovL21mdHNjY3MvLi9zcmMvRGF0YVN0cnVjdHVyZXMvQ2hhcmFjdGVyUmVwb3NpdG9yeS50cyIsIndlYnBhY2s6Ly9tZnRzY2NzLy4vc3JjL0RhdGFTdHJ1Y3R1cmVzL0NvbmNlcHQudHMiLCJ3ZWJwYWNrOi8vbWZ0c2Njcy8uL3NyYy9EYXRhU3RydWN0dXJlcy9Db25jZXB0RGF0YS50cyIsIndlYnBhY2s6Ly9tZnRzY2NzLy4vc3JjL0RhdGFTdHJ1Y3R1cmVzL0Nvbm5lY3Rpb24udHMiLCJ3ZWJwYWNrOi8vbWZ0c2Njcy8uL3NyYy9EYXRhU3RydWN0dXJlcy9Db25uZWN0aW9uQmluYXJ5VHJlZS9Db25uZWN0aW9uQmluYXJ5VHJlZS50cyIsIndlYnBhY2s6Ly9tZnRzY2NzLy4vc3JjL0RhdGFTdHJ1Y3R1cmVzL0Nvbm5lY3Rpb25CaW5hcnlUcmVlL0Nvbm5lY3Rpb25Ob2RlLnRzIiwid2VicGFjazovL21mdHNjY3MvLi9zcmMvRGF0YVN0cnVjdHVyZXMvQ29ubmVjdGlvbkJpbmFyeVRyZWUvQ29ubmVjdGlvblR5cGVUcmVlLnRzIiwid2VicGFjazovL21mdHNjY3MvLi9zcmMvRGF0YVN0cnVjdHVyZXMvQ29ubmVjdGlvbkRhdGEudHMiLCJ3ZWJwYWNrOi8vbWZ0c2Njcy8uL3NyYy9EYXRhU3RydWN0dXJlcy9JZGVudGlmaWVyRmxhZ3MudHMiLCJ3ZWJwYWNrOi8vbWZ0c2Njcy8uL3NyYy9EYXRhU3RydWN0dXJlcy9Mb2NhbC9Mb2NhbEJpbmFyeUNoYXJhY3RlclRyZWUudHMiLCJ3ZWJwYWNrOi8vbWZ0c2Njcy8uL3NyYy9EYXRhU3RydWN0dXJlcy9Mb2NhbC9Mb2NhbEJpbmFyeVRyZWUudHMiLCJ3ZWJwYWNrOi8vbWZ0c2Njcy8uL3NyYy9EYXRhU3RydWN0dXJlcy9Mb2NhbC9Mb2NhbEJpbmFyeVR5cGVUcmVlLnRzIiwid2VicGFjazovL21mdHNjY3MvLi9zcmMvRGF0YVN0cnVjdHVyZXMvTG9jYWwvTG9jYWxDb25jZXB0RGF0YS50cyIsIndlYnBhY2s6Ly9tZnRzY2NzLy4vc3JjL0RhdGFTdHJ1Y3R1cmVzL0xvY2FsL0xvY2FsQ29ubmVjdGlvbkRhdGEudHMiLCJ3ZWJwYWNrOi8vbWZ0c2Njcy8uL3NyYy9EYXRhU3RydWN0dXJlcy9Ob2RlLnRzIiwid2VicGFjazovL21mdHNjY3MvLi9zcmMvRGF0YVN0cnVjdHVyZXMvUmVzZXJ2ZWRJZHMudHMiLCJ3ZWJwYWNrOi8vbWZ0c2Njcy8uL3NyYy9EYXRhU3RydWN0dXJlcy9SZXR1cm5lci50cyIsIndlYnBhY2s6Ly9tZnRzY2NzLy4vc3JjL0RhdGFTdHJ1Y3R1cmVzL1NldHRpbmdEYXRhLnRzIiwid2VicGFjazovL21mdHNjY3MvLi9zcmMvRGF0YVN0cnVjdHVyZXMvU2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vbWZ0c2Njcy8uL3NyYy9EYXRhU3RydWN0dXJlcy9TeW5jRGF0YS50cyIsIndlYnBhY2s6Ly9tZnRzY2NzLy4vc3JjL0RhdGFTdHJ1Y3R1cmVzL1RoZUNoYXJhY3Rlci50cyIsIndlYnBhY2s6Ly9tZnRzY2NzLy4vc3JjL0RhdGFTdHJ1Y3R1cmVzL1RoZVRleHRzLnRzIiwid2VicGFjazovL21mdHNjY3MvLi9zcmMvRGF0YWJhc2UvaW5kZXhkYmxvY2FsLnRzIiwid2VicGFjazovL21mdHNjY3MvLi9zcmMvRGF0YWJhc2UvaW5kZXhlZGRiLnRzIiwid2VicGFjazovL21mdHNjY3MvLi9zcmMvU2VydmljZXMvQ3JlYXRlQmluYXJ5VHJlZUZyb21EYXRhLnRzIiwid2VicGFjazovL21mdHNjY3MvLi9zcmMvU2VydmljZXMvQ3JlYXRlQ29ubmVjdGlvbkJldHdlZW5Ud29Db25jZXB0cy50cyIsIndlYnBhY2s6Ly9tZnRzY2NzLy4vc3JjL1NlcnZpY2VzL0NyZWF0ZVRoZUNvbXBvc2l0aW9uLnRzIiwid2VicGFjazovL21mdHNjY3MvLi9zcmMvU2VydmljZXMvQ3JlYXRlVGhlQ29uY2VwdC50cyIsIndlYnBhY2s6Ly9tZnRzY2NzLy4vc3JjL1NlcnZpY2VzL0NyZWF0ZVRoZUNvbm5lY3Rpb24udHMiLCJ3ZWJwYWNrOi8vbWZ0c2Njcy8uL3NyYy9TZXJ2aWNlcy9EZWxldGVDb25jZXB0LnRzIiwid2VicGFjazovL21mdHNjY3MvLi9zcmMvU2VydmljZXMvRGVsZXRlQ29ubmVjdGlvbi50cyIsIndlYnBhY2s6Ly9tZnRzY2NzLy4vc3JjL1NlcnZpY2VzL0dldENvbXBvc2l0aW9uLnRzIiwid2VicGFjazovL21mdHNjY3MvLi9zcmMvU2VydmljZXMvR2V0Q29tcG9zaXRpb25MaXN0LnRzIiwid2VicGFjazovL21mdHNjY3MvLi9zcmMvU2VydmljZXMvR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyLnRzIiwid2VicGFjazovL21mdHNjY3MvLi9zcmMvU2VydmljZXMvR2V0Q29ubmVjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vbWZ0c2Njcy8uL3NyYy9TZXJ2aWNlcy9HZXREYXRhRnJvbUluZGV4RGIudHMiLCJ3ZWJwYWNrOi8vbWZ0c2Njcy8uL3NyYy9TZXJ2aWNlcy9HZXRMaW5rLnRzIiwid2VicGFjazovL21mdHNjY3MvLi9zcmMvU2VydmljZXMvR2V0TGlua2VyQ29ubmVjdGlvbkZyb21Db25jZXB0LnRzIiwid2VicGFjazovL21mdHNjY3MvLi9zcmMvU2VydmljZXMvR2V0VGhlQ29uY2VwdC50cyIsIndlYnBhY2s6Ly9tZnRzY2NzLy4vc3JjL1NlcnZpY2VzL0dldFRoZVJlZmVyZW50LnRzIiwid2VicGFjazovL21mdHNjY3MvLi9zcmMvU2VydmljZXMvSW5pdGlhbGl6ZVN5c3RlbS50cyIsIndlYnBhY2s6Ly9tZnRzY2NzLy4vc3JjL1NlcnZpY2VzL0xvY2FsL0NyZWF0ZUxvY2FsQmluYXJ5VHJlZUZyb21EYXRhLnRzIiwid2VicGFjazovL21mdHNjY3MvLi9zcmMvU2VydmljZXMvTG9jYWwvQ3JlYXRlVGhlQ29tcG9zaXRpb25Mb2NhbC50cyIsIndlYnBhY2s6Ly9tZnRzY2NzLy4vc3JjL1NlcnZpY2VzL0xvY2FsL0NyZWF0ZVRoZUNvbmNlcHRMb2NhbC50cyIsIndlYnBhY2s6Ly9tZnRzY2NzLy4vc3JjL1NlcnZpY2VzL0xvY2FsL0NyZWF0ZVRoZUNvbm5lY3Rpb25Mb2NhbC50cyIsIndlYnBhY2s6Ly9tZnRzY2NzLy4vc3JjL1NlcnZpY2VzL0xvY2FsL0dldENvbXBvc2l0aW9uTGlzdExvY2FsLnRzIiwid2VicGFjazovL21mdHNjY3MvLi9zcmMvU2VydmljZXMvTG9jYWwvR2V0Q29tcG9zaXRpb25Mb2NhbC50cyIsIndlYnBhY2s6Ly9tZnRzY2NzLy4vc3JjL1NlcnZpY2VzL0xvY2FsL0dldENvbmNlcHRCeUNoYXJhY3RlckxvY2FsLnRzIiwid2VicGFjazovL21mdHNjY3MvLi9zcmMvU2VydmljZXMvTG9jYWwvTWFrZVRoZUNvbmNlcHRMb2NhbC50cyIsIndlYnBhY2s6Ly9tZnRzY2NzLy4vc3JjL1NlcnZpY2VzL0xvY2FsL01ha2VUaGVJbnN0YW5jZUNvbmNlcHRMb2NhbC50cyIsIndlYnBhY2s6Ly9tZnRzY2NzLy4vc3JjL1NlcnZpY2VzL0xvY2FsL01ha2VUaGVUeXBlTG9jYWwudHMiLCJ3ZWJwYWNrOi8vbWZ0c2Njcy8uL3NyYy9TZXJ2aWNlcy9NYWtlVGhlQ2hhcmFjdGVyLnRzIiwid2VicGFjazovL21mdHNjY3MvLi9zcmMvU2VydmljZXMvTWFrZVRoZUNoYXJhY3RlckRhdGEudHMiLCJ3ZWJwYWNrOi8vbWZ0c2Njcy8uL3NyYy9TZXJ2aWNlcy9NYWtlVGhlQ29uY2VwdC50cyIsIndlYnBhY2s6Ly9tZnRzY2NzLy4vc3JjL1NlcnZpY2VzL01ha2VUaGVJbnN0YW5jZUNvbmNlcHQudHMiLCJ3ZWJwYWNrOi8vbWZ0c2Njcy8uL3NyYy9TZXJ2aWNlcy9NYWtlVGhlTmFtZS50cyIsIndlYnBhY2s6Ly9tZnRzY2NzLy4vc3JjL1NlcnZpY2VzL01ha2VUaGVUeXBlQ29uY2VwdC50cyIsIndlYnBhY2s6Ly9tZnRzY2NzLy4vc3JjL1NlcnZpY2VzL1NwbGl0U3RyaW5ncy50cyIsIndlYnBhY2s6Ly9tZnRzY2NzLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly9tZnRzY2NzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21mdHNjY3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21mdHNjY3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tZnRzY2NzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWZ0c2Njcy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL21mdHNjY3Mvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL21mdHNjY3Mvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwibWZ0c2Njc1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJtZnRzY2NzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm1mdHNjY3NcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCAoKSA9PiB7XG5yZXR1cm4gIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBDaGFyYWN0ZXJSZXBvc2l0b3J5IH0gZnJvbSBcIi4uLy4uL0RhdGFTdHJ1Y3R1cmVzL0NoYXJhY3RlclJlcG9zaXRvcnlcIjtcbmltcG9ydCB7IFJldHVybmVyIH0gZnJvbSBcIi4uLy4uL0RhdGFTdHJ1Y3R1cmVzL1JldHVybmVyXCI7XG5pbXBvcnQgeyBUaGVDaGFyYWN0ZXIgfSBmcm9tIFwiLi4vLi4vRGF0YVN0cnVjdHVyZXMvVGhlQ2hhcmFjdGVyXCI7XG5pbXBvcnQgeyBCYXNlVXJsIH0gZnJvbSBcIi4uLy4uL0RhdGFTdHJ1Y3R1cmVzL0Jhc2VVcmxcIjtcbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVUaGVDaGFyYWN0ZXIoY2hhcmFjdGVyRGF0YSkge1xuICAgIHZhciBjaGFyYWN0ZXJEYXRhO1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjaGFyYWN0ZXJEYXRhID0gQ2hhcmFjdGVyUmVwb3NpdG9yeS5HZXRDaGFyYWN0ZXIoY2hhcmFjdGVyRGF0YS5kYXRhKTtcbiAgICAgICAgICAgIGlmIChjaGFyYWN0ZXJEYXRhLmlkID09IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKEJhc2VVcmwuQ3JlYXRlVGhlQ2hhcmFjdGVyRGF0YVVybCgpLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNoYXJhY3RlckRhdGEpLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0U3RyaW5nID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHJlc3VsdFN0cmluZztcbiAgICAgICAgICAgICAgICB2YXIgc2F2aW5nQ2hhcmFjdGVyID0gbmV3IFRoZUNoYXJhY3RlcihyZXN1bHQudXNlcklkLCBjaGFyYWN0ZXJEYXRhLmRhdGEsIDAsIDAsIDQsIDQsIDk5OSwgOTk5LCBcIlwiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgc2F2aW5nQ2hhcmFjdGVyLmlkID0gcmVzdWx0LmlkO1xuICAgICAgICAgICAgICAgIENoYXJhY3RlclJlcG9zaXRvcnkuQWRkQ2hhcmFjdGVyKHNhdmluZ0NoYXJhY3Rlcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciByZXR1cm5pbmdEYXRhID0gbmV3IFJldHVybmVyKGNoYXJhY3RlckRhdGEuaWQsIGNoYXJhY3RlckRhdGEudXNlcklkLCAwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldHVybmluZ0RhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBtZXNzYWdlOiAnLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1bmV4cGVjdGVkIGVycm9yOiAnLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBCYXNlVXJsIH0gZnJvbSBcIi4uLy4uL0RhdGFTdHJ1Y3R1cmVzL0Jhc2VVcmxcIjtcbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVUaGVDb25jZXB0QXBpKGNvbmNlcHREYXRhKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goQmFzZVVybC5DcmVhdGVUaGVDb25jZXB0VXJsKCksIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNvbmNlcHREYXRhKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXN1bHRTdHJpbmcgPSB5aWVsZCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSByZXN1bHRTdHJpbmc7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgbWVzc2FnZTogJywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndW5leHBlY3RlZCBlcnJvcjogJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgQmFzZVVybCB9IGZyb20gXCIuLi8uLi9EYXRhU3RydWN0dXJlcy9CYXNlVXJsXCI7XG5leHBvcnQgZnVuY3Rpb24gQ3JlYXRlVGhlQ29ubmVjdGlvbkFwaShjb25uZWN0aW9uRGF0YSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIganNvbkRhdGEgPSBKU09OLnN0cmluZ2lmeShjb25uZWN0aW9uRGF0YSk7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKEJhc2VVcmwuQ3JlYXRlVGhlQ29ubmVjdGlvblVybCgpLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBqc29uRGF0YVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBtZXNzYWdlOiAnLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1bmV4cGVjdGVkIGVycm9yOiAnLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBCYXNlVXJsIH0gZnJvbSBcIi4uLy4uL0RhdGFTdHJ1Y3R1cmVzL0Jhc2VVcmxcIjtcbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVUZXh0RGF0YSh0ZXh0RGF0YSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKEJhc2VVcmwuQ3JlYXRlVGhlVGV4dERhdGFVcmwoKSwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodGV4dERhdGEpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdFN0cmluZyA9IHlpZWxkIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHJlc3VsdFN0cmluZztcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBtZXNzYWdlOiAnLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1bmV4cGVjdGVkIGVycm9yOiAnLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBCYXNlVXJsIH0gZnJvbSAnLi4vRGF0YVN0cnVjdHVyZXMvQmFzZVVybCc7XG5pbXBvcnQgeyBDb25jZXB0c0RhdGEgfSBmcm9tICcuLi9EYXRhU3RydWN0dXJlcy9Db25jZXB0RGF0YSc7XG5pbXBvcnQgeyBQdXJnYXRvcnlEYXRhYmFzZVVwZGF0ZWQgfSBmcm9tICcuLi9TZXJ2aWNlcy9Jbml0aWFsaXplU3lzdGVtJztcbmV4cG9ydCBmdW5jdGlvbiBHZXRBaURhdGEoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKEJhc2VVcmwuR2V0QWxsQWlEYXRhKCksIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIENvbmNlcHRzRGF0YS5BZGRDb25jZXB0KHJlc3VsdFtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBQdXJnYXRvcnlEYXRhYmFzZVVwZGF0ZWQoKTtcbiAgICAgICAgICAgIGxldCBlbGFwc2VkID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIHRpbWUgdGFrZW4gaXMgXCIsIGVsYXBzZWQpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgbWVzc2FnZTogJywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndW5leHBlY3RlZCBlcnJvcjogJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgQ29uY2VwdHNEYXRhIH0gZnJvbSBcIi4vLi4vRGF0YVN0cnVjdHVyZXMvQ29uY2VwdERhdGFcIjtcbmltcG9ydCB7IEJhc2VVcmwgfSBmcm9tIFwiLi4vRGF0YVN0cnVjdHVyZXMvQmFzZVVybFwiO1xuZXhwb3J0IGZ1bmN0aW9uIEdldEFsbENvbmNlcHRzQnlUeXBlKHR5cGUsIHVzZXJJZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgdXJsZW5jb2RlZCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICAgICAgICAgIHVybGVuY29kZWQuYXBwZW5kKFwidHlwZVwiLCB0eXBlKTtcbiAgICAgICAgICAgIHVybGVuY29kZWQuYXBwZW5kKFwidXNlcl9pZFwiLCB1c2VySWQudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKEJhc2VVcmwuR2V0QWxsQ29uY2VwdHNCeVR5cGVVcmwoKSwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiB1cmxlbmNvZGVkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBDb25jZXB0c0RhdGEuQWRkQ29uY2VwdChyZXN1bHRbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZGRlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIG1lc3NhZ2U6ICcsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VuZXhwZWN0ZWQgZXJyb3I6ICcsIGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IENvbm5lY3Rpb25EYXRhIH0gZnJvbSAnLi4vRGF0YVN0cnVjdHVyZXMvQ29ubmVjdGlvbkRhdGEnO1xuaW1wb3J0IHsgQmFzZVVybCB9IGZyb20gXCIuLi9EYXRhU3RydWN0dXJlcy9CYXNlVXJsXCI7XG5leHBvcnQgZnVuY3Rpb24gR2V0QWxsQ29ubmVjdGlvbnNPZkNvbXBvc2l0aW9uKGNvbXBvc2l0aW9uX2lkKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIGNvbm5lY3Rpb25MaXN0ID0gW107XG4gICAgICAgIGNvbm5lY3Rpb25MaXN0ID0geWllbGQgQ29ubmVjdGlvbkRhdGEuR2V0Q29ubmVjdGlvbnNPZkNvbXBvc2l0aW9uTG9jYWwoY29tcG9zaXRpb25faWQpO1xuICAgICAgICBpZiAoY29ubmVjdGlvbkxpc3QubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHZhciBjb25uZWN0aW9uTGlzdFN0cmluZyA9IHlpZWxkIEdldEFsbENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvbk9ubGluZShjb21wb3NpdGlvbl9pZCk7XG4gICAgICAgICAgICBjb25uZWN0aW9uTGlzdCA9IGNvbm5lY3Rpb25MaXN0U3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgR2V0QWxsQ29ubmVjdGlvbnNPZkNvbXBvc2l0aW9uT25saW5lKGNvbXBvc2l0aW9uX2lkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29ubmVjdGlvbkxpc3Q7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gR2V0QWxsQ29ubmVjdGlvbnNPZkNvbXBvc2l0aW9uT25saW5lKGNvbXBvc2l0aW9uX2lkKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBjb25uZWN0aW9uTGlzdCA9IFtdO1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChCYXNlVXJsLkdldEFsbENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvblVybCgpLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IGBjb21wb3NpdGlvbl9pZD0ke2NvbXBvc2l0aW9uX2lkfWBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIENvbm5lY3Rpb25EYXRhLkFkZENvbm5lY3Rpb24ocmVzdWx0W2ldKTtcbiAgICAgICAgICAgICAgICAvLyBDb25uZWN0aW9uRGF0YS5BZGRUb0RpY3Rpb25hcnkocmVzdWx0W2ldKTtcbiAgICAgICAgICAgICAgICBjb25uZWN0aW9uTGlzdC5wdXNoKHJlc3VsdFtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29ubmVjdGlvbkxpc3Q7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBtZXNzYWdlOiAnLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1bmV4cGVjdGVkIGVycm9yOiAnLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBDb25uZWN0aW9uRGF0YSB9IGZyb20gJy4uL0RhdGFTdHJ1Y3R1cmVzL0Nvbm5lY3Rpb25EYXRhJztcbmltcG9ydCB7IEJhc2VVcmwgfSBmcm9tIFwiLi4vRGF0YVN0cnVjdHVyZXMvQmFzZVVybFwiO1xuaW1wb3J0IHsgR2V0Q29uY2VwdEJ1bGsgfSBmcm9tICcuL0dldENvbmNlcHRCdWxrJztcbmV4cG9ydCBmdW5jdGlvbiBHZXRBbGxDb25uZWN0aW9uc09mQ29tcG9zaXRpb25CdWxrKGNvbXBvc2l0aW9uX2lkcyA9IFtdKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIGNvbm5lY3Rpb25MaXN0ID0gW107XG4gICAgICAgIHZhciBjb25jZXB0TGlzdCA9IFtdO1xuICAgICAgICB2YXIgY29ubmVjdGlvbkxpc3RTdHJpbmcgPSB5aWVsZCBHZXRBbGxDb25uZWN0aW9uc09mQ29tcG9zaXRpb25PbmxpbmUoY29tcG9zaXRpb25faWRzKTtcbiAgICAgICAgY29ubmVjdGlvbkxpc3QgPSBjb25uZWN0aW9uTGlzdFN0cmluZztcbiAgICAgICAgaWYgKGNvbm5lY3Rpb25MaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29ubmVjdGlvbkxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNvbmNlcHRMaXN0LmluY2x1ZGVzKGNvbm5lY3Rpb25MaXN0W2ldLm9mVGhlQ29uY2VwdElkKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25jZXB0TGlzdC5wdXNoKGNvbm5lY3Rpb25MaXN0W2ldLm9mVGhlQ29uY2VwdElkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFjb25jZXB0TGlzdC5pbmNsdWRlcyhjb25uZWN0aW9uTGlzdFtpXS50b1RoZUNvbmNlcHRJZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uY2VwdExpc3QucHVzaChjb25uZWN0aW9uTGlzdFtpXS50b1RoZUNvbmNlcHRJZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeWllbGQgR2V0Q29uY2VwdEJ1bGsoY29uY2VwdExpc3QpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb25uZWN0aW9uTGlzdDtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBHZXRBbGxDb25uZWN0aW9uc09mQ29tcG9zaXRpb25PbmxpbmUoY29tcG9zaXRpb25faWRzID0gW10pIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIGNvbm5lY3Rpb25MaXN0ID0gW107XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKEJhc2VVcmwuR2V0QWxsQ29ubmVjdGlvbnNPZkNvbXBvc2l0aW9uQnVsa1VybCgpLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjb21wb3NpdGlvbl9pZHMpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBDb25uZWN0aW9uRGF0YS5BZGRDb25uZWN0aW9uKHJlc3VsdFtpXSk7XG4gICAgICAgICAgICAgICAgY29ubmVjdGlvbkxpc3QucHVzaChyZXN1bHRbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbm5lY3Rpb25MaXN0O1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgbWVzc2FnZTogJywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndW5leHBlY3RlZCBlcnJvcjogJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgQmFzZVVybCB9IGZyb20gXCIuLi9hcHBcIjtcbmV4cG9ydCBmdW5jdGlvbiBHZXRBbGxMaW5rZXJDb25uZWN0aW9uc0Zyb21UaGVDb25jZXB0KGNvbmNlcHRJZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgY29ubmVjdGlvbnMgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKEJhc2VVcmwuR2V0QWxsTGlua2VyQ29ubmVjdGlvbk9mQ29uY2VwdFVybCgpICsgYD9jb25jZXB0SWQ9JHtjb25jZXB0SWR9YCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbm5lY3Rpb24gPSByZXN1bHRbaV07XG4gICAgICAgICAgICAgICAgY29ubmVjdGlvbnMucHVzaChjb25uZWN0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb25uZWN0aW9ucztcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIG1lc3NhZ2U6ICcsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VuZXhwZWN0ZWQgZXJyb3I6ICcsIGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IENvbmNlcHRzRGF0YSB9IGZyb20gXCIuLy4uL0RhdGFTdHJ1Y3R1cmVzL0NvbmNlcHREYXRhXCI7XG5pbXBvcnQgeyBCYXNlVXJsIH0gZnJvbSBcIi4uL0RhdGFTdHJ1Y3R1cmVzL0Jhc2VVcmxcIjtcbmV4cG9ydCBmdW5jdGlvbiBHZXRDb25jZXB0KGlkKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBjb25jZXB0VXNlID0geWllbGQgQ29uY2VwdHNEYXRhLkdldENvbmNlcHQoaWQpO1xuICAgICAgICAgICAgaWYgKGNvbmNlcHRVc2UuaWQgIT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb25jZXB0VXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXR0aW5nIGRhdGEgZnJvbSBvbmxpbmVcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChCYXNlVXJsLkdldENvbmNlcHRVcmwoKSwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IGBpZD0ke2lkfWBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmlkID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBDb25jZXB0c0RhdGEuQWRkQ29uY2VwdChyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIG1lc3NhZ2U6ICcsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VuZXhwZWN0ZWQgZXJyb3I6ICcsIGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IENvbmNlcHRzRGF0YSB9IGZyb20gXCIuLy4uL0RhdGFTdHJ1Y3R1cmVzL0NvbmNlcHREYXRhXCI7XG5pbXBvcnQgeyBCYXNlVXJsIH0gZnJvbSBcIi4uL0RhdGFTdHJ1Y3R1cmVzL0Jhc2VVcmxcIjtcbmV4cG9ydCBmdW5jdGlvbiBHZXRDb25jZXB0QnVsayhjb25jZXB0SWRzKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBidWxrQ29uY2VwdEZldGNoID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbmNlcHRJZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgY29uY2VwdFVzZSA9IHlpZWxkIENvbmNlcHRzRGF0YS5HZXRDb25jZXB0KGNvbmNlcHRJZHNbaV0pO1xuICAgICAgICAgICAgICAgIGlmIChjb25jZXB0VXNlLmlkID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYnVsa0NvbmNlcHRGZXRjaC5wdXNoKGNvbmNlcHRJZHNbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChidWxrQ29uY2VwdEZldGNoLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJ1bGtDb25jZXB0RmV0Y2g7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImdldHRpbmcgZGF0YSBmcm9tIG9ubGluZVwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKEJhc2VVcmwuR2V0Q29uY2VwdEJ1bGtVcmwoKSwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShidWxrQ29uY2VwdEZldGNoKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbmNlcHQgPSByZXN1bHRbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBDb25jZXB0c0RhdGEuQWRkQ29uY2VwdChjb25jZXB0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgbWVzc2FnZTogJywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndW5leHBlY3RlZCBlcnJvcjogJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgQ29uY2VwdHNEYXRhIH0gZnJvbSBcIi4vLi4vRGF0YVN0cnVjdHVyZXMvQ29uY2VwdERhdGFcIjtcbmltcG9ydCB7IEJhc2VVcmwgfSBmcm9tIFwiLi4vRGF0YVN0cnVjdHVyZXMvQmFzZVVybFwiO1xuZXhwb3J0IGZ1bmN0aW9uIEdldENvbmNlcHRCeUNoYXJhY3RlckFuZFR5cGUoY2hhcmFjdGVyVmFsdWUsIHR5cGVJZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgY29uY2VwdCA9IHlpZWxkIENvbmNlcHRzRGF0YS5HZXRDb25jZXB0QnlDaGFyYWN0ZXJBbmRUeXBlTG9jYWwoY2hhcmFjdGVyVmFsdWUsIHR5cGVJZCk7XG4gICAgICAgICAgICBpZiAoY29uY2VwdCA9PSBudWxsIHx8IGNvbmNlcHQuaWQgPT0gMCkge1xuICAgICAgICAgICAgICAgIHZhciBqc29uID0ge1xuICAgICAgICAgICAgICAgICAgICAnY2hhcmFjdGVyX3ZhbHVlJzogYCR7Y2hhcmFjdGVyVmFsdWV9YCxcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGVfaWQnOiB0eXBlSWRcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHZhciB0b1NlbmRKc29uID0gSlNPTi5zdHJpbmdpZnkoanNvbik7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChCYXNlVXJsLkdldENvbmNlcHRCeUNoYXJhY3RlckFuZFR5cGVVcmwoKSwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogdG9TZW5kSnNvbixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBjb25jZXB0U3RyaW5nID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIGNvbmNlcHQgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICAgICAgICAgIENvbmNlcHRzRGF0YS5BZGRDb25jZXB0KGNvbmNlcHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbmNlcHQ7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBtZXNzYWdlOiAnLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1bmV4cGVjdGVkIGVycm9yOiAnLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBDb25jZXB0c0RhdGEgfSBmcm9tIFwiLi8uLi9EYXRhU3RydWN0dXJlcy9Db25jZXB0RGF0YVwiO1xuaW1wb3J0IHsgQmFzZVVybCB9IGZyb20gXCIuLi9EYXRhU3RydWN0dXJlcy9CYXNlVXJsXCI7XG5leHBvcnQgZnVuY3Rpb24gR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyVmFsdWUoY2hhcmFjdGVyVmFsdWUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChCYXNlVXJsLkdldENvbmNlcHRCeUNoYXJhY3RlclZhbHVlVXJsKCksIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogYGNoYXJhY3Rlcl92YWx1ZT0ke2NoYXJhY3RlclZhbHVlfWBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5pZCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgQ29uY2VwdHNEYXRhLkFkZENvbmNlcHQocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBtZXNzYWdlOiAnLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1bmV4cGVjdGVkIGVycm9yOiAnLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBCYXNlVXJsIH0gZnJvbSBcIi4uL0RhdGFTdHJ1Y3R1cmVzL0Jhc2VVcmxcIjtcbmltcG9ydCB7IENvbm5lY3Rpb25EYXRhIH0gZnJvbSBcIi4uL0RhdGFTdHJ1Y3R1cmVzL0Nvbm5lY3Rpb25EYXRhXCI7XG5leHBvcnQgZnVuY3Rpb24gR2V0Q29ubmVjdGlvbihpZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgY29ubmVjdGlvblVzZSA9IHlpZWxkIENvbm5lY3Rpb25EYXRhLkdldENvbm5lY3Rpb24oaWQpO1xuICAgICAgICAgICAgaWYgKGNvbm5lY3Rpb25Vc2UuaWQgIT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb25uZWN0aW9uVXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXR0aW5nIGNvbm5lY3Rpb24gZnJvbSBvbmxpbmVcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChCYXNlVXJsLkdldENvbm5lY3Rpb25VcmwoKSwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IGBpZD0ke2lkfWBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICBDb25uZWN0aW9uRGF0YS5BZGRDb25uZWN0aW9uKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSBjb25uZWN0aW9uIGFkZGVkXCIsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIG1lc3NhZ2U6ICcsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VuZXhwZWN0ZWQgZXJyb3I6ICcsIGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IEJhc2VVcmwgfSBmcm9tIFwiLi4vRGF0YVN0cnVjdHVyZXMvQmFzZVVybFwiO1xuZXhwb3J0IGZ1bmN0aW9uIEdldENvbm5lY3Rpb25PZlRoZUNvbmNlcHQodHlwZUlkLCBvZlRoZUNvbmNlcHRJZCwgdXNlcklkLCBpbnBhZ2UgPSAxMCwgcGFnZSA9IDEpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHVybGVuY29kZWQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgICAgICAgICB1cmxlbmNvZGVkLmFwcGVuZChcInR5cGVJZFwiLCBgJHt0eXBlSWR9YCk7XG4gICAgICAgICAgICB1cmxlbmNvZGVkLmFwcGVuZChcIm9mVGhlQ29uY2VwdElkXCIsIGAke29mVGhlQ29uY2VwdElkfWApO1xuICAgICAgICAgICAgdXJsZW5jb2RlZC5hcHBlbmQoXCJ1c2VySWRcIiwgYCR7dXNlcklkfWApO1xuICAgICAgICAgICAgdXJsZW5jb2RlZC5hcHBlbmQoXCJpbnBhZ2VcIiwgYCR7aW5wYWdlfWApO1xuICAgICAgICAgICAgdXJsZW5jb2RlZC5hcHBlbmQoXCJwYWdlXCIsIGAke3BhZ2V9YCk7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKEJhc2VVcmwuR2V0QWxsQ29ubmVjdGlvbnNPZkNvbmNlcHRVcmwoKSwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiB1cmxlbmNvZGVkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIG1lc3NhZ2U6ICcsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VuZXhwZWN0ZWQgZXJyb3I6ICcsIGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IFJlc2VydmVkSWRzIH0gZnJvbSBcIi4uL0RhdGFTdHJ1Y3R1cmVzL1Jlc2VydmVkSWRzXCI7XG5pbXBvcnQgeyBCYXNlVXJsIH0gZnJvbSBcIi4uL0RhdGFTdHJ1Y3R1cmVzL0Jhc2VVcmxcIjtcbmV4cG9ydCBmdW5jdGlvbiBHZXRSZXNlcnZlZElkcygpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChCYXNlVXJsLkdldFJlc2VydmVkSWRVcmwoKSwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgUmVzZXJ2ZWRJZHMuQWRkSWQocmVzdWx0W2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIG1lc3NhZ2U6ICcsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VuZXhwZWN0ZWQgZXJyb3I6ICcsIGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJleHBvcnQgY2xhc3MgQmFzZVVybCB7XG4gICAgLy8gc3RhdGljIEdldENvbmNlcHRVcmw6c3RyaW5nID0gdGhpcy5CQVNFX1VSTCArICcvYXBpL2dldENvbmNlcHQnO1xuICAgIHN0YXRpYyBHZXRDb25jZXB0VXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5CQVNFX1VSTCArICcvYXBpL2dldENvbmNlcHQnO1xuICAgIH1cbiAgICBzdGF0aWMgR2V0Q29ubmVjdGlvblVybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuQkFTRV9VUkwgKyAnL2FwaS9nZXQtY29ubmVjdGlvbi1ieS1pZCc7XG4gICAgfVxuICAgIHN0YXRpYyBHZXRDb25jZXB0QnVsa1VybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuQkFTRV9VUkwgKyAnL2FwaS9nZXRfY29uY2VwdF9idWxrJztcbiAgICB9XG4gICAgc3RhdGljIEdldEFsbENvbmNlcHRzT2ZVc2VyVXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5CQVNFX1VSTCArICcvYXBpL2dldF9hbGxfY29uY2VwdHNfb2ZfdXNlcic7XG4gICAgfVxuICAgIHN0YXRpYyBHZXRBbGxDb25uZWN0aW9uc09mVXNlclVybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuQkFTRV9VUkwgKyAnL2FwaS9nZXRfYWxsX2Nvbm5lY3Rpb25zX29mX3VzZXInO1xuICAgIH1cbiAgICBzdGF0aWMgR2V0QWxsQ29ubmVjdGlvbnNPZkNvbXBvc2l0aW9uVXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5CQVNFX1VSTCArICcvYXBpL2dldF9hbGxfY29ubmVjdGlvbnNfb2ZfY29tcG9zaXRpb24nO1xuICAgIH1cbiAgICBzdGF0aWMgR2V0QWxsQ29ubmVjdGlvbnNPZkNvbXBvc2l0aW9uQnVsa1VybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuQkFTRV9VUkwgKyAnL2FwaS9nZXRfYWxsX2Nvbm5lY3Rpb25zX29mX2NvbXBvc2l0aW9uX2J1bGsnO1xuICAgIH1cbiAgICBzdGF0aWMgR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyVmFsdWVVcmwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLkJBU0VfVVJMICsgJy9hcGkvZ2V0X2NvbmNlcHRfYnlfY2hhcmFjdGVyX3ZhbHVlJztcbiAgICB9XG4gICAgc3RhdGljIEdldENvbmNlcHRCeUNoYXJhY3RlckFuZFR5cGVVcmwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLkJBU0VfVVJMICsgJy9hcGkvZ2V0X2NvbmNlcHRfYnlfY2hhcmFjdGVyX2FuZF90eXBlJztcbiAgICB9XG4gICAgc3RhdGljIEdldENoYXJhY3RlckJ5Q2hhcmFjdGVyVXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5CQVNFX1VSTCArICcvYXBpL2dldF9jaGFyYWN0ZXJfYnlfY2hhcmFjdGVyJztcbiAgICB9XG4gICAgc3RhdGljIEdldEFsbENvbmNlcHRzQnlUeXBlVXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5CQVNFX1VSTCArICcvYXBpL2dldF9hbGxfY29uY2VwdHNfYnlfdHlwZSc7XG4gICAgfVxuICAgIHN0YXRpYyBHZXRBbGxDb25uZWN0aW9uc09mQ29uY2VwdFVybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuQkFTRV9VUkwgKyAnL2FwaS9nZXQtbGluay1jb25uZWN0aW9ucyc7XG4gICAgfVxuICAgIHN0YXRpYyBHZXRBbGxBaURhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLkFJX1VSTCArICcvYXBpL2dldF9yYW5rZWRfdHlwZV9pZD9pbnBhZ2U9NScgfHwgcHJvY2Vzcy5lbnYuQUlfVVJMIHx8ICdodHRwczovL2FpLmZyZWVzY2hlbWEuY29tL2FwaS9nZXRfcmFua2VkX3R5cGVfaWQ/aW5wYWdlPTUwMCc7XG4gICAgfVxuICAgIHN0YXRpYyBHZXRBbGxMaW5rZXJDb25uZWN0aW9uT2ZDb25jZXB0VXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5CQVNFX1VSTCArICcvYXBpL2dldC1hbGwtbGlua2Vycy1mcm9tLWNvbmNlcHQnO1xuICAgIH1cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLy8vLy8vLy8vLy8vLy8vIEFQSSBGb3IgUmVzZXJ2ZWQgSWRzIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIHN0YXRpYyBHZXRSZXNlcnZlZElkVXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5CQVNFX1VSTCArICcvYXBpL2dldF9yZXNlcnZlZF9pZHMnO1xuICAgIH1cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vLy8vLy8vLy8vLy8vLy9BUEkgRm9yIENyZWF0aW5nIERhdGEgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICBzdGF0aWMgQ3JlYXRlVGhlVGV4dERhdGFVcmwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLkJBU0VfVVJMICsgJy9hcGkvY3JlYXRlX3RleHRfZGF0YSc7XG4gICAgfVxuICAgIHN0YXRpYyBDcmVhdGVUaGVDaGFyYWN0ZXJEYXRhVXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5CQVNFX1VSTCArICcvYXBpL2NyZWF0ZV9jaGFyYWN0ZXJfZGF0YSc7XG4gICAgfVxuICAgIHN0YXRpYyBDcmVhdGVUaGVDb25jZXB0VXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5CQVNFX1VSTCArICcvYXBpL2NyZWF0ZV90aGVfY29uY2VwdCc7XG4gICAgfVxuICAgIHN0YXRpYyBDcmVhdGVUaGVDb25uZWN0aW9uVXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5CQVNFX1VSTCArICcvYXBpL2NyZWF0ZV90aGVfY29ubmVjdGlvbic7XG4gICAgfVxufVxuQmFzZVVybC5CQVNFX1VSTCA9IFwiXCI7XG5CYXNlVXJsLkFJX1VSTCA9IFwiaHR0cHM6Ly9haS5mcmVlc2NoZW1hLmNvbVwiO1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBJZGVudGlmaWVyRmxhZ3MgfSBmcm9tIFwiLi9JZGVudGlmaWVyRmxhZ3NcIjtcbmltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi9Ob2RlXCI7XG5leHBvcnQgY2xhc3MgQmluYXJ5Q2hhcmFjdGVyVHJlZSB7XG4gICAgc3RhdGljIHdhaXRGb3JEYXRhVG9Mb2FkKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRmxhZyhyZXNvbHZlKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwibm90XCIpO1xuICAgICAgICAgICAgICAgIH0sIDI1MDAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIGNoZWNrRmxhZyhyZXNvbHZlKSB7XG4gICAgICAgIGlmIChJZGVudGlmaWVyRmxhZ3MuaXNDaGFyYWN0ZXJMb2FkZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKFwiZG9uZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoQmluYXJ5Q2hhcmFjdGVyVHJlZS5jaGVja0ZsYWcsIDEwMDAsIHJlc29sdmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIDtcbiAgICBzdGF0aWMgYWRkTm9kZVRvVHJlZShub2RlKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGFyYWN0ZXJSb290ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJhY3RlclJvb3QgPSBub2RlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYXJhY3RlclJvb3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJhY3RlclJvb3QgPSB0aGlzLmNoYXJhY3RlclJvb3QuYWRkQ2hhcmFjdGVyTm9kZShub2RlLCB0aGlzLmNoYXJhY3RlclJvb3QsIHRoaXMuY2hhcmFjdGVyUm9vdC5oZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhcmFjdGVyUm9vdDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyByZW1vdmVOb2RlQnlDaGFyYWN0ZXIoY2hhcmFjdGVyLCBpZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hhcmFjdGVyUm9vdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyUm9vdC5yZW1vdmVOb2RlV2l0aFZhcmlhbnRzKHRoaXMuY2hhcmFjdGVyUm9vdCwgY2hhcmFjdGVyLCBpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgY291bnROdW1iZXJPZk5vZGVzKCkge1xuICAgICAgICBpZiAodGhpcy5jaGFyYWN0ZXJSb290KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFyYWN0ZXJSb290LmNvdW50Tm9kZUJlbG93KHRoaXMuY2hhcmFjdGVyUm9vdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIHN0YXRpYyBhZGRDb25jZXB0VG9UcmVlKGNvbmNlcHQpIHtcbiAgICAgICAgaWYgKGNvbmNlcHQuY2hhcmFjdGVyVmFsdWUgIT0gXCJcIikge1xuICAgICAgICAgICAgdmFyIG5vZGUgPSBuZXcgTm9kZShjb25jZXB0LmNoYXJhY3RlclZhbHVlLCBjb25jZXB0LCBudWxsLCBudWxsKTtcbiAgICAgICAgICAgIHRoaXMuYWRkTm9kZVRvVHJlZShub2RlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgZ2V0Tm9kZUZyb21UcmVlKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLmNoYXJhY3RlclJvb3QpIHtcbiAgICAgICAgICAgIHZhciBOb2RlID0gdGhpcy5jaGFyYWN0ZXJSb290LmdldENoYXJhY3RlckZyb21Ob2RlKHZhbHVlLCB0aGlzLmNoYXJhY3RlclJvb3QpO1xuICAgICAgICAgICAgcmV0dXJuIE5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhcmFjdGVyUm9vdDtcbiAgICB9XG4gICAgc3RhdGljIGdldENoYXJhY3RlckFuZFR5cGVGcm9tVHJlZSh2YWx1ZSwgdHlwZUlkKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBkYXRhID0geWllbGQgdGhpcy53YWl0Rm9yRGF0YVRvTG9hZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuY2hhcmFjdGVyUm9vdCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VhcmNoaW5nIC4uLi4uLi4uLi4uLi4uLi4uXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB2YXIgTm9kZSA9IHRoaXMuY2hhcmFjdGVyUm9vdC5nZXRGcm9tTm9kZVdpdGhDaGFyYWN0ZXJBbmRUeXBlKHZhbHVlLCB0eXBlSWQsIHRoaXMuY2hhcmFjdGVyUm9vdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFyYWN0ZXJSb290O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIHJlbW92ZUNvbmNlcHRDaGFyYWN0ZXIoaWQpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hhcmFjdGVyUm9vdCkge1xuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJSb290ID0gdGhpcy5jaGFyYWN0ZXJSb290LnJlbW92ZU5vZGUodGhpcy5jaGFyYWN0ZXJSb290LCBpZCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5CaW5hcnlDaGFyYWN0ZXJUcmVlLmNoYXJhY3RlclJvb3QgPSBudWxsO1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBCaW5hcnlDaGFyYWN0ZXJUcmVlIH0gZnJvbSBcIi4vQmluYXJ5Q2hhcmFjdGVyVHJlZVwiO1xuaW1wb3J0IHsgTm9kZSB9IGZyb20gXCIuL05vZGVcIjtcbmltcG9ydCB7IElkZW50aWZpZXJGbGFncyB9IGZyb20gXCIuL0lkZW50aWZpZXJGbGFnc1wiO1xuZXhwb3J0IGNsYXNzIEJpbmFyeVRyZWUge1xuICAgIHN0YXRpYyBhZGROb2RlVG9UcmVlKG5vZGUpIHtcbiAgICAgICAgaWYgKHRoaXMucm9vdCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnJvb3QgPSBub2RlO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucm9vdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucm9vdCA9IHRoaXMucm9vdC5hZGROb2RlKG5vZGUsIHRoaXMucm9vdCwgdGhpcy5yb290LmhlaWdodCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIHdhaXRGb3JEYXRhVG9Mb2FkKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRmxhZyhyZXNvbHZlKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwibm90XCIpO1xuICAgICAgICAgICAgICAgIH0sIDI1MDAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIGNoZWNrRmxhZyhyZXNvbHZlKSB7XG4gICAgICAgIGlmIChJZGVudGlmaWVyRmxhZ3MuaXNEYXRhTG9hZGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShcImRvbmVcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KEJpbmFyeVRyZWUuY2hlY2tGbGFnLCAxMDAwLCByZXNvbHZlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICA7XG4gICAgc3RhdGljIGFkZENvbmNlcHRUb1RyZWUoY29uY2VwdCkge1xuICAgICAgICB2YXIgbm9kZSA9IG5ldyBOb2RlKGNvbmNlcHQuaWQsIGNvbmNlcHQsIG51bGwsIG51bGwpO1xuICAgICAgICB2YXIgY2hhcmFjdGVyTm9kZSA9IG5ldyBOb2RlKGNvbmNlcHQuY2hhcmFjdGVyVmFsdWUsIGNvbmNlcHQsIG51bGwsIG51bGwpO1xuICAgICAgICBCaW5hcnlDaGFyYWN0ZXJUcmVlLmFkZE5vZGVUb1RyZWUoY2hhcmFjdGVyTm9kZSk7XG4gICAgICAgIHRoaXMuYWRkTm9kZVRvVHJlZShub2RlKTtcbiAgICB9XG4gICAgc3RhdGljIGdldE5vZGVGcm9tVHJlZShpZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHlpZWxkIHRoaXMud2FpdEZvckRhdGFUb0xvYWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnJvb3QpIHtcbiAgICAgICAgICAgICAgICB2YXIgTm9kZSA9IHRoaXMucm9vdC5nZXRGcm9tTm9kZShpZCwgdGhpcy5yb290KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gTm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIHJlbW92ZU5vZGVGcm9tVHJlZShpZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucm9vdCkge1xuICAgICAgICAgICAgICAgIHRoaXMucm9vdCA9IHRoaXMucm9vdC5yZW1vdmVOb2RlKHRoaXMucm9vdCwgaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIGNvdW50TnVtYmVyT2ZOb2RlcygpIHtcbiAgICAgICAgaWYgKHRoaXMucm9vdCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucm9vdC5jb3VudE5vZGVCZWxvdyh0aGlzLnJvb3QpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbn1cbkJpbmFyeVRyZWUucm9vdCA9IG51bGw7XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IENvbmNlcHQgfSBmcm9tIFwiLi4vRGF0YVN0cnVjdHVyZXMvQ29uY2VwdFwiO1xuaW1wb3J0IHsgSWRlbnRpZmllckZsYWdzIH0gZnJvbSBcIi4vSWRlbnRpZmllckZsYWdzXCI7XG5pbXBvcnQgeyBOb2RlIH0gZnJvbSBcIi4vTm9kZVwiO1xuZXhwb3J0IGNsYXNzIEJpbmFyeVR5cGVUcmVlIHtcbiAgICBzdGF0aWMgYWRkTm9kZVRvVHJlZShub2RlKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50eXBlUm9vdCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHR5cGUgcm9vdCBcIiwgbm9kZSk7XG4gICAgICAgICAgICAgICAgdGhpcy50eXBlUm9vdCA9IG5vZGU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudHlwZVJvb3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGVSb290ID0gdGhpcy50eXBlUm9vdC5hZGRUeXBlTm9kZShub2RlLCB0aGlzLnR5cGVSb290LCB0aGlzLnR5cGVSb290LmhlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50eXBlUm9vdDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBhZGRDb25jZXB0VG9UcmVlKGNvbmNlcHQpIHtcbiAgICAgICAgaWYgKGNvbmNlcHQudHlwZUlkICE9IDApIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gbmV3IE5vZGUoY29uY2VwdC50eXBlSWQsIGNvbmNlcHQsIG51bGwsIG51bGwpO1xuICAgICAgICAgICAgdGhpcy5hZGROb2RlVG9UcmVlKG5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyByZW1vdmVUeXBlQ29uY2VwdCh0eXBlSWQsIGlkKSB7XG4gICAgICAgIGlmICh0aGlzLnR5cGVSb290KSB7XG4gICAgICAgICAgICB0aGlzLnR5cGVSb290ID0gdGhpcy50eXBlUm9vdC5yZW1vdmVOb2RlV2l0aFZhcmlhbnRzKHRoaXMudHlwZVJvb3QsIHR5cGVJZCwgaWQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBnZXROb2RlRnJvbVRyZWUoaWQpIHtcbiAgICAgICAgaWYgKHRoaXMudHlwZVJvb3QpIHtcbiAgICAgICAgICAgIHZhciBOb2RlID0gdGhpcy50eXBlUm9vdC5nZXRGcm9tTm9kZShpZCwgdGhpcy50eXBlUm9vdCk7XG4gICAgICAgICAgICByZXR1cm4gTm9kZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50eXBlUm9vdDtcbiAgICB9XG4gICAgc3RhdGljIGdldFR5cGVWYXJpYW50c0Zyb21UcmVlKHR5cGVJZCkge1xuICAgICAgICB2YXIgTm9kZSA9IHRoaXMuZ2V0Tm9kZUZyb21UcmVlKHR5cGVJZCk7XG4gICAgICAgIHZhciBjb25jZXB0cyA9IFtdO1xuICAgICAgICBpZiAoTm9kZSkge1xuICAgICAgICAgICAgY29uY2VwdHMucHVzaChOb2RlID09PSBudWxsIHx8IE5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IE5vZGUudmFsdWUpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOb2RlLnZhcmlhbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uY2VwdHMucHVzaChOb2RlLnZhcmlhbnRzW2ldLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb25jZXB0cztcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgd2FpdEZvckRhdGFUb0xvYWQoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tGbGFnKHJlc29sdmUpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJub3RcIik7XG4gICAgICAgICAgICAgICAgfSwgMjUwMDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgY2hlY2tGbGFnKHJlc29sdmUpIHtcbiAgICAgICAgaWYgKElkZW50aWZpZXJGbGFncy5pc1R5cGVMb2FkZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKFwiZG9uZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoQmluYXJ5VHlwZVRyZWUuY2hlY2tGbGFnLCAxMDAwLCByZXNvbHZlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICA7XG4gICAgc3RhdGljIGdldFR5cGVWYXJpYW50c0Zyb21UcmVlV2l0aFVzZXJJZCh0eXBlSWQsIHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdmFyIGNvbmNlcHRzID0gW107XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBkYXRhID0geWllbGQgdGhpcy53YWl0Rm9yRGF0YVRvTG9hZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb25jZXB0cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBOb2RlID0gdGhpcy5nZXROb2RlRnJvbVRyZWUodHlwZUlkKTtcbiAgICAgICAgICAgIGlmIChOb2RlKSB7XG4gICAgICAgICAgICAgICAgaWYgKE5vZGUudmFsdWUudXNlcklkID09IHVzZXJJZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25jZXB0cy5wdXNoKE5vZGUgPT09IG51bGwgfHwgTm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogTm9kZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTm9kZS52YXJpYW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoTm9kZS52YXJpYW50c1tpXS52YWx1ZS51c2VySWQgPT0gdXNlcklkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNQcmVzZW50ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbmNlcHRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmNlcHRzW2pdLmlkID09IE5vZGUudmFyaWFudHNbaV0udmFsdWUuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNQcmVzZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzUHJlc2VudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmNlcHRzLnB1c2goTm9kZS52YXJpYW50c1tpXS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29uY2VwdHM7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0VHlwZVZhcmlhbnRzV2l0aENoYXJhY3RlclZhbHVlKGNoYXJhY3RlclZhbHVlLCB0eXBlSWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHZhciBjb25jZXB0ID0gbmV3IENvbmNlcHQoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgXCIwXCIsIDAsIDAsIDAsIDAsIDAsIDAsIGZhbHNlKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB5aWVsZCB0aGlzLndhaXRGb3JEYXRhVG9Mb2FkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbmNlcHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgTm9kZSA9IHRoaXMuZ2V0Tm9kZUZyb21UcmVlKHR5cGVJZCk7XG4gICAgICAgICAgICBpZiAoTm9kZSkge1xuICAgICAgICAgICAgICAgIGlmIChOb2RlLnZhbHVlLmNoYXJhY3RlclZhbHVlID09IGNoYXJhY3RlclZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmNlcHQgPSBOb2RlLnZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE5vZGUudmFyaWFudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKE5vZGUudmFyaWFudHNbaV0udmFsdWUuY2hhcmFjdGVyVmFsdWUgPT0gY2hhcmFjdGVyVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmNlcHQgPSBOb2RlLnZhcmlhbnRzW2ldLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbmNlcHQ7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgY291bnROdW1iZXJPZk5vZGVzKCkge1xuICAgICAgICBpZiAodGhpcy50eXBlUm9vdCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHlwZVJvb3QuY291bnROb2RlQmVsb3codGhpcy50eXBlUm9vdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxufVxuQmluYXJ5VHlwZVRyZWUudHlwZVJvb3QgPSBudWxsO1xuIiwiaW1wb3J0IHsgVGhlQ2hhcmFjdGVyIH0gZnJvbSBcIi4vVGhlQ2hhcmFjdGVyXCI7XG5leHBvcnQgY2xhc3MgQ2hhcmFjdGVyUmVwb3NpdG9yeSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiY2hhcmFjdGVyIFJlcG9zaXRvcnlcIjtcbiAgICB9XG4gICAgc3RhdGljIEFkZENoYXJhY3RlcihjaGFyYWN0ZXIpIHtcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJEYXRhW2NoYXJhY3Rlci5pZF0gPSBjaGFyYWN0ZXI7XG4gICAgfVxuICAgIHN0YXRpYyBHZXRDaGFyYWN0ZXIodmFsdWUpIHtcbiAgICAgICAgdmFyIHRoZUNoYXJhY3RlciA9IG5ldyBUaGVDaGFyYWN0ZXIoMCwgXCIwXCIsIDAsIDAsIDAsIDAsIDAsIDAsIFwiMFwiLCBmYWxzZSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGFyYWN0ZXJEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGFyYWN0ZXJEYXRhW2ldLmRhdGEgPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGVDaGFyYWN0ZXIgPSB0aGlzLmNoYXJhY3RlckRhdGFbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoZUNoYXJhY3RlcjtcbiAgICB9XG59XG5DaGFyYWN0ZXJSZXBvc2l0b3J5LmNoYXJhY3RlckRhdGEgPSBbXTtcbiIsImV4cG9ydCBjbGFzcyBDb25jZXB0IHtcbiAgICBjb25zdHJ1Y3RvcihpZCwgdXNlcklkLCB0eXBlSWQsIHR5cGVVc2VySWQsIGNhdGVnb3J5SWQsIGNhdGVnb3J5VXNlcklkLCByZWZlcmVudElkLCByZWZlcmVudFVzZXJJZCwgY2hhcmFjdGVyVmFsdWUsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSWQsIHNlc3Npb25Vc2VySWQsIGlzTmV3ID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5pc1RlbXAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdGhpcy50eXBlSWQgPSB0eXBlSWQ7XG4gICAgICAgIHRoaXMudHlwZVVzZXJJZCA9IHR5cGVVc2VySWQ7XG4gICAgICAgIHRoaXMuY2F0ZWdvcnlJZCA9IGNhdGVnb3J5SWQ7XG4gICAgICAgIHRoaXMuY2F0ZWdvcnlVc2VySWQgPSBjYXRlZ29yeVVzZXJJZDtcbiAgICAgICAgdGhpcy5yZWZlcmVudElkID0gcmVmZXJlbnRJZDtcbiAgICAgICAgdGhpcy5yZWZlcmVudCA9IHJlZmVyZW50SWQ7XG4gICAgICAgIHRoaXMucmVmZXJlbnRVc2VySWQgPSByZWZlcmVudFVzZXJJZDtcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJWYWx1ZSA9IGAke2NoYXJhY3RlclZhbHVlfWA7XG4gICAgICAgIHRoaXMuc2VjdXJpdHlJZCA9IHNlY3VyaXR5SWQ7XG4gICAgICAgIHRoaXMuc2VjdXJpdHlVc2VySWQgPSBzZWN1cml0eVVzZXJJZDtcbiAgICAgICAgdGhpcy5hY2Nlc3NJZCA9IGFjY2Vzc0lkO1xuICAgICAgICB0aGlzLmFjY2Vzc1VzZXJJZCA9IGFjY2Vzc1VzZXJJZDtcbiAgICAgICAgdGhpcy5zZXNzaW9uSWQgPSBzZXNzaW9uSWQ7XG4gICAgICAgIHRoaXMuc2Vzc2lvblVzZXJJZCA9IHNlc3Npb25Vc2VySWQ7XG4gICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIHRoaXMudHlwZSA9IG51bGw7XG4gICAgICAgIHRoaXMuaXNOZXcgPSBpc05ldztcbiAgICAgICAgLy8gQ29uY2VwdHNEYXRhLkFkZENvbmNlcHQodGhpcyk7XG4gICAgfVxuICAgIGdldFR5cGUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudHlwZUlkKTtcbiAgICB9XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IENvbmNlcHQgfSBmcm9tIFwiLi9Db25jZXB0XCI7XG5pbXBvcnQgeyByZW1vdmVGcm9tRGF0YWJhc2UsIHN0b3JlVG9EYXRhYmFzZSB9IGZyb20gXCIuLi9EYXRhYmFzZS9pbmRleGVkZGJcIjtcbmltcG9ydCB7IEJpbmFyeVRyZWUgfSBmcm9tIFwiLi9CaW5hcnlUcmVlXCI7XG5pbXBvcnQgeyBCaW5hcnlDaGFyYWN0ZXJUcmVlIH0gZnJvbSBcIi4vQmluYXJ5Q2hhcmFjdGVyVHJlZVwiO1xuaW1wb3J0IHsgQmluYXJ5VHlwZVRyZWUgfSBmcm9tIFwiLi9CaW5hcnlUeXBlVHJlZVwiO1xuZXhwb3J0IGNsYXNzIENvbmNlcHRzRGF0YSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiY29uY2VwdHNBcnJheVwiO1xuICAgIH1cbiAgICBzdGF0aWMgQ2hlY2tDb250YWlucyhjb25jZXB0KSB7XG4gICAgICAgIHZhciBjb250YWlucyA9IGZhbHNlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29uY2VwdHNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29uY2VwdHNBcnJheVtpXS5pZCA9PSBjb25jZXB0LmlkKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbnMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250YWlucztcbiAgICB9XG4gICAgc3RhdGljIEFkZENvbmNlcHQoY29uY2VwdCkge1xuICAgICAgICBpZiAoY29uY2VwdC5pZCA+IDApIHtcbiAgICAgICAgICAgIC8vdmFyIGNvbnRhaW5zID0gdGhpcy5DaGVja0NvbnRhaW5zKGNvbmNlcHQpO1xuICAgICAgICAgICAgLy8gdGhpcy5jb25jZXB0RGljdGlvbmFyeVtjb25jZXB0LmlkXSA9IGNvbmNlcHQ7XG4gICAgICAgICAgICAvLyAgICBpZihjb250YWlucyl7XG4gICAgICAgICAgICAvLyAgIHRoaXMuUmVtb3ZlQ29uY2VwdChjb25jZXB0KTtcbiAgICAgICAgICAgIC8vICB9XG4gICAgICAgICAgICBzdG9yZVRvRGF0YWJhc2UoXCJjb25jZXB0XCIsIGNvbmNlcHQpO1xuICAgICAgICAgICAgQmluYXJ5VHJlZS5hZGRDb25jZXB0VG9UcmVlKGNvbmNlcHQpO1xuICAgICAgICAgICAgQmluYXJ5VHlwZVRyZWUuYWRkQ29uY2VwdFRvVHJlZShjb25jZXB0KTtcbiAgICAgICAgICAgIEJpbmFyeUNoYXJhY3RlclRyZWUuYWRkQ29uY2VwdFRvVHJlZShjb25jZXB0KTtcbiAgICAgICAgICAgIHRoaXMuY29uY2VwdHNBcnJheS5wdXNoKGNvbmNlcHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBBZGRDb25jZXB0VGVtcG9yYXJ5KGNvbmNlcHQpIHtcbiAgICAgICAgdmFyIGNvbnRhaW5zID0gdGhpcy5DaGVja0NvbnRhaW5zKGNvbmNlcHQpO1xuICAgICAgICB0aGlzLmNvbmNlcHREaWN0aW9uYXJ5W2NvbmNlcHQuaWRdID0gY29uY2VwdDtcbiAgICAgICAgaWYgKGNvbnRhaW5zKSB7XG4gICAgICAgICAgICB0aGlzLlJlbW92ZUNvbmNlcHQoY29uY2VwdCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb25jZXB0c0FycmF5LnB1c2goY29uY2VwdCk7XG4gICAgfVxuICAgIHN0YXRpYyBSZW1vdmVDb25jZXB0KGNvbmNlcHQpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbmNlcHRzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmNlcHRzQXJyYXlbaV0uaWQgPT0gY29uY2VwdC5pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29uY2VwdHNBcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVtb3ZlRnJvbURhdGFiYXNlKFwiY29uY2VwdFwiLCBjb25jZXB0LmlkKTtcbiAgICB9XG4gICAgc3RhdGljIEdldENvbmNlcHQoaWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHZhciBteUNvbmNlcHQgPSBuZXcgQ29uY2VwdCgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCBcIjBcIiwgMCwgMCwgMCwgMCwgMCwgMCwgZmFsc2UpO1xuICAgICAgICAgICAgdmFyIG5vZGUgPSB5aWVsZCBCaW5hcnlUcmVlLmdldE5vZGVGcm9tVHJlZShpZCk7XG4gICAgICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCB8fCBub2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBub2RlLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJldHVybmVkQ29uY2VwdCA9IG5vZGUudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKHJldHVybmVkQ29uY2VwdCkge1xuICAgICAgICAgICAgICAgICAgICBteUNvbmNlcHQgPSByZXR1cm5lZENvbmNlcHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYobXlDb25jZXB0LmlkID09IDAgfHwgbXlDb25jZXB0ID09IG51bGwpe1xuICAgICAgICAgICAgLy8gICAgIGZvcih2YXIgaT0wOyBpPHRoaXMuY29uY2VwdHNBcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAvLyAgICAgICAgIGlmKHRoaXMuY29uY2VwdHNBcnJheVtpXS5pZCA9PSBpZCl7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBteUNvbmNlcHQgPSB0aGlzLmNvbmNlcHRzQXJyYXlbaV07XG4gICAgICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICByZXR1cm4gbXlDb25jZXB0O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIEdldENvbmNlcHRCeUNoYXJhY3RlcihjaGFyYWN0ZXJWYWx1ZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdmFyIGNvbmNlcHQgPSBuZXcgQ29uY2VwdCgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCBcIjBcIiwgMCwgMCwgMCwgMCwgMCwgMCwgZmFsc2UpO1xuICAgICAgICAgICAgLy8gIGZvcih2YXIgaT0wOyBpPHRoaXMuY29uY2VwdHNBcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAvLyAgICAgIGlmKHRoaXMuY29uY2VwdHNBcnJheVtpXS5jaGFyYWN0ZXJWYWx1ZSA9PSBjaGFyYWN0ZXJWYWx1ZSl7XG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbmNlcHQgPSB0aGlzLmNvbmNlcHRzQXJyYXlbaV07XG4gICAgICAgICAgICAvLyAgICAgIH1cbiAgICAgICAgICAgIC8vICB9XG4gICAgICAgICAgICB2YXIgTm9kZSA9IEJpbmFyeUNoYXJhY3RlclRyZWUuZ2V0Tm9kZUZyb21UcmVlKGNoYXJhY3RlclZhbHVlKTtcbiAgICAgICAgICAgIGlmIChOb2RlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnb3QgdGhlIGNoYXJhY3RlclwiKTtcbiAgICAgICAgICAgICAgICBjb25jZXB0ID0gTm9kZS52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNoYXJhY3RlclZhbHVlKTtcbiAgICAgICAgICAgIC8vIHZhciBOb2RlID0gQmluYXJ5Q2hhcmFjdGVyVHJlZS5nZXROb2RlRnJvbVRyZWUoY2hhcmFjdGVyVmFsdWUpO1xuICAgICAgICAgICAgLy8gaWYoTm9kZSl7XG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coTm9kZS52YWx1ZSk7XG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIE5vZGUudmFsdWU7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICByZXR1cm4gY29uY2VwdDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBHZXRDb25jZXB0QnlDaGFyYWN0ZXJBbmRUeXBlTG9jYWwoY2hhcmFjdGVyX3ZhbHVlLCB0eXBlSWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHZhciBjb25jZXB0ID0gbmV3IENvbmNlcHQoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgXCIwXCIsIDAsIDAsIDAsIDAsIDAsIDAsIGZhbHNlKTtcbiAgICAgICAgICAgIC8vdmFyIE5vZGUgPSBhd2FpdCBCaW5hcnlDaGFyYWN0ZXJUcmVlLmdldENoYXJhY3RlckFuZFR5cGVGcm9tVHJlZShjaGFyYWN0ZXJfdmFsdWUsdHlwZUlkKTtcbiAgICAgICAgICAgIGNvbmNlcHQgPSB5aWVsZCBCaW5hcnlUeXBlVHJlZS5nZXRUeXBlVmFyaWFudHNXaXRoQ2hhcmFjdGVyVmFsdWUoY2hhcmFjdGVyX3ZhbHVlLCB0eXBlSWQpO1xuICAgICAgICAgICAgLy8gaWYoTm9kZSl7XG4gICAgICAgICAgICAvLyAgICAgY29uY2VwdCA9ICBOb2RlLnZhbHVlO1xuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiZm91bmQgdGhlIG91dHB1dFwiKTtcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhjb25jZXB0KTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIHJldHVybiBjb25jZXB0O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIEdldENvbmNlcHRzQnlUeXBlSWQodHlwZUlkKSB7XG4gICAgICAgIHZhciBteUNvbmNlcHQ7XG4gICAgICAgIGxldCBDb25jZXB0TGlzdCA9IFtdO1xuICAgICAgICBteUNvbmNlcHQgPSBudWxsO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29uY2VwdHNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29uY2VwdHNBcnJheVtpXS50eXBlSWQgPT0gdHlwZUlkKSB7XG4gICAgICAgICAgICAgICAgQ29uY2VwdExpc3QucHVzaCh0aGlzLmNvbmNlcHRzQXJyYXlbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vICBnZXRGcm9tRGF0YWJhc2VXaXRoVHlwZShcImNvbmNlcHRcIixcInR5cGVJZFwiLHR5cGVJZCkudGhlbihjb25jZXB0TGlzdD0+e1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJ0aGkgc2lzIG15IGxpc3RcIik7XG4gICAgICAgIC8vICB9KTtcbiAgICAgICAgLy8gICB2YXIgZGJDb25jZXB0TGlzdCA9IGF3YWl0IGdldEZyb21EYXRhYmFzZVdpdGhUeXBlT2xkKFwiY29uY2VwdFwiLFwidHlwZUlkXCIsIHR5cGVJZCk7XG4gICAgICAgIC8vICAgY29uc29sZS5sb2coZGJDb25jZXB0TGlzdCk7XG4gICAgICAgIC8vICAgaWYoQXJyYXkuaXNBcnJheShkYkNvbmNlcHRMaXN0KSl7XG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coZGJDb25jZXB0TGlzdCk7XG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coZGJDb25jZXB0TGlzdC5sZW5ndGgpO1xuICAgICAgICAvLyAgZm9yKHZhciBpPTA7IGk8IGRiQ29uY2VwdExpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJoZXJlIHRvIHB1c2ggZmlyc3RzXCIpO1xuICAgICAgICAvLyAgICAgdmFyIGNvbnRhaW5zOiBib29sZWFuID0gZmFsc2U7XG4gICAgICAgIC8vICAgICBmb3IodmFyIGo9MDsgajwgQ29uY2VwdExpc3QubGVuZ3RoOyBqKyspe1xuICAgICAgICAvLyAgICAgICAgIGlmKGRiQ29uY2VwdExpc3RbaV0uaWQgPT0gQ29uY2VwdExpc3Rbal0uaWQpe1xuICAgICAgICAvLyAgICAgICAgICAgICBjb250YWlucyA9IHRydWU7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJoZXJlIHRvIHB1c2hcIik7XG4gICAgICAgIC8vICAgICBpZighY29udGFpbnMpe1xuICAgICAgICAvLyAgICAgICAgIENvbmNlcHRMaXN0LnB1c2goZGJDb25jZXB0TGlzdFtpXSk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSBjb25jZXB0IGxpc3RcIik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKENvbmNlcHRMaXN0KTtcbiAgICAgICAgcmV0dXJuIENvbmNlcHRMaXN0O1xuICAgIH1cbiAgICBzdGF0aWMgR2V0Q29uY2VwdHNCeVR5cGVJZEFuZFVzZXIodHlwZUlkLCB1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGxldCBDb25jZXB0TGlzdCA9IFtdO1xuICAgICAgICAgICAgQ29uY2VwdExpc3QgPSB5aWVsZCBCaW5hcnlUeXBlVHJlZS5nZXRUeXBlVmFyaWFudHNGcm9tVHJlZVdpdGhVc2VySWQodHlwZUlkLCB1c2VySWQpO1xuICAgICAgICAgICAgcmV0dXJuIENvbmNlcHRMaXN0O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIEdldEJpbmFyeUNoYXJhY3RlclRyZWUoKSB7XG4gICAgICAgIHJldHVybiBCaW5hcnlDaGFyYWN0ZXJUcmVlLmNoYXJhY3RlclJvb3Q7XG4gICAgfVxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxufVxuQ29uY2VwdHNEYXRhLmNvbmNlcHRzQXJyYXkgPSBbXTtcbkNvbmNlcHRzRGF0YS5jb25jZXB0RGljdGlvbmFyeSA9IFtdO1xuIiwiaW1wb3J0IHsgQ29uY2VwdCB9IGZyb20gXCIuL0NvbmNlcHRcIjtcbmV4cG9ydCBjbGFzcyBDb25uZWN0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihpZCA9IDAsIG9mVGhlQ29uY2VwdElkLCB0b1RoZUNvbmNlcHRJZCwgb2ZUaGVDb25jZXB0VXNlcklkLCB0b1RoZUNvbmNlcHRVc2VySWQsIHVzZXJJZCwgdHlwZUlkLCB0eXBlVXNlcklkLCBvcmRlcklkLCBvcmRlclVzZXJJZCwgc2VjdXJpdHlJZCwgc2VjdXJpdHlVc2VySWQsIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQsIHNlc3Npb25JbmZvcm1hdGlvbklkLCBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQpIHtcbiAgICAgICAgdGhpcy5pc1RlbXAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50eXBlID0gbmV3IENvbmNlcHQoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgXCIwXCIsIDAsIDAsIDAsIDAsIDAsIDAsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLk9mVGhlQ29uY2VwdElkID0gb2ZUaGVDb25jZXB0SWQ7XG4gICAgICAgIHRoaXMuVG9UaGVDb25jZXB0SWQgPSB0b1RoZUNvbmNlcHRJZDtcbiAgICAgICAgdGhpcy5vZlRoZUNvbmNlcHRJZCA9IG9mVGhlQ29uY2VwdElkO1xuICAgICAgICB0aGlzLnRvVGhlQ29uY2VwdElkID0gdG9UaGVDb25jZXB0SWQ7XG4gICAgICAgIHRoaXMuT2ZUaGVDb25jZXB0VXNlcklkID0gb2ZUaGVDb25jZXB0VXNlcklkO1xuICAgICAgICB0aGlzLlRvVGhlQ29uY2VwdFVzZXJJZCA9IHRvVGhlQ29uY2VwdFVzZXJJZDtcbiAgICAgICAgdGhpcy51c2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHRoaXMudHlwZUlkID0gdHlwZUlkO1xuICAgICAgICB0aGlzLnR5cGVVc2VySWQgPSB0eXBlVXNlcklkO1xuICAgICAgICB0aGlzLm9yZGVySWQgPSBvcmRlcklkO1xuICAgICAgICB0aGlzLm9yZGVyVXNlcklkID0gb3JkZXJVc2VySWQ7XG4gICAgICAgIHRoaXMuc2VjdXJpdHlJZCA9IHNlY3VyaXR5SWQ7XG4gICAgICAgIHRoaXMuc2VjdXJpdHlVc2VySWQgPSBzZWN1cml0eVVzZXJJZDtcbiAgICAgICAgdGhpcy5hY2Nlc3NJZCA9IGFjY2Vzc0lkO1xuICAgICAgICB0aGlzLmFjY2Vzc1VzZXJJZCA9IGFjY2Vzc1VzZXJJZDtcbiAgICAgICAgdGhpcy5zZXNzaW9uSW5mb3JtYXRpb25JZCA9IHNlc3Npb25JbmZvcm1hdGlvbklkO1xuICAgICAgICB0aGlzLnNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCA9IHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZDtcbiAgICAgICAgdGhpcy5lbnRyeVRpbWVTdGFtcCA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHRoaXMudGVybWluYXRpb25EYXRlVGltZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHRoaXMubG9jYWxTeW5jVGltZSA9IG5ldyBEYXRlKCk7XG4gICAgfVxufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBJZGVudGlmaWVyRmxhZ3MgfSBmcm9tIFwiLi4vSWRlbnRpZmllckZsYWdzXCI7XG5pbXBvcnQgeyBDb25uZWN0aW9uTm9kZSB9IGZyb20gXCIuL0Nvbm5lY3Rpb25Ob2RlXCI7XG5leHBvcnQgY2xhc3MgQ29ubmVjdGlvbkJpbmFyeVRyZWUge1xuICAgIHN0YXRpYyBhZGROb2RlVG9UcmVlKG5vZGUpIHtcbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvbnJvb3QgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9ucm9vdCA9IG5vZGU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm51bGwgdHJlZVwiLCB0aGlzLmNvbm5lY3Rpb25yb290KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rpb25yb290O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJub3QgbnVsbCB0cmVlXCIsIHRoaXMuY29ubmVjdGlvbnJvb3QpO1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9ucm9vdCA9IHRoaXMuY29ubmVjdGlvbnJvb3QuYWRkTm9kZShub2RlLCB0aGlzLmNvbm5lY3Rpb25yb290LCB0aGlzLmNvbm5lY3Rpb25yb290LmhlaWdodCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGFkZENvbm5lY3Rpb25Ub1RyZWUoY29ubmVjdGlvbikge1xuICAgICAgICB2YXIgbm9kZSA9IG5ldyBDb25uZWN0aW9uTm9kZShjb25uZWN0aW9uLmlkLCBjb25uZWN0aW9uLCBudWxsLCBudWxsKTtcbiAgICAgICAgdGhpcy5hZGROb2RlVG9UcmVlKG5vZGUpO1xuICAgIH1cbiAgICBzdGF0aWMgd2FpdEZvckRhdGFUb0xvYWQoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tGbGFnKHJlc29sdmUpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJub3RcIik7XG4gICAgICAgICAgICAgICAgfSwgMjUwMDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgY2hlY2tGbGFnKHJlc29sdmUpIHtcbiAgICAgICAgaWYgKElkZW50aWZpZXJGbGFncy5pc0Nvbm5lY3Rpb25Mb2FkZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKFwiZG9uZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoQ29ubmVjdGlvbkJpbmFyeVRyZWUuY2hlY2tGbGFnLCAxMDAwLCByZXNvbHZlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICA7XG4gICAgc3RhdGljIHJlbW92ZU5vZGVGcm9tVHJlZShpZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvbnJvb3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25yb290ID0gdGhpcy5jb25uZWN0aW9ucm9vdC5yZW1vdmVOb2RlKHRoaXMuY29ubmVjdGlvbnJvb3QsIGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXROb2RlRnJvbVRyZWUoaWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB5aWVsZCB0aGlzLndhaXRGb3JEYXRhVG9Mb2FkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9ucm9vdCkge1xuICAgICAgICAgICAgICAgIHZhciBOb2RlID0gdGhpcy5jb25uZWN0aW9ucm9vdC5nZXRGcm9tTm9kZShpZCwgdGhpcy5jb25uZWN0aW9ucm9vdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0aW9ucm9vdDtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuQ29ubmVjdGlvbkJpbmFyeVRyZWUuY29ubmVjdGlvbnJvb3QgPSBudWxsO1xuIiwiZXhwb3J0IGNsYXNzIENvbm5lY3Rpb25Ob2RlIHtcbiAgICBjb25zdHJ1Y3RvcihrZXksIHZhbHVlLCBsZWZ0Tm9kZSwgcmlnaHROb2RlKSB7XG4gICAgICAgIHRoaXMudmFyaWFudHMgPSBbXTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxO1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmxlZnROb2RlID0gbGVmdE5vZGU7XG4gICAgICAgIHRoaXMucmlnaHROb2RlID0gcmlnaHROb2RlO1xuICAgICAgICB0aGlzLmN1cnJlbnROb2RlID0gbnVsbDtcbiAgICB9XG4gICAgYWRkQ3VycmVudE5vZGUocGFzc2VkTm9kZSwgbm9kZSkge1xuICAgICAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBub2RlID0gcGFzc2VkTm9kZTtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXNzZWROb2RlLnZhbHVlLnR5cGVJZCAhPSBub2RlLnZhbHVlLnR5cGVJZCkge1xuICAgICAgICAgICAgbm9kZS5jdXJyZW50Tm9kZSA9IHRoaXMuYWRkQ3VycmVudE5vZGUocGFzc2VkTm9kZSwgbm9kZS5jdXJyZW50Tm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIGFkZEN1cnJlbnROb2RlVHlwZShwYXNzZWROb2RlLCBub2RlKSB7XG4gICAgICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgICAgICAgIG5vZGUgPSBwYXNzZWROb2RlO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvbnRhaW5zID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZS52YXJpYW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKG5vZGUudmFyaWFudHNbaV0udmFsdWUuaWQgPT0gcGFzc2VkTm9kZS52YWx1ZS5pZCkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5zID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNvbnRhaW5zKSB7XG4gICAgICAgICAgICBub2RlLnZhcmlhbnRzLnB1c2gocGFzc2VkTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy9ub2RlLmN1cnJlbnROb2RlID0gdGhpcy5hZGRDdXJyZW50Tm9kZShwYXNzZWROb2RlLCBub2RlLmN1cnJlbnROb2RlKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIGFkZE5vZGUocGFzc2VkTm9kZSwgbm9kZSwgaGVpZ2h0KSB7XG4gICAgICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgICAgICAgIG5vZGUgPSBwYXNzZWROb2RlO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIExlZnROb2RlID0gbm9kZS5sZWZ0Tm9kZTtcbiAgICAgICAgdmFyIFJpZ2h0Tm9kZSA9IG5vZGUucmlnaHROb2RlO1xuICAgICAgICBpZiAobm9kZS5rZXkgPiBwYXNzZWROb2RlLmtleSkge1xuICAgICAgICAgICAgbm9kZS5sZWZ0Tm9kZSA9IHRoaXMuYWRkTm9kZShwYXNzZWROb2RlLCBMZWZ0Tm9kZSwgaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChub2RlLmtleSA8IHBhc3NlZE5vZGUua2V5KSB7XG4gICAgICAgICAgICBub2RlLnJpZ2h0Tm9kZSA9IHRoaXMuYWRkTm9kZShwYXNzZWROb2RlLCBSaWdodE5vZGUsIGhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZWxzZSBpZiAobm9kZS5rZXkgPT0gcGFzc2VkTm9kZS5rZXkgJiYgbm9kZS5rZXkgIT0gXCJcIil7XG4gICAgICAgIC8vICAgICBub2RlLmN1cnJlbnROb2RlID0gcGFzc2VkTm9kZTtcbiAgICAgICAgLy8gfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBwYXNzZWROb2RlO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUuaGVpZ2h0ID0gMSArIE1hdGgubWF4KHRoaXMuZ2V0SGVpZ2h0KG5vZGUubGVmdE5vZGUpLCB0aGlzLmdldEhlaWdodChub2RlLnJpZ2h0Tm9kZSkpO1xuICAgICAgICBsZXQgYmFsYW5jaW5nRmFjdG9yID0gdGhpcy5nZXRCYWxhbmNlRmFjdG9yKG5vZGUpO1xuICAgICAgICBpZiAoYmFsYW5jaW5nRmFjdG9yID4gMSkge1xuICAgICAgICAgICAgaWYgKG5vZGUubGVmdE5vZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAocGFzc2VkTm9kZS5rZXkgPCBub2RlLmxlZnROb2RlLmtleSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yaWdodFJvdGF0ZShub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocGFzc2VkTm9kZS5rZXkgPiBub2RlLmxlZnROb2RlLmtleSkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLmxlZnROb2RlID0gdGhpcy5sZWZ0Um90YXRlKG5vZGUubGVmdE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yaWdodFJvdGF0ZShub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJhbGFuY2luZ0ZhY3RvciA8IC0xKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5yaWdodE5vZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAocGFzc2VkTm9kZS5rZXkgPiBub2RlLnJpZ2h0Tm9kZS5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGVmdFJvdGF0ZShub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocGFzc2VkTm9kZS5rZXkgPCBub2RlLnJpZ2h0Tm9kZS5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5yaWdodE5vZGUgPSB0aGlzLnJpZ2h0Um90YXRlKG5vZGUucmlnaHROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGVmdFJvdGF0ZShub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIGFkZFR5cGVOb2RlKHBhc3NlZE5vZGUsIG5vZGUsIGhlaWdodCkge1xuICAgICAgICB2YXIgZGVidWdGbGFnID0gZmFsc2U7XG4gICAgICAgIGlmIChwYXNzZWROb2RlLnZhbHVlLnR5cGVJZCAhPSAwKSB7XG4gICAgICAgICAgICAvLyBpZihwYXNzZWROb2RlLnZhbHVlLmNoYXJhY3RlclZhbHVlID09IFwiRGVmYXVsdFwiKXtcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcImRlZmF1bHQgaGVyZVwiKTtcbiAgICAgICAgICAgIC8vICAgICBkZWJ1Z0ZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChkZWJ1Z0ZsYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcXVhbCBoZXJlXCIsIG5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBub2RlID0gcGFzc2VkTm9kZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBMZWZ0Tm9kZSA9IG5vZGUubGVmdE5vZGU7XG4gICAgICAgICAgICB2YXIgUmlnaHROb2RlID0gbm9kZS5yaWdodE5vZGU7XG4gICAgICAgICAgICBpZiAobm9kZS5rZXkgPiBwYXNzZWROb2RlLmtleSkge1xuICAgICAgICAgICAgICAgIGlmIChkZWJ1Z0ZsYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsZWZ0ICBoZXJlXCIsIG5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBub2RlLmxlZnROb2RlID0gdGhpcy5hZGRUeXBlTm9kZShwYXNzZWROb2RlLCBMZWZ0Tm9kZSwgaGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUua2V5IDwgcGFzc2VkTm9kZS5rZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGVidWdGbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmlnaHQgaGVyZVwiLCBub2RlLCBSaWdodE5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBub2RlLnJpZ2h0Tm9kZSA9IHRoaXMuYWRkVHlwZU5vZGUocGFzc2VkTm9kZSwgUmlnaHROb2RlLCBoZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGRlYnVnRmxhZykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVsc2UgaGVyZVwiLCBub2RlLCBwYXNzZWROb2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUua2V5ID09IHBhc3NlZE5vZGUua2V5ICYmIG5vZGUua2V5ICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5hZGRDdXJyZW50Tm9kZVR5cGUocGFzc2VkTm9kZSwgbm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZS5oZWlnaHQgPSAxICsgTWF0aC5tYXgodGhpcy5nZXRIZWlnaHQobm9kZS5sZWZ0Tm9kZSksIHRoaXMuZ2V0SGVpZ2h0KG5vZGUucmlnaHROb2RlKSk7XG4gICAgICAgICAgICBpZiAoZGVidWdGbGFnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJoZWlnaHQgaGVyZVwiLCBub2RlLmhlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgYmFsYW5jaW5nRmFjdG9yID0gdGhpcy5nZXRCYWxhbmNlRmFjdG9yKG5vZGUpO1xuICAgICAgICAgICAgaWYgKGRlYnVnRmxhZykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmFsYW5jaW5nRmFjdG9yIGhlcmVcIiwgYmFsYW5jaW5nRmFjdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChiYWxhbmNpbmdGYWN0b3IgPiAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUubGVmdE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhc3NlZE5vZGUua2V5IDwgbm9kZS5sZWZ0Tm9kZS5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXR1cm5lciA9IHRoaXMucmlnaHRSb3RhdGUobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVidWdGbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXR1cm5pbmcgaGVyZSAxIFwiLCByZXR1cm5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGFzc2VkTm9kZS5rZXkgPiBub2RlLmxlZnROb2RlLmtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5sZWZ0Tm9kZSA9IHRoaXMubGVmdFJvdGF0ZShub2RlLmxlZnROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXR1cm5lciA9IHRoaXMucmlnaHRSb3RhdGUobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVidWdGbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXR1cm5pbmcgaGVyZSAyIFwiLCByZXR1cm5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYmFsYW5jaW5nRmFjdG9yIDwgLTEpIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5yaWdodE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhc3NlZE5vZGUua2V5ID4gbm9kZS5yaWdodE5vZGUua2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmV0dXJuZXIgPSB0aGlzLmxlZnRSb3RhdGUobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVidWdGbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXR1cm5pbmcgaGVyZSAzIFwiLCByZXR1cm5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGFzc2VkTm9kZS5rZXkgPCBub2RlLnJpZ2h0Tm9kZS5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucmlnaHROb2RlID0gdGhpcy5yaWdodFJvdGF0ZShub2RlLnJpZ2h0Tm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmV0dXJuZXIgPSB0aGlzLmxlZnRSb3RhdGUobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVidWdGbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXR1cm5pbmcgaGVyZTQgXCIsIHJldHVybmVyLCBub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5lcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkZWJ1Z0ZsYWcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIndoYXQgaGVyZVwiLCBub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVidWdGbGFnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJldHVybmluZyBoZXJlIDZcIiwgbm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIHJpZ2h0Um90YXRlKHkpIHtcbiAgICAgICAgaWYgKHkpIHtcbiAgICAgICAgICAgIGxldCB4ID0geS5sZWZ0Tm9kZTtcbiAgICAgICAgICAgIGlmICh4KSB7XG4gICAgICAgICAgICAgICAgbGV0IFQyID0geC5yaWdodE5vZGU7XG4gICAgICAgICAgICAgICAgeS5sZWZ0Tm9kZSA9IFQyO1xuICAgICAgICAgICAgICAgIHgucmlnaHROb2RlID0geTtcbiAgICAgICAgICAgICAgICB5LmhlaWdodCA9IE1hdGgubWF4KHRoaXMuZ2V0SGVpZ2h0KHkubGVmdE5vZGUpLCB0aGlzLmdldEhlaWdodCh5LnJpZ2h0Tm9kZSkpICsgMTtcbiAgICAgICAgICAgICAgICB4LmhlaWdodCA9IE1hdGgubWF4KHRoaXMuZ2V0SGVpZ2h0KHgubGVmdE5vZGUpLCB0aGlzLmdldEhlaWdodCh4LnJpZ2h0Tm9kZSkpICsgMTtcbiAgICAgICAgICAgICAgICByZXR1cm4geDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHJldHVybiB4O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB5O1xuICAgIH1cbiAgICBsZWZ0Um90YXRlKHgpIHtcbiAgICAgICAgaWYgKHgpIHtcbiAgICAgICAgICAgIGxldCB5ID0geC5yaWdodE5vZGU7XG4gICAgICAgICAgICBpZiAoeSkge1xuICAgICAgICAgICAgICAgIGxldCBUMiA9IHkubGVmdE5vZGU7XG4gICAgICAgICAgICAgICAgeS5sZWZ0Tm9kZSA9IHg7XG4gICAgICAgICAgICAgICAgeC5yaWdodE5vZGUgPSBUMjtcbiAgICAgICAgICAgICAgICB4LmhlaWdodCA9IE1hdGgubWF4KHRoaXMuZ2V0SGVpZ2h0KHgubGVmdE5vZGUpLCB0aGlzLmdldEhlaWdodCh4LnJpZ2h0Tm9kZSkgKyAxKTtcbiAgICAgICAgICAgICAgICB5LmhlaWdodCA9IE1hdGgubWF4KHRoaXMuZ2V0SGVpZ2h0KHkubGVmdE5vZGUpLCB0aGlzLmdldEhlaWdodCh4LnJpZ2h0Tm9kZSkgKyAxKTtcbiAgICAgICAgICAgICAgICByZXR1cm4geTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vcmV0dXJuIHk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICAgIGdldEhlaWdodChub2RlKSB7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZS5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGdldEJhbGFuY2VGYWN0b3IoTikge1xuICAgICAgICBpZiAoTiA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5nZXRIZWlnaHQoTi5sZWZ0Tm9kZSkgLSB0aGlzLmdldEhlaWdodChOLnJpZ2h0Tm9kZSk7XG4gICAgfVxuICAgIGdldEZyb21Ob2RlKGlkLCBub2RlKSB7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICBpZiAoaWQgPT0gbm9kZS5rZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlkIDwgbm9kZS5rZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRGcm9tTm9kZShpZCwgbm9kZS5sZWZ0Tm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpZCA+IG5vZGUua2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RnJvbU5vZGUoaWQsIG5vZGUucmlnaHROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgICBnZXRDaGFyYWN0ZXJGcm9tTm9kZSh2YWx1ZSwgbm9kZSkge1xuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09IG5vZGUua2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh2YWx1ZSA8IG5vZGUua2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2hhcmFjdGVyRnJvbU5vZGUodmFsdWUsIG5vZGUubGVmdE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUgPiBub2RlLmtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldENoYXJhY3RlckZyb21Ob2RlKHZhbHVlLCBub2RlLnJpZ2h0Tm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgcmVtb3ZlTm9kZShwYXNzZWROb2RlLCBpZCkge1xuICAgICAgICBpZiAocGFzc2VkTm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFzc2VkTm9kZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFzc2VkTm9kZS5rZXkgPiBpZCkge1xuICAgICAgICAgICAgcGFzc2VkTm9kZS5sZWZ0Tm9kZSA9IHRoaXMucmVtb3ZlTm9kZShwYXNzZWROb2RlLmxlZnROb2RlLCBpZCk7XG4gICAgICAgICAgICByZXR1cm4gcGFzc2VkTm9kZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwYXNzZWROb2RlLmtleSA8IGlkKSB7XG4gICAgICAgICAgICBwYXNzZWROb2RlLnJpZ2h0Tm9kZSA9IHRoaXMucmVtb3ZlTm9kZShwYXNzZWROb2RlLnJpZ2h0Tm9kZSwgaWQpO1xuICAgICAgICAgICAgcmV0dXJuIHBhc3NlZE5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYocGFzc2VkTm9kZS52YXJpYW50cy5sZW5ndGggPiAwKXtcbiAgICAgICAgLy8gICAgIGlmKHBhc3NlZE5vZGUudmFsdWUuaWQgPT0gaWQgKXtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIHZhciBuZXdOb2RlID0gcGFzc2VkTm9kZS52YXJpYW50c1swXTtcbiAgICAgICAgLy8gICAgIGlmKG5ld05vZGUpe1xuICAgICAgICAvLyAgICAgICAgIHBhc3NlZE5vZGUudmFsdWUgPSBuZXdOb2RlLnZhbHVlO1xuICAgICAgICAvLyAgICAgICAgIHBhc3NlZE5vZGUua2V5ID0gbmV3Tm9kZS5rZXk7XG4gICAgICAgIC8vICAgICAgICAgcGFzc2VkTm9kZS5jdXJyZW50Tm9kZSA9IG5ld05vZGUuY3VycmVudE5vZGU7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHBhc3NlZE5vZGU7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgaWYgKHBhc3NlZE5vZGUubGVmdE5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgbGV0IHRlbXAgPSBwYXNzZWROb2RlLnJpZ2h0Tm9kZTtcbiAgICAgICAgICAgIHBhc3NlZE5vZGUgPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIHRlbXA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGFzc2VkTm9kZS5yaWdodE5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgbGV0IHRlbXAgPSBwYXNzZWROb2RlLmxlZnROb2RlO1xuICAgICAgICAgICAgcGFzc2VkTm9kZSA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gdGVtcDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIHBhc3NpbmcgdGhlIHJpZ2h0Tm9kZSB0byB0aGUgaW5PcmRlclN1Y2Nlc3NvciBnaXZlcyB0aGUgaW1tZWRpYXRlIHN1Y2Nlc3NvciBvZiB0aGUgbm9kZVxuICAgICAgICAgICAgdmFyIGltbWVkaWF0ZVN1Y2Nlc3NvciA9IHRoaXMuaW5PcmRlclN1Y2Nlc3NvcihwYXNzZWROb2RlLnJpZ2h0Tm9kZSk7XG4gICAgICAgICAgICBwYXNzZWROb2RlLnZhbHVlID0gaW1tZWRpYXRlU3VjY2Vzc29yLnZhbHVlO1xuICAgICAgICAgICAgcGFzc2VkTm9kZS5rZXkgPSBpbW1lZGlhdGVTdWNjZXNzb3Iua2V5O1xuICAgICAgICAgICAgcGFzc2VkTm9kZS52YXJpYW50cyA9IGltbWVkaWF0ZVN1Y2Nlc3Nvci52YXJpYW50cztcbiAgICAgICAgICAgIHBhc3NlZE5vZGUuY3VycmVudE5vZGUgPSBpbW1lZGlhdGVTdWNjZXNzb3IuY3VycmVudE5vZGU7XG4gICAgICAgICAgICBwYXNzZWROb2RlLnJpZ2h0Tm9kZSA9IHRoaXMucmVtb3ZlTm9kZShwYXNzZWROb2RlLnJpZ2h0Tm9kZSwgaW1tZWRpYXRlU3VjY2Vzc29yLmtleSk7XG4gICAgICAgICAgICByZXR1cm4gcGFzc2VkTm9kZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW1vdmVOb2RlV2l0aFZhcmlhbnRzKHBhc3NlZE5vZGUsIHR5cGVJZGVudGlmaWVyLCBjb25jZXB0SWQpIHtcbiAgICAgICAgaWYgKHBhc3NlZE5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHBhc3NlZE5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhc3NlZE5vZGUua2V5ID4gdHlwZUlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgIHBhc3NlZE5vZGUubGVmdE5vZGUgPSB0aGlzLnJlbW92ZU5vZGVXaXRoVmFyaWFudHMocGFzc2VkTm9kZS5sZWZ0Tm9kZSwgdHlwZUlkZW50aWZpZXIsIGNvbmNlcHRJZCk7XG4gICAgICAgICAgICByZXR1cm4gcGFzc2VkTm9kZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwYXNzZWROb2RlLmtleSA8IHR5cGVJZGVudGlmaWVyKSB7XG4gICAgICAgICAgICBwYXNzZWROb2RlLnJpZ2h0Tm9kZSA9IHRoaXMucmVtb3ZlTm9kZVdpdGhWYXJpYW50cyhwYXNzZWROb2RlLnJpZ2h0Tm9kZSwgdHlwZUlkZW50aWZpZXIsIGNvbmNlcHRJZCk7XG4gICAgICAgICAgICByZXR1cm4gcGFzc2VkTm9kZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFzc2VkTm9kZS52YXJpYW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvL2NvbmRpdGlvbiBpZiB0aGUgbWFpbiBub2RlIGlzIGVxdWFsIHRvIHRoZSB2YWx1ZVxuICAgICAgICAgICAgaWYgKHBhc3NlZE5vZGUudmFsdWUuaWQgPT0gY29uY2VwdElkKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld05vZGUgPSBwYXNzZWROb2RlLnZhcmlhbnRzWzBdO1xuICAgICAgICAgICAgICAgIGlmIChuZXdOb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhc3NlZE5vZGUudmFsdWUgPSBuZXdOb2RlLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBwYXNzZWROb2RlLmtleSA9IG5ld05vZGUua2V5O1xuICAgICAgICAgICAgICAgICAgICBwYXNzZWROb2RlLmN1cnJlbnROb2RlID0gbmV3Tm9kZS5jdXJyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICAgICAgcGFzc2VkTm9kZS52YXJpYW50cy5zcGxpY2UoMCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXNzZWROb2RlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGluIHRoZSBjb25kaXRpb24gdGhhdCB0aGUgbWFpbiBub2RlIGlzIG5vdCBlcXVhbCB0byB0aGUgY2hlY2tpbmcgdmFsdWUgXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXNzZWROb2RlLnZhcmlhbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25jZXB0SWQgPT0gcGFzc2VkTm9kZS52YXJpYW50c1tpXS52YWx1ZS5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc2VkTm9kZS52YXJpYW50cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFzc2VkTm9kZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocGFzc2VkTm9kZS5sZWZ0Tm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBsZXQgdGVtcCA9IHBhc3NlZE5vZGUucmlnaHROb2RlO1xuICAgICAgICAgICAgcGFzc2VkTm9kZSA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gdGVtcDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwYXNzZWROb2RlLnJpZ2h0Tm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBsZXQgdGVtcCA9IHBhc3NlZE5vZGUubGVmdE5vZGU7XG4gICAgICAgICAgICBwYXNzZWROb2RlID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiB0ZW1wO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gcGFzc2luZyB0aGUgcmlnaHROb2RlIHRvIHRoZSBpbk9yZGVyU3VjY2Vzc29yIGdpdmVzIHRoZSBpbW1lZGlhdGUgc3VjY2Vzc29yIG9mIHRoZSBub2RlXG4gICAgICAgICAgICB2YXIgaW1tZWRpYXRlU3VjY2Vzc29yID0gdGhpcy5pbk9yZGVyU3VjY2Vzc29yKHBhc3NlZE5vZGUucmlnaHROb2RlKTtcbiAgICAgICAgICAgIHBhc3NlZE5vZGUudmFsdWUgPSBpbW1lZGlhdGVTdWNjZXNzb3IudmFsdWU7XG4gICAgICAgICAgICBwYXNzZWROb2RlLmtleSA9IGltbWVkaWF0ZVN1Y2Nlc3Nvci5rZXk7XG4gICAgICAgICAgICBwYXNzZWROb2RlLnZhcmlhbnRzID0gaW1tZWRpYXRlU3VjY2Vzc29yLnZhcmlhbnRzO1xuICAgICAgICAgICAgcGFzc2VkTm9kZS5jdXJyZW50Tm9kZSA9IGltbWVkaWF0ZVN1Y2Nlc3Nvci5jdXJyZW50Tm9kZTtcbiAgICAgICAgICAgIHBhc3NlZE5vZGUucmlnaHROb2RlID0gdGhpcy5yZW1vdmVOb2RlV2l0aFZhcmlhbnRzKHBhc3NlZE5vZGUucmlnaHROb2RlLCBpbW1lZGlhdGVTdWNjZXNzb3Iua2V5LCBjb25jZXB0SWQpO1xuICAgICAgICAgICAgcmV0dXJuIHBhc3NlZE5vZGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5PcmRlclN1Y2Nlc3Nvcihyb290KSB7XG4gICAgICAgIHdoaWxlIChyb290LmxlZnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJvb3QgPSByb290LmxlZnROb2RlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb290O1xuICAgIH1cbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgSWRlbnRpZmllckZsYWdzIH0gZnJvbSBcIi4uL0lkZW50aWZpZXJGbGFnc1wiO1xuaW1wb3J0IHsgQ29ubmVjdGlvbk5vZGUgfSBmcm9tIFwiLi9Db25uZWN0aW9uTm9kZVwiO1xuZXhwb3J0IGNsYXNzIENvbm5lY3Rpb25UeXBlVHJlZSB7XG4gICAgc3RhdGljIGFkZE5vZGVUb1RyZWUobm9kZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvblR5cGVSb290ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25UeXBlUm9vdCA9IG5vZGU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvblR5cGVSb290O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uVHlwZVJvb3QgPSB0aGlzLmNvbm5lY3Rpb25UeXBlUm9vdC5hZGRUeXBlTm9kZShub2RlLCB0aGlzLmNvbm5lY3Rpb25UeXBlUm9vdCwgdGhpcy5jb25uZWN0aW9uVHlwZVJvb3QuaGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rpb25UeXBlUm9vdDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyB3YWl0Rm9yRGF0YVRvTG9hZCgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0ZsYWcocmVzb2x2ZSk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChcIm5vdFwiKTtcbiAgICAgICAgICAgICAgICB9LCAyNTAwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBjaGVja0ZsYWcocmVzb2x2ZSkge1xuICAgICAgICBpZiAoSWRlbnRpZmllckZsYWdzLmlzQ29ubmVjdGlvblR5cGVMb2FkZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKFwiZG9uZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoQ29ubmVjdGlvblR5cGVUcmVlLmNoZWNrRmxhZywgMTAwMCwgcmVzb2x2ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgO1xuICAgIHN0YXRpYyBhZGRDb25uZWN0aW9uVG9UcmVlKGNvbm5lY3Rpb24pIHtcbiAgICAgICAgaWYgKGNvbm5lY3Rpb24udHlwZUlkICE9IDApIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gbmV3IENvbm5lY3Rpb25Ob2RlKGNvbm5lY3Rpb24udHlwZUlkLCBjb25uZWN0aW9uLCBudWxsLCBudWxsKTtcbiAgICAgICAgICAgIHRoaXMuYWRkTm9kZVRvVHJlZShub2RlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgcmVtb3ZlVHlwZUNvbmNlcHQodHlwZUlkLCBpZCkge1xuICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uVHlwZVJvb3QpIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvblR5cGVSb290ID0gdGhpcy5jb25uZWN0aW9uVHlwZVJvb3QucmVtb3ZlTm9kZVdpdGhWYXJpYW50cyh0aGlzLmNvbm5lY3Rpb25UeXBlUm9vdCwgdHlwZUlkLCBpZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGdldE5vZGVGcm9tVHJlZShpZCkge1xuICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uVHlwZVJvb3QpIHtcbiAgICAgICAgICAgIHZhciBOb2RlID0gdGhpcy5jb25uZWN0aW9uVHlwZVJvb3QuZ2V0RnJvbU5vZGUoaWQsIHRoaXMuY29ubmVjdGlvblR5cGVSb290KTtcbiAgICAgICAgICAgIHJldHVybiBOb2RlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rpb25UeXBlUm9vdDtcbiAgICB9XG4gICAgc3RhdGljIGdldFR5cGVWYXJpYW50c0Zyb21UcmVlKHR5cGVJZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdmFyIGNvbm5lY3Rpb24gPSBbXTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB5aWVsZCB0aGlzLndhaXRGb3JEYXRhVG9Mb2FkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbm5lY3Rpb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgTm9kZSA9IHRoaXMuZ2V0Tm9kZUZyb21UcmVlKHR5cGVJZCk7XG4gICAgICAgICAgICBpZiAoTm9kZSkge1xuICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24ucHVzaChOb2RlID09PSBudWxsIHx8IE5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IE5vZGUudmFsdWUpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTm9kZS52YXJpYW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9uLnB1c2goTm9kZS52YXJpYW50c1tpXS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBjb25uZWN0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIGdldFR5cGVWYXJpYW50c0Zyb21UcmVlV2l0aFVzZXJJZCh0eXBlSWQsIHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdmFyIGNvbmNlcHRzID0gW107XG4gICAgICAgICAgICB2YXIgTm9kZSA9IHRoaXMuZ2V0Tm9kZUZyb21UcmVlKHR5cGVJZCk7XG4gICAgICAgICAgICBpZiAoTm9kZSkge1xuICAgICAgICAgICAgICAgIGlmIChOb2RlLnZhbHVlLnVzZXJJZCA9PSB1c2VySWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uY2VwdHMucHVzaChOb2RlID09PSBudWxsIHx8IE5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IE5vZGUudmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE5vZGUudmFyaWFudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKE5vZGUudmFyaWFudHNbaV0udmFsdWUudXNlcklkID09IHVzZXJJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uY2VwdHMucHVzaChOb2RlLnZhcmlhbnRzW2ldLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb25jZXB0cztcbiAgICAgICAgfSk7XG4gICAgfVxufVxuQ29ubmVjdGlvblR5cGVUcmVlLmNvbm5lY3Rpb25UeXBlUm9vdCA9IG51bGw7XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IHJlbW92ZUZyb21EYXRhYmFzZSwgc3RvcmVUb0RhdGFiYXNlIH0gZnJvbSBcIi4uL0RhdGFiYXNlL2luZGV4ZWRkYlwiO1xuaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gXCIuL0Nvbm5lY3Rpb25cIjtcbmltcG9ydCB7IENvbm5lY3Rpb25CaW5hcnlUcmVlIH0gZnJvbSBcIi4vQ29ubmVjdGlvbkJpbmFyeVRyZWUvQ29ubmVjdGlvbkJpbmFyeVRyZWVcIjtcbmltcG9ydCB7IENvbm5lY3Rpb25UeXBlVHJlZSB9IGZyb20gXCIuL0Nvbm5lY3Rpb25CaW5hcnlUcmVlL0Nvbm5lY3Rpb25UeXBlVHJlZVwiO1xuZXhwb3J0IGNsYXNzIENvbm5lY3Rpb25EYXRhIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJDb25uZWN0aW9uIEFycmF5XCI7XG4gICAgfVxuICAgIHN0YXRpYyBDaGVja0NvbnRhaW5zKGNvbm5lY3Rpb24pIHtcbiAgICAgICAgdmFyIGNvbnRhaW5zID0gZmFsc2U7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb25uZWN0aW9uQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25BcnJheVtpXS5pZCA9PSBjb25uZWN0aW9uLmlkKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbnMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250YWlucztcbiAgICB9XG4gICAgc3RhdGljIEFkZENvbm5lY3Rpb24oY29ubmVjdGlvbikge1xuICAgICAgICAvLyAgICB2YXIgY29udGFpbnMgPSB0aGlzLkNoZWNrQ29udGFpbnMoY29ubmVjdGlvbik7XG4gICAgICAgIC8vICAgICBpZihjb250YWlucyl7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5SZW1vdmVDb25uZWN0aW9uKGNvbm5lY3Rpb24pO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgaWYoY29ubmVjdGlvbi5pZCAhPSAwIHx8IGNvbm5lY3Rpb24uaXNUZW1wKXtcbiAgICAgICAgLy8gICAgICAgICBzdG9yZVRvRGF0YWJhc2UoXCJjb25uZWN0aW9uXCIsY29ubmVjdGlvbik7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICB0aGlzLmNvbm5lY3Rpb25BcnJheS5wdXNoKGNvbm5lY3Rpb24pO1xuICAgICAgICBzdG9yZVRvRGF0YWJhc2UoXCJjb25uZWN0aW9uXCIsIGNvbm5lY3Rpb24pO1xuICAgICAgICBDb25uZWN0aW9uQmluYXJ5VHJlZS5hZGRDb25uZWN0aW9uVG9UcmVlKGNvbm5lY3Rpb24pO1xuICAgICAgICBDb25uZWN0aW9uVHlwZVRyZWUuYWRkQ29ubmVjdGlvblRvVHJlZShjb25uZWN0aW9uKTtcbiAgICB9XG4gICAgc3RhdGljIEFkZFRvRGljdGlvbmFyeShjb25uZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbkRpY3Rpb25hcnlbY29ubmVjdGlvbi5pZF0gPSBjb25uZWN0aW9uO1xuICAgIH1cbiAgICBzdGF0aWMgUmVtb3ZlQ29ubmVjdGlvbihjb25uZWN0aW9uKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb25uZWN0aW9uQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25BcnJheVtpXS5pZCA9PSBjb25uZWN0aW9uLmlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uQXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjb25uZWN0aW9uLmlkICE9IDApIHtcbiAgICAgICAgICAgIHJlbW92ZUZyb21EYXRhYmFzZShcImNvbm5lY3Rpb25cIiwgY29ubmVjdGlvbi5pZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIEdldENvbm5lY3Rpb25UcmVlKCkge1xuICAgICAgICByZXR1cm4gQ29ubmVjdGlvbkJpbmFyeVRyZWUuY29ubmVjdGlvbnJvb3Q7XG4gICAgfVxuICAgIHN0YXRpYyBHZXRDb25uZWN0aW9uVHlwZVRyZWUoKSB7XG4gICAgICAgIHJldHVybiBDb25uZWN0aW9uVHlwZVRyZWUuY29ubmVjdGlvblR5cGVSb290O1xuICAgIH1cbiAgICBzdGF0aWMgR2V0Q29ubmVjdGlvbihpZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgLy8gICAgdmFyICBteUNvbmNlcHQ6IENvbm5lY3Rpb258bnVsbDtcbiAgICAgICAgICAgIC8vICAgIG15Q29uY2VwdCA9IG51bGw7XG4gICAgICAgICAgICAvLyAgICAgZm9yKHZhciBpPTA7IGk8dGhpcy5jb25uZWN0aW9uQXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgLy8gICAgICAgICBpZih0aGlzLmNvbm5lY3Rpb25BcnJheVtpXS5pZCA9PSBpZCl7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBteUNvbmNlcHQgPSB0aGlzLmNvbm5lY3Rpb25BcnJheVtpXTtcbiAgICAgICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gbXlDb25jZXB0O1xuICAgICAgICAgICAgdmFyIG15Q29ubmVjdGlvbiA9IG5ldyBDb25uZWN0aW9uKDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICAgICAgdmFyIG5vZGUgPSB5aWVsZCBDb25uZWN0aW9uQmluYXJ5VHJlZS5nZXROb2RlRnJvbVRyZWUoaWQpO1xuICAgICAgICAgICAgaWYgKG5vZGUgPT09IG51bGwgfHwgbm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbm9kZS52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhciByZXR1cm5lZENvbmNlcHQgPSBub2RlLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmIChyZXR1cm5lZENvbmNlcHQpIHtcbiAgICAgICAgICAgICAgICAgICAgbXlDb25uZWN0aW9uID0gcmV0dXJuZWRDb25jZXB0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlmKG15Q29uY2VwdC5pZCA9PSAwIHx8IG15Q29uY2VwdCA9PSBudWxsKXtcbiAgICAgICAgICAgIC8vICAgICBmb3IodmFyIGk9MDsgaTx0aGlzLmNvbmNlcHRzQXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgLy8gICAgICAgICBpZih0aGlzLmNvbmNlcHRzQXJyYXlbaV0uaWQgPT0gaWQpe1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgbXlDb25jZXB0ID0gdGhpcy5jb25jZXB0c0FycmF5W2ldO1xuICAgICAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgcmV0dXJuIG15Q29ubmVjdGlvbjtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBHZXRDb25uZWN0aW9uc09mQ29tcG9zaXRpb25Mb2NhbChpZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdmFyIGNvbm5lY3Rpb25zID0gW107XG4gICAgICAgICAgICB2YXIgbm9kZSA9IHlpZWxkIENvbm5lY3Rpb25UeXBlVHJlZS5nZXROb2RlRnJvbVRyZWUoaWQpO1xuICAgICAgICAgICAgaWYgKG5vZGUgPT09IG51bGwgfHwgbm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbm9kZS52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhciByZXR1cm5lZENvbm5lY3Rpb24gPSBub2RlLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmIChyZXR1cm5lZENvbm5lY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG15Q29ubmVjdGlvbiA9IHJldHVybmVkQ29ubmVjdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbnMucHVzaChteUNvbm5lY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGUudmFyaWFudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb25zLnB1c2gobm9kZS52YXJpYW50c1tpXS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZihteUNvbmNlcHQuaWQgPT0gMCB8fCBteUNvbmNlcHQgPT0gbnVsbCl7XG4gICAgICAgICAgICAvLyAgICAgZm9yKHZhciBpPTA7IGk8dGhpcy5jb25jZXB0c0FycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIC8vICAgICAgICAgaWYodGhpcy5jb25jZXB0c0FycmF5W2ldLmlkID09IGlkKXtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIG15Q29uY2VwdCA9IHRoaXMuY29uY2VwdHNBcnJheVtpXTtcbiAgICAgICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIHJldHVybiBjb25uZWN0aW9ucztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxufVxuQ29ubmVjdGlvbkRhdGEuY29ubmVjdGlvbkFycmF5ID0gW107XG5Db25uZWN0aW9uRGF0YS5jb25uZWN0aW9uRGljdGlvbmFyeSA9IFtdO1xuIiwiZXhwb3J0IGNsYXNzIElkZW50aWZpZXJGbGFncyB7XG59XG5JZGVudGlmaWVyRmxhZ3MuaXNUeXBlTG9hZGVkID0gZmFsc2U7XG5JZGVudGlmaWVyRmxhZ3MuaXNDaGFyYWN0ZXJMb2FkZWQgPSBmYWxzZTtcbklkZW50aWZpZXJGbGFncy5pc0RhdGFMb2FkZWQgPSBmYWxzZTtcbklkZW50aWZpZXJGbGFncy5pc0xvY2FsRGF0YUxvYWRlZCA9IGZhbHNlO1xuSWRlbnRpZmllckZsYWdzLmlzTG9jYWxDaGFyYWN0ZXJMb2FkZWQgPSBmYWxzZTtcbklkZW50aWZpZXJGbGFncy5pc0xvY2FsVHlwZUxvYWRlZCA9IGZhbHNlO1xuSWRlbnRpZmllckZsYWdzLmlzQ29ubmVjdGlvbkxvYWRlZCA9IGZhbHNlO1xuSWRlbnRpZmllckZsYWdzLmlzQ29ubmVjdGlvblR5cGVMb2FkZWQgPSBmYWxzZTtcbklkZW50aWZpZXJGbGFncy5pc0xvY2FsQ29ubmVjdGlvbkxvYWRlZCA9IGZhbHNlO1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBJZGVudGlmaWVyRmxhZ3MgfSBmcm9tIFwiLi8uLi9JZGVudGlmaWVyRmxhZ3NcIjtcbmltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi8uLi9Ob2RlXCI7XG5leHBvcnQgY2xhc3MgTG9jYWxCaW5hcnlDaGFyYWN0ZXJUcmVlIHtcbiAgICBzdGF0aWMgd2FpdEZvckRhdGFUb0xvYWQoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tGbGFnKHJlc29sdmUpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJub3RcIik7XG4gICAgICAgICAgICAgICAgfSwgMjUwMDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgY2hlY2tGbGFnKHJlc29sdmUpIHtcbiAgICAgICAgaWYgKElkZW50aWZpZXJGbGFncy5pc0xvY2FsQ2hhcmFjdGVyTG9hZGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShcImRvbmVcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KExvY2FsQmluYXJ5Q2hhcmFjdGVyVHJlZS5jaGVja0ZsYWcsIDEwMDAsIHJlc29sdmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIDtcbiAgICBzdGF0aWMgYWRkTm9kZVRvVHJlZShub2RlKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5Mb2NhbENoYXJhY3RlclJvb3QgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuTG9jYWxDaGFyYWN0ZXJSb290ID0gbm9kZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Mb2NhbENoYXJhY3RlclJvb3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLkxvY2FsQ2hhcmFjdGVyUm9vdCA9IHRoaXMuTG9jYWxDaGFyYWN0ZXJSb290LmFkZENoYXJhY3Rlck5vZGUobm9kZSwgdGhpcy5Mb2NhbENoYXJhY3RlclJvb3QsIHRoaXMuTG9jYWxDaGFyYWN0ZXJSb290LmhlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5Mb2NhbENoYXJhY3RlclJvb3Q7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgYWRkQ29uY2VwdFRvVHJlZShjb25jZXB0KSB7XG4gICAgICAgIGlmIChjb25jZXB0LmNoYXJhY3RlclZhbHVlICE9IFwiXCIpIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gbmV3IE5vZGUoY29uY2VwdC5jaGFyYWN0ZXJWYWx1ZSwgY29uY2VwdCwgbnVsbCwgbnVsbCk7XG4gICAgICAgICAgICB0aGlzLmFkZE5vZGVUb1RyZWUobm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGdldE5vZGVGcm9tVHJlZSh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5Mb2NhbENoYXJhY3RlclJvb3QpIHtcbiAgICAgICAgICAgIHZhciBOb2RlID0gdGhpcy5Mb2NhbENoYXJhY3RlclJvb3QuZ2V0Q2hhcmFjdGVyRnJvbU5vZGUodmFsdWUsIHRoaXMuTG9jYWxDaGFyYWN0ZXJSb290KTtcbiAgICAgICAgICAgIHJldHVybiBOb2RlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLkxvY2FsQ2hhcmFjdGVyUm9vdDtcbiAgICB9XG4gICAgc3RhdGljIGdldENoYXJhY3RlckFuZFR5cGVGcm9tVHJlZSh2YWx1ZSwgdHlwZUlkKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBkYXRhID0geWllbGQgdGhpcy53YWl0Rm9yRGF0YVRvTG9hZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuTG9jYWxDaGFyYWN0ZXJSb290KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZWFyY2hpbmcgLi4uLi4uLi4uLi4uLi4uLi5cIik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgICAgICAgICAgIHZhciBOb2RlID0gdGhpcy5Mb2NhbENoYXJhY3RlclJvb3QuZ2V0RnJvbU5vZGVXaXRoQ2hhcmFjdGVyQW5kVHlwZSh2YWx1ZSwgdHlwZUlkLCB0aGlzLkxvY2FsQ2hhcmFjdGVyUm9vdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5Mb2NhbENoYXJhY3RlclJvb3Q7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgcmVtb3ZlQ29uY2VwdFR5cGUoY2hhcmFjdGVyLCBpZCkge1xuICAgICAgICBpZiAodGhpcy5Mb2NhbENoYXJhY3RlclJvb3QpIHtcbiAgICAgICAgICAgIHRoaXMuTG9jYWxDaGFyYWN0ZXJSb290ID0gdGhpcy5Mb2NhbENoYXJhY3RlclJvb3QucmVtb3ZlTm9kZVdpdGhWYXJpYW50cyh0aGlzLkxvY2FsQ2hhcmFjdGVyUm9vdCwgY2hhcmFjdGVyLCBpZCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5Mb2NhbEJpbmFyeUNoYXJhY3RlclRyZWUuTG9jYWxDaGFyYWN0ZXJSb290ID0gbnVsbDtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgSWRlbnRpZmllckZsYWdzIH0gZnJvbSBcIi4uL0lkZW50aWZpZXJGbGFnc1wiO1xuaW1wb3J0IHsgTm9kZSB9IGZyb20gXCIuLy4uL05vZGVcIjtcbmV4cG9ydCBjbGFzcyBMb2NhbEJpbmFyeVRyZWUge1xuICAgIHN0YXRpYyBhZGROb2RlVG9UcmVlKG5vZGUpIHtcbiAgICAgICAgaWYgKHRoaXMucm9vdCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnJvb3QgPSBub2RlO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucm9vdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucm9vdCA9IHRoaXMucm9vdC5hZGROb2RlKG5vZGUsIHRoaXMucm9vdCwgdGhpcy5yb290LmhlaWdodCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGFkZENvbmNlcHRUb1RyZWUoY29uY2VwdCkge1xuICAgICAgICB2YXIgbm9kZSA9IG5ldyBOb2RlKGNvbmNlcHQuaWQsIGNvbmNlcHQsIG51bGwsIG51bGwpO1xuICAgICAgICB2YXIgY2hhcmFjdGVyTm9kZSA9IG5ldyBOb2RlKGNvbmNlcHQuY2hhcmFjdGVyVmFsdWUsIGNvbmNlcHQsIG51bGwsIG51bGwpO1xuICAgICAgICB0aGlzLmFkZE5vZGVUb1RyZWUobm9kZSk7XG4gICAgfVxuICAgIHN0YXRpYyB3YWl0Rm9yRGF0YVRvTG9hZCgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0ZsYWcocmVzb2x2ZSk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChcIm5vdFwiKTtcbiAgICAgICAgICAgICAgICB9LCAyNTAwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBjaGVja0ZsYWcocmVzb2x2ZSkge1xuICAgICAgICBpZiAoSWRlbnRpZmllckZsYWdzLmlzTG9jYWxEYXRhTG9hZGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShcImRvbmVcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KExvY2FsQmluYXJ5VHJlZS5jaGVja0ZsYWcsIDEwMDAsIHJlc29sdmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIDtcbiAgICBzdGF0aWMgZ2V0Tm9kZUZyb21UcmVlKGlkKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBkYXRhID0geWllbGQgdGhpcy53YWl0Rm9yRGF0YVRvTG9hZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucm9vdCkge1xuICAgICAgICAgICAgICAgIHZhciBOb2RlID0gdGhpcy5yb290LmdldEZyb21Ob2RlKGlkLCB0aGlzLnJvb3QpO1xuICAgICAgICAgICAgICAgIHJldHVybiBOb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0Q2hhcmFjdGVyQW5kVHlwZUZyb21UcmVlKHZhbHVlLCB0eXBlSWQpIHtcbiAgICAgICAgaWYgKHRoaXMucm9vdCkge1xuICAgICAgICAgICAgdmFyIE5vZGUgPSB0aGlzLnJvb3QuZ2V0RnJvbU5vZGVXaXRoQ2hhcmFjdGVyQW5kVHlwZSh2YWx1ZSwgdHlwZUlkLCB0aGlzLnJvb3QpO1xuICAgICAgICAgICAgcmV0dXJuIE5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucm9vdDtcbiAgICB9XG4gICAgc3RhdGljIHJlbW92ZU5vZGVGcm9tVHJlZShpZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucm9vdCkge1xuICAgICAgICAgICAgICAgIHRoaXMucm9vdCA9IHRoaXMucm9vdC5yZW1vdmVOb2RlKHRoaXMucm9vdCwgaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5Mb2NhbEJpbmFyeVRyZWUucm9vdCA9IG51bGw7XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IElkZW50aWZpZXJGbGFncyB9IGZyb20gXCIuLy4uL0lkZW50aWZpZXJGbGFnc1wiO1xuaW1wb3J0IHsgTm9kZSB9IGZyb20gXCIuLy4uL05vZGVcIjtcbmV4cG9ydCBjbGFzcyBMb2NhbEJpbmFyeVR5cGVUcmVlIHtcbiAgICBzdGF0aWMgYWRkTm9kZVRvVHJlZShub2RlKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5Mb2NhbFR5cGVSb290ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLkxvY2FsVHlwZVJvb3QgPSBub2RlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkxvY2FsVHlwZVJvb3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLkxvY2FsVHlwZVJvb3QgPSB0aGlzLkxvY2FsVHlwZVJvb3QuYWRkVHlwZU5vZGUobm9kZSwgdGhpcy5Mb2NhbFR5cGVSb290LCB0aGlzLkxvY2FsVHlwZVJvb3QuaGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLkxvY2FsVHlwZVJvb3Q7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgYWRkQ29uY2VwdFRvVHJlZShjb25jZXB0KSB7XG4gICAgICAgIGlmIChjb25jZXB0LnR5cGVJZCAhPSAwKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IG5ldyBOb2RlKGNvbmNlcHQudHlwZUlkLCBjb25jZXB0LCBudWxsLCBudWxsKTtcbiAgICAgICAgICAgIHRoaXMuYWRkTm9kZVRvVHJlZShub2RlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgcmVtb3ZlQ29uY2VwdFR5cGUodHlwZUlkLCBpZCkge1xuICAgICAgICBpZiAodGhpcy5Mb2NhbFR5cGVSb290KSB7XG4gICAgICAgICAgICB0aGlzLkxvY2FsVHlwZVJvb3QgPSB0aGlzLkxvY2FsVHlwZVJvb3QucmVtb3ZlTm9kZVdpdGhWYXJpYW50cyh0aGlzLkxvY2FsVHlwZVJvb3QsIHR5cGVJZCwgaWQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBnZXROb2RlRnJvbVRyZWUoaWQpIHtcbiAgICAgICAgaWYgKHRoaXMuTG9jYWxUeXBlUm9vdCkge1xuICAgICAgICAgICAgdmFyIE5vZGUgPSB0aGlzLkxvY2FsVHlwZVJvb3QuZ2V0RnJvbU5vZGUoaWQsIHRoaXMuTG9jYWxUeXBlUm9vdCk7XG4gICAgICAgICAgICByZXR1cm4gTm9kZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5Mb2NhbFR5cGVSb290O1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0VHlwZVZhcmlhbnRzRnJvbVRyZWUodHlwZUlkKSB7XG4gICAgICAgIHZhciBOb2RlID0gdGhpcy5nZXROb2RlRnJvbVRyZWUodHlwZUlkKTtcbiAgICAgICAgdmFyIGNvbmNlcHRzID0gW107XG4gICAgICAgIGlmIChOb2RlKSB7XG4gICAgICAgICAgICBjb25jZXB0cy5wdXNoKE5vZGUgPT09IG51bGwgfHwgTm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogTm9kZS52YWx1ZSk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE5vZGUudmFyaWFudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25jZXB0cy5wdXNoKE5vZGUudmFyaWFudHNbaV0udmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbmNlcHRzO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyB3YWl0Rm9yRGF0YVRvTG9hZCgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0ZsYWcocmVzb2x2ZSk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChcIm5vdFwiKTtcbiAgICAgICAgICAgICAgICB9LCAyNTAwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBjaGVja0ZsYWcocmVzb2x2ZSkge1xuICAgICAgICBpZiAoSWRlbnRpZmllckZsYWdzLmlzTG9jYWxUeXBlTG9hZGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShcImRvbmVcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KExvY2FsQmluYXJ5VHlwZVRyZWUuY2hlY2tGbGFnLCAxMDAwLCByZXNvbHZlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICA7XG4gICAgc3RhdGljIGdldFR5cGVWYXJpYW50c0Zyb21UcmVlV2l0aFVzZXJJZCh0eXBlSWQsIHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdmFyIGNvbmNlcHRzID0gW107XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBkYXRhID0geWllbGQgdGhpcy53YWl0Rm9yRGF0YVRvTG9hZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb25jZXB0cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBOb2RlID0gdGhpcy5nZXROb2RlRnJvbVRyZWUodHlwZUlkKTtcbiAgICAgICAgICAgIGlmIChOb2RlKSB7XG4gICAgICAgICAgICAgICAgaWYgKE5vZGUudmFsdWUudXNlcklkID09IHVzZXJJZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25jZXB0cy5wdXNoKE5vZGUgPT09IG51bGwgfHwgTm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogTm9kZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTm9kZS52YXJpYW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoTm9kZS52YXJpYW50c1tpXS52YWx1ZS51c2VySWQgPT0gdXNlcklkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25jZXB0cy5wdXNoKE5vZGUudmFyaWFudHNbaV0udmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbmNlcHRzO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5Mb2NhbEJpbmFyeVR5cGVUcmVlLkxvY2FsVHlwZVJvb3QgPSBudWxsO1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBDb25jZXB0IH0gZnJvbSBcIi4vLi4vQ29uY2VwdFwiO1xuaW1wb3J0IHsgc3RvcmVUb0RhdGFiYXNlIH0gZnJvbSBcIi4uLy4uL0RhdGFiYXNlL2luZGV4ZGJsb2NhbFwiO1xuaW1wb3J0IHsgTG9jYWxCaW5hcnlUcmVlIH0gZnJvbSBcIi4vTG9jYWxCaW5hcnlUcmVlXCI7XG5pbXBvcnQgeyBMb2NhbEJpbmFyeUNoYXJhY3RlclRyZWUgfSBmcm9tIFwiLi9Mb2NhbEJpbmFyeUNoYXJhY3RlclRyZWVcIjtcbmltcG9ydCB7IExvY2FsQmluYXJ5VHlwZVRyZWUgfSBmcm9tIFwiLi9Mb2NhbEJpbmFyeVR5cGVUcmVlXCI7XG5leHBvcnQgY2xhc3MgTG9jYWxDb25jZXB0c0RhdGEge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm5hbWUgPSBcImNvbmNlcHRzQXJyYXlcIjtcbiAgICB9XG4gICAgc3RhdGljIENoZWNrQ29udGFpbnMoY29uY2VwdCkge1xuICAgICAgICB2YXIgY29udGFpbnMgPSBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxvY2FsY29uY2VwdHNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMubG9jYWxjb25jZXB0c0FycmF5W2ldLmlkID09IGNvbmNlcHQuaWQpIHtcbiAgICAgICAgICAgICAgICBjb250YWlucyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5zO1xuICAgIH1cbiAgICBzdGF0aWMgQWRkQ29uY2VwdChjb25jZXB0KSB7XG4gICAgICAgIGlmIChjb25jZXB0LmlkID4gMCkge1xuICAgICAgICAgICAgc3RvcmVUb0RhdGFiYXNlKFwibG9jYWxjb25jZXB0XCIsIGNvbmNlcHQpO1xuICAgICAgICAgICAgTG9jYWxCaW5hcnlUcmVlLmFkZENvbmNlcHRUb1RyZWUoY29uY2VwdCk7XG4gICAgICAgICAgICBMb2NhbEJpbmFyeUNoYXJhY3RlclRyZWUuYWRkQ29uY2VwdFRvVHJlZShjb25jZXB0KTtcbiAgICAgICAgICAgIExvY2FsQmluYXJ5VHlwZVRyZWUuYWRkQ29uY2VwdFRvVHJlZShjb25jZXB0KTtcbiAgICAgICAgICAgIHRoaXMubG9jYWxjb25jZXB0c0FycmF5LnB1c2goY29uY2VwdCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIEFkZENvbmNlcHRUZW1wb3JhcnkoY29uY2VwdCkge1xuICAgICAgICB2YXIgY29udGFpbnMgPSB0aGlzLkNoZWNrQ29udGFpbnMoY29uY2VwdCk7XG4gICAgICAgIHRoaXMubG9jYWxjb25jZXB0c0FycmF5W2NvbmNlcHQuaWRdID0gY29uY2VwdDtcbiAgICAgICAgaWYgKGNvbnRhaW5zKSB7XG4gICAgICAgICAgICB0aGlzLlJlbW92ZUNvbmNlcHQoY29uY2VwdCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2NhbGNvbmNlcHRzQXJyYXkucHVzaChjb25jZXB0KTtcbiAgICB9XG4gICAgc3RhdGljIFJlbW92ZUNvbmNlcHQoY29uY2VwdCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubG9jYWxjb25jZXB0c0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5sb2NhbGNvbmNlcHRzQXJyYXlbaV0uaWQgPT0gY29uY2VwdC5pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxjb25jZXB0c0FycmF5LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyAgcmVtb3ZlRnJvbURhdGFiYXNlKFwiY29uY2VwdFwiLGNvbmNlcHQuaWQpO1xuICAgIH1cbiAgICBzdGF0aWMgR2V0Q29uY2VwdChpZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdmFyIG15Q29uY2VwdCA9IG5ldyBDb25jZXB0KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIFwiMFwiLCAwLCAwLCAwLCAwLCAwLCAwLCBmYWxzZSk7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IHlpZWxkIExvY2FsQmluYXJ5VHJlZS5nZXROb2RlRnJvbVRyZWUoaWQpO1xuICAgICAgICAgICAgaWYgKG5vZGUgPT09IG51bGwgfHwgbm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbm9kZS52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhciByZXR1cm5lZENvbmNlcHQgPSBub2RlLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmIChyZXR1cm5lZENvbmNlcHQpIHtcbiAgICAgICAgICAgICAgICAgICAgbXlDb25jZXB0ID0gcmV0dXJuZWRDb25jZXB0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBteUNvbmNlcHQ7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyKGNoYXJhY3RlclZhbHVlKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB2YXIgY29uY2VwdCA9IG5ldyBDb25jZXB0KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIFwiMFwiLCAwLCAwLCAwLCAwLCAwLCAwLCBmYWxzZSk7XG4gICAgICAgICAgICAvLyAgZm9yKHZhciBpPTA7IGk8dGhpcy5jb25jZXB0c0FycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIC8vICAgICAgaWYodGhpcy5jb25jZXB0c0FycmF5W2ldLmNoYXJhY3RlclZhbHVlID09IGNoYXJhY3RlclZhbHVlKXtcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uY2VwdCA9IHRoaXMuY29uY2VwdHNBcnJheVtpXTtcbiAgICAgICAgICAgIC8vICAgICAgfVxuICAgICAgICAgICAgLy8gIH1cbiAgICAgICAgICAgIHZhciBOb2RlID0gTG9jYWxCaW5hcnlDaGFyYWN0ZXJUcmVlLmdldE5vZGVGcm9tVHJlZShjaGFyYWN0ZXJWYWx1ZSk7XG4gICAgICAgICAgICBpZiAoTm9kZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ290IHRoZSBjaGFyYWN0ZXJcIik7XG4gICAgICAgICAgICAgICAgY29uY2VwdCA9IE5vZGUudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29uY2VwdDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBHZXRDb25jZXB0QnlDaGFyYWN0ZXJBbmRUeXBlTG9jYWwoY2hhcmFjdGVyX3ZhbHVlLCB0eXBlSWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHZhciBjb25jZXB0ID0gbmV3IENvbmNlcHQoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgXCIwXCIsIDAsIDAsIDAsIDAsIDAsIDAsIGZhbHNlKTtcbiAgICAgICAgICAgIC8vIGxldCBjb25jZXB0TGlzdDpDb25jZXB0W10gPSBhd2FpdCB0aGlzLkdldENvbmNlcHRzQnlUeXBlSWQodHlwZUlkKTtcbiAgICAgICAgICAgIC8vIGZvcih2YXIgaT0wO2k8Y29uY2VwdExpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgLy8gICAgIGlmKGNoYXJhY3Rlcl92YWx1ZSA9PSBjb25jZXB0TGlzdFtpXS5jaGFyYWN0ZXJWYWx1ZSl7XG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbmNlcHQgPSBjb25jZXB0TGlzdFtpXTtcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICB2YXIgTm9kZSA9IHlpZWxkIExvY2FsQmluYXJ5Q2hhcmFjdGVyVHJlZS5nZXRDaGFyYWN0ZXJBbmRUeXBlRnJvbVRyZWUoY2hhcmFjdGVyX3ZhbHVlLCB0eXBlSWQpO1xuICAgICAgICAgICAgaWYgKE5vZGUpIHtcbiAgICAgICAgICAgICAgICBjb25jZXB0ID0gTm9kZS52YWx1ZTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZvdW5kIHRoZSBvdXRwdXRcIik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29uY2VwdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29uY2VwdDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBHZXRDb25jZXB0c0J5VHlwZUlkKHR5cGVJZCkge1xuICAgICAgICB2YXIgbXlDb25jZXB0O1xuICAgICAgICBsZXQgQ29uY2VwdExpc3QgPSBbXTtcbiAgICAgICAgbXlDb25jZXB0ID0gbnVsbDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxvY2FsY29uY2VwdHNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMubG9jYWxjb25jZXB0c0FycmF5W2ldLnR5cGVJZCA9PSB0eXBlSWQpIHtcbiAgICAgICAgICAgICAgICBDb25jZXB0TGlzdC5wdXNoKHRoaXMubG9jYWxjb25jZXB0c0FycmF5W2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQ29uY2VwdExpc3Q7XG4gICAgfVxuICAgIHN0YXRpYyBHZXRDb25jZXB0c0J5VHlwZUlkQW5kVXNlcih0eXBlSWQsIHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdmFyIG15Q29uY2VwdDtcbiAgICAgICAgICAgIGxldCBDb25jZXB0TGlzdCA9IFtdO1xuICAgICAgICAgICAgLy8gbXlDb25jZXB0ID0gbnVsbDtcbiAgICAgICAgICAgIC8vICBmb3IodmFyIGk9MDsgaTx0aGlzLmNvbmNlcHRzQXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgLy8gICAgICBpZih0aGlzLmNvbmNlcHRzQXJyYXlbaV0udHlwZUlkID09IHR5cGVJZCAmJiB0aGlzLmNvbmNlcHRzQXJyYXlbaV0udXNlcklkID09IHVzZXJJZCl7XG4gICAgICAgICAgICAvLyAgICAgICAgICBDb25jZXB0TGlzdC5wdXNoKHRoaXMuY29uY2VwdHNBcnJheVtpXSk7XG4gICAgICAgICAgICAvLyAgICAgIH1cbiAgICAgICAgICAgIC8vICB9XG4gICAgICAgICAgICBDb25jZXB0TGlzdCA9IHlpZWxkIExvY2FsQmluYXJ5VHlwZVRyZWUuZ2V0VHlwZVZhcmlhbnRzRnJvbVRyZWVXaXRoVXNlcklkKHR5cGVJZCwgdXNlcklkKTtcbiAgICAgICAgICAgIHJldHVybiBDb25jZXB0TGlzdDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxufVxuTG9jYWxDb25jZXB0c0RhdGEubG9jYWxjb25jZXB0c0FycmF5ID0gW107XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IHN0b3JlVG9EYXRhYmFzZSB9IGZyb20gXCIuLi8uLi9EYXRhYmFzZS9pbmRleGRibG9jYWxcIjtcbmltcG9ydCB7IElkZW50aWZpZXJGbGFncyB9IGZyb20gXCIuLi9JZGVudGlmaWVyRmxhZ3NcIjtcbmV4cG9ydCBjbGFzcyBMb2NhbENvbm5lY3Rpb25EYXRhIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJDb25uZWN0aW9uIEFycmF5XCI7XG4gICAgfVxuICAgIHN0YXRpYyBDaGVja0NvbnRhaW5zKGNvbm5lY3Rpb24pIHtcbiAgICAgICAgdmFyIGNvbnRhaW5zID0gZmFsc2U7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb25uZWN0aW9uQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25BcnJheVtpXS5pZCA9PSBjb25uZWN0aW9uLmlkKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbnMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250YWlucztcbiAgICB9XG4gICAgc3RhdGljIEFkZENvbm5lY3Rpb24oY29ubmVjdGlvbikge1xuICAgICAgICB2YXIgY29udGFpbnMgPSB0aGlzLkNoZWNrQ29udGFpbnMoY29ubmVjdGlvbik7XG4gICAgICAgIGlmIChjb250YWlucykge1xuICAgICAgICAgICAgdGhpcy5SZW1vdmVDb25uZWN0aW9uKGNvbm5lY3Rpb24pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb25uZWN0aW9uLmlkICE9IDAgfHwgY29ubmVjdGlvbi5pc1RlbXApIHtcbiAgICAgICAgICAgIHN0b3JlVG9EYXRhYmFzZShcImxvY2FsY29ubmVjdGlvblwiLCBjb25uZWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbm5lY3Rpb25BcnJheS5wdXNoKGNvbm5lY3Rpb24pO1xuICAgIH1cbiAgICBzdGF0aWMgQWRkVG9EaWN0aW9uYXJ5KGNvbm5lY3Rpb24pIHtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uRGljdGlvbmFyeVtjb25uZWN0aW9uLmlkXSA9IGNvbm5lY3Rpb247XG4gICAgfVxuICAgIHN0YXRpYyBSZW1vdmVDb25uZWN0aW9uKGNvbm5lY3Rpb24pIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbm5lY3Rpb25BcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvbkFycmF5W2ldLmlkID09IGNvbm5lY3Rpb24uaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25BcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbm5lY3Rpb24uaWQgIT0gMCkge1xuICAgICAgICAgICAgLy8gIHJlbW92ZUZyb21EYXRhYmFzZShcImNvbm5lY3Rpb25cIixjb25uZWN0aW9uLmlkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgR2V0Q29ubmVjdGlvbihpZCkge1xuICAgICAgICB2YXIgbXlDb25jZXB0O1xuICAgICAgICBteUNvbmNlcHQgPSBudWxsO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29ubmVjdGlvbkFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uQXJyYXlbaV0uaWQgPT0gaWQpIHtcbiAgICAgICAgICAgICAgICBteUNvbmNlcHQgPSB0aGlzLmNvbm5lY3Rpb25BcnJheVtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbXlDb25jZXB0O1xuICAgIH1cbiAgICBzdGF0aWMgd2FpdEZvckRhdGFUb0xvYWQoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tGbGFnKHJlc29sdmUpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJub3RcIik7XG4gICAgICAgICAgICAgICAgfSwgMjUwMDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgY2hlY2tGbGFnKHJlc29sdmUpIHtcbiAgICAgICAgaWYgKElkZW50aWZpZXJGbGFncy5pc0xvY2FsQ29ubmVjdGlvbkxvYWRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoXCJkb25lXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dChMb2NhbENvbm5lY3Rpb25EYXRhLmNoZWNrRmxhZywgMTAwMCwgcmVzb2x2ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgO1xuICAgIHN0YXRpYyBHZXRDb25uZWN0aW9uc09mQ29tcG9zaXRpb25Mb2NhbChpZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdmFyIGNvbm5lY3Rpb25MaXN0ID0gW107XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBkYXRhID0geWllbGQgdGhpcy53YWl0Rm9yRGF0YVRvTG9hZCgpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb25uZWN0aW9uQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvbkFycmF5W2ldLnR5cGVJZCA9PSBpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbkxpc3QucHVzaCh0aGlzLmNvbm5lY3Rpb25BcnJheVtpXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbm5lY3Rpb25MaXN0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb25uZWN0aW9uTGlzdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxufVxuTG9jYWxDb25uZWN0aW9uRGF0YS5jb25uZWN0aW9uQXJyYXkgPSBbXTtcbkxvY2FsQ29ubmVjdGlvbkRhdGEuY29ubmVjdGlvbkRpY3Rpb25hcnkgPSBbXTtcbiIsImV4cG9ydCBjbGFzcyBOb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihrZXksIHZhbHVlLCBsZWZ0Tm9kZSwgcmlnaHROb2RlKSB7XG4gICAgICAgIHRoaXMudmFyaWFudHMgPSBbXTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxO1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmxlZnROb2RlID0gbGVmdE5vZGU7XG4gICAgICAgIHRoaXMucmlnaHROb2RlID0gcmlnaHROb2RlO1xuICAgICAgICB0aGlzLmN1cnJlbnROb2RlID0gbnVsbDtcbiAgICB9XG4gICAgYWRkQ3VycmVudE5vZGUocGFzc2VkTm9kZSwgbm9kZSkge1xuICAgICAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBub2RlID0gcGFzc2VkTm9kZTtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXNzZWROb2RlLnZhbHVlLnR5cGVJZCAhPSBub2RlLnZhbHVlLnR5cGVJZCkge1xuICAgICAgICAgICAgbm9kZS5jdXJyZW50Tm9kZSA9IHRoaXMuYWRkQ3VycmVudE5vZGUocGFzc2VkTm9kZSwgbm9kZS5jdXJyZW50Tm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIGFkZEN1cnJlbnROb2RlVHlwZShwYXNzZWROb2RlLCBub2RlKSB7XG4gICAgICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgICAgICAgIG5vZGUgPSBwYXNzZWROb2RlO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvbnRhaW5zID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZS52YXJpYW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKG5vZGUudmFyaWFudHNbaV0udmFsdWUuaWQgPT0gcGFzc2VkTm9kZS52YWx1ZS5pZCkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5zID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNvbnRhaW5zKSB7XG4gICAgICAgICAgICBub2RlLnZhcmlhbnRzLnB1c2gocGFzc2VkTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy9ub2RlLmN1cnJlbnROb2RlID0gdGhpcy5hZGRDdXJyZW50Tm9kZShwYXNzZWROb2RlLCBub2RlLmN1cnJlbnROb2RlKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIGFkZE5vZGUocGFzc2VkTm9kZSwgbm9kZSwgaGVpZ2h0KSB7XG4gICAgICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgICAgICAgIG5vZGUgPSBwYXNzZWROb2RlO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIExlZnROb2RlID0gbm9kZS5sZWZ0Tm9kZTtcbiAgICAgICAgdmFyIFJpZ2h0Tm9kZSA9IG5vZGUucmlnaHROb2RlO1xuICAgICAgICBpZiAobm9kZS5rZXkgPiBwYXNzZWROb2RlLmtleSkge1xuICAgICAgICAgICAgbm9kZS5sZWZ0Tm9kZSA9IHRoaXMuYWRkTm9kZShwYXNzZWROb2RlLCBMZWZ0Tm9kZSwgaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChub2RlLmtleSA8IHBhc3NlZE5vZGUua2V5KSB7XG4gICAgICAgICAgICBub2RlLnJpZ2h0Tm9kZSA9IHRoaXMuYWRkTm9kZShwYXNzZWROb2RlLCBSaWdodE5vZGUsIGhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZWxzZSBpZiAobm9kZS5rZXkgPT0gcGFzc2VkTm9kZS5rZXkgJiYgbm9kZS5rZXkgIT0gXCJcIil7XG4gICAgICAgIC8vICAgICBub2RlLmN1cnJlbnROb2RlID0gcGFzc2VkTm9kZTtcbiAgICAgICAgLy8gfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBwYXNzZWROb2RlO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUuaGVpZ2h0ID0gMSArIE1hdGgubWF4KHRoaXMuZ2V0SGVpZ2h0KG5vZGUubGVmdE5vZGUpLCB0aGlzLmdldEhlaWdodChub2RlLnJpZ2h0Tm9kZSkpO1xuICAgICAgICBsZXQgYmFsYW5jaW5nRmFjdG9yID0gdGhpcy5nZXRCYWxhbmNlRmFjdG9yKG5vZGUpO1xuICAgICAgICBpZiAoYmFsYW5jaW5nRmFjdG9yID4gMSkge1xuICAgICAgICAgICAgaWYgKG5vZGUubGVmdE5vZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAocGFzc2VkTm9kZS5rZXkgPCBub2RlLmxlZnROb2RlLmtleSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yaWdodFJvdGF0ZShub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocGFzc2VkTm9kZS5rZXkgPiBub2RlLmxlZnROb2RlLmtleSkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLmxlZnROb2RlID0gdGhpcy5sZWZ0Um90YXRlKG5vZGUubGVmdE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yaWdodFJvdGF0ZShub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJhbGFuY2luZ0ZhY3RvciA8IC0xKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5yaWdodE5vZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAocGFzc2VkTm9kZS5rZXkgPiBub2RlLnJpZ2h0Tm9kZS5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGVmdFJvdGF0ZShub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocGFzc2VkTm9kZS5rZXkgPCBub2RlLnJpZ2h0Tm9kZS5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5yaWdodE5vZGUgPSB0aGlzLnJpZ2h0Um90YXRlKG5vZGUucmlnaHROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGVmdFJvdGF0ZShub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIGFkZENoYXJhY3Rlck5vZGUocGFzc2VkTm9kZSwgbm9kZSwgaGVpZ2h0KSB7XG4gICAgICAgIHZhciBkZWJ1Z0ZsYWcgPSBmYWxzZTtcbiAgICAgICAgaWYgKHBhc3NlZE5vZGUudmFsdWUuY2hhcmFjdGVyVmFsdWUgIT0gXCJcIikge1xuICAgICAgICAgICAgLy8gaWYocGFzc2VkTm9kZS52YWx1ZS5jaGFyYWN0ZXJWYWx1ZSA9PSBcIkRlZmF1bHRcIil7XG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJkZWZhdWx0IGhlcmVcIik7XG4gICAgICAgICAgICAvLyAgICAgZGVidWdGbGFnID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGVidWdGbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXF1YWwgaGVyZVwiLCBub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbm9kZSA9IHBhc3NlZE5vZGU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiAobm9kZS5rZXkgPT0gcGFzc2VkTm9kZS5rZXkgJiYgbm9kZS5rZXkgIT0gXCJcIiApe1xuICAgICAgICAgICAgLy8gICAgIGlmKHBhc3NlZE5vZGUudmFsdWUuY2hhcmFjdGVyVmFsdWUgPT0gXCJEZWZhdWx0XCIpe1xuICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcImVxdWFsXCIpO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vICAgICBub2RlLmN1cnJlbnROb2RlID0gcGFzc2VkTm9kZTtcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIHZhciBMZWZ0Tm9kZSA9IG5vZGUubGVmdE5vZGU7XG4gICAgICAgICAgICB2YXIgUmlnaHROb2RlID0gbm9kZS5yaWdodE5vZGU7XG4gICAgICAgICAgICBpZiAobm9kZS5rZXkgPiBwYXNzZWROb2RlLmtleSkge1xuICAgICAgICAgICAgICAgIGlmIChkZWJ1Z0ZsYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsZWZ0ICBoZXJlXCIsIG5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBub2RlLmxlZnROb2RlID0gdGhpcy5hZGRDaGFyYWN0ZXJOb2RlKHBhc3NlZE5vZGUsIExlZnROb2RlLCBoZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobm9kZS5rZXkgPCBwYXNzZWROb2RlLmtleSkge1xuICAgICAgICAgICAgICAgIGlmIChkZWJ1Z0ZsYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyaWdodCBoZXJlXCIsIG5vZGUsIFJpZ2h0Tm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5vZGUucmlnaHROb2RlID0gdGhpcy5hZGRDaGFyYWN0ZXJOb2RlKHBhc3NlZE5vZGUsIFJpZ2h0Tm9kZSwgaGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGVsc2UgaWYgKG5vZGUua2V5ID09IHBhc3NlZE5vZGUua2V5ICYmIG5vZGUua2V5ICE9IFwiXCIpe1xuICAgICAgICAgICAgLy8gICAgIG5vZGUuY3VycmVudE5vZGUgPSBwYXNzZWROb2RlO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGRlYnVnRmxhZykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVsc2UgaGVyZVwiLCBub2RlLCBwYXNzZWROb2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUua2V5ID09IHBhc3NlZE5vZGUua2V5ICYmIG5vZGUua2V5ICE9IFwiXCIgJiYgbm9kZS52YWx1ZS5pZCAhPSBwYXNzZWROb2RlLnZhbHVlLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG5vZGUuY3VycmVudE5vZGUgPSB0aGlzLmFkZEN1cnJlbnROb2RlKHBhc3NlZE5vZGUsIG5vZGUuY3VycmVudE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLmFkZEN1cnJlbnROb2RlVHlwZShwYXNzZWROb2RlLCBub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub2RlLmhlaWdodCA9IDEgKyBNYXRoLm1heCh0aGlzLmdldEhlaWdodChub2RlLmxlZnROb2RlKSwgdGhpcy5nZXRIZWlnaHQobm9kZS5yaWdodE5vZGUpKTtcbiAgICAgICAgICAgIGlmIChkZWJ1Z0ZsYWcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImhlaWdodCBoZXJlXCIsIG5vZGUuaGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBiYWxhbmNpbmdGYWN0b3IgPSB0aGlzLmdldEJhbGFuY2VGYWN0b3Iobm9kZSk7XG4gICAgICAgICAgICBpZiAoZGVidWdGbGFnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJiYWxhbmNpbmdGYWN0b3IgaGVyZVwiLCBiYWxhbmNpbmdGYWN0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGJhbGFuY2luZ0ZhY3RvciA+IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5sZWZ0Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGFzc2VkTm9kZS5rZXkgPCBub2RlLmxlZnROb2RlLmtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJldHVybmVyID0gdGhpcy5yaWdodFJvdGF0ZShub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZWJ1Z0ZsYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJldHVybmluZyBoZXJlIDEgXCIsIHJldHVybmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5lcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwYXNzZWROb2RlLmtleSA+IG5vZGUubGVmdE5vZGUua2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmxlZnROb2RlID0gdGhpcy5sZWZ0Um90YXRlKG5vZGUubGVmdE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJldHVybmVyID0gdGhpcy5yaWdodFJvdGF0ZShub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZWJ1Z0ZsYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJldHVybmluZyBoZXJlIDIgXCIsIHJldHVybmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5lcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChiYWxhbmNpbmdGYWN0b3IgPCAtMSkge1xuICAgICAgICAgICAgICAgIGlmIChub2RlLnJpZ2h0Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGFzc2VkTm9kZS5rZXkgPiBub2RlLnJpZ2h0Tm9kZS5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXR1cm5lciA9IHRoaXMubGVmdFJvdGF0ZShub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZWJ1Z0ZsYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJldHVybmluZyBoZXJlIDMgXCIsIHJldHVybmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5lcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwYXNzZWROb2RlLmtleSA8IG5vZGUucmlnaHROb2RlLmtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5yaWdodE5vZGUgPSB0aGlzLnJpZ2h0Um90YXRlKG5vZGUucmlnaHROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXR1cm5lciA9IHRoaXMubGVmdFJvdGF0ZShub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZWJ1Z0ZsYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJldHVybmluZyBoZXJlNCBcIiwgcmV0dXJuZXIsIG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldHVybmVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRlYnVnRmxhZykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwid2hhdCBoZXJlXCIsIG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkZWJ1Z0ZsYWcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmV0dXJuaW5nIGhlcmUgNlwiLCBub2RlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgYWRkVHlwZU5vZGUocGFzc2VkTm9kZSwgbm9kZSwgaGVpZ2h0KSB7XG4gICAgICAgIHZhciBkZWJ1Z0ZsYWcgPSBmYWxzZTtcbiAgICAgICAgaWYgKHBhc3NlZE5vZGUudmFsdWUudHlwZUlkICE9IDApIHtcbiAgICAgICAgICAgIC8vIGlmKHBhc3NlZE5vZGUudmFsdWUuY2hhcmFjdGVyVmFsdWUgPT0gXCJEZWZhdWx0XCIpe1xuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiZGVmYXVsdCBoZXJlXCIpO1xuICAgICAgICAgICAgLy8gICAgIGRlYnVnRmxhZyA9IHRydWU7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRlYnVnRmxhZykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVxdWFsIGhlcmVcIiwgbm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5vZGUgPSBwYXNzZWROb2RlO1xuICAgICAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIExlZnROb2RlID0gbm9kZS5sZWZ0Tm9kZTtcbiAgICAgICAgICAgIHZhciBSaWdodE5vZGUgPSBub2RlLnJpZ2h0Tm9kZTtcbiAgICAgICAgICAgIGlmIChub2RlLmtleSA+IHBhc3NlZE5vZGUua2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKGRlYnVnRmxhZykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxlZnQgIGhlcmVcIiwgbm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5vZGUubGVmdE5vZGUgPSB0aGlzLmFkZFR5cGVOb2RlKHBhc3NlZE5vZGUsIExlZnROb2RlLCBoZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobm9kZS5rZXkgPCBwYXNzZWROb2RlLmtleSkge1xuICAgICAgICAgICAgICAgIGlmIChkZWJ1Z0ZsYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyaWdodCBoZXJlXCIsIG5vZGUsIFJpZ2h0Tm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5vZGUucmlnaHROb2RlID0gdGhpcy5hZGRUeXBlTm9kZShwYXNzZWROb2RlLCBSaWdodE5vZGUsIGhlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZGVidWdGbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZWxzZSBoZXJlXCIsIG5vZGUsIHBhc3NlZE5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobm9kZS5rZXkgPT0gcGFzc2VkTm9kZS5rZXkgJiYgbm9kZS5rZXkgIT0gMCAmJiBub2RlLnZhbHVlLmlkICE9IHBhc3NlZE5vZGUudmFsdWUuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5hZGRDdXJyZW50Tm9kZVR5cGUocGFzc2VkTm9kZSwgbm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZS5oZWlnaHQgPSAxICsgTWF0aC5tYXgodGhpcy5nZXRIZWlnaHQobm9kZS5sZWZ0Tm9kZSksIHRoaXMuZ2V0SGVpZ2h0KG5vZGUucmlnaHROb2RlKSk7XG4gICAgICAgICAgICBpZiAoZGVidWdGbGFnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJoZWlnaHQgaGVyZVwiLCBub2RlLmhlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgYmFsYW5jaW5nRmFjdG9yID0gdGhpcy5nZXRCYWxhbmNlRmFjdG9yKG5vZGUpO1xuICAgICAgICAgICAgaWYgKGRlYnVnRmxhZykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmFsYW5jaW5nRmFjdG9yIGhlcmVcIiwgYmFsYW5jaW5nRmFjdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChiYWxhbmNpbmdGYWN0b3IgPiAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUubGVmdE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhc3NlZE5vZGUua2V5IDwgbm9kZS5sZWZ0Tm9kZS5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXR1cm5lciA9IHRoaXMucmlnaHRSb3RhdGUobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVidWdGbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXR1cm5pbmcgaGVyZSAxIFwiLCByZXR1cm5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGFzc2VkTm9kZS5rZXkgPiBub2RlLmxlZnROb2RlLmtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5sZWZ0Tm9kZSA9IHRoaXMubGVmdFJvdGF0ZShub2RlLmxlZnROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXR1cm5lciA9IHRoaXMucmlnaHRSb3RhdGUobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVidWdGbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXR1cm5pbmcgaGVyZSAyIFwiLCByZXR1cm5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYmFsYW5jaW5nRmFjdG9yIDwgLTEpIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5yaWdodE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhc3NlZE5vZGUua2V5ID4gbm9kZS5yaWdodE5vZGUua2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmV0dXJuZXIgPSB0aGlzLmxlZnRSb3RhdGUobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVidWdGbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXR1cm5pbmcgaGVyZSAzIFwiLCByZXR1cm5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGFzc2VkTm9kZS5rZXkgPCBub2RlLnJpZ2h0Tm9kZS5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucmlnaHROb2RlID0gdGhpcy5yaWdodFJvdGF0ZShub2RlLnJpZ2h0Tm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmV0dXJuZXIgPSB0aGlzLmxlZnRSb3RhdGUobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVidWdGbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXR1cm5pbmcgaGVyZTQgXCIsIHJldHVybmVyLCBub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5lcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkZWJ1Z0ZsYWcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIndoYXQgaGVyZVwiLCBub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVidWdGbGFnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJldHVybmluZyBoZXJlIDZcIiwgbm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIHJpZ2h0Um90YXRlKHkpIHtcbiAgICAgICAgaWYgKHkpIHtcbiAgICAgICAgICAgIGxldCB4ID0geS5sZWZ0Tm9kZTtcbiAgICAgICAgICAgIGlmICh4KSB7XG4gICAgICAgICAgICAgICAgbGV0IFQyID0geC5yaWdodE5vZGU7XG4gICAgICAgICAgICAgICAgeS5sZWZ0Tm9kZSA9IFQyO1xuICAgICAgICAgICAgICAgIHgucmlnaHROb2RlID0geTtcbiAgICAgICAgICAgICAgICB5LmhlaWdodCA9IE1hdGgubWF4KHRoaXMuZ2V0SGVpZ2h0KHkubGVmdE5vZGUpLCB0aGlzLmdldEhlaWdodCh5LnJpZ2h0Tm9kZSkpICsgMTtcbiAgICAgICAgICAgICAgICB4LmhlaWdodCA9IE1hdGgubWF4KHRoaXMuZ2V0SGVpZ2h0KHgubGVmdE5vZGUpLCB0aGlzLmdldEhlaWdodCh4LnJpZ2h0Tm9kZSkpICsgMTtcbiAgICAgICAgICAgICAgICByZXR1cm4geDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHJldHVybiB4O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB5O1xuICAgIH1cbiAgICBsZWZ0Um90YXRlKHgpIHtcbiAgICAgICAgaWYgKHgpIHtcbiAgICAgICAgICAgIGxldCB5ID0geC5yaWdodE5vZGU7XG4gICAgICAgICAgICBpZiAoeSkge1xuICAgICAgICAgICAgICAgIGxldCBUMiA9IHkubGVmdE5vZGU7XG4gICAgICAgICAgICAgICAgeS5sZWZ0Tm9kZSA9IHg7XG4gICAgICAgICAgICAgICAgeC5yaWdodE5vZGUgPSBUMjtcbiAgICAgICAgICAgICAgICB4LmhlaWdodCA9IE1hdGgubWF4KHRoaXMuZ2V0SGVpZ2h0KHgubGVmdE5vZGUpLCB0aGlzLmdldEhlaWdodCh4LnJpZ2h0Tm9kZSkgKyAxKTtcbiAgICAgICAgICAgICAgICB5LmhlaWdodCA9IE1hdGgubWF4KHRoaXMuZ2V0SGVpZ2h0KHkubGVmdE5vZGUpLCB0aGlzLmdldEhlaWdodCh4LnJpZ2h0Tm9kZSkgKyAxKTtcbiAgICAgICAgICAgICAgICByZXR1cm4geTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vcmV0dXJuIHk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICAgIGdldEhlaWdodChub2RlKSB7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZS5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGdldEJhbGFuY2VGYWN0b3IoTikge1xuICAgICAgICBpZiAoTiA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5nZXRIZWlnaHQoTi5sZWZ0Tm9kZSkgLSB0aGlzLmdldEhlaWdodChOLnJpZ2h0Tm9kZSk7XG4gICAgfVxuICAgIGdldEZyb21Ob2RlKGlkLCBub2RlKSB7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICBpZiAoaWQgPT0gbm9kZS5rZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlkIDwgbm9kZS5rZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRGcm9tTm9kZShpZCwgbm9kZS5sZWZ0Tm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpZCA+IG5vZGUua2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RnJvbU5vZGUoaWQsIG5vZGUucmlnaHROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgICBnZXRDaGFyYWN0ZXJGcm9tTm9kZSh2YWx1ZSwgbm9kZSkge1xuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09IG5vZGUua2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh2YWx1ZSA8IG5vZGUua2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2hhcmFjdGVyRnJvbU5vZGUodmFsdWUsIG5vZGUubGVmdE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUgPiBub2RlLmtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldENoYXJhY3RlckZyb21Ob2RlKHZhbHVlLCBub2RlLnJpZ2h0Tm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgZ2V0RnJvbU5vZGVXaXRoQ2hhcmFjdGVyQW5kVHlwZSh2YWx1ZSwgdHlwZUlkLCBub2RlKSB7XG4gICAgICAgIHZhbHVlID0gYCR7dmFsdWV9YDtcbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PSBub2RlLmtleSkge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PSBub2RlLnZhbHVlLmNoYXJhY3RlclZhbHVlICYmIHR5cGVJZCA9PSBub2RlLnZhbHVlLnR5cGVJZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZS52YXJpYW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUudmFyaWFudHNbaV0udmFsdWUudHlwZUlkID09IHR5cGVJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBub2RlLnZhcmlhbnRzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiB0aGlzLmdldEZyb21Ob2RlV2l0aENoYXJhY3RlckFuZFR5cGUodmFsdWUsIHR5cGVJZCwgbm9kZS5jdXJyZW50Tm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUgPCBub2RlLmtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEZyb21Ob2RlV2l0aENoYXJhY3RlckFuZFR5cGUodmFsdWUsIHR5cGVJZCwgbm9kZS5sZWZ0Tm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh2YWx1ZSA+IG5vZGUua2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RnJvbU5vZGVXaXRoQ2hhcmFjdGVyQW5kVHlwZSh2YWx1ZSwgdHlwZUlkLCBub2RlLnJpZ2h0Tm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgcmVtb3ZlTm9kZShwYXNzZWROb2RlLCBpZCkge1xuICAgICAgICBpZiAocGFzc2VkTm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFzc2VkTm9kZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFzc2VkTm9kZS5rZXkgPiBpZCkge1xuICAgICAgICAgICAgcGFzc2VkTm9kZS5sZWZ0Tm9kZSA9IHRoaXMucmVtb3ZlTm9kZShwYXNzZWROb2RlLmxlZnROb2RlLCBpZCk7XG4gICAgICAgICAgICByZXR1cm4gcGFzc2VkTm9kZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwYXNzZWROb2RlLmtleSA8IGlkKSB7XG4gICAgICAgICAgICBwYXNzZWROb2RlLnJpZ2h0Tm9kZSA9IHRoaXMucmVtb3ZlTm9kZShwYXNzZWROb2RlLnJpZ2h0Tm9kZSwgaWQpO1xuICAgICAgICAgICAgcmV0dXJuIHBhc3NlZE5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYocGFzc2VkTm9kZS52YXJpYW50cy5sZW5ndGggPiAwKXtcbiAgICAgICAgLy8gICAgIGlmKHBhc3NlZE5vZGUudmFsdWUuaWQgPT0gaWQgKXtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIHZhciBuZXdOb2RlID0gcGFzc2VkTm9kZS52YXJpYW50c1swXTtcbiAgICAgICAgLy8gICAgIGlmKG5ld05vZGUpe1xuICAgICAgICAvLyAgICAgICAgIHBhc3NlZE5vZGUudmFsdWUgPSBuZXdOb2RlLnZhbHVlO1xuICAgICAgICAvLyAgICAgICAgIHBhc3NlZE5vZGUua2V5ID0gbmV3Tm9kZS5rZXk7XG4gICAgICAgIC8vICAgICAgICAgcGFzc2VkTm9kZS5jdXJyZW50Tm9kZSA9IG5ld05vZGUuY3VycmVudE5vZGU7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHBhc3NlZE5vZGU7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgaWYgKHBhc3NlZE5vZGUubGVmdE5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgbGV0IHRlbXAgPSBwYXNzZWROb2RlLnJpZ2h0Tm9kZTtcbiAgICAgICAgICAgIHBhc3NlZE5vZGUgPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIHRlbXA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGFzc2VkTm9kZS5yaWdodE5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgbGV0IHRlbXAgPSBwYXNzZWROb2RlLmxlZnROb2RlO1xuICAgICAgICAgICAgcGFzc2VkTm9kZSA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gdGVtcDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIHBhc3NpbmcgdGhlIHJpZ2h0Tm9kZSB0byB0aGUgaW5PcmRlclN1Y2Nlc3NvciBnaXZlcyB0aGUgaW1tZWRpYXRlIHN1Y2Nlc3NvciBvZiB0aGUgbm9kZVxuICAgICAgICAgICAgdmFyIGltbWVkaWF0ZVN1Y2Nlc3NvciA9IHRoaXMuaW5PcmRlclN1Y2Nlc3NvcihwYXNzZWROb2RlLnJpZ2h0Tm9kZSk7XG4gICAgICAgICAgICBwYXNzZWROb2RlLnZhbHVlID0gaW1tZWRpYXRlU3VjY2Vzc29yLnZhbHVlO1xuICAgICAgICAgICAgcGFzc2VkTm9kZS5rZXkgPSBpbW1lZGlhdGVTdWNjZXNzb3Iua2V5O1xuICAgICAgICAgICAgcGFzc2VkTm9kZS52YXJpYW50cyA9IGltbWVkaWF0ZVN1Y2Nlc3Nvci52YXJpYW50cztcbiAgICAgICAgICAgIHBhc3NlZE5vZGUuY3VycmVudE5vZGUgPSBpbW1lZGlhdGVTdWNjZXNzb3IuY3VycmVudE5vZGU7XG4gICAgICAgICAgICBwYXNzZWROb2RlLnJpZ2h0Tm9kZSA9IHRoaXMucmVtb3ZlTm9kZShwYXNzZWROb2RlLnJpZ2h0Tm9kZSwgaW1tZWRpYXRlU3VjY2Vzc29yLmtleSk7XG4gICAgICAgICAgICByZXR1cm4gcGFzc2VkTm9kZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW1vdmVOb2RlV2l0aFZhcmlhbnRzKHBhc3NlZE5vZGUsIHR5cGVJZGVudGlmaWVyLCBjb25jZXB0SWQpIHtcbiAgICAgICAgaWYgKHBhc3NlZE5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHBhc3NlZE5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhc3NlZE5vZGUua2V5ID4gdHlwZUlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgIHBhc3NlZE5vZGUubGVmdE5vZGUgPSB0aGlzLnJlbW92ZU5vZGVXaXRoVmFyaWFudHMocGFzc2VkTm9kZS5sZWZ0Tm9kZSwgdHlwZUlkZW50aWZpZXIsIGNvbmNlcHRJZCk7XG4gICAgICAgICAgICByZXR1cm4gcGFzc2VkTm9kZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwYXNzZWROb2RlLmtleSA8IHR5cGVJZGVudGlmaWVyKSB7XG4gICAgICAgICAgICBwYXNzZWROb2RlLnJpZ2h0Tm9kZSA9IHRoaXMucmVtb3ZlTm9kZVdpdGhWYXJpYW50cyhwYXNzZWROb2RlLnJpZ2h0Tm9kZSwgdHlwZUlkZW50aWZpZXIsIGNvbmNlcHRJZCk7XG4gICAgICAgICAgICByZXR1cm4gcGFzc2VkTm9kZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFzc2VkTm9kZS52YXJpYW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvL2NvbmRpdGlvbiBpZiB0aGUgbWFpbiBub2RlIGlzIGVxdWFsIHRvIHRoZSB2YWx1ZVxuICAgICAgICAgICAgaWYgKHBhc3NlZE5vZGUudmFsdWUuaWQgPT0gY29uY2VwdElkKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld05vZGUgPSBwYXNzZWROb2RlLnZhcmlhbnRzWzBdO1xuICAgICAgICAgICAgICAgIGlmIChuZXdOb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhc3NlZE5vZGUudmFsdWUgPSBuZXdOb2RlLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBwYXNzZWROb2RlLmtleSA9IG5ld05vZGUua2V5O1xuICAgICAgICAgICAgICAgICAgICBwYXNzZWROb2RlLmN1cnJlbnROb2RlID0gbmV3Tm9kZS5jdXJyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICAgICAgcGFzc2VkTm9kZS52YXJpYW50cy5zcGxpY2UoMCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXNzZWROb2RlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGluIHRoZSBjb25kaXRpb24gdGhhdCB0aGUgbWFpbiBub2RlIGlzIG5vdCBlcXVhbCB0byB0aGUgY2hlY2tpbmcgdmFsdWUgXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXNzZWROb2RlLnZhcmlhbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25jZXB0SWQgPT0gcGFzc2VkTm9kZS52YXJpYW50c1tpXS52YWx1ZS5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc2VkTm9kZS52YXJpYW50cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFzc2VkTm9kZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocGFzc2VkTm9kZS5sZWZ0Tm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBsZXQgdGVtcCA9IHBhc3NlZE5vZGUucmlnaHROb2RlO1xuICAgICAgICAgICAgcGFzc2VkTm9kZSA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gdGVtcDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwYXNzZWROb2RlLnJpZ2h0Tm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBsZXQgdGVtcCA9IHBhc3NlZE5vZGUubGVmdE5vZGU7XG4gICAgICAgICAgICBwYXNzZWROb2RlID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiB0ZW1wO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gcGFzc2luZyB0aGUgcmlnaHROb2RlIHRvIHRoZSBpbk9yZGVyU3VjY2Vzc29yIGdpdmVzIHRoZSBpbW1lZGlhdGUgc3VjY2Vzc29yIG9mIHRoZSBub2RlXG4gICAgICAgICAgICB2YXIgaW1tZWRpYXRlU3VjY2Vzc29yID0gdGhpcy5pbk9yZGVyU3VjY2Vzc29yKHBhc3NlZE5vZGUucmlnaHROb2RlKTtcbiAgICAgICAgICAgIHBhc3NlZE5vZGUudmFsdWUgPSBpbW1lZGlhdGVTdWNjZXNzb3IudmFsdWU7XG4gICAgICAgICAgICBwYXNzZWROb2RlLmtleSA9IGltbWVkaWF0ZVN1Y2Nlc3Nvci5rZXk7XG4gICAgICAgICAgICBwYXNzZWROb2RlLnZhcmlhbnRzID0gaW1tZWRpYXRlU3VjY2Vzc29yLnZhcmlhbnRzO1xuICAgICAgICAgICAgcGFzc2VkTm9kZS5jdXJyZW50Tm9kZSA9IGltbWVkaWF0ZVN1Y2Nlc3Nvci5jdXJyZW50Tm9kZTtcbiAgICAgICAgICAgIHBhc3NlZE5vZGUucmlnaHROb2RlID0gdGhpcy5yZW1vdmVOb2RlV2l0aFZhcmlhbnRzKHBhc3NlZE5vZGUucmlnaHROb2RlLCBpbW1lZGlhdGVTdWNjZXNzb3Iua2V5LCBjb25jZXB0SWQpO1xuICAgICAgICAgICAgcmV0dXJuIHBhc3NlZE5vZGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY291bnROb2RlQmVsb3cocm9vdCkge1xuICAgICAgICBpZiAocm9vdCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICAvL3JlY3Vyc2l2ZSBjYWxsIHRvIGxlZnQgY2hpbGQgYW5kIHJpZ2h0IGNoaWxkIGFuZFxuICAgICAgICAvLyBhZGQgdGhlIHJlc3VsdCBvZiB0aGVzZSB3aXRoIDEgKCAxIGZvciBjb3VudGluZyB0aGUgcm9vdClcbiAgICAgICAgcmV0dXJuIDEgKyB0aGlzLmNvdW50Tm9kZUJlbG93KHJvb3QubGVmdE5vZGUpICsgdGhpcy5jb3VudE5vZGVCZWxvdyhyb290LnJpZ2h0Tm9kZSk7XG4gICAgfVxuICAgIGluT3JkZXJTdWNjZXNzb3Iocm9vdCkge1xuICAgICAgICB3aGlsZSAocm9vdC5sZWZ0Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICByb290ID0gcm9vdC5sZWZ0Tm9kZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm9vdDtcbiAgICB9XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IEdldFJlc2VydmVkSWRzIH0gZnJvbSBcIi4uL0FwaS9HZXRSZXNlcnZlZElkc1wiO1xuZXhwb3J0IGNsYXNzIFJlc2VydmVkSWRzIHtcbiAgICBzdGF0aWMgZ2V0SWQoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pZHMubGVuZ3RoIDwgNSkge1xuICAgICAgICAgICAgICAgIHZhciBpZHMgPSB5aWVsZCBHZXRSZXNlcnZlZElkcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGlkID0gdGhpcy5pZHNbMF07XG4gICAgICAgICAgICB0aGlzLmlkcy5zaGlmdCgpO1xuICAgICAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIEFkZElkKGlkKSB7XG4gICAgICAgIGlmICghdGhpcy5pZHMuaW5jbHVkZXMoaWQpKSB7XG4gICAgICAgICAgICB0aGlzLmlkcy5wdXNoKGlkKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblJlc2VydmVkSWRzLmlkcyA9IFtdO1xuIiwiZXhwb3J0IGNsYXNzIFJldHVybmVyIHtcbiAgICBjb25zdHJ1Y3RvcihpZCwgdXNlcklkLCByZWZlcmVudElkLCBpc05ldykge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMudXNlcklkID0gdXNlcklkO1xuICAgICAgICB0aGlzLnJlZmVyZW50SWQgPSByZWZlcmVudElkO1xuICAgICAgICB0aGlzLmlzTmV3ID0gaXNOZXc7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFNldHRpbmdEYXRhIHtcbiAgICBjb25zdHJ1Y3Rvcihpc09ubGluZVN5bmMpIHtcbiAgICAgICAgdGhpcy5pZCA9IDE7XG4gICAgICAgIHRoaXMuaXNPbmxpbmVTeW5jID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNPbmxpbmVTeW5jID0gaXNPbmxpbmVTeW5jO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBTZXR0aW5ncyB7XG59XG5TZXR0aW5ncy5pc1VwZGF0ZWQgPSBmYWxzZTtcblNldHRpbmdzLmlzT25saW5lU3luYyA9IGZhbHNlO1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBzdG9yZVRvRGF0YWJhc2UgfSBmcm9tIFwiLi8uLi9EYXRhYmFzZS9pbmRleGVkZGJcIjtcbmltcG9ydCB7IENyZWF0ZVRoZUNvbmNlcHRBcGkgfSBmcm9tIFwiLi4vQXBpL0NyZWF0ZS9DcmVhdGVUaGVDb25jZXB0QXBpXCI7XG5pbXBvcnQgeyBDcmVhdGVUaGVDb25uZWN0aW9uQXBpIH0gZnJvbSBcIi4uL0FwaS9DcmVhdGUvQ3JlYXRlVGhlQ29ubmVjdGlvbkFwaVwiO1xuaW1wb3J0IHsgQ29uY2VwdHNEYXRhIH0gZnJvbSBcIi4vQ29uY2VwdERhdGFcIjtcbmltcG9ydCB7IENvbm5lY3Rpb25EYXRhIH0gZnJvbSBcIi4vQ29ubmVjdGlvbkRhdGFcIjtcbmV4cG9ydCBjbGFzcyBTeW5jRGF0YSB7XG4gICAgc3RhdGljIENoZWNrQ29udGFpbnMoY29uY2VwdCkge1xuICAgICAgICB2YXIgY29udGFpbnMgPSBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbmNlcHRzU3luY0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25jZXB0c1N5bmNBcnJheVtpXS5pZCA9PSBjb25jZXB0LmlkKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbnMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250YWlucztcbiAgICB9XG4gICAgc3RhdGljIFN5bmNEYXRhRGVsZXRlKGlkKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb25jZXB0c1N5bmNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGlkID09IHRoaXMuY29uY2VwdHNTeW5jQXJyYXlbaV0uaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmNlcHRzU3luY0FycmF5LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29ubmVjdGlvblN5bmNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvblN5bmNBcnJheVtpXS5vZlRoZUNvbmNlcHRJZCA9PSBpZCB8fCB0aGlzLmNvbm5lY3Rpb25TeW5jQXJyYXlbaV0udG9UaGVDb25jZXB0SWQgPT0gaWQgfHwgdGhpcy5jb25uZWN0aW9uU3luY0FycmF5W2ldLnR5cGVJZCA9PSBpZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvblN5bmNBcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIENoZWNrQ29udGFpbnNDb25uZWN0aW9uKGNvbm5lY3Rpb24pIHtcbiAgICAgICAgdmFyIGNvbnRhaW5zID0gZmFsc2U7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb25uZWN0aW9uU3luY0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uU3luY0FycmF5W2ldLmlkID09IGNvbm5lY3Rpb24uaWQpIHtcbiAgICAgICAgICAgICAgICBjb250YWlucyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5zO1xuICAgIH1cbiAgICBzdGF0aWMgQWRkQ29uY2VwdChjb25jZXB0KSB7XG4gICAgICAgIHZhciBjb250YWlucyA9IGZhbHNlO1xuICAgICAgICAvLyBDb25jZXB0c0RhdGEuQWRkQ29uY2VwdFRlbXBvcmFyeShjb25jZXB0KTtcbiAgICAgICAgaWYgKCFjb250YWlucykge1xuICAgICAgICAgICAgdGhpcy5jb25jZXB0c1N5bmNBcnJheS5wdXNoKGNvbmNlcHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBSZW1vdmVDb25jZXB0KGNvbmNlcHQpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbmNlcHRzU3luY0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25jZXB0c1N5bmNBcnJheVtpXS5pZCA9PSBjb25jZXB0LmlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25jZXB0c1N5bmNBcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIEFkZENvbm5lY3Rpb24oY29ubmVjdGlvbikge1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb25TeW5jQXJyYXkucHVzaChjb25uZWN0aW9uKTtcbiAgICB9XG4gICAgc3RhdGljIFJlbW92ZUNvbm5lY3Rpb24oY29ubmVjdGlvbikge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29ubmVjdGlvblN5bmNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvblN5bmNBcnJheVtpXS5pZCA9PSBjb25uZWN0aW9uLmlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uU3luY0FycmF5LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgU3luY0RhdGFPbmxpbmUoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29uY2VwdHNTeW5jQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBDb25jZXB0c0RhdGEuQWRkQ29uY2VwdCh0aGlzLmNvbmNlcHRzU3luY0FycmF5W2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb25uZWN0aW9uU3luY0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgQ29ubmVjdGlvbkRhdGEuQWRkQ29ubmVjdGlvbih0aGlzLmNvbm5lY3Rpb25TeW5jQXJyYXlbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuY29uY2VwdHNTeW5jQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHlpZWxkIENyZWF0ZVRoZUNvbmNlcHRBcGkodGhpcy5jb25jZXB0c1N5bmNBcnJheSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25jZXB0c1N5bmNBcnJheSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvblN5bmNBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgQ3JlYXRlVGhlQ29ubmVjdGlvbkFwaSh0aGlzLmNvbm5lY3Rpb25TeW5jQXJyYXkpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvblN5bmNBcnJheSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFwiZG9uZVwiO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIHN5bmNEYXRhTG9jYWxEYigpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmNlcHRzU3luY0FycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29uY2VwdHNTeW5jQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVUb0RhdGFiYXNlKFwibG9jYWxjb25jZXB0XCIsIHRoaXMuY29uY2VwdHNTeW5jQXJyYXlbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNvbmNlcHRzU3luY0FycmF5ID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uU3luY0FycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29ubmVjdGlvblN5bmNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZVRvRGF0YWJhc2UoXCJsb2NhbGNvbm5lY3Rpb25cIiwgdGhpcy5jb25uZWN0aW9uU3luY0FycmF5W2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uU3luY0FycmF5ID0gW107XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5jb25uZWN0aW9uU3luY0FycmF5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBcImRvbmVcIjtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuU3luY0RhdGEuY29uY2VwdHNTeW5jQXJyYXkgPSBbXTtcblN5bmNEYXRhLmNvbm5lY3Rpb25TeW5jQXJyYXkgPSBbXTtcbiIsImV4cG9ydCBjbGFzcyBUaGVDaGFyYWN0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHVzZXJJZCwgZGF0YSwgc2VjdXJpdHlJZCwgc2VjdXJpdHlVc2VySWQsIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQsIHNlc3Npb25JZCwgc2Vzc2lvblVzZXJJZCwgZW50cnlUaW1lc3RhbXAsIGlzTmV3KSB7XG4gICAgICAgIHRoaXMuaWQgPSAwO1xuICAgICAgICB0aGlzLmlzTmV3ID0gZmFsc2U7XG4gICAgICAgIHRoaXMudXNlcklkID0gdXNlcklkO1xuICAgICAgICB0aGlzLmRhdGEgPSBgJHtkYXRhfWA7XG4gICAgICAgIHRoaXMuc2VjdXJpdHlJZCA9IHNlY3VyaXR5SWQ7XG4gICAgICAgIHRoaXMuc2VjdXJpdHlVc2VySWQgPSBzZWN1cml0eVVzZXJJZDtcbiAgICAgICAgdGhpcy5hY2Nlc3NJZCA9IGFjY2Vzc0lkO1xuICAgICAgICB0aGlzLmFjY2Vzc1VzZXJJZCA9IGFjY2Vzc1VzZXJJZDtcbiAgICAgICAgdGhpcy5zZXNzaW9uSWQgPSBzZXNzaW9uSWQ7XG4gICAgICAgIHRoaXMuc2Vzc2lvblVzZXJJZCA9IHNlc3Npb25Vc2VySWQ7XG4gICAgICAgIHRoaXMuaXNOZXcgPSBpc05ldztcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVGhlVGV4dHMge1xuICAgIGNvbnN0cnVjdG9yKHVzZXJJZCwgZGF0YSwgc2VjdXJpdHlJZCwgc2VjdXJpdHlVc2VySWQsIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQsIHNlc3Npb25JZCwgc2Vzc2lvblVzZXJJZCwgZW50cnlUaW1lc3RhbXAsIGlzTmV3KSB7XG4gICAgICAgIHRoaXMuaWQgPSAwO1xuICAgICAgICB0aGlzLnVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5zZWN1cml0eUlkID0gc2VjdXJpdHlJZDtcbiAgICAgICAgdGhpcy5zZWN1cml0eVVzZXJJZCA9IHNlY3VyaXR5VXNlcklkO1xuICAgICAgICB0aGlzLmFjY2Vzc0lkID0gYWNjZXNzSWQ7XG4gICAgICAgIHRoaXMuYWNjZXNzVXNlcklkID0gYWNjZXNzVXNlcklkO1xuICAgICAgICB0aGlzLnNlc3Npb25JZCA9IHNlc3Npb25JZDtcbiAgICAgICAgdGhpcy5zZXNzaW9uVXNlcklkID0gc2Vzc2lvblVzZXJJZDtcbiAgICAgICAgdGhpcy5lbnRyeVRpbWVzdGFtcCA9IGVudHJ5VGltZXN0YW1wO1xuICAgICAgICB0aGlzLmlzTmV3ID0gaXNOZXc7XG4gICAgfVxufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgdmVyc2lvbiA9IDQ7XG5leHBvcnQgZnVuY3Rpb24gb3BlbkRhdGFiYXNlKGRhdGFiYXNlTmFtZSkge1xuICAgIGxldCBkYjtcbiAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4oXCJGcmVlU2NoZW1hTG9jYWxcIiwgdmVyc2lvbik7XG4gICAgcmVxdWVzdC5vbmVycm9yID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJXaHkgZGlkbid0IHlvdSBhbGxvdyBteSB3ZWIgYXBwIHRvIHVzZSBJbmRleGVkREI/IVwiKTtcbiAgICB9O1xuICAgIHJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIHZhciBkYiA9IHRhcmdldC5yZXN1bHQ7XG4gICAgICAgIGxldCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKGRhdGFiYXNlTmFtZSwgXCJyZWFkd3JpdGVcIik7XG4gICAgfTtcbiAgICByZXF1ZXN0Lm9udXBncmFkZW5lZWRlZCA9IChldmVudCkgPT4ge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICB2YXIgZGIgPSB0YXJnZXQucmVzdWx0O1xuICAgICAgICB2YXIgY29uY2VwdERiID0gXCJsb2NhbGNvbmNlcHRcIjtcbiAgICAgICAgdmFyIGNvbm5lY3Rpb25EYiA9IFwibG9jYWxjb25uZWN0aW9uXCI7XG4gICAgICAgIGlmICghZGIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucyhjb25jZXB0RGIpKSB7IC8vIGlmIHRoZXJlJ3Mgbm8gZGF0YWJhc2UgbmFtZVxuICAgICAgICAgICAgbGV0IG9iamVjdFN0b3JlID0gZGIuY3JlYXRlT2JqZWN0U3RvcmUoY29uY2VwdERiLCB7IGtleVBhdGg6ICdpZCcgfSk7IC8vIGNyZWF0ZSBpdFxuICAgICAgICAgICAgb2JqZWN0U3RvcmUudHJhbnNhY3Rpb24ub25jb21wbGV0ZSA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoY29ubmVjdGlvbkRiKSkgeyAvLyBpZiB0aGVyZSdzIG5vIGRhdGFiYXNlIG5hbWVcbiAgICAgICAgICAgIGxldCBvYmplY3RTdG9yZSA9IGRiLmNyZWF0ZU9iamVjdFN0b3JlKGNvbm5lY3Rpb25EYiwgeyBrZXlQYXRoOiAnaWQnIH0pOyAvLyBjcmVhdGUgaXRcbiAgICAgICAgICAgIG9iamVjdFN0b3JlLnRyYW5zYWN0aW9uLm9uY29tcGxldGUgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JlVG9EYXRhYmFzZShkYXRhYmFzZU5hbWUsIG9iamVjdCkge1xuICAgIG9wZW5EYXRhYmFzZShkYXRhYmFzZU5hbWUpO1xuICAgIGxldCBkYjtcbiAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4oXCJGcmVlU2NoZW1hTG9jYWxcIiwgdmVyc2lvbik7XG4gICAgcmVxdWVzdC5vbmVycm9yID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJXaHkgZGlkbid0IHlvdSBhbGxvdyBteSB3ZWIgYXBwIHRvIHVzZSBJbmRleGVkREI/IVwiKTtcbiAgICB9O1xuICAgIHJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIHZhciBkYiA9IHRhcmdldC5yZXN1bHQ7XG4gICAgICAgIGxldCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKGRhdGFiYXNlTmFtZSwgXCJyZWFkd3JpdGVcIik7XG4gICAgICAgIGxldCBvYmpTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKGRhdGFiYXNlTmFtZSk7XG4gICAgICAgIG9ialN0b3JlLmFkZChvYmplY3QpO1xuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsRnJvbUxvY2FsRGIoZGF0YWJhc2VOYW1lKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIG9wZW5EYXRhYmFzZShkYXRhYmFzZU5hbWUpO1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKFwiRnJlZVNjaGVtYUxvY2FsXCIsIHZlcnNpb24pO1xuICAgICAgICAgICAgdmFyIGNvbmNlcHQ7XG4gICAgICAgICAgICB2YXIgQ29uY2VwdExpc3QgPSBbXTtcbiAgICAgICAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgICAgICB2YXIgZGIgPSB0YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgICAgIGxldCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKGRhdGFiYXNlTmFtZSwgXCJyZWFkd3JpdGVcIik7XG4gICAgICAgICAgICAgICAgbGV0IG9iamVjdFN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoZGF0YWJhc2VOYW1lKTtcbiAgICAgICAgICAgICAgICB2YXIgYWxsb2JqZWN0cyA9IG9iamVjdFN0b3JlLmdldEFsbCgpO1xuICAgICAgICAgICAgICAgIGFsbG9iamVjdHMub25zdWNjZXNzID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHVkZW50cyA9IGFsbG9iamVjdHMucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0dWRlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDb25jZXB0TGlzdC5wdXNoKHN0dWRlbnRzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKENvbmNlcHRMaXN0KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIC8vICAgLy8gRGF0YWJhc2Ugb3BlbmVkIHN1Y2Nlc3NmdWxseVxuICAgICAgICAgICAgICAgIC8vIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGV2ZW50KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICAvLyByZXR1cm4gQ29uY2VwdExpc3Q7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRnJvbURhdGFiYXNlKGRhdGFiYXNlTmFtZSwgaWQpIHtcbiAgICBvcGVuRGF0YWJhc2UoZGF0YWJhc2VOYW1lKTtcbiAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4oXCJGcmVlU2NoZW1hTG9jYWxcIiwgdmVyc2lvbik7XG4gICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgdmFyIGRiID0gdGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgbGV0IHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24oZGF0YWJhc2VOYW1lLCBcInJlYWR3cml0ZVwiKTtcbiAgICAgICAgbGV0IG9iamVjdFN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoZGF0YWJhc2VOYW1lKTtcbiAgICAgICAgbGV0IGdldFJlcXVlc3QgPSBvYmplY3RTdG9yZS5kZWxldGUoaWQpO1xuICAgICAgICBnZXRSZXF1ZXN0Lm9uc3VjY2VzcyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgIC8vIGNvbmNlcHQgPSAgZXZlbnQudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICAgIC8vIEFjY2VzcyB0aGUgcmV0cmlldmVkIGRhdGFcbiAgICAgICAgfTtcbiAgICB9O1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBTZXR0aW5nRGF0YSB9IGZyb20gXCIuLi9EYXRhU3RydWN0dXJlcy9TZXR0aW5nRGF0YVwiO1xuaW1wb3J0IHsgQmFzZVVybCB9IGZyb20gXCIuLi9EYXRhU3RydWN0dXJlcy9CYXNlVXJsXCI7XG52YXIgdmVyc2lvbiA9IDQ7XG5leHBvcnQgZnVuY3Rpb24gb3BlbkRhdGFiYXNlKGRhdGFiYXNlTmFtZSkge1xuICAgIGxldCBkYjtcbiAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4oQmFzZVVybC5CQVNFX1VSTCArIFwiX0ZyZWVTY2hlbWFcIiwgdmVyc2lvbik7XG4gICAgcmVxdWVzdC5vbmVycm9yID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJXaHkgZGlkbid0IHlvdSBhbGxvdyBteSB3ZWIgYXBwIHRvIHVzZSBJbmRleGVkREI/IVwiKTtcbiAgICB9O1xuICAgIHJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIHZhciBkYiA9IHRhcmdldC5yZXN1bHQ7XG4gICAgICAgIGxldCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKGRhdGFiYXNlTmFtZSwgXCJyZWFkd3JpdGVcIik7XG4gICAgfTtcbiAgICByZXF1ZXN0Lm9udXBncmFkZW5lZWRlZCA9IChldmVudCkgPT4ge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICB2YXIgZGIgPSB0YXJnZXQucmVzdWx0O1xuICAgICAgICB2YXIgY29uY2VwdERiID0gXCJjb25jZXB0XCI7XG4gICAgICAgIHZhciBjb25uZWN0aW9uRGIgPSBcImNvbm5lY3Rpb25cIjtcbiAgICAgICAgdmFyIHNldHRpbmdzID0gXCJzZXR0aW5nc1wiO1xuICAgICAgICBpZiAoIWRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoY29uY2VwdERiKSkgeyAvLyBpZiB0aGVyZSdzIG5vIGRhdGFiYXNlIG5hbWVcbiAgICAgICAgICAgIGxldCBvYmplY3RTdG9yZSA9IGRiLmNyZWF0ZU9iamVjdFN0b3JlKGNvbmNlcHREYiwgeyBrZXlQYXRoOiAnaWQnIH0pOyAvLyBjcmVhdGUgaXRcbiAgICAgICAgICAgIG9iamVjdFN0b3JlLnRyYW5zYWN0aW9uLm9uY29tcGxldGUgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBTdG9yZSB2YWx1ZXMgaW4gdGhlIG5ld2x5IGNyZWF0ZWQgb2JqZWN0U3RvcmUuXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgbXlPYmplY3RTdG9yZSA9IGRiXG4gICAgICAgICAgICAgICAgLy8gLnRyYW5zYWN0aW9uKGRhdGFiYXNlTmFtZSwgXCJyZWFkd3JpdGVcIilcbiAgICAgICAgICAgICAgICAvLyAub2JqZWN0U3RvcmUoZGF0YWJhc2VOYW1lKTtcbiAgICAgICAgICAgICAgICAvLyBteU9iamVjdFN0b3JlLmFkZChvYmplY3QpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoY29ubmVjdGlvbkRiKSkgeyAvLyBpZiB0aGVyZSdzIG5vIGRhdGFiYXNlIG5hbWVcbiAgICAgICAgICAgIGxldCBvYmplY3RTdG9yZSA9IGRiLmNyZWF0ZU9iamVjdFN0b3JlKGNvbm5lY3Rpb25EYiwgeyBrZXlQYXRoOiAnaWQnIH0pOyAvLyBjcmVhdGUgaXRcbiAgICAgICAgICAgIG9iamVjdFN0b3JlLnRyYW5zYWN0aW9uLm9uY29tcGxldGUgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFkYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKHNldHRpbmdzKSkge1xuICAgICAgICAgICAgbGV0IG9iamVjdFN0b3JlID0gZGIuY3JlYXRlT2JqZWN0U3RvcmUoc2V0dGluZ3MsIHsga2V5UGF0aDogJ2lkJyB9KTsgLy8gY3JlYXRlIGl0XG4gICAgICAgICAgICBvYmplY3RTdG9yZS50cmFuc2FjdGlvbi5vbmNvbXBsZXRlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzdG9yZVRvRGF0YWJhc2UoZGF0YWJhc2VOYW1lLCBvYmplY3QpIHtcbiAgICBvcGVuRGF0YWJhc2UoZGF0YWJhc2VOYW1lKTtcbiAgICBsZXQgZGI7XG4gICAgY29uc3QgcmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKEJhc2VVcmwuQkFTRV9VUkwgKyBcIl9GcmVlU2NoZW1hXCIsIHZlcnNpb24pO1xuICAgIHJlcXVlc3Qub25lcnJvciA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiV2h5IGRpZG4ndCB5b3UgYWxsb3cgbXkgd2ViIGFwcCB0byB1c2UgSW5kZXhlZERCPyFcIik7XG4gICAgfTtcbiAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAob2JqZWN0LmlkICE9IDApIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICB2YXIgZGIgPSB0YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgbGV0IHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24oZGF0YWJhc2VOYW1lLCBcInJlYWR3cml0ZVwiKTtcbiAgICAgICAgICAgIGxldCBvYmpTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKGRhdGFiYXNlTmFtZSk7XG4gICAgICAgICAgICBvYmpTdG9yZS5hZGQob2JqZWN0KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gcmVxdWVzdC5vbnVwZ3JhZGVuZWVkZWQgPSAoZXZlbnQpID0+IHtcbiAgICAvLyAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBJREJPcGVuREJSZXF1ZXN0O1xuICAgIC8vICAgICB2YXIgZGIgPSB0YXJnZXQucmVzdWx0IGFzIElEQkRhdGFiYXNlO1xuICAgIC8vICAgICB2YXIgY29uY2VwdERiID0gXCJjb25jZXB0XCI7XG4gICAgLy8gICAgIHZhciBjb25uZWN0aW9uRGIgPSBcImNvbm5lY3Rpb25cIjtcbiAgICAvLyAgICAgdmFyIHNldHRpbmdzID0gXCJzZXR0aW5nc1wiXG4gICAgLy8gICAgIGlmICghZGIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucyhjb25jZXB0RGIpKSB7IC8vIGlmIHRoZXJlJ3Mgbm8gZGF0YWJhc2UgbmFtZVxuICAgIC8vICAgICAgIGxldCAgb2JqZWN0U3RvcmUgPSBkYi5jcmVhdGVPYmplY3RTdG9yZShjb25jZXB0RGIsIHtrZXlQYXRoOiAnaWQnfSk7IC8vIGNyZWF0ZSBpdFxuICAgIC8vICAgICAgIG9iamVjdFN0b3JlLnRyYW5zYWN0aW9uLm9uY29tcGxldGUgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgLy8gU3RvcmUgdmFsdWVzIGluIHRoZSBuZXdseSBjcmVhdGVkIG9iamVjdFN0b3JlLlxuICAgIC8vICAgICAgICAgICAgIC8vIGNvbnN0IG15T2JqZWN0U3RvcmUgPSBkYlxuICAgIC8vICAgICAgICAgICAgIC8vIC50cmFuc2FjdGlvbihkYXRhYmFzZU5hbWUsIFwicmVhZHdyaXRlXCIpXG4gICAgLy8gICAgICAgICAgICAgLy8gLm9iamVjdFN0b3JlKGRhdGFiYXNlTmFtZSk7XG4gICAgLy8gICAgICAgICAgICAgLy8gbXlPYmplY3RTdG9yZS5hZGQob2JqZWN0KTtcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaWYgKCFkYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKGNvbm5lY3Rpb25EYikpIHsgLy8gaWYgdGhlcmUncyBubyBkYXRhYmFzZSBuYW1lXG4gICAgLy8gICAgICAgbGV0ICBvYmplY3RTdG9yZSA9IGRiLmNyZWF0ZU9iamVjdFN0b3JlKGNvbm5lY3Rpb25EYiwge2tleVBhdGg6ICdpZCd9KTsgLy8gY3JlYXRlIGl0XG4gICAgLy8gICAgICAgb2JqZWN0U3RvcmUudHJhbnNhY3Rpb24ub25jb21wbGV0ZSA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaWYoIWRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoc2V0dGluZ3MpKXtcbiAgICAvLyAgICAgICBsZXQgIG9iamVjdFN0b3JlID0gZGIuY3JlYXRlT2JqZWN0U3RvcmUoc2V0dGluZ3MsIHtrZXlQYXRoOiAnaWQnfSk7IC8vIGNyZWF0ZSBpdFxuICAgIC8vICAgICAgIG9iamVjdFN0b3JlLnRyYW5zYWN0aW9uLm9uY29tcGxldGUgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEZyb21EYXRhYmFzZShkYXRhYmFzZU5hbWUsIGlkKSB7XG4gICAgb3BlbkRhdGFiYXNlKGRhdGFiYXNlTmFtZSk7XG4gICAgY29uc3QgcmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKEJhc2VVcmwuQkFTRV9VUkwgKyBcIl9GcmVlU2NoZW1hXCIsIHZlcnNpb24pO1xuICAgIHZhciBjb25jZXB0O1xuICAgIHJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIHZhciBkYiA9IHRhcmdldC5yZXN1bHQ7XG4gICAgICAgIGxldCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKGRhdGFiYXNlTmFtZSwgXCJyZWFkd3JpdGVcIik7XG4gICAgICAgIGxldCBvYmplY3RTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKGRhdGFiYXNlTmFtZSk7XG4gICAgICAgIGxldCBnZXRSZXF1ZXN0ID0gb2JqZWN0U3RvcmUuZ2V0KGlkKTtcbiAgICAgICAgZ2V0UmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICBjb25jZXB0ID0gdGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICAgIHJldHVybiBjb25jZXB0O1xuICAgICAgICAgICAgLy8gY29uY2VwdCA9ICBldmVudC50YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgLy8gQWNjZXNzIHRoZSByZXRyaWV2ZWQgZGF0YVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gY29uY2VwdDtcbiAgICAgICAgLy8gICAvLyBEYXRhYmFzZSBvcGVuZWQgc3VjY2Vzc2Z1bGx5XG4gICAgICAgIC8vIH07XG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBHZXRTdGF0c0Zyb21EYXRhYmFzZSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgZGF0YWJhc2VOYW1lID0gXCJzZXR0aW5nc1wiO1xuICAgICAgICBvcGVuRGF0YWJhc2UoZGF0YWJhc2VOYW1lKTtcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKEJhc2VVcmwuQkFTRV9VUkwgKyBcIl9GcmVlU2NoZW1hXCIsIHZlcnNpb24pO1xuICAgICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgIHZhciBkYiA9IHRhcmdldC5yZXN1bHQ7XG4gICAgICAgICAgICBsZXQgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbihkYXRhYmFzZU5hbWUsIFwicmVhZHdyaXRlXCIpO1xuICAgICAgICAgICAgbGV0IG9iamVjdFN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoZGF0YWJhc2VOYW1lKTtcbiAgICAgICAgICAgIHZhciBhbGxvYmplY3RzID0gb2JqZWN0U3RvcmUuZ2V0QWxsKCk7XG4gICAgICAgICAgICBhbGxvYmplY3RzLm9uc3VjY2VzcyA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgc2V0dGluZ3NEYXRhID0gbmV3IFNldHRpbmdEYXRhKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB2YXIgc2V0dGluZ3NBcnJheSA9IGFsbG9iamVjdHMucmVzdWx0O1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2V0dGluZ3NBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nc0RhdGEgPSBzZXR0aW5nc0FycmF5W2ldO1xuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nc0RhdGEgPSBzZXR0aW5nc0RhdGE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUoc2V0dGluZ3NEYXRhKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgcmVqZWN0KGV2ZW50KTtcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBBaVVwZGF0ZUZsYWcob2JqZWN0KSB7XG4gICAgdmFyIGRhdGFiYXNlTmFtZSA9IFwic2V0dGluZ3NcIjtcbiAgICBvcGVuRGF0YWJhc2UoZGF0YWJhc2VOYW1lKTtcbiAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4oQmFzZVVybC5CQVNFX1VSTCArIFwiX0ZyZWVTY2hlbWFcIiwgdmVyc2lvbik7XG4gICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgdmFyIGRiID0gdGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgbGV0IHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24oZGF0YWJhc2VOYW1lLCBcInJlYWR3cml0ZVwiKTtcbiAgICAgICAgbGV0IG9ialN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoZGF0YWJhc2VOYW1lKTtcbiAgICAgICAgY29uc29sZS5sb2cob2JqZWN0KTtcbiAgICAgICAgb2JqU3RvcmUucHV0KG9iamVjdCk7XG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRGcm9tRGF0YWJhc2VXaXRoVHlwZShkYXRhYmFzZU5hbWUsIHR5cGUsIGlkKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIG9wZW5EYXRhYmFzZShkYXRhYmFzZU5hbWUpO1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKEJhc2VVcmwuQkFTRV9VUkwgKyBcIl9GcmVlU2NoZW1hXCIsIHZlcnNpb24pO1xuICAgICAgICAgICAgdmFyIGNvbmNlcHQ7XG4gICAgICAgICAgICB2YXIgQ29uY2VwdExpc3QgPSBbXTtcbiAgICAgICAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgICAgICB2YXIgZGIgPSB0YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgICAgIGxldCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKGRhdGFiYXNlTmFtZSwgXCJyZWFkd3JpdGVcIik7XG4gICAgICAgICAgICAgICAgbGV0IG9iamVjdFN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoZGF0YWJhc2VOYW1lKTtcbiAgICAgICAgICAgICAgICBjb25zdCBnZXRDdXJzb3JSZXF1ZXN0ID0gb2JqZWN0U3RvcmUub3BlbkN1cnNvcigpO1xuICAgICAgICAgICAgICAgIGdldEN1cnNvclJlcXVlc3Qub25zdWNjZXNzID0gZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEN1cnNvciBsb2dpYyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnNvciA9IHRhcmdldC5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJzb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJzb3IudmFsdWVbdHlwZV0gPT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25jZXB0ID0gY3Vyc29yLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbmNlcHRMaXN0LnB1c2goY29uY2VwdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IuY29udGludWUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShDb25jZXB0TGlzdCk7XG4gICAgICAgICAgICAgICAgLy8gICAvLyBEYXRhYmFzZSBvcGVuZWQgc3VjY2Vzc2Z1bGx5XG4gICAgICAgICAgICAgICAgLy8gfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXZlbnQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHJldHVybiBDb25jZXB0TGlzdDtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRGcm9tRGF0YWJhc2VXaXRoVHlwZU9sZChkYXRhYmFzZU5hbWUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgb3BlbkRhdGFiYXNlKGRhdGFiYXNlTmFtZSk7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4oQmFzZVVybC5CQVNFX1VSTCArIFwiX0ZyZWVTY2hlbWFcIiwgdmVyc2lvbik7XG4gICAgICAgICAgICB2YXIgY29uY2VwdDtcbiAgICAgICAgICAgIHZhciBDb25jZXB0TGlzdCA9IFtdO1xuICAgICAgICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgICAgIHZhciBkYiA9IHRhcmdldC5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgbGV0IHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24oZGF0YWJhc2VOYW1lLCBcInJlYWR3cml0ZVwiKTtcbiAgICAgICAgICAgICAgICBsZXQgb2JqZWN0U3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShkYXRhYmFzZU5hbWUpO1xuICAgICAgICAgICAgICAgIHZhciBhbGxvYmplY3RzID0gb2JqZWN0U3RvcmUuZ2V0QWxsKCk7XG4gICAgICAgICAgICAgICAgYWxsb2JqZWN0cy5vbnN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0dWRlbnRzID0gYWxsb2JqZWN0cy5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R1ZGVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmNlcHRMaXN0LnB1c2goc3R1ZGVudHNbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoQ29uY2VwdExpc3QpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgLy8gICAvLyBEYXRhYmFzZSBvcGVuZWQgc3VjY2Vzc2Z1bGx5XG4gICAgICAgICAgICAgICAgLy8gfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXZlbnQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHJldHVybiBDb25jZXB0TGlzdDtcbiAgICB9KTtcbn1cbi8vICAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZyb21EYXRhYmFzZVdpdGhDaGFyYWN0ZXJPbGQoZGF0YWJhc2VOYW1lOnN0cmluZywgdHlwZTpzdHJpbmcsIGNoYXJhY3RlclZhbHVlOnN0cmluZyl7XG4vLyAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4vLyAgICAgb3BlbkRhdGFiYXNlKGRhdGFiYXNlTmFtZSk7XG4vLyAgICAgY29uc3QgcmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKFwiRnJlZVNjaGVtYVwiLHZlcnNpb24pO1xuLy8gICAgIHZhciBjb25jZXB0OiBDb25jZXB0fG51bGw7XG4vLyAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbihldmVudCkge1xuLy8gICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIElEQk9wZW5EQlJlcXVlc3Q7XG4vLyAgICAgICAgIHZhciBkYiA9IHRhcmdldC5yZXN1bHQgYXMgSURCRGF0YWJhc2U7XG4vLyAgICAgICBsZXQgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbihkYXRhYmFzZU5hbWUsIFwicmVhZHdyaXRlXCIpIGFzIElEQlRyYW5zYWN0aW9uO1xuLy8gICAgICAgbGV0IG9iamVjdFN0b3JlID10cmFuc2FjdGlvbi5vYmplY3RTdG9yZShkYXRhYmFzZU5hbWUpIGFzIElEQk9iamVjdFN0b3JlO1xuLy8gICAgICAgdmFyIGFsbG9iamVjdHMgPSBvYmplY3RTdG9yZS5nZXRBbGwoKTtcbi8vICAgICAgIGFsbG9iamVjdHMub25zdWNjZXNzID0gKCk9PiB7XG4vLyAgICAgICAgIGNvbnN0IHN0dWRlbnRzID0gYWxsb2JqZWN0cy5yZXN1bHQ7XG4vLyAgICAgICAgIGZvcih2YXIgaT0wOyBpPHN0dWRlbnRzLmxlbmd0aDsgaSsrKXtcbi8vICAgICAgICAgICBpZihzdHVkZW50c1tpXS5jaGFyYWN0ZXJfdmFsdWUgPT0gY2hhcmFjdGVyVmFsdWUpe1xuLy8gICAgICAgICAgICAgY29uY2VwdCA9IHN0dWRlbnRzW2ldO1xuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgICAgICBjb25zb2xlLmxvZyhcInJlc29sdmluZ1wiKTtcbi8vICAgICAgICAgcmVzb2x2ZShjb25jZXB0KTsgXG4vLyAgICAgfVxuLy8gICAgIC8vICAgLy8gRGF0YWJhc2Ugb3BlbmVkIHN1Y2Nlc3NmdWxseVxuLy8gICAgIC8vIH07XG4vLyAgICAgfVxuLy8gICAgIHJlcXVlc3Qub25lcnJvciA9ZnVuY3Rpb24oZXZlbnQpe1xuLy8gICAgICAgcmVqZWN0KGV2ZW50KTtcbi8vICAgICB9XG4vLyB9KTtcbi8vICAgIC8vIHJldHVybiBDb25jZXB0TGlzdDtcbi8vICAgfVxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUZyb21EYXRhYmFzZShkYXRhYmFzZU5hbWUsIGlkKSB7XG4gICAgb3BlbkRhdGFiYXNlKGRhdGFiYXNlTmFtZSk7XG4gICAgY29uc3QgcmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKEJhc2VVcmwuQkFTRV9VUkwgKyBcIl9GcmVlU2NoZW1hXCIsIHZlcnNpb24pO1xuICAgIHJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIHZhciBkYiA9IHRhcmdldC5yZXN1bHQ7XG4gICAgICAgIGxldCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKGRhdGFiYXNlTmFtZSwgXCJyZWFkd3JpdGVcIik7XG4gICAgICAgIGxldCBvYmplY3RTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKGRhdGFiYXNlTmFtZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGVsZXRpbmcgZnJvbSB0aGUgZGF0YWJhc2VcIiwgaWQpO1xuICAgICAgICBsZXQgZ2V0UmVxdWVzdCA9IG9iamVjdFN0b3JlLmRlbGV0ZShOdW1iZXIoaWQpKTtcbiAgICAgICAgZ2V0UmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRlbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xuICAgICAgICAgICAgLy8gY29uY2VwdCA9ICBldmVudC50YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgLy8gQWNjZXNzIHRoZSByZXRyaWV2ZWQgZGF0YVxuICAgICAgICB9O1xuICAgIH07XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IGdldEZyb21EYXRhYmFzZVdpdGhUeXBlT2xkIH0gZnJvbSBcIi4uL0RhdGFiYXNlL2luZGV4ZWRkYlwiO1xuaW1wb3J0IHsgQ29uY2VwdHNEYXRhIH0gZnJvbSBcIi4uL0RhdGFTdHJ1Y3R1cmVzL0NvbmNlcHREYXRhXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVCaW5hcnlUcmVlRnJvbURhdGEoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgY29uY2VwdExpc3QgPSB5aWVsZCBnZXRGcm9tRGF0YWJhc2VXaXRoVHlwZU9sZChcImNvbmNlcHRcIik7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNvbmNlcHRMaXN0KSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb25jZXB0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBjb25jZXB0ID0gY29uY2VwdExpc3RbaV07XG4gICAgICAgICAgICAgICAgQ29uY2VwdHNEYXRhLkFkZENvbmNlcHQoY29uY2VwdCk7XG4gICAgICAgICAgICAgICAgLy8gbGV0IG5vZGUgPSBuZXcgTm9kZShjb25jZXB0LmlkLCBjb25jZXB0LCBudWxsLCBudWxsKTtcbiAgICAgICAgICAgICAgICAvLyBCaW5hcnlUcmVlLmFkZE5vZGVUb1RyZWUobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVuZFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIHRpbWUgPSBlbmRUaW1lIC0gc3RhcnRUaW1lO1xuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBDb25uZWN0aW9uIH0gZnJvbSBcIi4uL0RhdGFTdHJ1Y3R1cmVzL0Nvbm5lY3Rpb25cIjtcbmltcG9ydCB7IFN5bmNEYXRhIH0gZnJvbSBcIi4uL0RhdGFTdHJ1Y3R1cmVzL1N5bmNEYXRhXCI7XG5pbXBvcnQgTWFrZVRoZUluc3RhbmNlQ29uY2VwdCBmcm9tIFwiLi9NYWtlVGhlSW5zdGFuY2VDb25jZXB0XCI7XG5leHBvcnQgZnVuY3Rpb24gQ3JlYXRlQ29ubmVjdGlvbkJldHdlZW5Ud29Db25jZXB0cyhjb25jZXB0MURhdGEsIGNvbmNlcHQyRGF0YSwgbGlua2VyLCBib3RoID0gZmFsc2UpIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciB1c2VySWQgPSBjb25jZXB0MURhdGEudXNlcklkO1xuICAgICAgICB2YXIgb3JkZXJVc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHZhciBzZWN1cml0eUlkID0gOTk5O1xuICAgICAgICB2YXIgc2VjdXJpdHlVc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHZhciBhY2Nlc3NJZCA9IDQ7XG4gICAgICAgIHZhciBhY2Nlc3NVc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHZhciBzZXNzaW9uSW5mb3JtYXRpb25JZCA9IDk5OTtcbiAgICAgICAgdmFyIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCA9IDk5OTtcbiAgICAgICAgaWYgKGJvdGgpIHtcbiAgICAgICAgICAgIGxldCBwcmVmaXgxID0gKChfYSA9IGNvbmNlcHQxRGF0YS50eXBlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2hhcmFjdGVyVmFsdWUpICsgXCJfc1wiO1xuICAgICAgICAgICAgbGV0IGxpbmtlckFkZDEgPSBsaW5rZXIgKyBcIl9ieVwiO1xuICAgICAgICAgICAgbGV0IGJhY2t3YXJkTGlua2VyID0gcHJlZml4MSArIFwiX1wiICsgbGlua2VyQWRkMTtcbiAgICAgICAgICAgIHZhciBjb25uZWN0aW9uQ29uY2VwdFJldmVyc2UgPSB5aWVsZCBNYWtlVGhlSW5zdGFuY2VDb25jZXB0KFwiY29ubmVjdGlvblwiLCBiYWNrd2FyZExpbmtlciwgZmFsc2UsIDk5OSwgOTk5LCA5OTkpO1xuICAgICAgICAgICAgdmFyIG5ld0Nvbm5lY3Rpb24gPSBuZXcgQ29ubmVjdGlvbigwLCBjb25jZXB0MkRhdGEuaWQsIGNvbmNlcHQxRGF0YS5pZCwgY29uY2VwdDJEYXRhLnVzZXJJZCwgY29uY2VwdDFEYXRhLnVzZXJJZCwgY29uY2VwdDJEYXRhLnVzZXJJZCwgY29ubmVjdGlvbkNvbmNlcHRSZXZlcnNlLmlkLCBjb25uZWN0aW9uQ29uY2VwdFJldmVyc2UudXNlcklkLCAxMDAwLCB1c2VySWQsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkKTtcbiAgICAgICAgICAgIFN5bmNEYXRhLkFkZENvbm5lY3Rpb24obmV3Q29ubmVjdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHByZWZpeCA9ICgoX2IgPSBjb25jZXB0MURhdGEudHlwZSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNoYXJhY3RlclZhbHVlKSArIFwiX3NcIjtcbiAgICAgICAgbGV0IGxpbmtlckFkZCA9IGxpbmtlciArIFwiX3NcIjtcbiAgICAgICAgbGV0IGZvcndhcmRMaW5rZXIgPSBwcmVmaXggKyBcIl9cIiArIGxpbmtlckFkZDtcbiAgICAgICAgdmFyIGNvbm5lY3Rpb25Db25jZXB0ID0geWllbGQgTWFrZVRoZUluc3RhbmNlQ29uY2VwdChcImNvbm5lY3Rpb25cIiwgZm9yd2FyZExpbmtlciwgZmFsc2UsIDk5OSwgOTk5LCA5OTkpO1xuICAgICAgICB2YXIgbmV3Q29ubmVjdGlvbiA9IG5ldyBDb25uZWN0aW9uKDAsIGNvbmNlcHQxRGF0YS5pZCwgY29uY2VwdDJEYXRhLmlkLCBjb25jZXB0MURhdGEudXNlcklkLCBjb25jZXB0MkRhdGEudXNlcklkLCBjb25jZXB0MURhdGEudXNlcklkLCBjb25uZWN0aW9uQ29uY2VwdC5pZCwgY29ubmVjdGlvbkNvbmNlcHQudXNlcklkLCAxMDAwLCB1c2VySWQsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkKTtcbiAgICAgICAgU3luY0RhdGEuQWRkQ29ubmVjdGlvbihuZXdDb25uZWN0aW9uKTtcbiAgICB9KTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgQ29uY2VwdCB9IGZyb20gXCIuLi9EYXRhU3RydWN0dXJlcy9Db25jZXB0XCI7XG5pbXBvcnQgY3JlYXRlVGhlQ29ubmVjdGlvbiBmcm9tIFwiLi9DcmVhdGVUaGVDb25uZWN0aW9uXCI7XG5pbXBvcnQgTWFrZVRoZUluc3RhbmNlQ29uY2VwdCBmcm9tIFwiLi9NYWtlVGhlSW5zdGFuY2VDb25jZXB0XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVUaGVDb21wb3NpdGlvbihqc29uLCBvZlRoZUNvbmNlcHRJZCA9IG51bGwsIG9mVGhlQ29uY2VwdFVzZXJJZCA9IG51bGwsIG1haW5LZXkgPSBudWxsLCB1c2VySWQgPSBudWxsLCBhY2Nlc3NJZCA9IG51bGwsIHNlc3Npb25JbmZvcm1hdGlvbklkID0gbnVsbCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBsb2NhbFVzZXJJZCA9IHVzZXJJZCAhPT0gbnVsbCAmJiB1c2VySWQgIT09IHZvaWQgMCA/IHVzZXJJZCA6IDEwMjY3O1xuICAgICAgICB2YXIgbG9jYWxBY2Nlc3NJZCA9IGFjY2Vzc0lkICE9PSBudWxsICYmIGFjY2Vzc0lkICE9PSB2b2lkIDAgPyBhY2Nlc3NJZCA6IDEwMjY3O1xuICAgICAgICB2YXIgbG9jYWxTZXNzaW9uSWQgPSBzZXNzaW9uSW5mb3JtYXRpb25JZCAhPT0gbnVsbCAmJiBzZXNzaW9uSW5mb3JtYXRpb25JZCAhPT0gdm9pZCAwID8gc2Vzc2lvbkluZm9ybWF0aW9uSWQgOiAxMDI2NztcbiAgICAgICAgdmFyIE1haW5LZXlMb2NhbCA9IG1haW5LZXkgIT09IG51bGwgJiYgbWFpbktleSAhPT0gdm9pZCAwID8gbWFpbktleSA6IDA7XG4gICAgICAgIHZhciBNYWluQ29uY2VwdCA9IG5ldyBDb25jZXB0KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIFwiMFwiLCAwLCAwLCAwLCAwLCAwLCAwLCBmYWxzZSk7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGpzb24pIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YganNvbltrZXldICE9ICdzdHJpbmcnICYmIHR5cGVvZiBqc29uW2tleV0gIT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICBpZiAob2ZUaGVDb25jZXB0SWQgPT0gbnVsbCAmJiBvZlRoZUNvbmNlcHRVc2VySWQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbG9jYWxNYWluS2V5ID0gTWFpbktleUxvY2FsO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY29uY2VwdFN0cmluZyA9IHlpZWxkIE1ha2VUaGVJbnN0YW5jZUNvbmNlcHQoa2V5LCBcIlwiLCB0cnVlLCBsb2NhbFVzZXJJZCwgbG9jYWxBY2Nlc3NJZCwgbG9jYWxTZXNzaW9uSWQpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29uY2VwdCA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgIE1haW5Db25jZXB0ID0gY29uY2VwdDtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxNYWluS2V5ID0gY29uY2VwdC5pZDtcbiAgICAgICAgICAgICAgICAgICAgTWFpbktleUxvY2FsID0gY29uY2VwdC5pZDtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgQ3JlYXRlVGhlQ29tcG9zaXRpb24oanNvbltrZXldLCBjb25jZXB0LmlkLCBjb25jZXB0LnVzZXJJZCwgbG9jYWxNYWluS2V5LCB1c2VySWQsIGFjY2Vzc0lkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2ZUaGUgPSBvZlRoZUNvbmNlcHRJZCAhPT0gbnVsbCAmJiBvZlRoZUNvbmNlcHRJZCAhPT0gdm9pZCAwID8gb2ZUaGVDb25jZXB0SWQgOiA5OTk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvZlRoZVVzZXIgPSBvZlRoZUNvbmNlcHRVc2VySWQgIT09IG51bGwgJiYgb2ZUaGVDb25jZXB0VXNlcklkICE9PSB2b2lkIDAgPyBvZlRoZUNvbmNlcHRVc2VySWQgOiAxMDI2NztcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxvY2FsTWFpbktleSA9IE1haW5LZXlMb2NhbDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCBNYWtlVGhlSW5zdGFuY2VDb25jZXB0KGtleSwgXCJcIiwgdHJ1ZSwgbG9jYWxVc2VySWQsIGxvY2FsQWNjZXNzSWQsIGxvY2FsU2Vzc2lvbklkKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmNlcHQgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBjcmVhdGVUaGVDb25uZWN0aW9uKG9mVGhlLCBvZlRoZVVzZXIsIGNvbmNlcHQuaWQsIGNvbmNlcHQudXNlcklkLCBsb2NhbE1haW5LZXksIGxvY2FsU2Vzc2lvbklkLCBjb25jZXB0LnVzZXJJZCk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIENyZWF0ZVRoZUNvbXBvc2l0aW9uKGpzb25ba2V5XSwgY29uY2VwdC5pZCwgY29uY2VwdC51c2VySWQsIGxvY2FsTWFpbktleSwgdXNlcklkLCBhY2Nlc3NJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBvZlRoZSA9IG9mVGhlQ29uY2VwdElkICE9PSBudWxsICYmIG9mVGhlQ29uY2VwdElkICE9PSB2b2lkIDAgPyBvZlRoZUNvbmNlcHRJZCA6IDk5OTtcbiAgICAgICAgICAgICAgICB2YXIgb2ZUaGVVc2VyID0gb2ZUaGVDb25jZXB0VXNlcklkICE9PSBudWxsICYmIG9mVGhlQ29uY2VwdFVzZXJJZCAhPT0gdm9pZCAwID8gb2ZUaGVDb25jZXB0VXNlcklkIDogMTAyNjc7XG4gICAgICAgICAgICAgICAgdmFyIGxvY2FsTWFpbktleSA9IE1haW5LZXlMb2NhbDtcbiAgICAgICAgICAgICAgICB2YXIgY29uY2VwdFN0cmluZyA9IHlpZWxkIE1ha2VUaGVJbnN0YW5jZUNvbmNlcHQoa2V5LCBqc29uW2tleV0sIGZhbHNlLCBsb2NhbFVzZXJJZCwgbG9jYWxBY2Nlc3NJZCwgbG9jYWxTZXNzaW9uSWQpO1xuICAgICAgICAgICAgICAgIHZhciBjb25jZXB0ID0gY29uY2VwdFN0cmluZztcbiAgICAgICAgICAgICAgICB5aWVsZCBjcmVhdGVUaGVDb25uZWN0aW9uKG9mVGhlLCBvZlRoZVVzZXIsIGNvbmNlcHQuaWQsIGNvbmNlcHQudXNlcklkLCBsb2NhbE1haW5LZXksIGxvY2FsU2Vzc2lvbklkLCBjb25jZXB0LnVzZXJJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE1haW5Db25jZXB0O1xuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBDb25jZXB0IH0gZnJvbSBcIi4uL0RhdGFTdHJ1Y3R1cmVzL0NvbmNlcHRcIjtcbmltcG9ydCB7IFJlc2VydmVkSWRzIH0gZnJvbSBcIi4uL0RhdGFTdHJ1Y3R1cmVzL1Jlc2VydmVkSWRzXCI7XG5pbXBvcnQgeyBTeW5jRGF0YSB9IGZyb20gXCIuLi9EYXRhU3RydWN0dXJlcy9TeW5jRGF0YVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlVGhlQ29uY2VwdChyZWZlcmVudCwgdXNlcklkLCBjYXRlZ29yeUlkLCBjYXRlZ29yeVVzZXJJZCwgdHlwZUlkLCB0eXBlVXNlcklkLCByZWZlcmVudElkLCByZWZlcmVudFVzZXJJZCwgc2VjdXJpdHlJZCwgc2VjdXJpdHlVc2VySWQsIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQsIHNlc3Npb25JbmZvcm1hdGlvbklkLCBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgaWQgPSB5aWVsZCBSZXNlcnZlZElkcy5nZXRJZCgpO1xuICAgICAgICB2YXIgaXNOZXcgPSB0cnVlO1xuICAgICAgICB2YXIgY29uY2VwdCA9IG5ldyBDb25jZXB0KGlkLCB1c2VySWQsIHR5cGVJZCwgdHlwZVVzZXJJZCwgY2F0ZWdvcnlJZCwgY2F0ZWdvcnlVc2VySWQsIHJlZmVyZW50SWQsIHJlZmVyZW50VXNlcklkLCByZWZlcmVudCwgc2VjdXJpdHlJZCwgc2VjdXJpdHlVc2VySWQsIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQsIHNlc3Npb25JbmZvcm1hdGlvbklkLCBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQsIGlzTmV3KTtcbiAgICAgICAgY29uY2VwdC5pc1RlbXAgPSB0cnVlO1xuICAgICAgICBTeW5jRGF0YS5BZGRDb25jZXB0KGNvbmNlcHQpO1xuICAgICAgICByZXR1cm4gY29uY2VwdDtcbiAgICB9KTtcbn1cbiIsImltcG9ydCB7IENvbm5lY3Rpb24gfSBmcm9tIFwiLi4vRGF0YVN0cnVjdHVyZXMvQ29ubmVjdGlvblwiO1xuaW1wb3J0IHsgU3luY0RhdGEgfSBmcm9tIFwiLi4vRGF0YVN0cnVjdHVyZXMvU3luY0RhdGFcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVRoZUNvbm5lY3Rpb24ob2ZUaGVDb25jZXB0SWQsIG9mVGhlQ29uY2VwdFVzZXJJZCwgdG9UaGVDb25jZXB0SWQsIHRvVGhlQ29uY2VwdFVzZXJJZCwgdHlwZUlkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkKSB7XG4gICAgdmFyIG9yZGVySWQgPSAxO1xuICAgIHZhciBvcmRlclVzZXJJZCA9IG9mVGhlQ29uY2VwdFVzZXJJZDtcbiAgICB2YXIgdHlwZVVzZXJJZCA9IG9mVGhlQ29uY2VwdFVzZXJJZDtcbiAgICB2YXIgdXNlcklkID0gb2ZUaGVDb25jZXB0VXNlcklkO1xuICAgIHZhciBzZWN1cml0eUlkID0gMDtcbiAgICB2YXIgc2VjdXJpdHlVc2VySWQgPSBvZlRoZUNvbmNlcHRVc2VySWQ7XG4gICAgdmFyIGFjY2Vzc0lkID0gNDtcbiAgICB2YXIgYWNjZXNzVXNlcklkID0gb2ZUaGVDb25jZXB0VXNlcklkO1xuICAgIGlmIChvZlRoZUNvbmNlcHRJZCAhPSB0b1RoZUNvbmNlcHRJZCkge1xuICAgICAgICB2YXIgY29ubmVjdGlvbiA9IG5ldyBDb25uZWN0aW9uKDAsIG9mVGhlQ29uY2VwdElkLCB0b1RoZUNvbmNlcHRJZCwgb2ZUaGVDb25jZXB0VXNlcklkLCB0b1RoZUNvbmNlcHRVc2VySWQsIHVzZXJJZCwgdHlwZUlkLCB0eXBlVXNlcklkLCBvcmRlcklkLCBvcmRlclVzZXJJZCwgc2VjdXJpdHlJZCwgc2VjdXJpdHlVc2VySWQsIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQsIHNlc3Npb25JbmZvcm1hdGlvbklkLCBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQpO1xuICAgICAgICBjb25uZWN0aW9uLmlzVGVtcCA9IHRydWU7XG4gICAgICAgIGNvbm5lY3Rpb24uaWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApO1xuICAgICAgICBTeW5jRGF0YS5BZGRDb25uZWN0aW9uKGNvbm5lY3Rpb24pO1xuICAgIH1cbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgQmluYXJ5Q2hhcmFjdGVyVHJlZSB9IGZyb20gXCIuLi9EYXRhU3RydWN0dXJlcy9CaW5hcnlDaGFyYWN0ZXJUcmVlXCI7XG5pbXBvcnQgeyBCaW5hcnlUcmVlIH0gZnJvbSBcIi4uL0RhdGFTdHJ1Y3R1cmVzL0JpbmFyeVRyZWVcIjtcbmltcG9ydCB7IEJpbmFyeVR5cGVUcmVlIH0gZnJvbSBcIi4uL0RhdGFTdHJ1Y3R1cmVzL0JpbmFyeVR5cGVUcmVlXCI7XG5pbXBvcnQgeyByZW1vdmVGcm9tRGF0YWJhc2UgfSBmcm9tIFwiLi4vRGF0YWJhc2UvaW5kZXhlZGRiXCI7XG5pbXBvcnQgR2V0VGhlQ29uY2VwdCBmcm9tIFwiLi9HZXRUaGVDb25jZXB0XCI7XG5leHBvcnQgZnVuY3Rpb24gRGVsZXRlQ29uY2VwdEJ5SWQoaWQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgY29uY2VwdCA9IHlpZWxkIEdldFRoZUNvbmNlcHQoaWQpO1xuICAgICAgICB5aWVsZCBCaW5hcnlUcmVlLnJlbW92ZU5vZGVGcm9tVHJlZShpZCk7XG4gICAgICAgIHZhciB0eXBlSWQgPSBjb25jZXB0LnR5cGVJZDtcbiAgICAgICAgdmFyIGNoYXJhY3RlciA9IGNvbmNlcHQuY2hhcmFjdGVyVmFsdWU7XG4gICAgICAgIHlpZWxkIEJpbmFyeVR5cGVUcmVlLnJlbW92ZVR5cGVDb25jZXB0KHR5cGVJZCwgaWQpO1xuICAgICAgICB5aWVsZCBCaW5hcnlDaGFyYWN0ZXJUcmVlLnJlbW92ZU5vZGVCeUNoYXJhY3RlcihjaGFyYWN0ZXIsIGlkKTtcbiAgICAgICAgcmVtb3ZlRnJvbURhdGFiYXNlKFwiY29uY2VwdFwiLCBpZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgdXBkYXRlZCBiaW5hcnkgdHJlZVwiLCBCaW5hcnlDaGFyYWN0ZXJUcmVlLmNoYXJhY3RlclJvb3QpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMgaXMgdGhlIG51bWJlciBvZiBub2Rlc1wiLCBCaW5hcnlDaGFyYWN0ZXJUcmVlLmNvdW50TnVtYmVyT2ZOb2RlcygpKTtcbiAgICB9KTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgQ29ubmVjdGlvbkJpbmFyeVRyZWUgfSBmcm9tIFwiLi4vRGF0YVN0cnVjdHVyZXMvQ29ubmVjdGlvbkJpbmFyeVRyZWUvQ29ubmVjdGlvbkJpbmFyeVRyZWVcIjtcbmltcG9ydCB7IENvbm5lY3Rpb25UeXBlVHJlZSB9IGZyb20gXCIuLi9EYXRhU3RydWN0dXJlcy9Db25uZWN0aW9uQmluYXJ5VHJlZS9Db25uZWN0aW9uVHlwZVRyZWVcIjtcbmltcG9ydCB7IHJlbW92ZUZyb21EYXRhYmFzZSB9IGZyb20gXCIuLi9EYXRhYmFzZS9pbmRleGVkZGJcIjtcbmltcG9ydCB7IEdldENvbm5lY3Rpb25CeUlkIH0gZnJvbSBcIi4vR2V0Q29ubmVjdGlvbnNcIjtcbmV4cG9ydCBmdW5jdGlvbiBEZWxldGVDb25uZWN0aW9uQnlJZChpZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBjb25uZWN0aW9uID0geWllbGQgR2V0Q29ubmVjdGlvbkJ5SWQoaWQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMgaXMgdGhlIGNvbm5lY3Rpb25cIiwgY29ubmVjdGlvbik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgY29ubmVjdGlvbiBiaW5hcnkgdHJlZSBiZWZvcmVcIiwgQ29ubmVjdGlvblR5cGVUcmVlLmNvbm5lY3Rpb25UeXBlUm9vdCk7XG4gICAgICAgIHJlbW92ZUZyb21EYXRhYmFzZShcImNvbm5lY3Rpb25cIiwgaWQpO1xuICAgICAgICBDb25uZWN0aW9uQmluYXJ5VHJlZS5yZW1vdmVOb2RlRnJvbVRyZWUoaWQpO1xuICAgICAgICBDb25uZWN0aW9uVHlwZVRyZWUucmVtb3ZlVHlwZUNvbmNlcHQoY29ubmVjdGlvbi50eXBlSWQsIGlkKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSBjb25uZWN0aW9uIGJpbmFyeSB0cmVlXCIsIENvbm5lY3Rpb25UeXBlVHJlZS5jb25uZWN0aW9uVHlwZVJvb3QpO1xuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBHZXRDb25jZXB0IH0gZnJvbSBcIi4uL0FwaS9HZXRDb25jZXB0XCI7XG5pbXBvcnQgeyBHZXRBbGxDb25uZWN0aW9uc09mQ29tcG9zaXRpb24gfSBmcm9tIFwiLi4vQXBpL0dldEFsbENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvblwiO1xuaW1wb3J0IHsgQ29uY2VwdHNEYXRhIH0gZnJvbSBcIi4uL0RhdGFTdHJ1Y3R1cmVzL0NvbmNlcHREYXRhXCI7XG5leHBvcnQgZnVuY3Rpb24gR2V0Q29tcG9zaXRpb24oaWQpIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBjb25uZWN0aW9uTGlzdCA9IFtdO1xuICAgICAgICB2YXIgcmV0dXJuT3V0cHV0ID0ge307XG4gICAgICAgIHZhciBjb25uZWN0aW9uTGlzdFN0cmluZyA9IHlpZWxkIEdldEFsbENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvbihpZCk7XG4gICAgICAgIGNvbm5lY3Rpb25MaXN0ID0gY29ubmVjdGlvbkxpc3RTdHJpbmc7XG4gICAgICAgIC8vY29ubmVjdGlvbkxpc3QgPSBDb25uZWN0aW9uRGF0YS5HZXRDb25uZWN0aW9uc09mQ29tcG9zaXRpb24oaWQpO1xuICAgICAgICB2YXIgY29tcG9zaXRpb25MaXN0ID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29ubmVjdGlvbkxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghY29tcG9zaXRpb25MaXN0LmluY2x1ZGVzKGNvbm5lY3Rpb25MaXN0W2ldLm9mVGhlQ29uY2VwdElkKSkge1xuICAgICAgICAgICAgICAgIGNvbXBvc2l0aW9uTGlzdC5wdXNoKGNvbm5lY3Rpb25MaXN0W2ldLm9mVGhlQ29uY2VwdElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgY29uY2VwdCA9IHlpZWxkIENvbmNlcHRzRGF0YS5HZXRDb25jZXB0KGlkKTtcbiAgICAgICAgaWYgKGNvbmNlcHQuaWQgPT0gMCAmJiBpZCAhPSBudWxsICYmIGlkICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFyIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCBHZXRDb25jZXB0KGlkKTtcbiAgICAgICAgICAgIGNvbmNlcHQgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvdXRwdXQgPSB5aWVsZCByZWN1cnNpdmVGZXRjaChpZCwgY29ubmVjdGlvbkxpc3QsIGNvbXBvc2l0aW9uTGlzdCk7XG4gICAgICAgIHZhciBtYWluU3RyaW5nID0gKF9iID0gKF9hID0gY29uY2VwdCA9PT0gbnVsbCB8fCBjb25jZXB0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb25jZXB0LnR5cGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jaGFyYWN0ZXJWYWx1ZSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogXCJcIjtcbiAgICAgICAgcmV0dXJuT3V0cHV0W21haW5TdHJpbmddID0gb3V0cHV0O1xuICAgICAgICByZXR1cm4gcmV0dXJuT3V0cHV0O1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIEdldENvbXBvc2l0aW9uV2l0aElkKGlkKSB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgY29ubmVjdGlvbkxpc3QgPSBbXTtcbiAgICAgICAgdmFyIHJldHVybk91dHB1dCA9IHt9O1xuICAgICAgICB2YXIgY29ubmVjdGlvbkxpc3RTdHJpbmcgPSB5aWVsZCBHZXRBbGxDb25uZWN0aW9uc09mQ29tcG9zaXRpb24oaWQpO1xuICAgICAgICBjb25uZWN0aW9uTGlzdCA9IGNvbm5lY3Rpb25MaXN0U3RyaW5nO1xuICAgICAgICB2YXIgY29tcG9zaXRpb25MaXN0ID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29ubmVjdGlvbkxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghY29tcG9zaXRpb25MaXN0LmluY2x1ZGVzKGNvbm5lY3Rpb25MaXN0W2ldLm9mVGhlQ29uY2VwdElkKSkge1xuICAgICAgICAgICAgICAgIGNvbXBvc2l0aW9uTGlzdC5wdXNoKGNvbm5lY3Rpb25MaXN0W2ldLm9mVGhlQ29uY2VwdElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgY29uY2VwdCA9IHlpZWxkIENvbmNlcHRzRGF0YS5HZXRDb25jZXB0KGlkKTtcbiAgICAgICAgaWYgKGNvbmNlcHQuaWQgPT0gMCAmJiBpZCAhPSBudWxsICYmIGlkICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFyIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCBHZXRDb25jZXB0KGlkKTtcbiAgICAgICAgICAgIGNvbmNlcHQgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvdXRwdXQgPSB5aWVsZCByZWN1cnNpdmVGZXRjaChpZCwgY29ubmVjdGlvbkxpc3QsIGNvbXBvc2l0aW9uTGlzdCk7XG4gICAgICAgIHZhciBtYWluU3RyaW5nID0gKF9iID0gKF9hID0gY29uY2VwdCA9PT0gbnVsbCB8fCBjb25jZXB0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb25jZXB0LnR5cGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jaGFyYWN0ZXJWYWx1ZSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogXCJcIjtcbiAgICAgICAgcmV0dXJuT3V0cHV0W21haW5TdHJpbmddID0gb3V0cHV0O1xuICAgICAgICB2YXIgRmluYWxSZXR1cm4gPSB7fTtcbiAgICAgICAgRmluYWxSZXR1cm5bJ2RhdGEnXSA9IHJldHVybk91dHB1dDtcbiAgICAgICAgRmluYWxSZXR1cm5bJ2lkJ10gPSBpZDtcbiAgICAgICAgcmV0dXJuIEZpbmFsUmV0dXJuO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gcmVjdXJzaXZlRmV0Y2goaWQsIGNvbm5lY3Rpb25MaXN0LCBjb21wb3NpdGlvbkxpc3QpIHtcbiAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIG91dHB1dCA9IHt9O1xuICAgICAgICB2YXIgYXJyb3V0cHV0ID0gW107XG4gICAgICAgIHZhciBjb25jZXB0ID0geWllbGQgQ29uY2VwdHNEYXRhLkdldENvbmNlcHQoaWQpO1xuICAgICAgICBpZiAoKGNvbmNlcHQgPT0gbnVsbCB8fCBjb25jZXB0LmlkID09IDApICYmIGlkICE9IG51bGwgJiYgaWQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2YXIgY29uY2VwdFN0cmluZyA9IHlpZWxkIEdldENvbmNlcHQoaWQpO1xuICAgICAgICAgICAgY29uY2VwdCA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbmNlcHQpIHtcbiAgICAgICAgICAgIGlmIChjb25jZXB0LnR5cGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHZhciB0b0NvbmNlcHRUeXBlSWQgPSBjb25jZXB0LnR5cGVJZDtcbiAgICAgICAgICAgICAgICB2YXIgdG9Db25jZXB0VHlwZSA9IHlpZWxkIENvbmNlcHRzRGF0YS5HZXRDb25jZXB0KHRvQ29uY2VwdFR5cGVJZCk7XG4gICAgICAgICAgICAgICAgY29uY2VwdC50eXBlID0gdG9Db25jZXB0VHlwZTtcbiAgICAgICAgICAgICAgICBpZiAodG9Db25jZXB0VHlwZSA9PSBudWxsICYmIHRvQ29uY2VwdFR5cGVJZCAhPSBudWxsICYmIHRvQ29uY2VwdFR5cGVJZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCBHZXRDb25jZXB0KHRvQ29uY2VwdFR5cGVJZCk7XG4gICAgICAgICAgICAgICAgICAgIHRvQ29uY2VwdFR5cGUgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICBjb25jZXB0LnR5cGUgPSB0b0NvbmNlcHRUeXBlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgbWFpblN0cmluZyA9IChfYiA9IChfYSA9IGNvbmNlcHQgPT09IG51bGwgfHwgY29uY2VwdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29uY2VwdC50eXBlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2hhcmFjdGVyVmFsdWUpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IFwiXCI7XG4gICAgICAgIGlmICghY29tcG9zaXRpb25MaXN0LmluY2x1ZGVzKGlkKSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbmNlcHQgPT09IG51bGwgfHwgY29uY2VwdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29uY2VwdC5jaGFyYWN0ZXJWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29ubmVjdGlvbkxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoY29ubmVjdGlvbkxpc3RbaV0ub2ZUaGVDb25jZXB0SWQgPT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvQ29uY2VwdElkID0gY29ubmVjdGlvbkxpc3RbaV0udG9UaGVDb25jZXB0SWQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0b0NvbmNlcHQgPSB5aWVsZCBDb25jZXB0c0RhdGEuR2V0Q29uY2VwdCh0b0NvbmNlcHRJZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICgodG9Db25jZXB0ID09IG51bGwgfHwgdG9Db25jZXB0LmlkID09IDApICYmIHRvQ29uY2VwdElkICE9IG51bGwgJiYgdG9Db25jZXB0SWQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29uY2VwdFN0cmluZyA9IHlpZWxkIEdldENvbmNlcHQodG9Db25jZXB0SWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9Db25jZXB0ID0gY29uY2VwdFN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodG9Db25jZXB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHRvQ29uY2VwdCA9PT0gbnVsbCB8fCB0b0NvbmNlcHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRvQ29uY2VwdC50eXBlKSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRvQ29uY2VwdFR5cGVJZCA9IHRvQ29uY2VwdC50eXBlSWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRvQ29uY2VwdFR5cGUgPSB5aWVsZCBDb25jZXB0c0RhdGEuR2V0Q29uY2VwdCh0b0NvbmNlcHRUeXBlSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvQ29uY2VwdC50eXBlID0gdG9Db25jZXB0VHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9Db25jZXB0VHlwZSA9PSBudWxsICYmIHRvQ29uY2VwdFR5cGVJZCAhPSBudWxsICYmIHRvQ29uY2VwdFR5cGVJZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCBHZXRDb25jZXB0KHRvQ29uY2VwdFR5cGVJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvQ29uY2VwdFR5cGUgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b0NvbmNlcHQudHlwZSA9IHRvQ29uY2VwdFR5cGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciByZWdleCA9IFwidGhlX1wiO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbG9jYWxtYWluU3RyaW5nID0gKF9kID0gKF9jID0gdG9Db25jZXB0ID09PSBudWxsIHx8IHRvQ29uY2VwdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogdG9Db25jZXB0LnR5cGUpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5jaGFyYWN0ZXJWYWx1ZSkgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxvY2FsS2V5ID0gbG9jYWxtYWluU3RyaW5nLnJlcGxhY2UocmVnZXgsIFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNOYU4oTnVtYmVyKGxvY2FsS2V5KSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb2NhbEtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIHJlY3Vyc2l2ZUZldGNoKHRvQ29uY2VwdElkLCBjb25uZWN0aW9uTGlzdCwgY29tcG9zaXRpb25MaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRbbG9jYWxLZXldID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgcmVjdXJzaXZlRmV0Y2godG9Db25jZXB0SWQsIGNvbm5lY3Rpb25MaXN0LCBjb21wb3NpdGlvbkxpc3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3V0cHV0W2xvY2FsS2V5XSA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCA9IGFycm91dHB1dDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBHZXRBbGxDb25jZXB0c0J5VHlwZSB9IGZyb20gXCIuLi9BcGkvR2V0QWxsQ29uY2VwdHNCeVR5cGVcIjtcbmltcG9ydCB7IEdldEFsbENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvbkJ1bGsgfSBmcm9tIFwiLi4vQXBpL0dldEFsbENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvbkJ1bGtcIjtcbmltcG9ydCB7IENvbmNlcHRzRGF0YSB9IGZyb20gXCIuLi9EYXRhU3RydWN0dXJlcy9Db25jZXB0RGF0YVwiO1xuaW1wb3J0IHsgR2V0Q29tcG9zaXRpb24sIEdldENvbXBvc2l0aW9uV2l0aElkIH0gZnJvbSBcIi4vR2V0Q29tcG9zaXRpb25cIjtcbmltcG9ydCBHZXRDb25jZXB0QnlDaGFyYWN0ZXIgZnJvbSBcIi4vR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyXCI7XG5leHBvcnQgZnVuY3Rpb24gR2V0Q29tcG9zaXRpb25MaXN0KGNvbXBvc2l0aW9uTmFtZSwgdXNlcklkLCBpbnBhZ2UgPSAxMCwgcGFnZSA9IDEpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgY29uY2VwdCA9IHlpZWxkIEdldENvbmNlcHRCeUNoYXJhY3Rlcihjb21wb3NpdGlvbk5hbWUpO1xuICAgICAgICB2YXIgQ29tcG9zaXRpb25MaXN0ID0gW107XG4gICAgICAgIGlmIChjb25jZXB0KSB7XG4gICAgICAgICAgICB5aWVsZCBHZXRBbGxDb25jZXB0c0J5VHlwZShjb21wb3NpdGlvbk5hbWUsIHVzZXJJZCk7XG4gICAgICAgICAgICB2YXIgY29uY2VwdExpc3QgPSB5aWVsZCBDb25jZXB0c0RhdGEuR2V0Q29uY2VwdHNCeVR5cGVJZEFuZFVzZXIoY29uY2VwdC5pZCwgdXNlcklkKTtcbiAgICAgICAgICAgIHZhciBzdGFydFBhZ2UgPSBpbnBhZ2UgKiAocGFnZSAtIDEpO1xuICAgICAgICAgICAgdmFyIHByZWZldGNoQ29tcG9zaXRpb24gPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBzdGFydFBhZ2U7IGkgPCBzdGFydFBhZ2UgKyBpbnBhZ2U7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChjb25jZXB0TGlzdFtpXSkge1xuICAgICAgICAgICAgICAgICAgICBwcmVmZXRjaENvbXBvc2l0aW9uLnB1c2goY29uY2VwdExpc3RbaV0uaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHlpZWxkIEdldEFsbENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvbkJ1bGsocHJlZmV0Y2hDb21wb3NpdGlvbik7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gc3RhcnRQYWdlOyBpIDwgc3RhcnRQYWdlICsgaW5wYWdlOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoY29uY2VwdExpc3RbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbXBvc2l0aW9uSnNvbiA9IHlpZWxkIEdldENvbXBvc2l0aW9uKGNvbmNlcHRMaXN0W2ldLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgQ29tcG9zaXRpb25MaXN0LnB1c2goY29tcG9zaXRpb25Kc29uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIENvbXBvc2l0aW9uTGlzdDtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBHZXRDb21wb3NpdGlvbkxpc3RXaXRoSWQoY29tcG9zaXRpb25OYW1lLCB1c2VySWQsIGlucGFnZSA9IDEwLCBwYWdlID0gMSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBjb25jZXB0ID0geWllbGQgR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyKGNvbXBvc2l0aW9uTmFtZSk7XG4gICAgICAgIHZhciBDb21wb3NpdGlvbkxpc3QgPSBbXTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ3aGF0IGEgbGlzdFwiLCBjb25jZXB0KTtcbiAgICAgICAgaWYgKGNvbmNlcHQpIHtcbiAgICAgICAgICAgIHlpZWxkIEdldEFsbENvbmNlcHRzQnlUeXBlKGNvbXBvc2l0aW9uTmFtZSwgdXNlcklkKTtcbiAgICAgICAgICAgIHZhciBjb25jZXB0TGlzdCA9IHlpZWxkIENvbmNlcHRzRGF0YS5HZXRDb25jZXB0c0J5VHlwZUlkQW5kVXNlcihjb25jZXB0LmlkLCB1c2VySWQpO1xuICAgICAgICAgICAgdmFyIHN0YXJ0UGFnZSA9IGlucGFnZSAqIChwYWdlIC0gMSk7XG4gICAgICAgICAgICB2YXIgcHJlZmV0Y2hDb21wb3NpdGlvbiA9IFtdO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSBwcmVmZXRjaGVkIGNvbmNlcHQgbGlzdFwiLCBjb25jZXB0TGlzdCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gc3RhcnRQYWdlOyBpIDwgc3RhcnRQYWdlICsgaW5wYWdlOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoY29uY2VwdExpc3RbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlZmV0Y2hDb21wb3NpdGlvbi5wdXNoKGNvbmNlcHRMaXN0W2ldLmlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMgaXMgdGhlIHByZWZldGNoXCIsIHByZWZldGNoQ29tcG9zaXRpb24pO1xuICAgICAgICAgICAgeWllbGQgR2V0QWxsQ29ubmVjdGlvbnNPZkNvbXBvc2l0aW9uQnVsayhwcmVmZXRjaENvbXBvc2l0aW9uKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBzdGFydFBhZ2U7IGkgPCBzdGFydFBhZ2UgKyBpbnBhZ2U7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChjb25jZXB0TGlzdFtpXSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29tcG9zaXRpb25Kc29uID0geWllbGQgR2V0Q29tcG9zaXRpb25XaXRoSWQoY29uY2VwdExpc3RbaV0uaWQpO1xuICAgICAgICAgICAgICAgICAgICBDb21wb3NpdGlvbkxpc3QucHVzaChjb21wb3NpdGlvbkpzb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQ29tcG9zaXRpb25MaXN0O1xuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBHZXRDb25jZXB0QnlDaGFyYWN0ZXJWYWx1ZSB9IGZyb20gXCIuLi9BcGkvR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyVmFsdWVcIjtcbmltcG9ydCB7IENvbmNlcHRzRGF0YSB9IGZyb20gXCIuLi9EYXRhU3RydWN0dXJlcy9Db25jZXB0RGF0YVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyKGNoYXJhY3RlclZhbHVlKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIGNvbmNlcHQgPSB5aWVsZCBDb25jZXB0c0RhdGEuR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyKGNoYXJhY3RlclZhbHVlKTtcbiAgICAgICAgdmFyIGxpdGVyYWxDaGFyYWN0ZXIgPSBgJHtjaGFyYWN0ZXJWYWx1ZX1gO1xuICAgICAgICBpZiAoKGNvbmNlcHQgPT0gbnVsbCB8fCAoY29uY2VwdCA9PT0gbnVsbCB8fCBjb25jZXB0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb25jZXB0LmlkKSA9PSAwKSAmJiBsaXRlcmFsQ2hhcmFjdGVyKSB7XG4gICAgICAgICAgICB5aWVsZCBHZXRDb25jZXB0QnlDaGFyYWN0ZXJWYWx1ZShjaGFyYWN0ZXJWYWx1ZSk7XG4gICAgICAgICAgICBjb25jZXB0ID0geWllbGQgQ29uY2VwdHNEYXRhLkdldENvbmNlcHRCeUNoYXJhY3RlcihjaGFyYWN0ZXJWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbmNlcHQ7XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IEdldENvbm5lY3Rpb24gfSBmcm9tIFwiLi4vQXBpL0dldENvbm5lY3Rpb25cIjtcbmltcG9ydCB7IENvbm5lY3Rpb25EYXRhIH0gZnJvbSBcIi4uL0RhdGFTdHJ1Y3R1cmVzL0Nvbm5lY3Rpb25EYXRhXCI7XG5leHBvcnQgZnVuY3Rpb24gR2V0Q29ubmVjdGlvbkJ5SWQoaWQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgY29ubmVjdGlvbiA9IHlpZWxkIENvbm5lY3Rpb25EYXRhLkdldENvbm5lY3Rpb24oaWQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMgaXMgdGhlIGNvbm5lY3Rpb24gZ2V0dGluZyBmcm9tIHRoZSBsb2NhbCBkYXRhXCIsIGNvbm5lY3Rpb24pO1xuICAgICAgICBpZiAoKGNvbm5lY3Rpb24gPT0gbnVsbCB8fCBjb25uZWN0aW9uLmlkID09IDApICYmIGlkICE9IG51bGwgJiYgaWQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2YXIgY29ubmVjdGlvblN0cmluZyA9IHlpZWxkIEdldENvbm5lY3Rpb24oaWQpO1xuICAgICAgICAgICAgY29ubmVjdGlvbiA9IGNvbm5lY3Rpb25TdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbm5lY3Rpb247XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IENvbm5lY3Rpb25EYXRhIH0gZnJvbSBcIi4uL0RhdGFTdHJ1Y3R1cmVzL0Nvbm5lY3Rpb25EYXRhXCI7XG5pbXBvcnQgeyBMb2NhbENvbm5lY3Rpb25EYXRhIH0gZnJvbSBcIi4uL0RhdGFTdHJ1Y3R1cmVzL0xvY2FsL0xvY2FsQ29ubmVjdGlvbkRhdGFcIjtcbmltcG9ydCB7IGdldEFsbEZyb21Mb2NhbERiIH0gZnJvbSBcIi4uL0RhdGFiYXNlL2luZGV4ZGJsb2NhbFwiO1xuaW1wb3J0IHsgZ2V0RnJvbURhdGFiYXNlV2l0aFR5cGVPbGQgfSBmcm9tIFwiLi4vRGF0YWJhc2UvaW5kZXhlZGRiXCI7XG5leHBvcnQgZnVuY3Rpb24gR2V0RGF0YUZyb21JbmRleERiKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIC8vIHZhciBjb25jZXB0TGlzdCA9IGF3YWl0IGdldEZyb21EYXRhYmFzZVdpdGhUeXBlT2xkKFwiY29uY2VwdFwiKTtcbiAgICAgICAgR2V0Q29ubmVjdGlvbnNGcm9tSW5kZXhEYigpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhjb25jZXB0TGlzdCk7XG4gICAgICAgIC8vIGlmKEFycmF5LmlzQXJyYXkoY29uY2VwdExpc3QpKXtcbiAgICAgICAgLy8gICAgIGZvcih2YXIgaT0wIDtpIDwgY29uY2VwdExpc3QubGVuZ3RoIDtpKyspe1xuICAgICAgICAvLyAgICAgICAgIENvbmNlcHRzRGF0YS5BZGRDb25jZXB0KGNvbmNlcHRMaXN0W2ldKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIEdldERhdGFGcm9tSW5kZXhEYkxvY2FsKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIC8vIHZhciBjb25jZXB0TGlzdCA9IGF3YWl0IGdldEFsbEZyb21Mb2NhbERiKFwibG9jYWxjb25jZXB0XCIpO1xuICAgICAgICBHZXRDb25uZWN0aW9uc0Zyb21JbmRleERiTG9jYWwoKTtcbiAgICAgICAgLy8gaWYoQXJyYXkuaXNBcnJheShjb25jZXB0TGlzdCkpe1xuICAgICAgICAvLyAgICAgZm9yKHZhciBpPTAgO2kgPCBjb25jZXB0TGlzdC5sZW5ndGggO2krKyl7XG4gICAgICAgIC8vICAgICAgICAgTG9jYWxDb25jZXB0c0RhdGEuQWRkQ29uY2VwdChjb25jZXB0TGlzdFtpXSk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIEdldENvbm5lY3Rpb25zRnJvbUluZGV4RGIoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIGNvbm5lY3Rpb25MaXN0ID0geWllbGQgZ2V0RnJvbURhdGFiYXNlV2l0aFR5cGVPbGQoXCJjb25uZWN0aW9uXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMgaXMgdGhlIGNvbm5lY3Rpb24gbGlzdCBmcm9tIGRiXCIsIGNvbm5lY3Rpb25MaXN0KTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY29ubmVjdGlvbkxpc3QpKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbm5lY3Rpb25MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgQ29ubmVjdGlvbkRhdGEuQWRkQ29ubmVjdGlvbihjb25uZWN0aW9uTGlzdFtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIEdldENvbm5lY3Rpb25zRnJvbUluZGV4RGJMb2NhbCgpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgY29ubmVjdGlvbkxpc3QgPSB5aWVsZCBnZXRBbGxGcm9tTG9jYWxEYihcImxvY2FsY29ubmVjdGlvblwiKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY29ubmVjdGlvbkxpc3QpKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbm5lY3Rpb25MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgTG9jYWxDb25uZWN0aW9uRGF0YS5BZGRDb25uZWN0aW9uKGNvbm5lY3Rpb25MaXN0W2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBHZXRDb25jZXB0QnlDaGFyYWN0ZXJBbmRUeXBlIH0gZnJvbSBcIi4uL0FwaS9HZXRDb25jZXB0QnlDaGFyYWN0ZXJBbmRUeXBlXCI7XG5pbXBvcnQgeyBHZXRDb25uZWN0aW9uT2ZUaGVDb25jZXB0IH0gZnJvbSBcIi4uL0FwaS9HZXRDb25uZWN0aW9uT2ZUaGVDb25jZXB0XCI7XG5pbXBvcnQgeyBHZXRDb21wb3NpdGlvbldpdGhJZCB9IGZyb20gXCIuL0dldENvbXBvc2l0aW9uXCI7XG5pbXBvcnQgR2V0VGhlQ29uY2VwdCBmcm9tIFwiLi9HZXRUaGVDb25jZXB0XCI7XG5pbXBvcnQgeyBHZXRBbGxDb25uZWN0aW9uc09mQ29tcG9zaXRpb25CdWxrIH0gZnJvbSBcIi4uL0FwaS9HZXRBbGxDb25uZWN0aW9uc09mQ29tcG9zaXRpb25CdWxrXCI7XG5leHBvcnQgZnVuY3Rpb24gR2V0TGluayhpZCwgbGlua2VyLCBpbnBhZ2UgPSAxMCwgcGFnZSA9IDEpIHtcbiAgICB2YXIgX2E7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIG91dHB1dCA9IFtdO1xuICAgICAgICB2YXIgY29uY2VwdCA9IHlpZWxkIEdldFRoZUNvbmNlcHQoaWQpO1xuICAgICAgICB2YXIgbGlua1N0cmluZyA9ICgoX2EgPSBjb25jZXB0LnR5cGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jaGFyYWN0ZXJWYWx1ZSkgKyBcIl9zXCIgKyBcIl9cIiArIGxpbmtlcjtcbiAgICAgICAgdmFyIHJlbGF0ZWRDb25jZXB0U3RyaW5nID0geWllbGQgR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyQW5kVHlwZShsaW5rU3RyaW5nLCAxNik7XG4gICAgICAgIHZhciByZWxhdGVkQ29uY2VwdCA9IHJlbGF0ZWRDb25jZXB0U3RyaW5nO1xuICAgICAgICBpZiAocmVsYXRlZENvbmNlcHQuaWQgPiAwKSB7XG4gICAgICAgICAgICB2YXIgY29ubmVjdGlvbnNTdHJpbmcgPSB5aWVsZCBHZXRDb25uZWN0aW9uT2ZUaGVDb25jZXB0KHJlbGF0ZWRDb25jZXB0LmlkLCBjb25jZXB0LmlkLCBjb25jZXB0LnVzZXJJZCwgaW5wYWdlLCBwYWdlKTtcbiAgICAgICAgICAgIHZhciBjb25uZWN0aW9ucyA9IGNvbm5lY3Rpb25zU3RyaW5nO1xuICAgICAgICAgICAgdmFyIHByZWZldGNoID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbm5lY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcHJlZmV0Y2gucHVzaChjb25uZWN0aW9uc1tpXS50b1RoZUNvbmNlcHRJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB5aWVsZCBHZXRBbGxDb25uZWN0aW9uc09mQ29tcG9zaXRpb25CdWxrKHByZWZldGNoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29ubmVjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgdG9Db25jZXB0SWQgPSBjb25uZWN0aW9uc1tpXS50b1RoZUNvbmNlcHRJZDtcbiAgICAgICAgICAgICAgICBsZXQgdG9Db25jZXB0ID0geWllbGQgR2V0VGhlQ29uY2VwdCh0b0NvbmNlcHRJZCk7XG4gICAgICAgICAgICAgICAgbGV0IG5ld0NvbXBvc2l0aW9uID0geWllbGQgR2V0Q29tcG9zaXRpb25XaXRoSWQodG9Db25jZXB0LmlkKTtcbiAgICAgICAgICAgICAgICBvdXRwdXQucHVzaChuZXdDb21wb3NpdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9KTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgR2V0QWxsTGlua2VyQ29ubmVjdGlvbnNGcm9tVGhlQ29uY2VwdCB9IGZyb20gXCIuLi9BcGkvR2V0QWxsTGlua2VyQ29ubmVjdGlvbnNGcm9tVGhlQ29uY2VwdFwiO1xuaW1wb3J0IEdldFRoZUNvbmNlcHQgZnJvbSBcIi4vR2V0VGhlQ29uY2VwdFwiO1xuZXhwb3J0IGZ1bmN0aW9uIEdldExpbmtlckNvbm5lY3Rpb25Gcm9tQ29uY2VwdHMoaWQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgY29ubmVjdGlvbnMgPSB5aWVsZCBHZXRBbGxMaW5rZXJDb25uZWN0aW9uc0Zyb21UaGVDb25jZXB0KGlkKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb25uZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGxvY2FsQ29ubmVjdGlvbiA9IGNvbm5lY3Rpb25zW2ldO1xuICAgICAgICAgICAgdmFyIGNvbm5lY3Rpb25JZGVudGlmaWVyID0gbG9jYWxDb25uZWN0aW9uLnR5cGVJZDtcbiAgICAgICAgICAgIGxldCBjb25jZXB0ID0geWllbGQgR2V0VGhlQ29uY2VwdChjb25uZWN0aW9uSWRlbnRpZmllcik7XG4gICAgICAgICAgICBsb2NhbENvbm5lY3Rpb24udHlwZSA9IGNvbmNlcHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbm5lY3Rpb25zO1xuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBHZXRDb25jZXB0IH0gZnJvbSBcIi4uL0FwaS9HZXRDb25jZXB0XCI7XG5pbXBvcnQgeyBDb25jZXB0IH0gZnJvbSBcIi4uL0RhdGFTdHJ1Y3R1cmVzL0NvbmNlcHRcIjtcbmltcG9ydCB7IENvbmNlcHRzRGF0YSB9IGZyb20gXCIuLi9EYXRhU3RydWN0dXJlcy9Db25jZXB0RGF0YVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2V0VGhlQ29uY2VwdChpZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBjb25jZXB0ID0gbmV3IENvbmNlcHQoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgXCIwXCIsIDAsIDAsIDAsIDAsIDAsIDAsIGZhbHNlKTtcbiAgICAgICAgY29uY2VwdCA9IHlpZWxkIENvbmNlcHRzRGF0YS5HZXRDb25jZXB0KGlkKTtcbiAgICAgICAgaWYgKChjb25jZXB0ID09IG51bGwgfHwgY29uY2VwdC5pZCA9PSAwKSAmJiBpZCAhPSBudWxsICYmIGlkICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFyIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCBHZXRDb25jZXB0KGlkKTtcbiAgICAgICAgICAgIGNvbmNlcHQgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb25jZXB0KSB7XG4gICAgICAgICAgICBpZiAoY29uY2VwdC50eXBlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29uY2VwdFR5cGUgPSB5aWVsZCBDb25jZXB0c0RhdGEuR2V0Q29uY2VwdChjb25jZXB0LnR5cGVJZCk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbmNlcHRUeXBlID09IG51bGwgJiYgY29uY2VwdC50eXBlSWQgIT0gbnVsbCAmJiBjb25jZXB0LnR5cGVJZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHR5cGVDb25jZXB0U3RyaW5nID0geWllbGQgR2V0Q29uY2VwdChjb25jZXB0LnR5cGVJZCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0eXBlQ29uY2VwdCA9IHR5cGVDb25jZXB0U3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICBjb25jZXB0LnR5cGUgPSB0eXBlQ29uY2VwdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbmNlcHQ7XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCBHZXRUaGVDb25jZXB0IGZyb20gXCIuL0dldFRoZUNvbmNlcHRcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdldFRoZVJlZmVyZW50KGlkLCB1c2VySWQsIHJlZmVyZW50SWQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgbXlyZWYgPSByZWZlcmVudElkICE9PSBudWxsICYmIHJlZmVyZW50SWQgIT09IHZvaWQgMCA/IHJlZmVyZW50SWQgOiAwO1xuICAgICAgICB2YXIgcmVmZXJlbnQgPSB5aWVsZCBHZXRUaGVDb25jZXB0KHJlZmVyZW50SWQpO1xuICAgICAgICAvL3ZhciByZXN1bHQ6IFJlZmVyZW50SW5mbyA9IG5ldyBSZWZlcmVudEluZm8ocmVmZXJlbnQuaWQsIHJlZmVyZW50LnVzZXJJZCwgcmVmZXJlbnQucmVmZXJlbnRJZCwgcmVmZXJlbnQucmVmZXJlbnRVc2VySWQpO1xuICAgICAgICByZXR1cm4gcmVmZXJlbnQ7XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IEdldEFpRGF0YSB9IGZyb20gXCIuLi9BcGkvR2V0QWlEYXRhXCI7XG5pbXBvcnQgeyBCaW5hcnlUcmVlIH0gZnJvbSBcIi4uL0RhdGFTdHJ1Y3R1cmVzL0JpbmFyeVRyZWVcIjtcbmltcG9ydCB7IFNldHRpbmdEYXRhIH0gZnJvbSBcIi4uL0RhdGFTdHJ1Y3R1cmVzL1NldHRpbmdEYXRhXCI7XG5pbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gXCIuLi9EYXRhU3RydWN0dXJlcy9TZXR0aW5nc1wiO1xuaW1wb3J0IHsgQWlVcGRhdGVGbGFnLCBHZXRTdGF0c0Zyb21EYXRhYmFzZSB9IGZyb20gXCIuLi9EYXRhYmFzZS9pbmRleGVkZGJcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluaXRpYWxpemVTeXN0ZW0oKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIHN0YXRzRGF0YSA9IHlpZWxkIEdldFN0YXRzRnJvbURhdGFiYXNlKCk7XG4gICAgICAgIHZhciBzZXR0aW5ncyA9IHN0YXRzRGF0YTtcbiAgICAgICAgaWYgKCFzZXR0aW5ncy5pc09ubGluZVN5bmMpIHtcbiAgICAgICAgICAgIHlpZWxkIEdldEFpRGF0YSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSBiaW5hcnkgZGF0YVwiLCBCaW5hcnlUcmVlLnJvb3QpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBQdXJnYXRvcnlEYXRhYmFzZVVwZGF0ZWQoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgU2V0dGluZ3MuaXNPbmxpbmVTeW5jID0gdHJ1ZTtcbiAgICAgICAgdmFyIHNldHRpbmdEYXRhID0gbmV3IFNldHRpbmdEYXRhKFNldHRpbmdzLmlzT25saW5lU3luYyk7XG4gICAgICAgIEFpVXBkYXRlRmxhZyhzZXR0aW5nRGF0YSk7XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IExvY2FsQ29uY2VwdHNEYXRhIH0gZnJvbSBcIi4uLy4uL0RhdGFTdHJ1Y3R1cmVzL0xvY2FsL0xvY2FsQ29uY2VwdERhdGFcIjtcbmltcG9ydCB7IGdldEFsbEZyb21Mb2NhbERiIH0gZnJvbSBcIi4uLy4uL0RhdGFiYXNlL2luZGV4ZGJsb2NhbFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlTG9jYWxCaW5hcnlUcmVlRnJvbURhdGEoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgY29uY2VwdExpc3QgPSB5aWVsZCBnZXRBbGxGcm9tTG9jYWxEYihcImxvY2FsY29uY2VwdFwiKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY29uY2VwdExpc3QpKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbmNlcHRMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNvbmNlcHQgPSBjb25jZXB0TGlzdFtpXTtcbiAgICAgICAgICAgICAgICBMb2NhbENvbmNlcHRzRGF0YS5BZGRDb25jZXB0KGNvbmNlcHQpO1xuICAgICAgICAgICAgICAgIC8vIGxldCBub2RlID0gbmV3IE5vZGUoY29uY2VwdC5pZCwgY29uY2VwdCwgbnVsbCwgbnVsbCk7XG4gICAgICAgICAgICAgICAgLy8gTG9jYWxCaW5hcnlUcmVlLmFkZE5vZGVUb1RyZWUobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVuZFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIHRpbWUgPSBlbmRUaW1lIC0gc3RhcnRUaW1lO1xuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBDb25jZXB0IH0gZnJvbSBcIi4uLy4uL0RhdGFTdHJ1Y3R1cmVzL0NvbmNlcHRcIjtcbmltcG9ydCBDcmVhdGVUaGVDb25uZWN0aW9uTG9jYWwgZnJvbSBcIi4vQ3JlYXRlVGhlQ29ubmVjdGlvbkxvY2FsXCI7XG5pbXBvcnQgeyBNYWtlVGhlSW5zdGFuY2VDb25jZXB0TG9jYWwgfSBmcm9tIFwiLi9NYWtlVGhlSW5zdGFuY2VDb25jZXB0TG9jYWxcIjtcbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVUaGVDb21wb3NpdGlvbkxvY2FsKGpzb24sIG9mVGhlQ29uY2VwdElkID0gbnVsbCwgb2ZUaGVDb25jZXB0VXNlcklkID0gbnVsbCwgbWFpbktleSA9IG51bGwsIHVzZXJJZCA9IG51bGwsIGFjY2Vzc0lkID0gbnVsbCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQgPSBudWxsKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIGxvY2FsVXNlcklkID0gdXNlcklkICE9PSBudWxsICYmIHVzZXJJZCAhPT0gdm9pZCAwID8gdXNlcklkIDogMTAyNjc7XG4gICAgICAgIHZhciBsb2NhbEFjY2Vzc0lkID0gYWNjZXNzSWQgIT09IG51bGwgJiYgYWNjZXNzSWQgIT09IHZvaWQgMCA/IGFjY2Vzc0lkIDogMTAyNjc7XG4gICAgICAgIHZhciBsb2NhbFNlc3Npb25JZCA9IHNlc3Npb25JbmZvcm1hdGlvbklkICE9PSBudWxsICYmIHNlc3Npb25JbmZvcm1hdGlvbklkICE9PSB2b2lkIDAgPyBzZXNzaW9uSW5mb3JtYXRpb25JZCA6IDEwMjY3O1xuICAgICAgICB2YXIgTWFpbktleUxvY2FsID0gbWFpbktleSAhPT0gbnVsbCAmJiBtYWluS2V5ICE9PSB2b2lkIDAgPyBtYWluS2V5IDogMDtcbiAgICAgICAgdmFyIE1haW5Db25jZXB0ID0gbmV3IENvbmNlcHQoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgXCIwXCIsIDAsIDAsIDAsIDAsIDAsIDAsIGZhbHNlKTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4ganNvbikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBqc29uW2tleV0gIT0gJ3N0cmluZycgJiYgdHlwZW9mIGpzb25ba2V5XSAhPSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIGlmIChvZlRoZUNvbmNlcHRJZCA9PSBudWxsICYmIG9mVGhlQ29uY2VwdFVzZXJJZCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsb2NhbE1haW5LZXkgPSBNYWluS2V5TG9jYWw7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb25jZXB0U3RyaW5nID0geWllbGQgTWFrZVRoZUluc3RhbmNlQ29uY2VwdExvY2FsKGtleSwgXCJcIiwgdHJ1ZSwgbG9jYWxVc2VySWQsIGxvY2FsQWNjZXNzSWQsIGxvY2FsU2Vzc2lvbklkKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmNlcHQgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICBNYWluQ29uY2VwdCA9IGNvbmNlcHQ7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsTWFpbktleSA9IGNvbmNlcHQuaWQ7XG4gICAgICAgICAgICAgICAgICAgIE1haW5LZXlMb2NhbCA9IGNvbmNlcHQuaWQ7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIENyZWF0ZVRoZUNvbXBvc2l0aW9uTG9jYWwoanNvbltrZXldLCBjb25jZXB0LmlkLCBjb25jZXB0LnVzZXJJZCwgbG9jYWxNYWluS2V5LCB1c2VySWQsIGFjY2Vzc0lkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2ZUaGUgPSBvZlRoZUNvbmNlcHRJZCAhPT0gbnVsbCAmJiBvZlRoZUNvbmNlcHRJZCAhPT0gdm9pZCAwID8gb2ZUaGVDb25jZXB0SWQgOiA5OTk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvZlRoZVVzZXIgPSBvZlRoZUNvbmNlcHRVc2VySWQgIT09IG51bGwgJiYgb2ZUaGVDb25jZXB0VXNlcklkICE9PSB2b2lkIDAgPyBvZlRoZUNvbmNlcHRVc2VySWQgOiAxMDI2NztcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxvY2FsTWFpbktleSA9IE1haW5LZXlMb2NhbDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCBNYWtlVGhlSW5zdGFuY2VDb25jZXB0TG9jYWwoa2V5LCBcIlwiLCB0cnVlLCBsb2NhbFVzZXJJZCwgbG9jYWxBY2Nlc3NJZCwgbG9jYWxTZXNzaW9uSWQpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29uY2VwdCA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIENyZWF0ZVRoZUNvbm5lY3Rpb25Mb2NhbChvZlRoZSwgb2ZUaGVVc2VyLCBjb25jZXB0LmlkLCBjb25jZXB0LnVzZXJJZCwgbG9jYWxNYWluS2V5LCBsb2NhbFNlc3Npb25JZCwgY29uY2VwdC51c2VySWQpO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBDcmVhdGVUaGVDb21wb3NpdGlvbkxvY2FsKGpzb25ba2V5XSwgY29uY2VwdC5pZCwgY29uY2VwdC51c2VySWQsIGxvY2FsTWFpbktleSwgdXNlcklkLCBhY2Nlc3NJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBvZlRoZSA9IG9mVGhlQ29uY2VwdElkICE9PSBudWxsICYmIG9mVGhlQ29uY2VwdElkICE9PSB2b2lkIDAgPyBvZlRoZUNvbmNlcHRJZCA6IDk5OTtcbiAgICAgICAgICAgICAgICB2YXIgb2ZUaGVVc2VyID0gb2ZUaGVDb25jZXB0VXNlcklkICE9PSBudWxsICYmIG9mVGhlQ29uY2VwdFVzZXJJZCAhPT0gdm9pZCAwID8gb2ZUaGVDb25jZXB0VXNlcklkIDogMTAyNjc7XG4gICAgICAgICAgICAgICAgdmFyIGxvY2FsTWFpbktleSA9IE1haW5LZXlMb2NhbDtcbiAgICAgICAgICAgICAgICB2YXIgY29uY2VwdFN0cmluZyA9IHlpZWxkIE1ha2VUaGVJbnN0YW5jZUNvbmNlcHRMb2NhbChrZXksIGpzb25ba2V5XSwgZmFsc2UsIGxvY2FsVXNlcklkLCBsb2NhbEFjY2Vzc0lkLCBsb2NhbFNlc3Npb25JZCk7XG4gICAgICAgICAgICAgICAgdmFyIGNvbmNlcHQgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICAgICAgICAgIHlpZWxkIENyZWF0ZVRoZUNvbm5lY3Rpb25Mb2NhbChvZlRoZSwgb2ZUaGVVc2VyLCBjb25jZXB0LmlkLCBjb25jZXB0LnVzZXJJZCwgbG9jYWxNYWluS2V5LCBsb2NhbFNlc3Npb25JZCwgY29uY2VwdC51c2VySWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBNYWluQ29uY2VwdDtcbiAgICB9KTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgQ29uY2VwdCB9IGZyb20gXCIuLi8uLi9EYXRhU3RydWN0dXJlcy9Db25jZXB0XCI7XG5pbXBvcnQgeyBMb2NhbENvbmNlcHRzRGF0YSB9IGZyb20gXCIuLi8uLi9EYXRhU3RydWN0dXJlcy9Mb2NhbC9Mb2NhbENvbmNlcHREYXRhXCI7XG5pbXBvcnQgeyBzdG9yZVRvRGF0YWJhc2UgfSBmcm9tIFwiLi4vLi4vRGF0YWJhc2UvaW5kZXhkYmxvY2FsXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVUaGVDb25jZXB0TG9jYWwocmVmZXJlbnQsIHVzZXJJZCwgY2F0ZWdvcnlJZCwgY2F0ZWdvcnlVc2VySWQsIHR5cGVJZCwgdHlwZVVzZXJJZCwgcmVmZXJlbnRJZCwgcmVmZXJlbnRVc2VySWQsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIGlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwKTtcbiAgICAgICAgdmFyIGlzTmV3ID0gdHJ1ZTtcbiAgICAgICAgdmFyIGNvbmNlcHQgPSBuZXcgQ29uY2VwdChpZCwgdXNlcklkLCB0eXBlSWQsIHR5cGVVc2VySWQsIGNhdGVnb3J5SWQsIGNhdGVnb3J5VXNlcklkLCByZWZlcmVudElkLCByZWZlcmVudFVzZXJJZCwgcmVmZXJlbnQsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkLCBpc05ldyk7XG4gICAgICAgIGNvbmNlcHQuaXNUZW1wID0gdHJ1ZTtcbiAgICAgICAgTG9jYWxDb25jZXB0c0RhdGEuQWRkQ29uY2VwdChjb25jZXB0KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJhZGRpbmcgdGhpcyBjb25jZXB0IHRvIGxvY2FsXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhjb25jZXB0KTtcbiAgICAgICAgc3RvcmVUb0RhdGFiYXNlKFwibG9jYWxjb25jZXB0XCIsIGNvbmNlcHQpO1xuICAgICAgICByZXR1cm4gY29uY2VwdDtcbiAgICB9KTtcbn1cbiIsImltcG9ydCB7IENvbm5lY3Rpb24gfSBmcm9tIFwiLi4vLi4vRGF0YVN0cnVjdHVyZXMvQ29ubmVjdGlvblwiO1xuaW1wb3J0IHsgTG9jYWxDb25uZWN0aW9uRGF0YSB9IGZyb20gXCIuLi8uLi9EYXRhU3RydWN0dXJlcy9Mb2NhbC9Mb2NhbENvbm5lY3Rpb25EYXRhXCI7XG5pbXBvcnQgeyBzdG9yZVRvRGF0YWJhc2UgfSBmcm9tIFwiLi4vLi4vRGF0YWJhc2UvaW5kZXhkYmxvY2FsXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVUaGVDb25uZWN0aW9uTG9jYWwob2ZUaGVDb25jZXB0SWQsIG9mVGhlQ29uY2VwdFVzZXJJZCwgdG9UaGVDb25jZXB0SWQsIHRvVGhlQ29uY2VwdFVzZXJJZCwgdHlwZUlkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkKSB7XG4gICAgdmFyIG9yZGVySWQgPSAxO1xuICAgIHZhciBvcmRlclVzZXJJZCA9IG9mVGhlQ29uY2VwdFVzZXJJZDtcbiAgICB2YXIgdHlwZVVzZXJJZCA9IG9mVGhlQ29uY2VwdFVzZXJJZDtcbiAgICB2YXIgdXNlcklkID0gb2ZUaGVDb25jZXB0VXNlcklkO1xuICAgIHZhciBzZWN1cml0eUlkID0gMDtcbiAgICB2YXIgc2VjdXJpdHlVc2VySWQgPSBvZlRoZUNvbmNlcHRVc2VySWQ7XG4gICAgdmFyIGFjY2Vzc0lkID0gNDtcbiAgICB2YXIgYWNjZXNzVXNlcklkID0gb2ZUaGVDb25jZXB0VXNlcklkO1xuICAgIGlmIChvZlRoZUNvbmNlcHRJZCAhPSB0b1RoZUNvbmNlcHRJZCkge1xuICAgICAgICB2YXIgY29ubmVjdGlvbiA9IG5ldyBDb25uZWN0aW9uKDAsIG9mVGhlQ29uY2VwdElkLCB0b1RoZUNvbmNlcHRJZCwgb2ZUaGVDb25jZXB0VXNlcklkLCB0b1RoZUNvbmNlcHRVc2VySWQsIHVzZXJJZCwgdHlwZUlkLCB0eXBlVXNlcklkLCBvcmRlcklkLCBvcmRlclVzZXJJZCwgc2VjdXJpdHlJZCwgc2VjdXJpdHlVc2VySWQsIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQsIHNlc3Npb25JbmZvcm1hdGlvbklkLCBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQpO1xuICAgICAgICBjb25uZWN0aW9uLmlzVGVtcCA9IHRydWU7XG4gICAgICAgIGNvbm5lY3Rpb24uaWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApO1xuICAgICAgICBMb2NhbENvbm5lY3Rpb25EYXRhLkFkZENvbm5lY3Rpb24oY29ubmVjdGlvbik7XG4gICAgICAgIHN0b3JlVG9EYXRhYmFzZShcImxvY2FsY29ubmVjdGlvblwiLCBjb25uZWN0aW9uKTtcbiAgICB9XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IExvY2FsQ29uY2VwdHNEYXRhIH0gZnJvbSBcIi4uLy4uL0RhdGFTdHJ1Y3R1cmVzL0xvY2FsL0xvY2FsQ29uY2VwdERhdGFcIjtcbmltcG9ydCB7IEdldENvbXBvc2l0aW9uTG9jYWwsIEdldENvbXBvc2l0aW9uTG9jYWxXaXRoSWQgfSBmcm9tIFwiLi9HZXRDb21wb3NpdGlvbkxvY2FsXCI7XG5pbXBvcnQgR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyTG9jYWwgZnJvbSBcIi4vR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyTG9jYWxcIjtcbmV4cG9ydCBmdW5jdGlvbiBHZXRDb21wb3NpdGlvbkxpc3RMb2NhbChjb21wb3NpdGlvbk5hbWUsIHVzZXJJZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBjb25jZXB0ID0geWllbGQgR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyTG9jYWwoY29tcG9zaXRpb25OYW1lKTtcbiAgICAgICAgdmFyIENvbXBvc2l0aW9uTGlzdCA9IFtdO1xuICAgICAgICBpZiAoY29uY2VwdCkge1xuICAgICAgICAgICAgdmFyIGNvbmNlcHRMaXN0ID0geWllbGQgTG9jYWxDb25jZXB0c0RhdGEuR2V0Q29uY2VwdHNCeVR5cGVJZEFuZFVzZXIoY29uY2VwdC5pZCwgdXNlcklkKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29uY2VwdExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY29tcG9zaXRpb25Kc29uID0geWllbGQgR2V0Q29tcG9zaXRpb25Mb2NhbChjb25jZXB0TGlzdFtpXS5pZCk7XG4gICAgICAgICAgICAgICAgQ29tcG9zaXRpb25MaXN0LnB1c2goY29tcG9zaXRpb25Kc29uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQ29tcG9zaXRpb25MaXN0O1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIEdldENvbXBvc2l0aW9uTGlzdExvY2FsV2l0aElkKGNvbXBvc2l0aW9uTmFtZSwgdXNlcklkKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIGNvbmNlcHQgPSB5aWVsZCBHZXRDb25jZXB0QnlDaGFyYWN0ZXJMb2NhbChjb21wb3NpdGlvbk5hbWUpO1xuICAgICAgICB2YXIgQ29tcG9zaXRpb25MaXN0ID0gW107XG4gICAgICAgIGlmIChjb25jZXB0KSB7XG4gICAgICAgICAgICB2YXIgY29uY2VwdExpc3QgPSB5aWVsZCBMb2NhbENvbmNlcHRzRGF0YS5HZXRDb25jZXB0c0J5VHlwZUlkQW5kVXNlcihjb25jZXB0LmlkLCB1c2VySWQpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb25jZXB0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBjb21wb3NpdGlvbkpzb24gPSB5aWVsZCBHZXRDb21wb3NpdGlvbkxvY2FsV2l0aElkKGNvbmNlcHRMaXN0W2ldLmlkKTtcbiAgICAgICAgICAgICAgICBDb21wb3NpdGlvbkxpc3QucHVzaChjb21wb3NpdGlvbkpzb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBDb21wb3NpdGlvbkxpc3Q7XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IExvY2FsQ29uY2VwdHNEYXRhIH0gZnJvbSBcIi4uLy4uL0RhdGFTdHJ1Y3R1cmVzL0xvY2FsL0xvY2FsQ29uY2VwdERhdGFcIjtcbmltcG9ydCB7IExvY2FsQ29ubmVjdGlvbkRhdGEgfSBmcm9tIFwiLi4vLi4vRGF0YVN0cnVjdHVyZXMvTG9jYWwvTG9jYWxDb25uZWN0aW9uRGF0YVwiO1xuZXhwb3J0IGZ1bmN0aW9uIEdldENvbXBvc2l0aW9uTG9jYWwoaWQpIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBjb25uZWN0aW9uTGlzdCA9IFtdO1xuICAgICAgICB2YXIgcmV0dXJuT3V0cHV0ID0ge307XG4gICAgICAgIGNvbm5lY3Rpb25MaXN0ID0geWllbGQgTG9jYWxDb25uZWN0aW9uRGF0YS5HZXRDb25uZWN0aW9uc09mQ29tcG9zaXRpb25Mb2NhbChpZCk7XG4gICAgICAgIC8vY29ubmVjdGlvbkxpc3QgPSBDb25uZWN0aW9uRGF0YS5HZXRDb25uZWN0aW9uc09mQ29tcG9zaXRpb24oaWQpO1xuICAgICAgICB2YXIgY29tcG9zaXRpb25MaXN0ID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29ubmVjdGlvbkxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghY29tcG9zaXRpb25MaXN0LmluY2x1ZGVzKGNvbm5lY3Rpb25MaXN0W2ldLm9mVGhlQ29uY2VwdElkKSkge1xuICAgICAgICAgICAgICAgIGNvbXBvc2l0aW9uTGlzdC5wdXNoKGNvbm5lY3Rpb25MaXN0W2ldLm9mVGhlQ29uY2VwdElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgY29uY2VwdCA9IHlpZWxkIExvY2FsQ29uY2VwdHNEYXRhLkdldENvbmNlcHQoaWQpO1xuICAgICAgICB2YXIgb3V0cHV0ID0geWllbGQgcmVjdXJzaXZlRmV0Y2hMb2NhbChpZCwgY29ubmVjdGlvbkxpc3QsIGNvbXBvc2l0aW9uTGlzdCk7XG4gICAgICAgIHZhciBtYWluU3RyaW5nID0gKF9iID0gKF9hID0gY29uY2VwdCA9PT0gbnVsbCB8fCBjb25jZXB0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb25jZXB0LnR5cGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jaGFyYWN0ZXJWYWx1ZSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogXCJ0b3BcIjtcbiAgICAgICAgcmV0dXJuT3V0cHV0W21haW5TdHJpbmddID0gb3V0cHV0O1xuICAgICAgICByZXR1cm4gcmV0dXJuT3V0cHV0O1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIEdldENvbXBvc2l0aW9uTG9jYWxXaXRoSWQoaWQpIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBjb25uZWN0aW9uTGlzdCA9IFtdO1xuICAgICAgICB2YXIgcmV0dXJuT3V0cHV0ID0ge307XG4gICAgICAgIGNvbm5lY3Rpb25MaXN0ID0geWllbGQgTG9jYWxDb25uZWN0aW9uRGF0YS5HZXRDb25uZWN0aW9uc09mQ29tcG9zaXRpb25Mb2NhbChpZCk7XG4gICAgICAgIHZhciBjb21wb3NpdGlvbkxpc3QgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb25uZWN0aW9uTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCFjb21wb3NpdGlvbkxpc3QuaW5jbHVkZXMoY29ubmVjdGlvbkxpc3RbaV0ub2ZUaGVDb25jZXB0SWQpKSB7XG4gICAgICAgICAgICAgICAgY29tcG9zaXRpb25MaXN0LnB1c2goY29ubmVjdGlvbkxpc3RbaV0ub2ZUaGVDb25jZXB0SWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBjb25jZXB0ID0geWllbGQgTG9jYWxDb25jZXB0c0RhdGEuR2V0Q29uY2VwdChpZCk7XG4gICAgICAgIGlmIChjb25jZXB0LmlkICE9IDApIHtcbiAgICAgICAgICAgIHZhciBvdXRwdXQgPSB5aWVsZCByZWN1cnNpdmVGZXRjaExvY2FsKGlkLCBjb25uZWN0aW9uTGlzdCwgY29tcG9zaXRpb25MaXN0KTtcbiAgICAgICAgICAgIHZhciBtYWluU3RyaW5nID0gKF9iID0gKF9hID0gY29uY2VwdCA9PT0gbnVsbCB8fCBjb25jZXB0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb25jZXB0LnR5cGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jaGFyYWN0ZXJWYWx1ZSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogXCJ0b3BcIjtcbiAgICAgICAgICAgIHJldHVybk91dHB1dFttYWluU3RyaW5nXSA9IG91dHB1dDtcbiAgICAgICAgICAgIHZhciBGaW5hbFJldHVybiA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIEZpbmFsUmV0dXJuWydkYXRhJ10gPSByZXR1cm5PdXRwdXQ7XG4gICAgICAgIEZpbmFsUmV0dXJuWydpZCddID0gaWQ7XG4gICAgICAgIHJldHVybiBGaW5hbFJldHVybjtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHJlY3Vyc2l2ZUZldGNoTG9jYWwoaWQsIGNvbm5lY3Rpb25MaXN0LCBjb21wb3NpdGlvbkxpc3QpIHtcbiAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIG91dHB1dCA9IHt9O1xuICAgICAgICB2YXIgYXJyb3V0cHV0ID0gW107XG4gICAgICAgIHZhciBjb25jZXB0ID0geWllbGQgTG9jYWxDb25jZXB0c0RhdGEuR2V0Q29uY2VwdChpZCk7XG4gICAgICAgIGlmIChjb25jZXB0LmlkICE9IDApIHtcbiAgICAgICAgICAgIGlmIChjb25jZXB0LnR5cGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHZhciB0b0NvbmNlcHRUeXBlSWQgPSBjb25jZXB0LnR5cGVJZDtcbiAgICAgICAgICAgICAgICB2YXIgdG9Db25jZXB0VHlwZSA9IHlpZWxkIExvY2FsQ29uY2VwdHNEYXRhLkdldENvbmNlcHQodG9Db25jZXB0VHlwZUlkKTtcbiAgICAgICAgICAgICAgICBjb25jZXB0LnR5cGUgPSB0b0NvbmNlcHRUeXBlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBtYWluU3RyaW5nID0gKF9iID0gKF9hID0gY29uY2VwdCA9PT0gbnVsbCB8fCBjb25jZXB0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb25jZXB0LnR5cGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jaGFyYWN0ZXJWYWx1ZSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogXCJ0b3BcIjtcbiAgICAgICAgaWYgKCFjb21wb3NpdGlvbkxpc3QuaW5jbHVkZXMoaWQpKSB7XG4gICAgICAgICAgICByZXR1cm4gY29uY2VwdCA9PT0gbnVsbCB8fCBjb25jZXB0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb25jZXB0LmNoYXJhY3RlclZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb25uZWN0aW9uTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChjb25uZWN0aW9uTGlzdFtpXS5vZlRoZUNvbmNlcHRJZCA9PSBpZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdG9Db25jZXB0SWQgPSBjb25uZWN0aW9uTGlzdFtpXS50b1RoZUNvbmNlcHRJZDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvQ29uY2VwdCA9IHlpZWxkIExvY2FsQ29uY2VwdHNEYXRhLkdldENvbmNlcHQodG9Db25jZXB0SWQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9Db25jZXB0LmlkICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgodG9Db25jZXB0ID09PSBudWxsIHx8IHRvQ29uY2VwdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogdG9Db25jZXB0LnR5cGUpID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdG9Db25jZXB0VHlwZUlkID0gdG9Db25jZXB0LnR5cGVJZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdG9Db25jZXB0VHlwZSA9IHlpZWxkIExvY2FsQ29uY2VwdHNEYXRhLkdldENvbmNlcHQodG9Db25jZXB0VHlwZUlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b0NvbmNlcHQudHlwZSA9IHRvQ29uY2VwdFR5cGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlZ2V4ID0gXCJ0aGVfXCI7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsb2NhbG1haW5TdHJpbmcgPSAoX2QgPSAoX2MgPSB0b0NvbmNlcHQgPT09IG51bGwgfHwgdG9Db25jZXB0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0b0NvbmNlcHQudHlwZSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmNoYXJhY3RlclZhbHVlKSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiBcInRvcFwiO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbG9jYWxLZXkgPSBsb2NhbG1haW5TdHJpbmcucmVwbGFjZShyZWdleCwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc05hTihOdW1iZXIobG9jYWxLZXkpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxvY2FsS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgcmVjdXJzaXZlRmV0Y2hMb2NhbCh0b0NvbmNlcHRJZCwgY29ubmVjdGlvbkxpc3QsIGNvbXBvc2l0aW9uTGlzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0W2xvY2FsS2V5XSA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIHJlY3Vyc2l2ZUZldGNoTG9jYWwodG9Db25jZXB0SWQsIGNvbm5lY3Rpb25MaXN0LCBjb21wb3NpdGlvbkxpc3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3V0cHV0W2xvY2FsS2V5XSA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCA9IGFycm91dHB1dDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBMb2NhbENvbmNlcHRzRGF0YSB9IGZyb20gXCIuLi8uLi9EYXRhU3RydWN0dXJlcy9Mb2NhbC9Mb2NhbENvbmNlcHREYXRhXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHZXRDb25jZXB0QnlDaGFyYWN0ZXJMb2NhbChjaGFyYWN0ZXJWYWx1ZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBjb25jZXB0ID0geWllbGQgTG9jYWxDb25jZXB0c0RhdGEuR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyKGNoYXJhY3RlclZhbHVlKTtcbiAgICAgICAgcmV0dXJuIGNvbmNlcHQ7XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IExvY2FsQ29uY2VwdHNEYXRhIH0gZnJvbSBcIi4uLy4uL0RhdGFTdHJ1Y3R1cmVzL0xvY2FsL0xvY2FsQ29uY2VwdERhdGFcIjtcbmltcG9ydCBDcmVhdGVUaGVDb25jZXB0TG9jYWwgZnJvbSBcIi4vQ3JlYXRlVGhlQ29uY2VwdExvY2FsXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWtlVGhlQ29uY2VwdExvY2FsKHJlZmVyZW50LCB1c2VySWQsIGNhdGVnb3J5SWQsIGNhdGVnb3J5VXNlcklkLCB0eXBlSWQsIHR5cGVVc2VySWQsIHJlZmVyZW50SWQsIHJlZmVyZW50VXNlcklkLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBjb25jZXB0U3RyaW5nID0geWllbGQgTG9jYWxDb25jZXB0c0RhdGEuR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyQW5kVHlwZUxvY2FsKHJlZmVyZW50LCB0eXBlSWQpO1xuICAgICAgICB2YXIgY29uY2VwdCA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgIGlmIChjb25jZXB0LmlkID09IDApIHtcbiAgICAgICAgICAgIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCBDcmVhdGVUaGVDb25jZXB0TG9jYWwocmVmZXJlbnQsIHVzZXJJZCwgY2F0ZWdvcnlJZCwgY2F0ZWdvcnlVc2VySWQsIHR5cGVJZCwgdHlwZVVzZXJJZCwgcmVmZXJlbnRJZCwgcmVmZXJlbnRVc2VySWQsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkKTtcbiAgICAgICAgICAgIGNvbmNlcHQgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb25jZXB0O1xuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBDcmVhdGVUZXh0RGF0YSB9IGZyb20gXCIuLi8uLi9BcGkvQ3JlYXRlL0NyZWF0ZVRoZVRleHREYXRhXCI7XG5pbXBvcnQgeyBUaGVUZXh0cyB9IGZyb20gXCIuLi8uLi9EYXRhU3RydWN0dXJlcy9UaGVUZXh0c1wiO1xuaW1wb3J0IENyZWF0ZVRoZUNvbmNlcHQgZnJvbSBcIi4uL0NyZWF0ZVRoZUNvbmNlcHRcIjtcbmltcG9ydCBDcmVhdGVUaGVDb25jZXB0TG9jYWwgZnJvbSBcIi4vQ3JlYXRlVGhlQ29uY2VwdExvY2FsXCI7XG5pbXBvcnQgTWFrZVRoZVR5cGVDb25jZXB0TG9jYWwgZnJvbSBcIi4vTWFrZVRoZVR5cGVMb2NhbFwiO1xuaW1wb3J0IHsgTG9jYWxDb25jZXB0c0RhdGEgfSBmcm9tIFwiLi4vLi4vRGF0YVN0cnVjdHVyZXMvTG9jYWwvTG9jYWxDb25jZXB0RGF0YVwiO1xuZXhwb3J0IGZ1bmN0aW9uIE1ha2VUaGVJbnN0YW5jZUNvbmNlcHRMb2NhbCh0eXBlLCByZWZlcmVudCwgY29tcG9zaXRpb24gPSBmYWxzZSwgdXNlcklkLCBhY2Nlc3NJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQgPSA5OTkpIHtcbiAgICB2YXIgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIGFjY2Vzc0lkO1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHNlc3Npb25JbmZvcm1hdGlvbklkID0gOTk5O1xuICAgICAgICB2YXIgY2F0ZWdvcnlJZCA9IDQ7XG4gICAgICAgIHZhciBjYXRlZ29yeVVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdmFyIHJlZmVyZW50SWQgPSAwO1xuICAgICAgICB2YXIgcmVmZXJlbnRVc2VySWQgPSA5OTk7XG4gICAgICAgIHZhciBzZWN1cml0eUlkID0gOTk5O1xuICAgICAgICB2YXIgc2VjdXJpdHlVc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHZhciBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIGFjY2Vzc0lkID0gNDtcbiAgICAgICAgdmFyIGFjY2Vzc1VzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdmFyIHN0cmluZ1RvQ2hlY2sgPSBcIlwiO1xuICAgICAgICB2YXIgc3RyaW5nTGVuZ3RoID0gcmVmZXJlbnQubGVuZ3RoO1xuICAgICAgICB2YXIgdHlwZUNvbmNlcHQ7XG4gICAgICAgIHZhciBjb25jZXB0O1xuICAgICAgICB2YXIgc3RhcnRzV2l0aFRoZSA9IHR5cGUuc3RhcnRzV2l0aChcInRoZV9cIik7XG4gICAgICAgIGlmIChzdGFydHNXaXRoVGhlKSB7XG4gICAgICAgICAgICBzdHJpbmdUb0NoZWNrID0gdHlwZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN0cmluZ1RvQ2hlY2sgPSBcInRoZV9cIiArIHR5cGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbXBvc2l0aW9uKSB7XG4gICAgICAgICAgICB2YXIgdHlwZUNvbmNlcHRTdHJpbmcgPSB5aWVsZCBNYWtlVGhlVHlwZUNvbmNlcHRMb2NhbCh0eXBlLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgdXNlcklkLCB1c2VySWQpO1xuICAgICAgICAgICAgdHlwZUNvbmNlcHQgPSB0eXBlQ29uY2VwdFN0cmluZztcbiAgICAgICAgICAgIHZhciBjb25jZXB0U3RyaW5nID0geWllbGQgQ3JlYXRlVGhlQ29uY2VwdExvY2FsKHJlZmVyZW50LCB1c2VySWQsIGNhdGVnb3J5SWQsIHVzZXJJZCwgdHlwZUNvbmNlcHQuaWQsIHR5cGVDb25jZXB0LnVzZXJJZCwgcmVmZXJlbnRJZCwgcmVmZXJlbnRVc2VySWQsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkKTtcbiAgICAgICAgICAgIGNvbmNlcHQgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0cmluZ0xlbmd0aCA+IDI1NSkge1xuICAgICAgICAgICAgdmFyIHR5cGVDb25jZXB0U3RyaW5nID0geWllbGQgTWFrZVRoZVR5cGVDb25jZXB0TG9jYWwoc3RyaW5nVG9DaGVjaywgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCwgdXNlcklkKTtcbiAgICAgICAgICAgIHR5cGVDb25jZXB0ID0gdHlwZUNvbmNlcHRTdHJpbmc7XG4gICAgICAgICAgICB2YXIgY29uY2VwdFN0cmluZyA9IHlpZWxkIENyZWF0ZVRoZUNvbmNlcHQocmVmZXJlbnQsIHVzZXJJZCwgY2F0ZWdvcnlJZCwgdXNlcklkLCB0eXBlQ29uY2VwdC5pZCwgdHlwZUNvbmNlcHQudXNlcklkLCByZWZlcmVudElkLCByZWZlcmVudFVzZXJJZCwgc2VjdXJpdHlJZCwgc2VjdXJpdHlVc2VySWQsIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQsIHNlc3Npb25JbmZvcm1hdGlvbklkLCBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQpO1xuICAgICAgICAgICAgY29uY2VwdCA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgICAgICB2YXIgVGhlVGV4dHNEYXRhID0gbmV3IFRoZVRleHRzKHVzZXJJZCwgcmVmZXJlbnQsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkLCBEYXRlLm5vdygpLnRvU3RyaW5nKCksIHRydWUpO1xuICAgICAgICAgICAgdmFyIFRleHREYXRhU3RyaW5nID0geWllbGQgQ3JlYXRlVGV4dERhdGEoVGhlVGV4dHNEYXRhKTtcbiAgICAgICAgICAgIHZhciBUZXh0RGF0YSA9IFRleHREYXRhU3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHR5cGVDb25jZXB0U3RyaW5nID0geWllbGQgTWFrZVRoZVR5cGVDb25jZXB0TG9jYWwoc3RyaW5nVG9DaGVjaywgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCwgdXNlcklkKTtcbiAgICAgICAgICAgIHR5cGVDb25jZXB0ID0gdHlwZUNvbmNlcHRTdHJpbmc7XG4gICAgICAgICAgICB2YXIgY29uY2VwdEJ5Q2hhclR5cGVTdHJpbmcgPSB5aWVsZCBMb2NhbENvbmNlcHRzRGF0YS5HZXRDb25jZXB0QnlDaGFyYWN0ZXJBbmRUeXBlTG9jYWwocmVmZXJlbnQsIHR5cGVDb25jZXB0LmlkKTtcbiAgICAgICAgICAgIHZhciBjb25jZXB0VHlwZUNoYXJhY3RlciA9IGNvbmNlcHRCeUNoYXJUeXBlU3RyaW5nO1xuICAgICAgICAgICAgLy8gdmFyIG1ha2VUaGVOYW1lU3RyaW5nID0gYXdhaXQgTWFrZVRoZU5hbWUocmVmZXJlbnQsdXNlcklkLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCx0eXBlQ29uY2VwdC5pZCwgdHlwZUNvbmNlcHQudXNlcklkLGNvbmNlcHRUeXBlQ2hhcmFjdGVyICk7XG4gICAgICAgICAgICAvLyB2YXIgbWFrZVRoZU5hbWVDb25jZXB0ID0gbWFrZVRoZU5hbWVTdHJpbmcgYXMgQ29uY2VwdDtcbiAgICAgICAgICAgIGNvbmNlcHQgPSBjb25jZXB0VHlwZUNoYXJhY3RlcjtcbiAgICAgICAgICAgIGlmIChjb25jZXB0VHlwZUNoYXJhY3Rlci5pZCA9PSAwICYmIGNvbmNlcHRUeXBlQ2hhcmFjdGVyLnVzZXJJZCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCBDcmVhdGVUaGVDb25jZXB0TG9jYWwocmVmZXJlbnQsIHVzZXJJZCwgY2F0ZWdvcnlJZCwgdXNlcklkLCB0eXBlQ29uY2VwdC5pZCwgdHlwZUNvbmNlcHQudXNlcklkLCAwLCAwLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCk7XG4gICAgICAgICAgICAgICAgY29uY2VwdCA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uY2VwdC50eXBlID0gdHlwZUNvbmNlcHQ7XG4gICAgICAgIHJldHVybiBjb25jZXB0O1xuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgQ3JlYXRlVGhlQ29uY2VwdExvY2FsIGZyb20gXCIuL0NyZWF0ZVRoZUNvbmNlcHRMb2NhbFwiO1xuaW1wb3J0IEdldENvbmNlcHRCeUNoYXJhY3RlckxvY2FsIGZyb20gXCIuL0dldENvbmNlcHRCeUNoYXJhY3RlckxvY2FsXCI7XG5pbXBvcnQgeyBTcGxpdFN0cmluZ3MgfSBmcm9tIFwiLi4vU3BsaXRTdHJpbmdzXCI7XG5pbXBvcnQgTWFrZVRoZUNvbmNlcHRMb2NhbCBmcm9tIFwiLi9NYWtlVGhlQ29uY2VwdExvY2FsXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWtlVGhlVHlwZUNvbmNlcHRMb2NhbCh0eXBlU3RyaW5nLCBzZXNzaW9uSWQsIHNlc3Npb25Vc2VySWQsIHVzZXJJZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciByZWZlcmVudElkID0gOTk5O1xuICAgICAgICB2YXIgc2VjdXJpdHlJZCA9IDk5OTtcbiAgICAgICAgdmFyIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCA9IDk5OTtcbiAgICAgICAgdmFyIGFjY2Vzc0lkID0gOTk5O1xuICAgICAgICB2YXIgc2VjdXJpdHlVc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHZhciBhY2Nlc3NVc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHZhciBjYXRlZ29yeVVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdmFyIHNlY3VyaXR5VXNlcklkID0gdXNlcklkO1xuICAgICAgICB2YXIgZXhpc3RpbmdDb25jZXB0ID0geWllbGQgR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyTG9jYWwodHlwZVN0cmluZyk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXhpc3RpbmcgaGVyZVwiLCB0eXBlU3RyaW5nKTtcbiAgICAgICAgY29uc29sZS5sb2coZXhpc3RpbmdDb25jZXB0KTtcbiAgICAgICAgaWYgKGV4aXN0aW5nQ29uY2VwdCkge1xuICAgICAgICAgICAgaWYgKGV4aXN0aW5nQ29uY2VwdC5pZCA9PSAwIHx8IGV4aXN0aW5nQ29uY2VwdC51c2VySWQgPT0gMCkge1xuICAgICAgICAgICAgICAgIHZhciBzcGxpdHRlZFN0cmluZ0FycmF5ID0gU3BsaXRTdHJpbmdzKHR5cGVTdHJpbmcpO1xuICAgICAgICAgICAgICAgIGlmIChzcGxpdHRlZFN0cmluZ0FycmF5WzBdID09IHR5cGVTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmNlcHQgPSB5aWVsZCBNYWtlVGhlQ29uY2VwdExvY2FsKHR5cGVTdHJpbmcsIHVzZXJJZCwgNCwgdXNlcklkLCA1MSwgdXNlcklkLCByZWZlcmVudElkLCB1c2VySWQsIHNlY3VyaXR5SWQsIHVzZXJJZCwgYWNjZXNzSWQsIHVzZXJJZCwgc2Vzc2lvbklkLCB1c2VySWQpO1xuICAgICAgICAgICAgICAgICAgICBleGlzdGluZ0NvbmNlcHQgPSBjb25jZXB0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhdGVnb3J5SWQgPSAxO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2F0ZWdvcnlDb25jZXB0ID0gTWFrZVRoZVR5cGVDb25jZXB0TG9jYWwoc3BsaXR0ZWRTdHJpbmdBcnJheVswXSwgc2Vzc2lvbklkLCBzZXNzaW9uVXNlcklkLCB1c2VySWQpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdHlwZUNvbmNlcHQgPSB5aWVsZCBNYWtlVGhlVHlwZUNvbmNlcHRMb2NhbChzcGxpdHRlZFN0cmluZ0FycmF5WzFdLCBzZXNzaW9uSWQsIHNlc3Npb25Vc2VySWQsIHVzZXJJZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlQ29uY2VwdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmNlcHQgPSB5aWVsZCBDcmVhdGVUaGVDb25jZXB0TG9jYWwodHlwZVN0cmluZywgdXNlcklkLCBjYXRlZ29yeUlkLCB1c2VySWQsIHR5cGVDb25jZXB0LmlkLCB1c2VySWQsIHJlZmVyZW50SWQsIHVzZXJJZCwgc2VjdXJpdHlJZCwgdXNlcklkLCBhY2Nlc3NJZCwgdXNlcklkLCBzZXNzaW9uSWQsIHVzZXJJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ0NvbmNlcHQgPSBjb25jZXB0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBleGlzdGluZ0NvbmNlcHQ7XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCBNYWtlVGhlQ2hhcmFjdGVyRGF0YSBmcm9tIFwiLi9NYWtlVGhlQ2hhcmFjdGVyRGF0YVwiO1xuaW1wb3J0IE1ha2VUaGVDb25jZXB0IGZyb20gXCIuL01ha2VUaGVDb25jZXB0XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWtlVGhlQ2hhcmFjdGVyKHRoZV9jaGFyYWN0ZXJfZGF0YSwgdXNlcklkLCBzZWN1cml0eUlkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSWQpIHtcbiAgICB2YXIgYWNjZXNzVXNlcklkO1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBjYXRlZ29yeVVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdmFyIHNlY3VyaXR5VXNlcklkID0gdXNlcklkO1xuICAgICAgICBhY2Nlc3NVc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHZhciBjYXRlZ29yeUlkID0gNDtcbiAgICAgICAgdmFyIHR5cGVJZCA9IDUxO1xuICAgICAgICB2YXIgdHlwZVVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdmFyIHNlc3Npb25Vc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHZhciByZWZlcmVudFVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdmFyIGxlbmd0aE9mQ2hhcmFjdGVycyA9IHRoZV9jaGFyYWN0ZXJfZGF0YS5sZW5ndGg7XG4gICAgICAgIHZhciBjb25jZXB0O1xuICAgICAgICBpZiAobGVuZ3RoT2ZDaGFyYWN0ZXJzID09IDEpIHtcbiAgICAgICAgICAgIHZhciByZWZlcmVudElkID0gdGhlX2NoYXJhY3Rlcl9kYXRhLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgICAgICB2YXIgdHlwZUlkRm9yQ2hhcmFjdGVyID0gNDk7XG4gICAgICAgICAgICB2YXIgY2hhcmFjdGVyRGF0YVN0cmluZyA9IHlpZWxkIE1ha2VUaGVDaGFyYWN0ZXJEYXRhKHRoZV9jaGFyYWN0ZXJfZGF0YSwgdXNlcklkLCBzZWN1cml0eUlkLCBhY2Nlc3NJZCwgc2Vzc2lvbklkKTtcbiAgICAgICAgICAgIGNvbmNlcHQgPSBNYWtlVGhlQ29uY2VwdCh0aGVfY2hhcmFjdGVyX2RhdGEsIHVzZXJJZCwgY2F0ZWdvcnlJZCwgY2F0ZWdvcnlVc2VySWQsIHJlZmVyZW50SWQsIHJlZmVyZW50VXNlcklkLCB0eXBlSWRGb3JDaGFyYWN0ZXIsIHR5cGVVc2VySWQsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSWQsIHNlc3Npb25Vc2VySWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGNoYXJhY3RlckRhdGFTdHJpbmcgPSB5aWVsZCBNYWtlVGhlQ2hhcmFjdGVyRGF0YSh0aGVfY2hhcmFjdGVyX2RhdGEsIHVzZXJJZCwgc2VjdXJpdHlJZCwgYWNjZXNzSWQsIHNlc3Npb25JZCk7XG4gICAgICAgICAgICB2YXIgY2hhcmFjdGVyRGF0YSA9IGNoYXJhY3RlckRhdGFTdHJpbmc7XG4gICAgICAgICAgICBpZiAoY2hhcmFjdGVyRGF0YS5pc05ldykge1xuICAgICAgICAgICAgICAgIHZhciBjb25jZXB0U3RyaW5nID0geWllbGQgTWFrZVRoZUNvbmNlcHQodGhlX2NoYXJhY3Rlcl9kYXRhLCB1c2VySWQsIGNhdGVnb3J5SWQsIGNhdGVnb3J5VXNlcklkLCB0eXBlSWQsIHR5cGVVc2VySWQsIGNoYXJhY3RlckRhdGEuaWQsIGNoYXJhY3RlckRhdGEudXNlcklkLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbklkLCBzZXNzaW9uVXNlcklkKTtcbiAgICAgICAgICAgICAgICBjb25jZXB0ID0gY29uY2VwdFN0cmluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBjb25jZXB0U3RyaW5nID0geWllbGQgTWFrZVRoZUNvbmNlcHQodGhlX2NoYXJhY3Rlcl9kYXRhLCB1c2VySWQsIGNhdGVnb3J5SWQsIGNhdGVnb3J5VXNlcklkLCB0eXBlSWQsIHR5cGVVc2VySWQsIGNoYXJhY3RlckRhdGEuaWQsIGNoYXJhY3RlckRhdGEudXNlcklkLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbklkLCBzZXNzaW9uVXNlcklkKTtcbiAgICAgICAgICAgICAgICBjb25jZXB0ID0gY29uY2VwdFN0cmluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29uY2VwdDtcbiAgICB9KTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgQ3JlYXRlVGhlQ2hhcmFjdGVyIH0gZnJvbSBcIi4uL0FwaS9DcmVhdGUvQ3JlYXRlVGhlQ2hhcmFjdGVyXCI7XG5pbXBvcnQgeyBUaGVDaGFyYWN0ZXIgfSBmcm9tIFwiLi4vRGF0YVN0cnVjdHVyZXMvVGhlQ2hhcmFjdGVyXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWtlVGhlQ2hhcmFjdGVyRGF0YSh0aGVfY2hhcmFjdGVyX2RhdGEsIHVzZXJJZCwgc2VjdXJpdHlJZCwgYWNjZXNzSWQsIHNlc3Npb25JZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBjYXRlZ29yeVVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdmFyIGFjY2Vzc1VzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdmFyIHNlY3VyaXR5VXNlcklkID0gdXNlcklkO1xuICAgICAgICB2YXIgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkID0gdXNlcklkO1xuICAgICAgICB2YXIgdGhlQ2hhcmFjdGVyID0gbmV3IFRoZUNoYXJhY3Rlcih1c2VySWQsIHRoZV9jaGFyYWN0ZXJfZGF0YSwgc2VjdXJpdHlJZCwgc2VjdXJpdHlVc2VySWQsIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQsIHNlc3Npb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkLCBcIlwiLCBmYWxzZSk7XG4gICAgICAgIHZhciBvdXRwdXQgPSB5aWVsZCBDcmVhdGVUaGVDaGFyYWN0ZXIodGhlQ2hhcmFjdGVyKTtcbiAgICAgICAgdmFyIHJldHVybmVyID0gb3V0cHV0O1xuICAgICAgICByZXR1cm4gcmV0dXJuZXI7XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IEdldENvbmNlcHRCeUNoYXJhY3RlckFuZFR5cGUgfSBmcm9tIFwiLi4vQXBpL0dldENvbmNlcHRCeUNoYXJhY3RlckFuZFR5cGVcIjtcbmltcG9ydCBDcmVhdGVUaGVDb25jZXB0IGZyb20gXCIuL0NyZWF0ZVRoZUNvbmNlcHRcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1ha2VUaGVDb25jZXB0KHJlZmVyZW50LCB1c2VySWQsIGNhdGVnb3J5SWQsIGNhdGVnb3J5VXNlcklkLCB0eXBlSWQsIHR5cGVVc2VySWQsIHJlZmVyZW50SWQsIHJlZmVyZW50VXNlcklkLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBjb25jZXB0U3RyaW5nID0geWllbGQgR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyQW5kVHlwZShyZWZlcmVudCwgdHlwZUlkKTtcbiAgICAgICAgdmFyIGNvbmNlcHQgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICBpZiAoY29uY2VwdC5pZCA9PSAwKSB7XG4gICAgICAgICAgICBjb25jZXB0U3RyaW5nID0geWllbGQgQ3JlYXRlVGhlQ29uY2VwdChyZWZlcmVudCwgdXNlcklkLCBjYXRlZ29yeUlkLCBjYXRlZ29yeVVzZXJJZCwgdHlwZUlkLCB0eXBlVXNlcklkLCByZWZlcmVudElkLCByZWZlcmVudFVzZXJJZCwgc2VjdXJpdHlJZCwgc2VjdXJpdHlVc2VySWQsIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQsIHNlc3Npb25JbmZvcm1hdGlvbklkLCBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQpO1xuICAgICAgICAgICAgY29uY2VwdCA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbmNlcHQ7XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IENyZWF0ZVRleHREYXRhIH0gZnJvbSBcIi4uL0FwaS9DcmVhdGUvQ3JlYXRlVGhlVGV4dERhdGFcIjtcbmltcG9ydCB7IEdldENvbmNlcHRCeUNoYXJhY3RlckFuZFR5cGUgfSBmcm9tIFwiLi4vQXBpL0dldENvbmNlcHRCeUNoYXJhY3RlckFuZFR5cGVcIjtcbmltcG9ydCB7IENvbmNlcHQgfSBmcm9tIFwiLi4vRGF0YVN0cnVjdHVyZXMvQ29uY2VwdFwiO1xuaW1wb3J0IHsgVGhlVGV4dHMgfSBmcm9tIFwiLi4vRGF0YVN0cnVjdHVyZXMvVGhlVGV4dHNcIjtcbmltcG9ydCBDcmVhdGVUaGVDb25jZXB0IGZyb20gXCIuL0NyZWF0ZVRoZUNvbmNlcHRcIjtcbmltcG9ydCB7IE1ha2VUaGVOYW1lIH0gZnJvbSBcIi4vTWFrZVRoZU5hbWVcIjtcbmltcG9ydCBNYWtlVGhlVHlwZUNvbmNlcHQgZnJvbSBcIi4vTWFrZVRoZVR5cGVDb25jZXB0XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWtlVGhlSW5zdGFuY2VDb25jZXB0KHR5cGUsIHJlZmVyZW50LCBjb21wb3NpdGlvbiA9IGZhbHNlLCB1c2VySWQsIGFjY2Vzc0lkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCA9IDk5OSkge1xuICAgIHZhciBzZXNzaW9uSW5mb3JtYXRpb25JZCwgYWNjZXNzSWQ7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgc2Vzc2lvbkluZm9ybWF0aW9uSWQgPSA5OTk7XG4gICAgICAgIHZhciBjYXRlZ29yeUlkID0gNDtcbiAgICAgICAgdmFyIGNhdGVnb3J5VXNlcklkID0gdXNlcklkO1xuICAgICAgICB2YXIgcmVmZXJlbnRJZCA9IDA7XG4gICAgICAgIHZhciByZWZlcmVudFVzZXJJZCA9IDk5OTtcbiAgICAgICAgdmFyIHNlY3VyaXR5SWQgPSA5OTk7XG4gICAgICAgIHZhciBzZWN1cml0eVVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdmFyIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgYWNjZXNzSWQgPSA0O1xuICAgICAgICB2YXIgYWNjZXNzVXNlcklkID0gdXNlcklkO1xuICAgICAgICB2YXIgc3RyaW5nVG9DaGVjayA9IFwiXCI7XG4gICAgICAgIHZhciBzdHJpbmdMZW5ndGggPSByZWZlcmVudC5sZW5ndGg7XG4gICAgICAgIHZhciB0eXBlQ29uY2VwdCA9IG5ldyBDb25jZXB0KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIFwiMFwiLCAwLCAwLCAwLCAwLCAwLCAwLCBmYWxzZSk7XG4gICAgICAgIHZhciBjb25jZXB0O1xuICAgICAgICB2YXIgc3RhcnRzV2l0aFRoZSA9IHR5cGUuc3RhcnRzV2l0aChcInRoZV9cIik7XG4gICAgICAgIGlmIChzdGFydHNXaXRoVGhlKSB7XG4gICAgICAgICAgICBzdHJpbmdUb0NoZWNrID0gdHlwZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN0cmluZ1RvQ2hlY2sgPSBcInRoZV9cIiArIHR5cGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbXBvc2l0aW9uKSB7XG4gICAgICAgICAgICB2YXIgdHlwZUNvbmNlcHRTdHJpbmcgPSB5aWVsZCBNYWtlVGhlVHlwZUNvbmNlcHQodHlwZSwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHVzZXJJZCwgdXNlcklkKTtcbiAgICAgICAgICAgIHR5cGVDb25jZXB0ID0gdHlwZUNvbmNlcHRTdHJpbmc7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZvciBjb21wc29zaXRpb25cIiwgdHlwZUNvbmNlcHQpO1xuICAgICAgICAgICAgdmFyIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCBDcmVhdGVUaGVDb25jZXB0KHJlZmVyZW50LCB1c2VySWQsIGNhdGVnb3J5SWQsIHVzZXJJZCwgdHlwZUNvbmNlcHQuaWQsIHR5cGVDb25jZXB0LnVzZXJJZCwgcmVmZXJlbnRJZCwgcmVmZXJlbnRVc2VySWQsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkKTtcbiAgICAgICAgICAgIGNvbmNlcHQgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0cmluZ0xlbmd0aCA+IDI1NSkge1xuICAgICAgICAgICAgdmFyIHR5cGVDb25jZXB0U3RyaW5nID0geWllbGQgTWFrZVRoZVR5cGVDb25jZXB0KHN0cmluZ1RvQ2hlY2ssIHNlc3Npb25JbmZvcm1hdGlvbklkLCBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQsIHVzZXJJZCk7XG4gICAgICAgICAgICB0eXBlQ29uY2VwdCA9IHR5cGVDb25jZXB0U3RyaW5nO1xuICAgICAgICAgICAgdmFyIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCBDcmVhdGVUaGVDb25jZXB0KHJlZmVyZW50LCB1c2VySWQsIGNhdGVnb3J5SWQsIHVzZXJJZCwgdHlwZUNvbmNlcHQuaWQsIHR5cGVDb25jZXB0LnVzZXJJZCwgcmVmZXJlbnRJZCwgcmVmZXJlbnRVc2VySWQsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkKTtcbiAgICAgICAgICAgIGNvbmNlcHQgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICAgICAgdmFyIFRoZVRleHRzRGF0YSA9IG5ldyBUaGVUZXh0cyh1c2VySWQsIHJlZmVyZW50LCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCwgRGF0ZS5ub3coKS50b1N0cmluZygpLCB0cnVlKTtcbiAgICAgICAgICAgIHZhciBUZXh0RGF0YVN0cmluZyA9IHlpZWxkIENyZWF0ZVRleHREYXRhKFRoZVRleHRzRGF0YSk7XG4gICAgICAgICAgICB2YXIgVGV4dERhdGEgPSBUZXh0RGF0YVN0cmluZztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0eXBlQ29uY2VwdFN0cmluZyA9IHlpZWxkIE1ha2VUaGVUeXBlQ29uY2VwdChzdHJpbmdUb0NoZWNrLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkLCB1c2VySWQpO1xuICAgICAgICAgICAgdHlwZUNvbmNlcHQgPSB0eXBlQ29uY2VwdFN0cmluZztcbiAgICAgICAgICAgIHZhciBjb25jZXB0QnlDaGFyVHlwZVN0cmluZyA9IHlpZWxkIEdldENvbmNlcHRCeUNoYXJhY3RlckFuZFR5cGUocmVmZXJlbnQsIHR5cGVDb25jZXB0LmlkKTtcbiAgICAgICAgICAgIHZhciBjb25jZXB0VHlwZUNoYXJhY3RlciA9IGNvbmNlcHRCeUNoYXJUeXBlU3RyaW5nO1xuICAgICAgICAgICAgdmFyIG1ha2VUaGVOYW1lU3RyaW5nID0geWllbGQgTWFrZVRoZU5hbWUocmVmZXJlbnQsIHVzZXJJZCwgc2VjdXJpdHlJZCwgc2VjdXJpdHlVc2VySWQsIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQsIHNlc3Npb25JbmZvcm1hdGlvbklkLCBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQsIHR5cGVDb25jZXB0LmlkLCB0eXBlQ29uY2VwdC51c2VySWQsIGNvbmNlcHRUeXBlQ2hhcmFjdGVyKTtcbiAgICAgICAgICAgIHZhciBtYWtlVGhlTmFtZUNvbmNlcHQgPSBtYWtlVGhlTmFtZVN0cmluZztcbiAgICAgICAgICAgIGNvbmNlcHQgPSBjb25jZXB0VHlwZUNoYXJhY3RlcjtcbiAgICAgICAgICAgIGlmIChjb25jZXB0VHlwZUNoYXJhY3Rlci5pZCA9PSAwICYmIGNvbmNlcHRUeXBlQ2hhcmFjdGVyLnVzZXJJZCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCBDcmVhdGVUaGVDb25jZXB0KHJlZmVyZW50LCB1c2VySWQsIGNhdGVnb3J5SWQsIHVzZXJJZCwgdHlwZUNvbmNlcHQuaWQsIHR5cGVDb25jZXB0LnVzZXJJZCwgbWFrZVRoZU5hbWVDb25jZXB0LmlkLCBtYWtlVGhlTmFtZUNvbmNlcHQudXNlcklkLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCk7XG4gICAgICAgICAgICAgICAgY29uY2VwdCA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYoY29uY2VwdCl7XG4gICAgICAgIC8vICAgICBpZihjb25jZXB0LnR5cGUgPT0gbnVsbCl7XG4gICAgICAgIC8vICAgICAgICAgdmFyIGNvbmNlcHRUeXBlID0gQ29uY2VwdHNEYXRhLkdldENvbmNlcHQoY29uY2VwdC50eXBlSWQpO1xuICAgICAgICAvLyAgICAgICAgIGlmKGNvbmNlcHRUeXBlID09IG51bGwgJiYgY29uY2VwdC50eXBlSWQgIT0gbnVsbCAmJiBjb25jZXB0LnR5cGVJZCAhPSB1bmRlZmluZWQpe1xuICAgICAgICAvLyAgICAgICAgICAgICB2YXIgdHlwZUNvbmNlcHRTdHJpbmdOZXcgPSBhd2FpdCBHZXRDb25jZXB0KGNvbmNlcHQudHlwZUlkKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgdmFyIG5ld1R5cGVDb25jZXB0ID0gdHlwZUNvbmNlcHRTdHJpbmdOZXcgYXMgQ29uY2VwdDtcbiAgICAgICAgLy8gICAgICAgICAgICAgY29uY2VwdC50eXBlID0gbmV3VHlwZUNvbmNlcHQ7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIGNvbmNlcHQudHlwZSA9IHR5cGVDb25jZXB0O1xuICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMgaXMgdGhlIGNvbmNlcHQgcmV0dXJuZWQgYnkgbWFrZSB0aGUgaW5zdGFuY2UgY29uY2VwdFwiLCBjb25jZXB0KTtcbiAgICAgICAgcmV0dXJuIGNvbmNlcHQ7XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCBHZXRUaGVSZWZlcmVudCBmcm9tIFwiLi9HZXRUaGVSZWZlcmVudFwiO1xuaW1wb3J0IE1ha2VUaGVDaGFyYWN0ZXIgZnJvbSBcIi4vTWFrZVRoZUNoYXJhY3RlclwiO1xuaW1wb3J0IE1ha2VUaGVDb25jZXB0IGZyb20gXCIuL01ha2VUaGVDb25jZXB0XCI7XG5leHBvcnQgZnVuY3Rpb24gTWFrZVRoZU5hbWUodGhlQ2hhcmFjdGVyRGF0YSwgdXNlcklkLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCwgdHlwZUlkLCB0eXBlVXNlcklkLCBleGlzdGluZ0NvbmNlcHQpIHtcbiAgICB2YXIgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZDtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgbmFtZVR5cGVJZCA9IDEyO1xuICAgICAgICB2YXIgY2F0ZWdvcnlJZCA9IDQ7XG4gICAgICAgIHZhciBzZXNzaW9uSWQgPSBzZXNzaW9uSW5mb3JtYXRpb25JZCAhPT0gbnVsbCAmJiBzZXNzaW9uSW5mb3JtYXRpb25JZCAhPT0gdm9pZCAwID8gc2Vzc2lvbkluZm9ybWF0aW9uSWQgOiA5OTk7XG4gICAgICAgIHZhciBzZXNzaW9uVXNlcklkID0gc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkICE9PSBudWxsICYmIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCAhPT0gdm9pZCAwID8gc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkIDogOTk5O1xuICAgICAgICBhY2Nlc3NJZCA9IGFjY2Vzc0lkICE9PSBudWxsICYmIGFjY2Vzc0lkICE9PSB2b2lkIDAgPyBhY2Nlc3NJZCA6IDQ7XG4gICAgICAgIGFjY2Vzc1VzZXJJZCA9IGFjY2Vzc1VzZXJJZCAhPT0gbnVsbCAmJiBhY2Nlc3NVc2VySWQgIT09IHZvaWQgMCA/IGFjY2Vzc1VzZXJJZCA6IDk5OTtcbiAgICAgICAgdmFyIGNhdGVnb3J5VXNlcklkID0gOTk5O1xuICAgICAgICB2YXIgcmVmZXJlbnRJbmZvO1xuICAgICAgICB2YXIgY2hhcmFjdGVyQ29uY2VwdDtcbiAgICAgICAgaWYgKGV4aXN0aW5nQ29uY2VwdC5pZCA+IDAgJiYgZXhpc3RpbmdDb25jZXB0LnVzZXJJZCA+IDApIHtcbiAgICAgICAgICAgIGNoYXJhY3RlckNvbmNlcHQgPSB5aWVsZCBHZXRUaGVSZWZlcmVudChleGlzdGluZ0NvbmNlcHQuaWQsIGV4aXN0aW5nQ29uY2VwdC51c2VySWQsIGV4aXN0aW5nQ29uY2VwdC5yZWZlcmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjaGFyYWN0ZXJDb25jZXB0ID0gKHlpZWxkIE1ha2VUaGVDaGFyYWN0ZXIodGhlQ2hhcmFjdGVyRGF0YSwgdXNlcklkLCBzZWN1cml0eUlkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSWQpKTtcbiAgICAgICAgICAgIGV4aXN0aW5nQ29uY2VwdCA9IHlpZWxkIE1ha2VUaGVDb25jZXB0KHRoZUNoYXJhY3RlckRhdGEsIHVzZXJJZCwgY2F0ZWdvcnlJZCwgY2F0ZWdvcnlVc2VySWQsIG5hbWVUeXBlSWQsIHR5cGVVc2VySWQsIGNoYXJhY3RlckNvbmNlcHQuaWQsIGNoYXJhY3RlckNvbmNlcHQudXNlcklkLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbklkLCBzZXNzaW9uVXNlcklkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXhpc3RpbmdDb25jZXB0O1xuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgQ3JlYXRlVGhlQ29uY2VwdCBmcm9tIFwiLi9DcmVhdGVUaGVDb25jZXB0XCI7XG5pbXBvcnQgR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyIGZyb20gXCIuL0dldENvbmNlcHRCeUNoYXJhY3RlclwiO1xuaW1wb3J0IE1ha2VUaGVDaGFyYWN0ZXIgZnJvbSBcIi4vTWFrZVRoZUNoYXJhY3RlclwiO1xuaW1wb3J0IHsgU3BsaXRTdHJpbmdzIH0gZnJvbSBcIi4vU3BsaXRTdHJpbmdzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWtlVGhlVHlwZUNvbmNlcHQodHlwZVN0cmluZywgc2Vzc2lvbklkLCBzZXNzaW9uVXNlcklkLCB1c2VySWQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgcmVmZXJlbnRJZCA9IDk5OTtcbiAgICAgICAgdmFyIHNlY3VyaXR5SWQgPSA5OTk7XG4gICAgICAgIHZhciBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQgPSA5OTk7XG4gICAgICAgIHZhciBhY2Nlc3NJZCA9IDk5OTtcbiAgICAgICAgdmFyIHNlY3VyaXR5VXNlcklkID0gdXNlcklkO1xuICAgICAgICB2YXIgYWNjZXNzVXNlcklkID0gdXNlcklkO1xuICAgICAgICB2YXIgY2F0ZWdvcnlVc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHZhciBzZWN1cml0eVVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdmFyIGV4aXN0aW5nQ29uY2VwdCA9IHlpZWxkIEdldENvbmNlcHRCeUNoYXJhY3Rlcih0eXBlU3RyaW5nKTtcbiAgICAgICAgaWYgKGV4aXN0aW5nQ29uY2VwdCkge1xuICAgICAgICAgICAgaWYgKGV4aXN0aW5nQ29uY2VwdC5pZCA9PSAwIHx8IGV4aXN0aW5nQ29uY2VwdC51c2VySWQgPT0gMCkge1xuICAgICAgICAgICAgICAgIHZhciBzcGxpdHRlZFN0cmluZ0FycmF5ID0gU3BsaXRTdHJpbmdzKHR5cGVTdHJpbmcpO1xuICAgICAgICAgICAgICAgIGlmIChzcGxpdHRlZFN0cmluZ0FycmF5WzBdID09IHR5cGVTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCBNYWtlVGhlQ2hhcmFjdGVyKHR5cGVTdHJpbmcsIHVzZXJJZCwgc2VjdXJpdHlJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbklkKTtcbiAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdDb25jZXB0ID0gY29uY2VwdFN0cmluZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjYXRlZ29yeUlkID0gMTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhdGVnb3J5Q29uY2VwdCA9IE1ha2VUaGVUeXBlQ29uY2VwdChzcGxpdHRlZFN0cmluZ0FycmF5WzBdLCBzZXNzaW9uSWQsIHNlc3Npb25Vc2VySWQsIHVzZXJJZCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0eXBlQ29uY2VwdCA9IHlpZWxkIE1ha2VUaGVUeXBlQ29uY2VwdChzcGxpdHRlZFN0cmluZ0FycmF5WzFdLCBzZXNzaW9uSWQsIHNlc3Npb25Vc2VySWQsIHVzZXJJZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlQ29uY2VwdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmNlcHQgPSB5aWVsZCBDcmVhdGVUaGVDb25jZXB0KHR5cGVTdHJpbmcsIHVzZXJJZCwgY2F0ZWdvcnlJZCwgdXNlcklkLCB0eXBlQ29uY2VwdC5pZCwgdXNlcklkLCByZWZlcmVudElkLCB1c2VySWQsIHNlY3VyaXR5SWQsIHVzZXJJZCwgYWNjZXNzSWQsIHVzZXJJZCwgc2Vzc2lvbklkLCB1c2VySWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdDb25jZXB0ID0gY29uY2VwdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXhpc3RpbmdDb25jZXB0O1xuICAgIH0pO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIFNwbGl0U3RyaW5ncyh0eXBlU3RyaW5nKSB7XG4gICAgY29uc3QgU3BsaXR0ZWRTdHJpbmdzID0gdHlwZVN0cmluZy5zcGxpdChcIl9cIik7XG4gICAgcmV0dXJuIFNwbGl0dGVkU3RyaW5ncztcbn1cbiIsImV4cG9ydCB7IGluaXQgfTtcbmltcG9ydCBDcmVhdGVCaW5hcnlUcmVlRnJvbURhdGEgZnJvbSAnLi9TZXJ2aWNlcy9DcmVhdGVCaW5hcnlUcmVlRnJvbURhdGEnO1xuaW1wb3J0IHsgSWRlbnRpZmllckZsYWdzIH0gZnJvbSAnLi9EYXRhU3RydWN0dXJlcy9JZGVudGlmaWVyRmxhZ3MnO1xuZXhwb3J0IHsgU3BsaXRTdHJpbmdzIH0gZnJvbSAnLi9TZXJ2aWNlcy9TcGxpdFN0cmluZ3MnO1xuZXhwb3J0IHsgR2V0Q29tcG9zaXRpb25MaXN0LCBHZXRDb21wb3NpdGlvbkxpc3RXaXRoSWQgfSBmcm9tICcuL1NlcnZpY2VzL0dldENvbXBvc2l0aW9uTGlzdCc7XG5leHBvcnQgeyBHZXRDb21wb3NpdGlvbkxpc3RMb2NhbCwgR2V0Q29tcG9zaXRpb25MaXN0TG9jYWxXaXRoSWQgfSBmcm9tICcuL1NlcnZpY2VzL0xvY2FsL0dldENvbXBvc2l0aW9uTGlzdExvY2FsJztcbmV4cG9ydCB7IEdldEFsbENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvbiB9IGZyb20gJy4vQXBpL0dldEFsbENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvbic7XG5leHBvcnQgeyBHZXRDb21wb3NpdGlvbiwgR2V0Q29tcG9zaXRpb25XaXRoSWQgfSBmcm9tICcuL1NlcnZpY2VzL0dldENvbXBvc2l0aW9uJztcbmV4cG9ydCB7IEdldENvbXBvc2l0aW9uTG9jYWwsIEdldENvbXBvc2l0aW9uTG9jYWxXaXRoSWQgfSBmcm9tICcuL1NlcnZpY2VzL0xvY2FsL0dldENvbXBvc2l0aW9uTG9jYWwnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDcmVhdGVDb21wb3NpdGlvbiB9IGZyb20gJy4vU2VydmljZXMvQ3JlYXRlVGhlQ29tcG9zaXRpb24nO1xuZXhwb3J0IHsgQ3JlYXRlVGhlQ29tcG9zaXRpb25Mb2NhbCB9IGZyb20gJy4vU2VydmljZXMvTG9jYWwvQ3JlYXRlVGhlQ29tcG9zaXRpb25Mb2NhbCc7XG5leHBvcnQgeyBDcmVhdGVDb25uZWN0aW9uQmV0d2VlblR3b0NvbmNlcHRzIH0gZnJvbSAnLi9TZXJ2aWNlcy9DcmVhdGVDb25uZWN0aW9uQmV0d2VlblR3b0NvbmNlcHRzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgR2V0VGhlQ29uY2VwdCB9IGZyb20gJy4vU2VydmljZXMvR2V0VGhlQ29uY2VwdCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1ha2VUaGVJbnN0YW5jZUNvbmNlcHQgfSBmcm9tICcuL1NlcnZpY2VzL01ha2VUaGVJbnN0YW5jZUNvbmNlcHQnO1xuZXhwb3J0IHsgTWFrZVRoZUluc3RhbmNlQ29uY2VwdExvY2FsIH0gZnJvbSAnLi9TZXJ2aWNlcy9Mb2NhbC9NYWtlVGhlSW5zdGFuY2VDb25jZXB0TG9jYWwnO1xuZXhwb3J0IHsgc3RvcmVUb0RhdGFiYXNlLCBnZXRGcm9tRGF0YWJhc2UsIGdldEZyb21EYXRhYmFzZVdpdGhUeXBlLCBnZXRGcm9tRGF0YWJhc2VXaXRoVHlwZU9sZCB9IGZyb20gJy4vRGF0YWJhc2UvaW5kZXhlZGRiJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ3JlYXRlVGhlQ29ubmVjdGlvbiB9IGZyb20gJy4vU2VydmljZXMvQ3JlYXRlVGhlQ29ubmVjdGlvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEdldENvbmNlcHRCeUNoYXJhY3RlciB9IGZyb20gJy4vU2VydmljZXMvR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyJztcbmV4cG9ydCB7IEdldExpbmsgfSBmcm9tICcuL1NlcnZpY2VzL0dldExpbmsnO1xuZXhwb3J0IHsgR2V0TGlua2VyQ29ubmVjdGlvbkZyb21Db25jZXB0cyB9IGZyb20gJy4vU2VydmljZXMvR2V0TGlua2VyQ29ubmVjdGlvbkZyb21Db25jZXB0JztcbmV4cG9ydCB7IERlbGV0ZUNvbmNlcHRCeUlkIH0gZnJvbSAnLi9TZXJ2aWNlcy9EZWxldGVDb25jZXB0JztcbmV4cG9ydCB7IERlbGV0ZUNvbm5lY3Rpb25CeUlkIH0gZnJvbSAnLi9TZXJ2aWNlcy9EZWxldGVDb25uZWN0aW9uJztcbmV4cG9ydCB7IEdldENvbm5lY3Rpb25CeUlkIH0gZnJvbSAnLi9TZXJ2aWNlcy9HZXRDb25uZWN0aW9ucyc7XG5leHBvcnQgeyBTeW5jRGF0YSB9IGZyb20gJy4vRGF0YVN0cnVjdHVyZXMvU3luY0RhdGEnO1xuZXhwb3J0IHsgQ29uY2VwdCB9IGZyb20gJy4vRGF0YVN0cnVjdHVyZXMvQ29uY2VwdCc7XG5leHBvcnQgeyBDb25jZXB0c0RhdGEgfSBmcm9tICcuL0RhdGFTdHJ1Y3R1cmVzL0NvbmNlcHREYXRhJztcbmV4cG9ydCB7IENvbm5lY3Rpb25EYXRhIH0gZnJvbSAnLi9EYXRhU3RydWN0dXJlcy9Db25uZWN0aW9uRGF0YSc7XG5pbXBvcnQgeyBHZXREYXRhRnJvbUluZGV4RGIsIEdldERhdGFGcm9tSW5kZXhEYkxvY2FsIH0gZnJvbSAnLi9TZXJ2aWNlcy9HZXREYXRhRnJvbUluZGV4RGInO1xuaW1wb3J0IHsgQmluYXJ5Q2hhcmFjdGVyVHJlZSB9IGZyb20gJy4vRGF0YVN0cnVjdHVyZXMvQmluYXJ5Q2hhcmFjdGVyVHJlZSc7XG5pbXBvcnQgQ3JlYXRlTG9jYWxCaW5hcnlUcmVlRnJvbURhdGEgZnJvbSAnLi9TZXJ2aWNlcy9Mb2NhbC9DcmVhdGVMb2NhbEJpbmFyeVRyZWVGcm9tRGF0YSc7XG5pbXBvcnQgSW5pdGlhbGl6ZVN5c3RlbSBmcm9tICcuL1NlcnZpY2VzL0luaXRpYWxpemVTeXN0ZW0nO1xuaW1wb3J0IHsgQmFzZVVybCB9IGZyb20gJy4vRGF0YVN0cnVjdHVyZXMvQmFzZVVybCc7XG5leHBvcnQgeyBCYXNlVXJsIH0gZnJvbSAnLi9EYXRhU3RydWN0dXJlcy9CYXNlVXJsJztcbmZ1bmN0aW9uIGluaXQodXJsID0gXCJcIiwgYWl1cmwgPSBcIlwiKSB7XG4gICAgQmFzZVVybC5CQVNFX1VSTCA9IHVybDtcbiAgICBCYXNlVXJsLkFJX1VSTCA9IGFpdXJsO1xuICAgIEluaXRpYWxpemVTeXN0ZW0oKS50aGVuKCgpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgQ3JlYXRlQmluYXJ5VHJlZUZyb21EYXRhKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBJZGVudGlmaWVyRmxhZ3MuaXNEYXRhTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIElkZW50aWZpZXJGbGFncy5pc0NoYXJhY3RlckxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICBJZGVudGlmaWVyRmxhZ3MuaXNUeXBlTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBlbGFwc2VkID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIHRpbWUgdGFrZW4gdG8gcHJlcGFyZSBjb25jZXB0ICBkYXRhIGlzICBcIiwgZWxhcHNlZCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhCaW5hcnlDaGFyYWN0ZXJUcmVlLmNoYXJhY3RlclJvb3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gQ3JlYXRlQ2hhcmFjdGVyQmluYXJ5VHJlZUZyb21EYXRhKCkudGhlbigoKT0+e1xuICAgICAgICAvLyAgICBJZGVudGlmaWVyRmxhZ3MuaXNDaGFyYWN0ZXJMb2FkZWQ9IHRydWU7XG4gICAgICAgIC8vICAgIGxldCBlbGFwc2VkID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydDtcbiAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCJUaGUgdGltZSB0YWtlbiB0byBwcmVwYXJlIGNoYXJhY3RlciBkYXRhIGlzICBcIiwgZWxhcHNlZCk7XG4gICAgICAgIC8vIH0pO1xuICAgICAgICAvLyBDcmVhdGVUeXBlVHJlZUZyb21EYXRhKCkudGhlbigoKT0+e1xuICAgICAgICAvLyAgICBJZGVudGlmaWVyRmxhZ3MuaXNUeXBlTG9hZGVkPSB0cnVlO1xuICAgICAgICAvLyAgICBsZXQgZWxhcHNlZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gc3RhcnQ7XG4gICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiVGhlIHRpbWUgdGFrZW4gdG8gcHJlcGFyZSBkYXRhIGlzIFwiLCBlbGFwc2VkKTtcbiAgICAgICAgLy8gfSk7XG4gICAgICAgIENyZWF0ZUxvY2FsQmluYXJ5VHJlZUZyb21EYXRhKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBJZGVudGlmaWVyRmxhZ3MuaXNMb2NhbERhdGFMb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgSWRlbnRpZmllckZsYWdzLmlzTG9jYWxUeXBlTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIElkZW50aWZpZXJGbGFncy5pc0xvY2FsQ2hhcmFjdGVyTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBlbGFwc2VkID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIHRpbWUgdGFrZW4gdG8gcHJlcGFyZSBsb2NhbCBjb25jZXB0ICBcIiwgZWxhcHNlZCk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBDcmVhdGVMb2NhbENoYXJhY3RlckJpbmFyeVRyZWVGcm9tRGF0YSgpLnRoZW4oKCk9PntcbiAgICAgICAgLy8gICAgSWRlbnRpZmllckZsYWdzLmlzTG9jYWxDaGFyYWN0ZXJMb2FkZWQgPSB0cnVlO1xuICAgICAgICAvLyB9KTtcbiAgICAgICAgLy8gQ3JlYXRlTG9jYWxCaW5hcnlUeXBlVHJlZUZyb21EYXRhKCkudGhlbigoKT0+e1xuICAgICAgICAvLyAgICBJZGVudGlmaWVyRmxhZ3MuaXNMb2NhbFR5cGVMb2FkZWQgPSB0cnVlO1xuICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhcInR5cGVcIixJZGVudGlmaWVyRmxhZ3MuaXNMb2NhbFR5cGVMb2FkZWQpO1xuICAgICAgICAvLyB9KTtcbiAgICAgICAgR2V0RGF0YUZyb21JbmRleERiTG9jYWwoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIElkZW50aWZpZXJGbGFncy5pc0xvY2FsQ29ubmVjdGlvbkxvYWRlZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICBHZXREYXRhRnJvbUluZGV4RGIoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIElkZW50aWZpZXJGbGFncy5pc0Nvbm5lY3Rpb25Mb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgSWRlbnRpZmllckZsYWdzLmlzQ29ubmVjdGlvblR5cGVMb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IGVsYXBzZWQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHN0YXJ0O1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGUgdGltZSB0YWtlbiB0byBwcmVwYXJlIGNvbm5lY3Rpb25zICBcIiwgZWxhcHNlZCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuLy8gIEdldERhdGFGcm9tSW5kZXhEYigpOyBcbi8vIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXlGb3JtJykgYXMgSFRNTEZvcm1FbGVtZW50O1xuLy8gLy9jb25zdCBmb3JtMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1c2VyRm9ybScpIGFzIEhUTUxGb3JtRWxlbWVudDtcbi8vIGNvbnN0IGZvcm0zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbXBvc2l0aW9uRm9ybScpIGFzIEhUTUxGb3JtRWxlbWVudDtcbi8vIGNvbnN0IGpzb25Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzb25Gb3JtJykgYXMgSFRNTEZvcm1FbGVtZW50O1xuLy8gY29uc3QgbmFtZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZWZvcm0nKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG4vLyBjb25zdCBnZXRuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dldG5hbWUnKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG4vLyB2YXIganNvbiA9IHtcbi8vICAgICBcImFzZGdzYWRkZmZcIjoge1xuLy8gICAgICAgICBcImFkZ2FzZGZzZGZcIjoge1xuLy8gICAgICAgICAgICAgXCJhc2RnXCI6IFwidGFtZVwiLFxuLy8gICAgICAgICAgICAgXCJicmlkZXJhcnJcIjogW1wiaGVsbG9cIiwgXCJ0cmVcIl1cbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vIH07XG4vLyBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xuLy8gICAgIGNvbnNvbGUubG9nKFwic3luY2luZ1wiKTtcbi8vICAgICBTeW5jRGF0YS5TeW5jRGF0YU9ubGluZSgpXG4vLyB9LCA1MDAwKTtcbi8vIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4vLyAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgY29uc3QgY29uY2VwdElkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb25jZXB0aWQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuLy8gICAgY29uc3QgY29uY2VwdElkID0gY29uY2VwdElkRWxlbWVudC52YWx1ZTtcbi8vICAgIEdldENvbXBvc2l0aW9uKE51bWJlcihjb25jZXB0SWQpKS50aGVuKG91dHB1dD0+e1xuLy8gICAgIGNvbnN0IGpzb25FbGVtbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanNvbm91dHB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4vLyAgICAgdmFyIGpzb24gPSBKU09OLnN0cmluZ2lmeShvdXRwdXQpO1xuLy8gICAgIGNvbnNvbGUubG9nKGpzb24pO1xuLy8gICAgIGpzb25FbGVtbnQuaW5uZXJIVE1MID0ganNvbjtcbi8vICAgIH0pO1xuLy8gfSk7XG4vLyBnZXRuYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgY29uc3QgY29uY2VwdElkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lY29uY2VwdGlkJykgYXMgSFRNTElucHV0RWxlbWVudDtcbi8vICAgICBjb25zdCBjb25jZXB0SWQgPSBjb25jZXB0SWRFbGVtZW50LnZhbHVlO1xuLy8gICAgIEdldENvbXBvc2l0aW9uKE51bWJlcihjb25jZXB0SWQpKS50aGVuKG91dHB1dD0+e1xuLy8gICAgICAgICBjb25zdCBmaXJzdE5hbWVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpcnN0bmFtZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4vLyAgICAgICAgIGNvbnN0IGxhc3ROYW1lRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYXN0bmFtZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKG91dHB1dCk7XG4vLyAgICAgICAgIGZpcnN0TmFtZUVsZW1lbnQudmFsdWUgPSBvdXRwdXQubmFtZWRhdGEuZmlyc3RuYW1lO1xuLy8gICAgICAgICBsYXN0TmFtZUVsZW1lbnQudmFsdWUgPSBvdXRwdXQubmFtZWRhdGEubGFzdG5hbWU7XG4vLyAgICAgfSk7XG4vLyAgfSk7XG4vLyBuYW1lRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbi8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgIGNvbnN0IGZpcnN0TmFtZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlyc3RuYW1lJykgYXMgSFRNTElucHV0RWxlbWVudDtcbi8vICAgICBjb25zdCBmaXJzdG5hbWUgPSBmaXJzdE5hbWVFbGVtZW50LnZhbHVlO1xuLy8gICAgIGNvbnN0IGxhc3ROYW1lRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYXN0bmFtZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4vLyAgICAgY29uc3QgbGFzdG5hbWUgPSBsYXN0TmFtZUVsZW1lbnQudmFsdWU7XG4vLyAgICAgdmFyIGpzb24gPSB7XG4vLyAgICAgICAgIFwibmFtZWRhdGFcIjp7XG4vLyAgICAgICAgICAgICBcImZpcnN0bmFtZVwiOiBmaXJzdG5hbWUsXG4vLyAgICAgICAgICAgICBcImxhc3RuYW1lXCI6IGxhc3RuYW1lXG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgY29uc29sZS5sb2coanNvbik7XG4vLyAgICAgQ3JlYXRlVGhlQ29tcG9zaXRpb24oanNvbikudGhlbigodmFsdWUpPT57XG4vLyAgICAgICAgIGNvbnN0IG91dHB1dGlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI291dHB1dGlkJykgYXMgSFRNTElucHV0RWxlbWVudDtcbi8vICAgICAgICAgdmFyIGNvbmNlcHQgPSB2YWx1ZSBhcyBDb25jZXB0O1xuLy8gICAgICAgICBvdXRwdXRpZC5pbm5lckhUTUwgPSBjb25jZXB0LmlkLnRvU3RyaW5nKCk7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzIHRoZSB0ZXN0IGZvciBmaW5hbCcpO1xuLy8gICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4vLyAgICAgfSk7XG4vLyAgICAgfSk7XG4vLyBqc29uRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+e1xuLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgY29uc3QgY29tcG9zaXRpb25OYW1lRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjanNvbmRhdGFcIikgYXMgSFRNTElucHV0RWxlbWVudDtcbi8vICAgICBjb25zdCBjb21wb3NpdGlvbk5hbWUgPSBjb21wb3NpdGlvbk5hbWVFbGVtZW50LnZhbHVlO1xuLy8gICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgY29tcG9zaXRpb24gbmFtZVwiKTtcbi8vICAgICBjb25zb2xlLmxvZyhjb21wb3NpdGlvbk5hbWUpO1xuLy8gICAgIHZhciBqb24gPSBKU09OLnBhcnNlKGNvbXBvc2l0aW9uTmFtZSk7XG4vLyAgICAgQ3JlYXRlVGhlQ29tcG9zaXRpb24oam9uKS50aGVuKCh2YWx1ZSk9Pntcbi8vICAgICAgICAgY29uc3Qgb3V0cHV0aWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3V0cHV0aWQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuLy8gICAgICAgICB2YXIgY29uY2VwdCA9IHZhbHVlIGFzIENvbmNlcHQ7XG4vLyAgICAgICAgIG91dHB1dGlkLmlubmVySFRNTCA9IGNvbmNlcHQuaWQudG9TdHJpbmcoKTtcbi8vICAgICAgICAgY29uc29sZS5sb2coJ3RoaXMgaXMgdGhlIHRlc3QgZm9yIGZpbmFsJyk7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbi8vICAgICB9KTtcbi8vIH0pO1xuLy8gZm9ybTMuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4vLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbi8vICAgICBjb25zdCBjb21wb3NpdGlvbk5hbWVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb21wb3NpdGlvbl9uYW1lXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4vLyAgICAgY29uc3QgY29tcG9zaXRpb25OYW1lID0gY29tcG9zaXRpb25OYW1lRWxlbWVudC52YWx1ZTtcbi8vICAgICBHZXRDb21wb3NpdGlvbkxpc3QoY29tcG9zaXRpb25OYW1lKS50aGVuKG91dHB1dD0+e1xuLy8gICAgICAgICBjb25zdCBqc29uRWxlbW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzb25vdXRwdXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuLy8gICAgICAgICB2YXIganNvbiA9IEpTT04uc3RyaW5naWZ5KG91dHB1dCk7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGpzb24pO1xuLy8gICAgICAgICBqc29uRWxlbW50LmlubmVySFRNTCA9IEpTT04uc3RyaW5naWZ5KGpzb24pO1xuLy8gICAgIH0pO1xuLy8gfSk7XG4vLyAvLyBmb3JtMi5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbi8vIC8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gLy8gICAgIGNvbnN0IHVzZXJJZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VzZXJpZFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuLy8gLy8gICAgIGNvbnN0IHVzZXJJZCA9IHVzZXJJZEVsZW1lbnQudmFsdWU7XG4vLyAvLyAgICAgR2V0QWxsVXNlckNvbmNlcHRzKE51bWJlcih1c2VySWQpKTtcbi8vIC8vICAgICBHZXRBbGxVc2VyQ29ubmVjdGlvbnMoTnVtYmVyKHVzZXJJZCkpLnRoZW4oKCk9Pntcbi8vIC8vICAgICAgICAgY29uc29sZS5sb2coXCJnb3QgYWxsIHRoZSBkYXRhXCIpO1xuLy8gLy8gICAgIH0pO1xuLy8gLy8gIH0pO1xuLy8gd2luZG93Lm9ubW91c2Vkb3duID0gKGV2OiBNb3VzZUV2ZW50KTogYW55ID0+IHtcbi8vICAgICB2YXIgaXNNb3VzZURvd24gPSB0cnVlO1xuLy8gICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXlDYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbi8vICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJykgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIDtcbi8vICAgICB2YXIgX2RpZmZlcmVuY2VfZnJvbV93aW5kb3cgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4vLyAgICAgdmFyIHdpZHRoX2RpZmZlcmVuY2UgPSAwO1xuLy8gICAgIHZhciBoZWlnaHRfZGlmZmVyZW5jZSA9IDA7XG4vLyAgICAgLy9VcGRhdGUgbW91c2UgcG9zaXRpb24gYXQgdGltZSBvZiBkb3duXG4vLyAgICAgdmFyIG1vdXNlX3hfY29vcmRpbmF0ZSA9IGV2LnggLSBfZGlmZmVyZW5jZV9mcm9tX3dpbmRvdy5sZWZ0ICsgd2luZG93LnNjcm9sbFg7XG4vLyAgICAgdmFyIG1vdXNlX3lfY29vcmRpbmF0ZSA9IGV2LnkgLSBfZGlmZmVyZW5jZV9mcm9tX3dpbmRvdy50b3AgKyB3aW5kb3cuc2Nyb2xsWTtcbi8vICAgICB2YXIgc2VsZWN0ZWRfY29uY2VwdF9vYmplY3QgPSBzZWxlY3RDb25jZXB0T2JqZWN0KG1vdXNlX3hfY29vcmRpbmF0ZSwgbW91c2VfeV9jb29yZGluYXRlKTtcbi8vICAgICB3aW5kb3cub25tb3VzZW1vdmUgPSAoZXY6IE1vdXNlRXZlbnQpOiBhbnkgPT4ge1xuLy8gICAgICAgICB2YXIgcHJldmlvdXNfbW91c2VfeCA9IG1vdXNlX3hfY29vcmRpbmF0ZTtcbi8vICAgICAgICAgdmFyIHByZXZpb3VzX21vdXNlX3kgPSBtb3VzZV95X2Nvb3JkaW5hdGU7XG4vLyAgICAgICAgIHZhciBuZXdfbW91c2VfeF9jb29yZGluYXRlID0gZXYueCAtIF9kaWZmZXJlbmNlX2Zyb21fd2luZG93LmxlZnQgKyB3aW5kb3cuc2Nyb2xsWDtcbi8vICAgICAgICAgdmFyIG5ld19tb3VzZV95X2Nvb3JkaW5hdGUgPSBldi55IC0gX2RpZmZlcmVuY2VfZnJvbV93aW5kb3cudG9wICsgd2luZG93LnNjcm9sbFk7XG4vLyAgICAgICAgIC8vaG93IG11Y2ggZGlkIHRoZSBtb3VzZSBtb3ZlXG4vLyAgICAgICAgIHZhciBtb3VzZV94X2RpZmZlcmVuY2UgPSBuZXdfbW91c2VfeF9jb29yZGluYXRlIC0gcHJldmlvdXNfbW91c2VfeDtcbi8vICAgICAgICAgdmFyIG1vdXNlX3lfZGlmZmVyZW5jZSA9IG5ld19tb3VzZV95X2Nvb3JkaW5hdGUgLSBwcmV2aW91c19tb3VzZV95O1xuLy8gICAgICAgICBpZihzZWxlY3RlZF9jb25jZXB0X29iamVjdCl7XG4vLyAgICAgICAgICAgICBpZihpc01vdXNlRG93bil7XG4vLyAgICAgICAgICAgICAgICAgc2VsZWN0ZWRfY29uY2VwdF9vYmplY3QueCA9IG5ld19tb3VzZV94X2Nvb3JkaW5hdGU7XG4vLyAgICAgICAgICAgICAgICAgc2VsZWN0ZWRfY29uY2VwdF9vYmplY3QueSA9IG5ld19tb3VzZV95X2Nvb3JkaW5hdGU7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgd2luZG93Lm9ubW91c2V1cCA9IChldjogTW91c2VFdmVudCk6IGFueSA9PiB7XG4vLyAgICAgICAgIGlzTW91c2VEb3duID0gZmFsc2U7XG4vLyAgICAgICAgIHNlbGVjdGVkX2NvbmNlcHRfb2JqZWN0ICA9IG51bGw7XG4vLyAgICAgfVxuLy99XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2FwcC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==