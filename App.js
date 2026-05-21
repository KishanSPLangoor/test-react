import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div", { id: "child-1" }, [
        React.createElement("h1", {key: "c1-h1" }, "I am a child of parent div"),
        React.createElement("h2", {key: "c1-h2" }, "I am a 2-child of parent div"),
    ]),
     React.createElement("div", { id: "child-2" }, [
        React.createElement("h1", {key: "c2-h1" }, "I am a 3-child of parent div"),
        React.createElement("h2", {key: "c2-h2" }, "I am a 4-child of parent div"),
    ]),
);
console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);