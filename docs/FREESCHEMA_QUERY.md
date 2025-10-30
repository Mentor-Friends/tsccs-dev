# FreeschemaQuery Documentation

## Table of Contents

- [Introduction](#introduction)
- [What is FreeschemaQuery?](#what-is-freeschemaquery)
- [Core Concepts](#core-concepts)
- [Query Structure](#query-structure)
- [Basic Usage](#basic-usage)
- [Query Parameters](#query-parameters)
- [Filters and Logic](#filters-and-logic)
- [Nested Queries](#nested-queries)
- [Output Formats](#output-formats)
- [Advanced Features](#advanced-features)
- [Complete Examples](#complete-examples)
- [Best Practices](#best-practices)
- [Observable Pattern](#observable-pattern)

## Introduction

**FreeschemaQuery** is the primary querying mechanism in mftsccs-browser that enables flexible, schema-free data retrieval with powerful filtering, sorting, pagination, and nested query capabilities. It provides a declarative way to query your knowledge graph without writing complex SQL or query languages.

### Why FreeschemaQuery?

- 🔍 **Schema-Free**: Query data without rigid schema constraints
- 🎯 **Declarative**: Describe what you want, not how to get it
- 🔗 **Relationship-Aware**: Navigate connections between concepts naturally
- 📊 **Multiple Formats**: Get data in the format that suits your use case
- 🚀 **Performance**: Optimized for complex graph queries
- 🔄 **Reactive**: Observable pattern for real-time updates

## What is FreeschemaQuery?

FreeschemaQuery is a **flexible query object** that allows you to:

1. **Search by Type**: Find all concepts of a specific type (e.g., "person", "organization")
2. **Filter Results**: Apply complex filtering logic with multiple conditions
3. **Navigate Relationships**: Query connected concepts through type connections
4. **Nest Queries**: Build complex queries by composing multiple queries
5. **Control Output**: Choose from multiple output formats (raw, normalized, structured)
6. **Paginate**: Handle large result sets efficiently
7. **Sort**: Order results by timestamp or other criteria

**Key Difference from Traditional Queries:**
- No SQL syntax required
- Works with concept-connection model
- Understands relationships natively
- Dynamic schema support

## Core Concepts

### Query Building Blocks

```
┌─────────────────────────────────────────────────────────────┐
│                     FreeschemaQuery                         │
├─────────────────────────────────────────────────────────────┤
│  type: "person"              ← Main concept type to query   │
│  filters: [...]              ← Filter conditions            │
│  filterLogic: "AND/OR"       ← How filters combine          │
│  freeschemaQueries: [...]    ← Nested sub-queries          │
│  typeConnection: "has_email" ← Navigate relationships       │
│  page: 1, inpage: 10        ← Pagination                   │
│  order: "DESC"               ← Sort order                   │
│  outputFormat: DATAID        ← Result format                │
└─────────────────────────────────────────────────────────────┘
```

### How It Works

```
User Creates Query → FreeschemaQueryApi → Backend Processing → Formatted Results
                          ↓
                    Applies filters
                    Navigates connections
                    Sorts & paginates
                    Formats output
```

## Query Structure

### FreeschemaQuery Class

```typescript
class FreeschemaQuery {
    type: string = "";                      // Main concept type to query
    inpage: number = 10;                    // Results per page
    page: number = 1;                       // Current page number
    concepts: Concept[] = [];               // Specific concepts to include
    conceptIds: number[] = [];              // Specific concept IDs to query
    selectors: string[] = [];               // Properties to include in results
    freeschemaQueries: FreeschemaQuery[] = []; // Nested sub-queries
    filters: FilterSearch[] = [];           // Filter conditions
    filterLogic: string = "";               // Filter combination logic
    typeConnection: string = "";            // Connection type to navigate
    order: string = "DESC";                 // Sort order (DESC/ASC)
    outputFormat: number = NORMAL;          // Output format
    name: string = "";                      // Query identifier
    filterAncestor: string = "";            // Ancestor filter
    reverse: boolean = false;               // Reverse connection direction
    limit: boolean = false;                 // Apply limit
    isSecure: boolean = false;              // Security flag
    includeInFilter: boolean = false;       // Include in parent filter
    isOldConnectionType: boolean = false;   // Legacy connection handling
}
```

### FilterSearch Class

```typescript
class FilterSearch {
    type: string = "";          // Type to filter on
    search: string = "";        // Search value
    logicoperator: string = "="; // Operator: =, !=, like, >, <, >=, <=
    index: number = 0;          // Filter index
    composition: boolean = true; // Apply to composition
    name: string = "";          // Filter name (for logic)
    operateon: string = "";     // What to operate on (selector, etc.)
}
```

## Basic Usage

### Simple Query by Type

Find all concepts of a specific type:

```javascript
import { FreeschemaQuery, FreeschemaQueryApi } from 'mftsccs-browser';

// Create query
const query = new FreeschemaQuery();
query.type = "person";        // Query all person concepts
query.inpage = 10;            // 10 results per page
query.page = 1;               // First page
query.order = "DESC";         // Newest first

// Execute query
const results = await FreeschemaQueryApi(query, authToken);

console.log('Found persons:', results);
```

### Query Specific Concepts

Query specific concepts by their IDs:

```javascript
const query = new FreeschemaQuery();
query.conceptIds = [123, 456, 789]; // Query these specific IDs
query.inpage = 10;

const results = await FreeschemaQueryApi(query, authToken);
```

### Query with Selectors

Include specific properties in results:

```javascript
const query = new FreeschemaQuery();
query.type = "person";
query.selectors = ["the_name", "the_email", "the_phone"]; // Only include these
query.inpage = 20;

const results = await FreeschemaQueryApi(query, authToken);
// Results will only contain the selected properties
```

## Query Parameters

### Core Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `type` | string | `""` | Main concept type to query (e.g., "person", "organization") |
| `inpage` | number | `10` | Number of results per page |
| `page` | number | `1` | Current page number (1-indexed) |
| `order` | string | `"DESC"` | Sort order: "DESC" (newest first) or "ASC" (oldest first) |
| `outputFormat` | number | `NORMAL` | Output format: NORMAL, DATAID, JUSTDATA, DATAV2, RAW, ALLID |

### Selection Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `conceptIds` | number[] | `[]` | Specific concept IDs to query (ignores type if set) |
| `concepts` | Concept[] | `[]` | Specific concept objects to query |
| `selectors` | string[] | `[]` | Properties to include in results (e.g., ["the_name", "the_email"]) |

### Relationship Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `typeConnection` | string | `""` | Connection type to navigate (e.g., "has_email", "works_at") |
| `reverse` | boolean | `false` | Query in reverse direction (TO → FROM instead of FROM → TO) |
| `freeschemaQueries` | FreeschemaQuery[] | `[]` | Nested sub-queries for complex relationships |

### Filter Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `filters` | FilterSearch[] | `[]` | Array of filter conditions |
| `filterLogic` | string | `""` | Logic expression combining filters (e.g., "(A AND B) OR C") |
| `filterAncestor` | string | `""` | Filter by ancestor relationship |

### Advanced Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `name` | string | `""` | Query identifier (useful in nested queries) |
| `limit` | boolean | `false` | Apply result limit |
| `isSecure` | boolean | `false` | Apply security filtering |
| `includeInFilter` | boolean | `false` | Include this query in parent filter |
| `isOldConnectionType` | boolean | `false` | Use legacy connection type handling |

## Filters and Logic

### Filter Operators

FreeschemaQuery supports multiple filter operators:

| Operator | Description | Example |
|----------|-------------|---------|
| `=` | Equal | `search: "John"`, `logicoperator: "="` |
| `!=` | Not equal | `search: "Active"`, `logicoperator: "!="` |
| `like` | Pattern match | `search: "John%"`, `logicoperator: "like"` |
| `>` | Greater than | `search: "100"`, `logicoperator: ">"` |
| `<` | Less than | `search: "50"`, `logicoperator: "<"` |
| `>=` | Greater or equal | `search: "18"`, `logicoperator: ">="` |
| `<=` | Less or equal | `search: "65"`, `logicoperator: "<="` |

### Single Filter

```javascript
import { FreeschemaQuery, FilterSearch } from 'mftsccs-browser';

const query = new FreeschemaQuery();
query.type = "person";

// Create filter
const nameFilter = new FilterSearch();
nameFilter.name = "name_filter";      // Filter identifier
nameFilter.type = "the_name";         // Property to filter
nameFilter.search = "John";           // Value to match
nameFilter.logicoperator = "like";    // Use pattern matching
nameFilter.operateon = "selector";    // Operate on selector

query.filters = [nameFilter];
query.filterLogic = "( name_filter )"; // Simple logic

const results = await FreeschemaQueryApi(query, authToken);
```

### Multiple Filters with AND Logic

```javascript
const query = new FreeschemaQuery();
query.type = "person";

// Filter by name
const nameFilter = new FilterSearch();
nameFilter.name = "name_filter";
nameFilter.type = "the_name";
nameFilter.search = "John";
nameFilter.logicoperator = "like";
nameFilter.operateon = "selector";

// Filter by age
const ageFilter = new FilterSearch();
ageFilter.name = "age_filter";
ageFilter.type = "the_age";
ageFilter.search = "18";
ageFilter.logicoperator = ">=";
ageFilter.operateon = "selector";

// Combine with AND
query.filters = [nameFilter, ageFilter];
query.filterLogic = "( name_filter AND age_filter )";

const results = await FreeschemaQueryApi(query, authToken);
// Returns persons named "John" AND age >= 18
```

### Complex Filter Logic with OR/AND

```javascript
const query = new FreeschemaQuery();
query.type = "employee";

const deptFilter = new FilterSearch();
deptFilter.name = "dept_filter";
deptFilter.type = "the_department";
deptFilter.search = "Engineering";
deptFilter.logicoperator = "=";

const seniorFilter = new FilterSearch();
seniorFilter.name = "senior_filter";
seniorFilter.type = "the_level";
seniorFilter.search = "Senior";
seniorFilter.logicoperator = "=";

const managerFilter = new FilterSearch();
managerFilter.name = "manager_filter";
managerFilter.type = "the_role";
managerFilter.search = "Manager";
managerFilter.logicoperator = "=";

query.filters = [deptFilter, seniorFilter, managerFilter];
// Engineering employees who are EITHER Senior OR Manager
query.filterLogic = "( dept_filter AND ( senior_filter OR manager_filter ) )";

const results = await FreeschemaQueryApi(query, authToken);
```

## Nested Queries

Nested queries allow you to navigate relationships and build complex queries by composing multiple FreeschemaQuery objects.

### Simple Nested Query

Find all persons and include their email addresses:

```javascript
const query = new FreeschemaQuery();
query.type = "person";
query.inpage = 10;

// Nested query to get emails
const emailQuery = new FreeschemaQuery();
emailQuery.typeConnection = "has_email"; // Navigate this connection
emailQuery.name = "emails";              // Identifier for results
emailQuery.selectors = ["the_email"];    // Include email property

query.freeschemaQueries = [emailQuery];

const results = await FreeschemaQueryApi(query, authToken);
// Results include persons with their emails nested
```

### Multiple Nested Queries

Query multiple relationships:

```javascript
const query = new FreeschemaQuery();
query.type = "person";
query.selectors = ["the_name"];

// Get emails
const emailQuery = new FreeschemaQuery();
emailQuery.typeConnection = "has_email";
emailQuery.name = "emails";
emailQuery.selectors = ["the_email"];

// Get phone numbers
const phoneQuery = new FreeschemaQuery();
phoneQuery.typeConnection = "has_phone";
phoneQuery.name = "phones";
phoneQuery.selectors = ["the_phone"];

// Get organization
const orgQuery = new FreeschemaQuery();
orgQuery.typeConnection = "works_at";
orgQuery.name = "organization";
orgQuery.selectors = ["the_organization_name"];

query.freeschemaQueries = [emailQuery, phoneQuery, orgQuery];

const results = await FreeschemaQueryApi(query, authToken);
// Returns persons with all their contact info and organization
```

### Deep Nested Queries

Nest queries multiple levels deep:

```javascript
const query = new FreeschemaQuery();
query.type = "organization";

// Get employees
const employeeQuery = new FreeschemaQuery();
employeeQuery.typeConnection = "has_employee";
employeeQuery.name = "employees";

// Get employee's projects (nested inside employee query)
const projectQuery = new FreeschemaQuery();
projectQuery.typeConnection = "assigned_to";
projectQuery.name = "projects";
projectQuery.selectors = ["the_project_name", "the_status"];

// Nest projects inside employees
employeeQuery.freeschemaQueries = [projectQuery];

// Nest employees inside organization
query.freeschemaQueries = [employeeQuery];

const results = await FreeschemaQueryApi(query, authToken);
// Returns organizations → employees → projects (3 levels deep)
```

## Output Formats

FreeschemaQuery supports multiple output formats to suit different use cases:

### Available Formats

```javascript
import { NORMAL, DATAID, JUSTDATA, DATAV2, RAW, ALLID } from 'mftsccs-browser';
```

| Format | Constant | Description | Use Case |
|--------|----------|-------------|----------|
| **NORMAL** | `NORMAL` | Standard format with full concept data | General display |
| **DATAID** | `DATAID` | Structured with IDs and nested data | UI components |
| **JUSTDATA** | `JUSTDATA` | Minimal data, just essentials | Performance-critical |
| **DATAV2** | `DATAV2` | Enhanced structured format | Complex UIs |
| **RAW** | `RAW` | Raw concept IDs and connections | Custom processing |
| **ALLID** | `ALLID` | All IDs with minimal processing | Internal use |

### Using Output Formats

```javascript
import { FreeschemaQuery, DATAID } from 'mftsccs-browser';

const query = new FreeschemaQuery();
query.type = "person";
query.outputFormat = DATAID; // Structured format
query.inpage = 10;

const results = await FreeschemaQueryApi(query, authToken);

// DATAID format structure:
// [
//   {
//     id: 123,
//     person: {
//       the_name: { id: 124, characterValue: "John Doe" },
//       the_email: { id: 125, characterValue: "john@example.com" }
//     }
//   }
// ]
```

### Format Comparison

```javascript
// NORMAL format
{
  id: 123,
  characterValue: "John Doe",
  typeId: 5,
  connections: [...]
}

// DATAID format
{
  id: 123,
  person: {
    the_name: { id: 124, characterValue: "John Doe" },
    the_age: { id: 125, characterValue: "30" }
  }
}

// RAW format
{
  conceptIds: [123, 456, 789],
  linkers: [...],
  compositionIds: [111, 222],
  reverse: false
}
```

## Advanced Features

### Reverse Queries

Query connections in reverse direction (TO → FROM instead of FROM → TO):

```javascript
const query = new FreeschemaQuery();
query.type = "organization";
query.reverse = true; // Query what connects TO organizations

const employedByQuery = new FreeschemaQuery();
employedByQuery.typeConnection = "works_at";
employedByQuery.reverse = true; // Find all persons who work at these orgs

query.freeschemaQueries = [employedByQuery];

const results = await FreeschemaQueryApi(query, authToken);
```

### Pagination

Handle large result sets efficiently:

```javascript
// Page 1
const query = new FreeschemaQuery();
query.type = "person";
query.inpage = 20;  // 20 results per page
query.page = 1;     // First page

let results = await FreeschemaQueryApi(query, authToken);

// Page 2
query.page = 2;
results = await FreeschemaQueryApi(query, authToken);

// Page 3
query.page = 3;
results = await FreeschemaQueryApi(query, authToken);
```

### Sorting

Control result order:

```javascript
const query = new FreeschemaQuery();
query.type = "article";
query.order = "DESC"; // Newest first (default)
query.inpage = 10;

const newestResults = await FreeschemaQueryApi(query, authToken);

// Get oldest first
query.order = "ASC";
const oldestResults = await FreeschemaQueryApi(query, authToken);
```

## Complete Examples

### Example 1: Simple Person Search

```javascript
import { FreeschemaQuery, FreeschemaQueryApi, DATAID } from 'mftsccs-browser';

async function searchPersons(namePattern) {
  const query = new FreeschemaQuery();
  query.type = "person";
  query.outputFormat = DATAID;
  query.inpage = 20;

  // Add name filter
  const filter = new FilterSearch();
  filter.name = "name_filter";
  filter.type = "the_name";
  filter.search = namePattern;
  filter.logicoperator = "like";
  filter.operateon = "selector";

  query.filters = [filter];
  query.filterLogic = "( name_filter )";

  const results = await FreeschemaQueryApi(query, "");
  return results;
}

// Usage
const persons = await searchPersons("John");
console.log('Found persons:', persons);
```

### Example 2: Employee Directory with Contact Info

```javascript
async function getEmployeeDirectory(page = 1) {
  const query = new FreeschemaQuery();
  query.type = "employee";
  query.outputFormat = DATAID;
  query.page = page;
  query.inpage = 25;
  query.order = "DESC";

  // Get employee name
  query.selectors = ["the_name", "the_title"];

  // Get email addresses
  const emailQuery = new FreeschemaQuery();
  emailQuery.typeConnection = "has_email";
  emailQuery.name = "email";
  emailQuery.selectors = ["the_email"];

  // Get phone numbers
  const phoneQuery = new FreeschemaQuery();
  phoneQuery.typeConnection = "has_phone";
  phoneQuery.name = "phone";
  phoneQuery.selectors = ["the_phone"];

  // Get department
  const deptQuery = new FreeschemaQuery();
  deptQuery.typeConnection = "belongs_to_department";
  deptQuery.name = "department";
  deptQuery.selectors = ["the_department_name"];

  query.freeschemaQueries = [emailQuery, phoneQuery, deptQuery];

  const results = await FreeschemaQueryApi(query, "");
  return results;
}

// Usage
const employees = await getEmployeeDirectory(1);
employees.forEach(emp => {
  console.log(`${emp.employee.the_name.characterValue}`);
  console.log(`Email: ${emp.employee.email?.the_email?.characterValue}`);
  console.log(`Phone: ${emp.employee.phone?.the_phone?.characterValue}`);
  console.log(`Dept: ${emp.employee.department?.the_department_name?.characterValue}`);
});
```

### Example 3: Project Management Query

```javascript
async function getProjectDetails(status = "Active") {
  const query = new FreeschemaQuery();
  query.type = "project";
  query.outputFormat = DATAID;
  query.inpage = 10;

  // Filter by status
  const statusFilter = new FilterSearch();
  statusFilter.name = "status_filter";
  statusFilter.type = "the_status";
  statusFilter.search = status;
  statusFilter.logicoperator = "=";
  statusFilter.operateon = "selector";

  query.filters = [statusFilter];
  query.filterLogic = "( status_filter )";

  // Get project properties
  query.selectors = ["the_project_name", "the_description", "the_deadline"];

  // Get assigned team members
  const teamQuery = new FreeschemaQuery();
  teamQuery.typeConnection = "assigned_to";
  teamQuery.reverse = true; // Who is assigned TO this project
  teamQuery.name = "team";
  teamQuery.selectors = ["the_name", "the_role"];

  // Get project tasks
  const taskQuery = new FreeschemaQuery();
  taskQuery.typeConnection = "has_task";
  taskQuery.name = "tasks";
  taskQuery.selectors = ["the_task_name", "the_status", "the_priority"];

  query.freeschemaQueries = [teamQuery, taskQuery];

  const results = await FreeschemaQueryApi(query, "");
  return results;
}

// Usage
const activeProjects = await getProjectDetails("Active");
activeProjects.forEach(project => {
  console.log(`Project: ${project.project.the_project_name.characterValue}`);
  console.log(`Team size: ${project.project.team.length}`);
  console.log(`Tasks: ${project.project.tasks.length}`);
});
```

### Example 4: E-commerce Product Catalog

```javascript
async function searchProducts(category, minPrice, maxPrice) {
  const query = new FreeschemaQuery();
  query.type = "product";
  query.outputFormat = DATAID;
  query.inpage = 30;
  query.order = "DESC";

  // Category filter
  const categoryFilter = new FilterSearch();
  categoryFilter.name = "category_filter";
  categoryFilter.type = "the_category";
  categoryFilter.search = category;
  categoryFilter.logicoperator = "=";

  // Min price filter
  const minPriceFilter = new FilterSearch();
  minPriceFilter.name = "min_price_filter";
  minPriceFilter.type = "the_price";
  minPriceFilter.search = minPrice.toString();
  minPriceFilter.logicoperator = ">=";

  // Max price filter
  const maxPriceFilter = new FilterSearch();
  maxPriceFilter.name = "max_price_filter";
  maxPriceFilter.type = "the_price";
  maxPriceFilter.search = maxPrice.toString();
  maxPriceFilter.logicoperator = "<=";

  query.filters = [categoryFilter, minPriceFilter, maxPriceFilter];
  query.filterLogic = "( category_filter AND min_price_filter AND max_price_filter )";

  // Get product details
  query.selectors = ["the_name", "the_price", "the_description"];

  // Get product images
  const imageQuery = new FreeschemaQuery();
  imageQuery.typeConnection = "has_image";
  imageQuery.name = "images";
  imageQuery.selectors = ["the_image_url"];

  // Get reviews
  const reviewQuery = new FreeschemaQuery();
  reviewQuery.typeConnection = "has_review";
  reviewQuery.name = "reviews";
  reviewQuery.selectors = ["the_rating", "the_comment"];

  query.freeschemaQueries = [imageQuery, reviewQuery];

  const results = await FreeschemaQueryApi(query, "");
  return results;
}

// Usage
const products = await searchProducts("Electronics", 100, 500);
```

## Best Practices

### 1. Use Appropriate Output Formats

```javascript
// ✅ GOOD: Use DATAID for UI display
const query = new FreeschemaQuery();
query.outputFormat = DATAID; // Structured, easy to work with

// ❌ AVOID: Using RAW format for UI rendering
query.outputFormat = RAW; // Too low-level for UI
```

### 2. Implement Pagination for Large Datasets

```javascript
// ✅ GOOD: Paginate large result sets
const query = new FreeschemaQuery();
query.type = "user";
query.inpage = 50;  // Reasonable page size
query.page = 1;

// ❌ AVOID: Querying all results at once
query.inpage = 10000; // Too many results
```

### 3. Use Selectors to Limit Data

```javascript
// ✅ GOOD: Only request needed properties
const query = new FreeschemaQuery();
query.type = "person";
query.selectors = ["the_name", "the_email"]; // Only what we need

// ❌ AVOID: Requesting all properties when you only need a few
query.selectors = []; // Gets everything
```

### 4. Name Your Filters Clearly

```javascript
// ✅ GOOD: Descriptive filter names
const ageFilter = new FilterSearch();
ageFilter.name = "min_age_filter"; // Clear purpose

query.filterLogic = "( min_age_filter AND location_filter )"; // Readable

// ❌ AVOID: Generic or unclear names
ageFilter.name = "f1"; // What is f1?
query.filterLogic = "( f1 AND f2 )"; // Unclear
```

### 5. Use Nested Queries for Related Data

```javascript
// ✅ GOOD: Single query with nested relationships
const query = new FreeschemaQuery();
query.type = "person";

const emailQuery = new FreeschemaQuery();
emailQuery.typeConnection = "has_email";
query.freeschemaQueries = [emailQuery];

// Single API call gets everything

// ❌ AVOID: Multiple separate queries
const persons = await FreeschemaQueryApi(personQuery);
for (let person of persons) {
  const emails = await FreeschemaQueryApi(emailQuery); // N+1 queries!
}
```

### 6. Combine Filters with Logical Operators

```javascript
// ✅ GOOD: Use parentheses for complex logic
query.filterLogic = "( (A AND B) OR (C AND D) )"; // Clear precedence

// ❌ AVOID: Ambiguous filter logic
query.filterLogic = "A AND B OR C AND D"; // Unclear precedence
```

### 7. Always Use Transactions for Multi-Step Operations

```javascript
// ✅ GOOD: Query within transaction context
import { LocalTransaction, FreeschemaQueryApi } from 'mftsccs-browser';

const transaction = new LocalTransaction();
await transaction.initialize();

try {
  const results = await FreeschemaQueryApi(query, authToken);
  // Process results...
  await transaction.commitTransaction();
} catch (error) {
  await transaction.rollbackTransaction();
}

// Note: FreeschemaQueryApi is read-only, but if you're creating
// data based on query results, wrap it in a transaction
```

## Observable Pattern

FreeschemaQuery supports reactive programming with observables that automatically update when underlying data changes.

### Using SchemaQueryListener

```javascript
import { FreeschemaQuery, SchemaQueryListener, DATAID } from 'mftsccs-browser';

const query = new FreeschemaQuery();
query.type = "BlogPost";
query.outputFormat = DATAID;
query.inpage = 10;

// Create observable
const observer = SchemaQueryListener(query, authToken);

// Subscribe to changes
observer.subscribe((results, details) => {
  console.log('Query results updated:', results);
  console.log('Total count:', details.totalCount);

  // Update your UI automatically
  renderBlogPosts(results);
});

// Observer automatically detects when:
// - New BlogPost concepts are created
// - Existing BlogPost concepts are modified
// - BlogPost concepts are deleted
// - Connected concepts change
```

### One-Time Query Execution

```javascript
import { FreeschemaQuery, SchemaQuery } from 'mftsccs-browser';

const query = new FreeschemaQuery();
query.type = "person";
query.outputFormat = DATAID;

// Execute once without subscribing
const results = await SchemaQuery(query, authToken);
console.log('Results:', results);
```

### Combining with Filters

```javascript
const query = new FreeschemaQuery();
query.type = "Article";
query.outputFormat = DATAID;

// Filter for published articles
const filter = new FilterSearch();
filter.name = "status_filter";
filter.type = "the_status";
filter.search = "Published";
filter.logicoperator = "=";

query.filters = [filter];
query.filterLogic = "( status_filter )";

// Observable updates when published articles change
const observer = SchemaQueryListener(query, authToken);
observer.subscribe((articles) => {
  updatePublishedArticlesList(articles);
});
```

### Unsubscribing

```javascript
const query = new FreeschemaQuery();
query.type = "notification";

const observer = SchemaQueryListener(query, authToken);

const subscription = observer.subscribe((notifications) => {
  displayNotifications(notifications);
});

// Later: unsubscribe when component unmounts
subscription.unsubscribe();
```

## Summary

**FreeschemaQuery** is a powerful, flexible querying system that:

✅ **Enables schema-free querying** of your knowledge graph
✅ **Supports complex filters** with AND/OR logic
✅ **Navigates relationships** through nested queries
✅ **Provides multiple output formats** for different use cases
✅ **Handles pagination** for large datasets
✅ **Supports reactive updates** with observable pattern
✅ **Integrates with transactions** for ACID compliance

### Key Takeaways

1. **Declarative**: Describe what you want, not how to get it
2. **Flexible**: Works without rigid schemas
3. **Powerful**: Complex queries with filters, nesting, and relationships
4. **Performant**: Optimized for graph traversal
5. **Reactive**: Real-time updates with observables

### Next Steps

- Review [CORE_CONCEPTS.md](./CORE_CONCEPTS.md) for understanding concepts and connections
- Check [README.md](../README.md) for transaction patterns
- Explore the API documentation for specific query functions

For more information, visit the [Freeschema Documentation](https://documentation.freeschema.com).
