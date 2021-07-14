import "../styles/calorieBox.css";
import React, { useState} from "react";

const CalorieBox = ({ items, id, item, setItems }) => {

  // for delete
  const handleDelete = (id) => {
    items = items.filter((food) => food !== items[id]);
    setItems(items);
  };

  // for edit
  const [isInputActive, setIsInputActive] = useState(false);
  const [editData, setEditData] = useState({
    name: item.name,
    calorie: item.calorie,
  });

  // for on change data, to controll input data
  const handleOnDataChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEditData((current) => ({ ...current, [name]: value }));
  };

  // for save data
  const handelOnSave = () => {
    // make in new edit array object
    const curr = items.map((item, ind) => {
      if (ind === id) {
        return {
          ...item,
          name: editData.name,
          calorie: editData.calorie,
        };
      } else {
        return item;
      }
    });
    
    setItems(curr)
    setIsInputActive(false)
  };


  return (
    <>
      <div className="calorieBox">
        <button onClick={() => handleDelete(id)}>Delete</button>
        {isInputActive ? (
          <>
            <button onClick={handelOnSave}>Save</button>
            <input
              type="text"
              placeholder="Edit Item Name"
              name="name"
              value={editData.name}
              onChange={handleOnDataChange}
            />
            <input
              type="number"
              placeholder="Edit Calorie amount"
              name="calorie"
              value={editData.calorie}
              onChange={handleOnDataChange}
            />
          </>
        ) : (
          <>
            <button onClick={() => setIsInputActive(true)}>Edit</button>
            <div className="food">
              <h2>{item.name}</h2>
            </div>
            <div className="data">
              <p>
                you have consumed <strong>{item.calorie}</strong> cals today
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CalorieBox;
