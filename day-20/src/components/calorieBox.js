
import "../styles/calorieBox.css";

const calorieBox = ({ id, item, handleDelete }) => {
  return (
    <>
      <div className="calorieBox">
        <button onClick={()=>handleDelete(id)}>Delete</button>
        <div className="food">
          <h2>{item.name}</h2>
        </div>
        <div className="data">
          <p>
            you have consumed <strong>{item.calorie}</strong> cals today
          </p>
        </div>
      </div>
    </>
  );
};

export default calorieBox;
