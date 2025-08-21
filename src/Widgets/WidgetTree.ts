//import { BuilderStatefulWidget } from "../default/StatefulWidget"

import { TAssistant, TCustomFunction, TMainLibrary } from "../DataStructures/TypeLibrary";
import { BuilderStatefulWidget } from "./BuilderStatefulWidget";


export class WidgetTree{
    id: number = 0;
    name: string = "";
    html: string = "";
    css: string = "";
    js: string = "";
    library: TMainLibrary = { css:[], js: [] };
    assistant: TAssistant = {id: "", input: "", type: ""};
    timestamp:string ="";
    widgetId: number = 0;
    type: string = "";
    clean: string = "";
    after_render: string = "";
    before_render: string = "";
    custom_functions: TCustomFunction[] = [];
    update: string = "";
    origin: number = 0;
    version: number = 0;
    mount_child: string = "";
    children:WidgetTree[] = [];
    wrapper: string = '0';
    widget: BuilderStatefulWidget = new BuilderStatefulWidget();
    sChildId?: number;
    isPublished?: boolean;
    useLatest?: boolean;
    dependency: string = '';
}