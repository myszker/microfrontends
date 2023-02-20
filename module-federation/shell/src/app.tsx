import React from "react";
import {
  Container,
  createTheme,
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
} from "@mui/material";

import { Menu } from "./components/menu";
import { ProductsLoader } from "./components/products-loader";
import { SettingsLoader } from "./components/settings-loader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/home";

const theme = createTheme();

const customStyles = (
  <GlobalStyles styles={{ body: { backgroundColor: "#eeeeee" } }} />
);

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {customStyles}
        <Menu />
        <Container fixed>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<ProductsLoader />} />
            <Route path="settings" element={<SettingsLoader />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export { App };
