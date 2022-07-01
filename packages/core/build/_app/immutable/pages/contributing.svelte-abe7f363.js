import{S as u,i as c,s as d,e as l,c as g,a as p,d as r,b as m,g as f,n as s}from"../chunks/index-824779f0.js";import{m as h,P as a}from"../chunks/prism-5a0c904a.js";var v=`# Contributing

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
`;function C(i){let n,e=h(v)+"";return{c(){n=l("div"),this.h()},l(t){n=g(t,"DIV",{class:!0});var o=p(n);o.forEach(r),this.h()},h(){m(n,"class","markdown-render")},m(t,o){f(t,n,o),n.innerHTML=e},p:s,i:s,o:s,d(t){t&&r(n)}}}function b(i){return h.setOptions({highlight:(n,e)=>a.languages[e]?a.highlight(n,a.languages[e||"markup"],e):n}),[]}class y extends u{constructor(n){super(),c(this,n,b,C,d,{})}}export{y as default};
