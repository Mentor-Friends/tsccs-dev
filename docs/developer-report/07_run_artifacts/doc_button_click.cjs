// Drives a real click (dispatchEvent) on the SVG icon inside the widget
// documentation button, using the exact handler shapes from RenderWidgetService.ts.
// Needs jsdom (install it in a scratch folder, set NODE_PATH to its node_modules).
const { JSDOM } = require("jsdom");
const dom = new JSDOM(`<div id="app"><button class="widget-documentation-btn" widget-id="4242"><svg><path d="M0 0"/></svg></button></div>`);
const { document, MouseEvent } = dom.window;
const btn = document.querySelector(".widget-documentation-btn");
const icon = document.querySelector("path");
const seen = {};
// OLD handler: event.target
btn.addEventListener("click", (event) => { seen.old = event?.target?.getAttribute("widget-id"); });
// NEW handler: the button the listener is bound to
btn.addEventListener("click", () => { seen.fixed = btn.getAttribute("widget-id"); });
icon.dispatchEvent(new MouseEvent("click", { bubbles: true }));
console.log(`click on icon -> old handler widgetId=${seen.old} | fixed handler widgetId=${seen.fixed}`);
process.exitCode = seen.fixed === "4242" && seen.old !== "4242" ? 0 : 1;
