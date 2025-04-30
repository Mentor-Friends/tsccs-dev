
import { StatefulWidget } from "./StatefulWidget";
import { Concept, CreateTheConnectionLocal, DATAID, FilterSearch, FreeschemaQuery, MakeTheTypeConceptLocal, SchemaQueryListener, SearchLinkMultipleAll, SearchQuery } from "../app";
import { HandleHttpError } from "../Services/Common/ErrorPosting";
import * as tsccs from "../app";
import { TypeEditor } from "./BuilderSpeceficFunctions";
import { TCustomFunction } from "../DataStructures/TypeLibrary";

export class BuilderStatefulWidget extends StatefulWidget {
  childComponents: any = [];
  componentMounted: boolean = false;
  oldHtml: HTMLElement | null = null;
  // subscribers: any = [];
  onmountVal: any;
  addEventVal: any;
  phonebooks: any = [];
  childrenData: any = {};
  addEventFunction: any;
  componentDidMountFunction: any;
  mountChildWidgetsFunction: any;
  childWidgets: any = [];
  typeValueList: any = [];
  public widgetType: string = "the_element_name";
  parentConceptList: any = [];
  customFunctions: TCustomFunction[] = [];

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

  setTitle(title: string): void {
    document.title = title;
  }

  getHtml() {
    return this.html;
  }

  createRandomNumber() {
    this.elementIdentifier = Math.random() * 10000;
    return this.elementIdentifier;
  }

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

  createTypeEditor(event: any){
    TypeEditor(event, this);

  }

  /**
   *
   * @param parent This is the function that creates a new div and then mounts the html element to the parent.
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
        // this class is added so that in the condition that the rendered widget is added to the html it can be removed from the builer.
        this.element.classList.add('mftsccs-marking-rendered');
      }

      this.element.innerHTML = this.getHtml();
      parent?.setAttribute("data-type-value", that.widgetType);
      
      parent.appendChild(this.element);

      this.parentElement = parent.id;
      if (this.componentMounted == false || this.widgetMounted == false) {
        // Simulate componentDidMount by calling it after the component is inserted into the DOM
        this.render_custom_functions()
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
   * This function will be called after the component mounts.
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