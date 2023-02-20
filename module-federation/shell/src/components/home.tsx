import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const Home = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant={"h4"}>Home page</Typography>
        <Typography variant={"body2"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, beatae
          blanditiis deserunt ducimus, et excepturi, illo itaque molestiae
          molestias nam neque quasi reiciendis repellendus reprehenderit vel. At
          in rerum temporibus!
        </Typography>
      </CardContent>
    </Card>
  );
};

export { Home };
