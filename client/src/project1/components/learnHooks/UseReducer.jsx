import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div className=" mb-12">
        Count: {state.count}
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      </div>
      <p className=" justify-center px-10 py-10">
        The useReducer hook is a React hook that allows you to manage state in a
        functional component. It is similar to the useState hook, but it is
        designed for managing more complex state objects or state transitions
        that may require logic beyond a simple update. The useReducer hook takes
        two arguments: a reducer function and an initial state. The reducer
        function is a pure function that takes the current state and an action,
        and returns the new state. The initial state is the state value to use
        for the first render. Here is an example of how you might use the
        useReducer hook in a React component: const initialState = (count - 0 );
        In this example, the useReducer hook is used to manage the state of a
        counter component. The reducer function takes the current state and an
        action, and returns a new state based on the action type. The component
        renders a count and two buttons that dispatch actions to increment or
        decrement the count.
      </p>
    </>
  );
}
