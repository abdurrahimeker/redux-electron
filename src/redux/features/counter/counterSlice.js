import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //stateler bunun içerisinde tutuluyor
  counter: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState, //stateler bunun içerisinde import ediliyor
  reducers: {
    //fonksiyonlar buraya yazılabiliyor mesela route mantığında bir props alıp çalışan fonksiyonlar buraya yazılabilir
    test: (state, props) => {
      if (props.payload === "artir") state.counter += 1;
      else if (props.payload === "azalt") state.counter -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { test } = counterSlice.actions;

export default counterSlice.reducer;
