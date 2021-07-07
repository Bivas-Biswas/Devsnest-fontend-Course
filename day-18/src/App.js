import './App.css'
import './styles/chessBoard.css'
import ChessBox from './Components/chessbox';

import Header from './Components/header';
import CalorieBox from './Components/calorieBox';
import data from "./data/items";

function App() {
  return (
    <>
    {/* chessBoard */}
    <h1 className="chess-header">ChessBoard</h1>
    <div className="board">
      
      <ChessBox/>
    </div>

    {/* caloriesBox */}

    <Header />
      <div className="container">
        {data.map((item, id) => {
          return (
            <CalorieBox
              key={id}
              props={{item,id}}
            />
          );
        })}
      </div>

    </>
  )
}

export default App;
