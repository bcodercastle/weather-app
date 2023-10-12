import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../api/api";
import { notificationSlice } from "./slices/notificationSlice";
import weatherSlice from "src/store/slices/weatherSlice";

const store = configureStore({
  reducer: {
    [weatherSlice.name]: weatherSlice.reducer,
    [notificationSlice.name]: notificationSlice.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
  devTools: true,
});

export type StoreModel = ReturnType<typeof store.getState>;

export default store;
