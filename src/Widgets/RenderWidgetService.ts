import { BaseUrl, BuilderStatefulWidget, BuildWidgetFromId, Concept, DATAID, FreeschemaQuery, GetRelation, SchemaQueryListener, SearchLinkMultipleAll, SearchQuery, StatefulWidget, WidgetTree } from "../app";
import { ckeditorCSS } from "../Constants/ckeditorCSS";
import { COMPOSITIONS } from "../Constants/page.const";
import { normalizeCSS } from "./NormalizeStyles.service";
import { applyPageProperties } from "./RenderPage.service";
import { initializeLibraries } from "./RenderWidgetLibrary.service";
import { BuildWidgetFromCache, BuildWidgetFromIdForLatest, GetWidgetForTree } from "./WidgetBuild";

    export async function renderPage(pageId: number, attachNode: HTMLElement, props?: any, showDocumentation?: boolean) {
      const widgets = await GetRelation(pageId, "the_page_body");
      
      // apply page properties
      const freeschemaQuery = new FreeschemaQuery();
      freeschemaQuery.conceptIds = [pageId];
      freeschemaQuery.inpage = 100;
      freeschemaQuery.outputFormat = DATAID;
      freeschemaQuery.selectors = [
        "the_page_body",
        "the_page_title",
        "the_page_slug",
        "the_page_font_family",
        "the_page_font_size",
        "the_page_width",
        "the_page_type",
        "the_page_meta_title",
        "the_page_meta_description",
        "the_page_meta_keywords",
      ];

      SchemaQueryListener(freeschemaQuery, "").subscribe(async (data: any) => {
        await applyPageProperties(data?.[0]?.data?.[`the_${COMPOSITIONS.PAGE_COMP_NAME}`]);
      })

      const fspagePreview = <HTMLElement>document.getElementById("app");
      fspagePreview.classList.add("fspage");

      const stylesOnHead = document.head.querySelectorAll("style#mystyleid");
      Array.from(stylesOnHead).forEach((styleEl) => styleEl.remove());

      if (widgets?.[0]?.id)
        // await renderWidget(widgets[0].id, attachNode, props);
        await renderLatestWidget(widgets[0].id, attachNode, props, showDocumentation);
      else{
        attachNode.innerHTML = '<h4>Invalid or Page doesn\'t exist</h4>'
      }
    }
  
    export async function renderLatestWidget(
      widgetId: number,
      attachNode: HTMLElement,
      props?: any,
      showDocumentation?: boolean
    ) {
      // try{
      // const widgets = await GetRelation(widgetId, "the_widget_latest");
      // if (widgets?.length == 0)
      //   await renderWidget(widgetId, attachNode, props);
      // else {
      //   const latestWidgetId = widgets?.[0]?.id;
      //   if (latestWidgetId)
      //     await renderWidget(latestWidgetId, attachNode, props);
      //   }
      // }
      // catch (error) {
      //   console.error(`Error Caught Rendering Widget: ${error}`);
      // }

      try {
//         attachNode.innerHTML = `
//   <div style="display: flex; align-items: center; gap: 10px; width: 100%">
//     <div style="
//       width: 20px;
//       height: 20px;
//       border: 3px solid #f3f3f3;
//       border-top: 3px solid #3498db;
//       border-radius: 50%;
//       animation: spin 1s linear infinite;
//     "></div>
//     <span>Please Wait...</span>
//   </div>
  
//   <style>
//     @keyframes spin {
//       0% {
//         transform: rotate(0deg);
//       }
//       100% {
//         transform: rotate(360deg);
//       }
//     }
//   </style>
// `;

        let cacheWidget = await BuildWidgetFromIdForLatest(widgetId);
        let latestWidgetId = cacheWidget.mainId;
        let bulkWidgetData = cacheWidget.data;
        const trueBulk = await checkUseLatestWidget(bulkWidgetData, latestWidgetId)
        return await materializeWidget(latestWidgetId, trueBulk, attachNode, props, showDocumentation);
        // return await materializeWidget(latestWidgetId, bulkWidgetData, attachNode, props);
      } catch (error: any) {
        console.error(`Error Caught Rendering Widget: ${error}`);
        attachNode.textContent = `Error: ${error.message}`
      }
    }
  
    export async function renderWidget(widgetId: number, attachNode: HTMLElement, props?: any, showDocumentation?: boolean) {
      try {
        const bulkWidget = await BuildWidgetFromId(widgetId);
        let widgetObject = await materializeWidget(widgetId, bulkWidget, attachNode, props, showDocumentation);
        return widgetObject;
      } catch (error) {
        console.error(`Error Caught Rendering Widget: ${error}`);
      }
    }

    export async function materializeWidget(widgetId: number, bulkWidget:any, attachNode: HTMLElement, props?: any, showDocumentation: boolean = true){
      const widgetTree = await getWidgetBulkFromId(widgetId,[], bulkWidget);
      if (!widgetTree.name) {
        attachNode.innerHTML = '<h4>Invalid or Widget doesn\'t exist</h4>'
        return 
      }
      const appElement = attachNode;
      await initializeLibraries(widgetTree);
      const newWidget = await convertWidgetTreeToWidget(
      // await convertWidgetTreeToWidget(
        widgetTree,
        appElement,
        undefined,
        props
      );
      const generateRandomString = () => 
  Array.from({ length: 32 }, () => 'abcdef'[Math.floor(Math.random() * 6)]).join('')
      const randomStr = generateRandomString()
      attachNode.classList.add(`${randomStr}`);
      attachNode.style.position = "relative";
      // add newWidget css to the page
      const style = document.createElement("style");
      style.id = "mystyleid";
      const finalCSS = `
        .${randomStr} {
          ${widgetTree.css + newWidget.css + ckeditorCSS} 
        }
      `
      const normalizedCSS = await normalizeCSS(finalCSS) || '';
      style.innerHTML = normalizedCSS;
      /*
      style.innerHTML = `
  .${randomStr} {
    ${widgetTree.css + newWidget.css + ckeditorCSS} 
  }
`;
*/

  // library

  if (widgetTree.children.length) {
    widgetTree?.children.forEach((childWidget: WidgetTree) => {
      const childWidgetLibrary = childWidget?.library
      if (childWidgetLibrary?.css?.length || childWidgetLibrary?.js.length) {
        initializeLibraries(childWidget)
      }
    })
  }

      //attachNode.appendChild(style);
      document.head.appendChild(style);
      // add newWidget js to the page
      const script = document.createElement("script");
      script.innerHTML = widgetTree.js;
      appElement.appendChild(script);

    if (showDocumentation) {
      const widgetDetailOptionsEl = document.createElement("div");
      widgetDetailOptionsEl.id = "widget-details";
      widgetDetailOptionsEl.innerHTML = "";
      widgetDetailOptionsEl.innerHTML = `
        <button class="widget-documentation-btn" widget-id="${widgetTree?.origin || widgetTree?.widgetId}" class="d-flex align-items-center gap-1" title="Documentation">
          <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 441 512.02"><path d="M324.87 279.77c32.01 0 61.01 13.01 82.03 34.02 21.09 21 34.1 50.05 34.1 82.1 0 32.06-13.01 61.11-34.02 82.11l-1.32 1.22c-20.92 20.29-49.41 32.8-80.79 32.8-32.06 0-61.1-13.01-82.1-34.02-21.01-21-34.02-50.05-34.02-82.11s13.01-61.1 34.02-82.1c21-21.01 50.04-34.02 82.1-34.02zM243.11 38.08v54.18c.99 12.93 5.5 23.09 13.42 29.85 8.2 7.01 20.46 10.94 36.69 11.23l37.92-.04-88.03-95.22zm91.21 120.49-41.3-.04c-22.49-.35-40.21-6.4-52.9-17.24-13.23-11.31-20.68-27.35-22.19-47.23l-.11-1.74V25.29H62.87c-10.34 0-19.75 4.23-26.55 11.03-6.8 6.8-11.03 16.21-11.03 26.55v336.49c0 10.3 4.25 19.71 11.06 26.52 6.8 6.8 16.22 11.05 26.52 11.05h119.41c2.54 8.79 5.87 17.25 9.92 25.29H62.87c-17.28 0-33.02-7.08-44.41-18.46C7.08 432.37 0 416.64 0 399.36V62.87c0-17.26 7.08-32.98 18.45-44.36C29.89 7.08 45.61 0 62.87 0h173.88c4.11 0 7.76 1.96 10.07 5l109.39 118.34c2.24 2.43 3.34 5.49 3.34 8.55l.03 119.72c-8.18-1.97-16.62-3.25-25.26-3.79v-89.25zm-229.76 54.49c-6.98 0-12.64-5.66-12.64-12.64 0-6.99 5.66-12.65 12.64-12.65h150.49c6.98 0 12.65 5.66 12.65 12.65 0 6.98-5.67 12.64-12.65 12.64H104.56zm0 72.3c-6.98 0-12.64-5.66-12.64-12.65 0-6.98 5.66-12.64 12.64-12.64h142.52c3.71 0 7.05 1.6 9.37 4.15a149.03 149.03 0 0 0-30.54 21.14H104.56zm0 72.3c-6.98 0-12.64-5.66-12.64-12.65 0-6.98 5.66-12.64 12.64-12.64h86.2c-3.82 8.05-6.95 16.51-9.29 25.29h-76.91zm239.61-18.85c7.41 7.43 4.68 18.9-3.05 25.23-7.46 6.01-20.97 8.92-28.68 1.83-7.77-7.23-4.68-18.87 2.76-25.24 7.18-6.05 21.39-9.37 28.97-1.82zm-43.88 95h6.34v-41.33H294.6c0-16.37 30.05-5.74 52.18-11.32v52.65h8.37v17.58h-54.86v-17.58z"/></svg>
        </button>
      `;
      appElement.appendChild(widgetDetailOptionsEl);

      const dialogEl = document.createElement("dialog");
      dialogEl.id = "widget-documentation-preview-modal";
      dialogEl.className = "col-md-8";
      dialogEl.innerHTML = "";
      dialogEl.innerHTML = `
        <div class="widget-documentation-heading">
          <h4>Documentation</h4>
          <button class="close-documentation-button document-preview-close-button" title="Close">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
          </button>
        </div>

        <!-- <div id="documentation-preview" class="ck-content"></div> -->
        <div id="documentation-view" class="ck-content"></div>

        <div class="widget-documentation-footer">
          <button class="document-preview-close-button">Close</button>
        </div>
      `;
      appElement.appendChild(dialogEl);

      const widgetPreviewButtonList = appElement.querySelectorAll(
        ".widget-documentation-btn"
      );
      widgetPreviewButtonList?.forEach((previewButton: any) => {
        previewButton.addEventListener("click", (event:any) => {
          const eventTarget = event?.target;
          const widgetId = eventTarget?.getAttribute('widget-id');
          openDocumentationPreviewModal(widgetId);
        });
      });

      const prieviewCloseButtonList = appElement.querySelectorAll(
        ".document-preview-close-button"
      );
      prieviewCloseButtonList?.forEach((closeButton: any) => {
        closeButton.addEventListener("click", () => {
          closeModal("widget-documentation-preview-modal");
        });
      });
    }

      // remove class wb-initial-empty from all elements that have it from fspagePreview
      const wbInitialEmpty = appElement.querySelectorAll(".wb-initial-empty");
      wbInitialEmpty.forEach((el) => {
        el.classList.remove("wb-initial-empty");
      }); // add the css for the class fspage-preview
      document
        .querySelectorAll('[onclick="widgetSelected(event)"]')
        .forEach((element) => {
          element.removeAttribute("onclick");
        }); // remove the onclick event from the widget container

      return newWidget;

    }

    async function createBulkWidgetRecursive(mainWidget: any, outputBulk: any[]) {
      const childWidgets = mainWidget?.data?.the_widget?.the_widget_s_child;
      outputBulk.push(mainWidget);
      if (childWidgets && childWidgets.length) {
        for (let index = 0; index < childWidgets.length; index++) {
          const childWidget = childWidgets[index];
          let originIdOfChildWidget =
            childWidget?.data.the_child_widget?.the_child_widget_info?.data
              ?.the_widget?.the_widget_origin?.data?.the_origin;
          const useLatest = childWidget?.data?.the_child_widget
            ?.the_child_widget_use_latest?.data
            ? true
            : false;
            //console.log("originIdOfChildWidget", originIdOfChildWidget, childWidget)
            originIdOfChildWidget = Number(originIdOfChildWidget) || false
          // alert(`getting latest of ${originIdOfChildWidget} if this condition ${useLatest} ${typeof originIdOfChildWidget}`);
          let validChildWid: any|null = null
          if (useLatest && originIdOfChildWidget) {
            const validChildWidBulkData = await BuildWidgetFromIdForLatest(originIdOfChildWidget);
            // console.log("this the latest widget uselatest", validChildWid);
            validChildWid = validChildWidBulkData?.data?.[0] || [];
            validChildWid.useLatest = true;
            childWidget.data.the_child_widget.the_child_widget_info = validChildWid;
          } 
          childWidget.data.the_child_widget.the_child_widget_info.sChildId = childWidget.id
          // else {
          //   validChildWid = childWidget.data.the_child_widget.the_child_widget_info.data[0];
          //   alert("not using latest")
          // }
          await createBulkWidgetRecursive(childWidget.data.the_child_widget.the_child_widget_info, outputBulk)
        }
      } 
    }

    async function checkUseLatestWidget(bulkData: any, mainWidgetId: number) {
      const outputBulk : any[] = []
      const bulkDataArray: any[] = [...bulkData];
      try {      
        const mainWidget = bulkDataArray.find(
          (widget) => widget.id === mainWidgetId
        );
        await createBulkWidgetRecursive(mainWidget, outputBulk);
      } catch (error) {
        console.error("convert to real bulk error", error)
      }
      
      return outputBulk;
    }

      export async function getWidgetFromId(widgetId: number,
        visitedWidgets: number[] = [],
        token: string = ""){
        let bulkWidget = await BuildWidgetFromId(widgetId);
          const trueBulk = await checkUseLatestWidget(bulkWidget, widgetId);
          // console.log("before", bulkWidget, "after", trueBulk)
          const widgetTree = await getWidgetBulkFromId(widgetId,[], trueBulk);
          // const widgetTree = await getWidgetBulkFromId(widgetId,[], bulkWidget);
          return widgetTree;
      }
  
    /**
     * This function builds a widget tree. This tree is built fully along with its children
     * This tree can then be used to build the whole dom for the widget.
     * This has recursive property so that the recursion can be used to build this tree.
     * @param widgetId the id of the widget
     * @returns WidgetTree.
     */
    // async function getWidgetFromId(
    //   widgetId: number,
    //   visitedWidgets: number[] = [],
    //   token: string = ""
    // ) {
    //   try {
    //     const widgetNode = new WidgetTree();
    //     const output: any = await getWidgetCodeFromId(widgetId, token);
    //     visitedWidgets.push(widgetId);
  
    //     const widgetInfo = output?.data?.the_widget;
    //     widgetNode.name = widgetInfo?.the_widget_name?.[0]?.data?.the_name;
    //     widgetNode.html = widgetInfo?.the_widget_html?.[0]?.data?.the_html;
    //     widgetNode.css = widgetInfo?.the_widget_css?.[0]?.data?.the_css;
    //     widgetNode.js = widgetInfo?.the_widget_js?.[0]?.data?.the_js;
    //     widgetNode.origin = Number(
    //       widgetInfo?.the_widget_origin?.[0]?.data?.the_originid
    //     );
    //     widgetNode.version =
    //       widgetInfo?.the_widget_version?.[0]?.data?.the_version;
    //     widgetNode.clean = widgetInfo?.the_widget_clean?.[0]?.data?.the_clean;
    //     widgetNode.timestamp =
    //       widgetInfo?.the_widget_timestamp?.[0]?.data?.the_timestamp;
    //     widgetNode.id = output.id;
    //     const widgetTypeValue = widgetInfo?.the_widget_type?.[0]?.data?.the_type;
    //     if (widgetTypeValue == "null" || widgetTypeValue == null) {
    //       widgetNode.type = "the_element_name";
    //     } else {
    //       widgetNode.type = widgetTypeValue;
    //     }
    //     widgetNode.after_render =
    //       widgetInfo?.the_widget_after_render?.[0]?.data?.the_after_render;
  
    //     widgetNode.before_render =
    //       widgetInfo?.the_widget_before_render?.[0]?.data?.the_before_render;
  
    //     widgetNode.update = widgetInfo?.the_widget_update?.[0]?.data?.the_update;
    //     widgetNode.widgetId = widgetId;
    //     widgetNode.mount_child =
    //       widgetInfo?.the_widget_mount_child?.[0]?.data?.the_mount_child;
    //     const childWidgets = widgetInfo?.the_widget_s_child;
    //     // if there are children present in the widget then convert the children to widget and put it inside of the tree.
    //     if (childWidgets?.length) {
    //       for (let i = 0; i < childWidgets.length; i++) {
    //         const childWidgetId =
    //           childWidgets[i]?.data.the_child_widget?.the_child_widget_info?.[0]
    //             ?.id ||
    //           childWidgets[i]?.data.the_child_widget?.the_child_widget_parent?.[0]
    //             ?.data?.the_parent;
    //         const childWidget: WidgetTree = await getWidgetFromId(
    //           childWidgetId,
    //           visitedWidgets,
    //           token
    //         );
    //         const childWidgetTypeValue =
    //           childWidgets[i]?.data?.the_child_widget?.the_child_widget_type?.[0]
    //             ?.data?.the_type;
    //         const childWidgetWrapperId =
    //           childWidgets[i]?.data?.the_child_widget
    //             ?.the_child_widget_wrapper?.[0]?.data?.the_wrapper;
    //         if (childWidgetTypeValue == "null" || childWidgetTypeValue == null) {
    //           childWidget.type = "the_element_name";
    //         } else {
    //           childWidget.type = childWidgetTypeValue;
    //         }
    //         childWidget.wrapper = childWidgetWrapperId;
    //         widgetNode.children.push(childWidget);
    //       }
    //     }
    //     return widgetNode;
    //   } catch (ex) {
    //     console.error("error", ex);
    //     throw ex;
    //   }
    // }


    export async function getWidgetBulkFromId(
      widgetId: number,
      visitedWidgets: number[] = [],
      bulkWidget:any,
      token: string = ""
    ) {
      try {
        const widgetNode = new WidgetTree();
        const output = GetWidgetForTree(bulkWidget, widgetId);
        //const output: any = await getWidgetCodeFromId(widgetId, token);
        visitedWidgets.push(widgetId);
  
        const widgetInfo = output?.data?.the_widget;
        widgetNode.name = widgetInfo?.the_widget_name?.data?.the_name;

        widgetNode.html = widgetInfo?.the_widget_html?.data?.the_html;
        widgetNode.css = widgetInfo?.the_widget_css?.data?.the_css;
        widgetNode.js = widgetInfo?.the_widget_js?.data?.the_js;
        widgetNode.origin = Number(
          widgetInfo?.the_widget_origin?.data?.the_origin || widgetInfo?.the_widget_origin?.data?.the_originid
        );
        widgetNode.version =
          widgetInfo?.the_widget_version?.data?.the_version;
        widgetNode.clean = widgetInfo?.the_widget_clean?.data?.the_clean;
        widgetNode.timestamp =
          widgetInfo?.the_widget_timestamp?.data?.the_timestamp;
        widgetNode.id = output?.id;
        const widgetTypeValue = widgetInfo?.the_widget_type?.data?.the_type;
        if (widgetTypeValue == "null" || widgetTypeValue == null) {
          widgetNode.type = "the_element_name";
        } else {
          widgetNode.type = widgetTypeValue;
        }
        widgetNode.after_render =
          widgetInfo?.the_widget_after_render?.data?.the_after_render;
  
        widgetNode.before_render =
          widgetInfo?.the_widget_before_render?.data?.the_before_render;
  
        widgetNode.update = widgetInfo?.the_widget_update?.data?.the_update;
        widgetNode.widgetId = widgetId;
        widgetNode.mount_child =
          widgetInfo?.the_widget_mount_child?.data?.the_mount_child;
        const childWidgets = widgetInfo?.the_widget_s_child;
        if (output.useLatest) {
          widgetNode.useLatest = true;
        }
        if (output.sChildId) {
          widgetNode.sChildId = output.sChildId
        }
        // libraries
        const widgetLibraryCSS = widgetInfo?.the_widget_s_css_library?.map((cssLibary: any) => {
          const cssLibraryOrder = cssLibary?.data?.the_css_library?.the_css_library_order?.data?.the_order
          const cssLibraryURL = cssLibary?.data?.the_css_library?.the_css_library_url?.data?.the_url
          return {
            order: cssLibraryOrder,
            url: cssLibraryURL
          }
        })
        const widgetLibraryJS = widgetInfo?.the_widget_s_js_library?.map((jsLibary: any) => {
          const jsLibraryOrder = jsLibary?.data?.the_js_library?.the_js_library_order?.data?.the_order
          const jsLibraryURL = jsLibary?.data?.the_js_library?.the_js_library_url?.data?.the_url
          return {
            order: jsLibraryOrder,
            url: jsLibraryURL
          }
        })
        widgetNode.library = {css: widgetLibraryCSS || [], js: widgetLibraryJS || []}

        // asssistant
        const assistantData = widgetInfo?.the_widget_assistant?.data?.the_assistant
        widgetNode.assistant = {
          id: assistantData?.the_assistant_id?.data?.the_id,
          input: assistantData?.the_assistant_input?.data?.the_input,
          type: assistantData?.the_assistant_type?.data?.the_type,
        }

        // custom function
        const customFunctionList = widgetInfo?.the_widget_s_custom_function?.map((customFunction: any) => {
          const customFunctionData = customFunction?.data?.the_custom_function
          return {
            id: customFunction?.id,
            name: customFunctionData?.the_custom_function_name?.data?.the_name,
            slug: customFunctionData?.the_custom_function_slug?.data?.the_slug,
            code: customFunctionData?.the_custom_function_code?.data?.the_code,
          }
        })
        widgetNode.custom_functions = customFunctionList

        // if there are children present in the widget then convert the children to widget and put it inside of the tree.
        if (childWidgets?.length) {
          for (let i = 0; i < childWidgets.length; i++) {
            const childWidgetId =
              childWidgets[i]?.data.the_child_widget?.the_child_widget_info
                ?.id ||
              childWidgets[i]?.data.the_child_widget?.the_child_widget_parent
                ?.data?.the_parent;
            const childWidget: WidgetTree = await getWidgetBulkFromId(
              childWidgetId,
              visitedWidgets,
              bulkWidget,
              token
            );
            const childWidgetTypeValue =
              childWidgets[i]?.data?.the_child_widget?.the_child_widget_type
                ?.data?.the_type;
            const childWidgetWrapperId =
              childWidgets[i]?.data?.the_child_widget
                ?.the_child_widget_wrapper?.data?.the_wrapper;
            if (childWidgetTypeValue == "null" || childWidgetTypeValue == null) {
              childWidget.type = "the_element_name";
            } else {
              childWidget.type = childWidgetTypeValue;
            }
            childWidget.wrapper = childWidgetWrapperId;
            widgetNode.children.push(childWidget);
          }
        }
        return widgetNode;
      } catch (ex) {
        if (ex instanceof Error) {
          console.error("error converting bulkwidget to widget tree", ex.message);
        }
        throw ex;
      }
    }
  
    /**
     *
     * @param tree Widget tree from getWidgetFromId(widgetId);
     * @param parentElement this is the dom element on which we want to add our widget
     * @returns the widgetree with widgets attached inside of it.
     * Also this will add the tree to the dom.
     */
    export async function convertWidgetTreeToWidget(
      tree: WidgetTree,
      parentElement: HTMLElement,
      isMain: boolean = true,
      props?: any,
      state?:any,
      parentWidget:StatefulWidget|null = null
    ) {
      const newWidget: BuilderStatefulWidget = new BuilderStatefulWidget();
      newWidget.html = tree.html;
      if(parentWidget){
        newWidget.parentWidget = makeShallow(parentWidget);
      }
      newWidget.widgetType = tree.type;
      newWidget.componentDidMountFunction = tree.before_render;
      newWidget.addEventFunction = tree.after_render;
      newWidget.mountChildWidgetsFunction = tree.mount_child;
      newWidget.widgetState = {...state};
      newWidget.customFunctions = tree.custom_functions;
      // newWidget.css = `#${tree.id} { ${tree.css} }`;
      // newWidget.css = newWidget.css ? newWidget.css : "";
      if (props) newWidget.data = props;
      parentElement.innerHTML = "";
      const newParent = parentElement;
      //let newParent = appendWidgetContainerToParent(parentElement, tree.id, isMain);
      isMain = false;
      if (newParent) {
        await newWidget.mount(newParent);
        tree.widget = newWidget;
        if (tree.children.length > 0) {
          if (newWidget.childWidgetElement?.length > 0) {
            for (let i = 0; i < tree.children?.length; i++) {
              const child = tree.children[i];
              for (let j = 0; j < newWidget.childWidgetElement.length; j++) {
                const widgetElement = newWidget.childWidgetElement[j];
                if (
                  child.wrapper === widgetElement.id
                ) {
                  const clearedChildWidget = clearDraggedWidget(child);
                  child.html = `<div id="${child.wrapper}">${child.html}</div>`;
                  const childWidget = await convertWidgetTreeToWidget(
                    clearedChildWidget,
                    widgetElement,
                    isMain,
                    newWidget.data,
                    newWidget.widgetState,
                    newWidget
                  );
                  newWidget.childWidgets.push(childWidget);
                  // newWidget.css =
                  //   newWidget.css +
                  //   `div[data-widgetid="${child.id}"] { ${child.css} }`;
                  // newWidget.css = childWidget.css + `#${child.wrapper} { ${child.css} }`;
                  newWidget.css = newWidget.css + childWidget.css + `#${widgetElement.id} { ${child.css} }`;
                  childWidget.dataChange((value: Concept) => {
                    const type = value?.type?.characterValue;
                    if (type) {
                      newWidget.childrenData[type] = value;
                    }
                  });
                }
              }
            }
          }
        }
      }
      console.log("newWidget ->", newWidget, tree);
  
      // Unwrap specific containers
     // await unwrapContainers(parentElement, ".mftsccs-marking-element");
      await unwrapContainers(parentElement, ".widget_container");
  
      return newWidget;
    }


export function makeShallow(input:any){
  const shallow:any = {};

  for (const [key, value] of Object.entries(input)) {
    if (typeof value !== "object" || value === null || !Array.isArray(value)) {
      shallow[key] = value;
    }
  }
  return shallow;
}


    /**
 * 
 * @param tree Widget tree from getWidgetFromId(widgetId);
 * @param parentElement this is the dom element on which we want to add our widget
 * @returns the widgetree with widgets attached inside of it.
 * Also this will add the tree to the dom.
 */
export async function convertWidgetTreeToWidgetWithWrapper(tree: WidgetTree, parentElement:HTMLElement, isMain:boolean = true, state?:object, isInDevelopment?: boolean, parentWidget:StatefulWidget|null = null){
  let newWidget: BuilderStatefulWidget = new BuilderStatefulWidget();
  newWidget.html = tree.html;
  if(parentWidget){
    newWidget.parentWidget = makeShallow(parentWidget);
  }
  newWidget.widgetState = {...state};
  newWidget.widgetType = tree.type;
  newWidget.componentDidMountFunction = tree.before_render;
  newWidget.addEventFunction = tree.after_render;
  newWidget.mountChildWidgetsFunction = tree.mount_child;
  newWidget.customFunctions = tree.custom_functions;
  newWidget.inDevelopment = isInDevelopment === false ? false : true;
  // newWidget.css = newWidget.css ? newWidget.css : "";
  parentElement.innerHTML = "";
  let newParent = parentElement;
  //let newParent = appendWidgetContainerToParent(parentElement, tree.id, isMain);
  isMain = false;
  if(newParent){
      await newWidget.mount(newParent);
      tree.widget = newWidget;
      if(tree.children.length > 0){
          if(newWidget.childWidgetElement?.length > 0){
              for(let i=0; i<tree.children?.length; i++){
                  let child = tree.children[i];
                  for(let j=0; j<newWidget.childWidgetElement.length; j++){
                      let widgetElement = newWidget.childWidgetElement[j];
                      // if ((child.id === Number(widgetElement.getAttribute("data-widgetid"))) && (child.wrapper === widgetElement.id)) {
                      if ((child.wrapper === widgetElement.id)) {
                          const clearedChildWidget = clearDraggedWidget(child);
                          const childWidget =  await convertWidgetTreeToWidgetWithWrapper(clearedChildWidget, widgetElement, isMain, newWidget.widgetState, isInDevelopment,newWidget);
                          newWidget.childWidgets.push(childWidget);
                          // newWidget.css = childWidget.css + `#${child.wrapper} { ${child.css} }`;
                          newWidget.css = newWidget.css + childWidget.css + `#${widgetElement.id} { ${child.css} }`;
                          childWidget.dataChange((value: Concept) => {
                              console.log("This is the data change in child", value);
                              let type = value?.type?.characterValue;
                              if (type) {
                                  newWidget.childrenData[type] = value;
                              }
                              console.log("new child data", newWidget.childrenData);
                          });
                      }                        
                  }
              }
          }
      }
  }
  console.log("newWidget ->", newWidget,tree);
  return newWidget;
}
  
    async function getWidgetCodeFromId(widgetId: number, token: string) {
      try {
        const searchFirst = new SearchQuery();
        searchFirst.composition = widgetId;
        searchFirst.fullLinkers = [
          "the_widget",
          "the_widget_widget",
          "the_widget_name",
          "the_widget_html",
          "the_widget_css",
          "the_widget_js",
          "the_widget_timestamp",
          "the_widget_type",
          "the_widget_after_render",
          "the_widget_before_render",
          "the_widget_update",
          "the_widget_mount_child",
          "the_widget_clean",
          "the_widget_s_child",
          "the_widget_version",
          "the_widget_origin",
        ];
        searchFirst.inpage = 100;
  
        const searchSecond = new SearchQuery();
        searchSecond.fullLinkers = [
          "the_child_widget",
          "the_child_widget_type",
          "the_child_widget_parent",
          "the_child_widget_wrapper",
          "the_child_widget_info",
        ];
        searchSecond.inpage = 100;
  
        const queryParams = [searchFirst, searchSecond];
        const output = await SearchLinkMultipleAll(queryParams, token);
        console.log("getWidgetCodeFromId output ->", output);
        return output;
      } catch (error: any) {
        console.error("error", error);
        throw error;
      }
    }


    function clearDraggedWidget(widgetTree: WidgetTree): WidgetTree {
      widgetTree.html = widgetTree.html.replace(
        /<[^>]*\bclass=["'][^"']*\bwidget_container\b[^"']*["'][^>]*>/g,
        (match) => {
          return match.replace(/\bwidget_container\b/g, "").trim();
        }
      );
      widgetTree.html = widgetTree.html.replace(
        /<[^>]*\bdraggable=["'][^"']*\btrue\b[^"']*["'][^>]*>/g,
        (match) => {
          return match.replace(/\btrue\b/g, "false").trim();
        }
      );
      widgetTree.html = widgetTree.html.replace(
        /<[^>]*\bclass=["'][^"']*\bhover-element\b[^"']*["'][^>]*>/g,
        (match) => {
          return match.replace(/\bhover-element\b/g, "").trim();
        }
      );
      widgetTree.html = widgetTree.html.replace(
        /<[^>]*\bclass=["'][^"']*\bwb-block\b[^"']*["'][^>]*>/g,
        (match) => {
          return match.replace(/\bwb-block\b/g, "").trim();
        }
      );
      widgetTree.html = widgetTree.html.replace(
        /<[^>]*onclick="widgetSelected\(event\)"\s*,?\s*ondragover="_dragService\.dragOverWidgetElement\(event\)"\s*,?\s*ondrop="_dragService\.dropWidgetElement\(event\)"\s*,?\s*ondragstart="_dragService\.dragStartWidgetElement\(event\)"\s*,?\s*ondragend="_dragService\.dragEndWidgetElement\(event\)"[^>]*>/g,
        (match) => {
          return match
            .replace(/onclick="widgetSelected\(event\)"/g, 'onclick=""')
            .replace(
              /ondragover="_dragService\.dragOverWidgetElement\(event\)"/g,
              'ondragover=""'
            )
            .replace(
              /ondrop="_dragService\.dropWidgetElement\(event\)"/g,
              'ondrop=""'
            )
            .replace(
              /ondragstart="_dragService\.dragStartWidgetElement\(event\)"/g,
              'ondragstart=""'
            )
            .replace(
              /ondragend="_dragService\.dragEndWidgetElement\(event\)"/g,
              'ondragend=""'
            )
            .trim();
        }
      );
      widgetTree.html = widgetTree.html.replace(
        /<[^>]*\bondragstart=["'][^"']*\b_dragService\.onWidgetDragStart\(event\)\b[^"']*["'][^>]*>/g,
        (match) => {
          return match
            .replace(/\b_dragService\.onWidgetDragStart\(event\)\b/g, "")
            .trim();
        }
      );
      return widgetTree;
    }
  
    async function unwrapWidgetContainers(widgetContainerEl: any, queryParam: string) {
      // Select all div elements with the queryParam
      if (widgetContainerEl && widgetContainerEl.nodeType === 1) {
        const widgetContainers = widgetContainerEl.querySelectorAll(queryParam);
    
        // Loop through each div and replace it with its inner content
        widgetContainers.forEach((element: any) => {
          // Move all child nodes of the div before the div
          while (element.firstChild) {
            element.parentNode.insertBefore(element.firstChild, element);
          }
          // Remove the empty div
          element.remove();
        });
    
      }
      return widgetContainerEl;
    }
  
    export async function unwrapContainers(parentElement: HTMLElement, selector: string) {
      const elements: any = parentElement.querySelectorAll(selector);
      for (const el of elements) {
        const parent = el.parentElement;
        if (parent) {
          while (el.firstChild) {
            const unwrappedChild = await unwrapWidgetContainers(
              el.firstChild,
              selector
            );
            parent.insertBefore(unwrappedChild, el);
          }
          parent.removeChild(el);
        }
      }
    }
  
/**
 * Opens documentation modal
 * @param widgetId 
 */
export async function openDocumentationPreviewModal(widgetId: number) {
  const documentationQueryText = new FreeschemaQuery();
  documentationQueryText.typeConnection = "the_widget_documentation";
  documentationQueryText.name = "documentationText";
  documentationQueryText.selectors = ["the_documentation_text"];

  const documentationQuery = new FreeschemaQuery();
  documentationQuery.typeConnection = "the_widget_s_documentation";
  documentationQuery.name = "documentationBlank";
  documentationQuery.selectors = [
    "the_documentation_text",
    "the_documentation_content",
    "the_documentation_language",
    "the_documentation_doc_title",
    "the_documentation_folder",
    "the_documentation_creator_email",
    "the_documentation_created_by",
    "the_documentation_content",
    "the_documentation_type",

    "the_documentation_s_doc_url",
    "the_documentation_s_image_url",
    "the_documentation_s_video_link",

    "the_documentation_auth_type",
    "the_documentation_bearer_token",
    "the_documentation_method",
    "the_documentation_method_url",
    "the_documentation_username",
    "the_documentation_password",
    "the_documentation_s_json_list",
    "the_documentation_api_script",
    "the_documentation_api_body",

    "the_documentation_code_editor",
    "the_documentation_return",
  ];

  const documentationJSONList = new FreeschemaQuery();
  documentationJSONList.typeConnection = "the_documentation_s_json_list";
  documentationJSONList.name = "documentationJSON";
  documentationJSONList.selectors = [
    "the_json_list_key",
    "the_json_list_value",
  ];

  documentationQuery.freeschemaQueries = [documentationJSONList];

  const allWidgetCodes = new FreeschemaQuery();
  allWidgetCodes.conceptIds = [widgetId];
  allWidgetCodes.freeschemaQueries = [
    documentationQueryText,
    documentationQuery,
  ];
  allWidgetCodes.inpage = 100;
  allWidgetCodes.outputFormat = DATAID;

  await SchemaQueryListener(allWidgetCodes, "").subscribe(async (data: any) => {
    let widgetDocumentData: any;
    const textDocumentationData =
      data?.[0]?.data?.the_widget?.the_widget_documentation?.data
        ?.the_documentation?.the_documentation_text?.data?.the_text || "";
    if (textDocumentationData) {
      widgetDocumentData = textDocumentationData;
    }

    const widgetDoucumentationContentData =
      data?.[0]?.data?.the_widget?.the_widget_s_documentation;

    if (widgetDoucumentationContentData?.length) {
      const documentationDataList = widgetDoucumentationContentData?.map(
        (docItem: any) => {
          const docData = docItem?.data?.the_documentation;
          const docType = docData?.the_documentation_type?.data?.the_type;
          const docContent =
            docData?.the_documentation_content?.data?.the_content;
          const docCreatorEmail =
            docData?.the_documentation_creator_email?.data?.the_creator_email;
          const docTitle =
            docData?.the_documentation_doc_title?.data?.the_doc_title;

          // api type
          const docMethod = docData?.the_documentation_method?.data?.the_method;
          const docMethodURL =
            docData?.the_documentation_method_url?.data?.the_method_url;
          const docBearerToken =
            docData?.the_documentation_bearer_token?.data?.the_bearer_token;
          const docUsername =
            docData?.the_documentation_username?.data?.the_username;
          const docPassword =
            docData?.the_documentation_password?.data?.the_password;
          const docAuthType =
            docData?.the_documentation_auth_type?.data?.the_auth_type;
          const docJsonList = docData?.the_documentation_s_json_list;
          const docAPIScript = docData?.the_documentation_api_script?.data?.the_api_script;
          const docAPIBody = docData?.the_documentation_api_body?.data?.the_api_body;

          // function type
          const docLanguage =
            docData?.the_documentation_language?.data?.the_language;
          const docReturn = docData?.the_documentation_return?.data?.the_return;
          const docCodeEditor =
            docData?.the_documentation_code_editor?.data?.the_code_editor;

          // image and links type
          const docLinkURL = docData?.the_documentation_s_doc_url;
          const docImageURL = docData?.the_documentation_s_image_url;
          const docVideoURL = docData?.the_documentation_s_video_link;

          let finalDocumentationData: any = {
            type: docType,
            content: docContent,
            creatorEmail: docCreatorEmail,
            title: docTitle,
          };

          if (docType === "blank") {
            finalDocumentationData = {
              ...finalDocumentationData,
            };
          } else if (docType === "api") {
            const jsonList: any = [];
            if (docJsonList?.length) {
              docJsonList?.forEach((jsonItem: any) => {
                jsonList.push({
                  key: jsonItem?.data?.the_json_list?.the_json_list_key?.data
                    ?.the_key,
                  value:
                    jsonItem?.data?.the_json_list?.the_json_list_value?.data
                      ?.the_value,
                });
              });
            }
            finalDocumentationData = {
              ...finalDocumentationData,
              method: docMethod,
              methodURL: docMethodURL,
              authType: docAuthType,
              username: docUsername,
              password: docPassword,
              bearerToken: docBearerToken,
              json: jsonList,
              script: docAPIScript,
              body: docAPIBody
            };
          } else if (docType === "function") {
            finalDocumentationData = {
              ...finalDocumentationData,
              language: docLanguage,
              return: docReturn,
              codeEditor: docCodeEditor,
            };
          }
          // } else if (docType === "imgAndLink") {
            const imageURLs: string[] = [];
            const videoURLs: string[] = [];
            const linkURLs: string[] = [];
            if (docImageURL?.length) {
              docImageURL?.forEach((imgItem: any) => {
                imageURLs.push(imgItem?.data?.the_image_url);
              });
            }
            if (docVideoURL?.length) {
              docVideoURL?.forEach((videoItem: any) => {
                videoURLs.push(videoItem?.data?.the_video_link);
              });
            }
            if (docLinkURL?.length) {
              docLinkURL?.forEach((linkItem: any) => {
                linkURLs.push(linkItem.data?.the_doc_url);
              });
            }
            finalDocumentationData = {
              ...finalDocumentationData,
              imageList: imageURLs,
              linkList: linkURLs,
              videoList: videoURLs
            };
          // }
          return finalDocumentationData;
        }
      );
      widgetDocumentData = documentationDataList;
    }

    await openModal("widget-documentation-preview-modal");
    showWidgetDocumentation(widgetDocumentData, widgetId);
  });
  
}

export async function showWidgetDocumentation(widgetDocumentData: any, widgetId: number) {
  const viewEl = <HTMLElement>document.getElementById('documentation-view');
  if (BaseUrl.DOCUMENTATION_WIDGET != 0 ) {
    await renderLatestWidget(BaseUrl.DOCUMENTATION_WIDGET, viewEl, {currentWidgetId: widgetId});
    return
  }

  const previewContainer = <HTMLDivElement>(
    document.getElementById("documentation-preview")
  );

  previewContainer.innerHTML = ''

  if (widgetDocumentData && widgetDocumentData?.length && typeof widgetDocumentData !== "string") {
    widgetDocumentData?.forEach((widgetDoc: any) => {
      const contentTitleEl = <HTMLHeadingElement>document.createElement("h3");
      let widgetDocType = "";
      switch (widgetDoc?.type) {
        case "api":
          widgetDocType = "API";
          break;
        case "function":
          widgetDocType = "Functions and Classes";
          break;
        case "imgAndLink":
          widgetDocType = "Images and Links";
          break;
        default:
          widgetDocType = "";
      }

      contentTitleEl.innerHTML = `
        ${widgetDoc?.title} ${widgetDocType ? "(" + widgetDocType + ")" : ""}
      `;
      previewContainer?.appendChild(contentTitleEl);

      const contentEl = <HTMLDivElement>document.createElement("div");
      contentEl.classList.add("widget-doc-content");
      if (widgetDoc?.content) {
        contentEl.innerHTML = widgetDoc.content
        previewContainer?.appendChild(contentEl);
      }

      const extraDocElement = document.createElement("div");
      extraDocElement.classList.add("widget-doc-section");
      // if (widgetDoc.type === "blank") {
      //   extraDocElement.innerHTML = `
      //     <p class="documentation-creator">- added by: <span>${widgetDoc?.creatorEmail}</span></p>
      //   `;
      // } else 
      if (widgetDoc.type === "api") {
        let authTypeData = "";
        if (widgetDoc.authType === "basicAuth") {
          authTypeData = `
            <p>username: <code>${widgetDoc?.username}</code></p>
            <p>password: <code>${widgetDoc?.password}</code></p>
          `;
        } else if (widgetDoc.authType === "bearerToken") {
          authTypeData = `
          <h6>Token: <code>${widgetDoc?.bearerToken}</code></h6>
          `;
        } else {
          authTypeData = "None";
        }
        const docJSONList = widgetDoc.json
          .map((jsonItem: any) => {
            return `${jsonItem?.key}: ${jsonItem?.value}`;
          })
          .join(", ");

        const docJSONListPreEl = document.createElement("pre");
        docJSONListPreEl.textContent = docJSONList;

        extraDocElement.innerHTML = `
          <div class="pv-3">
            <h6>Method Type: <code>${widgetDoc?.method.toUpperCase()}</code></h6>
            <h6>Endpoint: <code>${widgetDoc?.methodURL}</code></h6>
          </div>
          <div class="pv-3">
            <h6>Auth Type: <code>${widgetDoc?.authType?.toUpperCase() || ""}</code></h6>
            ${authTypeData}
          </div>
          <div class="pv-3">
            <h6>JSON</h6>
            <code class="pre-wrapper" id="json-list-pre"></code>
          </div>
          <div class="pv-3">
            <h6>Body</h6>
            ${widgetDoc.body}
          </div>
          <div class="pv-3">
            <h6>Scripts</h6>
            ${widgetDoc.script}
          </div>
        `;
        const jsonlistCodeWrapper = <HTMLElement>extraDocElement.querySelector('#json-list-pre');
        if (jsonlistCodeWrapper) {
          jsonlistCodeWrapper.appendChild(docJSONListPreEl);
          jsonlistCodeWrapper.removeAttribute("id");
        }
      } else if (widgetDoc.type === "function") {
        const codeEditorPreEl = document.createElement("pre");
        codeEditorPreEl.textContent = widgetDoc?.codeEditor;

        const returnPreEl = document.createElement("pre");
        returnPreEl.textContent = widgetDoc?.return;
        
        extraDocElement.innerHTML = `
          <div class="mv-3">
            <h6>Parameter</h6>
            <p>Language: ${widgetDoc?.language}</p>
            <code class="pre-wrapper" id="editor-pre"></pre></code>
            <h6>Returns</h6>
            <code class="pre-wrapper" id="return-pre"></code>
          </div>
        `;

        const codeWrapperFirst = <HTMLElement>extraDocElement.querySelector('#editor-pre');
        if (codeWrapperFirst) {
          codeWrapperFirst.appendChild(codeEditorPreEl);
          codeWrapperFirst.removeAttribute("id");
        }
        const codeWrapperSecond = <HTMLElement>extraDocElement.querySelector('#return-pre');
        if (codeWrapperSecond) {
          codeWrapperSecond.appendChild(returnPreEl);
          codeWrapperSecond.removeAttribute("id");
        }
      }
      // } else if (widgetDoc.type === "imgAndLink") {
      const imgAndLinkEl = document.createElement("div");
      imgAndLinkEl.classList.add("mv-3");
      const webURLs = widgetDoc?.linkList
        ?.map((linkItem: string) => {
          return `
            <p>${linkItem}</p>
          `;
        })
        .join("");
      const imageURLs = widgetDoc?.imageList
        ?.map((imgItem: string) => {
          return `
          <img src="${imgItem}">
        `;
        })
        .join("");
      const videoURLs = widgetDoc?.videoList
        ?.map((videoItem: string) => {
          return `
            <iframe width="560" height="315" src="${videoItem}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `;
        })
        .join("");

      const webURLsEl = webURLs?.length
        ? `
          <div class="mv-3">
          <h6>Web links</h6>
          ${webURLs}
          </div>
        `
        : "";
      const imageURLsEl = imageURLs?.length
        ? `
          <h6>Attachments</h6>
          <div class="documentation-attachments">
            ${imageURLs}
          </div>
        `
        : "";
      const videoURLsEl = videoURLs?.length
        ? `
            <h6>Videos</h6>
            <div class="documentation-attachments">
              ${videoURLs}
            </div>
            `
        : "";
      
        imgAndLinkEl.innerHTML = `
        <div class="mv-3">
          ${webURLsEl}
          ${imageURLsEl}
          ${videoURLsEl}
        </div>
        <p class="documentation-creator">- added by: <span>${widgetDoc?.creatorEmail}</span></p>
      `;
      // }
      extraDocElement?.appendChild(imgAndLinkEl);
      previewContainer?.appendChild(extraDocElement);
    });

  } else {
    if (widgetDocumentData !== undefined) {
      previewContainer.innerHTML = widgetDocumentData
    }
  }

}

/**
 * Opens modal
 * @param modalId 
 */
export async function openModal(modalId: string) {
  const modal: any = document.getElementById(modalId);
  modal.showModal();
}

/**
 * Closes modal
 * @param modalId 
 */
export async function closeModal(modalId: string) {
  const modal: any = document.getElementById(modalId);
  const modalForm = modal?.querySelector("form");
  modalForm?.reset();
  modal?.close();
}
