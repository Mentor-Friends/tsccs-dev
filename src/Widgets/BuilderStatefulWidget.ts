
import { StatefulWidget } from "./StatefulWidget";
import { Concept, CreateTheConnectionLocal, DATAID, FilterSearch, FreeschemaQuery, MakeTheTypeConceptLocal, SchemaQueryListener, SearchLinkMultipleAll, SearchQuery } from "../app";
import { HandleHttpError } from "../Services/Common/ErrorPosting";
import * as tsccs from "../app";
import { TypeEditor } from "./BuilderSpeceficFunctions";
import { TCustomFunction } from "../DataStructures/TypeLibrary";

/**
 * BuilderStatefulWidget - A dynamic, stateful widget component for building interactive UI elements.
 *
 * This class extends StatefulWidget to provide a powerful widget system that supports:
 * - Dynamic HTML rendering with lifecycle hooks
 * - Child widget composition and mounting
 * - Custom function execution and event handling
 * - Type-based data binding and queries
 * - Development mode with visual editing capabilities
 * - Widget dependencies and custom functions
 *
 * **Key Features:**
 * - **Lifecycle Management**: before_render, render, after_render hooks
 * - **Dynamic Code Execution**: Safely executes user-defined JavaScript functions
 * - **Child Widgets**: Supports hierarchical widget composition
 * - **Type Integration**: Connects to TSCCS type system for data binding
 * - **Development Mode**: Visual editing and type editor integration
 * - **Custom Functions**: Execute user-defined functions within widget context
 * - **Local Connections**: Create relationships between entities at the widget level
 *
 * **Lifecycle Flow:**
 * 1. Constructor creates widget instance
 * 2. mount() attaches to parent DOM element
 * 3. render_custom_functions() executes custom code
 * 4. render_widgetDependencies() loads dependencies
 * 5. before_render() (componentDidMount equivalent) executes
 * 6. mount_child() mounts child widgets
 * 7. render() updates the DOM
 * 8. after_render() (addEvent) attaches event listeners
 *
 * **Use Cases:**
 * - Building dynamic forms with type-based data
 * - Creating reusable UI components
 * - Widget-based page builders
 * - Interactive dashboards
 * - Data-driven UI components
 *
 * @extends StatefulWidget
 *
 * @example
 * // Create and mount a widget
 * const widget = new BuilderStatefulWidget();
 * widget.html = '<div>Hello Widget</div>';
 * widget.widgetType = 'the_person_name';
 * widget.componentDidMountFunction = 'console.log("Widget mounted")';
 * await widget.mount(parentElement);
 *
 * @example
 * // Widget with custom functions
 * const widget = new BuilderStatefulWidget();
 * widget.customFunctions = [
 *   { code: 'this.handleClick = () => { console.log("Clicked!"); }' }
 * ];
 * await widget.mount(parentElement);
 *
 * @example
 * // Development mode with type editor
 * const widget = new BuilderStatefulWidget();
 * widget.inDevelopment = true; // Enables visual editing
 * widget.widgetType = 'the_element_name';
 * await widget.mount(parentElement);
 */
export class BuilderStatefulWidget extends StatefulWidget {
  /** Array of child component instances mounted within this widget */
  childComponents: any = [];

  /** Flag indicating whether the component has been mounted to the DOM */
  componentMounted: boolean = false;

  /** Reference to the previous HTML element (used for comparison during updates) */
  oldHtml: HTMLElement | null = null;

  // subscribers: any = [];

  /** Value returned from onmount lifecycle hook */
  onmountVal: any;

  /** Value returned from addEvent lifecycle hook */
  addEventVal: any;

  /** Array of phonebook data (legacy or specific use case) */
  phonebooks: any = [];

  /** Object containing data for child components */
  childrenData: any = {};

  /** JavaScript code (as string) to execute after rendering for event binding */
  addEventFunction: any;

  /** JavaScript code (as string) to execute after component mounts (like componentDidMount) */
  componentDidMountFunction: any;

  /** JavaScript code (as string) to execute for mounting child widgets */
  mountChildWidgetsFunction: any;

  /** Array of child widget instances */
  childWidgets: any = [];

  /** Array of type value options fetched from backend based on widgetType */
  typeValueList: any = [];

  /** The type identifier for this widget (e.g., "the_person_name", "the_element_name") */
  public widgetType: string = "the_element_name";

  /** Array of parent concept IDs for hierarchical relationships */
  parentConceptList: any = [];

  /** Array of custom function objects with code to execute in widget context */
  customFunctions: TCustomFunction[] = [];

  /** JavaScript code (as string) for widget dependencies initialization */
  widgetDependenciesData: string = '';

  /**
   * Retrieves the current user's ID from local storage.
   *
   * This method fetches the user profile from localStorage and extracts the userId.
   * Used for user-specific operations and data access within widgets.
   *
   * @returns Promise resolving to the user ID (number) or undefined if not found
   *
   * @example
   * const userId = await widget.getUserId();
   * console.log('Current user:', userId);
   */
  async getUserId() {
    const profileData: any = await new Promise((resolve: any) => {
      let dataFromLocalStorage: string = localStorage?.getItem("profile") || "";
      if (dataFromLocalStorage) {
        const profileData = JSON.parse(dataFromLocalStorage);
        resolve(profileData)
      } else {
        resolve()
      }
    });
    const userId = profileData?.userId;
    return userId;
  }

  /**
   * Fetches a list of type values from the backend based on the widget's type.
   *
   * This method performs a filtered search using FreeschemaQuery to retrieve all entities
   * of a specific type. The results are formatted as options for dropdowns or selection lists.
   *
   * **Process:**
   * 1. Parses widgetType to extract main composition and type-value key
   * 2. Creates filter for entities (e.g., filter by ID > 1)
   * 3. Executes FreeschemaQuery with filters
   * 4. Formats results into { id, name, text } objects
   * 5. Stores in this.typeValueList
   *
   * **Type Name Format:**
   * - widgetType: "the_element_name"
   * - mainComposition: "the_element"
   * - typevalueKey: "the_name"
   *
   * @param typeName - Optional type name (defaults to this.widgetType)
   *
   * @returns Promise resolving to array of formatted type values:
   *         [{ id: number, name: string, text: string }, ...]
   *
   * @example
   * widget.widgetType = 'the_person_name';
   * const options = await widget.getTypeValueList();
   * // Returns: [{ id: 123, name: "John Doe", text: "John Doe" }, ...]
   */
  async getTypeValueList(typeName: string = "") {
    return new Promise(async (resolve: any) => {
      typeName = this.widgetType;
      // typeName e.g. "the_element_name"
      const match = typeName?.match(/^[a-z0-9]+_[a-z0-9]+/i);
      const mainComposition = match ? match[0] : "";
      // Output: "the_element"
      const nextMatch = typeName?.match(/^([a-z0-9]+).*_([a-z0-9]+)$/i);
      const typevalueKey = nextMatch ? `${nextMatch[1]}_${nextMatch[2]}` : "";

      // NEW SEARCH WITH FILTER
      // filters
      let filters: FilterSearch[] = [];
      let filter: FilterSearch = new FilterSearch();
      // filter.type = "the_email";
      filter.type = typevalueKey;
      filter.search = "1";
      filter.logicoperator = ">";
      filter.name = "emailfilter";
      filter.operateon = "entityEmail";
      filter.composition = false;
      filters.push(filter);

      let emailQuery: FreeschemaQuery = new FreeschemaQuery();
      // emailQuery.typeConnection = "the_entity_email";
      emailQuery.typeConnection = typeName;
      emailQuery.name = "entityEmail";
      let freeschemaQuery: FreeschemaQuery = new FreeschemaQuery();
      // freeschemaQuery.type = "the_entity",
      (freeschemaQuery.type = mainComposition),
        (freeschemaQuery.filterLogic = "( emailfilter )");
      freeschemaQuery.filters = filters;
      freeschemaQuery.name = "top";
      freeschemaQuery.inpage = 100;
      freeschemaQuery.freeschemaQueries = [emailQuery];
      freeschemaQuery.outputFormat = DATAID;
      SchemaQueryListener(freeschemaQuery, "")
        .subscribe((output: any) => {

          if (output?.length) {
            const result = output?.map((item: any) => {
              const itemName =
                item.data?.[mainComposition]?.[typeName]?.data?.[typevalueKey];
              const itemId = item.data?.[mainComposition]?.[typeName]?.id;
              return {
                id: itemId,
                name: itemName,
                text: itemName,
              };
            });
            //console.log("result =>", result);
            this.typeValueList = result;
            resolve(result);
            return result;
          }
        });
    });
  }

  /**
   * Sets the browser document title.
   *
   * @param title - The title string to set as the document title
   */
  setTitle(title: string): void {
    document.title = title;
  }

  /**
   * Returns the HTML content of this widget.
   *
   * @returns The HTML string for this widget
   */
  getHtml() {
    return this.html;
  }

  /**
   * Generates a random identifier for this widget element.
   *
   * @returns A random number used as the element identifier
   */
  createRandomNumber() {
    this.elementIdentifier = Math.random() * 10000;
    return this.elementIdentifier;
  }

  /**
   * Mounts child widgets by executing the mountChildWidgetsFunction.
   *
   * This method dynamically executes user-defined JavaScript code for mounting
   * child widgets. The code is executed within the widget's context with access
   * to the tsccs package.
   *
   * **Execution Context:**
   * - Code is bound to `this` (the widget instance)
   * - Has access to `tsccs` module for TSCCS operations
   * - Runs asynchronously
   *
   * @throws Will log and re-throw errors if mount_child code fails
   *
   * @example
   * widget.mountChildWidgetsFunction = `
   *   const childWidget = new tsccs.BuilderStatefulWidget();
   *   childWidget.html = '<div>Child</div>';
   *   await childWidget.mount(this.childWidgetElement);
   * `;
   * await widget.mount_child();
   */
  async mount_child() {

    try{
      const dynamicAsyncFunction = new Function("tsccs",`
        return (async function() {
          ${this.mountChildWidgetsFunction}
        }).call(this);
      `).bind(this);
      dynamicAsyncFunction(tsccs);
    }
    catch(error)
    {
      console.log("This is the error in the mount child", error);
      throw error;
    }
  }

  /**
   * Sets the widget type and fetches associated type values.
   *
   * This method updates the widget's type, fetches the corresponding type values
   * from the backend, updates DOM attributes, and triggers a re-render.
   *
   * @param widgetTypeName - The new widget type name (e.g., "the_person_name")
   *
   * @returns Promise resolving to this widget instance (for method chaining)
   *
   * @example
   * await widget.setProperty('the_person_email');
   * // Widget now displays person email options
   */
  async setProperty(widgetTypeName: any) {
    this.widgetType = widgetTypeName;
    this.getTypeValueList(this.widgetType).then(() => {
      this.element?.setAttribute("data-type-value", this.widgetType);
      this.element?.parentElement?.setAttribute(
        "data-type-value",
        this.widgetType
      );
      this.render();
    });
    return this;
  }

  /**
   * Opens the type editor interface for this widget.
   *
   * This method is called in development mode when the widget is clicked.
   * It opens a visual editor for modifying the widget's type and properties.
   *
   * @param event - The click event that triggered the editor
   */
  createTypeEditor(event: any){
    TypeEditor(event, this);

  }

  /**
   * Mounts the widget to a parent DOM element and initializes the lifecycle.
   *
   * This is the primary method for rendering a widget to the DOM. It:
   * 1. Creates a wrapper div element
   * 2. Attaches click handlers (if in development mode)
   * 3. Inserts HTML content
   * 4. Executes lifecycle hooks in order
   * 5. Mounts child widgets
   *
   * **Lifecycle Execution Order:**
   * 1. render_custom_functions() - Execute custom functions
   * 2. render_widgetDependencies() - Load dependencies
   * 3. before_render() - componentDidMount equivalent
   * 4. mount_child() - Mount child widgets
   * 5. render() - Update DOM
   *
   * **Development Mode:**
   * When `inDevelopment` is true, the widget becomes clickable and opens
   * the type editor for visual configuration.
   *
   * @param parent - The parent HTMLElement to mount this widget to
   *
   * @example
   * // Basic mounting
   * const widget = new BuilderStatefulWidget();
   * widget.html = '<h1>Hello World</h1>';
   * await widget.mount(document.getElementById('app'));
   *
   * @example
   * // Development mode
   * const widget = new BuilderStatefulWidget();
   * widget.inDevelopment = true;
   * widget.widgetType = 'the_person_name';
   * await widget.mount(parentElement);
   * // Widget is now clickable for editing
   */
  async mount(parent: HTMLElement) {
    //console.log('mount parent',)
    if (parent) {
      this.element = document.createElement("div");
      this.element.id = this.createWidgetWrapperIdentifier();

      let that = this;
      if(this.inDevelopment){
        this.element.onclick = function (event: any) {
          event.preventDefault();
         // event.stopPropagation();
          that.createTypeEditor(event);
        };

        this.element.className = "mftsccs-marking-element";
        
      }
      else{
        this.element.classList.add('mftsccs-marking-rendered');
      }

      this.element.innerHTML = this.getHtml();
      parent?.setAttribute("data-type-value", that.widgetType);
      
      parent.appendChild(this.element);

      this.parentElement = parent.id;
      if (this.componentMounted == false || this.widgetMounted == false) {
        // Simulate componentDidMount by calling it after the component is inserted into the DOM
        this.render_custom_functions()
        this.render_widgetDependencies()
        this.before_render();
        this.mount_child();
        this.widgetMounted = true;
        this.componentMounted = true;
      }
      else{
        this.render();
      }
      this.childWidgetElement = this.getElementByClassName("added-widget-container")
    }
  }

  /**
   * Executes widget dependencies initialization code.
   *
   * This lifecycle method runs during the mount phase to load and initialize
   * any dependencies required by the widget. Dependencies code is executed
   * with access to the tsccs module.
   *
   * **Execution:**
   * - Runs before before_render()
   * - Code in widgetDependenciesData is executed
   * - Bound to widget context (this)
   * - Has access to tsccs package
   *
   * @throws Will log and re-throw errors if dependency code fails
   *
   * @example
   * widget.widgetDependenciesData = `
   *   this.apiClient = await tsccs.createApiClient();
   *   this.config = await tsccs.loadConfig();
   * `;
   */
  render_widgetDependencies() {
    try{
      const dynamicAsyncFunction = new Function("tsccs",`
        return (async function() {
          ${this.widgetDependenciesData}
        }).call(this);
      `).bind(this);
      dynamicAsyncFunction(tsccs);
    }
    catch(error){
      console.log("This is the error in the before render", error);
      throw error;
    }
  }

  /**
   * Executes all custom functions defined for this widget.
   *
   * This method runs during the mount phase to execute user-defined custom
   * functions. All functions in the customFunctions array are concatenated
   * and executed together in the widget's context.
   *
   * **Custom Functions:**
   * - Defined in widget.customFunctions array
   * - Each function is a TCustomFunction object with a code property
   * - All functions execute with access to `this` (widget) and `tsccs` module
   * - Functions can define methods, initialize state, or set up utilities
   *
   * @throws Will log and re-throw errors if custom function code fails
   *
   * @example
   * widget.customFunctions = [
   *   { code: 'this.handleClick = (e) => { console.log("Clicked", e); }' },
   *   { code: 'this.formatDate = (date) => date.toLocaleDateString();' }
   * ];
   * widget.render_custom_functions();
   * // Both functions are now available on widget instance
   */
  render_custom_functions() {
    const allCustomFunctions = this.customFunctions
      ?.map((customFunction: TCustomFunction) => customFunction?.code)
      .join("");
    try {
      const dynamicAsyncFunction = new Function(
        "tsccs",
        `
          return (async function() {
            ${allCustomFunctions}
          }).call(this);
        `
      ).bind(this);
      dynamicAsyncFunction(tsccs);
    } catch (error) {
      console.error("This is the error in the render_custom_functions", error);
      throw error;
    }
  }

  /**
   * Executes the componentDidMount lifecycle hook.
   *
   * This function is called after the component mounts to the DOM, similar to
   * React's componentDidMount. It executes user-defined initialization code
   * stored in componentDidMountFunction.
   *
   * **Lifecycle Position:**
   * Runs after render_custom_functions() and render_widgetDependencies(),
   * but before mount_child().
   *
   * **Common Uses:**
   * - Fetch initial data from API
   * - Set up subscriptions or listeners
   * - Initialize third-party libraries
   * - Perform DOM manipulations
   * - Set initial state based on props
   *
   * @throws Will log and re-throw errors if componentDidMount code fails
   *
   * @example
   * widget.componentDidMountFunction = `
   *   const data = await tsccs.GetTheConcept(123);
   *   this.setState({ userData: data });
   *   console.log("Widget mounted with data:", data);
   * `;
   * widget.before_render(); // Executes the above code
   */
  before_render() {
    try{
      const dynamicAsyncFunction = new Function("tsccs",`
        return (async function() {
          ${this.componentDidMountFunction}
        }).call(this);
      `).bind(this);
      dynamicAsyncFunction(tsccs);
    }
    catch(error){
      console.log("This is the error in the before render", error);
      throw error;
    }
    //console.log("onmountVal", onmountVal);

    // dynamicAsyncFunction(tsccs);
    // const AsyncFunction = Object.getPrototypeOf(
    //   async function () {}
    // ).constructor;
    // const renderOnmount = AsyncFunction(
    //   "tsccs",
    //   this.componentDidMountFunction
    // );
    // renderOnmount.call(this, tsccs);
  }

  /**
   * Executes event binding code after the widget renders.
   *
   * This lifecycle method runs after the DOM is updated to attach event listeners
   * and perform post-render operations. It executes user-defined code stored in
   * addEventFunction.
   *
   * **Lifecycle Position:**
   * Runs after render() completes and DOM is updated.
   *
   * **Common Uses:**
   * - Attach click, input, or other event listeners
   * - Set up keyboard shortcuts
   * - Initialize interactive features
   * - Bind form validation
   * - Set up drag-and-drop handlers
   *
   * @throws Will log and re-throw errors if event binding code fails
   *
   * @example
   * widget.addEventFunction = `
   *   const button = this.element.querySelector('.submit-btn');
   *   button.addEventListener('click', async (e) => {
   *     const data = await tsccs.CreateTheConcept('New Item', 1, 1);
   *     console.log('Created:', data);
   *   });
   * `;
   * widget.after_render(); // Attaches the event listener
   */
  after_render() {
    // const AsyncFunction = Object.getPrototypeOf(
    //   async function () {}
    // ).constructor;
    try{
      const dynamicAsyncFunction = new Function("tsccs",`
        return (async function() {
          ${this.addEventFunction}
        }).call(this);
      `).bind(this);

      dynamicAsyncFunction(tsccs);
    }
    catch(error){
      console.log("This is the error in the after render", error);
      throw error;
    }


    // const renderOnmount = AsyncFunction("tsccs", this.addEventFunction);

    // renderOnmount.call(this, tsccs);
  }

  // async getWidgetClassFunction(widgetId: number) {
  //   return new Promise(async (resolve: any) => {
      
  //     const profileData: any = await new Promise((resolve2: any) => {
  //       let dataFromLocalStorage: string = localStorage?.getItem("profile") || "";
  //       if (dataFromLocalStorage) {
  //         const profileData = JSON.parse(dataFromLocalStorage);
  //         resolve2(profileData)
  //       } else {
  //         resolve2()
  //       }
  //     });
      
  //     const token = profileData?.token;
  //     let output: any = await this.getWidgetCodeFromId(widgetId, token);
  //     const widgetInfo = output?.data?.the_widgetcode;
  //     const widgetName = widgetInfo?.the_widgetcode_name?.[0]?.data?.the_name;
  //     const widgetHTML = widgetInfo?.the_widgetcode_html?.[0]?.data?.the_html;
  //     const widgetCSS = widgetInfo?.the_widgetcode_css?.[0]?.data?.the_css;
  //     const widgetJS = widgetInfo?.the_widgetcode_js?.[0]?.data?.the_js;
  //     const widgetTimestamp =
  //       widgetInfo?.the_widgetcode_timestamp?.[0]?.data?.the_timestamp;
  //     const widgetPackageId = widgetInfo?.the_widgetcode_widget?.[0].id;
  //     const widgetAddEvent =
  //       widgetInfo?.the_widgetcode_addevent?.[0]?.data?.the_addevent;
  //     const widgetOnmount =
  //       widgetInfo?.the_widgetcode_onmount?.[0]?.data?.the_onmount;
  //     const widgetOnupdate =
  //       widgetInfo?.the_widgetcode_onupdate?.[0]?.data?.the_onupdate;
  //     const widgetMountChildWidgets =
  //       widgetInfo?.the_widgetcode_mountChildWidgets?.[0]?.data
  //         ?.the_mountChildWidgets;

  //     const widgetData = {
  //       id: output?.id,
  //       name: widgetName,
  //       html: widgetHTML,
  //       css: widgetCSS,
  //       js: widgetJS,
  //       timestamp: widgetTimestamp,
  //       widgetId: widgetPackageId,
  //       addevent: widgetAddEvent,
  //       onmount: widgetOnmount,
  //       onupdate: widgetOnupdate,
  //       mountChildWidgets: widgetMountChildWidgets,
  //     };

  //     const widgetInstance = new BuilderStatefulWidget();
  //     widgetInstance.html = widgetData?.html;
  //     widgetInstance.componentDidMountFunction = widgetData?.onmount;
  //     widgetInstance.addEventFunction = widgetData?.addevent;
  //     widgetInstance.mountChildWidgetsFunction = widgetData?.mountChildWidgets;

  //     resolve(widgetInstance);
  //   });
  // }

  /**
   * Creates a local connection between two concepts with a specified linker type.
   *
   * This helper method creates a connection relationship between two entity concepts
   * using local storage (not immediately synced to backend). The linker name is
   * automatically prefixed with the first concept's type to create a typed connection.
   *
   * **Process:**
   * 1. Extracts userId from first concept
   * 2. Creates linker name: "{concept1Type}_{linkerName}"
   * 3. Creates or gets the connection type concept locally
   * 4. Creates the connection between the two concepts
   *
   * **Use Cases:**
   * - Creating relationships in offline mode
   * - Building entity associations within widgets
   * - Temporary connections before sync
   * - Development/testing without backend
   *
   * @param concept1Data - The source concept (FROM)
   * @param concept2Data - The target concept (TO)
   * @param linker - The relationship name (e.g., "email", "phone", "address")
   *                This will be prefixed with concept1's type
   *
   * @returns Promise resolving to "connection created" string
   *
   * @example
   * const person = await tsccs.GetTheConcept(123); // type: "the_person"
   * const email = await tsccs.GetTheConcept(456);  // type: "the_email"
   *
   * await widget.CreateConnectionBetweenEntityLocal(person, email, "email");
   * // Creates connection with type: "the_person_email"
   * // Result: Person → email → Email
   *
   * @example
   * // Create organization-department connection
   * const org = await tsccs.GetTheConcept(789);  // type: "the_organization"
   * const dept = await tsccs.GetTheConcept(101); // type: "the_department"
   *
   * await widget.CreateConnectionBetweenEntityLocal(org, dept, "department");
   * // Creates: "the_organization_department" connection
   */
  async CreateConnectionBetweenEntityLocal(
    concept1Data: Concept,
    concept2Data: Concept,
    linker: string
  ) {
    const userId: number = concept1Data.userId;
    const sessionInformationId = 999;
    const sessionInformationUserId = 999;

    const prefix = concept1Data.type?.characterValue;
    const linkerAdd = linker;
    const forwardLinker = prefix + "_" + linkerAdd;

    const connectionConcept = await MakeTheTypeConceptLocal(
      forwardLinker,
      sessionInformationId,
      sessionInformationUserId,
      userId
    );

    await CreateTheConnectionLocal(
      concept1Data.id,
      concept2Data.id,
      connectionConcept.id,
      1000
    );

    return "connection created";
  }
}