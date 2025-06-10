import { COMPOSITIONS } from "../Constants/page.const";

/**
 *
 * @param pageData
 */
export async function applyPageProperties(pageData: any) {
  const properties = [
    {
      key: "meta_title",
      value:
        pageData?.[`the_${COMPOSITIONS.PAGE_COMP_NAME}_meta_title`]?.data
          ?.the_meta_title,
    },
    {
      key: "meta_description",
      value:
        pageData?.[`the_${COMPOSITIONS.PAGE_COMP_NAME}_meta_description`]?.data
          ?.the_meta_description,
    },
    {
      key: "meta_keywords",
      value:
        pageData?.[`the_${COMPOSITIONS.PAGE_COMP_NAME}_meta_keywords`]?.data
          ?.the_meta_keywords,
    },
    {
      key: "width",
      value:
        pageData?.[`the_${COMPOSITIONS.PAGE_COMP_NAME}_width`]?.data?.the_width,
    },
    {
      key: "font_size",
      value:
        pageData?.[`the_${COMPOSITIONS.PAGE_COMP_NAME}_font_size`]?.data
          ?.the_font_size,
    },
    {
      key: "font_family",
      value:
        pageData?.[`the_${COMPOSITIONS.PAGE_COMP_NAME}_font_family`]?.data
          ?.the_font_family,
    },
    {
      key: "type",
      value:
        pageData?.[`the_${COMPOSITIONS.PAGE_COMP_NAME}_type`]?.data?.the_type,
    },
  ];
  properties.forEach((prop) => {
    if (prop.value) {
      applyPageProperty(prop.key, prop.value);
    }
  });
}

/**
 *
 * @param property
 * @param value
 * @returns
 */
export async function applyPageProperty(property: string, value: any) {
  const scopedStyleEl =
    document.getElementById("fspage-properties") || createScopedStyle();
  let cssRule = "";
  switch (property) {
    case "width":
      removeOldCssRule(`.fspage { width: [^;]+ !important; }`);
      cssRule = value ? `.fspage { width: ${value} !important; }` : "";
      break;
    case "font_size":
      removeOldCssRule(`.fspage { font-size: [^;]+; }`);
      cssRule = value ? `.fspage { font-size: ${value}px; }` : "";
      break;
    case "font_family":
      removeOldCssRule(`.fspage { font-family: [^;]+; }`);
      cssRule = value ? `.fspage { font-family: ${value}; }` : "";
      break;
    case "type":
      removeOldCssRule(`.fspage { width: 1200px; margin: 0 auto; }`);
      removeOldCssRule(`.fspage { width: 100%; padding: 0; }`);
      if (value === "fixed") {
        cssRule = `.fspage { width: 1200px; margin: 0 auto; }`;
      } else if (value === "fluid") {
        cssRule = `.fspage { width: 100%; padding: 0; }`;
      } else cssRule = "";
      break;
    case "meta_title":
      document.title = value;
      break;
    case "meta_keywords":
      updateMetaTag(property.replace("meta_", ""), value);
      break;
    case "meta_description":
      updateMetaTag(property.replace("meta_", ""), value);
      return;
  }
  scopedStyleEl.textContent += cssRule;
}

/**
 *
 * @param property
 * @returns
 */
function removeOldCssRule(property: string) {
  const scopedStyleEl = document.getElementById("fspage-properties");
  if (!scopedStyleEl) return;
  let css = scopedStyleEl?.textContent;
  css = css ? css.replace(new RegExp(property, "g"), "") : "";
  scopedStyleEl.textContent = css;
}

/**
 *
 * @returns
 */
function createScopedStyle() {
  const style = document.createElement("style");
  style.id = "fspage-properties";
  document.head.appendChild(style);
  return style;
}

/**
 *
 * @param name
 * @param content
 */
function updateMetaTag(name: string, content: string) {
  let metaTag = document.querySelector(`meta[name="${name}"]`);
  if (!metaTag) {
    metaTag = document.createElement("meta");
    metaTag.setAttribute("name", name);
    document.head.appendChild(metaTag);
  }
  metaTag.setAttribute("content", content);
}
