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
    <div className='left'>
    <h1 className="chess-header">ChessBoard</h1>
    <div className="board">
      
      <ChessBox/>
    </div>
    </div>

    {/* caloriesBox */}
    <div className="right">
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
      </div>

    </>
  )
}

export default App;
