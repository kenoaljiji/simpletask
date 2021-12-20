import React, { useState, useEffect } from "react";

const OrderList = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [changedOrder, setChangedOrder] = useState(false);

  const addList = (e) => {
    if (e.key === "Enter") {
      setList([...list, text]);
      setText("");
    }
  };

  const sortListHandeler = () => {
    setChangedOrder(!changedOrder);
  };

  useEffect(() => {
    if (changedOrder) {
      list.sort((a, b) => {
        if (a > b) {
          return -1;
        }
        if (b > a) {
          return 1;
        }
        return 0;
      });
    } else {
      list.sort();
    }
  }, [changedOrder, list]);

  /* 
    if (changedOrder) {
      list.sort((a, b) => {
        if (a > b) {
          return -1;
        }
        if (b > a) {
          return 1;
        }
        return 0;
      });
    } else {
      list.sort();
    }
 */

  return (
    <div>
      <>
        <p>Add to wishList</p>
        <input
          type="text"
          name="inputList"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={(e) => addList(e)}
        />
        <button className="sort-direction" onClick={() => sortListHandeler()}>
          {changedOrder ? "Up" : "Down"}
        </button>
        <button className="clear-list" onClick={() => setList([])}>
          delete
        </button>
        <ul className="item-list">
          {list.length > 0
            ? list.map((item, index) => <li key={index}>{item}</li>)
            : null}
        </ul>
      </>
    </div>
  );
};

export default OrderList;
