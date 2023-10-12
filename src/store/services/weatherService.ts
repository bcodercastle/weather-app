import { setData } from "src/store/slices/weatherSlice";
import { baseApi } from "../../api/api";

export const weatherApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Define a query endpoint for getting the weather data.
    getWeather: builder.query({
      // Specify the query parameters.
      query: (values) => ({
        url: `forecast?lat=${values.latitude}&lon=${values.longitude}&appid=24ef7c036798356a7db15145f9feab14`,
        method: "GET",
      }),
      // Specify a function to be called when the query starts.
      onQueryStarted: async (_args, { dispatch, queryFulfilled }) => {
        try {
          // Await the query to finish.
          const { data } = await queryFulfilled;

          // Dispatch an action to set the weather data in the Redux store.
          dispatch(setData(data));
        } catch (error) {
          // Log the error to the console.
          // console.error(error);
        }
      },
    }),
  }),
  // Override any existing endpoints with the same name.
  overrideExisting: true,
});

// Export the useGetWeatherQuery hook.
export const { useGetWeatherQuery } = weatherApi;
