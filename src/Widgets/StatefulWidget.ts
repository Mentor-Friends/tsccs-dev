import { BaseWidget } from "./BaseWidget";

/**
 * Implementation of a widget system. If you need to create a widget that is compatible with the concept connection 
 * system them extend this class and populate the functions such as getHtml() and widgetDidMount()
 */
export class StatefulWidget extends BaseWidget{

    params: any;
    html: string = "";
    css:string = "";
    js: string = "";


    /**
     * These are the child widgets that need to be added to  this widget
     */
    childWidgets: any = [];

    childWidgetElement: any = [];

    /** 
     * store widget state datas to pass through child widgets
     */
    widgetState: { [key: string]: any } = {};

    /**
     * This is the id of the parentElement of this widget.
     */
    parentElement: string = "";





    getElement(){
      return this.element;
    }
  
    setTitle(title: string): void {
      document.title = title;
    }

  
    /**
     * 
     * @returns the html string that needs to be mounted to the DOM.
     */
     getHtml(): string {    
      return this.html;
    }


    /**
     * This will help us update the data of the child widget. This will also call another function inside of the child widget
     * called udpateWidget which the user can call after some data is udpated.
     * @param value 
     * @param widget 
     */
   UpdateChildData(value: any, widget: StatefulWidget){
    let passedWidget = widget;
    passedWidget.data = value;
    passedWidget.render();
    passedWidget.update();
   }

   /**
    * This is called after the data has been udpated by some other component.
    */
   update(){
   }


    /**
     * 
     * @param newState 
     */
    setState(newState: any) {
        this.data = newState;
        this.notify();
        this.render();
    }

    setProperty(newProperty:any){
      Object.assign(this, newProperty);
      this.notify();
      this.render();
    }

    setPropertyForRender(newProperty:any){
      Object.assign(this, newProperty);
      //this.notify();
      this.render();
    }


    /**
     * If any child widgets are registered in the widget. Then without any other changes to the contents and state
     * this loadChildWidgets will be called which will help the child widgets be rendered to their respective positions.
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
   * This is the main function that adds the html of the component to the element.
   * The element is the mounted widget
   */
   render(){
      if (this.element) {
          this.element.innerHTML =  this.getHtml();

        }
      //console.log("added-widget-container",this.childWidgetElement);
      // addEvents is called after the element has been mounted.
      //console.log("this is the rendering", this);
      this.after_render();

      // then after the child widgets are again loaded.
      if(this.widgetMounted){
        this.loadChildWidgets();
      }
    }

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
     * This is the function that needs to be called.
     */
    mount_child(){
    }
  
    /**
     * 
     * @param parent This is the function that creates a new div and then mounts the html element to the parent.
     */
    async mount(parent: HTMLElement) {
      if(parent){
        // create a div to wrap everything inside of it. 
        this.element = document.createElement("div");
        // assign an identifier to the element so that it does not conflict with others.
        this.element.id = this.createWidgetWrapperIdentifier();

        // then assign the html to the element.
        this.element.innerHTML = this.getHtml();

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
     * This function will be called after the component mounts.
     */
    before_render(){
      this.render();
    }

    /**
     * This is called after the render function has been called. So this is used for the user functions to be added
     * for the widget and its html element. User can add any logic here.
     */
    after_render(){
      console.log("this is calling the after render", this);
    }

    /**
     * render child widgets
     */
    // renderChildWidgets(){
    //   this.childWidgets?.forEach((child: StatefulWidget) => {
    //     child.render();
    //   });
    // }

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
     * save widget state data as key and value pair.
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
     * get the saved widget state from stateful widget
     */
    getWidgetState(key:string ,defaultValue: any):object {
      if (Object.keys.length && this.widgetState[key]) {
        return this.widgetState[key]
      } else {
        return defaultValue;
      }
    }

    

  }