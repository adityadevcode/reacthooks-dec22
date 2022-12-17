// import React from 'react'

//  const Stateusehook = () => {
//   return (
//     <div>Stateusehook</div>
//   )
// }

// export default Stateusehook;

// Declaring a state variable

// import React from 'react'
// import { useState } from 'react'

//  const Stateusehook = () => {
//     const [count]=useState(100)
//   return (
//     <div>Stateusehook is {count}</div>
//   )
// }

// export default Stateusehook;

// updating a state variable
// import React from 'react'
// import { useState } from 'react'

//  const Stateusehook = () => {
//     const [items, setItems]=useState(0)
//     const handleClick = () => setItems(items+1)
//   return (
//     <div>
//     <h3> {items}</h3>
//     <button onClick={handleClick}>click</button>
//     </div>
//     )
// }

// export default Stateusehook;

//using multi state variables
// import React from 'react'
// import { useState } from 'react'

// const Stateusehook = () => {
//     const[items,setItems] =useState(0);
//     const[price,setPrice]=useState(10);

//     const itemsIncrement = () => {
// setItems(items+1);
//     }

//     const priceIncrement = () => {
// setPrice(price+10);
//     }


//   return (
//     <div>
//         <h4>{items}</h4>
//         <h4>{price}</h4>
//         <button onClick={itemsIncrement}>items</button>
//         <button onClick={priceIncrement}>price</button>
//     <p>The users items are this many {items}</p>
//     <p>The price users is ease paying for each item {price}</p>
//     </div>
//   )
// }

// export default Stateusehook

// // adding obj state varibles
// import React from 'react'
// import {useState} from 'react';

// export const Stateusehook = () => {
//     const[name, setName]=useState({name:"john"});
//   const updateName = () => {
//     setName ({age:'unknown'})
//   }
  
//     return (
//     <div>
//         <h2>{name}</h2>
//         <button onClick={updateName.name}>Update Obj name</button>
//     </div>
//   )
// }

// export default Stateusehook;

//UseEffect hook

// The useEffect Hook accepts a function that is used to perform any side effects.
// The function passed to useEffect will run after the render is committed to the screen.
// To make a basic side effect, we will be using both useState and useEffect Hooks in the following example:

// import {useState, useEffect} from 'react'

//  const Stateusehook = () => {
//     const [age, setAge] = useState(0)
//   const handleClick = () => {
//     setAge(age + 1)
//   } 

//   useEffect(() => {
//     document.write = 'You are ' + age + ' years old!'
//     // console.log(age);
//   })

//   return <div>
//     <p>{age}</p>
//     <button onClick={handleClick}>Update Title</button>
//   </div>

// }

// export default Stateusehook;

// Cleaning up an effect: we must clean up the effect after a period,
//  and this is usually done by returning a function from within the effect function passed to useEffect.

// useEffect(() => {
//     const subscription = props.source.subscribe();
//     return () => {
//       // Cleaning up the effect
//       subscription.unsubscribe();
//     };
//   });

// This cleanup function is run to prevent memory leaks before the component is removed from the UI

//------------------------------------------
// creating multiple effects

//  import React from 'react'
import useEffect from 'react';

const Stateusehook = () => {
// first effect
useEffect (() => {
    const clicked = () => console.log('window clicked')
    window.addEventListener('click', clicked)

    return () => {
      window.removeEventListener('click', clicked)
    }
  }, [])

//second effect
useEffect(() => {
    console.log("another useEffect call");
  })

  return (
    <div>useEffect</div>
  )
}

export default Stateusehook;













































