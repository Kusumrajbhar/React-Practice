import React, { useState, useEffect } from "react";
import { items } from "./Items";
import useUndo from "use-undo";

const Todo = () => {
  const [
    countState,
    {
      // set: setCount,
      // reset: resetCount,
      undo: undoCount,
      redo: redoCount,
      canUndo,
      canRedo,
    },
  ] = useUndo(0);
  const [tableItem, setTableItem] = useState([]);
  const [strike, setStrike] = useState(false);

  const addItem = (item) => {
    setTableItem((prevState) => [...prevState, item]);
    console.log(`tableItem`, tableItem);
  };

  const deleteItem = () => {
    setStrike(!strike);
  };

  const key = (event) => {
    if (event.ctrlKey && event.keyCode === 90) {
      alert("Undo!");
      undoCount();
    } else {
      if (event.ctrlKey && event.keyCode === 89) {
        alert("ReUndo!");
        redoCount();
      }
    }
  };

  document.onkeydown = key;

  return (
    <div className="row">
      <div className="col">
        <h2 className=" m-3">Items</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Item</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((data, index) => (
              <tr>
                <th scope="row">{data.no}</th>
                <td>{data.item}</td>
                <td>
                  <button key="undo" onClick={() => addItem(data.item)}>
                    ADD
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="col">
        <h2 className=" m-3">Added Items</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Added Item</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {tableItem?.map((data, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                {strike ? (
                  <td>
                    <s>{data}</s>
                  </td>
                ) : (
                  <td>{data}</td>
                )}

                <td>
                  <button key="redo" onClick={deleteItem}>
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Todo;
