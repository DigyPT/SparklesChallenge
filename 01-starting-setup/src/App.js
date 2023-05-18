import List from "./components/List/List";
import React from "react";

function App() {

  const clickCheckboxTrue = content => {
    console.log("Content: " +JSON.stringify(content))
  }

  return (
    <div>
      <List onCheckTrue={clickCheckboxTrue}></List>
    </div>
  );
}

export default App;
