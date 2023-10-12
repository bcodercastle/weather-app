import { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import Controls from "src/components/controls/Controls";
import { setFiltertedData } from "src/store/slices/weatherSlice";
import { StoreModel } from "src/store/store";
import { formatDate } from "src/utils/Helpers";

const SevenDaysSelector = () => {
  const dispatch = useDispatch();
  const { weatherData }: { weatherData: any } = useSelector(
    (state: StoreModel) => state.weather
  );
  const [duration, setDuration] = useState(dayjs().format("YYYY-MM-DD"));

  // Filter daily data based on the selected date
  const getDailyDataForDate = (dateToFilter) => {
    const filteredData =
      weatherData &&
      weatherData.list?.filter(
        (dailyEntry) =>
          formatDate(dailyEntry.dt_txt, "YYYY-MM-DD") ===
          formatDate(dateToFilter, "YYYY-MM-DD")
      );
    dispatch(setFiltertedData(filteredData));
  };

  // Handle changes when a different duration is selected
  const handleChange = (e) => {
    setDuration(e.target.value);
  };

  // Load daily data for the selected duration
  useEffect(() => {
    getDailyDataForDate(duration);
  }, [duration]);

  return (
    <Stack width="200px">
      <Controls.Select
        name="duration"
        label="Duration"
        value={duration}
        onChange={handleChange}
        options={generateDurationOptions(7)} // Generate options for 7 days
      />
    </Stack>
  );
};

// Generate date options for a specified number of days

const generateDurationOptions = (numDays: number) => {
  const options: { id: string }[] = [];
  for (let i = 0; i < numDays; i++) {
    options.push({
      id: dayjs().add(i, "day").format("YYYY-MM-DD"),
    });
  }
  return options;
};

export default SevenDaysSelector;
