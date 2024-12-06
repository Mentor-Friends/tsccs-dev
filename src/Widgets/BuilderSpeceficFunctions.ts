import { BuilderStatefulWidget } from "./BuilderStatefulWidget";

export function TypeEditor( event:any, that:BuilderStatefulWidget){
    if(event){
        const inputVal = document.querySelector(
          "#widget-properties .flex-column"
        );
        console.log("This is the input val container", inputVal, that, event);
        const existedInputEl: any = inputVal?.querySelectorAll("input");
        existedInputEl?.forEach((inputItem: any) => {
          inputItem?.remove();
        });

        
        // this is used to add the type value to the dom so that we can then fix the type in the child widget.
        console.log("event.target", event.target);
        const elementParent = event.target.closest(".added-widget-container");
        const elementDivParent = event.target.closest("div");
        let typeValue: string = "";
        if (elementParent) {
          typeValue = elementParent?.getAttribute("data-type-value");
        } else if (elementDivParent) {
          typeValue = elementDivParent?.getAttribute("data-type-value");
        }
  
        const inputEl = <HTMLInputElement>document.createElement("input");
        inputEl.setAttribute("type", "text");
        inputEl.setAttribute("name", "input-widgetTypeValue");
        inputEl.setAttribute("of", that.elementIdentifier.toString());
        inputEl.setAttribute("class", "form-control");
        inputEl.setAttribute("id", "widgetType");
        if (that.widgetType) {
          inputEl.value = that.widgetType;
        } else {
          inputEl.setAttribute("placeholder", "e.g. the_entity");
        }
        let newThat = that;
        inputEl.onchange = function (event: any) {
          event.preventDefault();
          event.stopPropagation();
          //console.log("THAT ->", that);
          const inputValue = event?.target?.value;
          newThat.widgetType = inputValue;
  
          //console.log("inputValue", inputValue);
          //that.setProperty(inputValue);
          newThat.componentDidMount();
          newThat.mountChildWidgets();
          newThat.element?.parentElement?.setAttribute("data-type-value", newThat.widgetType);
        };

        inputVal?.appendChild(inputEl);
      }
}
