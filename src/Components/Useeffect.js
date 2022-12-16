// we can set state for arrays and objects
import React from 'react';
import { useState } from 'react';

const Useeffect = () => {
    const [arr, setArr] = useState ([2,4])
    //   const [obj, setObj] = useState({num:1, name:'Desmond'})

      const handleArrClick =() => {
        const newArr = [1,5,7]
        setArr([...arr, ...newArr])
      }

    //   const handleObjClick = () => {
    //     const newObj = {num:25, name:"tim"}
    //     setObj({...obj, ...newObj})
    //    }

  return (
        <div>
          <h2>{arr}</h2>
          {console.log(arr)}
          {/* <h2>{obj}</h2>  */}
          {/* console.log(obj); */}
          <button onClick={handleArrClick}>SetArrayState</button>
          {/* <button onClick={handleObjClick}>SetObjectState</button> */}
        </div>
       )
    }

export default Useeffect;

// able to access array state but not obj state need to fix