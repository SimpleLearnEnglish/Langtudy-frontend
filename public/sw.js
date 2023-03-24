<<<<<<< HEAD
/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-327c579b'], (function (workbox) { 'use strict';

  importScripts();
  self.skipWaiting();
  workbox.clientsClaim();
  workbox.registerRoute("/", new workbox.NetworkFirst({
    "cacheName": "start-url",
    plugins: [{
      cacheWillUpdate: async ({
        request,
        response,
        event,
        state
      }) => {
        if (response && response.type === 'opaqueredirect') {
          return new Response(response.body, {
            status: 200,
            statusText: 'OK',
            headers: response.headers
          });
        }
        return response;
      }
    }]
  }), 'GET');
  workbox.registerRoute(/.*/i, new workbox.NetworkOnly({
    "cacheName": "dev",
    plugins: []
  }), 'GET');

}));
//# sourceMappingURL=sw.js.map
=======
if(!self.define){let e,s={};const n=(n,c)=>(n=new URL(n+".js",c).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,i)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let o={};const r=e=>n(e,a),t={module:{uri:a},exports:o,require:r};s[a]=Promise.all(c.map((e=>t[e]||r(e)))).then((e=>(i(...e),o)))}}define(["./workbox-1e914f46"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/280-5a5fcd678bd5cc10.js",revision:"5a5fcd678bd5cc10"},{url:"/_next/static/chunks/290-d8a63596813d852d.js",revision:"d8a63596813d852d"},{url:"/_next/static/chunks/70-fff1e5a726e1ba47.js",revision:"fff1e5a726e1ba47"},{url:"/_next/static/chunks/framework-c5852d313414dcf3.js",revision:"c5852d313414dcf3"},{url:"/_next/static/chunks/main-7ee53a4578eba7eb.js",revision:"7ee53a4578eba7eb"},{url:"/_next/static/chunks/pages/_app-15743e5673f8ffa2.js",revision:"15743e5673f8ffa2"},{url:"/_next/static/chunks/pages/_error-ece53e52605c7685.js",revision:"ece53e52605c7685"},{url:"/_next/static/chunks/pages/auth-216820f6b16a142d.js",revision:"216820f6b16a142d"},{url:"/_next/static/chunks/pages/auth/login-6216a47ddb7dd0d3.js",revision:"6216a47ddb7dd0d3"},{url:"/_next/static/chunks/pages/auth/register-f8c6ee0db91b25af.js",revision:"f8c6ee0db91b25af"},{url:"/_next/static/chunks/pages/eng/mean/level/%5Bid%5D-12e9d76432cbcd8a.js",revision:"12e9d76432cbcd8a"},{url:"/_next/static/chunks/pages/eng/sentence/level/%5Bid%5D-97c250e51edf1831.js",revision:"97c250e51edf1831"},{url:"/_next/static/chunks/pages/eng/word/level/%5Bid%5D-226ee921e97198c5.js",revision:"226ee921e97198c5"},{url:"/_next/static/chunks/pages/index-f02a548ac9df273c.js",revision:"f02a548ac9df273c"},{url:"/_next/static/chunks/pages/install-7e1b295e28c00a94.js",revision:"7e1b295e28c00a94"},{url:"/_next/static/chunks/pages/install/desktop-05271eecbb561bf4.js",revision:"05271eecbb561bf4"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-87b3a303122f2f0d.js",revision:"87b3a303122f2f0d"},{url:"/_next/static/css/cfc5ae0330ceae0c.css",revision:"cfc5ae0330ceae0c"},{url:"/_next/static/qKXd0KSGbcDe6AAEdpwl-/_buildManifest.js",revision:"75eb8100ad6f88015a9af06f79a82c7d"},{url:"/_next/static/qKXd0KSGbcDe6AAEdpwl-/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/assets/icons/icon-128x128.png",revision:"e9a1a4de8d33b18df76751de9d562140"},{url:"/assets/icons/icon-144x144.png",revision:"b573cfc1036f830289119b2e93485194"},{url:"/assets/icons/icon-152x152.png",revision:"9b4d1ab5aabf856937a937c468bdd370"},{url:"/assets/icons/icon-192x192.png",revision:"88094a13d51f84ba6d7b912031486f8a"},{url:"/assets/icons/icon-384x384.png",revision:"b7c7f9bf20936d115d3ec5ebfbc7b94b"},{url:"/assets/icons/icon-48x48.png",revision:"983f64e9a62bbbe1a162e3386e25ae95"},{url:"/assets/icons/icon-512x512.png",revision:"c0adf36c0055d79195a52eac291627b9"},{url:"/assets/icons/icon-72x72.png",revision:"d842b50d78d12376357e679bdd62d2d3"},{url:"/assets/icons/icon-96x96.png",revision:"dbae4a16c361ff96066099ea8f089ee9"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/favicons/android-icon-144x144.png",revision:"dd3309691f8397c9a57de8e881dcc059"},{url:"/favicons/android-icon-192x192.png",revision:"c31622cb6d4c1797b98f4fb6cd16278d"},{url:"/favicons/android-icon-36x36.png",revision:"d876c1607acb7a05f8e1735e94c19abf"},{url:"/favicons/android-icon-48x48.png",revision:"5eea0a704b0a99be18e2c2c9f0be7432"},{url:"/favicons/android-icon-72x72.png",revision:"afde011abdf503068c1a44e11f0ac2e0"},{url:"/favicons/android-icon-96x96.png",revision:"dec69ebb70a7e1782fc5069c193f7e31"},{url:"/favicons/apple-icon-114x114.png",revision:"b41677654cc0f22303997b5eebaa0c1d"},{url:"/favicons/apple-icon-120x120.png",revision:"d1ab8b2909e8dc0be107d6aaf8d7b9f2"},{url:"/favicons/apple-icon-144x144.png",revision:"dd3309691f8397c9a57de8e881dcc059"},{url:"/favicons/apple-icon-152x152.png",revision:"91091c2187e6919efd3b1595d796448e"},{url:"/favicons/apple-icon-180x180.png",revision:"efa093a38dc34f3674274f4589188275"},{url:"/favicons/apple-icon-57x57.png",revision:"9dbcb89e2b410d2fa5be12c8e6970cb2"},{url:"/favicons/apple-icon-60x60.png",revision:"6e055cc5955d7708a886adbc2a64860c"},{url:"/favicons/apple-icon-72x72.png",revision:"afde011abdf503068c1a44e11f0ac2e0"},{url:"/favicons/apple-icon-76x76.png",revision:"71d5b53c49f2623a7b67fc6ba666b3ff"},{url:"/favicons/apple-icon-precomposed.png",revision:"eab4edc05adad0c6953ecb7ca59a571e"},{url:"/favicons/apple-icon.png",revision:"eab4edc05adad0c6953ecb7ca59a571e"},{url:"/favicons/browserconfig.xml",revision:"97775b1fd3b6e6c13fc719c2c7dd0ffe"},{url:"/favicons/favicon-16x16.png",revision:"28f8945a6b7ca4ae8091a96e50a32d70"},{url:"/favicons/favicon-32x32.png",revision:"b0ea8956e55ef016eefd0560ccd115fe"},{url:"/favicons/favicon-96x96.png",revision:"b85a273e49df49422d47e96e38b17c34"},{url:"/favicons/favicon.ico",revision:"7968e4d58d6f2dcbdc82d4861332987f"},{url:"/favicons/ms-icon-144x144.png",revision:"d1743226ac79a6a163769263ddd086a2"},{url:"/favicons/ms-icon-150x150.png",revision:"d0981301fb6c9e54a676a8b0f714016d"},{url:"/favicons/ms-icon-310x310.png",revision:"e287f57e619c5d283cc8559203330d91"},{url:"/favicons/ms-icon-70x70.png",revision:"f772bb940277ff2f9a9fe84c4f7df539"},{url:"/manifest.json",revision:"e9bfc89c0d43f26ccc879bad0beb99d1"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/thirteen.svg",revision:"53f96b8290673ef9d2895908e69b2f92"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
>>>>>>> 3e2c6c6b95b1df770134ab9e6a8c6853fc209152
