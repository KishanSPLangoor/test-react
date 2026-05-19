const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div", { id: "child-1" }, [
        React.createElement("h1", {}, "I am a child of parent div"),
        React.createElement("h2", {}, "I am a child of parent div"),
    ]),
     React.createElement("div", { id: "child-2" }, [
        React.createElement("h1", {}, "I am a child of parent div"),
        React.createElement("h2", {}, "I am a child of parent div"),
    ]),
);

// const heading = React.createElement('h1', {
//     id: "heading",
//     xyz: "abc"
// }, 'Hello, React!');
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
