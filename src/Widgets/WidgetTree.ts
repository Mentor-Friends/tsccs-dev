//import { BuilderStatefulWidget } from "../default/StatefulWidget"

import { BuilderStatefulWidget } from "./BuilderStatefulWidget";


export class WidgetTree{
    id: number = 0;
    name: string = "";
    html: string = "";
    css: string = "";
    js: string = "";
    timestamp:string ="";
    widgetId: number = 0;
    typeValue: string = "";
    addEvent: string = "";
    onmount: string = "";
    onupdate: string = "";
    mountChildWidgets: string = "";
    children:WidgetTree[] = [];
    wrapperId: number = 0;
    widget: BuilderStatefulWidget = new BuilderStatefulWidget();

}