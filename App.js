const heading1 = React.createElement("h1", { id: "title" }, "Heading 1!");
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
