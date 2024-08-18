// import React,{useContext} from "react";
// import { counterContext } from "./counter contex";


// function Counter1(){
//     const {count, increment, decrement} =useContext(counterContext);

//     return(
//         <div>
//             <p>count:{count}</p>
//             <button onClick={increment}>increment</button>
//             <button onClick={decrement}>decrement</button>
//         </div>
//     )
// }

// export default Counter1;


import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './store';

function Counter() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default Counter;