import React, { useState } from "react";
import useTabs from "./hook/useTabs";
import "./App.css";
const content = [
  {
    tab: "Section 1",
    content: "I`m the content of the Section 1",
  },
  {
    tab: "Section 2",
    content: "I`m the content of the Section 2",
  },
];

function App() {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      <h1>Hello</h1>
      {content.map((section, index) => (
        <button key={index} onClick={() => changeItem(index)}>
          {section.tab}
        </button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}

export default App;
