import React, { useState } from "react";
import Item from "./Item";

const ShoppingList = () => {
  const INTIAL_STATE = [
    { id: 1, name: "Peanut Butter", qty: 2 },
    { id: 1, name: "Whole Milk", qty: 1 },
  ];
  const [items, setItems] = useState(INTIAL_STATE);

  return (
    <div>
      <h3>Shopping List</h3>
      <div>
        {items.map(({ id, name, qty }) => (
          <Item id={id} name={name} qty={qty} />
        ))}
      </div>
    </div>
  );
};

export default ShoppingList;

// ul>li{My Item $}*3
