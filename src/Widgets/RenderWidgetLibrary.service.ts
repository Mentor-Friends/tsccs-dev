import { TLibrary } from "../DataStructures/TypeLibrary";
import { WidgetTree } from "./WidgetTree";

export function initializeLibraries(widgetTree: WidgetTree): void {
  console.log("initializeLibraries widgetTree ->", widgetTree);
  // CSS library
  // const list = <HTMLUListElement>document.getElementById('sortable-list');
  // list.innerHTML = ""
  // const addButton = document.getElementById('add-list');

  // if (!list || !addButton) {
  //   console.error('Required elements not found');
  //   return;
  // }

  if (widgetTree?.library?.css?.length) {
    listCSSLibraries(widgetTree);
  } else {
    // Add initial list item
    // list.appendChild(createListItem(widgetTree));
  }

  // Initialize drag and drop
  // initCSSDragAndDrop(widgetTree);

  // Add button click handler
  // addButton.addEventListener('click', (e: Event) => {
  //   e.preventDefault()
  //   list.appendChild(createListItem());
  // });

  // JS library
  // const jsList = <HTMLUListElement>document.getElementById('sortable-js-list');
  // jsList.innerHTML = "";
  // const addJSButton = document.getElementById('add-js-list');

  // if (!jsList || !addJSButton) {
  //   console.error('Required elements not found');
  //   return;
  // }

  if (widgetTree?.library?.js?.length) {
    listJSLibraries(widgetTree);
  } else {
    // Add initial list item
    // jsList.appendChild(createJSListItem(widgetTree));
  }

  // Initialize drag and drop
  // initJSDragAndDrop(widgetTree);

  // Add button click handler
  // addJSButton.addEventListener('click', (e: Event) => {
  //   e.preventDefault()
  //   jsList.appendChild(createJSListItem());
  // });

  return;
}

/**
 *
 * @returns
 */
function listCSSLibraries(widgetTree: WidgetTree) {
  const cssLibraries = widgetTree?.library?.css;
  // const list = <HTMLUListElement>document.getElementById('sortable-list');
  // list.innerHTML = ""
  const cssClassName = `vde-css-${
    widgetTree?.origin ? widgetTree?.origin : widgetTree?.widgetId
  }`;

  removeCSSLibrariesFromHead(cssClassName);

  if (cssLibraries?.length) {
    cssLibraries?.sort(
      (a: TLibrary, b: TLibrary) => Number(a?.order) - Number(b?.order)
    );
  }

  cssLibraries?.forEach((cssLibrary: TLibrary) => {
    // const li = document.createElement("li");
    // li.className = "list-item";
    // li.draggable = true;

    // const dragHandle = document.createElement("span");
    // dragHandle.className = "material-symbols-outlined";
    // dragHandle.innerText = "drag_handle";

    // const input = document.createElement("input");
    // input.type = "text";
    // input.value = cssLibrary.url;

    // input.addEventListener("change", (e) => {
    //   updateCSSLibrary(e);
    // });

    // const removeButton = document.createElement("button");
    // removeButton.className = "remove-button";
    // removeButton.innerHTML =
    //   '<span class="material-symbols-outlined">delete</span>';
    // removeButton.onclick = function (e) {
    //   li.remove();
    //   removeCSSLibrariesFromHead();
    //   updateCSSLibrary(e);
    //   listCSSLibraries(widgetTree);
    // };

    // li.appendChild(dragHandle);
    // li.appendChild(input);
    // li.appendChild(removeButton);
    // list?.appendChild(li)

    const cssLinkForHead = document.createElement("link");
    // cssLinkForHead.classList.add("vde-css");
    cssLinkForHead.classList.add(cssClassName);
    cssLinkForHead.setAttribute("rel", "stylesheet");
    cssLinkForHead.setAttribute("href", cssLibrary.url);
    document.head.appendChild(cssLinkForHead);

    // return li;
  });
  return;
}

/**
 *
 * @returns CSS list
 */
// function createListItem(widgetTree: WidgetTree): HTMLLIElement {
//   const li = document.createElement("li");
//   li.className = "list-item";
//   li.draggable = true;

//   // const dragHandle = document.createElement('i');
//   // dragHandle.className = 'fas fa-grip-vertical drag-handle';
//   const dragHandle = document.createElement("span");
//   dragHandle.className = "material-symbols-outlined";
//   dragHandle.innerText = "drag_handle";

//   const input = document.createElement("input");
//   input.type = "text";
//   input.placeholder = "Enter CSS URL";

//   // input.onchange = (e) => updateCSSLibrary(e)
//   input.addEventListener("change", (e) => {
//     updateCSSLibrary(e);
//   });

//   const removeButton = document.createElement("button");
//   removeButton.className = "remove-button";
//   // removeButton.innerHTML = '<i class="fas fa-times"></i>';
//   removeButton.innerHTML =
//     '<span class="material-symbols-outlined">delete</span>';
//   removeButton.onclick = function (e) {
//     li.remove();
//     removeCSSLibrariesFromHead();
//     updateCSSLibrary(e);
//     listCSSLibraries(widgetTree);
//   };

//   li.appendChild(dragHandle);
//   li.appendChild(input);
//   li.appendChild(removeButton);

//   return li;
// }

/**
 *
 * @returns
 */
// function initCSSDragAndDrop(widgetTree: WidgetTree): void {
//   const list = document.getElementById("sortable-list");
//   if (!list) return;

//   let draggedItem: HTMLElement | null = null;

//   list.addEventListener("dragstart", (e) => {
//     if (e.target instanceof HTMLElement) {
//       draggedItem = e.target;
//       e.target.classList.add("dragging");
//     }
//   });

//   list.addEventListener("dragend", (e) => {
//     if (e.target instanceof HTMLElement) {
//       e.target.classList.remove("dragging");

//       removeCSSLibrariesFromHead();
//       updateCSSLibrary(e);
//       listCSSLibraries(widgetTree);
//     }
//   });

//   list.addEventListener("dragover", (e) => {
//     e.preventDefault();
//     if (!draggedItem) return;

//     const afterElement = getDragAfterElement(list, e.clientY);
//     const currentItem = draggedItem;

//     if (afterElement === null) {
//       list.appendChild(currentItem);
//     } else {
//       list.insertBefore(currentItem, afterElement);
//     }
//   });
// }

/**
 *
 * @returns
 */
function listJSLibraries(widgetTree: WidgetTree) {
  const jsLibraries = widgetTree?.library?.js;
  // const list = <HTMLUListElement>document.getElementById('sortable-js-list');
  // list.innerHTML = ""
  const jsClassName = `vde-js-${
    widgetTree?.origin ? widgetTree?.origin : widgetTree?.widgetId
  }`;

  removeJSLibrariesFromHead(jsClassName);

  // if (jsLibraries?.length) {
  //   jsLibraries?.sort((a: TLibrary, b: TLibrary) => Number(a?.order) - Number(b?.order))
  // }

  jsLibraries?.forEach((jsLibrary: TLibrary) => {
    // const li = document.createElement("li");
    // li.className = "list-item";
    // li.draggable = true;

    // const dragHandle = document.createElement("span");
    // dragHandle.className = "material-symbols-outlined";
    // dragHandle.innerText = "drag_handle";

    // const input = document.createElement("input");
    // input.type = "text";
    // input.value = jsLibrary?.url;

    // input.addEventListener("change", (e) => {
    //   updateJSLibrary(e);
    // });

    // const removeButton = document.createElement("button");
    // removeButton.className = "remove-button";
    // removeButton.innerHTML =
    //   '<span class="material-symbols-outlined">delete</span>';
    // removeButton.onclick = function (e) {
    //   li.remove();
    //   removeJSLibrariesFromHead();
    //   updateJSLibrary(e);
    //   listJSLibraries(widgetTree);
    // };

    // li.appendChild(dragHandle);
    // li.appendChild(input);
    // li.appendChild(removeButton);

    // list?.appendChild(li)

    const jsLinkForHead = document.createElement("script");
    // jsLinkForHead.classList.add("vde-js");
    // jsLinkForHead.classList.add("vde-js");
    jsLinkForHead.classList.add(jsClassName);
    jsLinkForHead.setAttribute("type", "text/javascript");
    jsLinkForHead.setAttribute("src", jsLibrary.url);
    document.body.appendChild(jsLinkForHead);

    // return li;
  });

  return;
}

/**
 *
 * @returns js list
 */
// function createJSListItem(widgetTree: WidgetTree): HTMLLIElement {
//   const li = document.createElement("li");
//   li.className = "list-item";
//   li.draggable = true;

//   // const dragHandle = document.createElement('i');
//   // dragHandle.className = 'fas fa-grip-vertical drag-handle';
//   const dragHandle = document.createElement("span");
//   dragHandle.className = "material-symbols-outlined";
//   dragHandle.innerText = "drag_handle";

//   const input = document.createElement("input");
//   input.type = "text";
//   input.placeholder = "Enter JS URL";

//   // input.onchange = (e) => updateCSSLibrary(e)
//   input.addEventListener("change", (e) => {
//     updateJSLibrary(e);
//   });

//   const removeButton = document.createElement("button");
//   removeButton.className = "remove-button";
//   // removeButton.innerHTML = '<i class="fas fa-times"></i>';
//   removeButton.innerHTML =
//     '<span class="material-symbols-outlined">delete</span>';
//   removeButton.onclick = function (e) {
//     li.remove();
//     removeJSLibrariesFromHead();
//     updateJSLibrary(e);
//     listJSLibraries(widgetTree);
//   };

//   li.appendChild(dragHandle);
//   li.appendChild(input);
//   li.appendChild(removeButton);

//   return li;
// }

/**
 *
 * @returns
 */
// function initJSDragAndDrop(widgetTree: WidgetTree): void {
//   const list = document.getElementById("sortable-js-list");
//   if (!list) return;

//   let draggedItem: HTMLElement | null = null;

//   list.addEventListener("dragstart", (e) => {
//     if (e.target instanceof HTMLElement) {
//       draggedItem = e.target;
//       e.target.classList.add("dragging");
//     }
//   });

//   list.addEventListener("dragend", (e) => {
//     if (e.target instanceof HTMLElement) {
//       e.target.classList.remove("dragging");

//       removeJSLibrariesFromHead();
//       updateJSLibrary(e);
//       listJSLibraries(widgetTree);
//     }
//   });

//   list.addEventListener("dragover", (e) => {
//     e.preventDefault();
//     if (!draggedItem) return;

//     const afterElement = getJSDragAfterElement(list, e.clientY);
//     const currentItem = draggedItem;

//     if (afterElement === null) {
//       list.appendChild(currentItem);
//     } else {
//       list.insertBefore(currentItem, afterElement);
//     }
//   });
// }

/**
 *
 * @returns
 */
export function removeCSSLibrariesFromHead(cssClassName: string) {
  // const cssLibraryIncludedEl = document.querySelectorAll("link.vde-css");
  const queryParam = `link.${cssClassName}`;
  console.log("css queryParam ->", queryParam);
  // const cssLibraryIncludedEl = document.querySelectorAll(
  //   `link.${cssClassName}`
  // );
  const cssLibraryIncludedEl = document.querySelectorAll(queryParam);
  console.log("cssLibraryIncludedEl ->", cssLibraryIncludedEl);
  if (cssLibraryIncludedEl?.length) {
    cssLibraryIncludedEl?.forEach((item: any) => {
      item.remove();
    });
  }
  return;
}

/**
 *
 * @returns
 */
export function removeJSLibrariesFromHead(jsClassName: string) {
  // const jsLibraryIncludedEl = document.querySelectorAll("script.vde-js");
  const queryParam = `script.${jsClassName}`;
  console.log("js queryParam ->", queryParam);
  const jsLibraryIncludedEl = document.querySelectorAll(queryParam);
  console.log("jsLibraryIncludedEl ->", jsLibraryIncludedEl);
  if (jsLibraryIncludedEl?.length) {
    jsLibraryIncludedEl?.forEach((item: any) => {
      item.remove();
    });
  }
  return;
}

/**
 *
 * @param event
 */
// export function updateCSSLibrary(event: Event): void {
//   const target = event.target as HTMLInputElement;
//   const cssLibraryLink = target.value;
//   console.log("cssLibraryLink", cssLibraryLink);

//   const cssLibraryIncludedEl = document.querySelectorAll("link.vde-css");
//   const cssLibraryULEl = document.getElementById("sortable-list");
//   const cssLibraryListEl =
//     cssLibraryULEl?.querySelectorAll("li.list-item input");
//   const cssLibraryList: any = [];

//   if (cssLibraryListEl?.length) {
//     cssLibraryListEl.forEach((inputEl: any, index: number) => {
//       const cssLibraryLink = inputEl.value;
//       const cssLinkForHead = document.createElement("link");
//       cssLinkForHead.classList.add("vde-css");
//       cssLinkForHead.setAttribute("rel", "stylesheet");
//       cssLinkForHead.setAttribute("href", cssLibraryLink);
//       document.head.appendChild(cssLinkForHead);
//       cssLibraryList.push({ order: index, url: inputEl.value });
//     });
//   }

//   if (cssLibraryIncludedEl?.length) {
//     cssLibraryIncludedEl?.forEach((item: any) => {
//       item.remove();
//     });
//   }

//   // StaticWidgetClass.selectedStaticWidgetTreeInfo.widgetTree["library"]["css"] = cssLibraryList
//   // StaticHistoryClass.updateActionHistories()
//   return;
// }

// /**
//  *
//  * @param container
//  * @param y
//  * @returns
//  */
// function getDragAfterElement(container: any, y: number) {
//   const draggableElements = [
//     ...container.querySelectorAll(".list-item:not(.dragging)"),
//   ];

//   return draggableElements.reduce(
//     (closest, child) => {
//       const box = child.getBoundingClientRect();
//       const offset = y - box.top - box.height / 2;

//       if (offset < 0 && offset > closest.offset) {
//         return { offset: offset, element: child };
//       } else {
//         return closest;
//       }
//     },
//     { offset: Number.NEGATIVE_INFINITY }
//   ).element;
// }

/**
 *
 * @param event
 */
// export function updateJSLibrary(event: Event): void {
//   const target = event.target as HTMLInputElement;
//   const jsLibraryLink = target.value;
//   console.log("jsLibraryLink", jsLibraryLink);

//   const jsLibraryIncludedEl = document.querySelectorAll("script.vde-js");
//   const jsLibraryULEl = document.getElementById("sortable-js-list");
//   const jsLibraryListEl = jsLibraryULEl?.querySelectorAll("li.list-item input");
//   const jsLibraryList: any = [];

//   if (jsLibraryListEl?.length) {
//     jsLibraryListEl.forEach((inputEl: any, index: number) => {
//       const jsLibraryLink = inputEl.value;
//       const jsLinkForHead = document.createElement("script");
//       jsLinkForHead.classList.add("vde-js");
//       jsLinkForHead.setAttribute("type", "text/javascript");
//       jsLinkForHead.setAttribute("src", jsLibraryLink);
//       document.body.appendChild(jsLinkForHead);
//       jsLibraryList.push({ order: index, url: inputEl.value });
//     });
//   }

//   if (jsLibraryIncludedEl?.length) {
//     jsLibraryIncludedEl?.forEach((item: any) => {
//       item.remove();
//     });
//   }

//   // StaticWidgetClass.selectedStaticWidgetTreeInfo.widgetTree.library.js = jsLibraryList
//   // StaticHistoryClass.updateActionHistories()
//   return;
// }

/**
 *
 * @param container
 * @param y
 * @returns
 */
// function getJSDragAfterElement(container: any, y: number) {
//   const draggableElements = [
//     ...container.querySelectorAll(".list-item:not(.dragging)"),
//   ];

//   return draggableElements.reduce(
//     (closest, child) => {
//       const box = child.getBoundingClientRect();
//       const offset = y - box.top - box.height / 2;

//       if (offset < 0 && offset > closest.offset) {
//         return { offset: offset, element: child };
//       } else {
//         return closest;
//       }
//     },
//     { offset: Number.NEGATIVE_INFINITY }
//   ).element;
// }
