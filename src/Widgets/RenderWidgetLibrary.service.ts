import { TLibrary } from "../DataStructures/TypeLibrary";
import { WidgetTree } from "./WidgetTree";

export function initializeLibraries(widgetTree: WidgetTree): void {
  if (widgetTree?.library?.css?.length) {
    listCSSLibraries(widgetTree);
  }

  if (widgetTree?.library?.js?.length) {
    listJSLibraries(widgetTree);
  }

  return;
}

/**
 *
 * @param widgetTree
 * @returns
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
 *
 * @param widgetTree
 * @returns
 */
function listJSLibraries(widgetTree: WidgetTree) {
  const jsLibraries = widgetTree?.library?.js;
  const jsClassName = `vde-js-${
    widgetTree?.origin ? widgetTree?.origin : widgetTree?.widgetId
  }`;

  removeJSLibrariesFromHead(jsClassName);

  if (jsLibraries?.length) {
    jsLibraries?.sort(
      (a: TLibrary, b: TLibrary) => Number(a?.order) - Number(b?.order)
    );
  }

  jsLibraries?.forEach((jsLibrary: TLibrary) => {
    const jsLinkForHead = document.createElement("script");
    jsLinkForHead.classList.add(jsClassName);
    jsLinkForHead.setAttribute("type", "text/javascript");
    jsLinkForHead.setAttribute("src", jsLibrary.url);
    document.body.appendChild(jsLinkForHead);
  });

  return;
}

/**
 *
 * @param cssClassName
 * @returns
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
 *
 * @param jsClassName
 * @returns
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
