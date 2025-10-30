import { BaseWidget } from "./BaseWidget";

/**
 * Stateful widget with lifecycle management and hierarchical composition.
 *
 * Provides a React-like component system with state management, lifecycle hooks,
 * and parent-child widget relationships. Extend this class to create custom widgets
 * compatible with the concept connection system.
 */
export class StatefulWidget extends BaseWidget{

    /** Optional parameters passed to the widget */
    params: any;

    /** HTML template string for the widget */
    html: string = "";

    /** CSS styles for the widget */
    css:string = "";

    /** JavaScript code for the widget */
    js: string = "";

    /** Current widget state object */
    state: { [key: string]: any } = {};

    /** Previous widget state for change detection */
    previousState: { [key: string]: any } = {};

    /** Array of child widget instances */
    childWidgets: any = [];

    /** Array of DOM elements hosting child widgets */
    childWidgetElement: any = [];

    /** Reference to the parent widget instance */
    parentWidget:any;

    /** Shared state data passed to child widgets */
    widgetState: { [key: string]: any } = {};

    /** ID of the parent DOM element containing this widget */
    parentElement: string = "";




    /**
     * Finds the first element matching a CSS selector within this widget.
     *
     * @param selector - CSS selector string
     * @returns The first matching element or null
     */
    querySelector(selector: string): Element | null {
      return this.element ? this.element.querySelector(selector) : null;
    }

    /**
     * Finds all elements matching a CSS selector within this widget.
     *
     * @param selector - CSS selector string
     * @returns NodeList of matching elements or null
     */
    querySelectorAll(selector: string): NodeListOf<Element> | null{
      return this.element ? this.element.querySelectorAll(selector) : null;
    }

    /**
     * Gets the root DOM element of this widget.
     *
     * @returns The widget's root HTML element
     */
    getElement(){
      return this.element;
    }

    /**
     * Sets the browser document title.
     *
     * @param title - The new document title
     */
    setTitle(title: string): void {
      document.title = title;
    }


    /**
     * Gets the HTML template for this widget.
     *
     * @returns HTML string to be rendered
     */
     getHtml(): string {
      return this.html;
    }


    /**
     * Updates a child widget's data and triggers re-render.
     *
     * @param value - New data to pass to the child widget
     * @param widget - The child widget instance to update
     */
   UpdateChildData(value: any, widget: StatefulWidget){
    let passedWidget = widget;
    passedWidget.data = value;
    passedWidget.render();
    passedWidget.update();
   }

   /**
    * Lifecycle hook called after widget data is updated.
    * Override this method to handle post-update logic.
    */
   update(){}


    /**
     * Updates the entire widget state and triggers re-render if changed.
     *
     * @param newState - New state data to replace current state
     */
    setState(newState: any) {
      this.previousState = {...this};
        this.data = newState;
        this.state = {...this};
        if(this.hasStateChanged()){
          this.notify();
          this.render();
        }
    }

    /**
     * Updates specific state properties and triggers re-render if changed.
     *
     * @param newProperty - Object containing properties to update
     */
    setStateProperty(newProperty:Object){
      this.previousState = {...this};
      Object.assign(this, newProperty);
      this.state = {...this};
      if(this.hasStateChanged()){
        this.notify();
        this.render();
      }

    }

    /**
     * Checks if the widget state has changed since last update.
     *
     * @returns True if state changed, false otherwise
     */
    hasStateChanged(): boolean {
      let state =  !this.isPropertyEqual(this.state, this.previousState);
      return state;
    }

    /**
     * Compares two state objects for shallow equality.
     *
     * @param obj1 - First state object
     * @param obj2 - Second state object
     * @returns True if objects are equal, false otherwise
     */
    private isPropertyEqual(obj1: any, obj2: any): boolean {
      if (obj1 === obj2) return true; // Same reference or primitive values
      if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
          return false;
      }

      const keys1 = Object.keys(obj1);
      const keys2 = Object.keys(obj2);

      if (keys1.length !== keys2.length) return false;

      for (let key of keys1) {
          if (!keys2.includes(key)) return false;
          for(let key2 of keys2){
            if(key == key2 && key != "state" && key != "previousState"){
              let obj1Val = obj1[key];
              let obj2Val = obj2[key];
              if(obj1Val != obj2Val){
                return false;
              }
            }

          }

          //if (!this.deepEqual(obj1[key], obj2[key])) return false;
      }

      return true;
    }

    /**
     * Mounts all registered child widgets to their designated parent elements.
     */
    loadChildWidgets(){
          this.childWidgets.map((child: any) => {
          let widget = this.getElementById(child.parentElement);

          if(widget){
            widget.innerHTML = "";
          }
            child.mount(widget);
          })
    }

  /**
   * Re-renders the widget by updating the DOM with current HTML template.
   * Also triggers child widget loading and after_render hook.
   */
   render(){
      if (this.element) {
          this.element.innerHTML =  this.getHtml();

        }
      //console.log("added-widget-container",this.childWidgetElement);
      // addEvents is called after the element has been mounted.
      //console.log("this is the rendering", this);
      this.loadChildWidgets();
      this.after_render();
      // then after the child widgets are again loaded.
      // if(this.widgetMounted){
      // }

    }

    /**
     * Finds all elements with a specific class name within this widget.
     *
     * @param identifier - Class name to search for (without '.' prefix)
     * @returns NodeList of matching elements
     */
    getElementByClassName(identifier: string){
      let element = this.getComponent();
      if(element){

         let myelement:NodeListOf<Element> =  element?.querySelectorAll('.'+identifier);
        //  console.log("this is the element", element,myelement,identifier);
          return myelement;
      }
      return [];

    }


    /**
     * Lifecycle hook for mounting child widgets.
     * Override this method to define custom child mounting logic.
     */
    mount_child(){
    }

    /**
     * Mounts the widget to a parent DOM element and initializes lifecycle.
     *
     * Creates a wrapper div, assigns unique ID, renders HTML, and executes
     * lifecycle hooks in sequence.
     *
     * @param parent - The parent HTML element to mount this widget into
     */
    async mount(parent: HTMLElement) {
      if(parent){
        // create a div to wrap everything inside of it.
        this.element = document.createElement("div");
        // assign an identifier to the element so that it does not conflict with others.
        this.element.id = this.createWidgetWrapperIdentifier();

        // then assign the html to the element.
        this.element.innerHTML = this.getHtml();

        // this class is added so that in the condition that the rendered widget is added to the html it can be removed from the builer.
        this.element.classList.add('mftsccs-marking-rendered');

        // mount the div with unique identifier to the parent element.
        parent.appendChild(this.element);

        // also save in the widget its parent identifier.
        this.parentElement = parent.id;

        // if the widget has not been mounted.
        // if(this.widgetMounted == false){

          // then after the widget has been mounted for the first time call this function
          // user can update this function as per their requirement
          //this will mostly be used to bind data / call data
          this.before_render();

          // since this is the first time the widget is being created. then all the child widgets are being mounted
          // as well here.
          this.mount_child();

          // after the widget has been mounted for the first time then the widget has been updated.
          this.widgetMounted = true;
        // }
        // else{

          // if the widget has already been mounted before then only render the new widget
          // this.render();
        // }
      }
    }


    /**
     * Lifecycle hook called before rendering.
     * Override for initialization logic. Default implementation calls render().
     */
    before_render(){
      this.render();
    }

    /**
     * Lifecycle hook called after rendering.
     * Override to add event listeners or post-render logic.
     */
    after_render(){
      console.log("this is calling the after render", this);
    }

    /**
     * Recursively renders all child widgets in the hierarchy.
     */
    renderChildWidgets(){
      console.log("this is the render child widget", this);
      function renderChildWidgetRecursive(childWidget: StatefulWidget) {
        if (!childWidget) return
        childWidget.childWidgets?.forEach((child: StatefulWidget) => {
          renderChildWidgetRecursive(child);
        });
        childWidget.render();
      }

      this.childWidgets.forEach((child: StatefulWidget) => {
        renderChildWidgetRecursive(child);
      });
    }

    /**
     * Sets shared state data and propagates to all child widgets recursively.
     *
     * @param key - State property key
     * @param value - State value to set
     */
    setWidgetState(key: string, value: any) {
      this.widgetState[key] = value;
      function updateChildStateRecursive(widget: StatefulWidget) {
      if (!widget || !Array.isArray(widget.childWidgets)) {
        return;
      }
      widget.childWidgets.forEach((child: StatefulWidget) => {
        child.widgetState = { ...child.widgetState, ...widget.widgetState };
        updateChildStateRecursive(child);
      });
      }
      updateChildStateRecursive(this);
      this.renderChildWidgets();
    }

    /**
     * Retrieves shared state data by key.
     *
     * @param key - State property key to retrieve
     * @param defaultValue - Default value if key doesn't exist
     * @returns The state value or default value
     */
    getWidgetState(key:string ,defaultValue: any):object {
      if (Object.keys.length && this.widgetState[key]) {
        return this.widgetState[key]
      } else {
        return defaultValue;
      }
    }

    

  }