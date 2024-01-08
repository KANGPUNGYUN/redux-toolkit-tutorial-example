import React from "react";
// import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";
import store from "./store";
import { up } from "./counterSlice";
/*
function reducer(state, action) {
  if (action.type === "up") {
    return { ...state, value: state.value + action.step };
  }
  return state;
}

const initialState = { value: 0 };
const store = createStore(reducer, initialState);
*/
function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.counter.value;
  });
  return (
    <div>
      <button
        onClick={() => {
          // dispatch({ type: "counterSlice/up", step: 2 });
          dispatch(up(2));
        }}
      >
        +
      </button>{" "}
      {count}
    </div>
  );
}
function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter></Counter>
      </div>
    </Provider>
  );
}

export default App;
