(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{231:function(e,r,t){"use strict";t.r(r);var a=t(6),n=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"arrays-example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#arrays-example"}},[e._v("#")]),e._v(" Arrays example")]),e._v(" "),t("p",[e._v("Shows how to exchange and work with arrays either created in WebAssembly or in JavaScript.")]),e._v(" "),t("h2",{attrs:{id:"contents"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),t("ul",[t("li",[e._v("Using the loader and the full runtime to work with managed objects.")]),e._v(" "),t("li",[e._v("Creating arrays in WebAssembly and using them in JavaScript.")]),e._v(" "),t("li",[e._v("Creating arrays in JavaScript and using them in WebAssembly.")]),e._v(" "),t("li",[e._v("Using both copies of and live views on arrays.")]),e._v(" "),t("li",[e._v("Performing "),t("code",[e._v("unchecked")]),e._v(" accesses where the length of an array is known.")]),e._v(" "),t("li",[e._v("Keeping track of lifetimes with the runtime helpers and reference counting basics.")])]),e._v(" "),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),t("div",{staticClass:"language-editor extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("#!optimize=speed&runtime=full\n/** Creates a new array and returns it to JavaScript. */\nexport function createArray(length: i32): Int32Array {\n  return new Int32Array(length)\n}\n\n/** Randomizes the specified array's values. */\nexport function randomizeArray(arr: Int32Array): void {\n  for (let i = 0, k = arr.length; i < k; ++i) {\n    let value = i32((Math.random() * 2.0 - 1.0) * i32.MAX_VALUE)\n    unchecked(arr[i] = value)\n  }\n}\n\n/** Computes the sum of an array's values and returns the sum to JavaScript. */\nexport function sumArray(arr: Int32Array): i32 {\n  let total = 0\n  for (let i = 0, k = arr.length; i < k; ++i) {\n    total += unchecked(arr[i])\n  }\n  return total\n}\n\n// We'll need the unique Int32Array id when allocating one in JavaScript\nexport const Int32Array_ID = idof<Int32Array>()\n\n#!html\n<textarea id=\"output\" style=\"width: 100%; height: 100%\" readonly></textarea>\n<script>\nloader.instantiate(module_wasm).then(({ exports }) => {\n  const output = document.getElementById('output')\n\n  /** Logs a message to the textarea. */\n  function log(message = '') {\n    output.value += `${message}\\n`\n  }\n\n  // A simple example using an array created in WebAssembly, involving just a\n  // single reference to track.\n  function example1() {\n    log('=== Example1 ===')\n\n    // Obtain the necessary runtime helpers\n    const { __release, __getArray } = exports\n\n    // Create a new array in WebAssembly and get a reference to it\n    let arrayPtr = exports.createArray(5)\n    log(`Array pointer: ${arrayPtr}`)\n\n    // We now own a reference to the array by convention, which is that values\n    // `return`ed from WebAssembly automatically become retained for the caller.\n\n    // Log its elements to make sure these are zero\n    log('Initial values: ' + __getArray(arrayPtr).join(', '))\n\n    // Randomize the array in WebAssembly and log it again\n    exports.randomizeArray(arrayPtr)\n    log('Randomized values: ' + __getArray(arrayPtr).join(', '))\n\n    // Compute the array values' sum and log it. This will overflow i32 range.\n    let total = exports.sumArray(arrayPtr)\n    log(`Sum (likely overflown): ${total}`)\n\n    // We are done with the array, so release the reference\n    __release(arrayPtr)\n\n    log()\n  }\n  example1()\n\n  // A slightly more advanced example allocating the array in JavaScript instead\n  // of WebAssembly, and utilizing a live view to modify it in WebAssembly memory.\n  // Still involves just a single reference to track.\n  function example2() {\n    log('=== Example2 ===')\n\n    // Obtain the necessary runtime helpers\n    const { __retain, __release, __newArray, __getArray, __getArrayView } = exports\n\n    // Create a new array, but this time in JavaScript. Note that we have to\n    // retain a reference to our allocation while we use it.\n    let arrayPtr = __retain(__newArray(exports.Int32Array_ID, [\n      3, 4, 5, 6, 7, 8, 9\n    ]))\n    log('Array pointer: ' + arrayPtr)\n\n    // Log its elements to make sure these are the provided values\n    log('Initial values: ' + __getArray(arrayPtr).join(', '))\n\n    // Compute the array values' sum and log it\n    let total = exports.sumArray(arrayPtr)\n    log('Sum: ' + total)\n\n    // Instead of copying, let's obtain a live view on the array and modify its\n    // values right in WebAssembly memory.\n    let view = __getArrayView(arrayPtr)\n    view.reverse()\n\n    // Log the array's elements, now reversed\n    log('Reversed values: ' + __getArray(arrayPtr).join(', '))\n\n    // We are done with the array, so release the reference\n    __release(arrayPtr)\n\n    log()\n  }\n  example2()\n})\n<\/script>\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),t("p",[e._v("This example utilizes the loader to work with managed objects, so requires using the "),t("code",[e._v("full")]),e._v(" or "),t("code",[e._v("stub")]),e._v(" runtime which expose the runtime helpers to JavaScript. The "),t("code",[e._v("half")]),e._v(" (otherwise the same as "),t("code",[e._v("full")]),e._v(") or "),t("code",[e._v("none")]),e._v(" (otherwise the same as "),t("code",[e._v("stub")]),e._v(") runtimes do not expose these helpers.")])]),e._v(" "),t("h2",{attrs:{id:"resources"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[e._v("#")]),e._v(" Resources")]),e._v(" "),t("p",[e._v("Further information on using the loader and the runtime helpers is available as part of the "),t("RouterLink",{attrs:{to:"/loader.html#counting-references"}},[e._v("loader's")]),e._v(" and the "),t("RouterLink",{attrs:{to:"/runtime.html#interface"}},[e._v("runtime documentation")]),e._v(". The particularly important aspect here is where "),t("code",[e._v("__retain")]),e._v(" and "),t("code",[e._v("__release")]),e._v(" are necessary, and where they are not.")],1)])}),[],!1,null,null,null);r.default=n.exports}}]);