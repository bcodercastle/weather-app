import React, { useState } from "react";
import { AppBar, Avatar, Box, Typography, Stack } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import { useDispatch } from "react-redux";

const Header = () => {
  return (
    <AppBar position="static" elevation={0}>
      <Box width="95%" mx="auto">
        <Stack direction="row" paddingY="6px">
          <Stack direction="row" alignItems="center" gap="6px">
            <AdbIcon />
            <Typography variant="h6" noWrap component="span">
              Weather
            </Typography>
          </Stack>

          <Box sx={{ flexGrow: 0, marginLeft: "auto" }}>
            <Avatar
              sx={{ width: "30px", height: "30px" }}
              alt="user"
              src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
            />
          </Box>
        </Stack>
      </Box>
    </AppBar>
  );
};

export default Header;
