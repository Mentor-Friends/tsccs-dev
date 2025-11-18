import postcss from "postcss";
import nested from "postcss-nested";

/**
 * Normalizes CSS by processing nested selectors into flat CSS.
 *
 * Uses PostCSS with postcss-nested to convert nested CSS syntax
 * into standard flat CSS rules.
 *
 * @param cssString - CSS string with nested selectors
 * @returns Promise resolving to normalized CSS string or null on error
 */
export async function normalizeCSS(cssString: string) {
  try {
    const result = await postcss([nested()]).process(cssString, {
      from: undefined,
    });
    return result.css;
  } catch (error) {
    console.error("Error processing CSS:", error);
    return null;
  }
}
