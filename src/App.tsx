import React from "react";

// import Counter from "./components/Counter";
import Todos from "./components/Todos";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      {/* <Counter /> */}
      <Todos />
    </div>
  );
};

export default App;
