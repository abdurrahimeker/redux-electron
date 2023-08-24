import React from "react";
import { useSelector } from "react-redux";

const Test = () => {
  const { counter } = useSelector((initialState) => initialState.counter);

  return <div>{counter}</div>;
};

export default Test;
