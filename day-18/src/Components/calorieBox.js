import "../styles/calorieBox.css";

const calorieBox = ({ props }) => {
  const { item, id } = props;
  const { name, calorie } = item;

  return (
    <>
      <div
        className="calorieBox"
        style={{
          backgroundColor:
            calorie >= 500
              ? "red"
              : id % 2 === 0
              ? "orange"
              : "rgba(111, 122, 229, 0.7)",
        }}
      >
        <div className="food">
          <h2>{name}</h2>
        </div>
        <div className="data">
          <p>
            you have consumed <strong>{calorie}</strong> cals today
          </p>
        </div>
      </div>
    </>
  );
};

export default calorieBox;
