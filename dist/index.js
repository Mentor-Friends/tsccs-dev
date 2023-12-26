/******/ var __webpack_modules__ = ({

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
const CharacterRepository_1 = __webpack_require__(/*! ../../DataStructures/CharacterRepository */ "./src/DataStructures/CharacterRepository.ts");
const Returner_1 = __webpack_require__(/*! ../../DataStructures/Returner */ "./src/DataStructures/Returner.ts");
const TheCharacter_1 = __webpack_require__(/*! ../../DataStructures/TheCharacter */ "./src/DataStructures/TheCharacter.ts");
function CreateTheCharacter(characterData) {
    var characterData;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            characterData = CharacterRepository_1.CharacterRepository.GetCharacter(characterData.data);
            if (characterData.id == 0) {
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
                var savingCharacter = new TheCharacter_1.TheCharacter(result.userId, characterData.data, 0, 0, 4, 4, 999, 999, "", false);
                savingCharacter.id = result.id;
                CharacterRepository_1.CharacterRepository.AddCharacter(savingCharacter);
                return result;
            }
            else {
                var returningData = new Returner_1.Returner(characterData.id, characterData.userId, 0, false);
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

/***/ "./src/Api/GetAiData.ts":
/*!******************************!*\
  !*** ./src/Api/GetAiData.ts ***!
  \******************************/
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
exports.GetAiData = void 0;
const ConceptData_1 = __webpack_require__(/*! ../DataStructures/ConceptData */ "./src/DataStructures/ConceptData.ts");
const InitializeSystem_1 = __webpack_require__(/*! ../Services/InitializeSystem */ "./src/Services/InitializeSystem.ts");
const ApiConstants_1 = __webpack_require__(/*! ./../Constants/ApiConstants */ "./src/Constants/ApiConstants.ts");
function GetAiData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const start = new Date().getTime();
            const response = yield fetch(ApiConstants_1.GetAllAiData, {
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
                ConceptData_1.ConceptsData.AddConcept(result[i]);
            }
            (0, InitializeSystem_1.PurgatoryDatabaseUpdated)();
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
exports.GetAiData = GetAiData;


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
            urlencoded.append("user_id", userId.toString());
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
exports.GetAllConnectionsOfCompositionOnline = exports.GetAllConnectionsOfComposition = void 0;
const ConnectionData_1 = __webpack_require__(/*! ../DataStructures/ConnectionData */ "./src/DataStructures/ConnectionData.ts");
const ApiConstants_1 = __webpack_require__(/*! ./../Constants/ApiConstants */ "./src/Constants/ApiConstants.ts");
function GetAllConnectionsOfComposition(composition_id) {
    return __awaiter(this, void 0, void 0, function* () {
        var connectionList = [];
        connectionList = ConnectionData_1.ConnectionData.GetConnectionsOfCompositionLocal(composition_id);
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
exports.GetAllConnectionsOfComposition = GetAllConnectionsOfComposition;
function GetAllConnectionsOfCompositionOnline(composition_id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var connectionList = [];
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
            for (var i = 0; i < result.length; i++) {
                ConnectionData_1.ConnectionData.AddConnection(result[i]);
                ConnectionData_1.ConnectionData.AddToDictionary(result[i]);
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
exports.GetAllConnectionsOfCompositionOnline = GetAllConnectionsOfCompositionOnline;


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
            var conceptUse = yield ConceptData_1.ConceptsData.GetConcept(id);
            if (conceptUse.id != 0) {
                return conceptUse;
            }
            else {
                console.log("getting data from online");
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
                const result = yield response.json();
                if (result.id > 0) {
                    ConceptData_1.ConceptsData.AddConcept(result);
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
            var concept = yield ConceptData_1.ConceptsData.GetConceptByCharacterAndTypeLocal(characterValue, typeId);
            if (concept == null || concept.id == 0) {
                console.log("could not find");
                var json = {
                    'character_value': `${characterValue}`,
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
                var conceptString = yield response.json();
                concept = conceptString;
                ConceptData_1.ConceptsData.AddConcept(concept);
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
            else {
                const result = yield response.json();
                if (result.id > 0) {
                    ConceptData_1.ConceptsData.AddConcept(result);
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
exports.GetConceptByCharacterValue = GetConceptByCharacterValue;


/***/ }),

/***/ "./src/Api/GetConnectionOfTheConcept.ts":
/*!**********************************************!*\
  !*** ./src/Api/GetConnectionOfTheConcept.ts ***!
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
exports.GetConnectionOfTheConcept = void 0;
const ApiConstants_1 = __webpack_require__(/*! ./../Constants/ApiConstants */ "./src/Constants/ApiConstants.ts");
function GetConnectionOfTheConcept(typeId, ofTheConceptId, userId, inpage = 10, page = 1) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var urlencoded = new URLSearchParams();
            urlencoded.append("typeId", `${typeId}`);
            urlencoded.append("ofTheConceptId", `${ofTheConceptId}`);
            urlencoded.append("userId", `${userId}`);
            urlencoded.append("inpage", `${inpage}`);
            urlencoded.append("page", `${page}`);
            const response = yield fetch(ApiConstants_1.GetAllConnectionsOfConceptUrl, {
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
exports.GetConnectionOfTheConcept = GetConnectionOfTheConcept;


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
exports.CreateTheConnectionUrl = exports.CreateTheConceptUrl = exports.CreateTheCharacterDataUrl = exports.CreateTheTextDataUrl = exports.GetReservedIdUrl = exports.GetAllAiData = exports.GetAllConnectionsOfConceptUrl = exports.GetAllConceptsByTypeUrl = exports.GetCharacterByCharacterUrl = exports.GetConceptByCharacterAndTypeUrl = exports.GetConceptByCharacterValueUrl = exports.GetAllConnectionsOfCompositionUrl = exports.GetAllConnectionsOfUserUrl = exports.GetAllConceptsOfUserUrl = exports.GetConceptUrl = exports.BASE_URL = void 0;
exports.BASE_URL = "MISSING_ENV_VAR".BASE_URL || 'https://devboom.freeschema.com';
exports.GetConceptUrl = exports.BASE_URL + '/api/getConcept';
exports.GetAllConceptsOfUserUrl = exports.BASE_URL + '/api/get_all_concepts_of_user';
exports.GetAllConnectionsOfUserUrl = exports.BASE_URL + '/api/get_all_connections_of_user';
exports.GetAllConnectionsOfCompositionUrl = exports.BASE_URL + '/api/get_all_connections_of_composition';
exports.GetConceptByCharacterValueUrl = exports.BASE_URL + '/api/get_concept_by_character_value';
exports.GetConceptByCharacterAndTypeUrl = exports.BASE_URL + '/api/get_concept_by_character_and_type';
exports.GetCharacterByCharacterUrl = exports.BASE_URL + '/api/get_character_by_character';
exports.GetAllConceptsByTypeUrl = exports.BASE_URL + '/api/get_all_concepts_by_type';
exports.GetAllConnectionsOfConceptUrl = exports.BASE_URL + '/api/get-link-connections';
exports.GetAllAiData = "MISSING_ENV_VAR".AI_URL || 'https://devai.freeschema.com/api/get_ranked_type_id?inpage=500';
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

/***/ "./src/DataStructures/BinaryCharacterTree.ts":
/*!***************************************************!*\
  !*** ./src/DataStructures/BinaryCharacterTree.ts ***!
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
exports.BinaryCharacterTree = void 0;
const IdentifierFlags_1 = __webpack_require__(/*! ./IdentifierFlags */ "./src/DataStructures/IdentifierFlags.ts");
const Node_1 = __webpack_require__(/*! ./Node */ "./src/DataStructures/Node.ts");
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
        if (IdentifierFlags_1.IdentifierFlags.isCharacterLoaded) {
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
            var node = new Node_1.Node(concept.characterValue, concept, null, null);
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
exports.BinaryCharacterTree = BinaryCharacterTree;
BinaryCharacterTree.characterRoot = null;


/***/ }),

/***/ "./src/DataStructures/BinaryTree.ts":
/*!******************************************!*\
  !*** ./src/DataStructures/BinaryTree.ts ***!
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
exports.BinaryTree = void 0;
const BinaryCharacterTree_1 = __webpack_require__(/*! ./BinaryCharacterTree */ "./src/DataStructures/BinaryCharacterTree.ts");
const Node_1 = __webpack_require__(/*! ./Node */ "./src/DataStructures/Node.ts");
const IdentifierFlags_1 = __webpack_require__(/*! ./IdentifierFlags */ "./src/DataStructures/IdentifierFlags.ts");
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
        if (IdentifierFlags_1.IdentifierFlags.isDataLoaded) {
            return resolve("done");
        }
        else {
            setTimeout(BinaryTree.checkFlag, 1000, resolve);
        }
    }
    ;
    static addConceptToTree(concept) {
        var node = new Node_1.Node(concept.id, concept, null, null);
        var characterNode = new Node_1.Node(concept.characterValue, concept, null, null);
        BinaryCharacterTree_1.BinaryCharacterTree.addNodeToTree(characterNode);
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
exports.BinaryTree = BinaryTree;
BinaryTree.root = null;


/***/ }),

/***/ "./src/DataStructures/BinaryTypeTree.ts":
/*!**********************************************!*\
  !*** ./src/DataStructures/BinaryTypeTree.ts ***!
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
exports.BinaryTypeTree = void 0;
const Concept_1 = __webpack_require__(/*! ../DataStructures/Concept */ "./src/DataStructures/Concept.ts");
const IdentifierFlags_1 = __webpack_require__(/*! ./IdentifierFlags */ "./src/DataStructures/IdentifierFlags.ts");
const Node_1 = __webpack_require__(/*! ./Node */ "./src/DataStructures/Node.ts");
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
            var node = new Node_1.Node(concept.typeId, concept, null, null);
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
        if (IdentifierFlags_1.IdentifierFlags.isTypeLoaded) {
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
            var concept = new Concept_1.Concept(0, 0, 0, 0, 0, 0, 0, 0, "0", 0, 0, 0, 0, 0, 0, false);
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
exports.BinaryTypeTree = BinaryTypeTree;
BinaryTypeTree.typeRoot = null;


/***/ }),

/***/ "./src/DataStructures/CharacterRepository.ts":
/*!***************************************************!*\
  !*** ./src/DataStructures/CharacterRepository.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CharacterRepository = void 0;
const TheCharacter_1 = __webpack_require__(/*! ./TheCharacter */ "./src/DataStructures/TheCharacter.ts");
class CharacterRepository {
    constructor() {
        this.name = "character Repository";
    }
    static AddCharacter(character) {
        this.characterData[character.id] = character;
    }
    static GetCharacter(value) {
        var theCharacter = new TheCharacter_1.TheCharacter(0, "0", 0, 0, 0, 0, 0, 0, "0", false);
        for (var i = 0; i < this.characterData.length; i++) {
            if (this.characterData[i].data == value) {
                theCharacter = this.characterData[i];
            }
        }
        return theCharacter;
    }
}
exports.CharacterRepository = CharacterRepository;
CharacterRepository.characterData = [];


/***/ }),

/***/ "./src/DataStructures/Concept.ts":
/*!***************************************!*\
  !*** ./src/DataStructures/Concept.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Concept = void 0;
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
exports.Concept = Concept;


/***/ }),

/***/ "./src/DataStructures/ConceptData.ts":
/*!*******************************************!*\
  !*** ./src/DataStructures/ConceptData.ts ***!
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
exports.ConceptsData = void 0;
const Concept_1 = __webpack_require__(/*! ./Concept */ "./src/DataStructures/Concept.ts");
const indexeddb_1 = __webpack_require__(/*! ../Database/indexeddb */ "./src/Database/indexeddb.ts");
const BinaryTree_1 = __webpack_require__(/*! ./BinaryTree */ "./src/DataStructures/BinaryTree.ts");
const BinaryCharacterTree_1 = __webpack_require__(/*! ./BinaryCharacterTree */ "./src/DataStructures/BinaryCharacterTree.ts");
const BinaryTypeTree_1 = __webpack_require__(/*! ./BinaryTypeTree */ "./src/DataStructures/BinaryTypeTree.ts");
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
            (0, indexeddb_1.storeToDatabase)("concept", concept);
            BinaryTree_1.BinaryTree.addConceptToTree(concept);
            BinaryTypeTree_1.BinaryTypeTree.addConceptToTree(concept);
            BinaryCharacterTree_1.BinaryCharacterTree.addConceptToTree(concept);
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
        (0, indexeddb_1.removeFromDatabase)("concept", concept.id);
    }
    static GetConcept(id) {
        return __awaiter(this, void 0, void 0, function* () {
            var myConcept = new Concept_1.Concept(0, 0, 0, 0, 0, 0, 0, 0, "0", 0, 0, 0, 0, 0, 0, false);
            var node = yield BinaryTree_1.BinaryTree.getNodeFromTree(id);
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
            var concept = new Concept_1.Concept(0, 0, 0, 0, 0, 0, 0, 0, "0", 0, 0, 0, 0, 0, 0, false);
            //  for(var i=0; i<this.conceptsArray.length; i++){
            //      if(this.conceptsArray[i].characterValue == characterValue){
            //         concept = this.conceptsArray[i];
            //      }
            //  }
            var Node = BinaryCharacterTree_1.BinaryCharacterTree.getNodeFromTree(characterValue);
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
            var concept = new Concept_1.Concept(0, 0, 0, 0, 0, 0, 0, 0, "0", 0, 0, 0, 0, 0, 0, false);
            //var Node = await BinaryCharacterTree.getCharacterAndTypeFromTree(character_value,typeId);
            concept = yield BinaryTypeTree_1.BinaryTypeTree.getTypeVariantsWithCharacterValue(character_value, typeId);
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
            ConceptList = yield BinaryTypeTree_1.BinaryTypeTree.getTypeVariantsFromTreeWithUserId(typeId, userId);
            return ConceptList;
        });
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
exports.Connection = Connection;


/***/ }),

/***/ "./src/DataStructures/ConnectionData.ts":
/*!**********************************************!*\
  !*** ./src/DataStructures/ConnectionData.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConnectionData = void 0;
const indexeddb_1 = __webpack_require__(/*! ../Database/indexeddb */ "./src/Database/indexeddb.ts");
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
            (0, indexeddb_1.storeToDatabase)("connection", connection);
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
            (0, indexeddb_1.removeFromDatabase)("connection", connection.id);
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
exports.ConnectionData = ConnectionData;
ConnectionData.connectionArray = [];
ConnectionData.connectionDictionary = [];


/***/ }),

/***/ "./src/DataStructures/IdentifierFlags.ts":
/*!***********************************************!*\
  !*** ./src/DataStructures/IdentifierFlags.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IdentifierFlags = void 0;
class IdentifierFlags {
}
exports.IdentifierFlags = IdentifierFlags;
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
exports.LocalBinaryCharacterTree = void 0;
const IdentifierFlags_1 = __webpack_require__(/*! ./../IdentifierFlags */ "./src/DataStructures/IdentifierFlags.ts");
const Node_1 = __webpack_require__(/*! ./../Node */ "./src/DataStructures/Node.ts");
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
        if (IdentifierFlags_1.IdentifierFlags.isLocalCharacterLoaded) {
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
            var node = new Node_1.Node(concept.characterValue, concept, null, null);
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
exports.LocalBinaryCharacterTree = LocalBinaryCharacterTree;
LocalBinaryCharacterTree.LocalCharacterRoot = null;


/***/ }),

/***/ "./src/DataStructures/Local/LocalBinaryTree.ts":
/*!*****************************************************!*\
  !*** ./src/DataStructures/Local/LocalBinaryTree.ts ***!
  \*****************************************************/
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
exports.LocalBinaryTree = void 0;
const IdentifierFlags_1 = __webpack_require__(/*! ../IdentifierFlags */ "./src/DataStructures/IdentifierFlags.ts");
const Node_1 = __webpack_require__(/*! ./../Node */ "./src/DataStructures/Node.ts");
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
        var node = new Node_1.Node(concept.id, concept, null, null);
        var characterNode = new Node_1.Node(concept.characterValue, concept, null, null);
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
        if (IdentifierFlags_1.IdentifierFlags.isLocalDataLoaded) {
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
exports.LocalBinaryTree = LocalBinaryTree;
LocalBinaryTree.root = null;


/***/ }),

/***/ "./src/DataStructures/Local/LocalBinaryTypeTree.ts":
/*!*********************************************************!*\
  !*** ./src/DataStructures/Local/LocalBinaryTypeTree.ts ***!
  \*********************************************************/
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
exports.LocalBinaryTypeTree = void 0;
const IdentifierFlags_1 = __webpack_require__(/*! ./../IdentifierFlags */ "./src/DataStructures/IdentifierFlags.ts");
const Node_1 = __webpack_require__(/*! ./../Node */ "./src/DataStructures/Node.ts");
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
            var node = new Node_1.Node(concept.typeId, concept, null, null);
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
        if (IdentifierFlags_1.IdentifierFlags.isLocalTypeLoaded) {
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
exports.LocalBinaryTypeTree = LocalBinaryTypeTree;
LocalBinaryTypeTree.LocalTypeRoot = null;


/***/ }),

/***/ "./src/DataStructures/Local/LocalConceptData.ts":
/*!******************************************************!*\
  !*** ./src/DataStructures/Local/LocalConceptData.ts ***!
  \******************************************************/
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
exports.LocalConceptsData = void 0;
const Concept_1 = __webpack_require__(/*! ./../Concept */ "./src/DataStructures/Concept.ts");
const indexdblocal_1 = __webpack_require__(/*! ../../Database/indexdblocal */ "./src/Database/indexdblocal.ts");
const LocalBinaryTree_1 = __webpack_require__(/*! ./LocalBinaryTree */ "./src/DataStructures/Local/LocalBinaryTree.ts");
const LocalBinaryCharacterTree_1 = __webpack_require__(/*! ./LocalBinaryCharacterTree */ "./src/DataStructures/Local/LocalBinaryCharacterTree.ts");
const LocalBinaryTypeTree_1 = __webpack_require__(/*! ./LocalBinaryTypeTree */ "./src/DataStructures/Local/LocalBinaryTypeTree.ts");
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
            (0, indexdblocal_1.storeToDatabase)("localconcept", concept);
            LocalBinaryTree_1.LocalBinaryTree.addConceptToTree(concept);
            LocalBinaryCharacterTree_1.LocalBinaryCharacterTree.addConceptToTree(concept);
            LocalBinaryTypeTree_1.LocalBinaryTypeTree.addConceptToTree(concept);
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
            var myConcept = new Concept_1.Concept(0, 0, 0, 0, 0, 0, 0, 0, "0", 0, 0, 0, 0, 0, 0, false);
            var node = yield LocalBinaryTree_1.LocalBinaryTree.getNodeFromTree(id);
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
            var concept = new Concept_1.Concept(0, 0, 0, 0, 0, 0, 0, 0, "0", 0, 0, 0, 0, 0, 0, false);
            //  for(var i=0; i<this.conceptsArray.length; i++){
            //      if(this.conceptsArray[i].characterValue == characterValue){
            //         concept = this.conceptsArray[i];
            //      }
            //  }
            var Node = LocalBinaryCharacterTree_1.LocalBinaryCharacterTree.getNodeFromTree(characterValue);
            if (Node) {
                console.log("got the character");
                concept = Node.value;
            }
            return concept;
        });
    }
    static GetConceptByCharacterAndTypeLocal(character_value, typeId) {
        return __awaiter(this, void 0, void 0, function* () {
            var concept = new Concept_1.Concept(0, 0, 0, 0, 0, 0, 0, 0, "0", 0, 0, 0, 0, 0, 0, false);
            // let conceptList:Concept[] = await this.GetConceptsByTypeId(typeId);
            // for(var i=0;i<conceptList.length; i++){
            //     if(character_value == conceptList[i].characterValue){
            //         concept = conceptList[i];
            //     }
            // }
            var Node = yield LocalBinaryCharacterTree_1.LocalBinaryCharacterTree.getCharacterAndTypeFromTree(character_value, typeId);
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
            ConceptList = yield LocalBinaryTypeTree_1.LocalBinaryTypeTree.getTypeVariantsFromTreeWithUserId(typeId, userId);
            return ConceptList;
        });
    }
    getName() {
        return this.name;
    }
}
exports.LocalConceptsData = LocalConceptsData;
LocalConceptsData.localconceptsArray = [];


/***/ }),

/***/ "./src/DataStructures/Local/LocalConnectionData.ts":
/*!*********************************************************!*\
  !*** ./src/DataStructures/Local/LocalConnectionData.ts ***!
  \*********************************************************/
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
exports.LocalConnectionData = void 0;
const indexdblocal_1 = __webpack_require__(/*! ../../Database/indexdblocal */ "./src/Database/indexdblocal.ts");
const IdentifierFlags_1 = __webpack_require__(/*! ../IdentifierFlags */ "./src/DataStructures/IdentifierFlags.ts");
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
            (0, indexdblocal_1.storeToDatabase)("localconnection", connection);
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
        if (IdentifierFlags_1.IdentifierFlags.isLocalConnectionLoaded) {
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
exports.LocalConnectionData = LocalConnectionData;
LocalConnectionData.connectionArray = [];
LocalConnectionData.connectionDictionary = [];


/***/ }),

/***/ "./src/DataStructures/Node.ts":
/*!************************************!*\
  !*** ./src/DataStructures/Node.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Node = void 0;
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
exports.Node = Node;


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

/***/ "./src/DataStructures/Returner.ts":
/*!****************************************!*\
  !*** ./src/DataStructures/Returner.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Returner = void 0;
class Returner {
    constructor(id, userId, referentId, isNew) {
        this.id = id;
        this.userId = userId;
        this.referentId = referentId;
        this.isNew = isNew;
    }
}
exports.Returner = Returner;


/***/ }),

/***/ "./src/DataStructures/SettingData.ts":
/*!*******************************************!*\
  !*** ./src/DataStructures/SettingData.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SettingData = void 0;
class SettingData {
    constructor(isOnlineSync) {
        this.id = 1;
        this.isOnlineSync = false;
        this.isOnlineSync = isOnlineSync;
    }
}
exports.SettingData = SettingData;


/***/ }),

/***/ "./src/DataStructures/Settings.ts":
/*!****************************************!*\
  !*** ./src/DataStructures/Settings.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Settings = void 0;
class Settings {
}
exports.Settings = Settings;
Settings.isUpdated = false;
Settings.isOnlineSync = false;


/***/ }),

/***/ "./src/DataStructures/SyncData.ts":
/*!****************************************!*\
  !*** ./src/DataStructures/SyncData.ts ***!
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
exports.SyncData = void 0;
const indexeddb_1 = __webpack_require__(/*! ./../Database/indexeddb */ "./src/Database/indexeddb.ts");
const CreateTheConceptApi_1 = __webpack_require__(/*! ../Api/Create/CreateTheConceptApi */ "./src/Api/Create/CreateTheConceptApi.ts");
const CreateTheConnectionApi_1 = __webpack_require__(/*! ../Api/Create/CreateTheConnectionApi */ "./src/Api/Create/CreateTheConnectionApi.ts");
const ConceptData_1 = __webpack_require__(/*! ./ConceptData */ "./src/DataStructures/ConceptData.ts");
const ConnectionData_1 = __webpack_require__(/*! ./ConnectionData */ "./src/DataStructures/ConnectionData.ts");
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
                ConceptData_1.ConceptsData.AddConcept(this.conceptsSyncArray[i]);
            }
            for (let i = 0; i < this.connectionSyncArray.length; i++) {
                ConnectionData_1.ConnectionData.AddConnection(this.connectionSyncArray[i]);
            }
            if (this.conceptsSyncArray.length > 0) {
                yield (0, CreateTheConceptApi_1.CreateTheConceptApi)(this.conceptsSyncArray);
                this.conceptsSyncArray = [];
            }
            if (this.connectionSyncArray.length > 0) {
                yield (0, CreateTheConnectionApi_1.CreateTheConnectionApi)(this.connectionSyncArray);
                this.connectionSyncArray = [];
            }
            return "done";
        });
    }
    static syncDataLocalDb() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.conceptsSyncArray.length > 0) {
                for (let i = 0; i < this.conceptsSyncArray.length; i++) {
                    (0, indexeddb_1.storeToDatabase)("localconcept", this.conceptsSyncArray[i]);
                }
                this.conceptsSyncArray = [];
            }
            if (this.connectionSyncArray.length > 0) {
                for (let i = 0; i < this.connectionSyncArray.length; i++) {
                    (0, indexeddb_1.storeToDatabase)("localconnection", this.connectionSyncArray[i]);
                }
                this.connectionSyncArray = [];
                console.log(this.connectionSyncArray);
            }
            return "done";
        });
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

/***/ "./src/Database/indexdblocal.ts":
/*!**************************************!*\
  !*** ./src/Database/indexdblocal.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports) {


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
exports.removeFromDatabase = exports.getAllFromLocalDb = exports.storeToDatabase = exports.openDatabase = void 0;
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
exports.openDatabase = openDatabase;
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
exports.storeToDatabase = storeToDatabase;
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
exports.getAllFromLocalDb = getAllFromLocalDb;
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
exports.removeFromDatabase = removeFromDatabase;


/***/ }),

/***/ "./src/Database/indexeddb.ts":
/*!***********************************!*\
  !*** ./src/Database/indexeddb.ts ***!
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
exports.removeFromDatabase = exports.getFromDatabaseWithTypeOld = exports.getFromDatabaseWithType = exports.AiUpdateFlag = exports.GetStatsFromDatabase = exports.getFromDatabase = exports.storeToDatabase = exports.openDatabase = void 0;
const SettingData_1 = __webpack_require__(/*! ../DataStructures/SettingData */ "./src/DataStructures/SettingData.ts");
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
exports.openDatabase = openDatabase;
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
exports.storeToDatabase = storeToDatabase;
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
exports.getFromDatabase = getFromDatabase;
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
                var settingsData = new SettingData_1.SettingData(false);
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
exports.GetStatsFromDatabase = GetStatsFromDatabase;
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
exports.AiUpdateFlag = AiUpdateFlag;
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
exports.getFromDatabaseWithType = getFromDatabaseWithType;
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
exports.getFromDatabaseWithTypeOld = getFromDatabaseWithTypeOld;
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
exports.removeFromDatabase = removeFromDatabase;


/***/ }),

/***/ "./src/Services/CreateBinaryTreeFromData.ts":
/*!**************************************************!*\
  !*** ./src/Services/CreateBinaryTreeFromData.ts ***!
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
const BinaryTree_1 = __webpack_require__(/*! ../DataStructures/BinaryTree */ "./src/DataStructures/BinaryTree.ts");
const Node_1 = __webpack_require__(/*! ../DataStructures/Node */ "./src/DataStructures/Node.ts");
const app_1 = __webpack_require__(/*! ../app */ "./src/app.ts");
function CreateBinaryTreeFromData() {
    return __awaiter(this, void 0, void 0, function* () {
        var startTime = new Date().getTime();
        var conceptList = yield (0, app_1.getFromDatabaseWithTypeOld)("concept");
        if (Array.isArray(conceptList)) {
            for (var i = 0; i < conceptList.length; i++) {
                let concept = conceptList[i];
                let node = new Node_1.Node(concept.id, concept, null, null);
                BinaryTree_1.BinaryTree.addNodeToTree(node);
            }
        }
        var endTime = new Date().getTime();
        var time = endTime - startTime;
    });
}
exports["default"] = CreateBinaryTreeFromData;


/***/ }),

/***/ "./src/Services/CreateCharacterBinaryTreeFromData.ts":
/*!***********************************************************!*\
  !*** ./src/Services/CreateCharacterBinaryTreeFromData.ts ***!
  \***********************************************************/
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
exports.CreateCharacterBinaryTreeFromData = void 0;
const BinaryCharacterTree_1 = __webpack_require__(/*! ../DataStructures/BinaryCharacterTree */ "./src/DataStructures/BinaryCharacterTree.ts");
const Node_1 = __webpack_require__(/*! ../DataStructures/Node */ "./src/DataStructures/Node.ts");
const app_1 = __webpack_require__(/*! ../app */ "./src/app.ts");
function CreateCharacterBinaryTreeFromData() {
    return __awaiter(this, void 0, void 0, function* () {
        var tree = new BinaryCharacterTree_1.BinaryCharacterTree();
        var startTime = new Date().getTime();
        var conceptList = yield (0, app_1.getFromDatabaseWithTypeOld)("concept");
        if (Array.isArray(conceptList)) {
            for (var i = 0; i < conceptList.length; i++) {
                let concept = conceptList[i];
                let node = new Node_1.Node(concept.characterValue, concept, null, null);
                BinaryCharacterTree_1.BinaryCharacterTree.addNodeToTree(node);
            }
        }
        console.log("what is this");
        console.log(BinaryCharacterTree_1.BinaryCharacterTree.characterRoot);
        var endTime = new Date().getTime();
        var time = endTime - startTime;
    });
}
exports.CreateCharacterBinaryTreeFromData = CreateCharacterBinaryTreeFromData;


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
            var connectionConceptReverse = yield (0, MakeTheInstanceConcept_1.default)("connection", backwardLinker, false, 999, 999, 999);
            var newConnection = new Connection_1.Connection(0, concept2Data.id, concept1Data.id, concept2Data.userId, concept1Data.userId, concept2Data.userId, connectionConceptReverse.id, connectionConceptReverse.userId, 1000, userId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId);
            SyncData_1.SyncData.AddConnection(newConnection);
        }
        let prefix = ((_b = concept1Data.type) === null || _b === void 0 ? void 0 : _b.characterValue) + "_s";
        let linkerAdd = linker + "_s";
        let forwardLinker = prefix + "_" + linkerAdd;
        var connectionConcept = yield (0, MakeTheInstanceConcept_1.default)("connection", forwardLinker, false, 999, 999, 999);
        var newConnection = new Connection_1.Connection(0, concept1Data.id, concept2Data.id, concept1Data.userId, concept2Data.userId, concept1Data.userId, connectionConcept.id, connectionConcept.userId, 1000, userId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId);
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
const Concept_1 = __webpack_require__(/*! ../DataStructures/Concept */ "./src/DataStructures/Concept.ts");
const CreateTheConnection_1 = __importDefault(__webpack_require__(/*! ./CreateTheConnection */ "./src/Services/CreateTheConnection.ts"));
const MakeTheInstanceConcept_1 = __importDefault(__webpack_require__(/*! ./MakeTheInstanceConcept */ "./src/Services/MakeTheInstanceConcept.ts"));
function CreateTheComposition(json, ofTheConceptId = null, ofTheConceptUserId = null, mainKey = null, userId = null, accessId = null, sessionInformationId = null) {
    return __awaiter(this, void 0, void 0, function* () {
        var localUserId = userId !== null && userId !== void 0 ? userId : 10267;
        var localAccessId = accessId !== null && accessId !== void 0 ? accessId : 10267;
        var localSessionId = sessionInformationId !== null && sessionInformationId !== void 0 ? sessionInformationId : 10267;
        var MainKeyLocal = mainKey !== null && mainKey !== void 0 ? mainKey : 0;
        var MainConcept = new Concept_1.Concept(0, 0, 0, 0, 0, 0, 0, 0, "0", 0, 0, 0, 0, 0, 0, false);
        for (const key in json) {
            if (typeof json[key] != 'string' && typeof json[key] != 'number') {
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
        var isNew = true;
        var concept = new Concept_1.Concept(id, userId, typeId, typeUserId, categoryId, categoryUserId, referentId, referentUserId, referent, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId, isNew);
        concept.isTemp = true;
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
    if (ofTheConceptId != toTheConceptId) {
        var connection = new Connection_1.Connection(0, ofTheConceptId, toTheConceptId, ofTheConceptUserId, toTheConceptUserId, userId, typeId, typeUserId, orderId, orderUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId);
        connection.isTemp = true;
        connection.id = Math.floor(Math.random() * 100000000);
        SyncData_1.SyncData.AddConnection(connection);
    }
}
exports["default"] = createTheConnection;


/***/ }),

/***/ "./src/Services/CreateTypeTreeFromData.ts":
/*!************************************************!*\
  !*** ./src/Services/CreateTypeTreeFromData.ts ***!
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateTypeTreeFromData = void 0;
const BinaryTypeTree_1 = __webpack_require__(/*! ../DataStructures/BinaryTypeTree */ "./src/DataStructures/BinaryTypeTree.ts");
const Node_1 = __webpack_require__(/*! ../DataStructures/Node */ "./src/DataStructures/Node.ts");
const app_1 = __webpack_require__(/*! ../app */ "./src/app.ts");
function CreateTypeTreeFromData() {
    return __awaiter(this, void 0, void 0, function* () {
        var startTime = new Date().getTime();
        var conceptList = yield (0, app_1.getFromDatabaseWithTypeOld)("concept");
        if (Array.isArray(conceptList)) {
            for (var i = 0; i < conceptList.length; i++) {
                let concept = conceptList[i];
                let node = new Node_1.Node(concept.typeId, concept, null, null);
                BinaryTypeTree_1.BinaryTypeTree.addNodeToTree(node);
            }
        }
        console.log("what is this");
        console.log(BinaryTypeTree_1.BinaryTypeTree.typeRoot);
        var endTime = new Date().getTime();
        var time = endTime - startTime;
    });
}
exports.CreateTypeTreeFromData = CreateTypeTreeFromData;


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
exports.GetCompositionWithId = exports.GetComposition = void 0;
const GetConcept_1 = __webpack_require__(/*! ../Api/GetConcept */ "./src/Api/GetConcept.ts");
const GetAllConnectionsOfComposition_1 = __webpack_require__(/*! ../Api/GetAllConnectionsOfComposition */ "./src/Api/GetAllConnectionsOfComposition.ts");
const ConceptData_1 = __webpack_require__(/*! ../DataStructures/ConceptData */ "./src/DataStructures/ConceptData.ts");
function GetComposition(id) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        var connectionList = [];
        var returnOutput = {};
        var connectionListString = yield (0, GetAllConnectionsOfComposition_1.GetAllConnectionsOfComposition)(id);
        connectionList = connectionListString;
        //connectionList = ConnectionData.GetConnectionsOfComposition(id);
        var compositionList = [];
        for (var i = 0; i < connectionList.length; i++) {
            if (!compositionList.includes(connectionList[i].ofTheConceptId)) {
                compositionList.push(connectionList[i].ofTheConceptId);
            }
        }
        var concept = yield ConceptData_1.ConceptsData.GetConcept(id);
        if (concept == null && id != null && id != undefined) {
            var conceptString = yield (0, GetConcept_1.GetConcept)(id);
            concept = conceptString;
        }
        var output = yield recursiveFetch(id, connectionList, compositionList);
        var mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "";
        returnOutput[mainString] = output;
        return returnOutput;
    });
}
exports.GetComposition = GetComposition;
function GetCompositionWithId(id) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        var connectionList = [];
        var returnOutput = {};
        var connectionListString = yield (0, GetAllConnectionsOfComposition_1.GetAllConnectionsOfComposition)(id);
        connectionList = connectionListString;
        var compositionList = [];
        for (var i = 0; i < connectionList.length; i++) {
            if (!compositionList.includes(connectionList[i].ofTheConceptId)) {
                compositionList.push(connectionList[i].ofTheConceptId);
            }
        }
        var concept = yield ConceptData_1.ConceptsData.GetConcept(id);
        if (concept == null && id != null && id != undefined) {
            var conceptString = yield (0, GetConcept_1.GetConcept)(id);
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
exports.GetCompositionWithId = GetCompositionWithId;
function recursiveFetch(id, connectionList, compositionList) {
    var _a, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function* () {
        var output = {};
        var arroutput = [];
        var concept = yield ConceptData_1.ConceptsData.GetConcept(id);
        if ((concept == null || concept.id == 0) && id != null && id != undefined) {
            var conceptString = yield (0, GetConcept_1.GetConcept)(id);
            concept = conceptString;
        }
        if (concept) {
            if (concept.type == null) {
                var toConceptTypeId = concept.typeId;
                var toConceptType = yield ConceptData_1.ConceptsData.GetConcept(toConceptTypeId);
                concept.type = toConceptType;
                if (toConceptType == null && toConceptTypeId != null && toConceptTypeId != undefined) {
                    var conceptString = yield (0, GetConcept_1.GetConcept)(toConceptTypeId);
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
                    var toConcept = yield ConceptData_1.ConceptsData.GetConcept(toConceptId);
                    if ((toConcept == null || toConcept.id == 0) && toConceptId != null && toConceptId != undefined) {
                        var conceptString = yield (0, GetConcept_1.GetConcept)(toConceptId);
                        toConcept = conceptString;
                    }
                    if (toConcept) {
                        if ((toConcept === null || toConcept === void 0 ? void 0 : toConcept.type) == null) {
                            var toConceptTypeId = toConcept.typeId;
                            var toConceptType = yield ConceptData_1.ConceptsData.GetConcept(toConceptTypeId);
                            toConcept.type = toConceptType;
                            if (toConceptType == null && toConceptTypeId != null && toConceptTypeId != undefined) {
                                var conceptString = yield (0, GetConcept_1.GetConcept)(toConceptTypeId);
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
exports.GetCompositionListWithId = exports.GetCompositionList = void 0;
const GetAllConceptsByType_1 = __webpack_require__(/*! ../Api/GetAllConceptsByType */ "./src/Api/GetAllConceptsByType.ts");
const ConceptData_1 = __webpack_require__(/*! ../DataStructures/ConceptData */ "./src/DataStructures/ConceptData.ts");
const GetComposition_1 = __webpack_require__(/*! ./GetComposition */ "./src/Services/GetComposition.ts");
const GetConceptByCharacter_1 = __importDefault(__webpack_require__(/*! ./GetConceptByCharacter */ "./src/Services/GetConceptByCharacter.ts"));
function GetCompositionList(compositionName, userId, inpage = 10, page = 1) {
    return __awaiter(this, void 0, void 0, function* () {
        var concept = yield (0, GetConceptByCharacter_1.default)(compositionName);
        var CompositionList = [];
        if (concept) {
            yield (0, GetAllConceptsByType_1.GetAllConceptsByType)(compositionName, userId);
            var conceptList = yield ConceptData_1.ConceptsData.GetConceptsByTypeIdAndUser(concept.id, userId);
            console.log("this is the listed data", conceptList);
            var startPage = inpage * (page - 1);
            for (var i = startPage; i < startPage + inpage; i++) {
                if (conceptList[i]) {
                    var compositionJson = yield (0, GetComposition_1.GetComposition)(conceptList[i].id);
                    CompositionList.push(compositionJson);
                }
            }
        }
        return CompositionList;
    });
}
exports.GetCompositionList = GetCompositionList;
function GetCompositionListWithId(compositionName, userId, inpage = 10, page = 1) {
    return __awaiter(this, void 0, void 0, function* () {
        var concept = yield (0, GetConceptByCharacter_1.default)(compositionName);
        var CompositionList = [];
        console.log("what a list", concept);
        if (concept) {
            yield (0, GetAllConceptsByType_1.GetAllConceptsByType)(compositionName, userId);
            var conceptList = yield ConceptData_1.ConceptsData.GetConceptsByTypeIdAndUser(concept.id, userId);
            var startPage = inpage * (page - 1);
            for (var i = startPage; i < startPage + inpage; i++) {
                if (conceptList[i]) {
                    var compositionJson = yield (0, GetComposition_1.GetCompositionWithId)(conceptList[i].id);
                    CompositionList.push(compositionJson);
                }
            }
        }
        return CompositionList;
    });
}
exports.GetCompositionListWithId = GetCompositionListWithId;


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
        var concept = yield ConceptData_1.ConceptsData.GetConceptByCharacter(characterValue);
        var literalCharacter = `${characterValue}`;
        if ((concept == null || (concept === null || concept === void 0 ? void 0 : concept.id) == 0) && literalCharacter) {
            yield (0, GetConceptByCharacterValue_1.GetConceptByCharacterValue)(characterValue);
            concept = yield ConceptData_1.ConceptsData.GetConceptByCharacter(characterValue);
        }
        return concept;
    });
}
exports["default"] = GetConceptByCharacter;


/***/ }),

/***/ "./src/Services/GetDataFromIndexDb.ts":
/*!********************************************!*\
  !*** ./src/Services/GetDataFromIndexDb.ts ***!
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetDataFromIndexDbLocal = exports.GetDataFromIndexDb = void 0;
const ConceptData_1 = __webpack_require__(/*! ../DataStructures/ConceptData */ "./src/DataStructures/ConceptData.ts");
const ConnectionData_1 = __webpack_require__(/*! ../DataStructures/ConnectionData */ "./src/DataStructures/ConnectionData.ts");
const LocalConnectionData_1 = __webpack_require__(/*! ../DataStructures/Local/LocalConnectionData */ "./src/DataStructures/Local/LocalConnectionData.ts");
const indexdblocal_1 = __webpack_require__(/*! ../Database/indexdblocal */ "./src/Database/indexdblocal.ts");
const indexeddb_1 = __webpack_require__(/*! ../Database/indexeddb */ "./src/Database/indexeddb.ts");
function GetDataFromIndexDb() {
    return __awaiter(this, void 0, void 0, function* () {
        var conceptList = yield (0, indexeddb_1.getFromDatabaseWithTypeOld)("concept");
        GetConnectionsFromIndexDb();
        console.log(conceptList);
        if (Array.isArray(conceptList)) {
            for (var i = 0; i < conceptList.length; i++) {
                ConceptData_1.ConceptsData.AddConcept(conceptList[i]);
            }
        }
    });
}
exports.GetDataFromIndexDb = GetDataFromIndexDb;
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
exports.GetDataFromIndexDbLocal = GetDataFromIndexDbLocal;
function GetConnectionsFromIndexDb() {
    return __awaiter(this, void 0, void 0, function* () {
        var connectionList = yield (0, indexeddb_1.getFromDatabaseWithTypeOld)("connection");
        if (Array.isArray(connectionList)) {
            for (var i = 0; i < connectionList.length; i++) {
                ConnectionData_1.ConnectionData.AddConnection(connectionList[i]);
            }
        }
    });
}
function GetConnectionsFromIndexDbLocal() {
    return __awaiter(this, void 0, void 0, function* () {
        var connectionList = yield (0, indexdblocal_1.getAllFromLocalDb)("localconnection");
        if (Array.isArray(connectionList)) {
            for (var i = 0; i < connectionList.length; i++) {
                LocalConnectionData_1.LocalConnectionData.AddConnection(connectionList[i]);
            }
        }
    });
}


/***/ }),

/***/ "./src/Services/GetLink.ts":
/*!*********************************!*\
  !*** ./src/Services/GetLink.ts ***!
  \*********************************/
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
exports.GetLink = void 0;
const GetConceptByCharacterAndType_1 = __webpack_require__(/*! ../Api/GetConceptByCharacterAndType */ "./src/Api/GetConceptByCharacterAndType.ts");
const GetConnectionOfTheConcept_1 = __webpack_require__(/*! ../Api/GetConnectionOfTheConcept */ "./src/Api/GetConnectionOfTheConcept.ts");
const GetComposition_1 = __webpack_require__(/*! ./GetComposition */ "./src/Services/GetComposition.ts");
const GetTheConcept_1 = __importDefault(__webpack_require__(/*! ./GetTheConcept */ "./src/Services/GetTheConcept.ts"));
function GetLink(id, linker) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        var output = [];
        var concept = yield (0, GetTheConcept_1.default)(id);
        var linkString = ((_a = concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) + "_s" + "_" + linker;
        var relatedConceptString = yield (0, GetConceptByCharacterAndType_1.GetConceptByCharacterAndType)(linkString, 16);
        var relatedConcept = relatedConceptString;
        if (relatedConcept.id > 0) {
            var connectionsString = yield (0, GetConnectionOfTheConcept_1.GetConnectionOfTheConcept)(relatedConcept.id, concept.id, concept.userId);
            var connections = connectionsString;
            for (var i = 0; i < connections.length; i++) {
                let toConceptId = connections[i].toTheConceptId;
                let toConcept = yield (0, GetTheConcept_1.default)(toConceptId);
                let newComposition = yield (0, GetComposition_1.GetCompositionWithId)(toConcept.id);
                output.push(newComposition);
            }
        }
        return output;
    });
}
exports.GetLink = GetLink;


/***/ }),

/***/ "./src/Services/GetTheConcept.ts":
/*!***************************************!*\
  !*** ./src/Services/GetTheConcept.ts ***!
  \***************************************/
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
const GetConcept_1 = __webpack_require__(/*! ../Api/GetConcept */ "./src/Api/GetConcept.ts");
const Concept_1 = __webpack_require__(/*! ../DataStructures/Concept */ "./src/DataStructures/Concept.ts");
const ConceptData_1 = __webpack_require__(/*! ../DataStructures/ConceptData */ "./src/DataStructures/ConceptData.ts");
function GetTheConcept(id) {
    return __awaiter(this, void 0, void 0, function* () {
        var concept = new Concept_1.Concept(0, 0, 0, 0, 0, 0, 0, 0, "0", 0, 0, 0, 0, 0, 0, false);
        concept = yield ConceptData_1.ConceptsData.GetConcept(id);
        if ((concept == null || concept.id == 0) && id != null && id != undefined) {
            var conceptString = yield (0, GetConcept_1.GetConcept)(id);
            concept = conceptString;
        }
        if (concept) {
            if (concept.type == null) {
                var conceptType = yield ConceptData_1.ConceptsData.GetConcept(concept.typeId);
                if (conceptType == null && concept.typeId != null && concept.typeId != undefined) {
                    var typeConceptString = yield (0, GetConcept_1.GetConcept)(concept.typeId);
                    var typeConcept = typeConceptString;
                    concept.type = typeConcept;
                }
            }
        }
        return concept;
    });
}
exports["default"] = GetTheConcept;


/***/ }),

/***/ "./src/Services/GetTheReferent.ts":
/*!****************************************!*\
  !*** ./src/Services/GetTheReferent.ts ***!
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
const GetTheConcept_1 = __importDefault(__webpack_require__(/*! ./GetTheConcept */ "./src/Services/GetTheConcept.ts"));
function GetTheReferent(id, userId, referentId) {
    return __awaiter(this, void 0, void 0, function* () {
        var myref = referentId !== null && referentId !== void 0 ? referentId : 0;
        var referent = yield (0, GetTheConcept_1.default)(referentId);
        //var result: ReferentInfo = new ReferentInfo(referent.id, referent.userId, referent.referentId, referent.referentUserId);
        return referent;
    });
}
exports["default"] = GetTheReferent;


/***/ }),

/***/ "./src/Services/InitializeSystem.ts":
/*!******************************************!*\
  !*** ./src/Services/InitializeSystem.ts ***!
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
exports.PurgatoryDatabaseUpdated = void 0;
const GetAiData_1 = __webpack_require__(/*! ../Api/GetAiData */ "./src/Api/GetAiData.ts");
const SettingData_1 = __webpack_require__(/*! ../DataStructures/SettingData */ "./src/DataStructures/SettingData.ts");
const Settings_1 = __webpack_require__(/*! ../DataStructures/Settings */ "./src/DataStructures/Settings.ts");
const indexeddb_1 = __webpack_require__(/*! ../Database/indexeddb */ "./src/Database/indexeddb.ts");
function InitializeSystem() {
    return __awaiter(this, void 0, void 0, function* () {
        var statsData = yield (0, indexeddb_1.GetStatsFromDatabase)();
        var settings = statsData;
        if (!settings.isOnlineSync) {
            console.log("getting the ai data");
            yield (0, GetAiData_1.GetAiData)();
        }
        else {
            return true;
        }
    });
}
exports["default"] = InitializeSystem;
function PurgatoryDatabaseUpdated() {
    return __awaiter(this, void 0, void 0, function* () {
        Settings_1.Settings.isOnlineSync = true;
        var settingData = new SettingData_1.SettingData(Settings_1.Settings.isOnlineSync);
        (0, indexeddb_1.AiUpdateFlag)(settingData);
    });
}
exports.PurgatoryDatabaseUpdated = PurgatoryDatabaseUpdated;


/***/ }),

/***/ "./src/Services/Local/CreateLocalBinaryTreeFromData.ts":
/*!*************************************************************!*\
  !*** ./src/Services/Local/CreateLocalBinaryTreeFromData.ts ***!
  \*************************************************************/
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
const LocalBinaryTree_1 = __webpack_require__(/*! ../../DataStructures/Local/LocalBinaryTree */ "./src/DataStructures/Local/LocalBinaryTree.ts");
const Node_1 = __webpack_require__(/*! ../../DataStructures/Node */ "./src/DataStructures/Node.ts");
const indexdblocal_1 = __webpack_require__(/*! ../../Database/indexdblocal */ "./src/Database/indexdblocal.ts");
function CreateLocalBinaryTreeFromData() {
    return __awaiter(this, void 0, void 0, function* () {
        var startTime = new Date().getTime();
        var conceptList = yield (0, indexdblocal_1.getAllFromLocalDb)("localconcept");
        if (Array.isArray(conceptList)) {
            for (var i = 0; i < conceptList.length; i++) {
                let concept = conceptList[i];
                let node = new Node_1.Node(concept.id, concept, null, null);
                LocalBinaryTree_1.LocalBinaryTree.addNodeToTree(node);
            }
        }
        var endTime = new Date().getTime();
        var time = endTime - startTime;
    });
}
exports["default"] = CreateLocalBinaryTreeFromData;


/***/ }),

/***/ "./src/Services/Local/CreateLocalBinaryTypeTreeFromData.ts":
/*!*****************************************************************!*\
  !*** ./src/Services/Local/CreateLocalBinaryTypeTreeFromData.ts ***!
  \*****************************************************************/
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
exports.CreateLocalBinaryTypeTreeFromData = void 0;
const LocalBinaryTypeTree_1 = __webpack_require__(/*! ../../DataStructures/Local/LocalBinaryTypeTree */ "./src/DataStructures/Local/LocalBinaryTypeTree.ts");
const Node_1 = __webpack_require__(/*! ../../DataStructures/Node */ "./src/DataStructures/Node.ts");
const indexdblocal_1 = __webpack_require__(/*! ../../Database/indexdblocal */ "./src/Database/indexdblocal.ts");
function CreateLocalBinaryTypeTreeFromData() {
    return __awaiter(this, void 0, void 0, function* () {
        var startTime = new Date().getTime();
        var conceptList = yield (0, indexdblocal_1.getAllFromLocalDb)("localconcept");
        if (Array.isArray(conceptList)) {
            for (var i = 0; i < conceptList.length; i++) {
                let concept = conceptList[i];
                let node = new Node_1.Node(concept.typeId, concept, null, null);
                LocalBinaryTypeTree_1.LocalBinaryTypeTree.addNodeToTree(node);
            }
        }
        console.log(LocalBinaryTypeTree_1.LocalBinaryTypeTree.LocalTypeRoot);
        var endTime = new Date().getTime();
        var time = endTime - startTime;
    });
}
exports.CreateLocalBinaryTypeTreeFromData = CreateLocalBinaryTypeTreeFromData;


/***/ }),

/***/ "./src/Services/Local/CreateLocalCharacterBinaryTree.ts":
/*!**************************************************************!*\
  !*** ./src/Services/Local/CreateLocalCharacterBinaryTree.ts ***!
  \**************************************************************/
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
exports.CreateLocalCharacterBinaryTreeFromData = void 0;
const LocalBinaryCharacterTree_1 = __webpack_require__(/*! ../../DataStructures/Local/LocalBinaryCharacterTree */ "./src/DataStructures/Local/LocalBinaryCharacterTree.ts");
const Node_1 = __webpack_require__(/*! ../../DataStructures/Node */ "./src/DataStructures/Node.ts");
const indexdblocal_1 = __webpack_require__(/*! ../../Database/indexdblocal */ "./src/Database/indexdblocal.ts");
function CreateLocalCharacterBinaryTreeFromData() {
    return __awaiter(this, void 0, void 0, function* () {
        var startTime = new Date().getTime();
        var conceptList = yield (0, indexdblocal_1.getAllFromLocalDb)("localconcept");
        if (Array.isArray(conceptList)) {
            for (var i = 0; i < conceptList.length; i++) {
                let concept = conceptList[i];
                let node = new Node_1.Node(concept.characterValue, concept, null, null);
                LocalBinaryCharacterTree_1.LocalBinaryCharacterTree.addNodeToTree(node);
            }
        }
        console.log("what is this");
        console.log(LocalBinaryCharacterTree_1.LocalBinaryCharacterTree.LocalCharacterRoot);
        var endTime = new Date().getTime();
        var time = endTime - startTime;
    });
}
exports.CreateLocalCharacterBinaryTreeFromData = CreateLocalCharacterBinaryTreeFromData;


/***/ }),

/***/ "./src/Services/Local/CreateTheCompositionLocal.ts":
/*!*********************************************************!*\
  !*** ./src/Services/Local/CreateTheCompositionLocal.ts ***!
  \*********************************************************/
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
exports.CreateTheCompositionLocal = void 0;
const Concept_1 = __webpack_require__(/*! ../../DataStructures/Concept */ "./src/DataStructures/Concept.ts");
const CreateTheConnectionLocal_1 = __importDefault(__webpack_require__(/*! ./CreateTheConnectionLocal */ "./src/Services/Local/CreateTheConnectionLocal.ts"));
const MakeTheInstanceConceptLocal_1 = __webpack_require__(/*! ./MakeTheInstanceConceptLocal */ "./src/Services/Local/MakeTheInstanceConceptLocal.ts");
function CreateTheCompositionLocal(json, ofTheConceptId = null, ofTheConceptUserId = null, mainKey = null, userId = null, accessId = null, sessionInformationId = null) {
    return __awaiter(this, void 0, void 0, function* () {
        var localUserId = userId !== null && userId !== void 0 ? userId : 10267;
        var localAccessId = accessId !== null && accessId !== void 0 ? accessId : 10267;
        var localSessionId = sessionInformationId !== null && sessionInformationId !== void 0 ? sessionInformationId : 10267;
        var MainKeyLocal = mainKey !== null && mainKey !== void 0 ? mainKey : 0;
        var MainConcept = new Concept_1.Concept(0, 0, 0, 0, 0, 0, 0, 0, "0", 0, 0, 0, 0, 0, 0, false);
        for (const key in json) {
            if (typeof json[key] != 'string' && typeof json[key] != 'number') {
                if (ofTheConceptId == null && ofTheConceptUserId == null) {
                    var localMainKey = MainKeyLocal;
                    let conceptString = yield (0, MakeTheInstanceConceptLocal_1.MakeTheInstanceConceptLocal)(key, "", true, localUserId, localAccessId, localSessionId);
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
                    var conceptString = yield (0, MakeTheInstanceConceptLocal_1.MakeTheInstanceConceptLocal)(key, "", true, localUserId, localAccessId, localSessionId);
                    var concept = conceptString;
                    yield (0, CreateTheConnectionLocal_1.default)(ofThe, ofTheUser, concept.id, concept.userId, localMainKey, localSessionId, concept.userId);
                    yield CreateTheCompositionLocal(json[key], concept.id, concept.userId, localMainKey, userId, accessId, sessionInformationId);
                }
            }
            else {
                var ofThe = ofTheConceptId !== null && ofTheConceptId !== void 0 ? ofTheConceptId : 999;
                var ofTheUser = ofTheConceptUserId !== null && ofTheConceptUserId !== void 0 ? ofTheConceptUserId : 10267;
                var localMainKey = MainKeyLocal;
                var conceptString = yield (0, MakeTheInstanceConceptLocal_1.MakeTheInstanceConceptLocal)(key, json[key], false, localUserId, localAccessId, localSessionId);
                var concept = conceptString;
                yield (0, CreateTheConnectionLocal_1.default)(ofThe, ofTheUser, concept.id, concept.userId, localMainKey, localSessionId, concept.userId);
            }
        }
        return MainConcept;
    });
}
exports.CreateTheCompositionLocal = CreateTheCompositionLocal;


/***/ }),

/***/ "./src/Services/Local/CreateTheConceptLocal.ts":
/*!*****************************************************!*\
  !*** ./src/Services/Local/CreateTheConceptLocal.ts ***!
  \*****************************************************/
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
const Concept_1 = __webpack_require__(/*! ../../DataStructures/Concept */ "./src/DataStructures/Concept.ts");
const LocalConceptData_1 = __webpack_require__(/*! ../../DataStructures/Local/LocalConceptData */ "./src/DataStructures/Local/LocalConceptData.ts");
const indexdblocal_1 = __webpack_require__(/*! ../../Database/indexdblocal */ "./src/Database/indexdblocal.ts");
function CreateTheConceptLocal(referent, userId, categoryId, categoryUserId, typeId, typeUserId, referentId, referentUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId) {
    return __awaiter(this, void 0, void 0, function* () {
        var id = Math.floor(Math.random() * 100000000);
        var isNew = true;
        var concept = new Concept_1.Concept(id, userId, typeId, typeUserId, categoryId, categoryUserId, referentId, referentUserId, referent, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId, isNew);
        concept.isTemp = true;
        LocalConceptData_1.LocalConceptsData.AddConcept(concept);
        console.log("adding this concept to local");
        console.log(concept);
        (0, indexdblocal_1.storeToDatabase)("localconcept", concept);
        return concept;
    });
}
exports["default"] = CreateTheConceptLocal;


/***/ }),

/***/ "./src/Services/Local/CreateTheConnectionLocal.ts":
/*!********************************************************!*\
  !*** ./src/Services/Local/CreateTheConnectionLocal.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Connection_1 = __webpack_require__(/*! ../../DataStructures/Connection */ "./src/DataStructures/Connection.ts");
const LocalConnectionData_1 = __webpack_require__(/*! ../../DataStructures/Local/LocalConnectionData */ "./src/DataStructures/Local/LocalConnectionData.ts");
const indexdblocal_1 = __webpack_require__(/*! ../../Database/indexdblocal */ "./src/Database/indexdblocal.ts");
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
        var connection = new Connection_1.Connection(0, ofTheConceptId, toTheConceptId, ofTheConceptUserId, toTheConceptUserId, userId, typeId, typeUserId, orderId, orderUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId);
        connection.isTemp = true;
        connection.id = Math.floor(Math.random() * 100000000);
        LocalConnectionData_1.LocalConnectionData.AddConnection(connection);
        (0, indexdblocal_1.storeToDatabase)("localconnection", connection);
    }
}
exports["default"] = CreateTheConnectionLocal;


/***/ }),

/***/ "./src/Services/Local/GetCompositionListLocal.ts":
/*!*******************************************************!*\
  !*** ./src/Services/Local/GetCompositionListLocal.ts ***!
  \*******************************************************/
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
exports.GetCompositionListLocalWithId = exports.GetCompositionListLocal = void 0;
const LocalConceptData_1 = __webpack_require__(/*! ../../DataStructures/Local/LocalConceptData */ "./src/DataStructures/Local/LocalConceptData.ts");
const GetCompositionLocal_1 = __webpack_require__(/*! ./GetCompositionLocal */ "./src/Services/Local/GetCompositionLocal.ts");
const GetConceptByCharacterLocal_1 = __importDefault(__webpack_require__(/*! ./GetConceptByCharacterLocal */ "./src/Services/Local/GetConceptByCharacterLocal.ts"));
function GetCompositionListLocal(compositionName, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        var concept = yield (0, GetConceptByCharacterLocal_1.default)(compositionName);
        var CompositionList = [];
        if (concept) {
            var conceptList = yield LocalConceptData_1.LocalConceptsData.GetConceptsByTypeIdAndUser(concept.id, userId);
            for (var i = 0; i < conceptList.length; i++) {
                var compositionJson = yield (0, GetCompositionLocal_1.GetCompositionLocal)(conceptList[i].id);
                CompositionList.push(compositionJson);
            }
        }
        return CompositionList;
    });
}
exports.GetCompositionListLocal = GetCompositionListLocal;
function GetCompositionListLocalWithId(compositionName, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        var concept = yield (0, GetConceptByCharacterLocal_1.default)(compositionName);
        var CompositionList = [];
        if (concept) {
            var conceptList = yield LocalConceptData_1.LocalConceptsData.GetConceptsByTypeIdAndUser(concept.id, userId);
            for (var i = 0; i < conceptList.length; i++) {
                var compositionJson = yield (0, GetCompositionLocal_1.GetCompositionLocalWithId)(conceptList[i].id);
                CompositionList.push(compositionJson);
            }
        }
        return CompositionList;
    });
}
exports.GetCompositionListLocalWithId = GetCompositionListLocalWithId;


/***/ }),

/***/ "./src/Services/Local/GetCompositionLocal.ts":
/*!***************************************************!*\
  !*** ./src/Services/Local/GetCompositionLocal.ts ***!
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
exports.GetCompositionLocalWithId = exports.GetCompositionLocal = void 0;
const LocalConceptData_1 = __webpack_require__(/*! ../../DataStructures/Local/LocalConceptData */ "./src/DataStructures/Local/LocalConceptData.ts");
const LocalConnectionData_1 = __webpack_require__(/*! ../../DataStructures/Local/LocalConnectionData */ "./src/DataStructures/Local/LocalConnectionData.ts");
function GetCompositionLocal(id) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        var connectionList = [];
        var returnOutput = {};
        connectionList = yield LocalConnectionData_1.LocalConnectionData.GetConnectionsOfCompositionLocal(id);
        //connectionList = ConnectionData.GetConnectionsOfComposition(id);
        var compositionList = [];
        for (var i = 0; i < connectionList.length; i++) {
            if (!compositionList.includes(connectionList[i].ofTheConceptId)) {
                compositionList.push(connectionList[i].ofTheConceptId);
            }
        }
        var concept = yield LocalConceptData_1.LocalConceptsData.GetConcept(id);
        var output = yield recursiveFetchLocal(id, connectionList, compositionList);
        var mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "top";
        returnOutput[mainString] = output;
        return returnOutput;
    });
}
exports.GetCompositionLocal = GetCompositionLocal;
function GetCompositionLocalWithId(id) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        var connectionList = [];
        var returnOutput = {};
        connectionList = yield LocalConnectionData_1.LocalConnectionData.GetConnectionsOfCompositionLocal(id);
        var compositionList = [];
        for (var i = 0; i < connectionList.length; i++) {
            if (!compositionList.includes(connectionList[i].ofTheConceptId)) {
                compositionList.push(connectionList[i].ofTheConceptId);
            }
        }
        var concept = yield LocalConceptData_1.LocalConceptsData.GetConcept(id);
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
exports.GetCompositionLocalWithId = GetCompositionLocalWithId;
function recursiveFetchLocal(id, connectionList, compositionList) {
    var _a, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function* () {
        var output = {};
        var arroutput = [];
        var concept = yield LocalConceptData_1.LocalConceptsData.GetConcept(id);
        if (concept.id != 0) {
            if (concept.type == null) {
                var toConceptTypeId = concept.typeId;
                var toConceptType = yield LocalConceptData_1.LocalConceptsData.GetConcept(toConceptTypeId);
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
                    var toConcept = yield LocalConceptData_1.LocalConceptsData.GetConcept(toConceptId);
                    if (toConcept.id != 0) {
                        if ((toConcept === null || toConcept === void 0 ? void 0 : toConcept.type) == null) {
                            var toConceptTypeId = toConcept.typeId;
                            var toConceptType = yield LocalConceptData_1.LocalConceptsData.GetConcept(toConceptTypeId);
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
const LocalConceptData_1 = __webpack_require__(/*! ../../DataStructures/Local/LocalConceptData */ "./src/DataStructures/Local/LocalConceptData.ts");
function GetConceptByCharacterLocal(characterValue) {
    return __awaiter(this, void 0, void 0, function* () {
        var concept = yield LocalConceptData_1.LocalConceptsData.GetConceptByCharacter(characterValue);
        return concept;
    });
}
exports["default"] = GetConceptByCharacterLocal;


/***/ }),

/***/ "./src/Services/Local/MakeTheConceptLocal.ts":
/*!***************************************************!*\
  !*** ./src/Services/Local/MakeTheConceptLocal.ts ***!
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const LocalConceptData_1 = __webpack_require__(/*! ../../DataStructures/Local/LocalConceptData */ "./src/DataStructures/Local/LocalConceptData.ts");
const CreateTheConceptLocal_1 = __importDefault(__webpack_require__(/*! ./CreateTheConceptLocal */ "./src/Services/Local/CreateTheConceptLocal.ts"));
function MakeTheConceptLocal(referent, userId, categoryId, categoryUserId, typeId, typeUserId, referentId, referentUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId) {
    return __awaiter(this, void 0, void 0, function* () {
        var conceptString = yield LocalConceptData_1.LocalConceptsData.GetConceptByCharacterAndTypeLocal(referent, typeId);
        var concept = conceptString;
        if (concept.id == 0) {
            conceptString = yield (0, CreateTheConceptLocal_1.default)(referent, userId, categoryId, categoryUserId, typeId, typeUserId, referentId, referentUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId);
            concept = conceptString;
        }
        return concept;
    });
}
exports["default"] = MakeTheConceptLocal;


/***/ }),

/***/ "./src/Services/Local/MakeTheInstanceConceptLocal.ts":
/*!***********************************************************!*\
  !*** ./src/Services/Local/MakeTheInstanceConceptLocal.ts ***!
  \***********************************************************/
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
exports.MakeTheInstanceConceptLocal = void 0;
const CreateTheTextData_1 = __webpack_require__(/*! ../../Api/Create/CreateTheTextData */ "./src/Api/Create/CreateTheTextData.ts");
const TheTexts_1 = __webpack_require__(/*! ../../DataStructures/TheTexts */ "./src/DataStructures/TheTexts.ts");
const CreateTheConcept_1 = __importDefault(__webpack_require__(/*! ../CreateTheConcept */ "./src/Services/CreateTheConcept.ts"));
const CreateTheConceptLocal_1 = __importDefault(__webpack_require__(/*! ./CreateTheConceptLocal */ "./src/Services/Local/CreateTheConceptLocal.ts"));
const MakeTheTypeLocal_1 = __importDefault(__webpack_require__(/*! ./MakeTheTypeLocal */ "./src/Services/Local/MakeTheTypeLocal.ts"));
const LocalConceptData_1 = __webpack_require__(/*! ../../DataStructures/Local/LocalConceptData */ "./src/DataStructures/Local/LocalConceptData.ts");
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
            var typeConceptString = yield (0, MakeTheTypeLocal_1.default)(type, sessionInformationId, userId, userId);
            typeConcept = typeConceptString;
            var conceptString = yield (0, CreateTheConceptLocal_1.default)(referent, userId, categoryId, userId, typeConcept.id, typeConcept.userId, referentId, referentUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId);
            concept = conceptString;
        }
        else if (stringLength > 255) {
            var typeConceptString = yield (0, MakeTheTypeLocal_1.default)(stringToCheck, sessionInformationId, sessionInformationUserId, userId);
            typeConcept = typeConceptString;
            var conceptString = yield (0, CreateTheConcept_1.default)(referent, userId, categoryId, userId, typeConcept.id, typeConcept.userId, referentId, referentUserId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId);
            concept = conceptString;
            var TheTextsData = new TheTexts_1.TheTexts(userId, referent, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId, Date.now().toString(), true);
            var TextDataString = yield (0, CreateTheTextData_1.CreateTextData)(TheTextsData);
            var TextData = TextDataString;
        }
        else {
            var typeConceptString = yield (0, MakeTheTypeLocal_1.default)(stringToCheck, sessionInformationId, sessionInformationUserId, userId);
            typeConcept = typeConceptString;
            var conceptByCharTypeString = yield LocalConceptData_1.LocalConceptsData.GetConceptByCharacterAndTypeLocal(referent, typeConcept.id);
            var conceptTypeCharacter = conceptByCharTypeString;
            // var makeTheNameString = await MakeTheName(referent,userId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId,typeConcept.id, typeConcept.userId,conceptTypeCharacter );
            // var makeTheNameConcept = makeTheNameString as Concept;
            concept = conceptTypeCharacter;
            if (conceptTypeCharacter.id == 0 && conceptTypeCharacter.userId == 0) {
                var conceptString = yield (0, CreateTheConceptLocal_1.default)(referent, userId, categoryId, userId, typeConcept.id, typeConcept.userId, 0, 0, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId);
                concept = conceptString;
            }
        }
        concept.type = typeConcept;
        return concept;
    });
}
exports.MakeTheInstanceConceptLocal = MakeTheInstanceConceptLocal;


/***/ }),

/***/ "./src/Services/Local/MakeTheTypeLocal.ts":
/*!************************************************!*\
  !*** ./src/Services/Local/MakeTheTypeLocal.ts ***!
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
const CreateTheConceptLocal_1 = __importDefault(__webpack_require__(/*! ./CreateTheConceptLocal */ "./src/Services/Local/CreateTheConceptLocal.ts"));
const GetConceptByCharacterLocal_1 = __importDefault(__webpack_require__(/*! ./GetConceptByCharacterLocal */ "./src/Services/Local/GetConceptByCharacterLocal.ts"));
const SplitStrings_1 = __webpack_require__(/*! ../SplitStrings */ "./src/Services/SplitStrings.ts");
const MakeTheConceptLocal_1 = __importDefault(__webpack_require__(/*! ./MakeTheConceptLocal */ "./src/Services/Local/MakeTheConceptLocal.ts"));
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
        var existingConcept = yield (0, GetConceptByCharacterLocal_1.default)(typeString);
        console.log("existing here", typeString);
        console.log(existingConcept);
        if (existingConcept) {
            if (existingConcept.id == 0 || existingConcept.userId == 0) {
                var splittedStringArray = (0, SplitStrings_1.SplitStrings)(typeString);
                if (splittedStringArray[0] == typeString) {
                    var concept = yield (0, MakeTheConceptLocal_1.default)(typeString, userId, 4, userId, 51, userId, referentId, userId, securityId, userId, accessId, userId, sessionId, userId);
                    existingConcept = concept;
                }
                else {
                    var categoryId = 1;
                    var categoryConcept = MakeTheTypeConceptLocal(splittedStringArray[0], sessionId, sessionUserId, userId);
                    var typeConcept = yield MakeTheTypeConceptLocal(splittedStringArray[1], sessionId, sessionUserId, userId);
                    if (typeConcept) {
                        var concept = yield (0, CreateTheConceptLocal_1.default)(typeString, userId, categoryId, userId, typeConcept.id, userId, referentId, userId, securityId, userId, accessId, userId, sessionId, userId);
                        existingConcept = concept;
                    }
                }
            }
        }
        return existingConcept;
    });
}
exports["default"] = MakeTheTypeConceptLocal;


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
        var referentUserId = userId;
        var lengthOfCharacters = the_character_data.length;
        var concept;
        if (lengthOfCharacters == 1) {
            var referentId = the_character_data.charCodeAt(0);
            var typeIdForCharacter = 49;
            var characterDataString = yield (0, MakeTheCharacterData_1.default)(the_character_data, userId, securityId, accessId, sessionId);
            concept = (0, MakeTheConcept_1.default)(the_character_data, userId, categoryId, categoryUserId, referentId, referentUserId, typeIdForCharacter, typeUserId, securityId, securityUserId, accessId, accessUserId, sessionId, sessionUserId);
        }
        else {
            var characterDataString = yield (0, MakeTheCharacterData_1.default)(the_character_data, userId, securityId, accessId, sessionId);
            var characterData = characterDataString;
            if (characterData.isNew) {
                var conceptString = yield (0, MakeTheConcept_1.default)(the_character_data, userId, categoryId, categoryUserId, typeId, typeUserId, characterData.id, characterData.userId, securityId, securityUserId, accessId, accessUserId, sessionId, sessionUserId);
                concept = conceptString;
            }
            else {
                var conceptString = yield (0, MakeTheConcept_1.default)(the_character_data, userId, categoryId, categoryUserId, typeId, typeUserId, characterData.id, characterData.userId, securityId, securityUserId, accessId, accessUserId, sessionId, sessionUserId);
                concept = conceptString;
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
const Concept_1 = __webpack_require__(/*! ../DataStructures/Concept */ "./src/DataStructures/Concept.ts");
const TheTexts_1 = __webpack_require__(/*! ../DataStructures/TheTexts */ "./src/DataStructures/TheTexts.ts");
const CreateTheConcept_1 = __importDefault(__webpack_require__(/*! ./CreateTheConcept */ "./src/Services/CreateTheConcept.ts"));
const MakeTheName_1 = __webpack_require__(/*! ./MakeTheName */ "./src/Services/MakeTheName.ts");
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
        var typeConcept = new Concept_1.Concept(0, 0, 0, 0, 0, 0, 0, 0, "0", 0, 0, 0, 0, 0, 0, false);
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
            console.log("For compsosition", typeConcept);
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
            var makeTheNameString = yield (0, MakeTheName_1.MakeTheName)(referent, userId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId, typeConcept.id, typeConcept.userId, conceptTypeCharacter);
            var makeTheNameConcept = makeTheNameString;
            concept = conceptTypeCharacter;
            if (conceptTypeCharacter.id == 0 && conceptTypeCharacter.userId == 0) {
                var conceptString = yield (0, CreateTheConcept_1.default)(referent, userId, categoryId, userId, typeConcept.id, typeConcept.userId, makeTheNameConcept.id, makeTheNameConcept.userId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId);
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
exports["default"] = MakeTheInstanceConcept;


/***/ }),

/***/ "./src/Services/MakeTheName.ts":
/*!*************************************!*\
  !*** ./src/Services/MakeTheName.ts ***!
  \*************************************/
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
exports.MakeTheName = void 0;
const GetTheReferent_1 = __importDefault(__webpack_require__(/*! ./GetTheReferent */ "./src/Services/GetTheReferent.ts"));
const MakeTheCharacter_1 = __importDefault(__webpack_require__(/*! ./MakeTheCharacter */ "./src/Services/MakeTheCharacter.ts"));
const MakeTheConcept_1 = __importDefault(__webpack_require__(/*! ./MakeTheConcept */ "./src/Services/MakeTheConcept.ts"));
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
            characterConcept = yield (0, GetTheReferent_1.default)(existingConcept.id, existingConcept.userId, existingConcept.referent);
        }
        else {
            characterConcept = (yield (0, MakeTheCharacter_1.default)(theCharacterData, userId, securityId, accessId, accessUserId, sessionId));
            existingConcept = yield (0, MakeTheConcept_1.default)(theCharacterData, userId, categoryId, categoryUserId, nameTypeId, typeUserId, characterConcept.id, characterConcept.userId, securityId, securityUserId, accessId, accessUserId, sessionId, sessionUserId);
        }
        return existingConcept;
    });
}
exports.MakeTheName = MakeTheName;


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
exports.ConceptsData = exports.Concept = exports.SyncData = exports.GetLink = exports.GetConceptByCharacter = exports.CreateTheConnection = exports.getFromDatabaseWithTypeOld = exports.getFromDatabaseWithType = exports.getFromDatabase = exports.storeToDatabase = exports.MakeTheInstanceConceptLocal = exports.MakeTheInstanceConcept = exports.GetTheConcept = exports.CreateConnectionBetweenTwoConcepts = exports.CreateTheCompositionLocal = exports.CreateComposition = exports.GetCompositionLocalWithId = exports.GetCompositionLocal = exports.GetCompositionWithId = exports.GetComposition = exports.GetCompositionListLocalWithId = exports.GetCompositionListLocal = exports.GetCompositionListWithId = exports.GetCompositionList = exports.SplitStrings = void 0;
const CreateBinaryTreeFromData_1 = __importDefault(__webpack_require__(/*! ./Services/CreateBinaryTreeFromData */ "./src/Services/CreateBinaryTreeFromData.ts"));
const CreateCharacterBinaryTreeFromData_1 = __webpack_require__(/*! ./Services/CreateCharacterBinaryTreeFromData */ "./src/Services/CreateCharacterBinaryTreeFromData.ts");
const IdentifierFlags_1 = __webpack_require__(/*! ./DataStructures/IdentifierFlags */ "./src/DataStructures/IdentifierFlags.ts");
var SplitStrings_1 = __webpack_require__(/*! ./Services/SplitStrings */ "./src/Services/SplitStrings.ts");
Object.defineProperty(exports, "SplitStrings", ({ enumerable: true, get: function () { return SplitStrings_1.SplitStrings; } }));
var GetCompositionList_1 = __webpack_require__(/*! ./Services/GetCompositionList */ "./src/Services/GetCompositionList.ts");
Object.defineProperty(exports, "GetCompositionList", ({ enumerable: true, get: function () { return GetCompositionList_1.GetCompositionList; } }));
Object.defineProperty(exports, "GetCompositionListWithId", ({ enumerable: true, get: function () { return GetCompositionList_1.GetCompositionListWithId; } }));
var GetCompositionListLocal_1 = __webpack_require__(/*! ./Services/Local/GetCompositionListLocal */ "./src/Services/Local/GetCompositionListLocal.ts");
Object.defineProperty(exports, "GetCompositionListLocal", ({ enumerable: true, get: function () { return GetCompositionListLocal_1.GetCompositionListLocal; } }));
Object.defineProperty(exports, "GetCompositionListLocalWithId", ({ enumerable: true, get: function () { return GetCompositionListLocal_1.GetCompositionListLocalWithId; } }));
var GetComposition_1 = __webpack_require__(/*! ./Services/GetComposition */ "./src/Services/GetComposition.ts");
Object.defineProperty(exports, "GetComposition", ({ enumerable: true, get: function () { return GetComposition_1.GetComposition; } }));
Object.defineProperty(exports, "GetCompositionWithId", ({ enumerable: true, get: function () { return GetComposition_1.GetCompositionWithId; } }));
var GetCompositionLocal_1 = __webpack_require__(/*! ./Services/Local/GetCompositionLocal */ "./src/Services/Local/GetCompositionLocal.ts");
Object.defineProperty(exports, "GetCompositionLocal", ({ enumerable: true, get: function () { return GetCompositionLocal_1.GetCompositionLocal; } }));
Object.defineProperty(exports, "GetCompositionLocalWithId", ({ enumerable: true, get: function () { return GetCompositionLocal_1.GetCompositionLocalWithId; } }));
var CreateTheComposition_1 = __webpack_require__(/*! ./Services/CreateTheComposition */ "./src/Services/CreateTheComposition.ts");
Object.defineProperty(exports, "CreateComposition", ({ enumerable: true, get: function () { return __importDefault(CreateTheComposition_1).default; } }));
var CreateTheCompositionLocal_1 = __webpack_require__(/*! ./Services/Local/CreateTheCompositionLocal */ "./src/Services/Local/CreateTheCompositionLocal.ts");
Object.defineProperty(exports, "CreateTheCompositionLocal", ({ enumerable: true, get: function () { return CreateTheCompositionLocal_1.CreateTheCompositionLocal; } }));
var CreateConnectionBetweenTwoConcepts_1 = __webpack_require__(/*! ./Services/CreateConnectionBetweenTwoConcepts */ "./src/Services/CreateConnectionBetweenTwoConcepts.ts");
Object.defineProperty(exports, "CreateConnectionBetweenTwoConcepts", ({ enumerable: true, get: function () { return CreateConnectionBetweenTwoConcepts_1.CreateConnectionBetweenTwoConcepts; } }));
var GetTheConcept_1 = __webpack_require__(/*! ./Services/GetTheConcept */ "./src/Services/GetTheConcept.ts");
Object.defineProperty(exports, "GetTheConcept", ({ enumerable: true, get: function () { return __importDefault(GetTheConcept_1).default; } }));
var MakeTheInstanceConcept_1 = __webpack_require__(/*! ./Services/MakeTheInstanceConcept */ "./src/Services/MakeTheInstanceConcept.ts");
Object.defineProperty(exports, "MakeTheInstanceConcept", ({ enumerable: true, get: function () { return __importDefault(MakeTheInstanceConcept_1).default; } }));
var MakeTheInstanceConceptLocal_1 = __webpack_require__(/*! ./Services/Local/MakeTheInstanceConceptLocal */ "./src/Services/Local/MakeTheInstanceConceptLocal.ts");
Object.defineProperty(exports, "MakeTheInstanceConceptLocal", ({ enumerable: true, get: function () { return MakeTheInstanceConceptLocal_1.MakeTheInstanceConceptLocal; } }));
var indexeddb_1 = __webpack_require__(/*! ./Database/indexeddb */ "./src/Database/indexeddb.ts");
Object.defineProperty(exports, "storeToDatabase", ({ enumerable: true, get: function () { return indexeddb_1.storeToDatabase; } }));
Object.defineProperty(exports, "getFromDatabase", ({ enumerable: true, get: function () { return indexeddb_1.getFromDatabase; } }));
Object.defineProperty(exports, "getFromDatabaseWithType", ({ enumerable: true, get: function () { return indexeddb_1.getFromDatabaseWithType; } }));
Object.defineProperty(exports, "getFromDatabaseWithTypeOld", ({ enumerable: true, get: function () { return indexeddb_1.getFromDatabaseWithTypeOld; } }));
var CreateTheConnection_1 = __webpack_require__(/*! ./Services/CreateTheConnection */ "./src/Services/CreateTheConnection.ts");
Object.defineProperty(exports, "CreateTheConnection", ({ enumerable: true, get: function () { return __importDefault(CreateTheConnection_1).default; } }));
var GetConceptByCharacter_1 = __webpack_require__(/*! ./Services/GetConceptByCharacter */ "./src/Services/GetConceptByCharacter.ts");
Object.defineProperty(exports, "GetConceptByCharacter", ({ enumerable: true, get: function () { return __importDefault(GetConceptByCharacter_1).default; } }));
var GetLink_1 = __webpack_require__(/*! ./Services/GetLink */ "./src/Services/GetLink.ts");
Object.defineProperty(exports, "GetLink", ({ enumerable: true, get: function () { return GetLink_1.GetLink; } }));
var SyncData_1 = __webpack_require__(/*! ./DataStructures/SyncData */ "./src/DataStructures/SyncData.ts");
Object.defineProperty(exports, "SyncData", ({ enumerable: true, get: function () { return SyncData_1.SyncData; } }));
var Concept_1 = __webpack_require__(/*! ./DataStructures/Concept */ "./src/DataStructures/Concept.ts");
Object.defineProperty(exports, "Concept", ({ enumerable: true, get: function () { return Concept_1.Concept; } }));
var ConceptData_1 = __webpack_require__(/*! ./DataStructures/ConceptData */ "./src/DataStructures/ConceptData.ts");
Object.defineProperty(exports, "ConceptsData", ({ enumerable: true, get: function () { return ConceptData_1.ConceptsData; } }));
const GetDataFromIndexDb_1 = __webpack_require__(/*! ./Services/GetDataFromIndexDb */ "./src/Services/GetDataFromIndexDb.ts");
const CreateLocalBinaryTreeFromData_1 = __importDefault(__webpack_require__(/*! ./Services/Local/CreateLocalBinaryTreeFromData */ "./src/Services/Local/CreateLocalBinaryTreeFromData.ts"));
const CreateTypeTreeFromData_1 = __webpack_require__(/*! ./Services/CreateTypeTreeFromData */ "./src/Services/CreateTypeTreeFromData.ts");
const CreateLocalCharacterBinaryTree_1 = __webpack_require__(/*! ./Services/Local/CreateLocalCharacterBinaryTree */ "./src/Services/Local/CreateLocalCharacterBinaryTree.ts");
const CreateLocalBinaryTypeTreeFromData_1 = __webpack_require__(/*! ./Services/Local/CreateLocalBinaryTypeTreeFromData */ "./src/Services/Local/CreateLocalBinaryTypeTreeFromData.ts");
const InitializeSystem_1 = __importDefault(__webpack_require__(/*! ./Services/InitializeSystem */ "./src/Services/InitializeSystem.ts"));
exports["default"] = InitializeSystem_1.default;
(0, InitializeSystem_1.default)().then(() => {
    const start = new Date().getTime();
    (0, CreateBinaryTreeFromData_1.default)().then(() => {
        IdentifierFlags_1.IdentifierFlags.isDataLoaded = true;
    });
    (0, CreateCharacterBinaryTreeFromData_1.CreateCharacterBinaryTreeFromData)().then(() => {
        IdentifierFlags_1.IdentifierFlags.isCharacterLoaded = true;
    });
    (0, CreateTypeTreeFromData_1.CreateTypeTreeFromData)().then(() => {
        IdentifierFlags_1.IdentifierFlags.isTypeLoaded = true;
        let elapsed = new Date().getTime() - start;
        console.log("The time taken to prepare data is ", elapsed);
    });
    (0, CreateLocalBinaryTreeFromData_1.default)().then(() => {
        IdentifierFlags_1.IdentifierFlags.isLocalDataLoaded = true;
        console.log("Data", IdentifierFlags_1.IdentifierFlags.isLocalDataLoaded);
    });
    (0, CreateLocalCharacterBinaryTree_1.CreateLocalCharacterBinaryTreeFromData)().then(() => {
        IdentifierFlags_1.IdentifierFlags.isLocalCharacterLoaded = true;
        console.log("character", IdentifierFlags_1.IdentifierFlags.isLocalCharacterLoaded);
    });
    (0, CreateLocalBinaryTypeTreeFromData_1.CreateLocalBinaryTypeTreeFromData)().then(() => {
        IdentifierFlags_1.IdentifierFlags.isLocalTypeLoaded = true;
        console.log("type", IdentifierFlags_1.IdentifierFlags.isLocalTypeLoaded);
    });
    (0, GetDataFromIndexDb_1.GetDataFromIndexDbLocal)().then(() => {
        IdentifierFlags_1.IdentifierFlags.isLocalConnectionLoaded = true;
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
/******/ 	__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ 
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module is referenced by other modules so it can't be inlined
/******/ var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpQ0FBaUM7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTs7Ozs7Ozs7Ozs7QUN0R2E7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMEJBQTBCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7U0N4TkE7U0FDQTs7U0FFQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTs7U0FFQTtTQUNBOztTQUVBO1NBQ0E7U0FDQTs7OztTRXRCQTtTQUNBO1NBQ0E7U0FDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BtZW50b3JmcmllbmRzL3RzY2NzLy4vc3JjL0FwaS9DcmVhdGUvQ3JlYXRlVGhlQ2hhcmFjdGVyLnRzIiwid2VicGFjazovL0BtZW50b3JmcmllbmRzL3RzY2NzLy4vc3JjL0FwaS9DcmVhdGUvQ3JlYXRlVGhlQ29uY2VwdEFwaS50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9BcGkvQ3JlYXRlL0NyZWF0ZVRoZUNvbm5lY3Rpb25BcGkudHMiLCJ3ZWJwYWNrOi8vQG1lbnRvcmZyaWVuZHMvdHNjY3MvLi9zcmMvQXBpL0NyZWF0ZS9DcmVhdGVUaGVUZXh0RGF0YS50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9BcGkvR2V0QWlEYXRhLnRzIiwid2VicGFjazovL0BtZW50b3JmcmllbmRzL3RzY2NzLy4vc3JjL0FwaS9HZXRBbGxDb25jZXB0c0J5VHlwZS50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9BcGkvR2V0QWxsQ29ubmVjdGlvbnNPZkNvbXBvc2l0aW9uLnRzIiwid2VicGFjazovL0BtZW50b3JmcmllbmRzL3RzY2NzLy4vc3JjL0FwaS9HZXRDb25jZXB0LnRzIiwid2VicGFjazovL0BtZW50b3JmcmllbmRzL3RzY2NzLy4vc3JjL0FwaS9HZXRDb25jZXB0QnlDaGFyYWN0ZXJBbmRUeXBlLnRzIiwid2VicGFjazovL0BtZW50b3JmcmllbmRzL3RzY2NzLy4vc3JjL0FwaS9HZXRDb25jZXB0QnlDaGFyYWN0ZXJWYWx1ZS50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9BcGkvR2V0Q29ubmVjdGlvbk9mVGhlQ29uY2VwdC50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9BcGkvR2V0UmVzZXJ2ZWRJZHMudHMiLCJ3ZWJwYWNrOi8vQG1lbnRvcmZyaWVuZHMvdHNjY3MvLi9zcmMvQ29uc3RhbnRzL0FwaUNvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9EYXRhU3RydWN0dXJlcy9CaW5hcnlDaGFyYWN0ZXJUcmVlLnRzIiwid2VicGFjazovL0BtZW50b3JmcmllbmRzL3RzY2NzLy4vc3JjL0RhdGFTdHJ1Y3R1cmVzL0JpbmFyeVRyZWUudHMiLCJ3ZWJwYWNrOi8vQG1lbnRvcmZyaWVuZHMvdHNjY3MvLi9zcmMvRGF0YVN0cnVjdHVyZXMvQmluYXJ5VHlwZVRyZWUudHMiLCJ3ZWJwYWNrOi8vQG1lbnRvcmZyaWVuZHMvdHNjY3MvLi9zcmMvRGF0YVN0cnVjdHVyZXMvQ2hhcmFjdGVyUmVwb3NpdG9yeS50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9EYXRhU3RydWN0dXJlcy9Db25jZXB0LnRzIiwid2VicGFjazovL0BtZW50b3JmcmllbmRzL3RzY2NzLy4vc3JjL0RhdGFTdHJ1Y3R1cmVzL0NvbmNlcHREYXRhLnRzIiwid2VicGFjazovL0BtZW50b3JmcmllbmRzL3RzY2NzLy4vc3JjL0RhdGFTdHJ1Y3R1cmVzL0Nvbm5lY3Rpb24udHMiLCJ3ZWJwYWNrOi8vQG1lbnRvcmZyaWVuZHMvdHNjY3MvLi9zcmMvRGF0YVN0cnVjdHVyZXMvQ29ubmVjdGlvbkRhdGEudHMiLCJ3ZWJwYWNrOi8vQG1lbnRvcmZyaWVuZHMvdHNjY3MvLi9zcmMvRGF0YVN0cnVjdHVyZXMvSWRlbnRpZmllckZsYWdzLnRzIiwid2VicGFjazovL0BtZW50b3JmcmllbmRzL3RzY2NzLy4vc3JjL0RhdGFTdHJ1Y3R1cmVzL0xvY2FsL0xvY2FsQmluYXJ5Q2hhcmFjdGVyVHJlZS50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9EYXRhU3RydWN0dXJlcy9Mb2NhbC9Mb2NhbEJpbmFyeVRyZWUudHMiLCJ3ZWJwYWNrOi8vQG1lbnRvcmZyaWVuZHMvdHNjY3MvLi9zcmMvRGF0YVN0cnVjdHVyZXMvTG9jYWwvTG9jYWxCaW5hcnlUeXBlVHJlZS50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9EYXRhU3RydWN0dXJlcy9Mb2NhbC9Mb2NhbENvbmNlcHREYXRhLnRzIiwid2VicGFjazovL0BtZW50b3JmcmllbmRzL3RzY2NzLy4vc3JjL0RhdGFTdHJ1Y3R1cmVzL0xvY2FsL0xvY2FsQ29ubmVjdGlvbkRhdGEudHMiLCJ3ZWJwYWNrOi8vQG1lbnRvcmZyaWVuZHMvdHNjY3MvLi9zcmMvRGF0YVN0cnVjdHVyZXMvTm9kZS50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9EYXRhU3RydWN0dXJlcy9SZXNlcnZlZElkcy50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9EYXRhU3RydWN0dXJlcy9SZXR1cm5lci50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9EYXRhU3RydWN0dXJlcy9TZXR0aW5nRGF0YS50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9EYXRhU3RydWN0dXJlcy9TZXR0aW5ncy50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9EYXRhU3RydWN0dXJlcy9TeW5jRGF0YS50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9EYXRhU3RydWN0dXJlcy9UaGVDaGFyYWN0ZXIudHMiLCJ3ZWJwYWNrOi8vQG1lbnRvcmZyaWVuZHMvdHNjY3MvLi9zcmMvRGF0YVN0cnVjdHVyZXMvVGhlVGV4dHMudHMiLCJ3ZWJwYWNrOi8vQG1lbnRvcmZyaWVuZHMvdHNjY3MvLi9zcmMvRGF0YWJhc2UvaW5kZXhkYmxvY2FsLnRzIiwid2VicGFjazovL0BtZW50b3JmcmllbmRzL3RzY2NzLy4vc3JjL0RhdGFiYXNlL2luZGV4ZWRkYi50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9TZXJ2aWNlcy9DcmVhdGVCaW5hcnlUcmVlRnJvbURhdGEudHMiLCJ3ZWJwYWNrOi8vQG1lbnRvcmZyaWVuZHMvdHNjY3MvLi9zcmMvU2VydmljZXMvQ3JlYXRlQ2hhcmFjdGVyQmluYXJ5VHJlZUZyb21EYXRhLnRzIiwid2VicGFjazovL0BtZW50b3JmcmllbmRzL3RzY2NzLy4vc3JjL1NlcnZpY2VzL0NyZWF0ZUNvbm5lY3Rpb25CZXR3ZWVuVHdvQ29uY2VwdHMudHMiLCJ3ZWJwYWNrOi8vQG1lbnRvcmZyaWVuZHMvdHNjY3MvLi9zcmMvU2VydmljZXMvQ3JlYXRlVGhlQ29tcG9zaXRpb24udHMiLCJ3ZWJwYWNrOi8vQG1lbnRvcmZyaWVuZHMvdHNjY3MvLi9zcmMvU2VydmljZXMvQ3JlYXRlVGhlQ29uY2VwdC50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9TZXJ2aWNlcy9DcmVhdGVUaGVDb25uZWN0aW9uLnRzIiwid2VicGFjazovL0BtZW50b3JmcmllbmRzL3RzY2NzLy4vc3JjL1NlcnZpY2VzL0NyZWF0ZVR5cGVUcmVlRnJvbURhdGEudHMiLCJ3ZWJwYWNrOi8vQG1lbnRvcmZyaWVuZHMvdHNjY3MvLi9zcmMvU2VydmljZXMvR2V0Q29tcG9zaXRpb24udHMiLCJ3ZWJwYWNrOi8vQG1lbnRvcmZyaWVuZHMvdHNjY3MvLi9zcmMvU2VydmljZXMvR2V0Q29tcG9zaXRpb25MaXN0LnRzIiwid2VicGFjazovL0BtZW50b3JmcmllbmRzL3RzY2NzLy4vc3JjL1NlcnZpY2VzL0dldENvbmNlcHRCeUNoYXJhY3Rlci50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9TZXJ2aWNlcy9HZXREYXRhRnJvbUluZGV4RGIudHMiLCJ3ZWJwYWNrOi8vQG1lbnRvcmZyaWVuZHMvdHNjY3MvLi9zcmMvU2VydmljZXMvR2V0TGluay50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9TZXJ2aWNlcy9HZXRUaGVDb25jZXB0LnRzIiwid2VicGFjazovL0BtZW50b3JmcmllbmRzL3RzY2NzLy4vc3JjL1NlcnZpY2VzL0dldFRoZVJlZmVyZW50LnRzIiwid2VicGFjazovL0BtZW50b3JmcmllbmRzL3RzY2NzLy4vc3JjL1NlcnZpY2VzL0luaXRpYWxpemVTeXN0ZW0udHMiLCJ3ZWJwYWNrOi8vQG1lbnRvcmZyaWVuZHMvdHNjY3MvLi9zcmMvU2VydmljZXMvTG9jYWwvQ3JlYXRlTG9jYWxCaW5hcnlUcmVlRnJvbURhdGEudHMiLCJ3ZWJwYWNrOi8vQG1lbnRvcmZyaWVuZHMvdHNjY3MvLi9zcmMvU2VydmljZXMvTG9jYWwvQ3JlYXRlTG9jYWxCaW5hcnlUeXBlVHJlZUZyb21EYXRhLnRzIiwid2VicGFjazovL0BtZW50b3JmcmllbmRzL3RzY2NzLy4vc3JjL1NlcnZpY2VzL0xvY2FsL0NyZWF0ZUxvY2FsQ2hhcmFjdGVyQmluYXJ5VHJlZS50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9TZXJ2aWNlcy9Mb2NhbC9DcmVhdGVUaGVDb21wb3NpdGlvbkxvY2FsLnRzIiwid2VicGFjazovL0BtZW50b3JmcmllbmRzL3RzY2NzLy4vc3JjL1NlcnZpY2VzL0xvY2FsL0NyZWF0ZVRoZUNvbmNlcHRMb2NhbC50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9TZXJ2aWNlcy9Mb2NhbC9DcmVhdGVUaGVDb25uZWN0aW9uTG9jYWwudHMiLCJ3ZWJwYWNrOi8vQG1lbnRvcmZyaWVuZHMvdHNjY3MvLi9zcmMvU2VydmljZXMvTG9jYWwvR2V0Q29tcG9zaXRpb25MaXN0TG9jYWwudHMiLCJ3ZWJwYWNrOi8vQG1lbnRvcmZyaWVuZHMvdHNjY3MvLi9zcmMvU2VydmljZXMvTG9jYWwvR2V0Q29tcG9zaXRpb25Mb2NhbC50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9TZXJ2aWNlcy9Mb2NhbC9HZXRDb25jZXB0QnlDaGFyYWN0ZXJMb2NhbC50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9TZXJ2aWNlcy9Mb2NhbC9NYWtlVGhlQ29uY2VwdExvY2FsLnRzIiwid2VicGFjazovL0BtZW50b3JmcmllbmRzL3RzY2NzLy4vc3JjL1NlcnZpY2VzL0xvY2FsL01ha2VUaGVJbnN0YW5jZUNvbmNlcHRMb2NhbC50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9TZXJ2aWNlcy9Mb2NhbC9NYWtlVGhlVHlwZUxvY2FsLnRzIiwid2VicGFjazovL0BtZW50b3JmcmllbmRzL3RzY2NzLy4vc3JjL1NlcnZpY2VzL01ha2VUaGVDaGFyYWN0ZXIudHMiLCJ3ZWJwYWNrOi8vQG1lbnRvcmZyaWVuZHMvdHNjY3MvLi9zcmMvU2VydmljZXMvTWFrZVRoZUNoYXJhY3RlckRhdGEudHMiLCJ3ZWJwYWNrOi8vQG1lbnRvcmZyaWVuZHMvdHNjY3MvLi9zcmMvU2VydmljZXMvTWFrZVRoZUNvbmNlcHQudHMiLCJ3ZWJwYWNrOi8vQG1lbnRvcmZyaWVuZHMvdHNjY3MvLi9zcmMvU2VydmljZXMvTWFrZVRoZUluc3RhbmNlQ29uY2VwdC50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9TZXJ2aWNlcy9NYWtlVGhlTmFtZS50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy8uL3NyYy9TZXJ2aWNlcy9NYWtlVGhlVHlwZUNvbmNlcHQudHMiLCJ3ZWJwYWNrOi8vQG1lbnRvcmZyaWVuZHMvdHNjY3MvLi9zcmMvU2VydmljZXMvU3BsaXRTdHJpbmdzLnRzIiwid2VicGFjazovL0BtZW50b3JmcmllbmRzL3RzY2NzLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL0BtZW50b3JmcmllbmRzL3RzY2NzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9AbWVudG9yZnJpZW5kcy90c2Njcy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ3JlYXRlVGhlQ2hhcmFjdGVyID0gdm9pZCAwO1xuY29uc3QgQXBpQ29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vLi4vQ29uc3RhbnRzL0FwaUNvbnN0YW50c1wiKTtcbmNvbnN0IENoYXJhY3RlclJlcG9zaXRvcnlfMSA9IHJlcXVpcmUoXCIuLi8uLi9EYXRhU3RydWN0dXJlcy9DaGFyYWN0ZXJSZXBvc2l0b3J5XCIpO1xuY29uc3QgUmV0dXJuZXJfMSA9IHJlcXVpcmUoXCIuLi8uLi9EYXRhU3RydWN0dXJlcy9SZXR1cm5lclwiKTtcbmNvbnN0IFRoZUNoYXJhY3Rlcl8xID0gcmVxdWlyZShcIi4uLy4uL0RhdGFTdHJ1Y3R1cmVzL1RoZUNoYXJhY3RlclwiKTtcbmZ1bmN0aW9uIENyZWF0ZVRoZUNoYXJhY3RlcihjaGFyYWN0ZXJEYXRhKSB7XG4gICAgdmFyIGNoYXJhY3RlckRhdGE7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNoYXJhY3RlckRhdGEgPSBDaGFyYWN0ZXJSZXBvc2l0b3J5XzEuQ2hhcmFjdGVyUmVwb3NpdG9yeS5HZXRDaGFyYWN0ZXIoY2hhcmFjdGVyRGF0YS5kYXRhKTtcbiAgICAgICAgICAgIGlmIChjaGFyYWN0ZXJEYXRhLmlkID09IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKEFwaUNvbnN0YW50c18xLkNyZWF0ZVRoZUNoYXJhY3RlckRhdGFVcmwsIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY2hhcmFjdGVyRGF0YSksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHRTdHJpbmcgPSB5aWVsZCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVzdWx0U3RyaW5nO1xuICAgICAgICAgICAgICAgIHZhciBzYXZpbmdDaGFyYWN0ZXIgPSBuZXcgVGhlQ2hhcmFjdGVyXzEuVGhlQ2hhcmFjdGVyKHJlc3VsdC51c2VySWQsIGNoYXJhY3RlckRhdGEuZGF0YSwgMCwgMCwgNCwgNCwgOTk5LCA5OTksIFwiXCIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBzYXZpbmdDaGFyYWN0ZXIuaWQgPSByZXN1bHQuaWQ7XG4gICAgICAgICAgICAgICAgQ2hhcmFjdGVyUmVwb3NpdG9yeV8xLkNoYXJhY3RlclJlcG9zaXRvcnkuQWRkQ2hhcmFjdGVyKHNhdmluZ0NoYXJhY3Rlcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciByZXR1cm5pbmdEYXRhID0gbmV3IFJldHVybmVyXzEuUmV0dXJuZXIoY2hhcmFjdGVyRGF0YS5pZCwgY2hhcmFjdGVyRGF0YS51c2VySWQsIDAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuaW5nRGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIG1lc3NhZ2U6ICcsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VuZXhwZWN0ZWQgZXJyb3I6ICcsIGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLkNyZWF0ZVRoZUNoYXJhY3RlciA9IENyZWF0ZVRoZUNoYXJhY3RlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkNyZWF0ZVRoZUNvbmNlcHRBcGkgPSB2b2lkIDA7XG5jb25zdCBBcGlDb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuLi8uLi9Db25zdGFudHMvQXBpQ29uc3RhbnRzXCIpO1xuZnVuY3Rpb24gQ3JlYXRlVGhlQ29uY2VwdEFwaShjb25jZXB0RGF0YSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKEFwaUNvbnN0YW50c18xLkNyZWF0ZVRoZUNvbmNlcHRVcmwsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNvbmNlcHREYXRhKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXN1bHRTdHJpbmcgPSB5aWVsZCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSByZXN1bHRTdHJpbmc7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgbWVzc2FnZTogJywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndW5leHBlY3RlZCBlcnJvcjogJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuQ3JlYXRlVGhlQ29uY2VwdEFwaSA9IENyZWF0ZVRoZUNvbmNlcHRBcGk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5DcmVhdGVUaGVDb25uZWN0aW9uQXBpID0gdm9pZCAwO1xuY29uc3QgQXBpQ29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vLi4vQ29uc3RhbnRzL0FwaUNvbnN0YW50c1wiKTtcbmZ1bmN0aW9uIENyZWF0ZVRoZUNvbm5lY3Rpb25BcGkoY29ubmVjdGlvbkRhdGEpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIGpzb25EYXRhID0gSlNPTi5zdHJpbmdpZnkoY29ubmVjdGlvbkRhdGEpO1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChBcGlDb25zdGFudHNfMS5DcmVhdGVUaGVDb25uZWN0aW9uVXJsLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBqc29uRGF0YVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBtZXNzYWdlOiAnLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1bmV4cGVjdGVkIGVycm9yOiAnLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5DcmVhdGVUaGVDb25uZWN0aW9uQXBpID0gQ3JlYXRlVGhlQ29ubmVjdGlvbkFwaTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkNyZWF0ZVRleHREYXRhID0gdm9pZCAwO1xuY29uc3QgQXBpQ29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vLi4vQ29uc3RhbnRzL0FwaUNvbnN0YW50c1wiKTtcbmZ1bmN0aW9uIENyZWF0ZVRleHREYXRhKHRleHREYXRhKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goQXBpQ29uc3RhbnRzXzEuQ3JlYXRlVGhlVGV4dERhdGFVcmwsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRleHREYXRhKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXN1bHRTdHJpbmcgPSB5aWVsZCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSByZXN1bHRTdHJpbmc7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgbWVzc2FnZTogJywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndW5leHBlY3RlZCBlcnJvcjogJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuQ3JlYXRlVGV4dERhdGEgPSBDcmVhdGVUZXh0RGF0YTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdldEFpRGF0YSA9IHZvaWQgMDtcbmNvbnN0IENvbmNlcHREYXRhXzEgPSByZXF1aXJlKFwiLi4vRGF0YVN0cnVjdHVyZXMvQ29uY2VwdERhdGFcIik7XG5jb25zdCBJbml0aWFsaXplU3lzdGVtXzEgPSByZXF1aXJlKFwiLi4vU2VydmljZXMvSW5pdGlhbGl6ZVN5c3RlbVwiKTtcbmNvbnN0IEFwaUNvbnN0YW50c18xID0gcmVxdWlyZShcIi4vLi4vQ29uc3RhbnRzL0FwaUNvbnN0YW50c1wiKTtcbmZ1bmN0aW9uIEdldEFpRGF0YSgpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goQXBpQ29uc3RhbnRzXzEuR2V0QWxsQWlEYXRhLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBDb25jZXB0RGF0YV8xLkNvbmNlcHRzRGF0YS5BZGRDb25jZXB0KHJlc3VsdFtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAoMCwgSW5pdGlhbGl6ZVN5c3RlbV8xLlB1cmdhdG9yeURhdGFiYXNlVXBkYXRlZCkoKTtcbiAgICAgICAgICAgIGxldCBlbGFwc2VkID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIHRpbWUgdGFrZW4gaXMgXCIsIGVsYXBzZWQpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgbWVzc2FnZTogJywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndW5leHBlY3RlZCBlcnJvcjogJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuR2V0QWlEYXRhID0gR2V0QWlEYXRhO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2V0QWxsQ29uY2VwdHNCeVR5cGUgPSB2b2lkIDA7XG5jb25zdCBDb25jZXB0RGF0YV8xID0gcmVxdWlyZShcIi4vLi4vRGF0YVN0cnVjdHVyZXMvQ29uY2VwdERhdGFcIik7XG5jb25zdCBBcGlDb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuLy4uL0NvbnN0YW50cy9BcGlDb25zdGFudHNcIik7XG5mdW5jdGlvbiBHZXRBbGxDb25jZXB0c0J5VHlwZSh0eXBlLCB1c2VySWQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHVybGVuY29kZWQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgICAgICAgICB1cmxlbmNvZGVkLmFwcGVuZChcInR5cGVcIiwgdHlwZSk7XG4gICAgICAgICAgICB1cmxlbmNvZGVkLmFwcGVuZChcInVzZXJfaWRcIiwgdXNlcklkLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChBcGlDb25zdGFudHNfMS5HZXRBbGxDb25jZXB0c0J5VHlwZVVybCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiB1cmxlbmNvZGVkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBDb25jZXB0RGF0YV8xLkNvbmNlcHRzRGF0YS5BZGRDb25jZXB0KHJlc3VsdFtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFkZGVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgbWVzc2FnZTogJywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndW5leHBlY3RlZCBlcnJvcjogJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuR2V0QWxsQ29uY2VwdHNCeVR5cGUgPSBHZXRBbGxDb25jZXB0c0J5VHlwZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdldEFsbENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvbk9ubGluZSA9IGV4cG9ydHMuR2V0QWxsQ29ubmVjdGlvbnNPZkNvbXBvc2l0aW9uID0gdm9pZCAwO1xuY29uc3QgQ29ubmVjdGlvbkRhdGFfMSA9IHJlcXVpcmUoXCIuLi9EYXRhU3RydWN0dXJlcy9Db25uZWN0aW9uRGF0YVwiKTtcbmNvbnN0IEFwaUNvbnN0YW50c18xID0gcmVxdWlyZShcIi4vLi4vQ29uc3RhbnRzL0FwaUNvbnN0YW50c1wiKTtcbmZ1bmN0aW9uIEdldEFsbENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvbihjb21wb3NpdGlvbl9pZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBjb25uZWN0aW9uTGlzdCA9IFtdO1xuICAgICAgICBjb25uZWN0aW9uTGlzdCA9IENvbm5lY3Rpb25EYXRhXzEuQ29ubmVjdGlvbkRhdGEuR2V0Q29ubmVjdGlvbnNPZkNvbXBvc2l0aW9uTG9jYWwoY29tcG9zaXRpb25faWQpO1xuICAgICAgICBpZiAoY29ubmVjdGlvbkxpc3QubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHZhciBjb25uZWN0aW9uTGlzdFN0cmluZyA9IHlpZWxkIEdldEFsbENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvbk9ubGluZShjb21wb3NpdGlvbl9pZCk7XG4gICAgICAgICAgICBjb25uZWN0aW9uTGlzdCA9IGNvbm5lY3Rpb25MaXN0U3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgR2V0QWxsQ29ubmVjdGlvbnNPZkNvbXBvc2l0aW9uT25saW5lKGNvbXBvc2l0aW9uX2lkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29ubmVjdGlvbkxpc3Q7XG4gICAgfSk7XG59XG5leHBvcnRzLkdldEFsbENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvbiA9IEdldEFsbENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvbjtcbmZ1bmN0aW9uIEdldEFsbENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvbk9ubGluZShjb21wb3NpdGlvbl9pZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgY29ubmVjdGlvbkxpc3QgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goQXBpQ29uc3RhbnRzXzEuR2V0QWxsQ29ubmVjdGlvbnNPZkNvbXBvc2l0aW9uVXJsLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IGBjb21wb3NpdGlvbl9pZD0ke2NvbXBvc2l0aW9uX2lkfWBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIENvbm5lY3Rpb25EYXRhXzEuQ29ubmVjdGlvbkRhdGEuQWRkQ29ubmVjdGlvbihyZXN1bHRbaV0pO1xuICAgICAgICAgICAgICAgIENvbm5lY3Rpb25EYXRhXzEuQ29ubmVjdGlvbkRhdGEuQWRkVG9EaWN0aW9uYXJ5KHJlc3VsdFtpXSk7XG4gICAgICAgICAgICAgICAgY29ubmVjdGlvbkxpc3QucHVzaChyZXN1bHRbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbm5lY3Rpb25MaXN0O1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgbWVzc2FnZTogJywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndW5leHBlY3RlZCBlcnJvcjogJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuR2V0QWxsQ29ubmVjdGlvbnNPZkNvbXBvc2l0aW9uT25saW5lID0gR2V0QWxsQ29ubmVjdGlvbnNPZkNvbXBvc2l0aW9uT25saW5lO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2V0Q29uY2VwdCA9IHZvaWQgMDtcbmNvbnN0IENvbmNlcHREYXRhXzEgPSByZXF1aXJlKFwiLi8uLi9EYXRhU3RydWN0dXJlcy9Db25jZXB0RGF0YVwiKTtcbmNvbnN0IEFwaUNvbnN0YW50c18xID0gcmVxdWlyZShcIi4vLi4vQ29uc3RhbnRzL0FwaUNvbnN0YW50c1wiKTtcbmZ1bmN0aW9uIEdldENvbmNlcHQoaWQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIGNvbmNlcHRVc2UgPSB5aWVsZCBDb25jZXB0RGF0YV8xLkNvbmNlcHRzRGF0YS5HZXRDb25jZXB0KGlkKTtcbiAgICAgICAgICAgIGlmIChjb25jZXB0VXNlLmlkICE9IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29uY2VwdFVzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0dGluZyBkYXRhIGZyb20gb25saW5lXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goQXBpQ29uc3RhbnRzXzEuR2V0Q29uY2VwdFVybCwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IGBpZD0ke2lkfWBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmlkID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBDb25jZXB0RGF0YV8xLkNvbmNlcHRzRGF0YS5BZGRDb25jZXB0KHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgbWVzc2FnZTogJywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndW5leHBlY3RlZCBlcnJvcjogJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuR2V0Q29uY2VwdCA9IEdldENvbmNlcHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HZXRDb25jZXB0QnlDaGFyYWN0ZXJBbmRUeXBlID0gdm9pZCAwO1xuY29uc3QgQ29uY2VwdERhdGFfMSA9IHJlcXVpcmUoXCIuLy4uL0RhdGFTdHJ1Y3R1cmVzL0NvbmNlcHREYXRhXCIpO1xuY29uc3QgQXBpQ29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi8uLi9Db25zdGFudHMvQXBpQ29uc3RhbnRzXCIpO1xuZnVuY3Rpb24gR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyQW5kVHlwZShjaGFyYWN0ZXJWYWx1ZSwgdHlwZUlkKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBjb25jZXB0ID0geWllbGQgQ29uY2VwdERhdGFfMS5Db25jZXB0c0RhdGEuR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyQW5kVHlwZUxvY2FsKGNoYXJhY3RlclZhbHVlLCB0eXBlSWQpO1xuICAgICAgICAgICAgaWYgKGNvbmNlcHQgPT0gbnVsbCB8fCBjb25jZXB0LmlkID09IDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvdWxkIG5vdCBmaW5kXCIpO1xuICAgICAgICAgICAgICAgIHZhciBqc29uID0ge1xuICAgICAgICAgICAgICAgICAgICAnY2hhcmFjdGVyX3ZhbHVlJzogYCR7Y2hhcmFjdGVyVmFsdWV9YCxcbiAgICAgICAgICAgICAgICAgICAgJ3R5cGVfaWQnOiB0eXBlSWRcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHZhciB0b1NlbmRKc29uID0gSlNPTi5zdHJpbmdpZnkoanNvbik7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChBcGlDb25zdGFudHNfMS5HZXRDb25jZXB0QnlDaGFyYWN0ZXJBbmRUeXBlVXJsLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBib2R5OiB0b1NlbmRKc29uLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgY29uY2VwdCA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgICAgICAgICAgQ29uY2VwdERhdGFfMS5Db25jZXB0c0RhdGEuQWRkQ29uY2VwdChjb25jZXB0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb25jZXB0O1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgbWVzc2FnZTogJywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndW5leHBlY3RlZCBlcnJvcjogJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyQW5kVHlwZSA9IEdldENvbmNlcHRCeUNoYXJhY3RlckFuZFR5cGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HZXRDb25jZXB0QnlDaGFyYWN0ZXJWYWx1ZSA9IHZvaWQgMDtcbmNvbnN0IENvbmNlcHREYXRhXzEgPSByZXF1aXJlKFwiLi8uLi9EYXRhU3RydWN0dXJlcy9Db25jZXB0RGF0YVwiKTtcbmNvbnN0IEFwaUNvbnN0YW50c18xID0gcmVxdWlyZShcIi4vLi4vQ29uc3RhbnRzL0FwaUNvbnN0YW50c1wiKTtcbmZ1bmN0aW9uIEdldENvbmNlcHRCeUNoYXJhY3RlclZhbHVlKGNoYXJhY3RlclZhbHVlKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goQXBpQ29uc3RhbnRzXzEuR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyVmFsdWVVcmwsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogYGNoYXJhY3Rlcl92YWx1ZT0ke2NoYXJhY3RlclZhbHVlfWBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5pZCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgQ29uY2VwdERhdGFfMS5Db25jZXB0c0RhdGEuQWRkQ29uY2VwdChyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIG1lc3NhZ2U6ICcsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VuZXhwZWN0ZWQgZXJyb3I6ICcsIGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLkdldENvbmNlcHRCeUNoYXJhY3RlclZhbHVlID0gR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyVmFsdWU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HZXRDb25uZWN0aW9uT2ZUaGVDb25jZXB0ID0gdm9pZCAwO1xuY29uc3QgQXBpQ29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi8uLi9Db25zdGFudHMvQXBpQ29uc3RhbnRzXCIpO1xuZnVuY3Rpb24gR2V0Q29ubmVjdGlvbk9mVGhlQ29uY2VwdCh0eXBlSWQsIG9mVGhlQ29uY2VwdElkLCB1c2VySWQsIGlucGFnZSA9IDEwLCBwYWdlID0gMSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgdXJsZW5jb2RlZCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICAgICAgICAgIHVybGVuY29kZWQuYXBwZW5kKFwidHlwZUlkXCIsIGAke3R5cGVJZH1gKTtcbiAgICAgICAgICAgIHVybGVuY29kZWQuYXBwZW5kKFwib2ZUaGVDb25jZXB0SWRcIiwgYCR7b2ZUaGVDb25jZXB0SWR9YCk7XG4gICAgICAgICAgICB1cmxlbmNvZGVkLmFwcGVuZChcInVzZXJJZFwiLCBgJHt1c2VySWR9YCk7XG4gICAgICAgICAgICB1cmxlbmNvZGVkLmFwcGVuZChcImlucGFnZVwiLCBgJHtpbnBhZ2V9YCk7XG4gICAgICAgICAgICB1cmxlbmNvZGVkLmFwcGVuZChcInBhZ2VcIiwgYCR7cGFnZX1gKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goQXBpQ29uc3RhbnRzXzEuR2V0QWxsQ29ubmVjdGlvbnNPZkNvbmNlcHRVcmwsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogdXJsZW5jb2RlZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBtZXNzYWdlOiAnLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1bmV4cGVjdGVkIGVycm9yOiAnLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5HZXRDb25uZWN0aW9uT2ZUaGVDb25jZXB0ID0gR2V0Q29ubmVjdGlvbk9mVGhlQ29uY2VwdDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdldFJlc2VydmVkSWRzID0gdm9pZCAwO1xuY29uc3QgQXBpQ29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi8uLi9Db25zdGFudHMvQXBpQ29uc3RhbnRzXCIpO1xuY29uc3QgUmVzZXJ2ZWRJZHNfMSA9IHJlcXVpcmUoXCIuLi9EYXRhU3RydWN0dXJlcy9SZXNlcnZlZElkc1wiKTtcbmZ1bmN0aW9uIEdldFJlc2VydmVkSWRzKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKEFwaUNvbnN0YW50c18xLkdldFJlc2VydmVkSWRVcmwsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIFJlc2VydmVkSWRzXzEuUmVzZXJ2ZWRJZHMuQWRkSWQocmVzdWx0W2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIG1lc3NhZ2U6ICcsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VuZXhwZWN0ZWQgZXJyb3I6ICcsIGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLkdldFJlc2VydmVkSWRzID0gR2V0UmVzZXJ2ZWRJZHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ3JlYXRlVGhlQ29ubmVjdGlvblVybCA9IGV4cG9ydHMuQ3JlYXRlVGhlQ29uY2VwdFVybCA9IGV4cG9ydHMuQ3JlYXRlVGhlQ2hhcmFjdGVyRGF0YVVybCA9IGV4cG9ydHMuQ3JlYXRlVGhlVGV4dERhdGFVcmwgPSBleHBvcnRzLkdldFJlc2VydmVkSWRVcmwgPSBleHBvcnRzLkdldEFsbEFpRGF0YSA9IGV4cG9ydHMuR2V0QWxsQ29ubmVjdGlvbnNPZkNvbmNlcHRVcmwgPSBleHBvcnRzLkdldEFsbENvbmNlcHRzQnlUeXBlVXJsID0gZXhwb3J0cy5HZXRDaGFyYWN0ZXJCeUNoYXJhY3RlclVybCA9IGV4cG9ydHMuR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyQW5kVHlwZVVybCA9IGV4cG9ydHMuR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyVmFsdWVVcmwgPSBleHBvcnRzLkdldEFsbENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvblVybCA9IGV4cG9ydHMuR2V0QWxsQ29ubmVjdGlvbnNPZlVzZXJVcmwgPSBleHBvcnRzLkdldEFsbENvbmNlcHRzT2ZVc2VyVXJsID0gZXhwb3J0cy5HZXRDb25jZXB0VXJsID0gZXhwb3J0cy5CQVNFX1VSTCA9IHZvaWQgMDtcbmV4cG9ydHMuQkFTRV9VUkwgPSBwcm9jZXNzLmVudi5CQVNFX1VSTCB8fCAnaHR0cHM6Ly9kZXZib29tLmZyZWVzY2hlbWEuY29tJztcbmV4cG9ydHMuR2V0Q29uY2VwdFVybCA9IGV4cG9ydHMuQkFTRV9VUkwgKyAnL2FwaS9nZXRDb25jZXB0JztcbmV4cG9ydHMuR2V0QWxsQ29uY2VwdHNPZlVzZXJVcmwgPSBleHBvcnRzLkJBU0VfVVJMICsgJy9hcGkvZ2V0X2FsbF9jb25jZXB0c19vZl91c2VyJztcbmV4cG9ydHMuR2V0QWxsQ29ubmVjdGlvbnNPZlVzZXJVcmwgPSBleHBvcnRzLkJBU0VfVVJMICsgJy9hcGkvZ2V0X2FsbF9jb25uZWN0aW9uc19vZl91c2VyJztcbmV4cG9ydHMuR2V0QWxsQ29ubmVjdGlvbnNPZkNvbXBvc2l0aW9uVXJsID0gZXhwb3J0cy5CQVNFX1VSTCArICcvYXBpL2dldF9hbGxfY29ubmVjdGlvbnNfb2ZfY29tcG9zaXRpb24nO1xuZXhwb3J0cy5HZXRDb25jZXB0QnlDaGFyYWN0ZXJWYWx1ZVVybCA9IGV4cG9ydHMuQkFTRV9VUkwgKyAnL2FwaS9nZXRfY29uY2VwdF9ieV9jaGFyYWN0ZXJfdmFsdWUnO1xuZXhwb3J0cy5HZXRDb25jZXB0QnlDaGFyYWN0ZXJBbmRUeXBlVXJsID0gZXhwb3J0cy5CQVNFX1VSTCArICcvYXBpL2dldF9jb25jZXB0X2J5X2NoYXJhY3Rlcl9hbmRfdHlwZSc7XG5leHBvcnRzLkdldENoYXJhY3RlckJ5Q2hhcmFjdGVyVXJsID0gZXhwb3J0cy5CQVNFX1VSTCArICcvYXBpL2dldF9jaGFyYWN0ZXJfYnlfY2hhcmFjdGVyJztcbmV4cG9ydHMuR2V0QWxsQ29uY2VwdHNCeVR5cGVVcmwgPSBleHBvcnRzLkJBU0VfVVJMICsgJy9hcGkvZ2V0X2FsbF9jb25jZXB0c19ieV90eXBlJztcbmV4cG9ydHMuR2V0QWxsQ29ubmVjdGlvbnNPZkNvbmNlcHRVcmwgPSBleHBvcnRzLkJBU0VfVVJMICsgJy9hcGkvZ2V0LWxpbmstY29ubmVjdGlvbnMnO1xuZXhwb3J0cy5HZXRBbGxBaURhdGEgPSBwcm9jZXNzLmVudi5BSV9VUkwgfHwgJ2h0dHBzOi8vZGV2YWkuZnJlZXNjaGVtYS5jb20vYXBpL2dldF9yYW5rZWRfdHlwZV9pZD9pbnBhZ2U9NTAwJztcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLyBBUEkgRm9yIFJlc2VydmVkIElkcyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmV4cG9ydHMuR2V0UmVzZXJ2ZWRJZFVybCA9IGV4cG9ydHMuQkFTRV9VUkwgKyAnL2FwaS9nZXRfcmVzZXJ2ZWRfaWRzJztcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8vLy8vLy8vLy8vQVBJIEZvciBDcmVhdGluZyBEYXRhIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5leHBvcnRzLkNyZWF0ZVRoZVRleHREYXRhVXJsID0gZXhwb3J0cy5CQVNFX1VSTCArICcvYXBpL2NyZWF0ZV90ZXh0X2RhdGEnO1xuZXhwb3J0cy5DcmVhdGVUaGVDaGFyYWN0ZXJEYXRhVXJsID0gZXhwb3J0cy5CQVNFX1VSTCArICcvYXBpL2NyZWF0ZV9jaGFyYWN0ZXJfZGF0YSc7XG5leHBvcnRzLkNyZWF0ZVRoZUNvbmNlcHRVcmwgPSBleHBvcnRzLkJBU0VfVVJMICsgJy9hcGkvY3JlYXRlX3RoZV9jb25jZXB0JztcbmV4cG9ydHMuQ3JlYXRlVGhlQ29ubmVjdGlvblVybCA9IGV4cG9ydHMuQkFTRV9VUkwgKyAnL2FwaS9jcmVhdGVfdGhlX2Nvbm5lY3Rpb24nO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQmluYXJ5Q2hhcmFjdGVyVHJlZSA9IHZvaWQgMDtcbmNvbnN0IElkZW50aWZpZXJGbGFnc18xID0gcmVxdWlyZShcIi4vSWRlbnRpZmllckZsYWdzXCIpO1xuY29uc3QgTm9kZV8xID0gcmVxdWlyZShcIi4vTm9kZVwiKTtcbmNsYXNzIEJpbmFyeUNoYXJhY3RlclRyZWUge1xuICAgIHN0YXRpYyB3YWl0Rm9yRGF0YVRvTG9hZCgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0ZsYWcocmVzb2x2ZSk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChcIm5vdFwiKTtcbiAgICAgICAgICAgICAgICB9LCAyNTAwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBjaGVja0ZsYWcocmVzb2x2ZSkge1xuICAgICAgICBpZiAoSWRlbnRpZmllckZsYWdzXzEuSWRlbnRpZmllckZsYWdzLmlzQ2hhcmFjdGVyTG9hZGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShcImRvbmVcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KEJpbmFyeUNoYXJhY3RlclRyZWUuY2hlY2tGbGFnLCAxMDAwLCByZXNvbHZlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICA7XG4gICAgc3RhdGljIGFkZE5vZGVUb1RyZWUobm9kZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hhcmFjdGVyUm9vdCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJSb290ID0gbm9kZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFyYWN0ZXJSb290O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJSb290ID0gdGhpcy5jaGFyYWN0ZXJSb290LmFkZENoYXJhY3Rlck5vZGUobm9kZSwgdGhpcy5jaGFyYWN0ZXJSb290LCB0aGlzLmNoYXJhY3RlclJvb3QuaGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYXJhY3RlclJvb3Q7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgYWRkQ29uY2VwdFRvVHJlZShjb25jZXB0KSB7XG4gICAgICAgIGlmIChjb25jZXB0LmNoYXJhY3RlclZhbHVlICE9IFwiXCIpIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gbmV3IE5vZGVfMS5Ob2RlKGNvbmNlcHQuY2hhcmFjdGVyVmFsdWUsIGNvbmNlcHQsIG51bGwsIG51bGwpO1xuICAgICAgICAgICAgdGhpcy5hZGROb2RlVG9UcmVlKG5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBnZXROb2RlRnJvbVRyZWUodmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hhcmFjdGVyUm9vdCkge1xuICAgICAgICAgICAgdmFyIE5vZGUgPSB0aGlzLmNoYXJhY3RlclJvb3QuZ2V0Q2hhcmFjdGVyRnJvbU5vZGUodmFsdWUsIHRoaXMuY2hhcmFjdGVyUm9vdCk7XG4gICAgICAgICAgICByZXR1cm4gTm9kZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jaGFyYWN0ZXJSb290O1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0Q2hhcmFjdGVyQW5kVHlwZUZyb21UcmVlKHZhbHVlLCB0eXBlSWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB5aWVsZCB0aGlzLndhaXRGb3JEYXRhVG9Mb2FkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5jaGFyYWN0ZXJSb290KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZWFyY2hpbmcgLi4uLi4uLi4uLi4uLi4uLi5cIik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgICAgICAgICAgIHZhciBOb2RlID0gdGhpcy5jaGFyYWN0ZXJSb290LmdldEZyb21Ob2RlV2l0aENoYXJhY3RlckFuZFR5cGUodmFsdWUsIHR5cGVJZCwgdGhpcy5jaGFyYWN0ZXJSb290KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gTm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYXJhY3RlclJvb3Q7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuQmluYXJ5Q2hhcmFjdGVyVHJlZSA9IEJpbmFyeUNoYXJhY3RlclRyZWU7XG5CaW5hcnlDaGFyYWN0ZXJUcmVlLmNoYXJhY3RlclJvb3QgPSBudWxsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQmluYXJ5VHJlZSA9IHZvaWQgMDtcbmNvbnN0IEJpbmFyeUNoYXJhY3RlclRyZWVfMSA9IHJlcXVpcmUoXCIuL0JpbmFyeUNoYXJhY3RlclRyZWVcIik7XG5jb25zdCBOb2RlXzEgPSByZXF1aXJlKFwiLi9Ob2RlXCIpO1xuY29uc3QgSWRlbnRpZmllckZsYWdzXzEgPSByZXF1aXJlKFwiLi9JZGVudGlmaWVyRmxhZ3NcIik7XG5jbGFzcyBCaW5hcnlUcmVlIHtcbiAgICBzdGF0aWMgYWRkTm9kZVRvVHJlZShub2RlKSB7XG4gICAgICAgIGlmICh0aGlzLnJvb3QgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5yb290ID0gbm9kZTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJvb3Q7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJvb3QgPSB0aGlzLnJvb3QuYWRkTm9kZShub2RlLCB0aGlzLnJvb3QsIHRoaXMucm9vdC5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyB3YWl0Rm9yRGF0YVRvTG9hZCgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0ZsYWcocmVzb2x2ZSk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChcIm5vdFwiKTtcbiAgICAgICAgICAgICAgICB9LCAyNTAwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBjaGVja0ZsYWcocmVzb2x2ZSkge1xuICAgICAgICBpZiAoSWRlbnRpZmllckZsYWdzXzEuSWRlbnRpZmllckZsYWdzLmlzRGF0YUxvYWRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoXCJkb25lXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dChCaW5hcnlUcmVlLmNoZWNrRmxhZywgMTAwMCwgcmVzb2x2ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgO1xuICAgIHN0YXRpYyBhZGRDb25jZXB0VG9UcmVlKGNvbmNlcHQpIHtcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgTm9kZV8xLk5vZGUoY29uY2VwdC5pZCwgY29uY2VwdCwgbnVsbCwgbnVsbCk7XG4gICAgICAgIHZhciBjaGFyYWN0ZXJOb2RlID0gbmV3IE5vZGVfMS5Ob2RlKGNvbmNlcHQuY2hhcmFjdGVyVmFsdWUsIGNvbmNlcHQsIG51bGwsIG51bGwpO1xuICAgICAgICBCaW5hcnlDaGFyYWN0ZXJUcmVlXzEuQmluYXJ5Q2hhcmFjdGVyVHJlZS5hZGROb2RlVG9UcmVlKGNoYXJhY3Rlck5vZGUpO1xuICAgICAgICB0aGlzLmFkZE5vZGVUb1RyZWUobm9kZSk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXROb2RlRnJvbVRyZWUoaWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB5aWVsZCB0aGlzLndhaXRGb3JEYXRhVG9Mb2FkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5yb290KSB7XG4gICAgICAgICAgICAgICAgdmFyIE5vZGUgPSB0aGlzLnJvb3QuZ2V0RnJvbU5vZGUoaWQsIHRoaXMucm9vdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yb290O1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLkJpbmFyeVRyZWUgPSBCaW5hcnlUcmVlO1xuQmluYXJ5VHJlZS5yb290ID0gbnVsbDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkJpbmFyeVR5cGVUcmVlID0gdm9pZCAwO1xuY29uc3QgQ29uY2VwdF8xID0gcmVxdWlyZShcIi4uL0RhdGFTdHJ1Y3R1cmVzL0NvbmNlcHRcIik7XG5jb25zdCBJZGVudGlmaWVyRmxhZ3NfMSA9IHJlcXVpcmUoXCIuL0lkZW50aWZpZXJGbGFnc1wiKTtcbmNvbnN0IE5vZGVfMSA9IHJlcXVpcmUoXCIuL05vZGVcIik7XG5jbGFzcyBCaW5hcnlUeXBlVHJlZSB7XG4gICAgc3RhdGljIGFkZE5vZGVUb1RyZWUobm9kZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudHlwZVJvb3QgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0eXBlIHJvb3QgXCIsIG5vZGUpO1xuICAgICAgICAgICAgICAgIHRoaXMudHlwZVJvb3QgPSBub2RlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnR5cGVSb290O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50eXBlUm9vdCA9IHRoaXMudHlwZVJvb3QuYWRkVHlwZU5vZGUobm9kZSwgdGhpcy50eXBlUm9vdCwgdGhpcy50eXBlUm9vdC5oZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHlwZVJvb3Q7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgYWRkQ29uY2VwdFRvVHJlZShjb25jZXB0KSB7XG4gICAgICAgIGlmIChjb25jZXB0LnR5cGVJZCAhPSAwKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IG5ldyBOb2RlXzEuTm9kZShjb25jZXB0LnR5cGVJZCwgY29uY2VwdCwgbnVsbCwgbnVsbCk7XG4gICAgICAgICAgICB0aGlzLmFkZE5vZGVUb1RyZWUobm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGdldE5vZGVGcm9tVHJlZShpZCkge1xuICAgICAgICBpZiAodGhpcy50eXBlUm9vdCkge1xuICAgICAgICAgICAgdmFyIE5vZGUgPSB0aGlzLnR5cGVSb290LmdldEZyb21Ob2RlKGlkLCB0aGlzLnR5cGVSb290KTtcbiAgICAgICAgICAgIHJldHVybiBOb2RlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGVSb290O1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0VHlwZVZhcmlhbnRzRnJvbVRyZWUodHlwZUlkKSB7XG4gICAgICAgIHZhciBOb2RlID0gdGhpcy5nZXROb2RlRnJvbVRyZWUodHlwZUlkKTtcbiAgICAgICAgdmFyIGNvbmNlcHRzID0gW107XG4gICAgICAgIGlmIChOb2RlKSB7XG4gICAgICAgICAgICBjb25jZXB0cy5wdXNoKE5vZGUgPT09IG51bGwgfHwgTm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogTm9kZS52YWx1ZSk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE5vZGUudmFyaWFudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25jZXB0cy5wdXNoKE5vZGUudmFyaWFudHNbaV0udmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbmNlcHRzO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyB3YWl0Rm9yRGF0YVRvTG9hZCgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0ZsYWcocmVzb2x2ZSk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChcIm5vdFwiKTtcbiAgICAgICAgICAgICAgICB9LCAyNTAwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBjaGVja0ZsYWcocmVzb2x2ZSkge1xuICAgICAgICBpZiAoSWRlbnRpZmllckZsYWdzXzEuSWRlbnRpZmllckZsYWdzLmlzVHlwZUxvYWRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoXCJkb25lXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dChCaW5hcnlUeXBlVHJlZS5jaGVja0ZsYWcsIDEwMDAsIHJlc29sdmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIDtcbiAgICBzdGF0aWMgZ2V0VHlwZVZhcmlhbnRzRnJvbVRyZWVXaXRoVXNlcklkKHR5cGVJZCwgdXNlcklkKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB2YXIgY29uY2VwdHMgPSBbXTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB5aWVsZCB0aGlzLndhaXRGb3JEYXRhVG9Mb2FkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbmNlcHRzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIE5vZGUgPSB0aGlzLmdldE5vZGVGcm9tVHJlZSh0eXBlSWQpO1xuICAgICAgICAgICAgaWYgKE5vZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoTm9kZS52YWx1ZS51c2VySWQgPT0gdXNlcklkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmNlcHRzLnB1c2goTm9kZSA9PT0gbnVsbCB8fCBOb2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBOb2RlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOb2RlLnZhcmlhbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChOb2RlLnZhcmlhbnRzW2ldLnZhbHVlLnVzZXJJZCA9PSB1c2VySWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmNlcHRzLnB1c2goTm9kZS52YXJpYW50c1tpXS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29uY2VwdHM7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0VHlwZVZhcmlhbnRzV2l0aENoYXJhY3RlclZhbHVlKGNoYXJhY3RlclZhbHVlLCB0eXBlSWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHZhciBjb25jZXB0ID0gbmV3IENvbmNlcHRfMS5Db25jZXB0KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIFwiMFwiLCAwLCAwLCAwLCAwLCAwLCAwLCBmYWxzZSk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBkYXRhID0geWllbGQgdGhpcy53YWl0Rm9yRGF0YVRvTG9hZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb25jZXB0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIE5vZGUgPSB0aGlzLmdldE5vZGVGcm9tVHJlZSh0eXBlSWQpO1xuICAgICAgICAgICAgaWYgKE5vZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoTm9kZS52YWx1ZS5jaGFyYWN0ZXJWYWx1ZSA9PSBjaGFyYWN0ZXJWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25jZXB0ID0gTm9kZS52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOb2RlLnZhcmlhbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChOb2RlLnZhcmlhbnRzW2ldLnZhbHVlLmNoYXJhY3RlclZhbHVlID09IGNoYXJhY3RlclZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25jZXB0ID0gTm9kZS52YXJpYW50c1tpXS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb25jZXB0O1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLkJpbmFyeVR5cGVUcmVlID0gQmluYXJ5VHlwZVRyZWU7XG5CaW5hcnlUeXBlVHJlZS50eXBlUm9vdCA9IG51bGw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ2hhcmFjdGVyUmVwb3NpdG9yeSA9IHZvaWQgMDtcbmNvbnN0IFRoZUNoYXJhY3Rlcl8xID0gcmVxdWlyZShcIi4vVGhlQ2hhcmFjdGVyXCIpO1xuY2xhc3MgQ2hhcmFjdGVyUmVwb3NpdG9yeSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiY2hhcmFjdGVyIFJlcG9zaXRvcnlcIjtcbiAgICB9XG4gICAgc3RhdGljIEFkZENoYXJhY3RlcihjaGFyYWN0ZXIpIHtcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXJEYXRhW2NoYXJhY3Rlci5pZF0gPSBjaGFyYWN0ZXI7XG4gICAgfVxuICAgIHN0YXRpYyBHZXRDaGFyYWN0ZXIodmFsdWUpIHtcbiAgICAgICAgdmFyIHRoZUNoYXJhY3RlciA9IG5ldyBUaGVDaGFyYWN0ZXJfMS5UaGVDaGFyYWN0ZXIoMCwgXCIwXCIsIDAsIDAsIDAsIDAsIDAsIDAsIFwiMFwiLCBmYWxzZSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGFyYWN0ZXJEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGFyYWN0ZXJEYXRhW2ldLmRhdGEgPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGVDaGFyYWN0ZXIgPSB0aGlzLmNoYXJhY3RlckRhdGFbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoZUNoYXJhY3RlcjtcbiAgICB9XG59XG5leHBvcnRzLkNoYXJhY3RlclJlcG9zaXRvcnkgPSBDaGFyYWN0ZXJSZXBvc2l0b3J5O1xuQ2hhcmFjdGVyUmVwb3NpdG9yeS5jaGFyYWN0ZXJEYXRhID0gW107XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ29uY2VwdCA9IHZvaWQgMDtcbmNsYXNzIENvbmNlcHQge1xuICAgIGNvbnN0cnVjdG9yKGlkLCB1c2VySWQsIHR5cGVJZCwgdHlwZVVzZXJJZCwgY2F0ZWdvcnlJZCwgY2F0ZWdvcnlVc2VySWQsIHJlZmVyZW50SWQsIHJlZmVyZW50VXNlcklkLCBjaGFyYWN0ZXJWYWx1ZSwgc2VjdXJpdHlJZCwgc2VjdXJpdHlVc2VySWQsIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQsIHNlc3Npb25JZCwgc2Vzc2lvblVzZXJJZCwgaXNOZXcgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLmlzVGVtcCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMudXNlcklkID0gdXNlcklkO1xuICAgICAgICB0aGlzLnR5cGVJZCA9IHR5cGVJZDtcbiAgICAgICAgdGhpcy50eXBlVXNlcklkID0gdHlwZVVzZXJJZDtcbiAgICAgICAgdGhpcy5jYXRlZ29yeUlkID0gY2F0ZWdvcnlJZDtcbiAgICAgICAgdGhpcy5jYXRlZ29yeVVzZXJJZCA9IGNhdGVnb3J5VXNlcklkO1xuICAgICAgICB0aGlzLnJlZmVyZW50SWQgPSByZWZlcmVudElkO1xuICAgICAgICB0aGlzLnJlZmVyZW50ID0gcmVmZXJlbnRJZDtcbiAgICAgICAgdGhpcy5yZWZlcmVudFVzZXJJZCA9IHJlZmVyZW50VXNlcklkO1xuICAgICAgICB0aGlzLmNoYXJhY3RlclZhbHVlID0gYCR7Y2hhcmFjdGVyVmFsdWV9YDtcbiAgICAgICAgdGhpcy5zZWN1cml0eUlkID0gc2VjdXJpdHlJZDtcbiAgICAgICAgdGhpcy5zZWN1cml0eVVzZXJJZCA9IHNlY3VyaXR5VXNlcklkO1xuICAgICAgICB0aGlzLmFjY2Vzc0lkID0gYWNjZXNzSWQ7XG4gICAgICAgIHRoaXMuYWNjZXNzVXNlcklkID0gYWNjZXNzVXNlcklkO1xuICAgICAgICB0aGlzLnNlc3Npb25JZCA9IHNlc3Npb25JZDtcbiAgICAgICAgdGhpcy5zZXNzaW9uVXNlcklkID0gc2Vzc2lvblVzZXJJZDtcbiAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgdGhpcy50eXBlID0gbnVsbDtcbiAgICAgICAgdGhpcy5pc05ldyA9IGlzTmV3O1xuICAgICAgICAvLyBDb25jZXB0c0RhdGEuQWRkQ29uY2VwdCh0aGlzKTtcbiAgICB9XG4gICAgZ2V0VHlwZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy50eXBlSWQpO1xuICAgIH1cbn1cbmV4cG9ydHMuQ29uY2VwdCA9IENvbmNlcHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Db25jZXB0c0RhdGEgPSB2b2lkIDA7XG5jb25zdCBDb25jZXB0XzEgPSByZXF1aXJlKFwiLi9Db25jZXB0XCIpO1xuY29uc3QgaW5kZXhlZGRiXzEgPSByZXF1aXJlKFwiLi4vRGF0YWJhc2UvaW5kZXhlZGRiXCIpO1xuY29uc3QgQmluYXJ5VHJlZV8xID0gcmVxdWlyZShcIi4vQmluYXJ5VHJlZVwiKTtcbmNvbnN0IEJpbmFyeUNoYXJhY3RlclRyZWVfMSA9IHJlcXVpcmUoXCIuL0JpbmFyeUNoYXJhY3RlclRyZWVcIik7XG5jb25zdCBCaW5hcnlUeXBlVHJlZV8xID0gcmVxdWlyZShcIi4vQmluYXJ5VHlwZVRyZWVcIik7XG5jbGFzcyBDb25jZXB0c0RhdGEge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm5hbWUgPSBcImNvbmNlcHRzQXJyYXlcIjtcbiAgICB9XG4gICAgc3RhdGljIENoZWNrQ29udGFpbnMoY29uY2VwdCkge1xuICAgICAgICB2YXIgY29udGFpbnMgPSBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbmNlcHRzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmNlcHRzQXJyYXlbaV0uaWQgPT0gY29uY2VwdC5pZCkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5zID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGFpbnM7XG4gICAgfVxuICAgIHN0YXRpYyBBZGRDb25jZXB0KGNvbmNlcHQpIHtcbiAgICAgICAgaWYgKGNvbmNlcHQuaWQgPiAwKSB7XG4gICAgICAgICAgICAvL3ZhciBjb250YWlucyA9IHRoaXMuQ2hlY2tDb250YWlucyhjb25jZXB0KTtcbiAgICAgICAgICAgIC8vIHRoaXMuY29uY2VwdERpY3Rpb25hcnlbY29uY2VwdC5pZF0gPSBjb25jZXB0O1xuICAgICAgICAgICAgLy8gICAgaWYoY29udGFpbnMpe1xuICAgICAgICAgICAgLy8gICB0aGlzLlJlbW92ZUNvbmNlcHQoY29uY2VwdCk7XG4gICAgICAgICAgICAvLyAgfVxuICAgICAgICAgICAgKDAsIGluZGV4ZWRkYl8xLnN0b3JlVG9EYXRhYmFzZSkoXCJjb25jZXB0XCIsIGNvbmNlcHQpO1xuICAgICAgICAgICAgQmluYXJ5VHJlZV8xLkJpbmFyeVRyZWUuYWRkQ29uY2VwdFRvVHJlZShjb25jZXB0KTtcbiAgICAgICAgICAgIEJpbmFyeVR5cGVUcmVlXzEuQmluYXJ5VHlwZVRyZWUuYWRkQ29uY2VwdFRvVHJlZShjb25jZXB0KTtcbiAgICAgICAgICAgIEJpbmFyeUNoYXJhY3RlclRyZWVfMS5CaW5hcnlDaGFyYWN0ZXJUcmVlLmFkZENvbmNlcHRUb1RyZWUoY29uY2VwdCk7XG4gICAgICAgICAgICB0aGlzLmNvbmNlcHRzQXJyYXkucHVzaChjb25jZXB0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgQWRkQ29uY2VwdFRlbXBvcmFyeShjb25jZXB0KSB7XG4gICAgICAgIHZhciBjb250YWlucyA9IHRoaXMuQ2hlY2tDb250YWlucyhjb25jZXB0KTtcbiAgICAgICAgdGhpcy5jb25jZXB0RGljdGlvbmFyeVtjb25jZXB0LmlkXSA9IGNvbmNlcHQ7XG4gICAgICAgIGlmIChjb250YWlucykge1xuICAgICAgICAgICAgdGhpcy5SZW1vdmVDb25jZXB0KGNvbmNlcHQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29uY2VwdHNBcnJheS5wdXNoKGNvbmNlcHQpO1xuICAgIH1cbiAgICBzdGF0aWMgUmVtb3ZlQ29uY2VwdChjb25jZXB0KSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb25jZXB0c0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25jZXB0c0FycmF5W2ldLmlkID09IGNvbmNlcHQuaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmNlcHRzQXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICgwLCBpbmRleGVkZGJfMS5yZW1vdmVGcm9tRGF0YWJhc2UpKFwiY29uY2VwdFwiLCBjb25jZXB0LmlkKTtcbiAgICB9XG4gICAgc3RhdGljIEdldENvbmNlcHQoaWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHZhciBteUNvbmNlcHQgPSBuZXcgQ29uY2VwdF8xLkNvbmNlcHQoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgXCIwXCIsIDAsIDAsIDAsIDAsIDAsIDAsIGZhbHNlKTtcbiAgICAgICAgICAgIHZhciBub2RlID0geWllbGQgQmluYXJ5VHJlZV8xLkJpbmFyeVRyZWUuZ2V0Tm9kZUZyb21UcmVlKGlkKTtcbiAgICAgICAgICAgIGlmIChub2RlID09PSBudWxsIHx8IG5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5vZGUudmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmV0dXJuZWRDb25jZXB0ID0gbm9kZS52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAocmV0dXJuZWRDb25jZXB0KSB7XG4gICAgICAgICAgICAgICAgICAgIG15Q29uY2VwdCA9IHJldHVybmVkQ29uY2VwdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZihteUNvbmNlcHQuaWQgPT0gMCB8fCBteUNvbmNlcHQgPT0gbnVsbCl7XG4gICAgICAgICAgICAvLyAgICAgZm9yKHZhciBpPTA7IGk8dGhpcy5jb25jZXB0c0FycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIC8vICAgICAgICAgaWYodGhpcy5jb25jZXB0c0FycmF5W2ldLmlkID09IGlkKXtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIG15Q29uY2VwdCA9IHRoaXMuY29uY2VwdHNBcnJheVtpXTtcbiAgICAgICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIHJldHVybiBteUNvbmNlcHQ7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyKGNoYXJhY3RlclZhbHVlKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB2YXIgY29uY2VwdCA9IG5ldyBDb25jZXB0XzEuQ29uY2VwdCgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCBcIjBcIiwgMCwgMCwgMCwgMCwgMCwgMCwgZmFsc2UpO1xuICAgICAgICAgICAgLy8gIGZvcih2YXIgaT0wOyBpPHRoaXMuY29uY2VwdHNBcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAvLyAgICAgIGlmKHRoaXMuY29uY2VwdHNBcnJheVtpXS5jaGFyYWN0ZXJWYWx1ZSA9PSBjaGFyYWN0ZXJWYWx1ZSl7XG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbmNlcHQgPSB0aGlzLmNvbmNlcHRzQXJyYXlbaV07XG4gICAgICAgICAgICAvLyAgICAgIH1cbiAgICAgICAgICAgIC8vICB9XG4gICAgICAgICAgICB2YXIgTm9kZSA9IEJpbmFyeUNoYXJhY3RlclRyZWVfMS5CaW5hcnlDaGFyYWN0ZXJUcmVlLmdldE5vZGVGcm9tVHJlZShjaGFyYWN0ZXJWYWx1ZSk7XG4gICAgICAgICAgICBpZiAoTm9kZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ290IHRoZSBjaGFyYWN0ZXJcIik7XG4gICAgICAgICAgICAgICAgY29uY2VwdCA9IE5vZGUudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjaGFyYWN0ZXJWYWx1ZSk7XG4gICAgICAgICAgICAvLyB2YXIgTm9kZSA9IEJpbmFyeUNoYXJhY3RlclRyZWUuZ2V0Tm9kZUZyb21UcmVlKGNoYXJhY3RlclZhbHVlKTtcbiAgICAgICAgICAgIC8vIGlmKE5vZGUpe1xuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKE5vZGUudmFsdWUpO1xuICAgICAgICAgICAgLy8gICAgIHJldHVybiBOb2RlLnZhbHVlO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgcmV0dXJuIGNvbmNlcHQ7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyQW5kVHlwZUxvY2FsKGNoYXJhY3Rlcl92YWx1ZSwgdHlwZUlkKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB2YXIgY29uY2VwdCA9IG5ldyBDb25jZXB0XzEuQ29uY2VwdCgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCBcIjBcIiwgMCwgMCwgMCwgMCwgMCwgMCwgZmFsc2UpO1xuICAgICAgICAgICAgLy92YXIgTm9kZSA9IGF3YWl0IEJpbmFyeUNoYXJhY3RlclRyZWUuZ2V0Q2hhcmFjdGVyQW5kVHlwZUZyb21UcmVlKGNoYXJhY3Rlcl92YWx1ZSx0eXBlSWQpO1xuICAgICAgICAgICAgY29uY2VwdCA9IHlpZWxkIEJpbmFyeVR5cGVUcmVlXzEuQmluYXJ5VHlwZVRyZWUuZ2V0VHlwZVZhcmlhbnRzV2l0aENoYXJhY3RlclZhbHVlKGNoYXJhY3Rlcl92YWx1ZSwgdHlwZUlkKTtcbiAgICAgICAgICAgIC8vIGlmKE5vZGUpe1xuICAgICAgICAgICAgLy8gICAgIGNvbmNlcHQgPSAgTm9kZS52YWx1ZTtcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcImZvdW5kIHRoZSBvdXRwdXRcIik7XG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coY29uY2VwdCk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICByZXR1cm4gY29uY2VwdDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBHZXRDb25jZXB0c0J5VHlwZUlkKHR5cGVJZCkge1xuICAgICAgICB2YXIgbXlDb25jZXB0O1xuICAgICAgICBsZXQgQ29uY2VwdExpc3QgPSBbXTtcbiAgICAgICAgbXlDb25jZXB0ID0gbnVsbDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbmNlcHRzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmNlcHRzQXJyYXlbaV0udHlwZUlkID09IHR5cGVJZCkge1xuICAgICAgICAgICAgICAgIENvbmNlcHRMaXN0LnB1c2godGhpcy5jb25jZXB0c0FycmF5W2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyAgZ2V0RnJvbURhdGFiYXNlV2l0aFR5cGUoXCJjb25jZXB0XCIsXCJ0eXBlSWRcIix0eXBlSWQpLnRoZW4oY29uY2VwdExpc3Q9PntcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwidGhpIHNpcyBteSBsaXN0XCIpO1xuICAgICAgICAvLyAgfSk7XG4gICAgICAgIC8vICAgdmFyIGRiQ29uY2VwdExpc3QgPSBhd2FpdCBnZXRGcm9tRGF0YWJhc2VXaXRoVHlwZU9sZChcImNvbmNlcHRcIixcInR5cGVJZFwiLCB0eXBlSWQpO1xuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKGRiQ29uY2VwdExpc3QpO1xuICAgICAgICAvLyAgIGlmKEFycmF5LmlzQXJyYXkoZGJDb25jZXB0TGlzdCkpe1xuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGRiQ29uY2VwdExpc3QpO1xuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGRiQ29uY2VwdExpc3QubGVuZ3RoKTtcbiAgICAgICAgLy8gIGZvcih2YXIgaT0wOyBpPCBkYkNvbmNlcHRMaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiaGVyZSB0byBwdXNoIGZpcnN0c1wiKTtcbiAgICAgICAgLy8gICAgIHZhciBjb250YWluczogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgICAvLyAgICAgZm9yKHZhciBqPTA7IGo8IENvbmNlcHRMaXN0Lmxlbmd0aDsgaisrKXtcbiAgICAgICAgLy8gICAgICAgICBpZihkYkNvbmNlcHRMaXN0W2ldLmlkID09IENvbmNlcHRMaXN0W2pdLmlkKXtcbiAgICAgICAgLy8gICAgICAgICAgICAgY29udGFpbnMgPSB0cnVlO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiaGVyZSB0byBwdXNoXCIpO1xuICAgICAgICAvLyAgICAgaWYoIWNvbnRhaW5zKXtcbiAgICAgICAgLy8gICAgICAgICBDb25jZXB0TGlzdC5wdXNoKGRiQ29uY2VwdExpc3RbaV0pO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgY29uY2VwdCBsaXN0XCIpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhDb25jZXB0TGlzdCk7XG4gICAgICAgIHJldHVybiBDb25jZXB0TGlzdDtcbiAgICB9XG4gICAgc3RhdGljIEdldENvbmNlcHRzQnlUeXBlSWRBbmRVc2VyKHR5cGVJZCwgdXNlcklkKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBsZXQgQ29uY2VwdExpc3QgPSBbXTtcbiAgICAgICAgICAgIENvbmNlcHRMaXN0ID0geWllbGQgQmluYXJ5VHlwZVRyZWVfMS5CaW5hcnlUeXBlVHJlZS5nZXRUeXBlVmFyaWFudHNGcm9tVHJlZVdpdGhVc2VySWQodHlwZUlkLCB1c2VySWQpO1xuICAgICAgICAgICAgcmV0dXJuIENvbmNlcHRMaXN0O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG59XG5leHBvcnRzLkNvbmNlcHRzRGF0YSA9IENvbmNlcHRzRGF0YTtcbkNvbmNlcHRzRGF0YS5jb25jZXB0c0FycmF5ID0gW107XG5Db25jZXB0c0RhdGEuY29uY2VwdERpY3Rpb25hcnkgPSBbXTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Db25uZWN0aW9uID0gdm9pZCAwO1xuY2xhc3MgQ29ubmVjdGlvbiB7XG4gICAgY29uc3RydWN0b3IoaWQgPSAwLCBvZlRoZUNvbmNlcHRJZCwgdG9UaGVDb25jZXB0SWQsIG9mVGhlQ29uY2VwdFVzZXJJZCwgdG9UaGVDb25jZXB0VXNlcklkLCB1c2VySWQsIHR5cGVJZCwgdHlwZVVzZXJJZCwgb3JkZXJJZCwgb3JkZXJVc2VySWQsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkKSB7XG4gICAgICAgIHRoaXMuaXNUZW1wID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5PZlRoZUNvbmNlcHRJZCA9IG9mVGhlQ29uY2VwdElkO1xuICAgICAgICB0aGlzLlRvVGhlQ29uY2VwdElkID0gdG9UaGVDb25jZXB0SWQ7XG4gICAgICAgIHRoaXMub2ZUaGVDb25jZXB0SWQgPSBvZlRoZUNvbmNlcHRJZDtcbiAgICAgICAgdGhpcy50b1RoZUNvbmNlcHRJZCA9IHRvVGhlQ29uY2VwdElkO1xuICAgICAgICB0aGlzLk9mVGhlQ29uY2VwdFVzZXJJZCA9IG9mVGhlQ29uY2VwdFVzZXJJZDtcbiAgICAgICAgdGhpcy5Ub1RoZUNvbmNlcHRVc2VySWQgPSB0b1RoZUNvbmNlcHRVc2VySWQ7XG4gICAgICAgIHRoaXMudXNlcklkID0gdXNlcklkO1xuICAgICAgICB0aGlzLnR5cGVJZCA9IHR5cGVJZDtcbiAgICAgICAgdGhpcy50eXBlVXNlcklkID0gdHlwZVVzZXJJZDtcbiAgICAgICAgdGhpcy5vcmRlcklkID0gb3JkZXJJZDtcbiAgICAgICAgdGhpcy5vcmRlclVzZXJJZCA9IG9yZGVyVXNlcklkO1xuICAgICAgICB0aGlzLnNlY3VyaXR5SWQgPSBzZWN1cml0eUlkO1xuICAgICAgICB0aGlzLnNlY3VyaXR5VXNlcklkID0gc2VjdXJpdHlVc2VySWQ7XG4gICAgICAgIHRoaXMuYWNjZXNzSWQgPSBhY2Nlc3NJZDtcbiAgICAgICAgdGhpcy5hY2Nlc3NVc2VySWQgPSBhY2Nlc3NVc2VySWQ7XG4gICAgICAgIHRoaXMuc2Vzc2lvbkluZm9ybWF0aW9uSWQgPSBzZXNzaW9uSW5mb3JtYXRpb25JZDtcbiAgICAgICAgdGhpcy5zZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQgPSBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQ7XG4gICAgICAgIHRoaXMuZW50cnlUaW1lU3RhbXAgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB0aGlzLnRlcm1pbmF0aW9uRGF0ZVRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB0aGlzLmxvY2FsU3luY1RpbWUgPSBuZXcgRGF0ZSgpO1xuICAgIH1cbn1cbmV4cG9ydHMuQ29ubmVjdGlvbiA9IENvbm5lY3Rpb247XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ29ubmVjdGlvbkRhdGEgPSB2b2lkIDA7XG5jb25zdCBpbmRleGVkZGJfMSA9IHJlcXVpcmUoXCIuLi9EYXRhYmFzZS9pbmRleGVkZGJcIik7XG5jbGFzcyBDb25uZWN0aW9uRGF0YSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiQ29ubmVjdGlvbiBBcnJheVwiO1xuICAgIH1cbiAgICBzdGF0aWMgQ2hlY2tDb250YWlucyhjb25uZWN0aW9uKSB7XG4gICAgICAgIHZhciBjb250YWlucyA9IGZhbHNlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29ubmVjdGlvbkFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uQXJyYXlbaV0uaWQgPT0gY29ubmVjdGlvbi5pZCkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5zID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGFpbnM7XG4gICAgfVxuICAgIHN0YXRpYyBBZGRDb25uZWN0aW9uKGNvbm5lY3Rpb24pIHtcbiAgICAgICAgdmFyIGNvbnRhaW5zID0gdGhpcy5DaGVja0NvbnRhaW5zKGNvbm5lY3Rpb24pO1xuICAgICAgICBpZiAoY29udGFpbnMpIHtcbiAgICAgICAgICAgIHRoaXMuUmVtb3ZlQ29ubmVjdGlvbihjb25uZWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29ubmVjdGlvbi5pZCAhPSAwIHx8IGNvbm5lY3Rpb24uaXNUZW1wKSB7XG4gICAgICAgICAgICAoMCwgaW5kZXhlZGRiXzEuc3RvcmVUb0RhdGFiYXNlKShcImNvbm5lY3Rpb25cIiwgY29ubmVjdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb25uZWN0aW9uQXJyYXkucHVzaChjb25uZWN0aW9uKTtcbiAgICB9XG4gICAgc3RhdGljIEFkZFRvRGljdGlvbmFyeShjb25uZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbkRpY3Rpb25hcnlbY29ubmVjdGlvbi5pZF0gPSBjb25uZWN0aW9uO1xuICAgIH1cbiAgICBzdGF0aWMgUmVtb3ZlQ29ubmVjdGlvbihjb25uZWN0aW9uKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb25uZWN0aW9uQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25BcnJheVtpXS5pZCA9PSBjb25uZWN0aW9uLmlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uQXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjb25uZWN0aW9uLmlkICE9IDApIHtcbiAgICAgICAgICAgICgwLCBpbmRleGVkZGJfMS5yZW1vdmVGcm9tRGF0YWJhc2UpKFwiY29ubmVjdGlvblwiLCBjb25uZWN0aW9uLmlkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgR2V0Q29ubmVjdGlvbihpZCkge1xuICAgICAgICB2YXIgbXlDb25jZXB0O1xuICAgICAgICBteUNvbmNlcHQgPSBudWxsO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29ubmVjdGlvbkFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uQXJyYXlbaV0uaWQgPT0gaWQpIHtcbiAgICAgICAgICAgICAgICBteUNvbmNlcHQgPSB0aGlzLmNvbm5lY3Rpb25BcnJheVtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbXlDb25jZXB0O1xuICAgIH1cbiAgICBzdGF0aWMgR2V0Q29ubmVjdGlvbnNPZkNvbXBvc2l0aW9uTG9jYWwoaWQpIHtcbiAgICAgICAgdmFyIGNvbm5lY3Rpb25MaXN0ID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb25uZWN0aW9uQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25BcnJheVtpXS50eXBlSWQgPT0gaWQpIHtcbiAgICAgICAgICAgICAgICBjb25uZWN0aW9uTGlzdC5wdXNoKHRoaXMuY29ubmVjdGlvbkFycmF5W2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29ubmVjdGlvbkxpc3Q7XG4gICAgfVxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxufVxuZXhwb3J0cy5Db25uZWN0aW9uRGF0YSA9IENvbm5lY3Rpb25EYXRhO1xuQ29ubmVjdGlvbkRhdGEuY29ubmVjdGlvbkFycmF5ID0gW107XG5Db25uZWN0aW9uRGF0YS5jb25uZWN0aW9uRGljdGlvbmFyeSA9IFtdO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLklkZW50aWZpZXJGbGFncyA9IHZvaWQgMDtcbmNsYXNzIElkZW50aWZpZXJGbGFncyB7XG59XG5leHBvcnRzLklkZW50aWZpZXJGbGFncyA9IElkZW50aWZpZXJGbGFncztcbklkZW50aWZpZXJGbGFncy5pc1R5cGVMb2FkZWQgPSBmYWxzZTtcbklkZW50aWZpZXJGbGFncy5pc0NoYXJhY3RlckxvYWRlZCA9IGZhbHNlO1xuSWRlbnRpZmllckZsYWdzLmlzRGF0YUxvYWRlZCA9IGZhbHNlO1xuSWRlbnRpZmllckZsYWdzLmlzTG9jYWxEYXRhTG9hZGVkID0gZmFsc2U7XG5JZGVudGlmaWVyRmxhZ3MuaXNMb2NhbENoYXJhY3RlckxvYWRlZCA9IGZhbHNlO1xuSWRlbnRpZmllckZsYWdzLmlzTG9jYWxUeXBlTG9hZGVkID0gZmFsc2U7XG5JZGVudGlmaWVyRmxhZ3MuaXNMb2NhbENvbm5lY3Rpb25Mb2FkZWQgPSBmYWxzZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkxvY2FsQmluYXJ5Q2hhcmFjdGVyVHJlZSA9IHZvaWQgMDtcbmNvbnN0IElkZW50aWZpZXJGbGFnc18xID0gcmVxdWlyZShcIi4vLi4vSWRlbnRpZmllckZsYWdzXCIpO1xuY29uc3QgTm9kZV8xID0gcmVxdWlyZShcIi4vLi4vTm9kZVwiKTtcbmNsYXNzIExvY2FsQmluYXJ5Q2hhcmFjdGVyVHJlZSB7XG4gICAgc3RhdGljIHdhaXRGb3JEYXRhVG9Mb2FkKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRmxhZyhyZXNvbHZlKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwibm90XCIpO1xuICAgICAgICAgICAgICAgIH0sIDI1MDAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIGNoZWNrRmxhZyhyZXNvbHZlKSB7XG4gICAgICAgIGlmIChJZGVudGlmaWVyRmxhZ3NfMS5JZGVudGlmaWVyRmxhZ3MuaXNMb2NhbENoYXJhY3RlckxvYWRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoXCJkb25lXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dChMb2NhbEJpbmFyeUNoYXJhY3RlclRyZWUuY2hlY2tGbGFnLCAxMDAwLCByZXNvbHZlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICA7XG4gICAgc3RhdGljIGFkZE5vZGVUb1RyZWUobm9kZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuTG9jYWxDaGFyYWN0ZXJSb290ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLkxvY2FsQ2hhcmFjdGVyUm9vdCA9IG5vZGU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuTG9jYWxDaGFyYWN0ZXJSb290O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5Mb2NhbENoYXJhY3RlclJvb3QgPSB0aGlzLkxvY2FsQ2hhcmFjdGVyUm9vdC5hZGRDaGFyYWN0ZXJOb2RlKG5vZGUsIHRoaXMuTG9jYWxDaGFyYWN0ZXJSb290LCB0aGlzLkxvY2FsQ2hhcmFjdGVyUm9vdC5oZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuTG9jYWxDaGFyYWN0ZXJSb290O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIGFkZENvbmNlcHRUb1RyZWUoY29uY2VwdCkge1xuICAgICAgICBpZiAoY29uY2VwdC5jaGFyYWN0ZXJWYWx1ZSAhPSBcIlwiKSB7XG4gICAgICAgICAgICB2YXIgbm9kZSA9IG5ldyBOb2RlXzEuTm9kZShjb25jZXB0LmNoYXJhY3RlclZhbHVlLCBjb25jZXB0LCBudWxsLCBudWxsKTtcbiAgICAgICAgICAgIHRoaXMuYWRkTm9kZVRvVHJlZShub2RlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgZ2V0Tm9kZUZyb21UcmVlKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLkxvY2FsQ2hhcmFjdGVyUm9vdCkge1xuICAgICAgICAgICAgdmFyIE5vZGUgPSB0aGlzLkxvY2FsQ2hhcmFjdGVyUm9vdC5nZXRDaGFyYWN0ZXJGcm9tTm9kZSh2YWx1ZSwgdGhpcy5Mb2NhbENoYXJhY3RlclJvb3QpO1xuICAgICAgICAgICAgcmV0dXJuIE5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuTG9jYWxDaGFyYWN0ZXJSb290O1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0Q2hhcmFjdGVyQW5kVHlwZUZyb21UcmVlKHZhbHVlLCB0eXBlSWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB5aWVsZCB0aGlzLndhaXRGb3JEYXRhVG9Mb2FkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5Mb2NhbENoYXJhY3RlclJvb3QpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNlYXJjaGluZyAuLi4uLi4uLi4uLi4uLi4uLlwiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgdmFyIE5vZGUgPSB0aGlzLkxvY2FsQ2hhcmFjdGVyUm9vdC5nZXRGcm9tTm9kZVdpdGhDaGFyYWN0ZXJBbmRUeXBlKHZhbHVlLCB0eXBlSWQsIHRoaXMuTG9jYWxDaGFyYWN0ZXJSb290KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gTm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLkxvY2FsQ2hhcmFjdGVyUm9vdDtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5Mb2NhbEJpbmFyeUNoYXJhY3RlclRyZWUgPSBMb2NhbEJpbmFyeUNoYXJhY3RlclRyZWU7XG5Mb2NhbEJpbmFyeUNoYXJhY3RlclRyZWUuTG9jYWxDaGFyYWN0ZXJSb290ID0gbnVsbDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkxvY2FsQmluYXJ5VHJlZSA9IHZvaWQgMDtcbmNvbnN0IElkZW50aWZpZXJGbGFnc18xID0gcmVxdWlyZShcIi4uL0lkZW50aWZpZXJGbGFnc1wiKTtcbmNvbnN0IE5vZGVfMSA9IHJlcXVpcmUoXCIuLy4uL05vZGVcIik7XG5jbGFzcyBMb2NhbEJpbmFyeVRyZWUge1xuICAgIHN0YXRpYyBhZGROb2RlVG9UcmVlKG5vZGUpIHtcbiAgICAgICAgaWYgKHRoaXMucm9vdCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnJvb3QgPSBub2RlO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucm9vdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucm9vdCA9IHRoaXMucm9vdC5hZGROb2RlKG5vZGUsIHRoaXMucm9vdCwgdGhpcy5yb290LmhlaWdodCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGFkZENvbmNlcHRUb1RyZWUoY29uY2VwdCkge1xuICAgICAgICB2YXIgbm9kZSA9IG5ldyBOb2RlXzEuTm9kZShjb25jZXB0LmlkLCBjb25jZXB0LCBudWxsLCBudWxsKTtcbiAgICAgICAgdmFyIGNoYXJhY3Rlck5vZGUgPSBuZXcgTm9kZV8xLk5vZGUoY29uY2VwdC5jaGFyYWN0ZXJWYWx1ZSwgY29uY2VwdCwgbnVsbCwgbnVsbCk7XG4gICAgICAgIHRoaXMuYWRkTm9kZVRvVHJlZShub2RlKTtcbiAgICB9XG4gICAgc3RhdGljIHdhaXRGb3JEYXRhVG9Mb2FkKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRmxhZyhyZXNvbHZlKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwibm90XCIpO1xuICAgICAgICAgICAgICAgIH0sIDI1MDAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIGNoZWNrRmxhZyhyZXNvbHZlKSB7XG4gICAgICAgIGlmIChJZGVudGlmaWVyRmxhZ3NfMS5JZGVudGlmaWVyRmxhZ3MuaXNMb2NhbERhdGFMb2FkZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKFwiZG9uZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoTG9jYWxCaW5hcnlUcmVlLmNoZWNrRmxhZywgMTAwMCwgcmVzb2x2ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgO1xuICAgIHN0YXRpYyBnZXROb2RlRnJvbVRyZWUoaWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB5aWVsZCB0aGlzLndhaXRGb3JEYXRhVG9Mb2FkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5yb290KSB7XG4gICAgICAgICAgICAgICAgdmFyIE5vZGUgPSB0aGlzLnJvb3QuZ2V0RnJvbU5vZGUoaWQsIHRoaXMucm9vdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yb290O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIGdldENoYXJhY3RlckFuZFR5cGVGcm9tVHJlZSh2YWx1ZSwgdHlwZUlkKSB7XG4gICAgICAgIGlmICh0aGlzLnJvb3QpIHtcbiAgICAgICAgICAgIHZhciBOb2RlID0gdGhpcy5yb290LmdldEZyb21Ob2RlV2l0aENoYXJhY3RlckFuZFR5cGUodmFsdWUsIHR5cGVJZCwgdGhpcy5yb290KTtcbiAgICAgICAgICAgIHJldHVybiBOb2RlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJvb3Q7XG4gICAgfVxufVxuZXhwb3J0cy5Mb2NhbEJpbmFyeVRyZWUgPSBMb2NhbEJpbmFyeVRyZWU7XG5Mb2NhbEJpbmFyeVRyZWUucm9vdCA9IG51bGw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Mb2NhbEJpbmFyeVR5cGVUcmVlID0gdm9pZCAwO1xuY29uc3QgSWRlbnRpZmllckZsYWdzXzEgPSByZXF1aXJlKFwiLi8uLi9JZGVudGlmaWVyRmxhZ3NcIik7XG5jb25zdCBOb2RlXzEgPSByZXF1aXJlKFwiLi8uLi9Ob2RlXCIpO1xuY2xhc3MgTG9jYWxCaW5hcnlUeXBlVHJlZSB7XG4gICAgc3RhdGljIGFkZE5vZGVUb1RyZWUobm9kZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuTG9jYWxUeXBlUm9vdCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHR5cGUgcm9vdCBcIiwgbm9kZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5Mb2NhbFR5cGVSb290ID0gbm9kZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Mb2NhbFR5cGVSb290O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5Mb2NhbFR5cGVSb290ID0gdGhpcy5Mb2NhbFR5cGVSb290LmFkZFR5cGVOb2RlKG5vZGUsIHRoaXMuTG9jYWxUeXBlUm9vdCwgdGhpcy5Mb2NhbFR5cGVSb290LmhlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5Mb2NhbFR5cGVSb290O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIGFkZENvbmNlcHRUb1RyZWUoY29uY2VwdCkge1xuICAgICAgICBpZiAoY29uY2VwdC50eXBlSWQgIT0gMCkge1xuICAgICAgICAgICAgdmFyIG5vZGUgPSBuZXcgTm9kZV8xLk5vZGUoY29uY2VwdC50eXBlSWQsIGNvbmNlcHQsIG51bGwsIG51bGwpO1xuICAgICAgICAgICAgdGhpcy5hZGROb2RlVG9UcmVlKG5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBnZXROb2RlRnJvbVRyZWUoaWQpIHtcbiAgICAgICAgaWYgKHRoaXMuTG9jYWxUeXBlUm9vdCkge1xuICAgICAgICAgICAgdmFyIE5vZGUgPSB0aGlzLkxvY2FsVHlwZVJvb3QuZ2V0RnJvbU5vZGUoaWQsIHRoaXMuTG9jYWxUeXBlUm9vdCk7XG4gICAgICAgICAgICByZXR1cm4gTm9kZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5Mb2NhbFR5cGVSb290O1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0VHlwZVZhcmlhbnRzRnJvbVRyZWUodHlwZUlkKSB7XG4gICAgICAgIHZhciBOb2RlID0gdGhpcy5nZXROb2RlRnJvbVRyZWUodHlwZUlkKTtcbiAgICAgICAgdmFyIGNvbmNlcHRzID0gW107XG4gICAgICAgIGlmIChOb2RlKSB7XG4gICAgICAgICAgICBjb25jZXB0cy5wdXNoKE5vZGUgPT09IG51bGwgfHwgTm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogTm9kZS52YWx1ZSk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE5vZGUudmFyaWFudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25jZXB0cy5wdXNoKE5vZGUudmFyaWFudHNbaV0udmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbmNlcHRzO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyB3YWl0Rm9yRGF0YVRvTG9hZCgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0ZsYWcocmVzb2x2ZSk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChcIm5vdFwiKTtcbiAgICAgICAgICAgICAgICB9LCAyNTAwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBjaGVja0ZsYWcocmVzb2x2ZSkge1xuICAgICAgICBpZiAoSWRlbnRpZmllckZsYWdzXzEuSWRlbnRpZmllckZsYWdzLmlzTG9jYWxUeXBlTG9hZGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShcImRvbmVcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KExvY2FsQmluYXJ5VHlwZVRyZWUuY2hlY2tGbGFnLCAxMDAwLCByZXNvbHZlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICA7XG4gICAgc3RhdGljIGdldFR5cGVWYXJpYW50c0Zyb21UcmVlV2l0aFVzZXJJZCh0eXBlSWQsIHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdmFyIGNvbmNlcHRzID0gW107XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBkYXRhID0geWllbGQgdGhpcy53YWl0Rm9yRGF0YVRvTG9hZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb25jZXB0cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBOb2RlID0gdGhpcy5nZXROb2RlRnJvbVRyZWUodHlwZUlkKTtcbiAgICAgICAgICAgIGlmIChOb2RlKSB7XG4gICAgICAgICAgICAgICAgaWYgKE5vZGUudmFsdWUudXNlcklkID09IHVzZXJJZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25jZXB0cy5wdXNoKE5vZGUgPT09IG51bGwgfHwgTm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogTm9kZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTm9kZS52YXJpYW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoTm9kZS52YXJpYW50c1tpXS52YWx1ZS51c2VySWQgPT0gdXNlcklkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25jZXB0cy5wdXNoKE5vZGUudmFyaWFudHNbaV0udmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbmNlcHRzO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLkxvY2FsQmluYXJ5VHlwZVRyZWUgPSBMb2NhbEJpbmFyeVR5cGVUcmVlO1xuTG9jYWxCaW5hcnlUeXBlVHJlZS5Mb2NhbFR5cGVSb290ID0gbnVsbDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkxvY2FsQ29uY2VwdHNEYXRhID0gdm9pZCAwO1xuY29uc3QgQ29uY2VwdF8xID0gcmVxdWlyZShcIi4vLi4vQ29uY2VwdFwiKTtcbmNvbnN0IGluZGV4ZGJsb2NhbF8xID0gcmVxdWlyZShcIi4uLy4uL0RhdGFiYXNlL2luZGV4ZGJsb2NhbFwiKTtcbmNvbnN0IExvY2FsQmluYXJ5VHJlZV8xID0gcmVxdWlyZShcIi4vTG9jYWxCaW5hcnlUcmVlXCIpO1xuY29uc3QgTG9jYWxCaW5hcnlDaGFyYWN0ZXJUcmVlXzEgPSByZXF1aXJlKFwiLi9Mb2NhbEJpbmFyeUNoYXJhY3RlclRyZWVcIik7XG5jb25zdCBMb2NhbEJpbmFyeVR5cGVUcmVlXzEgPSByZXF1aXJlKFwiLi9Mb2NhbEJpbmFyeVR5cGVUcmVlXCIpO1xuY2xhc3MgTG9jYWxDb25jZXB0c0RhdGEge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm5hbWUgPSBcImNvbmNlcHRzQXJyYXlcIjtcbiAgICB9XG4gICAgc3RhdGljIENoZWNrQ29udGFpbnMoY29uY2VwdCkge1xuICAgICAgICB2YXIgY29udGFpbnMgPSBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxvY2FsY29uY2VwdHNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMubG9jYWxjb25jZXB0c0FycmF5W2ldLmlkID09IGNvbmNlcHQuaWQpIHtcbiAgICAgICAgICAgICAgICBjb250YWlucyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5zO1xuICAgIH1cbiAgICBzdGF0aWMgQWRkQ29uY2VwdChjb25jZXB0KSB7XG4gICAgICAgIGlmIChjb25jZXB0LmlkID4gMCkge1xuICAgICAgICAgICAgKDAsIGluZGV4ZGJsb2NhbF8xLnN0b3JlVG9EYXRhYmFzZSkoXCJsb2NhbGNvbmNlcHRcIiwgY29uY2VwdCk7XG4gICAgICAgICAgICBMb2NhbEJpbmFyeVRyZWVfMS5Mb2NhbEJpbmFyeVRyZWUuYWRkQ29uY2VwdFRvVHJlZShjb25jZXB0KTtcbiAgICAgICAgICAgIExvY2FsQmluYXJ5Q2hhcmFjdGVyVHJlZV8xLkxvY2FsQmluYXJ5Q2hhcmFjdGVyVHJlZS5hZGRDb25jZXB0VG9UcmVlKGNvbmNlcHQpO1xuICAgICAgICAgICAgTG9jYWxCaW5hcnlUeXBlVHJlZV8xLkxvY2FsQmluYXJ5VHlwZVRyZWUuYWRkQ29uY2VwdFRvVHJlZShjb25jZXB0KTtcbiAgICAgICAgICAgIHRoaXMubG9jYWxjb25jZXB0c0FycmF5LnB1c2goY29uY2VwdCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIEFkZENvbmNlcHRUZW1wb3JhcnkoY29uY2VwdCkge1xuICAgICAgICB2YXIgY29udGFpbnMgPSB0aGlzLkNoZWNrQ29udGFpbnMoY29uY2VwdCk7XG4gICAgICAgIHRoaXMubG9jYWxjb25jZXB0c0FycmF5W2NvbmNlcHQuaWRdID0gY29uY2VwdDtcbiAgICAgICAgaWYgKGNvbnRhaW5zKSB7XG4gICAgICAgICAgICB0aGlzLlJlbW92ZUNvbmNlcHQoY29uY2VwdCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2NhbGNvbmNlcHRzQXJyYXkucHVzaChjb25jZXB0KTtcbiAgICB9XG4gICAgc3RhdGljIFJlbW92ZUNvbmNlcHQoY29uY2VwdCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubG9jYWxjb25jZXB0c0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5sb2NhbGNvbmNlcHRzQXJyYXlbaV0uaWQgPT0gY29uY2VwdC5pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxjb25jZXB0c0FycmF5LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyAgcmVtb3ZlRnJvbURhdGFiYXNlKFwiY29uY2VwdFwiLGNvbmNlcHQuaWQpO1xuICAgIH1cbiAgICBzdGF0aWMgR2V0Q29uY2VwdChpZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdmFyIG15Q29uY2VwdCA9IG5ldyBDb25jZXB0XzEuQ29uY2VwdCgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCBcIjBcIiwgMCwgMCwgMCwgMCwgMCwgMCwgZmFsc2UpO1xuICAgICAgICAgICAgdmFyIG5vZGUgPSB5aWVsZCBMb2NhbEJpbmFyeVRyZWVfMS5Mb2NhbEJpbmFyeVRyZWUuZ2V0Tm9kZUZyb21UcmVlKGlkKTtcbiAgICAgICAgICAgIGlmIChub2RlID09PSBudWxsIHx8IG5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5vZGUudmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmV0dXJuZWRDb25jZXB0ID0gbm9kZS52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAocmV0dXJuZWRDb25jZXB0KSB7XG4gICAgICAgICAgICAgICAgICAgIG15Q29uY2VwdCA9IHJldHVybmVkQ29uY2VwdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbXlDb25jZXB0O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIEdldENvbmNlcHRCeUNoYXJhY3RlcihjaGFyYWN0ZXJWYWx1ZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdmFyIGNvbmNlcHQgPSBuZXcgQ29uY2VwdF8xLkNvbmNlcHQoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgXCIwXCIsIDAsIDAsIDAsIDAsIDAsIDAsIGZhbHNlKTtcbiAgICAgICAgICAgIC8vICBmb3IodmFyIGk9MDsgaTx0aGlzLmNvbmNlcHRzQXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgLy8gICAgICBpZih0aGlzLmNvbmNlcHRzQXJyYXlbaV0uY2hhcmFjdGVyVmFsdWUgPT0gY2hhcmFjdGVyVmFsdWUpe1xuICAgICAgICAgICAgLy8gICAgICAgICBjb25jZXB0ID0gdGhpcy5jb25jZXB0c0FycmF5W2ldO1xuICAgICAgICAgICAgLy8gICAgICB9XG4gICAgICAgICAgICAvLyAgfVxuICAgICAgICAgICAgdmFyIE5vZGUgPSBMb2NhbEJpbmFyeUNoYXJhY3RlclRyZWVfMS5Mb2NhbEJpbmFyeUNoYXJhY3RlclRyZWUuZ2V0Tm9kZUZyb21UcmVlKGNoYXJhY3RlclZhbHVlKTtcbiAgICAgICAgICAgIGlmIChOb2RlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnb3QgdGhlIGNoYXJhY3RlclwiKTtcbiAgICAgICAgICAgICAgICBjb25jZXB0ID0gTm9kZS52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb25jZXB0O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIEdldENvbmNlcHRCeUNoYXJhY3RlckFuZFR5cGVMb2NhbChjaGFyYWN0ZXJfdmFsdWUsIHR5cGVJZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdmFyIGNvbmNlcHQgPSBuZXcgQ29uY2VwdF8xLkNvbmNlcHQoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgXCIwXCIsIDAsIDAsIDAsIDAsIDAsIDAsIGZhbHNlKTtcbiAgICAgICAgICAgIC8vIGxldCBjb25jZXB0TGlzdDpDb25jZXB0W10gPSBhd2FpdCB0aGlzLkdldENvbmNlcHRzQnlUeXBlSWQodHlwZUlkKTtcbiAgICAgICAgICAgIC8vIGZvcih2YXIgaT0wO2k8Y29uY2VwdExpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgLy8gICAgIGlmKGNoYXJhY3Rlcl92YWx1ZSA9PSBjb25jZXB0TGlzdFtpXS5jaGFyYWN0ZXJWYWx1ZSl7XG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbmNlcHQgPSBjb25jZXB0TGlzdFtpXTtcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICB2YXIgTm9kZSA9IHlpZWxkIExvY2FsQmluYXJ5Q2hhcmFjdGVyVHJlZV8xLkxvY2FsQmluYXJ5Q2hhcmFjdGVyVHJlZS5nZXRDaGFyYWN0ZXJBbmRUeXBlRnJvbVRyZWUoY2hhcmFjdGVyX3ZhbHVlLCB0eXBlSWQpO1xuICAgICAgICAgICAgaWYgKE5vZGUpIHtcbiAgICAgICAgICAgICAgICBjb25jZXB0ID0gTm9kZS52YWx1ZTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZvdW5kIHRoZSBvdXRwdXRcIik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29uY2VwdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29uY2VwdDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBHZXRDb25jZXB0c0J5VHlwZUlkKHR5cGVJZCkge1xuICAgICAgICB2YXIgbXlDb25jZXB0O1xuICAgICAgICBsZXQgQ29uY2VwdExpc3QgPSBbXTtcbiAgICAgICAgbXlDb25jZXB0ID0gbnVsbDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxvY2FsY29uY2VwdHNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMubG9jYWxjb25jZXB0c0FycmF5W2ldLnR5cGVJZCA9PSB0eXBlSWQpIHtcbiAgICAgICAgICAgICAgICBDb25jZXB0TGlzdC5wdXNoKHRoaXMubG9jYWxjb25jZXB0c0FycmF5W2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQ29uY2VwdExpc3Q7XG4gICAgfVxuICAgIHN0YXRpYyBHZXRDb25jZXB0c0J5VHlwZUlkQW5kVXNlcih0eXBlSWQsIHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdmFyIG15Q29uY2VwdDtcbiAgICAgICAgICAgIGxldCBDb25jZXB0TGlzdCA9IFtdO1xuICAgICAgICAgICAgLy8gbXlDb25jZXB0ID0gbnVsbDtcbiAgICAgICAgICAgIC8vICBmb3IodmFyIGk9MDsgaTx0aGlzLmNvbmNlcHRzQXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgLy8gICAgICBpZih0aGlzLmNvbmNlcHRzQXJyYXlbaV0udHlwZUlkID09IHR5cGVJZCAmJiB0aGlzLmNvbmNlcHRzQXJyYXlbaV0udXNlcklkID09IHVzZXJJZCl7XG4gICAgICAgICAgICAvLyAgICAgICAgICBDb25jZXB0TGlzdC5wdXNoKHRoaXMuY29uY2VwdHNBcnJheVtpXSk7XG4gICAgICAgICAgICAvLyAgICAgIH1cbiAgICAgICAgICAgIC8vICB9XG4gICAgICAgICAgICBDb25jZXB0TGlzdCA9IHlpZWxkIExvY2FsQmluYXJ5VHlwZVRyZWVfMS5Mb2NhbEJpbmFyeVR5cGVUcmVlLmdldFR5cGVWYXJpYW50c0Zyb21UcmVlV2l0aFVzZXJJZCh0eXBlSWQsIHVzZXJJZCk7XG4gICAgICAgICAgICByZXR1cm4gQ29uY2VwdExpc3Q7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cbn1cbmV4cG9ydHMuTG9jYWxDb25jZXB0c0RhdGEgPSBMb2NhbENvbmNlcHRzRGF0YTtcbkxvY2FsQ29uY2VwdHNEYXRhLmxvY2FsY29uY2VwdHNBcnJheSA9IFtdO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTG9jYWxDb25uZWN0aW9uRGF0YSA9IHZvaWQgMDtcbmNvbnN0IGluZGV4ZGJsb2NhbF8xID0gcmVxdWlyZShcIi4uLy4uL0RhdGFiYXNlL2luZGV4ZGJsb2NhbFwiKTtcbmNvbnN0IElkZW50aWZpZXJGbGFnc18xID0gcmVxdWlyZShcIi4uL0lkZW50aWZpZXJGbGFnc1wiKTtcbmNsYXNzIExvY2FsQ29ubmVjdGlvbkRhdGEge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm5hbWUgPSBcIkNvbm5lY3Rpb24gQXJyYXlcIjtcbiAgICB9XG4gICAgc3RhdGljIENoZWNrQ29udGFpbnMoY29ubmVjdGlvbikge1xuICAgICAgICB2YXIgY29udGFpbnMgPSBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbm5lY3Rpb25BcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvbkFycmF5W2ldLmlkID09IGNvbm5lY3Rpb24uaWQpIHtcbiAgICAgICAgICAgICAgICBjb250YWlucyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5zO1xuICAgIH1cbiAgICBzdGF0aWMgQWRkQ29ubmVjdGlvbihjb25uZWN0aW9uKSB7XG4gICAgICAgIHZhciBjb250YWlucyA9IHRoaXMuQ2hlY2tDb250YWlucyhjb25uZWN0aW9uKTtcbiAgICAgICAgaWYgKGNvbnRhaW5zKSB7XG4gICAgICAgICAgICB0aGlzLlJlbW92ZUNvbm5lY3Rpb24oY29ubmVjdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbm5lY3Rpb24uaWQgIT0gMCB8fCBjb25uZWN0aW9uLmlzVGVtcCkge1xuICAgICAgICAgICAgKDAsIGluZGV4ZGJsb2NhbF8xLnN0b3JlVG9EYXRhYmFzZSkoXCJsb2NhbGNvbm5lY3Rpb25cIiwgY29ubmVjdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb25uZWN0aW9uQXJyYXkucHVzaChjb25uZWN0aW9uKTtcbiAgICB9XG4gICAgc3RhdGljIEFkZFRvRGljdGlvbmFyeShjb25uZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbkRpY3Rpb25hcnlbY29ubmVjdGlvbi5pZF0gPSBjb25uZWN0aW9uO1xuICAgIH1cbiAgICBzdGF0aWMgUmVtb3ZlQ29ubmVjdGlvbihjb25uZWN0aW9uKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb25uZWN0aW9uQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25BcnJheVtpXS5pZCA9PSBjb25uZWN0aW9uLmlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uQXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjb25uZWN0aW9uLmlkICE9IDApIHtcbiAgICAgICAgICAgIC8vICByZW1vdmVGcm9tRGF0YWJhc2UoXCJjb25uZWN0aW9uXCIsY29ubmVjdGlvbi5pZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIEdldENvbm5lY3Rpb24oaWQpIHtcbiAgICAgICAgdmFyIG15Q29uY2VwdDtcbiAgICAgICAgbXlDb25jZXB0ID0gbnVsbDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbm5lY3Rpb25BcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvbkFycmF5W2ldLmlkID09IGlkKSB7XG4gICAgICAgICAgICAgICAgbXlDb25jZXB0ID0gdGhpcy5jb25uZWN0aW9uQXJyYXlbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG15Q29uY2VwdDtcbiAgICB9XG4gICAgc3RhdGljIHdhaXRGb3JEYXRhVG9Mb2FkKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRmxhZyhyZXNvbHZlKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwibm90XCIpO1xuICAgICAgICAgICAgICAgIH0sIDI1MDAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIGNoZWNrRmxhZyhyZXNvbHZlKSB7XG4gICAgICAgIGlmIChJZGVudGlmaWVyRmxhZ3NfMS5JZGVudGlmaWVyRmxhZ3MuaXNMb2NhbENvbm5lY3Rpb25Mb2FkZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKFwiZG9uZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoTG9jYWxDb25uZWN0aW9uRGF0YS5jaGVja0ZsYWcsIDEwMDAsIHJlc29sdmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIDtcbiAgICBzdGF0aWMgR2V0Q29ubmVjdGlvbnNPZkNvbXBvc2l0aW9uTG9jYWwoaWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHZhciBjb25uZWN0aW9uTGlzdCA9IFtdO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHlpZWxkIHRoaXMud2FpdEZvckRhdGFUb0xvYWQoKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29ubmVjdGlvbkFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25BcnJheVtpXS50eXBlSWQgPT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb25MaXN0LnB1c2godGhpcy5jb25uZWN0aW9uQXJyYXlbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBjb25uZWN0aW9uTGlzdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29ubmVjdGlvbkxpc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cbn1cbmV4cG9ydHMuTG9jYWxDb25uZWN0aW9uRGF0YSA9IExvY2FsQ29ubmVjdGlvbkRhdGE7XG5Mb2NhbENvbm5lY3Rpb25EYXRhLmNvbm5lY3Rpb25BcnJheSA9IFtdO1xuTG9jYWxDb25uZWN0aW9uRGF0YS5jb25uZWN0aW9uRGljdGlvbmFyeSA9IFtdO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk5vZGUgPSB2b2lkIDA7XG5jbGFzcyBOb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihrZXksIHZhbHVlLCBsZWZ0Tm9kZSwgcmlnaHROb2RlKSB7XG4gICAgICAgIHRoaXMudmFyaWFudHMgPSBbXTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxO1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmxlZnROb2RlID0gbGVmdE5vZGU7XG4gICAgICAgIHRoaXMucmlnaHROb2RlID0gcmlnaHROb2RlO1xuICAgICAgICB0aGlzLmN1cnJlbnROb2RlID0gbnVsbDtcbiAgICB9XG4gICAgYWRkQ3VycmVudE5vZGUocGFzc2VkTm9kZSwgbm9kZSkge1xuICAgICAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBub2RlID0gcGFzc2VkTm9kZTtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXNzZWROb2RlLnZhbHVlLnR5cGVJZCAhPSBub2RlLnZhbHVlLnR5cGVJZCkge1xuICAgICAgICAgICAgbm9kZS5jdXJyZW50Tm9kZSA9IHRoaXMuYWRkQ3VycmVudE5vZGUocGFzc2VkTm9kZSwgbm9kZS5jdXJyZW50Tm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIGFkZEN1cnJlbnROb2RlVHlwZShwYXNzZWROb2RlLCBub2RlKSB7XG4gICAgICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgICAgICAgIG5vZGUgPSBwYXNzZWROb2RlO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvbnRhaW5zID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZS52YXJpYW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKG5vZGUudmFyaWFudHNbaV0udmFsdWUuaWQgPT0gcGFzc2VkTm9kZS52YWx1ZS5pZCkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5zID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNvbnRhaW5zKSB7XG4gICAgICAgICAgICBub2RlLnZhcmlhbnRzLnB1c2gocGFzc2VkTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy9ub2RlLmN1cnJlbnROb2RlID0gdGhpcy5hZGRDdXJyZW50Tm9kZShwYXNzZWROb2RlLCBub2RlLmN1cnJlbnROb2RlKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIGFkZE5vZGUocGFzc2VkTm9kZSwgbm9kZSwgaGVpZ2h0KSB7XG4gICAgICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgICAgICAgIG5vZGUgPSBwYXNzZWROb2RlO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIExlZnROb2RlID0gbm9kZS5sZWZ0Tm9kZTtcbiAgICAgICAgdmFyIFJpZ2h0Tm9kZSA9IG5vZGUucmlnaHROb2RlO1xuICAgICAgICBpZiAobm9kZS5rZXkgPiBwYXNzZWROb2RlLmtleSkge1xuICAgICAgICAgICAgbm9kZS5sZWZ0Tm9kZSA9IHRoaXMuYWRkTm9kZShwYXNzZWROb2RlLCBMZWZ0Tm9kZSwgaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChub2RlLmtleSA8IHBhc3NlZE5vZGUua2V5KSB7XG4gICAgICAgICAgICBub2RlLnJpZ2h0Tm9kZSA9IHRoaXMuYWRkTm9kZShwYXNzZWROb2RlLCBSaWdodE5vZGUsIGhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZWxzZSBpZiAobm9kZS5rZXkgPT0gcGFzc2VkTm9kZS5rZXkgJiYgbm9kZS5rZXkgIT0gXCJcIil7XG4gICAgICAgIC8vICAgICBub2RlLmN1cnJlbnROb2RlID0gcGFzc2VkTm9kZTtcbiAgICAgICAgLy8gfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUuaGVpZ2h0ID0gMSArIE1hdGgubWF4KHRoaXMuZ2V0SGVpZ2h0KG5vZGUubGVmdE5vZGUpLCB0aGlzLmdldEhlaWdodChub2RlLnJpZ2h0Tm9kZSkpO1xuICAgICAgICBsZXQgYmFsYW5jaW5nRmFjdG9yID0gdGhpcy5nZXRCYWxhbmNlRmFjdG9yKG5vZGUpO1xuICAgICAgICBpZiAoYmFsYW5jaW5nRmFjdG9yID4gMSkge1xuICAgICAgICAgICAgaWYgKG5vZGUubGVmdE5vZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAocGFzc2VkTm9kZS5rZXkgPCBub2RlLmxlZnROb2RlLmtleSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yaWdodFJvdGF0ZShub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocGFzc2VkTm9kZS5rZXkgPiBub2RlLmxlZnROb2RlLmtleSkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLmxlZnROb2RlID0gdGhpcy5sZWZ0Um90YXRlKG5vZGUubGVmdE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yaWdodFJvdGF0ZShub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJhbGFuY2luZ0ZhY3RvciA8IC0xKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5yaWdodE5vZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAocGFzc2VkTm9kZS5rZXkgPiBub2RlLnJpZ2h0Tm9kZS5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGVmdFJvdGF0ZShub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocGFzc2VkTm9kZS5rZXkgPCBub2RlLnJpZ2h0Tm9kZS5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5yaWdodE5vZGUgPSB0aGlzLnJpZ2h0Um90YXRlKG5vZGUucmlnaHROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGVmdFJvdGF0ZShub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIGFkZENoYXJhY3Rlck5vZGUocGFzc2VkTm9kZSwgbm9kZSwgaGVpZ2h0KSB7XG4gICAgICAgIHZhciBkZWJ1Z0ZsYWcgPSBmYWxzZTtcbiAgICAgICAgaWYgKHBhc3NlZE5vZGUudmFsdWUuY2hhcmFjdGVyVmFsdWUgIT0gXCJcIikge1xuICAgICAgICAgICAgLy8gaWYocGFzc2VkTm9kZS52YWx1ZS5jaGFyYWN0ZXJWYWx1ZSA9PSBcIkRlZmF1bHRcIil7XG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJkZWZhdWx0IGhlcmVcIik7XG4gICAgICAgICAgICAvLyAgICAgZGVidWdGbGFnID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGVidWdGbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXF1YWwgaGVyZVwiLCBub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbm9kZSA9IHBhc3NlZE5vZGU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiAobm9kZS5rZXkgPT0gcGFzc2VkTm9kZS5rZXkgJiYgbm9kZS5rZXkgIT0gXCJcIiApe1xuICAgICAgICAgICAgLy8gICAgIGlmKHBhc3NlZE5vZGUudmFsdWUuY2hhcmFjdGVyVmFsdWUgPT0gXCJEZWZhdWx0XCIpe1xuICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcImVxdWFsXCIpO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vICAgICBub2RlLmN1cnJlbnROb2RlID0gcGFzc2VkTm9kZTtcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIHZhciBMZWZ0Tm9kZSA9IG5vZGUubGVmdE5vZGU7XG4gICAgICAgICAgICB2YXIgUmlnaHROb2RlID0gbm9kZS5yaWdodE5vZGU7XG4gICAgICAgICAgICBpZiAobm9kZS5rZXkgPiBwYXNzZWROb2RlLmtleSkge1xuICAgICAgICAgICAgICAgIGlmIChkZWJ1Z0ZsYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsZWZ0ICBoZXJlXCIsIG5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBub2RlLmxlZnROb2RlID0gdGhpcy5hZGRDaGFyYWN0ZXJOb2RlKHBhc3NlZE5vZGUsIExlZnROb2RlLCBoZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobm9kZS5rZXkgPCBwYXNzZWROb2RlLmtleSkge1xuICAgICAgICAgICAgICAgIGlmIChkZWJ1Z0ZsYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyaWdodCBoZXJlXCIsIG5vZGUsIFJpZ2h0Tm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5vZGUucmlnaHROb2RlID0gdGhpcy5hZGRDaGFyYWN0ZXJOb2RlKHBhc3NlZE5vZGUsIFJpZ2h0Tm9kZSwgaGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGVsc2UgaWYgKG5vZGUua2V5ID09IHBhc3NlZE5vZGUua2V5ICYmIG5vZGUua2V5ICE9IFwiXCIpe1xuICAgICAgICAgICAgLy8gICAgIG5vZGUuY3VycmVudE5vZGUgPSBwYXNzZWROb2RlO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGRlYnVnRmxhZykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVsc2UgaGVyZVwiLCBub2RlLCBwYXNzZWROb2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUua2V5ID09IHBhc3NlZE5vZGUua2V5ICYmIG5vZGUua2V5ICE9IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5jdXJyZW50Tm9kZSA9IHRoaXMuYWRkQ3VycmVudE5vZGUocGFzc2VkTm9kZSwgbm9kZS5jdXJyZW50Tm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZS5oZWlnaHQgPSAxICsgTWF0aC5tYXgodGhpcy5nZXRIZWlnaHQobm9kZS5sZWZ0Tm9kZSksIHRoaXMuZ2V0SGVpZ2h0KG5vZGUucmlnaHROb2RlKSk7XG4gICAgICAgICAgICBpZiAoZGVidWdGbGFnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJoZWlnaHQgaGVyZVwiLCBub2RlLmhlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgYmFsYW5jaW5nRmFjdG9yID0gdGhpcy5nZXRCYWxhbmNlRmFjdG9yKG5vZGUpO1xuICAgICAgICAgICAgaWYgKGRlYnVnRmxhZykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmFsYW5jaW5nRmFjdG9yIGhlcmVcIiwgYmFsYW5jaW5nRmFjdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChiYWxhbmNpbmdGYWN0b3IgPiAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUubGVmdE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhc3NlZE5vZGUua2V5IDwgbm9kZS5sZWZ0Tm9kZS5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXR1cm5lciA9IHRoaXMucmlnaHRSb3RhdGUobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVidWdGbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXR1cm5pbmcgaGVyZSAxIFwiLCByZXR1cm5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGFzc2VkTm9kZS5rZXkgPiBub2RlLmxlZnROb2RlLmtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5sZWZ0Tm9kZSA9IHRoaXMubGVmdFJvdGF0ZShub2RlLmxlZnROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXR1cm5lciA9IHRoaXMucmlnaHRSb3RhdGUobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVidWdGbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXR1cm5pbmcgaGVyZSAyIFwiLCByZXR1cm5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYmFsYW5jaW5nRmFjdG9yIDwgLTEpIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5yaWdodE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhc3NlZE5vZGUua2V5ID4gbm9kZS5yaWdodE5vZGUua2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmV0dXJuZXIgPSB0aGlzLmxlZnRSb3RhdGUobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVidWdGbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXR1cm5pbmcgaGVyZSAzIFwiLCByZXR1cm5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGFzc2VkTm9kZS5rZXkgPCBub2RlLnJpZ2h0Tm9kZS5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucmlnaHROb2RlID0gdGhpcy5yaWdodFJvdGF0ZShub2RlLnJpZ2h0Tm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmV0dXJuZXIgPSB0aGlzLmxlZnRSb3RhdGUobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVidWdGbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXR1cm5pbmcgaGVyZTQgXCIsIHJldHVybmVyLCBub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5lcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkZWJ1Z0ZsYWcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIndoYXQgaGVyZVwiLCBub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVidWdGbGFnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJldHVybmluZyBoZXJlIDZcIiwgbm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIGFkZFR5cGVOb2RlKHBhc3NlZE5vZGUsIG5vZGUsIGhlaWdodCkge1xuICAgICAgICB2YXIgZGVidWdGbGFnID0gZmFsc2U7XG4gICAgICAgIGlmIChwYXNzZWROb2RlLnZhbHVlLnR5cGVJZCAhPSAwKSB7XG4gICAgICAgICAgICAvLyBpZihwYXNzZWROb2RlLnZhbHVlLmNoYXJhY3RlclZhbHVlID09IFwiRGVmYXVsdFwiKXtcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcImRlZmF1bHQgaGVyZVwiKTtcbiAgICAgICAgICAgIC8vICAgICBkZWJ1Z0ZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChkZWJ1Z0ZsYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcXVhbCBoZXJlXCIsIG5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBub2RlID0gcGFzc2VkTm9kZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBMZWZ0Tm9kZSA9IG5vZGUubGVmdE5vZGU7XG4gICAgICAgICAgICB2YXIgUmlnaHROb2RlID0gbm9kZS5yaWdodE5vZGU7XG4gICAgICAgICAgICBpZiAobm9kZS5rZXkgPiBwYXNzZWROb2RlLmtleSkge1xuICAgICAgICAgICAgICAgIGlmIChkZWJ1Z0ZsYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsZWZ0ICBoZXJlXCIsIG5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBub2RlLmxlZnROb2RlID0gdGhpcy5hZGRUeXBlTm9kZShwYXNzZWROb2RlLCBMZWZ0Tm9kZSwgaGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUua2V5IDwgcGFzc2VkTm9kZS5rZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGVidWdGbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmlnaHQgaGVyZVwiLCBub2RlLCBSaWdodE5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBub2RlLnJpZ2h0Tm9kZSA9IHRoaXMuYWRkVHlwZU5vZGUocGFzc2VkTm9kZSwgUmlnaHROb2RlLCBoZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGRlYnVnRmxhZykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVsc2UgaGVyZVwiLCBub2RlLCBwYXNzZWROb2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUua2V5ID09IHBhc3NlZE5vZGUua2V5ICYmIG5vZGUua2V5ICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5hZGRDdXJyZW50Tm9kZVR5cGUocGFzc2VkTm9kZSwgbm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZS5oZWlnaHQgPSAxICsgTWF0aC5tYXgodGhpcy5nZXRIZWlnaHQobm9kZS5sZWZ0Tm9kZSksIHRoaXMuZ2V0SGVpZ2h0KG5vZGUucmlnaHROb2RlKSk7XG4gICAgICAgICAgICBpZiAoZGVidWdGbGFnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJoZWlnaHQgaGVyZVwiLCBub2RlLmhlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgYmFsYW5jaW5nRmFjdG9yID0gdGhpcy5nZXRCYWxhbmNlRmFjdG9yKG5vZGUpO1xuICAgICAgICAgICAgaWYgKGRlYnVnRmxhZykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmFsYW5jaW5nRmFjdG9yIGhlcmVcIiwgYmFsYW5jaW5nRmFjdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChiYWxhbmNpbmdGYWN0b3IgPiAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUubGVmdE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhc3NlZE5vZGUua2V5IDwgbm9kZS5sZWZ0Tm9kZS5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXR1cm5lciA9IHRoaXMucmlnaHRSb3RhdGUobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVidWdGbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXR1cm5pbmcgaGVyZSAxIFwiLCByZXR1cm5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGFzc2VkTm9kZS5rZXkgPiBub2RlLmxlZnROb2RlLmtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5sZWZ0Tm9kZSA9IHRoaXMubGVmdFJvdGF0ZShub2RlLmxlZnROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXR1cm5lciA9IHRoaXMucmlnaHRSb3RhdGUobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVidWdGbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXR1cm5pbmcgaGVyZSAyIFwiLCByZXR1cm5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYmFsYW5jaW5nRmFjdG9yIDwgLTEpIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5yaWdodE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhc3NlZE5vZGUua2V5ID4gbm9kZS5yaWdodE5vZGUua2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmV0dXJuZXIgPSB0aGlzLmxlZnRSb3RhdGUobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVidWdGbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXR1cm5pbmcgaGVyZSAzIFwiLCByZXR1cm5lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGFzc2VkTm9kZS5rZXkgPCBub2RlLnJpZ2h0Tm9kZS5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucmlnaHROb2RlID0gdGhpcy5yaWdodFJvdGF0ZShub2RlLnJpZ2h0Tm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmV0dXJuZXIgPSB0aGlzLmxlZnRSb3RhdGUobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVidWdGbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXR1cm5pbmcgaGVyZTQgXCIsIHJldHVybmVyLCBub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5lcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkZWJ1Z0ZsYWcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIndoYXQgaGVyZVwiLCBub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVidWdGbGFnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJldHVybmluZyBoZXJlIDZcIiwgbm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIHJpZ2h0Um90YXRlKHkpIHtcbiAgICAgICAgaWYgKHkpIHtcbiAgICAgICAgICAgIGxldCB4ID0geS5sZWZ0Tm9kZTtcbiAgICAgICAgICAgIGlmICh4KSB7XG4gICAgICAgICAgICAgICAgbGV0IFQyID0geC5yaWdodE5vZGU7XG4gICAgICAgICAgICAgICAgeS5sZWZ0Tm9kZSA9IFQyO1xuICAgICAgICAgICAgICAgIHgucmlnaHROb2RlID0geTtcbiAgICAgICAgICAgICAgICB5LmhlaWdodCA9IE1hdGgubWF4KHRoaXMuZ2V0SGVpZ2h0KHkubGVmdE5vZGUpLCB0aGlzLmdldEhlaWdodCh5LnJpZ2h0Tm9kZSkpICsgMTtcbiAgICAgICAgICAgICAgICB4LmhlaWdodCA9IE1hdGgubWF4KHRoaXMuZ2V0SGVpZ2h0KHgubGVmdE5vZGUpLCB0aGlzLmdldEhlaWdodCh4LnJpZ2h0Tm9kZSkpICsgMTtcbiAgICAgICAgICAgICAgICByZXR1cm4geDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHJldHVybiB4O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB5O1xuICAgIH1cbiAgICBsZWZ0Um90YXRlKHgpIHtcbiAgICAgICAgaWYgKHgpIHtcbiAgICAgICAgICAgIGxldCB5ID0geC5yaWdodE5vZGU7XG4gICAgICAgICAgICBpZiAoeSkge1xuICAgICAgICAgICAgICAgIGxldCBUMiA9IHkubGVmdE5vZGU7XG4gICAgICAgICAgICAgICAgeS5sZWZ0Tm9kZSA9IHg7XG4gICAgICAgICAgICAgICAgeC5yaWdodE5vZGUgPSBUMjtcbiAgICAgICAgICAgICAgICB4LmhlaWdodCA9IE1hdGgubWF4KHRoaXMuZ2V0SGVpZ2h0KHgubGVmdE5vZGUpLCB0aGlzLmdldEhlaWdodCh4LnJpZ2h0Tm9kZSkgKyAxKTtcbiAgICAgICAgICAgICAgICB5LmhlaWdodCA9IE1hdGgubWF4KHRoaXMuZ2V0SGVpZ2h0KHkubGVmdE5vZGUpLCB0aGlzLmdldEhlaWdodCh4LnJpZ2h0Tm9kZSkgKyAxKTtcbiAgICAgICAgICAgICAgICByZXR1cm4geTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vcmV0dXJuIHk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICAgIGdldEhlaWdodChub2RlKSB7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZS5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGdldEJhbGFuY2VGYWN0b3IoTikge1xuICAgICAgICBpZiAoTiA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5nZXRIZWlnaHQoTi5sZWZ0Tm9kZSkgLSB0aGlzLmdldEhlaWdodChOLnJpZ2h0Tm9kZSk7XG4gICAgfVxuICAgIGdldEZyb21Ob2RlKGlkLCBub2RlKSB7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICBpZiAoaWQgPT0gbm9kZS5rZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlkIDwgbm9kZS5rZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRGcm9tTm9kZShpZCwgbm9kZS5sZWZ0Tm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpZCA+IG5vZGUua2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RnJvbU5vZGUoaWQsIG5vZGUucmlnaHROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBub2RlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgICBnZXRDaGFyYWN0ZXJGcm9tTm9kZSh2YWx1ZSwgbm9kZSkge1xuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09IG5vZGUua2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh2YWx1ZSA8IG5vZGUua2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2hhcmFjdGVyRnJvbU5vZGUodmFsdWUsIG5vZGUubGVmdE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUgPiBub2RlLmtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldENoYXJhY3RlckZyb21Ob2RlKHZhbHVlLCBub2RlLnJpZ2h0Tm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgZ2V0RnJvbU5vZGVXaXRoQ2hhcmFjdGVyQW5kVHlwZSh2YWx1ZSwgdHlwZUlkLCBub2RlKSB7XG4gICAgICAgIHZhbHVlID0gYCR7dmFsdWV9YDtcbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PSBub2RlLmtleSkge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PSBub2RlLnZhbHVlLmNoYXJhY3RlclZhbHVlICYmIHR5cGVJZCA9PSBub2RlLnZhbHVlLnR5cGVJZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEZyb21Ob2RlV2l0aENoYXJhY3RlckFuZFR5cGUodmFsdWUsIHR5cGVJZCwgbm9kZS5jdXJyZW50Tm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUgPCBub2RlLmtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEZyb21Ob2RlV2l0aENoYXJhY3RlckFuZFR5cGUodmFsdWUsIHR5cGVJZCwgbm9kZS5sZWZ0Tm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh2YWx1ZSA+IG5vZGUua2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RnJvbU5vZGVXaXRoQ2hhcmFjdGVyQW5kVHlwZSh2YWx1ZSwgdHlwZUlkLCBub2RlLnJpZ2h0Tm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG59XG5leHBvcnRzLk5vZGUgPSBOb2RlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUmVzZXJ2ZWRJZHMgPSB2b2lkIDA7XG5jb25zdCBHZXRSZXNlcnZlZElkc18xID0gcmVxdWlyZShcIi4uL0FwaS9HZXRSZXNlcnZlZElkc1wiKTtcbmNsYXNzIFJlc2VydmVkSWRzIHtcbiAgICBzdGF0aWMgZ2V0SWQoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pZHMubGVuZ3RoIDwgNSkge1xuICAgICAgICAgICAgICAgIHZhciBpZHMgPSB5aWVsZCAoMCwgR2V0UmVzZXJ2ZWRJZHNfMS5HZXRSZXNlcnZlZElkcykoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBpZCA9IHRoaXMuaWRzWzBdO1xuICAgICAgICAgICAgdGhpcy5pZHMuc2hpZnQoKTtcbiAgICAgICAgICAgIHJldHVybiBpZDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBBZGRJZChpZCkge1xuICAgICAgICBpZiAoIXRoaXMuaWRzLmluY2x1ZGVzKGlkKSkge1xuICAgICAgICAgICAgdGhpcy5pZHMucHVzaChpZCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlJlc2VydmVkSWRzID0gUmVzZXJ2ZWRJZHM7XG5SZXNlcnZlZElkcy5pZHMgPSBbXTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5SZXR1cm5lciA9IHZvaWQgMDtcbmNsYXNzIFJldHVybmVyIHtcbiAgICBjb25zdHJ1Y3RvcihpZCwgdXNlcklkLCByZWZlcmVudElkLCBpc05ldykge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMudXNlcklkID0gdXNlcklkO1xuICAgICAgICB0aGlzLnJlZmVyZW50SWQgPSByZWZlcmVudElkO1xuICAgICAgICB0aGlzLmlzTmV3ID0gaXNOZXc7XG4gICAgfVxufVxuZXhwb3J0cy5SZXR1cm5lciA9IFJldHVybmVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlNldHRpbmdEYXRhID0gdm9pZCAwO1xuY2xhc3MgU2V0dGluZ0RhdGEge1xuICAgIGNvbnN0cnVjdG9yKGlzT25saW5lU3luYykge1xuICAgICAgICB0aGlzLmlkID0gMTtcbiAgICAgICAgdGhpcy5pc09ubGluZVN5bmMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc09ubGluZVN5bmMgPSBpc09ubGluZVN5bmM7XG4gICAgfVxufVxuZXhwb3J0cy5TZXR0aW5nRGF0YSA9IFNldHRpbmdEYXRhO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlNldHRpbmdzID0gdm9pZCAwO1xuY2xhc3MgU2V0dGluZ3Mge1xufVxuZXhwb3J0cy5TZXR0aW5ncyA9IFNldHRpbmdzO1xuU2V0dGluZ3MuaXNVcGRhdGVkID0gZmFsc2U7XG5TZXR0aW5ncy5pc09ubGluZVN5bmMgPSBmYWxzZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlN5bmNEYXRhID0gdm9pZCAwO1xuY29uc3QgaW5kZXhlZGRiXzEgPSByZXF1aXJlKFwiLi8uLi9EYXRhYmFzZS9pbmRleGVkZGJcIik7XG5jb25zdCBDcmVhdGVUaGVDb25jZXB0QXBpXzEgPSByZXF1aXJlKFwiLi4vQXBpL0NyZWF0ZS9DcmVhdGVUaGVDb25jZXB0QXBpXCIpO1xuY29uc3QgQ3JlYXRlVGhlQ29ubmVjdGlvbkFwaV8xID0gcmVxdWlyZShcIi4uL0FwaS9DcmVhdGUvQ3JlYXRlVGhlQ29ubmVjdGlvbkFwaVwiKTtcbmNvbnN0IENvbmNlcHREYXRhXzEgPSByZXF1aXJlKFwiLi9Db25jZXB0RGF0YVwiKTtcbmNvbnN0IENvbm5lY3Rpb25EYXRhXzEgPSByZXF1aXJlKFwiLi9Db25uZWN0aW9uRGF0YVwiKTtcbmNsYXNzIFN5bmNEYXRhIHtcbiAgICBzdGF0aWMgQ2hlY2tDb250YWlucyhjb25jZXB0KSB7XG4gICAgICAgIHZhciBjb250YWlucyA9IGZhbHNlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29uY2VwdHNTeW5jQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmNlcHRzU3luY0FycmF5W2ldLmlkID09IGNvbmNlcHQuaWQpIHtcbiAgICAgICAgICAgICAgICBjb250YWlucyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5zO1xuICAgIH1cbiAgICBzdGF0aWMgU3luY0RhdGFEZWxldGUoaWQpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbmNlcHRzU3luY0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaWQgPT0gdGhpcy5jb25jZXB0c1N5bmNBcnJheVtpXS5pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29uY2VwdHNTeW5jQXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb25uZWN0aW9uU3luY0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uU3luY0FycmF5W2ldLm9mVGhlQ29uY2VwdElkID09IGlkIHx8IHRoaXMuY29ubmVjdGlvblN5bmNBcnJheVtpXS50b1RoZUNvbmNlcHRJZCA9PSBpZCB8fCB0aGlzLmNvbm5lY3Rpb25TeW5jQXJyYXlbaV0udHlwZUlkID09IGlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uU3luY0FycmF5LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgQ2hlY2tDb250YWluc0Nvbm5lY3Rpb24oY29ubmVjdGlvbikge1xuICAgICAgICB2YXIgY29udGFpbnMgPSBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbm5lY3Rpb25TeW5jQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25TeW5jQXJyYXlbaV0uaWQgPT0gY29ubmVjdGlvbi5pZCkge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5zID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGFpbnM7XG4gICAgfVxuICAgIHN0YXRpYyBBZGRDb25jZXB0KGNvbmNlcHQpIHtcbiAgICAgICAgdmFyIGNvbnRhaW5zID0gZmFsc2U7XG4gICAgICAgIC8vIENvbmNlcHRzRGF0YS5BZGRDb25jZXB0VGVtcG9yYXJ5KGNvbmNlcHQpO1xuICAgICAgICBpZiAoIWNvbnRhaW5zKSB7XG4gICAgICAgICAgICB0aGlzLmNvbmNlcHRzU3luY0FycmF5LnB1c2goY29uY2VwdCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIFJlbW92ZUNvbmNlcHQoY29uY2VwdCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29uY2VwdHNTeW5jQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmNlcHRzU3luY0FycmF5W2ldLmlkID09IGNvbmNlcHQuaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmNlcHRzU3luY0FycmF5LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgQWRkQ29ubmVjdGlvbihjb25uZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvblN5bmNBcnJheS5wdXNoKGNvbm5lY3Rpb24pO1xuICAgIH1cbiAgICBzdGF0aWMgUmVtb3ZlQ29ubmVjdGlvbihjb25uZWN0aW9uKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb25uZWN0aW9uU3luY0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uU3luY0FycmF5W2ldLmlkID09IGNvbm5lY3Rpb24uaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25TeW5jQXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBTeW5jRGF0YU9ubGluZSgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb25jZXB0c1N5bmNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIENvbmNlcHREYXRhXzEuQ29uY2VwdHNEYXRhLkFkZENvbmNlcHQodGhpcy5jb25jZXB0c1N5bmNBcnJheVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29ubmVjdGlvblN5bmNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIENvbm5lY3Rpb25EYXRhXzEuQ29ubmVjdGlvbkRhdGEuQWRkQ29ubmVjdGlvbih0aGlzLmNvbm5lY3Rpb25TeW5jQXJyYXlbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuY29uY2VwdHNTeW5jQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHlpZWxkICgwLCBDcmVhdGVUaGVDb25jZXB0QXBpXzEuQ3JlYXRlVGhlQ29uY2VwdEFwaSkodGhpcy5jb25jZXB0c1N5bmNBcnJheSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25jZXB0c1N5bmNBcnJheSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvblN5bmNBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgKDAsIENyZWF0ZVRoZUNvbm5lY3Rpb25BcGlfMS5DcmVhdGVUaGVDb25uZWN0aW9uQXBpKSh0aGlzLmNvbm5lY3Rpb25TeW5jQXJyYXkpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvblN5bmNBcnJheSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFwiZG9uZVwiO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIHN5bmNEYXRhTG9jYWxEYigpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmNlcHRzU3luY0FycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29uY2VwdHNTeW5jQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgKDAsIGluZGV4ZWRkYl8xLnN0b3JlVG9EYXRhYmFzZSkoXCJsb2NhbGNvbmNlcHRcIiwgdGhpcy5jb25jZXB0c1N5bmNBcnJheVtpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuY29uY2VwdHNTeW5jQXJyYXkgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25TeW5jQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb25uZWN0aW9uU3luY0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICgwLCBpbmRleGVkZGJfMS5zdG9yZVRvRGF0YWJhc2UpKFwibG9jYWxjb25uZWN0aW9uXCIsIHRoaXMuY29ubmVjdGlvblN5bmNBcnJheVtpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvblN5bmNBcnJheSA9IFtdO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29ubmVjdGlvblN5bmNBcnJheSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gXCJkb25lXCI7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuU3luY0RhdGEgPSBTeW5jRGF0YTtcblN5bmNEYXRhLmNvbmNlcHRzU3luY0FycmF5ID0gW107XG5TeW5jRGF0YS5jb25uZWN0aW9uU3luY0FycmF5ID0gW107XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVGhlQ2hhcmFjdGVyID0gdm9pZCAwO1xuY2xhc3MgVGhlQ2hhcmFjdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcih1c2VySWQsIGRhdGEsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSWQsIHNlc3Npb25Vc2VySWQsIGVudHJ5VGltZXN0YW1wLCBpc05ldykge1xuICAgICAgICB0aGlzLmlkID0gMDtcbiAgICAgICAgdGhpcy5pc05ldyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdGhpcy5kYXRhID0gYCR7ZGF0YX1gO1xuICAgICAgICB0aGlzLnNlY3VyaXR5SWQgPSBzZWN1cml0eUlkO1xuICAgICAgICB0aGlzLnNlY3VyaXR5VXNlcklkID0gc2VjdXJpdHlVc2VySWQ7XG4gICAgICAgIHRoaXMuYWNjZXNzSWQgPSBhY2Nlc3NJZDtcbiAgICAgICAgdGhpcy5hY2Nlc3NVc2VySWQgPSBhY2Nlc3NVc2VySWQ7XG4gICAgICAgIHRoaXMuc2Vzc2lvbklkID0gc2Vzc2lvbklkO1xuICAgICAgICB0aGlzLnNlc3Npb25Vc2VySWQgPSBzZXNzaW9uVXNlcklkO1xuICAgICAgICB0aGlzLmlzTmV3ID0gaXNOZXc7XG4gICAgfVxufVxuZXhwb3J0cy5UaGVDaGFyYWN0ZXIgPSBUaGVDaGFyYWN0ZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVGhlVGV4dHMgPSB2b2lkIDA7XG5jbGFzcyBUaGVUZXh0cyB7XG4gICAgY29uc3RydWN0b3IodXNlcklkLCBkYXRhLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbklkLCBzZXNzaW9uVXNlcklkLCBlbnRyeVRpbWVzdGFtcCwgaXNOZXcpIHtcbiAgICAgICAgdGhpcy5pZCA9IDA7XG4gICAgICAgIHRoaXMudXNlcklkID0gdXNlcklkO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLnNlY3VyaXR5SWQgPSBzZWN1cml0eUlkO1xuICAgICAgICB0aGlzLnNlY3VyaXR5VXNlcklkID0gc2VjdXJpdHlVc2VySWQ7XG4gICAgICAgIHRoaXMuYWNjZXNzSWQgPSBhY2Nlc3NJZDtcbiAgICAgICAgdGhpcy5hY2Nlc3NVc2VySWQgPSBhY2Nlc3NVc2VySWQ7XG4gICAgICAgIHRoaXMuc2Vzc2lvbklkID0gc2Vzc2lvbklkO1xuICAgICAgICB0aGlzLnNlc3Npb25Vc2VySWQgPSBzZXNzaW9uVXNlcklkO1xuICAgICAgICB0aGlzLmVudHJ5VGltZXN0YW1wID0gZW50cnlUaW1lc3RhbXA7XG4gICAgICAgIHRoaXMuaXNOZXcgPSBpc05ldztcbiAgICB9XG59XG5leHBvcnRzLlRoZVRleHRzID0gVGhlVGV4dHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5yZW1vdmVGcm9tRGF0YWJhc2UgPSBleHBvcnRzLmdldEFsbEZyb21Mb2NhbERiID0gZXhwb3J0cy5zdG9yZVRvRGF0YWJhc2UgPSBleHBvcnRzLm9wZW5EYXRhYmFzZSA9IHZvaWQgMDtcbnZhciB2ZXJzaW9uID0gNDtcbmZ1bmN0aW9uIG9wZW5EYXRhYmFzZShkYXRhYmFzZU5hbWUpIHtcbiAgICBsZXQgZGI7XG4gICAgY29uc3QgcmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKFwiRnJlZVNjaGVtYUxvY2FsXCIsIHZlcnNpb24pO1xuICAgIHJlcXVlc3Qub25lcnJvciA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiV2h5IGRpZG4ndCB5b3UgYWxsb3cgbXkgd2ViIGFwcCB0byB1c2UgSW5kZXhlZERCPyFcIik7XG4gICAgfTtcbiAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICB2YXIgZGIgPSB0YXJnZXQucmVzdWx0O1xuICAgICAgICBsZXQgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbihkYXRhYmFzZU5hbWUsIFwicmVhZHdyaXRlXCIpO1xuICAgIH07XG4gICAgcmVxdWVzdC5vbnVwZ3JhZGVuZWVkZWQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgdmFyIGRiID0gdGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgdmFyIGNvbmNlcHREYiA9IFwibG9jYWxjb25jZXB0XCI7XG4gICAgICAgIHZhciBjb25uZWN0aW9uRGIgPSBcImxvY2FsY29ubmVjdGlvblwiO1xuICAgICAgICBpZiAoIWRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoY29uY2VwdERiKSkgeyAvLyBpZiB0aGVyZSdzIG5vIGRhdGFiYXNlIG5hbWVcbiAgICAgICAgICAgIGxldCBvYmplY3RTdG9yZSA9IGRiLmNyZWF0ZU9iamVjdFN0b3JlKGNvbmNlcHREYiwgeyBrZXlQYXRoOiAnaWQnIH0pOyAvLyBjcmVhdGUgaXRcbiAgICAgICAgICAgIG9iamVjdFN0b3JlLnRyYW5zYWN0aW9uLm9uY29tcGxldGUgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFkYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKGNvbm5lY3Rpb25EYikpIHsgLy8gaWYgdGhlcmUncyBubyBkYXRhYmFzZSBuYW1lXG4gICAgICAgICAgICBsZXQgb2JqZWN0U3RvcmUgPSBkYi5jcmVhdGVPYmplY3RTdG9yZShjb25uZWN0aW9uRGIsIHsga2V5UGF0aDogJ2lkJyB9KTsgLy8gY3JlYXRlIGl0XG4gICAgICAgICAgICBvYmplY3RTdG9yZS50cmFuc2FjdGlvbi5vbmNvbXBsZXRlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfTtcbn1cbmV4cG9ydHMub3BlbkRhdGFiYXNlID0gb3BlbkRhdGFiYXNlO1xuZnVuY3Rpb24gc3RvcmVUb0RhdGFiYXNlKGRhdGFiYXNlTmFtZSwgb2JqZWN0KSB7XG4gICAgb3BlbkRhdGFiYXNlKGRhdGFiYXNlTmFtZSk7XG4gICAgbGV0IGRiO1xuICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIub3BlbihcIkZyZWVTY2hlbWFMb2NhbFwiLCB2ZXJzaW9uKTtcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIldoeSBkaWRuJ3QgeW91IGFsbG93IG15IHdlYiBhcHAgdG8gdXNlIEluZGV4ZWREQj8hXCIpO1xuICAgIH07XG4gICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgdmFyIGRiID0gdGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgbGV0IHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24oZGF0YWJhc2VOYW1lLCBcInJlYWR3cml0ZVwiKTtcbiAgICAgICAgbGV0IG9ialN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoZGF0YWJhc2VOYW1lKTtcbiAgICAgICAgb2JqU3RvcmUuYWRkKG9iamVjdCk7XG4gICAgfTtcbn1cbmV4cG9ydHMuc3RvcmVUb0RhdGFiYXNlID0gc3RvcmVUb0RhdGFiYXNlO1xuZnVuY3Rpb24gZ2V0QWxsRnJvbUxvY2FsRGIoZGF0YWJhc2VOYW1lKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIG9wZW5EYXRhYmFzZShkYXRhYmFzZU5hbWUpO1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKFwiRnJlZVNjaGVtYUxvY2FsXCIsIHZlcnNpb24pO1xuICAgICAgICAgICAgdmFyIGNvbmNlcHQ7XG4gICAgICAgICAgICB2YXIgQ29uY2VwdExpc3QgPSBbXTtcbiAgICAgICAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgICAgICB2YXIgZGIgPSB0YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgICAgIGxldCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKGRhdGFiYXNlTmFtZSwgXCJyZWFkd3JpdGVcIik7XG4gICAgICAgICAgICAgICAgbGV0IG9iamVjdFN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoZGF0YWJhc2VOYW1lKTtcbiAgICAgICAgICAgICAgICB2YXIgYWxsb2JqZWN0cyA9IG9iamVjdFN0b3JlLmdldEFsbCgpO1xuICAgICAgICAgICAgICAgIGFsbG9iamVjdHMub25zdWNjZXNzID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHVkZW50cyA9IGFsbG9iamVjdHMucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0dWRlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDb25jZXB0TGlzdC5wdXNoKHN0dWRlbnRzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKENvbmNlcHRMaXN0KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIC8vICAgLy8gRGF0YWJhc2Ugb3BlbmVkIHN1Y2Nlc3NmdWxseVxuICAgICAgICAgICAgICAgIC8vIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGV2ZW50KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICAvLyByZXR1cm4gQ29uY2VwdExpc3Q7XG4gICAgfSk7XG59XG5leHBvcnRzLmdldEFsbEZyb21Mb2NhbERiID0gZ2V0QWxsRnJvbUxvY2FsRGI7XG5mdW5jdGlvbiByZW1vdmVGcm9tRGF0YWJhc2UoZGF0YWJhc2VOYW1lLCBpZCkge1xuICAgIG9wZW5EYXRhYmFzZShkYXRhYmFzZU5hbWUpO1xuICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIub3BlbihcIkZyZWVTY2hlbWFMb2NhbFwiLCB2ZXJzaW9uKTtcbiAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICB2YXIgZGIgPSB0YXJnZXQucmVzdWx0O1xuICAgICAgICBsZXQgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbihkYXRhYmFzZU5hbWUsIFwicmVhZHdyaXRlXCIpO1xuICAgICAgICBsZXQgb2JqZWN0U3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShkYXRhYmFzZU5hbWUpO1xuICAgICAgICBsZXQgZ2V0UmVxdWVzdCA9IG9iamVjdFN0b3JlLmRlbGV0ZShpZCk7XG4gICAgICAgIGdldFJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgLy8gY29uY2VwdCA9ICBldmVudC50YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgLy8gQWNjZXNzIHRoZSByZXRyaWV2ZWQgZGF0YVxuICAgICAgICB9O1xuICAgIH07XG59XG5leHBvcnRzLnJlbW92ZUZyb21EYXRhYmFzZSA9IHJlbW92ZUZyb21EYXRhYmFzZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJlbW92ZUZyb21EYXRhYmFzZSA9IGV4cG9ydHMuZ2V0RnJvbURhdGFiYXNlV2l0aFR5cGVPbGQgPSBleHBvcnRzLmdldEZyb21EYXRhYmFzZVdpdGhUeXBlID0gZXhwb3J0cy5BaVVwZGF0ZUZsYWcgPSBleHBvcnRzLkdldFN0YXRzRnJvbURhdGFiYXNlID0gZXhwb3J0cy5nZXRGcm9tRGF0YWJhc2UgPSBleHBvcnRzLnN0b3JlVG9EYXRhYmFzZSA9IGV4cG9ydHMub3BlbkRhdGFiYXNlID0gdm9pZCAwO1xuY29uc3QgU2V0dGluZ0RhdGFfMSA9IHJlcXVpcmUoXCIuLi9EYXRhU3RydWN0dXJlcy9TZXR0aW5nRGF0YVwiKTtcbnZhciB2ZXJzaW9uID0gNDtcbmZ1bmN0aW9uIG9wZW5EYXRhYmFzZShkYXRhYmFzZU5hbWUpIHtcbiAgICBsZXQgZGI7XG4gICAgY29uc3QgcmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKFwiRnJlZVNjaGVtYVwiLCB2ZXJzaW9uKTtcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIldoeSBkaWRuJ3QgeW91IGFsbG93IG15IHdlYiBhcHAgdG8gdXNlIEluZGV4ZWREQj8hXCIpO1xuICAgIH07XG4gICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgdmFyIGRiID0gdGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgbGV0IHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24oZGF0YWJhc2VOYW1lLCBcInJlYWR3cml0ZVwiKTtcbiAgICB9O1xuICAgIHJlcXVlc3Qub251cGdyYWRlbmVlZGVkID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIHZhciBkYiA9IHRhcmdldC5yZXN1bHQ7XG4gICAgICAgIHZhciBjb25jZXB0RGIgPSBcImNvbmNlcHRcIjtcbiAgICAgICAgdmFyIGNvbm5lY3Rpb25EYiA9IFwiY29ubmVjdGlvblwiO1xuICAgICAgICB2YXIgc2V0dGluZ3MgPSBcInNldHRpbmdzXCI7XG4gICAgICAgIGlmICghZGIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucyhjb25jZXB0RGIpKSB7IC8vIGlmIHRoZXJlJ3Mgbm8gZGF0YWJhc2UgbmFtZVxuICAgICAgICAgICAgbGV0IG9iamVjdFN0b3JlID0gZGIuY3JlYXRlT2JqZWN0U3RvcmUoY29uY2VwdERiLCB7IGtleVBhdGg6ICdpZCcgfSk7IC8vIGNyZWF0ZSBpdFxuICAgICAgICAgICAgb2JqZWN0U3RvcmUudHJhbnNhY3Rpb24ub25jb21wbGV0ZSA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIFN0b3JlIHZhbHVlcyBpbiB0aGUgbmV3bHkgY3JlYXRlZCBvYmplY3RTdG9yZS5cbiAgICAgICAgICAgICAgICAvLyBjb25zdCBteU9iamVjdFN0b3JlID0gZGJcbiAgICAgICAgICAgICAgICAvLyAudHJhbnNhY3Rpb24oZGF0YWJhc2VOYW1lLCBcInJlYWR3cml0ZVwiKVxuICAgICAgICAgICAgICAgIC8vIC5vYmplY3RTdG9yZShkYXRhYmFzZU5hbWUpO1xuICAgICAgICAgICAgICAgIC8vIG15T2JqZWN0U3RvcmUuYWRkKG9iamVjdCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmICghZGIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucyhjb25uZWN0aW9uRGIpKSB7IC8vIGlmIHRoZXJlJ3Mgbm8gZGF0YWJhc2UgbmFtZVxuICAgICAgICAgICAgbGV0IG9iamVjdFN0b3JlID0gZGIuY3JlYXRlT2JqZWN0U3RvcmUoY29ubmVjdGlvbkRiLCB7IGtleVBhdGg6ICdpZCcgfSk7IC8vIGNyZWF0ZSBpdFxuICAgICAgICAgICAgb2JqZWN0U3RvcmUudHJhbnNhY3Rpb24ub25jb21wbGV0ZSA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoc2V0dGluZ3MpKSB7XG4gICAgICAgICAgICBsZXQgb2JqZWN0U3RvcmUgPSBkYi5jcmVhdGVPYmplY3RTdG9yZShzZXR0aW5ncywgeyBrZXlQYXRoOiAnaWQnIH0pOyAvLyBjcmVhdGUgaXRcbiAgICAgICAgICAgIG9iamVjdFN0b3JlLnRyYW5zYWN0aW9uLm9uY29tcGxldGUgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9O1xufVxuZXhwb3J0cy5vcGVuRGF0YWJhc2UgPSBvcGVuRGF0YWJhc2U7XG5mdW5jdGlvbiBzdG9yZVRvRGF0YWJhc2UoZGF0YWJhc2VOYW1lLCBvYmplY3QpIHtcbiAgICBvcGVuRGF0YWJhc2UoZGF0YWJhc2VOYW1lKTtcbiAgICBsZXQgZGI7XG4gICAgY29uc3QgcmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKFwiRnJlZVNjaGVtYVwiLCB2ZXJzaW9uKTtcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIldoeSBkaWRuJ3QgeW91IGFsbG93IG15IHdlYiBhcHAgdG8gdXNlIEluZGV4ZWREQj8hXCIpO1xuICAgIH07XG4gICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKG9iamVjdC5pZCAhPSAwKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgdmFyIGRiID0gdGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICAgIGxldCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKGRhdGFiYXNlTmFtZSwgXCJyZWFkd3JpdGVcIik7XG4gICAgICAgICAgICBsZXQgb2JqU3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShkYXRhYmFzZU5hbWUpO1xuICAgICAgICAgICAgb2JqU3RvcmUuYWRkKG9iamVjdCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIHJlcXVlc3Qub251cGdyYWRlbmVlZGVkID0gKGV2ZW50KSA9PiB7XG4gICAgLy8gICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSURCT3BlbkRCUmVxdWVzdDtcbiAgICAvLyAgICAgdmFyIGRiID0gdGFyZ2V0LnJlc3VsdCBhcyBJREJEYXRhYmFzZTtcbiAgICAvLyAgICAgdmFyIGNvbmNlcHREYiA9IFwiY29uY2VwdFwiO1xuICAgIC8vICAgICB2YXIgY29ubmVjdGlvbkRiID0gXCJjb25uZWN0aW9uXCI7XG4gICAgLy8gICAgIHZhciBzZXR0aW5ncyA9IFwic2V0dGluZ3NcIlxuICAgIC8vICAgICBpZiAoIWRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoY29uY2VwdERiKSkgeyAvLyBpZiB0aGVyZSdzIG5vIGRhdGFiYXNlIG5hbWVcbiAgICAvLyAgICAgICBsZXQgIG9iamVjdFN0b3JlID0gZGIuY3JlYXRlT2JqZWN0U3RvcmUoY29uY2VwdERiLCB7a2V5UGF0aDogJ2lkJ30pOyAvLyBjcmVhdGUgaXRcbiAgICAvLyAgICAgICBvYmplY3RTdG9yZS50cmFuc2FjdGlvbi5vbmNvbXBsZXRlID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgIC8vICAgICAgICAgICAgIC8vIFN0b3JlIHZhbHVlcyBpbiB0aGUgbmV3bHkgY3JlYXRlZCBvYmplY3RTdG9yZS5cbiAgICAvLyAgICAgICAgICAgICAvLyBjb25zdCBteU9iamVjdFN0b3JlID0gZGJcbiAgICAvLyAgICAgICAgICAgICAvLyAudHJhbnNhY3Rpb24oZGF0YWJhc2VOYW1lLCBcInJlYWR3cml0ZVwiKVxuICAgIC8vICAgICAgICAgICAgIC8vIC5vYmplY3RTdG9yZShkYXRhYmFzZU5hbWUpO1xuICAgIC8vICAgICAgICAgICAgIC8vIG15T2JqZWN0U3RvcmUuYWRkKG9iamVjdCk7XG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmICghZGIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucyhjb25uZWN0aW9uRGIpKSB7IC8vIGlmIHRoZXJlJ3Mgbm8gZGF0YWJhc2UgbmFtZVxuICAgIC8vICAgICAgIGxldCAgb2JqZWN0U3RvcmUgPSBkYi5jcmVhdGVPYmplY3RTdG9yZShjb25uZWN0aW9uRGIsIHtrZXlQYXRoOiAnaWQnfSk7IC8vIGNyZWF0ZSBpdFxuICAgIC8vICAgICAgIG9iamVjdFN0b3JlLnRyYW5zYWN0aW9uLm9uY29tcGxldGUgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmKCFkYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKHNldHRpbmdzKSl7XG4gICAgLy8gICAgICAgbGV0ICBvYmplY3RTdG9yZSA9IGRiLmNyZWF0ZU9iamVjdFN0b3JlKHNldHRpbmdzLCB7a2V5UGF0aDogJ2lkJ30pOyAvLyBjcmVhdGUgaXRcbiAgICAvLyAgICAgICBvYmplY3RTdG9yZS50cmFuc2FjdGlvbi5vbmNvbXBsZXRlID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgIC8vICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbn1cbmV4cG9ydHMuc3RvcmVUb0RhdGFiYXNlID0gc3RvcmVUb0RhdGFiYXNlO1xuZnVuY3Rpb24gZ2V0RnJvbURhdGFiYXNlKGRhdGFiYXNlTmFtZSwgaWQpIHtcbiAgICBvcGVuRGF0YWJhc2UoZGF0YWJhc2VOYW1lKTtcbiAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4oXCJGcmVlU2NoZW1hXCIsIHZlcnNpb24pO1xuICAgIHZhciBjb25jZXB0O1xuICAgIHJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIHZhciBkYiA9IHRhcmdldC5yZXN1bHQ7XG4gICAgICAgIGxldCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKGRhdGFiYXNlTmFtZSwgXCJyZWFkd3JpdGVcIik7XG4gICAgICAgIGxldCBvYmplY3RTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKGRhdGFiYXNlTmFtZSk7XG4gICAgICAgIGxldCBnZXRSZXF1ZXN0ID0gb2JqZWN0U3RvcmUuZ2V0KGlkKTtcbiAgICAgICAgZ2V0UmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICBjb25jZXB0ID0gdGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICAgIHJldHVybiBjb25jZXB0O1xuICAgICAgICAgICAgLy8gY29uY2VwdCA9ICBldmVudC50YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgLy8gQWNjZXNzIHRoZSByZXRyaWV2ZWQgZGF0YVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gY29uY2VwdDtcbiAgICAgICAgLy8gICAvLyBEYXRhYmFzZSBvcGVuZWQgc3VjY2Vzc2Z1bGx5XG4gICAgICAgIC8vIH07XG4gICAgfTtcbn1cbmV4cG9ydHMuZ2V0RnJvbURhdGFiYXNlID0gZ2V0RnJvbURhdGFiYXNlO1xuZnVuY3Rpb24gR2V0U3RhdHNGcm9tRGF0YWJhc2UoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIGRhdGFiYXNlTmFtZSA9IFwic2V0dGluZ3NcIjtcbiAgICAgICAgb3BlbkRhdGFiYXNlKGRhdGFiYXNlTmFtZSk7XG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIub3BlbihcIkZyZWVTY2hlbWFcIiwgdmVyc2lvbik7XG4gICAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgdmFyIGRiID0gdGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICAgIGxldCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKGRhdGFiYXNlTmFtZSwgXCJyZWFkd3JpdGVcIik7XG4gICAgICAgICAgICBsZXQgb2JqZWN0U3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShkYXRhYmFzZU5hbWUpO1xuICAgICAgICAgICAgdmFyIGFsbG9iamVjdHMgPSBvYmplY3RTdG9yZS5nZXRBbGwoKTtcbiAgICAgICAgICAgIGFsbG9iamVjdHMub25zdWNjZXNzID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBzZXR0aW5nc0RhdGEgPSBuZXcgU2V0dGluZ0RhdGFfMS5TZXR0aW5nRGF0YShmYWxzZSk7XG4gICAgICAgICAgICAgICAgdmFyIHNldHRpbmdzQXJyYXkgPSBhbGxvYmplY3RzLnJlc3VsdDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNldHRpbmdzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3NEYXRhID0gc2V0dGluZ3NBcnJheVtpXTtcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3NEYXRhID0gc2V0dGluZ3NEYXRhO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHNldHRpbmdzRGF0YSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHJlamVjdChldmVudCk7XG4gICAgICAgIH07XG4gICAgfSk7XG59XG5leHBvcnRzLkdldFN0YXRzRnJvbURhdGFiYXNlID0gR2V0U3RhdHNGcm9tRGF0YWJhc2U7XG5mdW5jdGlvbiBBaVVwZGF0ZUZsYWcob2JqZWN0KSB7XG4gICAgdmFyIGRhdGFiYXNlTmFtZSA9IFwic2V0dGluZ3NcIjtcbiAgICBvcGVuRGF0YWJhc2UoZGF0YWJhc2VOYW1lKTtcbiAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4oXCJGcmVlU2NoZW1hXCIsIHZlcnNpb24pO1xuICAgIHJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIHZhciBkYiA9IHRhcmdldC5yZXN1bHQ7XG4gICAgICAgIGxldCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKGRhdGFiYXNlTmFtZSwgXCJyZWFkd3JpdGVcIik7XG4gICAgICAgIGxldCBvYmpTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKGRhdGFiYXNlTmFtZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKG9iamVjdCk7XG4gICAgICAgIG9ialN0b3JlLnB1dChvYmplY3QpO1xuICAgIH07XG59XG5leHBvcnRzLkFpVXBkYXRlRmxhZyA9IEFpVXBkYXRlRmxhZztcbmZ1bmN0aW9uIGdldEZyb21EYXRhYmFzZVdpdGhUeXBlKGRhdGFiYXNlTmFtZSwgdHlwZSwgaWQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgb3BlbkRhdGFiYXNlKGRhdGFiYXNlTmFtZSk7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4oXCJGcmVlU2NoZW1hXCIsIHZlcnNpb24pO1xuICAgICAgICAgICAgdmFyIGNvbmNlcHQ7XG4gICAgICAgICAgICB2YXIgQ29uY2VwdExpc3QgPSBbXTtcbiAgICAgICAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgICAgICB2YXIgZGIgPSB0YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgICAgIGxldCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKGRhdGFiYXNlTmFtZSwgXCJyZWFkd3JpdGVcIik7XG4gICAgICAgICAgICAgICAgbGV0IG9iamVjdFN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoZGF0YWJhc2VOYW1lKTtcbiAgICAgICAgICAgICAgICBjb25zdCBnZXRDdXJzb3JSZXF1ZXN0ID0gb2JqZWN0U3RvcmUub3BlbkN1cnNvcigpO1xuICAgICAgICAgICAgICAgIGdldEN1cnNvclJlcXVlc3Qub25zdWNjZXNzID0gZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEN1cnNvciBsb2dpYyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnNvciA9IHRhcmdldC5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJzb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJzb3IudmFsdWVbdHlwZV0gPT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25jZXB0ID0gY3Vyc29yLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbmNlcHRMaXN0LnB1c2goY29uY2VwdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IuY29udGludWUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShDb25jZXB0TGlzdCk7XG4gICAgICAgICAgICAgICAgLy8gICAvLyBEYXRhYmFzZSBvcGVuZWQgc3VjY2Vzc2Z1bGx5XG4gICAgICAgICAgICAgICAgLy8gfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXZlbnQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHJldHVybiBDb25jZXB0TGlzdDtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZ2V0RnJvbURhdGFiYXNlV2l0aFR5cGUgPSBnZXRGcm9tRGF0YWJhc2VXaXRoVHlwZTtcbmZ1bmN0aW9uIGdldEZyb21EYXRhYmFzZVdpdGhUeXBlT2xkKGRhdGFiYXNlTmFtZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBvcGVuRGF0YWJhc2UoZGF0YWJhc2VOYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIub3BlbihcIkZyZWVTY2hlbWFcIiwgdmVyc2lvbik7XG4gICAgICAgICAgICB2YXIgY29uY2VwdDtcbiAgICAgICAgICAgIHZhciBDb25jZXB0TGlzdCA9IFtdO1xuICAgICAgICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgICAgIHZhciBkYiA9IHRhcmdldC5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgbGV0IHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24oZGF0YWJhc2VOYW1lLCBcInJlYWR3cml0ZVwiKTtcbiAgICAgICAgICAgICAgICBsZXQgb2JqZWN0U3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShkYXRhYmFzZU5hbWUpO1xuICAgICAgICAgICAgICAgIHZhciBhbGxvYmplY3RzID0gb2JqZWN0U3RvcmUuZ2V0QWxsKCk7XG4gICAgICAgICAgICAgICAgYWxsb2JqZWN0cy5vbnN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0dWRlbnRzID0gYWxsb2JqZWN0cy5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R1ZGVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmNlcHRMaXN0LnB1c2goc3R1ZGVudHNbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoQ29uY2VwdExpc3QpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgLy8gICAvLyBEYXRhYmFzZSBvcGVuZWQgc3VjY2Vzc2Z1bGx5XG4gICAgICAgICAgICAgICAgLy8gfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXZlbnQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHJldHVybiBDb25jZXB0TGlzdDtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZ2V0RnJvbURhdGFiYXNlV2l0aFR5cGVPbGQgPSBnZXRGcm9tRGF0YWJhc2VXaXRoVHlwZU9sZDtcbi8vICAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZyb21EYXRhYmFzZVdpdGhDaGFyYWN0ZXJPbGQoZGF0YWJhc2VOYW1lOnN0cmluZywgdHlwZTpzdHJpbmcsIGNoYXJhY3RlclZhbHVlOnN0cmluZyl7XG4vLyAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4vLyAgICAgb3BlbkRhdGFiYXNlKGRhdGFiYXNlTmFtZSk7XG4vLyAgICAgY29uc3QgcmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKFwiRnJlZVNjaGVtYVwiLHZlcnNpb24pO1xuLy8gICAgIHZhciBjb25jZXB0OiBDb25jZXB0fG51bGw7XG4vLyAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbihldmVudCkge1xuLy8gICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIElEQk9wZW5EQlJlcXVlc3Q7XG4vLyAgICAgICAgIHZhciBkYiA9IHRhcmdldC5yZXN1bHQgYXMgSURCRGF0YWJhc2U7XG4vLyAgICAgICBsZXQgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbihkYXRhYmFzZU5hbWUsIFwicmVhZHdyaXRlXCIpIGFzIElEQlRyYW5zYWN0aW9uO1xuLy8gICAgICAgbGV0IG9iamVjdFN0b3JlID10cmFuc2FjdGlvbi5vYmplY3RTdG9yZShkYXRhYmFzZU5hbWUpIGFzIElEQk9iamVjdFN0b3JlO1xuLy8gICAgICAgdmFyIGFsbG9iamVjdHMgPSBvYmplY3RTdG9yZS5nZXRBbGwoKTtcbi8vICAgICAgIGFsbG9iamVjdHMub25zdWNjZXNzID0gKCk9PiB7XG4vLyAgICAgICAgIGNvbnN0IHN0dWRlbnRzID0gYWxsb2JqZWN0cy5yZXN1bHQ7XG4vLyAgICAgICAgIGZvcih2YXIgaT0wOyBpPHN0dWRlbnRzLmxlbmd0aDsgaSsrKXtcbi8vICAgICAgICAgICBpZihzdHVkZW50c1tpXS5jaGFyYWN0ZXJfdmFsdWUgPT0gY2hhcmFjdGVyVmFsdWUpe1xuLy8gICAgICAgICAgICAgY29uY2VwdCA9IHN0dWRlbnRzW2ldO1xuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgICAgICBjb25zb2xlLmxvZyhcInJlc29sdmluZ1wiKTtcbi8vICAgICAgICAgcmVzb2x2ZShjb25jZXB0KTsgXG4vLyAgICAgfVxuLy8gICAgIC8vICAgLy8gRGF0YWJhc2Ugb3BlbmVkIHN1Y2Nlc3NmdWxseVxuLy8gICAgIC8vIH07XG4vLyAgICAgfVxuLy8gICAgIHJlcXVlc3Qub25lcnJvciA9ZnVuY3Rpb24oZXZlbnQpe1xuLy8gICAgICAgcmVqZWN0KGV2ZW50KTtcbi8vICAgICB9XG4vLyB9KTtcbi8vICAgIC8vIHJldHVybiBDb25jZXB0TGlzdDtcbi8vICAgfVxuZnVuY3Rpb24gcmVtb3ZlRnJvbURhdGFiYXNlKGRhdGFiYXNlTmFtZSwgaWQpIHtcbiAgICBvcGVuRGF0YWJhc2UoZGF0YWJhc2VOYW1lKTtcbiAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4oXCJGcmVlU2NoZW1hXCIsIHZlcnNpb24pO1xuICAgIHJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIHZhciBkYiA9IHRhcmdldC5yZXN1bHQ7XG4gICAgICAgIGxldCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKGRhdGFiYXNlTmFtZSwgXCJyZWFkd3JpdGVcIik7XG4gICAgICAgIGxldCBvYmplY3RTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKGRhdGFiYXNlTmFtZSk7XG4gICAgICAgIGxldCBnZXRSZXF1ZXN0ID0gb2JqZWN0U3RvcmUuZGVsZXRlKGlkKTtcbiAgICAgICAgZ2V0UmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICAvLyBjb25jZXB0ID0gIGV2ZW50LnRhcmdldC5yZXN1bHQ7XG4gICAgICAgICAgICAvLyBBY2Nlc3MgdGhlIHJldHJpZXZlZCBkYXRhXG4gICAgICAgIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVtb3ZlRnJvbURhdGFiYXNlID0gcmVtb3ZlRnJvbURhdGFiYXNlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEJpbmFyeVRyZWVfMSA9IHJlcXVpcmUoXCIuLi9EYXRhU3RydWN0dXJlcy9CaW5hcnlUcmVlXCIpO1xuY29uc3QgTm9kZV8xID0gcmVxdWlyZShcIi4uL0RhdGFTdHJ1Y3R1cmVzL05vZGVcIik7XG5jb25zdCBhcHBfMSA9IHJlcXVpcmUoXCIuLi9hcHBcIik7XG5mdW5jdGlvbiBDcmVhdGVCaW5hcnlUcmVlRnJvbURhdGEoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgY29uY2VwdExpc3QgPSB5aWVsZCAoMCwgYXBwXzEuZ2V0RnJvbURhdGFiYXNlV2l0aFR5cGVPbGQpKFwiY29uY2VwdFwiKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY29uY2VwdExpc3QpKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbmNlcHRMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNvbmNlcHQgPSBjb25jZXB0TGlzdFtpXTtcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IG5ldyBOb2RlXzEuTm9kZShjb25jZXB0LmlkLCBjb25jZXB0LCBudWxsLCBudWxsKTtcbiAgICAgICAgICAgICAgICBCaW5hcnlUcmVlXzEuQmluYXJ5VHJlZS5hZGROb2RlVG9UcmVlKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBlbmRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciB0aW1lID0gZW5kVGltZSAtIHN0YXJ0VGltZTtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IENyZWF0ZUJpbmFyeVRyZWVGcm9tRGF0YTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkNyZWF0ZUNoYXJhY3RlckJpbmFyeVRyZWVGcm9tRGF0YSA9IHZvaWQgMDtcbmNvbnN0IEJpbmFyeUNoYXJhY3RlclRyZWVfMSA9IHJlcXVpcmUoXCIuLi9EYXRhU3RydWN0dXJlcy9CaW5hcnlDaGFyYWN0ZXJUcmVlXCIpO1xuY29uc3QgTm9kZV8xID0gcmVxdWlyZShcIi4uL0RhdGFTdHJ1Y3R1cmVzL05vZGVcIik7XG5jb25zdCBhcHBfMSA9IHJlcXVpcmUoXCIuLi9hcHBcIik7XG5mdW5jdGlvbiBDcmVhdGVDaGFyYWN0ZXJCaW5hcnlUcmVlRnJvbURhdGEoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIHRyZWUgPSBuZXcgQmluYXJ5Q2hhcmFjdGVyVHJlZV8xLkJpbmFyeUNoYXJhY3RlclRyZWUoKTtcbiAgICAgICAgdmFyIHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgY29uY2VwdExpc3QgPSB5aWVsZCAoMCwgYXBwXzEuZ2V0RnJvbURhdGFiYXNlV2l0aFR5cGVPbGQpKFwiY29uY2VwdFwiKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY29uY2VwdExpc3QpKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbmNlcHRMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNvbmNlcHQgPSBjb25jZXB0TGlzdFtpXTtcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IG5ldyBOb2RlXzEuTm9kZShjb25jZXB0LmNoYXJhY3RlclZhbHVlLCBjb25jZXB0LCBudWxsLCBudWxsKTtcbiAgICAgICAgICAgICAgICBCaW5hcnlDaGFyYWN0ZXJUcmVlXzEuQmluYXJ5Q2hhcmFjdGVyVHJlZS5hZGROb2RlVG9UcmVlKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwid2hhdCBpcyB0aGlzXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhCaW5hcnlDaGFyYWN0ZXJUcmVlXzEuQmluYXJ5Q2hhcmFjdGVyVHJlZS5jaGFyYWN0ZXJSb290KTtcbiAgICAgICAgdmFyIGVuZFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIHRpbWUgPSBlbmRUaW1lIC0gc3RhcnRUaW1lO1xuICAgIH0pO1xufVxuZXhwb3J0cy5DcmVhdGVDaGFyYWN0ZXJCaW5hcnlUcmVlRnJvbURhdGEgPSBDcmVhdGVDaGFyYWN0ZXJCaW5hcnlUcmVlRnJvbURhdGE7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5DcmVhdGVDb25uZWN0aW9uQmV0d2VlblR3b0NvbmNlcHRzID0gdm9pZCAwO1xuY29uc3QgQ29ubmVjdGlvbl8xID0gcmVxdWlyZShcIi4uL0RhdGFTdHJ1Y3R1cmVzL0Nvbm5lY3Rpb25cIik7XG5jb25zdCBTeW5jRGF0YV8xID0gcmVxdWlyZShcIi4uL0RhdGFTdHJ1Y3R1cmVzL1N5bmNEYXRhXCIpO1xuY29uc3QgTWFrZVRoZUluc3RhbmNlQ29uY2VwdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL01ha2VUaGVJbnN0YW5jZUNvbmNlcHRcIikpO1xuZnVuY3Rpb24gQ3JlYXRlQ29ubmVjdGlvbkJldHdlZW5Ud29Db25jZXB0cyhjb25jZXB0MURhdGEsIGNvbmNlcHQyRGF0YSwgbGlua2VyLCBib3RoID0gZmFsc2UpIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciB1c2VySWQgPSBjb25jZXB0MURhdGEudXNlcklkO1xuICAgICAgICB2YXIgb3JkZXJVc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHZhciBzZWN1cml0eUlkID0gOTk5O1xuICAgICAgICB2YXIgc2VjdXJpdHlVc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHZhciBhY2Nlc3NJZCA9IDQ7XG4gICAgICAgIHZhciBhY2Nlc3NVc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHZhciBzZXNzaW9uSW5mb3JtYXRpb25JZCA9IDk5OTtcbiAgICAgICAgdmFyIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCA9IDk5OTtcbiAgICAgICAgaWYgKGJvdGgpIHtcbiAgICAgICAgICAgIGxldCBwcmVmaXgxID0gKChfYSA9IGNvbmNlcHQxRGF0YS50eXBlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2hhcmFjdGVyVmFsdWUpICsgXCJfc1wiO1xuICAgICAgICAgICAgbGV0IGxpbmtlckFkZDEgPSBsaW5rZXIgKyBcIl9ieVwiO1xuICAgICAgICAgICAgbGV0IGJhY2t3YXJkTGlua2VyID0gcHJlZml4MSArIFwiX1wiICsgbGlua2VyQWRkMTtcbiAgICAgICAgICAgIHZhciBjb25uZWN0aW9uQ29uY2VwdFJldmVyc2UgPSB5aWVsZCAoMCwgTWFrZVRoZUluc3RhbmNlQ29uY2VwdF8xLmRlZmF1bHQpKFwiY29ubmVjdGlvblwiLCBiYWNrd2FyZExpbmtlciwgZmFsc2UsIDk5OSwgOTk5LCA5OTkpO1xuICAgICAgICAgICAgdmFyIG5ld0Nvbm5lY3Rpb24gPSBuZXcgQ29ubmVjdGlvbl8xLkNvbm5lY3Rpb24oMCwgY29uY2VwdDJEYXRhLmlkLCBjb25jZXB0MURhdGEuaWQsIGNvbmNlcHQyRGF0YS51c2VySWQsIGNvbmNlcHQxRGF0YS51c2VySWQsIGNvbmNlcHQyRGF0YS51c2VySWQsIGNvbm5lY3Rpb25Db25jZXB0UmV2ZXJzZS5pZCwgY29ubmVjdGlvbkNvbmNlcHRSZXZlcnNlLnVzZXJJZCwgMTAwMCwgdXNlcklkLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCk7XG4gICAgICAgICAgICBTeW5jRGF0YV8xLlN5bmNEYXRhLkFkZENvbm5lY3Rpb24obmV3Q29ubmVjdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHByZWZpeCA9ICgoX2IgPSBjb25jZXB0MURhdGEudHlwZSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNoYXJhY3RlclZhbHVlKSArIFwiX3NcIjtcbiAgICAgICAgbGV0IGxpbmtlckFkZCA9IGxpbmtlciArIFwiX3NcIjtcbiAgICAgICAgbGV0IGZvcndhcmRMaW5rZXIgPSBwcmVmaXggKyBcIl9cIiArIGxpbmtlckFkZDtcbiAgICAgICAgdmFyIGNvbm5lY3Rpb25Db25jZXB0ID0geWllbGQgKDAsIE1ha2VUaGVJbnN0YW5jZUNvbmNlcHRfMS5kZWZhdWx0KShcImNvbm5lY3Rpb25cIiwgZm9yd2FyZExpbmtlciwgZmFsc2UsIDk5OSwgOTk5LCA5OTkpO1xuICAgICAgICB2YXIgbmV3Q29ubmVjdGlvbiA9IG5ldyBDb25uZWN0aW9uXzEuQ29ubmVjdGlvbigwLCBjb25jZXB0MURhdGEuaWQsIGNvbmNlcHQyRGF0YS5pZCwgY29uY2VwdDFEYXRhLnVzZXJJZCwgY29uY2VwdDJEYXRhLnVzZXJJZCwgY29uY2VwdDFEYXRhLnVzZXJJZCwgY29ubmVjdGlvbkNvbmNlcHQuaWQsIGNvbm5lY3Rpb25Db25jZXB0LnVzZXJJZCwgMTAwMCwgdXNlcklkLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCk7XG4gICAgICAgIFN5bmNEYXRhXzEuU3luY0RhdGEuQWRkQ29ubmVjdGlvbihuZXdDb25uZWN0aW9uKTtcbiAgICB9KTtcbn1cbmV4cG9ydHMuQ3JlYXRlQ29ubmVjdGlvbkJldHdlZW5Ud29Db25jZXB0cyA9IENyZWF0ZUNvbm5lY3Rpb25CZXR3ZWVuVHdvQ29uY2VwdHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQ29uY2VwdF8xID0gcmVxdWlyZShcIi4uL0RhdGFTdHJ1Y3R1cmVzL0NvbmNlcHRcIik7XG5jb25zdCBDcmVhdGVUaGVDb25uZWN0aW9uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vQ3JlYXRlVGhlQ29ubmVjdGlvblwiKSk7XG5jb25zdCBNYWtlVGhlSW5zdGFuY2VDb25jZXB0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTWFrZVRoZUluc3RhbmNlQ29uY2VwdFwiKSk7XG5mdW5jdGlvbiBDcmVhdGVUaGVDb21wb3NpdGlvbihqc29uLCBvZlRoZUNvbmNlcHRJZCA9IG51bGwsIG9mVGhlQ29uY2VwdFVzZXJJZCA9IG51bGwsIG1haW5LZXkgPSBudWxsLCB1c2VySWQgPSBudWxsLCBhY2Nlc3NJZCA9IG51bGwsIHNlc3Npb25JbmZvcm1hdGlvbklkID0gbnVsbCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBsb2NhbFVzZXJJZCA9IHVzZXJJZCAhPT0gbnVsbCAmJiB1c2VySWQgIT09IHZvaWQgMCA/IHVzZXJJZCA6IDEwMjY3O1xuICAgICAgICB2YXIgbG9jYWxBY2Nlc3NJZCA9IGFjY2Vzc0lkICE9PSBudWxsICYmIGFjY2Vzc0lkICE9PSB2b2lkIDAgPyBhY2Nlc3NJZCA6IDEwMjY3O1xuICAgICAgICB2YXIgbG9jYWxTZXNzaW9uSWQgPSBzZXNzaW9uSW5mb3JtYXRpb25JZCAhPT0gbnVsbCAmJiBzZXNzaW9uSW5mb3JtYXRpb25JZCAhPT0gdm9pZCAwID8gc2Vzc2lvbkluZm9ybWF0aW9uSWQgOiAxMDI2NztcbiAgICAgICAgdmFyIE1haW5LZXlMb2NhbCA9IG1haW5LZXkgIT09IG51bGwgJiYgbWFpbktleSAhPT0gdm9pZCAwID8gbWFpbktleSA6IDA7XG4gICAgICAgIHZhciBNYWluQ29uY2VwdCA9IG5ldyBDb25jZXB0XzEuQ29uY2VwdCgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCBcIjBcIiwgMCwgMCwgMCwgMCwgMCwgMCwgZmFsc2UpO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBqc29uKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGpzb25ba2V5XSAhPSAnc3RyaW5nJyAmJiB0eXBlb2YganNvbltrZXldICE9ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9mVGhlQ29uY2VwdElkID09IG51bGwgJiYgb2ZUaGVDb25jZXB0VXNlcklkID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxvY2FsTWFpbktleSA9IE1haW5LZXlMb2NhbDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbmNlcHRTdHJpbmcgPSB5aWVsZCAoMCwgTWFrZVRoZUluc3RhbmNlQ29uY2VwdF8xLmRlZmF1bHQpKGtleSwgXCJcIiwgdHJ1ZSwgbG9jYWxVc2VySWQsIGxvY2FsQWNjZXNzSWQsIGxvY2FsU2Vzc2lvbklkKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmNlcHQgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICBNYWluQ29uY2VwdCA9IGNvbmNlcHQ7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsTWFpbktleSA9IGNvbmNlcHQuaWQ7XG4gICAgICAgICAgICAgICAgICAgIE1haW5LZXlMb2NhbCA9IGNvbmNlcHQuaWQ7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIENyZWF0ZVRoZUNvbXBvc2l0aW9uKGpzb25ba2V5XSwgY29uY2VwdC5pZCwgY29uY2VwdC51c2VySWQsIGxvY2FsTWFpbktleSwgdXNlcklkLCBhY2Nlc3NJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9mVGhlID0gb2ZUaGVDb25jZXB0SWQgIT09IG51bGwgJiYgb2ZUaGVDb25jZXB0SWQgIT09IHZvaWQgMCA/IG9mVGhlQ29uY2VwdElkIDogOTk5O1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2ZUaGVVc2VyID0gb2ZUaGVDb25jZXB0VXNlcklkICE9PSBudWxsICYmIG9mVGhlQ29uY2VwdFVzZXJJZCAhPT0gdm9pZCAwID8gb2ZUaGVDb25jZXB0VXNlcklkIDogMTAyNjc7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsb2NhbE1haW5LZXkgPSBNYWluS2V5TG9jYWw7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb25jZXB0U3RyaW5nID0geWllbGQgKDAsIE1ha2VUaGVJbnN0YW5jZUNvbmNlcHRfMS5kZWZhdWx0KShrZXksIFwiXCIsIHRydWUsIGxvY2FsVXNlcklkLCBsb2NhbEFjY2Vzc0lkLCBsb2NhbFNlc3Npb25JZCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb25jZXB0ID0gY29uY2VwdFN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgKDAsIENyZWF0ZVRoZUNvbm5lY3Rpb25fMS5kZWZhdWx0KShvZlRoZSwgb2ZUaGVVc2VyLCBjb25jZXB0LmlkLCBjb25jZXB0LnVzZXJJZCwgbG9jYWxNYWluS2V5LCBsb2NhbFNlc3Npb25JZCwgY29uY2VwdC51c2VySWQpO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBDcmVhdGVUaGVDb21wb3NpdGlvbihqc29uW2tleV0sIGNvbmNlcHQuaWQsIGNvbmNlcHQudXNlcklkLCBsb2NhbE1haW5LZXksIHVzZXJJZCwgYWNjZXNzSWQsIHNlc3Npb25JbmZvcm1hdGlvbklkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgb2ZUaGUgPSBvZlRoZUNvbmNlcHRJZCAhPT0gbnVsbCAmJiBvZlRoZUNvbmNlcHRJZCAhPT0gdm9pZCAwID8gb2ZUaGVDb25jZXB0SWQgOiA5OTk7XG4gICAgICAgICAgICAgICAgdmFyIG9mVGhlVXNlciA9IG9mVGhlQ29uY2VwdFVzZXJJZCAhPT0gbnVsbCAmJiBvZlRoZUNvbmNlcHRVc2VySWQgIT09IHZvaWQgMCA/IG9mVGhlQ29uY2VwdFVzZXJJZCA6IDEwMjY3O1xuICAgICAgICAgICAgICAgIHZhciBsb2NhbE1haW5LZXkgPSBNYWluS2V5TG9jYWw7XG4gICAgICAgICAgICAgICAgdmFyIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCAoMCwgTWFrZVRoZUluc3RhbmNlQ29uY2VwdF8xLmRlZmF1bHQpKGtleSwganNvbltrZXldLCBmYWxzZSwgbG9jYWxVc2VySWQsIGxvY2FsQWNjZXNzSWQsIGxvY2FsU2Vzc2lvbklkKTtcbiAgICAgICAgICAgICAgICB2YXIgY29uY2VwdCA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgICAgICAgICAgeWllbGQgKDAsIENyZWF0ZVRoZUNvbm5lY3Rpb25fMS5kZWZhdWx0KShvZlRoZSwgb2ZUaGVVc2VyLCBjb25jZXB0LmlkLCBjb25jZXB0LnVzZXJJZCwgbG9jYWxNYWluS2V5LCBsb2NhbFNlc3Npb25JZCwgY29uY2VwdC51c2VySWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBNYWluQ29uY2VwdDtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IENyZWF0ZVRoZUNvbXBvc2l0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IENvbmNlcHRfMSA9IHJlcXVpcmUoXCIuLi9EYXRhU3RydWN0dXJlcy9Db25jZXB0XCIpO1xuY29uc3QgUmVzZXJ2ZWRJZHNfMSA9IHJlcXVpcmUoXCIuLi9EYXRhU3RydWN0dXJlcy9SZXNlcnZlZElkc1wiKTtcbmNvbnN0IFN5bmNEYXRhXzEgPSByZXF1aXJlKFwiLi4vRGF0YVN0cnVjdHVyZXMvU3luY0RhdGFcIik7XG5mdW5jdGlvbiBDcmVhdGVUaGVDb25jZXB0KHJlZmVyZW50LCB1c2VySWQsIGNhdGVnb3J5SWQsIGNhdGVnb3J5VXNlcklkLCB0eXBlSWQsIHR5cGVVc2VySWQsIHJlZmVyZW50SWQsIHJlZmVyZW50VXNlcklkLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBpZCA9IHlpZWxkIFJlc2VydmVkSWRzXzEuUmVzZXJ2ZWRJZHMuZ2V0SWQoKTtcbiAgICAgICAgdmFyIGlzTmV3ID0gdHJ1ZTtcbiAgICAgICAgdmFyIGNvbmNlcHQgPSBuZXcgQ29uY2VwdF8xLkNvbmNlcHQoaWQsIHVzZXJJZCwgdHlwZUlkLCB0eXBlVXNlcklkLCBjYXRlZ29yeUlkLCBjYXRlZ29yeVVzZXJJZCwgcmVmZXJlbnRJZCwgcmVmZXJlbnRVc2VySWQsIHJlZmVyZW50LCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCwgaXNOZXcpO1xuICAgICAgICBjb25jZXB0LmlzVGVtcCA9IHRydWU7XG4gICAgICAgIFN5bmNEYXRhXzEuU3luY0RhdGEuQWRkQ29uY2VwdChjb25jZXB0KTtcbiAgICAgICAgcmV0dXJuIGNvbmNlcHQ7XG4gICAgfSk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBDcmVhdGVUaGVDb25jZXB0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBDb25uZWN0aW9uXzEgPSByZXF1aXJlKFwiLi4vRGF0YVN0cnVjdHVyZXMvQ29ubmVjdGlvblwiKTtcbmNvbnN0IFN5bmNEYXRhXzEgPSByZXF1aXJlKFwiLi4vRGF0YVN0cnVjdHVyZXMvU3luY0RhdGFcIik7XG5mdW5jdGlvbiBjcmVhdGVUaGVDb25uZWN0aW9uKG9mVGhlQ29uY2VwdElkLCBvZlRoZUNvbmNlcHRVc2VySWQsIHRvVGhlQ29uY2VwdElkLCB0b1RoZUNvbmNlcHRVc2VySWQsIHR5cGVJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCkge1xuICAgIHZhciBvcmRlcklkID0gMTtcbiAgICB2YXIgb3JkZXJVc2VySWQgPSBvZlRoZUNvbmNlcHRVc2VySWQ7XG4gICAgdmFyIHR5cGVVc2VySWQgPSBvZlRoZUNvbmNlcHRVc2VySWQ7XG4gICAgdmFyIHVzZXJJZCA9IG9mVGhlQ29uY2VwdFVzZXJJZDtcbiAgICB2YXIgc2VjdXJpdHlJZCA9IDA7XG4gICAgdmFyIHNlY3VyaXR5VXNlcklkID0gb2ZUaGVDb25jZXB0VXNlcklkO1xuICAgIHZhciBhY2Nlc3NJZCA9IDQ7XG4gICAgdmFyIGFjY2Vzc1VzZXJJZCA9IG9mVGhlQ29uY2VwdFVzZXJJZDtcbiAgICBpZiAob2ZUaGVDb25jZXB0SWQgIT0gdG9UaGVDb25jZXB0SWQpIHtcbiAgICAgICAgdmFyIGNvbm5lY3Rpb24gPSBuZXcgQ29ubmVjdGlvbl8xLkNvbm5lY3Rpb24oMCwgb2ZUaGVDb25jZXB0SWQsIHRvVGhlQ29uY2VwdElkLCBvZlRoZUNvbmNlcHRVc2VySWQsIHRvVGhlQ29uY2VwdFVzZXJJZCwgdXNlcklkLCB0eXBlSWQsIHR5cGVVc2VySWQsIG9yZGVySWQsIG9yZGVyVXNlcklkLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCk7XG4gICAgICAgIGNvbm5lY3Rpb24uaXNUZW1wID0gdHJ1ZTtcbiAgICAgICAgY29ubmVjdGlvbi5pZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMCk7XG4gICAgICAgIFN5bmNEYXRhXzEuU3luY0RhdGEuQWRkQ29ubmVjdGlvbihjb25uZWN0aW9uKTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVUaGVDb25uZWN0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ3JlYXRlVHlwZVRyZWVGcm9tRGF0YSA9IHZvaWQgMDtcbmNvbnN0IEJpbmFyeVR5cGVUcmVlXzEgPSByZXF1aXJlKFwiLi4vRGF0YVN0cnVjdHVyZXMvQmluYXJ5VHlwZVRyZWVcIik7XG5jb25zdCBOb2RlXzEgPSByZXF1aXJlKFwiLi4vRGF0YVN0cnVjdHVyZXMvTm9kZVwiKTtcbmNvbnN0IGFwcF8xID0gcmVxdWlyZShcIi4uL2FwcFwiKTtcbmZ1bmN0aW9uIENyZWF0ZVR5cGVUcmVlRnJvbURhdGEoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgY29uY2VwdExpc3QgPSB5aWVsZCAoMCwgYXBwXzEuZ2V0RnJvbURhdGFiYXNlV2l0aFR5cGVPbGQpKFwiY29uY2VwdFwiKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY29uY2VwdExpc3QpKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbmNlcHRMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNvbmNlcHQgPSBjb25jZXB0TGlzdFtpXTtcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IG5ldyBOb2RlXzEuTm9kZShjb25jZXB0LnR5cGVJZCwgY29uY2VwdCwgbnVsbCwgbnVsbCk7XG4gICAgICAgICAgICAgICAgQmluYXJ5VHlwZVRyZWVfMS5CaW5hcnlUeXBlVHJlZS5hZGROb2RlVG9UcmVlKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwid2hhdCBpcyB0aGlzXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhCaW5hcnlUeXBlVHJlZV8xLkJpbmFyeVR5cGVUcmVlLnR5cGVSb290KTtcbiAgICAgICAgdmFyIGVuZFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIHRpbWUgPSBlbmRUaW1lIC0gc3RhcnRUaW1lO1xuICAgIH0pO1xufVxuZXhwb3J0cy5DcmVhdGVUeXBlVHJlZUZyb21EYXRhID0gQ3JlYXRlVHlwZVRyZWVGcm9tRGF0YTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdldENvbXBvc2l0aW9uV2l0aElkID0gZXhwb3J0cy5HZXRDb21wb3NpdGlvbiA9IHZvaWQgMDtcbmNvbnN0IEdldENvbmNlcHRfMSA9IHJlcXVpcmUoXCIuLi9BcGkvR2V0Q29uY2VwdFwiKTtcbmNvbnN0IEdldEFsbENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvbl8xID0gcmVxdWlyZShcIi4uL0FwaS9HZXRBbGxDb25uZWN0aW9uc09mQ29tcG9zaXRpb25cIik7XG5jb25zdCBDb25jZXB0RGF0YV8xID0gcmVxdWlyZShcIi4uL0RhdGFTdHJ1Y3R1cmVzL0NvbmNlcHREYXRhXCIpO1xuZnVuY3Rpb24gR2V0Q29tcG9zaXRpb24oaWQpIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBjb25uZWN0aW9uTGlzdCA9IFtdO1xuICAgICAgICB2YXIgcmV0dXJuT3V0cHV0ID0ge307XG4gICAgICAgIHZhciBjb25uZWN0aW9uTGlzdFN0cmluZyA9IHlpZWxkICgwLCBHZXRBbGxDb25uZWN0aW9uc09mQ29tcG9zaXRpb25fMS5HZXRBbGxDb25uZWN0aW9uc09mQ29tcG9zaXRpb24pKGlkKTtcbiAgICAgICAgY29ubmVjdGlvbkxpc3QgPSBjb25uZWN0aW9uTGlzdFN0cmluZztcbiAgICAgICAgLy9jb25uZWN0aW9uTGlzdCA9IENvbm5lY3Rpb25EYXRhLkdldENvbm5lY3Rpb25zT2ZDb21wb3NpdGlvbihpZCk7XG4gICAgICAgIHZhciBjb21wb3NpdGlvbkxpc3QgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb25uZWN0aW9uTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCFjb21wb3NpdGlvbkxpc3QuaW5jbHVkZXMoY29ubmVjdGlvbkxpc3RbaV0ub2ZUaGVDb25jZXB0SWQpKSB7XG4gICAgICAgICAgICAgICAgY29tcG9zaXRpb25MaXN0LnB1c2goY29ubmVjdGlvbkxpc3RbaV0ub2ZUaGVDb25jZXB0SWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBjb25jZXB0ID0geWllbGQgQ29uY2VwdERhdGFfMS5Db25jZXB0c0RhdGEuR2V0Q29uY2VwdChpZCk7XG4gICAgICAgIGlmIChjb25jZXB0ID09IG51bGwgJiYgaWQgIT0gbnVsbCAmJiBpZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZhciBjb25jZXB0U3RyaW5nID0geWllbGQgKDAsIEdldENvbmNlcHRfMS5HZXRDb25jZXB0KShpZCk7XG4gICAgICAgICAgICBjb25jZXB0ID0gY29uY2VwdFN0cmluZztcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3V0cHV0ID0geWllbGQgcmVjdXJzaXZlRmV0Y2goaWQsIGNvbm5lY3Rpb25MaXN0LCBjb21wb3NpdGlvbkxpc3QpO1xuICAgICAgICB2YXIgbWFpblN0cmluZyA9IChfYiA9IChfYSA9IGNvbmNlcHQgPT09IG51bGwgfHwgY29uY2VwdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29uY2VwdC50eXBlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2hhcmFjdGVyVmFsdWUpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IFwiXCI7XG4gICAgICAgIHJldHVybk91dHB1dFttYWluU3RyaW5nXSA9IG91dHB1dDtcbiAgICAgICAgcmV0dXJuIHJldHVybk91dHB1dDtcbiAgICB9KTtcbn1cbmV4cG9ydHMuR2V0Q29tcG9zaXRpb24gPSBHZXRDb21wb3NpdGlvbjtcbmZ1bmN0aW9uIEdldENvbXBvc2l0aW9uV2l0aElkKGlkKSB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgY29ubmVjdGlvbkxpc3QgPSBbXTtcbiAgICAgICAgdmFyIHJldHVybk91dHB1dCA9IHt9O1xuICAgICAgICB2YXIgY29ubmVjdGlvbkxpc3RTdHJpbmcgPSB5aWVsZCAoMCwgR2V0QWxsQ29ubmVjdGlvbnNPZkNvbXBvc2l0aW9uXzEuR2V0QWxsQ29ubmVjdGlvbnNPZkNvbXBvc2l0aW9uKShpZCk7XG4gICAgICAgIGNvbm5lY3Rpb25MaXN0ID0gY29ubmVjdGlvbkxpc3RTdHJpbmc7XG4gICAgICAgIHZhciBjb21wb3NpdGlvbkxpc3QgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb25uZWN0aW9uTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCFjb21wb3NpdGlvbkxpc3QuaW5jbHVkZXMoY29ubmVjdGlvbkxpc3RbaV0ub2ZUaGVDb25jZXB0SWQpKSB7XG4gICAgICAgICAgICAgICAgY29tcG9zaXRpb25MaXN0LnB1c2goY29ubmVjdGlvbkxpc3RbaV0ub2ZUaGVDb25jZXB0SWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBjb25jZXB0ID0geWllbGQgQ29uY2VwdERhdGFfMS5Db25jZXB0c0RhdGEuR2V0Q29uY2VwdChpZCk7XG4gICAgICAgIGlmIChjb25jZXB0ID09IG51bGwgJiYgaWQgIT0gbnVsbCAmJiBpZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZhciBjb25jZXB0U3RyaW5nID0geWllbGQgKDAsIEdldENvbmNlcHRfMS5HZXRDb25jZXB0KShpZCk7XG4gICAgICAgICAgICBjb25jZXB0ID0gY29uY2VwdFN0cmluZztcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3V0cHV0ID0geWllbGQgcmVjdXJzaXZlRmV0Y2goaWQsIGNvbm5lY3Rpb25MaXN0LCBjb21wb3NpdGlvbkxpc3QpO1xuICAgICAgICB2YXIgbWFpblN0cmluZyA9IChfYiA9IChfYSA9IGNvbmNlcHQgPT09IG51bGwgfHwgY29uY2VwdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29uY2VwdC50eXBlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2hhcmFjdGVyVmFsdWUpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IFwiXCI7XG4gICAgICAgIHJldHVybk91dHB1dFttYWluU3RyaW5nXSA9IG91dHB1dDtcbiAgICAgICAgdmFyIEZpbmFsUmV0dXJuID0ge307XG4gICAgICAgIEZpbmFsUmV0dXJuWydkYXRhJ10gPSByZXR1cm5PdXRwdXQ7XG4gICAgICAgIEZpbmFsUmV0dXJuWydpZCddID0gaWQ7XG4gICAgICAgIHJldHVybiBGaW5hbFJldHVybjtcbiAgICB9KTtcbn1cbmV4cG9ydHMuR2V0Q29tcG9zaXRpb25XaXRoSWQgPSBHZXRDb21wb3NpdGlvbldpdGhJZDtcbmZ1bmN0aW9uIHJlY3Vyc2l2ZUZldGNoKGlkLCBjb25uZWN0aW9uTGlzdCwgY29tcG9zaXRpb25MaXN0KSB7XG4gICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBvdXRwdXQgPSB7fTtcbiAgICAgICAgdmFyIGFycm91dHB1dCA9IFtdO1xuICAgICAgICB2YXIgY29uY2VwdCA9IHlpZWxkIENvbmNlcHREYXRhXzEuQ29uY2VwdHNEYXRhLkdldENvbmNlcHQoaWQpO1xuICAgICAgICBpZiAoKGNvbmNlcHQgPT0gbnVsbCB8fCBjb25jZXB0LmlkID09IDApICYmIGlkICE9IG51bGwgJiYgaWQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2YXIgY29uY2VwdFN0cmluZyA9IHlpZWxkICgwLCBHZXRDb25jZXB0XzEuR2V0Q29uY2VwdCkoaWQpO1xuICAgICAgICAgICAgY29uY2VwdCA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbmNlcHQpIHtcbiAgICAgICAgICAgIGlmIChjb25jZXB0LnR5cGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHZhciB0b0NvbmNlcHRUeXBlSWQgPSBjb25jZXB0LnR5cGVJZDtcbiAgICAgICAgICAgICAgICB2YXIgdG9Db25jZXB0VHlwZSA9IHlpZWxkIENvbmNlcHREYXRhXzEuQ29uY2VwdHNEYXRhLkdldENvbmNlcHQodG9Db25jZXB0VHlwZUlkKTtcbiAgICAgICAgICAgICAgICBjb25jZXB0LnR5cGUgPSB0b0NvbmNlcHRUeXBlO1xuICAgICAgICAgICAgICAgIGlmICh0b0NvbmNlcHRUeXBlID09IG51bGwgJiYgdG9Db25jZXB0VHlwZUlkICE9IG51bGwgJiYgdG9Db25jZXB0VHlwZUlkICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29uY2VwdFN0cmluZyA9IHlpZWxkICgwLCBHZXRDb25jZXB0XzEuR2V0Q29uY2VwdCkodG9Db25jZXB0VHlwZUlkKTtcbiAgICAgICAgICAgICAgICAgICAgdG9Db25jZXB0VHlwZSA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgIGNvbmNlcHQudHlwZSA9IHRvQ29uY2VwdFR5cGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBtYWluU3RyaW5nID0gKF9iID0gKF9hID0gY29uY2VwdCA9PT0gbnVsbCB8fCBjb25jZXB0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb25jZXB0LnR5cGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jaGFyYWN0ZXJWYWx1ZSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogXCJcIjtcbiAgICAgICAgaWYgKCFjb21wb3NpdGlvbkxpc3QuaW5jbHVkZXMoaWQpKSB7XG4gICAgICAgICAgICByZXR1cm4gY29uY2VwdCA9PT0gbnVsbCB8fCBjb25jZXB0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb25jZXB0LmNoYXJhY3RlclZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb25uZWN0aW9uTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChjb25uZWN0aW9uTGlzdFtpXS5vZlRoZUNvbmNlcHRJZCA9PSBpZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdG9Db25jZXB0SWQgPSBjb25uZWN0aW9uTGlzdFtpXS50b1RoZUNvbmNlcHRJZDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvQ29uY2VwdCA9IHlpZWxkIENvbmNlcHREYXRhXzEuQ29uY2VwdHNEYXRhLkdldENvbmNlcHQodG9Db25jZXB0SWQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKHRvQ29uY2VwdCA9PSBudWxsIHx8IHRvQ29uY2VwdC5pZCA9PSAwKSAmJiB0b0NvbmNlcHRJZCAhPSBudWxsICYmIHRvQ29uY2VwdElkICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCAoMCwgR2V0Q29uY2VwdF8xLkdldENvbmNlcHQpKHRvQ29uY2VwdElkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvQ29uY2VwdCA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvQ29uY2VwdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCh0b0NvbmNlcHQgPT09IG51bGwgfHwgdG9Db25jZXB0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0b0NvbmNlcHQudHlwZSkgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0b0NvbmNlcHRUeXBlSWQgPSB0b0NvbmNlcHQudHlwZUlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0b0NvbmNlcHRUeXBlID0geWllbGQgQ29uY2VwdERhdGFfMS5Db25jZXB0c0RhdGEuR2V0Q29uY2VwdCh0b0NvbmNlcHRUeXBlSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvQ29uY2VwdC50eXBlID0gdG9Db25jZXB0VHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9Db25jZXB0VHlwZSA9PSBudWxsICYmIHRvQ29uY2VwdFR5cGVJZCAhPSBudWxsICYmIHRvQ29uY2VwdFR5cGVJZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCAoMCwgR2V0Q29uY2VwdF8xLkdldENvbmNlcHQpKHRvQ29uY2VwdFR5cGVJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvQ29uY2VwdFR5cGUgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b0NvbmNlcHQudHlwZSA9IHRvQ29uY2VwdFR5cGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciByZWdleCA9IFwidGhlX1wiO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbG9jYWxtYWluU3RyaW5nID0gKF9kID0gKF9jID0gdG9Db25jZXB0ID09PSBudWxsIHx8IHRvQ29uY2VwdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogdG9Db25jZXB0LnR5cGUpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5jaGFyYWN0ZXJWYWx1ZSkgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxvY2FsS2V5ID0gbG9jYWxtYWluU3RyaW5nLnJlcGxhY2UocmVnZXgsIFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNOYU4oTnVtYmVyKGxvY2FsS2V5KSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb2NhbEtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIHJlY3Vyc2l2ZUZldGNoKHRvQ29uY2VwdElkLCBjb25uZWN0aW9uTGlzdCwgY29tcG9zaXRpb25MaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRbbG9jYWxLZXldID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgcmVjdXJzaXZlRmV0Y2godG9Db25jZXB0SWQsIGNvbm5lY3Rpb25MaXN0LCBjb21wb3NpdGlvbkxpc3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3V0cHV0W2xvY2FsS2V5XSA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCA9IGFycm91dHB1dDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH0pO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2V0Q29tcG9zaXRpb25MaXN0V2l0aElkID0gZXhwb3J0cy5HZXRDb21wb3NpdGlvbkxpc3QgPSB2b2lkIDA7XG5jb25zdCBHZXRBbGxDb25jZXB0c0J5VHlwZV8xID0gcmVxdWlyZShcIi4uL0FwaS9HZXRBbGxDb25jZXB0c0J5VHlwZVwiKTtcbmNvbnN0IENvbmNlcHREYXRhXzEgPSByZXF1aXJlKFwiLi4vRGF0YVN0cnVjdHVyZXMvQ29uY2VwdERhdGFcIik7XG5jb25zdCBHZXRDb21wb3NpdGlvbl8xID0gcmVxdWlyZShcIi4vR2V0Q29tcG9zaXRpb25cIik7XG5jb25zdCBHZXRDb25jZXB0QnlDaGFyYWN0ZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9HZXRDb25jZXB0QnlDaGFyYWN0ZXJcIikpO1xuZnVuY3Rpb24gR2V0Q29tcG9zaXRpb25MaXN0KGNvbXBvc2l0aW9uTmFtZSwgdXNlcklkLCBpbnBhZ2UgPSAxMCwgcGFnZSA9IDEpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgY29uY2VwdCA9IHlpZWxkICgwLCBHZXRDb25jZXB0QnlDaGFyYWN0ZXJfMS5kZWZhdWx0KShjb21wb3NpdGlvbk5hbWUpO1xuICAgICAgICB2YXIgQ29tcG9zaXRpb25MaXN0ID0gW107XG4gICAgICAgIGlmIChjb25jZXB0KSB7XG4gICAgICAgICAgICB5aWVsZCAoMCwgR2V0QWxsQ29uY2VwdHNCeVR5cGVfMS5HZXRBbGxDb25jZXB0c0J5VHlwZSkoY29tcG9zaXRpb25OYW1lLCB1c2VySWQpO1xuICAgICAgICAgICAgdmFyIGNvbmNlcHRMaXN0ID0geWllbGQgQ29uY2VwdERhdGFfMS5Db25jZXB0c0RhdGEuR2V0Q29uY2VwdHNCeVR5cGVJZEFuZFVzZXIoY29uY2VwdC5pZCwgdXNlcklkKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgbGlzdGVkIGRhdGFcIiwgY29uY2VwdExpc3QpO1xuICAgICAgICAgICAgdmFyIHN0YXJ0UGFnZSA9IGlucGFnZSAqIChwYWdlIC0gMSk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gc3RhcnRQYWdlOyBpIDwgc3RhcnRQYWdlICsgaW5wYWdlOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoY29uY2VwdExpc3RbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbXBvc2l0aW9uSnNvbiA9IHlpZWxkICgwLCBHZXRDb21wb3NpdGlvbl8xLkdldENvbXBvc2l0aW9uKShjb25jZXB0TGlzdFtpXS5pZCk7XG4gICAgICAgICAgICAgICAgICAgIENvbXBvc2l0aW9uTGlzdC5wdXNoKGNvbXBvc2l0aW9uSnNvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBDb21wb3NpdGlvbkxpc3Q7XG4gICAgfSk7XG59XG5leHBvcnRzLkdldENvbXBvc2l0aW9uTGlzdCA9IEdldENvbXBvc2l0aW9uTGlzdDtcbmZ1bmN0aW9uIEdldENvbXBvc2l0aW9uTGlzdFdpdGhJZChjb21wb3NpdGlvbk5hbWUsIHVzZXJJZCwgaW5wYWdlID0gMTAsIHBhZ2UgPSAxKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIGNvbmNlcHQgPSB5aWVsZCAoMCwgR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyXzEuZGVmYXVsdCkoY29tcG9zaXRpb25OYW1lKTtcbiAgICAgICAgdmFyIENvbXBvc2l0aW9uTGlzdCA9IFtdO1xuICAgICAgICBjb25zb2xlLmxvZyhcIndoYXQgYSBsaXN0XCIsIGNvbmNlcHQpO1xuICAgICAgICBpZiAoY29uY2VwdCkge1xuICAgICAgICAgICAgeWllbGQgKDAsIEdldEFsbENvbmNlcHRzQnlUeXBlXzEuR2V0QWxsQ29uY2VwdHNCeVR5cGUpKGNvbXBvc2l0aW9uTmFtZSwgdXNlcklkKTtcbiAgICAgICAgICAgIHZhciBjb25jZXB0TGlzdCA9IHlpZWxkIENvbmNlcHREYXRhXzEuQ29uY2VwdHNEYXRhLkdldENvbmNlcHRzQnlUeXBlSWRBbmRVc2VyKGNvbmNlcHQuaWQsIHVzZXJJZCk7XG4gICAgICAgICAgICB2YXIgc3RhcnRQYWdlID0gaW5wYWdlICogKHBhZ2UgLSAxKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBzdGFydFBhZ2U7IGkgPCBzdGFydFBhZ2UgKyBpbnBhZ2U7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChjb25jZXB0TGlzdFtpXSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29tcG9zaXRpb25Kc29uID0geWllbGQgKDAsIEdldENvbXBvc2l0aW9uXzEuR2V0Q29tcG9zaXRpb25XaXRoSWQpKGNvbmNlcHRMaXN0W2ldLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgQ29tcG9zaXRpb25MaXN0LnB1c2goY29tcG9zaXRpb25Kc29uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIENvbXBvc2l0aW9uTGlzdDtcbiAgICB9KTtcbn1cbmV4cG9ydHMuR2V0Q29tcG9zaXRpb25MaXN0V2l0aElkID0gR2V0Q29tcG9zaXRpb25MaXN0V2l0aElkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEdldENvbmNlcHRCeUNoYXJhY3RlclZhbHVlXzEgPSByZXF1aXJlKFwiLi4vQXBpL0dldENvbmNlcHRCeUNoYXJhY3RlclZhbHVlXCIpO1xuY29uc3QgQ29uY2VwdERhdGFfMSA9IHJlcXVpcmUoXCIuLi9EYXRhU3RydWN0dXJlcy9Db25jZXB0RGF0YVwiKTtcbmZ1bmN0aW9uIEdldENvbmNlcHRCeUNoYXJhY3RlcihjaGFyYWN0ZXJWYWx1ZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBjb25jZXB0ID0geWllbGQgQ29uY2VwdERhdGFfMS5Db25jZXB0c0RhdGEuR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyKGNoYXJhY3RlclZhbHVlKTtcbiAgICAgICAgdmFyIGxpdGVyYWxDaGFyYWN0ZXIgPSBgJHtjaGFyYWN0ZXJWYWx1ZX1gO1xuICAgICAgICBpZiAoKGNvbmNlcHQgPT0gbnVsbCB8fCAoY29uY2VwdCA9PT0gbnVsbCB8fCBjb25jZXB0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb25jZXB0LmlkKSA9PSAwKSAmJiBsaXRlcmFsQ2hhcmFjdGVyKSB7XG4gICAgICAgICAgICB5aWVsZCAoMCwgR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyVmFsdWVfMS5HZXRDb25jZXB0QnlDaGFyYWN0ZXJWYWx1ZSkoY2hhcmFjdGVyVmFsdWUpO1xuICAgICAgICAgICAgY29uY2VwdCA9IHlpZWxkIENvbmNlcHREYXRhXzEuQ29uY2VwdHNEYXRhLkdldENvbmNlcHRCeUNoYXJhY3RlcihjaGFyYWN0ZXJWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbmNlcHQ7XG4gICAgfSk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBHZXRDb25jZXB0QnlDaGFyYWN0ZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HZXREYXRhRnJvbUluZGV4RGJMb2NhbCA9IGV4cG9ydHMuR2V0RGF0YUZyb21JbmRleERiID0gdm9pZCAwO1xuY29uc3QgQ29uY2VwdERhdGFfMSA9IHJlcXVpcmUoXCIuLi9EYXRhU3RydWN0dXJlcy9Db25jZXB0RGF0YVwiKTtcbmNvbnN0IENvbm5lY3Rpb25EYXRhXzEgPSByZXF1aXJlKFwiLi4vRGF0YVN0cnVjdHVyZXMvQ29ubmVjdGlvbkRhdGFcIik7XG5jb25zdCBMb2NhbENvbm5lY3Rpb25EYXRhXzEgPSByZXF1aXJlKFwiLi4vRGF0YVN0cnVjdHVyZXMvTG9jYWwvTG9jYWxDb25uZWN0aW9uRGF0YVwiKTtcbmNvbnN0IGluZGV4ZGJsb2NhbF8xID0gcmVxdWlyZShcIi4uL0RhdGFiYXNlL2luZGV4ZGJsb2NhbFwiKTtcbmNvbnN0IGluZGV4ZWRkYl8xID0gcmVxdWlyZShcIi4uL0RhdGFiYXNlL2luZGV4ZWRkYlwiKTtcbmZ1bmN0aW9uIEdldERhdGFGcm9tSW5kZXhEYigpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgY29uY2VwdExpc3QgPSB5aWVsZCAoMCwgaW5kZXhlZGRiXzEuZ2V0RnJvbURhdGFiYXNlV2l0aFR5cGVPbGQpKFwiY29uY2VwdFwiKTtcbiAgICAgICAgR2V0Q29ubmVjdGlvbnNGcm9tSW5kZXhEYigpO1xuICAgICAgICBjb25zb2xlLmxvZyhjb25jZXB0TGlzdCk7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNvbmNlcHRMaXN0KSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb25jZXB0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIENvbmNlcHREYXRhXzEuQ29uY2VwdHNEYXRhLkFkZENvbmNlcHQoY29uY2VwdExpc3RbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLkdldERhdGFGcm9tSW5kZXhEYiA9IEdldERhdGFGcm9tSW5kZXhEYjtcbmZ1bmN0aW9uIEdldERhdGFGcm9tSW5kZXhEYkxvY2FsKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIC8vIHZhciBjb25jZXB0TGlzdCA9IGF3YWl0IGdldEFsbEZyb21Mb2NhbERiKFwibG9jYWxjb25jZXB0XCIpO1xuICAgICAgICBHZXRDb25uZWN0aW9uc0Zyb21JbmRleERiTG9jYWwoKTtcbiAgICAgICAgLy8gaWYoQXJyYXkuaXNBcnJheShjb25jZXB0TGlzdCkpe1xuICAgICAgICAvLyAgICAgZm9yKHZhciBpPTAgO2kgPCBjb25jZXB0TGlzdC5sZW5ndGggO2krKyl7XG4gICAgICAgIC8vICAgICAgICAgTG9jYWxDb25jZXB0c0RhdGEuQWRkQ29uY2VwdChjb25jZXB0TGlzdFtpXSk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuR2V0RGF0YUZyb21JbmRleERiTG9jYWwgPSBHZXREYXRhRnJvbUluZGV4RGJMb2NhbDtcbmZ1bmN0aW9uIEdldENvbm5lY3Rpb25zRnJvbUluZGV4RGIoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIGNvbm5lY3Rpb25MaXN0ID0geWllbGQgKDAsIGluZGV4ZWRkYl8xLmdldEZyb21EYXRhYmFzZVdpdGhUeXBlT2xkKShcImNvbm5lY3Rpb25cIik7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNvbm5lY3Rpb25MaXN0KSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb25uZWN0aW9uTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIENvbm5lY3Rpb25EYXRhXzEuQ29ubmVjdGlvbkRhdGEuQWRkQ29ubmVjdGlvbihjb25uZWN0aW9uTGlzdFtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIEdldENvbm5lY3Rpb25zRnJvbUluZGV4RGJMb2NhbCgpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgY29ubmVjdGlvbkxpc3QgPSB5aWVsZCAoMCwgaW5kZXhkYmxvY2FsXzEuZ2V0QWxsRnJvbUxvY2FsRGIpKFwibG9jYWxjb25uZWN0aW9uXCIpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjb25uZWN0aW9uTGlzdCkpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29ubmVjdGlvbkxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBMb2NhbENvbm5lY3Rpb25EYXRhXzEuTG9jYWxDb25uZWN0aW9uRGF0YS5BZGRDb25uZWN0aW9uKGNvbm5lY3Rpb25MaXN0W2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2V0TGluayA9IHZvaWQgMDtcbmNvbnN0IEdldENvbmNlcHRCeUNoYXJhY3RlckFuZFR5cGVfMSA9IHJlcXVpcmUoXCIuLi9BcGkvR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyQW5kVHlwZVwiKTtcbmNvbnN0IEdldENvbm5lY3Rpb25PZlRoZUNvbmNlcHRfMSA9IHJlcXVpcmUoXCIuLi9BcGkvR2V0Q29ubmVjdGlvbk9mVGhlQ29uY2VwdFwiKTtcbmNvbnN0IEdldENvbXBvc2l0aW9uXzEgPSByZXF1aXJlKFwiLi9HZXRDb21wb3NpdGlvblwiKTtcbmNvbnN0IEdldFRoZUNvbmNlcHRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9HZXRUaGVDb25jZXB0XCIpKTtcbmZ1bmN0aW9uIEdldExpbmsoaWQsIGxpbmtlcikge1xuICAgIHZhciBfYTtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgb3V0cHV0ID0gW107XG4gICAgICAgIHZhciBjb25jZXB0ID0geWllbGQgKDAsIEdldFRoZUNvbmNlcHRfMS5kZWZhdWx0KShpZCk7XG4gICAgICAgIHZhciBsaW5rU3RyaW5nID0gKChfYSA9IGNvbmNlcHQudHlwZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNoYXJhY3RlclZhbHVlKSArIFwiX3NcIiArIFwiX1wiICsgbGlua2VyO1xuICAgICAgICB2YXIgcmVsYXRlZENvbmNlcHRTdHJpbmcgPSB5aWVsZCAoMCwgR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyQW5kVHlwZV8xLkdldENvbmNlcHRCeUNoYXJhY3RlckFuZFR5cGUpKGxpbmtTdHJpbmcsIDE2KTtcbiAgICAgICAgdmFyIHJlbGF0ZWRDb25jZXB0ID0gcmVsYXRlZENvbmNlcHRTdHJpbmc7XG4gICAgICAgIGlmIChyZWxhdGVkQ29uY2VwdC5pZCA+IDApIHtcbiAgICAgICAgICAgIHZhciBjb25uZWN0aW9uc1N0cmluZyA9IHlpZWxkICgwLCBHZXRDb25uZWN0aW9uT2ZUaGVDb25jZXB0XzEuR2V0Q29ubmVjdGlvbk9mVGhlQ29uY2VwdCkocmVsYXRlZENvbmNlcHQuaWQsIGNvbmNlcHQuaWQsIGNvbmNlcHQudXNlcklkKTtcbiAgICAgICAgICAgIHZhciBjb25uZWN0aW9ucyA9IGNvbm5lY3Rpb25zU3RyaW5nO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb25uZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCB0b0NvbmNlcHRJZCA9IGNvbm5lY3Rpb25zW2ldLnRvVGhlQ29uY2VwdElkO1xuICAgICAgICAgICAgICAgIGxldCB0b0NvbmNlcHQgPSB5aWVsZCAoMCwgR2V0VGhlQ29uY2VwdF8xLmRlZmF1bHQpKHRvQ29uY2VwdElkKTtcbiAgICAgICAgICAgICAgICBsZXQgbmV3Q29tcG9zaXRpb24gPSB5aWVsZCAoMCwgR2V0Q29tcG9zaXRpb25fMS5HZXRDb21wb3NpdGlvbldpdGhJZCkodG9Db25jZXB0LmlkKTtcbiAgICAgICAgICAgICAgICBvdXRwdXQucHVzaChuZXdDb21wb3NpdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9KTtcbn1cbmV4cG9ydHMuR2V0TGluayA9IEdldExpbms7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgR2V0Q29uY2VwdF8xID0gcmVxdWlyZShcIi4uL0FwaS9HZXRDb25jZXB0XCIpO1xuY29uc3QgQ29uY2VwdF8xID0gcmVxdWlyZShcIi4uL0RhdGFTdHJ1Y3R1cmVzL0NvbmNlcHRcIik7XG5jb25zdCBDb25jZXB0RGF0YV8xID0gcmVxdWlyZShcIi4uL0RhdGFTdHJ1Y3R1cmVzL0NvbmNlcHREYXRhXCIpO1xuZnVuY3Rpb24gR2V0VGhlQ29uY2VwdChpZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBjb25jZXB0ID0gbmV3IENvbmNlcHRfMS5Db25jZXB0KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIFwiMFwiLCAwLCAwLCAwLCAwLCAwLCAwLCBmYWxzZSk7XG4gICAgICAgIGNvbmNlcHQgPSB5aWVsZCBDb25jZXB0RGF0YV8xLkNvbmNlcHRzRGF0YS5HZXRDb25jZXB0KGlkKTtcbiAgICAgICAgaWYgKChjb25jZXB0ID09IG51bGwgfHwgY29uY2VwdC5pZCA9PSAwKSAmJiBpZCAhPSBudWxsICYmIGlkICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFyIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCAoMCwgR2V0Q29uY2VwdF8xLkdldENvbmNlcHQpKGlkKTtcbiAgICAgICAgICAgIGNvbmNlcHQgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb25jZXB0KSB7XG4gICAgICAgICAgICBpZiAoY29uY2VwdC50eXBlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29uY2VwdFR5cGUgPSB5aWVsZCBDb25jZXB0RGF0YV8xLkNvbmNlcHRzRGF0YS5HZXRDb25jZXB0KGNvbmNlcHQudHlwZUlkKTtcbiAgICAgICAgICAgICAgICBpZiAoY29uY2VwdFR5cGUgPT0gbnVsbCAmJiBjb25jZXB0LnR5cGVJZCAhPSBudWxsICYmIGNvbmNlcHQudHlwZUlkICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdHlwZUNvbmNlcHRTdHJpbmcgPSB5aWVsZCAoMCwgR2V0Q29uY2VwdF8xLkdldENvbmNlcHQpKGNvbmNlcHQudHlwZUlkKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHR5cGVDb25jZXB0ID0gdHlwZUNvbmNlcHRTdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgIGNvbmNlcHQudHlwZSA9IHR5cGVDb25jZXB0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29uY2VwdDtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEdldFRoZUNvbmNlcHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgR2V0VGhlQ29uY2VwdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0dldFRoZUNvbmNlcHRcIikpO1xuZnVuY3Rpb24gR2V0VGhlUmVmZXJlbnQoaWQsIHVzZXJJZCwgcmVmZXJlbnRJZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBteXJlZiA9IHJlZmVyZW50SWQgIT09IG51bGwgJiYgcmVmZXJlbnRJZCAhPT0gdm9pZCAwID8gcmVmZXJlbnRJZCA6IDA7XG4gICAgICAgIHZhciByZWZlcmVudCA9IHlpZWxkICgwLCBHZXRUaGVDb25jZXB0XzEuZGVmYXVsdCkocmVmZXJlbnRJZCk7XG4gICAgICAgIC8vdmFyIHJlc3VsdDogUmVmZXJlbnRJbmZvID0gbmV3IFJlZmVyZW50SW5mbyhyZWZlcmVudC5pZCwgcmVmZXJlbnQudXNlcklkLCByZWZlcmVudC5yZWZlcmVudElkLCByZWZlcmVudC5yZWZlcmVudFVzZXJJZCk7XG4gICAgICAgIHJldHVybiByZWZlcmVudDtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEdldFRoZVJlZmVyZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUHVyZ2F0b3J5RGF0YWJhc2VVcGRhdGVkID0gdm9pZCAwO1xuY29uc3QgR2V0QWlEYXRhXzEgPSByZXF1aXJlKFwiLi4vQXBpL0dldEFpRGF0YVwiKTtcbmNvbnN0IFNldHRpbmdEYXRhXzEgPSByZXF1aXJlKFwiLi4vRGF0YVN0cnVjdHVyZXMvU2V0dGluZ0RhdGFcIik7XG5jb25zdCBTZXR0aW5nc18xID0gcmVxdWlyZShcIi4uL0RhdGFTdHJ1Y3R1cmVzL1NldHRpbmdzXCIpO1xuY29uc3QgaW5kZXhlZGRiXzEgPSByZXF1aXJlKFwiLi4vRGF0YWJhc2UvaW5kZXhlZGRiXCIpO1xuZnVuY3Rpb24gSW5pdGlhbGl6ZVN5c3RlbSgpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgc3RhdHNEYXRhID0geWllbGQgKDAsIGluZGV4ZWRkYl8xLkdldFN0YXRzRnJvbURhdGFiYXNlKSgpO1xuICAgICAgICB2YXIgc2V0dGluZ3MgPSBzdGF0c0RhdGE7XG4gICAgICAgIGlmICghc2V0dGluZ3MuaXNPbmxpbmVTeW5jKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImdldHRpbmcgdGhlIGFpIGRhdGFcIik7XG4gICAgICAgICAgICB5aWVsZCAoMCwgR2V0QWlEYXRhXzEuR2V0QWlEYXRhKSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEluaXRpYWxpemVTeXN0ZW07XG5mdW5jdGlvbiBQdXJnYXRvcnlEYXRhYmFzZVVwZGF0ZWQoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgU2V0dGluZ3NfMS5TZXR0aW5ncy5pc09ubGluZVN5bmMgPSB0cnVlO1xuICAgICAgICB2YXIgc2V0dGluZ0RhdGEgPSBuZXcgU2V0dGluZ0RhdGFfMS5TZXR0aW5nRGF0YShTZXR0aW5nc18xLlNldHRpbmdzLmlzT25saW5lU3luYyk7XG4gICAgICAgICgwLCBpbmRleGVkZGJfMS5BaVVwZGF0ZUZsYWcpKHNldHRpbmdEYXRhKTtcbiAgICB9KTtcbn1cbmV4cG9ydHMuUHVyZ2F0b3J5RGF0YWJhc2VVcGRhdGVkID0gUHVyZ2F0b3J5RGF0YWJhc2VVcGRhdGVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IExvY2FsQmluYXJ5VHJlZV8xID0gcmVxdWlyZShcIi4uLy4uL0RhdGFTdHJ1Y3R1cmVzL0xvY2FsL0xvY2FsQmluYXJ5VHJlZVwiKTtcbmNvbnN0IE5vZGVfMSA9IHJlcXVpcmUoXCIuLi8uLi9EYXRhU3RydWN0dXJlcy9Ob2RlXCIpO1xuY29uc3QgaW5kZXhkYmxvY2FsXzEgPSByZXF1aXJlKFwiLi4vLi4vRGF0YWJhc2UvaW5kZXhkYmxvY2FsXCIpO1xuZnVuY3Rpb24gQ3JlYXRlTG9jYWxCaW5hcnlUcmVlRnJvbURhdGEoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgY29uY2VwdExpc3QgPSB5aWVsZCAoMCwgaW5kZXhkYmxvY2FsXzEuZ2V0QWxsRnJvbUxvY2FsRGIpKFwibG9jYWxjb25jZXB0XCIpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjb25jZXB0TGlzdCkpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29uY2VwdExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgY29uY2VwdCA9IGNvbmNlcHRMaXN0W2ldO1xuICAgICAgICAgICAgICAgIGxldCBub2RlID0gbmV3IE5vZGVfMS5Ob2RlKGNvbmNlcHQuaWQsIGNvbmNlcHQsIG51bGwsIG51bGwpO1xuICAgICAgICAgICAgICAgIExvY2FsQmluYXJ5VHJlZV8xLkxvY2FsQmluYXJ5VHJlZS5hZGROb2RlVG9UcmVlKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBlbmRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciB0aW1lID0gZW5kVGltZSAtIHN0YXJ0VGltZTtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IENyZWF0ZUxvY2FsQmluYXJ5VHJlZUZyb21EYXRhO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ3JlYXRlTG9jYWxCaW5hcnlUeXBlVHJlZUZyb21EYXRhID0gdm9pZCAwO1xuY29uc3QgTG9jYWxCaW5hcnlUeXBlVHJlZV8xID0gcmVxdWlyZShcIi4uLy4uL0RhdGFTdHJ1Y3R1cmVzL0xvY2FsL0xvY2FsQmluYXJ5VHlwZVRyZWVcIik7XG5jb25zdCBOb2RlXzEgPSByZXF1aXJlKFwiLi4vLi4vRGF0YVN0cnVjdHVyZXMvTm9kZVwiKTtcbmNvbnN0IGluZGV4ZGJsb2NhbF8xID0gcmVxdWlyZShcIi4uLy4uL0RhdGFiYXNlL2luZGV4ZGJsb2NhbFwiKTtcbmZ1bmN0aW9uIENyZWF0ZUxvY2FsQmluYXJ5VHlwZVRyZWVGcm9tRGF0YSgpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciBjb25jZXB0TGlzdCA9IHlpZWxkICgwLCBpbmRleGRibG9jYWxfMS5nZXRBbGxGcm9tTG9jYWxEYikoXCJsb2NhbGNvbmNlcHRcIik7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNvbmNlcHRMaXN0KSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb25jZXB0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBjb25jZXB0ID0gY29uY2VwdExpc3RbaV07XG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBuZXcgTm9kZV8xLk5vZGUoY29uY2VwdC50eXBlSWQsIGNvbmNlcHQsIG51bGwsIG51bGwpO1xuICAgICAgICAgICAgICAgIExvY2FsQmluYXJ5VHlwZVRyZWVfMS5Mb2NhbEJpbmFyeVR5cGVUcmVlLmFkZE5vZGVUb1RyZWUobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coTG9jYWxCaW5hcnlUeXBlVHJlZV8xLkxvY2FsQmluYXJ5VHlwZVRyZWUuTG9jYWxUeXBlUm9vdCk7XG4gICAgICAgIHZhciBlbmRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciB0aW1lID0gZW5kVGltZSAtIHN0YXJ0VGltZTtcbiAgICB9KTtcbn1cbmV4cG9ydHMuQ3JlYXRlTG9jYWxCaW5hcnlUeXBlVHJlZUZyb21EYXRhID0gQ3JlYXRlTG9jYWxCaW5hcnlUeXBlVHJlZUZyb21EYXRhO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ3JlYXRlTG9jYWxDaGFyYWN0ZXJCaW5hcnlUcmVlRnJvbURhdGEgPSB2b2lkIDA7XG5jb25zdCBMb2NhbEJpbmFyeUNoYXJhY3RlclRyZWVfMSA9IHJlcXVpcmUoXCIuLi8uLi9EYXRhU3RydWN0dXJlcy9Mb2NhbC9Mb2NhbEJpbmFyeUNoYXJhY3RlclRyZWVcIik7XG5jb25zdCBOb2RlXzEgPSByZXF1aXJlKFwiLi4vLi4vRGF0YVN0cnVjdHVyZXMvTm9kZVwiKTtcbmNvbnN0IGluZGV4ZGJsb2NhbF8xID0gcmVxdWlyZShcIi4uLy4uL0RhdGFiYXNlL2luZGV4ZGJsb2NhbFwiKTtcbmZ1bmN0aW9uIENyZWF0ZUxvY2FsQ2hhcmFjdGVyQmluYXJ5VHJlZUZyb21EYXRhKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdmFyIGNvbmNlcHRMaXN0ID0geWllbGQgKDAsIGluZGV4ZGJsb2NhbF8xLmdldEFsbEZyb21Mb2NhbERiKShcImxvY2FsY29uY2VwdFwiKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY29uY2VwdExpc3QpKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbmNlcHRMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNvbmNlcHQgPSBjb25jZXB0TGlzdFtpXTtcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IG5ldyBOb2RlXzEuTm9kZShjb25jZXB0LmNoYXJhY3RlclZhbHVlLCBjb25jZXB0LCBudWxsLCBudWxsKTtcbiAgICAgICAgICAgICAgICBMb2NhbEJpbmFyeUNoYXJhY3RlclRyZWVfMS5Mb2NhbEJpbmFyeUNoYXJhY3RlclRyZWUuYWRkTm9kZVRvVHJlZShub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcIndoYXQgaXMgdGhpc1wiKTtcbiAgICAgICAgY29uc29sZS5sb2coTG9jYWxCaW5hcnlDaGFyYWN0ZXJUcmVlXzEuTG9jYWxCaW5hcnlDaGFyYWN0ZXJUcmVlLkxvY2FsQ2hhcmFjdGVyUm9vdCk7XG4gICAgICAgIHZhciBlbmRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHZhciB0aW1lID0gZW5kVGltZSAtIHN0YXJ0VGltZTtcbiAgICB9KTtcbn1cbmV4cG9ydHMuQ3JlYXRlTG9jYWxDaGFyYWN0ZXJCaW5hcnlUcmVlRnJvbURhdGEgPSBDcmVhdGVMb2NhbENoYXJhY3RlckJpbmFyeVRyZWVGcm9tRGF0YTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkNyZWF0ZVRoZUNvbXBvc2l0aW9uTG9jYWwgPSB2b2lkIDA7XG5jb25zdCBDb25jZXB0XzEgPSByZXF1aXJlKFwiLi4vLi4vRGF0YVN0cnVjdHVyZXMvQ29uY2VwdFwiKTtcbmNvbnN0IENyZWF0ZVRoZUNvbm5lY3Rpb25Mb2NhbF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0NyZWF0ZVRoZUNvbm5lY3Rpb25Mb2NhbFwiKSk7XG5jb25zdCBNYWtlVGhlSW5zdGFuY2VDb25jZXB0TG9jYWxfMSA9IHJlcXVpcmUoXCIuL01ha2VUaGVJbnN0YW5jZUNvbmNlcHRMb2NhbFwiKTtcbmZ1bmN0aW9uIENyZWF0ZVRoZUNvbXBvc2l0aW9uTG9jYWwoanNvbiwgb2ZUaGVDb25jZXB0SWQgPSBudWxsLCBvZlRoZUNvbmNlcHRVc2VySWQgPSBudWxsLCBtYWluS2V5ID0gbnVsbCwgdXNlcklkID0gbnVsbCwgYWNjZXNzSWQgPSBudWxsLCBzZXNzaW9uSW5mb3JtYXRpb25JZCA9IG51bGwpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgbG9jYWxVc2VySWQgPSB1c2VySWQgIT09IG51bGwgJiYgdXNlcklkICE9PSB2b2lkIDAgPyB1c2VySWQgOiAxMDI2NztcbiAgICAgICAgdmFyIGxvY2FsQWNjZXNzSWQgPSBhY2Nlc3NJZCAhPT0gbnVsbCAmJiBhY2Nlc3NJZCAhPT0gdm9pZCAwID8gYWNjZXNzSWQgOiAxMDI2NztcbiAgICAgICAgdmFyIGxvY2FsU2Vzc2lvbklkID0gc2Vzc2lvbkluZm9ybWF0aW9uSWQgIT09IG51bGwgJiYgc2Vzc2lvbkluZm9ybWF0aW9uSWQgIT09IHZvaWQgMCA/IHNlc3Npb25JbmZvcm1hdGlvbklkIDogMTAyNjc7XG4gICAgICAgIHZhciBNYWluS2V5TG9jYWwgPSBtYWluS2V5ICE9PSBudWxsICYmIG1haW5LZXkgIT09IHZvaWQgMCA/IG1haW5LZXkgOiAwO1xuICAgICAgICB2YXIgTWFpbkNvbmNlcHQgPSBuZXcgQ29uY2VwdF8xLkNvbmNlcHQoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgXCIwXCIsIDAsIDAsIDAsIDAsIDAsIDAsIGZhbHNlKTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4ganNvbikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBqc29uW2tleV0gIT0gJ3N0cmluZycgJiYgdHlwZW9mIGpzb25ba2V5XSAhPSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIGlmIChvZlRoZUNvbmNlcHRJZCA9PSBudWxsICYmIG9mVGhlQ29uY2VwdFVzZXJJZCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsb2NhbE1haW5LZXkgPSBNYWluS2V5TG9jYWw7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb25jZXB0U3RyaW5nID0geWllbGQgKDAsIE1ha2VUaGVJbnN0YW5jZUNvbmNlcHRMb2NhbF8xLk1ha2VUaGVJbnN0YW5jZUNvbmNlcHRMb2NhbCkoa2V5LCBcIlwiLCB0cnVlLCBsb2NhbFVzZXJJZCwgbG9jYWxBY2Nlc3NJZCwgbG9jYWxTZXNzaW9uSWQpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29uY2VwdCA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgIE1haW5Db25jZXB0ID0gY29uY2VwdDtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxNYWluS2V5ID0gY29uY2VwdC5pZDtcbiAgICAgICAgICAgICAgICAgICAgTWFpbktleUxvY2FsID0gY29uY2VwdC5pZDtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgQ3JlYXRlVGhlQ29tcG9zaXRpb25Mb2NhbChqc29uW2tleV0sIGNvbmNlcHQuaWQsIGNvbmNlcHQudXNlcklkLCBsb2NhbE1haW5LZXksIHVzZXJJZCwgYWNjZXNzSWQsIHNlc3Npb25JbmZvcm1hdGlvbklkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvZlRoZSA9IG9mVGhlQ29uY2VwdElkICE9PSBudWxsICYmIG9mVGhlQ29uY2VwdElkICE9PSB2b2lkIDAgPyBvZlRoZUNvbmNlcHRJZCA6IDk5OTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9mVGhlVXNlciA9IG9mVGhlQ29uY2VwdFVzZXJJZCAhPT0gbnVsbCAmJiBvZlRoZUNvbmNlcHRVc2VySWQgIT09IHZvaWQgMCA/IG9mVGhlQ29uY2VwdFVzZXJJZCA6IDEwMjY3O1xuICAgICAgICAgICAgICAgICAgICB2YXIgbG9jYWxNYWluS2V5ID0gTWFpbktleUxvY2FsO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29uY2VwdFN0cmluZyA9IHlpZWxkICgwLCBNYWtlVGhlSW5zdGFuY2VDb25jZXB0TG9jYWxfMS5NYWtlVGhlSW5zdGFuY2VDb25jZXB0TG9jYWwpKGtleSwgXCJcIiwgdHJ1ZSwgbG9jYWxVc2VySWQsIGxvY2FsQWNjZXNzSWQsIGxvY2FsU2Vzc2lvbklkKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmNlcHQgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCAoMCwgQ3JlYXRlVGhlQ29ubmVjdGlvbkxvY2FsXzEuZGVmYXVsdCkob2ZUaGUsIG9mVGhlVXNlciwgY29uY2VwdC5pZCwgY29uY2VwdC51c2VySWQsIGxvY2FsTWFpbktleSwgbG9jYWxTZXNzaW9uSWQsIGNvbmNlcHQudXNlcklkKTtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgQ3JlYXRlVGhlQ29tcG9zaXRpb25Mb2NhbChqc29uW2tleV0sIGNvbmNlcHQuaWQsIGNvbmNlcHQudXNlcklkLCBsb2NhbE1haW5LZXksIHVzZXJJZCwgYWNjZXNzSWQsIHNlc3Npb25JbmZvcm1hdGlvbklkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgb2ZUaGUgPSBvZlRoZUNvbmNlcHRJZCAhPT0gbnVsbCAmJiBvZlRoZUNvbmNlcHRJZCAhPT0gdm9pZCAwID8gb2ZUaGVDb25jZXB0SWQgOiA5OTk7XG4gICAgICAgICAgICAgICAgdmFyIG9mVGhlVXNlciA9IG9mVGhlQ29uY2VwdFVzZXJJZCAhPT0gbnVsbCAmJiBvZlRoZUNvbmNlcHRVc2VySWQgIT09IHZvaWQgMCA/IG9mVGhlQ29uY2VwdFVzZXJJZCA6IDEwMjY3O1xuICAgICAgICAgICAgICAgIHZhciBsb2NhbE1haW5LZXkgPSBNYWluS2V5TG9jYWw7XG4gICAgICAgICAgICAgICAgdmFyIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCAoMCwgTWFrZVRoZUluc3RhbmNlQ29uY2VwdExvY2FsXzEuTWFrZVRoZUluc3RhbmNlQ29uY2VwdExvY2FsKShrZXksIGpzb25ba2V5XSwgZmFsc2UsIGxvY2FsVXNlcklkLCBsb2NhbEFjY2Vzc0lkLCBsb2NhbFNlc3Npb25JZCk7XG4gICAgICAgICAgICAgICAgdmFyIGNvbmNlcHQgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICAgICAgICAgIHlpZWxkICgwLCBDcmVhdGVUaGVDb25uZWN0aW9uTG9jYWxfMS5kZWZhdWx0KShvZlRoZSwgb2ZUaGVVc2VyLCBjb25jZXB0LmlkLCBjb25jZXB0LnVzZXJJZCwgbG9jYWxNYWluS2V5LCBsb2NhbFNlc3Npb25JZCwgY29uY2VwdC51c2VySWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBNYWluQ29uY2VwdDtcbiAgICB9KTtcbn1cbmV4cG9ydHMuQ3JlYXRlVGhlQ29tcG9zaXRpb25Mb2NhbCA9IENyZWF0ZVRoZUNvbXBvc2l0aW9uTG9jYWw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQ29uY2VwdF8xID0gcmVxdWlyZShcIi4uLy4uL0RhdGFTdHJ1Y3R1cmVzL0NvbmNlcHRcIik7XG5jb25zdCBMb2NhbENvbmNlcHREYXRhXzEgPSByZXF1aXJlKFwiLi4vLi4vRGF0YVN0cnVjdHVyZXMvTG9jYWwvTG9jYWxDb25jZXB0RGF0YVwiKTtcbmNvbnN0IGluZGV4ZGJsb2NhbF8xID0gcmVxdWlyZShcIi4uLy4uL0RhdGFiYXNlL2luZGV4ZGJsb2NhbFwiKTtcbmZ1bmN0aW9uIENyZWF0ZVRoZUNvbmNlcHRMb2NhbChyZWZlcmVudCwgdXNlcklkLCBjYXRlZ29yeUlkLCBjYXRlZ29yeVVzZXJJZCwgdHlwZUlkLCB0eXBlVXNlcklkLCByZWZlcmVudElkLCByZWZlcmVudFVzZXJJZCwgc2VjdXJpdHlJZCwgc2VjdXJpdHlVc2VySWQsIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQsIHNlc3Npb25JbmZvcm1hdGlvbklkLCBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgaWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApO1xuICAgICAgICB2YXIgaXNOZXcgPSB0cnVlO1xuICAgICAgICB2YXIgY29uY2VwdCA9IG5ldyBDb25jZXB0XzEuQ29uY2VwdChpZCwgdXNlcklkLCB0eXBlSWQsIHR5cGVVc2VySWQsIGNhdGVnb3J5SWQsIGNhdGVnb3J5VXNlcklkLCByZWZlcmVudElkLCByZWZlcmVudFVzZXJJZCwgcmVmZXJlbnQsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkLCBpc05ldyk7XG4gICAgICAgIGNvbmNlcHQuaXNUZW1wID0gdHJ1ZTtcbiAgICAgICAgTG9jYWxDb25jZXB0RGF0YV8xLkxvY2FsQ29uY2VwdHNEYXRhLkFkZENvbmNlcHQoY29uY2VwdCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWRkaW5nIHRoaXMgY29uY2VwdCB0byBsb2NhbFwiKTtcbiAgICAgICAgY29uc29sZS5sb2coY29uY2VwdCk7XG4gICAgICAgICgwLCBpbmRleGRibG9jYWxfMS5zdG9yZVRvRGF0YWJhc2UpKFwibG9jYWxjb25jZXB0XCIsIGNvbmNlcHQpO1xuICAgICAgICByZXR1cm4gY29uY2VwdDtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IENyZWF0ZVRoZUNvbmNlcHRMb2NhbDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQ29ubmVjdGlvbl8xID0gcmVxdWlyZShcIi4uLy4uL0RhdGFTdHJ1Y3R1cmVzL0Nvbm5lY3Rpb25cIik7XG5jb25zdCBMb2NhbENvbm5lY3Rpb25EYXRhXzEgPSByZXF1aXJlKFwiLi4vLi4vRGF0YVN0cnVjdHVyZXMvTG9jYWwvTG9jYWxDb25uZWN0aW9uRGF0YVwiKTtcbmNvbnN0IGluZGV4ZGJsb2NhbF8xID0gcmVxdWlyZShcIi4uLy4uL0RhdGFiYXNlL2luZGV4ZGJsb2NhbFwiKTtcbmZ1bmN0aW9uIENyZWF0ZVRoZUNvbm5lY3Rpb25Mb2NhbChvZlRoZUNvbmNlcHRJZCwgb2ZUaGVDb25jZXB0VXNlcklkLCB0b1RoZUNvbmNlcHRJZCwgdG9UaGVDb25jZXB0VXNlcklkLCB0eXBlSWQsIHNlc3Npb25JbmZvcm1hdGlvbklkLCBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQpIHtcbiAgICB2YXIgb3JkZXJJZCA9IDE7XG4gICAgdmFyIG9yZGVyVXNlcklkID0gb2ZUaGVDb25jZXB0VXNlcklkO1xuICAgIHZhciB0eXBlVXNlcklkID0gb2ZUaGVDb25jZXB0VXNlcklkO1xuICAgIHZhciB1c2VySWQgPSBvZlRoZUNvbmNlcHRVc2VySWQ7XG4gICAgdmFyIHNlY3VyaXR5SWQgPSAwO1xuICAgIHZhciBzZWN1cml0eVVzZXJJZCA9IG9mVGhlQ29uY2VwdFVzZXJJZDtcbiAgICB2YXIgYWNjZXNzSWQgPSA0O1xuICAgIHZhciBhY2Nlc3NVc2VySWQgPSBvZlRoZUNvbmNlcHRVc2VySWQ7XG4gICAgaWYgKG9mVGhlQ29uY2VwdElkICE9IHRvVGhlQ29uY2VwdElkKSB7XG4gICAgICAgIHZhciBjb25uZWN0aW9uID0gbmV3IENvbm5lY3Rpb25fMS5Db25uZWN0aW9uKDAsIG9mVGhlQ29uY2VwdElkLCB0b1RoZUNvbmNlcHRJZCwgb2ZUaGVDb25jZXB0VXNlcklkLCB0b1RoZUNvbmNlcHRVc2VySWQsIHVzZXJJZCwgdHlwZUlkLCB0eXBlVXNlcklkLCBvcmRlcklkLCBvcmRlclVzZXJJZCwgc2VjdXJpdHlJZCwgc2VjdXJpdHlVc2VySWQsIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQsIHNlc3Npb25JbmZvcm1hdGlvbklkLCBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQpO1xuICAgICAgICBjb25uZWN0aW9uLmlzVGVtcCA9IHRydWU7XG4gICAgICAgIGNvbm5lY3Rpb24uaWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApO1xuICAgICAgICBMb2NhbENvbm5lY3Rpb25EYXRhXzEuTG9jYWxDb25uZWN0aW9uRGF0YS5BZGRDb25uZWN0aW9uKGNvbm5lY3Rpb24pO1xuICAgICAgICAoMCwgaW5kZXhkYmxvY2FsXzEuc3RvcmVUb0RhdGFiYXNlKShcImxvY2FsY29ubmVjdGlvblwiLCBjb25uZWN0aW9uKTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBDcmVhdGVUaGVDb25uZWN0aW9uTG9jYWw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HZXRDb21wb3NpdGlvbkxpc3RMb2NhbFdpdGhJZCA9IGV4cG9ydHMuR2V0Q29tcG9zaXRpb25MaXN0TG9jYWwgPSB2b2lkIDA7XG5jb25zdCBMb2NhbENvbmNlcHREYXRhXzEgPSByZXF1aXJlKFwiLi4vLi4vRGF0YVN0cnVjdHVyZXMvTG9jYWwvTG9jYWxDb25jZXB0RGF0YVwiKTtcbmNvbnN0IEdldENvbXBvc2l0aW9uTG9jYWxfMSA9IHJlcXVpcmUoXCIuL0dldENvbXBvc2l0aW9uTG9jYWxcIik7XG5jb25zdCBHZXRDb25jZXB0QnlDaGFyYWN0ZXJMb2NhbF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0dldENvbmNlcHRCeUNoYXJhY3RlckxvY2FsXCIpKTtcbmZ1bmN0aW9uIEdldENvbXBvc2l0aW9uTGlzdExvY2FsKGNvbXBvc2l0aW9uTmFtZSwgdXNlcklkKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIGNvbmNlcHQgPSB5aWVsZCAoMCwgR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyTG9jYWxfMS5kZWZhdWx0KShjb21wb3NpdGlvbk5hbWUpO1xuICAgICAgICB2YXIgQ29tcG9zaXRpb25MaXN0ID0gW107XG4gICAgICAgIGlmIChjb25jZXB0KSB7XG4gICAgICAgICAgICB2YXIgY29uY2VwdExpc3QgPSB5aWVsZCBMb2NhbENvbmNlcHREYXRhXzEuTG9jYWxDb25jZXB0c0RhdGEuR2V0Q29uY2VwdHNCeVR5cGVJZEFuZFVzZXIoY29uY2VwdC5pZCwgdXNlcklkKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29uY2VwdExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY29tcG9zaXRpb25Kc29uID0geWllbGQgKDAsIEdldENvbXBvc2l0aW9uTG9jYWxfMS5HZXRDb21wb3NpdGlvbkxvY2FsKShjb25jZXB0TGlzdFtpXS5pZCk7XG4gICAgICAgICAgICAgICAgQ29tcG9zaXRpb25MaXN0LnB1c2goY29tcG9zaXRpb25Kc29uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQ29tcG9zaXRpb25MaXN0O1xuICAgIH0pO1xufVxuZXhwb3J0cy5HZXRDb21wb3NpdGlvbkxpc3RMb2NhbCA9IEdldENvbXBvc2l0aW9uTGlzdExvY2FsO1xuZnVuY3Rpb24gR2V0Q29tcG9zaXRpb25MaXN0TG9jYWxXaXRoSWQoY29tcG9zaXRpb25OYW1lLCB1c2VySWQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgY29uY2VwdCA9IHlpZWxkICgwLCBHZXRDb25jZXB0QnlDaGFyYWN0ZXJMb2NhbF8xLmRlZmF1bHQpKGNvbXBvc2l0aW9uTmFtZSk7XG4gICAgICAgIHZhciBDb21wb3NpdGlvbkxpc3QgPSBbXTtcbiAgICAgICAgaWYgKGNvbmNlcHQpIHtcbiAgICAgICAgICAgIHZhciBjb25jZXB0TGlzdCA9IHlpZWxkIExvY2FsQ29uY2VwdERhdGFfMS5Mb2NhbENvbmNlcHRzRGF0YS5HZXRDb25jZXB0c0J5VHlwZUlkQW5kVXNlcihjb25jZXB0LmlkLCB1c2VySWQpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb25jZXB0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBjb21wb3NpdGlvbkpzb24gPSB5aWVsZCAoMCwgR2V0Q29tcG9zaXRpb25Mb2NhbF8xLkdldENvbXBvc2l0aW9uTG9jYWxXaXRoSWQpKGNvbmNlcHRMaXN0W2ldLmlkKTtcbiAgICAgICAgICAgICAgICBDb21wb3NpdGlvbkxpc3QucHVzaChjb21wb3NpdGlvbkpzb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBDb21wb3NpdGlvbkxpc3Q7XG4gICAgfSk7XG59XG5leHBvcnRzLkdldENvbXBvc2l0aW9uTGlzdExvY2FsV2l0aElkID0gR2V0Q29tcG9zaXRpb25MaXN0TG9jYWxXaXRoSWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HZXRDb21wb3NpdGlvbkxvY2FsV2l0aElkID0gZXhwb3J0cy5HZXRDb21wb3NpdGlvbkxvY2FsID0gdm9pZCAwO1xuY29uc3QgTG9jYWxDb25jZXB0RGF0YV8xID0gcmVxdWlyZShcIi4uLy4uL0RhdGFTdHJ1Y3R1cmVzL0xvY2FsL0xvY2FsQ29uY2VwdERhdGFcIik7XG5jb25zdCBMb2NhbENvbm5lY3Rpb25EYXRhXzEgPSByZXF1aXJlKFwiLi4vLi4vRGF0YVN0cnVjdHVyZXMvTG9jYWwvTG9jYWxDb25uZWN0aW9uRGF0YVwiKTtcbmZ1bmN0aW9uIEdldENvbXBvc2l0aW9uTG9jYWwoaWQpIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHZhciBjb25uZWN0aW9uTGlzdCA9IFtdO1xuICAgICAgICB2YXIgcmV0dXJuT3V0cHV0ID0ge307XG4gICAgICAgIGNvbm5lY3Rpb25MaXN0ID0geWllbGQgTG9jYWxDb25uZWN0aW9uRGF0YV8xLkxvY2FsQ29ubmVjdGlvbkRhdGEuR2V0Q29ubmVjdGlvbnNPZkNvbXBvc2l0aW9uTG9jYWwoaWQpO1xuICAgICAgICAvL2Nvbm5lY3Rpb25MaXN0ID0gQ29ubmVjdGlvbkRhdGEuR2V0Q29ubmVjdGlvbnNPZkNvbXBvc2l0aW9uKGlkKTtcbiAgICAgICAgdmFyIGNvbXBvc2l0aW9uTGlzdCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbm5lY3Rpb25MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIWNvbXBvc2l0aW9uTGlzdC5pbmNsdWRlcyhjb25uZWN0aW9uTGlzdFtpXS5vZlRoZUNvbmNlcHRJZCkpIHtcbiAgICAgICAgICAgICAgICBjb21wb3NpdGlvbkxpc3QucHVzaChjb25uZWN0aW9uTGlzdFtpXS5vZlRoZUNvbmNlcHRJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvbmNlcHQgPSB5aWVsZCBMb2NhbENvbmNlcHREYXRhXzEuTG9jYWxDb25jZXB0c0RhdGEuR2V0Q29uY2VwdChpZCk7XG4gICAgICAgIHZhciBvdXRwdXQgPSB5aWVsZCByZWN1cnNpdmVGZXRjaExvY2FsKGlkLCBjb25uZWN0aW9uTGlzdCwgY29tcG9zaXRpb25MaXN0KTtcbiAgICAgICAgdmFyIG1haW5TdHJpbmcgPSAoX2IgPSAoX2EgPSBjb25jZXB0ID09PSBudWxsIHx8IGNvbmNlcHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbmNlcHQudHlwZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNoYXJhY3RlclZhbHVlKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBcInRvcFwiO1xuICAgICAgICByZXR1cm5PdXRwdXRbbWFpblN0cmluZ10gPSBvdXRwdXQ7XG4gICAgICAgIHJldHVybiByZXR1cm5PdXRwdXQ7XG4gICAgfSk7XG59XG5leHBvcnRzLkdldENvbXBvc2l0aW9uTG9jYWwgPSBHZXRDb21wb3NpdGlvbkxvY2FsO1xuZnVuY3Rpb24gR2V0Q29tcG9zaXRpb25Mb2NhbFdpdGhJZChpZCkge1xuICAgIHZhciBfYSwgX2I7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIGNvbm5lY3Rpb25MaXN0ID0gW107XG4gICAgICAgIHZhciByZXR1cm5PdXRwdXQgPSB7fTtcbiAgICAgICAgY29ubmVjdGlvbkxpc3QgPSB5aWVsZCBMb2NhbENvbm5lY3Rpb25EYXRhXzEuTG9jYWxDb25uZWN0aW9uRGF0YS5HZXRDb25uZWN0aW9uc09mQ29tcG9zaXRpb25Mb2NhbChpZCk7XG4gICAgICAgIHZhciBjb21wb3NpdGlvbkxpc3QgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb25uZWN0aW9uTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCFjb21wb3NpdGlvbkxpc3QuaW5jbHVkZXMoY29ubmVjdGlvbkxpc3RbaV0ub2ZUaGVDb25jZXB0SWQpKSB7XG4gICAgICAgICAgICAgICAgY29tcG9zaXRpb25MaXN0LnB1c2goY29ubmVjdGlvbkxpc3RbaV0ub2ZUaGVDb25jZXB0SWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBjb25jZXB0ID0geWllbGQgTG9jYWxDb25jZXB0RGF0YV8xLkxvY2FsQ29uY2VwdHNEYXRhLkdldENvbmNlcHQoaWQpO1xuICAgICAgICBpZiAoY29uY2VwdC5pZCAhPSAwKSB7XG4gICAgICAgICAgICB2YXIgb3V0cHV0ID0geWllbGQgcmVjdXJzaXZlRmV0Y2hMb2NhbChpZCwgY29ubmVjdGlvbkxpc3QsIGNvbXBvc2l0aW9uTGlzdCk7XG4gICAgICAgICAgICB2YXIgbWFpblN0cmluZyA9IChfYiA9IChfYSA9IGNvbmNlcHQgPT09IG51bGwgfHwgY29uY2VwdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29uY2VwdC50eXBlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2hhcmFjdGVyVmFsdWUpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IFwidG9wXCI7XG4gICAgICAgICAgICByZXR1cm5PdXRwdXRbbWFpblN0cmluZ10gPSBvdXRwdXQ7XG4gICAgICAgICAgICB2YXIgRmluYWxSZXR1cm4gPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBGaW5hbFJldHVyblsnZGF0YSddID0gcmV0dXJuT3V0cHV0O1xuICAgICAgICBGaW5hbFJldHVyblsnaWQnXSA9IGlkO1xuICAgICAgICByZXR1cm4gRmluYWxSZXR1cm47XG4gICAgfSk7XG59XG5leHBvcnRzLkdldENvbXBvc2l0aW9uTG9jYWxXaXRoSWQgPSBHZXRDb21wb3NpdGlvbkxvY2FsV2l0aElkO1xuZnVuY3Rpb24gcmVjdXJzaXZlRmV0Y2hMb2NhbChpZCwgY29ubmVjdGlvbkxpc3QsIGNvbXBvc2l0aW9uTGlzdCkge1xuICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgb3V0cHV0ID0ge307XG4gICAgICAgIHZhciBhcnJvdXRwdXQgPSBbXTtcbiAgICAgICAgdmFyIGNvbmNlcHQgPSB5aWVsZCBMb2NhbENvbmNlcHREYXRhXzEuTG9jYWxDb25jZXB0c0RhdGEuR2V0Q29uY2VwdChpZCk7XG4gICAgICAgIGlmIChjb25jZXB0LmlkICE9IDApIHtcbiAgICAgICAgICAgIGlmIChjb25jZXB0LnR5cGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHZhciB0b0NvbmNlcHRUeXBlSWQgPSBjb25jZXB0LnR5cGVJZDtcbiAgICAgICAgICAgICAgICB2YXIgdG9Db25jZXB0VHlwZSA9IHlpZWxkIExvY2FsQ29uY2VwdERhdGFfMS5Mb2NhbENvbmNlcHRzRGF0YS5HZXRDb25jZXB0KHRvQ29uY2VwdFR5cGVJZCk7XG4gICAgICAgICAgICAgICAgY29uY2VwdC50eXBlID0gdG9Db25jZXB0VHlwZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgbWFpblN0cmluZyA9IChfYiA9IChfYSA9IGNvbmNlcHQgPT09IG51bGwgfHwgY29uY2VwdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29uY2VwdC50eXBlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2hhcmFjdGVyVmFsdWUpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IFwidG9wXCI7XG4gICAgICAgIGlmICghY29tcG9zaXRpb25MaXN0LmluY2x1ZGVzKGlkKSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbmNlcHQgPT09IG51bGwgfHwgY29uY2VwdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29uY2VwdC5jaGFyYWN0ZXJWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29ubmVjdGlvbkxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoY29ubmVjdGlvbkxpc3RbaV0ub2ZUaGVDb25jZXB0SWQgPT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvQ29uY2VwdElkID0gY29ubmVjdGlvbkxpc3RbaV0udG9UaGVDb25jZXB0SWQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0b0NvbmNlcHQgPSB5aWVsZCBMb2NhbENvbmNlcHREYXRhXzEuTG9jYWxDb25jZXB0c0RhdGEuR2V0Q29uY2VwdCh0b0NvbmNlcHRJZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b0NvbmNlcHQuaWQgIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCh0b0NvbmNlcHQgPT09IG51bGwgfHwgdG9Db25jZXB0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0b0NvbmNlcHQudHlwZSkgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0b0NvbmNlcHRUeXBlSWQgPSB0b0NvbmNlcHQudHlwZUlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0b0NvbmNlcHRUeXBlID0geWllbGQgTG9jYWxDb25jZXB0RGF0YV8xLkxvY2FsQ29uY2VwdHNEYXRhLkdldENvbmNlcHQodG9Db25jZXB0VHlwZUlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b0NvbmNlcHQudHlwZSA9IHRvQ29uY2VwdFR5cGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlZ2V4ID0gXCJ0aGVfXCI7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsb2NhbG1haW5TdHJpbmcgPSAoX2QgPSAoX2MgPSB0b0NvbmNlcHQgPT09IG51bGwgfHwgdG9Db25jZXB0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0b0NvbmNlcHQudHlwZSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmNoYXJhY3RlclZhbHVlKSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiBcInRvcFwiO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbG9jYWxLZXkgPSBsb2NhbG1haW5TdHJpbmcucmVwbGFjZShyZWdleCwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc05hTihOdW1iZXIobG9jYWxLZXkpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxvY2FsS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgcmVjdXJzaXZlRmV0Y2hMb2NhbCh0b0NvbmNlcHRJZCwgY29ubmVjdGlvbkxpc3QsIGNvbXBvc2l0aW9uTGlzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0W2xvY2FsS2V5XSA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIHJlY3Vyc2l2ZUZldGNoTG9jYWwodG9Db25jZXB0SWQsIGNvbm5lY3Rpb25MaXN0LCBjb21wb3NpdGlvbkxpc3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3V0cHV0W2xvY2FsS2V5XSA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dCA9IGFycm91dHB1dDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH0pO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IExvY2FsQ29uY2VwdERhdGFfMSA9IHJlcXVpcmUoXCIuLi8uLi9EYXRhU3RydWN0dXJlcy9Mb2NhbC9Mb2NhbENvbmNlcHREYXRhXCIpO1xuZnVuY3Rpb24gR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyTG9jYWwoY2hhcmFjdGVyVmFsdWUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgY29uY2VwdCA9IHlpZWxkIExvY2FsQ29uY2VwdERhdGFfMS5Mb2NhbENvbmNlcHRzRGF0YS5HZXRDb25jZXB0QnlDaGFyYWN0ZXIoY2hhcmFjdGVyVmFsdWUpO1xuICAgICAgICByZXR1cm4gY29uY2VwdDtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEdldENvbmNlcHRCeUNoYXJhY3RlckxvY2FsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IExvY2FsQ29uY2VwdERhdGFfMSA9IHJlcXVpcmUoXCIuLi8uLi9EYXRhU3RydWN0dXJlcy9Mb2NhbC9Mb2NhbENvbmNlcHREYXRhXCIpO1xuY29uc3QgQ3JlYXRlVGhlQ29uY2VwdExvY2FsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vQ3JlYXRlVGhlQ29uY2VwdExvY2FsXCIpKTtcbmZ1bmN0aW9uIE1ha2VUaGVDb25jZXB0TG9jYWwocmVmZXJlbnQsIHVzZXJJZCwgY2F0ZWdvcnlJZCwgY2F0ZWdvcnlVc2VySWQsIHR5cGVJZCwgdHlwZVVzZXJJZCwgcmVmZXJlbnRJZCwgcmVmZXJlbnRVc2VySWQsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCBMb2NhbENvbmNlcHREYXRhXzEuTG9jYWxDb25jZXB0c0RhdGEuR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyQW5kVHlwZUxvY2FsKHJlZmVyZW50LCB0eXBlSWQpO1xuICAgICAgICB2YXIgY29uY2VwdCA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgIGlmIChjb25jZXB0LmlkID09IDApIHtcbiAgICAgICAgICAgIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCAoMCwgQ3JlYXRlVGhlQ29uY2VwdExvY2FsXzEuZGVmYXVsdCkocmVmZXJlbnQsIHVzZXJJZCwgY2F0ZWdvcnlJZCwgY2F0ZWdvcnlVc2VySWQsIHR5cGVJZCwgdHlwZVVzZXJJZCwgcmVmZXJlbnRJZCwgcmVmZXJlbnRVc2VySWQsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkKTtcbiAgICAgICAgICAgIGNvbmNlcHQgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb25jZXB0O1xuICAgIH0pO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gTWFrZVRoZUNvbmNlcHRMb2NhbDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk1ha2VUaGVJbnN0YW5jZUNvbmNlcHRMb2NhbCA9IHZvaWQgMDtcbmNvbnN0IENyZWF0ZVRoZVRleHREYXRhXzEgPSByZXF1aXJlKFwiLi4vLi4vQXBpL0NyZWF0ZS9DcmVhdGVUaGVUZXh0RGF0YVwiKTtcbmNvbnN0IFRoZVRleHRzXzEgPSByZXF1aXJlKFwiLi4vLi4vRGF0YVN0cnVjdHVyZXMvVGhlVGV4dHNcIik7XG5jb25zdCBDcmVhdGVUaGVDb25jZXB0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL0NyZWF0ZVRoZUNvbmNlcHRcIikpO1xuY29uc3QgQ3JlYXRlVGhlQ29uY2VwdExvY2FsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vQ3JlYXRlVGhlQ29uY2VwdExvY2FsXCIpKTtcbmNvbnN0IE1ha2VUaGVUeXBlTG9jYWxfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9NYWtlVGhlVHlwZUxvY2FsXCIpKTtcbmNvbnN0IExvY2FsQ29uY2VwdERhdGFfMSA9IHJlcXVpcmUoXCIuLi8uLi9EYXRhU3RydWN0dXJlcy9Mb2NhbC9Mb2NhbENvbmNlcHREYXRhXCIpO1xuZnVuY3Rpb24gTWFrZVRoZUluc3RhbmNlQ29uY2VwdExvY2FsKHR5cGUsIHJlZmVyZW50LCBjb21wb3NpdGlvbiA9IGZhbHNlLCB1c2VySWQsIGFjY2Vzc0lkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCA9IDk5OSkge1xuICAgIHZhciBzZXNzaW9uSW5mb3JtYXRpb25JZCwgYWNjZXNzSWQ7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgc2Vzc2lvbkluZm9ybWF0aW9uSWQgPSA5OTk7XG4gICAgICAgIHZhciBjYXRlZ29yeUlkID0gNDtcbiAgICAgICAgdmFyIGNhdGVnb3J5VXNlcklkID0gdXNlcklkO1xuICAgICAgICB2YXIgcmVmZXJlbnRJZCA9IDA7XG4gICAgICAgIHZhciByZWZlcmVudFVzZXJJZCA9IDk5OTtcbiAgICAgICAgdmFyIHNlY3VyaXR5SWQgPSA5OTk7XG4gICAgICAgIHZhciBzZWN1cml0eVVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdmFyIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgYWNjZXNzSWQgPSA0O1xuICAgICAgICB2YXIgYWNjZXNzVXNlcklkID0gdXNlcklkO1xuICAgICAgICB2YXIgc3RyaW5nVG9DaGVjayA9IFwiXCI7XG4gICAgICAgIHZhciBzdHJpbmdMZW5ndGggPSByZWZlcmVudC5sZW5ndGg7XG4gICAgICAgIHZhciB0eXBlQ29uY2VwdDtcbiAgICAgICAgdmFyIGNvbmNlcHQ7XG4gICAgICAgIHZhciBzdGFydHNXaXRoVGhlID0gdHlwZS5zdGFydHNXaXRoKFwidGhlX1wiKTtcbiAgICAgICAgaWYgKHN0YXJ0c1dpdGhUaGUpIHtcbiAgICAgICAgICAgIHN0cmluZ1RvQ2hlY2sgPSB0eXBlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3RyaW5nVG9DaGVjayA9IFwidGhlX1wiICsgdHlwZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29tcG9zaXRpb24pIHtcbiAgICAgICAgICAgIHZhciB0eXBlQ29uY2VwdFN0cmluZyA9IHlpZWxkICgwLCBNYWtlVGhlVHlwZUxvY2FsXzEuZGVmYXVsdCkodHlwZSwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHVzZXJJZCwgdXNlcklkKTtcbiAgICAgICAgICAgIHR5cGVDb25jZXB0ID0gdHlwZUNvbmNlcHRTdHJpbmc7XG4gICAgICAgICAgICB2YXIgY29uY2VwdFN0cmluZyA9IHlpZWxkICgwLCBDcmVhdGVUaGVDb25jZXB0TG9jYWxfMS5kZWZhdWx0KShyZWZlcmVudCwgdXNlcklkLCBjYXRlZ29yeUlkLCB1c2VySWQsIHR5cGVDb25jZXB0LmlkLCB0eXBlQ29uY2VwdC51c2VySWQsIHJlZmVyZW50SWQsIHJlZmVyZW50VXNlcklkLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCk7XG4gICAgICAgICAgICBjb25jZXB0ID0gY29uY2VwdFN0cmluZztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdHJpbmdMZW5ndGggPiAyNTUpIHtcbiAgICAgICAgICAgIHZhciB0eXBlQ29uY2VwdFN0cmluZyA9IHlpZWxkICgwLCBNYWtlVGhlVHlwZUxvY2FsXzEuZGVmYXVsdCkoc3RyaW5nVG9DaGVjaywgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCwgdXNlcklkKTtcbiAgICAgICAgICAgIHR5cGVDb25jZXB0ID0gdHlwZUNvbmNlcHRTdHJpbmc7XG4gICAgICAgICAgICB2YXIgY29uY2VwdFN0cmluZyA9IHlpZWxkICgwLCBDcmVhdGVUaGVDb25jZXB0XzEuZGVmYXVsdCkocmVmZXJlbnQsIHVzZXJJZCwgY2F0ZWdvcnlJZCwgdXNlcklkLCB0eXBlQ29uY2VwdC5pZCwgdHlwZUNvbmNlcHQudXNlcklkLCByZWZlcmVudElkLCByZWZlcmVudFVzZXJJZCwgc2VjdXJpdHlJZCwgc2VjdXJpdHlVc2VySWQsIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQsIHNlc3Npb25JbmZvcm1hdGlvbklkLCBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQpO1xuICAgICAgICAgICAgY29uY2VwdCA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgICAgICB2YXIgVGhlVGV4dHNEYXRhID0gbmV3IFRoZVRleHRzXzEuVGhlVGV4dHModXNlcklkLCByZWZlcmVudCwgc2VjdXJpdHlJZCwgc2VjdXJpdHlVc2VySWQsIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQsIHNlc3Npb25JbmZvcm1hdGlvbklkLCBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQsIERhdGUubm93KCkudG9TdHJpbmcoKSwgdHJ1ZSk7XG4gICAgICAgICAgICB2YXIgVGV4dERhdGFTdHJpbmcgPSB5aWVsZCAoMCwgQ3JlYXRlVGhlVGV4dERhdGFfMS5DcmVhdGVUZXh0RGF0YSkoVGhlVGV4dHNEYXRhKTtcbiAgICAgICAgICAgIHZhciBUZXh0RGF0YSA9IFRleHREYXRhU3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHR5cGVDb25jZXB0U3RyaW5nID0geWllbGQgKDAsIE1ha2VUaGVUeXBlTG9jYWxfMS5kZWZhdWx0KShzdHJpbmdUb0NoZWNrLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkLCB1c2VySWQpO1xuICAgICAgICAgICAgdHlwZUNvbmNlcHQgPSB0eXBlQ29uY2VwdFN0cmluZztcbiAgICAgICAgICAgIHZhciBjb25jZXB0QnlDaGFyVHlwZVN0cmluZyA9IHlpZWxkIExvY2FsQ29uY2VwdERhdGFfMS5Mb2NhbENvbmNlcHRzRGF0YS5HZXRDb25jZXB0QnlDaGFyYWN0ZXJBbmRUeXBlTG9jYWwocmVmZXJlbnQsIHR5cGVDb25jZXB0LmlkKTtcbiAgICAgICAgICAgIHZhciBjb25jZXB0VHlwZUNoYXJhY3RlciA9IGNvbmNlcHRCeUNoYXJUeXBlU3RyaW5nO1xuICAgICAgICAgICAgLy8gdmFyIG1ha2VUaGVOYW1lU3RyaW5nID0gYXdhaXQgTWFrZVRoZU5hbWUocmVmZXJlbnQsdXNlcklkLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCx0eXBlQ29uY2VwdC5pZCwgdHlwZUNvbmNlcHQudXNlcklkLGNvbmNlcHRUeXBlQ2hhcmFjdGVyICk7XG4gICAgICAgICAgICAvLyB2YXIgbWFrZVRoZU5hbWVDb25jZXB0ID0gbWFrZVRoZU5hbWVTdHJpbmcgYXMgQ29uY2VwdDtcbiAgICAgICAgICAgIGNvbmNlcHQgPSBjb25jZXB0VHlwZUNoYXJhY3RlcjtcbiAgICAgICAgICAgIGlmIChjb25jZXB0VHlwZUNoYXJhY3Rlci5pZCA9PSAwICYmIGNvbmNlcHRUeXBlQ2hhcmFjdGVyLnVzZXJJZCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCAoMCwgQ3JlYXRlVGhlQ29uY2VwdExvY2FsXzEuZGVmYXVsdCkocmVmZXJlbnQsIHVzZXJJZCwgY2F0ZWdvcnlJZCwgdXNlcklkLCB0eXBlQ29uY2VwdC5pZCwgdHlwZUNvbmNlcHQudXNlcklkLCAwLCAwLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCk7XG4gICAgICAgICAgICAgICAgY29uY2VwdCA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uY2VwdC50eXBlID0gdHlwZUNvbmNlcHQ7XG4gICAgICAgIHJldHVybiBjb25jZXB0O1xuICAgIH0pO1xufVxuZXhwb3J0cy5NYWtlVGhlSW5zdGFuY2VDb25jZXB0TG9jYWwgPSBNYWtlVGhlSW5zdGFuY2VDb25jZXB0TG9jYWw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQ3JlYXRlVGhlQ29uY2VwdExvY2FsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vQ3JlYXRlVGhlQ29uY2VwdExvY2FsXCIpKTtcbmNvbnN0IEdldENvbmNlcHRCeUNoYXJhY3RlckxvY2FsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyTG9jYWxcIikpO1xuY29uc3QgU3BsaXRTdHJpbmdzXzEgPSByZXF1aXJlKFwiLi4vU3BsaXRTdHJpbmdzXCIpO1xuY29uc3QgTWFrZVRoZUNvbmNlcHRMb2NhbF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL01ha2VUaGVDb25jZXB0TG9jYWxcIikpO1xuZnVuY3Rpb24gTWFrZVRoZVR5cGVDb25jZXB0TG9jYWwodHlwZVN0cmluZywgc2Vzc2lvbklkLCBzZXNzaW9uVXNlcklkLCB1c2VySWQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgcmVmZXJlbnRJZCA9IDk5OTtcbiAgICAgICAgdmFyIHNlY3VyaXR5SWQgPSA5OTk7XG4gICAgICAgIHZhciBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQgPSA5OTk7XG4gICAgICAgIHZhciBhY2Nlc3NJZCA9IDk5OTtcbiAgICAgICAgdmFyIHNlY3VyaXR5VXNlcklkID0gdXNlcklkO1xuICAgICAgICB2YXIgYWNjZXNzVXNlcklkID0gdXNlcklkO1xuICAgICAgICB2YXIgY2F0ZWdvcnlVc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHZhciBzZWN1cml0eVVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdmFyIGV4aXN0aW5nQ29uY2VwdCA9IHlpZWxkICgwLCBHZXRDb25jZXB0QnlDaGFyYWN0ZXJMb2NhbF8xLmRlZmF1bHQpKHR5cGVTdHJpbmcpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImV4aXN0aW5nIGhlcmVcIiwgdHlwZVN0cmluZyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGV4aXN0aW5nQ29uY2VwdCk7XG4gICAgICAgIGlmIChleGlzdGluZ0NvbmNlcHQpIHtcbiAgICAgICAgICAgIGlmIChleGlzdGluZ0NvbmNlcHQuaWQgPT0gMCB8fCBleGlzdGluZ0NvbmNlcHQudXNlcklkID09IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgc3BsaXR0ZWRTdHJpbmdBcnJheSA9ICgwLCBTcGxpdFN0cmluZ3NfMS5TcGxpdFN0cmluZ3MpKHR5cGVTdHJpbmcpO1xuICAgICAgICAgICAgICAgIGlmIChzcGxpdHRlZFN0cmluZ0FycmF5WzBdID09IHR5cGVTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmNlcHQgPSB5aWVsZCAoMCwgTWFrZVRoZUNvbmNlcHRMb2NhbF8xLmRlZmF1bHQpKHR5cGVTdHJpbmcsIHVzZXJJZCwgNCwgdXNlcklkLCA1MSwgdXNlcklkLCByZWZlcmVudElkLCB1c2VySWQsIHNlY3VyaXR5SWQsIHVzZXJJZCwgYWNjZXNzSWQsIHVzZXJJZCwgc2Vzc2lvbklkLCB1c2VySWQpO1xuICAgICAgICAgICAgICAgICAgICBleGlzdGluZ0NvbmNlcHQgPSBjb25jZXB0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhdGVnb3J5SWQgPSAxO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2F0ZWdvcnlDb25jZXB0ID0gTWFrZVRoZVR5cGVDb25jZXB0TG9jYWwoc3BsaXR0ZWRTdHJpbmdBcnJheVswXSwgc2Vzc2lvbklkLCBzZXNzaW9uVXNlcklkLCB1c2VySWQpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdHlwZUNvbmNlcHQgPSB5aWVsZCBNYWtlVGhlVHlwZUNvbmNlcHRMb2NhbChzcGxpdHRlZFN0cmluZ0FycmF5WzFdLCBzZXNzaW9uSWQsIHNlc3Npb25Vc2VySWQsIHVzZXJJZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlQ29uY2VwdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmNlcHQgPSB5aWVsZCAoMCwgQ3JlYXRlVGhlQ29uY2VwdExvY2FsXzEuZGVmYXVsdCkodHlwZVN0cmluZywgdXNlcklkLCBjYXRlZ29yeUlkLCB1c2VySWQsIHR5cGVDb25jZXB0LmlkLCB1c2VySWQsIHJlZmVyZW50SWQsIHVzZXJJZCwgc2VjdXJpdHlJZCwgdXNlcklkLCBhY2Nlc3NJZCwgdXNlcklkLCBzZXNzaW9uSWQsIHVzZXJJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ0NvbmNlcHQgPSBjb25jZXB0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBleGlzdGluZ0NvbmNlcHQ7XG4gICAgfSk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBNYWtlVGhlVHlwZUNvbmNlcHRMb2NhbDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBNYWtlVGhlQ2hhcmFjdGVyRGF0YV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL01ha2VUaGVDaGFyYWN0ZXJEYXRhXCIpKTtcbmNvbnN0IE1ha2VUaGVDb25jZXB0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTWFrZVRoZUNvbmNlcHRcIikpO1xuZnVuY3Rpb24gTWFrZVRoZUNoYXJhY3Rlcih0aGVfY2hhcmFjdGVyX2RhdGEsIHVzZXJJZCwgc2VjdXJpdHlJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbklkKSB7XG4gICAgdmFyIGFjY2Vzc1VzZXJJZDtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgY2F0ZWdvcnlVc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHZhciBzZWN1cml0eVVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgYWNjZXNzVXNlcklkID0gdXNlcklkO1xuICAgICAgICB2YXIgY2F0ZWdvcnlJZCA9IDQ7XG4gICAgICAgIHZhciB0eXBlSWQgPSA1MTtcbiAgICAgICAgdmFyIHR5cGVVc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHZhciBzZXNzaW9uVXNlcklkID0gdXNlcklkO1xuICAgICAgICB2YXIgcmVmZXJlbnRVc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHZhciBsZW5ndGhPZkNoYXJhY3RlcnMgPSB0aGVfY2hhcmFjdGVyX2RhdGEubGVuZ3RoO1xuICAgICAgICB2YXIgY29uY2VwdDtcbiAgICAgICAgaWYgKGxlbmd0aE9mQ2hhcmFjdGVycyA9PSAxKSB7XG4gICAgICAgICAgICB2YXIgcmVmZXJlbnRJZCA9IHRoZV9jaGFyYWN0ZXJfZGF0YS5jaGFyQ29kZUF0KDApO1xuICAgICAgICAgICAgdmFyIHR5cGVJZEZvckNoYXJhY3RlciA9IDQ5O1xuICAgICAgICAgICAgdmFyIGNoYXJhY3RlckRhdGFTdHJpbmcgPSB5aWVsZCAoMCwgTWFrZVRoZUNoYXJhY3RlckRhdGFfMS5kZWZhdWx0KSh0aGVfY2hhcmFjdGVyX2RhdGEsIHVzZXJJZCwgc2VjdXJpdHlJZCwgYWNjZXNzSWQsIHNlc3Npb25JZCk7XG4gICAgICAgICAgICBjb25jZXB0ID0gKDAsIE1ha2VUaGVDb25jZXB0XzEuZGVmYXVsdCkodGhlX2NoYXJhY3Rlcl9kYXRhLCB1c2VySWQsIGNhdGVnb3J5SWQsIGNhdGVnb3J5VXNlcklkLCByZWZlcmVudElkLCByZWZlcmVudFVzZXJJZCwgdHlwZUlkRm9yQ2hhcmFjdGVyLCB0eXBlVXNlcklkLCBzZWN1cml0eUlkLCBzZWN1cml0eVVzZXJJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbklkLCBzZXNzaW9uVXNlcklkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBjaGFyYWN0ZXJEYXRhU3RyaW5nID0geWllbGQgKDAsIE1ha2VUaGVDaGFyYWN0ZXJEYXRhXzEuZGVmYXVsdCkodGhlX2NoYXJhY3Rlcl9kYXRhLCB1c2VySWQsIHNlY3VyaXR5SWQsIGFjY2Vzc0lkLCBzZXNzaW9uSWQpO1xuICAgICAgICAgICAgdmFyIGNoYXJhY3RlckRhdGEgPSBjaGFyYWN0ZXJEYXRhU3RyaW5nO1xuICAgICAgICAgICAgaWYgKGNoYXJhY3RlckRhdGEuaXNOZXcpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29uY2VwdFN0cmluZyA9IHlpZWxkICgwLCBNYWtlVGhlQ29uY2VwdF8xLmRlZmF1bHQpKHRoZV9jaGFyYWN0ZXJfZGF0YSwgdXNlcklkLCBjYXRlZ29yeUlkLCBjYXRlZ29yeVVzZXJJZCwgdHlwZUlkLCB0eXBlVXNlcklkLCBjaGFyYWN0ZXJEYXRhLmlkLCBjaGFyYWN0ZXJEYXRhLnVzZXJJZCwgc2VjdXJpdHlJZCwgc2VjdXJpdHlVc2VySWQsIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQsIHNlc3Npb25JZCwgc2Vzc2lvblVzZXJJZCk7XG4gICAgICAgICAgICAgICAgY29uY2VwdCA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgY29uY2VwdFN0cmluZyA9IHlpZWxkICgwLCBNYWtlVGhlQ29uY2VwdF8xLmRlZmF1bHQpKHRoZV9jaGFyYWN0ZXJfZGF0YSwgdXNlcklkLCBjYXRlZ29yeUlkLCBjYXRlZ29yeVVzZXJJZCwgdHlwZUlkLCB0eXBlVXNlcklkLCBjaGFyYWN0ZXJEYXRhLmlkLCBjaGFyYWN0ZXJEYXRhLnVzZXJJZCwgc2VjdXJpdHlJZCwgc2VjdXJpdHlVc2VySWQsIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQsIHNlc3Npb25JZCwgc2Vzc2lvblVzZXJJZCk7XG4gICAgICAgICAgICAgICAgY29uY2VwdCA9IGNvbmNlcHRTdHJpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbmNlcHQ7XG4gICAgfSk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBNYWtlVGhlQ2hhcmFjdGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IENyZWF0ZVRoZUNoYXJhY3Rlcl8xID0gcmVxdWlyZShcIi4uL0FwaS9DcmVhdGUvQ3JlYXRlVGhlQ2hhcmFjdGVyXCIpO1xuY29uc3QgVGhlQ2hhcmFjdGVyXzEgPSByZXF1aXJlKFwiLi4vRGF0YVN0cnVjdHVyZXMvVGhlQ2hhcmFjdGVyXCIpO1xuZnVuY3Rpb24gTWFrZVRoZUNoYXJhY3RlckRhdGEodGhlX2NoYXJhY3Rlcl9kYXRhLCB1c2VySWQsIHNlY3VyaXR5SWQsIGFjY2Vzc0lkLCBzZXNzaW9uSWQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgY2F0ZWdvcnlVc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHZhciBhY2Nlc3NVc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHZhciBzZWN1cml0eVVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdmFyIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdmFyIHRoZUNoYXJhY3RlciA9IG5ldyBUaGVDaGFyYWN0ZXJfMS5UaGVDaGFyYWN0ZXIodXNlcklkLCB0aGVfY2hhcmFjdGVyX2RhdGEsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSWQsIHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCwgXCJcIiwgZmFsc2UpO1xuICAgICAgICB2YXIgb3V0cHV0ID0geWllbGQgKDAsIENyZWF0ZVRoZUNoYXJhY3Rlcl8xLkNyZWF0ZVRoZUNoYXJhY3RlcikodGhlQ2hhcmFjdGVyKTtcbiAgICAgICAgdmFyIHJldHVybmVyID0gb3V0cHV0O1xuICAgICAgICByZXR1cm4gcmV0dXJuZXI7XG4gICAgfSk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBNYWtlVGhlQ2hhcmFjdGVyRGF0YTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBHZXRDb25jZXB0QnlDaGFyYWN0ZXJBbmRUeXBlXzEgPSByZXF1aXJlKFwiLi4vQXBpL0dldENvbmNlcHRCeUNoYXJhY3RlckFuZFR5cGVcIik7XG5jb25zdCBDcmVhdGVUaGVDb25jZXB0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vQ3JlYXRlVGhlQ29uY2VwdFwiKSk7XG5mdW5jdGlvbiBNYWtlVGhlQ29uY2VwdChyZWZlcmVudCwgdXNlcklkLCBjYXRlZ29yeUlkLCBjYXRlZ29yeVVzZXJJZCwgdHlwZUlkLCB0eXBlVXNlcklkLCByZWZlcmVudElkLCByZWZlcmVudFVzZXJJZCwgc2VjdXJpdHlJZCwgc2VjdXJpdHlVc2VySWQsIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQsIHNlc3Npb25JbmZvcm1hdGlvbklkLCBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgY29uY2VwdFN0cmluZyA9IHlpZWxkICgwLCBHZXRDb25jZXB0QnlDaGFyYWN0ZXJBbmRUeXBlXzEuR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyQW5kVHlwZSkocmVmZXJlbnQsIHR5cGVJZCk7XG4gICAgICAgIHZhciBjb25jZXB0ID0gY29uY2VwdFN0cmluZztcbiAgICAgICAgaWYgKGNvbmNlcHQuaWQgPT0gMCkge1xuICAgICAgICAgICAgY29uY2VwdFN0cmluZyA9IHlpZWxkICgwLCBDcmVhdGVUaGVDb25jZXB0XzEuZGVmYXVsdCkocmVmZXJlbnQsIHVzZXJJZCwgY2F0ZWdvcnlJZCwgY2F0ZWdvcnlVc2VySWQsIHR5cGVJZCwgdHlwZVVzZXJJZCwgcmVmZXJlbnRJZCwgcmVmZXJlbnRVc2VySWQsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkKTtcbiAgICAgICAgICAgIGNvbmNlcHQgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb25jZXB0O1xuICAgIH0pO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gTWFrZVRoZUNvbmNlcHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgQ3JlYXRlVGhlVGV4dERhdGFfMSA9IHJlcXVpcmUoXCIuLi9BcGkvQ3JlYXRlL0NyZWF0ZVRoZVRleHREYXRhXCIpO1xuY29uc3QgR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyQW5kVHlwZV8xID0gcmVxdWlyZShcIi4uL0FwaS9HZXRDb25jZXB0QnlDaGFyYWN0ZXJBbmRUeXBlXCIpO1xuY29uc3QgQ29uY2VwdF8xID0gcmVxdWlyZShcIi4uL0RhdGFTdHJ1Y3R1cmVzL0NvbmNlcHRcIik7XG5jb25zdCBUaGVUZXh0c18xID0gcmVxdWlyZShcIi4uL0RhdGFTdHJ1Y3R1cmVzL1RoZVRleHRzXCIpO1xuY29uc3QgQ3JlYXRlVGhlQ29uY2VwdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0NyZWF0ZVRoZUNvbmNlcHRcIikpO1xuY29uc3QgTWFrZVRoZU5hbWVfMSA9IHJlcXVpcmUoXCIuL01ha2VUaGVOYW1lXCIpO1xuY29uc3QgTWFrZVRoZVR5cGVDb25jZXB0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTWFrZVRoZVR5cGVDb25jZXB0XCIpKTtcbmZ1bmN0aW9uIE1ha2VUaGVJbnN0YW5jZUNvbmNlcHQodHlwZSwgcmVmZXJlbnQsIGNvbXBvc2l0aW9uID0gZmFsc2UsIHVzZXJJZCwgYWNjZXNzSWQsIHNlc3Npb25JbmZvcm1hdGlvbklkID0gOTk5KSB7XG4gICAgdmFyIHNlc3Npb25JbmZvcm1hdGlvbklkLCBhY2Nlc3NJZDtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBzZXNzaW9uSW5mb3JtYXRpb25JZCA9IDk5OTtcbiAgICAgICAgdmFyIGNhdGVnb3J5SWQgPSA0O1xuICAgICAgICB2YXIgY2F0ZWdvcnlVc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHZhciByZWZlcmVudElkID0gMDtcbiAgICAgICAgdmFyIHJlZmVyZW50VXNlcklkID0gOTk5O1xuICAgICAgICB2YXIgc2VjdXJpdHlJZCA9IDk5OTtcbiAgICAgICAgdmFyIHNlY3VyaXR5VXNlcklkID0gdXNlcklkO1xuICAgICAgICB2YXIgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkID0gdXNlcklkO1xuICAgICAgICBhY2Nlc3NJZCA9IDQ7XG4gICAgICAgIHZhciBhY2Nlc3NVc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHZhciBzdHJpbmdUb0NoZWNrID0gXCJcIjtcbiAgICAgICAgdmFyIHN0cmluZ0xlbmd0aCA9IHJlZmVyZW50Lmxlbmd0aDtcbiAgICAgICAgdmFyIHR5cGVDb25jZXB0ID0gbmV3IENvbmNlcHRfMS5Db25jZXB0KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIFwiMFwiLCAwLCAwLCAwLCAwLCAwLCAwLCBmYWxzZSk7XG4gICAgICAgIHZhciBjb25jZXB0O1xuICAgICAgICB2YXIgc3RhcnRzV2l0aFRoZSA9IHR5cGUuc3RhcnRzV2l0aChcInRoZV9cIik7XG4gICAgICAgIGlmIChzdGFydHNXaXRoVGhlKSB7XG4gICAgICAgICAgICBzdHJpbmdUb0NoZWNrID0gdHlwZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN0cmluZ1RvQ2hlY2sgPSBcInRoZV9cIiArIHR5cGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbXBvc2l0aW9uKSB7XG4gICAgICAgICAgICB2YXIgdHlwZUNvbmNlcHRTdHJpbmcgPSB5aWVsZCAoMCwgTWFrZVRoZVR5cGVDb25jZXB0XzEuZGVmYXVsdCkodHlwZSwgc2Vzc2lvbkluZm9ybWF0aW9uSWQsIHVzZXJJZCwgdXNlcklkKTtcbiAgICAgICAgICAgIHR5cGVDb25jZXB0ID0gdHlwZUNvbmNlcHRTdHJpbmc7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZvciBjb21wc29zaXRpb25cIiwgdHlwZUNvbmNlcHQpO1xuICAgICAgICAgICAgdmFyIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCAoMCwgQ3JlYXRlVGhlQ29uY2VwdF8xLmRlZmF1bHQpKHJlZmVyZW50LCB1c2VySWQsIGNhdGVnb3J5SWQsIHVzZXJJZCwgdHlwZUNvbmNlcHQuaWQsIHR5cGVDb25jZXB0LnVzZXJJZCwgcmVmZXJlbnRJZCwgcmVmZXJlbnRVc2VySWQsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkKTtcbiAgICAgICAgICAgIGNvbmNlcHQgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0cmluZ0xlbmd0aCA+IDI1NSkge1xuICAgICAgICAgICAgdmFyIHR5cGVDb25jZXB0U3RyaW5nID0geWllbGQgKDAsIE1ha2VUaGVUeXBlQ29uY2VwdF8xLmRlZmF1bHQpKHN0cmluZ1RvQ2hlY2ssIHNlc3Npb25JbmZvcm1hdGlvbklkLCBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQsIHVzZXJJZCk7XG4gICAgICAgICAgICB0eXBlQ29uY2VwdCA9IHR5cGVDb25jZXB0U3RyaW5nO1xuICAgICAgICAgICAgdmFyIGNvbmNlcHRTdHJpbmcgPSB5aWVsZCAoMCwgQ3JlYXRlVGhlQ29uY2VwdF8xLmRlZmF1bHQpKHJlZmVyZW50LCB1c2VySWQsIGNhdGVnb3J5SWQsIHVzZXJJZCwgdHlwZUNvbmNlcHQuaWQsIHR5cGVDb25jZXB0LnVzZXJJZCwgcmVmZXJlbnRJZCwgcmVmZXJlbnRVc2VySWQsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkKTtcbiAgICAgICAgICAgIGNvbmNlcHQgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICAgICAgdmFyIFRoZVRleHRzRGF0YSA9IG5ldyBUaGVUZXh0c18xLlRoZVRleHRzKHVzZXJJZCwgcmVmZXJlbnQsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkLCBEYXRlLm5vdygpLnRvU3RyaW5nKCksIHRydWUpO1xuICAgICAgICAgICAgdmFyIFRleHREYXRhU3RyaW5nID0geWllbGQgKDAsIENyZWF0ZVRoZVRleHREYXRhXzEuQ3JlYXRlVGV4dERhdGEpKFRoZVRleHRzRGF0YSk7XG4gICAgICAgICAgICB2YXIgVGV4dERhdGEgPSBUZXh0RGF0YVN0cmluZztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0eXBlQ29uY2VwdFN0cmluZyA9IHlpZWxkICgwLCBNYWtlVGhlVHlwZUNvbmNlcHRfMS5kZWZhdWx0KShzdHJpbmdUb0NoZWNrLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkLCB1c2VySWQpO1xuICAgICAgICAgICAgdHlwZUNvbmNlcHQgPSB0eXBlQ29uY2VwdFN0cmluZztcbiAgICAgICAgICAgIHZhciBjb25jZXB0QnlDaGFyVHlwZVN0cmluZyA9IHlpZWxkICgwLCBHZXRDb25jZXB0QnlDaGFyYWN0ZXJBbmRUeXBlXzEuR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyQW5kVHlwZSkocmVmZXJlbnQsIHR5cGVDb25jZXB0LmlkKTtcbiAgICAgICAgICAgIHZhciBjb25jZXB0VHlwZUNoYXJhY3RlciA9IGNvbmNlcHRCeUNoYXJUeXBlU3RyaW5nO1xuICAgICAgICAgICAgdmFyIG1ha2VUaGVOYW1lU3RyaW5nID0geWllbGQgKDAsIE1ha2VUaGVOYW1lXzEuTWFrZVRoZU5hbWUpKHJlZmVyZW50LCB1c2VySWQsIHNlY3VyaXR5SWQsIHNlY3VyaXR5VXNlcklkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSW5mb3JtYXRpb25JZCwgc2Vzc2lvbkluZm9ybWF0aW9uVXNlcklkLCB0eXBlQ29uY2VwdC5pZCwgdHlwZUNvbmNlcHQudXNlcklkLCBjb25jZXB0VHlwZUNoYXJhY3Rlcik7XG4gICAgICAgICAgICB2YXIgbWFrZVRoZU5hbWVDb25jZXB0ID0gbWFrZVRoZU5hbWVTdHJpbmc7XG4gICAgICAgICAgICBjb25jZXB0ID0gY29uY2VwdFR5cGVDaGFyYWN0ZXI7XG4gICAgICAgICAgICBpZiAoY29uY2VwdFR5cGVDaGFyYWN0ZXIuaWQgPT0gMCAmJiBjb25jZXB0VHlwZUNoYXJhY3Rlci51c2VySWQgPT0gMCkge1xuICAgICAgICAgICAgICAgIHZhciBjb25jZXB0U3RyaW5nID0geWllbGQgKDAsIENyZWF0ZVRoZUNvbmNlcHRfMS5kZWZhdWx0KShyZWZlcmVudCwgdXNlcklkLCBjYXRlZ29yeUlkLCB1c2VySWQsIHR5cGVDb25jZXB0LmlkLCB0eXBlQ29uY2VwdC51c2VySWQsIG1ha2VUaGVOYW1lQ29uY2VwdC5pZCwgbWFrZVRoZU5hbWVDb25jZXB0LnVzZXJJZCwgc2VjdXJpdHlJZCwgc2VjdXJpdHlVc2VySWQsIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQsIHNlc3Npb25JbmZvcm1hdGlvbklkLCBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQpO1xuICAgICAgICAgICAgICAgIGNvbmNlcHQgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGlmKGNvbmNlcHQpe1xuICAgICAgICAvLyAgICAgaWYoY29uY2VwdC50eXBlID09IG51bGwpe1xuICAgICAgICAvLyAgICAgICAgIHZhciBjb25jZXB0VHlwZSA9IENvbmNlcHRzRGF0YS5HZXRDb25jZXB0KGNvbmNlcHQudHlwZUlkKTtcbiAgICAgICAgLy8gICAgICAgICBpZihjb25jZXB0VHlwZSA9PSBudWxsICYmIGNvbmNlcHQudHlwZUlkICE9IG51bGwgJiYgY29uY2VwdC50eXBlSWQgIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgLy8gICAgICAgICAgICAgdmFyIHR5cGVDb25jZXB0U3RyaW5nTmV3ID0gYXdhaXQgR2V0Q29uY2VwdChjb25jZXB0LnR5cGVJZCk7XG4gICAgICAgIC8vICAgICAgICAgICAgIHZhciBuZXdUeXBlQ29uY2VwdCA9IHR5cGVDb25jZXB0U3RyaW5nTmV3IGFzIENvbmNlcHQ7XG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbmNlcHQudHlwZSA9IG5ld1R5cGVDb25jZXB0O1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuICAgICAgICBjb25jZXB0LnR5cGUgPSB0eXBlQ29uY2VwdDtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSBjb25jZXB0IHJldHVybmVkIGJ5IG1ha2UgdGhlIGluc3RhbmNlIGNvbmNlcHRcIiwgY29uY2VwdCk7XG4gICAgICAgIHJldHVybiBjb25jZXB0O1xuICAgIH0pO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gTWFrZVRoZUluc3RhbmNlQ29uY2VwdDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk1ha2VUaGVOYW1lID0gdm9pZCAwO1xuY29uc3QgR2V0VGhlUmVmZXJlbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9HZXRUaGVSZWZlcmVudFwiKSk7XG5jb25zdCBNYWtlVGhlQ2hhcmFjdGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTWFrZVRoZUNoYXJhY3RlclwiKSk7XG5jb25zdCBNYWtlVGhlQ29uY2VwdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL01ha2VUaGVDb25jZXB0XCIpKTtcbmZ1bmN0aW9uIE1ha2VUaGVOYW1lKHRoZUNoYXJhY3RlckRhdGEsIHVzZXJJZCwgc2VjdXJpdHlJZCwgc2VjdXJpdHlVc2VySWQsIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQsIHNlc3Npb25JbmZvcm1hdGlvbklkLCBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQsIHR5cGVJZCwgdHlwZVVzZXJJZCwgZXhpc3RpbmdDb25jZXB0KSB7XG4gICAgdmFyIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQ7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdmFyIG5hbWVUeXBlSWQgPSAxMjtcbiAgICAgICAgdmFyIGNhdGVnb3J5SWQgPSA0O1xuICAgICAgICB2YXIgc2Vzc2lvbklkID0gc2Vzc2lvbkluZm9ybWF0aW9uSWQgIT09IG51bGwgJiYgc2Vzc2lvbkluZm9ybWF0aW9uSWQgIT09IHZvaWQgMCA/IHNlc3Npb25JbmZvcm1hdGlvbklkIDogOTk5O1xuICAgICAgICB2YXIgc2Vzc2lvblVzZXJJZCA9IHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCAhPT0gbnVsbCAmJiBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQgIT09IHZvaWQgMCA/IHNlc3Npb25JbmZvcm1hdGlvblVzZXJJZCA6IDk5OTtcbiAgICAgICAgYWNjZXNzSWQgPSBhY2Nlc3NJZCAhPT0gbnVsbCAmJiBhY2Nlc3NJZCAhPT0gdm9pZCAwID8gYWNjZXNzSWQgOiA0O1xuICAgICAgICBhY2Nlc3NVc2VySWQgPSBhY2Nlc3NVc2VySWQgIT09IG51bGwgJiYgYWNjZXNzVXNlcklkICE9PSB2b2lkIDAgPyBhY2Nlc3NVc2VySWQgOiA5OTk7XG4gICAgICAgIHZhciBjYXRlZ29yeVVzZXJJZCA9IDk5OTtcbiAgICAgICAgdmFyIHJlZmVyZW50SW5mbztcbiAgICAgICAgdmFyIGNoYXJhY3RlckNvbmNlcHQ7XG4gICAgICAgIGlmIChleGlzdGluZ0NvbmNlcHQuaWQgPiAwICYmIGV4aXN0aW5nQ29uY2VwdC51c2VySWQgPiAwKSB7XG4gICAgICAgICAgICBjaGFyYWN0ZXJDb25jZXB0ID0geWllbGQgKDAsIEdldFRoZVJlZmVyZW50XzEuZGVmYXVsdCkoZXhpc3RpbmdDb25jZXB0LmlkLCBleGlzdGluZ0NvbmNlcHQudXNlcklkLCBleGlzdGluZ0NvbmNlcHQucmVmZXJlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2hhcmFjdGVyQ29uY2VwdCA9ICh5aWVsZCAoMCwgTWFrZVRoZUNoYXJhY3Rlcl8xLmRlZmF1bHQpKHRoZUNoYXJhY3RlckRhdGEsIHVzZXJJZCwgc2VjdXJpdHlJZCwgYWNjZXNzSWQsIGFjY2Vzc1VzZXJJZCwgc2Vzc2lvbklkKSk7XG4gICAgICAgICAgICBleGlzdGluZ0NvbmNlcHQgPSB5aWVsZCAoMCwgTWFrZVRoZUNvbmNlcHRfMS5kZWZhdWx0KSh0aGVDaGFyYWN0ZXJEYXRhLCB1c2VySWQsIGNhdGVnb3J5SWQsIGNhdGVnb3J5VXNlcklkLCBuYW1lVHlwZUlkLCB0eXBlVXNlcklkLCBjaGFyYWN0ZXJDb25jZXB0LmlkLCBjaGFyYWN0ZXJDb25jZXB0LnVzZXJJZCwgc2VjdXJpdHlJZCwgc2VjdXJpdHlVc2VySWQsIGFjY2Vzc0lkLCBhY2Nlc3NVc2VySWQsIHNlc3Npb25JZCwgc2Vzc2lvblVzZXJJZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nQ29uY2VwdDtcbiAgICB9KTtcbn1cbmV4cG9ydHMuTWFrZVRoZU5hbWUgPSBNYWtlVGhlTmFtZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBDcmVhdGVUaGVDb25jZXB0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vQ3JlYXRlVGhlQ29uY2VwdFwiKSk7XG5jb25zdCBHZXRDb25jZXB0QnlDaGFyYWN0ZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9HZXRDb25jZXB0QnlDaGFyYWN0ZXJcIikpO1xuY29uc3QgTWFrZVRoZUNoYXJhY3Rlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL01ha2VUaGVDaGFyYWN0ZXJcIikpO1xuY29uc3QgU3BsaXRTdHJpbmdzXzEgPSByZXF1aXJlKFwiLi9TcGxpdFN0cmluZ3NcIik7XG5mdW5jdGlvbiBNYWtlVGhlVHlwZUNvbmNlcHQodHlwZVN0cmluZywgc2Vzc2lvbklkLCBzZXNzaW9uVXNlcklkLCB1c2VySWQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB2YXIgcmVmZXJlbnRJZCA9IDk5OTtcbiAgICAgICAgdmFyIHNlY3VyaXR5SWQgPSA5OTk7XG4gICAgICAgIHZhciBzZXNzaW9uSW5mb3JtYXRpb25Vc2VySWQgPSA5OTk7XG4gICAgICAgIHZhciBhY2Nlc3NJZCA9IDk5OTtcbiAgICAgICAgdmFyIHNlY3VyaXR5VXNlcklkID0gdXNlcklkO1xuICAgICAgICB2YXIgYWNjZXNzVXNlcklkID0gdXNlcklkO1xuICAgICAgICB2YXIgY2F0ZWdvcnlVc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHZhciBzZWN1cml0eVVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdmFyIGV4aXN0aW5nQ29uY2VwdCA9IHlpZWxkICgwLCBHZXRDb25jZXB0QnlDaGFyYWN0ZXJfMS5kZWZhdWx0KSh0eXBlU3RyaW5nKTtcbiAgICAgICAgaWYgKGV4aXN0aW5nQ29uY2VwdCkge1xuICAgICAgICAgICAgaWYgKGV4aXN0aW5nQ29uY2VwdC5pZCA9PSAwIHx8IGV4aXN0aW5nQ29uY2VwdC51c2VySWQgPT0gMCkge1xuICAgICAgICAgICAgICAgIHZhciBzcGxpdHRlZFN0cmluZ0FycmF5ID0gKDAsIFNwbGl0U3RyaW5nc18xLlNwbGl0U3RyaW5ncykodHlwZVN0cmluZyk7XG4gICAgICAgICAgICAgICAgaWYgKHNwbGl0dGVkU3RyaW5nQXJyYXlbMF0gPT0gdHlwZVN0cmluZykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29uY2VwdFN0cmluZyA9IHlpZWxkICgwLCBNYWtlVGhlQ2hhcmFjdGVyXzEuZGVmYXVsdCkodHlwZVN0cmluZywgdXNlcklkLCBzZWN1cml0eUlkLCBhY2Nlc3NJZCwgYWNjZXNzVXNlcklkLCBzZXNzaW9uSWQpO1xuICAgICAgICAgICAgICAgICAgICBleGlzdGluZ0NvbmNlcHQgPSBjb25jZXB0U3RyaW5nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhdGVnb3J5SWQgPSAxO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2F0ZWdvcnlDb25jZXB0ID0gTWFrZVRoZVR5cGVDb25jZXB0KHNwbGl0dGVkU3RyaW5nQXJyYXlbMF0sIHNlc3Npb25JZCwgc2Vzc2lvblVzZXJJZCwgdXNlcklkKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHR5cGVDb25jZXB0ID0geWllbGQgTWFrZVRoZVR5cGVDb25jZXB0KHNwbGl0dGVkU3RyaW5nQXJyYXlbMV0sIHNlc3Npb25JZCwgc2Vzc2lvblVzZXJJZCwgdXNlcklkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVDb25jZXB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29uY2VwdCA9IHlpZWxkICgwLCBDcmVhdGVUaGVDb25jZXB0XzEuZGVmYXVsdCkodHlwZVN0cmluZywgdXNlcklkLCBjYXRlZ29yeUlkLCB1c2VySWQsIHR5cGVDb25jZXB0LmlkLCB1c2VySWQsIHJlZmVyZW50SWQsIHVzZXJJZCwgc2VjdXJpdHlJZCwgdXNlcklkLCBhY2Nlc3NJZCwgdXNlcklkLCBzZXNzaW9uSWQsIHVzZXJJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ0NvbmNlcHQgPSBjb25jZXB0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBleGlzdGluZ0NvbmNlcHQ7XG4gICAgfSk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBNYWtlVGhlVHlwZUNvbmNlcHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU3BsaXRTdHJpbmdzID0gdm9pZCAwO1xuZnVuY3Rpb24gU3BsaXRTdHJpbmdzKHR5cGVTdHJpbmcpIHtcbiAgICBjb25zdCBTcGxpdHRlZFN0cmluZ3MgPSB0eXBlU3RyaW5nLnNwbGl0KFwiX1wiKTtcbiAgICByZXR1cm4gU3BsaXR0ZWRTdHJpbmdzO1xufVxuZXhwb3J0cy5TcGxpdFN0cmluZ3MgPSBTcGxpdFN0cmluZ3M7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ29uY2VwdHNEYXRhID0gZXhwb3J0cy5Db25jZXB0ID0gZXhwb3J0cy5TeW5jRGF0YSA9IGV4cG9ydHMuR2V0TGluayA9IGV4cG9ydHMuR2V0Q29uY2VwdEJ5Q2hhcmFjdGVyID0gZXhwb3J0cy5DcmVhdGVUaGVDb25uZWN0aW9uID0gZXhwb3J0cy5nZXRGcm9tRGF0YWJhc2VXaXRoVHlwZU9sZCA9IGV4cG9ydHMuZ2V0RnJvbURhdGFiYXNlV2l0aFR5cGUgPSBleHBvcnRzLmdldEZyb21EYXRhYmFzZSA9IGV4cG9ydHMuc3RvcmVUb0RhdGFiYXNlID0gZXhwb3J0cy5NYWtlVGhlSW5zdGFuY2VDb25jZXB0TG9jYWwgPSBleHBvcnRzLk1ha2VUaGVJbnN0YW5jZUNvbmNlcHQgPSBleHBvcnRzLkdldFRoZUNvbmNlcHQgPSBleHBvcnRzLkNyZWF0ZUNvbm5lY3Rpb25CZXR3ZWVuVHdvQ29uY2VwdHMgPSBleHBvcnRzLkNyZWF0ZVRoZUNvbXBvc2l0aW9uTG9jYWwgPSBleHBvcnRzLkNyZWF0ZUNvbXBvc2l0aW9uID0gZXhwb3J0cy5HZXRDb21wb3NpdGlvbkxvY2FsV2l0aElkID0gZXhwb3J0cy5HZXRDb21wb3NpdGlvbkxvY2FsID0gZXhwb3J0cy5HZXRDb21wb3NpdGlvbldpdGhJZCA9IGV4cG9ydHMuR2V0Q29tcG9zaXRpb24gPSBleHBvcnRzLkdldENvbXBvc2l0aW9uTGlzdExvY2FsV2l0aElkID0gZXhwb3J0cy5HZXRDb21wb3NpdGlvbkxpc3RMb2NhbCA9IGV4cG9ydHMuR2V0Q29tcG9zaXRpb25MaXN0V2l0aElkID0gZXhwb3J0cy5HZXRDb21wb3NpdGlvbkxpc3QgPSBleHBvcnRzLlNwbGl0U3RyaW5ncyA9IHZvaWQgMDtcbmNvbnN0IENyZWF0ZUJpbmFyeVRyZWVGcm9tRGF0YV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1NlcnZpY2VzL0NyZWF0ZUJpbmFyeVRyZWVGcm9tRGF0YVwiKSk7XG5jb25zdCBDcmVhdGVDaGFyYWN0ZXJCaW5hcnlUcmVlRnJvbURhdGFfMSA9IHJlcXVpcmUoXCIuL1NlcnZpY2VzL0NyZWF0ZUNoYXJhY3RlckJpbmFyeVRyZWVGcm9tRGF0YVwiKTtcbmNvbnN0IElkZW50aWZpZXJGbGFnc18xID0gcmVxdWlyZShcIi4vRGF0YVN0cnVjdHVyZXMvSWRlbnRpZmllckZsYWdzXCIpO1xudmFyIFNwbGl0U3RyaW5nc18xID0gcmVxdWlyZShcIi4vU2VydmljZXMvU3BsaXRTdHJpbmdzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiU3BsaXRTdHJpbmdzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBTcGxpdFN0cmluZ3NfMS5TcGxpdFN0cmluZ3M7IH0gfSk7XG52YXIgR2V0Q29tcG9zaXRpb25MaXN0XzEgPSByZXF1aXJlKFwiLi9TZXJ2aWNlcy9HZXRDb21wb3NpdGlvbkxpc3RcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJHZXRDb21wb3NpdGlvbkxpc3RcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEdldENvbXBvc2l0aW9uTGlzdF8xLkdldENvbXBvc2l0aW9uTGlzdDsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkdldENvbXBvc2l0aW9uTGlzdFdpdGhJZFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gR2V0Q29tcG9zaXRpb25MaXN0XzEuR2V0Q29tcG9zaXRpb25MaXN0V2l0aElkOyB9IH0pO1xudmFyIEdldENvbXBvc2l0aW9uTGlzdExvY2FsXzEgPSByZXF1aXJlKFwiLi9TZXJ2aWNlcy9Mb2NhbC9HZXRDb21wb3NpdGlvbkxpc3RMb2NhbFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkdldENvbXBvc2l0aW9uTGlzdExvY2FsXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBHZXRDb21wb3NpdGlvbkxpc3RMb2NhbF8xLkdldENvbXBvc2l0aW9uTGlzdExvY2FsOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiR2V0Q29tcG9zaXRpb25MaXN0TG9jYWxXaXRoSWRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEdldENvbXBvc2l0aW9uTGlzdExvY2FsXzEuR2V0Q29tcG9zaXRpb25MaXN0TG9jYWxXaXRoSWQ7IH0gfSk7XG52YXIgR2V0Q29tcG9zaXRpb25fMSA9IHJlcXVpcmUoXCIuL1NlcnZpY2VzL0dldENvbXBvc2l0aW9uXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiR2V0Q29tcG9zaXRpb25cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEdldENvbXBvc2l0aW9uXzEuR2V0Q29tcG9zaXRpb247IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJHZXRDb21wb3NpdGlvbldpdGhJZFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gR2V0Q29tcG9zaXRpb25fMS5HZXRDb21wb3NpdGlvbldpdGhJZDsgfSB9KTtcbnZhciBHZXRDb21wb3NpdGlvbkxvY2FsXzEgPSByZXF1aXJlKFwiLi9TZXJ2aWNlcy9Mb2NhbC9HZXRDb21wb3NpdGlvbkxvY2FsXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiR2V0Q29tcG9zaXRpb25Mb2NhbFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gR2V0Q29tcG9zaXRpb25Mb2NhbF8xLkdldENvbXBvc2l0aW9uTG9jYWw7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJHZXRDb21wb3NpdGlvbkxvY2FsV2l0aElkXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBHZXRDb21wb3NpdGlvbkxvY2FsXzEuR2V0Q29tcG9zaXRpb25Mb2NhbFdpdGhJZDsgfSB9KTtcbnZhciBDcmVhdGVUaGVDb21wb3NpdGlvbl8xID0gcmVxdWlyZShcIi4vU2VydmljZXMvQ3JlYXRlVGhlQ29tcG9zaXRpb25cIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJDcmVhdGVDb21wb3NpdGlvblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX19pbXBvcnREZWZhdWx0KENyZWF0ZVRoZUNvbXBvc2l0aW9uXzEpLmRlZmF1bHQ7IH0gfSk7XG52YXIgQ3JlYXRlVGhlQ29tcG9zaXRpb25Mb2NhbF8xID0gcmVxdWlyZShcIi4vU2VydmljZXMvTG9jYWwvQ3JlYXRlVGhlQ29tcG9zaXRpb25Mb2NhbFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkNyZWF0ZVRoZUNvbXBvc2l0aW9uTG9jYWxcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIENyZWF0ZVRoZUNvbXBvc2l0aW9uTG9jYWxfMS5DcmVhdGVUaGVDb21wb3NpdGlvbkxvY2FsOyB9IH0pO1xudmFyIENyZWF0ZUNvbm5lY3Rpb25CZXR3ZWVuVHdvQ29uY2VwdHNfMSA9IHJlcXVpcmUoXCIuL1NlcnZpY2VzL0NyZWF0ZUNvbm5lY3Rpb25CZXR3ZWVuVHdvQ29uY2VwdHNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJDcmVhdGVDb25uZWN0aW9uQmV0d2VlblR3b0NvbmNlcHRzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBDcmVhdGVDb25uZWN0aW9uQmV0d2VlblR3b0NvbmNlcHRzXzEuQ3JlYXRlQ29ubmVjdGlvbkJldHdlZW5Ud29Db25jZXB0czsgfSB9KTtcbnZhciBHZXRUaGVDb25jZXB0XzEgPSByZXF1aXJlKFwiLi9TZXJ2aWNlcy9HZXRUaGVDb25jZXB0XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiR2V0VGhlQ29uY2VwdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX19pbXBvcnREZWZhdWx0KEdldFRoZUNvbmNlcHRfMSkuZGVmYXVsdDsgfSB9KTtcbnZhciBNYWtlVGhlSW5zdGFuY2VDb25jZXB0XzEgPSByZXF1aXJlKFwiLi9TZXJ2aWNlcy9NYWtlVGhlSW5zdGFuY2VDb25jZXB0XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTWFrZVRoZUluc3RhbmNlQ29uY2VwdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX19pbXBvcnREZWZhdWx0KE1ha2VUaGVJbnN0YW5jZUNvbmNlcHRfMSkuZGVmYXVsdDsgfSB9KTtcbnZhciBNYWtlVGhlSW5zdGFuY2VDb25jZXB0TG9jYWxfMSA9IHJlcXVpcmUoXCIuL1NlcnZpY2VzL0xvY2FsL01ha2VUaGVJbnN0YW5jZUNvbmNlcHRMb2NhbFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIk1ha2VUaGVJbnN0YW5jZUNvbmNlcHRMb2NhbFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gTWFrZVRoZUluc3RhbmNlQ29uY2VwdExvY2FsXzEuTWFrZVRoZUluc3RhbmNlQ29uY2VwdExvY2FsOyB9IH0pO1xudmFyIGluZGV4ZWRkYl8xID0gcmVxdWlyZShcIi4vRGF0YWJhc2UvaW5kZXhlZGRiXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwic3RvcmVUb0RhdGFiYXNlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBpbmRleGVkZGJfMS5zdG9yZVRvRGF0YWJhc2U7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJnZXRGcm9tRGF0YWJhc2VcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGluZGV4ZWRkYl8xLmdldEZyb21EYXRhYmFzZTsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImdldEZyb21EYXRhYmFzZVdpdGhUeXBlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBpbmRleGVkZGJfMS5nZXRGcm9tRGF0YWJhc2VXaXRoVHlwZTsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImdldEZyb21EYXRhYmFzZVdpdGhUeXBlT2xkXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBpbmRleGVkZGJfMS5nZXRGcm9tRGF0YWJhc2VXaXRoVHlwZU9sZDsgfSB9KTtcbnZhciBDcmVhdGVUaGVDb25uZWN0aW9uXzEgPSByZXF1aXJlKFwiLi9TZXJ2aWNlcy9DcmVhdGVUaGVDb25uZWN0aW9uXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQ3JlYXRlVGhlQ29ubmVjdGlvblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX19pbXBvcnREZWZhdWx0KENyZWF0ZVRoZUNvbm5lY3Rpb25fMSkuZGVmYXVsdDsgfSB9KTtcbnZhciBHZXRDb25jZXB0QnlDaGFyYWN0ZXJfMSA9IHJlcXVpcmUoXCIuL1NlcnZpY2VzL0dldENvbmNlcHRCeUNoYXJhY3RlclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkdldENvbmNlcHRCeUNoYXJhY3RlclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX19pbXBvcnREZWZhdWx0KEdldENvbmNlcHRCeUNoYXJhY3Rlcl8xKS5kZWZhdWx0OyB9IH0pO1xudmFyIEdldExpbmtfMSA9IHJlcXVpcmUoXCIuL1NlcnZpY2VzL0dldExpbmtcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJHZXRMaW5rXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBHZXRMaW5rXzEuR2V0TGluazsgfSB9KTtcbnZhciBTeW5jRGF0YV8xID0gcmVxdWlyZShcIi4vRGF0YVN0cnVjdHVyZXMvU3luY0RhdGFcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJTeW5jRGF0YVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gU3luY0RhdGFfMS5TeW5jRGF0YTsgfSB9KTtcbnZhciBDb25jZXB0XzEgPSByZXF1aXJlKFwiLi9EYXRhU3RydWN0dXJlcy9Db25jZXB0XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQ29uY2VwdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gQ29uY2VwdF8xLkNvbmNlcHQ7IH0gfSk7XG52YXIgQ29uY2VwdERhdGFfMSA9IHJlcXVpcmUoXCIuL0RhdGFTdHJ1Y3R1cmVzL0NvbmNlcHREYXRhXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQ29uY2VwdHNEYXRhXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBDb25jZXB0RGF0YV8xLkNvbmNlcHRzRGF0YTsgfSB9KTtcbmNvbnN0IEdldERhdGFGcm9tSW5kZXhEYl8xID0gcmVxdWlyZShcIi4vU2VydmljZXMvR2V0RGF0YUZyb21JbmRleERiXCIpO1xuY29uc3QgQ3JlYXRlTG9jYWxCaW5hcnlUcmVlRnJvbURhdGFfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9TZXJ2aWNlcy9Mb2NhbC9DcmVhdGVMb2NhbEJpbmFyeVRyZWVGcm9tRGF0YVwiKSk7XG5jb25zdCBDcmVhdGVUeXBlVHJlZUZyb21EYXRhXzEgPSByZXF1aXJlKFwiLi9TZXJ2aWNlcy9DcmVhdGVUeXBlVHJlZUZyb21EYXRhXCIpO1xuY29uc3QgQ3JlYXRlTG9jYWxDaGFyYWN0ZXJCaW5hcnlUcmVlXzEgPSByZXF1aXJlKFwiLi9TZXJ2aWNlcy9Mb2NhbC9DcmVhdGVMb2NhbENoYXJhY3RlckJpbmFyeVRyZWVcIik7XG5jb25zdCBDcmVhdGVMb2NhbEJpbmFyeVR5cGVUcmVlRnJvbURhdGFfMSA9IHJlcXVpcmUoXCIuL1NlcnZpY2VzL0xvY2FsL0NyZWF0ZUxvY2FsQmluYXJ5VHlwZVRyZWVGcm9tRGF0YVwiKTtcbmNvbnN0IEluaXRpYWxpemVTeXN0ZW1fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9TZXJ2aWNlcy9Jbml0aWFsaXplU3lzdGVtXCIpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IEluaXRpYWxpemVTeXN0ZW1fMS5kZWZhdWx0O1xuKDAsIEluaXRpYWxpemVTeXN0ZW1fMS5kZWZhdWx0KSgpLnRoZW4oKCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgKDAsIENyZWF0ZUJpbmFyeVRyZWVGcm9tRGF0YV8xLmRlZmF1bHQpKCkudGhlbigoKSA9PiB7XG4gICAgICAgIElkZW50aWZpZXJGbGFnc18xLklkZW50aWZpZXJGbGFncy5pc0RhdGFMb2FkZWQgPSB0cnVlO1xuICAgIH0pO1xuICAgICgwLCBDcmVhdGVDaGFyYWN0ZXJCaW5hcnlUcmVlRnJvbURhdGFfMS5DcmVhdGVDaGFyYWN0ZXJCaW5hcnlUcmVlRnJvbURhdGEpKCkudGhlbigoKSA9PiB7XG4gICAgICAgIElkZW50aWZpZXJGbGFnc18xLklkZW50aWZpZXJGbGFncy5pc0NoYXJhY3RlckxvYWRlZCA9IHRydWU7XG4gICAgfSk7XG4gICAgKDAsIENyZWF0ZVR5cGVUcmVlRnJvbURhdGFfMS5DcmVhdGVUeXBlVHJlZUZyb21EYXRhKSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICBJZGVudGlmaWVyRmxhZ3NfMS5JZGVudGlmaWVyRmxhZ3MuaXNUeXBlTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgbGV0IGVsYXBzZWQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHN0YXJ0O1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRoZSB0aW1lIHRha2VuIHRvIHByZXBhcmUgZGF0YSBpcyBcIiwgZWxhcHNlZCk7XG4gICAgfSk7XG4gICAgKDAsIENyZWF0ZUxvY2FsQmluYXJ5VHJlZUZyb21EYXRhXzEuZGVmYXVsdCkoKS50aGVuKCgpID0+IHtcbiAgICAgICAgSWRlbnRpZmllckZsYWdzXzEuSWRlbnRpZmllckZsYWdzLmlzTG9jYWxEYXRhTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgY29uc29sZS5sb2coXCJEYXRhXCIsIElkZW50aWZpZXJGbGFnc18xLklkZW50aWZpZXJGbGFncy5pc0xvY2FsRGF0YUxvYWRlZCk7XG4gICAgfSk7XG4gICAgKDAsIENyZWF0ZUxvY2FsQ2hhcmFjdGVyQmluYXJ5VHJlZV8xLkNyZWF0ZUxvY2FsQ2hhcmFjdGVyQmluYXJ5VHJlZUZyb21EYXRhKSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICBJZGVudGlmaWVyRmxhZ3NfMS5JZGVudGlmaWVyRmxhZ3MuaXNMb2NhbENoYXJhY3RlckxvYWRlZCA9IHRydWU7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2hhcmFjdGVyXCIsIElkZW50aWZpZXJGbGFnc18xLklkZW50aWZpZXJGbGFncy5pc0xvY2FsQ2hhcmFjdGVyTG9hZGVkKTtcbiAgICB9KTtcbiAgICAoMCwgQ3JlYXRlTG9jYWxCaW5hcnlUeXBlVHJlZUZyb21EYXRhXzEuQ3JlYXRlTG9jYWxCaW5hcnlUeXBlVHJlZUZyb21EYXRhKSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICBJZGVudGlmaWVyRmxhZ3NfMS5JZGVudGlmaWVyRmxhZ3MuaXNMb2NhbFR5cGVMb2FkZWQgPSB0cnVlO1xuICAgICAgICBjb25zb2xlLmxvZyhcInR5cGVcIiwgSWRlbnRpZmllckZsYWdzXzEuSWRlbnRpZmllckZsYWdzLmlzTG9jYWxUeXBlTG9hZGVkKTtcbiAgICB9KTtcbiAgICAoMCwgR2V0RGF0YUZyb21JbmRleERiXzEuR2V0RGF0YUZyb21JbmRleERiTG9jYWwpKCkudGhlbigoKSA9PiB7XG4gICAgICAgIElkZW50aWZpZXJGbGFnc18xLklkZW50aWZpZXJGbGFncy5pc0xvY2FsQ29ubmVjdGlvbkxvYWRlZCA9IHRydWU7XG4gICAgfSk7XG59KTtcbi8vICBHZXREYXRhRnJvbUluZGV4RGIoKTsgXG4vLyBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI215Rm9ybScpIGFzIEhUTUxGb3JtRWxlbWVudDtcbi8vIC8vY29uc3QgZm9ybTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlckZvcm0nKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG4vLyBjb25zdCBmb3JtMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21wb3NpdGlvbkZvcm0nKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG4vLyBjb25zdCBqc29uRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqc29uRm9ybScpIGFzIEhUTUxGb3JtRWxlbWVudDtcbi8vIGNvbnN0IG5hbWVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWVmb3JtJykgYXMgSFRNTEZvcm1FbGVtZW50O1xuLy8gY29uc3QgZ2V0bmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnZXRuYW1lJykgYXMgSFRNTEZvcm1FbGVtZW50O1xuLy8gdmFyIGpzb24gPSB7XG4vLyAgICAgXCJhc2Rnc2FkZGZmXCI6IHtcbi8vICAgICAgICAgXCJhZGdhc2Rmc2RmXCI6IHtcbi8vICAgICAgICAgICAgIFwiYXNkZ1wiOiBcInRhbWVcIixcbi8vICAgICAgICAgICAgIFwiYnJpZGVyYXJyXCI6IFtcImhlbGxvXCIsIFwidHJlXCJdXG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9O1xuLy8gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcbi8vICAgICBjb25zb2xlLmxvZyhcInN5bmNpbmdcIik7XG4vLyAgICAgU3luY0RhdGEuU3luY0RhdGFPbmxpbmUoKVxuLy8gfSwgNTAwMCk7XG4vLyBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuLy8gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbi8vICAgIGNvbnN0IGNvbmNlcHRJZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29uY2VwdGlkJykgYXMgSFRNTElucHV0RWxlbWVudDtcbi8vICAgIGNvbnN0IGNvbmNlcHRJZCA9IGNvbmNlcHRJZEVsZW1lbnQudmFsdWU7XG4vLyAgICBHZXRDb21wb3NpdGlvbihOdW1iZXIoY29uY2VwdElkKSkudGhlbihvdXRwdXQ9Pntcbi8vICAgICBjb25zdCBqc29uRWxlbW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzb25vdXRwdXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuLy8gICAgIHZhciBqc29uID0gSlNPTi5zdHJpbmdpZnkob3V0cHV0KTtcbi8vICAgICBjb25zb2xlLmxvZyhqc29uKTtcbi8vICAgICBqc29uRWxlbW50LmlubmVySFRNTCA9IGpzb247XG4vLyAgICB9KTtcbi8vIH0pO1xuLy8gZ2V0bmFtZS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbi8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgIGNvbnN0IGNvbmNlcHRJZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZWNvbmNlcHRpZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4vLyAgICAgY29uc3QgY29uY2VwdElkID0gY29uY2VwdElkRWxlbWVudC52YWx1ZTtcbi8vICAgICBHZXRDb21wb3NpdGlvbihOdW1iZXIoY29uY2VwdElkKSkudGhlbihvdXRwdXQ9Pntcbi8vICAgICAgICAgY29uc3QgZmlyc3ROYW1lRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaXJzdG5hbWUnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuLy8gICAgICAgICBjb25zdCBsYXN0TmFtZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGFzdG5hbWUnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhvdXRwdXQpO1xuLy8gICAgICAgICBmaXJzdE5hbWVFbGVtZW50LnZhbHVlID0gb3V0cHV0Lm5hbWVkYXRhLmZpcnN0bmFtZTtcbi8vICAgICAgICAgbGFzdE5hbWVFbGVtZW50LnZhbHVlID0gb3V0cHV0Lm5hbWVkYXRhLmxhc3RuYW1lO1xuLy8gICAgIH0pO1xuLy8gIH0pO1xuLy8gbmFtZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4vLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbi8vICAgICBjb25zdCBmaXJzdE5hbWVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpcnN0bmFtZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4vLyAgICAgY29uc3QgZmlyc3RuYW1lID0gZmlyc3ROYW1lRWxlbWVudC52YWx1ZTtcbi8vICAgICBjb25zdCBsYXN0TmFtZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGFzdG5hbWUnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuLy8gICAgIGNvbnN0IGxhc3RuYW1lID0gbGFzdE5hbWVFbGVtZW50LnZhbHVlO1xuLy8gICAgIHZhciBqc29uID0ge1xuLy8gICAgICAgICBcIm5hbWVkYXRhXCI6e1xuLy8gICAgICAgICAgICAgXCJmaXJzdG5hbWVcIjogZmlyc3RuYW1lLFxuLy8gICAgICAgICAgICAgXCJsYXN0bmFtZVwiOiBsYXN0bmFtZVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gICAgIGNvbnNvbGUubG9nKGpzb24pO1xuLy8gICAgIENyZWF0ZVRoZUNvbXBvc2l0aW9uKGpzb24pLnRoZW4oKHZhbHVlKT0+e1xuLy8gICAgICAgICBjb25zdCBvdXRwdXRpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvdXRwdXRpZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4vLyAgICAgICAgIHZhciBjb25jZXB0ID0gdmFsdWUgYXMgQ29uY2VwdDtcbi8vICAgICAgICAgb3V0cHV0aWQuaW5uZXJIVE1MID0gY29uY2VwdC5pZC50b1N0cmluZygpO1xuLy8gICAgICAgICBjb25zb2xlLmxvZygndGhpcyBpcyB0aGUgdGVzdCBmb3IgZmluYWwnKTtcbi8vICAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xuLy8gICAgIH0pO1xuLy8gICAgIH0pO1xuLy8ganNvbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9Pntcbi8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgIGNvbnN0IGNvbXBvc2l0aW9uTmFtZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2pzb25kYXRhXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4vLyAgICAgY29uc3QgY29tcG9zaXRpb25OYW1lID0gY29tcG9zaXRpb25OYW1lRWxlbWVudC52YWx1ZTtcbi8vICAgICBjb25zb2xlLmxvZyhcInRoaXMgaXMgdGhlIGNvbXBvc2l0aW9uIG5hbWVcIik7XG4vLyAgICAgY29uc29sZS5sb2coY29tcG9zaXRpb25OYW1lKTtcbi8vICAgICB2YXIgam9uID0gSlNPTi5wYXJzZShjb21wb3NpdGlvbk5hbWUpO1xuLy8gICAgIENyZWF0ZVRoZUNvbXBvc2l0aW9uKGpvbikudGhlbigodmFsdWUpPT57XG4vLyAgICAgICAgIGNvbnN0IG91dHB1dGlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI291dHB1dGlkJykgYXMgSFRNTElucHV0RWxlbWVudDtcbi8vICAgICAgICAgdmFyIGNvbmNlcHQgPSB2YWx1ZSBhcyBDb25jZXB0O1xuLy8gICAgICAgICBvdXRwdXRpZC5pbm5lckhUTUwgPSBjb25jZXB0LmlkLnRvU3RyaW5nKCk7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzIHRoZSB0ZXN0IGZvciBmaW5hbCcpO1xuLy8gICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4vLyAgICAgfSk7XG4vLyB9KTtcbi8vIGZvcm0zLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgY29uc3QgY29tcG9zaXRpb25OYW1lRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29tcG9zaXRpb25fbmFtZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuLy8gICAgIGNvbnN0IGNvbXBvc2l0aW9uTmFtZSA9IGNvbXBvc2l0aW9uTmFtZUVsZW1lbnQudmFsdWU7XG4vLyAgICAgR2V0Q29tcG9zaXRpb25MaXN0KGNvbXBvc2l0aW9uTmFtZSkudGhlbihvdXRwdXQ9Pntcbi8vICAgICAgICAgY29uc3QganNvbkVsZW1udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqc29ub3V0cHV0JykgYXMgSFRNTElucHV0RWxlbWVudDtcbi8vICAgICAgICAgdmFyIGpzb24gPSBKU09OLnN0cmluZ2lmeShvdXRwdXQpO1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhqc29uKTtcbi8vICAgICAgICAganNvbkVsZW1udC5pbm5lckhUTUwgPSBKU09OLnN0cmluZ2lmeShqc29uKTtcbi8vICAgICB9KTtcbi8vIH0pO1xuLy8gLy8gZm9ybTIuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4vLyAvLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbi8vIC8vICAgICBjb25zdCB1c2VySWRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1c2VyaWRcIikgYXMgSFRNTElucHV0RWxlbWVudDtcbi8vIC8vICAgICBjb25zdCB1c2VySWQgPSB1c2VySWRFbGVtZW50LnZhbHVlO1xuLy8gLy8gICAgIEdldEFsbFVzZXJDb25jZXB0cyhOdW1iZXIodXNlcklkKSk7XG4vLyAvLyAgICAgR2V0QWxsVXNlckNvbm5lY3Rpb25zKE51bWJlcih1c2VySWQpKS50aGVuKCgpPT57XG4vLyAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwiZ290IGFsbCB0aGUgZGF0YVwiKTtcbi8vIC8vICAgICB9KTtcbi8vIC8vICB9KTtcbi8vIHdpbmRvdy5vbm1vdXNlZG93biA9IChldjogTW91c2VFdmVudCk6IGFueSA9PiB7XG4vLyAgICAgdmFyIGlzTW91c2VEb3duID0gdHJ1ZTtcbi8vICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI215Q2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG4vLyAgICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpIGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCA7XG4vLyAgICAgdmFyIF9kaWZmZXJlbmNlX2Zyb21fd2luZG93ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuLy8gICAgIHZhciB3aWR0aF9kaWZmZXJlbmNlID0gMDtcbi8vICAgICB2YXIgaGVpZ2h0X2RpZmZlcmVuY2UgPSAwO1xuLy8gICAgIC8vVXBkYXRlIG1vdXNlIHBvc2l0aW9uIGF0IHRpbWUgb2YgZG93blxuLy8gICAgIHZhciBtb3VzZV94X2Nvb3JkaW5hdGUgPSBldi54IC0gX2RpZmZlcmVuY2VfZnJvbV93aW5kb3cubGVmdCArIHdpbmRvdy5zY3JvbGxYO1xuLy8gICAgIHZhciBtb3VzZV95X2Nvb3JkaW5hdGUgPSBldi55IC0gX2RpZmZlcmVuY2VfZnJvbV93aW5kb3cudG9wICsgd2luZG93LnNjcm9sbFk7XG4vLyAgICAgdmFyIHNlbGVjdGVkX2NvbmNlcHRfb2JqZWN0ID0gc2VsZWN0Q29uY2VwdE9iamVjdChtb3VzZV94X2Nvb3JkaW5hdGUsIG1vdXNlX3lfY29vcmRpbmF0ZSk7XG4vLyAgICAgd2luZG93Lm9ubW91c2Vtb3ZlID0gKGV2OiBNb3VzZUV2ZW50KTogYW55ID0+IHtcbi8vICAgICAgICAgdmFyIHByZXZpb3VzX21vdXNlX3ggPSBtb3VzZV94X2Nvb3JkaW5hdGU7XG4vLyAgICAgICAgIHZhciBwcmV2aW91c19tb3VzZV95ID0gbW91c2VfeV9jb29yZGluYXRlO1xuLy8gICAgICAgICB2YXIgbmV3X21vdXNlX3hfY29vcmRpbmF0ZSA9IGV2LnggLSBfZGlmZmVyZW5jZV9mcm9tX3dpbmRvdy5sZWZ0ICsgd2luZG93LnNjcm9sbFg7XG4vLyAgICAgICAgIHZhciBuZXdfbW91c2VfeV9jb29yZGluYXRlID0gZXYueSAtIF9kaWZmZXJlbmNlX2Zyb21fd2luZG93LnRvcCArIHdpbmRvdy5zY3JvbGxZO1xuLy8gICAgICAgICAvL2hvdyBtdWNoIGRpZCB0aGUgbW91c2UgbW92ZVxuLy8gICAgICAgICB2YXIgbW91c2VfeF9kaWZmZXJlbmNlID0gbmV3X21vdXNlX3hfY29vcmRpbmF0ZSAtIHByZXZpb3VzX21vdXNlX3g7XG4vLyAgICAgICAgIHZhciBtb3VzZV95X2RpZmZlcmVuY2UgPSBuZXdfbW91c2VfeV9jb29yZGluYXRlIC0gcHJldmlvdXNfbW91c2VfeTtcbi8vICAgICAgICAgaWYoc2VsZWN0ZWRfY29uY2VwdF9vYmplY3Qpe1xuLy8gICAgICAgICAgICAgaWYoaXNNb3VzZURvd24pe1xuLy8gICAgICAgICAgICAgICAgIHNlbGVjdGVkX2NvbmNlcHRfb2JqZWN0LnggPSBuZXdfbW91c2VfeF9jb29yZGluYXRlO1xuLy8gICAgICAgICAgICAgICAgIHNlbGVjdGVkX2NvbmNlcHRfb2JqZWN0LnkgPSBuZXdfbW91c2VfeV9jb29yZGluYXRlO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gICAgIHdpbmRvdy5vbm1vdXNldXAgPSAoZXY6IE1vdXNlRXZlbnQpOiBhbnkgPT4ge1xuLy8gICAgICAgICBpc01vdXNlRG93biA9IGZhbHNlO1xuLy8gICAgICAgICBzZWxlY3RlZF9jb25jZXB0X29iamVjdCAgPSBudWxsO1xuLy8gICAgIH1cbi8vfVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2FwcC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==