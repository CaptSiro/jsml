import jsml, { _ } from "./src/jsml.js";
const { div, h4, button, span } = jsml;



const html = (
    div(_, [
        h4({ class: "title" }, "My poggers title"),
        button({ onClick: console.log }, "Click me :)"),
        span(_, "Nothing bad will happen :))))")
    ])
);



document.querySelector(".root")
    .append(html);