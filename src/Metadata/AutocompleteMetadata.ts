export type TsccsAutocompleteEntry = {
  parameters: string[];
  documentation?: string;
};

export type TsccsAutocompleteMetadata = Record<string, Record<string, TsccsAutocompleteEntry>>;

export const tsccsAutocompleteMetadata: TsccsAutocompleteMetadata = {
  "AccessTracker": {
    "GetSuggestedConcepts": {
      "parameters": [
        "top"
      ],
      "documentation": "Fetch suggested concepts from the server with proper error handling."
    },
    "GetSuggestedConnections": {
      "parameters": [
        "top"
      ],
      "documentation": "Fetch suggested connections from the server with proper error handling.\nParam: top number of connections to get load"
    },
    "addConceptToBinaryTree": {
      "parameters": [
        "conceptsDataArray"
      ],
      "documentation": "Add Concepts to Binary Tree"
    },
    "addConnectionToBinaryTree": {
      "parameters": [
        "connectionsDataArray"
      ],
      "documentation": "Add Concepts to Binary Tree"
    },
    "getTopConcepts": {
      "parameters": [
        "n"
      ],
      "documentation": "Retrieves the top N concepts by their counts."
    },
    "getTopConnections": {
      "parameters": [
        "n"
      ],
      "documentation": "Retrieves the top N connections by their counts."
    },
    "incrementConcept": {
      "parameters": [
        "conceptId"
      ],
      "documentation": "Increments the count for a specific conceptId."
    },
    "incrementConnection": {
      "parameters": [
        "connectionId"
      ],
      "documentation": "Increments the count for a specific connectionId."
    },
    "loadDataFromLocalStorage": {
      "parameters": [],
      "documentation": "Loads the concept and connection data from localStorage."
    },
    "saveDataToLocalStorage": {
      "parameters": [],
      "documentation": "Saves the concept and connection data to localStorage."
    },
    "sendToServer": {
      "parameters": []
    },
    "setNextSyncTime": {
      "parameters": [],
      "documentation": "Sets the next sync time based on the current time and sync interval."
    },
    "startAutoSync": {
      "parameters": [],
      "documentation": "Starts auto-syncing to the server every specified time interval.\nThis will automatically call `syncToServer` every 5 minutes"
    },
    "stopAutoSync": {
      "parameters": [],
      "documentation": "Stops the access tracker auto-sync timer."
    },
    "syncNow": {
      "parameters": [],
      "documentation": "Sync immediately called by setInterval when time to sync has arrived."
    },
    "syncToServer": {
      "parameters": [],
      "documentation": "Syncs the concept and connection data with the server."
    }
  },
  "Anomaly": {
    "checkAnomalyInBulk": {
      "parameters": [
        "formData"
      ],
      "documentation": "Checks anomalies for multiple concepts in bulk.\nIterates over a record of concept-value pairs and detects anomalies.\n\nParam: {Record<string, string>} instanceData - An object where each key is a concept type and each value is the corresponding data value.\nReturns: {Promise<Record<string, { valid: boolean, warnings: string[] }>>} - A promise that resolves to an object where each key is a concept type\nand the value is an object containing `valid` (boolean) and `warnings` (array of warning messages)."
    },
    "checkConceptAnomaly": {
      "parameters": [
        "typeConcept",
        "value"
      ],
      "documentation": "Checks whether a given concept and value pair contains an anomaly.\nAn anomaly is detected based on the concept's length and type rules.\n\nParam: {string} typeConcept - The concept type (e.g., `the_name`).\nParam: {string} value - The value to check for anomalies.\nReturns: {Promise<{ valid: boolean, warnings: string[] }>} - A promise that resolves to an object containing:\n- `valid`: A boolean indicating whether the value is valid according to the anomaly rules.\n- `warnings`: An array of warning messages related to the value's anomalies."
    },
    "detectDataType": {
      "parameters": [
        "value"
      ],
      "documentation": "Detects the data type of a given value based on predefined rules.\nIt checks the value against the `DATA_TYPES_RULES` to find the matching data type.\n\nParam: {string} value - The value to check.\nReturns: {string | null} - The detected data type, or `null` if no match is found."
    },
    "fetchAnomalyParameters": {
      "parameters": [],
      "documentation": "Fetches anomaly parameters directly from the backend API.\nThis method is used internally by `getAnomalyParameters` to retrieve fresh data.\n\nReturns: {Promise<any>} - A promise that resolves to the fetched anomaly parameters."
    },
    "getAnomalyParameters": {
      "parameters": [],
      "documentation": "Fetches the anomaly parameters.\nIt first checks if the parameters are cached and whether the cache is still valid (not expired).\nIf the cache is valid, it returns the cached data. If not, it fetches the data from the API.\n\nReturns: {Promise<any>} - A promise that resolves to the anomaly parameters."
    },
    "getExportedFunction": {
      "parameters": [],
      "documentation": "List all the exported functions of the package\nReturns: Keys of the Object which has exported functions"
    },
    "getFunctionaAnomalyParameters": {
      "parameters": []
    },
    "initializeAnomalyParameters": {
      "parameters": [],
      "documentation": "Initializes the anomaly parameters by fetching them from the API.\nThis method is only run once on startup to ensure the cache is ready for use.\nIt will fetch the parameters from the API and store them in a static cache.\n\nReturns: {Promise<void>} - A promise that resolves once the parameters have been initialized."
    },
    "refreshCache": {
      "parameters": [],
      "documentation": "Refreshes the anomaly parameters cache if the cache has expired.\nIf the cache expiry threshold has been surpassed, the method re-fetches the data from the API.\n\nReturns: {Promise<void>} - A promise that resolves when the cache has been refreshed."
    }
  },
  "BaseUrl": {
    "CreateGhostConceptApiUrl": {
      "parameters": [
        "withAuth"
      ]
    },
    "CreateGhostConnectionApiUrl": {
      "parameters": []
    },
    "CreatePrototypeUrl": {
      "parameters": []
    },
    "CreateSessionId": {
      "parameters": []
    },
    "CreateSessionVisitUrl": {
      "parameters": []
    },
    "CreateTheCharacterDataUrl": {
      "parameters": []
    },
    "CreateTheConceptUrl": {
      "parameters": []
    },
    "CreateTheConnectionNewUrl": {
      "parameters": []
    },
    "CreateTheConnectionUrl": {
      "parameters": []
    },
    "CreateTheTextDataUrl": {
      "parameters": []
    },
    "DeleteConceptUrl": {
      "parameters": []
    },
    "DeleteTheConnectionBulkUrl": {
      "parameters": []
    },
    "DeleteTheConnectionUrl": {
      "parameters": []
    },
    "DeleteUserUrl": {
      "parameters": []
    },
    "FreeschemaQueryUrl": {
      "parameters": []
    },
    "GetAllAiData": {
      "parameters": []
    },
    "GetAllConceptsByTypeUrl": {
      "parameters": []
    },
    "GetAllConceptsOfUserUrl": {
      "parameters": []
    },
    "GetAllConnectionsOfCompositionBulkUrl": {
      "parameters": []
    },
    "GetAllConnectionsOfCompositionUrl": {
      "parameters": []
    },
    "GetAllConnectionsOfConceptUrl": {
      "parameters": []
    },
    "GetAllConnectionsOfUserUrl": {
      "parameters": []
    },
    "GetAllConnectionsToConceptUrl": {
      "parameters": []
    },
    "GetAllLinkerConnectionOfConceptUrl": {
      "parameters": []
    },
    "GetAllLinkerConnectionToConceptUrl": {
      "parameters": []
    },
    "GetAllPrefetchConnectionsUrl": {
      "parameters": []
    },
    "GetCachedImage": {
      "parameters": [
        "ImageName"
      ]
    },
    "GetCharacterByCharacterUrl": {
      "parameters": []
    },
    "GetCompositionConnectionBetweenTwoConceptsUrl": {
      "parameters": []
    },
    "GetConceptBulkUrl": {
      "parameters": []
    },
    "GetConceptByCharacterAndCategoryDirectUrl": {
      "parameters": []
    },
    "GetConceptByCharacterAndCategoryUrl": {
      "parameters": []
    },
    "GetConceptByCharacterAndTypeUrl": {
      "parameters": []
    },
    "GetConceptByCharacterValueUrl": {
      "parameters": []
    },
    "GetConceptUrl": {
      "parameters": []
    },
    "GetConnectionBulkUrl": {
      "parameters": []
    },
    "GetConnectionUrl": {
      "parameters": []
    },
    "GetConnectionsBetweenUrl": {
      "parameters": []
    },
    "GetInstanceConceptByCharacterTypeUrl": {
      "parameters": []
    },
    "GetRealConceptById": {
      "parameters": []
    },
    "GetReservedConnectionIdUrl": {
      "parameters": []
    },
    "GetReservedIdUrl": {
      "parameters": []
    },
    "GetSuggestedConcepts": {
      "parameters": []
    },
    "GetSuggestedConnections": {
      "parameters": []
    },
    "GetTypeConceptBulk": {
      "parameters": []
    },
    "LogHealth": {
      "parameters": []
    },
    "LoginUrl": {
      "parameters": []
    },
    "MakeTheNameInBackendUrl": {
      "parameters": []
    },
    "MakeTheTypeConceptUrl": {
      "parameters": []
    },
    "PostLogger": {
      "parameters": []
    },
    "PostPrefetchConceptConnections": {
      "parameters": []
    },
    "RecursiveSearchUrl": {
      "parameters": []
    },
    "RefreshTokenUrl": {
      "parameters": []
    },
    "SearchAllTypeWithLinker": {
      "parameters": [
        "auth"
      ]
    },
    "SearchCompositionsUrl": {
      "parameters": []
    },
    "SearchInternalWithAuthenticatedCcsUrl": {
      "parameters": []
    },
    "SearchInternalWithCcsUrl": {
      "parameters": []
    },
    "SearchLinkMultipleAll": {
      "parameters": []
    },
    "SearchLinkMultipleAllApiUrl": {
      "parameters": []
    },
    "SignupUrl": {
      "parameters": []
    },
    "UploadFileLimitUrl": {
      "parameters": []
    },
    "ViewInternalDataUrl": {
      "parameters": []
    },
    "getAppConfig": {
      "parameters": []
    },
    "getConnectionsByTypes": {
      "parameters": []
    },
    "getLatestWidgetData": {
      "parameters": []
    },
    "getRandomizer": {
      "parameters": []
    },
    "getRecentWidgetData": {
      "parameters": []
    },
    "getWidgetData": {
      "parameters": []
    },
    "r2PresignedUploadUrl": {
      "parameters": []
    },
    "sendBulkMail": {
      "parameters": []
    },
    "sendMail": {
      "parameters": []
    },
    "sendPersonalMail": {
      "parameters": []
    },
    "setRandomizer": {
      "parameters": [
        "id"
      ]
    },
    "uploadFileUrl": {
      "parameters": []
    },
    "uploadImageUrl": {
      "parameters": []
    },
    "uploadImageUrlWithSmall": {
      "parameters": []
    },
    "uploadR2StorageUrl": {
      "parameters": []
    }
  },
  "BinaryTree": {
    "addConceptToTree": {
      "parameters": [
        "concept"
      ],
      "documentation": "Adds a concept to both the ID map and the character tree.\n\nThe character tree (BinaryCharacterTree) is still an AVL tree because\nit supports character-based search which is out of scope for this refactor.\n\nParam: concept - The Concept to store"
    },
    "addNodeToTree": {
      "parameters": [
        "node"
      ],
      "documentation": "Low-level add — stores the node's key/value in the Map.\nKept for API compatibility (called internally by addConceptToTree).\nParam: node - Node with numeric key and Concept value"
    },
    "checkFlag": {
      "parameters": [
        "resolve"
      ],
      "documentation": "Recursive polling helper for waitForDataToLoad"
    },
    "countNumberOfNodes": {
      "parameters": [],
      "documentation": "Returns the total number of concepts stored.\nReturns: Number of concepts in the Map"
    },
    "getConceptListFromIds": {
      "parameters": [
        "ids",
        "conceptArray",
        "remainingIds"
      ],
      "documentation": "Bulk concept retrieval by ID list.\n\nFor each ID found in the Map, pushes the Concept into conceptArray\nand removes the ID from the ids array. IDs remaining in the array\nafter this call are \"not found\" and will be fetched from the backend.\n\nPerformance: O(k) where k = ids.length (was O(N) full tree traversal).\n\nParam: ids - Array of concept IDs to look up (mutated: found IDs are spliced out)\nParam: conceptArray - Output array (mutated: found Concepts are pushed)\nParam: remainingIds - Not used directly but kept for API compatibility"
    },
    "getNodeFromTree": {
      "parameters": [
        "id"
      ],
      "documentation": "Retrieves a concept by ID from the Map.\n\nReturns a { key, value } wrapper matching the Node shape that callers expect.\nCallers access the returned object's .value property to get the Concept.\n\nParam: id - The concept ID to look up\nReturns: Node-like wrapper with .value = Concept, or null if not found"
    },
    "normalizeId": {
      "parameters": [
        "id"
      ]
    },
    "removeNodeFromTree": {
      "parameters": [
        "id"
      ],
      "documentation": "Removes a concept by ID. Dispatches an event before deletion\nso listeners (e.g. UI components) can react to the removal.\n\nParam: id - The concept ID to remove"
    },
    "waitForDataToLoad": {
      "parameters": [],
      "documentation": "Polls until IdentifierFlags.isDataLoaded is true (max 25 seconds).\nUsed by callers that need to wait for the initial IndexedDB load to finish."
    }
  },
  "BuilderStatefulWidget": {
    "CreateConnectionBetweenEntityLocal": {
      "parameters": [
        "concept1Data",
        "concept2Data",
        "linker"
      ],
      "documentation": "Creates a local connection between two concepts with a specified linker type.\n\nThis helper method creates a connection relationship between two entity concepts\nusing local storage (not immediately synced to backend). The linker name is\nautomatically prefixed with the first concept's type to create a typed connection.\n\n**Process:**\n1. Extracts userId from first concept\n2. Creates linker name: \"{concept1Type}_{linkerName}\"\n3. Creates or gets the connection type concept locally\n4. Creates the connection between the two concepts\n\n**Use Cases:**\n- Creating relationships in offline mode\n- Building entity associations within widgets\n- Temporary connections before sync\n- Development/testing without backend\n\nParam: concept1Data - The source concept (FROM)\nParam: concept2Data - The target concept (TO)\nParam: linker - The relationship name (e.g., \"email\", \"phone\", \"address\")\nThis will be prefixed with concept1's type\n\nReturns: Promise resolving to \"connection created\" string"
    },
    "after_render": {
      "parameters": [],
      "documentation": "Executes event binding code after the widget renders.\n\nThis lifecycle method runs after the DOM is updated to attach event listeners\nand perform post-render operations. It executes user-defined code stored in\naddEventFunction.\n\n**Lifecycle Position:**\nRuns after render() completes and DOM is updated.\n\n**Common Uses:**\n- Attach click, input, or other event listeners\n- Set up keyboard shortcuts\n- Initialize interactive features\n- Bind form validation\n- Set up drag-and-drop handlers\n\n@throws Will log and re-throw errors if event binding code fails"
    },
    "before_render": {
      "parameters": [],
      "documentation": "Executes the componentDidMount lifecycle hook.\n\nThis function is called after the component mounts to the DOM, similar to\nReact's componentDidMount. It executes user-defined initialization code\nstored in componentDidMountFunction.\n\n**Lifecycle Position:**\nRuns after render_custom_functions() and render_widgetDependencies(),\nbut before mount_child().\n\n**Common Uses:**\n- Fetch initial data from API\n- Set up subscriptions or listeners\n- Initialize third-party libraries\n- Perform DOM manipulations\n- Set initial state based on props\n\n@throws Will log and re-throw errors if componentDidMount code fails"
    },
    "createRandomNumber": {
      "parameters": [],
      "documentation": "Generates a random identifier for this widget element.\n\nReturns: A random number used as the element identifier"
    },
    "createTypeEditor": {
      "parameters": [
        "event"
      ],
      "documentation": "Opens the type editor interface for this widget.\n\nThis method is called in development mode when the widget is clicked.\nIt opens a visual editor for modifying the widget's type and properties.\n\nParam: event - The click event that triggered the editor"
    },
    "getHtml": {
      "parameters": [],
      "documentation": "Returns the HTML content of this widget.\n\nReturns: The HTML string for this widget"
    },
    "getTypeValueList": {
      "parameters": [
        "typeName"
      ],
      "documentation": "Fetches a list of type values from the backend based on the widget's type.\n\nThis method performs a filtered search using FreeschemaQuery to retrieve all entities\nof a specific type. The results are formatted as options for dropdowns or selection lists.\n\n**Process:**\n1. Parses widgetType to extract main composition and type-value key\n2. Creates filter for entities (e.g., filter by ID > 1)\n3. Executes FreeschemaQuery with filters\n4. Formats results into { id, name, text } objects\n5. Stores in this.typeValueList\n\n**Type Name Format:**\n- widgetType: \"the_element_name\"\n- mainComposition: \"the_element\"\n- typevalueKey: \"the_name\"\n\nParam: typeName - Optional type name (defaults to this.widgetType)\n\nReturns: Promise resolving to array of formatted type values:\n[{ id: number, name: string, text: string }, ...]"
    },
    "getUserId": {
      "parameters": [],
      "documentation": "Retrieves the current user's ID from local storage.\n\nThis method fetches the user profile from localStorage and extracts the userId.\nUsed for user-specific operations and data access within widgets.\n\nReturns: Promise resolving to the user ID (number) or undefined if not found"
    },
    "mount": {
      "parameters": [
        "parent"
      ],
      "documentation": "Mounts the widget to a parent DOM element and initializes the lifecycle.\n\nThis is the primary method for rendering a widget to the DOM. It:\n1. Creates a wrapper div element\n2. Attaches click handlers (if in development mode)\n3. Inserts HTML content\n4. Executes lifecycle hooks in order\n5. Mounts child widgets\n\n**Lifecycle Execution Order:**\n1. render_custom_functions() - Execute custom functions\n2. render_widgetDependencies() - Load dependencies\n3. before_render() - componentDidMount equivalent\n4. mount_child() - Mount child widgets\n5. render() - Update DOM\n\n**Development Mode:**\nWhen `inDevelopment` is true, the widget becomes clickable and opens\nthe type editor for visual configuration.\n\nParam: parent - The parent HTMLElement to mount this widget to"
    },
    "mount_child": {
      "parameters": [],
      "documentation": "Mounts child widgets by executing the mountChildWidgetsFunction.\n\nThis method dynamically executes user-defined JavaScript code for mounting\nchild widgets. The code is executed within the widget's context with access\nto the tsccs package.\n\n**Execution Context:**\n- Code is bound to `this` (the widget instance)\n- Has access to `tsccs` module for TSCCS operations\n- Runs asynchronously\n\n@throws Will log and re-throw errors if mount_child code fails"
    },
    "render_custom_functions": {
      "parameters": [],
      "documentation": "Executes all custom functions defined for this widget.\n\nThis method runs during the mount phase to execute user-defined custom\nfunctions. All functions in the customFunctions array are concatenated\nand executed together in the widget's context.\n\n**Custom Functions:**\n- Defined in widget.customFunctions array\n- Each function is a TCustomFunction object with a code property\n- All functions execute with access to `this` (widget) and `tsccs` module\n- Functions can define methods, initialize state, or set up utilities\n\n@throws Will log and re-throw errors if custom function code fails"
    },
    "render_widgetDependencies": {
      "parameters": [],
      "documentation": "Executes widget dependencies initialization code.\n\nThis lifecycle method runs during the mount phase to load and initialize\nany dependencies required by the widget. Dependencies code is executed\nwith access to the tsccs module.\n\n**Execution:**\n- Runs before before_render()\n- Code in widgetDependenciesData is executed\n- Bound to widget context (this)\n- Has access to tsccs package\n\n@throws Will log and re-throw errors if dependency code fails"
    },
    "setProperty": {
      "parameters": [
        "widgetTypeName"
      ],
      "documentation": "Sets the widget type and fetches associated type values.\n\nThis method updates the widget's type, fetches the corresponding type values\nfrom the backend, updates DOM attributes, and triggers a re-render.\n\nParam: widgetTypeName - The new widget type name (e.g., \"the_person_name\")\n\nReturns: Promise resolving to this widget instance (for method chaining)"
    },
    "setTitle": {
      "parameters": [
        "title"
      ],
      "documentation": "Sets the browser document title.\n\nParam: title - The title string to set as the document title"
    }
  },
  "Composition": {
    "GetDataCache": {
      "parameters": []
    },
    "UpdateAcrossDistributedSystem": {
      "parameters": []
    },
    "isUpdating": {
      "parameters": []
    },
    "updateCache": {
      "parameters": []
    }
  },
  "CompositionBinaryTree": {
    "addCompositionToTree": {
      "parameters": [
        "composition"
      ]
    },
    "addNodeToTree": {
      "parameters": [
        "node"
      ]
    },
    "countNumberOfNodes": {
      "parameters": []
    },
    "getNodeFromTree": {
      "parameters": [
        "id"
      ]
    },
    "removeNodeFromTree": {
      "parameters": [
        "id"
      ]
    }
  },
  "CompositionNode": {
    "addNode": {
      "parameters": [
        "passedNode",
        "node",
        "height"
      ]
    },
    "countNodeBelow": {
      "parameters": [
        "root"
      ]
    },
    "getBalanceFactor": {
      "parameters": [
        "N"
      ]
    },
    "getFromNode": {
      "parameters": [
        "id",
        "node"
      ]
    },
    "getHeight": {
      "parameters": [
        "node"
      ]
    },
    "inOrderSuccessor": {
      "parameters": [
        "root"
      ]
    },
    "isValid": {
      "parameters": []
    },
    "leftRotate": {
      "parameters": [
        "x"
      ]
    },
    "removeNode": {
      "parameters": [
        "passedNode",
        "id"
      ]
    },
    "rightRotate": {
      "parameters": [
        "y"
      ]
    },
    "saveToCache": {
      "parameters": [
        "data"
      ]
    }
  },
  "Concept": {
    "getType": {
      "parameters": []
    }
  },
  "ConceptsData": {
    "AddConcept": {
      "parameters": [
        "concept"
      ]
    },
    "AddConceptTemporary": {
      "parameters": [
        "concept"
      ]
    },
    "AddConceptToMemory": {
      "parameters": [
        "concept"
      ]
    },
    "AddConceptToStorage": {
      "parameters": [
        "concept"
      ]
    },
    "AddNpc": {
      "parameters": [
        "id"
      ]
    },
    "AddWidget": {
      "parameters": [
        "widgetDetails"
      ]
    },
    "CheckContains": {
      "parameters": [
        "concept"
      ]
    },
    "GetBinaryCharacterTree": {
      "parameters": []
    },
    "GetConcept": {
      "parameters": [
        "id"
      ]
    },
    "GetConceptBulkData": {
      "parameters": [
        "ids",
        "connectionArray",
        "remainingIds"
      ]
    },
    "GetConceptByCharacter": {
      "parameters": [
        "characterValue"
      ]
    },
    "GetConceptByCharacterAndCategoryLocal": {
      "parameters": [
        "character_value",
        "categoryId"
      ]
    },
    "GetConceptByCharacterAndTypeLocal": {
      "parameters": [
        "character_value",
        "typeId"
      ]
    },
    "GetConceptByCharacterUpdated": {
      "parameters": [
        "characterValue"
      ]
    },
    "GetConceptsByTypeId": {
      "parameters": [
        "typeId"
      ]
    },
    "GetConceptsByTypeIdAndUser": {
      "parameters": [
        "typeId",
        "userId"
      ]
    },
    "GetNpc": {
      "parameters": [
        "id"
      ]
    },
    "GetWidget": {
      "parameters": [
        "id"
      ]
    },
    "RemoveConcept": {
      "parameters": [
        "concept"
      ]
    },
    "RemoveWidget": {
      "parameters": [
        "id"
      ]
    },
    "getName": {
      "parameters": []
    }
  },
  "Connection": {},
  "ConnectionData": {
    "AddConnection": {
      "parameters": [
        "connection"
      ]
    },
    "AddConnectionToMemory": {
      "parameters": [
        "connection"
      ]
    },
    "AddConnectionToStorage": {
      "parameters": [
        "connection"
      ]
    },
    "AddNpConn": {
      "parameters": [
        "id"
      ]
    },
    "AddToDictionary": {
      "parameters": [
        "connection"
      ]
    },
    "CheckContains": {
      "parameters": [
        "connection"
      ]
    },
    "GetConnection": {
      "parameters": [
        "id"
      ]
    },
    "GetConnectionBulkData": {
      "parameters": [
        "ids",
        "connectionArray",
        "remainingIds"
      ]
    },
    "GetConnectionByOfTheConceptAndType": {
      "parameters": [
        "ofTheConceptId",
        "typeId"
      ]
    },
    "GetConnectionByOfType": {
      "parameters": [
        "ofTheConceptId",
        "typeId"
      ]
    },
    "GetConnectionTree": {
      "parameters": []
    },
    "GetConnectionTypeOfTree": {
      "parameters": []
    },
    "GetConnectionTypeTree": {
      "parameters": []
    },
    "GetConnectionsOfCompositionLocal": {
      "parameters": [
        "id"
      ]
    },
    "GetConnectionsOfConcept": {
      "parameters": [
        "id"
      ]
    },
    "GetNpConn": {
      "parameters": [
        "id"
      ]
    },
    "RemoveConnection": {
      "parameters": [
        "connection"
      ]
    },
    "getName": {
      "parameters": []
    }
  },
  "CountInfo": {},
  "DependencyObserver": {
    "addTrackedEventListener": {
      "parameters": [
        "key",
        "eventName",
        "handler"
      ],
      "documentation": "Registers a window listener and tracks enough metadata to remove it later.\nThe key identifies the logical subscription; eventName is the CustomEvent name."
    },
    "bind": {
      "parameters": [],
      "documentation": "Binds and refreshes the observable data. Override in subclasses to implement specific data fetching logic.\nReturns: The bound data"
    },
    "dispose": {
      "parameters": [],
      "documentation": "Removes all listeners owned by this observer."
    },
    "execute": {
      "parameters": [],
      "documentation": "Executes the observable once without subscribing to updates.\nReturns: The executed data"
    },
    "listenToEvent": {
      "parameters": [
        "id"
      ],
      "documentation": "Listens to connection changes for a specific concept and updates subscribers when connections are modified.\nParam: id - The concept ID to track"
    },
    "listenToEventConnectionType": {
      "parameters": [
        "id",
        "connectionType"
      ],
      "documentation": "Listens to connection changes filtered by connection type for a specific concept.\nParam: id - The concept ID to track\nParam: connectionType - The connection type ID to filter by"
    },
    "listenToEventType": {
      "parameters": [
        "id"
      ],
      "documentation": "Listens to changes for a specific concept type and updates subscribers when new concepts of that type are created.\nParam: id - The type concept ID to track"
    },
    "notify": {
      "parameters": [],
      "documentation": "Notifies all subscribers with the current data."
    },
    "onDispose": {
      "parameters": [],
      "documentation": "Hook for subclasses that maintain additional subscriptions."
    },
    "removeListenToEvent": {
      "parameters": [
        "id"
      ],
      "documentation": "Removes an event listener for a specific concept ID.\nParam: id - The concept ID to stop tracking"
    },
    "removeTrackedEventListener": {
      "parameters": [
        "key"
      ],
      "documentation": "Removes a previously tracked window listener by its logical key."
    },
    "run": {
      "parameters": [],
      "documentation": "Executes the observable without subscribing. Override in subclasses for non-reactive data fetching.\nReturns: The executed data"
    },
    "subscribe": {
      "parameters": [
        "callback",
        "errorCallback"
      ],
      "documentation": "Subscribes a callback to receive data updates whenever tracked concepts/connections change.\nParam: callback - Function to call with (data, observer) when updates occur\nParam: errorCallback - Optional function to call when errors occur\nReturns: Result of calling the callback with current data"
    },
    "unsubscribe": {
      "parameters": [
        "callback"
      ],
      "documentation": "Removes a callback from the subscriber list.\nParam: callback - The callback function to remove\nReturns: Number of remaining subscribers"
    },
    "update": {
      "parameters": [],
      "documentation": "Forces a data refresh and notifies all subscribers."
    }
  },
  "Environments": {
    "getValue": {
      "parameters": [
        "key",
        "defaultValue"
      ],
      "documentation": "Retrieves a stored value by key.\n\nParam: key - The key to look up.\nParam: defaultValue - Value returned when the key has never been set. Defaults to `null`.\nReturns: The stored value, or `defaultValue` if the key is absent."
    },
    "setValue": {
      "parameters": [
        "key",
        "value"
      ],
      "documentation": "Stores a value under the given key. Overwrites any existing value.\nTakes effect immediately — the next call to `getValue` with the same key\nreturns the new value.\n\nParam: key - The key to store under.\nParam: value - The value to store.\nReturns: The `Environments` class itself for chaining."
    }
  },
  "FilterSearch": {},
  "FreeschemaQuery": {},
  "LConcept": {
    "getType": {
      "parameters": []
    }
  },
  "LConnection": {},
  "LocalConceptsData": {
    "AddConcept": {
      "parameters": [
        "concept"
      ]
    },
    "AddConceptToMemory": {
      "parameters": [
        "concept"
      ]
    },
    "AddPermanentConcept": {
      "parameters": [
        "concept"
      ]
    },
    "ClearData": {
      "parameters": []
    },
    "GetConcept": {
      "parameters": [
        "id"
      ]
    },
    "GetConceptByCharacter": {
      "parameters": [
        "characterValue"
      ]
    },
    "GetConceptByCharacterAndCategoryLocal": {
      "parameters": [
        "character_value",
        "categoryId"
      ]
    },
    "GetConceptByCharacterAndTypeLocal": {
      "parameters": [
        "character_value",
        "typeId"
      ]
    },
    "GetConceptByGhostId": {
      "parameters": [
        "id"
      ]
    },
    "GetConceptsByTypeId": {
      "parameters": [
        "typeId"
      ]
    },
    "GetConceptsByTypeIdAndUser": {
      "parameters": [
        "typeId",
        "userId"
      ]
    },
    "RemoveConcept": {
      "parameters": [
        "concept"
      ]
    },
    "RemoveConceptById": {
      "parameters": [
        "conceptId"
      ]
    },
    "UpdateConceptSyncStatus": {
      "parameters": [
        "id"
      ]
    },
    "getName": {
      "parameters": []
    }
  },
  "LocalSyncData": {
    "AddConcept": {
      "parameters": [
        "concept"
      ]
    },
    "AddConceptIfDoesNotExist": {
      "parameters": [
        "concept",
        "conceptList"
      ]
    },
    "AddConnection": {
      "parameters": [
        "connection"
      ]
    },
    "CheckContains": {
      "parameters": [
        "concept"
      ]
    },
    "CheckContainsConnection": {
      "parameters": [
        "connection"
      ]
    },
    "CheckIfTheConceptIdExists": {
      "parameters": [
        "id",
        "conceptList"
      ]
    },
    "ConvertGhostIdsInConnections": {
      "parameters": [
        "connectionArray"
      ]
    },
    "RemoveConcept": {
      "parameters": [
        "concept"
      ]
    },
    "RemoveConnection": {
      "parameters": [
        "connection"
      ]
    },
    "RemoveConnectionById": {
      "parameters": [
        "connectionId"
      ]
    },
    "SyncDataDelete": {
      "parameters": [
        "id"
      ]
    },
    "SyncDataOnline": {
      "parameters": [
        "transactionId",
        "actions",
        "withAuth"
      ]
    },
    "SyncDataOnlineWithoutAuth": {
      "parameters": [
        "transactionId",
        "actions",
        "withAuth"
      ]
    },
    "UpdateConceptListToIncludeRelatedConcepts": {
      "parameters": [
        "connectionArray",
        "conceptsArray"
      ]
    },
    "initializeTransaction": {
      "parameters": [
        "transactionId"
      ]
    },
    "markTransactionActions": {
      "parameters": [
        "transactionId",
        "actions"
      ]
    },
    "rollbackTransaction": {
      "parameters": [
        "transactionId",
        "actions"
      ]
    },
    "syncDataLocalDb": {
      "parameters": []
    }
  },
  "LocalTransaction": {
    "CreateConnection": {
      "parameters": [
        "ofTheConcept",
        "toTheConcept",
        "connectionTypeString"
      ]
    },
    "CreateConnectionBetweenEntityLocal": {
      "parameters": [
        "concept1Data",
        "concept2Data",
        "linker"
      ]
    },
    "CreateConnectionBetweenTwoConceptsLocal": {
      "parameters": [
        "ofTheConcept",
        "toTheConcept",
        "linker",
        "both"
      ]
    },
    "CreateTheCompositionLocal": {
      "parameters": [
        "json",
        "ofTheConceptId",
        "ofTheConceptUserId",
        "mainKey",
        "userId",
        "accessId",
        "sessionInformationId",
        "automaticSync"
      ]
    },
    "CreateTheConceptLocal": {
      "parameters": [
        "referent",
        "typecharacter",
        "userId",
        "categoryId",
        "typeId",
        "accessId",
        "isComposition",
        "referentId",
        "actions"
      ]
    },
    "CreateTheConnectionLocal": {
      "parameters": [
        "ofTheConceptId",
        "toTheConceptId",
        "typeId",
        "orderId",
        "typeString",
        "userId"
      ]
    },
    "DeleteConnectionsBetween": {
      "parameters": [
        "query"
      ],
      "documentation": "Queries the backend for connections matching the given criteria and queues all\nreturned connection IDs for bulk deletion when commitTransaction() is called.\n\n**Nothing is deleted until commitTransaction() is called.**\nCalling rollbackTransaction() discards the queue without touching the backend.\n\nSupported query permutations:\n1. `ofTheConceptId` + `toTheConceptId` + `type` — connections between two specific concepts\n2. `ofTheConceptId` + `type`                    — all connections FROM a concept of that type\n3. `toTheConceptId` + `type`                    — all connections TO a concept of that type\n4. `typeId` + `isComposition: true`             — all internal connections of a composition\n\nFor multiple queries in one go use {@link DeleteConnectionsBetweenBulk} — it sends\nall queries in a single HTTP request.\n\nParam: query - Partial FetchConnectionQuery with only the fields relevant to your permutation.\nReturns: The connection IDs queued for deletion by this call."
    },
    "DeleteConnectionsBetweenBulk": {
      "parameters": [
        "queries"
      ],
      "documentation": "Same as {@link DeleteConnectionsBetween} but resolves multiple queries in a single\nHTTP request to POST /api/get-connection-between.\n\nPrefer this over looping DeleteConnectionsBetween — all queries go to the backend\nin one round trip, and all returned IDs are merged into the same pending-deletion queue.\nThe actual deletion still fires as a single bulk call inside commitTransaction().\n\nParam: queries - Array of partial FetchConnectionQuery objects, one per query permutation.\nReturns: All connection IDs queued for deletion across every query in this call."
    },
    "MakeTheInstanceConceptLocal": {
      "parameters": [
        "type",
        "referent",
        "composition",
        "userId",
        "accessId",
        "sessionInformationId",
        "referentId"
      ]
    },
    "MakeTheTypeConceptLocal": {
      "parameters": [
        "typeString",
        "sessionId",
        "sessionUserId",
        "userId"
      ]
    },
    "commitTransaction": {
      "parameters": [],
      "documentation": "Method to commi the created Transactions"
    },
    "commitTransactionWithoutAuth": {
      "parameters": []
    },
    "initialize": {
      "parameters": [],
      "documentation": "Method to initialize the transactions for specified transaction"
    },
    "markAction": {
      "parameters": [],
      "documentation": "Method to move concepts and connection to transaction collection\nParam: concept Concept"
    },
    "rollbackTransaction": {
      "parameters": [],
      "documentation": "Method to rollback all the tranctions occured"
    }
  },
  "Logger": {
    "checkLoggerServerStatus": {
      "parameters": []
    },
    "clearLogsFromLocalStorage": {
      "parameters": [
        "logType"
      ]
    },
    "formatLogData": {
      "parameters": [
        "level",
        "message",
        "data"
      ],
      "documentation": "Logs a message with optional additional structured data."
    },
    "log": {
      "parameters": [
        "level",
        "message",
        "data"
      ]
    },
    "logApplication": {
      "parameters": [
        "level",
        "message",
        "data"
      ]
    },
    "logError": {
      "parameters": [
        "startTime",
        "userId",
        "operationType",
        "requestFrom",
        "requestIP",
        "responseStatus",
        "responseData",
        "functionName",
        "functionParameters",
        "userAgent",
        "conceptsUsed"
      ]
    },
    "logUpdate": {
      "parameters": [
        "logData"
      ],
      "documentation": "Updates log data with execution details.\nParam: logData The log data object to be updated."
    },
    "logfunction": {
      "parameters": [
        "myFunction",
        "args"
      ]
    },
    "saveLogToLocalStorage": {
      "parameters": [
        "logType",
        "logMessage"
      ],
      "documentation": "Helper method to save logs to localStorage."
    },
    "sendApplicationLogsToServer": {
      "parameters": [],
      "documentation": "Helper method to send logs to the server."
    },
    "sendPackageLogsToServer": {
      "parameters": []
    },
    "setLogLevel": {
      "parameters": [
        "level"
      ],
      "documentation": "Set the log level (e.g., \"DEBUG\", \"INFO\", \"WARNING\", \"ERROR\")."
    },
    "shouldLog": {
      "parameters": [
        "level"
      ],
      "documentation": "Determines whether the current log level permits the given level to be logged."
    },
    "startAutoSync": {
      "parameters": [],
      "documentation": "Automatically starts the auto-sync mechanism.\nThis is private and does not need external interaction."
    },
    "stopAutoSync": {
      "parameters": [],
      "documentation": "Automatically stops the auto-sync mechanism when required."
    }
  },
  "PatcherStructure": {},
  "Prototype": {},
  "SearchLinkMultipleAllObservable": {
    "bind": {
      "parameters": [],
      "documentation": "Executes the search queries and sets up change listeners.\nReturns: Formatted search results"
    }
  },
  "SearchQuery": {},
  "SearchStructure": {},
  "Selector": {
    "addFilter": {
      "parameters": [
        "value"
      ]
    },
    "after_render": {
      "parameters": []
    },
    "before_render": {
      "parameters": []
    },
    "getHtml": {
      "parameters": []
    }
  },
  "SessionData": {},
  "StatefulWidget": {
    "UpdateChildData": {
      "parameters": [
        "value",
        "widget"
      ],
      "documentation": "Updates a child widget's data and triggers re-render.\n\nParam: value - New data to pass to the child widget\nParam: widget - The child widget instance to update"
    },
    "after_render": {
      "parameters": [],
      "documentation": "Lifecycle hook called after rendering.\nOverride to add event listeners or post-render logic."
    },
    "before_render": {
      "parameters": [],
      "documentation": "Lifecycle hook called before rendering.\nOverride for initialization logic. Default implementation calls render()."
    },
    "getElement": {
      "parameters": [],
      "documentation": "Gets the root DOM element of this widget.\n\nReturns: The widget's root HTML element"
    },
    "getElementByClassName": {
      "parameters": [
        "identifier"
      ],
      "documentation": "Finds all elements with a specific class name within this widget.\n\nParam: identifier - Class name to search for (without '.' prefix)\nReturns: NodeList of matching elements"
    },
    "getHtml": {
      "parameters": [],
      "documentation": "Gets the HTML template for this widget.\n\nReturns: HTML string to be rendered"
    },
    "getWidgetState": {
      "parameters": [
        "key",
        "defaultValue"
      ],
      "documentation": "Retrieves shared state data by key.\n\nParam: key - State property key to retrieve\nParam: defaultValue - Default value if key doesn't exist\nReturns: The state value or default value"
    },
    "hasStateChanged": {
      "parameters": [],
      "documentation": "Checks if the widget state has changed since last update.\n\nReturns: True if state changed, false otherwise"
    },
    "isPropertyEqual": {
      "parameters": [
        "obj1",
        "obj2"
      ],
      "documentation": "Compares two state objects for shallow equality.\n\nParam: obj1 - First state object\nParam: obj2 - Second state object\nReturns: True if objects are equal, false otherwise"
    },
    "loadChildWidgets": {
      "parameters": [],
      "documentation": "Mounts all registered child widgets to their designated parent elements."
    },
    "mount": {
      "parameters": [
        "parent"
      ],
      "documentation": "Mounts the widget to a parent DOM element and initializes lifecycle.\n\nCreates a wrapper div, assigns unique ID, renders HTML, and executes\nlifecycle hooks in sequence.\n\nParam: parent - The parent HTML element to mount this widget into"
    },
    "mount_child": {
      "parameters": [],
      "documentation": "Lifecycle hook for mounting child widgets.\nOverride this method to define custom child mounting logic."
    },
    "querySelector": {
      "parameters": [
        "selector"
      ],
      "documentation": "Finds the first element matching a CSS selector within this widget.\n\nParam: selector - CSS selector string\nReturns: The first matching element or null"
    },
    "querySelectorAll": {
      "parameters": [
        "selector"
      ],
      "documentation": "Finds all elements matching a CSS selector within this widget.\n\nParam: selector - CSS selector string\nReturns: NodeList of matching elements or null"
    },
    "render": {
      "parameters": [],
      "documentation": "Re-renders the widget by updating the DOM with current HTML template.\nAlso triggers child widget loading and after_render hook."
    },
    "renderChildWidgets": {
      "parameters": [],
      "documentation": "Recursively renders all child widgets in the hierarchy."
    },
    "setState": {
      "parameters": [
        "newState"
      ],
      "documentation": "Updates the entire widget state and triggers re-render if changed.\n\nParam: newState - New state data to replace current state"
    },
    "setStateProperty": {
      "parameters": [
        "newProperty"
      ],
      "documentation": "Updates specific state properties and triggers re-render if changed.\n\nParam: newProperty - Object containing properties to update"
    },
    "setTitle": {
      "parameters": [
        "title"
      ],
      "documentation": "Sets the browser document title.\n\nParam: title - The new document title"
    },
    "setWidgetState": {
      "parameters": [
        "key",
        "value"
      ],
      "documentation": "Sets shared state data and propagates to all child widgets recursively.\n\nParam: key - State property key\nParam: value - State value to set"
    },
    "update": {
      "parameters": [],
      "documentation": "Lifecycle hook called after widget data is updated.\nOverride this method to handle post-update logic."
    }
  },
  "SyncData": {
    "AddConcept": {
      "parameters": [
        "concept"
      ]
    },
    "AddConnection": {
      "parameters": [
        "connection"
      ]
    },
    "CheckContains": {
      "parameters": [
        "concept"
      ]
    },
    "CheckContainsConnection": {
      "parameters": [
        "connection"
      ]
    },
    "RemoveConcept": {
      "parameters": [
        "concept"
      ]
    },
    "RemoveConnection": {
      "parameters": [
        "connection"
      ]
    },
    "SyncDataDelete": {
      "parameters": [
        "id"
      ]
    },
    "SyncDataOnline": {
      "parameters": []
    }
  },
  "TokenStorage": {
    "hydrateProfile": {
      "parameters": [],
      "documentation": "Call once at app startup (e.g. in init()) to decrypt the stored profile\ninto memory so that getUserDetails() can read it synchronously."
    },
    "logout": {
      "parameters": [],
      "documentation": "Clears all stored credentials and profile data."
    },
    "saveUserProfile": {
      "parameters": [
        "signinResponse"
      ],
      "documentation": "Stores user profile securely (encrypted in sessionStorage)\nand keeps the token in memory for API calls.\nAlso populates profileCache so getUserDetails() works synchronously."
    },
    "setSession": {
      "parameters": [
        "sessionId"
      ]
    },
    "updateTokens": {
      "parameters": [
        "accessToken",
        "refreshToken"
      ]
    }
  },
  "UserBinaryTree": {
    "addConceptToTree": {
      "parameters": [
        "concept",
        "userId",
        "sessionId"
      ]
    },
    "addNodeToTree": {
      "parameters": [
        "node"
      ]
    },
    "checkFlag": {
      "parameters": [
        "resolve"
      ]
    },
    "compositeKey": {
      "parameters": [
        "userId",
        "sessionId"
      ]
    },
    "countNumberOfNodes": {
      "parameters": []
    },
    "getNodeFromTree": {
      "parameters": [
        "userId",
        "sessionId"
      ]
    },
    "removeNodeFromTree": {
      "parameters": [
        "userId",
        "sessionId"
      ]
    },
    "waitForDataToLoad": {
      "parameters": []
    }
  },
  "Validator": {
    "checkUniqueness": {
      "parameters": [
        "type",
        "value"
      ],
      "documentation": "Checks if a concept with the given type and value is unique.\nParam: type concept type where to check\nParam: value value to check\nReturns: boolean indicating uniqueness"
    },
    "validate": {
      "parameters": [
        "options"
      ],
      "documentation": "Take field element attributes\nParam: options  Object conist of attributes\nReturns: Object with status and details"
    },
    "validateField": {
      "parameters": [
        "options"
      ],
      "documentation": "Validates a single form field based on its constraints and uniqueness.\nParam: options - An object containing field properties including name, value, type, and validation constraints.\nReturns: An object containing validation errors if validation fails."
    },
    "validateForm": {
      "parameters": [
        "formData"
      ],
      "documentation": "Validates all form fields by iterating over the provided form data.\nIt checks each field's value, data type, and constraints, collecting errors where necessary.\n\nParam: formData - An object representing the form data, where each key is a field name\nand each value is an object containing the `value`, `dataType`, and constraints (e.g., `maxLength`, `minLength`).\n\nReturns: An object containing validation errors for fields that failed validation.\nIf no errors exist, the object will be empty."
    }
  },
  "WidgetTree": {},
  "tsccs": {
    "AccessTracker": {
      "parameters": []
    },
    "AddGhostConcept": {
      "parameters": [
        "concept",
        "userId",
        "sessionId"
      ]
    },
    "Anomaly": {
      "parameters": [],
      "documentation": "Constructor that initializes anomaly parameters if the cache is not yet initialized.\nIt ensures that the anomaly parameters are loaded and cached for use."
    },
    "BaseUrl": {
      "parameters": []
    },
    "BinaryTree": {
      "parameters": [],
      "documentation": "BinaryTree — In-memory concept store keyed by numeric concept ID.\n\nBacked by a Map<number, Concept> for O(1) lookups, inserts, and deletes.\nAlso maintains the BinaryCharacterTree (character-indexed) on every insert\nso character-based search continues to work.\n\nAll public method signatures are preserved for backward compatibility.\ngetNodeFromTree returns a { key, value } wrapper so callers that access\nnode.value continue to work without changes."
    },
    "BuildWidgetFromId": {
      "parameters": [
        "id"
      ],
      "documentation": "Fetches and builds widget data from the backend by widget ID.\n\nRetrieves complete widget structure including concepts, connections, and metadata.\nUses caching to prevent duplicate requests for the same widget.\n\nParam: id - The widget ID to fetch\nReturns: Promise resolving to formatted widget data"
    },
    "BuilderStatefulWidget": {
      "parameters": [],
      "documentation": "BuilderStatefulWidget - A dynamic, stateful widget component for building interactive UI elements.\n\nThis class extends StatefulWidget to provide a powerful widget system that supports:\n- Dynamic HTML rendering with lifecycle hooks\n- Child widget composition and mounting\n- Custom function execution and event handling\n- Type-based data binding and queries\n- Development mode with visual editing capabilities\n- Widget dependencies and custom functions\n\n**Key Features:**\n- **Lifecycle Management**: before_render, render, after_render hooks\n- **Dynamic Code Execution**: Safely executes user-defined JavaScript functions\n- **Child Widgets**: Supports hierarchical widget composition\n- **Type Integration**: Connects to TSCCS type system for data binding\n- **Development Mode**: Visual editing and type editor integration\n- **Custom Functions**: Execute user-defined functions within widget context\n- **Local Connections**: Create relationships between entities at the widget level\n\n**Lifecycle Flow:**\n1. Constructor creates widget instance\n2. mount() attaches to parent DOM element\n3. render_custom_functions() executes custom code\n4. render_widgetDependencies() loads dependencies\n5. before_render() (componentDidMount equivalent) executes\n6. mount_child() mounts child widgets\n7. render() updates the DOM\n8. after_render() (addEvent) attaches event listeners\n\n**Use Cases:**\n- Building dynamic forms with type-based data\n- Creating reusable UI components\n- Widget-based page builders\n- Interactive dashboards\n- Data-driven UI components\n\n@extends StatefulWidget"
    },
    "Composition": {
      "parameters": []
    },
    "CompositionBinaryTree": {
      "parameters": []
    },
    "CompositionNode": {
      "parameters": [
        "key",
        "value",
        "leftNode",
        "rightNode"
      ]
    },
    "Concept": {
      "parameters": [
        "id",
        "userId",
        "typeId",
        "categoryId",
        "referentId",
        "characterValue",
        "accessId",
        "isNew",
        "entryTimeStamp",
        "updatedTimeStamp",
        "typeCharacter"
      ]
    },
    "ConceptsData": {
      "parameters": []
    },
    "Connection": {
      "parameters": [
        "id",
        "ofTheConceptId",
        "toTheConceptId",
        "userId",
        "typeId",
        "orderId",
        "accessId"
      ]
    },
    "ConnectionData": {
      "parameters": []
    },
    "CountInfo": {
      "parameters": []
    },
    "CreateComposition": {
      "parameters": [
        "json",
        "ofTheConceptId",
        "ofTheConceptUserId",
        "mainKey",
        "userId",
        "accessId",
        "sessionInformationId"
      ]
    },
    "CreateConnection": {
      "parameters": [
        "ofTheConcept",
        "toTheConcept",
        "connectionTypeString",
        "actions"
      ],
      "documentation": "Simplified connection creator that accepts concepts and a type string.\n\nThis is a convenience wrapper around CreateTheConnectionLocal that:\n1. Accepts Concept objects instead of IDs\n2. Creates the connection type concept if it doesn't exist\n3. Extracts necessary IDs automatically\n4. Sets appropriate defaults for local connections\n\n**Advantages:**\n- More intuitive API (pass concepts, not IDs)\n- Automatic type concept creation/retrieval\n- Less boilerplate code\n- Type-safe with TypeScript\n\n**Process:**\n1. Creates/retrieves type concept from connectionTypeString\n2. Extracts userId from source concept\n3. Calls CreateTheConnectionLocal with extracted IDs\n4. Returns the created connection\n\nParam: ofTheConcept - The source Concept object (FROM)\nParam: toTheConcept - The target Concept object (TO)\nParam: connectionTypeString - Type name as string (e.g., \"the_person_email\").\nA type concept will be created if it doesn't exist.\nParam: actions - Action tracking object for batch operations. Defaults to empty arrays.\n\nReturns: Promise resolving to the created Connection object"
    },
    "CreateConnectionBetweenEntityLocal": {
      "parameters": [
        "concept1Data",
        "concept2Data",
        "linker",
        "actions"
      ]
    },
    "CreateConnectionBetweenTwoConcepts": {
      "parameters": [
        "ofTheConcept",
        "toTheConcept",
        "linker",
        "both",
        "count"
      ]
    },
    "CreateConnectionBetweenTwoConceptsGeneral": {
      "parameters": [
        "ofTheConcept",
        "toTheConcept",
        "linker",
        "both",
        "count"
      ]
    },
    "CreateConnectionBetweenTwoConceptsLocal": {
      "parameters": [
        "ofTheConcept",
        "toTheConcept",
        "linker",
        "both",
        "actions"
      ],
      "documentation": "Creates a named connection between two concepts with optional bidirectional linking.\n\n**Complex Naming Logic**:\n- Forward connection type: \"{ofType}_s_{linker}_s\" (e.g., \"person_s_knows_s\")\n- Backward connection type: \"{toType}_s_{linker}_by\" (e.g., \"person_s_knows_by\")\n- Uses type.characterValue from concepts to build meaningful connection names\n\n**Bidirectional Mode (both=true)**:\n- Creates two connections: A→B and B→A\n- Forward: ofTheConcept → toTheConcept with \"{ofType}_s_{linker}_s\"\n- Backward: toTheConcept → ofTheConcept with \"{toType}_s_{linker}_by\"\n\nParam: ofTheConcept - Source concept (connection starts here)\nParam: toTheConcept - Target concept (connection points here)\nParam: linker - Relationship name (e.g., \"knows\", \"works_at\", \"has\")\nParam: both - If true, creates bidirectional connection (both A→B and B→A)\nParam: actions - Action tracking for batch operations\nReturns: The forward connection object\n@throws Error if connection creation fails"
    },
    "CreateData": {
      "parameters": [
        "json",
        "ofConcept",
        "typeConcept",
        "actions"
      ]
    },
    "CreateDefaultConcept": {
      "parameters": []
    },
    "CreateDefaultLConcept": {
      "parameters": [],
      "documentation": "Creates a default empty local concept with all properties set to zero/default values.\n\nThis utility function generates a blank Concept object that can be used as a placeholder\nor default return value when a concept is not found. All IDs and values are set to 0\nor empty defaults.\n\n**Default Values:**\n- id: 0 (indicates empty/not found)\n- userId: 0\n- typeId: 0\n- categoryId: 0\n- referentId: 0\n- characterValue: \"0\"\n- accessId: 0\n- isNew: false\n- entryTimeStamp: current date\n- updatedTimeStamp: current date\n- typeCharacter: \"0\"\n\n**Use Cases:**\n- Default return value when concept not found\n- Placeholder for conditional logic\n- Initial state before loading data\n- Template for creating new concepts\n\nReturns: A Concept object with all properties set to default/zero values"
    },
    "CreateSession": {
      "parameters": [
        "sessionData"
      ],
      "documentation": "Creates a new session for tracking user activity.\nRecords session metadata including user agent, IP, and timestamp.\n\nParam: sessionData - SessionData object containing session information\nReturns: Session object with generated ID, or null on error"
    },
    "CreateSessionVisit": {
      "parameters": [
        "sessionId",
        "url"
      ],
      "documentation": "Records a URL visit within an existing session.\nTracks page navigation and user journey through the application.\n\nParam: sessionId - ID of the session to associate the visit with\nParam: url - URL being visited\nReturns: Session visit object or null on error"
    },
    "CreateTheCompositionLocal": {
      "parameters": [
        "json",
        "ofTheConceptId",
        "ofTheConceptUserId",
        "mainKey",
        "userId",
        "accessId",
        "sessionInformationId",
        "automaticSync",
        "actions"
      ],
      "documentation": "Converts a JSON object into a local composition structure with concepts and connections.\n\nThis powerful function recursively transforms any JSON object into the concept-connection\nsystem, creating local concepts for each key-value pair and establishing connections\nbetween them to preserve the hierarchical structure.\n\n**JSON to Composition Conversion:**\n- JSON keys become type concepts (e.g., \"name\", \"email\")\n- JSON string/number values become instance concepts\n- Nested objects/arrays create sub-compositions\n- Connections preserve parent-child relationships\n- All data stored locally (IndexedDB) for offline use\n\n**Recursive Process:**\n1. Iterates through each key in JSON object\n2. For nested objects/arrays: Creates composition concept + recurse\n3. For primitive values: Creates instance concept\n4. Creates connections from parent to child concepts\n5. Returns the main/root concept\n\n**Example Transformation:**\n```javascript\nInput JSON:\n{\nname: \"Alice\",\nemail: \"alice@example.com\",\naddress: {\ncity: \"NYC\",\nzip: \"10001\"\n}\n}\n\nCreates:\n- Concept: \"name\" (type) → \"Alice\" (instance)\n- Concept: \"email\" (type) → \"alice@example.com\" (instance)\n- Concept: \"address\" (composition concept)\n- Concept: \"city\" → \"NYC\"\n- Concept: \"zip\" → \"10001\"\n- Connections linking all concepts in hierarchy\n```\n\nParam: json - The JSON object/array to convert to composition structure.\nCan be any depth of nesting.\nParam: ofTheConceptId - Parent concept ID if this is a sub-composition.\nNull for root composition. Used for connecting to parent.\nParam: ofTheConceptUserId - User ID of the parent concept.\nUsed for ownership tracking in nested structures.\nParam: mainKey - The main composition ID (root concept ID).\nUsed as typeId for internal connections. Null for root.\nParam: userId - User ID of the creator. Defaults to 999 (system).\nParam: accessId - Access control level. Defaults to 999 (system).\nParam: sessionInformationId - Session ID. Defaults to 999 (system).\nParam: automaticSync - Reserved for future automatic sync feature.\nCurrently not fully implemented.\nParam: actions - Action tracking object that accumulates all created concepts\nand connections for batch operations. Defaults to empty arrays.\n\nReturns: Promise resolving to the main/root Concept of the composition"
    },
    "CreateTheCompositionWithCache": {
      "parameters": [
        "json",
        "ofTheConceptId",
        "ofTheConceptUserId",
        "mainKey",
        "userId",
        "accessId",
        "sessionInformationId",
        "composition"
      ]
    },
    "CreateTheConnection": {
      "parameters": [
        "ofTheConceptId",
        "userId",
        "toTheConceptId",
        "typeId"
      ],
      "documentation": "Creates a connection (relationship) between two concepts and adds it to the sync queue.\n\nThis is the primary function for establishing relationships in the knowledge graph.\nConnections are directed edges that link two concepts together, representing relationships\nlike \"works at\", \"belongs to\", \"authored by\", etc.\n\n**Connection Structure:**\n- FROM concept (ofTheConceptId) → TO concept (toTheConceptId)\n- The relationship is directional\n- Type ID classifies what kind of relationship it is\n- Order ID allows sorting when multiple connections of the same type exist\n\n**Important Behaviors:**\n- Connections are marked as temporary (isTemp = true) for internal compositions\n- Added to SyncData queue for backend synchronization\n- Assigned a random temporary ID until persisted\n- Self-connections (same from/to) are prevented (returns invalid connection)\n- Default access level is 4 (typically means \"admin\" or \"restricted\")\n\nParam: ofTheConceptId - The source concept ID (start of the relationship).\nThis is where the connection originates FROM.\nParam: userId - The ID of the user creating this connection. Used for ownership and permissions.\nParam: toTheConceptId - The target concept ID (end of the relationship).\nThis is where the connection points TO.\nParam: typeId - The type classification for this connection. Defines the nature of the relationship.\n(e.g., 5=\"works_at\", 6=\"manages\", 7=\"member_of\")\n\nReturns: The created Connection object with all properties set, including a temporary ID"
    },
    "CreateTheConnectionGeneral": {
      "parameters": [
        "ofTheConceptId",
        "ofTheConceptUserId",
        "toTheConceptId",
        "typeId",
        "orderId",
        "accessId"
      ]
    },
    "CreateTheConnectionLocal": {
      "parameters": [
        "ofTheConceptId",
        "toTheConceptId",
        "typeId",
        "orderId",
        "typeString",
        "userId",
        "actions"
      ],
      "documentation": "Creates a connection in local storage (IndexedDB) without syncing to the backend.\n\nThis is the primary function for creating offline-first connections. The connection is stored\nlocally in IndexedDB and memory, but NOT immediately sent to the backend. Sync happens\nlater via LocalSyncData.SyncDataOnline().\n\n**Virtual ID System:**\n- Generates a negative ID (e.g., -67890) to indicate local/virtual status\n- id and ghostId are initially equal and both negative\n- After backend sync: id becomes positive (real backend ID)\n- ghostId remains negative (preserves original local ID)\n- Mapping is stored in backend and LocalGhostIdTree\n\n**Connection Types:**\n- **Internal Connections**: orderId < 3 (within a composition)\n- typeId is typically the composition ID\n- **External Connections**: orderId >= 999 (between different entities)\n- typeId is a type concept ID\n- typeString provides human-readable type name\n\n**Self-Connection Prevention:**\nIf ofTheConceptId equals toTheConceptId, returns an empty connection (prevents loops).\n\nParam: ofTheConceptId - Source concept ID (FROM). The connection originates here.\nCan be negative (local) or positive (server) ID.\nParam: toTheConceptId - Target concept ID (TO). The connection points here.\nCan be negative (local) or positive (server) ID.\nParam: typeId - The type classification for this connection.\n- For internal connections: composition ID\n- For external connections: type concept ID\nParam: orderId - Order identifier for sorting multiple connections.\n- < 3: Internal connection\n- >= 999: External connection\n- Defaults to 1\nParam: typeString - Human-readable type name (e.g., \"the_person_email\").\nUsed primarily for external connections. Defaults to empty string.\nParam: userId - The ID of the user creating this connection. Defaults to 999 (system).\nParam: actions - Action tracking object that accumulates created concepts and connections.\nUsed for batch operations and rollback. Defaults to empty arrays.\n\nReturns: Promise resolving to the created Connection object with negative ID.\nReturns empty connection (all IDs = 0) if self-connection attempted."
    },
    "DelayFunctionExecution": {
      "parameters": [
        "ms",
        "callback"
      ],
      "documentation": "Param: ms The time required to wait before executing this function\nParam: callback This is the function that needs to be executed\nReturns: returns a promise for the resolve"
    },
    "DeleteConceptById": {
      "parameters": [
        "id"
      ]
    },
    "DeleteConceptLocal": {
      "parameters": [
        "id"
      ],
      "documentation": "Deletes a concept from local storage (IndexedDB).\n\nThis function removes a concept from LocalConceptsData, effectively deleting it\nfrom the local IndexedDB cache. This is a local-only delete - it does NOT sync\nthe deletion to the backend.\n\n**Important Notes:**\n- Only deletes from local storage (IndexedDB)\n- Does NOT delete from backend server\n- Does NOT automatically delete related connections\n- For full deletion including backend, use DeleteConceptById\n- Works with both negative (local) and positive (synced) IDs\n\n**Use Cases:**\n- Cleaning up local draft concepts\n- Removing concepts before they're synced\n- Local cache management\n- Testing and development\n\n**Process:**\n1. Fetches the concept via GetTheConceptLocal\n2. Removes it from LocalConceptsData\n3. Updates IndexedDB\n\nParam: id - The concept ID to delete (negative for local, positive for synced)\n\nReturns: Promise that resolves when deletion is complete"
    },
    "DeleteConnectionById": {
      "parameters": [
        "id"
      ]
    },
    "DeleteConnectionByIdBulk": {
      "parameters": [
        "ids"
      ]
    },
    "DeleteConnectionByType": {
      "parameters": [
        "id",
        "linker"
      ],
      "documentation": "Param: id\nParam: linker\n@returns"
    },
    "DeleteConnectionByTypeBulk": {
      "parameters": [
        "id",
        "linkers"
      ]
    },
    "DeleteUser": {
      "parameters": [
        "id"
      ]
    },
    "DependencyObserver": {
      "parameters": [],
      "documentation": "Base observable class that tracks concepts and connections for reactive state management.\nImplements the observer pattern to notify subscribers when tracked data changes."
    },
    "Environments": {
      "parameters": [],
      "documentation": "Static key-value store for runtime configuration values.\n\nUsed throughout the package for feature flags and settings that need to be\nreadable anywhere without passing parameters down the call stack.\n\n**Built-in keys:**\n- `'enableCache'` — controls widget and query caching (default `true`).\nSet via `init()` parameters or toggled at runtime. Checked on every\ncache read/write in `QueryCacheManager` and `WidgetCacheManager`."
    },
    "FilterSearch": {
      "parameters": []
    },
    "FormatFromConnections": {
      "parameters": [
        "linkers",
        "compositionData",
        "mainComposition",
        "reverse"
      ],
      "documentation": "########## Format works with JUSTDATA / NORMAL ########### used for single origin concept\nParam: linkers this is the list of linkers that\nParam: compositionData\nParam: mainComposition\nParam: reverse list of connection ids that need to show reverse conneciton.\n@returns"
    },
    "FormatFromConnectionsAltered": {
      "parameters": [
        "connections",
        "compositionData",
        "mainComposition",
        "reverse"
      ],
      "documentation": "## Format is DATAID ##\nThis  is altered format and is different from others because it passes all the connections prebuilt/prefetched\nThis will not let the connections to be again fetched from the memory.\nParam: connections the type connections that need (external connections) to be passed\nParam: compositionData this is a dictionary type of format that has all the build compositions {id: { actual data}}\nParam: mainComposition this is the id of the main composition that builds the tree\nParam: reverse this is the list of connections ids that needs to go to the reverse direction (to---->from)\n@returns"
    },
    "FreeschemaQuery": {
      "parameters": []
    },
    "FreeschemaQueryApi": {
      "parameters": [
        "query",
        "token"
      ],
      "documentation": "Executes a freeschema query for flexible, schema-free data retrieval.\nSupports custom query structures with filters, pagination, and nested queries.\n\nParam: query - FreeschemaQuery object containing query parameters, filters, and nested queries\nParam: token - Authentication token (optional, defaults to empty string)\nReturns: Query results array or empty array on error"
    },
    "GetAllConnectionsOfComposition": {
      "parameters": [
        "composition_id"
      ],
      "documentation": "Retrieves all connections belonging to a specific composition.\nChecks local cache first, then fetches from backend if needed.\n\n**Complex Logic**: First checks ConnectionData cache, then fetches from API,\ncompares with cached data to detect deletions, and updates cache.\n\nParam: composition_id - ID of the composition whose connections to retrieve\nReturns: Array of Connection objects for the composition"
    },
    "GetAllConnectionsOfCompositionBulk": {
      "parameters": [
        "composition_ids"
      ],
      "documentation": "Retrieves connections for multiple compositions in bulk.\nOptimizes fetching by batching multiple composition IDs in one request.\n\n**Complex Logic**: Checks in-memory cache, fetches from API, detects deletions\nby comparing old and new data, and bulk-fetches related concepts.\n\nParam: composition_ids - Array of composition IDs to fetch connections for\nReturns: Array of Connection objects for all compositions"
    },
    "GetAllTheConnectionsByTypeAndOfTheConcept": {
      "parameters": [
        "id",
        "linker",
        "reverse"
      ],
      "documentation": "This function returns all the connections from the ofTheConceptId and connection type\nParam: id ofTheConceptId\nParam: linker the connection type\nReturns: Array of connections"
    },
    "GetComposition": {
      "parameters": [
        "id"
      ],
      "documentation": "Retrieves a complete composition structure for a given concept ID in JUSTDATA format.\n\nThis is a primary composition retrieval function that builds a hierarchical structure\ncontaining the main concept, all its connections, and recursively fetched related concepts.\nThe result is formatted as a nested object organized by concept types.\n\n**What is a Composition?**\nA composition represents a concept along with its connected relationships and sub-structures.\nThink of it as getting a \"full profile\" of a concept including everything connected to it.\n\n**Process:**\n1. Fetches all connections associated with the concept\n2. Identifies all related concept IDs from those connections\n3. Recursively builds the composition tree\n4. Fetches the main concept details\n5. Organizes output by concept type (e.g., result[\"Person\"] = {...})\n6. Routes through service worker if enabled for better performance\n\n**Output Format (JUSTDATA):**\nReturns an object keyed by the main concept's type character value:\n```\n{\n\"Person\": {\nid: 123,\ncharacterValue: \"Alice\",\nconnections: [...],\nrelatedConcepts: {...}\n}\n}\n```\n\nParam: id - The unique identifier of the concept for which to build the composition.\nThis becomes the root of the composition tree.\n\nReturns: Promise resolving to an object containing the composition data organized by\nthe main concept's type. Returns empty object if concept not found or on error."
    },
    "GetCompositionBulk": {
      "parameters": [
        "conceptIds"
      ],
      "documentation": "## Format JUSTDATA ##\nFunction converts the conceptIds to json (compositions)\nThis function takes in the conceptIds and returns a list of compositions related to those concepts.\nParam: conceptIds  list of concept ids that are compositions.\nReturns: compositions"
    },
    "GetCompositionBulkWithDataId": {
      "parameters": [
        "conceptIds"
      ],
      "documentation": "## FORMAT DATAIDDATE ##\nFunction converts the conceptIds to json (compositions)\nParam: conceptIds this is the list of concept ids that should be converted to compostions in data - id format.\nReturns: list of compositions in the data - id format."
    },
    "GetCompositionFromConnectionsWithDataId": {
      "parameters": [
        "conceptIds",
        "connectionIds"
      ],
      "documentation": "## FORMAT DATAIDDATE ##\nThis function converts the conceptIds and internal connectionIds to compositions in data-Id format.\nParam: conceptIds This is the list of concept ids that need to be converted to compositions.\nParam: connectionIds These are the internal connectionIds that need to be passed to create the compositions.\nReturns: list of compositions created from the passed conceptIds and connectionIds."
    },
    "GetCompositionFromConnectionsWithDataIdFromConnections": {
      "parameters": [
        "conceptIds",
        "connectionIds"
      ],
      "documentation": "## FORMAT DATAIDDATE ##\nThis is just a different version of GetCompositionFromConnectionsWithDataId, This has the added functionality that\nit also prints out internal connections.\nThis function converts the conceptIds and internal connectionIds to compositions in data-Id format.\nParam: conceptIds This is the list of concept ids that need to be converted to compositions.\nParam: connectionIds These are the internal connectionIds that need to be passed to create the compositions.\nReturns: list of compositions created from the passed conceptIds and connectionIds."
    },
    "GetCompositionFromConnectionsWithDataIdInObject": {
      "parameters": [
        "conceptIds",
        "connections"
      ],
      "documentation": "## Format DATAIDDATE ##\nThis function converts the conceptIds and internal connections to create compositions.\nFormat is of a dictionary with ids as the key and value is the composition data.\nParam: conceptIds these are the concept ids that need to be fetched to create their compositions\nParam: connections these are the connections that are used to create the structure.\nReturns: a dictionary / object that has key as their conceptId and the value as their composition object."
    },
    "GetCompositionFromConnectionsWithDataIdIndex": {
      "parameters": [
        "conceptIds",
        "connectionIds"
      ],
      "documentation": "## Format DATAIDDATE ##\nThis function converts the conceptIds and internal connectionIds to compositions in data-Id format with index(conceptId).\nParam: conceptIds This is the list of concept ids that need to be converted to compositions.\nParam: connectionIds These are the internal connectionIds that need to be passed to create the compositions.\nReturns: dictionary of compositions created from the passed conceptIds and connectionIds with conceptId as its index ."
    },
    "GetCompositionFromConnectionsWithIndex": {
      "parameters": [
        "conceptIds",
        "connectionIds"
      ],
      "documentation": "## Format is dictionary with key as concept id and value as data (json) ##\nThis function converts the conceptIds and internal connectionIds to compositions format with index(conceptId).\nParam: conceptIds This is the list of concept ids that need to be converted to compositions.\nParam: connectionIds These are the internal connectionIds that need to be passed to create the compositions.\nReturns: dictionary of compositions created from the passed conceptIds and connectionIds with conceptId as its index ."
    },
    "GetCompositionFromConnectionsWithIndexFromConnections": {
      "parameters": [
        "conceptIds",
        "connectionIds"
      ],
      "documentation": "## FORMAT DATAIDDATE ##\nThis is just a different version of GetCompositionFromConnectionsWithDataId, This has the added functionality that\nit also prints out internal connections.\nThis function converts the conceptIds and internal connectionIds to compositions in data-Id format.\nParam: conceptIds This is the list of concept ids that need to be converted to compositions.\nParam: connectionIds These are the internal connectionIds that need to be passed to create the compositions.\nReturns: list of compositions created from the passed conceptIds and connectionIds."
    },
    "GetCompositionFromMemoryWithConnections": {
      "parameters": [
        "id",
        "connectionList"
      ],
      "documentation": "### Format Normal ####\nGets data just from memory\nParam: id\n@returns"
    },
    "GetCompositionList": {
      "parameters": [
        "compositionName",
        "userId",
        "inpage",
        "page"
      ]
    },
    "GetCompositionListAll": {
      "parameters": [
        "compositionName",
        "userId",
        "inpage",
        "page"
      ]
    },
    "GetCompositionListAllWithId": {
      "parameters": [
        "compositionName",
        "userId",
        "inpage",
        "page"
      ]
    },
    "GetCompositionListListener": {
      "parameters": [
        "compositionName",
        "userId",
        "inpage",
        "page",
        "format"
      ],
      "documentation": "Creates an observable that tracks a paginated list of compositions and updates subscribers when they change.\nParam: compositionName - The composition type name\nParam: userId - The user ID who owns the compositions\nParam: inpage - Number of items per page\nParam: page - Page number (1-indexed)\nParam: format - Output format (JUSTDATA, DATAID, NORMAL)\nReturns: Observable instance for the composition list"
    },
    "GetCompositionListLocal": {
      "parameters": [
        "compositionName",
        "userId"
      ],
      "documentation": "Retrieves all compositions of a specific type from local storage.\n\n**Process Flow**:\n1. Finds the type concept by compositionName (e.g., \"the_project\")\n2. Queries all concepts with that typeId belonging to the user\n3. Fetches full composition for each concept\n4. Returns array of complete compositions\n\nParam: compositionName - The type name of compositions to retrieve (e.g., \"the_project\", \"the_person\")\nParam: userId - User ID to filter compositions by ownership\nReturns: Array of composition objects (empty array if type not found)\n@throws Error if lookup or composition fetching fails"
    },
    "GetCompositionListLocalWithId": {
      "parameters": [
        "compositionName",
        "userId"
      ],
      "documentation": "Retrieves all compositions of a specific type with DATAID format (includes concept ID).\n\nSame as GetCompositionListLocal but returns compositions in data-id wrapper format,\nwhich includes both the composition data and its concept ID for easier reference.\n\nParam: compositionName - The type name of compositions to retrieve\nParam: userId - User ID to filter compositions by ownership\nReturns: Array of composition objects in {id, data} format\n@throws Error if lookup or composition fetching fails"
    },
    "GetCompositionListWithId": {
      "parameters": [
        "compositionName",
        "userId",
        "inpage",
        "page"
      ]
    },
    "GetCompositionListWithIdUpdated": {
      "parameters": [
        "compositionName",
        "userId",
        "inpage",
        "page"
      ]
    },
    "GetCompositionListener": {
      "parameters": [
        "id",
        "format"
      ],
      "documentation": "Creates an observable that tracks a composition and updates subscribers when it changes.\nParam: id - The composition concept ID to observe\nParam: format - Output format (JUSTDATA, DATAID, NORMAL)\nReturns: Observable instance for the composition"
    },
    "GetCompositionLocal": {
      "parameters": [
        "id"
      ],
      "documentation": "Retrieves a complete composition structure from local storage (IndexedDB).\n\nThis function fetches a composition using local-only data, building a hierarchical\nstructure from local connections and concepts. If the concept has been synced to the\nbackend, it can automatically fall back to fetching from the server.\n\n**Process:**\n1. Fetches all local connections for the composition\n2. Identifies all connected concept IDs\n3. Retrieves the main concept from LocalConceptsData\n4. If concept not found locally, checks if it's been synced (TranslateLocalToReal)\n5. Falls back to server GetComposition if concept is synced\n6. Recursively builds composition tree from local data\n7. Organizes output by concept type\n\n**Local vs Server:**\n- Prioritizes local data (IndexedDB)\n- Automatic fallback to server if concept synced\n- Uses LocalConnectionData for connections\n- Uses LocalConceptsData for concepts\n\n**Output Format (JUSTDATA):**\nReturns an object keyed by the main concept's type:\n```\n{\n\"Person\": {\nname: \"Alice\",\nemail: {...},\nprojects: {...}\n}\n}\n```\n\nParam: id - The concept ID (can be negative for local or positive for synced)\n\nReturns: Promise resolving to composition data organized by concept type"
    },
    "GetCompositionLocalWithId": {
      "parameters": [
        "id"
      ],
      "documentation": "Retrieves a local composition with ID and data wrapper (DATAID format).\n\nThis is a variant of GetCompositionLocal that returns the composition data\nwrapped in an object that includes both the data and the concept ID. This format\nis useful for tracking which concept the data belongs to.\n\n**Output Format (DATAID):**\n```\n{\ndata: {\n\"Person\": {\nname: \"Alice\",\nemail: {...}\n}\n},\nid: 12345\n}\n```\n\n**Differences from GetCompositionLocal:**\n- Returns { data, id } wrapper object\n- Same local data retrieval process\n- Same recursive building logic\n- No automatic server fallback\n\nParam: id - The concept ID (negative for local, positive for synced)\n\nReturns: Promise resolving to object with { data, id } structure"
    },
    "GetCompositionWithAllIds": {
      "parameters": [
        "id"
      ]
    },
    "GetCompositionWithCache": {
      "parameters": [
        "id",
        "connectionListPassed"
      ]
    },
    "GetCompositionWithDataIdBulk": {
      "parameters": [
        "ids",
        "connections"
      ]
    },
    "GetCompositionWithDataIdWithCache": {
      "parameters": [
        "id",
        "connectionListPassed"
      ]
    },
    "GetCompositionWithId": {
      "parameters": [
        "id"
      ],
      "documentation": "#### Format DATAID ####\n## This will return the composition even if it is not in the local memory ##\nParam: id\n@returns"
    },
    "GetCompositionWithIdAndDateFromMemory": {
      "parameters": [
        "id"
      ],
      "documentation": "### Format DATAIDDATE #####\n### This just returns composition from memory and not from anywhere else.\nParam: id\n@returns"
    },
    "GetConceptBulk": {
      "parameters": [
        "passedConcepts"
      ],
      "documentation": "This function takes in a list of ids and returns a list of concepts . This uses local memory to find concepts\nnamely in the concept binary tree. If it could not find the concepts in local memory then it fetches those from\nthe api. The fetched concepts from api are then stored in the memory for further use in future.\nParam: conceptIds list of concept ids that need to be fetched\nReturns: list of concepts"
    },
    "GetConceptByCharacter": {
      "parameters": [
        "characterValue"
      ]
    },
    "GetConceptByCharacterAndCategoryLocal": {
      "parameters": [
        "character"
      ],
      "documentation": "Retrieves a local concept by character value, handling hierarchical type names.\n\n**Complex Logic**: For compound names (e.g., \"the_person_email\"):\n1. Splits string by underscore\n2. Recursively processes first part to get category ID\n3. Searches using character value and derived category\n4. Falls back to simple character search for single words\n\n**Special Case**: Returns concept with id=1 for character value \"the\".\n\nParam: character - The character value to find (e.g., \"the_status\", \"the_person_email\")\nReturns: Concept associated with the character value"
    },
    "GetConceptByCharacterAndType": {
      "parameters": [
        "characterValue",
        "typeId"
      ],
      "documentation": "Retrieves a concept by character value and type ID.\nChecks local cache first, then fetches from backend if not found.\n\n**Complex Logic**: Checks local ConceptsData cache, falls back to API,\nsupports service worker for offline capability.\n\nParam: characterValue - Character value string to search for\nParam: typeId - Type ID to filter by\nReturns: Concept object or null if not found"
    },
    "GetConnectionBetweenTwoConceptsLinker": {
      "parameters": [
        "ofTheConcept",
        "toTheConcept",
        "linker",
        "fullLinker",
        "forward"
      ],
      "documentation": "This function will give you all the connections between two concepts by their linker or fullLinker\nParam: ofTheConcept start of the connecction\nParam: toTheConcept end of the connection\nParam: linker the primitive linkers with type connection (16) these are the old type of linkers (if you want full linker then put this as empty string)\nParam: fullLinker fullLinker is the modern linker (if you want linker then put this as empty string)\nParam: forward if you want to get the forward relation in the primitive linker put true else for backward linker false.\nReturns: list of connections"
    },
    "GetConnectionBulk": {
      "parameters": [
        "connectionIds"
      ],
      "documentation": "After fetching these connections it is saved in the local static ConnectionBinaryTree so it can be reused without being fetched\nParam: connectionIds array of connection ids that need to fetched by the local system\nReturns: the list of  connections that have been fetched"
    },
    "GetConnectionById": {
      "parameters": [
        "id"
      ]
    },
    "GetConnectionDataPrefetch": {
      "parameters": [
        "connectionIds"
      ],
      "documentation": "Used to prefetch all the connections and their related concepts.\nParam: connectionIds these are the connection ids that are used to fetch all the connections and also their related concepts.\nReturns: all the connections that are passed as ids."
    },
    "GetConnectionOfTheConcept": {
      "parameters": [
        "typeId",
        "ofTheConceptId",
        "userId",
        "inpage",
        "page"
      ],
      "documentation": "Retrieves connections originating from a specific concept.\nFetches connections filtered by type, concept, user, and pagination.\n\nParam: typeId - Type ID to filter connections by\nParam: ofTheConceptId - Concept ID that is the source of connections\nParam: userId - User ID to filter by\nParam: inpage - Number of results per page (default: 10)\nParam: page - Page number (default: 1)\nReturns: Array of Connection objects"
    },
    "GetConnectionTypeForCount": {
      "parameters": [
        "countInfos"
      ]
    },
    "GetConnectionsBetweenApi": {
      "parameters": [
        "fetchConnections"
      ],
      "documentation": "Fetches connections matching the given criteria from POST /api/get-connection-between.\n\nAccepts an array so multiple independent queries can be resolved in one HTTP request.\nEach item in the array is resolved independently by the backend; results are returned\nin the same order with `connectionIds` and the resolved `typeId` populated.\n\n**Supported query permutations (per item):**\n1. `ofTheConceptId` + `toTheConceptId` + `type` — connections between two specific concepts of that type\n2. `ofTheConceptId` + `type`                    — all connections FROM a concept of that type\n3. `toTheConceptId` + `type`                    — all connections TO a concept of that type\n4. `typeId` + `isComposition: true`             — all internal connections of a composition\n\nFields not relevant to the chosen permutation should be left at their zero/empty defaults.\nUse {@link buildFetchConnection} to build items without specifying every field manually.\n\nParam: fetchConnections - Array of query objects; each item is resolved independently.\nReturns: The same array with `connectionIds` and resolved `typeId` populated by the backend.\nReturns an empty array on error (error is logged internally)."
    },
    "GetFreeschemaImage": {
      "parameters": [
        "url",
        "format"
      ],
      "documentation": "Param: url this is the url of the image that you have. This image will be cached in the cache server\nParam: format this is the format it can be either normal , small, by default it is normal\n@returns"
    },
    "GetFreeschemaImageUrl": {
      "parameters": [
        "url",
        "format"
      ],
      "documentation": "Param: url this is the url of the image that you have. This image will be cached in the cache server\nParam: format this is the format it can be either normal , small, by default it is normal\n@returns"
    },
    "GetImageApi": {
      "parameters": [
        "imageName"
      ],
      "documentation": "Retrieves an image by name from the cached images endpoint.\nReturns a readable stream for the image data.\n\nParam: imageName - Name/identifier of the image to retrieve\nReturns: Promise resolving to ReadableStream of image data, or null/undefined on error\n@throws Image stream on error (legacy behavior)"
    },
    "GetInstanceConceptByCharacterType": {
      "parameters": [
        "characterValue",
        "type"
      ],
      "documentation": "Fetches an instance concept from the backend API by its character value and type.\n\nParam: characterValue - The character value of the concept, such as a URL or identifier.\nParam: type - The type string that qualifies the character value, such as \"the_source_url\".\nReturns: The matching Concept object, or a default empty Concept if not found."
    },
    "GetLink": {
      "parameters": [
        "id",
        "linker",
        "inpage",
        "page"
      ]
    },
    "GetLinkListListener": {
      "parameters": [
        "searchStructure",
        "searchQuery",
        "token",
        "format"
      ],
      "documentation": "Creates an observable that tracks search results with complex query conditions and updates subscribers when results change.\nParam: searchStructure - Defines composition and linker types for the search\nParam: searchQuery - Array of query conditions to filter results\nParam: token - Authentication token\nParam: format - Output format (DATAID, NORMAL)\nReturns: Observable instance for the search results"
    },
    "GetLinkListener": {
      "parameters": [
        "id",
        "linker",
        "inpage",
        "page",
        "format"
      ],
      "documentation": "Creates an observable that tracks linked concepts and updates subscribers when links change.\nParam: id - The source concept ID whose links to retrieve\nParam: linker - The linker type name defining the relationship\nParam: inpage - Number of items per page\nParam: page - Page number (1-indexed)\nParam: format - Output format (NORMAL, DATAID, JUSTDATA, DATAIDDATE)\nReturns: Observable instance for the linked concepts"
    },
    "GetLinkRaw": {
      "parameters": [
        "id",
        "linker",
        "inpage",
        "page"
      ]
    },
    "GetLinkerConnectionFromConcepts": {
      "parameters": [
        "id"
      ]
    },
    "GetLinkerConnectionToConcepts": {
      "parameters": [
        "id"
      ]
    },
    "GetRelation": {
      "parameters": [
        "id",
        "relation",
        "inpage",
        "page",
        "reverse"
      ]
    },
    "GetRelationLocal": {
      "parameters": [
        "id",
        "relation",
        "userId"
      ],
      "documentation": "Retrieves all related compositions from local storage by relation name.\n\n**Process Flow (Complex Logic)**:\n1. Converts relation string to type concept (e.g., \"the_email\" → type concept)\n2. Finds all connections from source concept with that relation type\n3. For each connection, retrieves the target composition\n4. Returns array of all related compositions\n\nParam: id - The source concept ID to get relations from\nParam: relation - The relation name (e.g., \"the_email\", \"the_address\")\nParam: userId - User ID for permissions\nReturns: Array of composition objects representing related entities\n@throws Error if relation lookup or composition retrieval fails"
    },
    "GetRelationNew": {
      "parameters": [
        "id",
        "relation",
        "inpage",
        "page",
        "reverse"
      ]
    },
    "GetRelationRaw": {
      "parameters": [
        "id",
        "relation",
        "inpage",
        "page",
        "reverse"
      ]
    },
    "GetTheConcept": {
      "parameters": [
        "id",
        "userId"
      ],
      "documentation": "Retrieves a concept by its ID with intelligent caching and multi-source lookup.\n\nThis is the primary function for fetching concepts in the system. It implements a sophisticated\nmulti-level retrieval strategy:\n\n**Retrieval Strategy:**\n1. Checks in-memory promise cache to prevent duplicate requests\n2. For negative IDs: Fetches from local IndexedDB (LocalConceptsData)\n3. For positive IDs: Checks local ConceptsData cache first\n4. If not in cache: Fetches from backend API\n5. Automatically resolves and attaches the concept's type information\n6. Routes through service worker if enabled for better performance\n\n**Features:**\n- Promise caching prevents duplicate concurrent requests for the same concept\n- Automatic type resolution (fetches and attaches type concept)\n- Access tracking integration (increments access counter if enabled)\n- Service worker support for background processing\n- Error logging and performance monitoring\n- Supports both server concepts (positive IDs) and local concepts (negative IDs)\n\nParam: id - The unique identifier of the concept to retrieve.\nPositive IDs = server concepts, Negative IDs = local-only concepts\nParam: userId - The ID of the user requesting the concept. Used for access tracking\nand audit logging. Defaults to 999 (system/anonymous user)\n\nReturns: Promise resolving to the Concept object if found, or a default empty Concept if not found"
    },
    "GetTheConceptLocal": {
      "parameters": [
        "id"
      ],
      "documentation": "Retrieves a concept by ID with support for both local (virtual) and server concepts.\n\nThis is the primary function for fetching concepts in offline/local mode. It intelligently\nhandles three types of concept IDs and retrieves from appropriate sources:\n\n**ID Types Handled:**\n1. **Negative IDs (Virtual/Local)**: Concepts created locally not yet synced\n- Stored in LocalConceptsData (IndexedDB)\n- Return negative IDs\n\n2. **Synced Virtual IDs**: Originally local concepts now synced to backend\n- Looked up via LocalGhostIdTree (maps negative to positive IDs)\n- Returns positive (real) ID with ghostId reference\n\n3. **Positive IDs (Server)**: Real backend concepts\n- Fetched via GetTheConcept from backend\n- Converted to LConcept format\n- May have undefined ghostId\n\n**Retrieval Strategy:**\n- If id < 0: Check LocalConceptsData → Check LocalGhostIdTree\n- If id >= 0: Fetch from backend → Convert to LConcept\n- Routes through service worker if enabled\n- Returns default empty concept if not found\n\n**Ghost ID System:**\n- ghostId: Original negative ID (preserved after sync)\n- id: Current ID (negative if local, positive if synced)\n- LocalGhostIdTree maintains the mapping\n\nParam: id - The concept ID to retrieve. Can be:\n- Negative (e.g., -12345) for local-only concepts\n- Positive (e.g., 789) for server concepts\n\nReturns: Promise resolving to a Concept object in LConcept format.\nReturns default concept (id=0) if not found."
    },
    "GetUserGhostId": {
      "parameters": [
        "userId",
        "ghostId",
        "sessionId"
      ]
    },
    "LConcept": {
      "parameters": [
        "id",
        "userId",
        "typeId",
        "categoryId",
        "accessId",
        "characterValue",
        "typeCharacter",
        "isNew",
        "entryTimeStamp",
        "updatedTimeStamp",
        "referentId"
      ]
    },
    "LConnection": {
      "parameters": [
        "id",
        "ofTheConceptId",
        "toTheConceptId",
        "typeId",
        "orderId",
        "accessId"
      ]
    },
    "LocalConceptsData": {
      "parameters": []
    },
    "LocalSyncData": {
      "parameters": []
    },
    "LocalTransaction": {
      "parameters": []
    },
    "LogEvent": {
      "parameters": [
        "EventName",
        "EventDescription",
        "event"
      ]
    },
    "Logger": {
      "parameters": []
    },
    "LoginToBackend": {
      "parameters": [
        "email",
        "password",
        "application"
      ],
      "documentation": "Authenticates a user with the backend API and obtains an access token.\n\nThis is the primary authentication function that validates user credentials against the backend\nserver and retrieves a JWT bearer token for subsequent API requests.\n\n**Authentication Flow:**\n1. Sends email and password to backend login endpoint\n2. Receives JWT token in response\n3. Automatically stores token in TokenStorage.BearerAccessToken\n4. Token is used for all subsequent authenticated API calls\n5. Logs the authentication attempt for audit purposes\n\n**Features:**\n- Automatic token storage (no manual handling required)\n- Error handling and logging\n- Application-specific authentication\n- Performance and audit logging\n\n**Security Notes:**\n- Credentials are sent over HTTPS (ensure BaseUrl uses HTTPS)\n- Token is stored in memory (TokenStorage)\n- Token should be refreshed before expiration\n- Never log or expose the token in client-side code\n\nParam: email - The user's email address. Must be a valid registered email.\nUsed as the primary login identifier.\nParam: password - The user's password. Sent to backend for verification.\nShould meet password complexity requirements.\nParam: application - The application identifier for multi-tenant authentication.\nDefaults to \"boomconsole.com\". Used to scope authentication\nto specific applications in the system.\n\nReturns: Promise resolving to the authentication result object containing:\n- data.token: The JWT bearer token\n- user information\n- session details\nReturns undefined on error"
    },
    "MakeTheInstanceConcept": {
      "parameters": [
        "type",
        "referent",
        "composition",
        "userId",
        "passedAccessId",
        "passedSessionId",
        "referentId"
      ],
      "documentation": "This is the basic function of the concept connection system. This function let's you create a concept within the constraints of the\nconcept connection system. This function is the building block of the concept connection system.\nParam: type this is the type of the concept. You can also think of this as the key of concept. first_name, last_name etc.\nParam: referent the actual value of the concept. The actual name of value of the concept.\nParam: composition this is a boolean that defines if the concept is a composition or not. If this is a composition then other things are also\nconnected internally with this concept. If composition is true then always a new concept is created otherwise it checks if the concept already exists\nand creates only in the case that the concept does not already exists with its type and value as its unique identifier.\nParam: userId the userId of the creator.\nParam: passedAccessId this is the accessId of the creator. By default should be 4.\nParam: passedSessionId this is the session that is created by the system.\nParam: referentId In case we need this concept to refer to any other concept.\nReturns: a concept which is either newly created or an older concept that already exists."
    },
    "MakeTheInstanceConceptLocal": {
      "parameters": [
        "type",
        "referent",
        "composition",
        "userId",
        "accessId",
        "sessionInformationId",
        "referentId",
        "actions"
      ],
      "documentation": "Creates or retrieves an instance concept locally - the core building block of the concept-connection system.\n\nThis is THE fundamental function for creating concepts in local storage. It implements an intelligent\nget-or-create pattern that checks for existing concepts before creating new ones, preventing duplicates\nwhile supporting both unique instances and composition concepts.\n\n**Core Behaviors:**\n1. **Composition Mode (composition=true)**: Always creates a new concept\n- Used for containers/objects that need unique instances\n- Marks concept with isComposition flag\n- Example: Each \"Project\" is unique, even with same name\n\n2. **Instance Mode (composition=false)**: Get-or-create pattern\n- Checks if concept with same type and value exists\n- Returns existing if found (deduplication)\n- Creates new only if not found\n- Example: \"Published\" status concept reused across items\n\n3. **Long Text Handling**: Values >255 characters always create new\n- Prevents expensive lookups on large text\n- Each long text gets unique concept\n\n**Type String Processing:**\n- **Best Practice**: Always pass type with \"the_\" prefix (e.g., \"the_name\", \"the_email\")\n- Auto-correction: If missing, \"the_\" is automatically added internally\n- \"name\" → \"the_name\" (auto-corrected)\n- \"email\" → \"the_email\" (auto-corrected)\n- \"the_status\" → \"the_status\" (already correct)\n- Creates type concept if it doesn't exist\n- **Recommendation**: Use explicit \"the_\" prefix for code clarity and consistency\n\n**Sync and Storage:**\n- Adds concept to LocalSyncData queue for backend sync\n- Stores in LocalConceptsData (IndexedDB)\n- Tracks in actions parameter for batch operations\n- Assigns negative ID (virtual/local)\n\n**Process Flow:**\n1. Normalizes type string (adds \"the_\" prefix)\n2. Creates/retrieves type concept via MakeTheTypeConceptLocal\n3. If composition=true: Creates new concept immediately\n4. If referent length >255: Creates new concept\n5. If regular instance: Checks for existing by type+value\n6. Returns existing or creates new\n7. Attaches type information\n8. Adds to sync queue\n\nParam: type - The type/key of the concept. **Should follow the format \"the_xyz\"**.\nRepresents what kind of data this is.\nExamples: \"the_name\", \"the_email\", \"the_status\", \"the_first_name\"\n\n**Note**: If you pass without \"the_\" prefix (e.g., \"name\"), the code will\nautomatically add it internally (becomes \"the_name\"). However, best practice\nis to always include the \"the_\" prefix for clarity and consistency.\n\nParam: referent - The actual value/content of the concept.\nThe human-readable data (e.g., \"Alice\", \"alice@example.com\", \"Active\").\nCan be empty string for composition concepts.\n\nParam: composition - Boolean flag determining creation behavior.\n- true: Always creates new concept (unique instances)\n- false: Get-or-create pattern (reuses existing)\nDefaults to false.\n\nParam: userId - The ID of the user creating this concept. Used for ownership and permissions.\n\nParam: accessId - Access control level. Typically 4 (default internal access).\nControls who can view/modify this concept.\n\nParam: sessionInformationId - Session identifier for tracking. Defaults to 999 (system).\nUsed for audit logging and session management.\n\nParam: referentId - Optional reference to another concept ID.\nUsed when this concept is an instance of or refers to another concept.\nDefaults to 0 (no reference).\n\nParam: actions - Action tracking object that accumulates all created concepts and connections.\nUsed for batch operations, rollback, and sync management.\nStructure: { concepts: Concept[], connections: Connection[] }\n\nReturns: Promise resolving to the created or retrieved Concept object with:\n- Negative ID if newly created locally\n- Attached type information (concept.type)\n- All standard concept properties"
    },
    "MakeTheTimestamp": {
      "parameters": [
        "type",
        "referent",
        "userId",
        "accessId",
        "sessionInformationId"
      ]
    },
    "MakeTheTypeConceptApi": {
      "parameters": [
        "type",
        "userId"
      ],
      "documentation": "This function is used to check the type concpet of a passed string\nif the text is \"the_person\" then the function finds the related concept\nParam: type This is the type of the concept that needs to be created.\nParam: userId This is the userId of the creator.\nReturns: the concept created."
    },
    "MakeTheTypeConceptLocal": {
      "parameters": [
        "typeString",
        "sessionId",
        "sessionUserId",
        "userId",
        "actions"
      ],
      "documentation": "Creates or retrieves a type concept locally - handles hierarchical type system.\n\nType concepts are placeholders/templates (e.g., \"the_first_name\", \"the_email\") that define\nwhat kind of data a concept represents. They have no actual value themselves.\n\n**Hierarchical Processing (Complex Logic)**:\n- Single word (e.g., \"status\"): Creates simple type concept with typeId=51\n- Compound words (e.g., \"the_person_email\"): Splits into parts and creates hierarchy:\n1. Creates category concept from first part (\"the_person\")\n2. Creates type concept from second part (\"email\")\n3. Creates final concept with category and type linked\n**Uses recursion** to build multi-level type hierarchies\n\nAlways checks for existing type concept before creating to prevent duplicates.\n\nParam: typeString - The type name to create (e.g., \"the_status\", \"the_person_email\")\nParam: sessionId - Session identifier (typically 999)\nParam: sessionUserId - Session user ID (typically 999, not used)\nParam: userId - User creating the type concept\nParam: actions - Action tracking for batch operations\nReturns: Type Concept (existing or newly created)"
    },
    "PatcherStructure": {
      "parameters": []
    },
    "Prototype": {
      "parameters": []
    },
    "RecursiveSearchApi": {
      "parameters": [
        "composition",
        "listLinkers",
        "textSearch",
        "fullLinkers"
      ],
      "documentation": "Performs recursive search through composition hierarchy.\nSearches through nested compositions using linker relationships.\n\n**Complex Logic**: Constructs SearchQuery, fetches composition IDs and connections,\nprocesses internal/external connections, and builds composition objects from results.\n\nParam: composition - Root composition ID to start search from (default: 0)\nParam: listLinkers - Array of linker strings to traverse (default: [])\nParam: textSearch - Text search filter (default: \"\")\nParam: fullLinkers - Array of full linker paths (default: [])\nReturns: Array of composition objects with connections"
    },
    "RecursiveSearchApiNewRawFullLinker": {
      "parameters": [
        "composition",
        "fullLinkers",
        "textSearch"
      ],
      "documentation": "New version of recursive search with full linker paths.\nAlternative implementation of RecursiveSearchApiRawFullLinker.\n\nParam: composition - Root composition ID (default: 0)\nParam: fullLinkers - Array of complete linker path strings (default: [])\nParam: textSearch - Text search filter (default: \"\")\nReturns: Raw API response object with compositionIds and connections"
    },
    "RecursiveSearchApiRaw": {
      "parameters": [
        "composition",
        "listLinkers",
        "textSearch",
        "fullLinkers"
      ],
      "documentation": "Performs recursive search returning raw API response.\nReturns unprocessed result with composition IDs and connection arrays.\n\nParam: composition - Root composition ID (default: 0)\nParam: listLinkers - Array of linker strings (default: [])\nParam: textSearch - Text search filter (default: \"\")\nParam: fullLinkers - Array of full linker paths (default: [])\nReturns: Raw API response object with compositionIds, internalConnections, externalConnections"
    },
    "RecursiveSearchApiRawFullLinker": {
      "parameters": [
        "composition",
        "fullLinkers",
        "textSearch"
      ],
      "documentation": "Performs recursive search using full linker paths, returning raw response.\nUses complete linker path specifications instead of partial linkers.\n\nParam: composition - Root composition ID (default: 0)\nParam: fullLinkers - Array of complete linker path strings (default: [])\nParam: textSearch - Text search filter (default: \"\")\nReturns: Raw API response object with compositionIds and connections"
    },
    "RecursiveSearchApiWithInternalConnections": {
      "parameters": [
        "composition",
        "listLinkers",
        "textSearch"
      ],
      "documentation": "Performs recursive search returning results with internal connections.\nSimilar to RecursiveSearchApi but uses different connection formatting.\n\nParam: composition - Root composition ID to start search from (default: 0)\nParam: listLinkers - Array of linker strings to traverse (default: [])\nParam: textSearch - Text search filter (default: \"\")\nReturns: Array of composition objects with internal connections"
    },
    "RecursiveSearchListener": {
      "parameters": [
        "id",
        "linkers",
        "searchText",
        "format"
      ],
      "documentation": "Creates an observable that performs recursive multi-level searches and updates subscribers when results change.\nParam: id - The starting concept ID for the recursive search\nParam: linkers - Array of linker type names defining the traversal path\nParam: searchText - Optional text to search for in linked concepts\nParam: format - Output format (RAW for raw IDs, undefined for formatted compositions)\nReturns: Observable instance for the recursive search"
    },
    "SchemaQuery": {
      "parameters": [
        "query",
        "token"
      ],
      "documentation": "Executes a free-schema query once without creating a subscription.\nParam: query - FreeschemaQuery object with search parameters\nParam: token - Authentication token\nReturns: Promise resolving to formatted query results"
    },
    "SchemaQueryListener": {
      "parameters": [
        "query",
        "token"
      ],
      "documentation": "Creates an observable that executes a free-schema query and updates subscribers when results change.\nParam: query - FreeschemaQuery object with search, filter, sort, and pagination parameters\nParam: token - Authentication token\nReturns: Observable instance for the query results"
    },
    "SearchAllConcepts": {
      "parameters": [
        "type",
        "search",
        "composition",
        "token",
        "inpage",
        "page"
      ],
      "documentation": "Searches for concepts matching specified criteria with pagination support.\n\nThis is the primary search function for querying concepts in the system. It performs a\nbackend API search with multiple filter parameters and returns paginated results.\n\n**Search Capabilities:**\n- Text-based search on concept character values\n- Type filtering (search within specific concept types)\n- Composition filtering (search within specific compositions)\n- Pagination support (page size and page number)\n- Authenticated requests (requires valid access token)\n\n**Use Cases:**\n- Finding concepts by name or partial text match\n- Filtering results by concept type (e.g., only \"Person\" concepts)\n- Searching within a specific composition context\n- Building paginated search UIs\n\nParam: type - The type filter for the search. Can be a type name (e.g., \"Person\", \"Document\")\nor empty string to search all types. Used to narrow results to specific concept types.\nParam: search - The search query string. Searches against concept character values (names/titles).\nCan be partial matches depending on backend implementation.\nParam: composition - Composition context filter. Can be a composition ID or identifier to limit\nsearch scope to concepts within a specific composition. Use empty string for global search.\nParam: token - The JWT authentication token. Required for authorized access to backend search API.\nShould be the BearerAccessToken from TokenStorage.\nParam: inpage - Number of results per page. Controls page size for pagination. Defaults to 10.\nMust be a positive integer.\nParam: page - The page number to retrieve (1-indexed). Defaults to 1 (first page).\nUse for pagination: page 1, page 2, etc.\n\nReturns: Promise resolving to an array of matching Concept objects, or empty array on error/no results"
    },
    "SearchLinkInternal": {
      "parameters": [
        "searchQuery",
        "token"
      ]
    },
    "SearchLinkInternalAll": {
      "parameters": [
        "searchQuery",
        "token"
      ]
    },
    "SearchLinkMultipleAll": {
      "parameters": [
        "searchQuery",
        "token",
        "caller",
        "format"
      ]
    },
    "SearchLinkMultipleAllObservable": {
      "parameters": [
        "searchQuery",
        "token",
        "format"
      ],
      "documentation": "Creates a new multi-search observable.\nParam: searchQuery - Array of SearchQuery objects defining search conditions\nParam: token - Authentication token\nParam: format - Output format (DATAID by default)"
    },
    "SearchLinkMultipleApi": {
      "parameters": [
        "searchQuery",
        "token"
      ],
      "documentation": "Searches for concepts using multiple linked queries with performance tracking.\nExecutes complex multi-criteria searches across concept relationships.\n\nParam: searchQuery - Array of SearchQuery objects defining linked search criteria\nParam: token - Authentication token (optional, defaults to empty string)\nReturns: Array of search results or empty array on error"
    },
    "SearchQuery": {
      "parameters": []
    },
    "SearchStructure": {
      "parameters": []
    },
    "SearchWithLinker": {
      "parameters": [
        "searchQuery",
        "token"
      ],
      "documentation": "Searches concepts using multiple linker queries with authentication.\nAllows complex searches by combining multiple search query conditions.\n\nParam: searchQuery - Array of search query objects defining search criteria\nParam: token - Authentication token (optional, defaults to empty string)\nReturns: Array of matching search results or empty array on error"
    },
    "SearchWithTypeAndLinker": {
      "parameters": [
        "searchStructure",
        "searchQuery",
        "token"
      ],
      "documentation": "This function will help you search a concept by their type and also to query inside of it.\nPut the number of compositions you want to get in the searchStructure which can be set by inpage and page\nThen the type should be set in searchQuery for the compositionName.\nInside the searchQuery array this you can set the full linker / listLinker in the searchQuery.\nThis will not give the id of the structures."
    },
    "SearchWithTypeAndLinkerApi": {
      "parameters": [
        "searchStructure",
        "searchQuery",
        "token"
      ],
      "documentation": "Searches concepts by type with additional linker query filters.\nCombines type-based search with linker queries for refined results.\n\n**Complex Logic**: Constructs URL with search structure parameters, then applies\nlinker queries as POST body for multi-dimensional filtering.\n\nParam: searchStructure - Structure containing search text, type, pagination, and auth flag\nParam: searchQuery - Array of linker query objects for additional filtering\nParam: token - Authentication token (optional, defaults to empty string)\nReturns: Array of concepts matching both type and linker criteria, or empty array on error"
    },
    "Selector": {
      "parameters": [
        "mainType",
        "selector",
        "parentElement",
        "filterType",
        "inpage"
      ]
    },
    "SessionData": {
      "parameters": []
    },
    "Signin": {
      "parameters": [
        "signinInfo"
      ],
      "documentation": "Alternative sign-in function using SigninModel structure.\n\nSimilar to LoginToBackend but returns FreeschemaResponse format and\ndoes NOT automatically store the token. You must manually handle the token.\n\nParam: signinInfo - SigninModel object containing email and password\nReturns: FreeschemaResponse with {status, statusCode, message, data} structure\ndata contains user information and token (not auto-stored)"
    },
    "Signup": {
      "parameters": [
        "signupModel"
      ],
      "documentation": "Registers a new user account on the backend server.\n\nCreates a new user with provided signup information including email, password,\nusername, and profile details.\n\nParam: signupModel - SignupModel object containing:\n- email: User's email address\n- password: User's password\n- username: Unique username\n- fname: First name\n- lname: Last name\n- title: Title/gender\n- type: User type\nReturns: FreeschemaResponse with signup result (status, message, data)"
    },
    "SignupEntity": {
      "parameters": [
        "signupData"
      ],
      "documentation": "Registers a new entity (organization/company account) on the backend.\n\nCreates entity-type accounts (different from regular user accounts).\nIncludes timestamp for registration tracking.\n\nParam: signupData - Signup data object containing:\n- type: Entity type\n- username: Unique username\n- title: Title/designation\n- email: Entity email\n- password: Account password\n- timestamp: Registration timestamp (ISO string)\n- fname: First name / Entity name\n- lname: Last name / Additional info\nReturns: Response JSON with entity creation result\n@throws Error if signup fails (404, 500, or other HTTP errors)"
    },
    "SplitStrings": {
      "parameters": [
        "typeString"
      ]
    },
    "StatefulWidget": {
      "parameters": [],
      "documentation": "Stateful widget with lifecycle management and hierarchical composition.\n\nProvides a React-like component system with state management, lifecycle hooks,\nand parent-child widget relationships. Extend this class to create custom widgets\ncompatible with the concept connection system."
    },
    "SyncData": {
      "parameters": []
    },
    "TokenStorage": {
      "parameters": []
    },
    "TrashTheConcept": {
      "parameters": [
        "id",
        "token"
      ],
      "documentation": "Deletes (trashes) a concept from the backend with explicit token auth.\n\nAlternative delete function that requires manual token passing.\nSimilar to DeleteTheConcept but with explicit authentication parameter.\n\nParam: id - The concept ID to delete\nParam: token - Bearer authentication token\n@throws Error if deletion fails"
    },
    "UpdateComposition": {
      "parameters": [
        "patcherStructure"
      ]
    },
    "UpdateCompositionLocal": {
      "parameters": [
        "patcherStructure",
        "actions"
      ],
      "documentation": "Updates/patches a composition in local storage with new or modified properties.\n\n**Complex Patching Logic** (197 lines):\n1. Fetches latest composition data from backend (all connections and concepts)\n2. Iterates through patchObject properties to add/update\n3. For each property:\n- If value is object/array: Creates composition concept and nested composition\n- If value is primitive: Creates instance concept with value\n- Checks if concept type already exists in composition\n- If exists: Marks old connections for deletion (replaces old value)\n- If new: Simply adds new connection\n4. Creates connections between parent composition and new/updated concepts\n5. Deletes old connections (cleanup)\n6. Syncs changes to backend\n\n**Use Case**: Updating fields in an existing composition without recreating it entirely.\n\nParam: patcherStructure - Object containing:\n- compositionId: The composition to update\n- ofTheCompositionId: Optional parent composition for nested updates\n- patchObject: Object with key-value pairs to add/update\n- userId, sessionId, accessId: User context\nParam: actions - Action tracking for batch operations and rollback"
    },
    "UserBinaryTree": {
      "parameters": []
    },
    "Validator": {
      "parameters": []
    },
    "ViewInternalData": {
      "parameters": [
        "ids"
      ]
    },
    "ViewInternalDataApi": {
      "parameters": [
        "ids"
      ],
      "documentation": "Retrieves internal data (connections and concepts) for multiple compositions.\nReturns a dictionary mapping composition IDs to their internal connection arrays.\n\n**Complex Logic**: For each composition ID, fetches connections and related concepts,\nbuilds a dictionary structure, and bulk-loads concepts for efficiency.\n\nParam: ids - Array of composition IDs to fetch internal data for\nReturns: Dictionary mapping composition ID to Connection arrays, or empty array on error"
    },
    "WidgetTree": {
      "parameters": [],
      "documentation": "Hierarchical widget tree structure for nested widget composition.\n\nRepresents a widget and its complete metadata including HTML, styles, scripts,\nlifecycle hooks, and child widgets. Used for building complex widget hierarchies."
    },
    "buildFetchConnection": {
      "parameters": [
        "query"
      ],
      "documentation": "Builds a complete FetchConnection request object from a partial query,\nfilling unspecified fields with their zero/empty defaults.\n\nUse this instead of constructing FetchConnection manually so you only\nneed to specify the fields relevant to your query permutation.\n\nParam: query - Partial query with only the fields you need.\nReturns: A fully initialised FetchConnection ready to send to the API."
    },
    "clearAllCaches": {
      "parameters": [],
      "documentation": "Clears all application caches (both in-memory and IndexedDB).\n\nCall this on user logout or when you need to force-refresh all cached data.\nClears widget caches (standard, latest, recent) and query caches."
    },
    "convertFromConceptToLConcept": {
      "parameters": [
        "concept"
      ]
    },
    "convertFromLConceptToConcept": {
      "parameters": [
        "lconcept"
      ]
    },
    "convertWidgetTreeToWidget": {
      "parameters": [
        "tree",
        "parentElement",
        "isMain",
        "props",
        "state",
        "parentWidget"
      ],
      "documentation": "Converts a widget tree structure into live widget instances and mounts to DOM.\n\nRecursively instantiates widgets from tree data, sets up parent-child relationships,\napplies styles, and mounts to the specified parent element.\n\nParam: tree - The widget tree to convert\nParam: parentElement - DOM element to mount the widget to\nParam: isMain - Whether this is the main/root widget\nParam: props - Optional properties to pass to the widget\nParam: state - Optional state data to pass to the widget\nParam: parentWidget - Parent widget instance for context\nReturns: Promise resolving to the instantiated widget"
    },
    "convertWidgetTreeToWidgetWithWrapper": {
      "parameters": [
        "tree",
        "parentElement",
        "isMain",
        "state",
        "isInDevelopment",
        "parentWidget"
      ],
      "documentation": "Converts widget tree to widget instances with development mode wrapper support.\n\nSimilar to convertWidgetTreeToWidget but includes development mode features\nlike visual editing and type selection.\n\nParam: tree - The widget tree to convert\nParam: parentElement - DOM element to mount the widget to\nParam: isMain - Whether this is the main/root widget\nParam: state - Optional state data to pass to the widget\nParam: isInDevelopment - Enable development mode features\nParam: parentWidget - Parent widget instance for context\nReturns: Promise resolving to the instantiated widget"
    },
    "createFormFieldData": {
      "parameters": [
        "fieldName"
      ]
    },
    "createPrototypeLocal": {
      "parameters": [
        "prototype",
        "passedTransaction"
      ]
    },
    "dispatchIdEvent": {
      "parameters": [
        "id",
        "data"
      ],
      "documentation": "Method to dispatch Event received from SW\nParam: id number|string\nParam: data any"
    },
    "getFromDatabaseWithType": {
      "parameters": [
        "databaseName",
        "type",
        "id"
      ]
    },
    "getObjectsFromIndexDb": {
      "parameters": [
        "databaseName"
      ]
    },
    "getR2PresignedUploadUrl": {
      "parameters": [
        "body",
        "token"
      ],
      "documentation": "Method to request an R2 pre-signed upload URL from the backend.\nParam: body Request metadata for the file to upload.\nParam: token string?\nReturns: UploadResponse<R2PresignedUploadUrlData> | null"
    },
    "getUploadFileLimit": {
      "parameters": []
    },
    "getUserDetails": {
      "parameters": [],
      "documentation": "Returns user details synchronously.\nPriority: in-memory profileCache (encrypted) → legacy localStorage(\"profile\") fallback."
    },
    "getUserDetailsWithRefresh": {
      "parameters": [],
      "documentation": "Returns user details after hydrating storage and refreshing an expired token.\nUse this when callers need a valid token from the user details object."
    },
    "getWidgetBulkFromId": {
      "parameters": [
        "widgetId",
        "visitedWidgets",
        "bulkWidget",
        "token"
      ],
      "documentation": "Builds a complete widget tree from bulk widget data.\n\nRecursively processes widget hierarchy including children, custom functions,\nlibraries, and lifecycle hooks to create a full WidgetTree structure.\n\nParam: widgetId - The widget ID to build tree for\nParam: visitedWidgets - Array tracking visited widgets to prevent cycles\nParam: bulkWidget - Bulk widget data from backend\nParam: token - Optional authentication token\nReturns: Promise resolving to the complete widget tree"
    },
    "getWidgetFromId": {
      "parameters": [
        "widgetId",
        "visitedWidgets",
        "token"
      ],
      "documentation": "Fetches and builds a complete widget tree from a widget ID.\n\nParam: widgetId - The widget ID to fetch\nParam: visitedWidgets - Array to track visited widgets (prevents cycles)\nParam: token - Optional authentication token\nReturns: Promise resolving to the widget tree"
    },
    "importLatestWidget": {
      "parameters": [
        "widgetId",
        "attachNode",
        "props",
        "showDocumentation"
      ],
      "documentation": "Imports the latest version of a widget into cache for later rendering.\n\nFetches widget data, builds widget tree, and stores in DataCache.\nUsed for pre-loading widgets before rendering.\n\nParam: widgetId - The widget origin ID to import\nParam: attachNode - Optional DOM element (for future use)\nParam: props - Optional properties to pass to the widget\nParam: showDocumentation - Whether to show documentation button\nReturns: Promise resolving to the widget tree"
    },
    "importRecentWidget": {
      "parameters": [
        "widgetId",
        "attachNode",
        "props",
        "showDocumentation"
      ],
      "documentation": "Imports the latest version of a widget into cache for later rendering.\n\nFetches widget data, builds widget tree, and stores in DataCache.\nUsed for pre-loading widgets before rendering.\n\nParam: widgetId - The widget origin ID to import\nParam: attachNode - Optional DOM element (for future use)\nParam: props - Optional properties to pass to the widget\nParam: showDocumentation - Whether to show documentation button\nReturns: Promise resolving to the widget tree"
    },
    "init": {
      "parameters": [
        "url",
        "aiurl",
        "accessToken",
        "nodeUrl",
        "enableAi",
        "applicationName",
        "enableSW",
        "flags",
        "parameters"
      ],
      "documentation": "Initializes the mftsccs-browser package and sets up all required subsystems.\n\nThis is the FIRST function you must call before using any other functionality in the package.\nIt configures the backend connections, initializes local databases, sets up service workers,\nand prepares the system for concept and connection operations.\n\n**Initialization Process:**\n1. Configures Base URLs for backend, AI, and node servers\n2. Sets up access token for authenticated requests\n3. Generates unique application randomizer for IndexedDB identification\n4. Initializes feature flags (logging, access tracking, etc.)\n5. Checks for service worker support\n6. Initializes local IndexedDB databases for caching\n7. Sets up message listeners for service worker communication\n8. Optionally registers and activates service worker\n9. Falls back to main thread if service worker unavailable\n\n**Subsystems Initialized:**\n- IndexedDB databases (concepts, connections, settings)\n- Service worker (if enabled and supported)\n- Message passing between main thread and service worker\n- Broadcast channel for cross-tab communication\n- Access token storage\n- Logging and monitoring systems\n- Access tracking (if enabled)\n\nParam: url - The backend API base URL (C# data fabric server).\nThis is the primary server for concept and connection data.\nExample: \"https://api.example.com\" or \"https://backend.yourdomain.com\"\n**Required** for most operations.\n\nParam: aiurl - The AI service URL for AI-powered features and data preloading.\nIf not using AI features, pass empty string and set enableAi to false.\nExample: \"https://ai.example.com\"\n\nParam: accessToken - JWT bearer token for authenticated API requests.\nCan be empty string on initialization - set later with updateAccessToken().\nToken is obtained through LoginToBackend() or Signin().\nExample: \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...\"\n\nParam: nodeUrl - The Node.js server URL for business logic and security features.\nUsed for additional server-side operations.\nExample: \"https://node.example.com\"\n\nParam: enableAi - Flag to enable/disable AI features and AI data preloading to IndexedDB.\nSet to false if not using AI features or if aiurl is not provided.\nDefault: true\n\nParam: applicationName - Unique identifier for your application.\nUsed to create separate IndexedDB instances for different apps.\nExample: \"my-app-v1\", \"project-manager\", \"knowledge-base\"\nUseful when multiple applications share the same domain.\n\nParam: enableSW - Service worker configuration object. Service worker enables background\nprocessing for better performance and offline capabilities.\n- activate: boolean - Enable/disable service worker\n- scope: string (optional) - Service worker scope path (default: \"/\")\n- pathToSW: string (optional) - Path to service worker file (default: \"/service-worker.js\")\n- manual: boolean (optional) - If true, assumes SW already registered manually\nExample: {activate: true, scope: \"/\", pathToSW: \"/sw.js\"}\n\nParam: flags - Feature flags object for enabling/disabling various features:\n- logApplication: boolean - Enable application-level logging\n- logPackage: boolean - Enable package-level logging\n- accessTracker: boolean - Enable access tracking/analytics\n- isTest: boolean - Mark as test environment\nAll default to false if not specified.\n\nParam: parameters - Additional configuration parameters:\n- logserver: string - Custom log server URL (default: \"https://logdev.freeschema.com\")\n- isPwa: boolean - Enable PWA offline persistence to IndexedDB (default: false)\n- enableCache: boolean - Enable/disable widget and FreeschemaQuery caching.\nWhen false, QueryCacheManager and WidgetCacheManager skip all reads and writes\n(memory and IndexedDB). Stored in Environments under key 'enableCache' so it\ncan be read or changed at runtime via Environments.getValue/setValue.\nDefault: true.\n\nReturns: Promise<boolean> - Returns true if initialization succeeds, undefined if it fails.\nOn failure, falls back to main thread operation and logs warnings."
    },
    "orderTheConnections": {
      "parameters": [
        "connections",
        "order"
      ]
    },
    "recursiveFetch": {
      "parameters": [
        "id",
        "connectionList",
        "compositionList",
        "visitedConcepts"
      ],
      "documentation": "## Format justdata ##\nParam: id\nParam: connectionList\nParam: compositionList\nParam: visitedConcepts\n@returns"
    },
    "recursiveFetchNew": {
      "parameters": [
        "id",
        "connectionList",
        "conceptList",
        "compositionList",
        "visitedConcepts"
      ]
    },
    "removeAllChildren": {
      "parameters": [
        "parent"
      ]
    },
    "renderImportedWidget": {
      "parameters": [
        "widgetId",
        "attachNode",
        "props",
        "showDocumentation"
      ],
      "documentation": "Renders a previously imported widget from cache.\n\nRetrieves widget tree from DataCache and renders it to the DOM.\nMust call importLatestWidget() first to populate cache.\n\nParam: widgetId - The widget origin ID to render\nParam: attachNode - DOM element to attach the widget to\nParam: props - Optional properties to pass to the widget\nParam: showDocumentation - Whether to show documentation button\nReturns: Promise resolving to the rendered widget instance"
    },
    "renderLatestWidget": {
      "parameters": [
        "widgetId",
        "attachNode",
        "props",
        "showDocumentation"
      ],
      "documentation": "Renders the latest published version of a widget.\n\nFetches and renders the most recent version of a widget by origin ID.\nAutomatically handles \"use latest\" flag for child widgets.\n\nParam: widgetId - The widget origin ID to render\nParam: attachNode - DOM element to attach the widget to\nParam: props - Optional properties to pass to the widget\nParam: showDocumentation - Whether to show documentation button"
    },
    "renderPage": {
      "parameters": [
        "pageId",
        "attachNode",
        "props",
        "showDocumentation"
      ],
      "documentation": "Renders a complete page with its widgets and properties.\n\nFetches page data, applies page-level properties (meta tags, styles), and renders\nthe page body widget. Adds fspage class for styling.\n\nParam: pageId - The page concept ID to render\nParam: attachNode - DOM element to attach the page to\nParam: props - Optional properties to pass to the page widget\nParam: showDocumentation - Whether to show documentation button"
    },
    "renderWidget": {
      "parameters": [
        "widgetId",
        "attachNode",
        "props",
        "showDocumentation"
      ],
      "documentation": "Renders a specific widget by ID.\n\nFetches widget data and renders the exact version specified (not latest).\n\nParam: widgetId - The specific widget ID to render\nParam: attachNode - DOM element to attach the widget to\nParam: props - Optional properties to pass to the widget\nParam: showDocumentation - Whether to show documentation button\nReturns: Promise resolving to the rendered widget instance"
    },
    "searchLinkMultipleListener": {
      "parameters": [
        "searchQueries",
        "token",
        "format"
      ],
      "documentation": "Creates an observable that executes multiple search queries and updates subscribers when results change.\nParam: searchQueries - Array of SearchQuery objects defining search conditions\nParam: token - Authentication token\nParam: format - Output format (DATAID by default)\nReturns: Observable instance for the search results"
    },
    "sendEmail": {
      "parameters": [
        "body",
        "token",
        "bulkOrOptions",
        "recaptchaToken"
      ]
    },
    "sendMessage": {
      "parameters": [
        "type",
        "payload",
        "retryCount"
      ],
      "documentation": "Method to send message to the service worker from main thread\nParam: type string\nParam: payload any\nReturns: Promise<any>"
    },
    "sendPersonalEmail": {
      "parameters": [
        "body",
        "token",
        "options"
      ]
    },
    "setHasActivatedSW": {
      "parameters": [
        "value"
      ]
    },
    "storeToDatabase": {
      "parameters": [
        "databaseName",
        "object"
      ]
    },
    "unwrapContainers": {
      "parameters": [
        "parentElement",
        "selector"
      ],
      "documentation": "Recursively unwraps all matching container elements within a parent.\n\nParam: parentElement - Parent element to search within\nParam: selector - CSS selector for containers to unwrap"
    },
    "updateAccessToken": {
      "parameters": [
        "accessToken",
        "session",
        "refreshToken"
      ],
      "documentation": "Updates the JWT access token used for authenticated API requests.\n\nThis function should be called after user authentication to set or update the bearer token\nthat will be used for all subsequent authenticated operations. The token is stored in\nTokenStorage and automatically included in API request headers.\n\n**When to Use:**\n- After successful login (LoginToBackend or Signin)\n- When refreshing an expired token\n- When switching between user sessions\n- When restoring a saved session on app reload\n\n**Token Flow:**\n1. User logs in via LoginToBackend() or Signin()\n2. Backend returns JWT token\n3. Call updateAccessToken() with the token\n4. Token is stored in memory (TokenStorage.BearerAccessToken)\n5. All API calls automatically use this token\n6. If service worker enabled, token is synced to service worker\n\n**Security Notes:**\n- Token is stored in memory only (not persisted to disk)\n- Token is cleared on page refresh (unless you save/restore it)\n- Never expose token in logs or client-side code\n- Token should be refreshed before expiration\n\nParam: accessToken - The JWT bearer token obtained from authentication.\nFormat: \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...\"\nPass empty string to clear the token (logout).\n\nParam: session - Optional session information to sync with token.\nReserved for future use. Currently not fully implemented.\n\nReturns: void"
    },
    "uploadAttachment": {
      "parameters": [
        "file",
        "token"
      ],
      "documentation": "Generic method to upload file or image\nParam: file File\nReturns: Promise<{message: string, success: boolean, url?: string}>"
    },
    "uploadFile": {
      "parameters": [
        "body",
        "token"
      ],
      "documentation": "Method to upload file to server\nParam: body FormData\nParam: token string?\nReturns: JSON | string | null"
    },
    "uploadImage": {
      "parameters": [
        "body",
        "token"
      ],
      "documentation": "Method to upload image to server\nParam: body FormData\nParam: token string?\nReturns: JSON | string | null"
    },
    "uploadImageV2": {
      "parameters": [
        "body",
        "token"
      ],
      "documentation": "Method to upload image to server\nParam: body FormData\nParam: token string?\nReturns: JSON | string | null"
    },
    "uploadR2Storage": {
      "parameters": [
        "body",
        "token"
      ],
      "documentation": "Method to upload a file or image to R2 storage.\nParam: body FormData. Append the file under the \"file\" key.\nParam: token string?\nReturns: UploadResponse<R2UploadData> | null"
    },
    "uploadToR2PresignedUrl": {
      "parameters": [
        "uploadUrl",
        "file",
        "contentType"
      ],
      "documentation": "Method to upload a file body to a pre-signed R2 URL.\nParam: uploadUrl URL returned by getR2PresignedUploadUrl\nParam: file Blob/File, raw body, or compatible file-like object\nParam: contentType Must match the contentType used when creating the signed URL.\nReturns: Response from R2"
    },
    "uploadWithR2PresignedUrl": {
      "parameters": [
        "file",
        "options",
        "token"
      ],
      "documentation": "Full R2 pre-signed upload workflow: create URL, PUT file to R2, return public URL.\nParam: file Blob/File, raw body, or compatible file-like object\nParam: options Optional fileName/contentType/folder/expiresInSeconds overrides.\nParam: token string?\nReturns: R2PresignedUploadResult"
    }
  }
};

export function getTsccsAutocompleteMetadata(): TsccsAutocompleteMetadata {
  return tsccsAutocompleteMetadata;
}
