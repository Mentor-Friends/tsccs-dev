
import { StatefulWidget } from "./StatefulWidget";
import { Concept, CreateTheConnectionLocal, DATAID, FilterSearch, FreeschemaQuery, MakeTheTypeConceptLocal, SchemaQueryListener, SearchLinkMultipleAll, SearchQuery } from "../app";
import { HandleHttpError } from "../Services/Common/ErrorPosting";
import * as tsccs from "../app";
import { TypeEditor } from "./BuilderSpeceficFunctions";


export class BuilderStatefulWidget extends StatefulWidget {
  childComponents: any = [];
  elementIdentifier: number = 0;
  componentMounted: boolean = false;
  parentElement: string = "";
  oldHtml: HTMLElement | null = null;
  // subscribers: any = [];
  element: HTMLElement | null = null;
  onmountVal: any;
  addEventVal: any;
  phonebooks: any = [];
  childrenData: any = [];
  html: string = "";
  addEventFunction: any;
  componentDidMountFunction: any;
  mountChildWidgetsFunction: any;
  childWidgets: any = [];
  typeValueList: any = [];
  public widgetType: string = "the_element_name";
  parentConceptList: any = [];



  async getWidgetCodeFromId(widgetId: number, token: string) {
    //console.log("getWidgetCodeFromId", widgetId, token);
    return new Promise(async (resolve: any, reject: any) => {
      try {
        let searchFirst = new SearchQuery();
        searchFirst.composition = widgetId;
        searchFirst.fullLinkers = [
          "the_widgetcode",
          "the_widgetcode_widget",
          "the_widgetcode_name",
          "the_widgetcode_html",
          "the_widgetcode_css",
          "the_widgetcode_js",
          "the_widgetcode_timestamp",
          "the_widgetcode_typevalue",
          "the_widgetcode_addevent",
          "the_widgetcode_onmount",
          "the_widgetcode_onupdate",
          "the_widgetcode_mountChildWidgets",
          "the_widgetcode_cleanhtml",
          "the_widgetcode_s_child",
        ];
        searchFirst.inpage = 100;
  
        let searchSecond = new SearchQuery();
        searchSecond.fullLinkers = [
          "the_childwidget",
          "the_childwidget_typevalue",
          "the_childwidget_widget",
          "the_childwidget_wrapperId",
        ];
        searchSecond.inpage = 100;
  
        const queryParams = [searchFirst, searchSecond];
        const output = await SearchLinkMultipleAll(queryParams, token);
        //console.log("getWidgetCodeFromId output ->", output);
        resolve(output);
        return output;
      } catch (error: any) {
        console.error("error", error);
        if (error?.status === 401) {
          HandleHttpError(error?.response)
        }
        reject(error);
      }
    });
  }
  

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
            resolve(this.typeValueList);
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

  async mountChildWidgets() {

    const dynamicAsyncFunction = new Function("tsccs",`
      return (async function() {
        ${this.mountChildWidgetsFunction}
      }).call(this);
    `).bind(this);
    dynamicAsyncFunction(tsccs);
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

      let that = this;
      this.element.onclick = function (event: any) {
        event.preventDefault();
        event.stopPropagation();
        that.createTypeEditor(event);
      };
      this.element.id = this.createWidgetWrapperIdentifier();
      this.element.className = "p-2 mftsccs-marking-element";
      this.element.innerHTML = this.getHtml();
      parent?.setAttribute("data-type-value", that.widgetType);
      
      parent.appendChild(this.element);
      this.childWidgetElement = this.getElementByClassName("added-widget-container")



      this.parentElement = parent.id;
      if (this.componentMounted == false || this.widgetMounted == false) {
        // Simulate componentDidMount by calling it after the component is inserted into the DOM
        this.componentDidMount();
        this.mountChildWidgets();
        this.widgetMounted = true;
        this.componentMounted = true;
      }
      else{
        this.render();

      }


    }
  }

  /**
   * This function will be called after the component mounts.
   */
  componentDidMount() {
    //console.log("onmountVal", onmountVal);
    const dynamicAsyncFunction = new Function("tsccs",`
      return (async function() {
        ${this.componentDidMountFunction}
      }).call(this);
    `).bind(this);
    dynamicAsyncFunction(tsccs);
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

  addEvents() {
    // const AsyncFunction = Object.getPrototypeOf(
    //   async function () {}
    // ).constructor;
    const dynamicAsyncFunction = new Function("tsccs",`
      return (async function() {
        ${this.addEventFunction}
      }).call(this);
    `).bind(this);

    dynamicAsyncFunction(tsccs);

    // const renderOnmount = AsyncFunction("tsccs", this.addEventFunction);

    // renderOnmount.call(this, tsccs);
  }

  async getWidgetClassFunction(widgetId: number) {
    return new Promise(async (resolve: any) => {
      
      const profileData: any = await new Promise((resolve2: any) => {
        let dataFromLocalStorage: string = localStorage?.getItem("profile") || "";
        if (dataFromLocalStorage) {
          const profileData = JSON.parse(dataFromLocalStorage);
          resolve2(profileData)
        } else {
          resolve2()
        }
      });
      
      const token = profileData?.token;
      let output: any = await this.getWidgetCodeFromId(widgetId, token);
      const widgetInfo = output?.data?.the_widgetcode;
      const widgetName = widgetInfo?.the_widgetcode_name?.[0]?.data?.the_name;
      const widgetHTML = widgetInfo?.the_widgetcode_html?.[0]?.data?.the_html;
      const widgetCSS = widgetInfo?.the_widgetcode_css?.[0]?.data?.the_css;
      const widgetJS = widgetInfo?.the_widgetcode_js?.[0]?.data?.the_js;
      const widgetTimestamp =
        widgetInfo?.the_widgetcode_timestamp?.[0]?.data?.the_timestamp;
      const widgetPackageId = widgetInfo?.the_widgetcode_widget?.[0].id;
      const widgetAddEvent =
        widgetInfo?.the_widgetcode_addevent?.[0]?.data?.the_addevent;
      const widgetOnmount =
        widgetInfo?.the_widgetcode_onmount?.[0]?.data?.the_onmount;
      const widgetOnupdate =
        widgetInfo?.the_widgetcode_onupdate?.[0]?.data?.the_onupdate;
      const widgetMountChildWidgets =
        widgetInfo?.the_widgetcode_mountChildWidgets?.[0]?.data
          ?.the_mountChildWidgets;

      const widgetData = {
        id: output?.id,
        name: widgetName,
        html: widgetHTML,
        css: widgetCSS,
        js: widgetJS,
        timestamp: widgetTimestamp,
        widgetId: widgetPackageId,
        addevent: widgetAddEvent,
        onmount: widgetOnmount,
        onupdate: widgetOnupdate,
        mountChildWidgets: widgetMountChildWidgets,
      };

      const widgetInstance = new BuilderStatefulWidget();
      widgetInstance.html = widgetData?.html;
      widgetInstance.componentDidMountFunction = widgetData?.onmount;
      widgetInstance.addEventFunction = widgetData?.addevent;
      widgetInstance.mountChildWidgetsFunction = widgetData?.mountChildWidgets;

      resolve(widgetInstance);
    });
  }

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