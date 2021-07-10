import "./App.css";
import Header from "./components/header";
import CalorieBox from "./components/calorieBox";
import data from "./data/items";
import { useState } from "react";

function App() {

  const [foods, setFood] = useState(data)
  let newFoods = [...foods]
  const handleDelete =(id) => {
    newFoods = foods.filter(food => food!==foods[id])
    setFood(newFoods)
  }

  const empty = () =>{
    if(newFoods.length === 0){
      return <h1>Empty Item</h1>
    }
  }

  return (
    <div className="App">
      
      <Header />
      <div className="container">
        {newFoods.map((item, id) => {
          return (
            <CalorieBox
              key={id}
              id={id}
              item={item}
              handleDelete = {handleDelete}
            />
          );
        })}
        { empty() }
        
      </div>
    </div>
  );
}

export default App;
