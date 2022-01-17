import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    // Create a const which is hold the new value of the input.
    const newValue = event.target.value;
    //Call setInputText and pass it the new value.
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }
  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        {/* // Call setItem When the button gets pressed  */}
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {/*Map through all of the items for each toDoItem, create an input the toDoItem in that Array */}
          {items.map((toDoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={toDoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
export default App;
