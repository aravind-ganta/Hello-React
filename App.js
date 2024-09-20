/**
 * HMR- Hot Module Replacement
 * File Watcher Algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our code
 * Dev and Production build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older version of browser
 * HTTPS on dev
 * port number
 * Consistent Hashing Algorithm
 * Zero Config
 *
 * Transitive Dependencies
 */

import React from "react";
import ReactDOM from "react-dom/client";
const heading1 = React.createElement(
  "h1",
  { id: "title" },
  "Heading 1 from Parcel!"
);
const heading2 = React.createElement("h2", { id: "title" }, "Heading 2!");
const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);
console.log(container); // react element is a javascript object
const root = ReactDOM.createRoot(document.getElementById("root"));

// pass react element inside the root
// override everything inside root element and replace
root.render(container);
