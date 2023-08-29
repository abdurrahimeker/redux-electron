import { useDispatch, useSelector } from "react-redux";
import { test } from "./redux/features/counter/counterSlice";
import Test from "./Test";
import { useEffect } from "react";
import { getCountry } from "./redux/features/country/countrySlice";
import "./App.css";

// const { ipcRenderer } = require("electron");

function App() {
  const dispatch = useDispatch();

  const { counter } = useSelector((initialState) => initialState.counter);
  const { country } = useSelector((initialState) => initialState);

  console.log(country);

  useEffect(() => {
    dispatch(getCountry());
  }, []);

  const notification = () => {
    // ipcRenderer.send("show-notification", {
    //   title: "Başlık",
    //   body: "Bildirim içeriği burada.",
    // });
  };

  return (
    <div className="App">
      <div>
        <button onClick={() => dispatch(test("artir"))}>Increment</button>
        <span>{counter}</span>
        <button onClick={() => dispatch(test("azalt"))}>Decrement</button>
      </div>
      <Test />
      <button aria-label="notification value" onClick={() => notification()}>
        Notification
      </button>
    </div>
  );
}

export default App;
