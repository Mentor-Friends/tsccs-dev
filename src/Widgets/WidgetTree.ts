//import { BuilderStatefulWidget } from "../default/StatefulWidget"

import { TAssistant, TCustomFunction, TMainLibrary } from "../DataStructures/TypeLibrary";
import { BuilderStatefulWidget } from "./BuilderStatefulWidget";

/**
 * Hierarchical widget tree structure for nested widget composition.
 *
 * Represents a widget and its complete metadata including HTML, styles, scripts,
 * lifecycle hooks, and child widgets. Used for building complex widget hierarchies.
 */
export class WidgetTree{
    /** Unique widget identifier */
    id: number = 0;

    /** Widget display name */
    name: string = "";

    /** HTML template string */
    html: string = "";

    /** CSS styles string */
    css: string = "";

    /** JavaScript code string */
    js: string = "";

    /** External CSS and JS library dependencies */
    library: TMainLibrary = { css:[], js: [] };

    /** AI assistant configuration for the widget */
    assistant: TAssistant = {id: "", input: "", type: ""};

    /** Creation/update timestamp */
    timestamp:string ="";

    /** Widget ID reference */
    widgetId: number = 0;

    /** Widget type identifier (e.g., "the_element_name") */
    type: string = "";

    /** Clean/sanitized version of the widget */
    clean: string = "";

    /** Code to execute after widget renders */
    after_render: string = "";

    /** Code to execute before widget renders */
    before_render: string = "";

    /** Array of custom function definitions */
    custom_functions: TCustomFunction[] = [];

    /** Code to execute on widget update */
    update: string = "";

    /** Origin widget ID for versioning */
    origin: number = 0;

    /** Version number of this widget */
    version: number = 0;

    /** Code to execute when mounting child widgets */
    mount_child: string = "";

    /** Array of child widget trees */
    children:WidgetTree[] = [];

    /** ID of the wrapper element for this widget */
    wrapper: string = '0';

    /** The instantiated widget object */
    widget: BuilderStatefulWidget = new BuilderStatefulWidget();

    /** Child widget ID reference */
    sChildId?: number;

    /** Whether the widget is published */
    isPublished?: boolean;

    /** Whether to use the latest version of this widget */
    useLatest?: boolean;

    /** Widget dependency code string */
    dependency: string = '';
}