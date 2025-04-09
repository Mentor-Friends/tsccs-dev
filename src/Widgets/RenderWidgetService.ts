import { BuilderStatefulWidget, BuildWidgetFromId, Concept, DATAID, FreeschemaQuery, GetRelation, SchemaQueryListener, SearchLinkMultipleAll, SearchQuery, WidgetTree } from "../app";
import { ckeditorCSS } from "../Constants/ckeditorCSS";
import { BuildWidgetFromIdForLatest, GetWidgetForTree } from "./WidgetBuild";

    export async function renderPage(pageId: number, attachNode: HTMLElement, props?: any) {
      const widgets = await GetRelation(pageId, "the_page_body");
      if (widgets?.[0]?.id)
        await renderWidget(widgets[0].id, attachNode, props);
      else{
        attachNode.innerHTML = '<h4>Invalid or Page doesn\'t exist</h4>'
      }
    }
  
    export async function renderLatestWidget(
      widgetId: number,
      attachNode: HTMLElement,
      props?: any
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
        attachNode.innerHTML = `
  <div style="display: flex; align-items: center; gap: 10px; width: 100%">
    <div style="
      width: 20px;
      height: 20px;
      border: 3px solid #f3f3f3;
      border-top: 3px solid #3498db;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    "></div>
    <span>Please Wait...</span>
  </div>
  
  <style>
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  </style>
`;
        const bulkWidget = await BuildWidgetFromIdForLatest(widgetId);
        let latestWidgetId = bulkWidget.mainId;
        let bulkWidgetData = bulkWidget.data;
        return await materializeWidget(latestWidgetId, bulkWidgetData, attachNode, props);
      } catch (error: any) {
        console.error(`Error Caught Rendering Widget: ${error}`);
        attachNode.textContent = `Error: ${error.message}`
      }
    }
  
    export async function renderWidget(widgetId: number, attachNode: HTMLElement, props?: any) {
      try {
        const bulkWidget = await BuildWidgetFromId(widgetId);
        let widgetObject = await materializeWidget(widgetId, bulkWidget, attachNode, props);
        return widgetObject;
      } catch (error) {
        console.error(`Error Caught Rendering Widget: ${error}`);
      }
    }

    export async function materializeWidget(widgetId: number, bulkWidget:any, attachNode: HTMLElement, props?: any){
      const widgetTree = await getWidgetBulkFromId(widgetId,[], bulkWidget);
      if (!widgetTree.name) {
        attachNode.innerHTML = '<h4>Invalid or Widget doesn\'t exist</h4>'
        return 
      }
      const appElement = attachNode;
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
      style.innerHTML = `
  .${randomStr} {
    ${widgetTree.css + newWidget.css + ckeditorCSS} 
    /* DOCUMENTATION */
  }

  #widget-details {
    position: absolute;
    right: 0px;
    top: 0px;
  }

  #widget-details button {
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 0 0 0 0.25rem;
    height: auto;
    width: auto;
  }

  #widget-details button:hover, 
  #widget-details button:focus {
    opacity: 0.75;
  }

  #widget-details button span {
    pointer-events: none;
    font-size: 1rem;
  }
`;
      //attachNode.appendChild(style);
      document.head.appendChild(style);
      // add newWidget js to the page
      const script = document.createElement("script");
      script.innerHTML = widgetTree.js;
      appElement.appendChild(script);

      const widgetDetailOptionsEl = document.createElement("div");
      widgetDetailOptionsEl.id = "widget-details";
      widgetDetailOptionsEl.innerHTML = "";
      widgetDetailOptionsEl.innerHTML = `
        <button id="widget-documentation-btn" class="d-flex align-items-center gap-1" title="Documentation">
          <span class="material-symbols-outlined"> visibility </span>
        </button>
      `;
      appElement.appendChild(widgetDetailOptionsEl);

      const dialogEl = document.createElement("dialog");
      dialogEl.id = "widget-documentation-preview-modal";
      dialogEl.className = "col-md-8";
      dialogEl.innerHTML = "";
      dialogEl.innerHTML = `
        <div class="py-2 px-3 bg-secondary text-light fs-4 d-flex justify-content-between align-items-center">
          <span>Documentation</span>
          <span class="material-symbols-outlined document-preview-close-button" style="cursor: pointer;">close</span>
        </div>

        <div id="documentation-preview" class="ck-content"></div>

        <div class="text-end mt-3">
          <button class="btn btn-secondary document-preview-close-button">Close</button>
        </div>
      `;
      appElement.appendChild(dialogEl);

      const widgetPreviewButton = <HTMLButtonElement>(
        document.getElementById("widget-documentation-btn")
      );
      widgetPreviewButton.addEventListener("click", () => {
        openDocumentationPreviewModal(
          widgetTree?.origin || widgetTree?.widgetId
        );
      });

      const prieviewCloseButtonList = appElement.querySelectorAll(
        ".document-preview-close-button"
      );
      prieviewCloseButtonList?.forEach((closeButton: any) => {
        closeButton.addEventListener("click", () => {
          closeModal("widget-documentation-preview-modal");
        });
      });

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

      export async function getWidgetFromId(widgetId: number,
        visitedWidgets: number[] = [],
        token: string = ""){
        const bulkWidget = await BuildWidgetFromId(widgetId);
        const widgetTree = await getWidgetBulkFromId(widgetId,[], bulkWidget);
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
          widgetInfo?.the_widget_origin?.data?.the_origin
        );
        widgetNode.version =
          widgetInfo?.the_widget_version?.data?.the_version;
        widgetNode.clean = widgetInfo?.the_widget_clean?.data?.the_clean;
        widgetNode.timestamp =
          widgetInfo?.the_widget_timestamp?.data?.the_timestamp;
        widgetNode.id = output.id;
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
        console.error("error", ex);
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
      state?:any
    ) {
      const newWidget: BuilderStatefulWidget = new BuilderStatefulWidget();
      newWidget.html = tree.html;
      newWidget.widgetType = tree.type;
      newWidget.componentDidMountFunction = tree.before_render;
      newWidget.addEventFunction = tree.after_render;
      newWidget.mountChildWidgetsFunction = tree.mount_child;
      newWidget.widgetState = {...state};
      //newWidget.css = `#${tree.id} { ${tree.css} }`;
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
                    newWidget.widgetState
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


    /**
 * 
 * @param tree Widget tree from getWidgetFromId(widgetId);
 * @param parentElement this is the dom element on which we want to add our widget
 * @returns the widgetree with widgets attached inside of it.
 * Also this will add the tree to the dom.
 */
export async function convertWidgetTreeToWidgetWithWrapper(tree: WidgetTree, parentElement:HTMLElement, isMain:boolean = true, state?:object, isInDevelopment?: boolean){
  let newWidget: BuilderStatefulWidget = new BuilderStatefulWidget();
  newWidget.html = tree.html;
  newWidget.widgetState = {...state};
  newWidget.widgetType = tree.type;
  newWidget.componentDidMountFunction = tree.before_render;
  newWidget.addEventFunction = tree.after_render;
  newWidget.mountChildWidgetsFunction = tree.mount_child;
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
                          const childWidget =  await convertWidgetTreeToWidgetWithWrapper(clearedChildWidget, widgetElement, isMain, newWidget.widgetState, isInDevelopment);
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

    "the_documentation_auth_type",
    "the_documentation_bearer_token",
    "the_documentation_method",
    "the_documentation_method_url",
    "the_documentation_username",
    "the_documentation_password",
    "the_documentation_s_json_list",

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
    console.log("widget documentation preview data ->", data);

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

          // function type
          const docLanguage =
            docData?.the_documentation_language?.data?.the_language;
          const docReturn = docData?.the_documentation_return?.data?.the_return;
          const docCodeEditor =
            docData?.the_documentation_code_editor?.data?.the_code_editor;

          // image and links type
          const docLinkURL = docData?.the_documentation_s_doc_url;
          const docImageURL = docData?.the_documentation_s_image_url;

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
            };
          } else if (docType === "function") {
            finalDocumentationData = {
              ...finalDocumentationData,
              language: docLanguage,
              return: docReturn,
              codeEditor: docCodeEditor,
            };
          } else if (docType === "imgAndLink") {
            const imageURLs: string[] = [];
            const linkURLs: string[] = [];
            if (docImageURL?.length) {
              docImageURL?.forEach((imgItem: any) => {
                imageURLs.push(imgItem?.data?.the_image_url);
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
            };
          }
          return finalDocumentationData;
        }
      );
      widgetDocumentData = documentationDataList;
    }

    await openModal("widget-documentation-preview-modal");
    showWidgetDocumentation(widgetDocumentData);
  });
  
}

export function showWidgetDocumentation(widgetDocumentData: any) {
  const previewContainer = <HTMLDivElement>(
    document.getElementById("documentation-preview")
  );

  previewContainer.innerHTML = ''

  if (widgetDocumentData.length && typeof widgetDocumentData !== "string") {

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
      if (widgetDoc.type === "blank") {
        extraDocElement.innerHTML = `
          <p class="documentation-creator">- added by: <span>${widgetDoc?.creatorEmail}</span></p>
        `;
      } else if (widgetDoc.type === "api") {
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
        }
        const docJSONList = widgetDoc.json
          .map((jsonItem: any) => {
            return `${jsonItem?.key}: ${jsonItem?.value}`;
          })
          .join(", ");

        extraDocElement.innerHTML = `
          <div class="pv-3">
            <h6>Method Type: <code>${widgetDoc?.method.toUpperCase()}</code></h6>
            <h6>Endpoint: <code>${widgetDoc?.methodURL}</code></h6>
          </div>
          <div class="pv-3">
            <h6>Auth Type: <code>${widgetDoc?.authType.toUpperCase()}</code></h6>
            ${authTypeData}
          </div>
          <div class="pv-3">
            <h6>JSON</h6>
            <code class="pre-wrapper">
<pre>{
  ${docJSONList}
}
</pre>
            </code>
          </div>
          <p class="documentation-creator">- added by: <span>${widgetDoc?.creatorEmail}</span></p>
        `;
      } else if (widgetDoc.type === "function") {
        extraDocElement.innerHTML = `
          <div class="mv-3">
            <h6>Parameter</h6>
            <p>Language: ${widgetDoc?.language}</p>
            <code class="pre-wrapper"><pre>${widgetDoc?.codeEditor}</pre></code>
            <h6>Returns</h6>
            <code class="pre-wrapper"><pre>${widgetDoc?.return}</pre></code>
          </div>
          <p class="documentation-creator">- added by: <span>${widgetDoc?.creatorEmail}</span></p>
        `;
      } else if (widgetDoc.type === "imgAndLink") {
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
        extraDocElement.innerHTML = `
          <div class="mv-3">
            ${webURLsEl}
            ${imageURLsEl}
          </div>
          <p class="documentation-creator">- added by: <span>${widgetDoc?.creatorEmail}</span></p>
        `;
      }
      previewContainer?.appendChild(extraDocElement);
    });


  } else {
    previewContainer.innerHTML = widgetDocumentData
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
