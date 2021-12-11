import { useReducer } from "react";

const initalState = {
  loading: false,
  error: null,
  value: undefined,
};

function loadingValueReducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...initalState,
        loading: true,
      };
    case "error":
      return {
        ...initalState,
        error: action.error,
      };
    case "value":
      return {
        ...initalState,
        value: action.value,
      };
    default:
      return state;
  }
}

export function useLoadingValue(asyncFunction) {
  const [state, dispatch] = useReducer(loadingValueReducer, initalState);

  async function loadValue() {
    dispatch({ type: "loading" });

    asyncFunction()
      .then(value => dispatch({ type: "value", value }))
      .catch(error => dispatch({ type: "error", error }));
  }

  return [loadValue, state];
}
