import { useTheme } from "@mui/material";
import { Stack, Typography, Divider } from "@mui/material";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import { Images } from "src/constants";
import { StoreModel } from "src/store/store";
import { formatDate } from "src/utils/Helpers";

// WeatherCard component for displaying weather information
const WeatherCard = ({ data, theme }) => (
  <Stack
    width="25%"
    flexDirection="column"
    gap="10px"
    border="1px solid #fff"
    padding="16px"
    className="rounded-lg"
    bgcolor={theme.palette.primary.light}
  >
    <img
      src={Images[data?.list[0]?.weather[0]?.main]}
      width="40px"
      alt="weather-info"
    />
    <Typography className="capitalize">
      {data?.list[0]?.weather[0]?.description}
    </Typography>
    <Divider sx={{ borderColor: "white", width: "100%" }} />
    <Typography>{data?.city?.name}</Typography>
    <Typography fontSize="12px">
      {formatDate(data?.list[0]?.dt_txt, "DD MMMM dddd")}
    </Typography>
  </Stack>
);

// InformationCard component for displaying various weather information
const InformationCard = ({ title, value, theme }) => (
  <Stack
    bgcolor={theme.palette.primary.light}
    border="1px solid #fff"
    padding="16px"
    className="rounded-lg"
    flexDirection="row"
    justifyContent="space-between"
    alignItems="center"
  >
    <Typography fontSize="12px">{title}</Typography>
    <Typography>{value}</Typography>
  </Stack>
);

// TodayWeather component
const TodayWeather = () => {
  const theme = useTheme();
  const data: any = useSelector(
    (state: StoreModel) => state.weather.weatherData
  );

  return (
    <Stack flexDirection="column" gap="20px" padding="20px 40px">
      <Typography>Today Weather</Typography>
      <Stack width="100%" flexDirection="row" gap="20px">
        <WeatherCard data={data} theme={theme} />

        <Stack width="25%" gap="20px">
          <InformationCard
            title="Wind Speed"
            value={`${data?.list[0]?.wind?.speed} Km/h`}
            theme={theme}
          />
          <InformationCard
            title="Pressure"
            value={`${data?.list[0]?.main?.pressure} hPA`}
            theme={theme}
          />
          <InformationCard
            title="Sunrise"
            value={dayjs.unix(data?.city?.sunrise).format("HH:mm a")}
            theme={theme}
          />
        </Stack>

        <Stack width="25%" gap="20px">
          <InformationCard
            title="Humidity"
            value={`${data?.list[0]?.main?.humidity}%`}
            theme={theme}
          />
          <InformationCard
            title="Visibility"
            value={`${data?.list[0]?.visibility / 1000} Km`}
            theme={theme}
          />
          <InformationCard
            title="Sunset"
            value={dayjs.unix(data?.city?.sunset).format("HH:mm a")}
            theme={theme}
          />
        </Stack>

        <Stack
          width="25%"
          padding="16px"
          border="1px solid #fff"
          className="rounded-lg"
          justifyContent="center"
        >
          <Stack flexDirection="column" gap="8px">
            {data &&
              data.list &&
              data?.list?.map((item: any, index) => {
                if (index >= 4) {
                  return null;
                }
                return (
                  <Stack
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="flex-end"
                    key={index}
                  >
                    <Stack>
                      <Typography fontSize="13px">
                        {dayjs.unix(item?.dt).format("dddd")}
                      </Typography>
                      <Typography fontSize="12px" fontWeight={300}>
                        {dayjs.unix(item?.dt).format("HH:mm a")}
                      </Typography>
                    </Stack>
                    <Typography fontSize="14px">
                      {item?.main?.temp} °F
                    </Typography>
                  </Stack>
                );
              })}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TodayWeather;
