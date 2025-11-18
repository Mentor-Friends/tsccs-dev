# Widget System Documentation

## Table of Contents

- [Introduction](#introduction)
- [What is the Widget System?](#what-is-the-widget-system)
- [Core Widget Classes](#core-widget-classes)
- [Widget Lifecycle](#widget-lifecycle)
- [Creating Custom Widgets](#creating-custom-widgets)
- [State Management](#state-management)
- [Parent-Child Relationships](#parent-child-relationships)
- [Widget Rendering](#widget-rendering)
- [Observable Widgets](#observable-widgets)
- [BuilderStatefulWidget](#builderstatefulwidget)
- [Widget Services](#widget-services)
- [Complete Examples](#complete-examples)
- [Best Practices](#best-practices)

## Introduction

The **Widget System** in mftsccs-browser provides a React-like component framework for building interactive, stateful user interfaces. It combines the power of the concept-connection system with modern UI component patterns to create reusable, data-driven widgets.

### Why Use the Widget System?

- 🎨 **Component-Based**: Build reusable UI components with encapsulated logic
- 🔄 **Reactive**: Automatic updates when state or data changes
- 🎯 **Lifecycle Hooks**: Control rendering at every stage (mount, render, update)
- 🔗 **Concept Integration**: Widgets connect directly to your knowledge graph
- 🏗️ **Hierarchical**: Parent-child widget composition
- 💾 **State Management**: Built-in state tracking with change detection
- ⚡ **Performance**: Efficient rendering with caching and selective updates

## What is the Widget System?

The Widget System is a complete UI framework that provides:

1. **Base Widget Classes**: Foundation classes (BaseWidget, StatefulWidget)
2. **Lifecycle Management**: Hooks for mount, render, and update events
3. **State Management**: Built-in state tracking with previousState comparison
4. **Observable Pattern**: Reactive data updates from the BaseObserver
5. **Child Composition**: Hierarchical widget trees with parent-child relationships
6. **Dynamic Rendering**: Render widgets from concepts stored in the knowledge graph
7. **Event Handling**: Easy DOM event binding and management

```
┌──────────────────────────────────────────────────┐
│              Widget System Hierarchy             │
├──────────────────────────────────────────────────┤
│  BaseObserver                                    │
│    └── BaseWidget                                │
│          └── StatefulWidget                      │
│                └── BuilderStatefulWidget         │
└──────────────────────────────────────────────────┘
```

## Core Widget Classes

### BaseObserver

The foundation class providing reactive data capabilities.

```typescript
class BaseObserver {
  // Observable pattern implementation
  subscribe(callback: Function): Subscription
  notify(data: any): void
  unsubscribe(): void
}
```

**Key Features:**
- Publish-subscribe pattern
- Automatic change detection
- Multiple subscriber support

### BaseWidget

Extends BaseObserver to add DOM element management.

```typescript
class BaseWidget extends BaseObserver {
  element: HTMLElement | null;           // Mounted DOM element
  elementIdentifier: number;             // Unique widget ID
  widgetMounted: boolean;                // Mount status

  // Core methods
  getComponent(): HTMLElement | null
  getElementById(identifier: string): HTMLElement | null
  createWidgetWrapperIdentifier(): string
}
```

**Key Features:**
- DOM element wrapper management
- Unique widget identification
- Element selection within widget scope

### StatefulWidget

Adds state management and lifecycle hooks.

```typescript
class StatefulWidget extends BaseWidget {
  // State & Props
  state: { [key: string]: any };         // Current state
  previousState: { [key: string]: any }; // Previous state for comparison
  params: any;                           // Widget parameters

  // Widget Tree
  childWidgets: any[];                   // Child widget instances
  childWidgetElement: any[];             // Child DOM elements
  parentWidget: any;                     // Parent widget reference
  widgetState: { [key: string]: any };   // Shared state with children

  // Template
  html: string;                          // HTML template
  css: string;                           // CSS styles
  js: string;                            // JavaScript code

  // Core Methods
  getHtml(): string
  querySelector(selector: string): Element | null
  querySelectorAll(selector: string): NodeListOf<Element> | null
  setTitle(title: string): void

  // Lifecycle Hooks
  before_render(): void                  // Like componentDidMount
  render(): void                         // Render the widget
  after_render(): void                   // Add event listeners
  mount(parentElement: HTMLElement): void
  unmount(): void
}
```

**Key Features:**
- Built-in state management
- Lifecycle hooks (before_render, render, after_render)
- Parent-child widget composition
- Template system (HTML, CSS, JS)
- Query selectors scoped to widget

### BuilderStatefulWidget

Advanced widget with dynamic code execution and concept integration.

```typescript
class BuilderStatefulWidget extends StatefulWidget {
  // Dynamic Code Execution
  componentDidMountFunction: any;        // Code to run on mount
  addEventFunction: any;                 // Code for event binding
  customFunctions: TCustomFunction[];    // User-defined functions

  // Type Integration
  widgetType: string;                    // Type identifier
  widgetDependencies: any[];             // Widget dependencies

  // Development
  inDevelopment: boolean;                // Enable visual editing

  // Lifecycle Methods
  render_custom_functions(): void        // Execute custom functions
  render_widgetDependencies(): void      // Load dependencies
  mount_child(): void                    // Mount child widgets
}
```

**Key Features:**
- Dynamic JavaScript execution
- Type-based data binding
- Custom function support
- Development mode with visual editing
- Widget dependency management

## Widget Lifecycle

The widget lifecycle follows a predictable flow from creation to destruction:

```
┌─────────────────────────────────────────────────────┐
│                  Widget Lifecycle                   │
├─────────────────────────────────────────────────────┤
│  1. Constructor                                     │
│     └─ new MyWidget()                              │
│                                                     │
│  2. Mount                                           │
│     └─ widget.mount(parentElement)                 │
│                                                     │
│  3. Custom Functions (BuilderStatefulWidget)        │
│     └─ render_custom_functions()                   │
│                                                     │
│  4. Widget Dependencies (BuilderStatefulWidget)     │
│     └─ render_widgetDependencies()                 │
│                                                     │
│  5. Before Render                                   │
│     └─ before_render() ← componentDidMount         │
│                                                     │
│  6. Mount Children                                  │
│     └─ mount_child()                               │
│                                                     │
│  7. Render                                          │
│     └─ render() ← Updates DOM                      │
│                                                     │
│  8. After Render                                    │
│     └─ after_render() ← Add event listeners        │
│                                                     │
│  9. State Updates (repeats 7-8)                     │
│     └─ setState() → render() → after_render()      │
│                                                     │
│  10. Unmount                                        │
│      └─ unmount() ← Cleanup                        │
└─────────────────────────────────────────────────────┘
```

### Lifecycle Hook Details

#### before_render()
- Called **once** after the widget is mounted
- Equivalent to React's `componentDidMount`
- Use for: Initial data fetching, subscriptions, timers

#### render()
- Called to **update the DOM**
- Can be called multiple times (on state changes)
- Use for: Updating displayed data

#### after_render()
- Called **after each render**
- Use for: Adding event listeners, DOM manipulation, third-party library initialization

## Creating Custom Widgets

### Simple Widget Example

```javascript
import { StatefulWidget } from 'mftsccs-browser';

class CounterWidget extends StatefulWidget {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  // Lifecycle: Called once after mount
  before_render() {
    console.log('Counter widget mounted');
  }

  // Template
  getHtml() {
    return `
      <div class="counter">
        <h1>Count: ${this.state.count}</h1>
        <button id="increment">Increment</button>
        <button id="decrement">Decrement</button>
      </div>
    `;
  }

  // Lifecycle: Add event listeners
  after_render() {
    const incrementBtn = this.getElementById('increment');
    const decrementBtn = this.getElementById('decrement');

    incrementBtn?.addEventListener('click', () => {
      this.state.count++;
      this.render(); // Trigger re-render
    });

    decrementBtn?.addEventListener('click', () => {
      this.state.count--;
      this.render();
    });
  }
}

// Usage
const counter = new CounterWidget();
counter.mount(document.getElementById('app'));
```

### Widget with Data Fetching

```javascript
import { StatefulWidget, FreeschemaQuery, FreeschemaQueryApi, DATAID } from 'mftsccs-browser';

class PersonListWidget extends StatefulWidget {
  constructor() {
    super();
    this.state = {
      persons: [],
      loading: true
    };
  }

  // Fetch data when mounted
  async before_render() {
    await this.fetchPersons();
  }

  async fetchPersons() {
    const query = new FreeschemaQuery();
    query.type = "person";
    query.outputFormat = DATAID;
    query.inpage = 20;
    query.selectors = ["the_name", "the_email"];

    try {
      const results = await FreeschemaQueryApi(query, "");
      this.state.persons = results;
      this.state.loading = false;
      this.render(); // Update UI
    } catch (error) {
      console.error('Failed to fetch persons:', error);
      this.state.loading = false;
      this.render();
    }
  }

  getHtml() {
    if (this.state.loading) {
      return '<div class="loading">Loading persons...</div>';
    }

    const personList = this.state.persons.map(p => `
      <li>
        ${p.person.the_name.characterValue} -
        ${p.person.the_email?.characterValue || 'No email'}
      </li>
    `).join('');

    return `
      <div class="person-list">
        <h2>Persons</h2>
        <ul>${personList}</ul>
      </div>
    `;
  }
}

// Usage
const personList = new PersonListWidget();
personList.mount(document.getElementById('app'));
```

## State Management

### Setting State

```javascript
class MyWidget extends StatefulWidget {
  constructor() {
    super();
    this.state = {
      name: 'John',
      age: 30,
      active: true
    };
  }

  updateName(newName) {
    // Update state
    this.state.name = newName;

    // Trigger re-render
    this.render();
  }

  incrementAge() {
    this.state.age++;
    this.render();
  }
}
```

### State Change Detection

```javascript
class MyWidget extends StatefulWidget {
  constructor() {
    super();
    this.state = { count: 0 };
    this.previousState = { count: 0 };
  }

  updateCount(newCount) {
    // Store previous state
    this.previousState = { ...this.state };

    // Update current state
    this.state.count = newCount;

    // Check if changed
    if (this.previousState.count !== this.state.count) {
      console.log(`Count changed from ${this.previousState.count} to ${this.state.count}`);
      this.render();
    }
  }
}
```

### Shared State with Children

```javascript
class ParentWidget extends StatefulWidget {
  constructor() {
    super();

    // Shared state accessible to children
    this.widgetState = {
      theme: 'dark',
      language: 'en'
    };
  }

  before_render() {
    // Create child widget
    const child = new ChildWidget();
    child.parentWidget = this;

    // Child can access this.parentWidget.widgetState
    child.mount(this.getElementById('child-container'));

    this.childWidgets.push(child);
  }

  changeTheme(newTheme) {
    this.widgetState.theme = newTheme;

    // Notify all children
    this.childWidgets.forEach(child => {
      child.render();
    });
  }

  getHtml() {
    return `
      <div>
        <h1>Parent Widget</h1>
        <div id="child-container"></div>
      </div>
    `;
  }
}

class ChildWidget extends StatefulWidget {
  getHtml() {
    const theme = this.parentWidget?.widgetState?.theme || 'light';

    return `
      <div class="child ${theme}">
        Child Widget - Theme: ${theme}
      </div>
    `;
  }
}
```

## Parent-Child Relationships

### Creating a Widget Tree

```javascript
class DashboardWidget extends StatefulWidget {
  constructor() {
    super();
    this.childWidgets = [];
  }

  async before_render() {
    // Create header widget
    const header = new HeaderWidget();
    header.parentWidget = this;
    await header.mount(this.getElementById('header'));
    this.childWidgets.push(header);

    // Create sidebar widget
    const sidebar = new SidebarWidget();
    sidebar.parentWidget = this;
    await sidebar.mount(this.getElementById('sidebar'));
    this.childWidgets.push(sidebar);

    // Create content widget
    const content = new ContentWidget();
    content.parentWidget = this;
    await content.mount(this.getElementById('content'));
    this.childWidgets.push(content);
  }

  getHtml() {
    return `
      <div class="dashboard">
        <div id="header"></div>
        <div class="main">
          <div id="sidebar"></div>
          <div id="content"></div>
        </div>
      </div>
    `;
  }

  unmount() {
    // Cleanup all children
    this.childWidgets.forEach(child => {
      child.unmount();
    });
    this.childWidgets = [];

    super.unmount();
  }
}
```

### Passing Props to Children

```javascript
class ParentWidget extends StatefulWidget {
  before_render() {
    const child = new ChildWidget();

    // Pass data to child
    child.params = {
      userId: 123,
      userName: 'Alice',
      permissions: ['read', 'write']
    };

    child.mount(this.getElementById('child'));
  }

  getHtml() {
    return '<div id="child"></div>';
  }
}

class ChildWidget extends StatefulWidget {
  getHtml() {
    const { userId, userName, permissions } = this.params || {};

    return `
      <div class="user-info">
        <h3>User: ${userName} (ID: ${userId})</h3>
        <p>Permissions: ${permissions?.join(', ')}</p>
      </div>
    `;
  }
}
```

## Widget Rendering

### Dynamic Widget Rendering

```javascript
import { renderWidget, renderPage } from 'mftsccs-browser';

// Render a widget by its concept ID
async function showWidget(widgetId) {
  const container = document.getElementById('widget-container');

  // Renders widget stored as concept
  await renderWidget(widgetId, container, {
    initialData: { count: 0 }
  });
}

// Render a complete page
async function showPage(pageId) {
  const container = document.getElementById('page-container');

  // Renders page with all its widgets
  await renderPage(pageId, container, {
    showDocumentation: true
  });
}
```

### Widget Caching

```javascript
import { importLatestWidget, BuildWidgetFromCache } from 'mftsccs-browser';

// Pre-load widget into cache
async function preloadWidget(widgetId) {
  await importLatestWidget(widgetId);
  console.log('Widget cached');
}

// Render from cache (faster)
async function renderCachedWidget(widgetId) {
  const container = document.getElementById('app');
  const cachedWidget = await BuildWidgetFromCache(widgetId);

  if (cachedWidget) {
    await cachedWidget.mount(container);
  }
}
```

## Observable Widgets

Combine widgets with observables for reactive updates:

```javascript
import {
  StatefulWidget,
  FreeschemaQuery,
  SchemaQueryListener,
  DATAID
} from 'mftsccs-browser';

class LiveBlogWidget extends StatefulWidget {
  constructor() {
    super();
    this.state = {
      posts: [],
      totalCount: 0
    };
    this.observer = null;
  }

  before_render() {
    // Create query
    const query = new FreeschemaQuery();
    query.type = "BlogPost";
    query.outputFormat = DATAID;
    query.inpage = 10;
    query.order = "DESC";

    // Create observable
    this.observer = SchemaQueryListener(query, "");

    // Subscribe to updates
    this.observer.subscribe((results, details) => {
      this.state.posts = results;
      this.state.totalCount = details.totalCount;
      this.render(); // Auto-update UI when data changes
    });
  }

  getHtml() {
    const postList = this.state.posts.map(post => `
      <article>
        <h2>${post.BlogPost?.the_title?.characterValue}</h2>
        <p>${post.BlogPost?.the_content?.characterValue}</p>
      </article>
    `).join('');

    return `
      <div class="blog">
        <h1>Blog Posts (${this.state.totalCount})</h1>
        ${postList}
      </div>
    `;
  }

  unmount() {
    // Cleanup: unsubscribe from observer
    if (this.observer) {
      this.observer.unsubscribe();
    }
    super.unmount();
  }
}
```

## BuilderStatefulWidget

BuilderStatefulWidget provides advanced features for dynamic widget building:

### Custom Functions

```javascript
import { BuilderStatefulWidget } from 'mftsccs-browser';

const widget = new BuilderStatefulWidget();

// Define custom functions that execute in widget context
widget.customFunctions = [
  {
    code: `
      this.handleSubmit = async function(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        // Access widget state
        this.state.submitting = true;
        this.render();

        // Submit data
        await this.submitForm(data);

        this.state.submitting = false;
        this.render();
      };
    `
  },
  {
    code: `
      this.submitForm = async function(data) {
        // Use mftsccs functions
        const concept = await tsccs.MakeTheInstanceConceptLocal(
          'the_form_submission',
          JSON.stringify(data),
          false,
          999, 4, 999
        );
        console.log('Submitted:', concept);
      };
    `
  }
];

widget.html = `
  <form onsubmit="this.handleSubmit(event)">
    <input name="name" placeholder="Name" required />
    <input name="email" type="email" placeholder="Email" required />
    <button type="submit">Submit</button>
  </form>
`;

await widget.mount(parentElement);
```

### Type Integration

```javascript
const widget = new BuilderStatefulWidget();

// Widget connected to a type
widget.widgetType = 'the_person_card';

// Automatically queries and displays data of this type
widget.html = `
  <div class="person-card">
    <h3>{{the_name}}</h3>
    <p>{{the_email}}</p>
    <p>{{the_phone}}</p>
  </div>
`;

await widget.mount(parentElement);
```

### Development Mode

```javascript
const widget = new BuilderStatefulWidget();

// Enable visual editing mode
widget.inDevelopment = true;

// Users can edit widget properties visually
widget.html = '<div>Editable Widget</div>';
widget.widgetType = 'the_custom_widget';

await widget.mount(parentElement);
// Shows type editor UI for visual editing
```

## Widget Services

### renderPage

Renders a complete page with all its widgets:

```javascript
import { renderPage } from 'mftsccs-browser';

async function showDashboard() {
  const pageId = 12345; // Page concept ID
  const container = document.getElementById('app');

  await renderPage(pageId, container, {
    userId: 101,
    theme: 'dark'
  }, true); // showDocumentation = true
}
```

### renderWidget / renderLatestWidget

Renders a specific widget:

```javascript
import { renderLatestWidget } from 'mftsccs-browser';

async function showWidget() {
  const widgetId = 67890; // Widget concept ID
  const container = document.getElementById('widget-area');

  await renderLatestWidget(widgetId, container, {
    data: { count: 0 }
  }, false);
}
```

### BuildWidgetFromId

Creates a widget instance from a concept ID:

```javascript
import { BuildWidgetFromId } from 'mftsccs-browser';

async function createWidget() {
  const widgetId = 12345;
  const widgetTree = await BuildWidgetFromId(widgetId);

  // Widget tree contains:
  // - html: HTML template
  // - css: CSS styles
  // - js: JavaScript code
  // - childWidgets: Array of child widgets

  console.log('Widget loaded:', widgetTree);
}
```

## Complete Examples

### Example 1: Todo List Widget

```javascript
import { StatefulWidget } from 'mftsccs-browser';

class TodoListWidget extends StatefulWidget {
  constructor() {
    super();
    this.state = {
      todos: [],
      inputValue: ''
    };
  }

  before_render() {
    // Load todos from storage
    const saved = localStorage.getItem('todos');
    if (saved) {
      this.state.todos = JSON.parse(saved);
    }
  }

  getHtml() {
    const todoItems = this.state.todos.map((todo, index) => `
      <li class="${todo.completed ? 'completed' : ''}">
        <input
          type="checkbox"
          id="todo-${index}"
          ${todo.completed ? 'checked' : ''}
        />
        <label for="todo-${index}">${todo.text}</label>
        <button id="delete-${index}">Delete</button>
      </li>
    `).join('');

    return `
      <div class="todo-list">
        <h2>My Todos</h2>
        <div class="add-todo">
          <input
            id="todo-input"
            type="text"
            placeholder="Add a new todo"
            value="${this.state.inputValue}"
          />
          <button id="add-btn">Add</button>
        </div>
        <ul>${todoItems}</ul>
      </div>
    `;
  }

  after_render() {
    const input = this.getElementById('todo-input');
    const addBtn = this.getElementById('add-btn');

    // Add todo
    addBtn?.addEventListener('click', () => {
      if (input.value.trim()) {
        this.state.todos.push({
          text: input.value,
          completed: false
        });
        this.state.inputValue = '';
        this.saveTodos();
        this.render();
      }
    });

    // Toggle completion
    this.state.todos.forEach((todo, index) => {
      const checkbox = this.getElementById(`todo-${index}`);
      checkbox?.addEventListener('change', () => {
        this.state.todos[index].completed = checkbox.checked;
        this.saveTodos();
        this.render();
      });
    });

    // Delete todo
    this.state.todos.forEach((todo, index) => {
      const deleteBtn = this.getElementById(`delete-${index}`);
      deleteBtn?.addEventListener('click', () => {
        this.state.todos.splice(index, 1);
        this.saveTodos();
        this.render();
      });
    });

    // Update input value
    input?.addEventListener('input', (e) => {
      this.state.inputValue = e.target.value;
    });
  }

  saveTodos() {
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }
}

// Usage
const todos = new TodoListWidget();
todos.mount(document.getElementById('app'));
```

### Example 2: Data-Driven Dashboard

```javascript
import {
  StatefulWidget,
  FreeschemaQuery,
  SchemaQueryListener,
  DATAID
} from 'mftsccs-browser';

class DashboardWidget extends StatefulWidget {
  constructor() {
    super();
    this.state = {
      employees: [],
      projects: [],
      stats: {
        totalEmployees: 0,
        activeProjects: 0
      }
    };
  }

  before_render() {
    this.setupEmployeeObserver();
    this.setupProjectObserver();
  }

  setupEmployeeObserver() {
    const query = new FreeschemaQuery();
    query.type = "employee";
    query.outputFormat = DATAID;
    query.inpage = 100;

    SchemaQueryListener(query, "").subscribe((results, details) => {
      this.state.employees = results;
      this.state.stats.totalEmployees = details.totalCount;
      this.render();
    });
  }

  setupProjectObserver() {
    const query = new FreeschemaQuery();
    query.type = "project";
    query.outputFormat = DATAID;

    const filter = new FilterSearch();
    filter.name = "status_filter";
    filter.type = "the_status";
    filter.search = "Active";
    filter.logicoperator = "=";

    query.filters = [filter];
    query.filterLogic = "( status_filter )";

    SchemaQueryListener(query, "").subscribe((results, details) => {
      this.state.projects = results;
      this.state.stats.activeProjects = details.totalCount;
      this.render();
    });
  }

  getHtml() {
    return `
      <div class="dashboard">
        <h1>Company Dashboard</h1>

        <div class="stats">
          <div class="stat-card">
            <h3>Total Employees</h3>
            <p class="stat-number">${this.state.stats.totalEmployees}</p>
          </div>
          <div class="stat-card">
            <h3>Active Projects</h3>
            <p class="stat-number">${this.state.stats.activeProjects}</p>
          </div>
        </div>

        <div class="content">
          <div class="section">
            <h2>Recent Employees</h2>
            ${this.renderEmployeeList()}
          </div>

          <div class="section">
            <h2>Active Projects</h2>
            ${this.renderProjectList()}
          </div>
        </div>
      </div>
    `;
  }

  renderEmployeeList() {
    const employees = this.state.employees.slice(0, 5);

    return employees.map(emp => `
      <div class="employee-item">
        <strong>${emp.employee?.the_name?.characterValue}</strong>
        <span>${emp.employee?.the_email?.characterValue}</span>
      </div>
    `).join('');
  }

  renderProjectList() {
    const projects = this.state.projects.slice(0, 5);

    return projects.map(proj => `
      <div class="project-item">
        <strong>${proj.project?.the_name?.characterValue}</strong>
        <span>Status: ${proj.project?.the_status?.characterValue}</span>
      </div>
    `).join('');
  }
}

// Usage
const dashboard = new DashboardWidget();
dashboard.mount(document.getElementById('app'));
```

## Best Practices

### 1. Always Cleanup in unmount()

```javascript
// ✅ GOOD: Cleanup subscriptions and timers
class MyWidget extends StatefulWidget {
  before_render() {
    this.observer = SchemaQueryListener(query, "");
    this.observer.subscribe(data => this.handleData(data));

    this.timer = setInterval(() => this.refresh(), 5000);
  }

  unmount() {
    if (this.observer) {
      this.observer.unsubscribe();
    }
    if (this.timer) {
      clearInterval(this.timer);
    }
    super.unmount();
  }
}

// ❌ AVOID: Memory leaks from not cleaning up
class BadWidget extends StatefulWidget {
  before_render() {
    this.observer = SchemaQueryListener(query, "");
    this.observer.subscribe(data => this.handleData(data));
    // No cleanup = memory leak!
  }
}
```

### 2. Use before_render() for Initial Setup

```javascript
// ✅ GOOD: Setup in before_render()
class MyWidget extends StatefulWidget {
  before_render() {
    this.fetchInitialData();
    this.setupEventListeners();
  }
}

// ❌ AVOID: Setup in constructor
class BadWidget extends StatefulWidget {
  constructor() {
    super();
    this.fetchInitialData(); // DOM not ready yet!
  }
}
```

### 3. Scope Selectors to Widget

```javascript
// ✅ GOOD: Use widget-scoped selectors
class MyWidget extends StatefulWidget {
  after_render() {
    const button = this.getElementById('my-button');
    button?.addEventListener('click', this.handleClick);
  }
}

// ❌ AVOID: Global selectors
class BadWidget extends StatefulWidget {
  after_render() {
    const button = document.getElementById('my-button'); // Might select wrong element!
  }
}
```

### 4. Keep State Immutable When Possible

```javascript
// ✅ GOOD: Create new objects
updatePerson(newName) {
  this.state.person = {
    ...this.state.person,
    name: newName
  };
  this.render();
}

// ❌ AVOID: Direct mutation can cause issues
updatePerson(newName) {
  this.state.person.name = newName; // Harder to track changes
  this.render();
}
```

### 5. Use Params for Configuration

```javascript
// ✅ GOOD: Configurable via params
class MyWidget extends StatefulWidget {
  getHtml() {
    const { title, showHeader } = this.params || {};

    return `
      <div>
        ${showHeader ? `<h1>${title}</h1>` : ''}
        <div>Content...</div>
      </div>
    `;
  }
}

const widget = new MyWidget();
widget.params = { title: 'Dashboard', showHeader: true };
```

### 6. Leverage Parent-Child Communication

```javascript
// ✅ GOOD: Use widgetState for shared data
class ParentWidget extends StatefulWidget {
  constructor() {
    super();
    this.widgetState = { user: null };
  }

  async before_render() {
    this.widgetState.user = await fetchUser();

    // Children automatically have access
    const child = new ChildWidget();
    child.parentWidget = this;
    child.mount(this.getElementById('child'));
  }
}
```

### 7. Combine Widgets with Transactions

```javascript
// ✅ GOOD: Use transactions for data operations
class FormWidget extends StatefulWidget {
  async handleSubmit(data) {
    const transaction = new LocalTransaction();
    await transaction.initialize();

    try {
      const person = await transaction.MakeTheInstanceConceptLocal(
        'the_person', data.name, false, 999, 4, 999
      );

      const email = await transaction.MakeTheInstanceConceptLocal(
        'the_email', data.email, false, 999, 4, 999
      );

      await transaction.CreateConnection(person, email, 'has_email');
      await transaction.commitTransaction();

      this.state.success = true;
      this.render();
    } catch (error) {
      await transaction.rollbackTransaction();
      this.state.error = error.message;
      this.render();
    }
  }
}
```

## Summary

The **Widget System** provides a complete framework for building interactive UIs:

✅ **Component-Based Architecture** - Reusable, encapsulated widgets
✅ **Lifecycle Management** - Full control over rendering phases
✅ **State Management** - Built-in state tracking with change detection
✅ **Parent-Child Composition** - Hierarchical widget trees
✅ **Observable Integration** - Reactive data updates
✅ **Concept Integration** - Connect directly to knowledge graph
✅ **Dynamic Rendering** - Load widgets from stored concepts
✅ **Performance** - Efficient rendering with caching

### Key Takeaways

1. **Extend StatefulWidget** for most use cases
2. **Use lifecycle hooks** (before_render, render, after_render)
3. **Scope selectors** to widget using getElementById()
4. **Cleanup subscriptions** in unmount()
5. **Combine with observables** for reactive updates
6. **Use transactions** when creating/modifying data
7. **Leverage parent-child** relationships for shared state

### Next Steps

- Review [CORE_CONCEPTS.md](./CORE_CONCEPTS.md) for concepts and connections
- Check [FREESCHEMA_QUERY.md](./FREESCHEMA_QUERY.md) for querying widgets
- Explore [README.md](../README.md) for API reference

The Widget System integrates seamlessly with FreeschemaQuery, Transactions, and the Concept-Connection system to provide a complete application development framework.
