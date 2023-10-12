import { Box, Stack, useTheme } from "@mui/material";
import Header from "../Header/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  return (
    <>
      <Stack
        direction="column"
        minHeight="100vh"
        bgcolor={theme.palette.primary.light}
      >
        <Stack direction="column" width="90%" mx="auto" paddingY="40px">
          <Header />
          <Stack
            width="100%"
            height="100%"
            direction="row"
            justifyContent="center"
          >
            <Box
              width="100%"
              mt="20px"
              bgcolor={theme.palette.primary.dark}
              color={theme.palette.primary.contrastText}
            >
              {children}
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Layout;
