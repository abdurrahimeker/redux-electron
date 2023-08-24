import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  //stateler bunun içerisinde tutuluyor
  country: 0,
  loading: false,
};

export const getCountry = createAsyncThunk("getCountry", async () => {
  const { data } = await axios.get("https://restcountries.com/v3.1/all");
  return data;
});

export const countrySlice = createSlice({
  name: "counter",
  initialState, //stateler bunun içerisinde import ediliyor
  reducers: {
    //fonksiyonlar buraya yazılabiliyor mesela route mantığında bir props alıp çalışan fonksiyonlar buraya yazılabilir
  },
  extraReducers: (builder) => {
    //buraya asenkron çalışan fonksiyonlar yazılabiliyor mesela mesajlar gibi
    builder.addCase(getCountry.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getCountry.fulfilled, (state, action) => {
      state.country = action.payload;
      state.loading = false;
    });
  },
});

export default countrySlice.reducer;
