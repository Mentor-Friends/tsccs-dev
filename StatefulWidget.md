### Documentation for `setWidgetState` and `getWidgetState` Methods

#### `setWidgetState`

**Description**:  
The `setWidgetState` method is used to save a key-value pair in the widget's state. It also propagates the updated state to all child widgets recursively, ensuring that the state is synchronized across the widget hierarchy. After updating the state, it triggers a re-render of all child widgets.

**Parameters**:  
- `key` (string): The key for the state property to be saved.
- `value` (any): The value to be associated with the specified key.

**Behavior**:  
1. Updates the `widgetState` object with the provided key-value pair.
2. Recursively updates the state of all child widgets to include the updated state.
3. Triggers the `renderChildWidgets` method to re-render all child widgets.

**Example**:
```typescript
const widget = new StatefulWidget();
widget.setWidgetState("theme", "dark");
```

---

#### `getWidgetState`

**Description**:  
The `getWidgetState` method retrieves the value of a specified key from the widget's state. If the key does not exist, it returns a default value.

**Parameters**:  
- `key` (string): The key for the state property to retrieve.
- `defaultValue` (any): The value to return if the specified key does not exist in the state.

**Returns**:  
- `object`: The value associated with the specified key, or the `defaultValue` if the key does not exist.

**Behavior**:  
1. Checks if the specified key exists in the `widgetState` object.
2. Returns the value associated with the key if it exists.
3. Returns the `defaultValue` if the key does not exist.

**Example**:
```typescript
const widget = new StatefulWidget();
const theme = widget.getWidgetState("theme", "light"); // Returns "light" if "theme" is not set
```

---

### Use Case Example

```typescript
const widget = new StatefulWidget();

// Set a state value
widget.setWidgetState("language", "English");

// Retrieve the state value
const language = widget.getWidgetState("language", "Default Language");
console.log(language); // Output: "English"

// Retrieve a non-existent state value with a default
const theme = widget.getWidgetState("theme", "light");
console.log(theme); // Output: "light"
```

These methods are essential for managing and synchronizing state across a widget and its child widgets in a hierarchical structure.



Here is the detailed documentation for every method in the `StatefulWidget` class:


# Documentation for `StatefulWidget` Class

## Overview
The `StatefulWidget` class extends the `BaseWidget` class and provides functionality for managing state, rendering child widgets, and interacting with the DOM. It is designed to be used in a widget system where widgets can have hierarchical relationships and maintain their own state.

---

## Methods

### `querySelector`

#### Description
The `querySelector` method is a helper function to query a single element within the widget's DOM element.

#### Parameters
- `selector` (string): A CSS selector string to match the desired element.

#### Returns
- `Element | null`: The first matching element or `null` if no element matches.

#### Example
```typescript
const element = widget.querySelector(".my-class");
```

---

### `querySelectorAll`

#### Description
The `querySelectorAll` method is a helper function to query multiple elements within the widget's DOM element.

#### Parameters
- `selector` (string): A CSS selector string to match the desired elements.

#### Returns
- `NodeListOf<Element> | null`: A list of matching elements or `null` if no elements match.

#### Example
```typescript
const elements = widget.querySelectorAll(".my-class");
```

---

### `getElement`

#### Description
The `getElement` method returns the root DOM element of the widget.

#### Returns
- `Element | null`: The root DOM element of the widget or `null` if it is not set.

#### Example
```typescript
const rootElement = widget.getElement();
```

---

### `setTitle`

#### Description
The `setTitle` method sets the document's title.

#### Parameters
- `title` (string): The title to set for the document.

#### Example
```typescript
widget.setTitle("My Widget Title");
```

---

### `getHtml`

#### Description
The `getHtml` method returns the HTML string that represents the widget's content.

#### Returns
- `string`: The HTML string of the widget.

#### Example
```typescript
const html = widget.getHtml();
```

---

### `UpdateChildData`

#### Description
The `UpdateChildData` method updates the data of a child widget and triggers its re-render and update lifecycle.

#### Parameters
- `value` (any): The new data to set for the child widget.
- `widget` (`StatefulWidget`): The child widget to update.

#### Example
```typescript
widget.UpdateChildData({ key: "value" }, childWidget);
```

---

### `update`

#### Description
The `update` method is called after the widget's data has been updated. It can be overridden to perform additional actions after an update.

#### Example
```typescript
widget.update();
```

---

### `setState`

#### Description
The `setState` method updates the widget's state and triggers a re-render.

#### Parameters
- `newState` (any): The new state to set for the widget.

#### Example
```typescript
widget.setState({ key: "value" });
```

---

### `loadChildWidgets`

#### Description
The `loadChildWidgets` method renders all registered child widgets in their respective positions.

#### Example
```typescript
widget.loadChildWidgets();
```

---

### `render`

#### Description
The `render` method mounts the widget's HTML content to its root DOM element and triggers the rendering of child widgets.

#### Example
```typescript
widget.render();
```

---

### `getElementByClassName`

#### Description
The `getElementByClassName` method retrieves all elements within the widget's DOM that match a specific class name.

#### Parameters
- `identifier` (string): The class name to search for.

#### Returns
- `NodeListOf<Element>`: A list of matching elements.

#### Example
```typescript
const elements = widget.getElementByClassName("my-class");
```

---

### `mount_child`

#### Description
The `mount_child` method is a placeholder for mounting child widgets. It can be overridden to implement custom behavior.

#### Example
```typescript
widget.mount_child();
```

---

### `mount`

#### Description
The `mount` method creates a new DOM element for the widget, assigns it a unique identifier, and appends it to the specified parent element.

#### Parameters
- `parent` (HTMLElement): The parent DOM element to which the widget will be mounted.

#### Example
```typescript
widget.mount(document.body);
```

---

## Additional Notes
- The `StatefulWidget` class provides a robust framework for managing widget state and rendering.
- Methods like `setState`, `render`, and `loadChildWidgets` are essential for maintaining the widget's lifecycle.
- Helper methods like `querySelector` and `getElementByClassName` simplify DOM interactions within the widget.
```