# jsml

Yet another front end library

## Installation

I guess you can clone the repo and extract files from `src` directory into like `lib` directory in your project?
Idk, you do you :)

## Usage

```typescript
import jsml, { _ } from "path/to/jsml";
```

`_` (underscore) is just alias for undefined. 

1. Deconstruct html elements from `jsml` object

    ```typescript
    const { div, h4, button } = jsml;
    
    const html = (
        div(_, [
            h4({ class: "my-title" }, "My title"),
            button({ onClick: () => console.log("clicked") }, "Click me")
        ])
    );
    ```

2. Use `jsml` as a normal object

    ```typescript
    const html = (
        jsml.div(_, [
            jsml.h4({ class: "my-title" }, "My title"),
            jsml.button({ onClick: () => console.log("clicked") }, "Click me")
        ])
    );
    ```
   
Passed props (first argument) use camel case that is converted to kebab case.
If the name of given property starts with `on` it is treated as event handler.
Event handler does not need to follow any naming conventions: `onPOINTERDown` is valid.
