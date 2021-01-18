import React from 'react'
import {useSelector, useDispatch} from 'react-redux' //usedispatch let's us use actions
import {increment,decrment,clear,five} from './actions'

function App() {
  const counter = useSelector(state => state.counter)
  const logged  = useSelector(state => state.isLogged)
  const dispatch = useDispatch();
  return (
    <div className="App">
        <h1>counter {counter}</h1>
        <button onClick= { () => dispatch(increment())}>+Plus</button>
        <button onClick= { () => dispatch(decrment())}>-Minus</button>
        <button onClick= { () => dispatch(clear())}>CLEAR</button>
        <button onClick= { () => dispatch(five(5))}>Add 5</button>

        {/* {logged ? <h3>true or false</h3> : "nothisng to see here"} */}
        
    </div>
  );
}

export default App;
