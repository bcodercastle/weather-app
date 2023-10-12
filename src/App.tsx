import { CssBaseline, ThemeProvider } from "@mui/material";
import Routes from "src/routes/Routing";
import { theme } from "./theme";
import { Provider } from "react-redux";
import store from "store/store";
import { Notification } from "./components/common/Notification/Notification";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <Notification />
          <Routes />
        </Provider>
      </ThemeProvider>
    </>
  );
};

export default App;
