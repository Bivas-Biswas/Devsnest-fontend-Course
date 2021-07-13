import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import CalorieBox from "./components/calorieBox";

function App() {
  // for store and render the data
  const [items, setItems] = useState([
    {
      name: "Pizza",
      calorie: '56',
    },
    {
      name: "Burger",
      calorie: '69',
    },
  ]);

  //
  const [itemName, setItemName] = useState("");
  const [calorie, setCalorie] = useState("");

  // for submit handle
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setItems([...items, { name: itemName, calorie: calorie }]);
    setItemName("");
    setCalorie("");
  };

  // for no items
  const empty = () => {
    if (items.length === 0) {
      return <h1>Add Items</h1>;
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="input">
        <form>
          <input
            type="text"
            placeholder="Item Name"
            name="ItemName"
            value={itemName}
            onChange={(e) => {
              setItemName(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="Calorie amount"
            name="CalorieAmount"
            value={calorie}
            onChange={(e) => {
              setCalorie(e.target.value);
            }}
          />
          <button type="submit" onClick={handleOnSubmit}>
            Add Item
          </button>
        </form>
      </div>

      <div className="container">
        {empty()}
        {items.map((item, index) => (
          <CalorieBox
            items={items}
            id={index}
            key={index}
            item={item}
            setItems={setItems}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
