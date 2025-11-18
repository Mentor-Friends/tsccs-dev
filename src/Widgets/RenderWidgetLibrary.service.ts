import { CreateConnectionBetweenEntityLocal } from "../app";
import { TLibrary } from "../DataStructures/TypeLibrary";
import { WidgetTree } from "./WidgetTree";

/**
 * Initializes and loads external CSS and JS libraries for a widget.
 *
 * Processes widget library dependencies and injects them into the document
 * in the correct order.
 *
 * @param widgetTree - The widget tree containing library definitions
 */
export async function initializeLibraries(widgetTree: WidgetTree) {
  if (widgetTree?.library?.css?.length) {
    listCSSLibraries(widgetTree);
  }

  if (widgetTree?.library?.js?.length) {
    await listJSLibraries(widgetTree);
  }

  return;
}

/**
 * Loads CSS library dependencies for a widget into document head.
 *
 * @param widgetTree - The widget tree containing CSS libraries
 */
function listCSSLibraries(widgetTree: WidgetTree) {
  const cssLibraries = widgetTree?.library?.css;
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
    const cssLinkForHead = document.createElement("link");
    cssLinkForHead.classList.add(cssClassName);
    cssLinkForHead.setAttribute("rel", "stylesheet");
    cssLinkForHead.setAttribute("href", cssLibrary.url);
    document.head.appendChild(cssLinkForHead);
  });
  return;
}

/**
 * Loads JavaScript library dependencies for a widget sequentially.
 *
 * Ensures libraries load in order and waits for each to complete before
 * loading the next. Handles errors and prevents duplicate loads.
 *
 * @param widgetTree - The widget tree containing JS libraries
 */
// function listJSLibraries(widgetTree: WidgetTree) {
//   const jsLibraries = widgetTree?.library?.js;
//   const jsClassName = `vde-js-${
//     widgetTree?.origin ? widgetTree?.origin : widgetTree?.widgetId
//   }`;

//   removeJSLibrariesFromHead(jsClassName);

//   if (jsLibraries?.length) {
//     jsLibraries?.sort(
//       (a: TLibrary, b: TLibrary) => Number(a?.order) - Number(b?.order)
//     );
//   }

//   jsLibraries?.forEach((jsLibrary: TLibrary) => {
//     const jsLinkForHead = document.createElement("script");
//     jsLinkForHead.classList.add(jsClassName);
//     jsLinkForHead.setAttribute("type", "text/javascript");
//     jsLinkForHead.setAttribute("src", jsLibrary.url);
//     document.body.appendChild(jsLinkForHead);
//   });

//   return;
// }

async function listJSLibraries(widgetTree: WidgetTree) {
  const jsLibraries = widgetTree?.library?.js;
  const jsClassName = `vde-js-${
    widgetTree?.origin ? widgetTree?.origin : widgetTree?.widgetId
  }`;

  // Remove existing libraries first
  removeJSLibrariesFromHead(jsClassName);

  // Early return if no libraries to load
  if (!jsLibraries?.length) return;

  // Sort libraries by order
  jsLibraries.sort(
    (a: TLibrary, b: TLibrary) => Number(a?.order) - Number(b?.order)
  );

  // Load libraries sequentially
  for (const jsLibrary of jsLibraries) {
    // Skip if URL is invalid
    if (!jsLibrary?.url) {
      console.warn("Skipping library with invalid URL:", jsLibrary);
      continue;
    }

    // Check if script is already loaded
    const existingScript = document.querySelector(
      `script[src="${jsLibrary.url}"]`
    );
    if (existingScript) {
      console.log("Library already loaded:", jsLibrary.url);
      continue;
    }

    await new Promise<void>((resolve, reject) => {
      const jsLinkForHead = document.createElement("script");
      jsLinkForHead.classList.add(jsClassName);
      jsLinkForHead.setAttribute("type", "text/javascript");
      jsLinkForHead.setAttribute("src", jsLibrary.url);

      // Add crossorigin attribute for external scripts
      jsLinkForHead.setAttribute("crossorigin", "anonymous");

      // Set up event handlers before appending
      jsLinkForHead.onload = () => {
        // console.log("Successfully loaded:", jsLibrary.url);
        resolve();
      };

      jsLinkForHead.onerror = (error) => {
        console.error("Failed to load script:", jsLibrary.url, error);
        reject(new Error(`Failed to load script: ${jsLibrary.url}`));
      };

      // Append to head instead of body for better practice
      document.head.appendChild(jsLinkForHead);
    });
  }

  console.log("All JavaScript libraries loaded successfully");
}

/**
 * Removes CSS library elements from document head by class name.
 *
 * @param cssClassName - The class name of CSS library elements to remove
 */
export function removeCSSLibrariesFromHead(cssClassName: string) {
  const queryParam = `link.${cssClassName}`;
  const cssLibraryIncludedEl = document.querySelectorAll(queryParam);
  if (cssLibraryIncludedEl?.length) {
    cssLibraryIncludedEl?.forEach((item: any) => {
      item.remove();
    });
  }
  return;
}

/**
 * Removes JavaScript library elements from document head by class name.
 *
 * @param jsClassName - The class name of JS library elements to remove
 */
export function removeJSLibrariesFromHead(jsClassName: string) {
  const queryParam = `script.${jsClassName}`;
  const jsLibraryIncludedEl = document.querySelectorAll(queryParam);
  if (jsLibraryIncludedEl?.length) {
    jsLibraryIncludedEl?.forEach((item: any) => {
      item.remove();
    });
  }
  return;
}
