//  import React from 'react';

//  const Useeffect = () => {
//   return (
//     <div>
//     <h4>Useeffect Component</h4>
//     <p>Counter</p>
//     </div>
//   )
// }

// export default Useeffect;

// //useState CLASS COMPONENT
// import React, { Component } from 'react';

//  class Useeffect extends Component {
//     constructor (props) {
//         super(props);
//         this.state = {
//             num:2
//         };
//         this.incrementNumber = this.incrementNumber.bind(this);
//         this.decrementNumber = this.decrementNumber.bind(this);
//         this.multiplyNumber = this.multiplyNumber.bind(this);
//         this.divisionNumber = this.divisionNumber.bind(this);
//         this.defaultNumber = this.defaultNumber.bind(this);
//     }

//     incrementNumber() {
//         this.setState ({num:this.state.num+1});
//     }

//     decrementNumber() {
//         this.setState ({num:this.state.num-1});
//     }

//     multiplyNumber() {
//         this.setState ({num:this.state.num * 2});
//     }

//     divisionNumber() {
//         this.setState ({num:this.state.num / 2});
//     }

//     defaultNumber() {
//         this.setState ({num:this.state.num = 0});
//     }
    


//   render() {
//     return (
//       <div>
//         <h2>{this.state.num}</h2>
//         <button onClick ={this.incrementNumber}>Increment</button>
//         <button onClick ={this.decrementNumber}>Decrement</button>   
//         <button onClick ={this.multiplyNumber}>Multiply</button>   
//         <button onClick ={this.divisionNumber}>Division</button>   
//         <button onClick ={this. defaultNumber}>Initial state</button>   

//       </div>
//     );
//   }
// }

// export default Useeffect;


//functional usestate compnent
// import React from 'react';
import { useState } from 'react';

 const Useeffect = () => {
    const[count, setCount] =useState(2);
    const[number, setNumber] = useState(5);

// INCREMENT FUNCTION
const incrementNumber = () => {
    setCount(prevCount => prevCount+2);
}
const decrementNumber = () => {
    setCount(prevCount => prevCount-1);
}
const multiNumber = () => {
    setCount(prevCount => prevCount * 2);
}
const divideNumber = () => {
    setCount(prevCount => prevCount / 2);
}
const defaultState = () => {
    setCount(prevCount=> 2);
}

//number functionality
const incrementBy5 =() => {
    setNumber(prevnumber => prevnumber +5);
}
const decrementBy5 =() => {
    setNumber(prevnumber => prevnumber -5);
}
const defaultNum =() => {
    setNumber(prevnumber =>5);
}
  return (
    <div>
    <h4>Functional state using useState</h4>
    <p>{count}</p>
    <button onClick = {incrementNumber}>Increment</button>
    <button onClick = {decrementNumber}>Decrement</button>
    <button onClick ={multiNumber}>Multiply</button>
    <button onClick = {divideNumber}>Division</button>
    <button onClick ={defaultState}>Default</button>
    <br></br>
    <h4>Number state</h4>
    <p>{number}</p>
    <button onClick={incrementBy5}>Incre 5</button>
    <button onClick={decrementBy5}>Decre 5</button>
    <button onClick={defaultNum}>Defalut</button>
    </div>
    
  )
}

export default Useeffect;