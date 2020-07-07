import React from "react";
import useInput from "./useInput/useInput";
import "./App.css";

function App() {
  const maxLen = (value) => value.length < 10;
  const name = useInput("Mr.", maxLen);
  return (
    <div className="App">
      <h1>Hello</h1>
      {/* same to <input placeholder="Name" value={name.value} onChange={name.onChange} />  */}
      <input placeholder="Name" {...name} />
    </div>
  );
}

export default App;
