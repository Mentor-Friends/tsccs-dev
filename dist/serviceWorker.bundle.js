/******/ var __webpack_modules__ = ({

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
/* harmony import */ var _Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/Security/GetRequestHeader */ "./src/Services/Security/GetRequestHeader.ts");
/* harmony import */ var _Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Services/Common/ErrorPosting */ "./src/Services/Common/ErrorPosting.ts");
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
    return __awaiter(this, void 0, void 0, function* () {
        var characterData;
        try {
            characterData = _DataStructures_CharacterRepository__WEBPACK_IMPORTED_MODULE_0__.CharacterRepository.GetCharacter(characterData.data);
            if (characterData.id == 0) {
                var header = (0,_Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_4__.GetRequestHeader)();
                const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_3__.BaseUrl.CreateTheCharacterDataUrl(), {
                    method: 'POST',
                    headers: header,
                    body: JSON.stringify(characterData),
                });
                if (!response.ok) {
                    (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_5__.HandleHttpError)(response);
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
                console.log('create the character error message: ', error.message);
            }
            else {
                console.log('create the character unexpected error: ', error);
            }
            throw error;
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
/* harmony import */ var _Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/Security/GetRequestHeader */ "./src/Services/Security/GetRequestHeader.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app */ "./src/app.ts");
/* harmony import */ var _Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/Common/ErrorPosting */ "./src/Services/Common/ErrorPosting.ts");
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
        let result = (0,_app__WEBPACK_IMPORTED_MODULE_2__.CreateDefaultConcept)();
        try {
            var header = (0,_Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_1__.GetRequestHeader)();
            const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.CreateTheConceptUrl(), {
                method: 'POST',
                headers: header,
                body: JSON.stringify(conceptData),
            });
            if (!response.ok) {
                (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_3__.HandleHttpError)(response);
                throw new Error(`Error! status: ${response.status}`);
            }
            const resultString = yield response.json();
            result = resultString;
            return result;
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('Create the concept api error message: ', error.message);
            }
            else {
                console.log('Create the concept api unexpected error: ', error);
            }
            (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_3__.HandleInternalError)(error, _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.CreateTheConceptUrl());
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
/* harmony import */ var _DataStructures_Connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DataStructures/Connection */ "./src/DataStructures/Connection.ts");
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
/* harmony import */ var _Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/Security/GetRequestHeader */ "./src/Services/Security/GetRequestHeader.ts");
/* harmony import */ var _Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/Common/ErrorPosting */ "./src/Services/Common/ErrorPosting.ts");
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
        let result = new _DataStructures_Connection__WEBPACK_IMPORTED_MODULE_0__.Connection(0, 0, 0, 0, 0, 0, 0);
        try {
            var header = (0,_Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_2__.GetRequestHeader)();
            var jsonData = JSON.stringify(connectionData);
            const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.CreateTheConnectionUrl(), {
                method: 'POST',
                headers: header,
                body: jsonData
            });
            if (response.ok) {
                const result = yield response.json();
            }
            else {
                console.log('Create the connection error message: ', response.status);
                (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_3__.HandleHttpError)(response);
            }
            return result;
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('Create the connection error message: ', error.message);
            }
            else {
                console.log(' Create the connection unexpected error: ', error);
            }
            throw error;
        }
    });
}


/***/ }),

/***/ "./src/Api/Create/CreateTheGhostConceptApi.ts":
/*!****************************************************!*\
  !*** ./src/Api/Create/CreateTheGhostConceptApi.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateTheGhostConceptApi: () => (/* binding */ CreateTheGhostConceptApi)
/* harmony export */ });
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
/* harmony import */ var _DataStructures_Security_TokenStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../DataStructures/Security/TokenStorage */ "./src/DataStructures/Security/TokenStorage.ts");
/* harmony import */ var _Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/Common/ErrorPosting */ "./src/Services/Common/ErrorPosting.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function CreateTheGhostConceptApi(conceptData, connectionData) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = {
            "concepts": [],
            "connections": []
        };
        try {
            const myHeaders = new Headers();
            let myBody = {
                "concepts": conceptData,
                "connections": connectionData
            };
            myHeaders.set("Content-Type", "application/json");
            myHeaders.set('Authorization', "Bearer " + _DataStructures_Security_TokenStorage__WEBPACK_IMPORTED_MODULE_1__.TokenStorage.BearerAccessToken);
            myHeaders.set('Accept', 'application/json');
            //  myHeaders.set('Randomizer', BaseUrl.BASE_RANDOMIZER.toString());
            myHeaders.set('Randomizer', _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.getRandomizer().toString());
            const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.CreateGhostConceptApiUrl(), {
                method: 'POST',
                headers: myHeaders,
                body: JSON.stringify(myBody),
            });
            if (!response.ok) {
                (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_2__.HandleHttpError)(response);
                throw new Error(`Error! status: ${response.status}`);
            }
            const resultString = yield response.json();
            result.concepts = resultString.concepts;
            result.connections = resultString.connections;
            return result;
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('Create the concept api error message: ', error.message);
            }
            else {
                console.log('Create the concept api unexpected error: ', error);
            }
            throw error;
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
/* harmony import */ var _Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/Security/GetRequestHeader */ "./src/Services/Security/GetRequestHeader.ts");
/* harmony import */ var _Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/Common/ErrorPosting */ "./src/Services/Common/ErrorPosting.ts");
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
            var header = (0,_Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_1__.GetRequestHeader)();
            const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.CreateTheTextDataUrl(), {
                method: 'POST',
                headers: header,
                body: JSON.stringify(textData),
            });
            if (!response.ok) {
                (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_2__.HandleHttpError)(response);
                throw new Error(`Error! status: ${response.status}`);
            }
            const resultString = yield response.json();
            const result = resultString;
            return result;
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('Create the text error message: ', error.message);
            }
            else {
                console.log('Create the text unexpected error: ', error);
            }
            throw error;
        }
    });
}


/***/ }),

/***/ "./src/Api/DeleteTheConcept.ts":
/*!*************************************!*\
  !*** ./src/Api/DeleteTheConcept.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteTheConcept)
/* harmony export */ });
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
/* harmony import */ var _Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/Common/ErrorPosting */ "./src/Services/Common/ErrorPosting.ts");
/* harmony import */ var _Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/Security/GetRequestHeader */ "./src/Services/Security/GetRequestHeader.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function DeleteTheConcept(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const formdata = new FormData();
            formdata.append("id", id.toString());
            let header = (0,_Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_2__.GetOnlyTokenHeader)();
            const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.DeleteConceptUrl(), {
                method: 'POST',
                headers: header,
                body: formdata
            });
            if (!response.ok) {
                // throw new Error(`Error! status: ${response.status}`);
                console.log("Delete concept error", response.status);
                (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_1__.HandleHttpError)(response);
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('Delete concept error message: ', error.message);
            }
            else {
                console.log('Delete concept unexpected error: ', error);
            }
            (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_1__.HandleInternalError)(error, _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.DeleteConceptUrl());
        }
    });
}


/***/ }),

/***/ "./src/Api/DeleteTheConnection.ts":
/*!****************************************!*\
  !*** ./src/Api/DeleteTheConnection.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteTheConnection)
/* harmony export */ });
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
/* harmony import */ var _Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/Common/ErrorPosting */ "./src/Services/Common/ErrorPosting.ts");
/* harmony import */ var _Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/Security/GetRequestHeader */ "./src/Services/Security/GetRequestHeader.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function DeleteTheConnection(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const formdata = new FormData();
            formdata.append("id", id.toString());
            let header = (0,_Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_2__.GetOnlyTokenHeader)();
            const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.DeleteTheConnectionUrl(), {
                method: 'POST',
                headers: header,
                body: formdata,
                redirect: "follow"
            });
            if (!response.ok) {
                console.log('Delete connection error status: ', response.status);
                (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_1__.HandleHttpError)(response);
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('Delete connection error message: ', error.message);
            }
            else {
                console.log('Delete connection unexpected error: ', error);
            }
            (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_1__.HandleInternalError)(error, _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.DeleteTheConnectionUrl());
        }
    });
}


/***/ }),

/***/ "./src/Api/Delete/DeleteConceptInBackend.ts":
/*!**************************************************!*\
  !*** ./src/Api/Delete/DeleteConceptInBackend.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TrashTheConcept: () => (/* binding */ TrashTheConcept)
/* harmony export */ });
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
/* harmony import */ var _Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/Common/ErrorPosting */ "./src/Services/Common/ErrorPosting.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function TrashTheConcept(id, token) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const myHeaders = new Headers();
            myHeaders.append('Authorization', 'Bearer ' + token);
            const formdata = new FormData();
            formdata.append('id', id.toString());
            const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.DeleteConceptUrl(), {
                method: 'POST',
                body: formdata,
                headers: myHeaders,
            });
            if (!response.ok) {
                (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_1__.HandleHttpError)(response);
                throw new Error(`Delete composition Error! status: ${response.status}`);
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('Delete composition error message: ', error.message);
            }
            else {
                console.log('Delete composition unexpected error: ', error);
            }
            (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_1__.HandleInternalError)(error, _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.DeleteConceptUrl());
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
/* harmony import */ var _Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/Common/ErrorPosting */ "./src/Services/Common/ErrorPosting.ts");
/* harmony import */ var _Services_InitializeSystem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/InitializeSystem */ "./src/Services/InitializeSystem.ts");
/* harmony import */ var _Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/Security/GetRequestHeader */ "./src/Services/Security/GetRequestHeader.ts");
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
            var header = (0,_Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_4__.GetRequestHeaderWithAuthorization)('application/x-www-form-urlencoded');
            const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.GetAllAiData(), {
                method: 'GET',
                headers: header,
            });
            if (!response.ok) {
                console.log('Ai Error Message: ', "Cannot get response");
                (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_2__.HandleHttpError)(response);
            }
            const result = yield response.json();
            for (var i = 0; i < result.length; i++) {
                _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_1__.ConceptsData.AddConcept(result[i]);
            }
            (0,_Services_InitializeSystem__WEBPACK_IMPORTED_MODULE_3__.PurgatoryDatabaseUpdated)();
            let elapsed = new Date().getTime() - start;
            console.log("The time taken is ", elapsed);
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('Ai Error Message: ', error.message);
            }
            else {
                console.log('Ai Error Message: ', error);
            }
            (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_2__.HandleInternalError)(error, _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.GetAllAiData());
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
/* harmony import */ var _Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/Security/GetRequestHeader */ "./src/Services/Security/GetRequestHeader.ts");
/* harmony import */ var _Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/Common/ErrorPosting */ "./src/Services/Common/ErrorPosting.ts");
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
            var header = (0,_Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_2__.GetRequestHeader)('application/x-www-form-urlencoded');
            const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.GetAllConceptsByTypeUrl(), {
                method: 'POST',
                headers: header,
                body: urlencoded
            });
            if (response.ok) {
                const result = yield response.json();
                for (var i = 0; i < result.length; i++) {
                    _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_0__.ConceptsData.AddConcept(result[i]);
                }
            }
            else {
                console.log("GetAllConceptsByType error", response.status);
                (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_3__.HandleHttpError)(response);
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('GetAllConceptsByType error message: ', error.message);
            }
            else {
                console.log('GetAllConceptsByType unexpected error: ', error);
            }
            (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_3__.HandleInternalError)(error, _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.GetAllConceptsByTypeUrl());
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
/* harmony import */ var _Services_CheckForConnectionDeletion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/CheckForConnectionDeletion */ "./src/Services/CheckForConnectionDeletion.ts");
/* harmony import */ var _Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/Security/GetRequestHeader */ "./src/Services/Security/GetRequestHeader.ts");
/* harmony import */ var _Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/Common/ErrorPosting */ "./src/Services/Common/ErrorPosting.ts");
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
        //connectionList = await ConnectionData.GetConnectionsOfCompositionLocal(composition_id);
        connectionList = yield _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_0__.ConnectionData.GetConnectionsOfConcept(composition_id);
        if (connectionList.length == 0) {
            var connectionListString = yield GetAllConnectionsOfCompositionOnline(composition_id);
            connectionList = connectionListString;
        }
        else {
            var newConnectionsString = yield GetAllConnectionsOfCompositionOnline(composition_id);
            var newConnections = newConnectionsString;
            (0,_Services_CheckForConnectionDeletion__WEBPACK_IMPORTED_MODULE_2__.CheckForConnectionDeletion)(newConnections, connectionList);
            connectionList = newConnections;
        }
        return connectionList;
    });
}
function GetAllConnectionsOfCompositionOnline(composition_id) {
    return __awaiter(this, void 0, void 0, function* () {
        var connectionList = [];
        try {
            var header = (0,_Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_3__.GetRequestHeader)('application/json');
            const myHeaders = new Headers();
            const formdata = new FormData();
            formdata.append("composition_id", composition_id.toString());
            const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.GetAllConnectionsOfCompositionUrl(), {
                method: 'POST',
                headers: myHeaders,
                body: formdata
            });
            console.log("this is getting connection from online", _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.GetAllConnectionsOfCompositionUrl(), composition_id);
            if (!response.ok) {
                (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_4__.HandleHttpError)(response);
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
                console.log('Get all connection of composition error : ', error.message);
            }
            else {
                console.log('Get all connection of composition error : ', error);
            }
            (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_4__.HandleInternalError)(error, _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.GetAllConnectionsOfCompositionUrl());
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
/* harmony import */ var _Services_FindConeceptsFromConnection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/FindConeceptsFromConnection */ "./src/Services/FindConeceptsFromConnection.ts");
/* harmony import */ var _Services_FindConnectionsOfCompositionBulkInMemory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/FindConnectionsOfCompositionBulkInMemory */ "./src/Services/FindConnectionsOfCompositionBulkInMemory.ts");
/* harmony import */ var _Services_CheckForConnectionDeletion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/CheckForConnectionDeletion */ "./src/Services/CheckForConnectionDeletion.ts");
/* harmony import */ var _Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/Security/GetRequestHeader */ "./src/Services/Security/GetRequestHeader.ts");
/* harmony import */ var _Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Services/Common/ErrorPosting */ "./src/Services/Common/ErrorPosting.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app */ "./src/app.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








function GetAllConnectionsOfCompositionBulk() {
    return __awaiter(this, arguments, void 0, function* (composition_ids = []) {
        if (_app__WEBPACK_IMPORTED_MODULE_7__.serviceWorker) {
            const res = yield (0,_app__WEBPACK_IMPORTED_MODULE_7__.sendMessage)('GetAllConnectionsOfCompositionBulk', { composition_ids });
            console.log('data received from sw', res);
            return res.data;
        }
        var connectionList = [];
        var conceptList = [];
        if (composition_ids.length <= 0) {
            return connectionList;
        }
        var oldConnectionList = yield (0,_Services_FindConnectionsOfCompositionBulkInMemory__WEBPACK_IMPORTED_MODULE_3__.FindConnectionsOfCompositionsBulkInMemory)(composition_ids);
        var connectionListString = yield GetAllConnectionsOfCompositionOnline(composition_ids);
        connectionList = connectionListString;
        (0,_Services_CheckForConnectionDeletion__WEBPACK_IMPORTED_MODULE_4__.CheckForConnectionDeletion)(connectionList, oldConnectionList);
        yield (0,_Services_FindConeceptsFromConnection__WEBPACK_IMPORTED_MODULE_2__.FindConceptsFromConnections)(connectionList);
        return connectionList;
    });
}
function GetAllConnectionsOfCompositionOnline() {
    return __awaiter(this, arguments, void 0, function* (composition_ids = []) {
        var connectionList = [];
        try {
            var header = (0,_Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_5__.GetRequestHeader)();
            const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.GetAllConnectionsOfCompositionBulkUrl(), {
                method: 'POST',
                headers: header,
                body: JSON.stringify(composition_ids)
            });
            if (response.ok) {
                const result = yield response.json();
                for (var i = 0; i < result.length; i++) {
                    _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_0__.ConnectionData.AddConnection(result[i]);
                    connectionList.push(result[i]);
                }
            }
            else {
                console.log('Get all connections of composition bulk error message: ', "Cannot get response");
                (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_6__.HandleHttpError)(response);
            }
            return connectionList;
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('Get all connections of composition bulk error message: ', error.message);
            }
            else {
                console.log('Get all connections of composition bulk unexpected error: ', error);
            }
            (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_6__.HandleInternalError)(error, _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.GetAllConnectionsOfCompositionBulkUrl());
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
/* harmony import */ var _Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Services/Common/ErrorPosting */ "./src/Services/Common/ErrorPosting.ts");
/* harmony import */ var _Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/Security/GetRequestHeader */ "./src/Services/Security/GetRequestHeader.ts");
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



function GetAllLinkerConnectionsFromTheConcept(conceptId) {
    return __awaiter(this, void 0, void 0, function* () {
        var connections = [];
        try {
            const start = new Date().getTime();
            var header = (0,_Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_1__.GetRequestHeader)('application/x-www-form-urlencoded');
            const response = yield fetch(_app__WEBPACK_IMPORTED_MODULE_2__.BaseUrl.GetAllLinkerConnectionOfConceptUrl() + `?conceptId=${conceptId}`, {
                method: 'GET',
                headers: header,
            });
            if (response.ok) {
                const result = yield response.json();
                for (var i = 0; i < result.length; i++) {
                    var connection = result[i];
                    connections.push(connection);
                }
            }
            else {
                console.log("Get all linker connection from the concepts error", "cannot get respone");
                (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_0__.HandleHttpError)(response);
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('Get all linker connection from the concepts error: ', error.message);
            }
            else {
                console.log('Get all linker connection from the concepts error(Unexpected): ', error);
            }
            (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_0__.HandleInternalError)(error, _app__WEBPACK_IMPORTED_MODULE_2__.BaseUrl.GetAllLinkerConnectionOfConceptUrl());
        }
        return connections;
    });
}


/***/ }),

/***/ "./src/Api/GetAllLinkerConnectionsToTheConcept.ts":
/*!********************************************************!*\
  !*** ./src/Api/GetAllLinkerConnectionsToTheConcept.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetAllLinkerConnectionsToTheConcept: () => (/* binding */ GetAllLinkerConnectionsToTheConcept)
/* harmony export */ });
/* harmony import */ var _Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Services/Common/ErrorPosting */ "./src/Services/Common/ErrorPosting.ts");
/* harmony import */ var _Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/Security/GetRequestHeader */ "./src/Services/Security/GetRequestHeader.ts");
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



function GetAllLinkerConnectionsToTheConcept(conceptId) {
    return __awaiter(this, void 0, void 0, function* () {
        var connections = [];
        try {
            const start = new Date().getTime();
            var header = (0,_Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_1__.GetRequestHeader)('application/x-www-form-urlencoded');
            const response = yield fetch(_app__WEBPACK_IMPORTED_MODULE_2__.BaseUrl.GetAllLinkerConnectionToConceptUrl() + `?conceptId=${conceptId}`, {
                method: 'GET',
                headers: header,
            });
            if (response.ok) {
                const result = yield response.json();
                for (var i = 0; i < result.length; i++) {
                    var connection = result[i];
                    connections.push(connection);
                }
            }
            else {
                console.log("Get all linker connection To the concepts error", "cannot get respone");
                (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_0__.HandleHttpError)(response);
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('Get all linker connection To the concepts error: ', error.message);
            }
            else {
                console.log('Get all linker connection To the concepts error(Unexpected): ', error);
            }
            (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_0__.HandleInternalError)(error, _app__WEBPACK_IMPORTED_MODULE_2__.BaseUrl.GetAllLinkerConnectionToConceptUrl());
        }
        return connections;
    });
}


/***/ }),

/***/ "./src/Api/GetCompositionConnectionsBetweenTwoConcepts.ts":
/*!****************************************************************!*\
  !*** ./src/Api/GetCompositionConnectionsBetweenTwoConcepts.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetCompositionConnectionsBetweenTwoConcepts: () => (/* binding */ GetCompositionConnectionsBetweenTwoConcepts)
/* harmony export */ });
/* harmony import */ var _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DataStructures/ConnectionData */ "./src/DataStructures/ConnectionData.ts");
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
/* harmony import */ var _Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/Common/ErrorPosting */ "./src/Services/Common/ErrorPosting.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function GetCompositionConnectionsBetweenTwoConcepts(ofConceptId, toConcept, mainKey) {
    return __awaiter(this, void 0, void 0, function* () {
        var connectionList = [];
        try {
            var formdata = new FormData();
            formdata.append("ofConceptId", ofConceptId.toString());
            formdata.append("mainKey", mainKey.toString());
            formdata.append("toConceptId", toConcept.toString());
            const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.GetCompositionConnectionBetweenTwoConceptsUrl(), {
                method: 'POST',
                body: formdata,
                redirect: "follow"
            });
            if (response.ok) {
                const result = yield response.json();
                for (var i = 0; i < result.length; i++) {
                    _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_0__.ConnectionData.AddConnection(result[i]);
                    connectionList.push(result[i]);
                }
            }
            else {
                console.log("Get composition connection between two concepts", response.status);
                (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_2__.HandleHttpError)(response);
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('Get composition connection between two concepts error message: ', error.message);
            }
            else {
                console.log('Get composition connection between two concepts unexpected error: ', error);
            }
            (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_2__.HandleInternalError)(error, _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.GetCompositionConnectionBetweenTwoConceptsUrl());
        }
        return connectionList;
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
/* harmony import */ var _Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/Security/GetRequestHeader */ "./src/Services/Security/GetRequestHeader.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app */ "./src/app.ts");
/* harmony import */ var _Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/Common/ErrorPosting */ "./src/Services/Common/ErrorPosting.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





/**
 * This function helps you get concept from the id. This can only be positive.
 * @param id The id that you want to get the concept of
 * @returns
 */
function GetConcept(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (_app__WEBPACK_IMPORTED_MODULE_3__.serviceWorker) {
                const res = yield (0,_app__WEBPACK_IMPORTED_MODULE_3__.sendMessage)('GetConcept', { id });
                console.log('data received from sw', res);
                return res.data;
            }
            let result = (0,_app__WEBPACK_IMPORTED_MODULE_3__.CreateDefaultConcept)();
            var conceptUse = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_0__.ConceptsData.GetConcept(id);
            let isNpc = _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_0__.ConceptsData.GetNpc(id);
            if (conceptUse.id != 0 || isNpc) {
                return conceptUse;
            }
            else {
                var header = (0,_Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_2__.GetRequestHeader)();
                console.log("this is the url", _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.GetConceptUrl());
                const formdata = new FormData();
                formdata.append("id", id.toString());
                const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.GetConceptUrl(), {
                    method: 'POST',
                    body: formdata
                });
                if (response.ok) {
                    result = (yield response.json());
                    if (result.id > 0) {
                        _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_0__.ConceptsData.AddConcept(result);
                    }
                    else {
                        _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_0__.ConceptsData.AddNpc(id);
                    }
                }
                else {
                    console.log("Get the concept error", response.status);
                    (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_4__.HandleHttpError)(response);
                }
                return result;
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('Get the concept error message: ', error.message);
            }
            else {
                console.log('Get the concept unexpected error: ', error);
            }
            (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_4__.HandleInternalError)(error, _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.GetConceptUrl());
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
/* harmony export */   BulkConceptGetterApi: () => (/* binding */ BulkConceptGetterApi),
/* harmony export */   GetConceptBulk: () => (/* binding */ GetConceptBulk)
/* harmony export */ });
/* harmony import */ var _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../DataStructures/ConceptData */ "./src/DataStructures/ConceptData.ts");
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
/* harmony import */ var _Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/Security/GetRequestHeader */ "./src/Services/Security/GetRequestHeader.ts");
/* harmony import */ var _Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/Common/ErrorPosting */ "./src/Services/Common/ErrorPosting.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




/**
 * This function takes in a list of ids and returns a list of concepts . This uses local memory to find concepts
 * namely in the concept binary tree. If it could not find the concepts in local memory then it fetches those from
 * the api. The fetched concepts from api are then stored in the memory for further use in future.
 * @param conceptIds list of concept ids that need to be fetched
 * @returns list of concepts
 */
function GetConceptBulk(passedConcepts) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = [];
        let setTime = new Date().getTime();
        // let conceptIds = passedConcepts.filter((value, index, self) => {
        //   return self.indexOf(value) === index;
        // });
        let conceptIds = Array.from(new Set(passedConcepts));
        try {
            if (conceptIds.length > 0) {
                let bulkConceptFetch = [];
                for (let i = 0; i < conceptIds.length; i++) {
                    let conceptUse = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_0__.ConceptsData.GetConcept(conceptIds[i]);
                    if (conceptUse.id == 0) {
                        bulkConceptFetch.push(conceptIds[i]);
                    }
                }
                // let newAlgoTime = new Date().getTime();
                //let remainingIds:any = {};
                // for(let i=0; i< conceptIds.length; i++){
                //     remainingIds[conceptIds[i]] = false;
                // }
                //await ConceptsData.GetConceptBulkData(conceptIds, result, remainingIds );
                // for(let key in remainingIds){
                //     if(remainingIds[key] == false){
                //       bulkConceptFetch.push(Number(key));
                //     }
                // }
                //bulkConceptFetch = conceptIds;
                if (bulkConceptFetch.length == 0) {
                    return result;
                }
                else {
                    let header = (0,_Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_2__.GetRequestHeader)();
                    const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.GetConceptBulkUrl(), {
                        method: 'POST',
                        headers: header,
                        body: JSON.stringify(bulkConceptFetch)
                    });
                    if (response.ok) {
                        result = yield response.json();
                        console.log("got all the concepts", result);
                        if (result.length > 0) {
                            for (let i = 0; i < result.length; i++) {
                                let concept = result[i];
                                _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_0__.ConceptsData.AddConcept(concept);
                            }
                        }
                        console.log("added the concepts");
                    }
                    else {
                        console.log("Get Concept Bulk error", response.status);
                        (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_3__.HandleHttpError)(response);
                    }
                }
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('Get Concept Bulk  error message: ', error.message);
            }
            else {
                console.log('Get Concept Bulk  unexpected error: ', error);
            }
            (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_3__.HandleInternalError)(error, _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.GetConceptBulkUrl());
        }
        return result;
    });
}
function BulkConceptGetterApi(bulkConceptFetch) {
    return __awaiter(this, void 0, void 0, function* () {
        const conceptList = [];
        if (bulkConceptFetch.length > 0) {
            const myHeaders = {
                'Content-Type': 'application/json',
            };
            try {
                const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.GetConceptBulkUrl(), {
                    method: 'POST',
                    headers: myHeaders,
                    body: JSON.stringify(bulkConceptFetch),
                });
                if (response.ok) {
                    const result = yield response.json();
                    if (result.length > 0) {
                        for (let i = 0; i < result.length; i++) {
                            const concept = result[i];
                            conceptList.push(concept);
                            _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_0__.ConceptsData.AddConcept(concept);
                        }
                    }
                }
                else {
                    console.log('bulk concept getter api error: ', response.status);
                    (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_3__.HandleHttpError)(response);
                }
            }
            catch (error) {
                if (error instanceof Error) {
                    console.log('bulk concept getter api error: ', error.message);
                }
                else {
                    console.log('bulk concept getter api error: ', error);
                }
                (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_3__.HandleInternalError)(error, _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.GetConceptBulkUrl());
            }
        }
        return conceptList;
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
/* harmony import */ var _Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/Security/GetRequestHeader */ "./src/Services/Security/GetRequestHeader.ts");
/* harmony import */ var _Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/Common/ErrorPosting */ "./src/Services/Common/ErrorPosting.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app */ "./src/app.ts");
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
            if (_app__WEBPACK_IMPORTED_MODULE_4__.serviceWorker) {
                const res = yield (0,_app__WEBPACK_IMPORTED_MODULE_4__.sendMessage)('GetConceptByCharacterAndType', { characterValue, typeId });
                console.log('data received from sw', res);
                return res.data;
            }
            let concept = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_0__.ConceptsData.GetConceptByCharacterAndTypeLocal(characterValue, typeId);
            if (concept == null || concept.id == 0) {
                var json = {
                    'character_value': `${characterValue}`,
                    'type_id': typeId
                };
                var toSendJson = JSON.stringify(json);
                var header = (0,_Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_2__.GetRequestHeader)();
                const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.GetConceptByCharacterAndTypeUrl(), {
                    method: 'POST',
                    headers: header,
                    body: toSendJson,
                });
                if (response.ok) {
                    let conceptString = yield response.json();
                    concept = conceptString;
                    _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_0__.ConceptsData.AddConcept(concept);
                }
                else {
                    //  throw new Error(`Error! status: ${response.status}`);
                    (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_3__.HandleHttpError)(response);
                    console.log("This is the concept by type and character error", response.status);
                }
            }
            return concept;
        }
        catch (error) {
            if (error instanceof Error) {
                console.log(' This is the concept by type and character error message: ', error.message);
            }
            else {
                console.log(' This is the concept by type and character unexpected error: ', error);
            }
            (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_3__.HandleInternalError)(error, _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.GetConceptByCharacterAndTypeUrl());
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
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app */ "./src/app.ts");
/* harmony import */ var _Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/Common/ErrorPosting */ "./src/Services/Common/ErrorPosting.ts");
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
        let result = (0,_app__WEBPACK_IMPORTED_MODULE_2__.CreateDefaultConcept)();
        try {
            const formdata = new FormData();
            formdata.append("character_value", characterValue);
            const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.GetConceptByCharacterValueUrl(), {
                method: 'POST',
                body: formdata
            });
            if (response.ok) {
                result = (yield response.json());
                if (result.id > 0) {
                    _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_0__.ConceptsData.AddConcept(result);
                }
            }
            else {
                (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_3__.HandleHttpError)(response);
                console.log("Error in Getting concept by character value Error", response.status);
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('Error in Getting concept by character value error message: ', error);
            }
            else {
                console.log('Error in Getting concept by character value unexpected error: ', error);
            }
            (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_3__.HandleInternalError)(error, _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.GetConceptByCharacterValueUrl());
        }
        return result;
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
/* harmony import */ var _Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/Security/GetRequestHeader */ "./src/Services/Security/GetRequestHeader.ts");
/* harmony import */ var _Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/Common/ErrorPosting */ "./src/Services/Common/ErrorPosting.ts");
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
        let result = yield _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_1__.ConnectionData.GetConnection(id);
        try {
            if (result.id != 0) {
                return result;
            }
            else {
                let header = (0,_Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_2__.GetRequestHeader)('application/x-www-form-urlencoded');
                const formdata = new FormData();
                formdata.append("id", id.toString());
                const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.GetConnectionUrl(), {
                    method: 'POST',
                    headers: header,
                    body: formdata
                });
                if (response.ok) {
                    result = (yield response.json());
                    _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_1__.ConnectionData.AddConnection(result);
                }
                else {
                    (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_3__.HandleHttpError)(response);
                    console.log("Get Connection Error", response.status);
                }
                return result;
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('Get Connection error message: ', error.message);
            }
            else {
                console.log('Get Connection unexpected error: ', error);
            }
            (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_3__.HandleInternalError)(error, _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.GetConnectionUrl());
        }
    });
}


/***/ }),

/***/ "./src/Api/GetConnectionBulk.ts":
/*!**************************************!*\
  !*** ./src/Api/GetConnectionBulk.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetConnectionBulk: () => (/* binding */ GetConnectionBulk)
/* harmony export */ });
/* harmony import */ var _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../DataStructures/ConnectionData */ "./src/DataStructures/ConnectionData.ts");
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
/* harmony import */ var _Services_FindConeceptsFromConnection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/FindConeceptsFromConnection */ "./src/Services/FindConeceptsFromConnection.ts");
/* harmony import */ var _Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/Security/GetRequestHeader */ "./src/Services/Security/GetRequestHeader.ts");
/* harmony import */ var _Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/Common/ErrorPosting */ "./src/Services/Common/ErrorPosting.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app */ "./src/app.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






/**
 * After fetching these connections it is saved in the local static ConnectionBinaryTree so it can be reused without being fetched
 * @param connectionIds array of connection ids that need to fetched by the local system
 * @returns the list of  connections that have been fetched
 */
function GetConnectionBulk() {
    return __awaiter(this, arguments, void 0, function* (connectionIds = []) {
        if (_app__WEBPACK_IMPORTED_MODULE_5__.serviceWorker) {
            const res = yield (0,_app__WEBPACK_IMPORTED_MODULE_5__.sendMessage)('GetConnectionBulk', { connectionIds });
            console.log('data received from sw', res);
            return res.data;
        }
        let connectionList = [];
        try {
            if (connectionIds.length > 0) {
                let bulkConnectionFetch = [];
                // if the connections are already present in the local memory then take it from there 
                //else put it in a list called bulkConnectionFetch which will be used to call and api.
                for (let i = 0; i < connectionIds.length; i++) {
                    let conceptUse = yield _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_0__.ConnectionData.GetConnection(connectionIds[i]);
                    if (conceptUse.id == 0) {
                        bulkConnectionFetch.push(connectionIds[i]);
                    }
                    else {
                        connectionList.push(conceptUse);
                    }
                }
                // let remainingIds:any = {};
                // await ConnectionData.GetConnectionBulkData(connectionIds, connectionList, remainingIds );
                //bulkConnectionFetch = connectionIds;
                // if the case that bulkConnectionFetch does not have any elements then we just return everything we have
                if (bulkConnectionFetch.length == 0) {
                    return connectionList;
                }
                else {
                    // if the connection could not be found in the local memory then fetch from the api.
                    let header = (0,_Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_3__.GetRequestHeader)();
                    const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.GetConnectionBulkUrl(), {
                        method: 'POST',
                        headers: header,
                        body: JSON.stringify(bulkConnectionFetch)
                    });
                    if (response.ok) {
                        const result = yield response.json();
                        if (result.length > 0) {
                            for (let i = 0; i < result.length; i++) {
                                let connection = result[i];
                                connectionList.push(connection);
                                _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_0__.ConnectionData.AddConnection(connection);
                            }
                        }
                    }
                    else {
                        (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_4__.HandleHttpError)(response);
                        console.log("Get Connection Bulk error", response.status);
                    }
                }
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('Get Connection Bulk error message: ', error);
            }
            else {
                console.log('Get Connection Bulk unexpected error: ', error);
            }
            (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_4__.HandleInternalError)(error, _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.GetConnectionBulkUrl());
        }
        yield (0,_Services_FindConeceptsFromConnection__WEBPACK_IMPORTED_MODULE_2__.FindConceptsFromConnections)(connectionList);
        return connectionList;
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
/* harmony import */ var _Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/Security/GetRequestHeader */ "./src/Services/Security/GetRequestHeader.ts");
/* harmony import */ var _Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/Common/ErrorPosting */ "./src/Services/Common/ErrorPosting.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app */ "./src/app.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




function GetConnectionOfTheConcept(typeId_1, ofTheConceptId_1, userId_1) {
    return __awaiter(this, arguments, void 0, function* (typeId, ofTheConceptId, userId, inpage = 10, page = 1) {
        if (_app__WEBPACK_IMPORTED_MODULE_3__.serviceWorker) {
            const res = yield (0,_app__WEBPACK_IMPORTED_MODULE_3__.sendMessage)('GetConnectionOfTheConcept', { typeId, ofTheConceptId, userId, inpage, page });
            console.log('data received from sw', res);
            return res.data;
        }
        let connectionList = [];
        try {
            let urlencoded = new URLSearchParams();
            urlencoded.append("typeId", `${typeId}`);
            urlencoded.append("ofTheConceptId", `${ofTheConceptId}`);
            urlencoded.append("userId", `${userId}`);
            urlencoded.append("inpage", `${inpage}`);
            urlencoded.append("page", `${page}`);
            let header = (0,_Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_1__.GetRequestHeader)('application/x-www-form-urlencoded');
            const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.GetAllConnectionsOfConceptUrl(), {
                method: 'POST',
                headers: header,
                body: urlencoded
            });
            if (response.ok) {
                connectionList = (yield response.json());
            }
            else {
                (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_2__.HandleHttpError)(response);
                console.log("Get connection of concept error", response.status);
            }
            return connectionList;
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('Get connection of concept  error message: ', error.message);
            }
            else {
                console.log('Get connection of concept unexpected error: ', error);
            }
            (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_2__.HandleInternalError)(error, _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.GetAllConnectionsOfConceptUrl());
        }
    });
}


/***/ }),

/***/ "./src/Api/GetReservedConnectionIds.ts":
/*!*********************************************!*\
  !*** ./src/Api/GetReservedConnectionIds.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetReservedConnectionIds: () => (/* binding */ GetReservedConnectionIds)
/* harmony export */ });
/* harmony import */ var _DataStructures_ReservedIds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DataStructures/ReservedIds */ "./src/DataStructures/ReservedIds.ts");
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
/* harmony import */ var _Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/Security/GetRequestHeader */ "./src/Services/Security/GetRequestHeader.ts");
/* harmony import */ var _Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/Common/ErrorPosting */ "./src/Services/Common/ErrorPosting.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




function GetReservedConnectionIds() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let header = (0,_Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_2__.GetRequestHeader)('application/x-www-form-urlencoded');
            const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.GetReservedConnectionIdUrl(), {
                method: 'GET',
                headers: header,
            });
            if (!response.ok) {
                (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_3__.HandleHttpError)(response);
                throw new Error(`Error! status: ${response.status}`);
            }
            const result = yield response.json();
            for (let i = 0; i < result.length; i++) {
                _DataStructures_ReservedIds__WEBPACK_IMPORTED_MODULE_0__.ReservedConnectionIds.AddId(result[i]);
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('get reserved connection ids error message: ', error.message);
            }
            else {
                console.log('get reserved connection ids  unexpected error: ', error);
            }
            (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_3__.HandleInternalError)(error, _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.GetReservedConnectionIdUrl());
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
/* harmony import */ var _Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/Security/GetRequestHeader */ "./src/Services/Security/GetRequestHeader.ts");
/* harmony import */ var _Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/Common/ErrorPosting */ "./src/Services/Common/ErrorPosting.ts");
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
            let header = (0,_Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_2__.GetRequestHeader)('application/x-www-form-urlencoded');
            const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.GetReservedIdUrl(), {
                method: 'GET',
                headers: header,
            });
            if (!response.ok) {
                (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_3__.HandleHttpError)(response);
                throw new Error(`Error! status: ${response.status}`);
            }
            const result = yield response.json();
            for (let i = 0; i < result.length; i++) {
                _DataStructures_ReservedIds__WEBPACK_IMPORTED_MODULE_0__.ReservedIds.AddId(result[i]);
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('get reserved ids error message: ', error.message);
            }
            else {
                console.log('get reserved ids  unexpected error: ', error);
            }
            (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_3__.HandleInternalError)(error, _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.GetReservedIdUrl());
        }
    });
}


/***/ }),

/***/ "./src/Api/Local/GetLocalConceptByCharacterValue.ts":
/*!**********************************************************!*\
  !*** ./src/Api/Local/GetLocalConceptByCharacterValue.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetLocalConceptByCharacterValue: () => (/* binding */ GetLocalConceptByCharacterValue)
/* harmony export */ });
/* harmony import */ var _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../DataStructures/Local/LocalConceptData */ "./src/DataStructures/Local/LocalConceptData.ts");
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
/* harmony import */ var _Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/Security/GetRequestHeader */ "./src/Services/Security/GetRequestHeader.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app */ "./src/app.ts");
/* harmony import */ var _Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/Common/ErrorPosting */ "./src/Services/Common/ErrorPosting.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





function GetLocalConceptByCharacterValue(characterValue) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = (0,_app__WEBPACK_IMPORTED_MODULE_3__.CreateDefaultLConcept)();
        try {
            var header = (0,_Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_2__.GetRequestHeader)('application/x-www-form-urlencoded');
            const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.GetConceptByCharacterValueUrl(), {
                method: 'POST',
                headers: header,
                body: `character_value=${characterValue}`
            });
            if (response.ok) {
                result = (yield response.json());
                if (result.id > 0) {
                    _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_0__.LocalConceptsData.AddConcept(result);
                }
            }
            else {
                console.log("Error in Getting Local concept by character value Error", response.status);
                (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_4__.HandleHttpError)(response);
            }
            return result;
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('Error in Getting Local concept by character value error message: ', error);
            }
            else {
                console.log('Error in Getting Local concept by character value unexpected error: ', error);
            }
            throw result;
        }
    });
}


/***/ }),

/***/ "./src/Api/Login.ts":
/*!**************************!*\
  !*** ./src/Api/Login.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginToBackend: () => (/* binding */ LoginToBackend)
/* harmony export */ });
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
/* harmony import */ var _DataStructures_Security_TokenStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataStructures/Security/TokenStorage */ "./src/DataStructures/Security/TokenStorage.ts");
/* harmony import */ var _Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/Common/ErrorPosting */ "./src/Services/Common/ErrorPosting.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function LoginToBackend(email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let object = {
                'email': email,
                'password': password
            };
            let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            let requestObject = JSON.stringify(object);
            const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.LoginUrl(), {
                method: 'POST',
                headers: myHeaders,
                body: requestObject
            });
            if (response.ok) {
                const result = yield response.json();
                console.log(result.data);
                _DataStructures_Security_TokenStorage__WEBPACK_IMPORTED_MODULE_1__.TokenStorage.BearerAccessToken = result.data.token;
                console.log("this is the token", _DataStructures_Security_TokenStorage__WEBPACK_IMPORTED_MODULE_1__.TokenStorage.BearerAccessToken);
                return result;
            }
            else {
                console.log('Login tsccs error message: ', response.status);
                (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_2__.HandleHttpError)(response);
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('Login tsccs error message: ', error.message);
            }
            else {
                console.log(' Login tsccs  unexpected error: ', error);
            }
            (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_2__.HandleInternalError)(error, _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.LoginUrl());
        }
    });
}


/***/ }),

/***/ "./src/Api/MakeTheNameInBackend.ts":
/*!*****************************************!*\
  !*** ./src/Api/MakeTheNameInBackend.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MakeTheNameInBackend: () => (/* binding */ MakeTheNameInBackend)
/* harmony export */ });
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
/* harmony import */ var _Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/Common/ErrorPosting */ "./src/Services/Common/ErrorPosting.ts");
/* harmony import */ var _Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/Security/GetRequestHeader */ "./src/Services/Security/GetRequestHeader.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function MakeTheNameInBackend(newConceptId, referent, typeId, typeUserId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let object = {
                'newConceptId': newConceptId,
                'referent': referent,
                'typeId': typeId,
                'typeUserId': typeUserId
            };
            let myHeaders = (0,_Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_2__.GetRequestHeader)();
            let requestObject = JSON.stringify(object);
            const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.MakeTheNameInBackendUrl(), {
                method: 'POST',
                headers: myHeaders,
                body: requestObject
            });
            if (!response.ok) {
                (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_1__.HandleHttpError)(response);
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('make the name in backend error message: ', error.message);
            }
            else {
                console.log('make the name in backend unexpected error: ', error);
            }
            (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_1__.HandleInternalError)(error, _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.MakeTheNameInBackendUrl());
        }
    });
}


/***/ }),

/***/ "./src/Api/MakeTheTypeConceptApi.ts":
/*!******************************************!*\
  !*** ./src/Api/MakeTheTypeConceptApi.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MakeTheTypeConceptApi: () => (/* binding */ MakeTheTypeConceptApi)
/* harmony export */ });
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
/* harmony import */ var _Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/Security/GetRequestHeader */ "./src/Services/Security/GetRequestHeader.ts");
/* harmony import */ var _Services_CreateDefaultConcept__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/CreateDefaultConcept */ "./src/Services/CreateDefaultConcept.ts");
/* harmony import */ var _Services_ConceptFinding_GetConceptByCharacterAndCategory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/ConceptFinding/GetConceptByCharacterAndCategory */ "./src/Services/ConceptFinding/GetConceptByCharacterAndCategory.ts");
/* harmony import */ var _Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/Common/ErrorPosting */ "./src/Services/Common/ErrorPosting.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





/**
 *  This function is used to check the type concpet of a passed string
 *  if the text is "the_person" then the function finds the related concept
 * @param type This is the type of the concept that needs to be created.
 * @param userId This is the userId of the creator.
 * @returns the concept created.
 */
function MakeTheTypeConceptApi(type, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        // create  a default concept with all defaulting to zero
        let concept = (0,_Services_CreateDefaultConcept__WEBPACK_IMPORTED_MODULE_2__.CreateDefaultConcept)();
        try {
            // get the concept by character and category from the api
            concept = yield (0,_Services_ConceptFinding_GetConceptByCharacterAndCategory__WEBPACK_IMPORTED_MODULE_3__.GetConceptByCharacterAndCategory)(type);
            if (concept.id == 0 || concept.typeId == 4) {
                let header = (0,_Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_1__.GetRequestHeader)('application/x-www-form-urlencoded');
                const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.MakeTheTypeConceptUrl(), {
                    method: 'POST',
                    headers: header,
                    body: `type=${type}`
                });
                if (!response.ok) {
                    (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_4__.HandleHttpError)(response);
                    throw new Error(`Error! status: ${response.status}`);
                }
                let result = yield response.json();
                concept = result;
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('Make The Type Concept Api error : ', error.message);
            }
            else {
                console.log('Make The Type Concept Api error : ', error);
            }
            (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_4__.HandleInternalError)(error, _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.MakeTheTypeConceptUrl());
        }
        return concept;
    });
}


/***/ }),

/***/ "./src/Api/RecursiveSearch.ts":
/*!************************************!*\
  !*** ./src/Api/RecursiveSearch.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecursiveSearchApi: () => (/* binding */ RecursiveSearchApi),
/* harmony export */   RecursiveSearchApiNewRawFullLinker: () => (/* binding */ RecursiveSearchApiNewRawFullLinker),
/* harmony export */   RecursiveSearchApiRaw: () => (/* binding */ RecursiveSearchApiRaw),
/* harmony export */   RecursiveSearchApiRawFullLinker: () => (/* binding */ RecursiveSearchApiRawFullLinker),
/* harmony export */   RecursiveSearchLocal: () => (/* binding */ RecursiveSearchLocal)
/* harmony export */ });
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
/* harmony import */ var _DataStructures_SearchQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataStructures/SearchQuery */ "./src/DataStructures/SearchQuery.ts");
/* harmony import */ var _Services_GetCompositionBulk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/GetCompositionBulk */ "./src/Services/GetCompositionBulk.ts");
/* harmony import */ var _Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/Security/GetRequestHeader */ "./src/Services/Security/GetRequestHeader.ts");
/* harmony import */ var _Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/Common/ErrorPosting */ "./src/Services/Common/ErrorPosting.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app */ "./src/app.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






function RecursiveSearchApi() {
    return __awaiter(this, arguments, void 0, function* (composition = 0, listLinkers = [], textSearch = "") {
        let concepts = [];
        try {
            let searchQuery = new _DataStructures_SearchQuery__WEBPACK_IMPORTED_MODULE_1__.SearchQuery();
            searchQuery.composition = composition;
            searchQuery.listLinkers = listLinkers;
            searchQuery.textSearch = textSearch;
            let raw = JSON.stringify(searchQuery);
            let Connections = [];
            let myHeaders = (0,_Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_3__.GetRequestHeader)();
            const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.RecursiveSearchUrl(), {
                method: 'POST',
                headers: myHeaders,
                body: raw
            });
            if (response.ok) {
                const result = yield response.json();
                let conceptIds = result.compositionIds;
                let connections = result.internalConnections;
                let externalConnections = result.externalConnections;
                concepts = yield (0,_Services_GetCompositionBulk__WEBPACK_IMPORTED_MODULE_2__.GetCompositionFromConnectionsWithDataId)(conceptIds, connections);
            }
            else {
                console.log("recursive search error ", response.status);
                (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_4__.HandleHttpError)(response);
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('recursive search error message: ', error.message);
            }
            else {
                console.log('recursive search unexpected error: ', error);
            }
            (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_4__.HandleInternalError)(error, _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.RecursiveSearchUrl());
        }
        return concepts;
    });
}
function RecursiveSearchApiRaw() {
    return __awaiter(this, arguments, void 0, function* (composition = 0, listLinkers = [], textSearch = "") {
        if (_app__WEBPACK_IMPORTED_MODULE_5__.serviceWorker) {
            const res = yield (0,_app__WEBPACK_IMPORTED_MODULE_5__.sendMessage)('RecursiveSearchApiRaw', { composition, listLinkers, textSearch });
            console.log('data received from sw', res);
            return res.data;
        }
        let concepts = [];
        try {
            let searchQuery = new _DataStructures_SearchQuery__WEBPACK_IMPORTED_MODULE_1__.SearchQuery();
            searchQuery.composition = composition;
            searchQuery.listLinkers = listLinkers;
            searchQuery.textSearch = textSearch;
            let raw = JSON.stringify(searchQuery);
            let Connections = [];
            let myHeaders = (0,_Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_3__.GetRequestHeader)();
            const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.RecursiveSearchUrl(), {
                method: "POST",
                headers: myHeaders,
                body: raw,
            });
            if (response.ok) {
                const result = yield response.json();
                let conceptIds = result.compositionIds;
                let connections = result.internalConnections;
                let externalConnections = result.externalConnections;
                return result;
            }
            else {
                console.log("recursive search error ", response.status);
                (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_4__.HandleHttpError)(response);
            }
            return [];
        }
        catch (error) {
            if (error instanceof Error) {
                console.log("recursive search error message: ", error.message);
            }
            else {
                console.log("recursive search unexpected error: ", error);
            }
            (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_4__.HandleInternalError)(error, _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.RecursiveSearchUrl());
        }
    });
}
function RecursiveSearchApiRawFullLinker() {
    return __awaiter(this, arguments, void 0, function* (composition = 0, fullLinkers = [], textSearch = "") {
        let concepts = [];
        try {
            let searchQuery = new _DataStructures_SearchQuery__WEBPACK_IMPORTED_MODULE_1__.SearchQuery();
            searchQuery.composition = composition;
            searchQuery.fullLinkers = fullLinkers;
            searchQuery.textSearch = textSearch;
            let raw = JSON.stringify(searchQuery);
            let Connections = [];
            let myHeaders = (0,_Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_3__.GetRequestHeader)();
            const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.RecursiveSearchUrl(), {
                method: 'POST',
                headers: myHeaders,
                body: raw
            });
            if (response.ok) {
                const result = yield response.json();
                let conceptIds = result.compositionIds;
                let connections = result.internalConnections;
                let externalConnections = result.externalConnections;
                return result;
            }
            else {
                console.log("recursive search error ", response.status);
                (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_4__.HandleHttpError)(response);
            }
            return [];
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('recursive search error message: ', error.message);
            }
            else {
                console.log('recursive search unexpected error: ', error);
            }
            (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_4__.HandleInternalError)(error, _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.RecursiveSearchUrl());
        }
    });
}
function RecursiveSearchApiNewRawFullLinker() {
    return __awaiter(this, arguments, void 0, function* (composition = 0, fullLinkers = [], textSearch = "") {
        let concepts = [];
        try {
            let searchQuery = new _DataStructures_SearchQuery__WEBPACK_IMPORTED_MODULE_1__.SearchQuery();
            searchQuery.composition = composition;
            searchQuery.fullLinkers = fullLinkers;
            searchQuery.textSearch = textSearch;
            let raw = JSON.stringify(searchQuery);
            let Connections = [];
            let myHeaders = (0,_Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_3__.GetRequestHeader)();
            const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.RecursiveSearchUrl(), {
                method: 'POST',
                headers: myHeaders,
                body: raw
            });
            if (response.ok) {
                const result = yield response.json();
                let conceptIds = result.compositionIds;
                let connections = result.internalConnections;
                let externalConnections = result.externalConnections;
                return result;
            }
            else {
                console.log("recursive search error ", response.status);
                (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_4__.HandleHttpError)(response);
            }
            return [];
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('recursive search error message: ', error.message);
            }
            else {
                console.log('recursive search unexpected error: ', error);
            }
            (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_4__.HandleInternalError)(error, _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.RecursiveSearchUrl());
        }
    });
}
function RecursiveSearchLocal(composition_1) {
    return __awaiter(this, arguments, void 0, function* (composition, listLinkers = [], textSearch = "") {
    });
}


/***/ }),

/***/ "./src/Api/SearchConcept/GetConceptByCharacterAndCategoryDirect.ts":
/*!*************************************************************************!*\
  !*** ./src/Api/SearchConcept/GetConceptByCharacterAndCategoryDirect.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetConceptByCharacterAndCategoryDirectApi: () => (/* binding */ GetConceptByCharacterAndCategoryDirectApi)
/* harmony export */ });
/* harmony import */ var _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../DataStructures/ConceptData */ "./src/DataStructures/ConceptData.ts");
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
/* harmony import */ var _Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/Security/GetRequestHeader */ "./src/Services/Security/GetRequestHeader.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app */ "./src/app.ts");
/* harmony import */ var _Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/Common/ErrorPosting */ "./src/Services/Common/ErrorPosting.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





function GetConceptByCharacterAndCategoryDirectApi(characterValue, category_id) {
    return __awaiter(this, void 0, void 0, function* () {
        let concept = (0,_app__WEBPACK_IMPORTED_MODULE_3__.CreateDefaultConcept)();
        try {
            var header = (0,_Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_2__.GetRequestHeader)('application/x-www-form-urlencoded');
            const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.GetConceptByCharacterAndCategoryDirectUrl(), {
                method: 'POST',
                headers: header,
                body: `character_value=${characterValue}&category_id=${category_id}`,
            });
            if (response.ok) {
                let conceptString = yield response.json();
                concept = conceptString;
                _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_0__.ConceptsData.AddConcept(concept);
            }
            else {
                //  throw new Error(`Error! status: ${response.status}`);
                console.log("This is the concept by category and character error", response.status);
                (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_4__.HandleHttpError)(response);
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log(' This is the concept by category and character error message: ', error.message);
            }
            else {
                console.log(' This is the concept by category and character unexpected error: ', error);
            }
            (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_4__.HandleInternalError)(error, _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.GetConceptByCharacterAndCategoryDirectUrl());
        }
        return concept;
    });
}


/***/ }),

/***/ "./src/Api/Search/Search.ts":
/*!**********************************!*\
  !*** ./src/Api/Search/Search.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchAllConcepts: () => (/* binding */ SearchAllConcepts)
/* harmony export */ });
/* harmony import */ var _Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Services/Security/GetRequestHeader */ "./src/Services/Security/GetRequestHeader.ts");
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
/* harmony import */ var _Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/Common/ErrorPosting */ "./src/Services/Common/ErrorPosting.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function SearchAllConcepts(type_1, search_1, composition_1, token_1) {
    return __awaiter(this, arguments, void 0, function* (type, search, composition, token, inpage = 10, page = 1) {
        var header = (0,_Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_0__.GetRequestHeaderWithAuthorization)('application/x-www-form-urlencoded', token);
        var urlencoded = new URLSearchParams();
        urlencoded.append("type", type);
        urlencoded.append("search", search);
        urlencoded.append("composition", composition);
        urlencoded.append("inpage", inpage.toString());
        urlencoded.append("page", page.toString());
        const queryUrl = _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.SearchCompositionsUrl() + "?" + urlencoded.toString();
        try {
            const response = yield fetch(queryUrl, {
                method: 'GET',
                headers: header
            });
            if (response.ok) {
                let result = yield response.json();
                return result;
            }
            else {
                (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_2__.HandleHttpError)(response);
                return [];
            }
        }
        catch (ex) {
            console.log("This is the searching error", ex);
            (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_2__.HandleInternalError)(ex, queryUrl);
        }
    });
}


/***/ }),

/***/ "./src/Api/Search/SearchInternalApi.ts":
/*!*********************************************!*\
  !*** ./src/Api/Search/SearchInternalApi.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchInternalAllApi: () => (/* binding */ SearchInternalAllApi),
/* harmony export */   SearchInternalApi: () => (/* binding */ SearchInternalApi)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app */ "./src/app.ts");
/* harmony import */ var _Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/Common/ErrorPosting */ "./src/Services/Common/ErrorPosting.ts");
/* harmony import */ var _Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/Security/GetRequestHeader */ "./src/Services/Security/GetRequestHeader.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function SearchInternalApi(search_1) {
    return __awaiter(this, arguments, void 0, function* (search, token = "") {
        var header = (0,_Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_2__.GetRequestHeaderWithAuthorization)("application/json", token);
        let queryUrl = _app__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.SearchInternalWithAuthenticatedCcsUrl();
        queryUrl = queryUrl + '?composition=' + search.composition + '&search=' + search.search + '&internalComposition=' + search.internalComposition + '&type=' + search.type + '&inpage=' + search.inpage + '&page=' + search.page;
        try {
            const response = yield fetch(queryUrl, {
                method: 'GET',
                headers: header
            });
            if (response.ok) {
                let result = yield response.json();
                return result;
            }
            else {
                console.log("This is the searching internal error", response.status);
                (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_1__.HandleHttpError)(response);
                return [];
            }
        }
        catch (ex) {
            console.log("This is the searching internal error", ex);
            (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_1__.HandleInternalError)(ex, queryUrl);
        }
    });
}
function SearchInternalAllApi(search) {
    return __awaiter(this, void 0, void 0, function* () {
        var header = (0,_Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_2__.GetRequestHeaderWithAuthorization)("application/json", "");
        let queryUrl = _app__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.SearchInternalWithCcsUrl();
        queryUrl = queryUrl + '?composition=' + search.composition + '&search=' + search.search + '&internalComposition=' + search.internalComposition + '&type=' + search.type + '&inpage=' + search.inpage + '&page=' + search.page;
        try {
            const response = yield fetch(queryUrl, {
                method: 'GET',
                headers: header
            });
            if (response.ok) {
                let result = yield response.json();
                return result;
            }
            else {
                console.log("This is the searching internal error", response.status);
                (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_1__.HandleHttpError)(response);
                return [];
            }
        }
        catch (ex) {
            console.log("This is the searching internal error", ex);
            (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_1__.HandleInternalError)(ex, queryUrl);
        }
    });
}


/***/ }),

/***/ "./src/Api/Search/SearchLinkMultipleApi.ts":
/*!*************************************************!*\
  !*** ./src/Api/Search/SearchLinkMultipleApi.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchLinkMultipleApi: () => (/* binding */ SearchLinkMultipleApi)
/* harmony export */ });
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
/* harmony import */ var _Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/Common/ErrorPosting */ "./src/Services/Common/ErrorPosting.ts");
/* harmony import */ var _Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/Security/GetRequestHeader */ "./src/Services/Security/GetRequestHeader.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function SearchLinkMultipleApi(searchQuery_1) {
    return __awaiter(this, arguments, void 0, function* (searchQuery, token = "") {
        var header = (0,_Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_2__.GetRequestHeaderWithAuthorization)("application/json", token);
        const queryUrl = _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.SearchLinkMultipleAllApiUrl();
        const body = JSON.stringify(searchQuery);
        try {
            const response = yield fetch(queryUrl, {
                method: 'POST',
                headers: header,
                body: body
            });
            if (response.ok) {
                let result = yield response.json();
                return result;
            }
            else {
                (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_1__.HandleHttpError)(response);
                console.log("This is the searching multiple error", response.status);
                return [];
            }
        }
        catch (ex) {
            console.log("This is the searching multiple error", ex);
            (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_1__.HandleInternalError)(ex, queryUrl);
        }
    });
}


/***/ }),

/***/ "./src/Api/Search/SearchWithLinker.ts":
/*!********************************************!*\
  !*** ./src/Api/Search/SearchWithLinker.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchWithLinker: () => (/* binding */ SearchWithLinker)
/* harmony export */ });
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
/* harmony import */ var _Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/Common/ErrorPosting */ "./src/Services/Common/ErrorPosting.ts");
/* harmony import */ var _Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/Security/GetRequestHeader */ "./src/Services/Security/GetRequestHeader.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function SearchWithLinker(searchQuery_1) {
    return __awaiter(this, arguments, void 0, function* (searchQuery, token = "") {
        var header = (0,_Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_2__.GetRequestHeaderWithAuthorization)("application/json", token);
        const queryUrl = _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.SearchLinkMultipleAll();
        const body = JSON.stringify(searchQuery);
        try {
            const response = yield fetch(queryUrl, {
                method: 'POST',
                headers: header,
                body: body
            });
            if (response.ok) {
                let result = yield response.json();
                return result;
            }
            else {
                console.log("This is the searching error", response.status);
                (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_1__.HandleHttpError)(response);
                return [];
            }
        }
        catch (ex) {
            console.log("This is the searching error", ex);
            (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_1__.HandleInternalError)(ex, queryUrl);
        }
    });
}


/***/ }),

/***/ "./src/Api/Search/SearchWithTypeAndLinker.ts":
/*!***************************************************!*\
  !*** ./src/Api/Search/SearchWithTypeAndLinker.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchWithTypeAndLinkerApi: () => (/* binding */ SearchWithTypeAndLinkerApi)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app */ "./src/app.ts");
/* harmony import */ var _Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/Common/ErrorPosting */ "./src/Services/Common/ErrorPosting.ts");
/* harmony import */ var _Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/Security/GetRequestHeader */ "./src/Services/Security/GetRequestHeader.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function SearchWithTypeAndLinkerApi(searchStructure_1, searchQuery_1) {
    return __awaiter(this, arguments, void 0, function* (searchStructure, searchQuery, token = "") {
        let queryUrl = _app__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.SearchAllTypeWithLinker(searchStructure.auth);
        var header = (0,_Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_2__.GetRequestHeaderWithAuthorization)("application/json", token);
        queryUrl = queryUrl + '?search=' + searchStructure.search + '&type=' + searchStructure.type + '&inpage=' + searchStructure.inpage + '&page=' + searchStructure.page;
        const body = JSON.stringify(searchQuery);
        try {
            const response = yield fetch(queryUrl, {
                method: 'POST',
                headers: header,
                body: body
            });
            if (response.ok) {
                let result = yield response.json();
                return result;
            }
            else {
                (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_1__.HandleHttpError)(response);
                console.log("This is the searching multiple error", response.status);
                return [];
            }
        }
        catch (ex) {
            console.log("This is the searching SearchWithTypeAndLinker error", ex);
            (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_1__.HandleInternalError)(ex, queryUrl);
        }
    });
}


/***/ }),

/***/ "./src/Api/Session/CreateSession.ts":
/*!******************************************!*\
  !*** ./src/Api/Session/CreateSession.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateSession: () => (/* binding */ CreateSession)
/* harmony export */ });
/* harmony import */ var _Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Services/Security/GetRequestHeader */ "./src/Services/Security/GetRequestHeader.ts");
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
/* harmony import */ var _Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/Common/ErrorPosting */ "./src/Services/Common/ErrorPosting.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function CreateSession(sessionData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var header = (0,_Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_0__.GetRequestHeader)();
            const body = JSON.stringify(sessionData);
            const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.CreateSessionId(), {
                method: 'POST',
                headers: header,
                body: body
            });
            if (response.ok) {
                return response.json();
            }
            else {
                console.log("Creating session failed", yield response.json());
                (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_2__.HandleHttpError)(response);
                return null;
            }
        }
        catch (ex) {
            console.log("Creating session failed", ex);
            (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_2__.HandleInternalError)(ex, _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.CreateSessionId());
        }
    });
}


/***/ }),

/***/ "./src/Api/Session/CreateSessionVisit.ts":
/*!***********************************************!*\
  !*** ./src/Api/Session/CreateSessionVisit.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateSessionVisit: () => (/* binding */ CreateSessionVisit)
/* harmony export */ });
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
/* harmony import */ var _Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/Common/ErrorPosting */ "./src/Services/Common/ErrorPosting.ts");
/* harmony import */ var _Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/Security/GetRequestHeader */ "./src/Services/Security/GetRequestHeader.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function CreateSessionVisit(sessionId, url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var header = (0,_Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_2__.GetRequestHeader)("application/x-www-form-urlencoded");
            const urlencoded = new URLSearchParams();
            urlencoded.append("sessionId", sessionId.toString());
            urlencoded.append("url", url);
            const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.CreateSessionVisitUrl(), {
                method: 'POST',
                headers: header,
                body: urlencoded
            });
            if (response.ok) {
                return response.json();
            }
            else {
                console.log("Creating session url failed", yield response.json());
                (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_1__.HandleHttpError)(response);
                return null;
            }
        }
        catch (ex) {
            console.log("Creating session url failed", ex);
            (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_1__.HandleInternalError)(ex, _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.CreateSessionVisitUrl());
        }
    });
}


/***/ }),

/***/ "./src/Api/Signin.ts":
/*!***************************!*\
  !*** ./src/Api/Signin.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Signin)
/* harmony export */ });
/* harmony import */ var _Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Services/Common/ErrorPosting */ "./src/Services/Common/ErrorPosting.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app */ "./src/app.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function Signin(signinInfo) {
    return __awaiter(this, void 0, void 0, function* () {
        const raw = JSON.stringify({
            email: signinInfo.email,
            password: signinInfo.password,
        });
        let freeschemaRes = {
            message: 'success',
            status: false,
            statusCode: 200,
            data: '',
        };
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        const url = _app__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.LoginUrl();
        try {
            const response = yield fetch(url, {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow',
            });
            const output = yield response.json();
            if (response.ok) {
                const dataObject = output === null || output === void 0 ? void 0 : output.data;
                freeschemaRes = {
                    message: 'success',
                    status: true,
                    statusCode: 200,
                    data: dataObject,
                };
            }
            else {
                (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_0__.HandleHttpError)(response);
            }
            return freeschemaRes;
        }
        catch (error) {
            console.log('Sign in api error', error);
            (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_0__.HandleInternalError)(error, url);
        }
    });
}


/***/ }),

/***/ "./src/Api/Signup.ts":
/*!***************************!*\
  !*** ./src/Api/Signup.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Signup)
/* harmony export */ });
/* harmony import */ var _Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Services/Common/ErrorPosting */ "./src/Services/Common/ErrorPosting.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app */ "./src/app.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function Signup(signupModel) {
    return __awaiter(this, void 0, void 0, function* () {
        const signupResponse = yield postData(_app__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.SignupUrl(), signupModel);
        return signupResponse;
    });
}
function postData() {
    return __awaiter(this, arguments, void 0, function* (url = '', data = {}) {
        let freeschemaRes = {
            message: 'success',
            status: false,
            statusCode: 200,
            data: '',
        };
        // Default options are marked with *
        try {
            const response = yield fetch(url, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json',
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify(data), // body data type must match "Content-Type" header
            });
            const output = yield response.json();
            if (response.ok) {
                freeschemaRes = {
                    message: 'success',
                    status: true,
                    statusCode: 200,
                    data: output,
                };
            }
            else {
                (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_0__.HandleHttpError)(response);
            }
            return freeschemaRes;
        }
        catch (error) {
            console.log('Signup Error: ', error);
            (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_0__.HandleInternalError)(error, url);
        }
    });
}


/***/ }),

/***/ "./src/Api/Translate/TranslateLocalToReal.ts":
/*!***************************************************!*\
  !*** ./src/Api/Translate/TranslateLocalToReal.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslateLocalToReal: () => (/* binding */ TranslateLocalToReal)
/* harmony export */ });
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
/* harmony import */ var _Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/Common/ErrorPosting */ "./src/Services/Common/ErrorPosting.ts");
/* harmony import */ var _Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/Security/GetRequestHeader */ "./src/Services/Security/GetRequestHeader.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app */ "./src/app.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




function TranslateLocalToReal(conceptId) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = (0,_app__WEBPACK_IMPORTED_MODULE_3__.CreateDefaultConcept)();
        try {
            var header = (0,_Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_2__.GetRequestHeaderWithAuthorization)('application/x-www-form-urlencoded');
            const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.GetRealConceptById(), {
                method: 'POST',
                headers: header,
                body: `id=${conceptId}`
            });
            if (response.ok) {
                result = (yield response.json());
                if (result.id > 0) {
                    _app__WEBPACK_IMPORTED_MODULE_3__.ConceptsData.AddConcept(result);
                }
                return result;
            }
            else {
                console.log("Error in Getting Translating concept Error", response.status);
                (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_1__.HandleHttpError)(response);
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('Error in Getting Translating concept error message: ', error);
            }
            else {
                console.log('Error in Getting Translating concept unexpected error: ', error);
            }
            (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_1__.HandleInternalError)(error, _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.GetRealConceptById());
        }
        return result;
    });
}


/***/ }),

/***/ "./src/Api/View/ViewInternalDataApi.ts":
/*!*********************************************!*\
  !*** ./src/Api/View/ViewInternalDataApi.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewInternalDataApi: () => (/* binding */ ViewInternalDataApi)
/* harmony export */ });
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
/* harmony import */ var _Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/Common/ErrorPosting */ "./src/Services/Common/ErrorPosting.ts");
/* harmony import */ var _Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/Security/GetRequestHeader */ "./src/Services/Security/GetRequestHeader.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app */ "./src/app.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




function ViewInternalDataApi(ids) {
    return __awaiter(this, void 0, void 0, function* () {
        let connectionList = [];
        try {
            var header = (0,_Services_Security_GetRequestHeader__WEBPACK_IMPORTED_MODULE_2__.GetRequestHeader)();
            const response = yield fetch(_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.ViewInternalDataUrl(), {
                method: 'POST',
                headers: header,
                body: JSON.stringify(ids)
            });
            if (response.ok) {
                let conceptString = yield response.json();
                let connectionDictionary = {};
                for (let i = 0; i < conceptString.length; i++) {
                    let conceptList = conceptString[i].concepts;
                    connectionList = conceptString[i].connections;
                    let id = conceptString[i].id;
                    (0,_app__WEBPACK_IMPORTED_MODULE_3__.GetConceptBulk)(conceptList);
                    connectionDictionary[id] = connectionList;
                }
                return connectionDictionary;
            }
            else {
                //  throw new Error(`Error! status: ${response.status}`);
                console.log("View Internal Data error", response.status);
                (0,_Services_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_1__.HandleHttpError)(response);
            }
            return connectionList;
        }
        catch (error) {
            if (error instanceof Error) {
                console.log(' This is the view internal data error message: ', error.message);
            }
            else {
                console.log(' This is the view internal data unexpected error: ', error);
            }
            throw error;
        }
    });
}


/***/ }),

/***/ "./src/Constants/AccessConstants.ts":
/*!******************************************!*\
  !*** ./src/Constants/AccessConstants.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADMIN: () => (/* binding */ ADMIN),
/* harmony export */   PRIVATE: () => (/* binding */ PRIVATE),
/* harmony export */   PUBLIC: () => (/* binding */ PUBLIC)
/* harmony export */ });
const ADMIN = 3;
const PRIVATE = 4;
const PUBLIC = 5;


/***/ }),

/***/ "./src/Constants/FormatConstants.ts":
/*!******************************************!*\
  !*** ./src/Constants/FormatConstants.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DATAID: () => (/* binding */ DATAID),
/* harmony export */   DATAIDDATE: () => (/* binding */ DATAIDDATE),
/* harmony export */   JUSTDATA: () => (/* binding */ JUSTDATA),
/* harmony export */   NORMAL: () => (/* binding */ NORMAL),
/* harmony export */   RAW: () => (/* binding */ RAW)
/* harmony export */ });
const NORMAL = 1;
const DATAID = 2;
const JUSTDATA = 3;
const DATAIDDATE = 4;
const RAW = 5;


/***/ }),

/***/ "./src/Constants/general.const.ts":
/*!****************************************!*\
  !*** ./src/Constants/general.const.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   broadcastChannel: () => (/* binding */ broadcastChannel)
/* harmony export */ });
const channelName = 'Freeschema_mftsccs_browser_channel';
const broadcastChannel = new BroadcastChannel(channelName);


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
    static setRandomizer(id) {
        console.log('set randomizer', id);
        this.BASE_RANDOMIZER = id;
    }
    static getRandomizer() {
        return this.BASE_RANDOMIZER;
    }
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
    static GetConnectionBulkUrl() {
        return this.BASE_URL + '/api/get_connection_bulk';
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
    static GetConceptByCharacterAndCategoryUrl() {
        return this.BASE_URL + '/api/get_concept_by_character_and_category';
    }
    static GetConceptByCharacterAndCategoryDirectUrl() {
        return this.BASE_URL + '/api/get_concept_by_character_and_category_direct';
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
        return this.BASE_URL + '/api/get-preloaded-concepts';
        // return this.AI_URL + '/api/get_ranked_type_id?inpage=300' || process.env.AI_URL ||  'https://ai.freeschema.com/api/get_ranked_type_id?inpage=300';
    }
    static GetAllPrefetchConnectionsUrl() {
        return this.BASE_URL + '/api/get_all_connections_of_user?inpage=500';
    }
    static GetAllLinkerConnectionOfConceptUrl() {
        return this.BASE_URL + '/api/get-all-linkers-from-concept';
    }
    static GetAllLinkerConnectionToConceptUrl() {
        return this.BASE_URL + '/api/get-all-linkers-to-concept';
    }
    static DeleteConceptUrl() {
        return this.BASE_URL + '/api/delete_concept';
    }
    static RecursiveSearchUrl() {
        return this.BASE_URL + '/api/recursivesearch-concept-connection';
    }
    static SearchLinkMultipleAllApiUrl() {
        return this.BASE_URL + '/api/Connection/search-link-multiple-all-ccs';
    }
    static MakeTheNameInBackendUrl() {
        return this.BASE_URL + '/api/make-name-from-frontend';
    }
    static SearchAllTypeWithLinker(auth = true) {
        if (auth) {
            return this.BASE_URL + '/api/search-all-with-linker-ccs';
        }
        else {
            return this.BASE_URL + '/api-search-compositions-internal-clean-ccs';
        }
    }
    static LoginUrl() {
        return this.BASE_URL + '/api/auth/login';
    }
    static SignupUrl() {
        return this.BASE_URL + '/api/auth/signup';
    }
    static GetCompositionConnectionBetweenTwoConceptsUrl() {
        return this.BASE_URL + '/api/get-composition-connection-between-two-concepts';
    }
    static SearchCompositionsUrl() {
        return this.BASE_URL + '/api/search-compositions';
    }
    static SearchLinkMultipleAll() {
        return this.BASE_URL + '/api/Connection/search-link-multiple-all';
    }
    static CreateSessionId() {
        return this.BASE_URL + '/api/create-session-id-remote';
    }
    static CreateSessionVisitUrl() {
        return this.BASE_URL + '/api/create-remote-session-visit';
    }
    //////////////////////////////////////////////////////////////////////////////
    /////////////////////Api for viewing internal data //////////////////////////
    static ViewInternalDataUrl() {
        return this.BASE_URL + '/api/view-api-internal-data-ccs-id-bulk';
    }
    static SearchInternalWithAuthenticatedCcsUrl() {
        return this.BASE_URL + '/api/search-composition-internal-authenticated-ccs';
    }
    static SearchInternalWithCcsUrl() {
        return this.BASE_URL + '/api-search-compositions-internal-clean-ccs';
    }
    static CreateGhostConceptApiUrl() {
        return BaseUrl.NODE_URL + '/api/v1/local-concepts';
    }
    static CreateGhostConnectionApiUrl() {
        return BaseUrl.NODE_URL + '/api/v1/local-connections';
    }
    static GetRealConceptById() {
        return BaseUrl.NODE_URL + '/api/v1/local-concepts-translate';
    }
    //////////////////////////////////////////////////////////////////////////////
    //////////////// API For Reserved Ids ///////////////////////////////////////
    static GetReservedIdUrl() {
        return this.BASE_URL + '/api/get_reserved_ids';
    }
    static GetReservedConnectionIdUrl() {
        return this.BASE_URL + '/api/get_reserved_connection_ids';
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
    static CreateTheConnectionNewUrl() {
        return this.BASE_URL + '/api/create_the_connection_new';
    }
    static MakeTheTypeConceptUrl() {
        return this.BASE_URL + '/api/make_the_type_concept';
    }
    ////////////////////////////////////////////////////////////////////////
    /////////////////////API FOR Deleting Connection //////////////////////
    static DeleteTheConnectionUrl() {
        return this.BASE_URL + '/api/delete_connection';
    }
}
BaseUrl.BASE_URL = "https://localhost:7053/";
BaseUrl.AI_URL = "https://ai.freeschema.com";
BaseUrl.MQTT_URL = '192.168.1.249';
BaseUrl.NODE_URL = "http://localhost:5001";
BaseUrl.BASE_APPLICATION = "";
BaseUrl.BASE_RANDOMIZER = 999;


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
    static getNodeFromTreeUpdated(value) {
        if (this.characterRoot) {
            var Node = this.characterRoot.getCharacterFromNode(value, this.characterRoot);
            return Node;
        }
        return this.characterRoot;
    }
    static getCharacterAndTypeFromTree(value, typeId) {
        return __awaiter(this, void 0, void 0, function* () {
            // try{
            //     var data = await this.waitForDataToLoad();
            // }
            // catch(exception){
            //     return null;
            // }
            if (this.characterRoot) {
                var Node = this.characterRoot.getFromNodeWithCharacterAndType(value, typeId, this.characterRoot);
                return Node;
            }
            return this.characterRoot;
        });
    }
    static getCharacterAndCategoryFromTree(value, categoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            // try{
            //     var data = await this.waitForDataToLoad();
            // }
            // catch(exception){
            //     return null;
            // }
            if (this.characterRoot) {
                var Node = this.characterRoot.getFromNodeWithCharacterAndCategory(value, categoryId, this.characterRoot);
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
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app */ "./src/app.ts");
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
        let node = new _Node__WEBPACK_IMPORTED_MODULE_1__.Node(concept.id, concept, null, null);
        let characterNode = new _Node__WEBPACK_IMPORTED_MODULE_1__.Node(concept.characterValue, concept, null, null);
        _BinaryCharacterTree__WEBPACK_IMPORTED_MODULE_0__.BinaryCharacterTree.addNodeToTree(characterNode);
        this.addNodeToTree(node);
    }
    static getNodeFromTree(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.root) {
                let Node = this.root.getFromNode(id, this.root);
                return Node;
            }
            return null;
        });
    }
    static removeNodeFromTree(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.root) {
                let event = new Event(`${id}`);
                console.log("this is the fired event after delete", event);
                //  dispatchEvent(event);
                (0,_app__WEBPACK_IMPORTED_MODULE_3__.dispatchIdEvent)(id);
                this.root = this.root.removeNode(this.root, id);
            }
        });
    }
    static getConceptListFromIds(ids, connectionArray, remainingIds) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.root) {
                this.root.checkIfIdsInNode(this.root, ids, connectionArray, remainingIds);
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
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ "./src/app.ts");
/* harmony import */ var _Services_CreateDefaultConcept__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/CreateDefaultConcept */ "./src/Services/CreateDefaultConcept.ts");
/* harmony import */ var _IdentifierFlags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IdentifierFlags */ "./src/DataStructures/IdentifierFlags.ts");
/* harmony import */ var _TypeNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TypeNode */ "./src/DataStructures/TypeNode.ts");
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
    // old method having concept as the value.
    // static async addNodeToTree(node:Node){
    //     if(this.typeRoot == null){
    //         this.typeRoot = node;
    //         return this.typeRoot;
    //     }
    //     else{
    //          let event = new CustomEvent(`${node.value.typeId}`, {detail: node.value.id});
    //         // console.log("this is the fired event", event);
    //          dispatchEvent(event);
    //         this.typeRoot = this.typeRoot.addTypeNode(node,this.typeRoot,this.typeRoot.height);
    //     }
    //     return this.typeRoot;
    // }
    // new method with just ids 
    static addType(node) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.root == null) {
                this.root = node;
                return this.root;
            }
            else {
                let event = new CustomEvent(`${node.key}`, { detail: node.value[0] });
                // console.log("this is the fired event", event);
                //  dispatchEvent(event);
                (0,_app__WEBPACK_IMPORTED_MODULE_0__.dispatchIdEvent)(node.key, { detail: node.value[0] });
                // console.log("this is the fired event", event);
                this.root = this.root.addType(this.root, node.key, node.value[0]);
            }
            return this.root;
        });
    }
    static addConceptToTree(concept) {
        if (concept.typeId != 0) {
            /// old type 
            // var node: Node = new Node(concept.typeId, concept, null, null);
            // this.addNodeToTree(node);
            // new functionality
            let typeNode = new _TypeNode__WEBPACK_IMPORTED_MODULE_3__.TypeNode(concept.typeId, concept.id);
            this.addType(typeNode);
        }
    }
    static removeTypeConcept(typeId, id) {
        // old mehtod
        // if(this.typeRoot){
        //     this.typeRoot = this.typeRoot.removeNodeWithVariants(this.typeRoot,typeId,id);
        // }
        // new method
        if (this.root) {
            this.root = this.root.removeNodeWithVariants(this.root, typeId, id);
        }
    }
    // static getNodeFromTree(id:number){
    //     // old method
    //     if(this.typeRoot){
    //         var Node = this.typeRoot.getFromNode(id, this.typeRoot);
    //         return Node;
    //     }
    //     return this.typeRoot;
    // }
    static getNodeFromTreeNew(id) {
        // new method
        if (this.root) {
            let node = this.root.getFromNode(id, this.root);
            return node;
        }
        return this.root;
    }
    /// old method
    // static getTypeVariantsFromTree(typeId:number){
    //         let Node = this.getNodeFromTree(typeId);
    //         var concepts : Concept[] = [];
    //         if(Node){
    //             concepts.push(Node?.value);
    //             for(let i=0; i< Node.variants.length; i++){
    //                 concepts.push(Node.variants[i].value);
    //             }
    //         return concepts;
    //     }
    // }
    //new method
    static getTypeVariantsFromTreeNew(typeId) {
        return __awaiter(this, void 0, void 0, function* () {
            let node = this.getNodeFromTreeNew(typeId);
            let conceptIds = [];
            let concepts = [];
            if (node) {
                conceptIds = node.value;
                for (let i = 0; i < conceptIds.length; i++) {
                    let alreadyExist = false;
                    for (let j = 0; j < concepts.length; j++) {
                        if (concepts[j].id == conceptIds[i]) {
                            alreadyExist = true;
                        }
                    }
                    if (!alreadyExist) {
                        concepts.push(yield (0,_app__WEBPACK_IMPORTED_MODULE_0__.GetTheConcept)(conceptIds[i]));
                    }
                }
            }
            return concepts;
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
        if (_IdentifierFlags__WEBPACK_IMPORTED_MODULE_2__.IdentifierFlags.isTypeLoaded) {
            return resolve("done");
        }
        else {
            setTimeout(BinaryTypeTree.checkFlag, 1000, resolve);
        }
    }
    ;
    // static async getTypeVariantsFromTreeWithUserId(typeId:number, userId:number){
    //     var concepts : Concept[] = [];
    //         var Node = this.getNodeFromTree(typeId);
    //         if(Node){
    //             console.log("this is the tree to find", Node.value);
    //             if(Node.value.userId == userId ){
    //                 concepts.push(Node?.value);
    //             }
    //             for(let i=0; i< Node.variants.length; i++){
    //                 if(Node.variants[i].value.userId == userId ){
    //                     var isPresent = false;
    //                     for(let j=0; j<concepts.length;j++){
    //                         if(concepts[j].id == Node.variants[i].value.id){
    //                             isPresent = true;
    //                         }
    //                     }
    //                     if(!isPresent){
    //                         concepts.push(Node.variants[i].value);
    //                     }
    //                 }
    //             }
    //         }
    //     return concepts;
    // }
    // new method
    static getTypeVariantsFromTreeWithUserIdNew(typeId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let concepts = [];
            let allConcepts = yield this.getTypeVariantsFromTreeNew(typeId);
            console.log("these are all the concepts", allConcepts);
            for (let i = 0; i < allConcepts.length; i++) {
                if (allConcepts[i].userId == userId) {
                    concepts.push(allConcepts[i]);
                }
            }
            return concepts;
        });
    }
    // static async getTypeVariantsWithCharacterValue( characterValue:string,typeId:number,){
    //     let concept = CreateDefaultConcept();
    //         var Node = this.getNodeFromTree(typeId);
    //         if(Node){
    //             if(Node.value.characterValue == characterValue ){
    //                 concept = Node.value;
    //             }
    //             for(let i=0; i< Node.variants.length; i++){
    //                 if(Node.variants[i].value.characterValue == characterValue ){
    //                     concept = Node.variants[i].value;
    //                 }
    //             }
    //         }
    //     return concept;
    // }
    //new method
    static getTypeVariantsWithCharacterValueNew(characterValue, typeId) {
        return __awaiter(this, void 0, void 0, function* () {
            let allConcepts = yield this.getTypeVariantsFromTreeNew(typeId);
            console.log("this is all the concepts for character", allConcepts);
            let concept = (0,_Services_CreateDefaultConcept__WEBPACK_IMPORTED_MODULE_1__.CreateDefaultConcept)();
            for (let i = 0; i < allConcepts.length; i++) {
                if (allConcepts[i].characterValue == characterValue) {
                    concept = allConcepts[i];
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
BinaryTypeTree.root = null;


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

/***/ "./src/DataStructures/Composition/Composition.ts":
/*!*******************************************************!*\
  !*** ./src/DataStructures/Composition/Composition.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Composition: () => (/* binding */ Composition)
/* harmony export */ });
/* harmony import */ var _Services_Composition_BuildComposition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Services/Composition/BuildComposition */ "./src/Services/Composition/BuildComposition.ts");
/* harmony import */ var _Services_CreateDefaultConcept__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/CreateDefaultConcept */ "./src/Services/CreateDefaultConcept.ts");
/* harmony import */ var _Services_Mqtt_publishMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/Mqtt/publishMessage */ "./src/Services/Mqtt/publishMessage.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class Composition {
    constructor() {
        // we can build a composition using this class
        this.id = 0;
        this.mainConcept = (0,_Services_CreateDefaultConcept__WEBPACK_IMPORTED_MODULE_1__.CreateDefaultConcept)();
        this.connections = [];
        this.concepts = [];
        this.subcompositions = [];
        this.cached = {};
    }
    updateCache() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.mainConcept.id == 0)
                for (let i = 0; i < this.concepts.length; i++) {
                    if (this.concepts[i].id == this.id) {
                        this.mainConcept = this.concepts[i];
                    }
                }
            let visitedConcepts = [];
            this.cached = yield (0,_Services_Composition_BuildComposition__WEBPACK_IMPORTED_MODULE_0__.recursiveFetchNew)(this.id, this.connections, this.concepts, this.subcompositions, visitedConcepts);
        });
    }
    UpdateAcrossDistributedSystem() {
        var _a;
        try {
            if (this.id != 0) {
                (0,_Services_Mqtt_publishMessage__WEBPACK_IMPORTED_MODULE_2__.publishMessage)('compositionUpdate', (_a = this.id) === null || _a === void 0 ? void 0 : _a.toString());
            }
        }
        catch (ex) {
            console.log('Error while publishing message', ex);
        }
    }
    isUpdating() {
        this.UpdateAcrossDistributedSystem();
    }
    GetDataCache() {
        var _a, _b, _c;
        const returnOutput = {};
        const mainString = (_c = (_b = (_a = this.mainConcept) === null || _a === void 0 ? void 0 : _a.type) === null || _b === void 0 ? void 0 : _b.characterValue) !== null && _c !== void 0 ? _c : '';
        returnOutput[mainString] = this.cached;
        const FinalReturn = {};
        FinalReturn['data'] = returnOutput;
        FinalReturn['id'] = this.id;
        return FinalReturn;
    }
}


/***/ }),

/***/ "./src/DataStructures/Composition/CompositionBinaryTree.ts":
/*!*****************************************************************!*\
  !*** ./src/DataStructures/Composition/CompositionBinaryTree.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompositionBinaryTree: () => (/* binding */ CompositionBinaryTree)
/* harmony export */ });
/* harmony import */ var _CompositionNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompositionNode */ "./src/DataStructures/Composition/CompositionNode.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class CompositionBinaryTree {
    static addNodeToTree(node) {
        if (this.root == null) {
            this.root = node;
            return this.root;
        }
        else {
            this.root = this.root.addNode(node, this.root, this.root.height);
        }
    }
    static addCompositionToTree(composition) {
        const node = new _CompositionNode__WEBPACK_IMPORTED_MODULE_0__.CompositionNode(composition.id, composition, null, null);
        this.addNodeToTree(node);
    }
    static getNodeFromTree(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.root) {
                const Node = this.root.getFromNode(id, this.root);
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
// this is a binary tree to hold compositions in it
CompositionBinaryTree.root = null;


/***/ }),

/***/ "./src/DataStructures/Composition/CompositionNode.ts":
/*!***********************************************************!*\
  !*** ./src/DataStructures/Composition/CompositionNode.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompositionNode: () => (/* binding */ CompositionNode)
/* harmony export */ });
/* harmony import */ var _CompositionBinaryTree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompositionBinaryTree */ "./src/DataStructures/Composition/CompositionBinaryTree.ts");

class CompositionNode {
    constructor(key, value, leftNode, rightNode) {
        this.expiryTime = new Date(Date.now() + 10 * 60 * 1000);
        this.height = 1;
        this.key = key;
        this.value = value;
        this.leftNode = leftNode;
        this.rightNode = rightNode;
    }
    isValid() {
        const currentTime = new Date(Date.now());
        if (this.expiryTime < currentTime) {
            _CompositionBinaryTree__WEBPACK_IMPORTED_MODULE_0__.CompositionBinaryTree.removeNodeFromTree(this.key);
            return false;
        }
        return true;
    }
    saveToCache(data) {
        this.value.cached = data;
    }
    addNode(passedNode, node, height) {
        if (node == null) {
            node = passedNode;
            return node;
        }
        const LeftNode = node.leftNode;
        const RightNode = node.rightNode;
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
            this.isValid();
            node = passedNode;
            return node;
        }
        node.height =
            1 +
                Math.max(this.getHeight(node.leftNode), this.getHeight(node.rightNode));
        const balancingFactor = this.getBalanceFactor(node);
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
        this.isValid();
        return node;
    }
    rightRotate(y) {
        if (y) {
            const x = y.leftNode;
            if (x) {
                const T2 = x.rightNode;
                y.leftNode = T2;
                x.rightNode = y;
                y.height =
                    Math.max(this.getHeight(y.leftNode), this.getHeight(y.rightNode)) + 1;
                x.height =
                    Math.max(this.getHeight(x.leftNode), this.getHeight(x.rightNode)) + 1;
                return x;
            }
            // return x;
        }
        return y;
    }
    leftRotate(x) {
        if (x) {
            const y = x.rightNode;
            if (y) {
                const T2 = y.leftNode;
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
            if (id == node.key && node.isValid()) {
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
        if (passedNode.leftNode == null) {
            const temp = passedNode.rightNode;
            passedNode = null;
            return temp;
        }
        else if (passedNode.rightNode == null) {
            const temp = passedNode.leftNode;
            passedNode = null;
            return temp;
        }
        else {
            // passing the rightNode to the inOrderSuccessor gives the immediate successor of the node
            const immediateSuccessor = this.inOrderSuccessor(passedNode.rightNode);
            passedNode.value = immediateSuccessor.value;
            passedNode.key = immediateSuccessor.key;
            passedNode.rightNode = this.removeNode(passedNode.rightNode, immediateSuccessor.key);
            return passedNode;
        }
    }
    countNodeBelow(root) {
        if (root == null) {
            return 0;
        }
        //recursive call to left child and right child and
        // add the result of these with 1 ( 1 for counting the root)
        return (1 +
            this.countNodeBelow(root.leftNode) +
            this.countNodeBelow(root.rightNode));
    }
    inOrderSuccessor(root) {
        while (root.leftNode != null) {
            root = root.leftNode;
        }
        return root;
    }
}


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
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ "./src/app.ts");

class Concept {
    constructor(id, userId, typeId, categoryId, referentId, characterValue, accessId, isNew = false, entryTimeStamp, updatedTimeStamp, typeCharacter) {
        this.count = 0;
        this.typeCharacter = "";
        this.isComposition = false;
        this.isTemp = false;
        this.isSynced = false;
        // applicationId: number = BaseUrl.BASE_RANDOMIZER;
        this.applicationId = _app__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.getRandomizer();
        this.x = 0;
        this.y = 0;
        this.id = id;
        this.userId = userId;
        this.typeId = typeId;
        this.ghostId = id;
        this.categoryId = categoryId;
        this.referentId = referentId;
        this.characterValue = `${characterValue}`;
        this.accessId = accessId;
        this.typeCharacter = typeCharacter;
        this.type = null;
        this.isNew = isNew;
        this.entryTimeStamp = entryTimeStamp;
        this.updatedTimeStamp = updatedTimeStamp;
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
/* harmony import */ var _Database_indexeddb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Database/indexeddb */ "./src/Database/indexeddb.ts");
/* harmony import */ var _BinaryTree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BinaryTree */ "./src/DataStructures/BinaryTree.ts");
/* harmony import */ var _BinaryCharacterTree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BinaryCharacterTree */ "./src/DataStructures/BinaryCharacterTree.ts");
/* harmony import */ var _BinaryTypeTree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BinaryTypeTree */ "./src/DataStructures/BinaryTypeTree.ts");
/* harmony import */ var _Services_CreateDefaultConcept__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/CreateDefaultConcept */ "./src/Services/CreateDefaultConcept.ts");
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
    static AddNpc(id) {
        if (!this.NPC.includes(id)) {
            if (this.NPC.length > 10) {
                this.NPC = [];
            }
            this.NPC.push(id);
        }
    }
    static GetNpc(id) {
        if (this.NPC.includes(id)) {
            return true;
        }
        return false;
    }
    static AddConceptToStorage(concept) {
        if (concept.id > 0) {
            (0,_Database_indexeddb__WEBPACK_IMPORTED_MODULE_0__.UpdateToDatabase)("concept", concept);
        }
    }
    static GetConceptBulkData(ids, connectionArray, remainingIds) {
        return __awaiter(this, void 0, void 0, function* () {
            yield _BinaryTree__WEBPACK_IMPORTED_MODULE_1__.BinaryTree.getConceptListFromIds(ids, connectionArray, remainingIds);
        });
    }
    static AddConcept(concept) {
        if (concept.id > 0) {
            // console.log("added the concept to the tree", concept);
            //var contains = this.CheckContains(concept);
            // this.conceptDictionary[concept.id] = concept;
            //    if(contains){
            //   this.RemoveConcept(concept);
            //  }
            //UpdateToDatabase("concept",concept);
            //IndexDbUpdate.UpdateConceptIndexDb(concept);
            _BinaryTree__WEBPACK_IMPORTED_MODULE_1__.BinaryTree.addConceptToTree(concept);
            _BinaryTypeTree__WEBPACK_IMPORTED_MODULE_3__.BinaryTypeTree.addConceptToTree(concept);
            //BinaryCharacterTree.addConceptToTree(concept);
        }
    }
    static AddConceptToMemory(concept) {
        if (concept.id > 0) {
            //var contains = this.CheckContains(concept);
            // this.conceptDictionary[concept.id] = concept;
            //    if(contains){
            //   this.RemoveConcept(concept);
            //  }
            _BinaryTree__WEBPACK_IMPORTED_MODULE_1__.BinaryTree.addConceptToTree(concept);
            _BinaryTypeTree__WEBPACK_IMPORTED_MODULE_3__.BinaryTypeTree.addConceptToTree(concept);
            // BinaryCharacterTree.addConceptToTree(concept);
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
        (0,_Database_indexeddb__WEBPACK_IMPORTED_MODULE_0__.removeFromDatabase)("concept", concept.id);
    }
    static GetConcept(id) {
        return __awaiter(this, void 0, void 0, function* () {
            var myConcept = (0,_Services_CreateDefaultConcept__WEBPACK_IMPORTED_MODULE_4__.CreateDefaultConcept)();
            var node = yield _BinaryTree__WEBPACK_IMPORTED_MODULE_1__.BinaryTree.getNodeFromTree(id);
            if (node === null || node === void 0 ? void 0 : node.value) {
                var returnedConcept = node.value;
                if (returnedConcept) {
                    myConcept = returnedConcept;
                    // if(myConcept.count > IndexDbUpdate.MIN_USE_FOR_INDEX_DB){
                    //     IndexDbUpdate.UpdateConceptIndexDb(myConcept);
                    // }
                }
            }
            return myConcept;
        });
    }
    static GetConceptByCharacter(characterValue) {
        return __awaiter(this, void 0, void 0, function* () {
            var concept = (0,_Services_CreateDefaultConcept__WEBPACK_IMPORTED_MODULE_4__.CreateDefaultConcept)();
            var Node = _BinaryCharacterTree__WEBPACK_IMPORTED_MODULE_2__.BinaryCharacterTree.getNodeFromTree(characterValue);
            if (Node) {
                concept = Node.value;
            }
            return concept;
        });
    }
    static GetConceptByCharacterUpdated(characterValue) {
        return __awaiter(this, void 0, void 0, function* () {
            var concept = (0,_Services_CreateDefaultConcept__WEBPACK_IMPORTED_MODULE_4__.CreateDefaultConcept)();
            var Node = _BinaryCharacterTree__WEBPACK_IMPORTED_MODULE_2__.BinaryCharacterTree.getNodeFromTree(characterValue);
            if (Node) {
                concept = Node.value;
            }
            return concept;
        });
    }
    static GetConceptByCharacterAndTypeLocal(character_value, typeId) {
        return __awaiter(this, void 0, void 0, function* () {
            var concept = (0,_Services_CreateDefaultConcept__WEBPACK_IMPORTED_MODULE_4__.CreateDefaultConcept)();
            //var Node = await BinaryCharacterTree.getCharacterAndTypeFromTree(character_value,typeId);
            concept = yield _BinaryTypeTree__WEBPACK_IMPORTED_MODULE_3__.BinaryTypeTree.getTypeVariantsWithCharacterValueNew(character_value, typeId);
            // if(Node){
            //     concept =  Node.value;
            //     console.log("found the output");
            //     console.log(concept);
            // }
            return concept;
        });
    }
    static GetConceptByCharacterAndCategoryLocal(character_value, categoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            var concept = (0,_Services_CreateDefaultConcept__WEBPACK_IMPORTED_MODULE_4__.CreateDefaultConcept)();
            var Node = yield _BinaryCharacterTree__WEBPACK_IMPORTED_MODULE_2__.BinaryCharacterTree.getCharacterAndCategoryFromTree(character_value, categoryId);
            if (Node) {
                concept = Node.value;
            }
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
        return ConceptList;
    }
    static GetConceptsByTypeIdAndUser(typeId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let ConceptList = [];
            ConceptList = yield _BinaryTypeTree__WEBPACK_IMPORTED_MODULE_3__.BinaryTypeTree.getTypeVariantsFromTreeWithUserIdNew(typeId, userId);
            return ConceptList;
        });
    }
    static GetBinaryCharacterTree() {
        return _BinaryCharacterTree__WEBPACK_IMPORTED_MODULE_2__.BinaryCharacterTree.characterRoot;
    }
    getName() {
        return this.name;
    }
}
ConceptsData.conceptsArray = [];
ConceptsData.NPC = [];
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
/* harmony import */ var _Services_CreateDefaultConcept__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Services/CreateDefaultConcept */ "./src/Services/CreateDefaultConcept.ts");
/* harmony import */ var _BaseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseUrl */ "./src/DataStructures/BaseUrl.ts");


class Connection {
    constructor(id = 0, ofTheConceptId, toTheConceptId, userId, typeId, orderId, accessId) {
        this.count = 0;
        this.isTemp = false;
        this.toUpdate = false;
        // applicationId: number = BaseUrl.BASE_RANDOMIZER;
        this.applicationId = _BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.getRandomizer();
        this.type = (0,_Services_CreateDefaultConcept__WEBPACK_IMPORTED_MODULE_0__.CreateDefaultConcept)();
        this.ofConcept = (0,_Services_CreateDefaultConcept__WEBPACK_IMPORTED_MODULE_0__.CreateDefaultConcept)();
        this.toConcept = (0,_Services_CreateDefaultConcept__WEBPACK_IMPORTED_MODULE_0__.CreateDefaultConcept)();
        this.id = id;
        this.ofTheConceptId = ofTheConceptId;
        this.toTheConceptId = toTheConceptId;
        this.userId = userId;
        this.typeId = typeId;
        this.ghostId = id;
        this.orderId = orderId;
        this.accessId = accessId;
        this.entryTimeStamp = new Date();
        this.terminationDateTime = new Date();
        this.localSyncTime = new Date();
        this.typeCharacter = "";
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
            return this.connectionroot;
        }
        else {
            this.connectionroot = this.connectionroot.addNode(node, this.connectionroot, this.connectionroot.height);
        }
    }
    static addConnectionToTree(connection) {
        let node = new _ConnectionNode__WEBPACK_IMPORTED_MODULE_1__.ConnectionNode(connection.id, connection, null, null);
        this.addNodeToTree(node);
    }
    static traverse() {
        var _a;
        return (_a = this.connectionroot) === null || _a === void 0 ? void 0 : _a.traverse(this.connectionroot);
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
            if (this.connectionroot) {
                let Node = this.connectionroot.getFromNode(id, this.connectionroot);
                return Node;
            }
            return this.connectionroot;
        });
    }
    static getConnectionListFromIds(ids, connectionArray, remainingIds) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.connectionroot) {
                this.connectionroot.checkIfIdsInNode(this.connectionroot, ids, connectionArray, remainingIds);
            }
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
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app */ "./src/app.ts");

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
        let contains = false;
        if (passedNode.value.id == node.value.id) {
            contains = true;
        }
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
        let LeftNode = node.leftNode;
        let RightNode = node.rightNode;
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
    addTypeNode(passedNode, node, height) {
        let debugFlag = false;
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
            let LeftNode = node.leftNode;
            let RightNode = node.rightNode;
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
                        let returner = this.rightRotate(node);
                        if (debugFlag) {
                            console.log("returning here 1 ", returner);
                        }
                        return returner;
                    }
                    else if (passedNode.key > node.leftNode.key) {
                        node.leftNode = this.leftRotate(node.leftNode);
                        let returner = this.rightRotate(node);
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
                        let returner = this.leftRotate(node);
                        if (debugFlag) {
                            console.log("returning here 3 ", returner);
                        }
                        return returner;
                    }
                    else if (passedNode.key < node.rightNode.key) {
                        node.rightNode = this.rightRotate(node.rightNode);
                        let returner = this.leftRotate(node);
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
                if (node.value.count) {
                    node.value.count++;
                }
                else {
                    node.value.count = 1;
                }
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
    checkIfIdsInNode(node, ids, connectionArray, remainingIds) {
        if (node) {
            if (ids.includes(node.key)) {
                connectionArray.push(node.value);
                //remainingIds[node.key] = true;
                let index = ids.indexOf(node.key);
                ids.splice(index, 1);
            }
            if (node.leftNode) {
                this.checkIfIdsInNode(node.leftNode, ids, connectionArray, remainingIds);
            }
            if (node.rightNode) {
                this.checkIfIdsInNode(node.rightNode, ids, connectionArray, remainingIds);
            }
        }
    }
    traverse(node) {
        let count = 0;
        if (node) {
            count = count + 1;
            if (node === null || node === void 0 ? void 0 : node.leftNode) {
                count += this.traverse(node.leftNode);
            }
            if (node.rightNode) {
                count += this.traverse(node.rightNode);
            }
        }
        return count;
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
        //     let newNode = passedNode.variants[0];
        //     if(newNode){
        //         passedNode.value = newNode.value;
        //         passedNode.key = newNode.key;
        //         passedNode.currentNode = newNode.currentNode;
        //         return passedNode;
        //     }
        // }
        /**
         * This is dispatched incase the connection is deleted and others are listening
         */
        let event = new Event(`${passedNode.value.ofTheConceptId}`);
        // dispatchEvent(event);
        (0,_app__WEBPACK_IMPORTED_MODULE_0__.dispatchIdEvent)(passedNode.value.ofTheConceptId);
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
            let immediateSuccessor = this.inOrderSuccessor(passedNode.rightNode);
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
                let newNode = passedNode.variants[0];
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
            let immediateSuccessor = this.inOrderSuccessor(passedNode.rightNode);
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

/***/ "./src/DataStructures/ConnectionBinaryTree/ConnectionOfNode.ts":
/*!*********************************************************************!*\
  !*** ./src/DataStructures/ConnectionBinaryTree/ConnectionOfNode.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConnectionOfNode: () => (/* binding */ ConnectionOfNode)
/* harmony export */ });
/* harmony import */ var _NodePrimitive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NodePrimitive */ "./src/DataStructures/ConnectionBinaryTree/NodePrimitive.ts");

class ConnectionOfNode extends _NodePrimitive__WEBPACK_IMPORTED_MODULE_0__.NodePrimitive {
    constructor(key, value, leftNode, rightNode) {
        super(key, value, leftNode, rightNode);
        this.key = "";
        this.value = [];
        this.height = 1;
        this.key = key;
        this.value = value;
        this.leftNode = leftNode;
        this.rightNode = rightNode;
    }
    addNode(passedNode, node, height) {
        if (node == null) {
            node = passedNode;
            // let event = new Event(`${passedNode.key}`);
            // dispatchEvent(event);
            return node;
        }
        let LeftNode = node.leftNode;
        let RightNode = node.rightNode;
        if (node.key > passedNode.key) {
            node.leftNode = this.addNode(passedNode, LeftNode, height);
        }
        else if (node.key < passedNode.key) {
            node.rightNode = this.addNode(passedNode, RightNode, height);
        }
        else {
            return node;
        }
        node.height = 1 + Math.max(this.getHeight(node.leftNode), this.getHeight(node.rightNode));
        let balancingFactor = this.getBalanceFactor(node);
        if (balancingFactor > 1) {
            if (node.leftNode) {
                if (passedNode.key < node.leftNode.key) {
                    let returner = this.rightRotate(node);
                    return returner;
                }
                else if (passedNode.key > node.leftNode.key) {
                    node.leftNode = this.leftRotate(node.leftNode);
                    let returner = this.rightRotate(node);
                    return returner;
                }
            }
        }
        if (balancingFactor < -1) {
            if (node.rightNode) {
                if (passedNode.key > node.rightNode.key) {
                    let returner = this.leftRotate(node);
                    return returner;
                }
                else if (passedNode.key < node.rightNode.key) {
                    node.rightNode = this.rightRotate(node.rightNode);
                    let returner = this.leftRotate(node);
                    return returner;
                }
            }
        }
        return node;
    }
}


/***/ }),

/***/ "./src/DataStructures/ConnectionBinaryTree/ConnectionOfTheTree.ts":
/*!************************************************************************!*\
  !*** ./src/DataStructures/ConnectionBinaryTree/ConnectionOfTheTree.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConnectionOfTheTree: () => (/* binding */ ConnectionOfTheTree)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app */ "./src/app.ts");
/* harmony import */ var _ConnectionOfNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConnectionOfNode */ "./src/DataStructures/ConnectionBinaryTree/ConnectionOfNode.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


/**
 * This is a binary tree that is used to store the reference to the main connection of the concept.
 */
class ConnectionOfTheTree {
    static CreateCompositionKey(ofTheConceptId, typeId) {
        return ofTheConceptId;
    }
    static GetConnectionByOfTheConceptAndTypeId(ofTheConceptId, typeId) {
        let key = this.CreateCompositionKey(ofTheConceptId, typeId);
        if (this.node) {
            let existingNode = this.node.getFromNode(key, this.node);
            if (existingNode) {
                return existingNode.value;
            }
        }
        return null;
    }
    /**
     * This function lets you add a connection by composite key with of the concept id and type id.
     * This function checks if the connection already exists and then updates in the case that it does not
     * If the connection of the concept id and type id combination is encountered first time then a node is created.
     * @param connection connection that needs to be added.
     */
    static addConnection(connection) {
        if (connection.id > 0) {
            let key = this.CreateCompositionKey(connection.ofTheConceptId, connection.typeId);
            console.log('key this.node', key, this.node);
            if (this.node) {
                let existingNode = this.node.getFromNode(key, this.node);
                console.log(existingNode, 'existing node');
                if (existingNode) {
                    let connectionList = existingNode === null || existingNode === void 0 ? void 0 : existingNode.value;
                    if (connectionList.length == 0) {
                        existingNode.value = [];
                    }
                    if (!connectionList.includes(connection.id)) {
                        connectionList.push(connection.id);
                    }
                }
                else {
                    let list = [];
                    list.push(connection.id);
                    let connectionNode = new _ConnectionOfNode__WEBPACK_IMPORTED_MODULE_1__.ConnectionOfNode(key, list, null, null);
                    this.addNodeToTree(connectionNode);
                }
            }
            else {
                let list = [];
                list.push(connection.id);
                let connectionNode = new _ConnectionOfNode__WEBPACK_IMPORTED_MODULE_1__.ConnectionOfNode(key, list, null, null);
                this.addNodeToTree(connectionNode);
            }
            let event = new Event(`${key}`);
            // console.log("dispatched the of the concecpt event", event);
            // dispatchEvent(event);
            (0,_app__WEBPACK_IMPORTED_MODULE_0__.dispatchIdEvent)(key);
        }
        else {
            console.log("cannot insert key id with  n 0 to the connection tree", connection);
        }
    }
    /**
     * This is a function to add the connectionNode to the existing tree
     * @param connectionOfNode This is the node that needs to be added to the tree.
     * @returns ConnectionOfNode
     */
    static addNodeToTree(connectionOfNode) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.node == null) {
                this.node = connectionOfNode;
                // let event = new Event(`${this.node.key}`);
                // console.log("dispatched the of the concecpt event", event);
                // dispatchEvent(event);
                return this.node;
            }
            else {
                this.node = this.node.addNode(connectionOfNode, this.node, this.node.height);
            }
            return this.node;
        });
    }
    static removeNodeFromTree(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.node) {
                this.node = this.node.removeNode(this.node, id);
            }
        });
    }
}
ConnectionOfTheTree.node = null;


/***/ }),

/***/ "./src/DataStructures/ConnectionBinaryTree/ConnectionTypeNode.ts":
/*!***********************************************************************!*\
  !*** ./src/DataStructures/ConnectionBinaryTree/ConnectionTypeNode.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConnectionTypeNode: () => (/* binding */ ConnectionTypeNode)
/* harmony export */ });
/* harmony import */ var _NodePrimitive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NodePrimitive */ "./src/DataStructures/ConnectionBinaryTree/NodePrimitive.ts");

class ConnectionTypeNode extends _NodePrimitive__WEBPACK_IMPORTED_MODULE_0__.NodePrimitive {
    constructor(key, value, leftNode, rightNode) {
        super(key, value, leftNode, rightNode);
        this.key = "";
        this.value = [];
        this.height = 1;
        this.key = key;
        this.value = value;
        this.leftNode = leftNode;
        this.rightNode = rightNode;
    }
    addNode(passedNode, node, height) {
        if (node == null) {
            node = passedNode;
            return node;
        }
        let LeftNode = node.leftNode;
        let RightNode = node.rightNode;
        if (node.key > passedNode.key) {
            node.leftNode = this.addNode(passedNode, LeftNode, height);
        }
        else if (node.key < passedNode.key) {
            node.rightNode = this.addNode(passedNode, RightNode, height);
        }
        else {
            return node;
        }
        node.height = 1 + Math.max(this.getHeight(node.leftNode), this.getHeight(node.rightNode));
        let balancingFactor = this.getBalanceFactor(node);
        if (balancingFactor > 1) {
            if (node.leftNode) {
                if (passedNode.key < node.leftNode.key) {
                    let returner = this.rightRotate(node);
                    return returner;
                }
                else if (passedNode.key > node.leftNode.key) {
                    node.leftNode = this.leftRotate(node.leftNode);
                    let returner = this.rightRotate(node);
                    return returner;
                }
            }
        }
        if (balancingFactor < -1) {
            if (node.rightNode) {
                if (passedNode.key > node.rightNode.key) {
                    let returner = this.leftRotate(node);
                    return returner;
                }
                else if (passedNode.key < node.rightNode.key) {
                    node.rightNode = this.rightRotate(node.rightNode);
                    let returner = this.leftRotate(node);
                    return returner;
                }
            }
        }
        return node;
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
/* harmony import */ var _ConnectionTypeNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConnectionTypeNode */ "./src/DataStructures/ConnectionBinaryTree/ConnectionTypeNode.ts");
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
    static CreateCompositionKey(typeId) {
        return typeId;
    }
    /**
     * This is a function to add the connectionNode to the existing tree
     * @param connectionOfNode This is the node that needs to be added to the tree.
     * @returns ConnectionOfNode
     */
    static addNodeToTree(connectionOfNode) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.connectionTypeRoot == null) {
                this.connectionTypeRoot = connectionOfNode;
                return this.connectionTypeRoot;
            }
            else {
                this.connectionTypeRoot = this.connectionTypeRoot.addNode(connectionOfNode, this.connectionTypeRoot, this.connectionTypeRoot.height);
            }
            return this.connectionTypeRoot;
        });
    }
    /**
     * This function lets you add a connection by composite key with of the concept id and type id.
     * This function checks if the connection already exists and then updates in the case that it does not
     * If the connection of the concept id and type id combination is encountered first time then a node is created.
     * @param connection connection that needs to be added.
     */
    static addConnectionToTree(connection) {
        if (connection.id > 0) {
            let key = this.CreateCompositionKey(connection.typeId);
            if (this.connectionTypeRoot) {
                // let event = new Event(`${key}`);
                // // console.log("dispatched the of the concecpt event", event);
                // dispatchEvent(event);
                let existingNode = this.connectionTypeRoot.getFromNode(key, this.connectionTypeRoot);
                if (existingNode) {
                    let connectionList = existingNode === null || existingNode === void 0 ? void 0 : existingNode.value;
                    if (connectionList.length == 0) {
                        existingNode.value = [];
                    }
                    if (!connectionList.includes(connection.id)) {
                        connectionList.push(connection.id);
                    }
                }
                else {
                    let list = [];
                    list.push(connection.id);
                    let connectionNode = new _ConnectionTypeNode__WEBPACK_IMPORTED_MODULE_0__.ConnectionTypeNode(key, list, null, null);
                    this.addNodeToTree(connectionNode);
                }
            }
            else {
                let list = [];
                list.push(connection.id);
                let connectionNode = new _ConnectionTypeNode__WEBPACK_IMPORTED_MODULE_0__.ConnectionTypeNode(key, list, null, null);
                this.addNodeToTree(connectionNode);
            }
        }
        else {
            console.log("cannot insert key id with  n 0 to the connection tree", connection);
        }
    }
    // static async removeNodeFromTree(id:number){
    //     if(this.connectionTypeRoot){
    //         this.connectionTypeRoot = this.connectionTypeRoot.removeNode(this.connectionTypeRoot,id);
    //     }
    //   }
    // commented
    // static getNodeFromTree(id:number){
    //     if(this.connectionTypeRoot){
    //         let Node = this.connectionTypeRoot.getFromNode(id, this.connectionTypeRoot);
    //         return Node;
    //     }
    //     return this.connectionTypeRoot;
    // }
    static GetConnectionByOfTheConceptAndTypeId(ofTheConceptId, typeId) {
        let key = this.CreateCompositionKey(typeId);
        if (this.connectionTypeRoot) {
            let existingNode = this.connectionTypeRoot.getFromNode(key, this.connectionTypeRoot);
            if (existingNode) {
                return existingNode.value;
            }
        }
        return null;
    }
}
ConnectionTypeTree.connectionTypeRoot = null;


/***/ }),

/***/ "./src/DataStructures/ConnectionBinaryTree/NodePrimitive.ts":
/*!******************************************************************!*\
  !*** ./src/DataStructures/ConnectionBinaryTree/NodePrimitive.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodePrimitive: () => (/* binding */ NodePrimitive)
/* harmony export */ });
class NodePrimitive {
    constructor(key, value, leftNode, rightNode) {
        this.key = "";
        this.value = [];
        this.height = 1;
        this.key = key;
        this.value = value;
        this.leftNode = leftNode;
        this.rightNode = rightNode;
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
            let immediateSuccessor = this.inOrderSuccessor(passedNode.rightNode);
            passedNode.value = immediateSuccessor.value;
            passedNode.key = immediateSuccessor.key;
            passedNode.variants = immediateSuccessor.variants;
            passedNode.currentNode = immediateSuccessor.currentNode;
            passedNode.rightNode = this.removeNode(passedNode.rightNode, immediateSuccessor.key);
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

/***/ "./src/DataStructures/ConnectionData.ts":
/*!**********************************************!*\
  !*** ./src/DataStructures/ConnectionData.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConnectionData: () => (/* binding */ ConnectionData)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ "./src/app.ts");
/* harmony import */ var _Database_indexeddb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Database/indexeddb */ "./src/Database/indexeddb.ts");
/* harmony import */ var _Connection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Connection */ "./src/DataStructures/Connection.ts");
/* harmony import */ var _ConnectionBinaryTree_ConnectionBinaryTree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ConnectionBinaryTree/ConnectionBinaryTree */ "./src/DataStructures/ConnectionBinaryTree/ConnectionBinaryTree.ts");
/* harmony import */ var _ConnectionBinaryTree_ConnectionOfTheTree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ConnectionBinaryTree/ConnectionOfTheTree */ "./src/DataStructures/ConnectionBinaryTree/ConnectionOfTheTree.ts");
/* harmony import */ var _ConnectionBinaryTree_ConnectionTypeTree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ConnectionBinaryTree/ConnectionTypeTree */ "./src/DataStructures/ConnectionBinaryTree/ConnectionTypeTree.ts");
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
        let contains = false;
        for (let i = 0; i < this.connectionArray.length; i++) {
            if (this.connectionArray[i].id == connection.id) {
                contains = true;
            }
        }
        return contains;
    }
    static AddConnectionToStorage(connection) {
        (0,_Database_indexeddb__WEBPACK_IMPORTED_MODULE_1__.UpdateToDatabase)("connection", connection);
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
        // if(!connection.isTemp){
        //UpdateToDatabase("connection", connection);
        console.log('testing add connection', connection);
        _ConnectionBinaryTree_ConnectionBinaryTree__WEBPACK_IMPORTED_MODULE_3__.ConnectionBinaryTree.addConnectionToTree(connection);
        _ConnectionBinaryTree_ConnectionTypeTree__WEBPACK_IMPORTED_MODULE_5__.ConnectionTypeTree.addConnectionToTree(connection);
        _ConnectionBinaryTree_ConnectionOfTheTree__WEBPACK_IMPORTED_MODULE_4__.ConnectionOfTheTree.addConnection(connection);
    }
    static AddConnectionToMemory(connection) {
        if (!connection.isTemp) {
            _ConnectionBinaryTree_ConnectionBinaryTree__WEBPACK_IMPORTED_MODULE_3__.ConnectionBinaryTree.addConnectionToTree(connection);
            _ConnectionBinaryTree_ConnectionTypeTree__WEBPACK_IMPORTED_MODULE_5__.ConnectionTypeTree.addConnectionToTree(connection);
            _ConnectionBinaryTree_ConnectionOfTheTree__WEBPACK_IMPORTED_MODULE_4__.ConnectionOfTheTree.addConnection(connection);
        }
    }
    static AddToDictionary(connection) {
        this.connectionDictionary[connection.id] = connection;
    }
    static RemoveConnection(connection) {
        //    for(var i=0; i<this.connectionArray.length; i++){
        //     if(this.connectionArray[i].id == connection.id){
        //         this.connectionArray.splice(i, 1);
        //     }
        //    }
        if (connection.id != 0) {
            (0,_Database_indexeddb__WEBPACK_IMPORTED_MODULE_1__.removeFromDatabase)("connection", connection.id);
            _ConnectionBinaryTree_ConnectionBinaryTree__WEBPACK_IMPORTED_MODULE_3__.ConnectionBinaryTree.removeNodeFromTree(connection.id);
            // ConnectionTypeTree.removeTypeConcept(connection.typeId, connection.id);
            _ConnectionBinaryTree_ConnectionOfTheTree__WEBPACK_IMPORTED_MODULE_4__.ConnectionOfTheTree.removeNodeFromTree(connection.id);
        }
    }
    static GetConnectionTypeOfTree() {
        _ConnectionBinaryTree_ConnectionOfTheTree__WEBPACK_IMPORTED_MODULE_4__.ConnectionOfTheTree.node;
    }
    static GetConnectionByOfTheConceptAndType(ofTheConceptId, typeId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (_app__WEBPACK_IMPORTED_MODULE_0__.serviceWorker) {
                const res = yield (0,_app__WEBPACK_IMPORTED_MODULE_0__.sendMessage)("ConnectionData__GetConnectionByOfTheConceptAndType", { ofTheConceptId, typeId });
                console.log("data received from sw", res);
                return res.data;
            }
            let connections = _ConnectionBinaryTree_ConnectionOfTheTree__WEBPACK_IMPORTED_MODULE_4__.ConnectionOfTheTree.GetConnectionByOfTheConceptAndTypeId(ofTheConceptId, typeId);
            if (connections) {
                return connections;
            }
            return [];
        });
    }
    static GetConnectionByOfType(ofTheConceptId, typeId) {
        let connections = _ConnectionBinaryTree_ConnectionTypeTree__WEBPACK_IMPORTED_MODULE_5__.ConnectionTypeTree.GetConnectionByOfTheConceptAndTypeId(ofTheConceptId, typeId);
        if (connections) {
            return connections;
        }
        return [];
    }
    static GetConnectionTree() {
        return _ConnectionBinaryTree_ConnectionBinaryTree__WEBPACK_IMPORTED_MODULE_3__.ConnectionBinaryTree.connectionroot;
    }
    static GetConnectionTypeTree() {
        return _ConnectionBinaryTree_ConnectionTypeTree__WEBPACK_IMPORTED_MODULE_5__.ConnectionTypeTree.connectionTypeRoot;
    }
    static GetConnectionBulkData(ids, connectionArray, remainingIds) {
        return __awaiter(this, void 0, void 0, function* () {
            yield _ConnectionBinaryTree_ConnectionBinaryTree__WEBPACK_IMPORTED_MODULE_3__.ConnectionBinaryTree.getConnectionListFromIds(ids, connectionArray, remainingIds);
        });
    }
    static GetConnection(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (_app__WEBPACK_IMPORTED_MODULE_0__.serviceWorker) {
                const res = yield (0,_app__WEBPACK_IMPORTED_MODULE_0__.sendMessage)('ConnectionData__GetConnection', { id });
                console.log('data received from sw', res);
                return res.data;
            }
            //    var  myConcept: Connection|null;
            //    myConcept = null;
            //     for(var i=0; i<this.connectionArray.length; i++){
            //         if(this.connectionArray[i].id == id){
            //             myConcept = this.connectionArray[i];
            //         }
            //     }
            //     return myConcept;
            let myConnection = new _Connection__WEBPACK_IMPORTED_MODULE_2__.Connection(0, 0, 0, 0, 0, 0, 0);
            let node = yield _ConnectionBinaryTree_ConnectionBinaryTree__WEBPACK_IMPORTED_MODULE_3__.ConnectionBinaryTree.getNodeFromTree(id);
            if (node === null || node === void 0 ? void 0 : node.value) {
                let returnedConcept = node.value;
                if (returnedConcept) {
                    myConnection = returnedConcept;
                    //if(myConnection.count > IndexDbUpdate.MIN_USE_FOR_INDEX_DB){
                    // IndexDbUpdate.UpdateConnectionIndexDb(myConnection);
                    //}
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
    // commented
    static GetConnectionsOfCompositionLocal(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (_app__WEBPACK_IMPORTED_MODULE_0__.serviceWorker) {
                const res = yield (0,_app__WEBPACK_IMPORTED_MODULE_0__.sendMessage)("ConnectionData__GetConnectionsOfCompositionLocal", { id });
                console.log("data received from sw", res);
                return res.data;
            }
            let connections = [];
            let connectionIds = [];
            connectionIds = ConnectionData.GetConnectionByOfType(id, id);
            for (let i = 0; i < connectionIds.length; i++) {
                let conn = yield _ConnectionBinaryTree_ConnectionBinaryTree__WEBPACK_IMPORTED_MODULE_3__.ConnectionBinaryTree.getNodeFromTree(connectionIds[i]);
                if (conn) {
                    connections.push(conn.value);
                }
            }
            return connections;
            //let node = await ConnectionTypeTree.getNodeFromTree(id);
            // if(node?.value){
            //     let returnedConnection = node.value;
            //     if(returnedConnection){
            //         let myConnection = returnedConnection as Connection;
            //         connections.push(myConnection);
            //         for(let i=0; i<node.variants.length;i++){
            //             connections.push(node.variants[i].value);
            //         }
            //     }
            // }
            //return connections;
        });
    }
    static GetConnectionsOfConcept(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let connectionIds = [];
            let connections = [];
            connectionIds = yield ConnectionData.GetConnectionByOfTheConceptAndType(id, id);
            for (let i = 0; i < connectionIds.length; i++) {
                let conn = yield _ConnectionBinaryTree_ConnectionBinaryTree__WEBPACK_IMPORTED_MODULE_3__.ConnectionBinaryTree.getNodeFromTree(connectionIds[i]);
                if (conn) {
                    connections.push(conn.value);
                }
            }
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

/***/ "./src/DataStructures/FilterSearch.ts":
/*!********************************************!*\
  !*** ./src/DataStructures/FilterSearch.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterSearch: () => (/* binding */ FilterSearch)
/* harmony export */ });
class FilterSearch {
    constructor() {
        this.type = "";
        this.search = "";
        this.logicoperator = "=";
        this.index = 0;
        this.composition = true;
    }
}


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

/***/ "./src/DataStructures/Local/LConcept.ts":
/*!**********************************************!*\
  !*** ./src/DataStructures/Local/LConcept.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LConcept: () => (/* binding */ LConcept)
/* harmony export */ });
/* harmony import */ var _BaseUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BaseUrl */ "./src/DataStructures/BaseUrl.ts");

class LConcept {
    constructor(id, userId, typeId, categoryId, accessId, characterValue, typeCharacter, isNew = false, entryTimeStamp, updatedTimeStamp, referentId) {
        this.structureType = "lconcept";
        this.isComposition = false;
        this.isTemp = false;
        this.isSynced = false;
        // applicationId: number = BaseUrl.BASE_RANDOMIZER;
        this.applicationId = _BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.getRandomizer();
        this.id = id;
        this.userId = userId;
        this.typeId = typeId;
        this.ghostId = id;
        this.categoryId = categoryId;
        this.characterValue = characterValue;
        this.accessId = accessId;
        this.type = null;
        this.isNew = isNew;
        this.typeCharacter = typeCharacter;
        this.entryTimeStamp = entryTimeStamp;
        this.updatedTimeStamp = updatedTimeStamp;
        this.isSynced = false;
        this.referentId = referentId;
        // ConceptsData.AddConcept(this);
    }
    getType() {
        console.log(this.typeId);
    }
}


/***/ }),

/***/ "./src/DataStructures/Local/LConnection.ts":
/*!*************************************************!*\
  !*** ./src/DataStructures/Local/LConnection.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LConnection: () => (/* binding */ LConnection)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app */ "./src/app.ts");
/* harmony import */ var _BaseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BaseUrl */ "./src/DataStructures/BaseUrl.ts");


class LConnection {
    constructor(id, ofTheConceptId, toTheConceptId, typeId, orderId, accessId) {
        this.isTemp = false;
        // applicationId: number = BaseUrl.BASE_RANDOMIZER;
        this.applicationId = _BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.getRandomizer();
        this.type = (0,_app__WEBPACK_IMPORTED_MODULE_0__.CreateDefaultConcept)();
        this.id = id;
        this.ofTheConceptId = ofTheConceptId;
        this.toTheConceptId = toTheConceptId;
        this.typeId = typeId;
        this.ghostId = id;
        this.orderId = orderId;
        this.typeCharacter = "";
        this.accessId = accessId;
        this.typeCharacter = "";
        this.entryTimeStamp = new Date();
        this.terminationDateTime = new Date();
        this.localSyncTime = new Date();
    }
}


/***/ }),

/***/ "./src/DataStructures/Local/LNode.ts":
/*!*******************************************!*\
  !*** ./src/DataStructures/Local/LNode.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LNode: () => (/* binding */ LNode)
/* harmony export */ });
class LNode {
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
    updateNodeSyncStatus(id, value, node) {
        if (node) {
            if (id == node.key) {
                let lconcept = node.value;
                lconcept.isSynced = value;
                node.value = lconcept;
                return node;
            }
            else if (id < node.key) {
                return this.updateNodeSyncStatus(id, value, node.leftNode);
            }
            else if (id > node.key) {
                return this.updateNodeSyncStatus(id, value, node.rightNode);
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
    getFromNodeWithCharacterAndCategory(value, categoryId, node) {
        value = `${value}`;
        if (node) {
            if (value == node.key) {
                if (value == node.value.characterValue && categoryId == node.value.categoryId) {
                    return node;
                }
                else {
                    for (let i = 0; i < node.variants.length; i++) {
                        if (node.variants[i].value.categoryId == categoryId) {
                            return node.variants[i];
                        }
                    }
                    // return this.getFromNodeWithCharacterAndType(value, typeId, node.currentNode);
                }
            }
            else if (value < node.key) {
                return this.getFromNodeWithCharacterAndCategory(value, categoryId, node.leftNode);
            }
            else if (value > node.key) {
                return this.getFromNodeWithCharacterAndCategory(value, categoryId, node.rightNode);
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
/* harmony import */ var _Local_LNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Local/LNode */ "./src/DataStructures/Local/LNode.ts");
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
            var node = new _Local_LNode__WEBPACK_IMPORTED_MODULE_1__.LNode(concept.characterValue, concept, null, null);
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
                var Node = this.LocalCharacterRoot.getFromNodeWithCharacterAndType(value, typeId, this.LocalCharacterRoot);
                return Node;
            }
            return this.LocalCharacterRoot;
        });
    }
    static getCharacterAndCategoryFromTree(value, categoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var data = yield this.waitForDataToLoad();
            }
            catch (exception) {
                return null;
            }
            if (this.LocalCharacterRoot) {
                var Node = this.LocalCharacterRoot.getFromNodeWithCharacterAndCategory(value, categoryId, this.LocalCharacterRoot);
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
/* harmony import */ var _Local_LNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Local/LNode */ "./src/DataStructures/Local/LNode.ts");
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
        var node = new _Local_LNode__WEBPACK_IMPORTED_MODULE_1__.LNode(concept.id, concept, null, null);
        var characterNode = new _Local_LNode__WEBPACK_IMPORTED_MODULE_1__.LNode(concept.characterValue, concept, null, null);
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
    static updateSyncStatus(id) {
        if (this.root) {
            var Node = this.root.updateNodeSyncStatus(id, true, this.root);
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
/* harmony import */ var _LNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LNode */ "./src/DataStructures/Local/LNode.ts");
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
            var node = new _LNode__WEBPACK_IMPORTED_MODULE_1__.LNode(concept.typeId, concept, null, null);
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
                console.log("this is the node to type", Node);
                if (Node.value.userId == userId || Node.value.userId == 999) {
                    concepts.push(Node === null || Node === void 0 ? void 0 : Node.value);
                }
                for (let i = 0; i < Node.variants.length; i++) {
                    if (Node.variants[i].value.userId == userId || Node.value.userId == 999) {
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
/* harmony import */ var _Database_indexdblocal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Database/indexdblocal */ "./src/Database/indexdblocal.ts");
/* harmony import */ var _LocalBinaryTree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LocalBinaryTree */ "./src/DataStructures/Local/LocalBinaryTree.ts");
/* harmony import */ var _LocalBinaryCharacterTree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LocalBinaryCharacterTree */ "./src/DataStructures/Local/LocalBinaryCharacterTree.ts");
/* harmony import */ var _LocalBinaryTypeTree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LocalBinaryTypeTree */ "./src/DataStructures/Local/LocalBinaryTypeTree.ts");
/* harmony import */ var _Services_Local_CreateDefaultLConcept__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/Local/CreateDefaultLConcept */ "./src/Services/Local/CreateDefaultLConcept.ts");
/* harmony import */ var _ConceptData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ConceptData */ "./src/DataStructures/ConceptData.ts");
/* harmony import */ var _LocalGhostIdTree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LocalGhostIdTree */ "./src/DataStructures/Local/LocalGhostIdTree.ts");
/* harmony import */ var _LocalConnectionData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LocalConnectionData */ "./src/DataStructures/Local/LocalConnectionData.ts");
/* harmony import */ var _LocalSyncData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LocalSyncData */ "./src/DataStructures/Local/LocalSyncData.ts");
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
    static AddConcept(concept) {
        if (concept.id != 0) {
            (0,_Database_indexdblocal__WEBPACK_IMPORTED_MODULE_0__.UpdateToDatabase)("localconcept", concept);
            _LocalBinaryTree__WEBPACK_IMPORTED_MODULE_1__.LocalBinaryTree.addConceptToTree(concept);
            _LocalBinaryCharacterTree__WEBPACK_IMPORTED_MODULE_2__.LocalBinaryCharacterTree.addConceptToTree(concept);
            _LocalBinaryTypeTree__WEBPACK_IMPORTED_MODULE_3__.LocalBinaryTypeTree.addConceptToTree(concept);
            this.localconceptsArray.push(concept);
        }
    }
    static AddPermanentConcept(concept) {
        if (concept.id != 0) {
            _LocalBinaryTree__WEBPACK_IMPORTED_MODULE_1__.LocalBinaryTree.removeNodeFromTree(concept.ghostId);
            _LocalBinaryCharacterTree__WEBPACK_IMPORTED_MODULE_2__.LocalBinaryCharacterTree.removeConceptType(concept.characterValue, concept.ghostId);
            _LocalBinaryTypeTree__WEBPACK_IMPORTED_MODULE_3__.LocalBinaryTypeTree.removeConceptType(concept.typeId, concept.ghostId);
            _LocalGhostIdTree__WEBPACK_IMPORTED_MODULE_6__.LocalGhostIdTree.addConceptToTree(concept);
            let removeData = (0,_Database_indexdblocal__WEBPACK_IMPORTED_MODULE_0__.removeFromDatabase)("localconcept", concept.ghostId);
            _ConceptData__WEBPACK_IMPORTED_MODULE_5__.ConceptsData.AddConcept(concept);
        }
    }
    static RemoveConcept(concept) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (concept.id != 0) {
                    _LocalBinaryTree__WEBPACK_IMPORTED_MODULE_1__.LocalBinaryTree.removeNodeFromTree(concept.ghostId);
                    _LocalBinaryCharacterTree__WEBPACK_IMPORTED_MODULE_2__.LocalBinaryCharacterTree.removeConceptType(concept.characterValue, concept.ghostId);
                    _LocalBinaryTypeTree__WEBPACK_IMPORTED_MODULE_3__.LocalBinaryTypeTree.removeConceptType(concept.typeId, concept.ghostId);
                    yield (0,_Database_indexdblocal__WEBPACK_IMPORTED_MODULE_0__.removeFromDatabase)("localconcept", concept.ghostId);
                }
            }
            catch (error) {
                throw error;
            }
        });
    }
    static RemoveConceptById(conceptId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let concept = yield LocalConceptsData.GetConcept(conceptId);
                if (concept.id != 0) {
                    _LocalBinaryTree__WEBPACK_IMPORTED_MODULE_1__.LocalBinaryTree.removeNodeFromTree(conceptId);
                    _LocalBinaryCharacterTree__WEBPACK_IMPORTED_MODULE_2__.LocalBinaryCharacterTree.removeConceptType(concept.characterValue, concept.ghostId);
                    _LocalBinaryTypeTree__WEBPACK_IMPORTED_MODULE_3__.LocalBinaryTypeTree.removeConceptType(concept.typeId, concept.ghostId);
                    _LocalSyncData__WEBPACK_IMPORTED_MODULE_8__.LocalSyncData.RemoveConcept(concept);
                    // await removeFromDatabase("localconcept", concept.ghostId);
                }
            }
            catch (error) {
                throw error;
            }
        });
    }
    static AddConceptToMemory(concept) {
        if (concept.id != 0) {
            _LocalBinaryTree__WEBPACK_IMPORTED_MODULE_1__.LocalBinaryTree.addConceptToTree(concept);
            _LocalBinaryCharacterTree__WEBPACK_IMPORTED_MODULE_2__.LocalBinaryCharacterTree.addConceptToTree(concept);
            _LocalBinaryTypeTree__WEBPACK_IMPORTED_MODULE_3__.LocalBinaryTypeTree.addConceptToTree(concept);
        }
    }
    static GetConcept(id) {
        return __awaiter(this, void 0, void 0, function* () {
            var myConcept = (0,_Services_Local_CreateDefaultLConcept__WEBPACK_IMPORTED_MODULE_4__.CreateDefaultLConcept)();
            var node = yield _LocalBinaryTree__WEBPACK_IMPORTED_MODULE_1__.LocalBinaryTree.getNodeFromTree(id);
            if (node === null || node === void 0 ? void 0 : node.value) {
                var returnedConcept = node.value;
                if (returnedConcept) {
                    myConcept = returnedConcept;
                }
            }
            return myConcept;
        });
    }
    static UpdateConceptSyncStatus(id) {
        return __awaiter(this, void 0, void 0, function* () {
            _LocalBinaryTree__WEBPACK_IMPORTED_MODULE_1__.LocalBinaryTree.updateSyncStatus(id);
        });
    }
    static GetConceptByGhostId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            var myConcept = (0,_Services_Local_CreateDefaultLConcept__WEBPACK_IMPORTED_MODULE_4__.CreateDefaultLConcept)();
            var node = yield _LocalGhostIdTree__WEBPACK_IMPORTED_MODULE_6__.LocalGhostIdTree.getNodeFromTree(id);
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
            var concept = (0,_Services_Local_CreateDefaultLConcept__WEBPACK_IMPORTED_MODULE_4__.CreateDefaultLConcept)();
            //  for(var i=0; i<this.conceptsArray.length; i++){
            //      if(this.conceptsArray[i].characterValue == characterValue){
            //         concept = this.conceptsArray[i];
            //      }
            //  }
            var Node = _LocalBinaryCharacterTree__WEBPACK_IMPORTED_MODULE_2__.LocalBinaryCharacterTree.getNodeFromTree(characterValue);
            if (Node) {
                concept = Node.value;
            }
            return concept;
        });
    }
    static GetConceptByCharacterAndTypeLocal(character_value, typeId) {
        return __awaiter(this, void 0, void 0, function* () {
            var concept = (0,_Services_Local_CreateDefaultLConcept__WEBPACK_IMPORTED_MODULE_4__.CreateDefaultLConcept)();
            // let conceptList:Concept[] = await this.GetConceptsByTypeId(typeId);
            // for(var i=0;i<conceptList.length; i++){
            //     if(character_value == conceptList[i].characterValue){
            //         concept = conceptList[i];
            //     }
            // }
            var Node = yield _LocalBinaryCharacterTree__WEBPACK_IMPORTED_MODULE_2__.LocalBinaryCharacterTree.getCharacterAndTypeFromTree(character_value, typeId);
            if (Node) {
                concept = Node.value;
            }
            return concept;
        });
    }
    static GetConceptByCharacterAndCategoryLocal(character_value, categoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            var concept = (0,_Services_Local_CreateDefaultLConcept__WEBPACK_IMPORTED_MODULE_4__.CreateDefaultLConcept)();
            var Node = yield _LocalBinaryCharacterTree__WEBPACK_IMPORTED_MODULE_2__.LocalBinaryCharacterTree.getCharacterAndCategoryFromTree(character_value, categoryId);
            if (Node) {
                concept = Node.value;
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
            ConceptList = yield _LocalBinaryTypeTree__WEBPACK_IMPORTED_MODULE_3__.LocalBinaryTypeTree.getTypeVariantsFromTreeWithUserId(typeId, userId);
            return ConceptList;
        });
    }
    static ClearData() {
        return __awaiter(this, void 0, void 0, function* () {
            this.localconceptsArray = [];
            _LocalConnectionData__WEBPACK_IMPORTED_MODULE_7__.LocalConnectionData.connectionArray = [];
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
/* harmony import */ var _Services_Local_ConvertFromLConnectionToConnection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/Local/ConvertFromLConnectionToConnection */ "./src/Services/Local/ConvertFromLConnectionToConnection.ts");
/* harmony import */ var _ConnectionData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ConnectionData */ "./src/DataStructures/ConnectionData.ts");
/* harmony import */ var _IdentifierFlags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../IdentifierFlags */ "./src/DataStructures/IdentifierFlags.ts");
/* harmony import */ var _LocalSyncData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LocalSyncData */ "./src/DataStructures/Local/LocalSyncData.ts");
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
        if (connection.id != 0) {
            (0,_Database_indexdblocal__WEBPACK_IMPORTED_MODULE_0__.UpdateToDatabase)("localconnection", connection);
        }
        this.connectionArray.push(connection);
    }
    static AddConnectionToMemory(connection) {
        var contains = this.CheckContains(connection);
        if (contains) {
            this.RemoveConnection(connection);
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
    static RemoveConnectionById(connectionId) {
        for (var i = 0; i < this.connectionArray.length; i++) {
            if (this.connectionArray[i].id == connectionId) {
                this.connectionArray.splice(i, 1);
            }
        }
        _LocalSyncData__WEBPACK_IMPORTED_MODULE_4__.LocalSyncData.RemoveConnectionById(connectionId);
    }
    static AddPermanentConnection(connection) {
        if (connection.id > 0) {
            (0,_Database_indexdblocal__WEBPACK_IMPORTED_MODULE_0__.removeFromDatabase)("localconnection", connection.ghostId);
            _ConnectionData__WEBPACK_IMPORTED_MODULE_2__.ConnectionData.AddConnection((0,_Services_Local_ConvertFromLConnectionToConnection__WEBPACK_IMPORTED_MODULE_1__.ConvertFromLConnectionToConnection)(connection));
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
        if (_IdentifierFlags__WEBPACK_IMPORTED_MODULE_3__.IdentifierFlags.isLocalConnectionLoaded) {
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
    static GetConnectionOfCompositionAndTypeLocal(typeId, ofTheConceptId) {
        return __awaiter(this, void 0, void 0, function* () {
            var connectionList = [];
            try {
                var data = yield this.waitForDataToLoad();
                console.log("this is the connections", this.connectionArray, typeId, ofTheConceptId);
                for (var i = 0; i < this.connectionArray.length; i++) {
                    if (this.connectionArray[i].typeId == typeId && this.connectionArray[i].ofTheConceptId == ofTheConceptId) {
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

/***/ "./src/DataStructures/Local/LocalGhostIdTree.ts":
/*!******************************************************!*\
  !*** ./src/DataStructures/Local/LocalGhostIdTree.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalGhostIdTree: () => (/* binding */ LocalGhostIdTree)
/* harmony export */ });
/* harmony import */ var _IdentifierFlags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IdentifierFlags */ "./src/DataStructures/IdentifierFlags.ts");
/* harmony import */ var _Local_LNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Local/LNode */ "./src/DataStructures/Local/LNode.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class LocalGhostIdTree {
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
        var node = new _Local_LNode__WEBPACK_IMPORTED_MODULE_1__.LNode(concept.ghostId, concept, null, null);
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
            setTimeout(LocalGhostIdTree.checkFlag, 1000, resolve);
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
    static removeNodeFromTree(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.root) {
                this.root = this.root.removeNode(this.root, id);
            }
        });
    }
}
LocalGhostIdTree.root = null;


/***/ }),

/***/ "./src/DataStructures/Local/LocalId.ts":
/*!*********************************************!*\
  !*** ./src/DataStructures/Local/LocalId.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalId: () => (/* binding */ LocalId)
/* harmony export */ });
/* harmony import */ var _Database_indexdblocal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Database/indexdblocal */ "./src/Database/indexdblocal.ts");
/* harmony import */ var _Services_Local_CreateLocalBinaryTreeFromData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/Local/CreateLocalBinaryTreeFromData */ "./src/Services/Local/CreateLocalBinaryTreeFromData.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class LocalId {
    static AddConceptId(id) {
        this.localId = id.value;
        (0,_Database_indexdblocal__WEBPACK_IMPORTED_MODULE_0__.UpdateToDatabase)("localid", id);
    }
    /**
     *
     * This function will get the local concept id from the indexdb
     * @returns the local concept id
     */
    static getConceptId() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.localId) {
                    if (this.ReservedLocalId.length < 5) {
                        yield (0,_Services_Local_CreateLocalBinaryTreeFromData__WEBPACK_IMPORTED_MODULE_1__.PopulateTheLocalConceptsToMemory)().then(() => {
                            let finalLocalId = this.localId;
                            for (let j = 1; j < 10; j++) {
                                let localId = this.localId - j;
                                this.ReservedLocalId.push(localId);
                                finalLocalId = localId;
                            }
                            this.AddConceptId({ "id": 0, "value": finalLocalId });
                        }).catch((event) => {
                            console.log(" getid: cannot get the id from indexdb");
                            return -Math.floor(Math.random() * 100000000);
                        });
                        let id = this.ReservedLocalId[0];
                        this.ReservedLocalId.shift();
                        return id;
                    }
                    else {
                        let id = this.ReservedLocalId[0];
                        this.ReservedLocalId.shift();
                        return id;
                    }
                }
                else {
                    yield (0,_Services_Local_CreateLocalBinaryTreeFromData__WEBPACK_IMPORTED_MODULE_1__.PopulateTheLocalConceptsToMemory)().then(() => {
                        let finalLocalId = this.localId;
                        for (let j = 1; j < 10; j++) {
                            let localId = this.localId - j;
                            this.ReservedLocalId.push(localId);
                            finalLocalId = localId;
                        }
                        this.AddConceptId({ "id": 0, "value": finalLocalId });
                    });
                    return this.getConceptId();
                }
            }
            catch (error) {
                console.log(" getid: this is the eror in concept", error);
                return -Math.floor(Math.random() * 100000000);
            }
        });
    }
    /**
     *
     * @param object This is the object that needs to be updated
     */
    static AddConnectionId(object) {
        this.localConnectionId = object.value;
        //UpdateToDatabase("localid", id);
    }
    static getConnectionId() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.localConnectionId) {
                    if (this.ReservedConnectionId.length < 5) {
                        yield (0,_Services_Local_CreateLocalBinaryTreeFromData__WEBPACK_IMPORTED_MODULE_1__.PopulateTheLocalConnectionToMemory)().then(() => {
                            let finalLocalId = this.localConnectionId;
                            for (let j = 1; j < 10; j++) {
                                let localConId = this.localConnectionId - j;
                                this.ReservedConnectionId.push(localConId);
                                finalLocalId = localConId;
                            }
                        }).catch((event) => {
                            console.log("this is the new event", event);
                            return -Math.floor(Math.random() * 100000000);
                        });
                        let id = this.ReservedConnectionId[0];
                        this.ReservedConnectionId.shift();
                        return id;
                    }
                    else {
                        let id = this.ReservedConnectionId[0];
                        this.ReservedConnectionId.shift();
                        return id;
                    }
                }
                else {
                    yield (0,_Services_Local_CreateLocalBinaryTreeFromData__WEBPACK_IMPORTED_MODULE_1__.PopulateTheLocalConnectionToMemory)().then(() => {
                        let finalLocalId = this.localConnectionId;
                        for (let j = 1; j < 10; j++) {
                            let localConId = this.localConnectionId - j;
                            this.ReservedConnectionId.push(localConId);
                            finalLocalId = localConId;
                        }
                        this.AddConnectionId({ "id": 1, "value": finalLocalId });
                    });
                    return this.getConnectionId();
                }
            }
            catch (error) {
                return -Math.floor(Math.random() * 100000000);
            }
        });
    }
}
LocalId.ReservedLocalId = [];
LocalId.ReservedConnectionId = [];


/***/ }),

/***/ "./src/DataStructures/Local/LocalSyncData.ts":
/*!***************************************************!*\
  !*** ./src/DataStructures/Local/LocalSyncData.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalSyncData: () => (/* binding */ LocalSyncData)
/* harmony export */ });
/* harmony import */ var _Api_Create_CreateTheGhostConceptApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Api/Create/CreateTheGhostConceptApi */ "./src/Api/Create/CreateTheGhostConceptApi.ts");
/* harmony import */ var _Database_indexdblocal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Database/indexdblocal */ "./src/Database/indexdblocal.ts");
/* harmony import */ var _LocalConceptData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LocalConceptData */ "./src/DataStructures/Local/LocalConceptData.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app */ "./src/app.ts");
/* harmony import */ var _LocalConnectionData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LocalConnectionData */ "./src/DataStructures/Local/LocalConnectionData.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





class LocalSyncData {
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
        try {
            let contains = false;
            let existingConcept = LocalSyncData.CheckIfTheConceptIdExists(concept.id, this.conceptsSyncArray);
            if (existingConcept.id != 0) {
                contains = true;
            }
            if (!contains) {
                this.conceptsSyncArray.push(concept);
            }
        }
        catch (error) {
            throw error;
        }
    }
    static RemoveConcept(concept) {
        for (var i = 0; i < this.conceptsSyncArray.length; i++) {
            if (this.conceptsSyncArray[i].id == concept.id) {
                this.conceptsSyncArray.splice(i, 1);
            }
        }
    }
    static SyncDataOnline() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('sw triggered');
                if (_app__WEBPACK_IMPORTED_MODULE_3__.serviceWorker) {
                    const res = yield (0,_app__WEBPACK_IMPORTED_MODULE_3__.sendMessage)('LocalSyncData_SyncDataOnline', {});
                    return res.data;
                }
                let conceptsArray = this.conceptsSyncArray.slice();
                let connectionsArray = this.connectionSyncArray.slice();
                this.connectionSyncArray = [];
                this.conceptsSyncArray = [];
                let toSyncConcepts = [];
                for (let i = 0; i < conceptsArray.length; i++) {
                    //if(!conceptsArray[i].isSynced){
                    toSyncConcepts.push(conceptsArray[i]);
                    //}
                    // this is used to denote that the local concept has already been synced with the online db
                    yield _LocalConceptData__WEBPACK_IMPORTED_MODULE_2__.LocalConceptsData.UpdateConceptSyncStatus(conceptsArray[i].id);
                }
                //if(connectionsArray.length > 0){
                yield this.UpdateConceptListToIncludeRelatedConcepts(connectionsArray, toSyncConcepts);
                let result = yield (0,_Api_Create_CreateTheGhostConceptApi__WEBPACK_IMPORTED_MODULE_0__.CreateTheGhostConceptApi)(toSyncConcepts, connectionsArray);
                let concepts = result.concepts;
                let connections = result.connections;
                for (let i = 0; i < concepts.length; i++) {
                    _LocalConceptData__WEBPACK_IMPORTED_MODULE_2__.LocalConceptsData.AddPermanentConcept(concepts[i]);
                }
                for (let i = 0; i < connections.length; i++) {
                    _LocalConnectionData__WEBPACK_IMPORTED_MODULE_4__.LocalConnectionData.AddPermanentConnection(connections[i]);
                }
                //}
                return conceptsArray;
            }
            catch (error) {
                throw error;
            }
        });
    }
    //  static async  SyncDataOnline(){
    //     if(this.conceptsSyncArray.length > 0){
    //         let conceptsArray = this.conceptsSyncArray.slice();
    //         this.conceptsSyncArray = [];
    //         let concepts = await CreateTheGhostConceptApi(conceptsArray);
    //         for(let i =0 ; i< concepts.length; i++){
    //             LocalSyncData.ghostIdMap.set(concepts[i].ghostId,concepts[i].id);
    //             LocalConceptsData.AddPermanentConcept(concepts[i]);
    //         }
    //     }
    //      if(this.connectionSyncArray.length > 0){
    //         // for(let i =0 ; i<this.connectionSyncArray.length ; i++){
    //         //     console.log("create the connection in backend", this.connectionSyncArray[i].ofTheConceptId + "====" + this.connectionSyncArray[i].toTheConceptId);
    //         // }
    //         let connectionsArray = this.connectionSyncArray.slice();
    //         this.ConvertGhostIdsInConnections(connectionsArray);
    //         this.connectionSyncArray = [];
    //         await CreateTheGhostConnectionApi(connectionsArray);
    //     }
    //     return "done";
    //  }
    static ConvertGhostIdsInConnections(connectionArray) {
        var _a, _b, _c;
        for (let i = 0; i < connectionArray.length; i++) {
            let ofTheConceptId = connectionArray[i].ofTheConceptId;
            let toTheConceptId = connectionArray[i].toTheConceptId;
            let typeId = connectionArray[i].typeId;
            let newOfTheConceptId = (_a = LocalSyncData.ghostIdMap.get(ofTheConceptId)) !== null && _a !== void 0 ? _a : ofTheConceptId;
            let newToTheConceptId = (_b = LocalSyncData.ghostIdMap.get(toTheConceptId)) !== null && _b !== void 0 ? _b : toTheConceptId;
            let newTypeId = (_c = LocalSyncData.ghostIdMap.get(typeId)) !== null && _c !== void 0 ? _c : typeId;
            connectionArray[i].ofTheConceptId = newOfTheConceptId;
            connectionArray[i].toTheConceptId = newToTheConceptId;
            connectionArray[i].typeId = newTypeId;
        }
    }
    static UpdateConceptListToIncludeRelatedConcepts(connectionArray, conceptsArray) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < connectionArray.length; i++) {
                let ofTheConceptId = connectionArray[i].ofTheConceptId;
                let toTheConceptId = connectionArray[i].toTheConceptId;
                let typeId = connectionArray[i].typeId;
                if (ofTheConceptId < 0) {
                    let ofTheConcept = this.CheckIfTheConceptIdExists(ofTheConceptId, conceptsArray);
                    if (ofTheConcept.id == 0) {
                        ofTheConcept = yield _LocalConceptData__WEBPACK_IMPORTED_MODULE_2__.LocalConceptsData.GetConceptByGhostId(ofTheConceptId);
                        if (ofTheConcept.id != 0) {
                            if (ofTheConcept.id != ofTheConcept.ghostId) {
                                connectionArray[i].ofTheConceptId = ofTheConcept.id;
                            }
                        }
                        else {
                            ofTheConcept = yield _LocalConceptData__WEBPACK_IMPORTED_MODULE_2__.LocalConceptsData.GetConcept(ofTheConceptId);
                            // if this has already been synced before and is a composition type then do not send it again
                            // if(!ofTheConcept.isSynced && !ofTheConcept.isComposition){
                            this.AddConceptIfDoesNotExist(ofTheConcept, conceptsArray);
                            //   }
                        }
                    }
                }
                if (toTheConceptId < 0) {
                    let toTheConcept = this.CheckIfTheConceptIdExists(toTheConceptId, conceptsArray);
                    if (toTheConcept.id == 0) {
                        toTheConcept = yield _LocalConceptData__WEBPACK_IMPORTED_MODULE_2__.LocalConceptsData.GetConceptByGhostId(toTheConceptId);
                        if (toTheConcept.id != 0) {
                            if (toTheConcept.id != toTheConcept.ghostId) {
                                connectionArray[i].toTheConceptId = toTheConcept.id;
                            }
                        }
                        else {
                            toTheConcept = yield _LocalConceptData__WEBPACK_IMPORTED_MODULE_2__.LocalConceptsData.GetConcept(toTheConceptId);
                            // if this has already been synced before and is a composition type then do not send it again
                            //   if(!toTheConcept.isSynced && !toTheConcept.isComposition){
                            this.AddConceptIfDoesNotExist(toTheConcept, conceptsArray);
                            //   }
                        }
                    }
                }
                if (typeId < 0) {
                    let type = this.CheckIfTheConceptIdExists(typeId, conceptsArray);
                    if (type.id == 0) {
                        type = yield _LocalConceptData__WEBPACK_IMPORTED_MODULE_2__.LocalConceptsData.GetConceptByGhostId(typeId);
                        if (type.id != 0) {
                            if (type.id != type.ghostId) {
                                connectionArray[i].typeId = type.id;
                            }
                        }
                        else {
                            type = yield _LocalConceptData__WEBPACK_IMPORTED_MODULE_2__.LocalConceptsData.GetConcept(typeId);
                            // if this has already been synced before and is a composition type then do not send it again
                            //    if(!type.isSynced && !type.isComposition){
                            this.AddConceptIfDoesNotExist(type, conceptsArray);
                            //    }
                        }
                    }
                }
            }
        });
    }
    static AddConceptIfDoesNotExist(concept, conceptList = []) {
        let exists = false;
        for (let i = 0; i < conceptList.length; i++) {
            if (concept.ghostId == conceptList[i].ghostId) {
                exists = true;
            }
        }
        if (!exists) {
            conceptList.push(concept);
        }
    }
    static CheckIfTheConceptIdExists(id, conceptList = []) {
        let returnConcept = (0,_app__WEBPACK_IMPORTED_MODULE_3__.CreateDefaultLConcept)();
        for (let i = 0; i < conceptList.length; i++) {
            if (id == conceptList[i].ghostId || id == conceptList[i].id) {
                returnConcept = conceptList[i];
            }
        }
        return returnConcept;
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
    static RemoveConnectionById(connectionId) {
        for (var i = 0; i < this.connectionSyncArray.length; i++) {
            if (this.connectionSyncArray[i].id == connectionId) {
                this.connectionSyncArray.splice(i, 1);
            }
        }
    }
    static syncDataLocalDb() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.conceptsSyncArray.length > 0) {
                for (let i = 0; i < this.conceptsSyncArray.length; i++) {
                    (0,_Database_indexdblocal__WEBPACK_IMPORTED_MODULE_1__.UpdateToDatabase)("localconcept", this.conceptsSyncArray[i]);
                }
                this.conceptsSyncArray = [];
            }
            if (this.connectionSyncArray.length > 0) {
                for (let i = 0; i < this.connectionSyncArray.length; i++) {
                    (0,_Database_indexdblocal__WEBPACK_IMPORTED_MODULE_1__.UpdateToDatabase)("localconnection", this.connectionSyncArray[i]);
                }
                this.connectionSyncArray = [];
            }
            return "done";
        });
    }
}
LocalSyncData.conceptsSyncArray = [];
LocalSyncData.connectionSyncArray = [];
LocalSyncData.ghostIdMap = new Map();


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
        let contains = false;
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
        let LeftNode = node.leftNode;
        let RightNode = node.rightNode;
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
    checkIfIdsInNode(node, ids, connectionArray, remainingIds) {
        if (node) {
            if (ids.includes(node.key)) {
                connectionArray.push(node.value);
                // remainingIds[node.key] = true;
                let index = ids.indexOf(node.key);
                ids.splice(index, 1);
            }
            if (node.leftNode) {
                this.checkIfIdsInNode(node.leftNode, ids, connectionArray, remainingIds);
            }
            if (node.rightNode) {
                this.checkIfIdsInNode(node.rightNode, ids, connectionArray, remainingIds);
            }
        }
    }
    addCharacterNode(passedNode, node, height) {
        let debugFlag = false;
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
            let LeftNode = node.leftNode;
            let RightNode = node.rightNode;
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
                        let returner = this.rightRotate(node);
                        if (debugFlag) {
                            console.log("returning here 1 ", returner);
                        }
                        return returner;
                    }
                    else if (passedNode.key > node.leftNode.key) {
                        node.leftNode = this.leftRotate(node.leftNode);
                        let returner = this.rightRotate(node);
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
                        let returner = this.leftRotate(node);
                        if (debugFlag) {
                            console.log("returning here 3 ", returner);
                        }
                        return returner;
                    }
                    else if (passedNode.key < node.rightNode.key) {
                        node.rightNode = this.rightRotate(node.rightNode);
                        let returner = this.leftRotate(node);
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
        let debugFlag = false;
        if (passedNode.value.typeId != 0) {
            // if(passedNode.value.characterValue == "Default"){
            //     console.log("default here");
            //     debugFlag = true;
            // }
            if (node == null) {
                if (debugFlag) {
                    console.log("equal here", node);
                }
                console.log("adding the type node to the tree", passedNode);
                node = passedNode;
                return node;
            }
            let LeftNode = node.leftNode;
            let RightNode = node.rightNode;
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
                console.log("adding the type node to the tree down", passedNode);
                if (node.key == passedNode.key && node.key != 0 && node.value.id != passedNode.value.id) {
                    node.addCurrentNodeType(passedNode, node);
                }
                console.log("adding the type node to the tree last", node);
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
                        let returner = this.rightRotate(node);
                        if (debugFlag) {
                            console.log("returning here 1 ", returner);
                        }
                        return returner;
                    }
                    else if (passedNode.key > node.leftNode.key) {
                        node.leftNode = this.leftRotate(node.leftNode);
                        let returner = this.rightRotate(node);
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
                        let returner = this.leftRotate(node);
                        if (debugFlag) {
                            console.log("returning here 3 ", returner);
                        }
                        return returner;
                    }
                    else if (passedNode.key < node.rightNode.key) {
                        node.rightNode = this.rightRotate(node.rightNode);
                        let returner = this.leftRotate(node);
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
                // if(node.value.count){
                //     node.value.count++ ;
                // }
                // else{
                //     node.value.count = 1;
                // }
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
    getCharacterFromNodeUpdated(value, node) {
        var _a;
        if (node) {
            if (value == node.key || ((_a = node.value) === null || _a === void 0 ? void 0 : _a.typeId) == 51) {
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
    getFromNodeWithCharacterAndCategory(value, categoryId, node) {
        value = `${value}`;
        if (node) {
            if (value == node.key) {
                if (value == node.value.characterValue && categoryId == node.value.categoryId) {
                    return node;
                }
                else {
                    for (let i = 0; i < node.variants.length; i++) {
                        if (node.variants[i].value.categoryId == categoryId) {
                            return node.variants[i];
                        }
                    }
                    // return this.getFromNodeWithCharacterAndType(value, typeId, node.currentNode);
                }
            }
            else if (value < node.key) {
                return this.getFromNodeWithCharacterAndCategory(value, categoryId, node.leftNode);
            }
            else if (value > node.key) {
                return this.getFromNodeWithCharacterAndCategory(value, categoryId, node.rightNode);
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
            let immediateSuccessor = this.inOrderSuccessor(passedNode.rightNode);
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
                let newNode = passedNode.variants[0];
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
            let immediateSuccessor = this.inOrderSuccessor(passedNode.rightNode);
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

/***/ "./src/DataStructures/PatcherStructure.ts":
/*!************************************************!*\
  !*** ./src/DataStructures/PatcherStructure.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PatcherStructure: () => (/* binding */ PatcherStructure)
/* harmony export */ });
class PatcherStructure {
    constructor() {
        this.compositionId = 0;
        this.userId = 999;
        this.sessionId = 999;
        this.accessId = 4;
        this.ofTheCompositionId = 0;
        this.patchObject = {};
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
/* harmony export */   ReservedConnectionIds: () => (/* binding */ ReservedConnectionIds),
/* harmony export */   ReservedIds: () => (/* binding */ ReservedIds)
/* harmony export */ });
/* harmony import */ var _Api_GetReservedConnectionIds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Api/GetReservedConnectionIds */ "./src/Api/GetReservedConnectionIds.ts");
/* harmony import */ var _Api_GetReservedIds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Api/GetReservedIds */ "./src/Api/GetReservedIds.ts");
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
                var ids = yield (0,_Api_GetReservedIds__WEBPACK_IMPORTED_MODULE_1__.GetReservedIds)();
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
class ReservedConnectionIds {
    static getId() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.connectionIds.length < 5) {
                var connectionIds = yield (0,_Api_GetReservedConnectionIds__WEBPACK_IMPORTED_MODULE_0__.GetReservedConnectionIds)();
            }
            var id = this.connectionIds[0];
            this.connectionIds.shift();
            return id;
        });
    }
    static AddId(id) {
        if (!this.connectionIds.includes(id)) {
            this.connectionIds.push(id);
        }
    }
}
ReservedConnectionIds.connectionIds = [];


/***/ }),

/***/ "./src/DataStructures/Responses/ErrorResponse.ts":
/*!*******************************************************!*\
  !*** ./src/DataStructures/Responses/ErrorResponse.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FreeSchemaResponse: () => (/* binding */ FreeSchemaResponse)
/* harmony export */ });
/* harmony import */ var _BaseUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BaseUrl */ "./src/DataStructures/BaseUrl.ts");

/**
 * This is a class that is used to standardize the Response that is sent by FreeSchema.
 * This is done so that we do not have to send a HttpResponse codes.
 */
class FreeSchemaResponse {
    /**
     *
     * @param message this is the message for the response
     * @param ok  this is the status can be true or false boolean in case that request succeds or fails
     * @param status this is the standard http codes 200 for ok, 500 for internal error etc.
     * @param data  this is the standard data that can be anything.
     */
    constructor(message, ok, status, data) {
        this.url = _BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.BASE_URL;
        this.message = message;
        this.ok = ok;
        this.status = status;
        this.data = data;
    }
    /**
     * This function gets the message of the error
     * @returns
     */
    getMessage() {
        return this.message;
    }
    /**
     *
     * @param message This allows you to set a message variable in the FreeSchemaResponse
     * @returns
     */
    setMessage(message) {
        this.message = message;
        return this;
    }
    /**
     *
     * @returns status code of the FreeSchemaResponse
     */
    getStatus() {
        return this.status;
    }
    /**
     *
     * @param status standard http error codes (200 ok , 401 unauthorized, 500 internal server error etc.)
     * @returns
     */
    setStatus(status) {
        this.status = status;
        return this;
    }
    /**
     *
     * @returns returns the data for the request
     */
    getData() {
        return this.data;
    }
    /**
     *
     * @param data any type of data can be given here
     * @returns FreeSchemaReponse
     */
    setData(data) {
        this.data = data;
        return this;
    }
    /**
     *
     * @returns the status of the FreeSchemaReponse (either true or false)
     */
    getOk() {
        return this.ok;
    }
    /**
     *
     * @param status if the status is true then the response was successful else the success was not achieved.
     * @returns returns the FreeSchemaResponse
     */
    setOk(ok) {
        this.ok = ok;
        return this;
    }
    /**
     *
     * @returns the url that caused the error
     */
    getUrl() {
        return this.url;
    }
    /**
     *
     * @param url the url from which the error or response originates
     * @returns FreeSchemaResponse
     */
    setUrl(url) {
        this.url = url;
        return this;
    }
}


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

/***/ "./src/DataStructures/SearchQuery.ts":
/*!*******************************************!*\
  !*** ./src/DataStructures/SearchQuery.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchQuery: () => (/* binding */ SearchQuery)
/* harmony export */ });
class SearchQuery {
    constructor() {
        this.composition = 0;
        this.type = "";
        this.linker = "";
        this.inpage = 10;
        this.page = 1;
        this.listLinkers = [];
        this.fullLinkers = [];
        this.textSearch = "";
        this.logic = "or";
        this.reverse = false;
        this.doFilter = false;
        this.filterSearches = [];
        this.selectors = [];
    }
}


/***/ }),

/***/ "./src/DataStructures/Search/SearchStructure.ts":
/*!******************************************************!*\
  !*** ./src/DataStructures/Search/SearchStructure.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchStructure: () => (/* binding */ SearchStructure)
/* harmony export */ });
class SearchStructure {
    constructor() {
        this.type = "";
        this.search = "";
        this.composition = "";
        this.internalComposition = "";
        this.userId = 999;
        this.inpage = 10;
        this.page = 1;
        this.auth = true;
    }
}


/***/ }),

/***/ "./src/DataStructures/Security/TokenStorage.ts":
/*!*****************************************************!*\
  !*** ./src/DataStructures/Security/TokenStorage.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TokenStorage: () => (/* binding */ TokenStorage)
/* harmony export */ });
class TokenStorage {
}
TokenStorage.BearerAccessToken = "";


/***/ }),

/***/ "./src/DataStructures/Session/SessionData.ts":
/*!***************************************************!*\
  !*** ./src/DataStructures/Session/SessionData.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SessionData: () => (/* binding */ SessionData)
/* harmony export */ });
class SessionData {
    constructor() {
        this.id = "0";
        this.remote_address = "";
        this.server_port = "";
        this.server_address = "";
        this.server_name = "";
        this.server_software = "";
        this.http_user_agent = "";
        this.self = "";
        this.port = "";
        this.userId = "";
        this.email = "";
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
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app */ "./src/app.ts");
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
            console.log('sw triggered');
            if (_app__WEBPACK_IMPORTED_MODULE_5__.serviceWorker) {
                const res = yield (0,_app__WEBPACK_IMPORTED_MODULE_5__.sendMessage)('SyncData_SyncDataOnline', {});
                return res.data;
            }
            for (let i = 0; i < this.conceptsSyncArray.length; i++) {
                _ConceptData__WEBPACK_IMPORTED_MODULE_3__.ConceptsData.AddConcept(this.conceptsSyncArray[i]);
            }
            for (let i = 0; i < this.connectionSyncArray.length; i++) {
                _ConnectionData__WEBPACK_IMPORTED_MODULE_4__.ConnectionData.AddConnection(this.connectionSyncArray[i]);
            }
            if (this.conceptsSyncArray.length > 0) {
                let conceptsArray = this.conceptsSyncArray.slice();
                this.conceptsSyncArray = [];
                (0,_Api_Create_CreateTheConceptApi__WEBPACK_IMPORTED_MODULE_1__.CreateTheConceptApi)(conceptsArray);
            }
            if (this.connectionSyncArray.length > 0) {
                // for(let i =0 ; i<this.connectionSyncArray.length ; i++){
                //     console.log("create the connection in backend", this.connectionSyncArray[i].ofTheConceptId + "====" + this.connectionSyncArray[i].toTheConceptId);
                // }
                let connectionsArray = this.connectionSyncArray.slice();
                this.connectionSyncArray = [];
                yield (0,_Api_Create_CreateTheConnectionApi__WEBPACK_IMPORTED_MODULE_2__.CreateTheConnectionApi)(connectionsArray);
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

/***/ "./src/DataStructures/TypeNode.ts":
/*!****************************************!*\
  !*** ./src/DataStructures/TypeNode.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TypeNode: () => (/* binding */ TypeNode)
/* harmony export */ });
class TypeNode {
    constructor(key, value) {
        this.value = [];
        this.height = 1;
        this.key = key;
        this.value.push(value);
        this.leftNode = null;
        this.rightNode = null;
        this.currentNode = null;
    }
    addType(node, key, value) {
        var _a, _b, _c, _d;
        if (node == null) {
            return new TypeNode(key, value);
        }
        if (key < node.key) {
            node.leftNode = this.addType(node.leftNode, key, value);
        }
        else if (key > node.key) {
            node.rightNode = this.addType(node.rightNode, key, value);
        }
        else {
            // If key already exists, insert unique value into the set
            node.value.push(value);
            return node;
        }
        // Step 2: Update height of this ancestor node
        node.height = Math.max(this.getHeight(node.leftNode), this.getHeight(node.rightNode)) + 1;
        // Step 3: Get the balance factor to check if this node became unbalanced
        const balance = this.getBalanceFactor(node);
        // Step 4: If the node is unbalanced, perform rotations
        // Left Left Case (Right Rotation)
        if (balance > 1 && key < ((_a = node.leftNode) === null || _a === void 0 ? void 0 : _a.key)) {
            return this.rightRotate(node);
        }
        // Right Right Case (Left Rotation)
        if (balance < -1 && key > ((_b = node.rightNode) === null || _b === void 0 ? void 0 : _b.key)) {
            return this.leftRotate(node);
        }
        // Left Right Case (Left rotation, then right rotation)
        if (balance > 1 && key > ((_c = node.leftNode) === null || _c === void 0 ? void 0 : _c.key)) {
            node.leftNode = this.leftRotate(node.leftNode);
            return this.rightRotate(node);
        }
        // Right Left Case (Right rotation, then left rotation)
        if (balance < -1 && key < ((_d = node.rightNode) === null || _d === void 0 ? void 0 : _d.key)) {
            node.rightNode = this.rightRotate(node.rightNode);
            return this.leftRotate(node);
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
                // if(node.value.count){
                //     node.value.count++ ;
                // }
                // else{
                //     node.value.count = 1;
                // }
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
    removeNodeWithVariants(passedNode, key, conceptId) {
        if (passedNode == null) {
            return passedNode;
        }
        if (passedNode.key > key) {
            passedNode.leftNode = this.removeNodeWithVariants(passedNode.leftNode, key, conceptId);
            return passedNode;
        }
        else if (passedNode.key < key) {
            passedNode.rightNode = this.removeNodeWithVariants(passedNode.rightNode, key, conceptId);
            return passedNode;
        }
        if (passedNode.value.length > 0) {
            // in the condition that the main node is not equal to the checking value 
            for (let i = 0; i < passedNode.value.length; i++) {
                if (conceptId == passedNode.value[i]) {
                    passedNode.value.splice(i, 1);
                    return passedNode;
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
            let immediateSuccessor = this.inOrderSuccessor(passedNode.rightNode);
            passedNode.value = immediateSuccessor.value;
            passedNode.key = immediateSuccessor.key;
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

/***/ "./src/DataStructures/User/UserBinaryTree.ts":
/*!***************************************************!*\
  !*** ./src/DataStructures/User/UserBinaryTree.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserBinaryTree: () => (/* binding */ UserBinaryTree)
/* harmony export */ });
/* harmony import */ var _UserNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserNode */ "./src/DataStructures/User/UserNode.ts");
/* harmony import */ var _IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../IdentifierFlags */ "./src/DataStructures/IdentifierFlags.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class UserBinaryTree {
    static compositeKey(userId, sessionId) {
        let userHex = ('0000' + userId.toString(16).toUpperCase()).slice(-4);
        let sessionHex = ('0000' + sessionId.toString(16).toUpperCase()).slice(-4);
        return userHex + sessionHex;
    }
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
        if (_IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__.IdentifierFlags.isDataLoaded) {
            return resolve("done");
        }
        else {
            setTimeout(UserBinaryTree.checkFlag, 1000, resolve);
        }
    }
    ;
    static addConceptToTree(concept, userId, sessionId = 999) {
        let key = this.compositeKey(userId, sessionId);
        var node = new _UserNode__WEBPACK_IMPORTED_MODULE_0__.UserNode(key, concept, null, null);
        this.addNodeToTree(node);
    }
    static getNodeFromTree(userId, sessionId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var data = yield this.waitForDataToLoad();
            }
            catch (exception) {
                return null;
            }
            let key = this.compositeKey(userId, sessionId);
            if (this.root) {
                var Node = this.root.getFromNode(key, this.root);
                return Node;
            }
            return null;
        });
    }
    static removeNodeFromTree(userId_1) {
        return __awaiter(this, arguments, void 0, function* (userId, sessionId = 999) {
            if (this.root) {
                let key = this.compositeKey(userId, sessionId);
                this.root = this.root.removeNode(this.root, key);
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
UserBinaryTree.root = null;


/***/ }),

/***/ "./src/DataStructures/User/UserNode.ts":
/*!*********************************************!*\
  !*** ./src/DataStructures/User/UserNode.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserNode: () => (/* binding */ UserNode)
/* harmony export */ });
class UserNode {
    constructor(key, value, leftNode, rightNode) {
        this.value = [];
        this.height = 1;
        this.key = key;
        this.value.push(value);
        this.leftNode = leftNode;
        this.rightNode = rightNode;
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
        else {
            node.value.push(...passedNode.value);
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
            passedNode.rightNode = this.removeNode(passedNode.rightNode, immediateSuccessor.key);
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

/***/ "./src/Database/NoIndexDb.ts":
/*!***********************************!*\
  !*** ./src/Database/NoIndexDb.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AiUpdateFlag: () => (/* binding */ AiUpdateFlag),
/* harmony export */   GetStatsFromDatabase: () => (/* binding */ GetStatsFromDatabase),
/* harmony export */   getAllFromLocalDb: () => (/* binding */ getAllFromLocalDb),
/* harmony export */   getFromDatabaseWithType: () => (/* binding */ getFromDatabaseWithType),
/* harmony export */   getObjectsFromIndexDb: () => (/* binding */ getObjectsFromIndexDb),
/* harmony export */   openDatabase: () => (/* binding */ openDatabase),
/* harmony export */   removeFromDatabase: () => (/* binding */ removeFromDatabase),
/* harmony export */   storeToDatabase: () => (/* binding */ storeToDatabase)
/* harmony export */ });
/* harmony import */ var _DataStructures_SettingData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DataStructures/SettingData */ "./src/DataStructures/SettingData.ts");
/* harmony import */ var _indexeddb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indexeddb */ "./src/Database/indexeddb.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function openDatabase(databaseName) {
    return _indexeddb__WEBPACK_IMPORTED_MODULE_1__.IndexDb.db;
}
function storeToDatabase(databaseName, object) {
}
function GetStatsFromDatabase() {
    var settingsData = new _DataStructures_SettingData__WEBPACK_IMPORTED_MODULE_0__.SettingData(true);
    return settingsData;
}
function AiUpdateFlag(object) {
}
function getFromDatabaseWithType(databaseName, type, id) {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
function getObjectsFromIndexDb(databaseName) {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
function removeFromDatabase(databaseName, id) {
}
function getAllFromLocalDb(databaseName) {
    return __awaiter(this, void 0, void 0, function* () {
    });
}


/***/ }),

/***/ "./src/Database/indexdblocal.ts":
/*!**************************************!*\
  !*** ./src/Database/indexdblocal.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetLockStatus: () => (/* binding */ GetLockStatus),
/* harmony export */   LocalIndexDb: () => (/* binding */ LocalIndexDb),
/* harmony export */   LockTheDatabase: () => (/* binding */ LockTheDatabase),
/* harmony export */   UnlockDatabase: () => (/* binding */ UnlockDatabase),
/* harmony export */   UpdateToDatabase: () => (/* binding */ UpdateToDatabase),
/* harmony export */   getObjectsFromLocalIndexDb: () => (/* binding */ getObjectsFromLocalIndexDb),
/* harmony export */   openDatabase: () => (/* binding */ openDatabase),
/* harmony export */   removeFromDatabase: () => (/* binding */ removeFromDatabase),
/* harmony export */   storeToDatabase: () => (/* binding */ storeToDatabase)
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

/**
 * version of the database. If you want to change the database then you must update this version also.
 */
var version = 9;
/**
 * This class will help us store the indexdb  reference in memory and not go back to index db.
 */
class LocalIndexDb {
}
/**
 *
 * @param databaseName not required actually. This is not used you can pass anything.
 * @returns a promise that either resolves or rejects opening the database.
 */
function openDatabase(databaseName) {
    return new Promise(function (resolve, reject) {
        // if the indexdb is already initialized then you do not need to again initialize the db so you can get 
        // from memory.
        if (LocalIndexDb.db) {
            resolve(LocalIndexDb.db);
        }
        // the name of the database is passed here. We are statically passing the dbName with inputs from user
        // the BASE_URL is the api that the framework calls
        // the BASE_APPLICATION is a thing that differentiates an application from another so no two application create
        // and use the same index db.  
        let localDbName = _app__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.BASE_URL + "_FreeSchemaLocal" + _app__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.BASE_APPLICATION;
        const request = indexedDB.open(localDbName, version);
        // in case that the database is not opened then log the error.
        // then we delete the database that is already present with the name
        // then again try to create the database, since this is a temporary database so it might not matter
        // but this is a point that we might need to be careful about.
        // we then reject the promise and report this problem.
        request.onerror = (event) => {
            console.error("Why didn't you allow my web app to use IndexedDB?!", event);
            indexedDB.deleteDatabase(localDbName);
            openDatabase(databaseName);
            reject(event);
        };
        // in case that the database is allowed to be opened then we return the database object.
        request.onsuccess = function (event) {
            var target = event.target;
            LocalIndexDb.db = target.result;
            resolve(LocalIndexDb.db);
        };
        // in case that the version is upgraded then we delete all the old databases and then create a new database.
        // version upgrade is a way which we can clean up old databases and its structures.
        request.onupgradeneeded = (event) => {
            var target = event.target;
            var db = target.result;
            var conceptDb = "localconcept";
            var connectionDb = "localconnection";
            var idDb = "localid";
            console.log("this is the version upgrade", version);
            if (db.objectStoreNames.contains(conceptDb)) {
                db.deleteObjectStore(conceptDb);
            }
            if (db.objectStoreNames.contains(connectionDb)) {
                db.deleteObjectStore(connectionDb);
            }
            if (db.objectStoreNames.contains(idDb)) {
                db.deleteObjectStore(idDb);
            }
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
            if (!db.objectStoreNames.contains(idDb)) { // if there's no database name
                let objectStore = db.createObjectStore(idDb, { keyPath: 'id' }); // create it
                objectStore.transaction.oncomplete = (event) => {
                    // this is the event in which we initialize the local database
                    // we assume the start of the localconcept by -100, localconnection by -200 and a random value 
                    // which will enable us to identify this local database from others.
                    storeToDatabase(idDb, { "id": 0, "value": -100 });
                    storeToDatabase(idDb, { "id": 1, "value": -200 });
                    // storeToDatabase(idDb,{"id":3, "value": BaseUrl.BASE_RANDOMIZER});
                    storeToDatabase(idDb, { "id": 3, "value": _app__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.getRandomizer() });
                };
            }
            resolve(db);
        };
    });
}
function LockTheDatabase(databaseName) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("lock : locked db");
        yield UpdateToDatabase(databaseName, { "id": 4, "value": true });
    });
}
function UnlockDatabase(databaseName) {
    return __awaiter(this, void 0, void 0, function* () {
        yield UpdateToDatabase(databaseName, { "id": 4, "value": false });
        console.log("lock :locked opened");
    });
}
function GetLockStatus(databaseName) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let list = yield getObjectsFromLocalIndexDb(databaseName);
            console.log("lock :for lock locked", list);
            if (Array.isArray(list)) {
                console.log("lock : This is the list vallue", list[4].value);
                return list[4].value;
            }
            console.log("lock : This is not a list", Array.isArray(list));
            return false;
        }
        catch (error) {
            console.log("lock : this is the error", error);
        }
    });
}
/**
*  this function will return all the objects that are in the database
* @param databaseName name of the database
* @returns all the objects that are in the database
*/
function getObjectsFromLocalIndexDb(databaseName) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(function (resolve, reject) {
            openDatabase(databaseName).then((db) => {
                var concept;
                var ConceptList = [];
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
            }).catch((event) => {
                let errorObject = {
                    "status": 400,
                    "ok": false,
                    "message": "Cannot get objects from database because you cannot open the Local database",
                    "data": event
                };
                reject(errorObject);
            });
        });
    });
}
/**
 *
 * @param databaseName name of the database that you want to store data to.
 * @param object any object that can be stored but keep in mind it must follow the convention that we created
 * while creating the datbase.
 * @returns a promise that if a store is successful then the obejct is returned else rejects with the event.
 */
function storeToDatabase(databaseName, object) {
    return new Promise(function (resolve, reject) {
        openDatabase(databaseName).then((db) => {
            let transaction = db.transaction(databaseName, "readwrite");
            let objStore = transaction.objectStore(databaseName);
            const request = objStore.add(object);
            request.onsuccess = (event) => {
                resolve(object);
            };
            request.onerror = (event) => {
                let errorObject = {
                    "status": 400,
                    "ok": false,
                    "message": "Cannot store to the Local database " + databaseName,
                    "data": event,
                    "body": object
                };
                reject(errorObject);
            };
        }).catch((event) => {
            let errorObject = {
                "status": 400,
                "ok": false,
                "message": "Cannot store to database because you cannot open the Local database",
                "data": event
            };
            reject(errorObject);
        });
    });
}
/**
 *
 * @param databaseName name of the database
 * @param object this is the object that you want to update
 * @returns returns the object if it is updated successfully.
 */
function UpdateToDatabase(databaseName, object) {
    return new Promise(function (resolve, reject) {
        console.log("this is wriring to the database local", object);
        openDatabase(databaseName).then((db) => {
            let transaction = db.transaction(databaseName, "readwrite");
            let objStore = transaction.objectStore(databaseName);
            const request = objStore.put(object);
            request.onsuccess = (event) => {
                resolve(object);
            };
            request.onerror = (event) => {
                let errorObject = {
                    "status": 400,
                    "ok": false,
                    "message": "Cannot Update to the Local database" + databaseName,
                    "data": event,
                    "body": object
                };
                reject(errorObject);
            };
        }).catch((event) => {
            let errorObject = {
                "status": 400,
                "ok": false,
                "message": "Cannot update to database because you cannot open the Local database",
                "data": event
            };
            reject(errorObject);
        });
    });
}
//   /**
//  *  this function will return all the objects that are in the database 
//  * @param databaseName name of the database
//  * @returns all the objects that are in the database
//  */
// export async function getLConceptsFromLocalDb(databaseName:string){
//   return new Promise(function(resolve, reject){
//         var ConceptList:any[] = [];
//       openDatabase(databaseName).then(db=>{
//           let transaction = LocalIndexDb.db.transaction(databaseName, "readwrite") as IDBTransaction;
//           let objectStore =transaction.objectStore(databaseName) as IDBObjectStore;
//           var allobjects = objectStore.getAll();
//           allobjects.onsuccess = ()=> {
//             const readObjects = allobjects.result;
//             for(var i=0; i<readObjects.length; i++){
//                 ConceptList.push(readObjects[i]);
//             }
//             resolve(ConceptList); 
//         }
//       });
//   });
// }
/**
 *
 * @param databaseName name of the database
 * @param id the id that we need to remove from the database (this is the index)
 * @returns an id if the deletion is successful and error with even in case it cannot.
 */
function removeFromDatabase(databaseName, id) {
    return new Promise(function (resolve, reject) {
        openDatabase(databaseName).then((db) => {
            let transaction = db.transaction(databaseName, "readwrite");
            let objectStore = transaction.objectStore(databaseName);
            let getRequest = objectStore.delete(id);
            getRequest.onsuccess = function (event) {
                resolve(id);
            };
            getRequest.onerror = function (event) {
                let errorObject = {
                    "status": 400,
                    "ok": false,
                    "message": "Cannot Update to the Local database" + databaseName,
                    "data": event,
                    "body": id
                };
                reject(errorObject);
            };
        }).catch((event) => {
            let errorObject = {
                "status": 400,
                "ok": false,
                "message": "Cannot remove object from database because you cannot open the Local database",
                "data": event
            };
            reject(errorObject);
        });
    });
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
/* harmony export */   GetLastSettingsFromDatabase: () => (/* binding */ GetLastSettingsFromDatabase),
/* harmony export */   IndexDb: () => (/* binding */ IndexDb),
/* harmony export */   UpdateToDatabase: () => (/* binding */ UpdateToDatabase),
/* harmony export */   getObjectsFromIndexDb: () => (/* binding */ getObjectsFromIndexDb),
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


/**
 * version of the database. If you want to change the database then you must update this version also.
 */
var version = 9;
/**
 * This class will help us store the indexdb  reference in memory and not go back to index db.
 */
class IndexDb {
}
/**
 *
 * @param databaseName not required actually. This is not used you can pass anything.
 * @returns a promise that either resolves or rejects opening the database.
 */
function openDatabase(databaseName) {
    return new Promise(function (resolve, reject) {
        // if the indexdb is already initialized then you do not need to again initialize the db so you can get 
        // from memory.
        if (IndexDb.db) {
            resolve(IndexDb.db);
        }
        // the name of the database is passed here. We are statically passing the dbName with inputs from user
        // the BASE_URL is the api that the framework calls
        // the BASE_APPLICATION is a thing that differentiates an application from another so no two application create
        // and use the same index db.
        let dbName = _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.BASE_URL + "_FreeSchema" + _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_1__.BaseUrl.BASE_APPLICATION;
        // open the database.
        const request = indexedDB.open(dbName, version);
        // in case that the database is not opened then log the error.
        // then we delete the database that is already present with the name
        // then again try to create the database, since this is a temporary database so it might not matter
        // but this is a point that we might need to be careful about.
        // we then reject the promise and report this problem.
        request.onerror = (event) => {
            console.error("Why didn't you allow my web app to use IndexedDB?!", event);
            indexedDB.deleteDatabase(dbName);
            openDatabase(databaseName);
            reject(event);
        };
        // in case that the database is allowed to be opened then we return the database object.
        request.onsuccess = function (event) {
            let target = event.target;
            IndexDb.db = target.result;
            resolve(IndexDb.db);
        };
        // in case that the version is upgraded then we delete all the old databases and then create a new database.
        // version upgrade is a way which we can clean up old databases and its structures.
        request.onupgradeneeded = (event) => {
            let target = event.target;
            let db = target.result;
            let conceptDb = "concept";
            let connectionDb = "connection";
            let settings = "settings";
            console.log("this is the version update for index", version);
            if (db.objectStoreNames.contains(conceptDb)) {
                db.deleteObjectStore(conceptDb);
            }
            if (db.objectStoreNames.contains(connectionDb)) {
                db.deleteObjectStore(connectionDb);
            }
            if (db.objectStoreNames.contains(settings)) {
                db.deleteObjectStore(settings);
            }
            if (!db.objectStoreNames.contains(conceptDb)) { // if there's no database name
                let objectStore = db.createObjectStore(conceptDb, { keyPath: 'id' }); // create it
                objectStore.transaction.oncomplete = (event) => {
                    // you can do something here after the db has been created.
                };
            }
            if (!db.objectStoreNames.contains(connectionDb)) { // if there's no database name
                let objectStore = db.createObjectStore(connectionDb, { keyPath: 'id' }); // create it
                objectStore.transaction.oncomplete = (event) => {
                    // you can do something here after the db has been created.
                };
            }
            if (!db.objectStoreNames.contains(settings)) {
                let objectStore = db.createObjectStore(settings, { keyPath: 'id' }); // create it
                objectStore.transaction.oncomplete = (event) => {
                    // you can do something here after the db has been created.
                };
            }
            resolve(db);
        };
    });
}
/**
 *
 * @param databaseName name of the database that you want to store data to.
 * @param object any object that can be stored but keep in mind it must follow the convention that we created
 * while creating the datbase.
 * @returns a promise that if a store is successful then the obejct is returned else rejects with the event.
 */
function storeToDatabase(databaseName, object) {
    return new Promise(function (resolve, reject) {
        console.log("this is storing to the database", object);
        openDatabase(databaseName).then((db) => {
            if (object.id != 0) {
                let transaction = db.transaction(databaseName, "readwrite");
                let objStore = transaction.objectStore(databaseName);
                const request = objStore.add(object);
                request.onsuccess = (event) => {
                    resolve(object);
                };
                request.onerror = (event) => {
                    let errorObject = {
                        "status": 400,
                        "ok": false,
                        "message": "Cannot store to the database" + databaseName,
                        "data": event,
                        "body": object
                    };
                    reject(errorObject);
                };
            }
        }).catch((event) => {
            let errorObject = {
                "status": 400,
                "ok": false,
                "message": "Cannot store to the database because you cannot open the database",
                "data": event
            };
            reject(errorObject);
        });
    });
}
/**
  *
  * @param databaseName name of the database
  * @param object this is the object that you want to update
  * @returns returns the object if it is updated successfully.
  */
function UpdateToDatabase(databaseName, object) {
    return new Promise(function (resolve, reject) {
        console.log("this is wriring to the database", object);
        openDatabase(databaseName).then((db) => {
            let transaction = db.transaction(databaseName, "readwrite");
            let objStore = transaction.objectStore(databaseName);
            const request = objStore.put(object);
            request.onsuccess = (event) => {
                resolve(object);
            };
            request.onerror = (event) => {
                let errorObject = {
                    "status": 400,
                    "ok": false,
                    "message": "Cannot Update to the database" + databaseName,
                    "data": event,
                    "body": object
                };
                reject(errorObject);
            };
        }).catch((event) => {
            let errorObject = {
                "status": 400,
                "ok": false,
                "message": "Cannot update to database because you cannot open the database",
                "data": event
            };
            reject(errorObject);
        });
    });
}
/**
 *
 * @returns This returns the last object from the database.
 */
function GetLastSettingsFromDatabase() {
    return new Promise(function (resolve, reject) {
        let databaseName = "settings";
        openDatabase(databaseName).then((db) => {
            let transaction = db.transaction(databaseName, "readwrite");
            let objectStore = transaction.objectStore(databaseName);
            let allobjects = objectStore.getAll();
            allobjects.onsuccess = () => {
                let settingsData = new _DataStructures_SettingData__WEBPACK_IMPORTED_MODULE_0__.SettingData(false);
                let settingsArray = allobjects.result;
                for (let i = 0; i < settingsArray.length; i++) {
                    settingsData = settingsArray[i];
                    settingsData = settingsData;
                }
                resolve(settingsData);
            };
            allobjects.onerror = (event) => {
                reject(event);
            };
        }).catch((event) => {
            let errorObject = {
                "status": 400,
                "ok": false,
                "message": "Cannot get last object from database because you cannot open the database",
                "data": event
            };
            reject(errorObject);
        });
    });
}
/**
 *
 * @param object SettingData
 * @returns this will update the indexdb with the ai flag so that another time we do not have to pull
 *  ai data from the api.
 */
function AiUpdateFlag(object) {
    return new Promise(function (resolve, reject) {
        let databaseName = "settings";
        openDatabase(databaseName).then((db) => {
            let transaction = db.transaction(databaseName, "readwrite");
            let objStore = transaction.objectStore(databaseName);
            const request = objStore.put(object);
            request.onsuccess = (event) => {
                resolve(object);
            };
            request.onerror = (event) => {
                let errorObject = {
                    "status": 400,
                    "ok": false,
                    "message": "Cannot update AI flag",
                    "data": event,
                    "body": object
                };
                reject(errorObject);
            };
        })
            .catch((event) => {
            let errorObject = {
                "status": 400,
                "ok": false,
                "message": "Cannot update AI flag because you cannot open the database",
                "data": event
            };
            reject(errorObject);
        });
    });
}
/**
 *  this function will return all the objects that are in the database
 * @param databaseName name of the database
 * @returns all the objects that are in the database
 */
function getObjectsFromIndexDb(databaseName) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(function (resolve, reject) {
            openDatabase(databaseName).then((db) => {
                let ConceptList = [];
                let transaction = db.transaction(databaseName, "readwrite");
                let objectStore = transaction.objectStore(databaseName);
                let allobjects = objectStore.getAll();
                allobjects.onsuccess = () => {
                    const students = allobjects.result;
                    for (let i = 0; i < students.length; i++) {
                        ConceptList.push(students[i]);
                    }
                    resolve(ConceptList);
                };
            }).catch((event) => {
                let errorObject = {
                    "status": 400,
                    "ok": false,
                    "message": "Cannot get objects from the database because you cannot open the database",
                    "data": event
                };
                reject(errorObject);
            });
        });
    });
}
/**
 *
 * @param databaseName name of the database
 * @param id the id that we need to remove from the database (this is the index)
 * @returns an id if the deletion is successful and error with even in case it cannot.
 */
function removeFromDatabase(databaseName, id) {
    return new Promise(function (resolve, reject) {
        openDatabase(databaseName).then((db) => {
            let transaction = db.transaction(databaseName, "readwrite");
            let objectStore = transaction.objectStore(databaseName);
            const request = objectStore.delete(Number(id));
            request.onsuccess = function (event) {
                resolve(id);
            };
            request.onerror = (event) => {
                let errorObject = {
                    "status": 400,
                    "ok": false,
                    "message": "Cannot remove from the database" + databaseName,
                    "data": event
                };
                reject(errorObject);
            };
        }).catch((event) => {
            let errorObject = {
                "status": 400,
                "ok": false,
                "message": "Cannot remove from the database because you cannot open the database",
                "data": event,
                "body": id
            };
            reject(errorObject);
        });
    });
}


/***/ }),

/***/ "./src/Helpers/CheckIfExists.ts":
/*!**************************************!*\
  !*** ./src/Helpers/CheckIfExists.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckAllConnectionsConnectedInConnectionArray: () => (/* binding */ CheckAllConnectionsConnectedInConnectionArray),
/* harmony export */   CheckAllConnectionsConnectedInLConnectionArray: () => (/* binding */ CheckAllConnectionsConnectedInLConnectionArray),
/* harmony export */   CheckIfConceptsExistsInArray: () => (/* binding */ CheckIfConceptsExistsInArray),
/* harmony export */   CheckIfConnectionExistsInArray: () => (/* binding */ CheckIfConnectionExistsInArray),
/* harmony export */   CheckIfToTheConceptExistsInConnectionArray: () => (/* binding */ CheckIfToTheConceptExistsInConnectionArray),
/* harmony export */   CheckIfTypeConceptsExistsInArray: () => (/* binding */ CheckIfTypeConceptsExistsInArray),
/* harmony export */   CheckIfTypeLConceptsExistsInArray: () => (/* binding */ CheckIfTypeLConceptsExistsInArray)
/* harmony export */ });
/* harmony import */ var _DataStructures_Connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DataStructures/Connection */ "./src/DataStructures/Connection.ts");
/* harmony import */ var _Services_CreateDefaultConcept__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/CreateDefaultConcept */ "./src/Services/CreateDefaultConcept.ts");


function CheckIfConceptsExistsInArray(conceptList = [], concept) {
    let foundConcept = (0,_Services_CreateDefaultConcept__WEBPACK_IMPORTED_MODULE_1__.CreateDefaultConcept)();
    if (Array.isArray(conceptList)) {
        const check = conceptList.find(c => c.id === concept.id);
        if (check) {
            foundConcept = check;
        }
    }
    return foundConcept;
}
// export function CheckIfTypeConceptExistsInArray(
//   conceptList: Concept[] = [],
//   concept: Concept,
// ) {
//   let newConceptType = concept.type?.characterValue;
//   if(!newConceptType?.startsWith("the_")){
//     newConceptType = "the_" + newConceptType;
//   }
//   let startsWith = conceptList[i].type?.characterValue;
//   if(!startsWith?.startsWith("the_")){
//     startsWith = "the_" + startsWith;
//   }
//   let foundConcept = CreateDefaultConcept()
//   if (Array.isArray(conceptList)) {
//     const check = conceptList.find(c => c.typeId == concept.typeId)
//     if (check) {
//       foundConcept = check
//     }
//   }
//   return foundConcept
// }
function CheckIfTypeConceptsExistsInArray(conceptList = [], concept) {
    var _a, _b;
    let foundConcepts = [];
    let newConceptType = (_a = concept.type) === null || _a === void 0 ? void 0 : _a.characterValue;
    if (!(newConceptType === null || newConceptType === void 0 ? void 0 : newConceptType.startsWith("the_"))) {
        newConceptType = "the_" + newConceptType;
    }
    if (Array.isArray(conceptList)) {
        for (let i = 0; i < conceptList.length; i++) {
            let startsWith = (_b = conceptList[i].type) === null || _b === void 0 ? void 0 : _b.characterValue;
            if (!(startsWith === null || startsWith === void 0 ? void 0 : startsWith.startsWith("the_"))) {
                startsWith = "the_" + startsWith;
            }
            if (concept.typeId == conceptList[i].typeId || newConceptType == startsWith) {
                foundConcepts.push(conceptList[i]);
            }
        }
    }
    return foundConcepts;
}
function CheckIfTypeLConceptsExistsInArray(conceptList = [], concept) {
    let foundConcepts = [];
    let newConceptType = concept.typeCharacter;
    if (!(newConceptType === null || newConceptType === void 0 ? void 0 : newConceptType.startsWith("the_"))) {
        newConceptType = "the_" + newConceptType;
    }
    if (Array.isArray(conceptList)) {
        for (let i = 0; i < conceptList.length; i++) {
            let startsWith = conceptList[i].typeCharacter;
            if (!(startsWith === null || startsWith === void 0 ? void 0 : startsWith.startsWith("the_"))) {
                startsWith = "the_" + startsWith;
            }
            if (concept.typeId == conceptList[i].typeId || newConceptType == startsWith) {
                foundConcepts.push(conceptList[i]);
            }
        }
    }
    return foundConcepts;
}
function CheckIfConnectionExistsInArray(connectionList = [], connection) {
    let foundConnection = new _DataStructures_Connection__WEBPACK_IMPORTED_MODULE_0__.Connection(0, 0, 0, 0, 0, 0, 0);
    if (Array.isArray(connectionList)) {
        const check = connectionList.find(c => c.id === connection.id);
        if (check) {
            foundConnection = check;
        }
    }
    return foundConnection;
}
function CheckIfToTheConceptExistsInConnectionArray(connectionList = [], conceptId) {
    let foundConnection = new _DataStructures_Connection__WEBPACK_IMPORTED_MODULE_0__.Connection(0, 0, 0, 0, 0, 0, 0);
    if (Array.isArray(connectionList)) {
        const check = connectionList.find(c => c.toTheConceptId === conceptId);
        if (check) {
            foundConnection = check;
        }
        const toCheck = connectionList.find(c => c.ofTheConceptId === conceptId);
        if (toCheck) {
            foundConnection = toCheck;
        }
    }
    return foundConnection;
}
function CheckAllConnectionsConnectedInConnectionArray(connectionList = [], conceptId) {
    let foundConnections = [];
    if (Array.isArray(connectionList)) {
        const check = connectionList.find(c => c.toTheConceptId == conceptId);
        if (check) {
            foundConnections.push(check);
        }
        const toCheck = connectionList.find(c => c.ofTheConceptId == conceptId);
        if (toCheck) {
            foundConnections.push(toCheck);
        }
    }
    return foundConnections;
}
function CheckAllConnectionsConnectedInLConnectionArray(connectionList = [], conceptId) {
    let foundConnections = [];
    if (Array.isArray(connectionList)) {
        const check = connectionList.find(c => c.toTheConceptId == conceptId);
        if (check) {
            foundConnections.push(check);
        }
        const toCheck = connectionList.find(c => c.ofTheConceptId == conceptId);
        if (toCheck) {
            foundConnections.push(toCheck);
        }
    }
    return foundConnections;
}


/***/ }),

/***/ "./src/Helpers/RemoveFromArray.ts":
/*!****************************************!*\
  !*** ./src/Helpers/RemoveFromArray.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RemoveConceptFromList: () => (/* binding */ RemoveConceptFromList),
/* harmony export */   RemoveConnectionFromList: () => (/* binding */ RemoveConnectionFromList),
/* harmony export */   RemoveLConnectionFromList: () => (/* binding */ RemoveLConnectionFromList)
/* harmony export */ });
function RemoveConceptFromList(conceptList = [], concept) {
    if (Array.isArray(conceptList)) {
        conceptList.splice(conceptList.findIndex(function (i) {
            return i.id === concept.id;
        }), 1);
    }
}
function RemoveConnectionFromList(connectionList = [], connection) {
    if (Array.isArray(connectionList)) {
        connectionList.splice(connectionList.findIndex(function (i) {
            return i.id === connection.id;
        }), 1);
    }
}
function RemoveLConnectionFromList(connectionList = [], connection) {
    if (Array.isArray(connectionList)) {
        connectionList.splice(connectionList.findIndex(function (i) {
            return i.id === connection.id;
        }), 1);
    }
}


/***/ }),

/***/ "./src/Helpers/UniqueInsert.ts":
/*!*************************************!*\
  !*** ./src/Helpers/UniqueInsert.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InsertUniqueNumber)
/* harmony export */ });
function InsertUniqueNumber(Array, toInsert) {
    if (Array.indexOf(toInsert) === -1) {
        Array.push(toInsert);
    }
    return Array;
}


/***/ }),

/***/ "./src/ServiceWorker/actions/connectionActions.ts":
/*!********************************************************!*\
  !*** ./src/ServiceWorker/actions/connectionActions.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   connectionActions: () => (/* binding */ connectionActions)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app */ "./src/app.ts");
/* harmony import */ var _Services_Local_CreateConnectionBetweenTwoConceptsLocal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/Local/CreateConnectionBetweenTwoConceptsLocal */ "./src/Services/Local/CreateConnectionBetweenTwoConceptsLocal.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const connectionActions = {
    CreateConnectionBetweenTwoConcepts: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield (0,_app__WEBPACK_IMPORTED_MODULE_0__.CreateConnectionBetweenTwoConcepts)(payload.ofTheConcept, payload.toTheConcept, payload.linker, payload.both);
        return { success: true, data };
    }),
    // local
    CreateConnectionBetweenTwoConceptsLocal: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield (0,_Services_Local_CreateConnectionBetweenTwoConceptsLocal__WEBPACK_IMPORTED_MODULE_1__.CreateConnectionBetweenTwoConceptsLocal)(payload.ofTheConcept, payload.toTheConcept, payload.linker, payload.both);
        return { success: true, data };
    }),
    CreateTheConnectionLocal: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield (0,_app__WEBPACK_IMPORTED_MODULE_0__.CreateTheConnectionLocal)(payload.ofTheConceptId, payload.toTheConceptId, payload.typeId, payload.orderId, payload.typeString, payload.userId);
        return { success: true, data };
    }),
};


/***/ }),

/***/ "./src/ServiceWorker/actions/createActions.ts":
/*!****************************************************!*\
  !*** ./src/ServiceWorker/actions/createActions.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createActions: () => (/* binding */ createActions)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app */ "./src/app.ts");
/* harmony import */ var _Services_CreateTheComposition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/CreateTheComposition */ "./src/Services/CreateTheComposition.ts");
/* harmony import */ var _Services_Local_CreateTheConceptLocal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/Local/CreateTheConceptLocal */ "./src/Services/Local/CreateTheConceptLocal.ts");
/* harmony import */ var _Services_Local_MakeTheInstanceConceptLocal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/Local/MakeTheInstanceConceptLocal */ "./src/Services/Local/MakeTheInstanceConceptLocal.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




const createActions = {
    MakeTheInstanceConcept: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield (0,_app__WEBPACK_IMPORTED_MODULE_0__.MakeTheInstanceConcept)(payload.type, payload.referent, payload.composition, payload.userId, payload.passedAccessId, payload.passedSessionId, payload.referentId);
        return { success: true, data };
    }),
    MakeTheTypeConcept: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield (0,_app__WEBPACK_IMPORTED_MODULE_0__.MakeTheTypeConcept)(payload.typeString, payload.sessionId, payload.sessionUserId, payload.userId);
        return { success: true, data };
    }),
    CreateTheComposition: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield (0,_Services_CreateTheComposition__WEBPACK_IMPORTED_MODULE_1__["default"])(payload.json, payload.ofTheConceptId, payload.ofTheConceptUserId, payload.mainKey, payload.userId, payload.accessId, payload.sessionInformationId);
        return { success: true, data };
    }),
    // local
    MakeTheInstanceConceptLocal: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield (0,_Services_Local_MakeTheInstanceConceptLocal__WEBPACK_IMPORTED_MODULE_3__.MakeTheInstanceConceptLocal)(payload.type, payload.referent, payload.composition, payload.userId, payload.accessId, payload.sessionInformationId, payload.referentId);
        return { success: true, data };
    }),
    MakeTheTypeConceptLocal: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield (0,_app__WEBPACK_IMPORTED_MODULE_0__.MakeTheTypeConceptLocal)(payload.typeString, payload.sessionId, payload.sessionUserId, payload.userId);
        return { success: true, data };
    }),
    CreateTheConceptLocal: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield (0,_Services_Local_CreateTheConceptLocal__WEBPACK_IMPORTED_MODULE_2__["default"])(payload.referent, payload.typecharacter, payload.userId, payload.categoryId, payload.typeId, payload.accessId, payload.isComposition, payload.referentId);
        return { success: true, data };
    }),
    CreateTheCompositionLocal: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield (0,_app__WEBPACK_IMPORTED_MODULE_0__.CreateTheCompositionLocal)(payload.json, payload.ofTheConceptId, payload.ofTheConceptUserId, payload.mainKey, payload.userId, payload.accessId, payload.sessionInformationId, payload.automaticSync);
        return { success: true, data };
    })
};


/***/ }),

/***/ "./src/ServiceWorker/actions/deleteActions.ts":
/*!****************************************************!*\
  !*** ./src/ServiceWorker/actions/deleteActions.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteActions: () => (/* binding */ deleteActions)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app */ "./src/app.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const deleteActions = {
    DeleteConceptById: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield (0,_app__WEBPACK_IMPORTED_MODULE_0__.DeleteConceptById)(payload.id);
        return { success: true, data };
    }),
    DeleteConnectionById: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield (0,_app__WEBPACK_IMPORTED_MODULE_0__.DeleteConnectionById)(payload.id);
        return { success: true, data };
    }),
    DeleteConnectionByType: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield (0,_app__WEBPACK_IMPORTED_MODULE_0__.DeleteConnectionByType)(payload.id, payload.linker);
        return { success: true, data };
    }),
    // local
    DeleteConceptLocal: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield (0,_app__WEBPACK_IMPORTED_MODULE_0__.DeleteConceptLocal)(payload.id);
        return { success: true, data };
    }),
};


/***/ }),

/***/ "./src/ServiceWorker/actions/getActions.ts":
/*!*************************************************!*\
  !*** ./src/ServiceWorker/actions/getActions.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getActions: () => (/* binding */ getActions)
/* harmony export */ });
/* harmony import */ var _Api_GetConcept__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Api/GetConcept */ "./src/Api/GetConcept.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app */ "./src/app.ts");
/* harmony import */ var _Constants_general_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Constants/general.const */ "./src/Constants/general.const.ts");
/* harmony import */ var _Services_GetComposition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/GetComposition */ "./src/Services/GetComposition.ts");
/* harmony import */ var _Services_GetCompositionBulk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/GetCompositionBulk */ "./src/Services/GetCompositionBulk.ts");
/* harmony import */ var _Services_Local_GetTheConceptLocal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Services/Local/GetTheConceptLocal */ "./src/Services/Local/GetTheConceptLocal.ts");
/* harmony import */ var _WrapperFunctions_GetLinkObservable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../WrapperFunctions/GetLinkObservable */ "./src/WrapperFunctions/GetLinkObservable.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







const getActions = {
    GetConcept: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield (0,_Api_GetConcept__WEBPACK_IMPORTED_MODULE_0__.GetConcept)(payload.id);
        return { success: true, data };
    }),
    GetTheConcept: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield (0,_app__WEBPACK_IMPORTED_MODULE_1__.GetTheConcept)(payload.id, payload.userId);
        return { success: true, data };
    }),
    GetConnectionById: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield (0,_app__WEBPACK_IMPORTED_MODULE_1__.GetConnectionById)(payload.id);
        return { success: true, data };
    }),
    GetLink: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield (0,_app__WEBPACK_IMPORTED_MODULE_1__.GetLink)(payload.id, payload.linker, payload.inpage, payload.page);
        return { success: true, data };
    }),
    GetComposition: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield (0,_Services_GetComposition__WEBPACK_IMPORTED_MODULE_3__.GetComposition)(payload.id);
        return { success: true, data };
    }),
    GetCompositionList: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield (0,_app__WEBPACK_IMPORTED_MODULE_1__.GetCompositionList)(payload.compositionName, payload.userId, payload.inpage, payload.page);
        return { success: true, data };
    }),
    GetCompositionListWithId: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield (0,_app__WEBPACK_IMPORTED_MODULE_1__.GetCompositionListWithId)(payload.compositionName, payload.userId, payload.inpage, payload.page);
        return { success: true, data };
    }),
    GetCompositionById: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield (0,_Services_GetComposition__WEBPACK_IMPORTED_MODULE_3__.GetCompositionById)(payload.id);
        return { success: true, data };
    }),
    GetCompositionWithId: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield (0,_Services_GetComposition__WEBPACK_IMPORTED_MODULE_3__.GetCompositionWithId)(payload.id);
        return { success: true, data };
    }),
    GetConnectionBulk: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield (0,_app__WEBPACK_IMPORTED_MODULE_1__.GetConnectionBulk)(payload.connectionIds);
        return { success: true, data };
    }),
    GetConceptByCharacterAndType: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield (0,_app__WEBPACK_IMPORTED_MODULE_1__.GetConceptByCharacterAndType)(payload.characterValue, payload.typeId);
        return { success: true, data };
    }),
    GetConnectionOfTheConcept: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield (0,_app__WEBPACK_IMPORTED_MODULE_1__.GetConnectionOfTheConcept)(payload.typeId, payload.ofTheConceptId, payload.userId, payload.inpage, payload.page);
        return { success: true, data };
    }),
    GetAllConnectionsOfCompositionBulk: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield (0,_app__WEBPACK_IMPORTED_MODULE_1__.GetAllConnectionsOfCompositionBulk)(payload.composition_ids);
        return { success: true, data };
    }),
    GetCompositionFromConnectionsWithDataId: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield (0,_Services_GetCompositionBulk__WEBPACK_IMPORTED_MODULE_4__.GetCompositionFromConnectionsWithDataId)(payload.conceptIds, payload.connectionIds);
        return { success: true, data };
    }),
    GetCompositionFromConnectionsWithDataIdIndex: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield (0,_Services_GetCompositionBulk__WEBPACK_IMPORTED_MODULE_4__.GetCompositionFromConnectionsWithDataIdIndex)(payload.conceptIds, payload.connectionIds);
        return { success: true, data };
    }),
    // memory
    GetCompositionWithIdFromMemory: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield (0,_Services_GetComposition__WEBPACK_IMPORTED_MODULE_3__.GetCompositionWithIdFromMemory)(payload.id);
        return { success: true, data };
    }),
    GetCompositionWithIdAndDateFromMemory: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield (0,_Services_GetComposition__WEBPACK_IMPORTED_MODULE_3__.GetCompositionWithIdAndDateFromMemory)(payload.id);
        return { success: true, data };
    }),
    GetCompositionFromMemory: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield (0,_Services_GetComposition__WEBPACK_IMPORTED_MODULE_3__.GetCompositionFromMemory)(payload.id);
        return { success: true, data };
    }),
    // locals
    GetTheConceptLocal: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        console.log("sync actions sw");
        const data = yield (0,_Services_Local_GetTheConceptLocal__WEBPACK_IMPORTED_MODULE_5__.GetTheConceptLocal)(payload.id);
        return { success: true, data };
    }),
    GetCompositionLocal: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        console.log("sync actions sw");
        const data = yield (0,_app__WEBPACK_IMPORTED_MODULE_1__.GetCompositionLocal)(payload.id);
        return { success: true, data };
    }),
    GetCompositionLocalWithId: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        console.log("sync actions sw");
        const data = yield (0,_app__WEBPACK_IMPORTED_MODULE_1__.GetCompositionLocalWithId)(payload.id);
        return { success: true, data };
    }),
    GetCompositionListLocal: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        console.log("sync actions sw");
        const data = yield (0,_app__WEBPACK_IMPORTED_MODULE_1__.GetCompositionListLocal)(payload.compositionName, payload.userId);
        return { success: true, data };
    }),
    GetCompositionListLocalWithId: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        console.log("sync actions sw");
        const data = yield (0,_app__WEBPACK_IMPORTED_MODULE_1__.GetCompositionListLocalWithId)(payload.compositionName, payload.userId);
        return { success: true, data };
    }),
    GetConceptByCharacterAndCategoryLocal: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        console.log("sync actions sw");
        const data = yield (0,_app__WEBPACK_IMPORTED_MODULE_1__.GetConceptByCharacterAndCategoryLocal)(payload.character);
        return { success: true, data };
    }),
    // Connection Data class methods
    ConnectionData__GetConnectionByOfTheConceptAndType: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield _app__WEBPACK_IMPORTED_MODULE_1__.ConnectionData.GetConnectionByOfTheConceptAndType(payload.ofTheConceptId, payload.typeId);
        return { success: true, data };
    }),
    ConnectionData__GetConnection: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield _app__WEBPACK_IMPORTED_MODULE_1__.ConnectionData.GetConnection(payload.id);
        return { success: true, data };
    }),
    ConnectionData__GetConnectionsOfCompositionLocal: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield _app__WEBPACK_IMPORTED_MODULE_1__.ConnectionData.GetConnection(payload.id);
        return { success: true, data };
    }),
    // listeners
    GetLinkListener: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        let isSubscribed = false;
        return new Promise((resolve, reject) => {
            (0,_WrapperFunctions_GetLinkObservable__WEBPACK_IMPORTED_MODULE_6__.GetLinkListener)(payload.id, payload.linker, payload.inpage, payload.page, payload.format)
                .subscribe((value) => {
                var _a, _b;
                console.log("get link listener vaue", value);
                if (isSubscribed) {
                    console.log("isSubscribed", isSubscribed);
                    resolve({ success: true, data: value });
                    isSubscribed = true;
                }
                else {
                    console.log("is not isSubscribed", isSubscribed);
                    // broadcast the data with its unique id
                    _Constants_general_const__WEBPACK_IMPORTED_MODULE_2__.broadcastChannel.postMessage({
                        type: "GetLinkListener",
                        payload: {
                            id: (_a = payload === null || payload === void 0 ? void 0 : payload.listener) === null || _a === void 0 ? void 0 : _a.listenerId,
                            listenerId: (_b = payload === null || payload === void 0 ? void 0 : payload.listener) === null || _b === void 0 ? void 0 : _b.listenerId,
                            data: value,
                        }
                    });
                }
            })
                .catch((error) => {
                console.log("Error : ", error);
                reject("Error Occured");
            });
        });
    }),
};


/***/ }),

/***/ "./src/ServiceWorker/actions/index.ts":
/*!********************************************!*\
  !*** ./src/ServiceWorker/actions/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   connectionActions: () => (/* reexport safe */ _actions_connectionActions__WEBPACK_IMPORTED_MODULE_4__.connectionActions),
/* harmony export */   createActions: () => (/* reexport safe */ _actions_createActions__WEBPACK_IMPORTED_MODULE_2__.createActions),
/* harmony export */   deleteActions: () => (/* reexport safe */ _actions_deleteActions__WEBPACK_IMPORTED_MODULE_5__.deleteActions),
/* harmony export */   getActions: () => (/* reexport safe */ _actions_getActions__WEBPACK_IMPORTED_MODULE_0__.getActions),
/* harmony export */   searchActions: () => (/* reexport safe */ _actions_searchActions__WEBPACK_IMPORTED_MODULE_1__.searchActions),
/* harmony export */   syncActions: () => (/* reexport safe */ _actions_syncActions__WEBPACK_IMPORTED_MODULE_6__.syncActions),
/* harmony export */   updateActions: () => (/* reexport safe */ _actions_updateActions__WEBPACK_IMPORTED_MODULE_3__.updateActions)
/* harmony export */ });
/* harmony import */ var _actions_getActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/getActions */ "./src/ServiceWorker/actions/getActions.ts");
/* harmony import */ var _actions_searchActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/searchActions */ "./src/ServiceWorker/actions/searchActions.ts");
/* harmony import */ var _actions_createActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/createActions */ "./src/ServiceWorker/actions/createActions.ts");
/* harmony import */ var _actions_updateActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/updateActions */ "./src/ServiceWorker/actions/updateActions.ts");
/* harmony import */ var _actions_connectionActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/connectionActions */ "./src/ServiceWorker/actions/connectionActions.ts");
/* harmony import */ var _actions_deleteActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/deleteActions */ "./src/ServiceWorker/actions/deleteActions.ts");
/* harmony import */ var _actions_syncActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/syncActions */ "./src/ServiceWorker/actions/syncActions.ts");









/***/ }),

/***/ "./src/ServiceWorker/actions/searchActions.ts":
/*!****************************************************!*\
  !*** ./src/ServiceWorker/actions/searchActions.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   searchActions: () => (/* binding */ searchActions)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app */ "./src/app.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const searchActions = {
    SearchLinkMultipleAll: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield (0,_app__WEBPACK_IMPORTED_MODULE_0__.SearchLinkMultipleAll)(payload.searchQuery, payload.token, payload.caller, payload.format);
        return { success: true, data };
    }),
    RecursiveSearchApiRaw: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield (0,_app__WEBPACK_IMPORTED_MODULE_0__.RecursiveSearchApiRaw)(payload.composition, payload.listLinkers, payload.textSearch);
        return { success: true, data };
    })
};


/***/ }),

/***/ "./src/ServiceWorker/actions/syncActions.ts":
/*!**************************************************!*\
  !*** ./src/ServiceWorker/actions/syncActions.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   syncActions: () => (/* binding */ syncActions)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app */ "./src/app.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const syncActions = {
    SyncData_SyncDataOnline: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        console.log('sync actions sw');
        const data = yield _app__WEBPACK_IMPORTED_MODULE_0__.SyncData.SyncDataOnline();
        return { success: true, data };
    }),
    LocalSyncData_SyncDataOnline: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        console.log('sync actions sw');
        const data = yield _app__WEBPACK_IMPORTED_MODULE_0__.LocalSyncData.SyncDataOnline();
        return { success: true, data };
    })
};


/***/ }),

/***/ "./src/ServiceWorker/actions/updateActions.ts":
/*!****************************************************!*\
  !*** ./src/ServiceWorker/actions/updateActions.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateActions: () => (/* binding */ updateActions)
/* harmony export */ });
/* harmony import */ var _Services_Local_UpdateCompositionLocal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Services/Local/UpdateCompositionLocal */ "./src/Services/Local/UpdateCompositionLocal.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const updateActions = {
    UpdateCompositionLocal: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        yield (0,_Services_Local_UpdateCompositionLocal__WEBPACK_IMPORTED_MODULE_0__.UpdateCompositionLocal)(payload.patcherStructure);
        return { success: true };
    })
};


/***/ }),

/***/ "./src/Services/CheckForConnectionDeletion.ts":
/*!****************************************************!*\
  !*** ./src/Services/CheckForConnectionDeletion.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckForConnectionDeletion: () => (/* binding */ CheckForConnectionDeletion),
/* harmony export */   CheckForConnectionDeletionWithIds: () => (/* binding */ CheckForConnectionDeletionWithIds)
/* harmony export */ });
function CheckForConnectionDeletion(newConnections = [], oldConnections = []) {
    // for(let i=0; i<oldConnections.length; i++){
    //     if(Array.isArray(newConnections)){
    //         if(!newConnections.find(obj => obj.id === oldConnections[i].id)){
    //             ConnectionData.RemoveConnection(oldConnections[i]);
    //        }
    //     }
    // }
}
function CheckForConnectionDeletionWithIds(newConnectionIds = [], oldConnections = []) {
    // for(let i=0; i<oldConnections.length; i++){
    //     if(!newConnectionIds.includes(oldConnections[i].id)){
    //           ConnectionData.RemoveConnection(oldConnections[i]);
    //     }
    // }
}


/***/ }),

/***/ "./src/Services/Common/DelayFunction.ts":
/*!**********************************************!*\
  !*** ./src/Services/Common/DelayFunction.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DelayFunctionExecution: () => (/* binding */ DelayFunctionExecution)
/* harmony export */ });
/**
 *
 * @param ms The time required to wait before executing this function
 * @param callback This is the function that needs to be executed
 * @returns returns a promise for the resolve
 */
function DelayFunctionExecution(ms, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(callback);
        }, ms);
    });
}


/***/ }),

/***/ "./src/Services/Common/ErrorPosting.ts":
/*!*********************************************!*\
  !*** ./src/Services/Common/ErrorPosting.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HandleHttpError: () => (/* binding */ HandleHttpError),
/* harmony export */   HandleInternalError: () => (/* binding */ HandleInternalError)
/* harmony export */ });
/* harmony import */ var _DataStructures_Responses_ErrorResponse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DataStructures/Responses/ErrorResponse */ "./src/DataStructures/Responses/ErrorResponse.ts");

function HandleHttpError(response) {
    if (response.status == 401 || response.status == 406) {
        let errorResponse = new _DataStructures_Responses_ErrorResponse__WEBPACK_IMPORTED_MODULE_0__.FreeSchemaResponse(response.statusText, false, response.status, "");
        errorResponse.setUrl(response.url);
        throw errorResponse;
    }
    else if (response.status == 500) {
        let errorResponse = new _DataStructures_Responses_ErrorResponse__WEBPACK_IMPORTED_MODULE_0__.FreeSchemaResponse(response.statusText, false, response.status, "");
        errorResponse.setUrl(response.url);
        throw errorResponse;
    }
}
function HandleInternalError(error, url = "") {
    if (error.status) {
        let errorResponse = new _DataStructures_Responses_ErrorResponse__WEBPACK_IMPORTED_MODULE_0__.FreeSchemaResponse(error.message, false, error.status, error.stack);
        errorResponse.setUrl(url);
        throw errorResponse;
    }
    else {
        let errorResponse = new _DataStructures_Responses_ErrorResponse__WEBPACK_IMPORTED_MODULE_0__.FreeSchemaResponse(error.message, false, 500, error.stack);
        errorResponse.setUrl(url);
        throw errorResponse;
    }
    throw error;
}


/***/ }),

/***/ "./src/Services/Composition/BuildComposition.ts":
/*!******************************************************!*\
  !*** ./src/Services/Composition/BuildComposition.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   recursiveFetchNew: () => (/* binding */ recursiveFetchNew)
/* harmony export */ });
/* harmony import */ var _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DataStructures/ConceptData */ "./src/DataStructures/ConceptData.ts");
/* harmony import */ var _Services_CreateDefaultConcept__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/CreateDefaultConcept */ "./src/Services/CreateDefaultConcept.ts");
/* harmony import */ var _Services_GetTheConcept__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/GetTheConcept */ "./src/Services/GetTheConcept.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



// this is a different type of recurisve fetch because here all the concepts and connections are passed as it is
// so there is no need to query the connections and concepts from outside
// if the concept connection is not found then it will go to the backend to fetch it
function recursiveFetchNew(id_1, connectionList_1, conceptList_1, compositionList_1) {
    return __awaiter(this, arguments, void 0, function* (id, connectionList, conceptList, compositionList, visitedConcepts = []) {
        var _a, _b;
        let output = {};
        const arroutput = [];
        if (id == 0) {
            return '';
        }
        // get concept from a list of concepts
        let concept = getConceptFromList(conceptList, id);
        // if we cannot find the concept from the concept list then find it from the backend
        if ((concept == null || concept.id == 0) && id != null && id != undefined) {
            // get the concepts tries to find it from the binary tree else from the backend if cannot find it then
            // it will become null
            const conceptString = yield (0,_Services_GetTheConcept__WEBPACK_IMPORTED_MODULE_2__["default"])(id);
            concept = conceptString;
        }
        if (concept.id != 0) {
            // if the concept type is non existent then you have to get the type from the backend
            if (concept.type == null) {
                // get the concept type id from the concept which is stored in typeId
                const toConceptTypeId = concept.typeId;
                //
                let toConceptType = getConceptFromList(conceptList, toConceptTypeId);
                concept.type = toConceptType;
                if (toConceptType == null &&
                    toConceptTypeId != null &&
                    toConceptTypeId != undefined) {
                    const conceptString = yield (0,_Services_GetTheConcept__WEBPACK_IMPORTED_MODULE_2__["default"])(toConceptTypeId);
                    toConceptType = conceptString;
                    concept.type = toConceptType;
                }
            }
        }
        //let mainString = concept?.type?.characterValue ?? ''
        if (!compositionList.includes(id)) {
            return concept === null || concept === void 0 ? void 0 : concept.characterValue;
        }
        else {
            if (visitedConcepts.includes(id)) {
                return "";
            }
            else {
                visitedConcepts.push(id);
            }
            // loop over all the connections
            for (let i = 0; i < connectionList.length; i++) {
                // if the connection has the id that has been passed in the recursion
                // oftheconceptId -----> toTheConceptId
                // this only gives the valid concept id that are inside of this id
                if (connectionList[i].ofTheConceptId == id) {
                    // then take out the toTheConceptId from the connection
                    const toConceptId = connectionList[i].toTheConceptId;
                    if (compositionList.includes(id)) {
                        // convert the toTheConceptId to a real Concept Object
                        let toConcept = getConceptFromList(conceptList, toConceptId);
                        // get the concept
                        if ((toConcept == null || toConcept.id == 0) &&
                            toConceptId != null &&
                            toConceptId != undefined) {
                            const conceptString = yield (0,_Services_GetTheConcept__WEBPACK_IMPORTED_MODULE_2__["default"])(toConceptId);
                            toConcept = conceptString;
                        }
                        // if the toConcept is valid
                        if (toConcept.id != 0) {
                            if ((toConcept === null || toConcept === void 0 ? void 0 : toConcept.type) == null) {
                                // get the type in casee type is not defined
                                const toConceptTypeId = toConcept.typeId;
                                let toConceptType = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_0__.ConceptsData.GetConcept(toConceptTypeId);
                                toConcept.type = toConceptType;
                                if (toConceptType == null &&
                                    toConceptTypeId != null &&
                                    toConceptTypeId != undefined) {
                                    const conceptString = yield (0,_Services_GetTheConcept__WEBPACK_IMPORTED_MODULE_2__["default"])(toConceptTypeId);
                                    toConceptType = conceptString;
                                    toConcept.type = toConceptType;
                                }
                            }
                        }
                        // the regex to filter out the the_ from the type concepts
                        const regex = 'the_';
                        // then create the key of the key value pair that is the type of the concept
                        const localmainString = (_b = (_a = toConcept === null || toConcept === void 0 ? void 0 : toConcept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : '';
                        // replace the the_ with an empty string
                        const localKey = localmainString.replace(regex, '');
                        // if the  type  is a number then put it inside of an object
                        if (isNaN(Number(localKey))) {
                            if (localKey) {
                                const result = yield recursiveFetchNew(toConceptId, connectionList, conceptList, compositionList, visitedConcepts);
                                output[localKey] = result;
                            }
                        }
                        else {
                            // if the type is a number then put it inside an array
                            const result = yield recursiveFetchNew(toConceptId, connectionList, conceptList, compositionList, visitedConcepts);
                            arroutput[localKey] = result;
                            output = arroutput;
                        }
                    }
                }
            }
        }
        return output;
    });
}
// gets the concept from the list of concepts using the conceptId
function getConceptFromList(conceptList, conceptId) {
    let concept = (0,_Services_CreateDefaultConcept__WEBPACK_IMPORTED_MODULE_1__.CreateDefaultConcept)();
    for (let i = 0; i < conceptList.length; i++) {
        if (conceptId == conceptList[i].id) {
            concept = conceptList[i];
            return concept;
        }
    }
    return concept;
}


/***/ }),

/***/ "./src/Services/Composition/CompositionCache.ts":
/*!******************************************************!*\
  !*** ./src/Services/Composition/CompositionCache.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetCompositionWithCache: () => (/* binding */ GetCompositionWithCache),
/* harmony export */   GetCompositionWithDataIdBulk: () => (/* binding */ GetCompositionWithDataIdBulk),
/* harmony export */   GetCompositionWithDataIdWithCache: () => (/* binding */ GetCompositionWithDataIdWithCache)
/* harmony export */ });
/* harmony import */ var _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DataStructures/ConceptData */ "./src/DataStructures/ConceptData.ts");
/* harmony import */ var _Api_GetAllConnectionsOfComposition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Api/GetAllConnectionsOfComposition */ "./src/Api/GetAllConnectionsOfComposition.ts");
/* harmony import */ var _Api_GetConnectionBulk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Api/GetConnectionBulk */ "./src/Api/GetConnectionBulk.ts");
/* harmony import */ var _Api_GetConcept__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Api/GetConcept */ "./src/Api/GetConcept.ts");
/* harmony import */ var _BuildComposition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BuildComposition */ "./src/Services/Composition/BuildComposition.ts");
/* harmony import */ var _GetComposition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../GetComposition */ "./src/Services/GetComposition.ts");
/* harmony import */ var _DataStructures_Composition_Composition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../DataStructures/Composition/Composition */ "./src/DataStructures/Composition/Composition.ts");
/* harmony import */ var _DataStructures_Composition_CompositionBinaryTree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../DataStructures/Composition/CompositionBinaryTree */ "./src/DataStructures/Composition/CompositionBinaryTree.ts");
/* harmony import */ var _Api_GetConceptBulk__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Api/GetConceptBulk */ "./src/Api/GetConceptBulk.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};









// get the composition with the passed id
// here an optional parameter is passed which will pass the internal connections if given
// else the function is designed to get the internal connections itself
function GetCompositionWithCache(id_1) {
    return __awaiter(this, arguments, void 0, function* (id, connectionListPassed = []) {
        var _a, _b;
        let connectionList = [];
        const conceptIdList = [];
        let returnOutput = {};
        let output = {};
        const x = yield _DataStructures_Composition_CompositionBinaryTree__WEBPACK_IMPORTED_MODULE_7__.CompositionBinaryTree.getNodeFromTree(id);
        const compositionList = [];
        let concept = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_0__.ConceptsData.GetConcept(id);
        if (concept.id == 0 && id != null && id != undefined) {
            const conceptString = yield (0,_Api_GetConcept__WEBPACK_IMPORTED_MODULE_3__.GetConcept)(id);
            concept = conceptString;
        }
        if (x == null) {
            let connectionListString = [];
            if (connectionListPassed.length > 0) {
                connectionListString = getMyConnections(id, connectionListPassed);
            }
            else {
                connectionListString = yield (0,_Api_GetAllConnectionsOfComposition__WEBPACK_IMPORTED_MODULE_1__.GetAllConnectionsOfComposition)(id);
            }
            connectionList = connectionListString;
            //connectionList = ConnectionData.GetConnectionsOfComposition(id);
            for (let i = 0; i < connectionList.length; i++) {
                if (!compositionList.includes(connectionList[i].ofTheConceptId)) {
                    compositionList.push(connectionList[i].ofTheConceptId);
                    conceptIdList.push(connectionList[i].ofTheConceptId);
                }
                if (!conceptIdList.includes(connectionList[i].toTheConceptId)) {
                    conceptIdList.push(connectionList[i].toTheConceptId);
                }
            }
            SaveToCompositionCache(concept, connectionList, conceptIdList, compositionList);
            let visitedConcepts = [];
            output = yield (0,_GetComposition__WEBPACK_IMPORTED_MODULE_5__.recursiveFetch)(id, connectionList, compositionList, visitedConcepts);
            const mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : '';
            returnOutput[mainString] = output;
        }
        else {
            output = x.value.GetDataCache();
            returnOutput = output;
        }
        if (concept.id == 0) {
            return '';
        }
        return returnOutput;
    });
}
// this gets the list of connections of a composition from a list of bulk connection pull
function getMyConnections(id, connectionList) {
    const connections = [];
    for (let i = 0; i < connectionList.length; i++) {
        if (connectionList[i].typeId == id) {
            connections.push(connectionList[i]);
        }
    }
    return connections;
}
// get the composition with the passed id
// here an optional parameter is passed which will pass the internal connections if given
// else the function is designed to get the internal connections itself
// this function has a  format of data -- id
function GetCompositionWithDataIdWithCache(id_1) {
    return __awaiter(this, arguments, void 0, function* (id, connectionListPassed = []) {
        var _a, _b;
        let FinalReturn = {};
        let connectionList = [];
        const conceptIdList = [];
        let output;
        const returnOutput = {};
        const x = yield _DataStructures_Composition_CompositionBinaryTree__WEBPACK_IMPORTED_MODULE_7__.CompositionBinaryTree.getNodeFromTree(id);
        const compositionList = [];
        let concept = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_0__.ConceptsData.GetConcept(id);
        if (concept.id == 0 && id != null && id != undefined) {
            const conceptString = yield (0,_Api_GetConcept__WEBPACK_IMPORTED_MODULE_3__.GetConcept)(id);
            concept = conceptString;
        }
        if (x == null) {
            let connectionListString = [];
            if (connectionListPassed.length > 0) {
                connectionListString = getMyConnections(id, connectionListPassed);
            }
            else {
                connectionListString = yield (0,_Api_GetAllConnectionsOfComposition__WEBPACK_IMPORTED_MODULE_1__.GetAllConnectionsOfComposition)(id);
            }
            connectionList = connectionListString;
            //connectionList = ConnectionData.GetConnectionsOfComposition(id);
            for (let i = 0; i < connectionList.length; i++) {
                if (!compositionList.includes(connectionList[i].ofTheConceptId)) {
                    compositionList.push(connectionList[i].ofTheConceptId);
                    conceptIdList.push(connectionList[i].ofTheConceptId);
                }
                if (!conceptIdList.includes(connectionList[i].toTheConceptId)) {
                    conceptIdList.push(connectionList[i].toTheConceptId);
                }
            }
            SaveToCompositionCache(concept, connectionList, conceptIdList, compositionList);
            output = yield (0,_GetComposition__WEBPACK_IMPORTED_MODULE_5__.recursiveFetch)(id, connectionList, compositionList);
            const mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : '';
            returnOutput[mainString] = output;
            FinalReturn["created_at"] = concept.entryTimeStamp;
            FinalReturn['data'] = returnOutput;
            FinalReturn['id'] = id;
        }
        else {
            output = x.value.GetDataCache();
            FinalReturn = output;
        }
        if (concept.id == 0) {
            return '';
        }
        return FinalReturn;
    });
}
// this function needs to be passed with bulk compositions and bulk internal connections of them
// so that i can conver them to actual list of compositions
function GetCompositionWithDataIdBulk(ids, connections) {
    return __awaiter(this, void 0, void 0, function* () {
        let connectionList = [];
        const compositions = [];
        const newConnections = yield (0,_Api_GetConnectionBulk__WEBPACK_IMPORTED_MODULE_2__.GetConnectionBulk)(connections);
        connectionList = newConnections;
        for (let i = 0; i < ids.length; i++) {
            const output = yield GetCompositionWithDataIdWithCache(ids[i], connectionList);
            if (output) {
                compositions.push(output);
            }
        }
        return compositions;
    });
}
function SaveToCompositionCache(concept, connections, conceptIdList, numbers) {
    return __awaiter(this, void 0, void 0, function* () {
        const composition = new _DataStructures_Composition_Composition__WEBPACK_IMPORTED_MODULE_6__.Composition();
        const concepts = yield BulkConceptGetter(conceptIdList);
        composition.connections = connections;
        composition.concepts = concepts;
        composition.id = concept.id;
        composition.subcompositions = numbers;
        composition.mainConcept = concept;
        let visitedConcepts = [];
        const output = yield (0,_BuildComposition__WEBPACK_IMPORTED_MODULE_4__.recursiveFetchNew)(concept.id, connections, concepts, numbers, visitedConcepts);
        composition.cached = output;
        _DataStructures_Composition_CompositionBinaryTree__WEBPACK_IMPORTED_MODULE_7__.CompositionBinaryTree.addCompositionToTree(composition);
    });
}
function BulkConceptGetter(conceptIds) {
    return __awaiter(this, void 0, void 0, function* () {
        let conceptList = [];
        const bulkConceptFetch = [];
        for (let i = 0; i < (conceptIds === null || conceptIds === void 0 ? void 0 : conceptIds.length); i++) {
            const conceptUse = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_0__.ConceptsData.GetConcept(conceptIds[i]);
            if (conceptUse.id == 0) {
                bulkConceptFetch.push(conceptIds[i]);
            }
            else {
                conceptList.push(conceptUse);
            }
        }
        if ((bulkConceptFetch === null || bulkConceptFetch === void 0 ? void 0 : bulkConceptFetch.length) == 0) {
            return conceptList;
        }
        else {
            conceptList = yield (0,_Api_GetConceptBulk__WEBPACK_IMPORTED_MODULE_8__.BulkConceptGetterApi)(bulkConceptFetch);
        }
        return conceptList;
    });
}


/***/ }),

/***/ "./src/Services/Composition/CreateCompositionCache.ts":
/*!************************************************************!*\
  !*** ./src/Services/Composition/CreateCompositionCache.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateTheCompositionWithCache: () => (/* binding */ CreateTheCompositionWithCache)
/* harmony export */ });
/* harmony import */ var _CreateDefaultConcept__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CreateDefaultConcept */ "./src/Services/CreateDefaultConcept.ts");
/* harmony import */ var _DataStructures_Composition_Composition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../DataStructures/Composition/Composition */ "./src/DataStructures/Composition/Composition.ts");
/* harmony import */ var _MakeTheInstanceConcept__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MakeTheInstanceConcept */ "./src/Services/MakeTheInstanceConcept.ts");
/* harmony import */ var _Services_CreateTheConnection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/CreateTheConnection */ "./src/Services/CreateTheConnection.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




// create a composition with caching mechanism
function CreateTheCompositionWithCache(json_1) {
    return __awaiter(this, arguments, void 0, function* (json, ofTheConceptId = null, ofTheConceptUserId = null, mainKey = null, userId = null, accessId = null, sessionInformationId = null, composition = null) {
        const localUserId = userId !== null && userId !== void 0 ? userId : 999;
        const localAccessId = accessId !== null && accessId !== void 0 ? accessId : 4;
        const localSessionId = sessionInformationId !== null && sessionInformationId !== void 0 ? sessionInformationId : 999;
        let MainKeyLocal = mainKey !== null && mainKey !== void 0 ? mainKey : 0;
        let MainConcept = (0,_CreateDefaultConcept__WEBPACK_IMPORTED_MODULE_0__.CreateDefaultConcept)();
        if (composition == null) {
            // if no composition is passed then create a new composition
            composition = new _DataStructures_Composition_Composition__WEBPACK_IMPORTED_MODULE_1__.Composition();
        }
        for (const key in json) {
            if (typeof json[key] == 'object' || Array.isArray(json[key])) {
                const conceptString = yield (0,_MakeTheInstanceConcept__WEBPACK_IMPORTED_MODULE_2__["default"])(key, '', true, localUserId, localAccessId, localSessionId);
                const concept = conceptString;
                // if (typeof json[key] != 'string' && typeof json[key] != 'number') {
                if (ofTheConceptId == null && ofTheConceptUserId == null) {
                    // if there is no parent conceptId and conceptUserId passed then we know this is the main concept
                    // everything is related to this concept.
                    let localMainKey = MainKeyLocal;
                    MainConcept = concept;
                    localMainKey = concept.id;
                    MainKeyLocal = concept.id;
                    composition.concepts.push(concept);
                    composition.id = concept.id;
                    yield CreateTheCompositionWithCache(json[key], concept.id, concept.userId, localMainKey, userId, accessId, sessionInformationId, composition);
                }
                else {
                    // this is the concept which has parent passed onto it and this is a subcomposition
                    const ofThe = ofTheConceptId !== null && ofTheConceptId !== void 0 ? ofTheConceptId : 999;
                    const ofTheUser = ofTheConceptUserId !== null && ofTheConceptUserId !== void 0 ? ofTheConceptUserId : 999;
                    const localMainKey = MainKeyLocal;
                    MainConcept = concept;
                    composition.concepts.push(concept);
                    const connectionString = yield (0,_Services_CreateTheConnection__WEBPACK_IMPORTED_MODULE_3__.createTheConnection)(ofThe, ofTheUser, concept.id, localMainKey);
                    const connection = connectionString;
                    composition.connections.push(connection);
                    yield CreateTheCompositionWithCache(json[key], concept.id, concept.userId, localMainKey, userId, accessId, sessionInformationId, composition);
                }
                if (json[key] != null && json[key] != undefined) {
                    composition.subcompositions.push(concept.id);
                }
            }
            else {
                // this is the part where the concept is now a key value pair and has the actual data
                const ofThe = ofTheConceptId !== null && ofTheConceptId !== void 0 ? ofTheConceptId : 999;
                const ofTheUser = ofTheConceptUserId !== null && ofTheConceptUserId !== void 0 ? ofTheConceptUserId : 999;
                const localMainKey = MainKeyLocal;
                const conceptString = yield (0,_MakeTheInstanceConcept__WEBPACK_IMPORTED_MODULE_2__["default"])(key, json[key], false, localUserId, localAccessId, localSessionId);
                const concept = conceptString;
                composition.concepts.push(concept);
                const connectionString = yield (0,_Services_CreateTheConnection__WEBPACK_IMPORTED_MODULE_3__.createTheConnection)(ofThe, ofTheUser, concept.id, localMainKey);
                const connection = connectionString;
                composition.connections.push(connection);
            }
        }
        // return the main concept
        return MainConcept;
    });
}


/***/ }),

/***/ "./src/Services/ConceptFinding/GetConceptByCharacterAndCategory.ts":
/*!*************************************************************************!*\
  !*** ./src/Services/ConceptFinding/GetConceptByCharacterAndCategory.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetConceptByCharacter: () => (/* binding */ GetConceptByCharacter),
/* harmony export */   GetConceptByCharacterAndCategory: () => (/* binding */ GetConceptByCharacterAndCategory),
/* harmony export */   GetConceptByCharacterAndCategoryFromMemory: () => (/* binding */ GetConceptByCharacterAndCategoryFromMemory)
/* harmony export */ });
/* harmony import */ var _Api_GetConceptByCharacterValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Api/GetConceptByCharacterValue */ "./src/Api/GetConceptByCharacterValue.ts");
/* harmony import */ var _Api_SearchConcept_GetConceptByCharacterAndCategoryDirect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Api/SearchConcept/GetConceptByCharacterAndCategoryDirect */ "./src/Api/SearchConcept/GetConceptByCharacterAndCategoryDirect.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app */ "./src/app.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function GetConceptByCharacterAndCategory(character) {
    return __awaiter(this, void 0, void 0, function* () {
        let concept = (0,_app__WEBPACK_IMPORTED_MODULE_2__.CreateDefaultConcept)();
        if (character == "the") {
            concept.id = 1;
            concept.typeId = 5;
            concept.characterValue = "the";
            return concept;
        }
        let splittedStringArray = (0,_app__WEBPACK_IMPORTED_MODULE_2__.SplitStrings)(character);
        if (splittedStringArray.length > 1) {
            let category = 1;
            let prefix = yield GetConceptByCharacterAndCategory(splittedStringArray[0]);
            if (prefix.id != 0) {
                category = prefix.id;
            }
            concept = yield GetConceptByCharacterAndCategoryFromMemory(character, category);
        }
        else if (splittedStringArray[0] == character) {
            concept = yield GetConceptByCharacter(character);
        }
        return concept;
    });
}
function GetConceptByCharacter(characterValue) {
    return __awaiter(this, void 0, void 0, function* () {
        let concept = yield _app__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConceptByCharacterAndTypeLocal(characterValue, 51);
        if (concept.id == 0) {
            concept = yield (0,_Api_GetConceptByCharacterValue__WEBPACK_IMPORTED_MODULE_0__.GetConceptByCharacterValue)(characterValue);
        }
        return concept;
    });
}
function GetConceptByCharacterAndCategoryFromMemory(character, category) {
    return __awaiter(this, void 0, void 0, function* () {
        let concept = yield _app__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConceptByCharacterAndCategoryLocal(character, category);
        if (concept.id == 0) {
            concept = yield (0,_Api_SearchConcept_GetConceptByCharacterAndCategoryDirect__WEBPACK_IMPORTED_MODULE_1__.GetConceptByCharacterAndCategoryDirectApi)(character, category);
        }
        return concept;
    });
}


/***/ }),

/***/ "./src/Services/Conversion/ConvertConcepts.ts":
/*!****************************************************!*\
  !*** ./src/Services/Conversion/ConvertConcepts.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertFromConceptToLConcept: () => (/* binding */ convertFromConceptToLConcept),
/* harmony export */   convertFromConnectionToLConnection: () => (/* binding */ convertFromConnectionToLConnection),
/* harmony export */   convertFromLConceptToConcept: () => (/* binding */ convertFromLConceptToConcept)
/* harmony export */ });
/* harmony import */ var _DataStructures_Connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DataStructures/Connection */ "./src/DataStructures/Connection.ts");
/* harmony import */ var _CreateDefaultConcept__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CreateDefaultConcept */ "./src/Services/CreateDefaultConcept.ts");
/* harmony import */ var _Local_CreateDefaultLConcept__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Local/CreateDefaultLConcept */ "./src/Services/Local/CreateDefaultLConcept.ts");



function convertFromConceptToLConcept(concept) {
    var _a, _b;
    const LConcept = (0,_Local_CreateDefaultLConcept__WEBPACK_IMPORTED_MODULE_2__.CreateDefaultLConcept)();
    LConcept.id = concept.id;
    LConcept.ghostId = concept.ghostId;
    LConcept.userId = concept.userId;
    LConcept.accessId = concept.accessId;
    LConcept.categoryId = concept.categoryId;
    LConcept.characterValue = concept.characterValue;
    LConcept.entryTimeStamp = concept.entryTimeStamp;
    LConcept.typeId = concept.typeId;
    LConcept.type = concept.type;
    LConcept.isTemp = false;
    LConcept.typeCharacter = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "";
    return LConcept;
}
function convertFromLConceptToConcept(lconcept) {
    const concept = (0,_CreateDefaultConcept__WEBPACK_IMPORTED_MODULE_1__.CreateDefaultConcept)();
    concept.id = lconcept.id;
    concept.ghostId = lconcept.ghostId;
    concept.userId = lconcept.userId;
    concept.accessId = lconcept.accessId;
    concept.entryTimeStamp = lconcept.entryTimeStamp;
    concept.typeId = lconcept.typeId;
    concept.categoryId = lconcept.categoryId;
    return concept;
}
function convertFromConnectionToLConnection(connection) {
    const Lconnection = new _DataStructures_Connection__WEBPACK_IMPORTED_MODULE_0__.Connection(0, 0, 0, 0, 0, 0, 0);
    Lconnection.id = connection.id;
    Lconnection.ghostId = connection.ghostId;
    Lconnection.accessId = connection.accessId;
    Lconnection.ofTheConceptId = connection.ofTheConceptId;
    Lconnection.toTheConceptId = connection.toTheConceptId;
    Lconnection.entryTimeStamp = connection.entryTimeStamp;
    Lconnection.typeId = connection.typeId;
    Lconnection.isTemp = false;
    return Lconnection;
}


/***/ }),

/***/ "./src/Services/CreateBinaryTreeFromData.ts":
/*!**************************************************!*\
  !*** ./src/Services/CreateBinaryTreeFromData.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateConceptBinaryTreeFromIndexDb)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ "./src/app.ts");
/* harmony import */ var _Database_indexeddb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Database/indexeddb */ "./src/Database/indexeddb.ts");
/* harmony import */ var _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DataStructures/ConceptData */ "./src/DataStructures/ConceptData.ts");
/* harmony import */ var _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DataStructures/IdentifierFlags */ "./src/DataStructures/IdentifierFlags.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




/**
 * This function builds up the binary tree on startup from the indexdb
 */
function CreateConceptBinaryTreeFromIndexDb() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let conceptList = yield (0,_Database_indexeddb__WEBPACK_IMPORTED_MODULE_1__.getObjectsFromIndexDb)("concept");
            if (Array.isArray(conceptList)) {
                for (let i = 0; i < conceptList.length; i++) {
                    let concept = conceptList[i];
                    _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.AddConceptToMemory(concept);
                }
            }
            _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_3__.IdentifierFlags.isDataLoaded = true;
            _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_3__.IdentifierFlags.isCharacterLoaded = true;
            _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_3__.IdentifierFlags.isTypeLoaded = true;
        }
        catch (error) {
            yield (0,_app__WEBPACK_IMPORTED_MODULE_0__.DelayFunctionExecution)(2000, CreateConceptBinaryTreeFromIndexDb());
            let errorObject = {
                "message": "Cannot create Binary Tree Concept",
                "ok": false,
                "status": 400,
                "data": error
            };
            throw errorObject;
        }
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
/* harmony export */   CountRelationship: () => (/* binding */ CountRelationship),
/* harmony export */   CreateConnectionBetweenTwoConcepts: () => (/* binding */ CreateConnectionBetweenTwoConcepts),
/* harmony export */   CreateConnectionBetweenTwoConceptsGeneral: () => (/* binding */ CreateConnectionBetweenTwoConceptsGeneral)
/* harmony export */ });
/* harmony import */ var _Api_GetConnectionOfTheConcept__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Api/GetConnectionOfTheConcept */ "./src/Api/GetConnectionOfTheConcept.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app */ "./src/app.ts");
/* harmony import */ var _DataStructures_Connection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DataStructures/Connection */ "./src/DataStructures/Connection.ts");
/* harmony import */ var _DataStructures_SyncData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DataStructures/SyncData */ "./src/DataStructures/SyncData.ts");
/* harmony import */ var _CreateDefaultConcept__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CreateDefaultConcept */ "./src/Services/CreateDefaultConcept.ts");
/* harmony import */ var _CreateTheConnectionGeneral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CreateTheConnectionGeneral */ "./src/Services/CreateTheConnectionGeneral.ts");
/* harmony import */ var _DeleteConnection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DeleteConnection */ "./src/Services/DeleteConnection.ts");
/* harmony import */ var _GetTheConcept__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GetTheConcept */ "./src/Services/GetTheConcept.ts");
/* harmony import */ var _MakeTheInstanceConcept__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MakeTheInstanceConcept */ "./src/Services/MakeTheInstanceConcept.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};









function CreateConnectionBetweenTwoConcepts(ofTheConcept_1, toTheConcept_1, linker_1) {
    return __awaiter(this, arguments, void 0, function* (ofTheConcept, toTheConcept, linker, both = false, count = false) {
        var _a, _b;
        if (_app__WEBPACK_IMPORTED_MODULE_1__.serviceWorker) {
            const res = yield (0,_app__WEBPACK_IMPORTED_MODULE_1__.sendMessage)('CreateConnectionBetweenTwoConcepts', { ofTheConcept, toTheConcept, linker, both, count });
            console.log('data received from sw', res);
            return res.data;
        }
        let userId = ofTheConcept.userId;
        let accessId = 4;
        if (both) {
            let prefix1 = ((_a = toTheConcept.type) === null || _a === void 0 ? void 0 : _a.characterValue) + "_s";
            let linkerAdd1 = linker + "_by";
            let backwardLinker = prefix1 + "_" + linkerAdd1;
            if (count) {
                yield CountRelationship(linkerAdd1, toTheConcept, userId);
            }
            let connectionConceptReverse = yield (0,_MakeTheInstanceConcept__WEBPACK_IMPORTED_MODULE_8__["default"])("connection", backwardLinker, false, 999, 999, 999);
            let newConnection = new _DataStructures_Connection__WEBPACK_IMPORTED_MODULE_2__.Connection(0, toTheConcept.id, ofTheConcept.id, userId, connectionConceptReverse.id, 1000, accessId);
            _DataStructures_SyncData__WEBPACK_IMPORTED_MODULE_3__.SyncData.AddConnection(newConnection);
        }
        let prefix = ((_b = ofTheConcept.type) === null || _b === void 0 ? void 0 : _b.characterValue) + "_s";
        let linkerAdd = linker + "_s";
        let forwardLinker = prefix + "_" + linkerAdd;
        if (count) {
            yield CountRelationship(linkerAdd, ofTheConcept, userId);
        }
        let connectionConcept = yield (0,_MakeTheInstanceConcept__WEBPACK_IMPORTED_MODULE_8__["default"])("connection", forwardLinker, false, 999, 999, 999);
        let newConnection = new _DataStructures_Connection__WEBPACK_IMPORTED_MODULE_2__.Connection(0, ofTheConcept.id, toTheConcept.id, userId, connectionConcept.id, 1000, accessId);
        _DataStructures_SyncData__WEBPACK_IMPORTED_MODULE_3__.SyncData.AddConnection(newConnection);
        return newConnection;
    });
}
function CountRelationship(linker_1, concept_1) {
    return __awaiter(this, arguments, void 0, function* (linker, concept, passedUserId = null) {
        var _a;
        let concept1 = concept;
        let userId = passedUserId !== null && passedUserId !== void 0 ? passedUserId : concept.userId;
        let accessId = 4;
        let sessionInformationId = 999;
        let forwardLinkerCount = linker + "_count";
        let forwardLinkerCountString = ((_a = concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) + "_s" + "_" + forwardLinkerCount;
        let forwardLinkerCountConcept = yield (0,_MakeTheInstanceConcept__WEBPACK_IMPORTED_MODULE_8__["default"])("connection", forwardLinkerCountString, false, userId, accessId, sessionInformationId);
        let connectionsString = yield (0,_Api_GetConnectionOfTheConcept__WEBPACK_IMPORTED_MODULE_0__.GetConnectionOfTheConcept)(forwardLinkerCountConcept.id, concept.id, userId, 10, 1);
        let connections = connectionsString;
        let countConceptList = [];
        let countConcept = (0,_CreateDefaultConcept__WEBPACK_IMPORTED_MODULE_4__.CreateDefaultConcept)();
        for (let i = 0; i < connections.length; i++) {
            let toConcept = yield (0,_GetTheConcept__WEBPACK_IMPORTED_MODULE_7__["default"])(connections[i].toTheConceptId);
            countConceptList.push(toConcept);
        }
        if (countConceptList.length < 1) {
            countConcept = yield (0,_MakeTheInstanceConcept__WEBPACK_IMPORTED_MODULE_8__["default"])("count", "1", false, userId, accessId, sessionInformationId);
        }
        else {
            let oldcountConcept = countConceptList[0];
            let count = 0;
            try {
                count = Number(oldcountConcept.characterValue);
            }
            catch (ex) {
                count = 0;
            }
            count = count + 1;
            countConcept = yield (0,_MakeTheInstanceConcept__WEBPACK_IMPORTED_MODULE_8__["default"])("count", count.toString(), false, userId, accessId, sessionInformationId);
            for (let i = 0; i < connections.length; i++) {
                (0,_DeleteConnection__WEBPACK_IMPORTED_MODULE_6__.DeleteConnectionById)(connections[i].id);
            }
        }
        let newConnection = new _DataStructures_Connection__WEBPACK_IMPORTED_MODULE_2__.Connection(0, concept1.id, countConcept.id, concept1.userId, forwardLinkerCountConcept.id, 1000, accessId);
        yield _DataStructures_SyncData__WEBPACK_IMPORTED_MODULE_3__.SyncData.AddConnection(newConnection);
    });
}
function CreateConnectionBetweenTwoConceptsGeneral(ofTheConcept_1, toTheConcept_1, linker_1) {
    return __awaiter(this, arguments, void 0, function* (ofTheConcept, toTheConcept, linker, both = false, count = false) {
        var _a, _b;
        let userId = ofTheConcept.userId;
        let accessId = 4;
        if (both) {
            let prefix1 = ((_a = toTheConcept.type) === null || _a === void 0 ? void 0 : _a.characterValue) + "_s";
            let linkerAdd1 = linker + "_by";
            let backwardLinker = prefix1 + "_" + linkerAdd1;
            if (count) {
                yield CountRelationship(linkerAdd1, toTheConcept, userId);
            }
            let connectionConceptReverse = yield (0,_MakeTheInstanceConcept__WEBPACK_IMPORTED_MODULE_8__["default"])("connection", backwardLinker, false, 999, 999, 999);
            let newConnection = new _DataStructures_Connection__WEBPACK_IMPORTED_MODULE_2__.Connection(0, toTheConcept.id, ofTheConcept.id, userId, connectionConceptReverse.id, 1000, accessId);
            _DataStructures_SyncData__WEBPACK_IMPORTED_MODULE_3__.SyncData.AddConnection(newConnection);
        }
        let prefix = ((_b = ofTheConcept.type) === null || _b === void 0 ? void 0 : _b.characterValue) + "_s";
        let linkerAdd = linker + "_s";
        let forwardLinker = prefix + "_" + linkerAdd;
        if (count) {
            yield CountRelationship(linkerAdd, ofTheConcept, userId);
        }
        let connectionConcept = yield (0,_MakeTheInstanceConcept__WEBPACK_IMPORTED_MODULE_8__["default"])("connection", forwardLinker, false, 999, 999, 999);
        let newConnection = yield (0,_CreateTheConnectionGeneral__WEBPACK_IMPORTED_MODULE_5__.CreateTheConnectionGeneral)(ofTheConcept.id, ofTheConcept.userId, toTheConcept.id, connectionConcept.id, 1000, accessId);
        return newConnection;
    });
}


/***/ }),

/***/ "./src/Services/CreateDefaultConcept.ts":
/*!**********************************************!*\
  !*** ./src/Services/CreateDefaultConcept.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateDefaultConcept: () => (/* binding */ CreateDefaultConcept)
/* harmony export */ });
/* harmony import */ var _DataStructures_Concept__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DataStructures/Concept */ "./src/DataStructures/Concept.ts");

function CreateDefaultConcept() {
    let created_on = new Date();
    let updated_on = new Date();
    let concept = new _DataStructures_Concept__WEBPACK_IMPORTED_MODULE_0__.Concept(0, 0, 0, 0, 0, "0", 0, false, created_on, updated_on, "0");
    return concept;
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
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ "./src/app.ts");
/* harmony import */ var _CreateDefaultConcept__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateDefaultConcept */ "./src/Services/CreateDefaultConcept.ts");
/* harmony import */ var _CreateTheConnection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CreateTheConnection */ "./src/Services/CreateTheConnection.ts");
/* harmony import */ var _MakeTheInstanceConcept__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MakeTheInstanceConcept */ "./src/Services/MakeTheInstanceConcept.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




function CreateTheComposition(json_1) {
    return __awaiter(this, arguments, void 0, function* (json, ofTheConceptId = null, ofTheConceptUserId = null, mainKey = null, userId = null, accessId = null, sessionInformationId = null) {
        if (_app__WEBPACK_IMPORTED_MODULE_0__.serviceWorker) {
            const res = yield (0,_app__WEBPACK_IMPORTED_MODULE_0__.sendMessage)('CreateTheComposition', { json, ofTheConceptId, ofTheConceptUserId, mainKey, userId, accessId, sessionInformationId });
            console.log('data received from sw', res);
            return res.data;
        }
        let localUserId = userId !== null && userId !== void 0 ? userId : 999;
        let localAccessId = accessId !== null && accessId !== void 0 ? accessId : 4;
        let localSessionId = sessionInformationId !== null && sessionInformationId !== void 0 ? sessionInformationId : 999;
        let MainKeyLocal = mainKey !== null && mainKey !== void 0 ? mainKey : 0;
        let MainConcept = (0,_CreateDefaultConcept__WEBPACK_IMPORTED_MODULE_1__.CreateDefaultConcept)();
        for (const key in json) {
            if ((typeof json[key] != 'string' && typeof json[key] != 'number')) {
                if (ofTheConceptId == null && ofTheConceptUserId == null) {
                    let localMainKey = MainKeyLocal;
                    let conceptString = yield (0,_MakeTheInstanceConcept__WEBPACK_IMPORTED_MODULE_3__["default"])(key, "", true, localUserId, localAccessId, localSessionId);
                    let concept = conceptString;
                    MainConcept = concept;
                    localMainKey = concept.id;
                    MainKeyLocal = concept.id;
                    yield CreateTheComposition(json[key], concept.id, concept.userId, localMainKey, userId, accessId, sessionInformationId);
                }
                else {
                    let ofThe = ofTheConceptId !== null && ofTheConceptId !== void 0 ? ofTheConceptId : 999;
                    let ofTheUser = ofTheConceptUserId !== null && ofTheConceptUserId !== void 0 ? ofTheConceptUserId : 999;
                    let localMainKey = MainKeyLocal;
                    let conceptString = yield (0,_MakeTheInstanceConcept__WEBPACK_IMPORTED_MODULE_3__["default"])(key, "", true, localUserId, localAccessId, localSessionId);
                    let concept = conceptString;
                    MainConcept = concept;
                    yield (0,_CreateTheConnection__WEBPACK_IMPORTED_MODULE_2__.createTheConnection)(ofThe, ofTheUser, concept.id, localMainKey);
                    yield CreateTheComposition(json[key], concept.id, concept.userId, localMainKey, userId, accessId, sessionInformationId);
                }
            }
            else {
                let ofThe = ofTheConceptId !== null && ofTheConceptId !== void 0 ? ofTheConceptId : 999;
                let ofTheUser = ofTheConceptUserId !== null && ofTheConceptUserId !== void 0 ? ofTheConceptUserId : 10267;
                let localMainKey = MainKeyLocal;
                let conceptString = yield (0,_MakeTheInstanceConcept__WEBPACK_IMPORTED_MODULE_3__["default"])(key, json[key].toString(), false, localUserId, localAccessId, localSessionId);
                let concept = conceptString;
                yield (0,_CreateTheConnection__WEBPACK_IMPORTED_MODULE_2__.createTheConnection)(ofThe, ofTheUser, concept.id, localMainKey);
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
/* harmony export */   CreateTheConceptImmediate: () => (/* binding */ CreateTheConceptImmediate),
/* harmony export */   CreateTheConceptTemporary: () => (/* binding */ CreateTheConceptTemporary),
/* harmony export */   "default": () => (/* binding */ CreateTheConcept)
/* harmony export */ });
/* harmony import */ var _Api_Create_CreateTheConceptApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Api/Create/CreateTheConceptApi */ "./src/Api/Create/CreateTheConceptApi.ts");
/* harmony import */ var _DataStructures_Concept__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataStructures/Concept */ "./src/DataStructures/Concept.ts");
/* harmony import */ var _DataStructures_ReservedIds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DataStructures/ReservedIds */ "./src/DataStructures/ReservedIds.ts");
/* harmony import */ var _DataStructures_SyncData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DataStructures/SyncData */ "./src/DataStructures/SyncData.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app */ "./src/app.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





function CreateTheConcept(referent, userId, categoryId, typeId, referentId, accessId, typeCharacter) {
    return __awaiter(this, void 0, void 0, function* () {
        let id = yield _DataStructures_ReservedIds__WEBPACK_IMPORTED_MODULE_2__.ReservedIds.getId();
        let isNew = true;
        let created_on = new Date();
        let updated_on = new Date();
        // let concept = new Concept(id,userId,typeId,typeUserId,categoryId,categoryUserId,referentId, referentUserId, referent, securityId,
        // securityUserId,accessId, accessUserId,sessionInformationId, sessionInformationUserId,isNew,created_on,updated_on);
        let concept = new _DataStructures_Concept__WEBPACK_IMPORTED_MODULE_1__.Concept(id, userId, typeId, categoryId, referentId, referent, accessId, isNew, created_on, updated_on, typeCharacter);
        concept.isTemp = false;
        _DataStructures_SyncData__WEBPACK_IMPORTED_MODULE_3__.SyncData.AddConcept(concept);
        return concept;
    });
}
function CreateTheConceptTemporary(referent, userId, categoryId, typeId, referentId, accessId, typeCharacter) {
    return __awaiter(this, void 0, void 0, function* () {
        let id = yield _DataStructures_ReservedIds__WEBPACK_IMPORTED_MODULE_2__.ReservedIds.getId();
        let isNew = true;
        let created_on = new Date();
        let updated_on = new Date();
        // let concept = new Concept(id,userId,typeId,typeUserId,categoryId,referentId, referent,
        //     accessId,isNew,created_on, updated_on);
        let concept = new _DataStructures_Concept__WEBPACK_IMPORTED_MODULE_1__.Concept(id, userId, typeId, categoryId, referentId, referent, accessId, isNew, created_on, updated_on, typeCharacter);
        concept.isTemp = true;
        return concept;
    });
}
function CreateTheConceptImmediate(referent, userId, categoryId, typeId, referentId, accessId, typeCharacter) {
    return __awaiter(this, void 0, void 0, function* () {
        let id = yield _DataStructures_ReservedIds__WEBPACK_IMPORTED_MODULE_2__.ReservedIds.getId();
        let isNew = false;
        let created_on = new Date();
        let updated_on = new Date();
        // let concept = new Concept(id,userId,typeId,typeUserId,categoryId,categoryUserId,referentId, referentUserId, referent, securityId,
        //     securityUserId,accessId, accessUserId,sessionInformationId, sessionInformationUserId,isNew,created_on, updated_on);
        let concept = new _DataStructures_Concept__WEBPACK_IMPORTED_MODULE_1__.Concept(id, userId, typeId, categoryId, referentId, referent, accessId, isNew, created_on, updated_on, typeCharacter);
        _app__WEBPACK_IMPORTED_MODULE_4__.ConceptsData.AddConcept(concept);
        (0,_Api_Create_CreateTheConceptApi__WEBPACK_IMPORTED_MODULE_0__.CreateTheConceptApi)([concept]);
        //SyncData.AddConcept(concept);
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
/* harmony export */   createTheConnection: () => (/* binding */ createTheConnection)
/* harmony export */ });
/* harmony import */ var _DataStructures_Connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DataStructures/Connection */ "./src/DataStructures/Connection.ts");
/* harmony import */ var _DataStructures_SyncData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataStructures/SyncData */ "./src/DataStructures/SyncData.ts");
/* harmony import */ var _Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Common/ErrorPosting */ "./src/Services/Common/ErrorPosting.ts");



/**
 * This function is used to create a connection that is internal(inside of a composition)
 * @param ofTheConceptId Start of the connection
 * @param userId user id fo the user creating the connection
 * @param toTheConceptId the end of the connection
 * @param typeId this is the type of the connection
 * @returns
 */
function createTheConnection(ofTheConceptId, userId, toTheConceptId, typeId) {
    var orderId = 1;
    var localUserId = userId;
    var accessId = 4;
    var connection = new _DataStructures_Connection__WEBPACK_IMPORTED_MODULE_0__.Connection(0, ofTheConceptId, toTheConceptId, localUserId, typeId, orderId, accessId);
    if (ofTheConceptId == toTheConceptId) {
        connection.ofTheConceptId = 0;
        connection.toTheConceptId = 1;
        return connection;
    }
    try {
        connection.isTemp = true;
        connection.id = Math.floor(Math.random() * 100000000);
        _DataStructures_SyncData__WEBPACK_IMPORTED_MODULE_1__.SyncData.AddConnection(connection);
    }
    catch (error) {
        (0,_Common_ErrorPosting__WEBPACK_IMPORTED_MODULE_2__.HandleInternalError)(error);
    }
    return connection;
}


/***/ }),

/***/ "./src/Services/CreateTheConnectionGeneral.ts":
/*!****************************************************!*\
  !*** ./src/Services/CreateTheConnectionGeneral.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateTheConnectionGeneral: () => (/* binding */ CreateTheConnectionGeneral)
/* harmony export */ });
/* harmony import */ var _DataStructures_Connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DataStructures/Connection */ "./src/DataStructures/Connection.ts");
/* harmony import */ var _DataStructures_ReservedIds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataStructures/ReservedIds */ "./src/DataStructures/ReservedIds.ts");
/* harmony import */ var _DataStructures_Responses_ErrorResponse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DataStructures/Responses/ErrorResponse */ "./src/DataStructures/Responses/ErrorResponse.ts");
/* harmony import */ var _DataStructures_SyncData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DataStructures/SyncData */ "./src/DataStructures/SyncData.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




function CreateTheConnectionGeneral(ofTheConceptId_1, ofTheConceptUserId_1, toTheConceptId_1, typeId_1) {
    return __awaiter(this, arguments, void 0, function* (ofTheConceptId, ofTheConceptUserId, toTheConceptId, typeId, orderId = 1, accessId = 4) {
        if (ofTheConceptId > 0 && toTheConceptId > 0) {
            var userId = ofTheConceptUserId;
            var id = yield _DataStructures_ReservedIds__WEBPACK_IMPORTED_MODULE_1__.ReservedConnectionIds.getId();
            var connection = new _DataStructures_Connection__WEBPACK_IMPORTED_MODULE_0__.Connection(id, ofTheConceptId, toTheConceptId, userId, typeId, orderId, accessId);
            if (ofTheConceptId == toTheConceptId) {
                connection.ofTheConceptId = 0;
                connection.toTheConceptId = 1;
                return connection;
            }
            // this will cause the connection to go and update the existing with the reserved id
            connection.toUpdate = true;
            connection.isTemp = false;
            _DataStructures_SyncData__WEBPACK_IMPORTED_MODULE_3__.SyncData.AddConnection(connection);
            return connection;
        }
        else {
            throw new _DataStructures_Responses_ErrorResponse__WEBPACK_IMPORTED_MODULE_2__.FreeSchemaResponse("cannot create connection because id are negative ", false, 400, "");
        }
    });
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
/* harmony import */ var _Api_DeleteTheConcept__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Api/DeleteTheConcept */ "./src/Api/DeleteTheConcept.ts");
/* harmony import */ var _DataStructures_BinaryCharacterTree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataStructures/BinaryCharacterTree */ "./src/DataStructures/BinaryCharacterTree.ts");
/* harmony import */ var _DataStructures_BinaryTree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DataStructures/BinaryTree */ "./src/DataStructures/BinaryTree.ts");
/* harmony import */ var _DataStructures_BinaryTypeTree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DataStructures/BinaryTypeTree */ "./src/DataStructures/BinaryTypeTree.ts");
/* harmony import */ var _DataStructures_ConnectionBinaryTree_ConnectionOfTheTree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DataStructures/ConnectionBinaryTree/ConnectionOfTheTree */ "./src/DataStructures/ConnectionBinaryTree/ConnectionOfTheTree.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app */ "./src/app.ts");
/* harmony import */ var _GetTheConcept__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GetTheConcept */ "./src/Services/GetTheConcept.ts");
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
        if (_app__WEBPACK_IMPORTED_MODULE_5__.serviceWorker) {
            const res = yield (0,_app__WEBPACK_IMPORTED_MODULE_5__.sendMessage)('DeleteConceptById', { id });
            console.log('data received from sw', res);
            return res.data;
        }
        if (id > 0) {
            var concept = yield (0,_GetTheConcept__WEBPACK_IMPORTED_MODULE_6__["default"])(id);
            var typeId = concept.typeId;
            var character = concept.characterValue;
            yield _DataStructures_BinaryTypeTree__WEBPACK_IMPORTED_MODULE_3__.BinaryTypeTree.removeTypeConcept(typeId, id);
            yield _DataStructures_BinaryCharacterTree__WEBPACK_IMPORTED_MODULE_1__.BinaryCharacterTree.removeNodeByCharacter(character, id);
            //removeFromDatabase("concept",id);
            yield (0,_Api_DeleteTheConcept__WEBPACK_IMPORTED_MODULE_0__["default"])(id);
            yield _DataStructures_BinaryTree__WEBPACK_IMPORTED_MODULE_2__.BinaryTree.removeNodeFromTree(id);
            yield _DataStructures_ConnectionBinaryTree_ConnectionOfTheTree__WEBPACK_IMPORTED_MODULE_4__.ConnectionOfTheTree.removeNodeFromTree(id);
        }
        else {
            _app__WEBPACK_IMPORTED_MODULE_5__.LocalConceptsData.RemoveConceptById(id);
        }
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
/* harmony import */ var _Api_DeleteTheConnection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Api/DeleteTheConnection */ "./src/Api/DeleteTheConnection.ts");
/* harmony import */ var _DataStructures_ConnectionBinaryTree_ConnectionBinaryTree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataStructures/ConnectionBinaryTree/ConnectionBinaryTree */ "./src/DataStructures/ConnectionBinaryTree/ConnectionBinaryTree.ts");
/* harmony import */ var _DataStructures_Local_LocalConnectionData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DataStructures/Local/LocalConnectionData */ "./src/DataStructures/Local/LocalConnectionData.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app */ "./src/app.ts");
/* harmony import */ var _GetConnections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GetConnections */ "./src/Services/GetConnections.ts");
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
        if (_app__WEBPACK_IMPORTED_MODULE_3__.serviceWorker) {
            const res = yield (0,_app__WEBPACK_IMPORTED_MODULE_3__.sendMessage)('DeleteConnectionById', { id });
            console.log('data received from sw', res);
            return res.data;
        }
        if (id > 0) {
            let connection = yield (0,_GetConnections__WEBPACK_IMPORTED_MODULE_4__.GetConnectionById)(id);
            yield (0,_Api_DeleteTheConnection__WEBPACK_IMPORTED_MODULE_0__["default"])(id);
            //removeFromDatabase("connection",id);
            _DataStructures_ConnectionBinaryTree_ConnectionBinaryTree__WEBPACK_IMPORTED_MODULE_1__.ConnectionBinaryTree.removeNodeFromTree(id);
        }
        else {
            _DataStructures_Local_LocalConnectionData__WEBPACK_IMPORTED_MODULE_2__.LocalConnectionData.RemoveConnectionById(id);
        }
        //ConnectionTypeTree.removeTypeConcept(connection.typeId,id);
    });
}


/***/ }),

/***/ "./src/Services/DeleteConnectionByType.ts":
/*!************************************************!*\
  !*** ./src/Services/DeleteConnectionByType.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeleteConnectionByType: () => (/* binding */ DeleteConnectionByType)
/* harmony export */ });
/* harmony import */ var _Api_GetAllLinkerConnectionsFromTheConcept__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Api/GetAllLinkerConnectionsFromTheConcept */ "./src/Api/GetAllLinkerConnectionsFromTheConcept.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app */ "./src/app.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function DeleteConnectionByType(id, linker) {
    return __awaiter(this, void 0, void 0, function* () {
        if (_app__WEBPACK_IMPORTED_MODULE_1__.serviceWorker) {
            const res = yield (0,_app__WEBPACK_IMPORTED_MODULE_1__.sendMessage)('DeleteConnectionByType', { id, linker });
            console.log('data received from sw', res);
            return res.data;
        }
        let externalConnections = yield (0,_Api_GetAllLinkerConnectionsFromTheConcept__WEBPACK_IMPORTED_MODULE_0__.GetAllLinkerConnectionsFromTheConcept)(id);
        for (let i = 0; i < externalConnections.length; i++) {
            _app__WEBPACK_IMPORTED_MODULE_1__.ConnectionData.AddConnection(externalConnections[i]);
        }
        let connections = yield _app__WEBPACK_IMPORTED_MODULE_1__.ConnectionData.GetConnectionsOfConcept(id);
        let concept = yield (0,_app__WEBPACK_IMPORTED_MODULE_1__.GetConceptByCharacter)(linker);
        let toDelete = [];
        for (let i = 0; i < connections.length; i++) {
            if (connections[i].typeId == concept.id) {
                toDelete.push(connections[i]);
            }
        }
        for (let i = 0; i < toDelete.length; i++) {
            (0,_app__WEBPACK_IMPORTED_MODULE_1__.DeleteConnectionById)(toDelete[i].id);
        }
    });
}


/***/ }),

/***/ "./src/Services/FindConeceptsFromConnection.ts":
/*!*****************************************************!*\
  !*** ./src/Services/FindConeceptsFromConnection.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FindConceptsFromConnections: () => (/* binding */ FindConceptsFromConnections)
/* harmony export */ });
/* harmony import */ var _Api_GetConceptBulk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Api/GetConceptBulk */ "./src/Api/GetConceptBulk.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * This function takes in a list of connections and in bulk gets the concepts that are related with these connections.
 * @param connectionList list of connections whose concepts need to be found out.
 */
function FindConceptsFromConnections() {
    return __awaiter(this, arguments, void 0, function* (connectionList = []) {
        let ConceptList = [];
        if (connectionList.length > 0) {
            for (let i = 0; i < connectionList.length; i++) {
                if (!ConceptList.includes(connectionList[i].ofTheConceptId)) {
                    ConceptList.push(connectionList[i].ofTheConceptId);
                }
                if (!ConceptList.includes(connectionList[i].toTheConceptId)) {
                    ConceptList.push(connectionList[i].toTheConceptId);
                }
            }
            yield (0,_Api_GetConceptBulk__WEBPACK_IMPORTED_MODULE_0__.GetConceptBulk)(ConceptList);
        }
    });
}


/***/ }),

/***/ "./src/Services/FindConnectionsOfCompositionBulkInMemory.ts":
/*!******************************************************************!*\
  !*** ./src/Services/FindConnectionsOfCompositionBulkInMemory.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FindConnectionsOfCompositionsBulkInMemory: () => (/* binding */ FindConnectionsOfCompositionsBulkInMemory)
/* harmony export */ });
/* harmony import */ var _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DataStructures/ConnectionData */ "./src/DataStructures/ConnectionData.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function FindConnectionsOfCompositionsBulkInMemory() {
    return __awaiter(this, arguments, void 0, function* (composition_ids = []) {
        let FinalConnectionList = [];
        for (let i = 0; i < composition_ids.length; i++) {
            // let connectionList = await ConnectionData.GetConnectionsOfCompositionLocal(composition_ids[i]);
            let connectionList = yield _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_0__.ConnectionData.GetConnectionsOfConcept(composition_ids[i]);
            FinalConnectionList.push(...connectionList);
        }
        return FinalConnectionList;
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
/* harmony export */   GetCompositionById: () => (/* binding */ GetCompositionById),
/* harmony export */   GetCompositionFromMemory: () => (/* binding */ GetCompositionFromMemory),
/* harmony export */   GetCompositionFromMemoryNormal: () => (/* binding */ GetCompositionFromMemoryNormal),
/* harmony export */   GetCompositionWithAllIds: () => (/* binding */ GetCompositionWithAllIds),
/* harmony export */   GetCompositionWithId: () => (/* binding */ GetCompositionWithId),
/* harmony export */   GetCompositionWithIdAndDateFromMemory: () => (/* binding */ GetCompositionWithIdAndDateFromMemory),
/* harmony export */   GetCompositionWithIdFromMemory: () => (/* binding */ GetCompositionWithIdFromMemory),
/* harmony export */   GetCompositionWithIdFromMemoryFromConnections: () => (/* binding */ GetCompositionWithIdFromMemoryFromConnections),
/* harmony export */   GetCompositionWithIdFromMemoryNew: () => (/* binding */ GetCompositionWithIdFromMemoryNew),
/* harmony export */   RecursiveFetchBuildLayer: () => (/* binding */ RecursiveFetchBuildLayer),
/* harmony export */   RecursiveFetchBuildLayerDataId: () => (/* binding */ RecursiveFetchBuildLayerDataId),
/* harmony export */   RecursiveFetchBuildLayerNormal: () => (/* binding */ RecursiveFetchBuildLayerNormal),
/* harmony export */   recursiveFetch: () => (/* binding */ recursiveFetch),
/* harmony export */   recursiveFetchConcept: () => (/* binding */ recursiveFetchConcept),
/* harmony export */   recursiveFetchConceptNormal: () => (/* binding */ recursiveFetchConceptNormal),
/* harmony export */   recursiveFetchConceptSingleLoop: () => (/* binding */ recursiveFetchConceptSingleLoop),
/* harmony export */   recursiveFetchWithSubCompositions: () => (/* binding */ recursiveFetchWithSubCompositions)
/* harmony export */ });
/* harmony import */ var _Api_GetConcept__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Api/GetConcept */ "./src/Api/GetConcept.ts");
/* harmony import */ var _Api_GetAllConnectionsOfComposition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Api/GetAllConnectionsOfComposition */ "./src/Api/GetAllConnectionsOfComposition.ts");
/* harmony import */ var _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DataStructures/ConceptData */ "./src/DataStructures/ConceptData.ts");
/* harmony import */ var _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DataStructures/ConnectionData */ "./src/DataStructures/ConnectionData.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app */ "./src/app.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





function GetCompositionById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        if (_app__WEBPACK_IMPORTED_MODULE_4__.serviceWorker) {
            const res = yield (0,_app__WEBPACK_IMPORTED_MODULE_4__.sendMessage)('GetCompositionById', { id });
            console.log('data received from sw', res);
            return res.data;
        }
        let connectionList = [];
        let returnOutput = {};
        let connectionListString = yield (0,_Api_GetAllConnectionsOfComposition__WEBPACK_IMPORTED_MODULE_1__.GetAllConnectionsOfComposition)(id);
        connectionList = connectionListString;
        let compositionList = [];
        for (let i = 0; i < connectionList.length; i++) {
            if (!compositionList.includes(connectionList[i].ofTheConceptId)) {
                compositionList.push(connectionList[i].ofTheConceptId);
            }
        }
        return { "connectionList": connectionList, "compositionList": compositionList };
    });
}
/**
 * ## format JUSTDATA ##
 * this function builds the composition with the main id as the point of building.
 * @param id id of the main composition that you want to build
 * @param connectionList  list of connections
 * @param compositionList list of of_the_concept_ids for all the connections.
 * @returns
 */
function RecursiveFetchBuildLayer(id, connectionList, compositionList) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        let returnOutput = {};
        let concept = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConcept(id);
        if (concept.id == 0 && id != null && id != undefined) {
            let conceptString = yield (0,_Api_GetConcept__WEBPACK_IMPORTED_MODULE_0__.GetConcept)(id);
            concept = conceptString;
        }
        let output = yield recursiveFetch(id, connectionList, compositionList);
        let mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "";
        returnOutput[mainString] = output;
        return returnOutput;
    });
}
/**
 * ## format DATAID ##
 * this function builds the composition with the main id as the point of building.
 * @param id id of the main composition that you want to build
 * @param connectionList  list of connections
 * @param compositionList list of of_the_concept_ids for all the connections.
 * @returns
 */
function RecursiveFetchBuildLayerDataId(id, connectionList, compositionList) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        let returnOutput = {};
        let concept = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConcept(id);
        if (concept.id == 0 && id != null && id != undefined) {
            let conceptString = yield (0,_Api_GetConcept__WEBPACK_IMPORTED_MODULE_0__.GetConcept)(id);
            concept = conceptString;
        }
        let output = yield recursiveFetch(id, connectionList, compositionList);
        let mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "";
        returnOutput[mainString] = output;
        let FinalReturn = {};
        FinalReturn['created_at'] = concept.entryTimeStamp;
        FinalReturn['data'] = returnOutput;
        FinalReturn['id'] = id;
        return FinalReturn;
    });
}
/**
 * ## format Normal ##
 * this function builds the composition with the main id as the point of building.
 * @param id id of the main composition that you want to build
 * @param connectionList  list of connections
 * @param compositionList list of of_the_concept_ids for all the connections.
 * @returns
 */
function RecursiveFetchBuildLayerNormal(id, connectionList, compositionList) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        let returnOutput = {};
        let concept = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConcept(id);
        if (concept.id == 0 && id != null && id != undefined) {
            let conceptString = yield (0,_Api_GetConcept__WEBPACK_IMPORTED_MODULE_0__.GetConcept)(id);
            concept = conceptString;
        }
        let output = yield recursiveFetchConceptNormal(concept, connectionList, compositionList);
        let mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "";
        returnOutput[mainString] = output;
        return returnOutput;
    });
}
/**
 * ## format JUSTDATA ##
 * this function builds the composition with the main id as the point of building.
 * This just requires the id
 * @param id id of the main composition that you want to build
 * @param connectionList  list of connections
 * @param compositionList list of of_the_concept_ids for all the connections.
 * @returns
 */
function GetComposition(id) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        if (_app__WEBPACK_IMPORTED_MODULE_4__.serviceWorker) {
            const res = yield (0,_app__WEBPACK_IMPORTED_MODULE_4__.sendMessage)('GetComposition', { id });
            console.log('data received from sw', res);
            return res.data;
        }
        let connectionList = [];
        let returnOutput = {};
        let connectionListString = yield (0,_Api_GetAllConnectionsOfComposition__WEBPACK_IMPORTED_MODULE_1__.GetAllConnectionsOfComposition)(id);
        connectionList = connectionListString;
        console.log("this is the connection list online", connectionList);
        //connectionList = ConnectionData.GetConnectionsOfComposition(id);
        let compositionList = [];
        for (let i = 0; i < connectionList.length; i++) {
            if (!compositionList.includes(connectionList[i].ofTheConceptId)) {
                compositionList.push(connectionList[i].ofTheConceptId);
            }
        }
        let concept = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConcept(id);
        if (concept.id == 0 && id != null && id != undefined) {
            let conceptString = yield (0,_Api_GetConcept__WEBPACK_IMPORTED_MODULE_0__.GetConcept)(id);
            concept = conceptString;
        }
        let output = yield recursiveFetch(id, connectionList, compositionList);
        let mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "";
        returnOutput[mainString] = output;
        return returnOutput;
    });
}
function GetCompositionWithAllIds(id) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        let connectionList = [];
        let returnOutput = {};
        let connectionListString = yield (0,_Api_GetAllConnectionsOfComposition__WEBPACK_IMPORTED_MODULE_1__.GetAllConnectionsOfComposition)(id);
        connectionList = connectionListString;
        //connectionList = ConnectionData.GetConnectionsOfComposition(id);
        let compositionList = [];
        for (let i = 0; i < connectionList.length; i++) {
            if (!compositionList.includes(connectionList[i].ofTheConceptId)) {
                compositionList.push(connectionList[i].ofTheConceptId);
            }
        }
        let concept = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConcept(id);
        if (concept.id == 0 && id != null && id != undefined) {
            let conceptString = yield (0,_Api_GetConcept__WEBPACK_IMPORTED_MODULE_0__.GetConcept)(id);
            concept = conceptString;
        }
        let output = yield recursiveFetchWithSubCompositions(id, connectionList, compositionList);
        let mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "";
        returnOutput[mainString] = output;
        return returnOutput;
    });
}
/**
 * ### Format JUSTDATA ###
 * This function just builds data from the memory.
 * This is a function that takes on all the concepts and connections of the concept (as a composition ) and builds
 * it into a json data.
 * @param id this id is just used to get all the composition data from the concepts and connections in memory
 * @returns
 */
function GetCompositionFromMemory(id) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        if (_app__WEBPACK_IMPORTED_MODULE_4__.serviceWorker) {
            const res = yield (0,_app__WEBPACK_IMPORTED_MODULE_4__.sendMessage)('GetCompositionFromMemory', { id });
            console.log('data received from sw', res);
            return res.data;
        }
        let connectionList = [];
        let returnOutput = {};
        //connectionList = await ConnectionData.GetConnectionsOfConcept(id);
        connectionList = yield _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_3__.ConnectionData.GetConnectionsOfCompositionLocal(id);
        //connectionList = ConnectionData.GetConnectionsOfComposition(id);
        let compositionList = [];
        for (let i = 0; i < connectionList.length; i++) {
            if (!compositionList.includes(connectionList[i].ofTheConceptId)) {
                compositionList.push(connectionList[i].ofTheConceptId);
            }
        }
        let concept = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConcept(id);
        if (concept.id == 0 && id != null && id != undefined) {
            let conceptString = yield (0,_Api_GetConcept__WEBPACK_IMPORTED_MODULE_0__.GetConcept)(id);
            concept = conceptString;
        }
        let output = yield recursiveFetchConcept(concept, connectionList, compositionList);
        let mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "";
        returnOutput[mainString] = output;
        return returnOutput;
    });
}
/**
 * ### Format Normal ###
 * This function just builds data from the memory.
 * This is a function that takes on all the concepts and connections of the concept (as a composition ) and builds
 * it into a json data.
 * @param id this id is just used to get all the composition data from the concepts and connections in memory
 * @returns
 */
function GetCompositionFromMemoryNormal(id) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        let connectionList = [];
        let returnOutput = {};
        //connectionList = await ConnectionData.GetConnectionsOfConcept(id);
        connectionList = yield _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_3__.ConnectionData.GetConnectionsOfCompositionLocal(id);
        //connectionList = ConnectionData.GetConnectionsOfComposition(id);
        let compositionList = [];
        for (let i = 0; i < connectionList.length; i++) {
            if (!compositionList.includes(connectionList[i].ofTheConceptId)) {
                compositionList.push(connectionList[i].ofTheConceptId);
            }
        }
        let concept = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConcept(id);
        if (concept.id == 0 && id != null && id != undefined) {
            let conceptString = yield (0,_Api_GetConcept__WEBPACK_IMPORTED_MODULE_0__.GetConcept)(id);
            concept = conceptString;
        }
        let output = yield recursiveFetchConceptNormal(concept, connectionList, compositionList);
        let mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "";
        returnOutput[mainString] = output;
        return returnOutput;
    });
}
/**
 * ### Format DATAIDDATE ####
 * Gets data just from memory
 * @param id
 * @returns
 */
function GetCompositionWithIdFromMemory(id) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        if (_app__WEBPACK_IMPORTED_MODULE_4__.serviceWorker) {
            const res = yield (0,_app__WEBPACK_IMPORTED_MODULE_4__.sendMessage)('GetCompositionWithIdFromMemory', { id });
            console.log('data received from sw', res);
            return res.data;
        }
        let connectionList = [];
        let returnOutput = {};
        // connectionList = await ConnectionData.GetConnectionsOfConcept(id);
        connectionList = yield _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_3__.ConnectionData.GetConnectionsOfCompositionLocal(id);
        let compositionList = [];
        for (let i = 0; i < connectionList.length; i++) {
            if (!compositionList.includes(connectionList[i].ofTheConceptId)) {
                compositionList.push(connectionList[i].ofTheConceptId);
            }
        }
        let concept = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConcept(id);
        if (concept.id == 0 && id != null && id != undefined) {
            let conceptString = yield (0,_Api_GetConcept__WEBPACK_IMPORTED_MODULE_0__.GetConcept)(id);
            concept = conceptString;
        }
        let output = yield recursiveFetchConcept(concept, connectionList, compositionList);
        // let output = await recursiveFetchConceptSingleLoop(concept, connectionList,compositionList );
        let mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "";
        returnOutput[mainString] = output;
        let FinalReturn = {};
        FinalReturn['created_at'] = concept.entryTimeStamp;
        FinalReturn['data'] = returnOutput;
        FinalReturn['id'] = id;
        return FinalReturn;
    });
}
/**
 * ### Format DATAIDDATE ####
 * ### experimental ####
 * This is the new format that needs to work with a single or max two loops
 * @param id the id whose composition needs to be created
 * @returns
 */
function GetCompositionWithIdFromMemoryNew(id) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        let connectionList = [];
        let returnOutput = {};
        //connectionList = await ConnectionData.GetConnectionsOfConcept(id);
        connectionList = yield _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_3__.ConnectionData.GetConnectionsOfCompositionLocal(id);
        let compositionList = [];
        for (let i = 0; i < connectionList.length; i++) {
            if (!compositionList.includes(connectionList[i].ofTheConceptId)) {
                compositionList.push(connectionList[i].ofTheConceptId);
            }
        }
        let concept = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConcept(id);
        if (concept.id == 0 && id != null && id != undefined) {
            console.log("this concept you cannot find ", id);
            let conceptString = yield (0,_Api_GetConcept__WEBPACK_IMPORTED_MODULE_0__.GetConcept)(id);
            concept = conceptString;
        }
        let startTime = new Date().getTime();
        //console.log("this is the connection list which has to be looped", connectionList);
        let output = yield recursiveFetchConceptSingleLoop(concept, connectionList, compositionList);
        console.log("this is the time for the data to be made", new Date().getTime() - startTime);
        // let output = await recursiveFetchConceptSingleLoop(concept, connectionList,compositionList );
        let mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "";
        returnOutput = output;
        let FinalReturn = {};
        FinalReturn['created_at'] = concept.entryTimeStamp;
        FinalReturn['data'] = returnOutput;
        FinalReturn['id'] = id;
        return FinalReturn;
    });
}
/**
 * ### Format DATAIDDATE #####
 * ### This just returns composition from memory and not from anywhere else.
 * @param id
 * @returns
 */
function GetCompositionWithIdAndDateFromMemory(id) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        if (_app__WEBPACK_IMPORTED_MODULE_4__.serviceWorker) {
            const res = yield (0,_app__WEBPACK_IMPORTED_MODULE_4__.sendMessage)('GetCompositionWithIdAndDateFromMemory', { id });
            console.log('data received from sw', res);
            return res.data;
        }
        let connectionList = [];
        let returnOutput = {};
        connectionList = yield _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_3__.ConnectionData.GetConnectionsOfCompositionLocal(id);
        //connectionList = await ConnectionData.GetConnectionsOfConcept(id);
        let compositionList = [];
        for (let i = 0; i < connectionList.length; i++) {
            if (!compositionList.includes(connectionList[i].ofTheConceptId)) {
                compositionList.push(connectionList[i].ofTheConceptId);
            }
        }
        let concept = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConcept(id);
        if (concept.id == 0 && id != null && id != undefined) {
            let conceptString = yield (0,_Api_GetConcept__WEBPACK_IMPORTED_MODULE_0__.GetConcept)(id);
            concept = conceptString;
        }
        let output = yield recursiveFetch(id, connectionList, compositionList);
        let mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "";
        returnOutput[mainString] = output;
        let FinalReturn = {};
        FinalReturn['data'] = returnOutput;
        FinalReturn['id'] = id;
        FinalReturn['created_at'] = concept.entryTimeStamp;
        return FinalReturn;
    });
}
function GetCompositionWithIdFromMemoryFromConnections(id_1) {
    return __awaiter(this, arguments, void 0, function* (id, connectionList = []) {
        var _a, _b;
        let returnOutput = {};
        //connectionList = await ConnectionData.GetConnectionsOfCompositionLocal(id);
        let compositionList = [];
        for (let i = 0; i < connectionList.length; i++) {
            if (!compositionList.includes(connectionList[i].ofTheConceptId)) {
                compositionList.push(connectionList[i].ofTheConceptId);
            }
        }
        let concept = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConcept(id);
        if (concept.id == 0 && id != null && id != undefined) {
            let conceptString = yield (0,_Api_GetConcept__WEBPACK_IMPORTED_MODULE_0__.GetConcept)(id);
            concept = conceptString;
        }
        let output = yield recursiveFetch(id, connectionList, compositionList);
        let mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "";
        returnOutput[mainString] = output;
        let FinalReturn = {};
        FinalReturn['data'] = returnOutput;
        FinalReturn['id'] = id;
        return FinalReturn;
    });
}
/**
 * #### Format DATAID ####
 * ## This will return the composition even if it is not in the local memory ##
 * @param id
 * @returns
 */
function GetCompositionWithId(id) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        if (_app__WEBPACK_IMPORTED_MODULE_4__.serviceWorker) {
            const res = yield (0,_app__WEBPACK_IMPORTED_MODULE_4__.sendMessage)('GetCompositionWithId', { id });
            console.log('data received from sw', res);
            return res.data;
        }
        let connectionList = [];
        let returnOutput = {};
        let connectionListString = yield (0,_Api_GetAllConnectionsOfComposition__WEBPACK_IMPORTED_MODULE_1__.GetAllConnectionsOfComposition)(id);
        connectionList = connectionListString;
        let compositionList = [];
        for (let i = 0; i < connectionList.length; i++) {
            if (!compositionList.includes(connectionList[i].ofTheConceptId)) {
                compositionList.push(connectionList[i].ofTheConceptId);
            }
        }
        let concept = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConcept(id);
        if (concept.id == 0 && id != null && id != undefined) {
            let conceptString = yield (0,_Api_GetConcept__WEBPACK_IMPORTED_MODULE_0__.GetConcept)(id);
            concept = conceptString;
        }
        let output = yield recursiveFetch(id, connectionList, compositionList);
        let mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "";
        returnOutput[mainString] = output;
        let FinalReturn = {};
        FinalReturn['data'] = returnOutput;
        FinalReturn['id'] = id;
        return FinalReturn;
    });
}
/**
 * ## Format justdata ###
 * ## This contains a concept in the parameter so that you dont have to again find the concept ##
 * This function takes concepts and connections and then builds a json.
 * @param concept The concept that needs to get other concepts that are inside of it.
 * @param connectionList List of connections that are available in the composition. We have to loop over it.
 * @param compositionList Composition list is the list of concepts that have connections inside of them.
 * @param visitedConcepts This is a checking mechanism to not go in loops. So preferably pass an empty array.
 * @returns
 */
function recursiveFetchConcept(concept_1, connectionList_1, compositionList_1) {
    return __awaiter(this, arguments, void 0, function* (concept, connectionList, compositionList, visitedConcepts = []) {
        var _a, _b, _c, _d;
        let output = {};
        let arroutput = [];
        let id = concept.id;
        let mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "";
        if (!compositionList.includes(id)) {
            return concept === null || concept === void 0 ? void 0 : concept.characterValue;
        }
        else {
            if (visitedConcepts.includes(id)) {
                return "";
            }
            else {
                visitedConcepts.push(id);
            }
            for (let i = 0; i < connectionList.length; i++) {
                if (connectionList[i].ofTheConceptId == id) {
                    if (id != connectionList[i].toTheConceptId) {
                        let toConceptId = connectionList[i].toTheConceptId;
                        let toConcept = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConcept(toConceptId);
                        if ((toConcept == null || toConcept.id == 0) && toConceptId != null && toConceptId != undefined) {
                            let conceptString = yield (0,_Api_GetConcept__WEBPACK_IMPORTED_MODULE_0__.GetConcept)(toConceptId);
                            toConcept = conceptString;
                        }
                        if (toConcept.id != 0) {
                            if ((toConcept === null || toConcept === void 0 ? void 0 : toConcept.type) == null) {
                                let toConceptTypeId = toConcept.typeId;
                                let toConceptType = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConcept(toConceptTypeId);
                                toConcept.type = toConceptType;
                                if (toConceptType == null && toConceptTypeId != null && toConceptTypeId != undefined) {
                                    let conceptString = yield (0,_Api_GetConcept__WEBPACK_IMPORTED_MODULE_0__.GetConcept)(toConceptTypeId);
                                    toConceptType = conceptString;
                                    toConcept.type = toConceptType;
                                }
                            }
                        }
                        let regex = "the_";
                        let localmainString = (_d = (_c = toConcept === null || toConcept === void 0 ? void 0 : toConcept.type) === null || _c === void 0 ? void 0 : _c.characterValue) !== null && _d !== void 0 ? _d : "";
                        let localKey = localmainString.replace(regex, "");
                        if (isNaN(Number(localKey))) {
                            if (localKey) {
                                const result = yield recursiveFetchConcept(toConcept, connectionList, compositionList, visitedConcepts);
                                output[localKey] = result;
                            }
                        }
                        else {
                            const result = yield recursiveFetchConcept(toConcept, connectionList, compositionList, visitedConcepts);
                            arroutput[localKey] = result;
                            output = arroutput;
                        }
                    }
                    else {
                        console.log("this is the faulty connection ", connectionList[i]);
                    }
                }
            }
        }
        return output;
    });
}
/**
* ## Format Normal ###
* ## This contains a concept in the parameter so that you dont have to again find the concept ##
* This function takes concepts and connections and then builds a json.
* @param concept The concept that needs to get other concepts that are inside of it.
* @param connectionList List of connections that are available in the composition. We have to loop over it.
* @param compositionList Composition list is the list of concepts that have connections inside of them.
* @param visitedConcepts This is a checking mechanism to not go in loops. So preferably pass an empty array.
* @returns
*/
function recursiveFetchConceptNormal(concept_1, connectionList_1, compositionList_1) {
    return __awaiter(this, arguments, void 0, function* (concept, connectionList, compositionList, visitedConcepts = []) {
        var _a, _b, _c, _d;
        let startTime = new Date().getTime();
        let output = {};
        let arroutput = [];
        let id = concept.id;
        output["id"] = id;
        let mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "";
        if (!compositionList.includes(id)) {
            return concept === null || concept === void 0 ? void 0 : concept.characterValue;
        }
        else {
            if (visitedConcepts.includes(id)) {
                return "";
            }
            else {
                visitedConcepts.push(id);
            }
            for (let i = 0; i < connectionList.length; i++) {
                if (connectionList[i].ofTheConceptId == id) {
                    if (id != connectionList[i].toTheConceptId) {
                        let toConceptId = connectionList[i].toTheConceptId;
                        let toConcept = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConcept(toConceptId);
                        if ((toConcept == null || toConcept.id == 0) && toConceptId != null && toConceptId != undefined) {
                            let conceptString = yield (0,_Api_GetConcept__WEBPACK_IMPORTED_MODULE_0__.GetConcept)(toConceptId);
                            toConcept = conceptString;
                        }
                        if (toConcept.id != 0) {
                            if ((toConcept === null || toConcept === void 0 ? void 0 : toConcept.type) == null) {
                                let toConceptTypeId = toConcept.typeId;
                                let toConceptType = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConcept(toConceptTypeId);
                                toConcept.type = toConceptType;
                                if (toConceptType == null && toConceptTypeId != null && toConceptTypeId != undefined) {
                                    let conceptString = yield (0,_Api_GetConcept__WEBPACK_IMPORTED_MODULE_0__.GetConcept)(toConceptTypeId);
                                    toConceptType = conceptString;
                                    toConcept.type = toConceptType;
                                }
                            }
                        }
                        let regex = "the_";
                        let localmainString = (_d = (_c = toConcept === null || toConcept === void 0 ? void 0 : toConcept.type) === null || _c === void 0 ? void 0 : _c.characterValue) !== null && _d !== void 0 ? _d : "";
                        let localKey = localmainString.replace(regex, "");
                        if (isNaN(Number(localKey))) {
                            if (localKey) {
                                const result = yield recursiveFetchConcept(toConcept, connectionList, compositionList, visitedConcepts);
                                output[localKey] = result;
                            }
                        }
                        else {
                            const result = yield recursiveFetchConcept(toConcept, connectionList, compositionList, visitedConcepts);
                            arroutput[localKey] = result;
                            output = arroutput;
                        }
                    }
                    else {
                        console.log("this is the faulty connection ", connectionList[i]);
                    }
                }
            }
        }
        // console.log("second loop normal", new Date().getTime() - startTime);
        return output;
    });
}
/**
 * ## experimental ##
* This function takes concepts and connections and then builds a json.
* @param concept The concept that needs to get other concepts that are inside of it.
* @param connectionList List of connections that are available in the composition. We have to loop over it.
* @param compositionList Composition list is the list of concepts that have connections inside of them.
* @param visitedConcepts This is a checking mechanism to not go in loops. So preferably pass an empty array.
* @returns
*/
function recursiveFetchConceptSingleLoop(concept_1, connectionList_1, compositionList_1) {
    return __awaiter(this, arguments, void 0, function* (concept, connectionList, compositionList, visitedConcepts = []) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        let output = {};
        let id = concept.id;
        let startTime = new Date().getTime();
        let mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "";
        if (!compositionList.includes(id)) {
            let myString = mainString;
            let returnoutput = { [myString]: concept === null || concept === void 0 ? void 0 : concept.characterValue };
            return returnoutput;
        }
        else {
            if (visitedConcepts.includes(id)) {
                return "";
            }
            else {
                visitedConcepts.push(id);
            }
            for (let i = 0; i < connectionList.length; i++) {
                let newData = yield (0,_app__WEBPACK_IMPORTED_MODULE_4__.GetTheConcept)(connectionList[i].ofTheConceptId);
                let toConcept = yield (0,_app__WEBPACK_IMPORTED_MODULE_4__.GetTheConcept)(connectionList[i].toTheConceptId);
                connectionList[i].ofConcept = newData;
                connectionList[i].toConcept = toConcept;
                let ofKey = newData.id;
                let toConceptKey = (_d = (_c = toConcept === null || toConcept === void 0 ? void 0 : toConcept.type) === null || _c === void 0 ? void 0 : _c.characterValue) !== null && _d !== void 0 ? _d : "";
                let regex = "the_";
                let localmainString = toConceptKey;
                let localToKey = localmainString.replace(regex, "");
                if (output[ofKey] == undefined || output[ofKey] == null) {
                    output[ofKey] = {};
                }
                output[ofKey][localToKey] = toConcept.characterValue;
            }
        }
        let finalOutput = {};
        for (let i = 0; i < connectionList.length; i++) {
            let ofConcept = connectionList[i].ofConcept;
            let toConcept = connectionList[i].toConcept;
            let ofConceptKey = (_f = (_e = ofConcept === null || ofConcept === void 0 ? void 0 : ofConcept.type) === null || _e === void 0 ? void 0 : _e.characterValue) !== null && _f !== void 0 ? _f : "";
            let toConceptKey = (_h = (_g = toConcept === null || toConcept === void 0 ? void 0 : toConcept.type) === null || _g === void 0 ? void 0 : _g.characterValue) !== null && _h !== void 0 ? _h : "";
            let regex = "the_";
            let localmainString = toConceptKey;
            let localToKey = localmainString.replace(regex, "");
            if (finalOutput[ofConcept.id] == undefined || finalOutput[ofConcept.id] == null) {
                finalOutput[ofConcept.id] = {};
            }
            let internalOutput = finalOutput[ofConcept.id];
            if (internalOutput[ofConceptKey] == undefined || internalOutput[ofConceptKey] == null) {
                internalOutput[ofConceptKey] = {};
            }
            if (output[connectionList[i].ofTheConceptId] != undefined && output[connectionList[i].toTheConceptId] != undefined) {
                internalOutput[ofConceptKey][localToKey] = output[toConcept.id];
            }
            else {
                internalOutput[ofConceptKey][localToKey] = toConcept.characterValue;
            }
        }
        return finalOutput[concept.id];
    });
}
/**
 * ## Format justdata ##
 * @param id
 * @param connectionList
 * @param compositionList
 * @param visitedConcepts
 * @returns
 */
function recursiveFetch(id_1, connectionList_1, compositionList_1) {
    return __awaiter(this, arguments, void 0, function* (id, connectionList, compositionList, visitedConcepts = []) {
        var _a, _b, _c, _d;
        let output = {};
        let arroutput = [];
        if (id == 0) {
            return null;
        }
        let concept = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConcept(id);
        if ((concept == null || concept.id == 0) && id != null && id != undefined) {
            let conceptString = yield (0,_Api_GetConcept__WEBPACK_IMPORTED_MODULE_0__.GetConcept)(id);
            concept = conceptString;
        }
        if (concept.id != 0) {
            if (concept.type == null) {
                let toConceptTypeId = concept.typeId;
                let toConceptType = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConcept(toConceptTypeId);
                concept.type = toConceptType;
                if (toConceptType == null && toConceptTypeId != null && toConceptTypeId != undefined) {
                    let conceptString = yield (0,_Api_GetConcept__WEBPACK_IMPORTED_MODULE_0__.GetConcept)(toConceptTypeId);
                    toConceptType = conceptString;
                    concept.type = toConceptType;
                }
            }
        }
        let mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "";
        if (!compositionList.includes(id)) {
            return concept === null || concept === void 0 ? void 0 : concept.characterValue;
        }
        else {
            if (visitedConcepts.includes(id)) {
                return "";
            }
            else {
                visitedConcepts.push(id);
            }
            for (let i = 0; i < connectionList.length; i++) {
                let insideTime = new Date().getTime();
                if (connectionList[i].ofTheConceptId == id) {
                    if (id != connectionList[i].toTheConceptId) {
                        let toConceptId = connectionList[i].toTheConceptId;
                        let toConcept = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConcept(toConceptId);
                        if ((toConcept == null || toConcept.id == 0) && toConceptId != null && toConceptId != undefined) {
                            let conceptString = yield (0,_Api_GetConcept__WEBPACK_IMPORTED_MODULE_0__.GetConcept)(toConceptId);
                            toConcept = conceptString;
                        }
                        if (toConcept.id != 0) {
                            if ((toConcept === null || toConcept === void 0 ? void 0 : toConcept.type) == null) {
                                let toConceptTypeId = toConcept.typeId;
                                let toConceptType = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConcept(toConceptTypeId);
                                toConcept.type = toConceptType;
                                if (toConceptType == null && toConceptTypeId != null && toConceptTypeId != undefined) {
                                    let conceptString = yield (0,_Api_GetConcept__WEBPACK_IMPORTED_MODULE_0__.GetConcept)(toConceptTypeId);
                                    toConceptType = conceptString;
                                    toConcept.type = toConceptType;
                                }
                            }
                        }
                        let regex = "the_";
                        let localmainString = (_d = (_c = toConcept === null || toConcept === void 0 ? void 0 : toConcept.type) === null || _c === void 0 ? void 0 : _c.characterValue) !== null && _d !== void 0 ? _d : "";
                        let localKey = localmainString.replace(regex, "");
                        if (isNaN(Number(localKey))) {
                            if (localKey) {
                                const result = yield recursiveFetch(toConceptId, connectionList, compositionList, visitedConcepts);
                                output[localKey] = result;
                            }
                        }
                        else {
                            const result = yield recursiveFetch(toConceptId, connectionList, compositionList, visitedConcepts);
                            arroutput[localKey] = result;
                            output = arroutput;
                        }
                    }
                    else {
                        console.log("this is the faulty connection ", connectionList[i]);
                    }
                }
            }
        }
        return output;
    });
}
function recursiveFetchWithSubCompositions(id_1, connectionList_1, compositionList_1) {
    return __awaiter(this, arguments, void 0, function* (id, connectionList, compositionList, visitedConcepts = []) {
        var _a, _b, _c, _d;
        let output = {};
        let arroutput = [];
        if (id == 0) {
            return null;
        }
        let concept = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConcept(id);
        if ((concept == null || concept.id == 0) && id != null && id != undefined) {
            let conceptString = yield (0,_Api_GetConcept__WEBPACK_IMPORTED_MODULE_0__.GetConcept)(id);
            concept = conceptString;
        }
        if (concept.id != 0) {
            if (concept.type == null) {
                let toConceptTypeId = concept.typeId;
                let toConceptType = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConcept(toConceptTypeId);
                concept.type = toConceptType;
                if (toConceptType == null && toConceptTypeId != null && toConceptTypeId != undefined) {
                    let conceptString = yield (0,_Api_GetConcept__WEBPACK_IMPORTED_MODULE_0__.GetConcept)(toConceptTypeId);
                    toConceptType = conceptString;
                    concept.type = toConceptType;
                }
            }
        }
        let mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "";
        if (!compositionList.includes(id)) {
            return concept === null || concept === void 0 ? void 0 : concept.characterValue;
        }
        else {
            if (visitedConcepts.includes(id)) {
                return "";
            }
            else {
                visitedConcepts.push(id);
            }
            output["id"] = id;
            for (let i = 0; i < connectionList.length; i++) {
                if (connectionList[i].ofTheConceptId == id) {
                    let toConceptId = connectionList[i].toTheConceptId;
                    let toConcept = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConcept(toConceptId);
                    if ((toConcept == null || toConcept.id == 0) && toConceptId != null && toConceptId != undefined) {
                        let conceptString = yield (0,_Api_GetConcept__WEBPACK_IMPORTED_MODULE_0__.GetConcept)(toConceptId);
                        toConcept = conceptString;
                    }
                    if (toConcept) {
                        if ((toConcept === null || toConcept === void 0 ? void 0 : toConcept.type) == null) {
                            let toConceptTypeId = toConcept.typeId;
                            let toConceptType = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConcept(toConceptTypeId);
                            toConcept.type = toConceptType;
                            if (toConceptType == null && toConceptTypeId != null && toConceptTypeId != undefined) {
                                let conceptString = yield (0,_Api_GetConcept__WEBPACK_IMPORTED_MODULE_0__.GetConcept)(toConceptTypeId);
                                toConceptType = conceptString;
                                toConcept.type = toConceptType;
                            }
                        }
                    }
                    let regex = "the_";
                    let localmainString = (_d = (_c = toConcept === null || toConcept === void 0 ? void 0 : toConcept.type) === null || _c === void 0 ? void 0 : _c.characterValue) !== null && _d !== void 0 ? _d : "";
                    let localKey = localmainString.replace(regex, "");
                    if (isNaN(Number(localKey))) {
                        if (localKey) {
                            const result = yield recursiveFetchWithSubCompositions(toConceptId, connectionList, compositionList);
                            output[localKey] = result;
                        }
                    }
                    else {
                        const result = yield recursiveFetchWithSubCompositions(toConceptId, connectionList, compositionList);
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

/***/ "./src/Services/GetCompositionBulk.ts":
/*!********************************************!*\
  !*** ./src/Services/GetCompositionBulk.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetCompositionBulk: () => (/* binding */ GetCompositionBulk),
/* harmony export */   GetCompositionBulkWithDataId: () => (/* binding */ GetCompositionBulkWithDataId),
/* harmony export */   GetCompositionFromConnectionsInObject: () => (/* binding */ GetCompositionFromConnectionsInObject),
/* harmony export */   GetCompositionFromConnectionsInObjectNormal: () => (/* binding */ GetCompositionFromConnectionsInObjectNormal),
/* harmony export */   GetCompositionFromConnectionsWithDataId: () => (/* binding */ GetCompositionFromConnectionsWithDataId),
/* harmony export */   GetCompositionFromConnectionsWithDataIdInObject: () => (/* binding */ GetCompositionFromConnectionsWithDataIdInObject),
/* harmony export */   GetCompositionFromConnectionsWithDataIdInObjectNew: () => (/* binding */ GetCompositionFromConnectionsWithDataIdInObjectNew),
/* harmony export */   GetCompositionFromConnectionsWithDataIdIndex: () => (/* binding */ GetCompositionFromConnectionsWithDataIdIndex),
/* harmony export */   GetCompositionFromConnectionsWithIndex: () => (/* binding */ GetCompositionFromConnectionsWithIndex),
/* harmony export */   GetConnectionDataPrefetch: () => (/* binding */ GetConnectionDataPrefetch)
/* harmony export */ });
/* harmony import */ var _Api_GetAllConnectionsOfCompositionBulk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Api/GetAllConnectionsOfCompositionBulk */ "./src/Api/GetAllConnectionsOfCompositionBulk.ts");
/* harmony import */ var _Api_GetConnectionBulk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Api/GetConnectionBulk */ "./src/Api/GetConnectionBulk.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app */ "./src/app.ts");
/* harmony import */ var _FindConnectionsOfCompositionBulkInMemory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FindConnectionsOfCompositionBulkInMemory */ "./src/Services/FindConnectionsOfCompositionBulkInMemory.ts");
/* harmony import */ var _GetComposition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GetComposition */ "./src/Services/GetComposition.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





/**
 * ## Format JUSTDATA ##
 * Function converts the conceptIds to json (compositions)
 * This function takes in the conceptIds and returns a list of compositions related to those concepts.
 * @param conceptIds  list of concept ids that are compositions.
 * @returns compositions
 */
function GetCompositionBulk() {
    return __awaiter(this, arguments, void 0, function* (conceptIds = []) {
        yield (0,_Api_GetAllConnectionsOfCompositionBulk__WEBPACK_IMPORTED_MODULE_0__.GetAllConnectionsOfCompositionBulk)(conceptIds);
        let compositions = [];
        for (let i = 0; i < conceptIds.length; i++) {
            let comp = yield (0,_GetComposition__WEBPACK_IMPORTED_MODULE_4__.GetCompositionFromMemory)(conceptIds[i]);
            compositions.push(comp);
        }
        return compositions;
    });
}
/**
 * ## FORMAT DATAIDDATE ##
 * Function converts the conceptIds to json (compositions)
 * @param conceptIds this is the list of concept ids that should be converted to compostions in data - id format.
 * @returns list of compositions in the data - id format.
 */
function GetCompositionBulkWithDataId() {
    return __awaiter(this, arguments, void 0, function* (conceptIds = []) {
        yield (0,_Api_GetAllConnectionsOfCompositionBulk__WEBPACK_IMPORTED_MODULE_0__.GetAllConnectionsOfCompositionBulk)(conceptIds);
        let compositions = [];
        for (let i = 0; i < conceptIds.length; i++) {
            let comp = yield (0,_GetComposition__WEBPACK_IMPORTED_MODULE_4__.GetCompositionWithIdFromMemory)(conceptIds[i]);
            compositions.push(comp);
        }
        return compositions;
    });
}
/**
 * ## FORMAT DATAIDDATE ##
 * This function converts the conceptIds and internal connectionIds to compositions in data-Id format.
 * @param conceptIds This is the list of concept ids that need to be converted to compositions.
 * @param connectionIds These are the internal connectionIds that need to be passed to create the compositions.
 * @returns list of compositions created from the passed conceptIds and connectionIds.
 */
function GetCompositionFromConnectionsWithDataId() {
    return __awaiter(this, arguments, void 0, function* (conceptIds = [], connectionIds = []) {
        if (_app__WEBPACK_IMPORTED_MODULE_2__.serviceWorker) {
            const res = yield (0,_app__WEBPACK_IMPORTED_MODULE_2__.sendMessage)('GetCompositionFromConnectionsWithDataId', { conceptIds, connectionIds });
            console.log('data received from sw', res);
            return res.data;
        }
        let newConnections = yield (0,_Api_GetConnectionBulk__WEBPACK_IMPORTED_MODULE_1__.GetConnectionBulk)(connectionIds);
        let oldConnections = yield (0,_FindConnectionsOfCompositionBulkInMemory__WEBPACK_IMPORTED_MODULE_3__.FindConnectionsOfCompositionsBulkInMemory)(conceptIds);
        //CheckForConnectionDeletionWithIds(connectionIds,oldConnections);
        let compositions = [];
        for (let i = 0; i < conceptIds.length; i++) {
            let comp = yield (0,_GetComposition__WEBPACK_IMPORTED_MODULE_4__.GetCompositionWithIdFromMemory)(conceptIds[i]);
            compositions.push(comp);
        }
        return compositions;
    });
}
/**
 * ## Format DATAIDDATE ##
 * This function converts the conceptIds and internal connectionIds to compositions in data-Id format with index(conceptId).
 * @param conceptIds This is the list of concept ids that need to be converted to compositions.
 * @param connectionIds These are the internal connectionIds that need to be passed to create the compositions.
 * @returns dictionary of compositions created from the passed conceptIds and connectionIds with conceptId as its index .
 */
function GetCompositionFromConnectionsWithDataIdIndex() {
    return __awaiter(this, arguments, void 0, function* (conceptIds = [], connectionIds = []) {
        if (_app__WEBPACK_IMPORTED_MODULE_2__.serviceWorker) {
            const res = yield (0,_app__WEBPACK_IMPORTED_MODULE_2__.sendMessage)('GetCompositionFromConnectionsWithDataIdIndex', { conceptIds, connectionIds });
            console.log('data received from sw', res);
            return res.data;
        }
        let newConnections = yield (0,_Api_GetConnectionBulk__WEBPACK_IMPORTED_MODULE_1__.GetConnectionBulk)(connectionIds);
        let myNewConnections = newConnections;
        let oldConnections = yield (0,_FindConnectionsOfCompositionBulkInMemory__WEBPACK_IMPORTED_MODULE_3__.FindConnectionsOfCompositionsBulkInMemory)(conceptIds);
        //CheckForConnectionDeletionWithIds(connectionIds,oldConnections);
        let compositions = {};
        for (let i = 0; i < conceptIds.length; i++) {
            let comp = yield (0,_GetComposition__WEBPACK_IMPORTED_MODULE_4__.GetCompositionWithIdFromMemory)(conceptIds[i]);
            compositions[conceptIds[i]] = comp;
        }
        return compositions;
    });
}
/**
 * ## Format is dictionary with key as concept id and value as data (json) ##
 * This function converts the conceptIds and internal connectionIds to compositions format with index(conceptId).
 * @param conceptIds This is the list of concept ids that need to be converted to compositions.
 * @param connectionIds These are the internal connectionIds that need to be passed to create the compositions.
 * @returns dictionary of compositions created from the passed conceptIds and connectionIds with conceptId as its index .
 */
function GetCompositionFromConnectionsWithIndex() {
    return __awaiter(this, arguments, void 0, function* (conceptIds = [], connectionIds = []) {
        let newConnections = yield (0,_Api_GetConnectionBulk__WEBPACK_IMPORTED_MODULE_1__.GetConnectionBulk)(connectionIds);
        let myNewConnections = newConnections;
        let oldConnections = yield (0,_FindConnectionsOfCompositionBulkInMemory__WEBPACK_IMPORTED_MODULE_3__.FindConnectionsOfCompositionsBulkInMemory)(conceptIds);
        //CheckForConnectionDeletionWithIds(connectionIds,oldConnections);
        let compositions = {};
        for (let i = 0; i < conceptIds.length; i++) {
            let comp = yield (0,_GetComposition__WEBPACK_IMPORTED_MODULE_4__.GetCompositionFromMemory)(conceptIds[i]);
            compositions[conceptIds[i]] = comp;
        }
        return compositions;
    });
}
/**
 * Used to prefetch all the connections and their related concepts.
 * @param connectionIds these are the connection ids that are used to fetch all the connections and also their related concepts.
 * @returns all the connections that are passed as ids.
 */
function GetConnectionDataPrefetch(connectionIds) {
    return __awaiter(this, void 0, void 0, function* () {
        let remainingConnections = [];
        let connectionsAll = [];
        let remainingIds = {};
        for (let i = 0; i < connectionIds.length; i++) {
            let connection = yield _app__WEBPACK_IMPORTED_MODULE_2__.ConnectionData.GetConnection(connectionIds[i]);
            // console.log("this is the connection fetch", connection);
            if (connection.id == 0) {
                remainingConnections.push(connectionIds[i]);
            }
            else {
                connectionsAll.push(connection);
            }
        }
        for (let i = 0; i < connectionIds.length; i++) {
            remainingIds[connectionIds[i]] = false;
        }
        //await ConnectionData.GetConnectionBulkData(connectionIds, connectionsAll, remainingIds);
        // for(let key in remainingIds){
        //     if(remainingIds[key] == false){
        //         remainingConnections.push(Number(key));
        //     }
        // }
        // remainingConnections = connectionIds;
        let prefetchConcepts = [];
        let connectionsAllLocal = yield (0,_Api_GetConnectionBulk__WEBPACK_IMPORTED_MODULE_1__.GetConnectionBulk)(remainingConnections);
        connectionsAll = [...connectionsAll, ...connectionsAllLocal];
        for (let j = 0; j < connectionsAll.length; j++) {
            prefetchConcepts.push(connectionsAll[j].ofTheConceptId);
            prefetchConcepts.push(connectionsAll[j].toTheConceptId);
        }
        yield (0,_app__WEBPACK_IMPORTED_MODULE_2__.GetConceptBulk)(prefetchConcepts);
        return connectionsAll;
    });
}
/**
 * ## Format DATAIDDATE ##
 * This function converts the conceptIds and internal connections to create compositions.
 * Format is of a dictionary with ids as the key and value is the composition data.
 * @param conceptIds these are the concept ids that need to be fetched to create their compositions
 * @param connections these are the connections that are used to create the structure.
 * @returns a dictionary / object that has key as their conceptId and the value as their composition object.
 */
function GetCompositionFromConnectionsWithDataIdInObject() {
    return __awaiter(this, arguments, void 0, function* (conceptIds = [], connections = []) {
        // get all the connections that are not available in memory from the api.
        yield (0,_Api_GetConnectionBulk__WEBPACK_IMPORTED_MODULE_1__.GetConnectionBulk)(connections);
        // create a list of compositions from the fetched concepts and connections.
        let compositions = {};
        for (let i = 0; i < conceptIds.length; i++) {
            let comp = yield (0,_GetComposition__WEBPACK_IMPORTED_MODULE_4__.GetCompositionWithIdFromMemory)(conceptIds[i]);
            compositions[conceptIds[i]] = comp;
        }
        return compositions;
    });
}
/**
 * ## Format DATAIDDATE ##
 * ## duplicate ##
 * This function converts the conceptIds and internal connections to create compositions.
 * @param conceptIds these are the concept ids that need to be fetched to create their compositions
 * @param connections these are the connections that are used to create the structure.
 * @returns a dictionary / object that has key as their conceptId and the value as their composition object.
 */
function GetCompositionFromConnectionsWithDataIdInObjectNew() {
    return __awaiter(this, arguments, void 0, function* (conceptIds = [], connections = []) {
        // get all the connections that are not available in memory from the api.
        yield (0,_Api_GetConnectionBulk__WEBPACK_IMPORTED_MODULE_1__.GetConnectionBulk)(connections);
        // create a list of compositions from the fetched concepts and connections.
        let compositions = {};
        for (let i = 0; i < conceptIds.length; i++) {
            let comp = yield (0,_GetComposition__WEBPACK_IMPORTED_MODULE_4__.GetCompositionWithIdFromMemoryNew)(conceptIds[i]);
            compositions[conceptIds[i]] = comp;
        }
        return compositions;
    });
}
/**
 * ## Format justdata ##
 * This function converts the conceptIds and internal connections to create compositions.
 * @param conceptIds these are the concept ids that need to be fetched to create their compositions
 * @param connections these are the connections that are used to create the structure.
 * @returns a dictionary / object that has key as their conceptId and the value as their composition object.
 */
function GetCompositionFromConnectionsInObject() {
    return __awaiter(this, arguments, void 0, function* (conceptIds = [], connections = []) {
        // get all the connections that are not available in memory from the api.
        yield (0,_Api_GetConnectionBulk__WEBPACK_IMPORTED_MODULE_1__.GetConnectionBulk)(connections);
        // create a list of compositions from the fetched concepts and connections.
        let compositions = {};
        for (let i = 0; i < conceptIds.length; i++) {
            let comp = yield (0,_GetComposition__WEBPACK_IMPORTED_MODULE_4__.GetCompositionFromMemory)(conceptIds[i]);
            compositions[conceptIds[i]] = comp;
        }
        return compositions;
    });
}
/**
 * ## Format Normal ##
 * This function converts the conceptIds and internal connections to create compositions.
 * @param conceptIds these are the concept ids that need to be fetched to create their compositions
 * @param connections these are the connections that are used to create the structure.
 * @returns a dictionary / object that has key as their conceptId and the value as their composition object.
 */
function GetCompositionFromConnectionsInObjectNormal() {
    return __awaiter(this, arguments, void 0, function* (conceptIds = [], connections = []) {
        // get all the connections that are not available in memory from the api.
        yield (0,_Api_GetConnectionBulk__WEBPACK_IMPORTED_MODULE_1__.GetConnectionBulk)(connections);
        // create a list of compositions from the fetched concepts and connections.
        let compositions = {};
        for (let i = 0; i < conceptIds.length; i++) {
            let comp = yield (0,_GetComposition__WEBPACK_IMPORTED_MODULE_4__.GetCompositionFromMemoryNormal)(conceptIds[i]);
            compositions[conceptIds[i]] = comp;
        }
        return compositions;
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
/* harmony export */   FormatTheConcepts: () => (/* binding */ FormatTheConcepts),
/* harmony export */   GetCompositionList: () => (/* binding */ GetCompositionList),
/* harmony export */   GetCompositionListAll: () => (/* binding */ GetCompositionListAll),
/* harmony export */   GetCompositionListAllWithId: () => (/* binding */ GetCompositionListAllWithId),
/* harmony export */   GetCompositionListWithId: () => (/* binding */ GetCompositionListWithId),
/* harmony export */   GetCompositionListWithIdUpdated: () => (/* binding */ GetCompositionListWithIdUpdated)
/* harmony export */ });
/* harmony import */ var _Api_GetAllConceptsByType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Api/GetAllConceptsByType */ "./src/Api/GetAllConceptsByType.ts");
/* harmony import */ var _Api_GetAllConnectionsOfCompositionBulk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Api/GetAllConnectionsOfCompositionBulk */ "./src/Api/GetAllConnectionsOfCompositionBulk.ts");
/* harmony import */ var _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DataStructures/ConceptData */ "./src/DataStructures/ConceptData.ts");
/* harmony import */ var _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DataStructures/Local/LocalConceptData */ "./src/DataStructures/Local/LocalConceptData.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app */ "./src/app.ts");
/* harmony import */ var _GetComposition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GetComposition */ "./src/Services/GetComposition.ts");
/* harmony import */ var _GetConceptByCharacter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GetConceptByCharacter */ "./src/Services/GetConceptByCharacter.ts");
/* harmony import */ var _Local_GetConceptByCharacterLocal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Local/GetConceptByCharacterLocal */ "./src/Services/Local/GetConceptByCharacterLocal.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








// get the list of compositions from the type 
// for eg get list of boomgpt
function GetCompositionList(compositionName_1, userId_1) {
    return __awaiter(this, arguments, void 0, function* (compositionName, userId, inpage = 10, page = 1) {
        if (_app__WEBPACK_IMPORTED_MODULE_4__.serviceWorker) {
            const res = yield (0,_app__WEBPACK_IMPORTED_MODULE_4__.sendMessage)('GetCompositionList', { compositionName, userId, inpage, page });
            console.log('data received from sw', res);
            return res.data;
        }
        let concept = yield (0,_GetConceptByCharacter__WEBPACK_IMPORTED_MODULE_6__["default"])(compositionName);
        let CompositionList = [];
        if (concept) {
            yield (0,_Api_GetAllConceptsByType__WEBPACK_IMPORTED_MODULE_0__.GetAllConceptsByType)(compositionName, userId);
            let conceptList = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConceptsByTypeIdAndUser(concept.id, userId);
            let startPage = inpage * (page - 1);
            let prefetchComposition = [];
            for (let i = startPage; i < startPage + inpage; i++) {
                if (conceptList[i]) {
                    prefetchComposition.push(conceptList[i].id);
                }
            }
            yield (0,_Api_GetAllConnectionsOfCompositionBulk__WEBPACK_IMPORTED_MODULE_1__.GetAllConnectionsOfCompositionBulk)(prefetchComposition);
            for (let i = startPage; i < startPage + inpage; i++) {
                if (conceptList[i]) {
                    let compositionJson = yield (0,_GetComposition__WEBPACK_IMPORTED_MODULE_5__.GetCompositionFromMemory)(conceptList[i].id);
                    CompositionList.push(compositionJson);
                }
            }
        }
        return CompositionList;
    });
}
function GetCompositionListAll(compositionName_1, userId_1) {
    return __awaiter(this, arguments, void 0, function* (compositionName, userId, inpage = 10, page = 1) {
        let LocalCompositionList = (0,_app__WEBPACK_IMPORTED_MODULE_4__.GetCompositionListLocal)(compositionName, userId);
        let CompositionList = GetCompositionList(compositionName, userId);
        let AllList = [];
        Promise.race([LocalCompositionList, CompositionList])
            .then((result) => {
            console.log("Promise result", result);
            AllList.push(...result);
        })
            .catch((error) => {
            console.log("error in handling", error);
        });
        CompositionList.then((result) => {
            console.log("This is the second promise result", result);
            AllList.push(...result);
        });
        return AllList;
    });
}
// export async function GetCompositionListAllWithId(compositionName: string,userId:number,  inpage:number = 10, page:number =1){
//    let LocalCompositionList =  await GetCompositionListLocalWithId(compositionName, userId);
//    console.log("tbis is the local composition list", LocalCompositionList);
//    let CompositionList =    await GetCompositionListWithId(compositionName,userId)
//    console.log("this is the online composition list", CompositionList);
//    let AllList: any[] = [];
//    // Promise.race([LocalCompositionList, CompositionList])
//    // .then((result)=> {
//    //    console.log("Promise result", result);
//    //    AllList.push(...result);
//    // })
//    // .catch((error)=>{
//    //    console.log("error in handling", error);
//    // });
//    // CompositionList.then((result)=>{
//    //    console.log("This is the second promise result", result);
//    //    AllList.push(...result);
//    // })
//    AllList.push(...LocalCompositionList);
//    AllList.push(...CompositionList);
//    return AllList;
// }
function GetCompositionListAllWithId(compositionName_1, userId_1) {
    return __awaiter(this, arguments, void 0, function* (compositionName, userId, inpage = 10, page = 1) {
        let conceptLocal = yield (0,_Local_GetConceptByCharacterLocal__WEBPACK_IMPORTED_MODULE_7__["default"])(compositionName);
        let conceptOnline = yield (0,_GetConceptByCharacter__WEBPACK_IMPORTED_MODULE_6__["default"])(compositionName);
        let CompositionList = [];
        let conceptList = [];
        let conceptListLocal = [];
        let finalLocal = [];
        let conceptListOnline = [];
        if (conceptLocal.id != 0) {
            conceptListLocal = yield _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_3__.LocalConceptsData.GetConceptsByTypeIdAndUser(conceptLocal.id, userId);
        }
        if (conceptOnline.id != 0) {
            yield (0,_Api_GetAllConceptsByType__WEBPACK_IMPORTED_MODULE_0__.GetAllConceptsByType)(compositionName, userId);
            conceptListOnline = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConceptsByTypeIdAndUser(conceptOnline.id, userId);
            conceptList = conceptListOnline;
        }
        for (let i = 0; i < conceptListLocal.length; i++) {
            let isDuplicate = false;
            for (let j = 0; j < conceptListOnline.length; j++) {
                if (conceptListLocal[i].ghostId == conceptListOnline[j].ghostId) {
                    isDuplicate = true;
                }
            }
            if (!isDuplicate) {
                finalLocal.push(conceptListLocal[i]);
            }
        }
        console.log("This is the all list", finalLocal);
        let AllList = [];
        AllList = yield FormatTheConcepts(conceptList, finalLocal, inpage, page);
        return AllList;
    });
}
function GetCompositionListWithId(compositionName_1, userId_1) {
    return __awaiter(this, arguments, void 0, function* (compositionName, userId, inpage = 10, page = 1) {
        if (_app__WEBPACK_IMPORTED_MODULE_4__.serviceWorker) {
            const res = yield (0,_app__WEBPACK_IMPORTED_MODULE_4__.sendMessage)('GetCompositionListWithId', { compositionName, userId, inpage, page });
            console.log('data received from sw', res);
            return res.data;
        }
        let concept = yield (0,_GetConceptByCharacter__WEBPACK_IMPORTED_MODULE_6__["default"])(compositionName);
        let CompositionList = [];
        if (concept) {
            yield (0,_Api_GetAllConceptsByType__WEBPACK_IMPORTED_MODULE_0__.GetAllConceptsByType)(compositionName, userId);
            let conceptList = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConceptsByTypeIdAndUser(concept.id, userId);
            let startPage = inpage * (page - 1);
            let prefetchComposition = [];
            for (let i = startPage; i < startPage + inpage; i++) {
                if (conceptList[i]) {
                    prefetchComposition.push(conceptList[i].id);
                }
            }
            yield (0,_Api_GetAllConnectionsOfCompositionBulk__WEBPACK_IMPORTED_MODULE_1__.GetAllConnectionsOfCompositionBulk)(prefetchComposition);
            for (let i = startPage; i < startPage + inpage; i++) {
                if (conceptList[i]) {
                    let compositionJson = yield (0,_GetComposition__WEBPACK_IMPORTED_MODULE_5__.GetCompositionWithIdFromMemory)(conceptList[i].id);
                    CompositionList.push(compositionJson);
                }
            }
        }
        return CompositionList;
    });
}
function GetCompositionListWithIdUpdated(compositionName_1, userId_1) {
    return __awaiter(this, arguments, void 0, function* (compositionName, userId, inpage = 10, page = 1) {
        let concept = yield (0,_GetConceptByCharacter__WEBPACK_IMPORTED_MODULE_6__.GetConceptByCharacterUpdated)(compositionName);
        let CompositionList = [];
        if (concept) {
            yield (0,_Api_GetAllConceptsByType__WEBPACK_IMPORTED_MODULE_0__.GetAllConceptsByType)(compositionName, userId);
            let conceptList = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConceptsByTypeIdAndUser(concept.id, userId);
            let startPage = inpage * (page - 1);
            let prefetchComposition = [];
            for (let i = startPage; i < startPage + inpage; i++) {
                if (conceptList[i]) {
                    prefetchComposition.push(conceptList[i].id);
                }
            }
            yield (0,_Api_GetAllConnectionsOfCompositionBulk__WEBPACK_IMPORTED_MODULE_1__.GetAllConnectionsOfCompositionBulk)(prefetchComposition);
            for (let i = startPage; i < startPage + inpage; i++) {
                if (conceptList[i]) {
                    let compositionJson = yield (0,_GetComposition__WEBPACK_IMPORTED_MODULE_5__.GetCompositionWithIdFromMemory)(conceptList[i].id);
                    CompositionList.push(compositionJson);
                }
            }
        }
        return CompositionList;
    });
}
function FormatTheConcepts(conceptList_1, localConceptList_1) {
    return __awaiter(this, arguments, void 0, function* (conceptList, localConceptList, inpage = 10, page = 1) {
        let CompositionList = [];
        let startPage = inpage * (page - 1);
        let prefetchComposition = [];
        let localConceptLength = localConceptList.length;
        for (let i = startPage; i < startPage + inpage - localConceptLength; i++) {
            if (conceptList[i]) {
                prefetchComposition.push(conceptList[i].id);
            }
        }
        for (let i = 0; i < localConceptList.length; i++) {
            let compositionJson = yield (0,_app__WEBPACK_IMPORTED_MODULE_4__.GetCompositionLocalWithId)(localConceptList[i].id);
            CompositionList.push(compositionJson);
        }
        yield (0,_Api_GetAllConnectionsOfCompositionBulk__WEBPACK_IMPORTED_MODULE_1__.GetAllConnectionsOfCompositionBulk)(prefetchComposition);
        for (let i = startPage; i < startPage + inpage - localConceptLength; i++) {
            if (conceptList[i]) {
                let compositionJson = yield (0,_GetComposition__WEBPACK_IMPORTED_MODULE_5__.GetCompositionWithIdFromMemory)(conceptList[i].id);
                CompositionList.push(compositionJson);
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
/* harmony export */   GetConceptByCharacterUpdated: () => (/* binding */ GetConceptByCharacterUpdated),
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
        let concept = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_1__.ConceptsData.GetConceptByCharacter(characterValue);
        let literalCharacter = `${characterValue}`;
        if ((concept == null || (concept === null || concept === void 0 ? void 0 : concept.id) == 0) && literalCharacter) {
            yield (0,_Api_GetConceptByCharacterValue__WEBPACK_IMPORTED_MODULE_0__.GetConceptByCharacterValue)(characterValue);
            concept = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_1__.ConceptsData.GetConceptByCharacterAndTypeLocal(characterValue, 51);
            if (concept.id == 0) {
                concept = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_1__.ConceptsData.GetConceptByCharacter(characterValue);
            }
        }
        return concept;
    });
}
function GetConceptByCharacterUpdated(characterValue) {
    return __awaiter(this, void 0, void 0, function* () {
        let concept = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_1__.ConceptsData.GetConceptByCharacter(characterValue);
        let literalCharacter = `${characterValue}`;
        if ((concept == null || (concept === null || concept === void 0 ? void 0 : concept.id) == 0) && literalCharacter) {
            yield (0,_Api_GetConceptByCharacterValue__WEBPACK_IMPORTED_MODULE_0__.GetConceptByCharacterValue)(characterValue);
            concept = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_1__.ConceptsData.GetConceptByCharacter(characterValue);
        }
        return concept;
    });
}


/***/ }),

/***/ "./src/Services/GetConnectionBetweenTwoConceptsLinker.ts":
/*!***************************************************************!*\
  !*** ./src/Services/GetConnectionBetweenTwoConceptsLinker.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetConnectionBetweenTwoConceptsLinker: () => (/* binding */ GetConnectionBetweenTwoConceptsLinker)
/* harmony export */ });
/* harmony import */ var _Api_GetCompositionConnectionsBetweenTwoConcepts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Api/GetCompositionConnectionsBetweenTwoConcepts */ "./src/Api/GetCompositionConnectionsBetweenTwoConcepts.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app */ "./src/app.ts");
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



/**
 * This function will give you all the connections between two concepts by their linker or fullLinker
 * @param ofTheConcept start of the connecction
 * @param toTheConcept end of the connection
 * @param linker the primitive linkers with type connection (16) these are the old type of linkers (if you want full linker then put this as empty string)
 * @param fullLinker fullLinker is the modern linker (if you want linker then put this as empty string)
 * @param forward if you want to get the forward relation in the primitive linker put true else for backward linker false.
 * @returns list of connections
 */
function GetConnectionBetweenTwoConceptsLinker(ofTheConcept_1, toTheConcept_1, linker_1, fullLinker_1) {
    return __awaiter(this, arguments, void 0, function* (ofTheConcept, toTheConcept, linker, fullLinker, forward = true) {
        var _a, _b;
        let typeConcept = (0,_app__WEBPACK_IMPORTED_MODULE_1__.CreateDefaultConcept)();
        if (linker != "") {
            let typeLinker = "";
            if (forward) {
                let prefix = ((_a = ofTheConcept.type) === null || _a === void 0 ? void 0 : _a.characterValue) + "_s";
                let linkerAdd = linker + "_s";
                let forwardLinker = prefix + "_" + linkerAdd;
                typeLinker = forwardLinker;
            }
            else {
                let prefix1 = ((_b = toTheConcept.type) === null || _b === void 0 ? void 0 : _b.characterValue) + "_s";
                let linkerAdd1 = linker + "_by";
                let backwardLinker = prefix1 + "_" + linkerAdd1;
                typeLinker = backwardLinker;
            }
            typeConcept = yield (0,_MakeTheInstanceConcept__WEBPACK_IMPORTED_MODULE_2__["default"])("connection", typeLinker, false, 999);
        }
        if (fullLinker != "") {
            typeConcept = yield (0,_app__WEBPACK_IMPORTED_MODULE_1__.MakeTheTypeConceptApi)(fullLinker, 999);
        }
        let connections = yield (0,_Api_GetCompositionConnectionsBetweenTwoConcepts__WEBPACK_IMPORTED_MODULE_0__.GetCompositionConnectionsBetweenTwoConcepts)(ofTheConcept.id, toTheConcept.id, typeConcept.id);
        return connections;
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
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app */ "./src/app.ts");
/* harmony import */ var _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DataStructures/ConnectionData */ "./src/DataStructures/ConnectionData.ts");
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
        if (_app__WEBPACK_IMPORTED_MODULE_1__.serviceWorker) {
            const res = yield (0,_app__WEBPACK_IMPORTED_MODULE_1__.sendMessage)('GetConnectionById', { id });
            console.log('data received from sw', res);
            return res.data;
        }
        let connection = yield _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_2__.ConnectionData.GetConnection(id);
        if ((connection == null || connection.id == 0) && id != null && id != undefined) {
            let connectionString = yield (0,_Api_GetConnection__WEBPACK_IMPORTED_MODULE_0__.GetConnection)(id);
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
/* harmony export */   GetConnectionsFromIndexDb: () => (/* binding */ GetConnectionsFromIndexDb),
/* harmony export */   GetConnectionsFromIndexDbLocal: () => (/* binding */ GetConnectionsFromIndexDbLocal)
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




function GetConnectionsFromIndexDb() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let connectionList = yield (0,_Database_indexeddb__WEBPACK_IMPORTED_MODULE_3__.getObjectsFromIndexDb)("connection");
            if (Array.isArray(connectionList)) {
                for (let i = 0; i < connectionList.length; i++) {
                    _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_0__.ConnectionData.AddConnectionToMemory(connectionList[i]);
                }
            }
        }
        catch (error) {
            let errorObject = {
                "message": "Cannot create Connection Binary Tree Concept",
                "ok": false,
                "status": 400,
                "data": error
            };
            throw errorObject;
        }
    });
}
function GetConnectionsFromIndexDbLocal() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let connectionList = yield (0,_Database_indexdblocal__WEBPACK_IMPORTED_MODULE_2__.getObjectsFromLocalIndexDb)("localconnection");
            if (Array.isArray(connectionList)) {
                for (let i = 0; i < connectionList.length; i++) {
                    _DataStructures_Local_LocalConnectionData__WEBPACK_IMPORTED_MODULE_1__.LocalConnectionData.AddConnectionToMemory(connectionList[i]);
                }
            }
        }
        catch (error) {
            let errorObject = {
                "message": "Cannot create Local Connection Binary Tree Concept",
                "ok": false,
                "status": 400,
                "data": error
            };
            throw errorObject;
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
/* harmony export */   GetLink: () => (/* binding */ GetLink),
/* harmony export */   GetLinkRaw: () => (/* binding */ GetLinkRaw)
/* harmony export */ });
/* harmony import */ var _Api_GetConceptByCharacterAndType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Api/GetConceptByCharacterAndType */ "./src/Api/GetConceptByCharacterAndType.ts");
/* harmony import */ var _Api_GetConnectionOfTheConcept__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Api/GetConnectionOfTheConcept */ "./src/Api/GetConnectionOfTheConcept.ts");
/* harmony import */ var _GetComposition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GetComposition */ "./src/Services/GetComposition.ts");
/* harmony import */ var _GetTheConcept__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GetTheConcept */ "./src/Services/GetTheConcept.ts");
/* harmony import */ var _Api_GetAllConnectionsOfCompositionBulk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Api/GetAllConnectionsOfCompositionBulk */ "./src/Api/GetAllConnectionsOfCompositionBulk.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app */ "./src/app.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






function GetLink(id_1, linker_1) {
    return __awaiter(this, arguments, void 0, function* (id, linker, inpage = 10, page = 1) {
        var _a;
        if (_app__WEBPACK_IMPORTED_MODULE_5__.serviceWorker) {
            console.log('data receiving');
            const res = yield (0,_app__WEBPACK_IMPORTED_MODULE_5__.sendMessage)('GetLink', { id, linker, inpage, page });
            console.log('data received from sw', res);
            return res.data;
        }
        let output = [];
        let concept = yield (0,_GetTheConcept__WEBPACK_IMPORTED_MODULE_3__["default"])(id);
        let linkString = ((_a = concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) + "_s" + "_" + linker;
        let relatedConceptString = yield (0,_Api_GetConceptByCharacterAndType__WEBPACK_IMPORTED_MODULE_0__.GetConceptByCharacterAndType)(linkString, 16);
        let relatedConcept = relatedConceptString;
        if (relatedConcept.id > 0) {
            let connectionsString = yield (0,_Api_GetConnectionOfTheConcept__WEBPACK_IMPORTED_MODULE_1__.GetConnectionOfTheConcept)(relatedConcept.id, concept.id, concept.userId, inpage, page);
            let connections = connectionsString;
            let prefetch = [];
            for (let i = 0; i < connections.length; i++) {
                prefetch.push(connections[i].toTheConceptId);
            }
            yield (0,_Api_GetAllConnectionsOfCompositionBulk__WEBPACK_IMPORTED_MODULE_4__.GetAllConnectionsOfCompositionBulk)(prefetch);
            for (let i = 0; i < connections.length; i++) {
                let toConceptId = connections[i].toTheConceptId;
                let toConcept = yield (0,_GetTheConcept__WEBPACK_IMPORTED_MODULE_3__["default"])(toConceptId);
                let newComposition = yield (0,_GetComposition__WEBPACK_IMPORTED_MODULE_2__.GetCompositionWithIdAndDateFromMemory)(toConcept.id);
                output.push(newComposition);
            }
        }
        return output;
    });
}
function GetLinkRaw(id_1, linker_1) {
    return __awaiter(this, arguments, void 0, function* (id, linker, inpage = 10, page = 1) {
        var _a;
        let output = [];
        let concept = yield (0,_GetTheConcept__WEBPACK_IMPORTED_MODULE_3__["default"])(id);
        let linkString = ((_a = concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) + "_s" + "_" + linker;
        let relatedConceptString = yield (0,_Api_GetConceptByCharacterAndType__WEBPACK_IMPORTED_MODULE_0__.GetConceptByCharacterAndType)(linkString, 16);
        let relatedConcept = relatedConceptString;
        if (relatedConcept.id > 0) {
            let connectionsString = yield (0,_Api_GetConnectionOfTheConcept__WEBPACK_IMPORTED_MODULE_1__.GetConnectionOfTheConcept)(relatedConcept.id, concept.id, concept.userId, inpage, page);
            let connections = connectionsString;
            let prefetch = [];
            for (let i = 0; i < connections.length; i++) {
                prefetch.push(connections[i].toTheConceptId);
            }
            for (let i = 0; i < connections.length; i++) {
                let toConceptId = connections[i].toTheConceptId;
                let toConcept = yield (0,_GetTheConcept__WEBPACK_IMPORTED_MODULE_3__["default"])(toConceptId);
                output.push(toConcept);
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
/* harmony export */   GetLinkerConnectionFromConcepts: () => (/* binding */ GetLinkerConnectionFromConcepts),
/* harmony export */   GetLinkerConnectionToConcepts: () => (/* binding */ GetLinkerConnectionToConcepts)
/* harmony export */ });
/* harmony import */ var _Api_GetAllLinkerConnectionsFromTheConcept__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Api/GetAllLinkerConnectionsFromTheConcept */ "./src/Api/GetAllLinkerConnectionsFromTheConcept.ts");
/* harmony import */ var _Api_GetAllLinkerConnectionsToTheConcept__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Api/GetAllLinkerConnectionsToTheConcept */ "./src/Api/GetAllLinkerConnectionsToTheConcept.ts");
/* harmony import */ var _GetTheConcept__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GetTheConcept */ "./src/Services/GetTheConcept.ts");
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
        let connections = yield (0,_Api_GetAllLinkerConnectionsFromTheConcept__WEBPACK_IMPORTED_MODULE_0__.GetAllLinkerConnectionsFromTheConcept)(id);
        for (let i = 0; i < connections.length; i++) {
            let localConnection = connections[i];
            let connectionIdentifier = localConnection.typeId;
            let concept = yield (0,_GetTheConcept__WEBPACK_IMPORTED_MODULE_2__["default"])(connectionIdentifier);
            localConnection.type = concept;
        }
        return connections;
    });
}
function GetLinkerConnectionToConcepts(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let connections = yield (0,_Api_GetAllLinkerConnectionsToTheConcept__WEBPACK_IMPORTED_MODULE_1__.GetAllLinkerConnectionsToTheConcept)(id);
        for (let i = 0; i < connections.length; i++) {
            let localConnection = connections[i];
            let connectionIdentifier = localConnection.typeId;
            let concept = yield (0,_GetTheConcept__WEBPACK_IMPORTED_MODULE_2__["default"])(connectionIdentifier);
            localConnection.type = concept;
        }
        return connections;
    });
}


/***/ }),

/***/ "./src/Services/GetRelation.ts":
/*!*************************************!*\
  !*** ./src/Services/GetRelation.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetRelation: () => (/* binding */ GetRelation),
/* harmony export */   GetRelationRaw: () => (/* binding */ GetRelationRaw)
/* harmony export */ });
/* harmony import */ var _Api_GetConnectionOfTheConcept__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Api/GetConnectionOfTheConcept */ "./src/Api/GetConnectionOfTheConcept.ts");
/* harmony import */ var _GetComposition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GetComposition */ "./src/Services/GetComposition.ts");
/* harmony import */ var _GetTheConcept__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GetTheConcept */ "./src/Services/GetTheConcept.ts");
/* harmony import */ var _Api_GetAllConnectionsOfCompositionBulk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Api/GetAllConnectionsOfCompositionBulk */ "./src/Api/GetAllConnectionsOfCompositionBulk.ts");
/* harmony import */ var _ConceptFinding_GetConceptByCharacterAndCategory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ConceptFinding/GetConceptByCharacterAndCategory */ "./src/Services/ConceptFinding/GetConceptByCharacterAndCategory.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





function GetRelation(id_1, relation_1) {
    return __awaiter(this, arguments, void 0, function* (id, relation, inpage = 10, page = 1) {
        let output = [];
        let concept = yield (0,_GetTheConcept__WEBPACK_IMPORTED_MODULE_2__["default"])(id);
        let relatedConceptString = yield (0,_ConceptFinding_GetConceptByCharacterAndCategory__WEBPACK_IMPORTED_MODULE_4__.GetConceptByCharacterAndCategory)(relation);
        let relatedConcept = relatedConceptString;
        if (relatedConcept.id > 0) {
            let connectionsString = yield (0,_Api_GetConnectionOfTheConcept__WEBPACK_IMPORTED_MODULE_0__.GetConnectionOfTheConcept)(relatedConcept.id, concept.id, concept.userId, inpage, page);
            let connections = connectionsString;
            let prefetch = [];
            for (let i = 0; i < connections.length; i++) {
                prefetch.push(connections[i].toTheConceptId);
            }
            yield (0,_Api_GetAllConnectionsOfCompositionBulk__WEBPACK_IMPORTED_MODULE_3__.GetAllConnectionsOfCompositionBulk)(prefetch);
            for (let i = 0; i < connections.length; i++) {
                let toConceptId = connections[i].toTheConceptId;
                let toConcept = yield (0,_GetTheConcept__WEBPACK_IMPORTED_MODULE_2__["default"])(toConceptId);
                let newComposition = yield (0,_GetComposition__WEBPACK_IMPORTED_MODULE_1__.GetCompositionWithIdAndDateFromMemory)(toConcept.id);
                output.push(newComposition);
            }
        }
        return output;
    });
}
function GetRelationRaw(id_1, relation_1) {
    return __awaiter(this, arguments, void 0, function* (id, relation, inpage = 10, page = 1) {
        let output = [];
        let concept = yield (0,_GetTheConcept__WEBPACK_IMPORTED_MODULE_2__["default"])(id);
        let relatedConceptString = yield (0,_ConceptFinding_GetConceptByCharacterAndCategory__WEBPACK_IMPORTED_MODULE_4__.GetConceptByCharacterAndCategory)(relation);
        let relatedConcept = relatedConceptString;
        if (relatedConcept.id > 0) {
            let connectionsString = yield (0,_Api_GetConnectionOfTheConcept__WEBPACK_IMPORTED_MODULE_0__.GetConnectionOfTheConcept)(relatedConcept.id, concept.id, concept.userId, inpage, page);
            let connections = connectionsString;
            let prefetch = [];
            for (let i = 0; i < connections.length; i++) {
                prefetch.push(connections[i].toTheConceptId);
            }
            for (let i = 0; i < connections.length; i++) {
                let toConceptId = connections[i].toTheConceptId;
                let toConcept = yield (0,_GetTheConcept__WEBPACK_IMPORTED_MODULE_2__["default"])(toConceptId);
                output.push(toConcept);
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
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app */ "./src/app.ts");
/* harmony import */ var _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DataStructures/ConceptData */ "./src/DataStructures/ConceptData.ts");
/* harmony import */ var _CreateDefaultConcept__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CreateDefaultConcept */ "./src/Services/CreateDefaultConcept.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




/**
 *
 * @param id this is the id that can be used to get the concept.
 * @param userId This is the user that calls the concept
 * @returns Concept if it exists
 */
function GetTheConcept(id_1) {
    return __awaiter(this, arguments, void 0, function* (id, userId = 999) {
        try {
            if (_app__WEBPACK_IMPORTED_MODULE_1__.serviceWorker) {
                const res = yield (0,_app__WEBPACK_IMPORTED_MODULE_1__.sendMessage)('GetTheConcept', { id, userId });
                console.log('data received from sw', res);
                return res.data;
            }
            let concept = (0,_CreateDefaultConcept__WEBPACK_IMPORTED_MODULE_3__.CreateDefaultConcept)();
            if (id < 0) {
                let lconcept = yield (0,_app__WEBPACK_IMPORTED_MODULE_1__.GetUserGhostId)(userId, id);
                concept = (0,_app__WEBPACK_IMPORTED_MODULE_1__.convertFromLConceptToConcept)(lconcept);
                return concept;
            }
            concept = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConcept(id);
            if ((concept == null || concept.id == 0) && id != null && id != undefined) {
                let conceptString = yield (0,_Api_GetConcept__WEBPACK_IMPORTED_MODULE_0__.GetConcept)(id);
                concept = conceptString;
            }
            if (concept.id != 0) {
                if (concept.type == null) {
                    let conceptType = yield _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_2__.ConceptsData.GetConcept(concept.typeId);
                    if (conceptType == null && concept.typeId != null && concept.typeId != undefined) {
                        let typeConceptString = yield (0,_Api_GetConcept__WEBPACK_IMPORTED_MODULE_0__.GetConcept)(concept.typeId);
                        let typeConcept = typeConceptString;
                        concept.type = typeConcept;
                    }
                }
            }
            return concept;
        }
        catch (err) {
            console.error("this is the error in the getting concept", err);
            throw err;
        }
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
/* harmony import */ var _Database_indexdblocal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Database/indexdblocal */ "./src/Database/indexdblocal.ts");
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
    return __awaiter(this, arguments, void 0, function* (enableAi = true) {
        try {
            yield (0,_Database_indexeddb__WEBPACK_IMPORTED_MODULE_3__.openDatabase)("concepts");
            yield (0,_Database_indexdblocal__WEBPACK_IMPORTED_MODULE_4__.openDatabase)("concepts");
            if (enableAi) {
                var statsData = yield (0,_Database_indexeddb__WEBPACK_IMPORTED_MODULE_3__.GetLastSettingsFromDatabase)();
                var settings = statsData;
                if (settings.isOnlineSync) {
                    return true;
                }
                yield (0,_Api_GetAiData__WEBPACK_IMPORTED_MODULE_0__.GetAiData)();
            }
            return true;
        }
        catch (error) {
            let errorObject = {
                "message": "cannot initlize the AI system",
                "ok": false,
                "status": 400,
                "data": error
            };
            console.log(errorObject);
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

/***/ "./src/Services/Local/ConvertFromLConnectionToConnection.ts":
/*!******************************************************************!*\
  !*** ./src/Services/Local/ConvertFromLConnectionToConnection.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConvertFromLConnectionToConnection: () => (/* binding */ ConvertFromLConnectionToConnection)
/* harmony export */ });
/* harmony import */ var _DataStructures_Connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DataStructures/Connection */ "./src/DataStructures/Connection.ts");

function ConvertFromLConnectionToConnection(lconnection) {
    let connection = new _DataStructures_Connection__WEBPACK_IMPORTED_MODULE_0__.Connection(0, 0, 0, 0, 0, 0, 0);
    connection.ofTheConceptId = lconnection.ofTheConceptId;
    connection.toTheConceptId = lconnection.toTheConceptId;
    connection.typeId = lconnection.typeId;
    connection.orderId = lconnection.orderId;
    connection.id = lconnection.id;
    return connection;
}


/***/ }),

/***/ "./src/Services/Local/CreateConnectionBetweenTwoConceptsLocal.ts":
/*!***********************************************************************!*\
  !*** ./src/Services/Local/CreateConnectionBetweenTwoConceptsLocal.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateConnectionBetweenTwoConceptsLocal: () => (/* binding */ CreateConnectionBetweenTwoConceptsLocal)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app */ "./src/app.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function CreateConnectionBetweenTwoConceptsLocal(ofTheConcept_1, toTheConcept_1, linker_1) {
    return __awaiter(this, arguments, void 0, function* (ofTheConcept, toTheConcept, linker, both = false) {
        var _a, _b;
        try {
            if (_app__WEBPACK_IMPORTED_MODULE_0__.serviceWorker) {
                const res = yield (0,_app__WEBPACK_IMPORTED_MODULE_0__.sendMessage)('CreateConnectionBetweenTwoConceptsLocal', { ofTheConcept, toTheConcept, linker, both });
                console.log('data received from sw', res);
                return res.data;
            }
            console.log('of THe', ofTheConcept, 'to the', toTheConcept);
            var userId = ofTheConcept.userId;
            if (both) {
                let prefix1 = ((_a = toTheConcept.type) === null || _a === void 0 ? void 0 : _a.characterValue) + "_s";
                let linkerAdd1 = linker + "_by";
                let backwardLinker = prefix1 + "_" + linkerAdd1;
                // if(count){
                //    await CountRelationship(linkerAdd1, toTheConcept, userId);
                //   }
                var connectionConceptReverse = yield (0,_app__WEBPACK_IMPORTED_MODULE_0__.MakeTheInstanceConceptLocal)("connection", backwardLinker, false, 999, 999, 999);
                let pewCon = yield (0,_app__WEBPACK_IMPORTED_MODULE_0__.CreateTheConnectionLocal)(toTheConcept.id, ofTheConcept.id, connectionConceptReverse.id, 1000);
            }
            let prefix = ((_b = ofTheConcept.type) === null || _b === void 0 ? void 0 : _b.characterValue) + "_s";
            let linkerAdd = linker + "_s";
            let forwardLinker = prefix + "_" + linkerAdd;
            // if(count){
            // // await CountRelationship(linkerAdd, ofTheConcept, userId);
            // }
            var connectionConcept = yield (0,_app__WEBPACK_IMPORTED_MODULE_0__.MakeTheInstanceConceptLocal)("connection", forwardLinker, false, 999, 999, 999);
            let newConnection = yield (0,_app__WEBPACK_IMPORTED_MODULE_0__.CreateTheConnectionLocal)(ofTheConcept.id, toTheConcept.id, connectionConcept.id, 1000);
            return newConnection;
        }
        catch (ex) {
            throw ex;
        }
    });
}


/***/ }),

/***/ "./src/Services/Local/CreateDefaultLConcept.ts":
/*!*****************************************************!*\
  !*** ./src/Services/Local/CreateDefaultLConcept.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateDefaultLConcept: () => (/* binding */ CreateDefaultLConcept)
/* harmony export */ });
/* harmony import */ var _DataStructures_Concept__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DataStructures/Concept */ "./src/DataStructures/Concept.ts");

function CreateDefaultLConcept() {
    let created_on = new Date();
    let updated_on = new Date();
    let concept = new _DataStructures_Concept__WEBPACK_IMPORTED_MODULE_0__.Concept(0, 0, 0, 0, 0, "0", 0, false, created_on, updated_on, "0");
    return concept;
}


/***/ }),

/***/ "./src/Services/Local/CreateLocalBinaryTreeFromData.ts":
/*!*************************************************************!*\
  !*** ./src/Services/Local/CreateLocalBinaryTreeFromData.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PopulateTheLocalConceptsToMemory: () => (/* binding */ PopulateTheLocalConceptsToMemory),
/* harmony export */   PopulateTheLocalConnectionToMemory: () => (/* binding */ PopulateTheLocalConnectionToMemory),
/* harmony export */   "default": () => (/* binding */ CreateLocalBinaryTreeFromIndexDb)
/* harmony export */ });
/* harmony import */ var _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DataStructures/IdentifierFlags */ "./src/DataStructures/IdentifierFlags.ts");
/* harmony import */ var _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../DataStructures/Local/LocalConceptData */ "./src/DataStructures/Local/LocalConceptData.ts");
/* harmony import */ var _DataStructures_Local_LocalId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../DataStructures/Local/LocalId */ "./src/DataStructures/Local/LocalId.ts");
/* harmony import */ var _Database_indexdblocal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Database/indexdblocal */ "./src/Database/indexdblocal.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app */ "./src/app.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





/**
 * This will create a binary tree of local concepts that is saved from the indexdb.
 */
function CreateLocalBinaryTreeFromIndexDb() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("this is trying to create local binary tree");
        try {
            let conceptList = yield (0,_Database_indexdblocal__WEBPACK_IMPORTED_MODULE_3__.getObjectsFromLocalIndexDb)("localconcept");
            if (Array.isArray(conceptList)) {
                for (let i = 0; i < conceptList.length; i++) {
                    let concept = conceptList[i];
                    _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_1__.LocalConceptsData.AddConceptToMemory(concept);
                }
            }
            _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_0__.IdentifierFlags.isLocalDataLoaded = true;
            _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_0__.IdentifierFlags.isLocalTypeLoaded = true;
            _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_0__.IdentifierFlags.isLocalCharacterLoaded = true;
        }
        catch (error) {
            yield (0,_app__WEBPACK_IMPORTED_MODULE_4__.DelayFunctionExecution)(2000, CreateLocalBinaryTreeFromIndexDb());
            let errorObject = {
                "message": "Cannot create local binary tree from index db",
                "data": error,
                "ok": false,
                "status": 400
            };
            throw errorObject;
        }
    });
}
/**
 * We have designed our system to use local concepts and connections with its own local ids(negative ids) that
 * is only valid for the browser that creates this. We have a translator in our node server.
 * We cannot keep on using the indexdb to get the new data so we populate the data from indexdb to our memory
 * then we use these ids from memory and update the indexdb with the latest id frequently.
 * This function does this process in initlization from indexdb to memory.
 *
 * Here we have locked this function so that other processes cannot access this process in the case that this process is ongoing
 *
 *
 */
function PopulateTheLocalConceptsToMemory() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // put a lock on the indexdb for the domain so that no two things do this same process.
            yield navigator.locks.request("dblock", (lock) => __awaiter(this, void 0, void 0, function* () {
                // get the last local concept id(-ve) from the indexdb
                let idList = yield (0,_Database_indexdblocal__WEBPACK_IMPORTED_MODULE_3__.getObjectsFromLocalIndexDb)("localid");
                // if the list is valid then.
                if (Array.isArray(idList)) {
                    // if the zeroth component that is the concept component is present
                    if (idList[0]) {
                        // if the zeroth component (concept component) has a valid value;
                        let localConceptIdValue = idList[0].value;
                        if (localConceptIdValue) {
                            // add the new concept id to the memory
                            _DataStructures_Local_LocalId__WEBPACK_IMPORTED_MODULE_2__.LocalId.AddConceptId(idList[0]);
                            // update the indexdb with the new concept value that other programs can use and
                            // reserve the 10 ids for this program.
                            //   await UpdateToDatabase("localid", {"id": 0, "value": localConceptIdValue - 10});
                        }
                        else {
                            // incase there is invalid id then choose a random id .
                            localConceptIdValue = -Math.floor(Math.random() * 100000000);
                            let object = { "id": 0, "value": localConceptIdValue };
                            let newObject = { "id": 0, "value": localConceptIdValue - 10 };
                            _DataStructures_Local_LocalId__WEBPACK_IMPORTED_MODULE_2__.LocalId.AddConceptId(object);
                            yield (0,_Database_indexdblocal__WEBPACK_IMPORTED_MODULE_3__.UpdateToDatabase)("localid", newObject);
                        }
                    }
                    if (idList[2]) {
                        // BaseUrl.BASE_RANDOMIZER = idList[2].value;
                        _app__WEBPACK_IMPORTED_MODULE_4__.BaseUrl.setRandomizer(idList[2].value);
                    }
                }
            }));
        }
        catch (error) {
            let errorObject = {
                "message": "Cannot populate Local Ids from the Index Db",
                "data": error,
                "ok": false,
                "status": 400
            };
            throw errorObject;
        }
    });
}
/**
* We have designed our system to use local concepts and connections with its own local ids(negative ids) that
* is only valid for the browser that creates this. We have a translator in our node server.
* We cannot keep on using the indexdb to get the new data so we populate the data from indexdb to our memory
* then we use these ids from memory and update the indexdb with the latest id frequently.
* This function does this process in initlization from indexdb to memory.
*
* This function locked so that no two parallel process can access this functionality at the same time.
* That might cause some ids to be repeated.
*
*
*/
function PopulateTheLocalConnectionToMemory() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // put a lock on the indexdb for the domain so that no two things do this same process.
            yield navigator.locks.request("dblock", (lock) => __awaiter(this, void 0, void 0, function* () {
                let idList = yield (0,_Database_indexdblocal__WEBPACK_IMPORTED_MODULE_3__.getObjectsFromLocalIndexDb)("localid");
                if (Array.isArray(idList)) {
                    if (idList[1]) {
                        let localConnectionId = idList[1].value;
                        if (localConnectionId) {
                            _DataStructures_Local_LocalId__WEBPACK_IMPORTED_MODULE_2__.LocalId.AddConnectionId(idList[1]);
                            yield (0,_Database_indexdblocal__WEBPACK_IMPORTED_MODULE_3__.UpdateToDatabase)("localid", { "id": 1, "value": localConnectionId - 10 });
                        }
                        else {
                            // incase there is invalid id then choose a random id .
                            localConnectionId = -Math.floor(Math.random() * 100000000);
                            let object = { "id": 0, "value": localConnectionId };
                            let newObject = { "id": 0, "value": localConnectionId - 10 };
                            _DataStructures_Local_LocalId__WEBPACK_IMPORTED_MODULE_2__.LocalId.AddConnectionId(object);
                            yield (0,_Database_indexdblocal__WEBPACK_IMPORTED_MODULE_3__.UpdateToDatabase)("localid", newObject);
                        }
                    }
                    if (idList[2]) {
                        // BaseUrl.BASE_RANDOMIZER = idList[2].value;
                        _app__WEBPACK_IMPORTED_MODULE_4__.BaseUrl.setRandomizer(idList[2].value);
                    }
                }
            }));
        }
        catch (error) {
            let errorObject = {
                "message": "Cannot populate Local Ids from the Index Db",
                "data": error,
                "ok": false,
                "status": 400
            };
            throw errorObject;
        }
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
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app */ "./src/app.ts");
/* harmony import */ var _Local_CreateDefaultLConcept__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Local/CreateDefaultLConcept */ "./src/Services/Local/CreateDefaultLConcept.ts");
/* harmony import */ var _CreateTheConnectionLocal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CreateTheConnectionLocal */ "./src/Services/Local/CreateTheConnectionLocal.ts");
/* harmony import */ var _MakeTheInstanceConceptLocal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MakeTheInstanceConceptLocal */ "./src/Services/Local/MakeTheInstanceConceptLocal.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




/**
 * This function converts a json data to concept connection and also preserves its relation.
 * @param json The json data that needs to be converted to the concept connection system
 * @param ofTheConceptId If in case that this composition is part of other composition then this must be the connecting concept.
 * @param ofTheConceptUserId If in case that this composition is part of other composition then this must be the user Id of the  connecting concept.
 * @param mainKey If in case that this composition is part of other composition then this must be the main composition
 * @param userId The user Id of the user creating the composition.
 * @param accessId The accessId of the user creating the composition.
 * @param sessionInformationId Session of the user.
 * @param automaticSync for future use.
 * @returns the main concept of this composition.
 */
function CreateTheCompositionLocal(json_1) {
    return __awaiter(this, arguments, void 0, function* (json, ofTheConceptId = null, ofTheConceptUserId = null, mainKey = null, userId = null, accessId = null, sessionInformationId = null, automaticSync = false) {
        if (_app__WEBPACK_IMPORTED_MODULE_0__.serviceWorker) {
            const res = yield (0,_app__WEBPACK_IMPORTED_MODULE_0__.sendMessage)('CreateTheCompositionLocal', { json, ofTheConceptId, ofTheConceptUserId, mainKey, userId, accessId, sessionInformationId });
            console.log('data received from sw', res);
            return res.data;
        }
        let localUserId = userId !== null && userId !== void 0 ? userId : 999;
        let localAccessId = accessId !== null && accessId !== void 0 ? accessId : 999;
        let localSessionId = sessionInformationId !== null && sessionInformationId !== void 0 ? sessionInformationId : 999;
        let MainKeyLocal = mainKey !== null && mainKey !== void 0 ? mainKey : 0;
        let MainConcept = (0,_Local_CreateDefaultLConcept__WEBPACK_IMPORTED_MODULE_1__.CreateDefaultLConcept)();
        for (const key in json) {
            if (typeof json[key] != 'string' && typeof json[key] != 'number') {
                if (ofTheConceptId == null && ofTheConceptUserId == null) {
                    let localMainKey = MainKeyLocal;
                    let conceptString = yield (0,_MakeTheInstanceConceptLocal__WEBPACK_IMPORTED_MODULE_3__.MakeTheInstanceConceptLocal)(key, "", true, localUserId, localAccessId, localSessionId);
                    let concept = conceptString;
                    MainConcept = concept;
                    localMainKey = concept.id;
                    MainKeyLocal = concept.id;
                    yield CreateTheCompositionLocal(json[key], concept.id, concept.userId, localMainKey, userId, accessId, sessionInformationId);
                }
                else {
                    let ofThe = ofTheConceptId !== null && ofTheConceptId !== void 0 ? ofTheConceptId : 999;
                    let ofTheUser = ofTheConceptUserId !== null && ofTheConceptUserId !== void 0 ? ofTheConceptUserId : 999;
                    let localMainKey = MainKeyLocal;
                    let conceptString = yield (0,_MakeTheInstanceConceptLocal__WEBPACK_IMPORTED_MODULE_3__.MakeTheInstanceConceptLocal)(key, "", true, localUserId, localAccessId, localSessionId);
                    let concept = conceptString;
                    yield (0,_CreateTheConnectionLocal__WEBPACK_IMPORTED_MODULE_2__.CreateTheConnectionLocal)(ofThe, concept.id, localMainKey);
                    yield CreateTheCompositionLocal(json[key], concept.id, concept.userId, localMainKey, userId, accessId, sessionInformationId);
                }
            }
            else {
                let ofThe = ofTheConceptId !== null && ofTheConceptId !== void 0 ? ofTheConceptId : 999;
                let ofTheUser = ofTheConceptUserId !== null && ofTheConceptUserId !== void 0 ? ofTheConceptUserId : 999;
                let localMainKey = MainKeyLocal;
                let conceptString = yield (0,_MakeTheInstanceConceptLocal__WEBPACK_IMPORTED_MODULE_3__.MakeTheInstanceConceptLocal)(key, json[key].toString(), false, localUserId, localAccessId, localSessionId);
                let concept = conceptString;
                yield (0,_CreateTheConnectionLocal__WEBPACK_IMPORTED_MODULE_2__.CreateTheConnectionLocal)(ofThe, concept.id, localMainKey);
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
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app */ "./src/app.ts");
/* harmony import */ var _DataStructures_Concept__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../DataStructures/Concept */ "./src/DataStructures/Concept.ts");
/* harmony import */ var _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../DataStructures/Local/LocalConceptData */ "./src/DataStructures/Local/LocalConceptData.ts");
/* harmony import */ var _DataStructures_Local_LocalId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../DataStructures/Local/LocalId */ "./src/DataStructures/Local/LocalId.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




/**
 * This function creates the concept in the local system (Local memory and IndexDb) but not in the backend database
 * To create this concept in the backend database you need to sync the local data to the backend by LocalSyncData class.
 *
 * This function creates a id and ghost id which are equal to each other.
 * These id and ghostId are negative which means that they are virtual concepts. After these concepts have been synced with the backend
 * they are converted to real id. After returning from the backend the id changes to positive(+) and real id while the ghostId remains the same
 *
 * The system then saves this relation between -ve id and real id in the backend server and also in the local memory.
 *
 * @param referent This is the string that is the actual value of the concept.
 * @param typecharacter The string that defines the type of the concept.
 * @param userId This is the userId of the creator.
 * @param categoryId This is the category Id of the concept.
 * @param typeId This is the type Id of the concept that relates to the typecharacter passed above.
 * @param accessId This is the accessId of the concept(most probably is the accessId of the user)
 * @param isComposition This is set in the case that the composition needs to be created.
 * @param referentId if this concept refers to any other concept then this needs to be passed.
 * @returns
 */
function CreateTheConceptLocal(referent_1, typecharacter_1, userId_1, categoryId_1, typeId_1, accessId_1) {
    return __awaiter(this, arguments, void 0, function* (referent, typecharacter, userId, categoryId, typeId, accessId, isComposition = false, referentId = 0) {
        try {
            if (_app__WEBPACK_IMPORTED_MODULE_0__.serviceWorker) {
                const res = yield (0,_app__WEBPACK_IMPORTED_MODULE_0__.sendMessage)('CreateTheConceptLocal', { referent, typecharacter, userId, categoryId, typeId, accessId, isComposition, referentId });
                console.log('data received from sw', res);
                return res.data;
            }
            //let id = -Math.floor(Math.random() * 100000000);
            let id = yield _DataStructures_Local_LocalId__WEBPACK_IMPORTED_MODULE_3__.LocalId.getConceptId();
            console.log("this is the getting id type connection", id);
            let isNew = true;
            let created_on = new Date();
            let updated_on = new Date();
            if (referent == "the") {
                let concept = new _DataStructures_Concept__WEBPACK_IMPORTED_MODULE_1__.Concept(1, 999, 5, 5, referentId, referent, accessId, isNew, created_on, updated_on, typecharacter);
                return concept;
            }
            let concept = new _DataStructures_Concept__WEBPACK_IMPORTED_MODULE_1__.Concept(id, userId, typeId, categoryId, referentId, referent, accessId, isNew, created_on, updated_on, typecharacter);
            concept.isTemp = true;
            concept.isComposition = isComposition;
            _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_2__.LocalConceptsData.AddConcept(concept);
            //storeToDatabase("localconcept",concept);
            return concept;
        }
        catch (error) {
            throw error;
        }
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
/* harmony export */   CreateTheConnectionLocal: () => (/* binding */ CreateTheConnectionLocal)
/* harmony export */ });
/* harmony import */ var _DataStructures_Connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DataStructures/Connection */ "./src/DataStructures/Connection.ts");
/* harmony import */ var _DataStructures_Local_LocalConnectionData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../DataStructures/Local/LocalConnectionData */ "./src/DataStructures/Local/LocalConnectionData.ts");
/* harmony import */ var _DataStructures_Local_LocalId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../DataStructures/Local/LocalId */ "./src/DataStructures/Local/LocalId.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app */ "./src/app.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




/**
 * This function creates a connection for the concept connection system. This connection will only be created in real sense
 * once the data is synced using LocalSyncData.SyncDataOnline()
 * Here id and ghostId are created which are negative(these are virtual ids). After they are synced then they become real ids
 * The real ids are then associated with these ghost ids in node server (backend) and also in the local memory.
 * @param ofTheConceptId Of the concept Id for the connection
 * @param toTheConceptId To the concept Id for the connection
 * @param typeId Type of the connection, should be the composition id for internal connection and type concept in case
 * of external connection.
 * @param orderId current context is that for internal connections the order id is less than 3 and for external connections greater than 999
 * @param typeString this is the typeString in the case of external connections.
 * @returns a connection that is created and stored in the local system.
 */
function CreateTheConnectionLocal(ofTheConceptId_1, toTheConceptId_1, typeId_1) {
    return __awaiter(this, arguments, void 0, function* (ofTheConceptId, toTheConceptId, typeId, orderId = 1, typeString = "", userId = 999) {
        if (_app__WEBPACK_IMPORTED_MODULE_3__.serviceWorker) {
            const res = yield (0,_app__WEBPACK_IMPORTED_MODULE_3__.sendMessage)('CreateTheConnectionLocal', { ofTheConceptId, toTheConceptId, typeId, orderId, typeString, userId });
            console.log('data received from sw', res);
            return res.data;
        }
        try {
            let accessId = 4;
            // let randomid = -Math.floor(Math.random() * 100000000);
            let randomid = yield _DataStructures_Local_LocalId__WEBPACK_IMPORTED_MODULE_2__.LocalId.getConnectionId();
            let realOfTheConceptId = 0;
            let realToTheConceptId = 0;
            let realTypeId = 0;
            realOfTheConceptId = ofTheConceptId;
            realToTheConceptId = toTheConceptId;
            realTypeId = typeId;
            let connection = new _DataStructures_Connection__WEBPACK_IMPORTED_MODULE_0__.Connection(0, 0, 0, 0, 0, 0, 0);
            if (ofTheConceptId != toTheConceptId) {
                connection = new _DataStructures_Connection__WEBPACK_IMPORTED_MODULE_0__.Connection(randomid, realOfTheConceptId, realToTheConceptId, userId, typeId, orderId, accessId);
                connection.isTemp = true;
                connection.typeCharacter = typeString;
                yield _app__WEBPACK_IMPORTED_MODULE_3__.LocalSyncData.AddConnection(connection);
                _DataStructures_Local_LocalConnectionData__WEBPACK_IMPORTED_MODULE_1__.LocalConnectionData.AddConnection(connection);
                //storeToDatabase("localconnection", connection);
            }
            return connection;
        }
        catch (error) {
            throw error;
        }
    });
}


/***/ }),

/***/ "./src/Services/Local/DeleteConceptLocal.ts":
/*!**************************************************!*\
  !*** ./src/Services/Local/DeleteConceptLocal.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeleteConceptLocal: () => (/* binding */ DeleteConceptLocal)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app */ "./src/app.ts");
/* harmony import */ var _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../DataStructures/Local/LocalConceptData */ "./src/DataStructures/Local/LocalConceptData.ts");
/* harmony import */ var _GetTheConceptLocal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GetTheConceptLocal */ "./src/Services/Local/GetTheConceptLocal.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function DeleteConceptLocal(id) {
    return __awaiter(this, void 0, void 0, function* () {
        if (_app__WEBPACK_IMPORTED_MODULE_0__.serviceWorker) {
            const res = yield (0,_app__WEBPACK_IMPORTED_MODULE_0__.sendMessage)('DeleteConceptLocal', { id });
            console.log('data received from sw', res);
            return res.data;
        }
        let concept = yield (0,_GetTheConceptLocal__WEBPACK_IMPORTED_MODULE_2__.GetTheConceptLocal)(id);
        _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_1__.LocalConceptsData.RemoveConcept(concept);
    });
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
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app */ "./src/app.ts");
/* harmony import */ var _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../DataStructures/Local/LocalConceptData */ "./src/DataStructures/Local/LocalConceptData.ts");
/* harmony import */ var _GetCompositionLocal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GetCompositionLocal */ "./src/Services/Local/GetCompositionLocal.ts");
/* harmony import */ var _GetConceptByCharacterLocal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GetConceptByCharacterLocal */ "./src/Services/Local/GetConceptByCharacterLocal.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




/**
 * This function returns the list of composition which have the type @param compositionName
 * @param compositionName The type of the composition to pull
 * @param userId User Id of the user trying to pull the list
 * @returns list of compositions.
 */
function GetCompositionListLocal(compositionName, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        if (_app__WEBPACK_IMPORTED_MODULE_0__.serviceWorker) {
            const res = yield (0,_app__WEBPACK_IMPORTED_MODULE_0__.sendMessage)('GetCompositionListLocal', { compositionName, userId });
            console.log('data received from sw', res);
            return res.data;
        }
        try {
            let concept = yield (0,_GetConceptByCharacterLocal__WEBPACK_IMPORTED_MODULE_3__["default"])(compositionName);
            let CompositionList = [];
            if (concept.id != 0) {
                let conceptList = yield _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_1__.LocalConceptsData.GetConceptsByTypeIdAndUser(concept.id, userId);
                for (let i = 0; i < conceptList.length; i++) {
                    let compositionJson = yield (0,_GetCompositionLocal__WEBPACK_IMPORTED_MODULE_2__.GetCompositionLocal)(conceptList[i].id);
                    CompositionList.push(compositionJson);
                }
            }
            return CompositionList;
        }
        catch (error) {
            throw error;
        }
    });
}
/**
 * This function returns the list of composition with data - id format which have the type @param compositionName
 * @param compositionName The type of the composition to pull
 * @param userId User Id of the user trying to pull the list
 * @returns list of compositions with data - id format.
 */
function GetCompositionListLocalWithId(compositionName, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        if (_app__WEBPACK_IMPORTED_MODULE_0__.serviceWorker) {
            const res = yield (0,_app__WEBPACK_IMPORTED_MODULE_0__.sendMessage)('GetCompositionListLocalWithId', { compositionName, userId });
            console.log('data received from sw', res);
            return res.data;
        }
        try {
            let concept = yield (0,_GetConceptByCharacterLocal__WEBPACK_IMPORTED_MODULE_3__["default"])(compositionName);
            let CompositionList = [];
            if (concept.id != 0) {
                let conceptList = yield _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_1__.LocalConceptsData.GetConceptsByTypeIdAndUser(concept.id, userId);
                for (let i = 0; i < conceptList.length; i++) {
                    let compositionJson = yield (0,_GetCompositionLocal__WEBPACK_IMPORTED_MODULE_2__.GetCompositionLocalWithId)(conceptList[i].id);
                    CompositionList.push(compositionJson);
                }
            }
            return CompositionList;
        }
        catch (error) {
            throw error;
        }
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
/* harmony import */ var _Api_Translate_TranslateLocalToReal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Api/Translate/TranslateLocalToReal */ "./src/Api/Translate/TranslateLocalToReal.ts");
/* harmony import */ var _GetComposition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../GetComposition */ "./src/Services/GetComposition.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app */ "./src/app.ts");
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
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        try {
            if (_app__WEBPACK_IMPORTED_MODULE_4__.serviceWorker) {
                const res = yield (0,_app__WEBPACK_IMPORTED_MODULE_4__.sendMessage)('GetCompositionLocal', { id });
                console.log('data received from sw', res);
                return res.data;
            }
            let connectionList = [];
            let returnOutput = {};
            connectionList = yield _DataStructures_Local_LocalConnectionData__WEBPACK_IMPORTED_MODULE_1__.LocalConnectionData.GetConnectionsOfCompositionLocal(id);
            //connectionList = ConnectionData.GetConnectionsOfComposition(id);
            let compositionList = [];
            for (let i = 0; i < connectionList.length; i++) {
                if (!compositionList.includes(connectionList[i].ofTheConceptId)) {
                    compositionList.push(connectionList[i].ofTheConceptId);
                }
            }
            let concept = yield _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_0__.LocalConceptsData.GetConcept(id);
            if (concept.id == 0) {
                let realConcept = yield (0,_Api_Translate_TranslateLocalToReal__WEBPACK_IMPORTED_MODULE_2__.TranslateLocalToReal)(id);
                if (realConcept.id > 0) {
                    return yield (0,_GetComposition__WEBPACK_IMPORTED_MODULE_3__.GetComposition)(realConcept.id);
                }
            }
            let output = yield recursiveFetchLocal(id, connectionList, compositionList);
            let mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "top";
            returnOutput[mainString] = output;
            return returnOutput;
        }
        catch (error) {
            throw error;
        }
    });
}
function GetCompositionLocalWithId(id) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        try {
            if (_app__WEBPACK_IMPORTED_MODULE_4__.serviceWorker) {
                const res = yield (0,_app__WEBPACK_IMPORTED_MODULE_4__.sendMessage)('GetCompositionLocalWithId', { id });
                console.log('data received from sw', res);
                return res.data;
            }
            let connectionList = [];
            let returnOutput = {};
            let FinalReturn = {};
            connectionList = yield _DataStructures_Local_LocalConnectionData__WEBPACK_IMPORTED_MODULE_1__.LocalConnectionData.GetConnectionsOfCompositionLocal(id);
            let compositionList = [];
            for (let i = 0; i < connectionList.length; i++) {
                if (!compositionList.includes(connectionList[i].ofTheConceptId)) {
                    compositionList.push(connectionList[i].ofTheConceptId);
                }
            }
            let concept = yield _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_0__.LocalConceptsData.GetConcept(id);
            if (concept.id != 0) {
                let output = yield recursiveFetchLocal(id, connectionList, compositionList);
                let mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "top";
                returnOutput[mainString] = output;
            }
            FinalReturn['data'] = returnOutput;
            FinalReturn['id'] = id;
            return FinalReturn;
        }
        catch (error) {
            throw error;
        }
    });
}
function recursiveFetchLocal(id_1, connectionList_1, compositionList_1) {
    return __awaiter(this, arguments, void 0, function* (id, connectionList, compositionList, visitedConcepts = []) {
        var _a, _b, _c, _d;
        let output = {};
        let arroutput = [];
        let concept = yield _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_0__.LocalConceptsData.GetConcept(id);
        if (concept.id != 0) {
            if (concept.type == null) {
                let toConceptTypeId = concept.typeId;
                let toConceptType = yield _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_0__.LocalConceptsData.GetConcept(toConceptTypeId);
                concept.type = toConceptType;
            }
        }
        let mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "top";
        if (!compositionList.includes(id)) {
            return concept === null || concept === void 0 ? void 0 : concept.characterValue;
        }
        else {
            if (visitedConcepts.includes(id)) {
                return "";
            }
            else {
                visitedConcepts.push(id);
            }
            for (let i = 0; i < connectionList.length; i++) {
                if (connectionList[i].ofTheConceptId == id) {
                    let toConceptId = connectionList[i].toTheConceptId;
                    let toConcept = yield _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_0__.LocalConceptsData.GetConcept(toConceptId);
                    if (toConcept.id != 0) {
                        if ((toConcept === null || toConcept === void 0 ? void 0 : toConcept.type) == null) {
                            let toConceptTypeId = toConcept.typeId;
                            let toConceptType = yield _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_0__.LocalConceptsData.GetConcept(toConceptTypeId);
                            toConcept.type = toConceptType;
                        }
                    }
                    let regex = "the_";
                    let localmainString = (_d = (_c = toConcept === null || toConcept === void 0 ? void 0 : toConcept.type) === null || _c === void 0 ? void 0 : _c.characterValue) !== null && _d !== void 0 ? _d : "top";
                    let localKey = localmainString.replace(regex, "");
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
/* harmony export */   GetConceptByCategoryAndCharacterLocalMemory: () => (/* binding */ GetConceptByCategoryAndCharacterLocalMemory),
/* harmony export */   GetConceptByCharacterAndCategoryLocal: () => (/* binding */ GetConceptByCharacterAndCategoryLocal),
/* harmony export */   GetConceptByCharacterLocalFull: () => (/* binding */ GetConceptByCharacterLocalFull),
/* harmony export */   "default": () => (/* binding */ GetConceptByCharacterLocal)
/* harmony export */ });
/* harmony import */ var _Api_Local_GetLocalConceptByCharacterValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Api/Local/GetLocalConceptByCharacterValue */ "./src/Api/Local/GetLocalConceptByCharacterValue.ts");
/* harmony import */ var _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../DataStructures/Local/LocalConceptData */ "./src/DataStructures/Local/LocalConceptData.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app */ "./src/app.ts");
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
        let concept = yield _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_1__.LocalConceptsData.GetConceptByCharacterAndTypeLocal(characterValue, 51);
        return concept;
    });
}
/**
 *
 * @param character the character value of the concept we want to find in our local system.
 * @returns LConcept which will be the associated concept with the character Value.
 */
function GetConceptByCharacterAndCategoryLocal(character) {
    return __awaiter(this, void 0, void 0, function* () {
        if (_app__WEBPACK_IMPORTED_MODULE_2__.serviceWorker) {
            const res = yield (0,_app__WEBPACK_IMPORTED_MODULE_2__.sendMessage)('GetConceptByCharacterAndCategoryLocal', { character });
            console.log('data received from sw', res);
            return res.data;
        }
        let lconcept = (0,_app__WEBPACK_IMPORTED_MODULE_2__.CreateDefaultLConcept)();
        if (character == "the") {
            lconcept.id = 1;
            lconcept.typeId = 5;
            lconcept.characterValue = "the";
            return lconcept;
        }
        let splittedStringArray = (0,_app__WEBPACK_IMPORTED_MODULE_2__.SplitStrings)(character);
        if (splittedStringArray.length > 1) {
            let category = 1;
            let prefix = yield GetConceptByCharacterAndCategoryLocal(splittedStringArray[0]);
            if (prefix.id != 0) {
                category = prefix.id;
            }
            lconcept = yield GetConceptByCategoryAndCharacterLocalMemory(character, category);
        }
        else if (splittedStringArray[0] == character) {
            lconcept = yield GetConceptByCharacterLocal(character);
        }
        return lconcept;
    });
}
function GetConceptByCategoryAndCharacterLocalMemory(value, categoryId) {
    return __awaiter(this, void 0, void 0, function* () {
        let concept = _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_1__.LocalConceptsData.GetConceptByCharacterAndCategoryLocal(value, categoryId);
        return concept;
    });
}
function GetConceptByCharacterLocalFull(characterValue) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let concept = yield _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_1__.LocalConceptsData.GetConceptByCharacter(characterValue);
            let literalCharacter = `${characterValue}`;
            if ((concept == null || (concept === null || concept === void 0 ? void 0 : concept.id) == 0) && literalCharacter) {
                yield (0,_Api_Local_GetLocalConceptByCharacterValue__WEBPACK_IMPORTED_MODULE_0__.GetLocalConceptByCharacterValue)(characterValue);
                concept = yield _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_1__.LocalConceptsData.GetConceptByCharacter(characterValue);
            }
            return concept;
        }
        catch (error) {
            console.log("this is the error in Get Concept By Character Local full", error);
            throw error;
        }
    });
}


/***/ }),

/***/ "./src/Services/Local/GetConnectionOfTheConceptLocal.ts":
/*!**************************************************************!*\
  !*** ./src/Services/Local/GetConnectionOfTheConceptLocal.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetConnectionOfTheConceptLocal: () => (/* binding */ GetConnectionOfTheConceptLocal)
/* harmony export */ });
/* harmony import */ var _DataStructures_Local_LocalConnectionData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DataStructures/Local/LocalConnectionData */ "./src/DataStructures/Local/LocalConnectionData.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function GetConnectionOfTheConceptLocal(ofTheConcept, typeId, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let connections = yield _DataStructures_Local_LocalConnectionData__WEBPACK_IMPORTED_MODULE_0__.LocalConnectionData.GetConnectionOfCompositionAndTypeLocal(typeId, ofTheConcept);
            return connections;
        }
        catch (error) {
            throw error;
        }
    });
}


/***/ }),

/***/ "./src/Services/Local/GetRelationLocal.ts":
/*!************************************************!*\
  !*** ./src/Services/Local/GetRelationLocal.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetRelationLocal: () => (/* binding */ GetRelationLocal)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app */ "./src/app.ts");
/* harmony import */ var _GetConnectionOfTheConceptLocal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GetConnectionOfTheConceptLocal */ "./src/Services/Local/GetConnectionOfTheConceptLocal.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function GetRelationLocal(id, relation, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (_app__WEBPACK_IMPORTED_MODULE_0__.serviceWorker) {
                const res = yield (0,_app__WEBPACK_IMPORTED_MODULE_0__.sendMessage)("GetRelationLocal", {
                    id, relation, userId
                });
                console.log("data received from sw", res);
                return res.data;
            }
            let typeConcept = yield (0,_app__WEBPACK_IMPORTED_MODULE_0__.GetConceptByCharacterAndCategoryLocal)(relation);
            let localConnections = [];
            if (typeConcept.id != 0) {
                localConnections = yield (0,_GetConnectionOfTheConceptLocal__WEBPACK_IMPORTED_MODULE_1__.GetConnectionOfTheConceptLocal)(id, typeConcept.id, userId);
            }
            let output = [];
            for (let i = 0; i < localConnections.length; i++) {
                let comp = yield (0,_app__WEBPACK_IMPORTED_MODULE_0__.GetCompositionLocal)(localConnections[i].toTheConceptId);
                output.push(comp);
            }
            return output;
        }
        catch (error) {
            throw error;
        }
    });
}


/***/ }),

/***/ "./src/Services/Local/GetTheConceptLocal.ts":
/*!**************************************************!*\
  !*** ./src/Services/Local/GetTheConceptLocal.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetTheConceptLocal: () => (/* binding */ GetTheConceptLocal)
/* harmony export */ });
/* harmony import */ var _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DataStructures/Local/LocalConceptData */ "./src/DataStructures/Local/LocalConceptData.ts");
/* harmony import */ var _DataStructures_Local_LocalGhostIdTree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../DataStructures/Local/LocalGhostIdTree */ "./src/DataStructures/Local/LocalGhostIdTree.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app */ "./src/app.ts");
/* harmony import */ var _Conversion_ConvertConcepts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Conversion/ConvertConcepts */ "./src/Services/Conversion/ConvertConcepts.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




/**
 * This function converts any local/ virtual or real concept id to a LConcept.
 * In case that the id is virtual then it tries to find it from the local memory. This will return -ve id.
 * In case that the virtual id has already been synced to the backend then it gets this from the relational binary tree(LocalGhostIdTree). This will return +ve id.
 * In case that we pass real id then this will return real concept but formatted in LConcept form. This might have undefined ghostId.
 * @param id the id that you want to find out the concept of. This could be a negative (virtual id ) or a real concept id.
 * @returns LConcept with either (-ve or +ve id)
 */
function GetTheConceptLocal(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (_app__WEBPACK_IMPORTED_MODULE_2__.serviceWorker) {
                const res = yield (0,_app__WEBPACK_IMPORTED_MODULE_2__.sendMessage)('GetTheConceptLocal', { id });
                console.log('data received from sw', res);
                return res.data;
            }
            let lconcept = (0,_app__WEBPACK_IMPORTED_MODULE_2__.CreateDefaultLConcept)();
            if (id < 0) {
                lconcept = yield _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_0__.LocalConceptsData.GetConcept(id);
                if (lconcept.id == 0) {
                    let localNode = yield _DataStructures_Local_LocalGhostIdTree__WEBPACK_IMPORTED_MODULE_1__.LocalGhostIdTree.getNodeFromTree(id);
                    if (localNode === null || localNode === void 0 ? void 0 : localNode.value) {
                        let returnedConcept = localNode.value;
                        if (returnedConcept) {
                            lconcept = returnedConcept;
                        }
                    }
                }
            }
            else {
                let concept = yield (0,_app__WEBPACK_IMPORTED_MODULE_2__.GetTheConcept)(id);
                lconcept = (0,_Conversion_ConvertConcepts__WEBPACK_IMPORTED_MODULE_3__.convertFromConceptToLConcept)(concept);
            }
            return lconcept;
        }
        catch (error) {
            throw error;
        }
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


function MakeTheConceptLocal(referent, typeCharacter, userId, categoryId, typeId) {
    return __awaiter(this, void 0, void 0, function* () {
        let conceptString = yield _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_0__.LocalConceptsData.GetConceptByCharacterAndTypeLocal(referent, typeId);
        let concept = conceptString;
        let accessId = 4;
        if (typeCharacter == "the") {
            categoryId = 1;
        }
        if (concept.id == 0) {
            conceptString = yield (0,_CreateTheConceptLocal__WEBPACK_IMPORTED_MODULE_1__["default"])(referent, typeCharacter, userId, categoryId, typeId, accessId);
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
/* harmony import */ var _CreateTheConceptLocal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateTheConceptLocal */ "./src/Services/Local/CreateTheConceptLocal.ts");
/* harmony import */ var _MakeTheTypeLocal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MakeTheTypeLocal */ "./src/Services/Local/MakeTheTypeLocal.ts");
/* harmony import */ var _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../DataStructures/Local/LocalConceptData */ "./src/DataStructures/Local/LocalConceptData.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app */ "./src/app.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




/**
 * This is the basic function of the concept connection system. This function let's you create a concept within the constraints of the
 * concept connection system. This function is the building block of the concept connection system.
 * This function automatically passes the concept to be synced to the background. Next time you sync the data this concept will also be created in the backend.
 * @param type this is the type of the concept. You can also think of this as the key of concept. first_name, last_name etc.
 * @param referent the actual value of the concept. The actual name of value of the concept.
 * @param composition this is a boolean that defines if the concept is a composition or not. If this is a composition then other things are also
 * connected internally with this concept. If composition is true then always a new concept is created otherwise it checks if the concept already exists
 * and creates only in the case that the concept does not already exists with its type and value as its unique identifier.
 * @param userId the userId of the creator.
 * @param accessId this is the accessId of the creator. By default should be 4.
 * @param sessionInformationId this is the session that is created by the system.
 * @param referentId In case we need this concept to refer to any other concept.
 * @returns a concept which is either newly created or an older concept that already exists.
 */
function MakeTheInstanceConceptLocal(type_1, referent_1) {
    return __awaiter(this, arguments, void 0, function* (type, referent, composition = false, userId, accessId, sessionInformationId = 999, referentId = 0) {
        if (_app__WEBPACK_IMPORTED_MODULE_3__.serviceWorker) {
            const res = yield (0,_app__WEBPACK_IMPORTED_MODULE_3__.sendMessage)('MakeTheInstanceConceptLocal', { type, referent, composition, userId, accessId, sessionInformationId, referentId });
            console.log('data received from sw', res);
            return res.data;
        }
        try {
            let sessionInformationId = 999;
            let categoryId = 4;
            let sessionInformationUserId = userId;
            // change this
            let accessId = 4;
            let stringToCheck = "";
            let stringLength = referent.length;
            let typeConcept;
            let concept;
            let startsWithThe = type.startsWith("the_");
            if (startsWithThe) {
                stringToCheck = type;
            }
            else {
                stringToCheck = "the_" + type;
            }
            if (composition) {
                let typeConceptString = yield (0,_MakeTheTypeLocal__WEBPACK_IMPORTED_MODULE_1__.MakeTheTypeConceptLocal)(type, sessionInformationId, userId, userId);
                typeConcept = typeConceptString;
                let conceptString = yield (0,_CreateTheConceptLocal__WEBPACK_IMPORTED_MODULE_0__["default"])(referent, type, userId, categoryId, typeConcept.id, accessId, true, referentId);
                concept = conceptString;
            }
            else if (stringLength > 255) {
                let typeConceptString = yield (0,_MakeTheTypeLocal__WEBPACK_IMPORTED_MODULE_1__.MakeTheTypeConceptLocal)(stringToCheck, sessionInformationId, sessionInformationUserId, userId);
                typeConcept = typeConceptString;
                let conceptString = yield (0,_CreateTheConceptLocal__WEBPACK_IMPORTED_MODULE_0__["default"])(referent, stringToCheck, userId, categoryId, typeConcept.id, accessId);
                concept = conceptString;
            }
            else {
                let typeConceptString = yield (0,_MakeTheTypeLocal__WEBPACK_IMPORTED_MODULE_1__.MakeTheTypeConceptLocal)(stringToCheck, sessionInformationId, sessionInformationUserId, userId);
                typeConcept = typeConceptString;
                let conceptByCharTypeString = yield _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_2__.LocalConceptsData.GetConceptByCharacterAndTypeLocal(referent, typeConcept.id);
                let conceptTypeCharacter = conceptByCharTypeString;
                concept = conceptTypeCharacter;
                if (conceptTypeCharacter.id == 0 && conceptTypeCharacter.userId == 0) {
                    let conceptString = yield (0,_CreateTheConceptLocal__WEBPACK_IMPORTED_MODULE_0__["default"])(referent, stringToCheck, userId, categoryId, typeConcept.id, accessId);
                    concept = conceptString;
                }
            }
            concept.type = typeConcept;
            _app__WEBPACK_IMPORTED_MODULE_3__.LocalSyncData.AddConcept(concept);
            return concept;
        }
        catch (error) {
            throw error;
        }
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
/* harmony export */   MakeTheTypeConceptLocal: () => (/* binding */ MakeTheTypeConceptLocal)
/* harmony export */ });
/* harmony import */ var _CreateTheConceptLocal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateTheConceptLocal */ "./src/Services/Local/CreateTheConceptLocal.ts");
/* harmony import */ var _GetConceptByCharacterLocal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GetConceptByCharacterLocal */ "./src/Services/Local/GetConceptByCharacterLocal.ts");
/* harmony import */ var _SplitStrings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SplitStrings */ "./src/Services/SplitStrings.ts");
/* harmony import */ var _MakeTheConceptLocal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MakeTheConceptLocal */ "./src/Services/Local/MakeTheConceptLocal.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app */ "./src/app.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





/**
 * There are two types of concepts. One type of concept is a type concept. These concepts have no actual value and do not mean
 * anything unless they are associated with other values. These are placeholders like first_name, last_name, age etc that are required in the system.
 * These types need to be created seperately.
 *
 *
 * @param typeString type of the concept that needs to be created.
 * @param sessionId SessionId of the user
 * @param sessionUserId Not required pass 999
 * @param userId UserId of the user creating this concept
 * @returns
 */
function MakeTheTypeConceptLocal(typeString, sessionId, sessionUserId, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        if (_app__WEBPACK_IMPORTED_MODULE_4__.serviceWorker) {
            const res = yield (0,_app__WEBPACK_IMPORTED_MODULE_4__.sendMessage)("MakeTheTypeConceptLocal", {
                typeString, sessionId, sessionUserId, userId
            });
            console.log("data received from sw", res);
            return res.data;
        }
        let accessId = 4;
        let existingConcept = yield (0,_GetConceptByCharacterLocal__WEBPACK_IMPORTED_MODULE_1__.GetConceptByCharacterAndCategoryLocal)(typeString);
        if (existingConcept) {
            if (existingConcept.id == 0 || existingConcept.userId == 0) {
                let splittedStringArray = (0,_SplitStrings__WEBPACK_IMPORTED_MODULE_2__.SplitStrings)(typeString);
                if (splittedStringArray[0] == typeString) {
                    let concept = yield (0,_MakeTheConceptLocal__WEBPACK_IMPORTED_MODULE_3__["default"])(typeString, "the", userId, 1, 51);
                    existingConcept = concept;
                }
                else {
                    // var categoryConcept = await MakeTheTypeConceptLocal(splittedStringArray[0], sessionId, sessionUserId, userId);
                    // var typeConcept = await MakeTheTypeConceptLocal(splittedStringArray[1], sessionId, sessionUserId, userId );
                    // if(typeConcept){
                    let categoryConcept = yield MakeTheTypeConceptLocal(splittedStringArray[0], sessionId, sessionUserId, userId);
                    let typeConcept = yield MakeTheTypeConceptLocal(splittedStringArray[1], sessionId, sessionUserId, userId);
                    let concept = yield (0,_CreateTheConceptLocal__WEBPACK_IMPORTED_MODULE_0__["default"])(typeString, splittedStringArray[1], userId, categoryConcept.id, typeConcept.id, accessId);
                    existingConcept = concept;
                    //   }
                }
            }
        }
        // LocalSyncData.AddConcept(existingConcept);
        return existingConcept;
    });
}


/***/ }),

/***/ "./src/Services/Local/UpdateCompositionLocal.ts":
/*!******************************************************!*\
  !*** ./src/Services/Local/UpdateCompositionLocal.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpdateCompositionLocal: () => (/* binding */ UpdateCompositionLocal)
/* harmony export */ });
/* harmony import */ var _Helpers_UniqueInsert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Helpers/UniqueInsert */ "./src/Helpers/UniqueInsert.ts");
/* harmony import */ var _Helpers_CheckIfExists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Helpers/CheckIfExists */ "./src/Helpers/CheckIfExists.ts");
/* harmony import */ var _Api_GetAllConnectionsOfComposition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Api/GetAllConnectionsOfComposition */ "./src/Api/GetAllConnectionsOfComposition.ts");
/* harmony import */ var _GetTheConcept__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../GetTheConcept */ "./src/Services/GetTheConcept.ts");
/* harmony import */ var _DeleteConnection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../DeleteConnection */ "./src/Services/DeleteConnection.ts");
/* harmony import */ var _CreateTheCompositionLocal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CreateTheCompositionLocal */ "./src/Services/Local/CreateTheCompositionLocal.ts");
/* harmony import */ var _MakeTheInstanceConceptLocal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MakeTheInstanceConceptLocal */ "./src/Services/Local/MakeTheInstanceConceptLocal.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app */ "./src/app.ts");
/* harmony import */ var _Conversion_ConvertConcepts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Conversion/ConvertConcepts */ "./src/Services/Conversion/ConvertConcepts.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};









// function to update the cache composition
function UpdateCompositionLocal(patcherStructure) {
    return __awaiter(this, void 0, void 0, function* () {
        if (_app__WEBPACK_IMPORTED_MODULE_7__.serviceWorker) {
            const res = yield (0,_app__WEBPACK_IMPORTED_MODULE_7__.sendMessage)("UpdateCompositionLocal", {
                patcherStructure,
            });
            console.log("data received from sw", res);
            return res.data;
        }
        // get all the default userId, sessionId, accessId passed by the patcherStructure
        const userId = patcherStructure.userId;
        const sessionId = patcherStructure.sessionId;
        const accessId = patcherStructure.accessId;
        let connectionList = [];
        const conceptList = [];
        let composition = (0,_app__WEBPACK_IMPORTED_MODULE_7__.CreateDefaultLConcept)();
        let parentConcept = (0,_app__WEBPACK_IMPORTED_MODULE_7__.CreateDefaultLConcept)();
        const toDeleteConcepts = [];
        // the main composition Id that has the data that needs to be patched
        const compositionId = patcherStructure.compositionId;
        // if you want to edit the subcompositions of the composition then you have to pass to this
        const ofTheConceptId = patcherStructure.ofTheCompositionId;
        let toDeleteConnections = [];
        // get all connections from the backend because it needs latest data
        const connectionListString = yield (0,_Api_GetAllConnectionsOfComposition__WEBPACK_IMPORTED_MODULE_2__.GetAllConnectionsOfComposition)(compositionId);
        let connectionListOriginal = connectionListString;
        for (let i = 0; i < connectionListOriginal.length; i++) {
            connectionList.push((0,_Conversion_ConvertConcepts__WEBPACK_IMPORTED_MODULE_8__.convertFromConnectionToLConnection)(connectionListOriginal[i]));
        }
        const conceptIdList = [];
        const compositionList = [];
        // put this in the upper section before updating because this will tell all other distributed
        //servers to destroy the copy of the composition that they have as new composition is coming up
        // get all the connections that are inside of the composition and store them in
        let allConcepts = [];
        for (let i = 0; i < connectionList.length; i++) {
            (0,_Helpers_UniqueInsert__WEBPACK_IMPORTED_MODULE_0__["default"])(compositionList, connectionList[i].ofTheConceptId);
            (0,_Helpers_UniqueInsert__WEBPACK_IMPORTED_MODULE_0__["default"])(conceptIdList, connectionList[i].ofTheConceptId);
            (0,_Helpers_UniqueInsert__WEBPACK_IMPORTED_MODULE_0__["default"])(conceptIdList, connectionList[i].toTheConceptId);
            allConcepts.push(connectionList[i].ofTheConceptId);
        }
        // get all the concepts that are inside of the composition and store them in a conceptList
        for (let i = 0; i < conceptIdList.length; i++) {
            const conceptString = yield (0,_GetTheConcept__WEBPACK_IMPORTED_MODULE_3__["default"])(conceptIdList[i]);
            const concept = conceptString;
            if (compositionId == conceptIdList[i]) {
                composition = (0,_Conversion_ConvertConcepts__WEBPACK_IMPORTED_MODULE_8__.convertFromConceptToLConcept)(concept);
            }
            if (ofTheConceptId == conceptIdList[i]) {
                parentConcept = (0,_Conversion_ConvertConcepts__WEBPACK_IMPORTED_MODULE_8__.convertFromConceptToLConcept)(concept);
            }
            conceptList.push((0,_Conversion_ConvertConcepts__WEBPACK_IMPORTED_MODULE_8__.convertFromConceptToLConcept)(concept));
        }
        // now trying to patch the new object into the composition
        const object = patcherStructure.patchObject;
        for (const key in object) {
            let insertingConcept = (0,_app__WEBPACK_IMPORTED_MODULE_7__.CreateDefaultLConcept)();
            const value = object[key];
            let localConcept = composition;
            // if the immedidate parent exists in the composition (i.e. for multilevel composition)
            if (parentConcept.id > 0) {
                localConcept = parentConcept;
            }
            if (Array.isArray(value) || typeof value == "object") {
                insertingConcept = yield (0,_MakeTheInstanceConceptLocal__WEBPACK_IMPORTED_MODULE_6__.MakeTheInstanceConceptLocal)(key, "", true, composition.userId, 4, 999);
                yield (0,_CreateTheCompositionLocal__WEBPACK_IMPORTED_MODULE_5__.CreateTheCompositionLocal)(object[key], insertingConcept.id, insertingConcept.userId, composition.id, composition.userId, 4, 999);
            }
            else {
                // make the new concept in the object
                insertingConcept = yield (0,_MakeTheInstanceConceptLocal__WEBPACK_IMPORTED_MODULE_6__.MakeTheInstanceConceptLocal)(key, value, false, userId, accessId, sessionId);
            }
            // check if the concept exists in the concept list because if it exists then we have to delete old connection
            const ExistingConcepts = (0,_Helpers_CheckIfExists__WEBPACK_IMPORTED_MODULE_1__.CheckIfTypeLConceptsExistsInArray)(conceptList, insertingConcept);
            // if the existing concept then start the process for deleting the concept in the list
            for (let i = 0; i < ExistingConcepts.length; i++) {
                if (ExistingConcepts[i].id > 0) {
                    const deletingConnections = (0,_Helpers_CheckIfExists__WEBPACK_IMPORTED_MODULE_1__.CheckAllConnectionsConnectedInLConnectionArray)(connectionList, ExistingConcepts[i].id);
                    toDeleteConnections = toDeleteConnections.concat(deletingConnections);
                    toDeleteConcepts.push(ExistingConcepts[i]);
                }
            }
            // create the connection between the new concept and the old composition
            const connectionString = yield (0,_app__WEBPACK_IMPORTED_MODULE_7__.CreateTheConnectionLocal)(localConcept.id, insertingConcept.id, composition.id, 2);
            const connection = connectionString;
            conceptList.push(insertingConcept);
        }
        // now you have to delete the connection in bulk
        for (let j = 0; j < toDeleteConnections.length; j++) {
            // remove from the cache list
            // delete the connection in the backend
            yield (0,_DeleteConnection__WEBPACK_IMPORTED_MODULE_4__.DeleteConnectionById)(toDeleteConnections[j].id);
        }
        yield _app__WEBPACK_IMPORTED_MODULE_7__.LocalSyncData.SyncDataOnline();
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
    return __awaiter(this, void 0, void 0, function* () {
        let categoryUserId = userId;
        let securityUserId = userId;
        let categoryId = 4;
        let typeId = 51;
        let typeUserId = userId;
        let sessionUserId = userId;
        let referentUserId = userId;
        let lengthOfCharacters = the_character_data.length;
        let concept;
        if (lengthOfCharacters == 1) {
            let referentId = the_character_data.charCodeAt(0);
            let typeIdForCharacter = 49;
            let characterDataString = yield (0,_MakeTheCharacterData__WEBPACK_IMPORTED_MODULE_0__["default"])(the_character_data, userId, securityId, accessId, sessionId);
            concept = (0,_MakeTheConcept__WEBPACK_IMPORTED_MODULE_1__["default"])(the_character_data, userId, categoryId, typeIdForCharacter, referentId, accessId, "the_character");
        }
        else {
            let characterDataString = yield (0,_MakeTheCharacterData__WEBPACK_IMPORTED_MODULE_0__["default"])(the_character_data, userId, securityId, accessId, sessionId);
            let characterData = characterDataString;
            if (characterData.isNew) {
                let conceptString = yield (0,_MakeTheConcept__WEBPACK_IMPORTED_MODULE_1__["default"])(the_character_data, userId, categoryId, typeId, characterData.id, accessId, "the_characters");
                concept = conceptString;
            }
            else {
                let conceptString = yield (0,_MakeTheConcept__WEBPACK_IMPORTED_MODULE_1__["default"])(the_character_data, userId, categoryId, typeId, characterData.id, accessId, "the_characters");
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


function MakeTheConcept(referent, userId, categoryId, typeId, referentId, accessId, typeCharacter) {
    return __awaiter(this, void 0, void 0, function* () {
        let conceptString = yield (0,_Api_GetConceptByCharacterAndType__WEBPACK_IMPORTED_MODULE_0__.GetConceptByCharacterAndType)(referent, typeId);
        let concept = conceptString;
        if (concept.id == 0) {
            conceptString = yield (0,_CreateTheConcept__WEBPACK_IMPORTED_MODULE_1__["default"])(referent, userId, categoryId, typeId, referentId, accessId, typeCharacter);
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
/* harmony import */ var _Api_MakeTheNameInBackend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Api/MakeTheNameInBackend */ "./src/Api/MakeTheNameInBackend.ts");
/* harmony import */ var _DataStructures_TheTexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DataStructures/TheTexts */ "./src/DataStructures/TheTexts.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app */ "./src/app.ts");
/* harmony import */ var _CreateDefaultConcept__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CreateDefaultConcept */ "./src/Services/CreateDefaultConcept.ts");
/* harmony import */ var _CreateTheConcept__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CreateTheConcept */ "./src/Services/CreateTheConcept.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







/**
 * This is the basic function of the concept connection system. This function let's you create a concept within the constraints of the
 * concept connection system. This function is the building block of the concept connection system.
 * @param type this is the type of the concept. You can also think of this as the key of concept. first_name, last_name etc.
 * @param referent the actual value of the concept. The actual name of value of the concept.
 * @param composition this is a boolean that defines if the concept is a composition or not. If this is a composition then other things are also
 * connected internally with this concept. If composition is true then always a new concept is created otherwise it checks if the concept already exists
 * and creates only in the case that the concept does not already exists with its type and value as its unique identifier.
 * @param userId the userId of the creator.
 * @param passedAccessId this is the accessId of the creator. By default should be 4.
 * @param passedSessionId this is the session that is created by the system.
 * @param referentId In case we need this concept to refer to any other concept.
 * @returns a concept which is either newly created or an older concept that already exists.
 */
function MakeTheInstanceConcept(type_1, referent_1) {
    return __awaiter(this, arguments, void 0, function* (type, referent, composition = false, userId, passedAccessId = 4, passedSessionId = 999, referentId = 0) {
        if (_app__WEBPACK_IMPORTED_MODULE_4__.serviceWorker) {
            const res = yield (0,_app__WEBPACK_IMPORTED_MODULE_4__.sendMessage)("MakeTheInstanceConcept", {
                type,
                referent,
                composition,
                userId,
                passedAccessId,
                passedSessionId,
                referentId,
            });
            console.log("data received from sw", res);
            return res.data;
        }
        let sessionInformationId = passedSessionId;
        let categoryId = 4;
        let categoryUserId = userId;
        let referentUserId = 999;
        let securityId = 999;
        let securityUserId = userId;
        let sessionInformationUserId = userId;
        // change this
        let accessId = passedAccessId;
        let accessUserId = userId;
        let stringToCheck = "";
        let stringLength = referent.length;
        let typeConcept = (0,_CreateDefaultConcept__WEBPACK_IMPORTED_MODULE_5__.CreateDefaultConcept)();
        let concept;
        let startsWithThe = type.startsWith("the_");
        if (startsWithThe) {
            stringToCheck = type;
        }
        else {
            stringToCheck = "the_" + type;
        }
        if (composition) {
            let typeConceptString = yield (0,_app__WEBPACK_IMPORTED_MODULE_4__.MakeTheTypeConceptApi)(type, userId);
            typeConcept = typeConceptString;
            let conceptString = yield (0,_CreateTheConcept__WEBPACK_IMPORTED_MODULE_6__["default"])(referent, userId, categoryId, typeConcept.id, referentId, accessId, type);
            concept = conceptString;
        }
        else if (stringLength > 255) {
            let typeConceptString = yield (0,_app__WEBPACK_IMPORTED_MODULE_4__.MakeTheTypeConceptApi)(stringToCheck, userId);
            typeConcept = typeConceptString;
            let conceptString = yield (0,_CreateTheConcept__WEBPACK_IMPORTED_MODULE_6__["default"])(referent, userId, categoryId, typeConcept.id, referentId, accessId, stringToCheck);
            concept = conceptString;
            let TheTextsData = new _DataStructures_TheTexts__WEBPACK_IMPORTED_MODULE_3__.TheTexts(userId, referent, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId, Date.now().toString(), true);
            (0,_Api_Create_CreateTheTextData__WEBPACK_IMPORTED_MODULE_0__.CreateTextData)(TheTextsData);
        }
        else {
            let typeConceptString = yield (0,_app__WEBPACK_IMPORTED_MODULE_4__.MakeTheTypeConceptApi)(stringToCheck, userId);
            typeConcept = typeConceptString;
            let conceptByCharTypeString = yield (0,_Api_GetConceptByCharacterAndType__WEBPACK_IMPORTED_MODULE_1__.GetConceptByCharacterAndType)(referent, typeConcept.id);
            let conceptTypeCharacter = conceptByCharTypeString;
            concept = conceptTypeCharacter;
            if (conceptTypeCharacter.id == 0 && conceptTypeCharacter.userId == 0) {
                // let makeTheNameString = await MakeTheName(referent,userId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId,typeConcept.id, typeConcept.userId,conceptTypeCharacter );
                // let makeTheNameConcept = makeTheNameString as Concept;
                // concept = conceptTypeCharacter;
                let conceptString = yield (0,_CreateTheConcept__WEBPACK_IMPORTED_MODULE_6__.CreateTheConceptImmediate)(referent, userId, categoryId, typeConcept.id, 12, accessId, stringToCheck);
                concept = conceptString;
                (0,_Api_MakeTheNameInBackend__WEBPACK_IMPORTED_MODULE_2__.MakeTheNameInBackend)(concept.id, `${referent}`, typeConcept.id, userId);
            }
        }
        // if(concept){
        //     if(concept.type == null){
        //         let conceptType = ConceptsData.GetConcept(concept.typeId);
        //         if(conceptType == null && concept.typeId != null && concept.typeId != undefined){
        //             let typeConceptStringNew = await GetConcept(concept.typeId);
        //             let newTypeConcept = typeConceptStringNew as Concept;
        //             concept.type = newTypeConcept;
        //         }
        //     }
        // }
        concept.type = typeConcept;
        return concept;
    });
}


/***/ }),

/***/ "./src/Services/MakeTheTimestamp.ts":
/*!******************************************!*\
  !*** ./src/Services/MakeTheTimestamp.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MakeTheTimestamp: () => (/* binding */ MakeTheTimestamp)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ "./src/app.ts");
/* harmony import */ var _CreateDefaultConcept__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateDefaultConcept */ "./src/Services/CreateDefaultConcept.ts");
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



function MakeTheTimestamp(type_1, referent_1, userId_1) {
    return __awaiter(this, arguments, void 0, function* (type, referent, userId, accessId = 4, sessionInformationId = 999) {
        let categoryId = 4;
        let referentId = 0;
        // change this
        let stringToCheck = "";
        let startsWithThe = type.startsWith("the_");
        let typeConcept = (0,_CreateDefaultConcept__WEBPACK_IMPORTED_MODULE_1__.CreateDefaultConcept)();
        let concept;
        if (startsWithThe) {
            stringToCheck = type;
        }
        else {
            stringToCheck = "the_" + type;
        }
        let typeConceptString = yield (0,_app__WEBPACK_IMPORTED_MODULE_0__.MakeTheTypeConceptApi)(stringToCheck, userId);
        typeConcept = typeConceptString;
        let conceptString = yield (0,_MakeTheConcept__WEBPACK_IMPORTED_MODULE_2__["default"])(referent, userId, categoryId, typeConcept.id, referentId, accessId, stringToCheck);
        concept = conceptString;
        return concept;
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
/* harmony export */   MakeTheTypeConcept: () => (/* binding */ MakeTheTypeConcept)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ "./src/app.ts");
/* harmony import */ var _CreateTheConcept__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateTheConcept */ "./src/Services/CreateTheConcept.ts");
/* harmony import */ var _GetConceptByCharacter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GetConceptByCharacter */ "./src/Services/GetConceptByCharacter.ts");
/* harmony import */ var _MakeTheCharacter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MakeTheCharacter */ "./src/Services/MakeTheCharacter.ts");
/* harmony import */ var _SplitStrings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SplitStrings */ "./src/Services/SplitStrings.ts");
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
        if (_app__WEBPACK_IMPORTED_MODULE_0__.serviceWorker) {
            const res = yield (0,_app__WEBPACK_IMPORTED_MODULE_0__.sendMessage)('MakeTheTypeConcept', { typeString, sessionId, sessionUserId, userId });
            console.log('data received from sw', res);
            return res.data;
        }
        let referentId = 999;
        let securityId = 999;
        let accessId = 999;
        let accessUserId = userId;
        let existingConcept = yield (0,_GetConceptByCharacter__WEBPACK_IMPORTED_MODULE_2__["default"])(typeString);
        if (existingConcept) {
            if (existingConcept.id == 0 || existingConcept.userId == 0) {
                let splittedStringArray = (0,_SplitStrings__WEBPACK_IMPORTED_MODULE_4__.SplitStrings)(typeString);
                if (splittedStringArray.length > 0) {
                    if (splittedStringArray[0] == typeString) {
                        let conceptString = yield (0,_MakeTheCharacter__WEBPACK_IMPORTED_MODULE_3__["default"])(typeString, userId, securityId, accessId, accessUserId, sessionId);
                        existingConcept = conceptString;
                    }
                    else {
                        let categoryId = 1;
                        let categoryConcept = yield MakeTheTypeConcept(splittedStringArray[0], sessionId, sessionUserId, userId);
                        let typeConcept = yield MakeTheTypeConcept(splittedStringArray[1], sessionId, sessionUserId, userId);
                        if (typeConcept) {
                            let concept = yield (0,_CreateTheConcept__WEBPACK_IMPORTED_MODULE_1__.CreateTheConceptImmediate)(typeString, userId, categoryConcept.id, typeConcept.id, referentId, accessId, splittedStringArray[1]);
                            existingConcept = concept;
                        }
                    }
                }
            }
        }
        return existingConcept;
    });
}


/***/ }),

/***/ "./src/Services/Mqtt/publishMessage.ts":
/*!*********************************************!*\
  !*** ./src/Services/Mqtt/publishMessage.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   publishMessage: () => (/* binding */ publishMessage)
/* harmony export */ });
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");

function publishMessage(topic, message) {
    if (_DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.MQTT_CONNECTION) {
        _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.MQTT_CONNECTION.publish(topic, message);
    }
}


/***/ }),

/***/ "./src/Services/Search/SearchLinkInternal.ts":
/*!***************************************************!*\
  !*** ./src/Services/Search/SearchLinkInternal.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchLinkInternal: () => (/* binding */ SearchLinkInternal),
/* harmony export */   SearchLinkInternalAll: () => (/* binding */ SearchLinkInternalAll)
/* harmony export */ });
/* harmony import */ var _Api_Search_SearchInternalApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Api/Search/SearchInternalApi */ "./src/Api/Search/SearchInternalApi.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app */ "./src/app.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function SearchLinkInternal(searchQuery_1) {
    return __awaiter(this, arguments, void 0, function* (searchQuery, token = "") {
        try {
            let conceptsConnections = yield (0,_Api_Search_SearchInternalApi__WEBPACK_IMPORTED_MODULE_0__.SearchInternalApi)(searchQuery, token);
            let out = yield (0,_app__WEBPACK_IMPORTED_MODULE_1__.ViewInternalData)(conceptsConnections);
            return out;
        }
        catch (ex) {
            throw ex;
        }
    });
}
function SearchLinkInternalAll(searchQuery_1) {
    return __awaiter(this, arguments, void 0, function* (searchQuery, token = "") {
        try {
            let conceptsConnections = yield (0,_Api_Search_SearchInternalApi__WEBPACK_IMPORTED_MODULE_0__.SearchInternalAllApi)(searchQuery);
            let out = conceptsConnections;
            return out;
        }
        catch (ex) {
            throw ex;
        }
    });
}


/***/ }),

/***/ "./src/Services/Search/SearchLinkMultiple.ts":
/*!***************************************************!*\
  !*** ./src/Services/Search/SearchLinkMultiple.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataIdBuildLayer: () => (/* binding */ DataIdBuildLayer),
/* harmony export */   FormatConceptsAndConnections: () => (/* binding */ FormatConceptsAndConnections),
/* harmony export */   FormatFromConnections: () => (/* binding */ FormatFromConnections),
/* harmony export */   FormatFromConnectionsAltered: () => (/* binding */ FormatFromConnectionsAltered),
/* harmony export */   FormatFromConnectionsAlteredArray: () => (/* binding */ FormatFromConnectionsAlteredArray),
/* harmony export */   SearchLinkMultipleAll: () => (/* binding */ SearchLinkMultipleAll)
/* harmony export */ });
/* harmony import */ var _Api_Search_SearchLinkMultipleApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Api/Search/SearchLinkMultipleApi */ "./src/Api/Search/SearchLinkMultipleApi.ts");
/* harmony import */ var _Constants_FormatConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Constants/FormatConstants */ "./src/Constants/FormatConstants.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app */ "./src/app.ts");
/* harmony import */ var _GetCompositionBulk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../GetCompositionBulk */ "./src/Services/GetCompositionBulk.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




function SearchLinkMultipleAll(searchQuery_1) {
    return __awaiter(this, arguments, void 0, function* (searchQuery, token = "", caller = null, format = _Constants_FormatConstants__WEBPACK_IMPORTED_MODULE_1__.DATAID) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (_app__WEBPACK_IMPORTED_MODULE_2__.serviceWorker) {
            const res = yield (0,_app__WEBPACK_IMPORTED_MODULE_2__.sendMessage)('SearchLinkMultipleAll', { searchQuery, token, caller, format });
            console.log('data received search from sw', res);
            return res.data;
        }
        let conceptIds = [];
        let linkers = [];
        let connections = [];
        let reverse = [];
        let mainCompositionId = searchQuery[0].composition;
        let conceptsConnections = {};
        let result = {};
        try {
            if (caller === null || caller === void 0 ? void 0 : caller.isDataLoaded) {
                conceptsConnections.compositionIds = (_a = caller.conceptIds) === null || _a === void 0 ? void 0 : _a.slice();
                conceptsConnections.internalConnections = (_b = caller.internalConnections) === null || _b === void 0 ? void 0 : _b.slice();
                conceptsConnections.linkers = (_c = caller.linkers) === null || _c === void 0 ? void 0 : _c.slice();
                conceptsConnections.reverse = (_d = caller.reverse) === null || _d === void 0 ? void 0 : _d.slice();
                result = conceptsConnections;
                conceptIds = result.compositionIds;
                connections = result.internalConnections;
                linkers = result.linkers;
                reverse = result.reverse;
            }
            else {
                conceptsConnections = yield (0,_Api_Search_SearchLinkMultipleApi__WEBPACK_IMPORTED_MODULE_0__.SearchLinkMultipleApi)(searchQuery, token);
                if (caller) {
                    caller.conceptIds = (_e = conceptsConnections.compositionIds) === null || _e === void 0 ? void 0 : _e.slice();
                    caller.internalConnections = (_f = conceptsConnections.internalConnections) === null || _f === void 0 ? void 0 : _f.slice();
                    caller.linkers = (_g = conceptsConnections.linkers) === null || _g === void 0 ? void 0 : _g.slice();
                    caller.reverse = (_h = conceptsConnections.reverse) === null || _h === void 0 ? void 0 : _h.slice();
                    caller.isDataLoaded = true;
                }
                result = conceptsConnections;
                conceptIds = result.compositionIds;
                connections = result.internalConnections;
                linkers = result.linkers;
                reverse = result.reverse;
            }
            let out = yield DataIdBuildLayer(linkers, conceptIds, connections, reverse, mainCompositionId, format);
            return out;
        }
        catch (e) {
            console.log("this is the error in the search link multiple", e);
            throw e;
        }
    });
}
/**
 * ######### This layer builds the data. Format is dataid ##########
 * @param linkers list of ids that help us
 * @param conceptIds this is all the concept ids that need  to be composited
 * @param connections these are the internal connections of the compositions that help in creating individual compositions
 * @param reverse this is the list of connection ids that need to show reverse connections(to->from)
 * @param mainCompositionId this is the main centre point of this data.
 * @returns
 */
function DataIdBuildLayer(linkers_1, conceptIds_1, connections_1, reverse_1, mainCompositionId_1) {
    return __awaiter(this, arguments, void 0, function* (linkers, conceptIds, connections, reverse, mainCompositionId, format = _Constants_FormatConstants__WEBPACK_IMPORTED_MODULE_1__.DATAID) {
        let startTime = new Date().getTime();
        let prefetchConnections = yield (0,_GetCompositionBulk__WEBPACK_IMPORTED_MODULE_3__.GetConnectionDataPrefetch)(linkers);
        let concepts;
        let out;
        if (format == _Constants_FormatConstants__WEBPACK_IMPORTED_MODULE_1__.JUSTDATA) {
            concepts = yield (0,_GetCompositionBulk__WEBPACK_IMPORTED_MODULE_3__.GetCompositionFromConnectionsInObject)(conceptIds, connections);
            out = yield FormatFromConnections(linkers, concepts, mainCompositionId, reverse);
        }
        else if (format == _Constants_FormatConstants__WEBPACK_IMPORTED_MODULE_1__.NORMAL) {
            concepts = yield (0,_GetCompositionBulk__WEBPACK_IMPORTED_MODULE_3__.GetCompositionFromConnectionsInObjectNormal)(conceptIds, connections);
            out = yield FormatFromConnections(linkers, concepts, mainCompositionId, reverse);
        }
        else if (format == 100) {
            concepts = yield (0,_GetCompositionBulk__WEBPACK_IMPORTED_MODULE_3__.GetCompositionFromConnectionsWithDataIdInObjectNew)(conceptIds, connections);
            out = yield FormatFromConnectionsAltered(prefetchConnections, concepts, mainCompositionId, reverse);
        }
        else {
            concepts = yield (0,_GetCompositionBulk__WEBPACK_IMPORTED_MODULE_3__.GetCompositionFromConnectionsWithDataIdInObject)(conceptIds, connections);
            out = yield FormatFromConnectionsAltered(prefetchConnections, concepts, mainCompositionId, reverse);
        }
        return out;
    });
}
/**
 * ## Format is DATAID ##
 * This  is altered format and is different from others because it passes all the connections prebuilt/prefetched
 * This will not let the connections to be again fetched from the memory.
 * @param connections the type connections that need (external connections) to be passed
 * @param compositionData this is a dictionary type of format that has all the build compositions {id: { actual data}}
 * @param mainComposition this is the id of the main composition that builds the tree
 * @param reverse this is the list of connections ids that needs to go to the reverse direction (to---->from)
 * @returns
 */
function FormatFromConnectionsAltered(connections_1, compositionData_1, mainComposition_1) {
    return __awaiter(this, arguments, void 0, function* (connections, compositionData, mainComposition, reverse = []) {
        let startTime = new Date().getTime();
        let mainData = {};
        let myConcepts = [];
        for (let i = 0; i < connections.length; i++) {
            myConcepts.push(connections[i].toTheConceptId);
            myConcepts.push(connections[i].ofTheConceptId);
            myConcepts.push(connections[i].typeId);
        }
        connections.sort(function (x, y) {
            return y.id - x.id;
        });
        for (let i = 0; i < connections.length; i++) {
            let reverseFlag = false;
            if (reverse.includes(connections[i].id)) {
                reverseFlag = true;
            }
            if (reverseFlag == true) {
                if (compositionData[connections[i].ofTheConceptId] && compositionData[connections[i].toTheConceptId]) {
                    let mydata = compositionData[connections[i].toTheConceptId];
                    let linkerConcept = yield (0,_app__WEBPACK_IMPORTED_MODULE_2__.GetTheConcept)(connections[i].typeId);
                    let newData = mydata === null || mydata === void 0 ? void 0 : mydata.data;
                    let key = Object.keys(newData)[0];
                    try {
                        let reverseCharater = linkerConcept.characterValue + "_reverse";
                        if (typeof newData === "string") {
                            newData = {};
                        }
                        if (Array.isArray(newData[key][reverseCharater])) {
                            newData[key][reverseCharater].push(compositionData[connections[i].ofTheConceptId]);
                        }
                        else {
                            if (typeof newData[key] === "string") {
                                newData[key] = {};
                            }
                            newData[key][reverseCharater] = [];
                            newData[key][reverseCharater].push(compositionData[connections[i].ofTheConceptId]);
                        }
                    }
                    catch (ex) {
                        console.log("this is error", ex);
                    }
                }
            }
            else {
                if (compositionData[connections[i].ofTheConceptId] && compositionData[connections[i].toTheConceptId]) {
                    let mydata = compositionData[connections[i].ofTheConceptId];
                    let linkerConcept = yield (0,_app__WEBPACK_IMPORTED_MODULE_2__.GetTheConcept)(connections[i].typeId);
                    let newData = mydata === null || mydata === void 0 ? void 0 : mydata.data;
                    let key = Object.keys(newData)[0];
                    try {
                        if (typeof newData === "string") {
                            newData = {};
                        }
                        if (Array.isArray(newData[key][linkerConcept.characterValue])) {
                            newData[key][linkerConcept.characterValue].push(compositionData[connections[i].toTheConceptId]);
                        }
                        else {
                            if (typeof newData[key] === "string") {
                                newData[key] = {};
                            }
                            newData[key][linkerConcept.characterValue] = [];
                            newData[key][linkerConcept.characterValue].push(compositionData[connections[i].toTheConceptId]);
                        }
                    }
                    catch (ex) {
                        console.log("this is error", ex);
                    }
                }
            }
        }
        mainData = compositionData[mainComposition];
        return mainData;
    });
}
/**
 * ######### Format is normal ######### used for listing.
 * This is helpful in building a format that has multiple mainCompositions i.e. in the context of the list
 * The list format is helpful because you do not have to go over each individual query.
 * @param connections the type connections that need (external connections) to be passed
 * @param compositionData  this is a dictionary type of format that has all the build compositions {id: { actual data}}
 * @param mainComposition this is list of  ids of the main composition that builds the tree
 * @param reverse this is the list of connections ids that needs to go to the reverse direction (to---->from)
 * @returns
 */
function FormatConceptsAndConnections(connections_1, compositionData_1, mainComposition_1) {
    return __awaiter(this, arguments, void 0, function* (connections, compositionData, mainComposition, reverse = []) {
        let mainData = [];
        let myConcepts = [];
        for (let i = 0; i < connections.length; i++) {
            myConcepts.push(connections[i].toTheConceptId);
            myConcepts.push(connections[i].ofTheConceptId);
            myConcepts.push(connections[i].typeId);
        }
        connections.sort(function (x, y) {
            return y.id - x.id;
        });
        for (let i = 0; i < connections.length; i++) {
            let reverseFlag = false;
            if (reverse.includes(connections[i].id)) {
                reverseFlag = true;
            }
            if (reverseFlag == true) {
                if (compositionData[connections[i].ofTheConceptId] && compositionData[connections[i].toTheConceptId]) {
                    let newData = compositionData[connections[i].toTheConceptId];
                    let linkerConcept = yield (0,_app__WEBPACK_IMPORTED_MODULE_2__.GetTheConcept)(connections[i].typeId);
                    let key = Object.keys(newData)[0];
                    try {
                        let reverseCharater = linkerConcept.characterValue + "_reverse";
                        if (typeof newData === "string") {
                            newData = {};
                        }
                        if (Array.isArray(newData[key][reverseCharater])) {
                            newData[key][reverseCharater].push(compositionData[connections[i].ofTheConceptId]);
                        }
                        else {
                            if (typeof newData[key] === "string") {
                                newData[key] = {};
                            }
                            newData[key][reverseCharater] = [];
                            newData[key][reverseCharater].push(compositionData[connections[i].ofTheConceptId]);
                        }
                    }
                    catch (ex) {
                        console.log("this is error", ex);
                    }
                }
            }
            else {
                if (compositionData[connections[i].ofTheConceptId] && compositionData[connections[i].toTheConceptId]) {
                    let newData = compositionData[connections[i].ofTheConceptId];
                    let linkerConcept = yield (0,_app__WEBPACK_IMPORTED_MODULE_2__.GetTheConcept)(connections[i].typeId);
                    let key = Object.keys(newData)[0];
                    try {
                        if (typeof newData === "string") {
                            newData = {};
                        }
                        if (Array.isArray(newData[key][linkerConcept.characterValue])) {
                            newData[key][linkerConcept.characterValue].push(compositionData[connections[i].toTheConceptId]);
                        }
                        else {
                            if (typeof newData[key] === "string") {
                                newData[key] = {};
                            }
                            newData[key][linkerConcept.characterValue] = [];
                            newData[key][linkerConcept.characterValue].push(compositionData[connections[i].toTheConceptId]);
                        }
                    }
                    catch (ex) {
                        console.log("this is error", ex);
                    }
                }
            }
        }
        for (let i = 0; i < mainComposition.length; i++) {
            let mymainData = compositionData[mainComposition[i]];
            console.log(mainData, mymainData);
            mainData.push(mymainData);
        }
        return mainData;
    });
}
/**
 * ############ Format is data-id and is used for list. ############
 * This is helpful in building a format that has multiple mainCompositions i.e. in the context of the list
 * The list format is helpful because you do not have to go over each individual query.
 * @param connections the type connections that need (external connections) to be passed
 * @param compositionData  this is a dictionary type of format that has all the build compositions {id: { actual data}}
 * @param mainComposition this is list of  ids of the main composition that builds the tree
 * @param reverse this is the list of connections ids that needs to go to the reverse direction (to---->from)
 * @returns
 */
function FormatFromConnectionsAlteredArray(connections_1, compositionData_1, conceptIds_1, mainComposition_1) {
    return __awaiter(this, arguments, void 0, function* (connections, compositionData, conceptIds, mainComposition, reverse = []) {
        let startTime = new Date().getTime();
        let mainData = [];
        let myConcepts = [];
        for (let i = 0; i < connections.length; i++) {
            myConcepts.push(connections[i].toTheConceptId);
            myConcepts.push(connections[i].ofTheConceptId);
            myConcepts.push(connections[i].typeId);
        }
        connections.sort(function (x, y) {
            return y.id - x.id;
        });
        for (let i = 0; i < connections.length; i++) {
            let reverseFlag = false;
            if (reverse.includes(connections[i].id)) {
                reverseFlag = true;
            }
            if (reverseFlag == true) {
                if (compositionData[connections[i].ofTheConceptId] && compositionData[connections[i].toTheConceptId]) {
                    let mydata = compositionData[connections[i].toTheConceptId];
                    let linkerConcept = yield (0,_app__WEBPACK_IMPORTED_MODULE_2__.GetTheConcept)(connections[i].typeId);
                    let newData = mydata === null || mydata === void 0 ? void 0 : mydata.data;
                    let key = Object.keys(newData)[0];
                    try {
                        let reverseCharater = linkerConcept.characterValue + "_reverse";
                        if (typeof newData === "string") {
                            newData = {};
                        }
                        if (Array.isArray(newData[key][reverseCharater])) {
                            newData[key][reverseCharater].push(compositionData[connections[i].ofTheConceptId]);
                        }
                        else {
                            if (typeof newData[key] === "string") {
                                newData[key] = {};
                            }
                            newData[key][reverseCharater] = [];
                            newData[key][reverseCharater].push(compositionData[connections[i].ofTheConceptId]);
                        }
                    }
                    catch (ex) {
                        console.log("this is error", ex);
                    }
                }
            }
            else {
                if (compositionData[connections[i].ofTheConceptId] && compositionData[connections[i].toTheConceptId]) {
                    let mydata = compositionData[connections[i].ofTheConceptId];
                    let linkerConcept = yield (0,_app__WEBPACK_IMPORTED_MODULE_2__.GetTheConcept)(connections[i].typeId);
                    let newData = mydata === null || mydata === void 0 ? void 0 : mydata.data;
                    let key = Object.keys(newData)[0];
                    try {
                        if (typeof newData === "string") {
                            newData = {};
                        }
                        if (Array.isArray(newData[key][linkerConcept.characterValue])) {
                            newData[key][linkerConcept.characterValue].push(compositionData[connections[i].toTheConceptId]);
                        }
                        else {
                            if (typeof newData[key] === "string") {
                                newData[key] = {};
                            }
                            newData[key][linkerConcept.characterValue] = [];
                            newData[key][linkerConcept.characterValue].push(compositionData[connections[i].toTheConceptId]);
                        }
                    }
                    catch (ex) {
                        console.log("this is error", ex);
                    }
                }
            }
        }
        for (let i = 0; i < mainComposition.length; i++) {
            let mymainData = compositionData[mainComposition[i]];
            console.log(mainData, mymainData);
            mainData.push(mymainData);
        }
        return mainData;
    });
}
/**
 * ########## Format works with JUSTDATA / NORMAL ########### used for single origin concept
 * @param linkers this is the list of linkers that
 * @param compositionData
 * @param mainComposition
 * @param reverse list of connection ids that need to show reverse conneciton.
 * @returns
 */
function FormatFromConnections(linkers_1, compositionData_1, mainComposition_1) {
    return __awaiter(this, arguments, void 0, function* (linkers, compositionData, mainComposition, reverse = []) {
        let mainData = {};
        let connections = yield (0,_app__WEBPACK_IMPORTED_MODULE_2__.GetConnectionBulk)(linkers);
        let myConcepts = [];
        for (let i = 0; i < connections.length; i++) {
            myConcepts.push(connections[i].toTheConceptId);
            myConcepts.push(connections[i].ofTheConceptId);
            myConcepts.push(connections[i].typeId);
        }
        yield (0,_app__WEBPACK_IMPORTED_MODULE_2__.GetConceptBulk)(myConcepts);
        connections.sort(function (x, y) {
            return y.id - x.id;
        });
        for (let i = 0; i < connections.length; i++) {
            let reverseFlag = false;
            if (reverse.includes(connections[i].id)) {
                reverseFlag = true;
            }
            if (reverseFlag == true) {
                if (compositionData[connections[i].ofTheConceptId] && compositionData[connections[i].toTheConceptId]) {
                    let mydata = compositionData[connections[i].toTheConceptId];
                    let linkerConcept = yield (0,_app__WEBPACK_IMPORTED_MODULE_2__.GetTheConcept)(connections[i].typeId);
                    let newData = mydata;
                    let key = Object.keys(newData)[0];
                    try {
                        let reverseCharater = linkerConcept.characterValue + "_reverse";
                        if (typeof newData === "string") {
                            newData = {};
                        }
                        if (Array.isArray(newData[key][reverseCharater])) {
                            newData[key][reverseCharater].push(compositionData[connections[i].ofTheConceptId]);
                        }
                        else {
                            if (typeof newData[key] === "string") {
                                newData[key] = {};
                            }
                            newData[key][reverseCharater] = [];
                            newData[key][reverseCharater].push(compositionData[connections[i].ofTheConceptId]);
                        }
                    }
                    catch (ex) {
                        console.log("this is error", ex);
                    }
                }
            }
            else {
                if (compositionData[connections[i].ofTheConceptId] && compositionData[connections[i].toTheConceptId]) {
                    let mydata = compositionData[connections[i].ofTheConceptId];
                    let linkerConcept = yield (0,_app__WEBPACK_IMPORTED_MODULE_2__.GetTheConcept)(connections[i].typeId);
                    let newData = mydata;
                    // console.log("this is the new data", newData);
                    let key = Object.keys(newData)[0];
                    try {
                        if (typeof newData === "string") {
                            newData = {};
                        }
                        if (Array.isArray(newData[key][linkerConcept.characterValue])) {
                            newData[key][linkerConcept.characterValue].push(compositionData[connections[i].toTheConceptId]);
                        }
                        else {
                            if (typeof newData[key] === "string") {
                                newData[key] = {};
                            }
                            newData[key][linkerConcept.characterValue] = [];
                            newData[key][linkerConcept.characterValue].push(compositionData[connections[i].toTheConceptId]);
                        }
                    }
                    catch (ex) {
                        console.log("this is error", ex);
                    }
                }
            }
        }
        mainData = compositionData[mainComposition];
        return mainData;
    });
}


/***/ }),

/***/ "./src/Services/Search/SearchWithTypeAndLinker.ts":
/*!********************************************************!*\
  !*** ./src/Services/Search/SearchWithTypeAndLinker.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchWithTypeAndLinker: () => (/* binding */ SearchWithTypeAndLinker),
/* harmony export */   SearchWithTypeAndLinkerDataId: () => (/* binding */ SearchWithTypeAndLinkerDataId),
/* harmony export */   formatDataArrayDataId: () => (/* binding */ formatDataArrayDataId),
/* harmony export */   formatDataArrayNormal: () => (/* binding */ formatDataArrayNormal)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app */ "./src/app.ts");
/* harmony import */ var _GetCompositionBulk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GetCompositionBulk */ "./src/Services/GetCompositionBulk.ts");
/* harmony import */ var _SearchLinkMultiple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchLinkMultiple */ "./src/Services/Search/SearchLinkMultiple.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



/**
 * This function will help you search a concept by their type and also to query inside of it.
 * Put the number of compositions you want to get in the searchStructure which can be set by inpage and page
 * Then the type should be set in searchQuery for the compositionName.
 * Inside the searchQuery array this you can set the full linker / listLinker in the searchQuery.
 * This will give the id of the structures.
 */
function SearchWithTypeAndLinkerDataId(searchStructure_1, searchQuery_1) {
    return __awaiter(this, arguments, void 0, function* (searchStructure, searchQuery, token = "") {
        let result = yield (0,_app__WEBPACK_IMPORTED_MODULE_0__.SearchWithTypeAndLinkerApi)(searchStructure, searchQuery, token);
        let conceptIds = result.compositionIds;
        let connections = result.internalConnections;
        let linkers = result.linkers;
        let reverse = result.reverse;
        let mainCompositionIds = result.mainCompositionIds;
        let prefetchConnections = yield (0,_GetCompositionBulk__WEBPACK_IMPORTED_MODULE_1__.GetConnectionDataPrefetch)(linkers);
        let concepts = yield (0,_GetCompositionBulk__WEBPACK_IMPORTED_MODULE_1__.GetCompositionFromConnectionsWithDataIdInObject)(conceptIds, connections);
        let output = yield (0,_SearchLinkMultiple__WEBPACK_IMPORTED_MODULE_2__.FormatFromConnectionsAlteredArray)(prefetchConnections, concepts, conceptIds, mainCompositionIds, reverse);
        return output;
    });
}
/**
 * This function will help you search a concept by their type and also to query inside of it.
 * Put the number of compositions you want to get in the searchStructure which can be set by inpage and page
 * Then the type should be set in searchQuery for the compositionName.
 * Inside the searchQuery array this you can set the full linker / listLinker in the searchQuery.
 * This will not give the id of the structures.
 */
function SearchWithTypeAndLinker(searchStructure_1, searchQuery_1) {
    return __awaiter(this, arguments, void 0, function* (searchStructure, searchQuery, token = "") {
        let result = yield (0,_app__WEBPACK_IMPORTED_MODULE_0__.SearchWithTypeAndLinkerApi)(searchStructure, searchQuery, token);
        let conceptIds = result.compositionIds;
        let connections = result.internalConnections;
        let linkers = result.linkers;
        let reverse = result.reverse;
        let mainCompositionIds = result.mainCompositionIds;
        let prefetchConnections = yield (0,_GetCompositionBulk__WEBPACK_IMPORTED_MODULE_1__.GetConnectionDataPrefetch)(linkers);
        let concepts = yield (0,_GetCompositionBulk__WEBPACK_IMPORTED_MODULE_1__.GetCompositionFromConnectionsInObject)(conceptIds, connections);
        let output = yield (0,_SearchLinkMultiple__WEBPACK_IMPORTED_MODULE_2__.FormatConceptsAndConnections)(prefetchConnections, concepts, mainCompositionIds, reverse);
        return output;
    });
}
/**
 * ## Format dataid ##
 * @param linkers
 * @param conceptIds
 * @param connections
 * @param mainCompositionIds
 * @param reverse
 * @returns
 */
function formatDataArrayDataId(linkers, conceptIds, connections, mainCompositionIds, reverse) {
    return __awaiter(this, void 0, void 0, function* () {
        let prefetchConnections = yield (0,_GetCompositionBulk__WEBPACK_IMPORTED_MODULE_1__.GetConnectionDataPrefetch)(linkers);
        let concepts = yield (0,_GetCompositionBulk__WEBPACK_IMPORTED_MODULE_1__.GetCompositionFromConnectionsWithDataIdInObject)(conceptIds, connections);
        let output = yield (0,_SearchLinkMultiple__WEBPACK_IMPORTED_MODULE_2__.FormatFromConnectionsAlteredArray)(prefetchConnections, concepts, conceptIds, mainCompositionIds, reverse);
        return output;
    });
}
/**
 * ## Format Normal ##
 * @param linkers
 * @param conceptIds
 * @param connections
 * @param mainCompositionIds
 * @param reverse
 * @returns
 */
function formatDataArrayNormal(linkers, conceptIds, connections, mainCompositionIds, reverse) {
    return __awaiter(this, void 0, void 0, function* () {
        let prefetchConnections = yield (0,_GetCompositionBulk__WEBPACK_IMPORTED_MODULE_1__.GetConnectionDataPrefetch)(linkers);
        let concepts = yield (0,_GetCompositionBulk__WEBPACK_IMPORTED_MODULE_1__.GetCompositionFromConnectionsInObjectNormal)(conceptIds, connections);
        let output = yield (0,_SearchLinkMultiple__WEBPACK_IMPORTED_MODULE_2__.FormatConceptsAndConnections)(prefetchConnections, concepts, mainCompositionIds, reverse);
        return output;
    });
}


/***/ }),

/***/ "./src/Services/Security/GetRequestHeader.ts":
/*!***************************************************!*\
  !*** ./src/Services/Security/GetRequestHeader.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetOnlyTokenHeader: () => (/* binding */ GetOnlyTokenHeader),
/* harmony export */   GetRequestHeader: () => (/* binding */ GetRequestHeader),
/* harmony export */   GetRequestHeaderWithAuthorization: () => (/* binding */ GetRequestHeaderWithAuthorization)
/* harmony export */ });
/* harmony import */ var _DataStructures_Security_TokenStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DataStructures/Security/TokenStorage */ "./src/DataStructures/Security/TokenStorage.ts");

function GetRequestHeader(contentType = 'application/json', Accept = 'application/json') {
    var headers = {
        'Content-Type': contentType,
        'Authorization': "Bearer " + _DataStructures_Security_TokenStorage__WEBPACK_IMPORTED_MODULE_0__.TokenStorage.BearerAccessToken,
        'Accept': Accept,
    };
    return headers;
}
function GetRequestHeaderWithAuthorization(contentType = 'application/json', token = "", Accept = 'application/json') {
    if (token == "") {
        token = _DataStructures_Security_TokenStorage__WEBPACK_IMPORTED_MODULE_0__.TokenStorage.BearerAccessToken;
    }
    var headers = {
        'Content-Type': contentType,
        'Authorization': "Bearer " + token,
        'Accept': Accept
    };
    return headers;
}
function GetOnlyTokenHeader() {
    let token = _DataStructures_Security_TokenStorage__WEBPACK_IMPORTED_MODULE_0__.TokenStorage.BearerAccessToken;
    const myHeaders = new Headers();
    myHeaders.append('Authorization', 'Bearer ' + token);
    return myHeaders;
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
    const pos = typeString.lastIndexOf("_");
    let SplittedStrings = [];
    if (pos > 0) {
        let rest = typeString.substring(0, pos);
        let last = typeString.substring(pos + 1, typeString.length);
        SplittedStrings = [rest, last];
    }
    else {
        SplittedStrings = [typeString];
    }
    return SplittedStrings;
}


/***/ }),

/***/ "./src/Services/UpdateComposition.ts":
/*!*******************************************!*\
  !*** ./src/Services/UpdateComposition.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UpdateComposition)
/* harmony export */ });
/* harmony import */ var _Helpers_UniqueInsert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Helpers/UniqueInsert */ "./src/Helpers/UniqueInsert.ts");
/* harmony import */ var _Helpers_CheckIfExists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Helpers/CheckIfExists */ "./src/Helpers/CheckIfExists.ts");
/* harmony import */ var _Helpers_RemoveFromArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Helpers/RemoveFromArray */ "./src/Helpers/RemoveFromArray.ts");
/* harmony import */ var _CreateDefaultConcept__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CreateDefaultConcept */ "./src/Services/CreateDefaultConcept.ts");
/* harmony import */ var _Api_GetAllConnectionsOfComposition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Api/GetAllConnectionsOfComposition */ "./src/Api/GetAllConnectionsOfComposition.ts");
/* harmony import */ var _GetTheConcept__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GetTheConcept */ "./src/Services/GetTheConcept.ts");
/* harmony import */ var _MakeTheInstanceConcept__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MakeTheInstanceConcept */ "./src/Services/MakeTheInstanceConcept.ts");
/* harmony import */ var _CreateTheConnection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CreateTheConnection */ "./src/Services/CreateTheConnection.ts");
/* harmony import */ var _DeleteConnection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DeleteConnection */ "./src/Services/DeleteConnection.ts");
/* harmony import */ var _DataStructures_SyncData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../DataStructures/SyncData */ "./src/DataStructures/SyncData.ts");
/* harmony import */ var _DataStructures_Composition_CompositionBinaryTree__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../DataStructures/Composition/CompositionBinaryTree */ "./src/DataStructures/Composition/CompositionBinaryTree.ts");
/* harmony import */ var _DataStructures_Composition_Composition__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../DataStructures/Composition/Composition */ "./src/DataStructures/Composition/Composition.ts");
/* harmony import */ var _Composition_CreateCompositionCache__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Composition/CreateCompositionCache */ "./src/Services/Composition/CreateCompositionCache.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};













// function to update the cache composition
function UpdateComposition(patcherStructure) {
    return __awaiter(this, void 0, void 0, function* () {
        // get all the default userId, sessionId, accessId passed by the patcherStructure
        const userId = patcherStructure.userId;
        const sessionId = patcherStructure.sessionId;
        const accessId = patcherStructure.accessId;
        let connectionList = [];
        const conceptList = [];
        let composition = (0,_CreateDefaultConcept__WEBPACK_IMPORTED_MODULE_3__.CreateDefaultConcept)();
        let parentConcept = (0,_CreateDefaultConcept__WEBPACK_IMPORTED_MODULE_3__.CreateDefaultConcept)();
        const toDeleteConcepts = [];
        // the main composition Id that has the data that needs to be patched
        let compositionId = patcherStructure.compositionId;
        // if you want to edit the subcompositions of the composition then you have to pass to this
        const ofTheConceptId = patcherStructure.ofTheCompositionId;
        let toDeleteConnections = [];
        if (compositionId < 0) {
            let localConcept = yield (0,_GetTheConcept__WEBPACK_IMPORTED_MODULE_5__["default"])(compositionId, userId);
            if (localConcept.id > 0) {
                compositionId = localConcept.id;
            }
            else {
                return null;
            }
        }
        // get all connections from the backend because it needs latest data
        const connectionListString = yield (0,_Api_GetAllConnectionsOfComposition__WEBPACK_IMPORTED_MODULE_4__.GetAllConnectionsOfComposition)(compositionId);
        connectionList = connectionListString;
        const conceptIdList = [];
        const compositionCache = new _DataStructures_Composition_Composition__WEBPACK_IMPORTED_MODULE_11__.Composition();
        const compositionList = [];
        compositionCache.id = compositionId;
        // put this in the upper section before updating because this will tell all other distributed
        //servers to destroy the copy of the composition that they have as new composition is coming up
        compositionCache.isUpdating();
        // get all the connections that are inside of the composition and store them in
        let allConcepts = [];
        for (let i = 0; i < connectionList.length; i++) {
            (0,_Helpers_UniqueInsert__WEBPACK_IMPORTED_MODULE_0__["default"])(compositionList, connectionList[i].ofTheConceptId);
            (0,_Helpers_UniqueInsert__WEBPACK_IMPORTED_MODULE_0__["default"])(conceptIdList, connectionList[i].ofTheConceptId);
            (0,_Helpers_UniqueInsert__WEBPACK_IMPORTED_MODULE_0__["default"])(conceptIdList, connectionList[i].toTheConceptId);
            allConcepts.push(connectionList[i].ofTheConceptId);
        }
        compositionCache.subcompositions = compositionList;
        compositionCache.connections = connectionList;
        // get all the concepts that are inside of the composition and store them in a conceptList
        for (let i = 0; i < conceptIdList.length; i++) {
            const conceptString = yield (0,_GetTheConcept__WEBPACK_IMPORTED_MODULE_5__["default"])(conceptIdList[i]);
            const concept = conceptString;
            if (compositionId == conceptIdList[i]) {
                composition = concept;
            }
            if (ofTheConceptId == conceptIdList[i]) {
                parentConcept = concept;
            }
            conceptList.push(concept);
        }
        // now trying to patch the new object into the composition
        const object = patcherStructure.patchObject;
        for (const key in object) {
            let insertingConcept = (0,_CreateDefaultConcept__WEBPACK_IMPORTED_MODULE_3__.CreateDefaultConcept)();
            const value = object[key];
            let localConcept = composition;
            // if the immedidate parent exists in the composition (i.e. for multilevel composition)
            if (parentConcept.id > 0) {
                localConcept = parentConcept;
            }
            if (Array.isArray(value) || typeof value == 'object') {
                insertingConcept = yield (0,_MakeTheInstanceConcept__WEBPACK_IMPORTED_MODULE_6__["default"])(key, "", true, composition.userId, 4, 999);
                compositionCache.subcompositions.push(insertingConcept.id);
                // check if the concept exists in the concept list because if it exists then we have to delete old connection
                const ExistingConcepts = (0,_Helpers_CheckIfExists__WEBPACK_IMPORTED_MODULE_1__.CheckIfTypeConceptsExistsInArray)(conceptList, insertingConcept);
                // if the existing concept then start the process for deleting the concept in the list
                for (let i = 0; i < ExistingConcepts.length; i++) {
                    if (ExistingConcepts[i].id > 0) {
                        const deletingConnections = (0,_Helpers_CheckIfExists__WEBPACK_IMPORTED_MODULE_1__.CheckAllConnectionsConnectedInConnectionArray)(compositionCache.connections, ExistingConcepts[i].id);
                        toDeleteConnections = toDeleteConnections.concat(deletingConnections);
                        toDeleteConcepts.push(ExistingConcepts[i]);
                    }
                }
                yield (0,_Composition_CreateCompositionCache__WEBPACK_IMPORTED_MODULE_12__.CreateTheCompositionWithCache)(object[key], insertingConcept.id, insertingConcept.userId, composition.id, composition.userId, 4, 999, compositionCache);
            }
            else {
                // make the new concept in the object
                insertingConcept = yield (0,_MakeTheInstanceConcept__WEBPACK_IMPORTED_MODULE_6__["default"])(key, value, false, userId, accessId, sessionId);
                // check if the concept exists in the concept list because if it exists then we have to delete old connection
                const ExistingConcepts = (0,_Helpers_CheckIfExists__WEBPACK_IMPORTED_MODULE_1__.CheckIfTypeConceptsExistsInArray)(conceptList, insertingConcept);
                // if the existing concept then start the process for deleting the concept in the list
                for (let i = 0; i < ExistingConcepts.length; i++) {
                    if (ExistingConcepts[i].id > 0) {
                        const deletingConnections = (0,_Helpers_CheckIfExists__WEBPACK_IMPORTED_MODULE_1__.CheckAllConnectionsConnectedInConnectionArray)(compositionCache.connections, ExistingConcepts[i].id);
                        toDeleteConnections = toDeleteConnections.concat(deletingConnections);
                        toDeleteConcepts.push(ExistingConcepts[i]);
                    }
                }
            }
            // create the connection between the new concept and the old composition
            const connectionString = (0,_CreateTheConnection__WEBPACK_IMPORTED_MODULE_7__.createTheConnection)(localConcept.id, localConcept.userId, insertingConcept.id, composition.id);
            const connection = connectionString;
            conceptList.push(insertingConcept);
            compositionCache.connections.push(connection);
        }
        // now you have to delete the connection in bulk
        for (let j = 0; j < toDeleteConnections.length; j++) {
            // remove from the cache list
            (0,_Helpers_RemoveFromArray__WEBPACK_IMPORTED_MODULE_2__.RemoveConnectionFromList)(compositionCache.connections, toDeleteConnections[j]);
            // delete the connection in the backend
            (0,_DeleteConnection__WEBPACK_IMPORTED_MODULE_8__.DeleteConnectionById)(toDeleteConnections[j].id);
        }
        // also delete the existing concept from the cache.
        for (let k = 0; k < toDeleteConcepts.length; k++) {
            // remove concept from the cache concept list
            (0,_Helpers_RemoveFromArray__WEBPACK_IMPORTED_MODULE_2__.RemoveConceptFromList)(conceptList, toDeleteConcepts[k]);
        }
        // now create a composition cache object to cache it into node server
        compositionCache.concepts = compositionCache.concepts.concat(conceptList);
        compositionCache.mainConcept = composition;
        compositionCache.id = composition.id;
        // // create a cache
        yield compositionCache.updateCache();
        // update it the binary tree
        _DataStructures_Composition_CompositionBinaryTree__WEBPACK_IMPORTED_MODULE_10__.CompositionBinaryTree.addCompositionToTree(compositionCache);
        _DataStructures_SyncData__WEBPACK_IMPORTED_MODULE_9__.SyncData.SyncDataOnline();
        let x = compositionCache.GetDataCache();
        return x;
    });
}


/***/ }),

/***/ "./src/Services/User/UserTranslation.ts":
/*!**********************************************!*\
  !*** ./src/Services/User/UserTranslation.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddGhostConcept: () => (/* binding */ AddGhostConcept),
/* harmony export */   GetUserGhostId: () => (/* binding */ GetUserGhostId)
/* harmony export */ });
/* harmony import */ var _Services_Local_CreateDefaultLConcept__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../Services/Local/CreateDefaultLConcept */ "./src/Services/Local/CreateDefaultLConcept.ts");
/* harmony import */ var _DataStructures_User_UserBinaryTree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../DataStructures/User/UserBinaryTree */ "./src/DataStructures/User/UserBinaryTree.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function GetUserGhostId(userId_1, ghostId_1) {
    return __awaiter(this, arguments, void 0, function* (userId, ghostId, sessionId = 999) {
        let userNode = yield _DataStructures_User_UserBinaryTree__WEBPACK_IMPORTED_MODULE_1__.UserBinaryTree.getNodeFromTree(userId, sessionId);
        console.log("this is the ghost id", userId, sessionId);
        let realConcept = (0,_Services_Local_CreateDefaultLConcept__WEBPACK_IMPORTED_MODULE_0__.CreateDefaultLConcept)();
        if (userNode) {
            for (let i = 0; i < userNode.value.length; i++) {
                let testConcept = userNode.value[i];
                if (testConcept.ghostId == ghostId) {
                    realConcept = testConcept;
                }
            }
        }
        return realConcept;
    });
}
function AddGhostConcept(concept_1, userId_1) {
    return __awaiter(this, arguments, void 0, function* (concept, userId, sessionId = 999) {
        _DataStructures_User_UserBinaryTree__WEBPACK_IMPORTED_MODULE_1__.UserBinaryTree.addConceptToTree(concept, userId, sessionId);
    });
}


/***/ }),

/***/ "./src/Services/View/ViewInternalData.ts":
/*!***********************************************!*\
  !*** ./src/Services/View/ViewInternalData.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewInternalData: () => (/* binding */ ViewInternalData)
/* harmony export */ });
/* harmony import */ var _Api_View_ViewInternalDataApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Api/View/ViewInternalDataApi */ "./src/Api/View/ViewInternalDataApi.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app */ "./src/app.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function ViewInternalData(ids) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            let connections = yield (0,_Api_View_ViewInternalDataApi__WEBPACK_IMPORTED_MODULE_0__.ViewInternalDataApi)(ids);
            let output = [];
            for (let i = 0; i < ids.length; i++) {
                let id = ids[i];
                let localConnections = connections[id];
                if (id && localConnections) {
                    let concepts = [];
                    let formattedOutput = {};
                    for (let j = 0; j < localConnections.length; j++) {
                        if (!concepts.includes(localConnections[j].ofTheConceptId)) {
                            concepts.push(localConnections[j].ofTheConceptId);
                        }
                    }
                    let out = yield (0,_app__WEBPACK_IMPORTED_MODULE_1__.recursiveFetch)(id, localConnections, concepts);
                    formattedOutput.data = out;
                    formattedOutput.id = id;
                    output.push(formattedOutput);
                }
                else {
                    let formattedOutput = {};
                    formattedOutput.id = id;
                    let concept = yield (0,_app__WEBPACK_IMPORTED_MODULE_1__.GetTheConcept)(id);
                    let noconn = {};
                    if (concept.type) {
                        noconn[(_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue] = concept.characterValue;
                        formattedOutput.data = noconn;
                        output.push(formattedOutput);
                    }
                }
            }
            return output;
        }
        catch (err) {
            throw err;
        }
    });
}


/***/ }),

/***/ "./src/Widgets/BaseObserver.ts":
/*!*************************************!*\
  !*** ./src/Widgets/BaseObserver.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseObserver: () => (/* binding */ BaseObserver)
/* harmony export */ });
class BaseObserver {
    constructor() {
        /**
         * This is the subscribers of the data. If any thing on this widget changes then all the functions
         * in the subscribers are called.
         */
        this.subscribers = [];
    }
    /**
    * This is called by any data change. So that any data change will notify all the callback functions to execute.
    */
    notify() {
        this.subscribers.map((subscriber) => {
            subscriber(this.data);
        });
    }
    /**
     * This function is used to register the callback into the function in case of any dataChange.
     * @param callback sets this callback to the subscribers list in the widget. So that in any change we can call this callback
     * @returns execution of the callback passed.
     */
    dataChange(callback) {
        this.subscribers.push(callback);
        return callback(this.data);
    }
}


/***/ }),

/***/ "./src/Widgets/BaseWidget.ts":
/*!***********************************!*\
  !*** ./src/Widgets/BaseWidget.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseWidget: () => (/* binding */ BaseWidget)
/* harmony export */ });
/* harmony import */ var _BaseObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseObserver */ "./src/Widgets/BaseObserver.ts");

class BaseWidget extends _BaseObserver__WEBPACK_IMPORTED_MODULE_0__.BaseObserver {
    constructor() {
        super(...arguments);
        /**
         * This is a random identifier to the widget that is used to identify the widget and other elements
         * inside of it.
         */
        this.elementIdentifier = 0;
        /**
         * This flag is set to denote that that widget has been mounted
         */
        this.widgetMounted = false;
    }
    getComponent() {
        let component = document.getElementById(this.elementIdentifier.toString());
        return component;
    }
    getElementById(identifier) {
        let element = this.getComponent();
        let selectedElement = document.body;
        if (element) {
            let myelement = element.querySelector('#' + identifier);
            if (myelement) {
                selectedElement = myelement;
                return selectedElement;
            }
        }
        return null;
    }
    /**
     *
     * @returns random number that will be used to put into the main widget div so that we can uniqely identify
     * the widget and its children from others.
     */
    createWidgetWrapperIdentifier() {
        this.elementIdentifier = Math.random() * 10000;
        return this.elementIdentifier.toString();
    }
}


/***/ }),

/***/ "./src/Widgets/StatefulWidget.ts":
/*!***************************************!*\
  !*** ./src/Widgets/StatefulWidget.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatefulWidget: () => (/* binding */ StatefulWidget)
/* harmony export */ });
/* harmony import */ var _BaseWidget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseWidget */ "./src/Widgets/BaseWidget.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * Implementation of a widget system. If you need to create a widget that is compatible with the concept connection
 * system them extend this class and populate the functions such as getHtml() and widgetDidMount()
 */
class StatefulWidget extends _BaseWidget__WEBPACK_IMPORTED_MODULE_0__.BaseWidget {
    constructor() {
        super(...arguments);
        /**
         * These are the child widgets that need to be added to  this widget
         */
        this.childWidgets = [];
        /**
         * This is the id of the parentElement of this widget.
         */
        this.parentElement = "";
        /**
         * This is the element that is a copy of the element that is mounted.
         */
        this.element = null;
    }
    setTitle(title) {
        document.title = title;
    }
    /**
     *
     * @returns the html string that needs to be mounted to the DOM.
     */
    getHtml() {
        return '';
    }
    /**
     * This will help us update the data of the child widget. This will also call another function inside of the child widget
     * called udpateWidget which the user can call after some data is udpated.
     * @param value
     * @param widget
     */
    UpdateChildData(value, widget) {
        let passedWidget = widget;
        passedWidget.data = value;
        passedWidget.render();
        passedWidget.updateWidget();
    }
    /**
     * This is called after the data has been udpated by some other component.
     */
    updateWidget() { }
    /**
     *
     * @param newState
     */
    setState(newState) {
        this.data = newState;
        this.notify();
        this.render();
    }
    /**
     * If any child widgets are registered in the widget. Then without any other changes to the contents and state
     * this loadChildWidgets will be called which will help the child widgets be rendered to their respective positions.
     */
    loadChildWidgets() {
        this.childWidgets.map((child) => {
            let widget = this.getElementById(child.parentElement);
            if (widget) {
                widget.innerHTML = "";
            }
            child.mount(widget);
        });
    }
    /**
     * This is the main function that adds the html of the component to the element.
     * The element is the mounted widget
     */
    render() {
        if (this.element) {
            this.element.innerHTML = this.getHtml();
        }
        // addEvents is called after the element has been mounted.
        this.addEvents();
        // then after the child widgets are again loaded.
        if (this.widgetMounted) {
            this.loadChildWidgets();
        }
    }
    /**
     * This is the function that needs to be called.
     */
    mountChildWidgets() {
    }
    /**
     *
     * @param parent This is the function that creates a new div and then mounts the html element to the parent.
     */
    mount(parent) {
        return __awaiter(this, void 0, void 0, function* () {
            if (parent) {
                // create a div to wrap everything inside of it.
                this.element = document.createElement("div");
                // assign an identifier to the element so that it does not conflict with others.
                this.element.id = this.createWidgetWrapperIdentifier();
                // then assign the html to the element.
                this.element.innerHTML = yield this.getHtml();
                // mount the div with unique identifier to the parent element.
                parent.appendChild(this.element);
                // also save in the widget its parent identifier.
                this.parentElement = parent.id;
                // if the widget has not been mounted.
                if (this.widgetMounted == false) {
                    // then after the widget has been mounted for the first time call this function
                    // user can update this function as per their requirement 
                    //this will mostly be used to bind data / call data 
                    this.widgetDidMount();
                    // since this is the first time the widget is being created. then all the child widgets are being mounted 
                    // as well here.
                    this.mountChildWidgets();
                    // after the widget has been mounted for the first time then the widget has been updated.
                    this.widgetMounted = true;
                }
                else {
                    // if the widget has already been mounted before then only render the new widget
                    this.render();
                }
            }
        });
    }
    /**
     * This function will be called after the component mounts.
     */
    widgetDidMount() {
        this.render();
    }
    /**
     * This is called after the render function has been called. So this is used for the user functions to be added
     * for the widget and its html element. User can add any logic here.
     */
    addEvents() {
    }
}


/***/ }),

/***/ "./src/WrapperFunctions/DepenedencyObserver.ts":
/*!*****************************************************!*\
  !*** ./src/WrapperFunctions/DepenedencyObserver.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DependencyObserver: () => (/* binding */ DependencyObserver)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ "./src/app.ts");
/* harmony import */ var _Constants_FormatConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Constants/FormatConstants */ "./src/Constants/FormatConstants.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


/**
 * This is the class that helps us observe anything that the function is doing
 * This wrapper will allow all the concepts and connections to be tracked inside of the called function
 * This function helps us manage state using the concept connection system.
 */
class DependencyObserver {
    constructor() {
        this.subscribers = []; // this is the list of subscribers that are added to this observer.
        this.mainConcept = 0;
        this.compositionIds = [];
        this.conceptIds = [];
        this.internalConnections = [];
        this.reverse = [];
        this.linkers = [];
        this.dependency = [];
        this.isDataLoaded = false; // checks to see if the data has been loaded to the widget/ function
        this.isUpdating = false; // this flag helps us check if the state is being updated while the connection updates.
        this.fetched = false;
        this.format = _Constants_FormatConstants__WEBPACK_IMPORTED_MODULE_1__.NORMAL;
    }
    /**
     * This function will be called when there is a need to listen to a certain type of concept that will update
     *  the ui.
     * @param id this is the type id which needs to be tracked
     */
    listenToEventType(id) {
        window.addEventListener(`${id}`, (event) => {
            if (!this.isUpdating) {
                this.isUpdating = true;
                let that = this;
                console.log("listening to event type", event);
                setTimeout(function () {
                    return __awaiter(this, void 0, void 0, function* () {
                        let myEvent = event;
                        if (!that.compositionIds.includes(myEvent === null || myEvent === void 0 ? void 0 : myEvent.detail)) {
                            that.compositionIds.unshift(myEvent === null || myEvent === void 0 ? void 0 : myEvent.detail);
                            that.listenToEvent(myEvent === null || myEvent === void 0 ? void 0 : myEvent.detail);
                        }
                        that.isUpdating = false;
                        yield that.bind();
                        that.notify();
                    });
                }, 200);
            }
            else {
                console.log("rejected this");
            }
        });
    }
    /**
     * This is the of the concept id that needs to be listened . If this is called. All the connections that are
     * created with of the concepts id with this passed id then the event is fired.
     *
     * @param id Of the concept id that needs to be listened.
     */
    listenToEvent(id) {
        console.log('listening to id: ', id);
        window.addEventListener(`${id}`, (event) => {
            console.log("this is listening after the event is fired", id, event);
            if (!this.isUpdating) {
                this.isUpdating = true;
                let that = this;
                setTimeout(function () {
                    return __awaiter(this, void 0, void 0, function* () {
                        let newConnection = yield _app__WEBPACK_IMPORTED_MODULE_0__.ConnectionData.GetConnectionByOfTheConceptAndType(id, id);
                        for (let i = 0; i < newConnection.length; i++) {
                            yield _app__WEBPACK_IMPORTED_MODULE_0__.ConnectionData.GetConnection(newConnection[i]).then((conn) => {
                                if (conn.typeId == that.mainConcept) {
                                    if (!that.internalConnections.includes(conn.id)) {
                                        that.internalConnections.push(conn.id);
                                    }
                                }
                                else {
                                    if (!that.linkers.includes(conn.id)) {
                                        that.linkers.push(conn.id);
                                    }
                                }
                                if (!that.conceptIds.includes(conn.toTheConceptId)) {
                                    that.conceptIds.push(conn.toTheConceptId);
                                }
                                if (!that.compositionIds.includes(conn.ofTheConceptId)) {
                                    that.compositionIds.push(conn.ofTheConceptId);
                                }
                            });
                        }
                        that.isUpdating = false;
                        yield that.bind();
                        that.notify();
                    });
                }, 200);
            }
            else {
                console.log("rejected this");
            }
        });
    }
    /**
     * This function will bind the actual data to the widget or the function.
     */
    bind() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("this is the old execute data");
        });
    }
    /**
     *
     * @param callback the function that needs to be called with the data.
     * @returns returns the callback with this data as the state.
     */
    subscribe(callback) {
        return __awaiter(this, void 0, void 0, function* () {
            this.subscribers.push(callback);
            console.log('again executing data');
            yield this.bind();
            return callback(this.data);
        });
    }
    /**
     *
     * @param callback function that you need to remove from the subscribers list.
     * @returns
     */
    unsubscribe(callback) {
        this.subscribers.filter(fn => fn != callback);
        return this.subscribers.length;
    }
    /**
     * This function will call all the subscribers that are registered in this wrapper.
     */
    notify() {
        console.log('notifiers', this.subscribers);
        this.subscribers.map(subscriber => {
            console.log('notify');
            subscriber(this.data);
        });
    }
}


/***/ }),

/***/ "./src/WrapperFunctions/GetCompositionListObservable.ts":
/*!**************************************************************!*\
  !*** ./src/WrapperFunctions/GetCompositionListObservable.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetCompositionListListener: () => (/* binding */ GetCompositionListListener),
/* harmony export */   GetCompositionListObservable: () => (/* binding */ GetCompositionListObservable)
/* harmony export */ });
/* harmony import */ var _Api_GetAllConceptsByType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Api/GetAllConceptsByType */ "./src/Api/GetAllConceptsByType.ts");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app */ "./src/app.ts");
/* harmony import */ var _Services_GetComposition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/GetComposition */ "./src/Services/GetComposition.ts");
/* harmony import */ var _DepenedencyObserver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DepenedencyObserver */ "./src/WrapperFunctions/DepenedencyObserver.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




/**
 * This wrapper will wrap the listing function and then allow users to return the list.
 */
class GetCompositionListObservable extends _DepenedencyObserver__WEBPACK_IMPORTED_MODULE_3__.DependencyObserver {
    constructor(compositionName, userId, inpage, page, format) {
        super();
        this.data = [];
        this.startPage = 0;
        this.compositionName = compositionName;
        this.userId = userId;
        this.inpage = inpage;
        this.page = page;
        this.format = format;
    }
    bind() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.isDataLoaded) {
                console.log("again data loading mechanism");
                var concept = yield (0,_app__WEBPACK_IMPORTED_MODULE_1__.GetConceptByCharacter)(this.compositionName);
                if (concept) {
                    yield (0,_Api_GetAllConceptsByType__WEBPACK_IMPORTED_MODULE_0__.GetAllConceptsByType)(this.compositionName, this.userId);
                    console.log("getting the user data", concept.id, this.userId);
                    let conceptList = yield _app__WEBPACK_IMPORTED_MODULE_1__.ConceptsData.GetConceptsByTypeIdAndUser(concept.id, this.userId);
                    console.log("this is the concept list", conceptList);
                    var startPage = this.inpage * (this.page - 1);
                    for (var i = startPage; i < startPage + this.inpage; i++) {
                        if (conceptList[i]) {
                            this.compositionIds.push(conceptList[i].id);
                        }
                    }
                }
                yield (0,_app__WEBPACK_IMPORTED_MODULE_1__.GetAllConnectionsOfCompositionBulk)(this.compositionIds);
                this.isDataLoaded = true;
                this.listenToEventType(concept.id);
                for (let i = 0; i < this.compositionIds.length; i++) {
                    console.log("list listen", this.compositionIds[i]);
                    this.listenToEvent(this.compositionIds[i]);
                }
            }
            return yield this.build();
        });
    }
    build() {
        return __awaiter(this, void 0, void 0, function* () {
            this.data = [];
            console.log("this is building the data list");
            if (this.format == _app__WEBPACK_IMPORTED_MODULE_1__.JUSTDATA) {
                for (let i = this.startPage; i < this.startPage + this.inpage; i++) {
                    if (this.compositionIds[i]) {
                        let compositionJson = yield (0,_Services_GetComposition__WEBPACK_IMPORTED_MODULE_2__.GetCompositionFromMemory)(this.compositionIds[i]);
                        this.data.push(compositionJson);
                    }
                }
            }
            else if (this.format == _app__WEBPACK_IMPORTED_MODULE_1__.DATAID) {
                for (let i = this.startPage; i < this.startPage + this.inpage; i++) {
                    if (this.compositionIds[i]) {
                        let compositionJson = yield (0,_Services_GetComposition__WEBPACK_IMPORTED_MODULE_2__.GetCompositionWithIdFromMemory)(this.compositionIds[i]);
                        this.data.push(compositionJson);
                    }
                }
            }
            else if (this.format == _app__WEBPACK_IMPORTED_MODULE_1__.NORMAL) {
                for (let i = this.startPage; i < this.startPage + this.inpage; i++) {
                    if (this.compositionIds[i]) {
                        let compositionJson = yield (0,_Services_GetComposition__WEBPACK_IMPORTED_MODULE_2__.GetCompositionFromMemoryNormal)(this.compositionIds[i]);
                        this.data.push(compositionJson);
                    }
                }
            }
            else {
                for (let i = this.startPage; i < this.startPage + this.inpage; i++) {
                    if (this.compositionIds[i]) {
                        let compositionJson = yield (0,_Services_GetComposition__WEBPACK_IMPORTED_MODULE_2__.GetCompositionFromMemory)(this.compositionIds[i]);
                        this.data.push(compositionJson);
                    }
                }
            }
            return this.data;
        });
    }
}
/**
 * This function will give you the list of the concepts by composition name with a listener to any data change.
 */
function GetCompositionListListener(compositionName, userId, inpage, page, format = _app__WEBPACK_IMPORTED_MODULE_1__.JUSTDATA) {
    return new GetCompositionListObservable(compositionName, userId, inpage, page, format);
}


/***/ }),

/***/ "./src/WrapperFunctions/GetCompositionObservable.ts":
/*!**********************************************************!*\
  !*** ./src/WrapperFunctions/GetCompositionObservable.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetCompositionListener: () => (/* binding */ GetCompositionListener),
/* harmony export */   GetCompositionObservable: () => (/* binding */ GetCompositionObservable)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ "./src/app.ts");
/* harmony import */ var _Services_GetComposition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/GetComposition */ "./src/Services/GetComposition.ts");
/* harmony import */ var _DepenedencyObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DepenedencyObserver */ "./src/WrapperFunctions/DepenedencyObserver.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class GetCompositionObservable extends _DepenedencyObserver__WEBPACK_IMPORTED_MODULE_2__.DependencyObserver {
    constructor(id, format = _app__WEBPACK_IMPORTED_MODULE_0__.JUSTDATA) {
        super();
        this.id = id;
        this.format = format;
    }
    bind() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.isDataLoaded) {
                let conceptConnections = yield (0,_Services_GetComposition__WEBPACK_IMPORTED_MODULE_1__.GetCompositionById)(this.id);
                this.mainConcept = this.id;
                this.compositionIds = conceptConnections.compositionList;
                let internalConnections = conceptConnections.connectionList;
                for (let i = 0; i < internalConnections.length; i++) {
                    this.internalConnections.push(internalConnections[i].id);
                }
                this.isDataLoaded = true;
                this.listenToEvent(this.mainConcept);
            }
            return yield this.build();
        });
    }
    build() {
        return __awaiter(this, void 0, void 0, function* () {
            let latestConnectionList = [];
            let latestConnectionIds = this.internalConnections;
            for (let i = 0; i < latestConnectionIds.length; i++) {
                latestConnectionList.push(yield _app__WEBPACK_IMPORTED_MODULE_0__.ConnectionData.GetConnection(latestConnectionIds[i]));
            }
            if (this.format == _app__WEBPACK_IMPORTED_MODULE_0__.JUSTDATA) {
                console.log("this is the data for the build layer", latestConnectionList, this.mainConcept, this.internalConnections, this.compositionIds);
                this.data = yield (0,_Services_GetComposition__WEBPACK_IMPORTED_MODULE_1__.RecursiveFetchBuildLayer)(this.mainConcept, latestConnectionList, this.compositionIds);
            }
            else if (this.format == _app__WEBPACK_IMPORTED_MODULE_0__.DATAID) {
                this.data = yield (0,_Services_GetComposition__WEBPACK_IMPORTED_MODULE_1__.RecursiveFetchBuildLayerDataId)(this.mainConcept, latestConnectionList, this.compositionIds);
            }
            else if (this.format == _app__WEBPACK_IMPORTED_MODULE_0__.NORMAL) {
                this.data = yield (0,_Services_GetComposition__WEBPACK_IMPORTED_MODULE_1__.RecursiveFetchBuildLayerNormal)(this.mainConcept, latestConnectionList, this.compositionIds);
            }
            else {
                this.data = yield (0,_Services_GetComposition__WEBPACK_IMPORTED_MODULE_1__.RecursiveFetchBuildLayer)(this.mainConcept, latestConnectionList, this.compositionIds);
            }
            return this.data;
        });
    }
}
/**
 *
 * @param id Id of the composition
 * @returns composition of the id given in the json form.
 */
function GetCompositionListener(id, format = _app__WEBPACK_IMPORTED_MODULE_0__.JUSTDATA) {
    return new GetCompositionObservable(id, format);
}


/***/ }),

/***/ "./src/WrapperFunctions/GetLinkListObservable.ts":
/*!*******************************************************!*\
  !*** ./src/WrapperFunctions/GetLinkListObservable.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetLinkListListener: () => (/* binding */ GetLinkListListener),
/* harmony export */   GetLinkListObservable: () => (/* binding */ GetLinkListObservable)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ "./src/app.ts");
/* harmony import */ var _DataStructures_Security_TokenStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataStructures/Security/TokenStorage */ "./src/DataStructures/Security/TokenStorage.ts");
/* harmony import */ var _Services_Search_SearchWithTypeAndLinker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/Search/SearchWithTypeAndLinker */ "./src/Services/Search/SearchWithTypeAndLinker.ts");
/* harmony import */ var _DepenedencyObserver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DepenedencyObserver */ "./src/WrapperFunctions/DepenedencyObserver.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




class GetLinkListObservable extends _DepenedencyObserver__WEBPACK_IMPORTED_MODULE_3__.DependencyObserver {
    constructor(searchStructure, searchQuery, token, format = _app__WEBPACK_IMPORTED_MODULE_0__.DATAID) {
        super();
        this.searchQuery = [];
        this.format = _app__WEBPACK_IMPORTED_MODULE_0__.DATAID;
        this.mainCompositionIds = [];
        this.searchCharacter = "";
        this.token = "";
        this.searchStructure = searchStructure;
        this.searchQuery = searchQuery;
        this.searchQuery[0].type = searchStructure.composition;
        this.searchCharacter = searchStructure.composition;
        this.format = format;
        this.token = _DataStructures_Security_TokenStorage__WEBPACK_IMPORTED_MODULE_1__.TokenStorage.BearerAccessToken;
    }
    /**
 * This function will be called when there is a need to listen to a certain type of concept that will update
 *  the ui.
 * @param id this is the type id which needs to be tracked
 */
    listenToEventType(id) {
        window.addEventListener(`${id}`, (event) => {
            if (!this.isUpdating) {
                this.isUpdating = true;
                let that = this;
                console.log("listening to event type", event);
                setTimeout(function () {
                    return __awaiter(this, void 0, void 0, function* () {
                        let myEvent = event;
                        if (!that.mainCompositionIds.includes(myEvent === null || myEvent === void 0 ? void 0 : myEvent.detail)) {
                            that.mainCompositionIds.unshift(myEvent === null || myEvent === void 0 ? void 0 : myEvent.detail);
                            that.conceptIds.push(myEvent === null || myEvent === void 0 ? void 0 : myEvent.detail);
                            that.listenToEvent(myEvent === null || myEvent === void 0 ? void 0 : myEvent.detail);
                            _app__WEBPACK_IMPORTED_MODULE_0__.ConnectionData.GetConnectionsOfConcept(myEvent === null || myEvent === void 0 ? void 0 : myEvent.detail).then((connectionList) => {
                                console.log("this is the update", connectionList);
                                for (let i = 0; i < connectionList.length; i++) {
                                    that.linkers.push(connectionList[i].id);
                                }
                            });
                        }
                        that.isUpdating = false;
                        yield that.bind();
                        that.notify();
                    });
                }, 200);
            }
            else {
                console.log("rejected this");
            }
        });
    }
    bind() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.isDataLoaded) {
                this.isDataLoaded = true;
                var concept = yield (0,_app__WEBPACK_IMPORTED_MODULE_0__.GetConceptByCharacter)(this.searchCharacter);
                let result = yield (0,_app__WEBPACK_IMPORTED_MODULE_0__.SearchWithTypeAndLinkerApi)(this.searchStructure, this.searchQuery, this.token);
                this.conceptIds = result.compositionIds;
                this.internalConnections = result.internalConnections;
                this.linkers = result.linkers;
                this.reverse = result.reverse;
                this.mainCompositionIds = result.mainCompositionIds;
                this.listenToEventType(concept.id);
                for (let i = 0; i < this.mainCompositionIds.length; i++) {
                    this.listenToEvent(this.mainCompositionIds[i]);
                }
            }
            return yield this.build();
        });
    }
    build() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.format == _app__WEBPACK_IMPORTED_MODULE_0__.DATAID) {
                this.data = yield (0,_Services_Search_SearchWithTypeAndLinker__WEBPACK_IMPORTED_MODULE_2__.formatDataArrayDataId)(this.linkers, this.conceptIds, this.internalConnections, this.mainCompositionIds, this.reverse);
            }
            else {
                this.data = yield (0,_Services_Search_SearchWithTypeAndLinker__WEBPACK_IMPORTED_MODULE_2__.formatDataArrayNormal)(this.linkers, this.conceptIds, this.internalConnections, this.mainCompositionIds, this.reverse);
            }
            return this.data;
        });
    }
}
/**
 *
 * @param id this is the id whose links need to be found
 * @param linker this is the type connection that is connected to the mainConcept(id)
 * @param inpage number of outputs that has to be displayed
 * @param page the page which needs to be displayed as per the inpage parameter
 * @param format the format in which the output should be displayed (NORMAL, DATAID,JUSTDATA,DATAIDDATE)
 */
function GetLinkListListener(searchStructure, searchQuery, token, format = _app__WEBPACK_IMPORTED_MODULE_0__.DATAID) {
    return new GetLinkListObservable(searchStructure, searchQuery, token, format);
}


/***/ }),

/***/ "./src/WrapperFunctions/GetLinkObservable.ts":
/*!***************************************************!*\
  !*** ./src/WrapperFunctions/GetLinkObservable.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetLinkListener: () => (/* binding */ GetLinkListener),
/* harmony export */   GetLinkObservable: () => (/* binding */ GetLinkObservable)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ "./src/app.ts");
/* harmony import */ var _Constants_FormatConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Constants/FormatConstants */ "./src/Constants/FormatConstants.ts");
/* harmony import */ var _Services_GetComposition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/GetComposition */ "./src/Services/GetComposition.ts");
/* harmony import */ var _DepenedencyObserver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DepenedencyObserver */ "./src/WrapperFunctions/DepenedencyObserver.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




/**
 * This is a class that will give you the observable for the links from a certain concept.
 */
class GetLinkObservable extends _DepenedencyObserver__WEBPACK_IMPORTED_MODULE_3__.DependencyObserver {
    /**
     *
     * @param id this is the id whose links need to be found
     * @param linker this is the type connection that is connected to the mainConcept(id)
     * @param inpage number of outputs that has to be displayed
     * @param page the page which needs to be displayed as per the inpage parameter
     * @param format the format in which the output should be displayed (NORMAL, DATAID,JUSTDATA,DATAIDDATE)
     */
    constructor(id, linker, inpage, page, format) {
        super();
        this.connections = [];
        this.data = [];
        this.mainConcept = id;
        this.linker = linker;
        this.inpage = inpage;
        this.page = page;
        this.format = format;
    }
    bind() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            if (!this.isDataLoaded) {
                let concept = yield (0,_app__WEBPACK_IMPORTED_MODULE_0__.GetTheConcept)(this.mainConcept);
                let linkString = ((_a = concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) + "_s" + "_" + this.linker;
                let relatedConceptString = yield (0,_app__WEBPACK_IMPORTED_MODULE_0__.GetConceptByCharacterAndType)(linkString, 16);
                let relatedConcept = relatedConceptString;
                if (relatedConcept.id > 0) {
                    let connectionsString = yield (0,_app__WEBPACK_IMPORTED_MODULE_0__.GetConnectionOfTheConcept)(relatedConcept.id, concept.id, concept.userId, this.inpage, this.page);
                    this.connections = connectionsString;
                    var prefetch = [];
                    for (var i = 0; i < this.connections.length; i++) {
                        prefetch.push(this.connections[i].toTheConceptId);
                        this.linkers.push(this.connections[i].id);
                        this.listenToEvent(this.connections[i].toTheConceptId);
                    }
                    // await GetAllConnectionsOfCompositionBulk(prefetch);
                    yield (0,_app__WEBPACK_IMPORTED_MODULE_0__.GetAllConnectionsOfCompositionBulk)(prefetch);
                }
                this.isDataLoaded = true;
                this.listenToEvent(this.mainConcept);
            }
            return yield this.build();
        });
    }
    build() {
        return __awaiter(this, void 0, void 0, function* () {
            this.data = [];
            this.connections = yield (0,_app__WEBPACK_IMPORTED_MODULE_0__.GetConnectionBulk)(this.linkers);
            for (var i = 0; i < this.connections.length; i++) {
                let toConceptId = this.connections[i].toTheConceptId;
                let toConcept = yield (0,_app__WEBPACK_IMPORTED_MODULE_0__.GetTheConcept)(toConceptId);
                console.log("this is the format", this.format);
                if (this.format == _Constants_FormatConstants__WEBPACK_IMPORTED_MODULE_1__.NORMAL) {
                    let newComposition = yield (0,_Services_GetComposition__WEBPACK_IMPORTED_MODULE_2__.GetCompositionWithIdFromMemory)(toConcept.id);
                    this.data.push(newComposition);
                }
                else if (this.format == _Constants_FormatConstants__WEBPACK_IMPORTED_MODULE_1__.JUSTDATA) {
                    let newComposition = yield (0,_Services_GetComposition__WEBPACK_IMPORTED_MODULE_2__.GetCompositionFromMemory)(toConcept.id);
                    this.data.push(newComposition);
                }
                else if (this.format == _Constants_FormatConstants__WEBPACK_IMPORTED_MODULE_1__.DATAIDDATE) {
                    let newComposition = yield (0,_app__WEBPACK_IMPORTED_MODULE_0__.GetCompositionWithIdAndDateFromMemory)(toConcept.id);
                    this.data.push(newComposition);
                }
                else {
                    let newComposition = yield (0,_app__WEBPACK_IMPORTED_MODULE_0__.GetCompositionWithIdAndDateFromMemory)(toConcept.id);
                    this.data.push(newComposition);
                }
            }
            return this.data;
        });
    }
}
// class GetLinkServiceObservable
// {
//     mainConcept: number
//     linker:string;
//     inpage: number;
//     page: number;
//     format: number = NORMAL;
//     connections: Connection[] = [];
//     data: any = [];
//     subscribers: any[] = []
//     /**
//      * 
//      * @param id this is the id whose links need to be found
//      * @param linker this is the type connection that is connected to the mainConcept(id)
//      * @param inpage number of outputs that has to be displayed
//      * @param page the page which needs to be displayed as per the inpage parameter
//      * @param format the format in which the output should be displayed (NORMAL, DATAID,JUSTDATA,DATAIDDATE)
//      */
//     constructor(id: number, linker:string, inpage: number, page: number, format: number){
//         this.mainConcept = id;
//         this.linker = linker;
//         this.inpage = inpage;
//         this.page = page;
//         this.format = format;
//     }
//     async subscribe(callback: Function) {
//         this.subscribers.push(callback);
//         const listenerId = Date.now() + '-' + Math.floor(Math.random() * 99999999)
//         const listener = {
//             listenerId: listenerId,
//             callback: callback,
//             createdAt: Date.now()
//         }
//         subscribedListeners.push(listener)
//         console.log('listener', serviceWorker)
//         // const res: any = await sendMessage('GetLinkListener', {id: this.mainConcept, linker: this.linker, inpage: this.inpage, page: this.page, format: this.format, listener })
//         const res: any = await sendMessage('GetLinkListener', {id: this.mainConcept, linker: this.linker, inpage: this.inpage, page: this.page, format: this.format, listener: {
//             listenerId: listenerId,
//             createdAt: Date.now()
//         } })
//         return callback(res.data);
//     }
// }
/**
 *
 * @param id this is the id whose links need to be found
 * @param linker this is the type connection that is connected to the mainConcept(id)
 * @param inpage number of outputs that has to be displayed
 * @param page the page which needs to be displayed as per the inpage parameter
 * @param format the format in which the output should be displayed (NORMAL, DATAID,JUSTDATA,DATAIDDATE)
 */
function GetLinkListener(id, linker, inpage, page, format = _Constants_FormatConstants__WEBPACK_IMPORTED_MODULE_1__.NORMAL) {
    return new GetLinkObservable(id, linker, inpage, page, format);
    // console.log("serviceworker", serviceWorker);
    // if (serviceWorker) {
    //   return new GetLinkServiceObservable(id, linker, inpage, page, format);
    // } else return new GetLinkObservable(id, linker, inpage, page, format);
}


/***/ }),

/***/ "./src/WrapperFunctions/RecursiveSearchObservable.ts":
/*!***********************************************************!*\
  !*** ./src/WrapperFunctions/RecursiveSearchObservable.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecursiveSearchListener: () => (/* binding */ RecursiveSearchListener)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ "./src/app.ts");
/* harmony import */ var _Constants_FormatConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Constants/FormatConstants */ "./src/Constants/FormatConstants.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class RecursiveSearchObservable extends _app__WEBPACK_IMPORTED_MODULE_0__.DependencyObserver {
    /**
     *
     * @param id this is the id whose links need to be found
     * @param linker this is the type connection that is connected to the mainConcept(id)
     * @param inpage number of outputs that has to be displayed
     * @param page the page which needs to be displayed as per the inpage parameter
     * @param format the format in which the output should be displayed (RAW, undefined)
     */
    constructor(id, linkers, textSearch = "", format) {
        super();
        this.searchText = "";
        this.connections = [];
        this.externalConnectionIds = [];
        this.data = [];
        this.mainConcept = id;
        this.searchLinkers = linkers;
        this.textSearch = textSearch;
        if (format)
            this.format = format;
    }
    /**
     * This is the of the concept id that needs to be listened . If this is called. All the connections that are
     * created with of the concepts id with this passed id then the event is fired.
     *
     * @param id Of the concept id that needs to be listened.
     */
    listenToEvent(id) {
        console.log("listening to id: ", id);
        window.addEventListener(`${id}`, (event) => {
            console.log("this is listening after the event is fired", id, event);
            if (!this.isUpdating) {
                this.isUpdating = true;
                let that = this;
                setTimeout(function () {
                    return __awaiter(this, void 0, void 0, function* () {
                        let newConnection = yield _app__WEBPACK_IMPORTED_MODULE_0__.ConnectionData.GetConnectionByOfTheConceptAndType(id, id);
                        for (let i = 0; i < newConnection.length; i++) {
                            yield _app__WEBPACK_IMPORTED_MODULE_0__.ConnectionData.GetConnection(newConnection[i]).then((conn) => {
                                if (conn.typeId == that.mainConcept) {
                                    if (!that.internalConnections.includes(conn.id)) {
                                        that.internalConnections.push(conn.id);
                                    }
                                }
                                else {
                                    if (!that.linkers.includes(conn.id)) {
                                        that.linkers.push(conn.id);
                                    }
                                }
                                if (!that.conceptIds.includes(conn.toTheConceptId)) {
                                    that.conceptIds.push(conn.toTheConceptId);
                                }
                                // compositions
                                if (!that.compositionIds.includes(conn.ofTheConceptId)) {
                                    that.compositionIds.push(conn.ofTheConceptId);
                                }
                                if (!that.compositionIds.includes(conn.toTheConceptId)) {
                                    that.compositionIds.push(conn.toTheConceptId);
                                }
                            });
                        }
                        that.isUpdating = false;
                        yield that.bind();
                        that.notify();
                    });
                }, 200);
            }
            else {
                console.log("rejected this");
            }
        });
    }
    bind() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.isDataLoaded) {
                this.isDataLoaded = true;
                const result = yield (0,_app__WEBPACK_IMPORTED_MODULE_0__.RecursiveSearchApiRaw)(this.mainConcept, this.searchLinkers, this.textSearch);
                this.compositionIds = result.compositionIds || [];
                this.internalConnections = result.internalConnections || [];
                this.externalConnectionIds = result.externalConnections || [];
                this.linkers = this.externalConnectionIds;
                // const internalConnections = await GetConnectionBulk(
                //   this.internalConnections
                // );
                this.connections = yield (0,_app__WEBPACK_IMPORTED_MODULE_0__.GetConnectionBulk)(this.externalConnectionIds);
                var prefetch = [];
                // listen external connection
                // for (var i = 0; i < this.connections.length; i++) {
                //   prefetch.push(this.connections[i].toTheConceptId);
                //    this.listenToEvent(this.connections[i].toTheConceptId);
                // }
                // listen internal connection
                // for (var i = 0; i < this.internalConnections.length; i++) {
                //   //prefetch.push(internalConnections[i].toTheConceptId);
                //    this.listenToEvent(this.internalConnections[i]);
                // }
                for (let i = 0; i < this.compositionIds.length; i++) {
                    this.listenToEvent(this.compositionIds[i]);
                }
                //await GetAllConnectionsOfCompositionBulk(prefetch);
                this.listenToEvent(this.mainConcept);
            }
            return yield this.build();
        });
    }
    build() {
        return __awaiter(this, void 0, void 0, function* () {
            this.externalConnectionIds = this.linkers;
            if (this.format && this.format == _Constants_FormatConstants__WEBPACK_IMPORTED_MODULE_1__.RAW) {
                this.data = {
                    compositionIds: this.compositionIds,
                    internalConnections: this.internalConnections,
                    externalConnections: this.externalConnectionIds,
                };
            }
            else {
                this.data = yield (0,_app__WEBPACK_IMPORTED_MODULE_0__.GetCompositionFromConnectionsWithDataId)(this.compositionIds, this.internalConnections);
            }
            return this.data;
        });
    }
}
/**
 * Method to listen the changes in recursive search data
 * @param id this is the id whose links need to be found
 * @param linker this is the type connection that is connected to the mainConcept(id)
 * @param inpage number of outputs that has to be displayed
 * @param page the page which needs to be displayed as per the inpage parameter
 * @param format the format in which the output should be displayed (RAW, undefined)
 */
function RecursiveSearchListener(id, linkers, searchText = "", format) {
    return new RecursiveSearchObservable(id, linkers, searchText, format);
}


/***/ }),

/***/ "./src/WrapperFunctions/SearchLinkMultipleAllObservable.ts":
/*!*****************************************************************!*\
  !*** ./src/WrapperFunctions/SearchLinkMultipleAllObservable.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchLinkMultipleAllObservable: () => (/* binding */ SearchLinkMultipleAllObservable),
/* harmony export */   searchLinkMultipleListener: () => (/* binding */ searchLinkMultipleListener)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ "./src/app.ts");
/* harmony import */ var _Constants_FormatConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Constants/FormatConstants */ "./src/Constants/FormatConstants.ts");
/* harmony import */ var _DepenedencyObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DepenedencyObserver */ "./src/WrapperFunctions/DepenedencyObserver.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class SearchLinkMultipleAllObservable extends _DepenedencyObserver__WEBPACK_IMPORTED_MODULE_2__.DependencyObserver {
    constructor(searchQuery, token, format = _Constants_FormatConstants__WEBPACK_IMPORTED_MODULE_1__.DATAID) {
        super();
        this.searchQuery = [];
        this.format = _Constants_FormatConstants__WEBPACK_IMPORTED_MODULE_1__.DATAID;
        this.searchQuery = searchQuery;
        this.format = format;
    }
    bind() {
        return __awaiter(this, void 0, void 0, function* () {
            this.data = yield (0,_app__WEBPACK_IMPORTED_MODULE_0__.SearchLinkMultipleAll)(this.searchQuery, "", this, this.format);
            this.mainConcept = this.searchQuery[0].composition;
            this.listenToEvent(this.mainConcept);
            console.log("this is the data", this.data);
            return this.data;
        });
    }
}
/**
 *
 * @param searchQueries Queries that need to be executed.
 * @param token token of the user.
 * @returns  returns the json format of the output.
 */
function searchLinkMultipleListener(searchQueries, token, format = _Constants_FormatConstants__WEBPACK_IMPORTED_MODULE_1__.DATAID) {
    return new SearchLinkMultipleAllObservable(searchQueries, token !== null && token !== void 0 ? token : "", format);
}


/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADMIN: () => (/* reexport safe */ _Constants_AccessConstants__WEBPACK_IMPORTED_MODULE_66__.ADMIN),
/* harmony export */   AddGhostConcept: () => (/* reexport safe */ _Services_User_UserTranslation__WEBPACK_IMPORTED_MODULE_50__.AddGhostConcept),
/* harmony export */   BaseUrl: () => (/* reexport safe */ _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_98__.BaseUrl),
/* harmony export */   BinaryTree: () => (/* reexport safe */ _DataStructures_BinaryTree__WEBPACK_IMPORTED_MODULE_83__.BinaryTree),
/* harmony export */   Composition: () => (/* reexport safe */ _DataStructures_Composition_Composition__WEBPACK_IMPORTED_MODULE_87__.Composition),
/* harmony export */   CompositionBinaryTree: () => (/* reexport safe */ _DataStructures_Composition_CompositionBinaryTree__WEBPACK_IMPORTED_MODULE_88__.CompositionBinaryTree),
/* harmony export */   CompositionNode: () => (/* reexport safe */ _DataStructures_Composition_CompositionNode__WEBPACK_IMPORTED_MODULE_89__.CompositionNode),
/* harmony export */   Concept: () => (/* reexport safe */ _DataStructures_Concept__WEBPACK_IMPORTED_MODULE_77__.Concept),
/* harmony export */   ConceptsData: () => (/* reexport safe */ _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_81__.ConceptsData),
/* harmony export */   Connection: () => (/* reexport safe */ _DataStructures_Connection__WEBPACK_IMPORTED_MODULE_80__.Connection),
/* harmony export */   ConnectionData: () => (/* reexport safe */ _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_82__.ConnectionData),
/* harmony export */   CreateComposition: () => (/* reexport safe */ _Services_CreateTheComposition__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   CreateConnectionBetweenTwoConcepts: () => (/* reexport safe */ _Services_CreateConnectionBetweenTwoConcepts__WEBPACK_IMPORTED_MODULE_11__.CreateConnectionBetweenTwoConcepts),
/* harmony export */   CreateConnectionBetweenTwoConceptsGeneral: () => (/* reexport safe */ _Services_CreateConnectionBetweenTwoConcepts__WEBPACK_IMPORTED_MODULE_11__.CreateConnectionBetweenTwoConceptsGeneral),
/* harmony export */   CreateConnectionBetweenTwoConceptsLocal: () => (/* reexport safe */ _Services_Local_CreateConnectionBetweenTwoConceptsLocal__WEBPACK_IMPORTED_MODULE_60__.CreateConnectionBetweenTwoConceptsLocal),
/* harmony export */   CreateDefaultConcept: () => (/* reexport safe */ _Services_CreateDefaultConcept__WEBPACK_IMPORTED_MODULE_19__.CreateDefaultConcept),
/* harmony export */   CreateDefaultLConcept: () => (/* reexport safe */ _Services_Local_CreateDefaultLConcept__WEBPACK_IMPORTED_MODULE_47__.CreateDefaultLConcept),
/* harmony export */   CreateSession: () => (/* reexport safe */ _Api_Session_CreateSession__WEBPACK_IMPORTED_MODULE_42__.CreateSession),
/* harmony export */   CreateSessionVisit: () => (/* reexport safe */ _Api_Session_CreateSessionVisit__WEBPACK_IMPORTED_MODULE_43__.CreateSessionVisit),
/* harmony export */   CreateTheCompositionLocal: () => (/* reexport safe */ _Services_Local_CreateTheCompositionLocal__WEBPACK_IMPORTED_MODULE_10__.CreateTheCompositionLocal),
/* harmony export */   CreateTheCompositionWithCache: () => (/* reexport safe */ _Services_Composition_CreateCompositionCache__WEBPACK_IMPORTED_MODULE_46__.CreateTheCompositionWithCache),
/* harmony export */   CreateTheConnection: () => (/* reexport safe */ _Services_CreateTheConnection__WEBPACK_IMPORTED_MODULE_16__.createTheConnection),
/* harmony export */   CreateTheConnectionGeneral: () => (/* reexport safe */ _Services_CreateTheConnectionGeneral__WEBPACK_IMPORTED_MODULE_48__.CreateTheConnectionGeneral),
/* harmony export */   CreateTheConnectionLocal: () => (/* reexport safe */ _Services_Local_CreateTheConnectionLocal__WEBPACK_IMPORTED_MODULE_49__.CreateTheConnectionLocal),
/* harmony export */   DATAID: () => (/* reexport safe */ _Constants_FormatConstants__WEBPACK_IMPORTED_MODULE_65__.DATAID),
/* harmony export */   DATAIDDATE: () => (/* reexport safe */ _Constants_FormatConstants__WEBPACK_IMPORTED_MODULE_65__.DATAIDDATE),
/* harmony export */   DelayFunctionExecution: () => (/* reexport safe */ _Services_Common_DelayFunction__WEBPACK_IMPORTED_MODULE_63__.DelayFunctionExecution),
/* harmony export */   DeleteConceptById: () => (/* reexport safe */ _Services_DeleteConcept__WEBPACK_IMPORTED_MODULE_24__.DeleteConceptById),
/* harmony export */   DeleteConceptLocal: () => (/* reexport safe */ _Services_Local_DeleteConceptLocal__WEBPACK_IMPORTED_MODULE_61__.DeleteConceptLocal),
/* harmony export */   DeleteConnectionById: () => (/* reexport safe */ _Services_DeleteConnection__WEBPACK_IMPORTED_MODULE_25__.DeleteConnectionById),
/* harmony export */   DeleteConnectionByType: () => (/* reexport safe */ _Services_DeleteConnectionByType__WEBPACK_IMPORTED_MODULE_102__.DeleteConnectionByType),
/* harmony export */   DependencyObserver: () => (/* reexport safe */ _WrapperFunctions_DepenedencyObserver__WEBPACK_IMPORTED_MODULE_68__.DependencyObserver),
/* harmony export */   FilterSearch: () => (/* reexport safe */ _DataStructures_FilterSearch__WEBPACK_IMPORTED_MODULE_92__.FilterSearch),
/* harmony export */   FormatFromConnections: () => (/* reexport safe */ _Services_Search_SearchLinkMultiple__WEBPACK_IMPORTED_MODULE_51__.FormatFromConnections),
/* harmony export */   FormatFromConnectionsAltered: () => (/* reexport safe */ _Services_Search_SearchLinkMultiple__WEBPACK_IMPORTED_MODULE_51__.FormatFromConnectionsAltered),
/* harmony export */   GetAllConnectionsOfComposition: () => (/* reexport safe */ _Api_GetAllConnectionsOfComposition__WEBPACK_IMPORTED_MODULE_6__.GetAllConnectionsOfComposition),
/* harmony export */   GetAllConnectionsOfCompositionBulk: () => (/* reexport safe */ _Api_GetAllConnectionsOfCompositionBulk__WEBPACK_IMPORTED_MODULE_33__.GetAllConnectionsOfCompositionBulk),
/* harmony export */   GetComposition: () => (/* reexport safe */ _Services_GetComposition__WEBPACK_IMPORTED_MODULE_7__.GetComposition),
/* harmony export */   GetCompositionBulk: () => (/* reexport safe */ _Services_GetCompositionBulk__WEBPACK_IMPORTED_MODULE_30__.GetCompositionBulk),
/* harmony export */   GetCompositionBulkWithDataId: () => (/* reexport safe */ _Services_GetCompositionBulk__WEBPACK_IMPORTED_MODULE_30__.GetCompositionBulkWithDataId),
/* harmony export */   GetCompositionFromConnectionsWithDataId: () => (/* reexport safe */ _Services_GetCompositionBulk__WEBPACK_IMPORTED_MODULE_30__.GetCompositionFromConnectionsWithDataId),
/* harmony export */   GetCompositionFromConnectionsWithDataIdInObject: () => (/* reexport safe */ _Services_GetCompositionBulk__WEBPACK_IMPORTED_MODULE_30__.GetCompositionFromConnectionsWithDataIdInObject),
/* harmony export */   GetCompositionFromConnectionsWithDataIdIndex: () => (/* reexport safe */ _Services_GetCompositionBulk__WEBPACK_IMPORTED_MODULE_30__.GetCompositionFromConnectionsWithDataIdIndex),
/* harmony export */   GetCompositionFromConnectionsWithIndex: () => (/* reexport safe */ _Services_GetCompositionBulk__WEBPACK_IMPORTED_MODULE_30__.GetCompositionFromConnectionsWithIndex),
/* harmony export */   GetCompositionList: () => (/* reexport safe */ _Services_GetCompositionList__WEBPACK_IMPORTED_MODULE_4__.GetCompositionList),
/* harmony export */   GetCompositionListAll: () => (/* reexport safe */ _Services_GetCompositionList__WEBPACK_IMPORTED_MODULE_4__.GetCompositionListAll),
/* harmony export */   GetCompositionListAllWithId: () => (/* reexport safe */ _Services_GetCompositionList__WEBPACK_IMPORTED_MODULE_4__.GetCompositionListAllWithId),
/* harmony export */   GetCompositionListListener: () => (/* reexport safe */ _WrapperFunctions_GetCompositionListObservable__WEBPACK_IMPORTED_MODULE_71__.GetCompositionListListener),
/* harmony export */   GetCompositionListLocal: () => (/* reexport safe */ _Services_Local_GetCompositionListLocal__WEBPACK_IMPORTED_MODULE_5__.GetCompositionListLocal),
/* harmony export */   GetCompositionListLocalWithId: () => (/* reexport safe */ _Services_Local_GetCompositionListLocal__WEBPACK_IMPORTED_MODULE_5__.GetCompositionListLocalWithId),
/* harmony export */   GetCompositionListWithId: () => (/* reexport safe */ _Services_GetCompositionList__WEBPACK_IMPORTED_MODULE_4__.GetCompositionListWithId),
/* harmony export */   GetCompositionListWithIdUpdated: () => (/* reexport safe */ _Services_GetCompositionList__WEBPACK_IMPORTED_MODULE_4__.GetCompositionListWithIdUpdated),
/* harmony export */   GetCompositionListener: () => (/* reexport safe */ _WrapperFunctions_GetCompositionObservable__WEBPACK_IMPORTED_MODULE_70__.GetCompositionListener),
/* harmony export */   GetCompositionLocal: () => (/* reexport safe */ _Services_Local_GetCompositionLocal__WEBPACK_IMPORTED_MODULE_8__.GetCompositionLocal),
/* harmony export */   GetCompositionLocalWithId: () => (/* reexport safe */ _Services_Local_GetCompositionLocal__WEBPACK_IMPORTED_MODULE_8__.GetCompositionLocalWithId),
/* harmony export */   GetCompositionWithAllIds: () => (/* reexport safe */ _Services_GetComposition__WEBPACK_IMPORTED_MODULE_7__.GetCompositionWithAllIds),
/* harmony export */   GetCompositionWithCache: () => (/* reexport safe */ _Services_Composition_CompositionCache__WEBPACK_IMPORTED_MODULE_41__.GetCompositionWithCache),
/* harmony export */   GetCompositionWithDataIdBulk: () => (/* reexport safe */ _Services_Composition_CompositionCache__WEBPACK_IMPORTED_MODULE_41__.GetCompositionWithDataIdBulk),
/* harmony export */   GetCompositionWithDataIdWithCache: () => (/* reexport safe */ _Services_Composition_CompositionCache__WEBPACK_IMPORTED_MODULE_41__.GetCompositionWithDataIdWithCache),
/* harmony export */   GetCompositionWithId: () => (/* reexport safe */ _Services_GetComposition__WEBPACK_IMPORTED_MODULE_7__.GetCompositionWithId),
/* harmony export */   GetCompositionWithIdAndDateFromMemory: () => (/* reexport safe */ _Services_GetComposition__WEBPACK_IMPORTED_MODULE_7__.GetCompositionWithIdAndDateFromMemory),
/* harmony export */   GetConceptBulk: () => (/* reexport safe */ _Api_GetConceptBulk__WEBPACK_IMPORTED_MODULE_31__.GetConceptBulk),
/* harmony export */   GetConceptByCharacter: () => (/* reexport safe */ _Services_GetConceptByCharacter__WEBPACK_IMPORTED_MODULE_17__["default"]),
/* harmony export */   GetConceptByCharacterAndCategoryLocal: () => (/* reexport safe */ _Services_Local_GetConceptByCharacterLocal__WEBPACK_IMPORTED_MODULE_55__.GetConceptByCharacterAndCategoryLocal),
/* harmony export */   GetConceptByCharacterAndType: () => (/* reexport safe */ _Api_GetConceptByCharacterAndType__WEBPACK_IMPORTED_MODULE_64__.GetConceptByCharacterAndType),
/* harmony export */   GetConnectionBetweenTwoConceptsLinker: () => (/* reexport safe */ _Services_GetConnectionBetweenTwoConceptsLinker__WEBPACK_IMPORTED_MODULE_62__.GetConnectionBetweenTwoConceptsLinker),
/* harmony export */   GetConnectionBulk: () => (/* reexport safe */ _Api_GetConnectionBulk__WEBPACK_IMPORTED_MODULE_32__.GetConnectionBulk),
/* harmony export */   GetConnectionById: () => (/* reexport safe */ _Services_GetConnections__WEBPACK_IMPORTED_MODULE_27__.GetConnectionById),
/* harmony export */   GetConnectionDataPrefetch: () => (/* reexport safe */ _Services_GetCompositionBulk__WEBPACK_IMPORTED_MODULE_30__.GetConnectionDataPrefetch),
/* harmony export */   GetConnectionOfTheConcept: () => (/* reexport safe */ _Api_GetConnectionOfTheConcept__WEBPACK_IMPORTED_MODULE_35__.GetConnectionOfTheConcept),
/* harmony export */   GetLink: () => (/* reexport safe */ _Services_GetLink__WEBPACK_IMPORTED_MODULE_18__.GetLink),
/* harmony export */   GetLinkListListener: () => (/* reexport safe */ _WrapperFunctions_GetLinkListObservable__WEBPACK_IMPORTED_MODULE_75__.GetLinkListListener),
/* harmony export */   GetLinkListener: () => (/* reexport safe */ _WrapperFunctions_GetLinkObservable__WEBPACK_IMPORTED_MODULE_73__.GetLinkListener),
/* harmony export */   GetLinkRaw: () => (/* reexport safe */ _Services_GetLink__WEBPACK_IMPORTED_MODULE_18__.GetLinkRaw),
/* harmony export */   GetLinkerConnectionFromConcepts: () => (/* reexport safe */ _Services_GetLinkerConnectionFromConcept__WEBPACK_IMPORTED_MODULE_23__.GetLinkerConnectionFromConcepts),
/* harmony export */   GetLinkerConnectionToConcepts: () => (/* reexport safe */ _Services_GetLinkerConnectionFromConcept__WEBPACK_IMPORTED_MODULE_23__.GetLinkerConnectionToConcepts),
/* harmony export */   GetRelation: () => (/* reexport safe */ _Services_GetRelation__WEBPACK_IMPORTED_MODULE_44__.GetRelation),
/* harmony export */   GetRelationLocal: () => (/* reexport safe */ _Services_Local_GetRelationLocal__WEBPACK_IMPORTED_MODULE_54__.GetRelationLocal),
/* harmony export */   GetRelationRaw: () => (/* reexport safe */ _Services_GetRelation__WEBPACK_IMPORTED_MODULE_44__.GetRelationRaw),
/* harmony export */   GetTheConcept: () => (/* reexport safe */ _Services_GetTheConcept__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   GetTheConceptLocal: () => (/* reexport safe */ _Services_Local_GetTheConceptLocal__WEBPACK_IMPORTED_MODULE_52__.GetTheConceptLocal),
/* harmony export */   GetUserGhostId: () => (/* reexport safe */ _Services_User_UserTranslation__WEBPACK_IMPORTED_MODULE_50__.GetUserGhostId),
/* harmony export */   JUSTDATA: () => (/* reexport safe */ _Constants_FormatConstants__WEBPACK_IMPORTED_MODULE_65__.JUSTDATA),
/* harmony export */   LConcept: () => (/* reexport safe */ _DataStructures_Local_LConcept__WEBPACK_IMPORTED_MODULE_78__.LConcept),
/* harmony export */   LConnection: () => (/* reexport safe */ _DataStructures_Local_LConnection__WEBPACK_IMPORTED_MODULE_79__.LConnection),
/* harmony export */   LocalConceptsData: () => (/* reexport safe */ _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_94__.LocalConceptsData),
/* harmony export */   LocalSyncData: () => (/* reexport safe */ _DataStructures_Local_LocalSyncData__WEBPACK_IMPORTED_MODULE_90__.LocalSyncData),
/* harmony export */   LoginToBackend: () => (/* reexport safe */ _Api_Login__WEBPACK_IMPORTED_MODULE_34__.LoginToBackend),
/* harmony export */   MakeTheInstanceConcept: () => (/* reexport safe */ _Services_MakeTheInstanceConcept__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   MakeTheInstanceConceptLocal: () => (/* reexport safe */ _Services_Local_MakeTheInstanceConceptLocal__WEBPACK_IMPORTED_MODULE_14__.MakeTheInstanceConceptLocal),
/* harmony export */   MakeTheTimestamp: () => (/* reexport safe */ _Services_MakeTheTimestamp__WEBPACK_IMPORTED_MODULE_28__.MakeTheTimestamp),
/* harmony export */   MakeTheTypeConcept: () => (/* reexport safe */ _Services_MakeTheTypeConcept__WEBPACK_IMPORTED_MODULE_21__.MakeTheTypeConcept),
/* harmony export */   MakeTheTypeConceptApi: () => (/* reexport safe */ _Api_MakeTheTypeConceptApi__WEBPACK_IMPORTED_MODULE_22__.MakeTheTypeConceptApi),
/* harmony export */   MakeTheTypeConceptLocal: () => (/* reexport safe */ _Services_Local_MakeTheTypeLocal__WEBPACK_IMPORTED_MODULE_20__.MakeTheTypeConceptLocal),
/* harmony export */   NORMAL: () => (/* reexport safe */ _Constants_FormatConstants__WEBPACK_IMPORTED_MODULE_65__.NORMAL),
/* harmony export */   PRIVATE: () => (/* reexport safe */ _Constants_AccessConstants__WEBPACK_IMPORTED_MODULE_66__.PRIVATE),
/* harmony export */   PUBLIC: () => (/* reexport safe */ _Constants_AccessConstants__WEBPACK_IMPORTED_MODULE_66__.PUBLIC),
/* harmony export */   PatcherStructure: () => (/* reexport safe */ _DataStructures_PatcherStructure__WEBPACK_IMPORTED_MODULE_85__.PatcherStructure),
/* harmony export */   RAW: () => (/* reexport safe */ _Constants_FormatConstants__WEBPACK_IMPORTED_MODULE_65__.RAW),
/* harmony export */   RecursiveSearchApi: () => (/* reexport safe */ _Api_RecursiveSearch__WEBPACK_IMPORTED_MODULE_29__.RecursiveSearchApi),
/* harmony export */   RecursiveSearchApiNewRawFullLinker: () => (/* reexport safe */ _Api_RecursiveSearch__WEBPACK_IMPORTED_MODULE_29__.RecursiveSearchApiNewRawFullLinker),
/* harmony export */   RecursiveSearchApiRaw: () => (/* reexport safe */ _Api_RecursiveSearch__WEBPACK_IMPORTED_MODULE_29__.RecursiveSearchApiRaw),
/* harmony export */   RecursiveSearchApiRawFullLinker: () => (/* reexport safe */ _Api_RecursiveSearch__WEBPACK_IMPORTED_MODULE_29__.RecursiveSearchApiRawFullLinker),
/* harmony export */   RecursiveSearchListener: () => (/* reexport safe */ _WrapperFunctions_RecursiveSearchObservable__WEBPACK_IMPORTED_MODULE_74__.RecursiveSearchListener),
/* harmony export */   SearchAllConcepts: () => (/* reexport safe */ _Api_Search_Search__WEBPACK_IMPORTED_MODULE_39__.SearchAllConcepts),
/* harmony export */   SearchLinkInternal: () => (/* reexport safe */ _Services_Search_SearchLinkInternal__WEBPACK_IMPORTED_MODULE_59__.SearchLinkInternal),
/* harmony export */   SearchLinkInternalAll: () => (/* reexport safe */ _Services_Search_SearchLinkInternal__WEBPACK_IMPORTED_MODULE_59__.SearchLinkInternalAll),
/* harmony export */   SearchLinkMultipleAll: () => (/* reexport safe */ _Services_Search_SearchLinkMultiple__WEBPACK_IMPORTED_MODULE_51__.SearchLinkMultipleAll),
/* harmony export */   SearchLinkMultipleAllObservable: () => (/* reexport safe */ _WrapperFunctions_SearchLinkMultipleAllObservable__WEBPACK_IMPORTED_MODULE_69__.SearchLinkMultipleAllObservable),
/* harmony export */   SearchLinkMultipleApi: () => (/* reexport safe */ _Api_Search_SearchLinkMultipleApi__WEBPACK_IMPORTED_MODULE_2__.SearchLinkMultipleApi),
/* harmony export */   SearchQuery: () => (/* reexport safe */ _DataStructures_SearchQuery__WEBPACK_IMPORTED_MODULE_84__.SearchQuery),
/* harmony export */   SearchStructure: () => (/* reexport safe */ _DataStructures_Search_SearchStructure__WEBPACK_IMPORTED_MODULE_93__.SearchStructure),
/* harmony export */   SearchWithLinker: () => (/* reexport safe */ _Api_Search_SearchWithLinker__WEBPACK_IMPORTED_MODULE_40__.SearchWithLinker),
/* harmony export */   SearchWithTypeAndLinker: () => (/* reexport safe */ _Services_Search_SearchWithTypeAndLinker__WEBPACK_IMPORTED_MODULE_72__.SearchWithTypeAndLinker),
/* harmony export */   SearchWithTypeAndLinkerApi: () => (/* reexport safe */ _Api_Search_SearchWithTypeAndLinker__WEBPACK_IMPORTED_MODULE_67__.SearchWithTypeAndLinkerApi),
/* harmony export */   SessionData: () => (/* reexport safe */ _DataStructures_Session_SessionData__WEBPACK_IMPORTED_MODULE_86__.SessionData),
/* harmony export */   Signin: () => (/* reexport safe */ _Api_Signin__WEBPACK_IMPORTED_MODULE_37__["default"]),
/* harmony export */   Signup: () => (/* reexport safe */ _Api_Signup__WEBPACK_IMPORTED_MODULE_36__["default"]),
/* harmony export */   SplitStrings: () => (/* reexport safe */ _Services_SplitStrings__WEBPACK_IMPORTED_MODULE_3__.SplitStrings),
/* harmony export */   StatefulWidget: () => (/* reexport safe */ _Widgets_StatefulWidget__WEBPACK_IMPORTED_MODULE_101__.StatefulWidget),
/* harmony export */   SyncData: () => (/* reexport safe */ _DataStructures_SyncData__WEBPACK_IMPORTED_MODULE_76__.SyncData),
/* harmony export */   TrashTheConcept: () => (/* reexport safe */ _Api_Delete_DeleteConceptInBackend__WEBPACK_IMPORTED_MODULE_26__.TrashTheConcept),
/* harmony export */   UpdateComposition: () => (/* reexport safe */ _Services_UpdateComposition__WEBPACK_IMPORTED_MODULE_38__["default"]),
/* harmony export */   UpdateCompositionLocal: () => (/* reexport safe */ _Services_Local_UpdateCompositionLocal__WEBPACK_IMPORTED_MODULE_53__.UpdateCompositionLocal),
/* harmony export */   UserBinaryTree: () => (/* reexport safe */ _DataStructures_User_UserBinaryTree__WEBPACK_IMPORTED_MODULE_91__.UserBinaryTree),
/* harmony export */   ViewInternalData: () => (/* reexport safe */ _Services_View_ViewInternalData__WEBPACK_IMPORTED_MODULE_56__.ViewInternalData),
/* harmony export */   ViewInternalDataApi: () => (/* reexport safe */ _Api_View_ViewInternalDataApi__WEBPACK_IMPORTED_MODULE_57__.ViewInternalDataApi),
/* harmony export */   convertFromConceptToLConcept: () => (/* reexport safe */ _Services_Conversion_ConvertConcepts__WEBPACK_IMPORTED_MODULE_58__.convertFromConceptToLConcept),
/* harmony export */   convertFromLConceptToConcept: () => (/* reexport safe */ _Services_Conversion_ConvertConcepts__WEBPACK_IMPORTED_MODULE_58__.convertFromLConceptToConcept),
/* harmony export */   dispatchIdEvent: () => (/* binding */ dispatchIdEvent),
/* harmony export */   getFromDatabaseWithType: () => (/* reexport safe */ _Database_NoIndexDb__WEBPACK_IMPORTED_MODULE_15__.getFromDatabaseWithType),
/* harmony export */   getObjectsFromIndexDb: () => (/* reexport safe */ _Database_NoIndexDb__WEBPACK_IMPORTED_MODULE_15__.getObjectsFromIndexDb),
/* harmony export */   init: () => (/* binding */ init),
/* harmony export */   recursiveFetch: () => (/* reexport safe */ _Services_GetComposition__WEBPACK_IMPORTED_MODULE_7__.recursiveFetch),
/* harmony export */   recursiveFetchNew: () => (/* reexport safe */ _Services_Composition_BuildComposition__WEBPACK_IMPORTED_MODULE_45__.recursiveFetchNew),
/* harmony export */   searchLinkMultipleListener: () => (/* reexport safe */ _WrapperFunctions_SearchLinkMultipleAllObservable__WEBPACK_IMPORTED_MODULE_69__.searchLinkMultipleListener),
/* harmony export */   sendMessage: () => (/* binding */ sendMessage),
/* harmony export */   serviceWorker: () => (/* binding */ serviceWorker),
/* harmony export */   storeToDatabase: () => (/* reexport safe */ _Database_NoIndexDb__WEBPACK_IMPORTED_MODULE_15__.storeToDatabase),
/* harmony export */   subscribedListeners: () => (/* binding */ subscribedListeners),
/* harmony export */   updateAccessToken: () => (/* binding */ updateAccessToken)
/* harmony export */ });
/* harmony import */ var _Services_CreateBinaryTreeFromData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Services/CreateBinaryTreeFromData */ "./src/Services/CreateBinaryTreeFromData.ts");
/* harmony import */ var _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataStructures/IdentifierFlags */ "./src/DataStructures/IdentifierFlags.ts");
/* harmony import */ var _Api_Search_SearchLinkMultipleApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Api/Search/SearchLinkMultipleApi */ "./src/Api/Search/SearchLinkMultipleApi.ts");
/* harmony import */ var _Services_SplitStrings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Services/SplitStrings */ "./src/Services/SplitStrings.ts");
/* harmony import */ var _Services_GetCompositionList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Services/GetCompositionList */ "./src/Services/GetCompositionList.ts");
/* harmony import */ var _Services_Local_GetCompositionListLocal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Services/Local/GetCompositionListLocal */ "./src/Services/Local/GetCompositionListLocal.ts");
/* harmony import */ var _Api_GetAllConnectionsOfComposition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Api/GetAllConnectionsOfComposition */ "./src/Api/GetAllConnectionsOfComposition.ts");
/* harmony import */ var _Services_GetComposition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Services/GetComposition */ "./src/Services/GetComposition.ts");
/* harmony import */ var _Services_Local_GetCompositionLocal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Services/Local/GetCompositionLocal */ "./src/Services/Local/GetCompositionLocal.ts");
/* harmony import */ var _Services_CreateTheComposition__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Services/CreateTheComposition */ "./src/Services/CreateTheComposition.ts");
/* harmony import */ var _Services_Local_CreateTheCompositionLocal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Services/Local/CreateTheCompositionLocal */ "./src/Services/Local/CreateTheCompositionLocal.ts");
/* harmony import */ var _Services_CreateConnectionBetweenTwoConcepts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Services/CreateConnectionBetweenTwoConcepts */ "./src/Services/CreateConnectionBetweenTwoConcepts.ts");
/* harmony import */ var _Services_GetTheConcept__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Services/GetTheConcept */ "./src/Services/GetTheConcept.ts");
/* harmony import */ var _Services_MakeTheInstanceConcept__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Services/MakeTheInstanceConcept */ "./src/Services/MakeTheInstanceConcept.ts");
/* harmony import */ var _Services_Local_MakeTheInstanceConceptLocal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Services/Local/MakeTheInstanceConceptLocal */ "./src/Services/Local/MakeTheInstanceConceptLocal.ts");
/* harmony import */ var _Database_NoIndexDb__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Database/NoIndexDb */ "./src/Database/NoIndexDb.ts");
/* harmony import */ var _Services_CreateTheConnection__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Services/CreateTheConnection */ "./src/Services/CreateTheConnection.ts");
/* harmony import */ var _Services_GetConceptByCharacter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Services/GetConceptByCharacter */ "./src/Services/GetConceptByCharacter.ts");
/* harmony import */ var _Services_GetLink__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Services/GetLink */ "./src/Services/GetLink.ts");
/* harmony import */ var _Services_CreateDefaultConcept__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Services/CreateDefaultConcept */ "./src/Services/CreateDefaultConcept.ts");
/* harmony import */ var _Services_Local_MakeTheTypeLocal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Services/Local/MakeTheTypeLocal */ "./src/Services/Local/MakeTheTypeLocal.ts");
/* harmony import */ var _Services_MakeTheTypeConcept__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Services/MakeTheTypeConcept */ "./src/Services/MakeTheTypeConcept.ts");
/* harmony import */ var _Api_MakeTheTypeConceptApi__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Api/MakeTheTypeConceptApi */ "./src/Api/MakeTheTypeConceptApi.ts");
/* harmony import */ var _Services_GetLinkerConnectionFromConcept__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Services/GetLinkerConnectionFromConcept */ "./src/Services/GetLinkerConnectionFromConcept.ts");
/* harmony import */ var _Services_DeleteConcept__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Services/DeleteConcept */ "./src/Services/DeleteConcept.ts");
/* harmony import */ var _Services_DeleteConnection__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Services/DeleteConnection */ "./src/Services/DeleteConnection.ts");
/* harmony import */ var _Api_Delete_DeleteConceptInBackend__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Api/Delete/DeleteConceptInBackend */ "./src/Api/Delete/DeleteConceptInBackend.ts");
/* harmony import */ var _Services_GetConnections__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Services/GetConnections */ "./src/Services/GetConnections.ts");
/* harmony import */ var _Services_MakeTheTimestamp__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Services/MakeTheTimestamp */ "./src/Services/MakeTheTimestamp.ts");
/* harmony import */ var _Api_RecursiveSearch__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./Api/RecursiveSearch */ "./src/Api/RecursiveSearch.ts");
/* harmony import */ var _Services_GetCompositionBulk__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./Services/GetCompositionBulk */ "./src/Services/GetCompositionBulk.ts");
/* harmony import */ var _Api_GetConceptBulk__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Api/GetConceptBulk */ "./src/Api/GetConceptBulk.ts");
/* harmony import */ var _Api_GetConnectionBulk__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./Api/GetConnectionBulk */ "./src/Api/GetConnectionBulk.ts");
/* harmony import */ var _Api_GetAllConnectionsOfCompositionBulk__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./Api/GetAllConnectionsOfCompositionBulk */ "./src/Api/GetAllConnectionsOfCompositionBulk.ts");
/* harmony import */ var _Api_Login__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./Api/Login */ "./src/Api/Login.ts");
/* harmony import */ var _Api_GetConnectionOfTheConcept__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./Api/GetConnectionOfTheConcept */ "./src/Api/GetConnectionOfTheConcept.ts");
/* harmony import */ var _Api_Signup__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./Api/Signup */ "./src/Api/Signup.ts");
/* harmony import */ var _Api_Signin__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./Api/Signin */ "./src/Api/Signin.ts");
/* harmony import */ var _Services_UpdateComposition__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./Services/UpdateComposition */ "./src/Services/UpdateComposition.ts");
/* harmony import */ var _Api_Search_Search__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./Api/Search/Search */ "./src/Api/Search/Search.ts");
/* harmony import */ var _Api_Search_SearchWithLinker__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./Api/Search/SearchWithLinker */ "./src/Api/Search/SearchWithLinker.ts");
/* harmony import */ var _Services_Composition_CompositionCache__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./Services/Composition/CompositionCache */ "./src/Services/Composition/CompositionCache.ts");
/* harmony import */ var _Api_Session_CreateSession__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./Api/Session/CreateSession */ "./src/Api/Session/CreateSession.ts");
/* harmony import */ var _Api_Session_CreateSessionVisit__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./Api/Session/CreateSessionVisit */ "./src/Api/Session/CreateSessionVisit.ts");
/* harmony import */ var _Services_GetRelation__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./Services/GetRelation */ "./src/Services/GetRelation.ts");
/* harmony import */ var _Services_Composition_BuildComposition__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./Services/Composition/BuildComposition */ "./src/Services/Composition/BuildComposition.ts");
/* harmony import */ var _Services_Composition_CreateCompositionCache__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./Services/Composition/CreateCompositionCache */ "./src/Services/Composition/CreateCompositionCache.ts");
/* harmony import */ var _Services_Local_CreateDefaultLConcept__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./Services/Local/CreateDefaultLConcept */ "./src/Services/Local/CreateDefaultLConcept.ts");
/* harmony import */ var _Services_CreateTheConnectionGeneral__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./Services/CreateTheConnectionGeneral */ "./src/Services/CreateTheConnectionGeneral.ts");
/* harmony import */ var _Services_Local_CreateTheConnectionLocal__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./Services/Local/CreateTheConnectionLocal */ "./src/Services/Local/CreateTheConnectionLocal.ts");
/* harmony import */ var _Services_User_UserTranslation__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./Services/User/UserTranslation */ "./src/Services/User/UserTranslation.ts");
/* harmony import */ var _Services_Search_SearchLinkMultiple__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./Services/Search/SearchLinkMultiple */ "./src/Services/Search/SearchLinkMultiple.ts");
/* harmony import */ var _Services_Local_GetTheConceptLocal__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./Services/Local/GetTheConceptLocal */ "./src/Services/Local/GetTheConceptLocal.ts");
/* harmony import */ var _Services_Local_UpdateCompositionLocal__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./Services/Local/UpdateCompositionLocal */ "./src/Services/Local/UpdateCompositionLocal.ts");
/* harmony import */ var _Services_Local_GetRelationLocal__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./Services/Local/GetRelationLocal */ "./src/Services/Local/GetRelationLocal.ts");
/* harmony import */ var _Services_Local_GetConceptByCharacterLocal__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./Services/Local/GetConceptByCharacterLocal */ "./src/Services/Local/GetConceptByCharacterLocal.ts");
/* harmony import */ var _Services_View_ViewInternalData__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./Services/View/ViewInternalData */ "./src/Services/View/ViewInternalData.ts");
/* harmony import */ var _Api_View_ViewInternalDataApi__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./Api/View/ViewInternalDataApi */ "./src/Api/View/ViewInternalDataApi.ts");
/* harmony import */ var _Services_Conversion_ConvertConcepts__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./Services/Conversion/ConvertConcepts */ "./src/Services/Conversion/ConvertConcepts.ts");
/* harmony import */ var _Services_Search_SearchLinkInternal__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./Services/Search/SearchLinkInternal */ "./src/Services/Search/SearchLinkInternal.ts");
/* harmony import */ var _Services_Local_CreateConnectionBetweenTwoConceptsLocal__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./Services/Local/CreateConnectionBetweenTwoConceptsLocal */ "./src/Services/Local/CreateConnectionBetweenTwoConceptsLocal.ts");
/* harmony import */ var _Services_Local_DeleteConceptLocal__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./Services/Local/DeleteConceptLocal */ "./src/Services/Local/DeleteConceptLocal.ts");
/* harmony import */ var _Services_GetConnectionBetweenTwoConceptsLinker__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./Services/GetConnectionBetweenTwoConceptsLinker */ "./src/Services/GetConnectionBetweenTwoConceptsLinker.ts");
/* harmony import */ var _Services_Common_DelayFunction__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./Services/Common/DelayFunction */ "./src/Services/Common/DelayFunction.ts");
/* harmony import */ var _Api_GetConceptByCharacterAndType__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./Api/GetConceptByCharacterAndType */ "./src/Api/GetConceptByCharacterAndType.ts");
/* harmony import */ var _Constants_FormatConstants__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./Constants/FormatConstants */ "./src/Constants/FormatConstants.ts");
/* harmony import */ var _Constants_AccessConstants__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./Constants/AccessConstants */ "./src/Constants/AccessConstants.ts");
/* harmony import */ var _Api_Search_SearchWithTypeAndLinker__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./Api/Search/SearchWithTypeAndLinker */ "./src/Api/Search/SearchWithTypeAndLinker.ts");
/* harmony import */ var _WrapperFunctions_DepenedencyObserver__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./WrapperFunctions/DepenedencyObserver */ "./src/WrapperFunctions/DepenedencyObserver.ts");
/* harmony import */ var _WrapperFunctions_SearchLinkMultipleAllObservable__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./WrapperFunctions/SearchLinkMultipleAllObservable */ "./src/WrapperFunctions/SearchLinkMultipleAllObservable.ts");
/* harmony import */ var _WrapperFunctions_GetCompositionObservable__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./WrapperFunctions/GetCompositionObservable */ "./src/WrapperFunctions/GetCompositionObservable.ts");
/* harmony import */ var _WrapperFunctions_GetCompositionListObservable__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./WrapperFunctions/GetCompositionListObservable */ "./src/WrapperFunctions/GetCompositionListObservable.ts");
/* harmony import */ var _Services_Search_SearchWithTypeAndLinker__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./Services/Search/SearchWithTypeAndLinker */ "./src/Services/Search/SearchWithTypeAndLinker.ts");
/* harmony import */ var _WrapperFunctions_GetLinkObservable__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./WrapperFunctions/GetLinkObservable */ "./src/WrapperFunctions/GetLinkObservable.ts");
/* harmony import */ var _WrapperFunctions_RecursiveSearchObservable__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./WrapperFunctions/RecursiveSearchObservable */ "./src/WrapperFunctions/RecursiveSearchObservable.ts");
/* harmony import */ var _WrapperFunctions_GetLinkListObservable__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./WrapperFunctions/GetLinkListObservable */ "./src/WrapperFunctions/GetLinkListObservable.ts");
/* harmony import */ var _DataStructures_SyncData__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./DataStructures/SyncData */ "./src/DataStructures/SyncData.ts");
/* harmony import */ var _DataStructures_Concept__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./DataStructures/Concept */ "./src/DataStructures/Concept.ts");
/* harmony import */ var _DataStructures_Local_LConcept__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./DataStructures/Local/LConcept */ "./src/DataStructures/Local/LConcept.ts");
/* harmony import */ var _DataStructures_Local_LConnection__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./DataStructures/Local/LConnection */ "./src/DataStructures/Local/LConnection.ts");
/* harmony import */ var _DataStructures_Connection__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./DataStructures/Connection */ "./src/DataStructures/Connection.ts");
/* harmony import */ var _DataStructures_ConceptData__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./DataStructures/ConceptData */ "./src/DataStructures/ConceptData.ts");
/* harmony import */ var _DataStructures_ConnectionData__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./DataStructures/ConnectionData */ "./src/DataStructures/ConnectionData.ts");
/* harmony import */ var _DataStructures_BinaryTree__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./DataStructures/BinaryTree */ "./src/DataStructures/BinaryTree.ts");
/* harmony import */ var _DataStructures_SearchQuery__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./DataStructures/SearchQuery */ "./src/DataStructures/SearchQuery.ts");
/* harmony import */ var _DataStructures_PatcherStructure__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./DataStructures/PatcherStructure */ "./src/DataStructures/PatcherStructure.ts");
/* harmony import */ var _DataStructures_Session_SessionData__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./DataStructures/Session/SessionData */ "./src/DataStructures/Session/SessionData.ts");
/* harmony import */ var _DataStructures_Composition_Composition__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./DataStructures/Composition/Composition */ "./src/DataStructures/Composition/Composition.ts");
/* harmony import */ var _DataStructures_Composition_CompositionBinaryTree__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./DataStructures/Composition/CompositionBinaryTree */ "./src/DataStructures/Composition/CompositionBinaryTree.ts");
/* harmony import */ var _DataStructures_Composition_CompositionNode__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./DataStructures/Composition/CompositionNode */ "./src/DataStructures/Composition/CompositionNode.ts");
/* harmony import */ var _DataStructures_Local_LocalSyncData__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./DataStructures/Local/LocalSyncData */ "./src/DataStructures/Local/LocalSyncData.ts");
/* harmony import */ var _DataStructures_User_UserBinaryTree__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./DataStructures/User/UserBinaryTree */ "./src/DataStructures/User/UserBinaryTree.ts");
/* harmony import */ var _DataStructures_FilterSearch__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./DataStructures/FilterSearch */ "./src/DataStructures/FilterSearch.ts");
/* harmony import */ var _DataStructures_Search_SearchStructure__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./DataStructures/Search/SearchStructure */ "./src/DataStructures/Search/SearchStructure.ts");
/* harmony import */ var _DataStructures_Local_LocalConceptData__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./DataStructures/Local/LocalConceptData */ "./src/DataStructures/Local/LocalConceptData.ts");
/* harmony import */ var _Services_GetDataFromIndexDb__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./Services/GetDataFromIndexDb */ "./src/Services/GetDataFromIndexDb.ts");
/* harmony import */ var _Services_Local_CreateLocalBinaryTreeFromData__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./Services/Local/CreateLocalBinaryTreeFromData */ "./src/Services/Local/CreateLocalBinaryTreeFromData.ts");
/* harmony import */ var _Services_InitializeSystem__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ./Services/InitializeSystem */ "./src/Services/InitializeSystem.ts");
/* harmony import */ var _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ./DataStructures/BaseUrl */ "./src/DataStructures/BaseUrl.ts");
/* harmony import */ var _DataStructures_Security_TokenStorage__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ./DataStructures/Security/TokenStorage */ "./src/DataStructures/Security/TokenStorage.ts");
/* harmony import */ var _Constants_general_const__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ./Constants/general.const */ "./src/Constants/general.const.ts");
/* harmony import */ var _Widgets_StatefulWidget__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ./Widgets/StatefulWidget */ "./src/Widgets/StatefulWidget.ts");
/* harmony import */ var _Services_DeleteConnectionByType__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! ./Services/DeleteConnectionByType */ "./src/Services/DeleteConnectionByType.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};














































































































var serviceWorker;
/**
 * This function lets you update the access token that the package uses. If this is not passed you cannot create, update, view or delete
 * Your concepts using this package.
 * @param accessToken access token got from the sign in process
 */
function updateAccessToken(accessToken = "") {
    _DataStructures_Security_TokenStorage__WEBPACK_IMPORTED_MODULE_99__.TokenStorage.BearerAccessToken = accessToken;
    if (serviceWorker)
        sendMessage('updateAccessToken', { accessToken });
}
/**
 *
 * @param url This is the url for the backend c# system or our main data fabric server
 * @param aiurl This is the AI url that pulls in the data using our AI system . If you do not enter this then also disable the enableAi flag.
 * @param accessToken This is the JWT token that needs to be passed (But since you have just initilized the system). There is no way we can get access token
 * So this access token can be empty string. You can set it afterwards with another function UpdateAccessToken();
 * @param nodeUrl This is the url for the node server. This is another server in the data fabric that is used as server for business logic and security features.
 * @param enableAi This flag is used to enable or disable the AI feature that preloads data in the indexdb.
 * @param applicationName This is an unique name that is given to a program. Use this to discern one indexdb from another.
 * @param enableSW {activate: boolean, scope: string} | undefined - This is for enabling service worker with its scope
 */
function init() {
    return __awaiter(this, arguments, void 0, function* (url = "", aiurl = "", accessToken = "", nodeUrl = "", enableAi = true, applicationName = "", enableSW = undefined, isTest = false) {
        try {
            // await initConceptConnection(url, aiurl, accessToken, nodeUrl, enableAi, applicationName, isTest)
            listenBroadCastMessages();
            if ("serviceWorker" in navigator &&
                enableSW &&
                (enableSW === null || enableSW === void 0 ? void 0 : enableSW.activate) &&
                (enableSW === null || enableSW === void 0 ? void 0 : enableSW.scope)) {
                try {
                    console.log("service worker initialiing");
                    // navigator.serviceWorker
                    //   .getRegistrations()
                    //   .then(async (registrations) => {
                    //     console.log("Service Workers registered:", registrations);
                    //     if (registrations.length > 0) {
                    //       // TODO:: check if the domain has our own service worker or others
                    //       registrations.forEach((registration, index) => {
                    //         console.log(`Service Worker ${index + 1}:`, registration);
                    //         if (registration.installing) {
                    //           console.log("Status: Installing");
                    //         } else if (registration.waiting) {
                    //           console.log("Status: Waiting");
                    //         } else if (registration.active) {
                    //           console.log("Status: Active");
                    //           serviceWorker = registration.active;
                    //           // sendMessage('init', {})
                    //         } else {
                    //           console.log("Status: No active worker", registration);
                    //         }
                    //       });
                    //       // // for now asuming its other
                    //       // await initConceptConnection(
                    //       //   url,
                    //       //   aiurl,
                    //       //   accessToken,
                    //       //   nodeUrl,
                    //       //   enableAi,
                    //       //   applicationName,
                    //       //   isTest
                    //       // );
                    //     } else {
                    yield new Promise((resolve, reject) => {
                        navigator.serviceWorker
                            .register("./serviceWorker.bundle.js", {
                            // type: "module",
                            scope: enableSW.scope ? enableSW.scope : "/",
                        })
                            .then((registration) => __awaiter(this, void 0, void 0, function* () {
                            console.log("Service Worker registered:", registration);
                            if (registration.active) {
                                console.log("active sw");
                                serviceWorker = registration.active;
                                yield sendMessage("init", {
                                    url,
                                    aiurl,
                                    accessToken,
                                    nodeUrl,
                                    enableAi,
                                    applicationName,
                                    isTest,
                                });
                                resolve();
                            }
                            else {
                                let success = false;
                                // Listen for updates to the service worker
                                console.log("updaet listen start");
                                registration.onupdatefound = () => {
                                    const newWorker = registration.installing;
                                    console.log("new worker", newWorker);
                                    if (newWorker) {
                                        newWorker.onstatechange = () => __awaiter(this, void 0, void 0, function* () {
                                            console.log("on state change triggered");
                                            // if (newWorker.state === 'activated' && navigator.serviceWorker.controller) {
                                            if (newWorker.state === "activated") {
                                                // && navigator.serviceWorker.controller) {
                                                console.log("New Service Worker is active", registration);
                                                serviceWorker = registration.active;
                                                // Send init message now that it's active
                                                yield sendMessage("init", {
                                                    url,
                                                    aiurl,
                                                    accessToken,
                                                    nodeUrl,
                                                    enableAi,
                                                    applicationName,
                                                    isTest,
                                                });
                                                success = true;
                                                resolve();
                                            }
                                        });
                                    }
                                };
                                // Handle if on state change didn't trigger
                                setTimeout(() => {
                                    if (!success)
                                        reject("Not Completed Initialization");
                                }, 3000);
                            }
                        }))
                            .catch((error) => __awaiter(this, void 0, void 0, function* () {
                            yield initConceptConnection(url, aiurl, accessToken, nodeUrl, enableAi, applicationName, isTest);
                            reject(error);
                            console.error("Service Worker registration failed:", error);
                        }));
                    });
                    //   }
                    // })
                    // .catch((err) => {
                    //   console.log("Unable to register", err);
                    // });
                }
                catch (error) {
                    yield initConceptConnection(url, aiurl, accessToken, nodeUrl, enableAi, applicationName, isTest);
                    console.error("Unable to start service worker", error);
                }
            }
            else {
                yield initConceptConnection(url, aiurl, accessToken, nodeUrl, enableAi, applicationName, isTest);
                console.log("Service Worker not supported in this browser.");
            }
            return true;
        }
        catch (error) {
            console.log("cannot initialize the system", error);
        }
    });
}
function sendMessage(type, payload) {
    return __awaiter(this, void 0, void 0, function* () {
        const messageId = Math.random().toString(36).substring(7); // Generate a unique message ID
        payload.messageId = messageId;
        return new Promise((resolve, reject) => {
            // navigator.serviceWorker.ready
            //   .then((registration) => {
            const responseHandler = (event) => {
                var _a;
                if (((_a = event === null || event === void 0 ? void 0 : event.data) === null || _a === void 0 ? void 0 : _a.messageId) == messageId) { // Check if the message ID matches
                    console.log("after sending message", event, event.data);
                    resolve(event.data);
                    navigator.serviceWorker.removeEventListener("message", responseHandler);
                }
            };
            navigator.serviceWorker.addEventListener("message", responseHandler);
            console.log("before sending message", navigator.serviceWorker.controller);
            // serviceWorker?.postMessage({ type, payload });
            // Send the message to the service worker
            if (navigator.serviceWorker.controller) {
                serviceWorker.postMessage({ type, payload });
                // navigator.serviceWorker.controller.postMessage({ type, payload });
            }
            else {
                // wait one second before checking again
                setTimeout(() => {
                    if (navigator.serviceWorker.controller) {
                        serviceWorker.postMessage({ type, payload });
                        // navigator.serviceWorker.controller.postMessage({ type, payload });
                    }
                    else {
                        reject("Service worker not ready");
                    }
                }, 1000);
            }
            // Timeout for waiting for the response (e.g., 5 seconds)
            setTimeout(() => {
                reject("No response from service worker after timeout");
                navigator.serviceWorker.removeEventListener("message", responseHandler);
            }, 5000);
            // })
            // .catch(err => reject(err))
            // .finally(() => console.log('finally'))
        });
    });
}
function dispatchIdEvent(id, data = {}) {
    console.log('id event dispatched', id);
    if (serviceWorker) {
        // let event = new Event(`${id}`);
        let event = new CustomEvent(`${id}`, data);
        console.log("event fired from", event);
        dispatchEvent(event);
    }
    else {
        _Constants_general_const__WEBPACK_IMPORTED_MODULE_100__.broadcastChannel.postMessage({ type: 'dispatchEvent', payload: { id } });
    }
}
let subscribedListeners = [];
// actions for message received on broadcast channel (specially from service worker)
const broadcastActions = {
    GetLinkListener: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        const listener = subscribedListeners.find(listener => listener.listenerId == payload.listenerId);
        listener === null || listener === void 0 ? void 0 : listener.callback(payload.data);
        return { success: true };
    }),
    dispatchEvent: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        if (serviceWorker) {
            let event = new Event(payload.id || '');
            console.log("broadcast dispatched evenet found", event);
            dispatchEvent(event);
        }
        // self.clients.matchAll({ includeUncontrolled: true }).then(clients => {
        //   clients.forEach(client => {
        //     client.postMessage({ id, updatedData });
        //   });
        // });
        return { success: true };
    })
};
function listenBroadCastMessages() {
    // broadcast event can be listened through both the service worker and other tabs
    _Constants_general_const__WEBPACK_IMPORTED_MODULE_100__.broadcastChannel.addEventListener('message', (event) => __awaiter(this, void 0, void 0, function* () {
        const { type, payload } = event.data;
        console.log('Received in Main Thread:', type, event, event.data);
        if (!type)
            return;
        let responseData = { success: false, data: undefined };
        if (broadcastActions[type]) {
            responseData = yield broadcastActions[type](payload);
        }
        else {
            console.log('else bc type');
            console.log(`Unable to handle "${type}" case in service worker`);
        }
    }));
}
// Utility function to handle service worker or fallback logic
function handleServiceWorkerRequest(serviceWorkerMethod, params, fallbackFunction) {
    return __awaiter(this, void 0, void 0, function* () {
        if (serviceWorker) {
            console.log('Data receiving');
            const res = yield sendMessage(serviceWorkerMethod, params);
            console.log('Data received from SW', res);
            return res.data;
        }
        else {
            console.log('Used old BT');
            return yield fallbackFunction(...params);
        }
    });
}
/**
 * Method to initialize the initial data
 * @param url string
 * @param aiurl string
 * @param accessToken string
 * @param nodeUrl string
 * @param enableAi boolean
 * @param applicationName string
 * @param isTest boolean
 * @returns Promise<any>
 */
function initConceptConnection() {
    return __awaiter(this, arguments, void 0, function* (url = "", aiurl = "", accessToken = "", nodeUrl = "", enableAi = true, applicationName = "", isTest = false) {
        _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_98__.BaseUrl.BASE_URL = url;
        _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_98__.BaseUrl.AI_URL = aiurl;
        _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_98__.BaseUrl.NODE_URL = nodeUrl;
        _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_98__.BaseUrl.BASE_APPLICATION = applicationName;
        _DataStructures_Security_TokenStorage__WEBPACK_IMPORTED_MODULE_99__.TokenStorage.BearerAccessToken = accessToken;
        let randomizer = Math.floor(Math.random() * 100000000);
        // BaseUrl.BASE_RANDOMIZER = randomizer;
        // BaseUrl.BASE_RANDOMIZER = 999;
        _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_98__.BaseUrl.setRandomizer(999);
        if (isTest) {
            _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__.IdentifierFlags.isDataLoaded = true;
            _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__.IdentifierFlags.isCharacterLoaded = true;
            _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__.IdentifierFlags.isTypeLoaded = true;
            _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__.IdentifierFlags.isLocalDataLoaded = true;
            _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__.IdentifierFlags.isLocalTypeLoaded = true;
            _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__.IdentifierFlags.isLocalCharacterLoaded = true;
            _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__.IdentifierFlags.isConnectionLoaded = true;
            _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__.IdentifierFlags.isConnectionTypeLoaded = true;
            _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__.IdentifierFlags.isLocalConnectionLoaded = true;
            return true;
        }
        console.log("This ist he base url", _DataStructures_BaseUrl__WEBPACK_IMPORTED_MODULE_98__.BaseUrl.BASE_URL, randomizer);
        /**
         * We initialize the system so that we get all the concepts from the backend system that are most likely to be used
         * We use some sort of AI algorithm to initilize these concepts with the most used concept.
         * @param enableAi enableAi is a flag that the user can choose to set if they want to use this enable AI feature
         * If the developer does not want to use this feature then they can just set enableAi to false.
         */
        yield (0,_Services_InitializeSystem__WEBPACK_IMPORTED_MODULE_97__["default"])();
        const start = new Date().getTime();
        /**
         * This  will create a binary tree in the memory from the indexdb.
         * This process will set Flags to denote that the binary tree is loaded, the character binary tree is  loaded
         * and that the type binary tree has been loaded.
         * These trees are helpful in caching concepts and connections for the data fabric.
         */
        yield (0,_Services_CreateBinaryTreeFromData__WEBPACK_IMPORTED_MODULE_0__["default"])()
            .then(() => {
            // IdentifierFlags.isDataLoaded= true;
            // IdentifierFlags.isCharacterLoaded= true;
            // IdentifierFlags.isTypeLoaded= true;
            let elapsed = new Date().getTime() - start;
            console.log("The time taken to prepare concept  data is  ", elapsed);
        })
            .catch((event) => {
            // console.log("This is the error in creating binary tree", IdentifierFlags.isDataLoaded, IdentifierFlags.isCharacterLoaded, IdentifierFlags.isTypeLoaded);
            throw event;
        });
        /**
         * This will create a binary tree of local concepts that is saved from the indexdb.
         * This process after finishing creating a binary tree of local concepts then set flag to denote that
         * LocalBinaryTree has been created from the concepts in indexdb
         * Local Binary Type tree has been loaded to the index db (flag is set to denote that)
         * Character Binary Tree has been loaded from indexdb to memory (flag is set to denote that)
         */
        yield (0,_Services_Local_CreateLocalBinaryTreeFromData__WEBPACK_IMPORTED_MODULE_96__["default"])()
            .then(() => {
            // IdentifierFlags.isLocalDataLoaded = true;
            // IdentifierFlags.isLocalTypeLoaded = true;
            // IdentifierFlags.isLocalCharacterLoaded = true;
            let elapsed = new Date().getTime() - start;
            console.log("The time taken to prepare local concept  ", elapsed);
        })
            .catch((event) => {
            throw event;
        });
        /**
         * This process gets the local connections from indexdb and loads it to the local connections array which is inside of
         * a static class called LocalConnectionData.
         * This function will also set and IdentifierFlag that tells the whole program that this process has finished.
         */
        yield (0,_Services_GetDataFromIndexDb__WEBPACK_IMPORTED_MODULE_95__.GetConnectionsFromIndexDbLocal)()
            .then(() => {
            _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__.IdentifierFlags.isLocalConnectionLoaded = true;
        })
            .catch((event) => {
            //console.log("This is the error in creating local connections binary tree");
            throw event;
        });
        /**
         * We have designed our system to use local concepts and connections with its own local ids(negative ids) that
         * is only valid for the browser that creates this. We have a translator in our node server.
         * This function does this process in initlization.
         */
        yield (0,_Services_Local_CreateLocalBinaryTreeFromData__WEBPACK_IMPORTED_MODULE_96__.PopulateTheLocalConnectionToMemory)().catch((event) => {
            console.log("This is the error in populating binary tree");
            throw event;
        });
        ;
        /**
         * This process gets the connections from indexdb and loads it to the connections array which is inside of
         * a static class called ConnectionData.
         * This function will also set and IdentifierFlag that tells the whole program that this process has finished.
         */
        yield (0,_Services_GetDataFromIndexDb__WEBPACK_IMPORTED_MODULE_95__.GetConnectionsFromIndexDb)()
            .then(() => {
            _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__.IdentifierFlags.isConnectionLoaded = true;
            _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__.IdentifierFlags.isConnectionTypeLoaded = true;
            let elapsed = new Date().getTime() - start;
            console.log("The time taken to prepare connections  ", elapsed);
        })
            .catch((event) => {
            //console.log("This is the error in creating connections tree");
            throw event;
        });
    });
}


/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
/*!*******************************!*\
  !*** ./src/service-worker.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.ts");
/* harmony import */ var _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataStructures/IdentifierFlags */ "./src/DataStructures/IdentifierFlags.ts");
/* harmony import */ var _DataStructures_Security_TokenStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataStructures/Security/TokenStorage */ "./src/DataStructures/Security/TokenStorage.ts");
/* harmony import */ var _Services_CreateBinaryTreeFromData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Services/CreateBinaryTreeFromData */ "./src/Services/CreateBinaryTreeFromData.ts");
/* harmony import */ var _Services_GetDataFromIndexDb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Services/GetDataFromIndexDb */ "./src/Services/GetDataFromIndexDb.ts");
/* harmony import */ var _Services_InitializeSystem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Services/InitializeSystem */ "./src/Services/InitializeSystem.ts");
/* harmony import */ var _Services_Local_CreateLocalBinaryTreeFromData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Services/Local/CreateLocalBinaryTreeFromData */ "./src/Services/Local/CreateLocalBinaryTreeFromData.ts");
/* harmony import */ var _ServiceWorker_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ServiceWorker/actions */ "./src/ServiceWorker/actions/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








// Install Service Worker
self.addEventListener("install", (event) => {
    console.log("Service Worker installing... sw");
    // event.waitUntil();
    event.waitUntil(self.skipWaiting());
});
// Activate Service Worker
self.addEventListener("activate", (event) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Service Worker activating... sw");
    // await init();
    event.waitUntil(self.clients.claim());
}));
// For Caching gives the event when fetch request is triggered
// self.addEventListener('fetch', (event: any) => {
//     console.log('Fetching: sw', event.request.url);
// });
// Actions that can be performed in this service worker
const actions = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ init: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        yield init(payload === null || payload === void 0 ? void 0 : payload.url, payload === null || payload === void 0 ? void 0 : payload.aiurl, payload === null || payload === void 0 ? void 0 : payload.accessToken, payload === null || payload === void 0 ? void 0 : payload.nodeUrl, payload === null || payload === void 0 ? void 0 : payload.enableAi, payload === null || payload === void 0 ? void 0 : payload.applicationName, payload === null || payload === void 0 ? void 0 : payload.isTest);
        return { success: true, data: undefined, name: 'init' };
    }), updateAccessToken: (payload) => __awaiter(void 0, void 0, void 0, function* () {
        (0,_app__WEBPACK_IMPORTED_MODULE_0__.updateAccessToken)(payload.accessToken);
        return { success: true, name: 'updateAccessToken' };
    }) }, _ServiceWorker_actions__WEBPACK_IMPORTED_MODULE_7__.getActions), _ServiceWorker_actions__WEBPACK_IMPORTED_MODULE_7__.searchActions), _ServiceWorker_actions__WEBPACK_IMPORTED_MODULE_7__.createActions), _ServiceWorker_actions__WEBPACK_IMPORTED_MODULE_7__.updateActions), _ServiceWorker_actions__WEBPACK_IMPORTED_MODULE_7__.connectionActions), _ServiceWorker_actions__WEBPACK_IMPORTED_MODULE_7__.deleteActions), _ServiceWorker_actions__WEBPACK_IMPORTED_MODULE_7__.syncActions);
// Listen message received by service worker
self.addEventListener("message", (event) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("message received sw", event);
    const { type, payload } = event.data;
    if (!type)
        return;
    console.log('has type', type);
    let responseData = { success: false, data: undefined };
    if (actions[type]) {
        try {
            console.log('if type', responseData);
            responseData = yield actions[type](payload);
            console.log('end if type', responseData);
        }
        catch (err) {
            console.log('Error if', err);
        }
    }
    else {
        console.log('else type');
        console.log(`Unable to handle "${type}" case in service worker`);
    }
    responseData.messageId = payload.messageId;
    event.source.postMessage(responseData);
}));
/**
 * Method to initialize the initial data in service worker
 * @param url string
 * @param aiurl string
 * @param accessToken string
 * @param nodeUrl string
 * @param enableAi boolean
 * @param applicationName string
 * @param isTest boolean
 * @returns Promise<any>
 */
function init() {
    return __awaiter(this, arguments, void 0, function* (url = "", aiurl = "", accessToken = "", nodeUrl = "", enableAi = true, applicationName = "", isTest = false) {
        _app__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.BASE_URL = url;
        _app__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.AI_URL = aiurl;
        _app__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.NODE_URL = nodeUrl;
        _app__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.BASE_APPLICATION = applicationName;
        _DataStructures_Security_TokenStorage__WEBPACK_IMPORTED_MODULE_2__.TokenStorage.BearerAccessToken = accessToken;
        let randomizer = Math.floor(Math.random() * 100000000);
        // BaseUrl.BASE_RANDOMIZER = randomizer;
        _app__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.setRandomizer(randomizer);
        if (isTest) {
            _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__.IdentifierFlags.isDataLoaded = true;
            _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__.IdentifierFlags.isCharacterLoaded = true;
            _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__.IdentifierFlags.isTypeLoaded = true;
            _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__.IdentifierFlags.isLocalDataLoaded = true;
            _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__.IdentifierFlags.isLocalTypeLoaded = true;
            _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__.IdentifierFlags.isLocalCharacterLoaded = true;
            _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__.IdentifierFlags.isConnectionLoaded = true;
            _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__.IdentifierFlags.isConnectionTypeLoaded = true;
            _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__.IdentifierFlags.isLocalConnectionLoaded = true;
            return true;
        }
        console.log("This ist he base url", _app__WEBPACK_IMPORTED_MODULE_0__.BaseUrl.BASE_URL, randomizer);
        /**
         * We initialize the system so that we get all the concepts from the backend system that are most likely to be used
         * We use some sort of AI algorithm to initilize these concepts with the most used concept.
         * @param enableAi enableAi is a flag that the user can choose to set if they want to use this enable AI feature
         * If the developer does not want to use this feature then they can just set enableAi to false.
         */
        yield (0,_Services_InitializeSystem__WEBPACK_IMPORTED_MODULE_5__["default"])();
        const start = new Date().getTime();
        /**
         * This  will create a binary tree in the memory from the indexdb.
         * This process will set Flags to denote that the binary tree is loaded, the character binary tree is  loaded
         * and that the type binary tree has been loaded.
         * These trees are helpful in caching concepts and connections for the data fabric.
         */
        yield (0,_Services_CreateBinaryTreeFromData__WEBPACK_IMPORTED_MODULE_3__["default"])()
            .then(() => {
            // IdentifierFlags.isDataLoaded= true;
            // IdentifierFlags.isCharacterLoaded= true;
            // IdentifierFlags.isTypeLoaded= true;
            let elapsed = new Date().getTime() - start;
            console.log("The time taken to prepare concept  data is  ", elapsed);
        })
            .catch((event) => {
            // console.log("This is the error in creating binary tree", IdentifierFlags.isDataLoaded, IdentifierFlags.isCharacterLoaded, IdentifierFlags.isTypeLoaded);
            throw event;
        });
        /**
         * This will create a binary tree of local concepts that is saved from the indexdb.
         * This process after finishing creating a binary tree of local concepts then set flag to denote that
         * LocalBinaryTree has been created from the concepts in indexdb
         * Local Binary Type tree has been loaded to the index db (flag is set to denote that)
         * Character Binary Tree has been loaded from indexdb to memory (flag is set to denote that)
         */
        yield (0,_Services_Local_CreateLocalBinaryTreeFromData__WEBPACK_IMPORTED_MODULE_6__["default"])()
            .then(() => {
            // IdentifierFlags.isLocalDataLoaded = true;
            // IdentifierFlags.isLocalTypeLoaded = true;
            // IdentifierFlags.isLocalCharacterLoaded = true;
            let elapsed = new Date().getTime() - start;
            console.log("The time taken to prepare local concept  ", elapsed);
        })
            .catch((event) => {
            throw event;
        });
        /**
         * This process gets the local connections from indexdb and loads it to the local connections array which is inside of
         * a static class called LocalConnectionData.
         * This function will also set and IdentifierFlag that tells the whole program that this process has finished.
         */
        yield (0,_Services_GetDataFromIndexDb__WEBPACK_IMPORTED_MODULE_4__.GetConnectionsFromIndexDbLocal)()
            .then(() => {
            _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__.IdentifierFlags.isLocalConnectionLoaded = true;
        })
            .catch((event) => {
            //console.log("This is the error in creating local connections binary tree");
            throw event;
        });
        /**
         * We have designed our system to use local concepts and connections with its own local ids(negative ids) that
         * is only valid for the browser that creates this. We have a translator in our node server.
         * This function does this process in initlization.
         */
        yield (0,_Services_Local_CreateLocalBinaryTreeFromData__WEBPACK_IMPORTED_MODULE_6__.PopulateTheLocalConnectionToMemory)();
        /**
         * This process gets the connections from indexdb and loads it to the connections array which is inside of
         * a static class called ConnectionData.
         * This function will also set and IdentifierFlag that tells the whole program that this process has finished.
         */
        yield (0,_Services_GetDataFromIndexDb__WEBPACK_IMPORTED_MODULE_4__.GetConnectionsFromIndexDb)()
            .then(() => {
            _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__.IdentifierFlags.isConnectionLoaded = true;
            _DataStructures_IdentifierFlags__WEBPACK_IMPORTED_MODULE_1__.IdentifierFlags.isConnectionTypeLoaded = true;
            let elapsed = new Date().getTime() - start;
            console.log("The time taken to prepare connections  ", elapsed);
        })
            .catch((event) => {
            //console.log("This is the error in creating connections tree");
            throw event;
        });
    });
}


//# sourceMappingURL=serviceWorker.bundle.js.map