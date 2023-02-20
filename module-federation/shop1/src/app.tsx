import React from "react";
import {
  Card,
  CardContent,
  createTheme,
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { ProductsContainer } from "./components/products.container";

const theme = createTheme();
const customStyles = (
  <GlobalStyles styles={{ body: { backgroundColor: "#eeeeee" } }} />
);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {customStyles}
      <Card>
        <CardContent>
          <Typography variant="h5">Shop #1</Typography>
          <ProductsContainer />
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};

export default App;
