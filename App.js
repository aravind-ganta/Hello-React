import React from "react";
import ReactDOM from "react-dom/client";

// React Element is a javascript object
// React.createElement => Object => HTML(DOM)
const heading1 = React.createElement(
  "h1",
  { id: "title", key: "h1" },
  "Heading 1 from Parcel!"
);

// JSX => React.createElement => Object => HTML(DOM)
const title = <h2 key="h2">Heading 2!</h2>;

// React Component
// Functional - NEW
// Class Based Component - OLD

const HeaderComponent = () => {
  return (
    <div>
      {title}
      <h1>React functional component</h1>
      <h2>This is h2 tag</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// pass react element inside the root
// override everything inside root element and replace
root.render(<HeaderComponent />);
