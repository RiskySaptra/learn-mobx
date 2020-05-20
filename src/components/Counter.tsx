import React from "react";

// Custom Hooks
import { useStores } from "../hooks/use-stores";
// Mobx
import { observer } from "mobx-react";

const Counter = observer(function Counter() {
  const { counterStore } = useStores();
  const { count } = counterStore;

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",

          width: "100%",
          background: "grey",
        }}
      >
        <h3>Counter</h3>
        <h4>{count}</h4>
        <div>
          <button onClick={() => counterStore.increment()}>Increment</button>
          <button onClick={() => counterStore.decrement()}>Decrement</button>
        </div>
      </div>
    </>
  );
});
export default Counter;
