# CCS-JS (Concept Connection System)

**mftsccs-node** - Full Pack of Concept and Connection System

A powerful TypeScript library for building knowledge graphs and managing complex relationships between concepts. CCS-JS provides a complete solution for creating, querying, and managing concepts and connections with support for offline-first architecture, transactions, and flexible schema querying.

[![npm version](https://img.shields.io/npm/v/mftsccs-node.svg)](https://www.npmjs.com/package/mftsccs-node)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## 📚 Documentation

Full documentation available at: [https://documentation.freeschema.com](https://documentation.freeschema.com)

## 🚀 Installation

```bash
npm install mftsccs-node
```

## 📋 Table of Contents

- [Quick Start](#quick-start)
- [Core Concepts](#core-concepts)
- [Key Features](#key-features)
- [API Reference](#api-reference)
  - [Initialization](#initialization)
  - [Session Management](#session-management)
  - [Creating Concepts](#creating-concepts-maketheinstanceconcept)
  - [Creating Connections](#creating-connections-createconnection)
  - [Querying with FreeschemaQuery](#querying-with-freeschemaquery)
  - [Using Transactions](#using-transactions)
- [Advanced Usage](#advanced-usage)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Quick Start

```typescript
import { init, MakeTheInstanceConcept, CreateConnection, Transaction } from 'mftsccs-node';

// Initialize the system
init(
  'https://api.freeschema.com',      // API URL
  'https://ai.freeschema.com',       // AI URL
  'your-access-token'                // Authentication token
);

// Create concepts
const user = await MakeTheInstanceConcept(
  "user",           // type
  "john_doe",       // referent (value)
  false,            // composition flag
  1,                // userId
  4,                // accessId
  999               // sessionId
);

const post = await MakeTheInstanceConcept(
  "post",
  "My First Post",
  false,
  1,
  4,
  999
);

// Create a connection
const connection = await CreateConnection(
  user,
  post,
  "authored"        // relationship type
);

console.log('Concept and connection created successfully!');
```

---

## 💡 Core Concepts

### Concept
A **Concept** is the fundamental unit of knowledge in CCS-JS. It represents any entity, idea, or data point with:
- **Type**: Classification of the concept (e.g., "user", "post", "comment")
- **Referent**: The actual value or content
- **Metadata**: User ownership, access control, timestamps
- **Relationships**: References to category, type, and other concepts

### Connection
A **Connection** represents a directed relationship between two concepts:
- Links concepts together with semantic meaning
- Typed relationships (e.g., "authored", "contains", "belongs_to")
- Supports ordering, security, and access control
- Can be queried bidirectionally

### Composition
A **Composition** is a hierarchical structure of related concepts and connections:
- Nested concept graphs
- Recursive data structures
- JSON-like organization
- Efficient serialization/deserialization

---

## ✨ Key Features

- 🔄 **Offline-First Architecture**: Local IndexedDB storage with backend synchronization
- 🔐 **Security & Access Control**: Fine-grained permissions per concept/connection
- 🌳 **Binary Tree Indexing**: O(log n) lookups by ID, character, and type
- 📦 **Transactions**: ACID-like operations with rollback support
- 🔍 **Flexible Querying**: Multiple search strategies including FreeschemaQuery
- 🚀 **Performance Optimized**: Request deduplication, caching, and bulk operations
- 📡 **Real-time Sync**: MQTT support for distributed updates
- 🎯 **Type-Safe**: Full TypeScript support with comprehensive type definitions

---

## 📖 API Reference

### Initialization

Initialize the CCS system before performing any operations:

```typescript
import { init, updateAccessToken } from 'mftsccs-node';

// Initialize with backend URLs and auth token
init(
  'https://api.freeschema.com',      // Base API URL
  'https://ai.freeschema.com',       // AI service URL
  'your-bearer-access-token'         // Authentication token
);

// Update token later if needed
updateAccessToken('new-access-token');
```

**Important**:
- Call `init()` once at application startup
- System loads data from IndexedDB asynchronously
- Check `IdentifierFlags` to ensure data is loaded before queries

```typescript
import { IdentifierFlags } from 'mftsccs-node';

// Wait for data to load
if (IdentifierFlags.isDataLoaded) {
  // Safe to query concepts
}
```

---

### Session Management

CCS-JS includes built-in session tracking capabilities that monitor user activity and enable analytics. The system uses the `X-SESSION-ID` header to track sessions across requests, which is particularly useful when integrating with backend middleware.

#### How Session Management Works

1. **Automatic Session Creation**: When your application initializes, a session ID is automatically fetched or created
2. **Session Tracking**: The `X-SESSION-ID` header is included in API requests to track user activity
3. **Middleware Integration**: Your backend middleware can intercept and use this header for session management
4. **Session Analytics**: Track user behavior, page visits, and interaction patterns

#### Session Data Structure

```typescript
import { SessionData } from 'mftsccs-node';

const session = new SessionData();
session.id = "unique-session-id";
session.userId = "123";
session.email = "user@example.com";
session.remote_address = "192.168.1.100";
session.http_user_agent = navigator.userAgent;
session.server_name = "api.example.com";
```

#### Creating a Session

```typescript
import { CreateSession, SessionData } from 'mftsccs-node';

// Initialize session data
const sessionData = new SessionData();
sessionData.userId = "123";
sessionData.email = "user@example.com";
sessionData.remote_address = "192.168.1.100";
sessionData.http_user_agent = navigator.userAgent;
sessionData.server_port = "443";
sessionData.server_name = "api.example.com";

// Create session in backend
const session = await CreateSession(sessionData);
if (session) {
  console.log('Session created:', session.id);
  // Store session ID for subsequent requests
  localStorage.setItem('sessionId', session.id);
}
```

#### Tracking Session Visits

Track specific URL visits within a session:

```typescript
import { CreateSessionVisit } from 'mftsccs-node';

// Track page visit
await CreateSessionVisit(
  sessionId,
  '/dashboard'
);

// Track another page
await CreateSessionVisit(
  sessionId,
  '/products/123'
);
```

#### Middleware Integration Example

On your backend, you can use middleware to intercept the `X-SESSION-ID` header:

```javascript
// Express.js middleware example
app.use((req, res, next) => {
  const sessionId = req.headers['x-session-id'];

  if (!sessionId) {
    // Create new session
    const newSessionId = generateSessionId();
    res.setHeader('X-SESSION-ID', newSessionId);
    req.sessionId = newSessionId;
  } else {
    // Use existing session
    req.sessionId = sessionId;
  }

  next();
});
```

#### Session Lifecycle

```typescript
import { CreateSession, CreateSessionVisit, SessionData } from 'mftsccs-node';

// 1. Initialize session on app load
async function initializeSession() {
  let sessionId = localStorage.getItem('sessionId');

  if (!sessionId) {
    // Create new session
    const sessionData = new SessionData();
    sessionData.userId = getCurrentUserId();
    sessionData.email = getCurrentUserEmail();
    sessionData.http_user_agent = navigator.userAgent;

    const session = await CreateSession(sessionData);
    if (session) {
      sessionId = session.id;
      localStorage.setItem('sessionId', sessionId);
    }
  }

  return sessionId;
}

// 2. Track navigation
async function trackPageVisit(url: string) {
  const sessionId = localStorage.getItem('sessionId');
  if (sessionId) {
    await CreateSessionVisit(sessionId, url);
  }
}

// 3. Use in application
const sessionId = await initializeSession();

// Track page views
trackPageVisit(window.location.pathname);

// Track on navigation
window.addEventListener('popstate', () => {
  trackPageVisit(window.location.pathname);
});
```

#### Session Properties

The SessionData class captures comprehensive session information:

| Property | Type | Description |
|----------|------|-------------|
| `id` | `string` | Unique session identifier |
| `userId` | `string` | User ID associated with session |
| `email` | `string` | User's email address |
| `remote_address` | `string` | Client's IP address |
| `server_port` | `string` | Server port number |
| `server_address` | `string` | Server IP address |
| `server_name` | `string` | Server hostname/domain |
| `server_software` | `string` | Server software version |
| `http_user_agent` | `string` | Client browser/app information |
| `self` | `string` | Self-referential identifier |
| `port` | `string` | Client port number |

#### Benefits of Session Management

- ✅ **User Analytics**: Track user behavior and interaction patterns
- ✅ **Session Persistence**: Maintain state across multiple requests
- ✅ **Security**: Monitor and validate session authenticity
- ✅ **Debugging**: Trace user actions for troubleshooting
- ✅ **Personalization**: Enable session-based customization
- ✅ **Automatic Integration**: Works seamlessly with middleware

#### Best Practices

1. **Initialize Early**: Create sessions during application bootstrap
2. **Persist Session ID**: Store in localStorage or sessionStorage
3. **Track Key Events**: Log important user interactions
4. **Respect Privacy**: Comply with data protection regulations
5. **Session Expiry**: Implement timeout mechanisms on backend
6. **Secure Transmission**: Always use HTTPS for session data

---

### Creating Concepts: MakeTheInstanceConcept

The primary method for creating typed concepts in the system.

#### Signature

```typescript
MakeTheInstanceConcept(
  type: string,
  referent: string,
  composition: boolean = false,
  userId: number,
  accessId: number,
  sessionId: number = 999,
  referentId: number = 0,
  actions?: InnerActions
): Promise<Concept>
```

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `type` | `string` | The type identifier (automatically prefixed with "the_" if needed) |
| `referent` | `string` | The actual value/content of the concept |
| `composition` | `boolean` | Whether this is a composition concept (default: `false`) |
| `userId` | `number` | ID of the user creating the concept |
| `accessId` | `number` | Access control level |
| `sessionId` | `number` | Session tracking ID (default: `999`) |
| `referentId` | `number` | Optional referent concept ID (default: `0`) |
| `actions` | `InnerActions` | Optional transaction actions tracker |

#### Examples

**Basic Concept Creation:**

```typescript
import { MakeTheInstanceConcept } from 'mftsccs-node';

// Create a user concept
const user = await MakeTheInstanceConcept(
  "user",
  "alice@example.com",
  false,
  1,    // userId
  4,    // accessId
  999   // sessionId
);

console.log('User created:', user.id);
```

**Creating Different Types:**

```typescript
// Create a product
const product = await MakeTheInstanceConcept(
  "product",
  "Premium Laptop",
  false,
  1,
  4
);

// Create a category
const category = await MakeTheInstanceConcept(
  "category",
  "Electronics",
  false,
  1,
  4
);

// Create a review
const review = await MakeTheInstanceConcept(
  "review",
  "Great product! Highly recommend.",
  false,
  1,
  4
);
```

**Long Text Handling:**

```typescript
// Strings > 255 characters are automatically stored as text data
const longArticle = "Lorem ipsum...".repeat(100); // > 255 chars

const article = await MakeTheInstanceConcept(
  "article",
  longArticle,
  false,
  1,
  4
);
// Automatically creates both concept and separate text data entry
```

**Composition Concepts:**

```typescript
// Create a composition concept for complex hierarchical data
const complexData = await MakeTheInstanceConcept(
  "order",
  "ORDER-123",
  true,  // composition = true
  1,
  4
);
```

#### Key Features

- ✅ **Automatic type prefixing**: Type "user" becomes "the_user"
- ✅ **Deduplication**: Checks for existing concepts by character and type
- ✅ **Text overflow handling**: Strings > 255 chars stored separately
- ✅ **Type concept creation**: Automatically creates/retrieves type concepts
- ✅ **Immediate availability**: Returns concept with type information populated

---

### Creating Connections: CreateConnection

Creates typed connections between concepts with semantic relationships.

#### Signature

```typescript
CreateConnection(
  ofTheConcept: Concept,
  toTheConcept: Concept,
  typeConnection: string,
  actions?: InnerActions
): Promise<Connection>
```

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `ofTheConcept` | `Concept` | Source concept (from) |
| `toTheConcept` | `Concept` | Target concept (to) |
| `typeConnection` | `string` | Relationship type name |
| `actions` | `InnerActions` | Optional transaction actions tracker |

#### Examples

**Simple Connection:**

```typescript
import { CreateConnection } from 'mftsccs-node';

const author = await MakeTheInstanceConcept("user", "jane_doe", false, 1, 4);
const book = await MakeTheInstanceConcept("book", "TypeScript Guide", false, 1, 4);

// Create "authored" connection
const connection = await CreateConnection(
  author,
  book,
  "authored"
);

console.log('Connection created:', connection.id);
```

**Building a Knowledge Graph:**

```typescript
// Create concepts
const company = await MakeTheInstanceConcept("company", "TechCorp", false, 1, 4);
const employee = await MakeTheInstanceConcept("employee", "Bob Smith", false, 1, 4);
const project = await MakeTheInstanceConcept("project", "Project Alpha", false, 1, 4);

// Create relationships
await CreateConnection(employee, company, "works_at");
await CreateConnection(employee, project, "assigned_to");
await CreateConnection(project, company, "owned_by");
```

#### Advanced Connection Options

**Bidirectional Connections with Counting:**

```typescript
import { CreateConnectionBetweenTwoConcepts } from 'mftsccs-node';

// Create bidirectional "friends_with" connection
await CreateConnectionBetweenTwoConcepts(
  user1,
  user2,
  "friends_with",
  true,   // both directions
  true    // enable counting
);

// Creates connections:
// - "users_s_friends_with_s" (forward)
// - "users_s_friends_with_by" (backward)
// - Maintains count concepts for analytics
```

**Type-Aware Connection Naming:**

```typescript
// Connection types include concept types in the name
const author = await MakeTheInstanceConcept("author", "John Doe", false, 1, 4);
const book = await MakeTheInstanceConcept("book", "My Book", false, 1, 4);

await CreateConnectionBetweenTwoConcepts(
  author,
  book,
  "authored"
);
// Creates connection type: "authors_s_authored_s"

// This enables queries like:
// "Show all books_s_authored_s_by author"
```

---

### Querying with FreeschemaQuery

Perform flexible, schema-independent queries on concepts.

#### Signature

```typescript
FreeschemaQueryApi(
  query: FreeschemaQuery,
  token?: string
): Promise<Concept[]>
```

#### FreeschemaQuery Structure

```typescript
interface FreeschemaQuery {
  type?: string;                  // Concept type filter
  search?: string;                // Text search term
  composition?: number;           // Composition ID
  inpage?: number;                // Results per page
  page?: number;                  // Page number
  userId?: number;                // User ID filter
  format?: number;                // Response format (1-7)
  linker?: string[];              // Relationship filters
  selectConnectionLinker?: string[];
  selectionType?: string[];
  conceptType?: string;
  filterSearch?: FilterSearch[];  // Complex filters
  connectionSelectionLinker?: string[];
  connectionOfTheLinker?: string[];
  excludeCompositionIds?: number[];
  includeCompositionIds?: number[];
  nestedSelectionLinker?: string[][];
  excludeConnectionIds?: number[];
  createdTime?: string;
  updatedTime?: string;
}
```

#### Examples

**Basic Search:**

```typescript
import { FreeschemaQueryApi } from 'mftsccs-node';

// Search for users
const query = {
  type: "user",
  inpage: 20,
  page: 1
};

const users = await FreeschemaQueryApi(query, "auth-token");
console.log(`Found ${users.length} users`);
```

**Text Search:**

```typescript
// Search for posts containing "typescript"
const query = {
  type: "post",
  search: "typescript",
  inpage: 10
};

const posts = await FreeschemaQueryApi(query, "auth-token");
```

**Composition Query:**

```typescript
// Get all concepts within a specific composition
const query = {
  composition: 12345,
  format: 2,  // DATAID format
  inpage: 50
};

const concepts = await FreeschemaQueryApi(query, "auth-token");
```

**Advanced Filtering:**

```typescript
// Complex query with filters
const query = {
  type: "product",
  filterSearch: [
    {
      type: "price",
      search: "100",
      logicoperator: "less_than",
      composition: 0,
      index: 0,
      name: "price_filter",
      operateon: "number"
    }
  ],
  linker: ["category_s"],
  inpage: 20
};

const affordableProducts = await FreeschemaQueryApi(query, "auth-token");
```

**Cross-Composition Search:**

```typescript
// Search across multiple compositions
const query = {
  type: "document",
  includeCompositionIds: [100, 200, 300],
  excludeCompositionIds: [150],
  search: "important",
  inpage: 50
};

const documents = await FreeschemaQueryApi(query, "auth-token");
```

#### Response Formats

Use the `format` parameter to control response structure:

```typescript
import { NORMAL, DATAID, JUSTDATA, ALLID, DATAIDDATE, RAW, LISTNORMAL } from 'mftsccs-node';

const query = {
  type: "user",
  format: DATAID  // format = 2
};
```

| Format | Value | Description |
|--------|-------|-------------|
| `NORMAL` | 1 | Standard format with all concept data |
| `DATAID` | 2 | Includes ID and metadata wrapper |
| `JUSTDATA` | 3 | Only the data without metadata |
| `ALLID` | 6 | All IDs format |
| `DATAIDDATE` | 4 | Data with ID and date |
| `RAW` | 5 | Raw data format |
| `LISTNORMAL` | 7 | List normal format |

---

### Using Transactions

Transactions provide ACID-like guarantees for batch operations with rollback support.

#### Transaction Class

```typescript
class Transaction {
  initialize(): Promise<void>;
  MakeTheInstanceConcept(...): Promise<Concept>;
  CreateConnection(...): Promise<Connection>;
  MakeTheTypeConcept(...): Promise<Concept>;
  CreateTheConnectionGeneral(...): Promise<Connection>;
  commitTransaction(): Promise<void>;
  rollbackTransaction(): Promise<void>;
}
```

#### Basic Transaction Usage

```typescript
import { Transaction } from 'mftsccs-node';

const transaction = new Transaction();
await transaction.initialize();

try {
  // Create multiple concepts
  const user = await transaction.MakeTheInstanceConcept(
    "user",
    "alice@example.com",
    false,
    1,
    4
  );

  const profile = await transaction.MakeTheInstanceConcept(
    "profile",
    "Alice's Profile",
    false,
    1,
    4
  );

  // Create connection
  await transaction.CreateConnection(user, profile, "has_profile");

  // Commit all changes
  await transaction.commitTransaction();
  console.log('Transaction committed successfully');

} catch (error) {
  // Rollback on error
  await transaction.rollbackTransaction();
  console.error('Transaction rolled back:', error);
}
```

#### Complex Transaction Example

```typescript
const transaction = new Transaction();
await transaction.initialize();

try {
  // Create a blog post with author, tags, and comments
  const author = await transaction.MakeTheInstanceConcept(
    "author",
    "John Doe",
    false,
    1,
    4
  );

  const post = await transaction.MakeTheInstanceConcept(
    "post",
    "Introduction to CCS-JS",
    false,
    1,
    4
  );

  const tag1 = await transaction.MakeTheInstanceConcept(
    "tag",
    "typescript",
    false,
    1,
    4
  );

  const tag2 = await transaction.MakeTheInstanceConcept(
    "tag",
    "tutorial",
    false,
    1,
    4
  );

  // Create all relationships
  await transaction.CreateConnection(author, post, "authored");
  await transaction.CreateConnection(post, tag1, "tagged_with");
  await transaction.CreateConnection(post, tag2, "tagged_with");

  // Commit the entire graph
  await transaction.commitTransaction();

} catch (error) {
  await transaction.rollbackTransaction();
  console.error('Failed to create blog post:', error);
}
```

#### Transaction with Error Handling

```typescript
async function createUserWithProfile(email: string, profileData: string) {
  const transaction = new Transaction();
  await transaction.initialize();

  try {
    // Create user
    const user = await transaction.MakeTheInstanceConcept(
      "user",
      email,
      false,
      1,
      4
    );

    // Validate user creation
    if (!user || user.id === 0) {
      throw new Error('Failed to create user');
    }

    // Create profile
    const profile = await transaction.MakeTheInstanceConcept(
      "profile",
      profileData,
      false,
      1,
      4
    );

    // Link them
    await transaction.CreateConnection(user, profile, "has_profile");

    // Commit
    await transaction.commitTransaction();
    return { user, profile };

  } catch (error) {
    // Automatic rollback
    await transaction.rollbackTransaction();
    throw new Error(`Transaction failed: ${error}`);
  }
}
```

#### Benefits of Transactions

- ✅ **Atomicity**: All operations succeed or all fail
- ✅ **Consistency**: Data remains in valid state
- ✅ **Rollback Support**: Automatic cleanup on failure
- ✅ **Batch Tracking**: All changes tracked together
- ✅ **Error Recovery**: Graceful handling of failures

---

## 🔧 Advanced Usage

### Compositions

Create and query hierarchical data structures:

```typescript
import { CreateComposition, GetComposition } from 'mftsccs-node';

// Create nested composition
const data = {
  user: "john_doe",
  profile: {
    name: "John Doe",
    email: "john@example.com",
    settings: {
      theme: "dark",
      notifications: true
    }
  },
  posts: ["post1", "post2"]
};

const composition = await CreateComposition(
  data,
  "user_profile",
  1,
  4,
  999
);

// Retrieve and reconstruct
const retrieved = await GetComposition(composition.id);
console.log(retrieved); // Full nested structure
```

### Local Storage (Offline Support)

Work with local concepts for offline functionality:

```typescript
import {
  CreateTheConceptLocal,
  GetCompositionLocal,
  MakeTheInstanceConceptLocal
} from 'mftsccs-node';

// Create local concept (survives offline)
const localConcept = await MakeTheInstanceConceptLocal(
  "note",
  "Offline note",
  1,
  4
);

// Retrieve from local storage
const composition = await GetCompositionLocal(
  localConcept.id,
  localConcept.userId
);
```

### Bulk Operations

Optimize performance with bulk operations:

```typescript
import {
  GetConceptBulk,
  GetConnectionBulk
} from 'mftsccs-node';

// Fetch multiple concepts at once
const conceptIds = [123, 456, 789];
const concepts = await GetConceptBulk(conceptIds);

// Fetch multiple connections
const connectionIds = [1, 2, 3, 4, 5];
const connections = await GetConnectionBulk(connectionIds);
```

### Relationship Queries

Navigate relationships between concepts:

```typescript
import {
  GetLink,
  GetRelation,
  GetConnectionOfTheConcept
} from 'mftsccs-node';

// Get all "authored" books by an author
const books = await GetLink(
  "the_book",
  "authored",
  authorId,
  userId
);

// Get reverse relationship (books to authors)
const authors = await GetRelation(
  "the_author",
  "authored",
  bookId,
  userId
);

// Get connections from a concept
const connections = await GetConnectionOfTheConcept(
  connectionTypeId,
  conceptId,
  userId,
  10,  // inpage
  1    // page
);
```

---

## 🛠️ Development

### Prerequisites

- Node.js 14+
- npm or yarn
- TypeScript 5.3+

### Environment Setup

Create environment files from the example:

```bash
# For development
cp .env.example .env.development

# For production
cp .env.example .env.production
```

### Build from Source

```bash
# Clone the repository
git clone https://github.com/Mentor-Friends/tsccs-dev.git
cd tsccs-dev

# Install dependencies
npm install

# Build the project
npm run build

# Run in development mode
npm run dev
```

### Project Structure

```
ccs-js/
├── src/
│   ├── Api/              # Backend API integration (45 files)
│   ├── Services/         # Business logic layer (73+ files)
│   ├── DataStructures/   # Core data models (70+ files)
│   ├── Database/         # IndexedDB persistence (4 files)
│   ├── Constants/        # Configuration (2 files)
│   ├── Helpers/          # Utility functions (3 files)
│   ├── Drawing/          # UI visualization (2 files)
│   ├── WrapperFunctions/ # Observable wrappers (1 file)
│   └── app.ts           # Main entry point
├── dist/                # Compiled output
├── webpack.config.js    # Build configuration
├── tsconfig.json        # TypeScript config
└── package.json
```

### Scripts

```bash
npm start       # Build with webpack (production)
npm run dev     # Development build with watch mode
npm run build   # Production build
```

---

## 📝 Examples

### E-commerce System

```typescript
// Create product catalog
const electronics = await MakeTheInstanceConcept("category", "Electronics", false, 1, 4);
const laptop = await MakeTheInstanceConcept("product", "Premium Laptop", false, 1, 4);
const review = await MakeTheInstanceConcept("review", "Great product!", false, 1, 4);

// Build relationships
await CreateConnection(laptop, electronics, "belongs_to");
await CreateConnection(review, laptop, "reviews");
```

### Social Network

```typescript
const transaction = new Transaction();
await transaction.initialize();

try {
  const user1 = await transaction.MakeTheInstanceConcept("user", "alice", false, 1, 4);
  const user2 = await transaction.MakeTheInstanceConcept("user", "bob", false, 1, 4);
  const post = await transaction.MakeTheInstanceConcept("post", "Hello World", false, 1, 4);

  await transaction.CreateConnection(user1, user2, "follows");
  await transaction.CreateConnection(user1, post, "created");
  await transaction.CreateConnection(user2, post, "liked");

  await transaction.commitTransaction();
} catch (error) {
  await transaction.rollbackTransaction();
}
```

### Document Management

```typescript
// Create document hierarchy
const folder = await MakeTheInstanceConcept("folder", "Projects", false, 1, 4);
const doc = await MakeTheInstanceConcept("document", "README", false, 1, 4);
const version = await MakeTheInstanceConcept("version", "v1.0", false, 1, 4);

await CreateConnection(doc, folder, "contained_in");
await CreateConnection(version, doc, "version_of");

// Query documents
const query = {
  type: "document",
  linker: ["contained_in_s"],
  composition: folder.id
};
const documents = await FreeschemaQueryApi(query, "token");
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Coding Standards

- Follow TypeScript best practices
- Add JSDoc comments for all public APIs
- Write unit tests for new features
- Update documentation as needed

---

## 📄 License

This project is licensed under the ISC License.

---

## 🔗 Links

- **Documentation**: [https://documentation.freeschema.com](https://documentation.freeschema.com)
- **GitHub**: [https://github.com/Mentor-Friends/tsccs-dev](https://github.com/Mentor-Friends/tsccs-dev)
- **Issues**: [https://github.com/Mentor-Friends/tsccs-dev/issues](https://github.com/Mentor-Friends/tsccs-dev/issues)
- **npm Package**: [https://www.npmjs.com/package/mftsccs-node](https://www.npmjs.com/package/mftsccs-node)

---

## 📞 Support

For questions and support:
- Open an issue on GitHub
- Check the documentation at [documentation.freeschema.com](https://documentation.freeschema.com)
- Contact: Mentor Friends

---

**Made with ❤️ by Mentor Friends**

*Version 0.0.52*


