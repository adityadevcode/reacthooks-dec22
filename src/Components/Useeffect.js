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

//useState CLASS COMPONENT
import React, { Component } from 'react';

 class Useeffect extends Component {
    constructor (props) {
        super(props);
        this.state = {
            num:2
        };
        this.incrementNumber = this.incrementNumber.bind(this);
        this.decrementNumber = this.decrementNumber.bind(this);
        this.multiplyNumber = this.multiplyNumber.bind(this);
        this.divisionNumber = this.divisionNumber.bind(this);
        this.defaultNumber = this.defaultNumber.bind(this);
    }

    incrementNumber() {
        this.setState ({num:this.state.num+1});
    }

    decrementNumber() {
        this.setState ({num:this.state.num-1});
    }

    multiplyNumber() {
        this.setState ({num:this.state.num * 2});
    }

    divisionNumber() {
        this.setState ({num:this.state.num / 2});
    }

    defaultNumber() {
        this.setState ({num:this.state.num = 0});
    }
    


  render() {
    return (
      <div>
        <h2>{this.state.num}</h2>
        <button onClick ={this.incrementNumber}>Increment</button>
        <button onClick ={this.decrementNumber}>Decrement</button>   
        <button onClick ={this.multiplyNumber}>Multiply</button>   
        <button onClick ={this.divisionNumber}>Division</button>   
        <button onClick ={this. defaultNumber}>Initial state</button>   

      </div>
    );
  }
}

export default Useeffect;



