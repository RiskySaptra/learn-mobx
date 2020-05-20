import React, { useState } from "react";

// Custom Hooks
import { useStores } from "../hooks/use-stores";
// Mobx
import { observer } from "mobx-react";

const Todos = observer(function Todos() {
  const [inputs, setInputs] = useState("");
  const { counterStore } = useStores();

  return (
    <>
      <div className="container">
        <div className="mx-auto" style={{ width: "100%" }}>
          <h3 className="text-center">Todos</h3>
          <table className="table table-borderless mx-auto">
            {counterStore.status.map((item, index) => (
              <>
                <tr>
                  <td key={index}>{item}</td>
                  <td className="text-right">
                    <button
                      onClick={() => counterStore.deleteTodos(index)}
                      type="button"
                      className="btn  btn-info btn-sm mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => counterStore.deleteTodos(index)}
                      type="button"
                      className="btn btn-danger btn-sm ml-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </table>

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Adding Todos"
              onChange={(e) => setInputs(e.target.value)}
            />
            <div className="input-group-append">
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => counterStore.addTodos(inputs)}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
export default Todos;
