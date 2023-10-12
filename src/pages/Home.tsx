import { Stack } from "@mui/material";
import TodayWeather from "src/components/pages/home/TodayWeather";
import SevenDays from "src/components/pages/home/SevenDays";

const Home = () => {
  return (
    <Stack
      justifyContent="center"
      width="100%"
      flexDirection="column"
      gap="8px"
    >
      <TodayWeather />
      <SevenDays />
    </Stack>
  );
};

export default Home;
