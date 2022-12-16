// we can set state for arrays and objects
// import React from 'react';
import { useState } from 'react';

const Useeffect = () => {
    const [arr, setArr] = useState ([2,4])
    const [obj, setObj] = useState({num:1, name:'Desmond'})

      const handleArrClick =() => {
        const newArr = [1,5,7]
        setArr([...arr, ...newArr])
      }

     const handleObjClick = () => {
    const newObj = {name: 'Ifeanyi', age: 25}
        setObj({...obj, ...newObj})
       }


  return (
        <div>
          <h2>{arr}</h2>
          <h2>{obj.id}</h2>
          <button onClick ={handleArrClick}>Set Array State</button>          {/* <button onClick={handleObjClick}>SetObjectState</button> */}
          <button onClick ={handleObjClick}>Set Object State</button>
        </div>
       )
    }

export default Useeffect;

//The states are updated asynchronously. This means that the new state is first added to a pending state 
//and thereafter, the state is updated. So, you may still get the old
// state value if you access the state immediately it is set