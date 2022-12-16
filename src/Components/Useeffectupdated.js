
//use effect does similiar thing to the class based component
// componentdidmount, componentwillunmount, componentdidupdate lifecycle methods
// Examples of such effects include logging, subscriptions, mutations, etc.
// this hook uses an array of dependencies varables or states that useeffect AudioListenerto for changes
// When their values change, the main body of the useEffect hook is executed
// The return statement of this hook is used to clean methods that are already running, such as timers

// useEffect(() => {
//     some code
// }, [myObject.property1, myObject.property2]);

// Useeffect usecases
// Running once on mount: fetch API data
// Running on state change: validating input field
// Running on state change: live filtering
// Running on state change: trigger animation on new array value
// Running on props change: update paragraph list on fetched API data update
// Running on props change: updating fetched API data to get BTC updated price

// When we want to perform an action once, especially when the app loads or mounts, we can use useEffect to do it.
// we are triggering a fetch() GET request when the app is mounted, using an empty array as useEffect dependency.

// import {useState, useEffect} from 'react';

// const Useeffectupdated = () => {
//     const[bio, setBio] =useState({});

//     useEffect (() => {
// const fetchData = async() => {
//     const response = await fetch ('https://swapi.dev/api/people/1/');
//     const data = await response.json();
//     console.log(data);
//     setBio(data);
// };
// fetchData();
//     },[]);
//     // -Empty dependencies array will make useEffect to run only once
    
//   return (
//   <>
//     <hr/>
//      <h3>UseEffect usecase</h3>
//      <h3>Running once on mount:fetch api data</h3>
//      <p>Aron skywalker bio:</p>
//      {/* pre for preformatted text it will arrange text nicely */}
//      <pre>{JSON.stringify(bio)}</pre>
//      <pre>{JSON.stringify(bio)}</pre>
   
//      </>
//   )
// }

// export default Useeffectupdated;

import {useEffect, useState} from "react";

const Useeffectupdated = () => {
const[input, setInput] = useState('');
const[isValid, setIsValid]= useState(false);

// react prevent form submission when enter is pressed
//   we need to create a form handler that would prevent the default form action
const inputHandler = e => {
    setInput(e.target.value);
    console.log(inputHandler);
};

useEffect(() => {
    if (input.length < 5 || /\d/.test(input)) {
                    setIsValid(false);
                } else {
                    setIsValid(true);
                }
            }, [input]);

 return (
    <>
     <h2>useEffect use case</h2>
    <h3>Running on state change: validating input field</h3>
            <form>
                <label htmlFor="input">Write something (more than 5 non numerical characters is a valid input)</label><br />
                <input type="text" id="input" autoComplete="off" onChange={inputHandler} style={{ height: '1.5rem', width: '20rem', marginTop: '1rem' }} />
            </form>
            <p><span style={isValid ? { backgroundColor: 'lightgreen', padding: '.5rem' } : { backgroundColor: 'lightpink', padding: '.5rem' }}>{isValid ? 'Valid input' : 'Input not valid'}</span></p>
        </>
    );
//   }
};


export default Useeffectupdated;
