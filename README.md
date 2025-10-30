# mftsccs-browser

[![npm version](https://img.shields.io/npm/v/mftsccs-browser.svg)](https://www.npmjs.com/package/mftsccs-browser)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

> A comprehensive TypeScript/JavaScript package for managing concepts, connections, and compositions in a knowledge graph structure.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Core Concepts](#core-concepts)
- [Documentation](#documentation)
- [API Overview](#api-overview)
- [Configuration](#configuration)
- [Examples](#examples)
- [Development](#development)
- [Publishing to npm](#publishing-to-npm)
- [Contributing](#contributing)
- [License](#license)

## Overview

**mftsccs-browser** is a powerful browser-based data management library that implements a sophisticated Concept & Connection System (TSCCS). It provides a flexible way to model, store, and query knowledge graphs with support for both online and offline operations.

### 📚 Fully Documented

**Every function, class, and method is documented with concise JSDoc comments** - making it easy for developers to understand and use the package. Hover over any function in your IDE to see parameter types, descriptions, examples, and return values.

### What is it for?

- Building knowledge graphs and semantic networks
- Managing complex relational data in browser applications
- Creating applications that need offline-first data management
- Implementing concept-based search and discovery systems
- Building applications with hierarchical and networked data structures

## Features

### Core Data Management
- **Concept & Connection Management**: Create and manage entities (concepts) and their relationships (connections)
  - **Simplified Connection API** ⭐: `CreateConnection()` auto-creates type concepts, saving developer time
- **Composition System**: Build complex hierarchical structures from concepts and connections
- **Transaction Support (ACID Compliant)** ⭐: Atomic operations with commit/rollback for data integrity
  - Atomicity: All-or-nothing operations
  - Consistency: Guaranteed valid data state
  - Isolation: Transaction isolation
  - Durability: Permanent committed changes
  - Bulk batching: Efficient multi-operation server sync

### Offline & Sync
- **Offline-First Architecture**: Full IndexedDB support with intelligent caching and virtual ID system
- **Virtual ID System**: Negative IDs for local/offline, positive for synced, ghost IDs for reference preservation
- **Sync Capabilities**: Seamless sync between local and remote data with automatic conflict resolution
- **Service Worker Support**: Optional background processing for better performance

### Search & Query
- **Advanced Search**: Powerful search capabilities with filters, type matching, relationship queries, and recursive searches
- **Binary Tree Indexing**: Fast in-memory indexing for optimal performance
- **Bulk Operations**: Efficient batch processing for concepts, connections, and searches

### Reactive & UI
- **Reactive State Management**: Observable pattern with automatic change detection and subscriber notifications
- **Widget System**: Complete UI widget framework with lifecycle management and state handling

### Developer Experience
- **Type System**: Strong TypeScript typing throughout with comprehensive JSDoc documentation
- **Comprehensive Documentation**: All functions, classes, and methods documented with concise JSDoc comments
- **Session Management**: Built-in user authentication and session handling
- **Transaction API**: Simple, intuitive API for complex multi-step operations

## Installation

```bash
npm install mftsccs-browser
```

Or using yarn:

```bash
yarn add mftsccs-browser
```

## Quick Start

### Basic Usage

```javascript
import { init, MakeTheInstanceConceptLocal, GetTheConceptLocal } from 'mftsccs-browser';

// Initialize the package
await init({
  url: 'https://your-backend-api.com',
  clientUrl: 'https://your-app.com',
  secureCoreModePath: false
});

// Create a concept (recommended: local-first with transactions)
const newConcept = await MakeTheInstanceConceptLocal(
  'the_name',           // Type (always use "the_" prefix)
  'My First Concept',   // Value/referent
  false,                // composition mode (false = get-or-create)
  userId,               // User ID
  accessId,             // Access ID
  sessionId             // Session ID
);
console.log('Created:', newConcept);

// Retrieve a concept
const concept = await GetTheConceptLocal(newConcept.id);
console.log('Retrieved:', concept);
```

### Using Transactions (Recommended)

The `LocalTransaction` class provides a robust transaction pattern with commit and rollback support. **Always use transactions for multi-step operations** to ensure ACID compliance and enable bulk batching to the server.

```javascript
import { LocalTransaction } from 'mftsccs-browser';

// Initialize a new transaction
const transaction = new LocalTransaction();
await transaction.initialize();

try {
  // Create concepts within the transaction
  const person = await transaction.MakeTheInstanceConceptLocal(
    'the_person',     // Type
    'Alice',          // Value
    false,            // composition mode
    userId,
    accessId,
    sessionId
  );

  const email = await transaction.MakeTheInstanceConceptLocal(
    'the_email',
    'alice@example.com',
    false,
    userId,
    accessId,
    sessionId
  );

  // Create connection - RECOMMENDED: Use CreateConnection ⭐
  // Auto-creates type concept, no manual MakeTheTypeConceptLocal() needed
  await transaction.CreateConnection(
    person,           // Pass concept objects directly
    email,
    'has_email'      // Type string - automatically handled
  );

  // Commit all changes to server in one atomic operation
  await transaction.commitTransaction();
  console.log('Transaction committed successfully');

} catch (error) {
  // Rollback all changes if any operation fails
  await transaction.rollbackTransaction();
  console.error('Transaction rolled back:', error);
}
```

#### Manual Transaction Tracking (Alternative Approach)

For simpler cases, you can manually track actions:

```javascript
import { MakeTheInstanceConceptLocal, CreateConnection, LocalSyncData } from 'mftsccs-browser';

// Initialize actions tracker
const actions = { concepts: [], connections: [] };

// Create multiple concepts with action tracking
const person = await MakeTheInstanceConceptLocal(
  'the_person', 'Alice', false, userId, accessId, sessionId, 0, actions
);

const email = await MakeTheInstanceConceptLocal(
  'the_email', 'alice@example.com', false, userId, accessId, sessionId, 0, actions
);

// Create connection with action tracking - RECOMMENDED: Use CreateConnection ⭐
await CreateConnection(
  person,          // Pass concept objects
  email,
  'has_email',    // Type string - auto-creates type concept
  actions
);

// Sync all tracked changes to server in one batch
await LocalSyncData.SyncDataOnline(undefined, actions);
console.log('Synced:', actions.concepts.length, 'concepts,', actions.connections.length, 'connections');
```

### With Service Worker (Recommended for Production)

```javascript
import { init, sendMessage } from 'mftsccs-browser';

// Initialize with service worker
await init({
  url: 'https://your-backend-api.com',
  clientUrl: 'https://your-app.com',
  secureCoreModePath: true, // Enable service worker mode
  serviceWorkerPath: '/service-worker.js'
});

// All operations automatically use the service worker
const concepts = await sendMessage('getConcept', { id: 123 });
```

## Core Concepts

### 1. Concept
A **Concept** represents an entity or node in your knowledge graph. Each concept has:
- A unique `id` (positive for server-synced, negative for local/virtual)
- A `characterValue` (text representation)
- `typeId` and `categoryId` for classification
- Relationships to other concepts via connections

**Best Practice**: Use `MakeTheInstanceConceptLocal()` to create concepts with the get-or-create pattern and transaction support. Always use the `"the_"` prefix for type parameters (e.g., `"the_name"`, `"the_email"`).

### 2. Connection
A **Connection** represents a directed relationship between two concepts:
- `ofTheConceptId` → `toTheConceptId` (from → to)
- `typeId` to classify the connection type
- `orderId` for ordering multiple connections

**Best Practice**: Use `CreateConnection()` to create connections - it's simpler and saves development time:
- ✅ **Automatic Type Creation**: No need to call `MakeTheTypeConceptLocal()` manually
- ✅ **Intuitive API**: Pass concept objects directly (not IDs)
- ✅ **Less Boilerplate**: Just provide the type string (e.g., `'has_email'`)
- ✅ **Transaction Compatible**: Works seamlessly with `LocalTransaction` for ACID compliance

Use `CreateTheConnectionLocal()` only when you need fine-grained control or already have the typeId.

### 3. Composition
A **Composition** is a structured grouping that includes:
- A main concept
- Associated connections
- Related concepts
- Nested sub-compositions

### 4. Transaction (ACID Compliance) ⭐
A **Transaction** provides atomic, consistent operations with commit and rollback capabilities:
- **Atomicity**: All operations succeed or fail together
- **Consistency**: Data remains in valid state
- **Isolation**: Transactions are isolated from each other
- **Durability**: Committed changes are permanent

**Why Transactions Matter:**
- ✅ **Bulk Operations**: Send multiple concepts/connections in a single batch to the server
- ✅ **Data Integrity**: Guarantee all-or-nothing operations (no partial updates)
- ✅ **Rollback Support**: Undo all changes if any operation fails
- ✅ **Performance**: Reduce network calls by batching operations
- ✅ **ACID Compliant**: Ensure database-level consistency guarantees

**Best Practice**: Use `LocalTransaction` class for all multi-step operations to ensure data consistency and optimal performance.

```javascript
const transaction = new LocalTransaction();
await transaction.initialize();

try {
  // Multiple operations tracked automatically
  await transaction.MakeTheInstanceConceptLocal(...);
  await transaction.CreateConnectionBetweenTwoConceptsLocal(...);

  // Commit all changes in one atomic batch
  await transaction.commitTransaction();
} catch (error) {
  // Rollback if anything fails
  await transaction.rollbackTransaction();
}
```

For detailed explanations, see [Core Concepts Documentation](./docs/CORE_CONCEPTS.md).

## Documentation

Comprehensive documentation is available throughout the codebase with JSDoc comments on all functions, classes, and methods.

### Documentation Guides

- **[Getting Started Guide](./docs/GETTING_STARTED.md)**: Detailed initialization and first steps
- **[Core Concepts](./docs/CORE_CONCEPTS.md)**: In-depth explanation of concepts, connections, and compositions

### Inline Documentation

All code is fully documented with concise JSDoc comments:

#### API Layer (`src/Api/`)
- **Create APIs**: Creating concepts, connections, characters, text data, and ghost syncing
- **Get/Retrieve APIs**: Fetching concepts, connections, compositions (single and bulk operations)
- **Search APIs**: Internal search, linker-based queries, freeschema queries, recursive searches
- **Delete APIs**: Concept and connection deletion (single and bulk)
- **Authentication APIs**: Login, signin, signup functionality
- **Session APIs**: Session creation and visit tracking
- **Utility APIs**: Type concepts, prototypes, translations, images

#### Services Layer (`src/Services/`)
- **Local Services** (`src/Services/Local/`): Offline-first operations with IndexedDB
  - Concept operations (create, get, update, delete)
  - Connection management (local connections, named connections)
  - Composition handling (JSON conversion, patching, bulk retrieval)
  - Binary tree indexing for performance
  - Virtual ID system (negative IDs for local, positive for synced)
- **Core Services**: Main business logic for concepts, connections, and compositions

#### Widget System (`src/Widgets/`)
- **BaseWidget**: Foundation widget class with DOM management
- **StatefulWidget**: Stateful widgets with full lifecycle (mount, render, update)
- **BuilderStatefulWidget**: Advanced builder pattern widgets
- **RenderServices**: Page and widget rendering utilities
- **CacheWidget**: Generic caching system with LRU and TTL support
- **Observable Pattern**: BaseObserver for reactive UI updates

#### Reactive Wrappers (`src/WrapperFunctions/`)
- **DependencyObserver**: Base observable class for reactive state management
- **Observable Wrappers**: GetComposition, GetLink, RecursiveSearch, SchemaQuery observables
- Automatic change detection and subscriber notifications for real-time updates

## API Overview

### Creating Data (Recommended Approach)

```javascript
import {
  MakeTheInstanceConceptLocal,
  CreateConnection,
  CreateTheCompositionLocal
} from 'mftsccs-browser';

// Create concepts (local-first, with get-or-create pattern)
const person = await MakeTheInstanceConceptLocal(
  'the_person',      // Type with "the_" prefix
  'Alice',           // Value
  false,             // composition mode: false = get-or-create, true = always create new
  userId,
  accessId,
  sessionId
);

const email = await MakeTheInstanceConceptLocal(
  'the_email',
  'alice@example.com',
  false,
  userId,
  accessId,
  sessionId
);

// Create connection - RECOMMENDED: CreateConnection (simplified API) ⭐
// Automatically creates the connection type concept if it doesn't exist
const connection = await CreateConnection(
  person,               // Source concept object
  email,                // Target concept object
  'has_email'          // Type string - auto-creates type concept
);
// ✅ No need to call MakeTheTypeConceptLocal() manually!
// ✅ Pass concept objects directly (not IDs)
// ✅ Saves developer time and reduces boilerplate

// Alternative: CreateTheConnectionLocal (manual type creation required)
// Use this if you already have the typeId or need fine-grained control
const connectionTypeId = await MakeTheTypeConceptLocal('has_email', userId, userId, userId);
const manualConnection = await CreateTheConnectionLocal(
  person.id,           // Must extract ID manually
  email.id,            // Must extract ID manually
  connectionTypeId,    // Must create type concept first
  1000                 // orderId
);

// Create a composition from JSON (local-first)
const composition = await CreateTheCompositionLocal(
  {
    the_title: 'My Project',
    the_description: 'Project details...',
    the_status: 'Active'
  },
  mainConceptId,
  userId
);
```

### Using Transactions for Batch Operations

```javascript
import { MakeTheInstanceConceptLocal, LocalSyncData } from 'mftsccs-browser';

// Track all changes in a transaction
const actions = { concepts: [], connections: [] };

// Create multiple concepts with transaction tracking
const project = await MakeTheInstanceConceptLocal(
  'the_project', 'New Project', false, userId, accessId, sessionId, undefined, actions
);

const task1 = await MakeTheInstanceConceptLocal(
  'the_task', 'Task 1', false, userId, accessId, sessionId, undefined, actions
);

const task2 = await MakeTheInstanceConceptLocal(
  'the_task', 'Task 2', false, userId, accessId, sessionId, undefined, actions
);

// Sync all changes to server in one batch
await LocalSyncData.SyncDataOnline(undefined, actions);
console.log(`Synced ${actions.concepts.length} concepts and ${actions.connections.length} connections`);
```

### Retrieving Data

```javascript
import { GetTheConceptLocal, GetCompositionLocal } from 'mftsccs-browser';

// Get a concept by ID (works with both positive and negative IDs)
const concept = await GetTheConceptLocal(conceptId);

// Get a composition with all related data
const composition = await GetCompositionLocal(conceptId);

// Get composition with ID wrapper (DATAID format)
const compositionWithId = await GetCompositionLocalWithId(conceptId);
```

### Searching

```javascript
import { SearchConcept, SearchWithLinker, SearchWithTypeAndLinker } from 'mftsccs-browser';

// Simple search
const results = await SearchConcept('search term');

// Search with relationship filter
const linkedResults = await SearchWithLinker('search term', linkerConceptId);

// Advanced search with type and linker
const typedResults = await SearchWithTypeAndLinker('search term', typeId, linkerConceptId);
```

### Deleting Data

```javascript
import { DeleteConceptById, DeleteConnectionById } from 'mftsccs-browser';

// Delete a concept
await DeleteConceptById(conceptId);

// Delete a connection
await DeleteConnectionById(connectionId);
```

## Configuration

### Initialization Options

```javascript
await init({
  // Required: Backend API URL
  url: 'https://api.example.com',

  // Required: Your application URL
  clientUrl: 'https://app.example.com',

  // Optional: Enable service worker mode (recommended for production)
  secureCoreModePath: false,

  // Optional: Custom service worker path
  serviceWorkerPath: '/sw.js',

  // Optional: Enable detailed logging
  makeBaseSecure: true,

  // Optional: Custom configuration
  identificationKey: 'your-app-key'
});
```

### Environment Variables

For development, create a `.env.development` file:

```env
BACKEND_URL=https://dev-api.example.com
CLIENT_URL=http://localhost:3000
SECURE_MODE=false
```

For production, create a `.env.production` file:

```env
BACKEND_URL=https://api.example.com
CLIENT_URL=https://app.example.com
SECURE_MODE=true
```

## Examples

### Example 1: Building a Knowledge Graph with Transactions

```javascript
import { init, LocalTransaction, GetCompositionLocal } from 'mftsccs-browser';

// Initialize
await init({ url: API_URL, clientUrl: CLIENT_URL });

// Create a transaction for atomic operations
const transaction = new LocalTransaction();
await transaction.initialize();

try {
  // Create concepts within the transaction
  const person = await transaction.MakeTheInstanceConceptLocal(
    'the_person', 'John Doe', false, userId, accessId, sessionId
  );

  const company = await transaction.MakeTheInstanceConceptLocal(
    'the_organization', 'Acme Corp', false, userId, accessId, sessionId
  );

  const role = await transaction.MakeTheInstanceConceptLocal(
    'the_role', 'Software Engineer', false, userId, accessId, sessionId
  );

  // Create connections within the transaction using simplified API ⭐
  // Auto-creates type concepts - no manual MakeTheTypeConceptLocal() needed!
  await transaction.CreateConnection(person, company, 'works_at');
  await transaction.CreateConnection(person, role, 'has_role');

  // Commit all changes atomically to server
  await transaction.commitTransaction();
  console.log('Knowledge graph created and synced successfully');

  // Get the full composition (works with synced IDs)
  const personProfile = await GetCompositionLocal(person.id);
  console.log('Person Profile:', personProfile);

} catch (error) {
  // Rollback all changes if anything fails
  await transaction.rollbackTransaction();
  console.error('Transaction failed and rolled back:', error);
}
```

### Example 2: Searching and Filtering

```javascript
import { SearchConcept, SearchWithTypeAndLinker } from 'mftsccs-browser';

// Search for all concepts matching a term
const allResults = await SearchConcept('software');

// Search for people who work at a specific company
const employees = await SearchWithTypeAndLinker(
  'engineer',
  TYPE_PERSON,
  companyConceptId
);
```

### Example 3: Offline-First Application with Transactions

```javascript
import { init, LocalTransaction, GetTheConceptLocal } from 'mftsccs-browser';

// Initialize
await init({ url: API_URL, clientUrl: CLIENT_URL });

// Create a transaction that works offline
const transaction = new LocalTransaction();
await transaction.initialize();

try {
  // Create concepts offline - gets negative virtual IDs
  const draft = await transaction.MakeTheInstanceConceptLocal(
    'the_note', 'Draft Article', false, userId, accessId, sessionId
  );
  console.log('Created offline with virtual ID:', draft.id); // Negative ID (e.g., -12345)

  // Create a composition from JSON
  const article = await transaction.CreateTheCompositionLocal(
    {
      the_title: 'My Article',
      the_content: 'Article content here...',
      the_author: 'John Doe',
      the_status: 'Draft'
    },
    draft.id,
    userId,
    accessId,
    sessionId
  );

  // Work continues offline with virtual IDs...
  console.log('Transaction has:', transaction.actions.concepts.length, 'concepts');

  // When online, commit transaction - syncs everything atomically
  await transaction.commitTransaction();
  console.log('All offline changes synced to server');

  // After sync, virtual IDs become positive (real server IDs)
  // Ghost IDs preserve original negative IDs for local references
  const synced = await GetTheConceptLocal(draft.id);
  console.log('Real ID:', synced.id, '| Ghost ID:', synced.ghostId);

} catch (error) {
  // Rollback if sync fails (stays offline)
  await transaction.rollbackTransaction();
  console.error('Transaction rolled back, data remains local:', error);
}
```

### Example 4: Reactive State Management with Observables

```javascript
import { GetCompositionListener, DependencyObserver } from 'mftsccs-browser';

// Create an observable that watches a composition
const compositionObserver = GetCompositionListener(
  conceptId,
  userId,
  'JUSTDATA', // Output format
  1,          // Page number
  10          // Items per page
);

// Subscribe to changes
compositionObserver.subscribe((data) => {
  console.log('Composition updated:', data);
  // Update your UI automatically when data changes
});

// The observer automatically detects when:
// - The concept is modified
// - Connected concepts are updated
// - Connections are added/removed
// All subscribers are notified with fresh data
```

### Example 5: Using the Widget System

```javascript
import { StatefulWidget } from 'mftsccs-browser';

class MyCustomWidget extends StatefulWidget {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  // Lifecycle hook: called after mount
  before_render() {
    console.log('Widget mounted');
  }

  // Render method
  render() {
    return `
      <div>
        <h1>Count: ${this.state.count}</h1>
        <button id="increment">Increment</button>
      </div>
    `;
  }

  // Lifecycle hook: called after render
  after_render() {
    this.getElementById('increment').addEventListener('click', () => {
      this.setState({ count: this.state.count + 1 });
    });
  }
}

// Use the widget
const widget = new MyCustomWidget();
widget.mount(document.getElementById('app'));
```

## Development

### Setup for Development

1. Clone the repository:
```bash
git clone https://github.com/Mentor-Friends/tsccs-dev.git
cd tsccs-dev
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env.development
```

4. Edit `.env.development` with your configuration

### Build Commands

```bash
# Development build with watch mode
npm run dev

# Production build
npm run build

# Start production bundle
npm start
```

### Project Structure

```
src/
├── Api/                    # API endpoint wrappers (55+ documented functions)
│   ├── Create/            # Create operations (concepts, connections, ghost sync)
│   ├── Delete/            # Delete operations
│   ├── Search/            # Search APIs (internal, linker, freeschema)
│   ├── Session/           # Session management
│   ├── SearchConcept/     # Concept search utilities
│   └── ...                # Get, Retrieve, and utility APIs
├── Services/              # Business logic and operations
│   ├── Local/             # Local/offline operations (21 documented files)
│   └── ...                # Core services
├── Widgets/               # UI widget system (13 documented files)
│   ├── BaseWidget.ts      # Foundation widget class
│   ├── StatefulWidget.ts  # Stateful widget with lifecycle
│   └── ...                # Render services, caching, observers
├── WrapperFunctions/      # Reactive observable wrappers (8 documented files)
├── DataStructures/        # Core data models (Concept, Connection, etc.)
├── Database/              # IndexedDB management
├── Constants/             # Configuration constants
├── Middleware/            # Logging, monitoring, error handling
├── ServiceWorker/         # Service worker implementation
└── app.ts                 # Main entry point and exports
```

### Documentation Coverage

**All code is fully documented with concise JSDoc comments:**

- ✅ **55+ API functions** documented (Create, Get, Search, Delete, Session, etc.)
- ✅ **21 Local Service files** documented (offline-first operations)
- ✅ **13 Widget files** documented (UI framework with 76+ methods)
- ✅ **8 Observable wrappers** documented (reactive state management)
- ✅ All parameters, return types, and complex logic explained
- ✅ Examples provided for key functions
- ✅ Professional, concise style for quick understanding

## Publishing to npm

### Prerequisites

1. Ensure you have an npm account: [Sign up at npmjs.com](https://www.npmjs.com/signup)
2. Login to npm from your terminal:
```bash
npm login
```

### Pre-publish Checklist

Before publishing, ensure:

- [ ] Version number is updated in [package.json](package.json:3)
- [ ] All tests pass: `npm test`
- [ ] Build succeeds: `npm run build`
- [ ] [README.md](README.md) is up to date
- [ ] [CHANGELOG.md](CHANGELOG.md) documents changes (if applicable)
- [ ] Git repository is clean and committed

### Publishing Steps

#### 1. Update Version

Use semantic versioning (MAJOR.MINOR.PATCH):

```bash
# For bug fixes
npm version patch

# For new features (backwards compatible)
npm version minor

# For breaking changes
npm version major
```

This automatically:
- Updates `version` in package.json
- Creates a git commit
- Creates a git tag

#### 2. Build the Package

```bash
npm run build
```

This creates the `dist/` folder with:
- `dist/main.bundle.js` - Main bundle
- `dist/types/` - TypeScript declarations

#### 3. Test the Package Locally (Optional but Recommended)

```bash
# Create a tarball
npm pack

# This creates mftsccs-browser-X.X.X.tgz
# Test it in another project:
cd /path/to/test-project
npm install /path/to/mftsccs-browser-X.X.X.tgz
```

#### 4. Publish to npm

```bash
# For beta/pre-release versions
npm publish --tag beta

# For stable releases
npm publish
```

#### 5. Push to Git

```bash
git push origin main --tags
```

### Publishing Beta Versions

For testing before stable release:

```bash
# Update to beta version
npm version 2.1.171-beta

# Build
npm run build

# Publish with beta tag
npm publish --tag beta

# Users can install with:
# npm install mftsccs-browser@beta
```

### Automated Publishing with GitHub Actions (Recommended)

Create `.github/workflows/publish.yml`:

```yaml
name: Publish to npm

on:
  release:
    types: [created]

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          registry-url: 'https://registry.npmjs.org'
      - run: npm install
      - run: npm run build
      - run: npm test
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

Then:
1. Add your npm token to GitHub Secrets as `NPM_TOKEN`
2. Create a GitHub release
3. The package publishes automatically

### Managing Versions

```bash
# View current version
npm version

# View published versions
npm view mftsccs-browser versions

# Unpublish a version (within 72 hours)
npm unpublish mftsccs-browser@2.1.170-beta

# Deprecate a version
npm deprecate mftsccs-browser@2.1.170-beta "Use version 2.1.171 instead"
```

### Package Scope and Access

This package is currently unscoped. To publish as a scoped package:

1. Update [package.json](package.json:2):
```json
{
  "name": "@mentor-friends/mftsccs-browser"
}
```

2. Publish with public access:
```bash
npm publish --access public
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Make your changes
4. Add tests for new functionality
5. Commit your changes: `git commit -am 'Add new feature'`
6. Push to the branch: `git push origin feature/my-feature`
7. Submit a pull request

### Coding Standards

- Follow TypeScript best practices
- Maintain existing code style
- Add concise JSDoc comments for all public APIs and functions
  - Keep descriptions brief (1-3 sentences)
  - Document all parameters with types
  - Include return value documentation
  - Add examples for complex functions
  - Mark complex logic with "Complex Logic" callouts
- Write unit tests for new features
- Update documentation as needed

## Support

- **Issues**: [GitHub Issues](https://github.com/Mentor-Friends/tsccs-dev/issues)
- **Repository**: [https://github.com/Mentor-Friends/tsccs-dev](https://github.com/Mentor-Friends/tsccs-dev)

## License

ISC License - see [LICENSE](LICENSE) file for details.

## Author

**Mentor Friends**

---

Made with ❤️ by the Mentor Friends team

