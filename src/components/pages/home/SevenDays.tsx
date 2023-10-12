import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { StoreModel } from "src/store/store";
import { formatDate } from "src/utils/Helpers";
import { Images } from "src/constants";
import SevenDaysSelector from "./SevenDaysSelector";

const SevenDays = () => {
  const theme = useTheme();

  // Get filtered weather data from the Redux store
  const filteredData: any[] = useSelector(
    (state: StoreModel) => state.weather.filtertedData
  );

  return (
    <Stack flexDirection="column" gap={2} padding="20px 40px">
      {/* Section for the Seven Days Forecast */}
      <Stack width="100%" flexDirection="column" gap={2}>
        <Typography variant="h5">Seven Days Forecast</Typography>
        <SevenDaysSelector />
        <Grid container spacing={2} paddingBottom="10px">
          {filteredData && filteredData.length > 0 ? (
            filteredData.map((item) => (
              <Grid item xs={3} key={item.dt}>
                <Stack
                  bgcolor={theme.palette.primary.light}
                  border="1px solid #fff"
                  justifyContent="space-between"
                  flexDirection="row"
                  padding="8px"
                  className="rounded-lg"
                >
                  <Stack paddingX={1}>
                    {/* Display the date in the format "DD MMM ddd" */}
                    <Typography>
                      {formatDate(item.dt_txt, "DD MMM ddd")}
                    </Typography>
                    <Typography fontSize={12}>
                      {/* Display the time in the format "h:mm A" */}
                      {formatDate(item.dt_txt, "h:mm A")}
                    </Typography>
                  </Stack>
                  <Stack
                    paddingX={1}
                    flexDirection="row"
                    alignItems="center"
                    gap={1}
                  >
                    <Box>
                      {/* Display weather icon based on 'main' property */}
                      <img
                        width="20px"
                        src={Images[item?.weather[0]?.main]}
                        alt={item?.weather[0]?.main}
                      />
                    </Box>
                    <Stack>
                      <Typography>{item?.main?.temp} F</Typography>
                      <Typography fontSize={12}>
                        {item?.weather[0]?.main}
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Grid>
            ))
          ) : (
            // Display a message when there is no data
            <Box textAlign="center" width="100%" paddingY={3}>
              <Typography>No data</Typography>
            </Box>
          )}
        </Grid>
      </Stack>
    </Stack>
  );
};

export default SevenDays;
