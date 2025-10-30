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

- **Concept & Connection Management**: Create and manage entities (concepts) and their relationships (connections)
- **Composition System**: Build complex hierarchical structures from concepts and connections
- **Offline-First Architecture**: Full IndexedDB support with intelligent caching and virtual ID system
- **Service Worker Support**: Optional background processing for better performance
- **Advanced Search**: Powerful search capabilities with filters, type matching, relationship queries, and recursive searches
- **Binary Tree Indexing**: Fast in-memory indexing for optimal performance
- **Reactive State Management**: Observable pattern with automatic change detection and subscriber notifications
- **Widget System**: Complete UI widget framework with lifecycle management and state handling
- **Type System**: Strong TypeScript typing throughout with comprehensive JSDoc documentation
- **Session Management**: Built-in user authentication and session handling
- **Sync Capabilities**: Seamless sync between local and remote data with ghost ID preservation
- **Bulk Operations**: Efficient batch processing for concepts, connections, and searches
- **Comprehensive Documentation**: All functions, classes, and methods documented with concise JSDoc comments

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

For multiple operations, use the `InnerActions` parameter for transactional behavior:

```javascript
import { MakeTheInstanceConceptLocal, CreateTheConnectionLocal, LocalSyncData } from 'mftsccs-browser';

// Initialize actions tracker for transaction
const actions = { concepts: [], connections: [] };

// Create multiple concepts in a transaction
const person = await MakeTheInstanceConceptLocal(
  'the_person', 'Alice', false, userId, accessId, sessionId, undefined, actions
);

const email = await MakeTheInstanceConceptLocal(
  'the_email', 'alice@example.com', false, userId, accessId, sessionId, undefined, actions
);

// Create connection in the same transaction
await CreateTheConnectionLocal(
  person.id, email.id, emailTypeId, 2, undefined, undefined, actions
);

// Sync all changes to server in one batch
await LocalSyncData.SyncDataOnline(undefined, actions);
console.log('All changes synced:', actions.concepts.length, 'concepts,', actions.connections.length, 'connections');
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

### 3. Composition
A **Composition** is a structured grouping that includes:
- A main concept
- Associated connections
- Related concepts
- Nested sub-compositions

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
  CreateTheConnectionLocal,
  CreateTheCompositionLocal
} from 'mftsccs-browser';

// Create a concept (local-first, with get-or-create pattern)
const concept = await MakeTheInstanceConceptLocal(
  'the_name',        // Type with "the_" prefix
  'My Concept',      // Value
  false,             // composition mode: false = get-or-create, true = always create new
  userId,
  accessId,
  sessionId
);

// Create a connection between concepts (local-first)
const connection = await CreateTheConnectionLocal(
  fromConceptId,
  toConceptId,
  connectionTypeId,
  2  // orderId
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

### Example 1: Building a Knowledge Graph (Recommended Approach)

```javascript
import {
  init,
  MakeTheInstanceConceptLocal,
  CreateConnectionBetweenTwoConceptsLocal,
  GetCompositionLocal,
  LocalSyncData
} from 'mftsccs-browser';

// Initialize
await init({ url: API_URL, clientUrl: CLIENT_URL });

// Track all operations in a transaction
const actions = { concepts: [], connections: [] };

// Create concepts with transaction tracking
const person = await MakeTheInstanceConceptLocal(
  'the_person', 'John Doe', false, userId, accessId, sessionId, undefined, actions
);

const company = await MakeTheInstanceConceptLocal(
  'the_organization', 'Acme Corp', false, userId, accessId, sessionId, undefined, actions
);

const role = await MakeTheInstanceConceptLocal(
  'the_role', 'Software Engineer', false, userId, accessId, sessionId, undefined, actions
);

// Create named connections (easier to understand)
await CreateConnectionBetweenTwoConceptsLocal(
  person, company, 'works_at', false, actions
);

await CreateConnectionBetweenTwoConceptsLocal(
  person, role, 'has_role', false, actions
);

// Get the full composition (works with virtual IDs)
const personProfile = await GetCompositionLocal(person.id);
console.log('Person Profile:', personProfile);

// Sync all changes to server in one batch
await LocalSyncData.SyncDataOnline(undefined, actions);
console.log('Synced to server:', actions);
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
import {
  init,
  MakeTheInstanceConceptLocal,
  CreateTheCompositionLocal,
  GetTheConceptLocal,
  LocalSyncData
} from 'mftsccs-browser';

// Initialize
await init({ url: API_URL, clientUrl: CLIENT_URL });

// Track all offline operations
const actions = { concepts: [], connections: [] };

// Create concepts offline with transactions
const draft = await MakeTheInstanceConceptLocal(
  'the_note', 'Draft Article', false, userId, accessId, sessionId, undefined, actions
);
console.log('Created offline with virtual ID:', draft.id); // Negative ID

// Create a composition from JSON
const article = await CreateTheCompositionLocal(
  {
    the_title: 'My Article',
    the_content: 'Article content here...',
    the_author: 'John Doe',
    the_status: 'Draft'
  },
  draft.id,
  userId,
  sessionId,
  accessId,
  actions
);

// Work continues offline...
console.log('Total operations tracked:', actions.concepts.length + actions.connections.length);

// Later, when online, sync everything in one batch
try {
  await LocalSyncData.SyncDataOnline(undefined, actions);
  console.log('All offline changes synced to server');

  // After sync, virtual IDs become positive (real server IDs)
  // Ghost IDs preserve original negative IDs for local references
  const synced = await GetTheConceptLocal(draft.id);
  console.log('Real ID:', synced.id, '| Ghost ID:', synced.ghostId);
} catch (error) {
  console.log('Still offline, data remains local');
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

