import { c as create_ssr_component } from "../../chunks/index-5b047f55.js";
import { marked } from "marked";
import Prism from "prismjs";
var source = `# Contributing

https://github.com/leveluptuts/gQuery

### About This Repo

This repo is in three major parts.

- ViteJS Plugin - ./codegen/plugin.ts
- GraphQL Codegen Plugin - ./codegen/codegen.ts
- gFetch - Class for fetching - ./src/index.ts

#### ViteJS Plugin

Tells graphQL codegen to generate and how to clean old .gq files.

#### GraphQL Codegen Plugin

Determines what is generated in .gq files

#### gFetch

Is a simple fetch call that accepts GraphQL documents. This is just a fetch call, with some structure to the output.

---

### How to work on

Create a branch and submit a PR for any changes. We're open to lots of ideas and extra hands on the code. If there is a missing feature or something broken for you, we'd love to have you help fix it.

To modify the ViteJS Plugin or GraphQL Codegen Plugin run "pnpm dev:codegen"

To modify gFetch run "pnpm dev"

---

### Roadmap

- Clean up repo

  - Better CI/CD tools
    - Auto Release and Versioning

  * package.json exports cleaned up
  * move codegen build files out of codegen folder
  * Better organization

* Subscriptions

  - We don't use subscriptions, so I'm not sure what the process is. This is an open opportunity

  * Will need modifications to the GraphQL Codegen Plugin, and gFetch

* Tests

  - We don't have any and tbh I'm not sure what to test here or how,

* Update Cache from Mutation

* Better / smarter caching
`;
const Contributing = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  marked.setOptions({
    highlight: (code, lang) => {
      if (Prism.languages[lang])
        return Prism.highlight(code, Prism.languages[lang || "markup"], lang);
      return code;
    }
  });
  return `<div class="${"markdown-render"}"><!-- HTML_TAG_START -->${marked(source)}<!-- HTML_TAG_END --></div>`;
});
export { Contributing as default };
