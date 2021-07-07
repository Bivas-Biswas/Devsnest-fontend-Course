const ChessBox = () => {
  let boxes = [];
  let count = 0
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      boxes.push(
        <div
          className="box"
          key={count}
          style={{ backgroundColor: (i+j) % 2 === 0 ? "white" : "black" }}
        ></div>
      );
      count ++
    }
  }
  return boxes;
};

export default ChessBox;
