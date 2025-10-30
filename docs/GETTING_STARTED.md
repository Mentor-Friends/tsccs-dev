# Getting Started with mftsccs-browser

This guide will help you get started with **mftsccs-browser**, a powerful TypeScript/JavaScript package for managing concepts, connections, and compositions in a knowledge graph structure.

## Table of Contents

- [Installation](#installation)
- [Initial Setup](#initial-setup)
- [Basic Initialization](#basic-initialization)
- [Your First Concept](#your-first-concept)
- [Creating Connections](#creating-connections)
- [Building Compositions](#building-compositions)
- [Searching for Data](#searching-for-data)
- [Working with Local Data](#working-with-local-data)
- [Service Worker Mode](#service-worker-mode)
- [Authentication](#authentication)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)
- [Next Steps](#next-steps)

## Installation

Install the package using npm or yarn:

```bash
# Using npm
npm install mftsccs-browser

# Using yarn
yarn add mftsccs-browser

# Using pnpm
pnpm add mftsccs-browser
```

## Initial Setup

### 1. Import the Package

```javascript
// ES6 Imports
import { init, CreateTheConcept, GetTheConcept } from 'mftsccs-browser';

// CommonJS (Node.js)
const { init, CreateTheConcept, GetTheConcept } = require('mftsccs-browser');
```

### 2. Configure Your Environment

Create environment configuration files for different deployment environments:

**`.env.development`** (for local development):
```env
BACKEND_URL=https://dev-api.example.com
CLIENT_URL=http://localhost:3000
SECURE_MODE=false
```

**`.env.production`** (for production):
```env
BACKEND_URL=https://api.example.com
CLIENT_URL=https://app.example.com
SECURE_MODE=true
```

## Basic Initialization

Before using any features of the package, you must initialize it with the `init()` function:

```javascript
import { init } from 'mftsccs-browser';

async function initializeApp() {
  try {
    await init({
      url: 'https://your-backend-api.com',      // Your backend API URL
      clientUrl: 'https://your-app.com',        // Your application URL
      secureCoreModePath: false,                 // false = main thread, true = service worker
      makeBaseSecure: true,                      // Enable secure HTTPS endpoints
      identificationKey: 'my-app-v1'            // Optional: Unique app identifier
    });

    console.log('mftsccs-browser initialized successfully!');
  } catch (error) {
    console.error('Initialization failed:', error);
  }
}

initializeApp();
```

### Initialization Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | string | Yes | Your backend API base URL |
| `clientUrl` | string | Yes | Your application's URL |
| `secureCoreModePath` | boolean | No | Enable service worker mode (default: false) |
| `makeBaseSecure` | boolean | No | Force HTTPS for API calls (default: false) |
| `identificationKey` | string | No | Unique identifier for your application |
| `serviceWorkerPath` | string | No | Custom path to service worker file |

## Your First Concept

A **Concept** is the fundamental building block - it represents any entity in your knowledge graph.

### Creating a Concept

```javascript
import { CreateTheConcept } from 'mftsccs-browser';

async function createMyConcept() {
  // Parameters: characterValue, typeId, categoryId
  const concept = await CreateTheConcept(
    'John Doe',    // The text/name of the concept
    1,             // Type ID (e.g., 1 = Person)
    1              // Category ID (e.g., 1 = User)
  );

  console.log('Created concept:', concept);
  // Output: { id: 12345, characterValue: 'John Doe', typeId: 1, categoryId: 1, ... }

  return concept;
}
```

### Retrieving a Concept

```javascript
import { GetTheConcept } from 'mftsccs-browser';

async function getMyConcept(conceptId) {
  const concept = await GetTheConcept(conceptId);

  if (concept) {
    console.log('Found concept:', concept.characterValue);
  } else {
    console.log('Concept not found');
  }

  return concept;
}
```

### Updating a Concept

```javascript
import { UpdateComposition } from 'mftsccs-browser';

async function updateMyConcept(conceptId, newValue) {
  const updatedConcept = await UpdateComposition({
    id: conceptId,
    characterValue: newValue
  });

  return updatedConcept;
}
```

### Deleting a Concept

```javascript
import { DeleteConceptById, TrashTheConcept } from 'mftsccs-browser';

async function deleteMyConcept(conceptId) {
  // Soft delete (move to trash)
  await TrashTheConcept(conceptId);

  // Or hard delete (permanent)
  // await DeleteConceptById(conceptId);
}
```

## Creating Connections

**Connections** represent relationships between concepts. They are directed (from one concept to another).

### Basic Connection Creation

```javascript
import { CreateTheConnection } from 'mftsccs-browser';

async function connectTwoConcepts(fromId, toId, connectionType) {
  // Parameters: ofTheConceptId, toTheConceptId, typeId, orderId (optional)
  const connection = await CreateTheConnection(
    fromId,          // Source concept ID
    toId,            // Target concept ID
    connectionType,  // Type of connection (e.g., 5 = "works at")
    0                // Order ID (for sorting multiple connections)
  );

  console.log('Created connection:', connection);
  return connection;
}
```

### Example: Building a Social Network

```javascript
import { init, CreateTheConcept, CreateTheConnection } from 'mftsccs-browser';

async function buildSocialNetwork() {
  await init({ url: API_URL, clientUrl: CLIENT_URL });

  // Create concepts
  const alice = await CreateTheConcept('Alice', TYPE_PERSON, CATEGORY_USER);
  const bob = await CreateTheConcept('Bob', TYPE_PERSON, CATEGORY_USER);
  const company = await CreateTheConcept('Tech Corp', TYPE_ORG, CATEGORY_BUSINESS);

  // Create connections
  await CreateTheConnection(alice.id, bob.id, CONNECTION_FRIEND);
  await CreateTheConnection(alice.id, company.id, CONNECTION_WORKS_AT);
  await CreateTheConnection(bob.id, company.id, CONNECTION_WORKS_AT);

  console.log('Social network created!');
}
```

### Convenience Function for Connections

```javascript
import { CreateConnectionBetweenTwoConcepts } from 'mftsccs-browser';

async function quickConnect(concept1Id, concept2Id, connectionType) {
  // This function handles both directions if needed
  const connection = await CreateConnectionBetweenTwoConcepts(
    concept1Id,
    concept2Id,
    connectionType
  );

  return connection;
}
```

## Building Compositions

**Compositions** are structured groupings that include a main concept, its connections, and related concepts.

### Basic Composition

```javascript
import { GetComposition } from 'mftsccs-browser';

async function getPersonProfile(personId) {
  // Parameters: conceptId, connectionTypeId
  const composition = await GetComposition(
    personId,
    CONNECTION_TYPE_ALL  // or specific connection type ID
  );

  console.log('Main concept:', composition.mainConcept);
  console.log('Connections:', composition.connections);
  console.log('Related concepts:', composition.concepts);

  return composition;
}
```

### Creating a Composition

```javascript
import { CreateComposition } from 'mftsccs-browser';

async function createProjectComposition() {
  // Create main concept
  const project = await CreateTheConcept('My Project', TYPE_PROJECT, CATEGORY_WORK);

  // Create related concepts
  const task1 = await CreateTheConcept('Task 1', TYPE_TASK, CATEGORY_WORK);
  const task2 = await CreateTheConcept('Task 2', TYPE_TASK, CATEGORY_WORK);

  // Connect tasks to project
  await CreateTheConnection(project.id, task1.id, CONNECTION_HAS_TASK);
  await CreateTheConnection(project.id, task2.id, CONNECTION_HAS_TASK);

  // Get the full composition
  const composition = await CreateComposition(project.id, CONNECTION_HAS_TASK);

  return composition;
}
```

### Composition with Multiple Levels

```javascript
import { GetCompositionList } from 'mftsccs-browser';

async function getNestedComposition(rootId, connectionTypes) {
  // Get composition with multiple connection types
  const composition = await GetCompositionList(
    rootId,
    [CONNECTION_TYPE_1, CONNECTION_TYPE_2, CONNECTION_TYPE_3]
  );

  // Access nested structures
  composition.subcompositions.forEach(sub => {
    console.log('Sub-composition:', sub.mainConcept);
  });

  return composition;
}
```

## Searching for Data

The package provides powerful search capabilities with various filtering options.

### Basic Search

```javascript
import { SearchAllConcepts } from 'mftsccs-browser';

async function simpleSearch(searchTerm) {
  const results = await SearchAllConcepts(searchTerm);

  console.log(`Found ${results.length} results`);
  results.forEach(concept => {
    console.log(`- ${concept.characterValue} (ID: ${concept.id})`);
  });

  return results;
}
```

### Search with Type Filter

```javascript
import { SearchWithTypeAndLinker } from 'mftsccs-browser';

async function searchByType(searchTerm, typeId) {
  const results = await SearchWithTypeAndLinker(
    searchTerm,
    typeId,
    null  // No linker filter
  );

  return results;
}
```

### Search with Relationship Filter

```javascript
import { SearchWithLinker } from 'mftsccs-browser';

async function searchRelatedConcepts(searchTerm, linkedToId) {
  // Find concepts matching searchTerm that are connected to linkedToId
  const results = await SearchWithLinker(searchTerm, linkedToId);

  return results;
}
```

### Advanced Search with Multiple Filters

```javascript
import { SearchLinkMultipleAll } from 'mftsccs-browser';

async function advancedSearch() {
  const searchParams = {
    character: 'engineer',
    typeId: TYPE_PERSON,
    linkerIds: [companyId, departmentId],  // Multiple relationship filters
    connectionTypes: [CONNECTION_WORKS_AT, CONNECTION_MEMBER_OF]
  };

  const results = await SearchLinkMultipleAll(searchParams);
  return results;
}
```

### Recursive Search

```javascript
import { RecursiveSearchApi } from 'mftsccs-browser';

async function deepSearch(rootId, depth = 3) {
  // Search through multiple levels of connections
  const results = await RecursiveSearchApi(
    rootId,
    CONNECTION_TYPE_ALL,
    depth
  );

  return results;
}
```

## Working with Local Data

The package supports offline-first operations with local-only concepts and connections.

### Creating Local Concepts

```javascript
import { CreateDefaultLConcept } from 'mftsccs-browser';

async function createOfflineConcept() {
  // Create a concept that exists only locally (not synced to server)
  const localConcept = await CreateDefaultLConcept(
    'Draft Note',
    TYPE_NOTE,
    CATEGORY_PERSONAL
  );

  console.log('Local concept:', localConcept);
  // Note: Local concepts have IDs starting with a special prefix

  return localConcept;
}
```

### Retrieving Local Concepts

```javascript
import { GetTheConceptLocal } from 'mftsccs-browser';

async function getOfflineConcept(localId) {
  const concept = await GetTheConceptLocal(localId);
  return concept;
}
```

### Creating Local Connections

```javascript
import { CreateTheConnectionLocal } from 'mftsccs-browser';

async function connectLocalConcepts(fromId, toId, typeId) {
  const connection = await CreateTheConnectionLocal(
    fromId,
    toId,
    typeId,
    0  // orderId
  );

  return connection;
}
```

### Converting Between Local and Server Concepts

```javascript
import {
  convertFromLConceptToConcept,
  convertFromConceptToLConcept
} from 'mftsccs-browser';

async function convertConcepts(concept) {
  // Convert local concept to server format
  const serverConcept = await convertFromLConceptToConcept(concept);

  // Convert server concept to local format
  const localConcept = await convertFromConceptToLConcept(serverConcept);

  return { serverConcept, localConcept };
}
```

## Service Worker Mode

Service Worker mode offloads heavy operations to a background thread for better performance.

### Setting Up Service Worker

1. **Create your service worker file** (`public/service-worker.js`):

```javascript
// Import the service worker handler from the package
importScripts('node_modules/mftsccs-browser/dist/service-worker.bundle.js');

// Additional custom service worker logic here
```

2. **Register the service worker in your app**:

```javascript
// In your main application file
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(registration => {
      console.log('Service Worker registered:', registration);
    })
    .catch(error => {
      console.error('Service Worker registration failed:', error);
    });
}
```

3. **Initialize with service worker enabled**:

```javascript
import { init } from 'mftsccs-browser';

await init({
  url: 'https://api.example.com',
  clientUrl: 'https://app.example.com',
  secureCoreModePath: true,  // Enable service worker mode
  serviceWorkerPath: '/service-worker.js'
});
```

### Communicating with Service Worker

```javascript
import { sendMessage } from 'mftsccs-browser';

async function useServiceWorker() {
  // Send messages to service worker
  const concept = await sendMessage('getConcept', { id: 123 });

  // All standard API calls automatically use service worker when enabled
  const newConcept = await CreateTheConcept('New Item', 1, 1);

  return { concept, newConcept };
}
```

## Authentication

The package includes built-in authentication support.

### Sign Up

```javascript
import { Signup } from 'mftsccs-browser';

async function createAccount(email, password, username) {
  try {
    const result = await Signup({
      email: email,
      password: password,
      username: username
    });

    console.log('Account created:', result);
    return result;
  } catch (error) {
    console.error('Signup failed:', error);
    throw error;
  }
}
```

### Sign In

```javascript
import { Signin } from 'mftsccs-browser';

async function login(email, password) {
  try {
    const result = await Signin(email, password);

    console.log('Logged in:', result);
    // Access token is automatically stored

    return result;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
}
```

### Updating Access Token

```javascript
import { updateAccessToken } from 'mftsccs-browser';

function setAuthToken(token) {
  updateAccessToken(token);
  console.log('Access token updated');
}
```

### Session Management

```javascript
import { CreateSession, CreateSessionVisit } from 'mftsccs-browser';

async function trackSession(userId) {
  // Create a new session
  const session = await CreateSession({
    userId: userId,
    deviceInfo: navigator.userAgent
  });

  // Track a page visit
  await CreateSessionVisit({
    sessionId: session.id,
    page: window.location.pathname
  });

  return session;
}
```

## Best Practices

### 1. Always Initialize First

```javascript
// ✅ Good
async function main() {
  await init({ url: API_URL, clientUrl: CLIENT_URL });
  const concept = await CreateTheConcept('Test', 1, 1);
}

// ❌ Bad
async function main() {
  const concept = await CreateTheConcept('Test', 1, 1); // Will fail!
  await init({ url: API_URL, clientUrl: CLIENT_URL });
}
```

### 2. Handle Errors Gracefully

```javascript
async function safeFetch(conceptId) {
  try {
    const concept = await GetTheConcept(conceptId);
    return concept;
  } catch (error) {
    console.error('Failed to fetch concept:', error);
    // Handle error appropriately
    return null;
  }
}
```

### 3. Use Bulk Operations for Performance

```javascript
import { GetConceptBulk } from 'mftsccs-browser';

// ✅ Good - Single bulk request
async function getMultipleConcepts(ids) {
  const concepts = await GetConceptBulk(ids);
  return concepts;
}

// ❌ Bad - Multiple individual requests
async function getMultipleConceptsSlow(ids) {
  const concepts = [];
  for (const id of ids) {
    concepts.push(await GetTheConcept(id)); // Slow!
  }
  return concepts;
}
```

### 4. Cache Frequently Accessed Data

```javascript
import { GetCompositionWithCache } from 'mftsccs-browser';

// Use cached versions for frequently accessed compositions
async function getCachedData(conceptId) {
  const composition = await GetCompositionWithCache(conceptId, CONNECTION_TYPE);
  return composition;
}
```

### 5. Use Type Constants

```javascript
// Define your type constants
const TYPE_PERSON = 1;
const TYPE_ORGANIZATION = 2;
const TYPE_DOCUMENT = 3;

const CONNECTION_WORKS_AT = 5;
const CONNECTION_OWNS = 6;

// Use them consistently
const person = await CreateTheConcept('John', TYPE_PERSON, CATEGORY_USER);
const company = await CreateTheConcept('Acme', TYPE_ORGANIZATION, CATEGORY_BUSINESS);
await CreateTheConnection(person.id, company.id, CONNECTION_WORKS_AT);
```

## Troubleshooting

### Common Issues

#### 1. "Init not called" Error

**Problem**: Trying to use functions before initialization.

**Solution**: Always call `init()` before using any other functions.

```javascript
await init({ url: API_URL, clientUrl: CLIENT_URL });
```

#### 2. CORS Errors

**Problem**: Backend API rejecting requests due to CORS policy.

**Solution**: Ensure your backend allows requests from your `clientUrl`.

```javascript
// Backend configuration (example for Express.js)
app.use(cors({
  origin: 'https://your-app.com',
  credentials: true
}));
```

#### 3. IndexedDB Not Working

**Problem**: Data not persisting locally.

**Solution**: Check browser compatibility and permissions.

```javascript
// Test IndexedDB availability
if (!window.indexedDB) {
  console.error('IndexedDB not supported in this browser');
}
```

#### 4. Service Worker Not Registering

**Problem**: Service worker fails to register.

**Solution**: Ensure service worker file is served from correct path and HTTPS is used in production.

```javascript
if (location.protocol === 'https:' || location.hostname === 'localhost') {
  navigator.serviceWorker.register('/service-worker.js');
}
```

### Debug Mode

Enable detailed logging for debugging:

```javascript
import { init } from 'mftsccs-browser';

await init({
  url: API_URL,
  clientUrl: CLIENT_URL,
  makeBaseSecure: true,
  // Add debug flag if available in your configuration
});

// Check browser console for detailed logs
```

## Next Steps

Now that you understand the basics, explore these advanced topics:

1. **[Core Concepts](./CORE_CONCEPTS.md)** - Deep dive into concepts, connections, and compositions
2. **[API Reference](./API_REFERENCE.md)** - Complete function documentation
3. **[Architecture Guide](./ARCHITECTURE.md)** - Understand the system design
4. **[Examples](./EXAMPLES.md)** - Real-world usage patterns

### Example Projects

Build these projects to practice:

1. **Personal Knowledge Base**: Create concepts for notes, tag them, and link related ideas
2. **Organization Chart**: Model company structure with people, departments, and roles
3. **Product Catalog**: Build a product hierarchy with categories and attributes
4. **Task Manager**: Create tasks, assign them to projects, and track relationships

## Additional Resources

- **GitHub Repository**: [https://github.com/Mentor-Friends/tsccs-dev](https://github.com/Mentor-Friends/tsccs-dev)
- **npm Package**: [https://www.npmjs.com/package/mftsccs-browser](https://www.npmjs.com/package/mftsccs-browser)
- **Issue Tracker**: [GitHub Issues](https://github.com/Mentor-Friends/tsccs-dev/issues)

---

Ready to build something amazing? Start creating your knowledge graph today!
