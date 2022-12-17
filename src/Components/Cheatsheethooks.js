StateManagement
useState()
const [num, setNum] = useState('Initial value');
update state
setName (num +1);

setName('New value'); // directly
setName((value) => 'New' + value); // based on previous state

SideEffects
useEffect
useEffect( () => {
    // Side effects, HTTP request, setTimeout, ... etc.
  }, []);
  Triggers callback function only once when component is mounted.
  
  Triggers callback function when dependency 'VALUE' is changed.
  useEffect(() => {
    // Side effects, HTTP request, setTimeout, ... etc.
  }, [value]);

  Cleanup side effects when component is unmounted.
  Cleanup side effects when component is unmounted.

  Memoize a Callback
  useCallback()
  Return new function only when dependencies change.

  const handleClick = useCallback(() => {
    doSomethingWith(param1, param2);
  }, [param1, param2]);

  Memoize callback for a dynamic list of elements.
  const handleClick = useCallback((event) => {
    const button = event.target;
    const value = button.getAttribute('data-value');
    doSomethingWith(value);
  }, []);
  
  <ul>
    {objects.map((obj) => (
      <li key={obj.id}>
        <button data-value={obj.value} onClick={handleClick}>
          {obj.value}
        </button>
      </li>
    ))}
  </ul>

Memoize a Value
useMemo()
Will trigger only when dependencies change

const value = useMemo(() => {
    // evaluates only when param1 or param2 change
    return expensiveOperation(param1, param2);
  }, [param1, param2]);

//
  Context API
  useContext()
  Avoid props drilling using context API

  // create and export context
export const ThemeContext = createContext(null);

// wrap parent component with context provider
return (
  <ThemeContext.Provider value={{theme: 'dark}}>
    <App />
  </ThemeContext.Provider>
);

// use context inside any child component
const { theme } = useContext(ThemeContext);

//
Manage State#
useReducer()#
Initialize a local state and create reducer.

const initialState = {
    value: 0
  };
  
  const reducer = (state, action) {
    switch (action.type) {
      case 'increment':
        return { ...state, value: state.value + 1 };
      case 'set_to':
        return { ...state, value: state.value };
      default:
        throw new Error('Unhandled action');
    }
  };

  Create local state and dispatch actions.

  const [state, dispatch] = useReducer(reducer, initialState);
...
<button onClick={() => dispatch({ type: 'increment' })} />
<button onClick={() => dispatch({ type: 'set_to', value: 24 })} />

//
  Create Your Own Custom Hook#
  Custom hooks must start with use.

  const useApiResult = (param) => {
  const [result, setResult] = useState(null);
  useEffect(() => {
    // your tasks
  }, [param]);
  return { result };
};

// to use it in a component
const { result } = useApiResult('some-param');








































import React, { useState } from 'react'

const Cheatsheethooks = () => {
  return (
    <div>Cheatsheethooks</div>
  )
}

export default Cheatsheethooks;