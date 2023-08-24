import { useDispatch, useSelector } from "react-redux";
import { test } from "./redux/features/counter/counterSlice";
import Test from "./Test";
import { useEffect } from "react";
import { getCountry } from "./redux/features/country/countrySlice";

function App() {
  const dispatch = useDispatch();

  const { counter } = useSelector((initialState) => initialState.counter);
  const { country } = useSelector((initialState) => initialState);

  console.log(country);

  useEffect(() => {
    dispatch(getCountry());
  }, []);

  return (
    <div className="App">
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(test("artir"))}
        >
          Increment
        </button>
        <span>{counter}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(test("azalt"))}
        >
          Decrement
        </button>
      </div>
      <Test />
    </div>
  );
}

export default App;
