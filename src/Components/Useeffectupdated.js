// USEEFFECT

// import {useState, useEffect} from 'react';

// const Useeffectupdated = () => {
//     const[count,setCount] = useState(0)

//     useEffect (()=> {
//         // console.log(count)
//     })

//   return (
//     <>
//     <h3>{count}</h3>
//     </>
//   )
// }

// export default Useeffectupdated;

// when ever we want to perform action once, especially when the app loads or mounts
// we use useeffect
// import {useEffect, useState} from 'react';

// const array = [
//     { key: "1", type: "planet", value: "Tatooine" },
//     { key: "2", type: "planet", value: "Alderaan" },
//     { key: "3", type: "starship", value: "Death Star" },
//     { key: "4", type: "starship", value: "CR90 corvette" },
//     { key: "5", type: "starship", value: "Star Destroyer" },
//     { key: "6", type: "person", value: "Luke Skywalker" },
//     { key: "7", type: "person", value: "Darth Vader" },
//     { key: "8", type: "person", value: "Leia Organa" },
//   ];
// //  const Useeffectupdated = (props) => {
//   const Useeffectupdated = () => {

//   const [inputValue, setInputValue] = useState("");
//   const [inputType, setInputType] = useState("");
//   const [filteredArray, setFilteredArray] = useState(Array);

//   const inputValueHandler = (e) => {
//         setInputValue(e.target.value);
//         console.log(inputTypeHandler);
//       };
    
//       const inputTypeHandler = (e) => {
//         setInputType(e.target.value);
//         console.log(inputTypeHandler);
//       };
    
//       useEffect(() => {
//         setFilteredArray((_) => {
//           const newArray = array
//             .filter((item) => item.value.includes(inputValue))
//             .filter((item) => item.type.includes(inputType));
//           return newArray;
//         });
//       }, [inputValue, inputType]);
    
//       // now prepare array to rendered
    
//       const listItems = filteredArray.map((item) => (
//         <>
//           <tr>
//             <td style={{ border: "1px solid blue", padding: "0 1rem" }}>
//               {item.type}
//             </td>
//             <td style={{ border: "1px solid red", padding: "0 1rem" }}>
//               {item.value}
//             </td>
//           </tr>
//         </>
//       ));

//       return (
//             <>
//               <hr />
//               <h2>useEffect use case</h2>
//               <h3>Running on state change: live filtering</h3>
//               <form
//                 style={{
//                   maxWidth: "23rem",
//                   display: "flex",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                 }}
//               >
//                 <div>
//         {/*The htmlFor property sets or returns the value of the for attribute of a label.
//         The for attribute specifies which form element a label is bound to.  */}
//                   <label htmlFor="input-type">
//                     Filter by <b>type</b>
//                   </label>
//                   <br />
//                   <input
//                     type="text"
//                     id="input-type"
//                     autoComplete="off"
//                     onChange={inputTypeHandler}
//                     style={{ height: "1.5rem", width: "10rem", marginTop: "1rem" }}
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="input-value">
//                     Filter by <b>value</b>
//                   </label>
//                   <br />
//                   <input
//                     type="text"
//                     id="input-value"
//                     autoComplete="off"
//                     onChange={inputValueHandler}
//                     style={{ height: "1.5rem", width: "10rem", marginTop: "1rem" }}
//                   />
//                 </div>
//               </form>
//               <br />
//               <table
//                 style={{ width: "20rem", border: "2px solid purple", padding: "0 1rem" }}
//               >
//                 <tr>
//                   <th>Type</th>
//                   <th>Value</th>
//                 </tr>
//                 {listItems}
//               </table>
//             </>
//           );
//         };
        
// export default Useeffectupdated;

//------------------------------------------
//// As we are using a timer inside the useEffect, It is a good practice to clear it before
// it gets set again by using the return statement of the useEffect,
// which gets executed before the main body of the useEffect hook gets evaluated
// (except for the first render).


// Running on props change update paragraph list on fetched API data update
// we want to trigger a state update due to an updated fetch() call. We are sending the fetched data
//  to a child component, and whenever that data is changed, the child component re-process it.

// import {useEffect, useState} from "react";
// import axios from "axios";


// const Useeffectupdated = () => {
//   const [userIDs, setUserIDs] = useState([]);
//   const [user, setUser] = useState({});
//   const [currentID, setCurrentID] = useState(1);

//   const endPoint =
//   "https://my-json-server.typicode.com/ifeanyidike/userdata/users";

// useEffect(() => {
//   axios.get(endPoint).then(({ data }) => setUserIDs(data));
// }, []);

// useEffect(() => {
//   const fetchUserIDs = async () => {
//     const { data } = await axios.get(`${endPoint}/${currentID}`);
//     setUser(data);
//   };

//   fetchUserIDs();
// }, [currentID]);

// const moveToNextUser = () => {
//   setCurrentID((prevId) => (prevId < userIDs.length ? prevId + 1 : prevId));
// };
// const moveToPrevUser = () => {
//   setCurrentID((prevId) => (prevId === 1 ? prevId : prevId - 1));
// };

//   return (
//     <div>
//     <div>
//       <h2>{user.name}</h2>
//       <p>Occupation: {user.job}</p>
//       <p>Sex: {user.sex}</p>
//     </div>

//   <button onClick={moveToPrevUser}>Prev</button>
//   <button onClick={moveToNextUser}>Next</button>
// </div>
// );
// }

// export default Useeffectupdated;