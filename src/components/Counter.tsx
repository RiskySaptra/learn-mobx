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
      <div style={{ textAlign: "center" }}>
        <h3>Counter</h3>
        <h4>{count}</h4>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button onClick={() => counterStore.increment()}>Increment</button>
          <button onClick={() => counterStore.decrement()}>Decrement</button>
        </div>
      </div>
    </>
  );
});
export default Counter;
