import React from "react";
import {
  createTheme,
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
} from "@mui/material";
import { SettingsContainer } from "./components/settings.container";

const theme = createTheme();
const customStyles = (
  <GlobalStyles styles={{ body: { backgroundColor: "#eeeeee" } }} />
);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {customStyles}
      <SettingsContainer />
    </ThemeProvider>
  );
};

export default App;
