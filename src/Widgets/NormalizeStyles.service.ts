import postcss from "postcss";
import nested from "postcss-nested";

// Function to process CSS string
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
