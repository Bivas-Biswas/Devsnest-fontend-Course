import React, { Component } from "react";
import { useState } from "react";
import "../styles/Counter.css";

// class components
// export class Counter extends Component {
//     constructor(){
//         super()
//         this.state = {
//             count : 0
//         }
//     }

//     increment(){
//         this.setState({
//             count : this.state.count + 1
//         })
//     }

//     decrement(){
//         this.setState({
//             count: this.state.count - 1
//         })
//     }

//     reset(){
//         this.setState({
//             count : 0
//         })
//     }

//     render() {
//         return (
//             <>
//                 <h1>{this.state.count}</h1>
//                 <div className="btn">
//                     <button onClick={()=>this.increment()}>Increment</button>
//                     <button onClick={()=>this.decrement()}>Decrement</button>
//                     <button onClick={()=>this.reset()}>Rest</button>
//                 </div>
//             </>
//         )
//     }
// }

// export default Counter

// functional components

const Counter = () => {
  let [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>

      <div className="btn">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount((count = 0))}>Rest</button>
      </div>
    </>
  );
};

export default Counter;
