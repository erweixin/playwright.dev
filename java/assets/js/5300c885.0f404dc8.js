"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5036],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var s=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=s.createContext({}),u=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return s.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},g=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=u(n),d=a,m=g["".concat(l,".").concat(d)]||g[d]||c[d]||r;return n?s.createElement(m,i(i({ref:t},p),{},{components:n})):s.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8991:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return g},metadata:function(){return m},toc:function(){return f}});var s=n(3905),a=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&p(e,n,t[n]);return e};const g={id:"api-testing",title:"API testing"},d=void 0,m={unversionedId:"api-testing",id:"version-stable/api-testing",title:"API testing",description:"Playwright can be used to get access to the REST API of your application.",source:"@site/versioned_docs/version-stable/api-testing.mdx",sourceDirName:".",slug:"/api-testing",permalink:"/java/docs/api-testing",draft:!1,tags:[],version:"stable",frontMatter:{id:"api-testing",title:"API testing"},sidebar:"docs",previous:{title:"Auto-waiting",permalink:"/java/docs/actionability"},next:{title:"Assertions",permalink:"/java/docs/test-assertions"}},h={},f=[{value:"Writing API Test",id:"writing-api-test",level:2},{value:"Configure",id:"configure",level:3},{value:"Write tests",id:"write-tests",level:3},{value:"Setup and teardown",id:"setup-and-teardown",level:3},{value:"Complete test example",id:"complete-test-example",level:3},{value:"Prepare server state via API calls",id:"prepare-server-state-via-api-calls",level:2},{value:"Check the server state after running user actions",id:"check-the-server-state-after-running-user-actions",level:2},{value:"Reuse authentication state",id:"reuse-authentication-state",level:2}],w={toc:f};function v(e){var t,n=e,{components:a}=n,p=((e,t)=>{var n={};for(var s in e)l.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&o)for(var s of o(e))t.indexOf(s)<0&&u.call(e,s)&&(n[s]=e[s]);return n})(n,["components"]);return(0,s.kt)("wrapper",(t=c(c({},w),p),r(t,i({components:a,mdxType:"MDXLayout"}))),(0,s.kt)("p",null,"Playwright can be used to get access to the ",(0,s.kt)("a",c({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Representational_state_transfer"}),"REST")," API of your application."),(0,s.kt)("p",null,"Sometimes you may want to send requests to the server directly from Java without loading a page and running js code in it. A few examples where it may come in handy:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Test your server API."),(0,s.kt)("li",{parentName:"ul"},"Prepare server side state before visiting the web application in a test."),(0,s.kt)("li",{parentName:"ul"},"Validate server side post-conditions after running some actions in the browser.")),(0,s.kt)("p",null,"All of that could be achieved via ",(0,s.kt)("a",c({parentName:"p"},{href:"/java/docs/api/class-apirequestcontext",title:"APIRequestContext"}),"APIRequestContext")," methods."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",c({parentName:"li"},{href:"#writing-api-test"}),"Writing API Test")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",c({parentName:"li"},{href:"#prepare-server-state-via-api-calls"}),"Prepare server state via API calls")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",c({parentName:"li"},{href:"#check-the-server-state-after-running-user-actions"}),"Check the server state after running user actions")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",c({parentName:"li"},{href:"#reuse-authentication-state"}),"Reuse authentication state"))),(0,s.kt)("h2",c({},{id:"writing-api-test"}),"Writing API Test"),(0,s.kt)("p",null,(0,s.kt)("a",c({parentName:"p"},{href:"/java/docs/api/class-apirequestcontext",title:"APIRequestContext"}),"APIRequestContext")," can send all kinds of HTTP(S) requests over network."),(0,s.kt)("p",null,"The following example demonstrates how to use Playwright to test issues creation via ",(0,s.kt)("a",c({parentName:"p"},{href:"https://docs.github.com/en/rest"}),"GitHub API"),". The test suite will do the following:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Create a new repository before running tests."),(0,s.kt)("li",{parentName:"ul"},"Create a few issues and validate server state."),(0,s.kt)("li",{parentName:"ul"},"Delete the repository after running tests.")),(0,s.kt)("h3",c({},{id:"configure"}),"Configure"),(0,s.kt)("p",null,"GitHub API requires authorization, so we'll configure the token once for all tests. While at it, we'll also set the ",(0,s.kt)("inlineCode",{parentName:"p"},"baseURL")," to simplify the tests."),(0,s.kt)("pre",null,(0,s.kt)("code",c({parentName:"pre"},{className:"language-java"}),'package org.example;\n\nimport com.microsoft.playwright.APIRequest;\nimport com.microsoft.playwright.APIRequestContext;\nimport com.microsoft.playwright.Playwright;\nimport org.junit.jupiter.api.AfterAll;\nimport org.junit.jupiter.api.BeforeAll;\nimport org.junit.jupiter.api.TestInstance;\n\nimport java.util.HashMap;\nimport java.util.Map;\n\n@TestInstance(TestInstance.Lifecycle.PER_CLASS)\npublic class TestGitHubAPI {\n  private static final String API_TOKEN = System.getenv("GITHUB_API_TOKEN");\n\n  private Playwright playwright;\n  private APIRequestContext request;\n\n  void createPlaywright() {\n    playwright = Playwright.create();\n  }\n\n  void createAPIRequestContext() {\n    Map<String, String> headers = new HashMap<>();\n    // We set this header per GitHub guidelines.\n    headers.put("Accept", "application/vnd.github.v3+json");\n    // Add authorization token to all requests.\n    // Assuming personal access token available in the environment.\n    headers.put("Authorization", "token " + API_TOKEN);\n\n    request = playwright.request().newContext(new APIRequest.NewContextOptions()\n      // All requests we send go to this API endpoint.\n      .setBaseURL("https://api.github.com")\n      .setExtraHTTPHeaders(headers));\n  }\n\n  @BeforeAll\n  void beforeAll() {\n    createPlaywright();\n    createAPIRequestContext();\n  }\n\n  void disposeAPIRequestContext() {\n    if (request != null) {\n      request.dispose();\n      request = null;\n    }\n  }\n\n  void closePlaywright() {\n    if (playwright != null) {\n      playwright.close();\n      playwright = null;\n    }\n  }\n\n  @AfterAll\n  void afterAll() {\n    disposeAPIRequestContext();\n    closePlaywright();\n  }\n}\n')),(0,s.kt)("h3",c({},{id:"write-tests"}),"Write tests"),(0,s.kt)("p",null,"Now that we initialized request object we can add a few tests that will create new issues in the repository."),(0,s.kt)("pre",null,(0,s.kt)("code",c({parentName:"pre"},{className:"language-java"}),'package org.example;\n\nimport com.google.gson.Gson;\nimport com.google.gson.JsonArray;\nimport com.google.gson.JsonElement;\nimport com.google.gson.JsonObject;\nimport com.microsoft.playwright.APIRequest;\nimport com.microsoft.playwright.APIRequestContext;\nimport com.microsoft.playwright.APIResponse;\nimport com.microsoft.playwright.Playwright;\nimport com.microsoft.playwright.options.RequestOptions;\nimport org.junit.jupiter.api.AfterAll;\nimport org.junit.jupiter.api.BeforeAll;\nimport org.junit.jupiter.api.Test;\nimport org.junit.jupiter.api.TestInstance;\n\nimport java.util.Collections;\nimport java.util.HashMap;\nimport java.util.Map;\n\nimport static org.junit.jupiter.api.Assertions.*;\n\n@TestInstance(TestInstance.Lifecycle.PER_CLASS)\npublic class TestGitHubAPI {\n  private static final String REPO = "test-repo-2";\n  private static final String USER = System.getenv("GITHUB_USER");\n  private static final String API_TOKEN = System.getenv("GITHUB_API_TOKEN");\n\n  private Playwright playwright;\n  private APIRequestContext request;\n\n  // ...\n\n  @Test\n  void shouldCreateBugReport() {\n    Map<String, String> data = new HashMap<>();\n    data.put("title", "[Bug] report 1");\n    data.put("body", "Bug description");\n    APIResponse newIssue = request.post("/repos/" + USER + "/" + REPO + "/issues",\n      RequestOptions.create().setData(data));\n    assertTrue(newIssue.ok());\n\n    APIResponse issues = request.get("/repos/" + USER + "/" + REPO + "/issues");\n    assertTrue(issues.ok());\n    JsonArray json = new Gson().fromJson(issues.text(), JsonArray.class);\n    JsonObject issue = null;\n    for (JsonElement item : json) {\n      JsonObject itemObj = item.getAsJsonObject();\n      if (!itemObj.has("title")) {\n        continue;\n      }\n      if ("[Bug] report 1".equals(itemObj.get("title").getAsString())) {\n        issue = itemObj;\n        break;\n      }\n    }\n    assertNotNull(issue);\n    assertEquals("Bug description", issue.get("body").getAsString(), issue.toString());\n  }\n\n  @Test\n  void shouldCreateFeatureRequest() {\n    Map<String, String> data = new HashMap<>();\n    data.put("title", "[Feature] request 1");\n    data.put("body", "Feature description");\n    APIResponse newIssue = request.post("/repos/" + USER + "/" + REPO + "/issues",\n      RequestOptions.create().setData(data));\n    assertTrue(newIssue.ok());\n\n    APIResponse issues = request.get("/repos/" + USER + "/" + REPO + "/issues");\n    assertTrue(issues.ok());\n    JsonArray json = new Gson().fromJson(issues.text(), JsonArray.class);\n    JsonObject issue = null;\n    for (JsonElement item : json) {\n      JsonObject itemObj = item.getAsJsonObject();\n      if (!itemObj.has("title")) {\n        continue;\n      }\n      if ("[Feature] request 1".equals(itemObj.get("title").getAsString())) {\n        issue = itemObj;\n        break;\n      }\n    }\n    assertNotNull(issue);\n    assertEquals("Feature description", issue.get("body").getAsString(), issue.toString());\n  }\n}\n\n')),(0,s.kt)("h3",c({},{id:"setup-and-teardown"}),"Setup and teardown"),(0,s.kt)("p",null,"These tests assume that repository exists. You probably want to create a new one before running tests and delete it afterwards. Use ",(0,s.kt)("inlineCode",{parentName:"p"},"@BeforeAll")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"@AfterAll")," hooks for that."),(0,s.kt)("pre",null,(0,s.kt)("code",c({parentName:"pre"},{className:"language-java"}),'  // ...\n\n  void createTestRepository() {\n    APIResponse newRepo = request.post("/user/repos",\n      RequestOptions.create().setData(Collections.singletonMap("name", REPO)));\n    assertTrue(newRepo.ok(), newRepo.text());\n  }\n\n  @BeforeAll\n  void beforeAll() {\n    createPlaywright();\n    createAPIRequestContext();\n    createTestRepository();\n  }\n\n  void deleteTestRepository() {\n    if (request != null) {\n      APIResponse deletedRepo = request.delete("/repos/" + USER + "/" + REPO);\n      assertTrue(deletedRepo.ok());\n    }\n  }\n  // ...\n\n  @AfterAll\n  void afterAll() {\n    deleteTestRepository();\n    disposeAPIRequestContext();\n    closePlaywright();\n  }\n')),(0,s.kt)("h3",c({},{id:"complete-test-example"}),"Complete test example"),(0,s.kt)("p",null,"Here is the complete example of an API test:"),(0,s.kt)("pre",null,(0,s.kt)("code",c({parentName:"pre"},{className:"language-java"}),'package org.example;\n\nimport com.google.gson.Gson;\nimport com.google.gson.JsonArray;\nimport com.google.gson.JsonElement;\nimport com.google.gson.JsonObject;\nimport com.microsoft.playwright.APIRequest;\nimport com.microsoft.playwright.APIRequestContext;\nimport com.microsoft.playwright.APIResponse;\nimport com.microsoft.playwright.Playwright;\nimport com.microsoft.playwright.options.RequestOptions;\nimport org.junit.jupiter.api.*;\n\nimport java.util.Collections;\nimport java.util.HashMap;\nimport java.util.Map;\n\nimport static org.junit.jupiter.api.Assertions.*;\n\n@TestInstance(TestInstance.Lifecycle.PER_CLASS)\npublic class TestGitHubAPI {\n  private static final String REPO = "test-repo-2";\n  private static final String USER = System.getenv("GITHUB_USER");\n  private static final String API_TOKEN = System.getenv("GITHUB_API_TOKEN");\n\n  private Playwright playwright;\n  private APIRequestContext request;\n\n  void createPlaywright() {\n    playwright = Playwright.create();\n  }\n\n  void createAPIRequestContext() {\n    Map<String, String> headers = new HashMap<>();\n    // We set this header per GitHub guidelines.\n    headers.put("Accept", "application/vnd.github.v3+json");\n    // Add authorization token to all requests.\n    // Assuming personal access token available in the environment.\n    headers.put("Authorization", "token " + API_TOKEN);\n\n    request = playwright.request().newContext(new APIRequest.NewContextOptions()\n      // All requests we send go to this API endpoint.\n      .setBaseURL("https://api.github.com")\n      .setExtraHTTPHeaders(headers));\n  }\n\n  void createTestRepository() {\n    APIResponse newRepo = request.post("/user/repos",\n      RequestOptions.create().setData(Collections.singletonMap("name", REPO)));\n    assertTrue(newRepo.ok(), newRepo.text());\n  }\n\n  @BeforeAll\n  void beforeAll() {\n    createPlaywright();\n    createAPIRequestContext();\n    createTestRepository();\n  }\n\n  void deleteTestRepository() {\n    if (request != null) {\n      APIResponse deletedRepo = request.delete("/repos/" + USER + "/" + REPO);\n      assertTrue(deletedRepo.ok());\n    }\n  }\n\n  void disposeAPIRequestContext() {\n    if (request != null) {\n      request.dispose();\n      request = null;\n    }\n  }\n\n  void closePlaywright() {\n    if (playwright != null) {\n      playwright.close();\n      playwright = null;\n    }\n  }\n\n  @AfterAll\n  void afterAll() {\n    deleteTestRepository();\n    disposeAPIRequestContext();\n    closePlaywright();\n  }\n\n  @Test\n  void shouldCreateBugReport() {\n    Map<String, String> data = new HashMap<>();\n    data.put("title", "[Bug] report 1");\n    data.put("body", "Bug description");\n    APIResponse newIssue = request.post("/repos/" + USER + "/" + REPO + "/issues",\n      RequestOptions.create().setData(data));\n    assertTrue(newIssue.ok());\n\n    APIResponse issues = request.get("/repos/" + USER + "/" + REPO + "/issues");\n    assertTrue(issues.ok());\n    JsonArray json = new Gson().fromJson(issues.text(), JsonArray.class);\n    JsonObject issue = null;\n    for (JsonElement item : json) {\n      JsonObject itemObj = item.getAsJsonObject();\n      if (!itemObj.has("title")) {\n        continue;\n      }\n      if ("[Bug] report 1".equals(itemObj.get("title").getAsString())) {\n        issue = itemObj;\n        break;\n      }\n    }\n    assertNotNull(issue);\n    assertEquals("Bug description", issue.get("body").getAsString(), issue.toString());\n  }\n\n  @Test\n  void shouldCreateFeatureRequest() {\n    Map<String, String> data = new HashMap<>();\n    data.put("title", "[Feature] request 1");\n    data.put("body", "Feature description");\n    APIResponse newIssue = request.post("/repos/" + USER + "/" + REPO + "/issues",\n      RequestOptions.create().setData(data));\n    assertTrue(newIssue.ok());\n\n    APIResponse issues = request.get("/repos/" + USER + "/" + REPO + "/issues");\n    assertTrue(issues.ok());\n    JsonArray json = new Gson().fromJson(issues.text(), JsonArray.class);\n    JsonObject issue = null;\n    for (JsonElement item : json) {\n      JsonObject itemObj = item.getAsJsonObject();\n      if (!itemObj.has("title")) {\n        continue;\n      }\n      if ("[Feature] request 1".equals(itemObj.get("title").getAsString())) {\n        issue = itemObj;\n        break;\n      }\n    }\n    assertNotNull(issue);\n    assertEquals("Feature description", issue.get("body").getAsString(), issue.toString());\n  }\n}\n')),(0,s.kt)("h2",c({},{id:"prepare-server-state-via-api-calls"}),"Prepare server state via API calls"),(0,s.kt)("p",null,"The following test creates a new issue via API and then navigates to the list of all issues in the project to check that it appears at the top of the list. The check is performed using ",(0,s.kt)("a",c({parentName:"p"},{href:"/java/docs/test-assertions",title:"LocatorAssertions"}),"LocatorAssertions"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",c({parentName:"pre"},{className:"language-java"}),'@Test\nvoid lastCreatedIssueShouldBeFirstInTheList() {\n  Map<String, String> data = new HashMap<>();\n  data.put("title", "[Feature] request 1");\n  data.put("body", "Feature description");\n  APIResponse newIssue = request.post("/repos/" + USER + "/" + REPO + "/issues",\n    RequestOptions.create().setData(data));\n  assertTrue(newIssue.ok());\n\n  page.navigate("https://github.com/" + USER + "/" + REPO + "/issues");\n  Locator firstIssue = page.locator("a[data-hovercard-type=\'issue\']").first();\n  assertThat(firstIssue).hasText("[Feature] request 1");\n}\n')),(0,s.kt)("h2",c({},{id:"check-the-server-state-after-running-user-actions"}),"Check the server state after running user actions"),(0,s.kt)("p",null,"The following test creates a new issue via user interface in the browser and then checks via API if it was created:"),(0,s.kt)("pre",null,(0,s.kt)("code",c({parentName:"pre"},{className:"language-java"}),'@Test\nvoid lastCreatedIssueShouldBeOnTheServer() {\n  page.navigate("https://github.com/" + USER + "/" + REPO + "/issues");\n  page.locator("text=New Issue").click();\n  page.locator("[aria-label=\'Title\']").fill("Bug report 1");\n  page.locator("[aria-label=\'Comment body\']").fill("Bug description");\n  page.locator("text=Submit new issue").click();\n  String issueId = page.url().substring(page.url().lastIndexOf(\'/\'));\n\n  APIResponse newIssue = request.get("https://github.com/" + USER + "/" + REPO + "/issues/" + issueId);\n  assertThat(newIssue).isOK();\n  assertTrue(newIssue.text().contains("Bug report 1"));\n}\n')),(0,s.kt)("h2",c({},{id:"reuse-authentication-state"}),"Reuse authentication state"),(0,s.kt)("p",null,"Web apps use cookie-based or token-based authentication, where authenticated state is stored as ",(0,s.kt)("a",c({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"}),"cookies"),". Playwright provides ",(0,s.kt)("a",c({parentName:"p"},{href:"/java/docs/api/class-apirequestcontext#api-request-context-storage-state"}),"APIRequestContext.storageState([options])")," method that can be used to retrieve storage state from an authenticated context and then create new contexts with that state."),(0,s.kt)("p",null,"Storage state is interchangeable between ",(0,s.kt)("a",c({parentName:"p"},{href:"/java/docs/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")," and ",(0,s.kt)("a",c({parentName:"p"},{href:"/java/docs/api/class-apirequestcontext",title:"APIRequestContext"}),"APIRequestContext"),". You can use it to log in via API calls and then create a new context with cookies already there. The following code snippet retrieves state from an authenticated ",(0,s.kt)("a",c({parentName:"p"},{href:"/java/docs/api/class-apirequestcontext",title:"APIRequestContext"}),"APIRequestContext")," and creates a new ",(0,s.kt)("a",c({parentName:"p"},{href:"/java/docs/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")," with that state."),(0,s.kt)("pre",null,(0,s.kt)("code",c({parentName:"pre"},{className:"language-java"}),'APIRequestContext requestContext = playwright.request().newContext(\n  new APIRequest.NewContextOptions().setHttpCredentials("user", "passwd"));\nrequestContext.get("https://api.example.com/login");\n// Save storage state into a variable.\nString state = requestContext.storageState();\n\n// Create a new context with the saved storage state.\nBrowserContext context = browser.newContext(new Browser.NewContextOptions().setStorageState(state));\n')))}v.isMDXComponent=!0}}]);