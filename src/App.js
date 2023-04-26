import React, { useState } from "react";

import ButtonPost from "./button-post";

function App() {
  const [user, setUser] = useState("");
  return (
    <div className="App">
      <div align="left" style={{ margin: "20px" }}>
        <h2>Kafka Test</h2>
        <ButtonPost />
      </div>{" "}
    </div>
  );
}

export default App;
