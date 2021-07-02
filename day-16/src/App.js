import {Component} from 'react'
// import MemeCard from './memeCard/memeCard'
import ChessBoard from "./chessBoard/chessBoard";
import MemeCard from "./memeCard/memeCard";

class App extends Component{
  render(){
    return (
        <>
            <MemeCard/>
            <ChessBoard />
        </>
    )
  }
}

export default App;
