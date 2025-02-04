import { BuilderStatefulWidget, BuildWidgetFromId, Concept, GetRelation, SearchLinkMultipleAll, SearchQuery, WidgetTree } from "../app";
import { GetWidgetForTree } from "./WidgetBuild";

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
      const widgets = await GetRelation(widgetId, "the_widget_latest");
      if (widgets?.length == 0)
        await renderWidget(widgetId, attachNode, props);
      else {
        const latestWidgetId = widgets?.[0]?.id;
        if (latestWidgetId)
          await renderWidget(latestWidgetId, attachNode, props);
      }
    }
  
    export async function renderWidget(widgetId: number, attachNode: HTMLElement, props?: any) {
      try {
        const bulkWidget = await BuildWidgetFromId(widgetId);
        console.log("this is the bulk widget", bulkWidget);
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
        console.log("this is the tree newWidget", widgetTree);
        // add newWidget css to the page
        const style = document.createElement("style");
        style.innerHTML = widgetTree.css + newWidget.css;
        appElement.appendChild(style);
        // add newWidget js to the page
        const script = document.createElement("script");
        script.innerHTML = widgetTree.js;
        appElement.appendChild(script);
  
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
      } catch (error) {
        console.error("Error Caught Rendering Widget");
      }
    }

      export async function getWidgetFromId(widgetId: number,
        visitedWidgets: number[] = [],
        token: string = ""){
        const bulkWidget = await BuildWidgetFromId(widgetId);
        console.log("this is the bulk widget", bulkWidget);
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
        console.log("this is the output", output);
        //const output: any = await getWidgetCodeFromId(widgetId, token);
        visitedWidgets.push(widgetId);
  
        const widgetInfo = output?.data?.the_widget;
        widgetNode.name = widgetInfo?.the_widget_name?.data?.the_name;

        widgetNode.html = widgetInfo?.the_widget_html?.data?.the_html;
        widgetNode.css = widgetInfo?.the_widget_css?.data?.the_css;
        widgetNode.js = widgetInfo?.the_widget_js?.data?.the_js;
        widgetNode.origin = Number(
          widgetInfo?.the_widget_origin?.data?.the_originid
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
        console.log("widget info", widgetNode);

        // if there are children present in the widget then convert the children to widget and put it inside of the tree.
        if (childWidgets?.length) {
          for (let i = 0; i < childWidgets.length; i++) {
            const childWidgetId =
              childWidgets[i]?.data.the_child_widget?.the_child_widget_info
                ?.id ||
              childWidgets[i]?.data.the_child_widget?.the_child_widget_parent
                ?.data?.the_parent;
                console.log("this is the child Widget", childWidgetId);
            const childWidget: WidgetTree = await getWidgetBulkFromId(
              childWidgetId,
              visitedWidgets,
              bulkWidget,
              token
            );
            console.log("this is the child Widget", childWidget);
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
                    console.log("This is the data change in child", value);
                    const type = value?.type?.characterValue;
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
      console.log("newWidget ->", newWidget);
  
      // Unwrap specific containers
      await unwrapContainers(parentElement, ".mftsccs-marking-element");
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
export async function convertWidgetTreeToWidgetWithWrapper(tree: WidgetTree, parentElement:HTMLElement, isMain:boolean = true, state?:object){
  let newWidget: BuilderStatefulWidget = new BuilderStatefulWidget();
  newWidget.html = tree.html;
  newWidget.widgetState = {...state};
  newWidget.widgetType = tree.type;
  newWidget.componentDidMountFunction = tree.before_render;
  newWidget.addEventFunction = tree.after_render;
  newWidget.mountChildWidgetsFunction = tree.mount_child;
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
                          const childWidget =  await convertWidgetTreeToWidget(clearedChildWidget, widgetElement, isMain, newWidget.widgetState);
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
  console.log("newWidget ->", newWidget);
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
  