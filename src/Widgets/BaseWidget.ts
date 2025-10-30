import { BaseObserver } from "./BaseObserver";

/**
 * Base widget class providing core DOM element management and identification.
 *
 * Extends BaseObserver to provide reactive data capabilities along with fundamental
 * widget element operations and unique identification.
 */
export class BaseWidget extends BaseObserver{

    /** The mounted DOM element wrapper for this widget */
      element: HTMLElement | null = null;

    /** Unique numeric identifier for this widget instance */
    elementIdentifier: number = 0;

    /** Flag indicating whether the widget has been mounted to the DOM */
        widgetMounted: boolean = false;

    /**
     * Gets the root component element of this widget.
     *
     * @returns The widget's root HTML element or null if not mounted
     */
    getComponent(): HTMLElement | null{
        let component = this.element;
        return component;
      }

    /**
     * Finds an element by ID within this widget's scope.
     *
     * @param identifier - The element ID to search for (without '#' prefix)
     * @returns The found HTML element or null if not found
     */
      getElementById(identifier: string){
        let element = this.getComponent();
        let selectedElement: HTMLElement = document.body ;
        if(element){
           let myelement =  <HTMLElement>element.querySelector('#'+identifier);
           if(myelement){
            selectedElement = myelement;
            return selectedElement;
           }
        }
        return null;

      }




    /**
     * Generates a unique identifier for this widget's wrapper element.
     *
     * Creates a random number to uniquely identify the widget and its children
     * from other widgets in the DOM.
     *
     * @returns The generated identifier as a string
     */
    createWidgetWrapperIdentifier(){
        this.elementIdentifier = Math.random() * 10000;
        return this.elementIdentifier.toString();
      }
}