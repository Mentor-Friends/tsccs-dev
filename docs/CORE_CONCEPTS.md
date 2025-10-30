# Core Concepts

This document provides an in-depth explanation of the fundamental building blocks of **mftsccs-browser**: Concepts, Connections, and Compositions.

## Table of Contents

- [Introduction](#introduction)
- [Concept](#concept)
  - [What is a Concept?](#what-is-a-concept)
  - [Concept Properties](#concept-properties)
  - [Concept Types](#concept-types)
  - [Working with Concepts](#working-with-concepts)
- [Connection](#connection)
  - [What is a Connection?](#what-is-a-connection)
  - [Connection Properties](#connection-properties)
  - [Connection Direction](#connection-direction)
  - [Working with Connections](#working-with-connections)
- [Composition](#composition)
  - [What is a Composition?](#what-is-a-composition)
  - [Composition Structure](#composition-structure)
  - [Composition Caching](#composition-caching)
  - [Working with Compositions](#working-with-compositions)
- [The Knowledge Graph Model](#the-knowledge-graph-model)
- [Local vs Server Concepts](#local-vs-server-concepts)
  - [Understanding the Virtual ID System](#understanding-the-virtual-id-system)
  - [Ghost ID System](#ghost-id-system)
  - [Server Concepts (Standard)](#server-concepts-standard)
  - [Local Concepts (LConcept)](#local-concepts-lconcept---virtual-id-mode)
  - [How Data Flows](#how-data-flows-server-vs-local)
  - [Data Storage Architecture](#data-storage-architecture)
  - [When to Use Each Type](#when-to-use-each-type)
  - [Hybrid Approach](#hybrid-approach-recommended)
- [Advanced Concepts](#advanced-concepts)
- [Data Usage Patterns](#data-usage-patterns)
- [Best Practices](#best-practices)
- [Summary](#summary)

## Introduction

The **mftsccs-browser** package implements a knowledge graph data model consisting of three primary elements:

1. **Concepts** - The nodes (entities)
2. **Connections** - The edges (relationships)
3. **Compositions** - Structured groupings of concepts and connections

Together, these elements allow you to build complex, interconnected data structures that can represent virtually any domain - from social networks to organizational hierarchies to semantic knowledge bases.

## Concept

### What is a Concept?

A **Concept** is the fundamental unit of data in the system. It represents any entity, idea, or object in your domain. Think of concepts as the "nouns" in your knowledge graph.

**Examples of Concepts:**
- A person: "John Doe"
- An organization: "Acme Corporation"
- A document: "Project Proposal Q4 2024"
- A location: "New York City"
- A category: "Software Engineering"
- An abstract idea: "Innovation"

### Concept Properties

Every concept has the following properties:

```typescript
class Concept {
  id: number;                    // Unique identifier
  userId: number;                // Owner/creator of the concept
  typeId: number;                // Type classification (e.g., Person, Organization)
  categoryId: number;            // Category classification (e.g., Employee, Customer)
  characterValue: string;        // Text representation (name/title)
  referentId: number | null;     // Optional reference to another concept
  accessId: number;              // Access control level (Public, Private, etc.)
  entryTimeStamp: Date | string; // Creation timestamp
  updatedTimeStamp: Date | string; // Last update timestamp
  typeCharacter: string;         // Type name as string
  applicationId: number;         // Application identifier
  isNew: boolean;                // Flag for new concepts
  isComposition: boolean;        // Flag if this is a composition root
  isTemp: boolean;               // Flag for temporary concepts
  isSynced: boolean;             // Sync status with server
}
```

#### Key Properties Explained

| Property | Type | Description | Example |
|----------|------|-------------|---------|
| **id** | number | Unique identifier for the concept | `12345` |
| **characterValue** | string | The human-readable name or text | `"John Doe"`, `"Project Alpha"` |
| **typeId** | number | Classifies what kind of concept this is | `1` (Person), `2` (Organization) |
| **categoryId** | number | Further classification within the type | `1` (Employee), `2` (Customer) |
| **userId** | number | The user who created/owns this concept | `101` |
| **referentId** | number \| null | Links to another concept (for instances) | `5` (references a type concept) |
| **accessId** | number | Access control level | `1` (Public), `2` (Private) |

### Concept Types

Concepts are classified using **typeId** and **categoryId**. This two-level classification system allows for flexible organization.

#### Type Classification Examples

```javascript
// Define your type constants
const TYPE_PERSON = 1;
const TYPE_ORGANIZATION = 2;
const TYPE_DOCUMENT = 3;
const TYPE_LOCATION = 4;
const TYPE_EVENT = 5;

// Create concepts with different types
const person = await CreateTheConcept('Alice Smith', TYPE_PERSON, CATEGORY_EMPLOYEE);
const company = await CreateTheConcept('Tech Corp', TYPE_ORGANIZATION, CATEGORY_BUSINESS);
const meeting = await CreateTheConcept('Q4 Review', TYPE_EVENT, CATEGORY_MEETING);
```

#### Category Classification Examples

```javascript
// Categories for TYPE_PERSON
const CATEGORY_EMPLOYEE = 1;
const CATEGORY_CONTRACTOR = 2;
const CATEGORY_CUSTOMER = 3;

// Categories for TYPE_DOCUMENT
const CATEGORY_PROPOSAL = 1;
const CATEGORY_REPORT = 2;
const CATEGORY_CONTRACT = 3;
```

### Working with Concepts

#### Creating a Concept

```javascript
import { CreateTheConcept } from 'mftsccs-browser';

const concept = await CreateTheConcept(
  'Alice Smith',      // characterValue - the name/text
  1,                  // typeId - type classification
  1                   // categoryId - category classification
);

console.log(concept.id);              // 12345
console.log(concept.characterValue);   // "Alice Smith"
```

#### Retrieving a Concept

```javascript
import { GetTheConcept } from 'mftsccs-browser';

const concept = await GetTheConcept(12345);

if (concept) {
  console.log(`Found: ${concept.characterValue}`);
  console.log(`Type: ${concept.typeId}`);
  console.log(`Created: ${concept.entryTimeStamp}`);
}
```

#### Searching for Concepts

```javascript
import { SearchAllConcepts } from 'mftsccs-browser';

// Search by character value
const results = await SearchAllConcepts('Alice');

results.forEach(concept => {
  console.log(`${concept.characterValue} (ID: ${concept.id})`);
});
```

#### Bulk Retrieval

```javascript
import { GetConceptBulk } from 'mftsccs-browser';

const conceptIds = [123, 456, 789];
const concepts = await GetConceptBulk(conceptIds);

// Returns array of concepts in the same order as requested IDs
```

## Connection

### What is a Connection?

A **Connection** represents a directed relationship between two concepts. Connections are the "verbs" or "relationships" in your knowledge graph that link concepts together.

**Examples of Connections:**
- Person → "works at" → Organization
- Document → "authored by" → Person
- Task → "belongs to" → Project
- Person → "manages" → Person
- Concept → "is a type of" → Concept

### Connection Properties

Every connection has the following properties:

```typescript
class Connection {
  id: number;                    // Unique identifier
  ofTheConceptId: number;        // Source concept ID (FROM)
  toTheConceptId: number;        // Target concept ID (TO)
  typeId: number;                // Type of connection
  orderId: number;               // Order for sorting connections
  userId: number;                // Owner/creator
  accessId: number;              // Access control level
  entryTimeStamp: Date | string; // Creation timestamp
  terminationDateTime: Date;     // Optional end date
  typeCharacter: string;         // Type name as string
  applicationId: number;         // Application identifier
  isTemp: boolean;               // Temporary flag
}
```

#### Key Properties Explained

| Property | Type | Description | Example |
|----------|------|-------------|---------|
| **ofTheConceptId** | number | The source/from concept ID | `123` (Alice) |
| **toTheConceptId** | number | The target/to concept ID | `456` (Tech Corp) |
| **typeId** | number | Type of relationship | `5` (works_at) |
| **orderId** | number | Sort order when multiple connections exist | `0`, `1`, `2` |
| **userId** | number | Creator of the connection | `101` |

### Connection Direction

Connections are **directional** - they go FROM one concept TO another concept.

```
┌─────────┐                    ┌─────────────┐
│  Alice  │ ──── works at ───> │  Tech Corp  │
│ (ID:123)│                    │  (ID: 456)  │
└─────────┘                    └─────────────┘

ofTheConceptId: 123
toTheConceptId: 456
typeId: 5 (works_at)
```

#### Bidirectional Relationships

To create a bidirectional relationship, create two connections:

```javascript
// Alice works at Tech Corp
await CreateTheConnection(aliceId, techCorpId, CONNECTION_WORKS_AT);

// Tech Corp employs Alice
await CreateTheConnection(techCorpId, aliceId, CONNECTION_EMPLOYS);
```

### Working with Connections

#### Creating a Connection

```javascript
import { CreateTheConnection } from 'mftsccs-browser';

const connection = await CreateTheConnection(
  123,  // ofTheConceptId - source concept
  456,  // toTheConceptId - target concept
  5,    // typeId - type of connection
  0     // orderId - order (optional, defaults to 0)
);

console.log(connection.id);  // 789
```

#### Retrieving Connections

```javascript
import { GetConnectionById } from 'mftsccs-browser';

const connection = await GetConnectionById(789);

console.log(`From: ${connection.ofTheConceptId}`);
console.log(`To: ${connection.toTheConceptId}`);
console.log(`Type: ${connection.typeId}`);
```

#### Getting Connections of a Concept

```javascript
import { GetConnectionOfTheConcept } from 'mftsccs-browser';

// Get all connections FROM a concept
const connections = await GetConnectionOfTheConcept(conceptId);

connections.forEach(conn => {
  console.log(`Connected to: ${conn.toTheConceptId}`);
});
```

#### Deleting a Connection

```javascript
import { DeleteConnectionById } from 'mftsccs-browser';

await DeleteConnectionById(789);
console.log('Connection removed');
```

### Connection Types

Like concepts, connections have types that define what kind of relationship they represent.

#### Common Connection Types

```javascript
// Define connection type constants
const CONNECTION_WORKS_AT = 5;
const CONNECTION_MANAGES = 6;
const CONNECTION_OWNS = 7;
const CONNECTION_MEMBER_OF = 8;
const CONNECTION_AUTHORED_BY = 9;
const CONNECTION_PARENT_OF = 10;
const CONNECTION_RELATED_TO = 11;

// Use them to create meaningful relationships
await CreateTheConnection(personId, companyId, CONNECTION_WORKS_AT);
await CreateTheConnection(managerId, employeeId, CONNECTION_MANAGES);
await CreateTheConnection(personId, teamId, CONNECTION_MEMBER_OF);
```

## Composition

### What is a Composition?

A **Composition** is a structured grouping that includes:
- A **main concept** (the root)
- **Connections** from/to the main concept
- Related **concepts** connected via those connections
- **Sub-compositions** (nested structures)

Compositions allow you to retrieve and work with an entire sub-graph of related data in one operation.

### Composition Structure

```typescript
class Composition {
  id: number;                    // ID of the main concept
  mainConcept: Concept;          // The root concept
  connections: Connection[];     // All relevant connections
  concepts: Concept[];           // All connected concepts
  subcompositions: number[];     // IDs of nested compositions
  cached: any;                   // Cached nested data
}
```

#### Visual Example

```
                     ┌──────────────┐
                     │   Project    │ ← Main Concept
                     │  (ID: 100)   │
                     └──────────────┘
                            │
        ┌───────────────────┼───────────────────┐
        │                   │                   │
        ▼                   ▼                   ▼
  ┌─────────┐         ┌─────────┐         ┌─────────┐
  │ Task 1  │         │ Task 2  │         │ Team A  │
  │ (ID:101)│         │ (ID:102)│         │ (ID:103)│
  └─────────┘         └─────────┘         └─────────┘

Composition structure:
{
  id: 100,
  mainConcept: { id: 100, characterValue: "Project Alpha" },
  connections: [
    { ofTheConceptId: 100, toTheConceptId: 101, typeId: CONNECTION_HAS_TASK },
    { ofTheConceptId: 100, toTheConceptId: 102, typeId: CONNECTION_HAS_TASK },
    { ofTheConceptId: 100, toTheConceptId: 103, typeId: CONNECTION_ASSIGNED_TO }
  ],
  concepts: [
    { id: 101, characterValue: "Task 1" },
    { id: 102, characterValue: "Task 2" },
    { id: 103, characterValue: "Team A" }
  ],
  subcompositions: [101, 102, 103]
}
```

### Composition Caching

Compositions support caching for better performance when working with complex, nested structures.

```javascript
import { GetCompositionWithCache } from 'mftsccs-browser';

// First call fetches from server and caches
const composition = await GetCompositionWithCache(conceptId, connectionTypeId);

// Subsequent calls use cached data
const cachedComposition = await GetCompositionWithCache(conceptId, connectionTypeId);
```

### Working with Compositions

#### Creating a Composition

```javascript
import { CreateComposition } from 'mftsccs-browser';

// Create main concept
const project = await CreateTheConcept('Project Alpha', TYPE_PROJECT, CATEGORY_WORK);

// Create related concepts
const task1 = await CreateTheConcept('Design Phase', TYPE_TASK, CATEGORY_WORK);
const task2 = await CreateTheConcept('Development Phase', TYPE_TASK, CATEGORY_WORK);

// Create connections
await CreateTheConnection(project.id, task1.id, CONNECTION_HAS_TASK);
await CreateTheConnection(project.id, task2.id, CONNECTION_HAS_TASK);

// Get the composition
const composition = await CreateComposition(project.id, CONNECTION_HAS_TASK);

console.log('Main concept:', composition.mainConcept.characterValue);
console.log('Number of connections:', composition.connections.length);
console.log('Number of related concepts:', composition.concepts.length);
```

#### Retrieving a Composition

```javascript
import { GetComposition } from 'mftsccs-browser';

const composition = await GetComposition(
  projectId,               // Main concept ID
  CONNECTION_HAS_TASK      // Connection type to include
);

// Access the data
console.log('Project:', composition.mainConcept.characterValue);

composition.concepts.forEach(concept => {
  console.log(`- ${concept.characterValue}`);
});
```

#### Multi-Level Compositions

```javascript
import { GetCompositionList } from 'mftsccs-browser';

// Get composition with multiple connection types
const composition = await GetCompositionList(
  projectId,
  [CONNECTION_HAS_TASK, CONNECTION_HAS_MILESTONE, CONNECTION_ASSIGNED_TO]
);

// Access nested sub-compositions
composition.subcompositions.forEach(subId => {
  console.log('Sub-composition ID:', subId);
});
```

#### Bulk Composition Retrieval

```javascript
import { GetCompositionBulk } from 'mftsccs-browser';

const compositionIds = [100, 200, 300];
const compositions = await GetCompositionBulk(compositionIds, CONNECTION_TYPE);

compositions.forEach(comp => {
  console.log(`${comp.mainConcept.characterValue}: ${comp.concepts.length} related items`);
});
```

## The Knowledge Graph Model

The combination of Concepts, Connections, and Compositions forms a powerful knowledge graph model.

### Example: Organization Structure

```javascript
// Create concepts
const company = await CreateTheConcept('Tech Corp', TYPE_ORG, CATEGORY_COMPANY);
const engDept = await CreateTheConcept('Engineering', TYPE_DEPT, CATEGORY_DEPT);
const alice = await CreateTheConcept('Alice Smith', TYPE_PERSON, CATEGORY_EMPLOYEE);
const bob = await CreateTheConcept('Bob Jones', TYPE_PERSON, CATEGORY_EMPLOYEE);

// Create relationships
await CreateTheConnection(company.id, engDept.id, CONNECTION_HAS_DEPARTMENT);
await CreateTheConnection(engDept.id, alice.id, CONNECTION_HAS_MEMBER);
await CreateTheConnection(engDept.id, bob.id, CONNECTION_HAS_MEMBER);
await CreateTheConnection(alice.id, bob.id, CONNECTION_MANAGES);

// Get the full structure
const orgStructure = await GetComposition(company.id, CONNECTION_HAS_DEPARTMENT);
```

**Resulting Graph:**

```
         Tech Corp (Company)
              │
              │ has_department
              ▼
         Engineering (Dept)
              │
      ┌───────┴───────┐
      │ has_member    │ has_member
      ▼               ▼
  Alice Smith      Bob Jones
      │ manages────────┘
```

### Example: Document Management

```javascript
// Create concepts
const folder = await CreateTheConcept('Q4 Reports', TYPE_FOLDER, CATEGORY_DOCS);
const doc1 = await CreateTheConcept('Sales Report', TYPE_DOC, CATEGORY_REPORT);
const doc2 = await CreateTheConcept('Budget Plan', TYPE_DOC, CATEGORY_PLAN);
const author = await CreateTheConcept('Alice Smith', TYPE_PERSON, CATEGORY_EMPLOYEE);

// Create relationships
await CreateTheConnection(folder.id, doc1.id, CONNECTION_CONTAINS);
await CreateTheConnection(folder.id, doc2.id, CONNECTION_CONTAINS);
await CreateTheConnection(doc1.id, author.id, CONNECTION_AUTHORED_BY);
await CreateTheConnection(doc2.id, author.id, CONNECTION_AUTHORED_BY);

// Query documents by author
const authorDocs = await SearchWithLinker('Report', author.id);
```

## Local vs Server Concepts

The package supports both **server-synced** concepts and **local-only** concepts with a sophisticated **Virtual ID System** for offline-first architecture.

### Understanding the Virtual ID System

The Virtual ID System is the foundation of offline-first data management in mftsccs-browser.

#### ID Types

| ID Type | Range | Usage | Example |
|---------|-------|-------|---------|
| **Positive IDs** | `1` to `∞` | Real server-assigned IDs | `12345` |
| **Negative IDs** | `-∞` to `-1` | Virtual/local IDs (not yet synced) | `-12345` |
| **Zero ID** | `0` | Empty/not found indicator | `0` |

#### How Virtual IDs Work

```
┌─────────────────────────────────────────────────────────────────┐
│                     VIRTUAL ID LIFECYCLE                        │
└─────────────────────────────────────────────────────────────────┘

1. CREATE LOCAL CONCEPT
   ┌──────────────┐
   │ Local Create │ ──> Assigns negative ID: -12345
   └──────────────┘
   - Stored in IndexedDB
   - Works completely offline
   - ID is negative to indicate "virtual" status

2. SYNC TO SERVER
   ┌──────────────┐
   │ Sync Process │ ──> Server assigns real ID: 54321
   └──────────────┘
   - Uploads concept to backend
   - Backend returns positive ID
   - Original negative ID preserved as "ghostId"

3. POST-SYNC STATE
   ┌──────────────┐
   │ Final State  │ ──> id: 54321, ghostId: -12345
   └──────────────┘
   - id: Real server ID (positive)
   - ghostId: Original local ID (negative)
   - Both IDs can be used to retrieve the concept
```

#### Ghost ID System

**Ghost IDs** preserve the original local IDs after syncing to the server.

```javascript
// Create a local concept
const localConcept = await CreateTheConceptLocal('My Note', typeId, userId);
console.log(localConcept.id);  // -12345 (negative = local/virtual)

// Later, sync to server
await LocalSyncData.SyncDataOnline();

// After sync, the concept has both IDs
const syncedConcept = await GetTheConcept(localConcept.id);
console.log(syncedConcept.id);       // 54321 (positive = real server ID)
console.log(syncedConcept.ghostId);  // -12345 (preserved original local ID)

// Both IDs work for retrieval
const byRealId = await GetTheConcept(54321);    // ✅ Works
const byGhostId = await GetTheConcept(-12345);  // ✅ Also works!
```

**Why Ghost IDs Matter:**
- Local references remain valid after sync
- Other local concepts can still reference the original negative ID
- Enables seamless transition from offline to online mode
- No need to update all references when syncing

### Server Concepts (Standard)

Server concepts are the default mode for persistent, shareable data.

**Characteristics:**
- ✅ Synced with backend server immediately
- ✅ Persistent across devices and sessions
- ✅ Shared across users
- ✅ Use positive IDs (e.g., `12345`)
- ⚠️ Require network connection to create/update

```javascript
import { CreateTheConcept, GetTheConcept } from 'mftsccs-browser';

// Creates on server and returns with positive ID
const concept = await CreateTheConcept('Server Item', TYPE_NOTE, CATEGORY_WORK);
console.log(concept.id);  // 12345 (positive = server-assigned)

// Retrieve from server (with local caching)
const retrieved = await GetTheConcept(12345);
```

### Local Concepts (LConcept) - Virtual ID Mode

Local concepts use virtual IDs and work completely offline.

**Characteristics:**
- ✅ Stored only in browser IndexedDB
- ✅ Work offline without network
- ✅ Use negative IDs (e.g., `-12345`)
- ✅ Can be synced later when online
- ✅ Ghost ID preserved after sync
- ⚠️ Not automatically shared across devices

```javascript
import { CreateTheConceptLocal, GetTheConceptLocal } from 'mftsccs-browser';

// Creates locally with negative ID
const localConcept = await CreateTheConceptLocal('Draft Note', TYPE_NOTE, CATEGORY_WORK);
console.log(localConcept.id);  // -12345 (negative = virtual/local)

// Retrieve from local storage
const retrieved = await GetTheConceptLocal(-12345);

// Check if concept is synced
if (retrieved.id > 0) {
  console.log('Synced to server with ID:', retrieved.id);
} else {
  console.log('Still local-only with virtual ID:', retrieved.id);
}
```

### How Data Flows: Server vs Local

#### Server-First Flow (Online Mode)

```
┌──────────┐     ┌──────────┐     ┌──────────────┐
│  Client  │────>│ Backend  │────>│  IndexedDB   │
│   Call   │     │  Server  │     │   (Cache)    │
└──────────┘     └──────────┘     └──────────────┘

1. CreateTheConcept() called
2. HTTP POST to backend
3. Server assigns positive ID (e.g., 12345)
4. Returns concept with server ID
5. Cached locally in IndexedDB
6. Both server and local storage have the data
```

#### Local-First Flow (Offline Mode)

```
┌──────────┐     ┌──────────────┐     ┌──────────┐
│  Client  │────>│  IndexedDB   │────>│ Backend  │
│   Call   │     │   (Local)    │     │  Server  │
└──────────┘     └──────────────┘     └──────────┘
                                       (Later Sync)

1. CreateTheConceptLocal() called
2. Assigns negative virtual ID (e.g., -12345)
3. Stored in IndexedDB immediately
4. No network call needed
5. Later: SyncDataOnline() uploads to server
6. Server assigns real ID, ghostId preserves original
```

### Converting Between Types

```javascript
import {
  convertFromLConceptToConcept,
  convertFromConceptToLConcept
} from 'mftsccs-browser';

// Convert local to server format (for syncing)
const localConcept = { id: -123, characterValue: 'Test', ... };
const serverConcept = convertFromLConceptToConcept(localConcept);
// Removes local-specific properties, prepares for server upload

// Convert server to local format (for offline work)
const serverConcept = { id: 456, characterValue: 'Test', ... };
const localConcept = convertFromConceptToLConcept(serverConcept);
// Adds local-specific properties, prepares for IndexedDB storage
```

### Data Storage Architecture

#### IndexedDB Structure

```javascript
// Local database stores multiple object stores:

LocalConceptsData (ObjectStore)
├─ Concepts with negative IDs (virtual)
├─ Concepts with positive IDs (cached from server)
└─ Concepts with ghostId (synced, dual-ID access)

LocalConnectionData (ObjectStore)
├─ Connections with negative IDs (virtual)
├─ Connections with positive IDs (cached)
└─ Connections with ghostId (synced)

LocalId (ObjectStore)
├─ { id: 0, value: -123456 }  // Next available concept ID
└─ { id: 1, value: -789012 }  // Next available connection ID
```

#### ID Generation

```javascript
// Virtual IDs are generated from a pool stored in IndexedDB

LocalId Storage:
- Reserves blocks of 10 IDs at a time
- Concurrent tabs/windows use different ID ranges
- Prevents ID collisions in offline mode

Example:
Tab 1: -12345, -12346, -12347, ... -12354
Tab 2: -12355, -12356, -12357, ... -12364
```

### When to Use Each Type

#### Use Server Concepts When:
- ✅ Data needs to be shared across users or devices
- ✅ Persistence is critical (don't want local-only storage)
- ✅ Collaboration is required
- ✅ You have reliable network connectivity
- ✅ Immediate consistency across users is needed

#### Use Local Concepts When:
- ✅ Building draft/temporary data
- ✅ Working offline or with spotty connectivity
- ✅ Privacy is a concern (don't want to sync to server yet)
- ✅ Testing without affecting production server data
- ✅ Creating bulk data that will be synced later
- ✅ Building forms with progressive data entry

### Hybrid Approach (Recommended)

Combine both for the best user experience:

```javascript
import { CreateTheConceptLocal, LocalSyncData } from 'mftsccs-browser';

// User creates data offline
const draft = await CreateTheConceptLocal('Draft Article', TYPE_ARTICLE, CATEGORY_BLOG);
console.log(draft.id);  // -12345

// User continues working offline...
await CreateTheConnectionLocal(draft.id, authorId, CONNECTION_AUTHORED_BY);

// When online, sync everything at once
try {
  await LocalSyncData.SyncDataOnline();
  console.log('All local data synced to server');

  // After sync, draft.id becomes positive (real server ID)
  // draft.ghostId preserves -12345 for local references
} catch (error) {
  console.log('Still offline, data remains local');
}
```

## Advanced Concepts

### Referent Concepts

Concepts can reference other concepts using the `referentId` property. This is useful for creating instances of types.

```javascript
// Create a type concept
const personType = await CreateTheConcept('Person', TYPE_TYPE, CATEGORY_TYPE);

// Create instance referencing the type
const alice = await CreateTheConcept('Alice', TYPE_PERSON, CATEGORY_EMPLOYEE);
alice.referentId = personType.id;
```

### Access Control

Use `accessId` to control who can access concepts:

```javascript
import { PRIVATE, PUBLIC, ADMIN } from 'mftsccs-browser';

// Create private concept
const privateConcept = await CreateTheConcept('Secret', TYPE_NOTE, CATEGORY_PERSONAL);
privateConcept.accessId = PRIVATE;

// Create public concept
const publicConcept = await CreateTheConcept('Announcement', TYPE_POST, CATEGORY_PUBLIC);
publicConcept.accessId = PUBLIC;
```

### Timestamps and Versioning

All concepts track creation and update times:

```javascript
const concept = await GetTheConcept(conceptId);

console.log('Created:', concept.entryTimeStamp);
console.log('Last updated:', concept.updatedTimeStamp);
```

### Temporary and Sync Flags

Control concept behavior with flags:

```javascript
concept.isTemp = true;     // Mark as temporary (won't persist)
concept.isSynced = false;  // Not yet synced to server
concept.isNew = true;      // Newly created
```

## Best Practices

### 1. Consistent Type System

Define and document your type and category constants:

```javascript
// types.js - Centralized type definitions
export const TYPES = {
  PERSON: 1,
  ORGANIZATION: 2,
  DOCUMENT: 3,
  TASK: 4,
  PROJECT: 5
};

export const CATEGORIES = {
  EMPLOYEE: 1,
  CONTRACTOR: 2,
  CUSTOMER: 3,
  INTERNAL: 4,
  EXTERNAL: 5
};

export const CONNECTIONS = {
  WORKS_AT: 5,
  MANAGES: 6,
  MEMBER_OF: 7,
  HAS_TASK: 8,
  AUTHORED_BY: 9
};
```

### 2. Use Compositions for Complex Queries

Instead of making multiple calls, use compositions:

```javascript
// ❌ Bad - Multiple calls
const concept = await GetTheConcept(id);
const connections = await GetConnectionOfTheConcept(id);
const relatedConcepts = await Promise.all(
  connections.map(c => GetTheConcept(c.toTheConceptId))
);

// ✅ Good - Single composition call
const composition = await GetComposition(id, CONNECTION_TYPE);
```

### 3. Leverage Caching

Use cached versions for frequently accessed data:

```javascript
// For data that doesn't change often
const composition = await GetCompositionWithCache(id, CONNECTION_TYPE);
```

### 4. Meaningful Character Values

Use descriptive names for concepts:

```javascript
// ✅ Good
await CreateTheConcept('Q4 2024 Sales Report', TYPE_DOC, CATEGORY_REPORT);

// ❌ Bad
await CreateTheConcept('doc123', TYPE_DOC, CATEGORY_REPORT);
```

### 5. Validate Connection Direction

Always verify you're connecting in the right direction:

```javascript
// Person works at Company
await CreateTheConnection(personId, companyId, CONNECTION_WORKS_AT);

// NOT the other way around
// await CreateTheConnection(companyId, personId, CONNECTION_WORKS_AT); // Wrong!
```

### 6. Use Bulk Operations

When working with multiple items, use bulk operations:

```javascript
// ✅ Good - Single bulk call
const concepts = await GetConceptBulk([id1, id2, id3, id4, id5]);

// ❌ Bad - Multiple individual calls
const concepts = await Promise.all([
  GetTheConcept(id1),
  GetTheConcept(id2),
  GetTheConcept(id3),
  GetTheConcept(id4),
  GetTheConcept(id5)
]);
```

## Data Usage Patterns

### Pattern 1: Progressive Data Entry

Build forms that save as users type, working offline:

```javascript
import { CreateTheConceptLocal, UpdateCompositionLocal } from 'mftsccs-browser';

// Start with local concept
const formDraft = await CreateTheConceptLocal('Form Draft', TYPE_FORM, userId);

// User fills fields progressively
await UpdateCompositionLocal({
  compositionId: formDraft.id,
  patchObject: { the_name: 'John' },
  userId, sessionId, accessId
});

// Continue adding fields as user progresses
await UpdateCompositionLocal({
  compositionId: formDraft.id,
  patchObject: { the_email: 'john@example.com' },
  userId, sessionId, accessId
});

// When ready, sync to server
await LocalSyncData.SyncDataOnline();
// formDraft.id now positive, ghostId preserves original
```

### Pattern 2: Bulk Import with Virtual IDs

Import large datasets efficiently using virtual IDs:

```javascript
import { CreateTheConceptLocal, CreateTheConnectionLocal, LocalSyncData } from 'mftsccs-browser';

// Import 1000 records offline
const concepts = [];
for (let i = 0; i < 1000; i++) {
  const concept = await CreateTheConceptLocal(`Record ${i}`, TYPE_DATA, userId);
  concepts.push(concept);
  // Each gets a unique negative ID: -12345, -12346, etc.
}

// Create connections between them (all local)
for (let i = 0; i < concepts.length - 1; i++) {
  await CreateTheConnectionLocal(
    concepts[i].id,      // Negative ID works
    concepts[i + 1].id,  // Negative ID works
    CONNECTION_NEXT
  );
}

// Sync all at once in batches
await LocalSyncData.SyncDataOnline();
// All 1000 concepts and connections uploaded
// All IDs converted to positive with ghostIds preserved
```

### Pattern 3: Multi-User Collaboration

Handle concurrent edits with virtual IDs:

```javascript
// User A creates local concepts
const userA_concept = await CreateTheConceptLocal('User A Note', TYPE_NOTE, userAId);
// ID: -12345

// User B creates local concepts (different tab/device)
const userB_concept = await CreateTheConceptLocal('User B Note', TYPE_NOTE, userBId);
// ID: -12355 (different ID range, no collision)

// Both sync independently
await LocalSyncData.SyncDataOnline(); // User A syncs
await LocalSyncData.SyncDataOnline(); // User B syncs

// Server assigns unique positive IDs to both
// userA_concept.id → 54321, ghostId: -12345
// userB_concept.id → 54322, ghostId: -12355
```

### Pattern 4: Search with Mixed IDs

Search works seamlessly with both positive and negative IDs:

```javascript
import { SearchAllConcepts, GetTheConcept } from 'mftsccs-browser';

// Search returns concepts with any ID type
const results = await SearchAllConcepts('project');

results.forEach(concept => {
  if (concept.id < 0) {
    console.log('Local concept:', concept.characterValue, '(not synced)');
  } else if (concept.ghostId) {
    console.log('Synced concept:', concept.characterValue,
                '(real ID:', concept.id, ', ghost ID:', concept.ghostId, ')');
  } else {
    console.log('Server concept:', concept.characterValue, '(ID:', concept.id, ')');
  }
});

// Retrieve works with any ID
const byCurrent = await GetTheConcept(results[0].id);        // Current ID (positive or negative)
const byGhost = await GetTheConcept(results[0].ghostId);     // Ghost ID (if exists)
// Both return the same concept
```

### Pattern 5: Caching Strategy

Leverage IndexedDB caching for performance:

```javascript
// First request: Fetches from server, caches locally
const concept1 = await GetTheConcept(12345);
// Network request made, result cached in IndexedDB

// Second request: Uses cached version
const concept2 = await GetTheConcept(12345);
// No network request, instant response from IndexedDB

// Local concepts are always in cache
const localConcept = await GetTheConceptLocal(-12345);
// Instant response, no network needed

// Check if concept is in local cache
const cached = await GetTheConceptLocal(12345);
if (cached.id !== 0) {
  console.log('Found in cache');
} else {
  console.log('Not cached, need to fetch from server');
}
```

## Summary

### Core Components
- **Concepts** are the entities/nodes in your knowledge graph (nouns)
- **Connections** are the directed relationships between concepts (verbs)
- **Compositions** are structured groupings of concepts and connections
- Together they form a flexible, powerful knowledge graph system

### Virtual ID System
- **Negative IDs** (-∞ to -1): Virtual/local IDs for offline work
- **Positive IDs** (1 to ∞): Real server-assigned IDs
- **Ghost IDs**: Preserved original local IDs after sync
- **Dual ID Access**: Retrieve concepts by either real ID or ghost ID
- **Offline-First**: Create data locally, sync later

### Best Practices
- Use **server concepts** for shared, persistent data
- Use **local concepts** for drafts, offline work, and bulk imports
- Leverage **virtual IDs** for offline-first applications
- Use **ghost IDs** to maintain local references after sync
- Follow type systems, naming conventions, and bulk operations
- Combine local and server modes for optimal user experience

## Next Steps

- **[Getting Started Guide](./GETTING_STARTED.md)**: Learn how to use these concepts in practice
- **[API Reference](./API_REFERENCE.md)**: Complete function documentation
- **[Examples](./EXAMPLES.md)**: Real-world usage patterns

---

Ready to build your knowledge graph? Start creating concepts and connections today!
