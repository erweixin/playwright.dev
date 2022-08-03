"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1581],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return a?n.createElement(g,l(l({ref:t},c),{},{components:a})):n.createElement(g,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9679:function(e,t,a){a.r(t),a.d(t,{assets:function(){return k},contentTitle:function(){return d},default:function(){return y},frontMatter:function(){return u},metadata:function(){return g},toc:function(){return h}});var n=a(3905),r=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&c(e,a,t[a]);if(o)for(var a of o(t))p.call(t,a)&&c(e,a,t[a]);return e};const u={id:"testing-library",title:"Migrating from Testing Library"},d=void 0,g={unversionedId:"testing-library",id:"testing-library",title:"Migrating from Testing Library",description:"- Migration principles",source:"@site/docs/testing-library.mdx",sourceDirName:".",slug:"/testing-library",permalink:"/docs/next/testing-library",draft:!1,tags:[],version:"current",frontMatter:{id:"testing-library",title:"Migrating from Testing Library"},sidebar:"docs",previous:{title:"Migrating from Protractor",permalink:"/docs/next/protractor"},next:{title:"Docker",permalink:"/docs/next/docker"}},k={},h=[{value:"Migration principles",id:"migration-principles",level:2},{value:"Cheat Sheet",id:"cheat-sheet",level:2},{value:"Example",id:"example",level:2},{value:"Migrating queries",id:"migrating-queries",level:2},{value:"Replacing <code>waitFor</code>",id:"replacing-waitfor",level:2},{value:"Replacing <code>within</code>",id:"replacing-within",level:2},{value:"Playwright Test Super Powers",id:"playwright-test-super-powers",level:2},{value:"Further Reading",id:"further-reading",level:2}],N={toc:h};function y(e){var t,a=e,{components:r}=a,c=((e,t)=>{var a={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=m(m({},N),c),i(t,l({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#migration-principles"}),"Migration principles")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#cheat-sheet"}),"Cheat Sheet")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#example"}),"Example")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#migrating-queries"}),"Migrating queries")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#replacing-waitfor"}),"Replacing ",(0,n.kt)("inlineCode",{parentName:"a"},"waitFor"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#replacing-within"}),"Replacing ",(0,n.kt)("inlineCode",{parentName:"a"},"within"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#playwright-test-super-powers"}),"Playwright Test Super Powers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#further-reading"}),"Further Reading"))),(0,n.kt)("h2",m({},{id:"migration-principles"}),"Migration principles"),(0,n.kt)("p",null,"This guide describes migration to Playwright's ",(0,n.kt)("a",m({parentName:"p"},{href:"./test-components"}),"Experimental Component Testing")," from ",(0,n.kt)("a",m({parentName:"p"},{href:"https://testing-library.com/docs/dom-testing-library/intro/"}),"DOM Testing Library"),", ",(0,n.kt)("a",m({parentName:"p"},{href:"https://testing-library.com/docs/react-testing-library/intro/"}),"React Testing Library"),", ",(0,n.kt)("a",m({parentName:"p"},{href:"https://testing-library.com/docs/vue-testing-library/intro"}),"Vue Testing Library")," and ",(0,n.kt)("a",m({parentName:"p"},{href:"https://testing-library.com/docs/svelte-testing-library/intro"}),"Svelte Testing Library"),"."),(0,n.kt)("admonition",m({},{type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"If you use DOM Testing Library in the browser (for example, you bundle end-to-end tests with webpack), you can switch directly to Playwright Test. Examples below are focused on component tests, but for end-to-end test you just need to replace ",(0,n.kt)("inlineCode",{parentName:"p"},"await mount")," with ",(0,n.kt)("inlineCode",{parentName:"p"},"await page.goto('http://localhost:3000/')")," to open the page under test.")),(0,n.kt)("h2",m({},{id:"cheat-sheet"}),"Cheat Sheet"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Testing Library"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Playwright"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"https://testing-library.com/docs/queries/about#screen"}),"screen")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"./api/class-page"}),"page")," and ",(0,n.kt)("a",m({parentName:"td"},{href:"./api/class-locator"}),"component"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"https://testing-library.com/docs/queries/about"}),"queries")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"./locators"}),"locators"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"https://testing-library.com/docs/dom-testing-library/api-async"}),"async helpers")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"./test-assertions"}),"assertions"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"https://testing-library.com/docs/user-event/intro"}),"user events")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"./api/class-locator"}),"actions"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"await user.click(screen.getByText('Click me'))")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"await component.locator('text=Click me').click()"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"await user.click(await screen.findByText('Click me'))")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"await component.locator('text=Click me').click()"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"await user.type(screen.getByLabelText('Password'), 'secret')")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"await component.locator('text=Password').fill('secret')"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"expect(screen.getByLabelText('Password')).toHaveValue('secret')")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"await expect(component.locator('text=Password')).toHaveValue('secret')"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"screen.findByText('...')")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"component.locator('text=...')"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"screen.getByTestId('...')")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"component.locator('data-testid=...')"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"screen.queryByPlaceholderText('...')")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"component.locator('[placeholder=\"...\"]')"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"screen.getAllByRole('button', { pressed: true })")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"component.locator('role=button[pressed]')"))))),(0,n.kt)("h2",m({},{id:"example"}),"Example"),(0,n.kt)("p",null,"Testing Library:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-js"}),"import React from 'react';\nimport { render, screen } from '@testing-library/react';\nimport userEvent from '@testing-library/user-event';\n\ntest('should sign in', async () => {\n  // Setup the page.\n  const user = userEvent.setup();\n  render(<SignInPage />);\n\n  // Perform actions.\n  await user.type(screen.getByLabelText('Username'), 'John');\n  await user.type(screen.getByLabelText('Password'), 'secret');\n  await user.click(screen.getByText('Sign in'));\n\n  // Verify signed in state by waiting until \"Welcome\" message appears.\n  await screen.findByText('Welcome, John');\n});\n")),(0,n.kt)("p",null,"Line-by-line migration to Playwright Test:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-js"}),"const { test, expect } = require('@playwright/experimental-ct-react'); // 1\n\ntest('should sign in', async ({ page, mount }) => { // 2\n  // Setup the page.\n  const component = await mount(<SignInPage />); // 3\n\n  // Perform actions.\n  await component.locator('text=Username').fill('John'); // 4\n  await component.locator('text=Password').fill('secret');\n  await component.locator('text=Sign in').click();\n\n  // Verify signed in state by waiting until \"Welcome\" message appears.\n  await expect(component.locator('text=Welcome, John')).toBeVisible(); // 5\n});\n")),(0,n.kt)("p",null,"Migration highlights (see inline comments in the Playwright Test code snippet):"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Import everything from ",(0,n.kt)("inlineCode",{parentName:"li"},"@playwright/experimental-ct-react")," (or -vue, -svelte) for component tests, or from ",(0,n.kt)("inlineCode",{parentName:"li"},"@playwright/test")," for end-to-end tests."),(0,n.kt)("li",{parentName:"ol"},"Test function is given a ",(0,n.kt)("inlineCode",{parentName:"li"},"page")," that is isolated from other tests, and ",(0,n.kt)("inlineCode",{parentName:"li"},"mount")," that renders a component in this page. These are two of the ",(0,n.kt)("a",m({parentName:"li"},{href:"./api/class-fixtures"}),"useful fixtures")," in Playwright Test."),(0,n.kt)("li",{parentName:"ol"},"Replace ",(0,n.kt)("inlineCode",{parentName:"li"},"render")," with ",(0,n.kt)("inlineCode",{parentName:"li"},"mount")," that returns a ",(0,n.kt)("a",m({parentName:"li"},{href:"./locators"}),"component locator"),"."),(0,n.kt)("li",{parentName:"ol"},"Use locators created with ",(0,n.kt)("a",m({parentName:"li"},{href:"/docs/next/api/class-locator#locator-locator"}),"locator.locator(selector[, options])")," or ",(0,n.kt)("a",m({parentName:"li"},{href:"/docs/next/api/class-page#page-locator"}),"page.locator(selector[, options])")," to perform most of the actions."),(0,n.kt)("li",{parentName:"ol"},"Use ",(0,n.kt)("a",m({parentName:"li"},{href:"./test-assertions"}),"assertions")," to verify the state.")),(0,n.kt)("h2",m({},{id:"migrating-queries"}),"Migrating queries"),(0,n.kt)("p",null,"All queries like ",(0,n.kt)("inlineCode",{parentName:"p"},"getBy..."),", ",(0,n.kt)("inlineCode",{parentName:"p"},"findBy..."),", ",(0,n.kt)("inlineCode",{parentName:"p"},"queryBy...")," and their multi-element counterparts are replaced with ",(0,n.kt)("inlineCode",{parentName:"p"},"page.locator('...')"),". Locators always auto-wait and retry when needed, so you don't have to worry about choosing the right method. When you want to do a ",(0,n.kt)("a",m({parentName:"p"},{href:"./locators#lists"}),"list operation"),", e.g. assert a list of texts, Playwright automatically performs multi-element opertations."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"getByRole"),": use ",(0,n.kt)("a",m({parentName:"li"},{href:"./selectors#role-selector"}),"role selector")," ",(0,n.kt)("inlineCode",{parentName:"li"},"component.locator('role=button[name=\"Sign up\"]')"),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"getByText"),": use ",(0,n.kt)("inlineCode",{parentName:"li"},"component.locator('text=some value')")," and other variations of the ",(0,n.kt)("a",m({parentName:"li"},{href:"./selectors#text-selector"}),"text selector"),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"getByTestId"),": use ",(0,n.kt)("a",m({parentName:"li"},{href:"./selectors#id-data-testid-data-test-id-data-test-selectors"}),"test id selectors"),", for example ",(0,n.kt)("inlineCode",{parentName:"li"},"component.locator('data-testid=some value')"),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"getByPlaceholderText"),": use css alternative ",(0,n.kt)("inlineCode",{parentName:"li"},"component.locator('[placeholder=\"some value\"]')"),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"getByAltText"),": use css alternative ",(0,n.kt)("inlineCode",{parentName:"li"},"component.locator('[alt=\"some value\"]')")," or ",(0,n.kt)("a",m({parentName:"li"},{href:"./selectors#role-selector"}),"role selector")," ",(0,n.kt)("inlineCode",{parentName:"li"},"component.locator('role=img[name=\"some value\"]')"),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"getByTitle"),": use css alternative ",(0,n.kt)("inlineCode",{parentName:"li"},"component.locator('[title=\"some value\"]')"))),(0,n.kt)("h2",m({},{id:"replacing-waitfor"}),"Replacing ",(0,n.kt)("inlineCode",{parentName:"h2"},"waitFor")),(0,n.kt)("p",null,"Playwright includes ",(0,n.kt)("a",m({parentName:"p"},{href:"./test-assertions"}),"assertions")," that automatically wait for the condition, so you don't usually need an explicit ",(0,n.kt)("inlineCode",{parentName:"p"},"waitFor"),"/",(0,n.kt)("inlineCode",{parentName:"p"},"waitForElementToBeRemoved")," call."),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-js"}),"// Testing Library\nawait waitFor(() => {\n  expect(getByText('the lion king')).toBeInTheDocument()\n})\nawait waitForElementToBeRemoved(() => queryByText('the mummy'))\n\n// Playwright\nawait expect(page.locator('text=the lion king')).toBeVisible()\nawait expect(page.locator('text=the mummy')).toBeHidden()\n")),(0,n.kt)("p",null,"When you cannot find a suitable assertion, use ",(0,n.kt)("a",m({parentName:"p"},{href:"./test-assertions#polling"}),(0,n.kt)("inlineCode",{parentName:"a"},"expect.poll"))," instead."),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-js"}),"await expect.poll(async () => {\n  const response = await page.request.get('https://api.example.com');\n  return response.status();\n}).toBe(200);\n")),(0,n.kt)("h2",m({},{id:"replacing-within"}),"Replacing ",(0,n.kt)("inlineCode",{parentName:"h2"},"within")),(0,n.kt)("p",null,"You can create a locator inside another locator with ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/next/api/class-locator#locator-locator"}),"locator.locator(selector[, options])")," method."),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-js"}),"// Testing Library\nconst messages = document.getElementById('messages')\nconst helloMessage = within(messages).getByText('hello')\n\n// Playwright\nconst messages = component.locator('id=messages')\nconst helloMessage = messages.locator('text=hello')\n")),(0,n.kt)("h2",m({},{id:"playwright-test-super-powers"}),"Playwright Test Super Powers"),(0,n.kt)("p",null,"Once you're on Playwright Test, you get a lot!"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Full zero-configuration TypeScript support"),(0,n.kt)("li",{parentName:"ul"},"Run tests across ",(0,n.kt)("strong",{parentName:"li"},"all web engines")," (Chrome, Firefox, Safari) on ",(0,n.kt)("strong",{parentName:"li"},"any popular operating system")," (Windows, macOS, Ubuntu)"),(0,n.kt)("li",{parentName:"ul"},"Full support for multiple origins, ",(0,n.kt)("a",m({parentName:"li"},{href:"./api/class-frame"}),"(i)frames"),", ",(0,n.kt)("a",m({parentName:"li"},{href:"./pages"}),"tabs and contexts")),(0,n.kt)("li",{parentName:"ul"},"Run tests in isolation in parallel across multiple browsers"),(0,n.kt)("li",{parentName:"ul"},"Built-in test artifact collection: ",(0,n.kt)("a",m({parentName:"li"},{href:"./test-configuration#record-video"}),"video recording"),", ",(0,n.kt)("a",m({parentName:"li"},{href:"./test-configuration#automatic-screenshots"}),"screenshots")," and ",(0,n.kt)("a",m({parentName:"li"},{href:"./test-configuration#record-test-trace"}),"playwright traces"))),(0,n.kt)("p",null,"Also you get all these \u2728 awesome tools \u2728 that come bundled with Playwright Test:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"/docs/next/debug"}),"Playwright Inspector")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"./auth#code-generation"}),"Playwright Test Code generation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"./trace-viewer"}),"Playwright Tracing")," for post-mortem debugging")),(0,n.kt)("h2",m({},{id:"further-reading"}),"Further Reading"),(0,n.kt)("p",null,"Learn more about Playwright Test runner:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"./intro"}),"Getting Started")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"./test-components"}),"Experimental Component Testing")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"./api/class-locator"}),"Locators")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"./selectors"}),"Selectors")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"./test-assertions"}),"Assertions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"./actionability"}),"Auto-waiting"))))}y.isMDXComponent=!0}}]);