import { createSlice } from "@reduxjs/toolkit";
import LocalStorage from "src/utils/LocalStorage";

const initialState = {
  user: null,
  weatherData: null,
  filtertedData: [],
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    // Define a reducer for setting the user.
    setUser: (state, { payload: { user } }) => {
      // Save the user to local storage.
      LocalStorage.setInLocalStorage("user", user);

      // Update the state with the new user.
      return { ...state, user };
    },

    // Define a reducer for setting the weather data.
    setData: (state, { payload: data }) => {
      // Update the state with the new weather data.
      return { ...state, weatherData: data, duration: null };
    },

    // Define a reducer for setting the filterted data.
    setFiltertedData: (state, { payload: data }) => {
      // Update the state with the new filterted data.
      return { ...state, filtertedData: data };
    },
  },
});

// Export the actions
export const { setUser, setData, setFiltertedData } = weatherSlice.actions;

export default weatherSlice;
