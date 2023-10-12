import {
  Navigate,
  Route,
  Routes as RouteContainer,
  BrowserRouter as Router,
} from "react-router-dom";
import { Paths } from "constants/index";
import Layout from "src/components/common/Layouts/Layout";
import Home from "src/pages/Home";
import Loader from "src/components/common/Loader/Loader";
import { useGetWeatherQuery } from "src/store/services/weatherService";
import { useGeolocated } from "react-geolocated";

const Routes = () => {

  
  // Use the react-geolocated hook to get the user's coordinates.
  const { coords } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });


  // Use the useGetWeatherQuery hook to get the weather data for the user's coordinates.
  const { data, isLoading, isFetching } = useGetWeatherQuery(coords);

  // If the data is not yet available, show a loader.
  if (isLoading || isFetching || !data) {
    return <Loader />;
  }

  // Return a Router component with two Route children:
  // 1. A Route for the root path, which renders the Home page.
  // 2. A Route for the not found path, which renders a simple "Not Found" message.

  return (
    <Router>
      <RouteContainer>
        <Route
          index
          path={Paths.ROOT}
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route path={Paths.NOT_FOUND} element={<h1>Not Found</h1>} />
      </RouteContainer>
    </Router>
  );
};

export default Routes;
