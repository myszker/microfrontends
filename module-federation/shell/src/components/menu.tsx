import React from "react";
import { AppBar, Button, Stack, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  return (
    <StyledAppBar position="static">
      <StyledStack direction={"row"}>
        <StyledButton onClick={() => navigate("/")}>Home</StyledButton>
        <StyledButton onClick={() => navigate("products")}>
          Products
        </StyledButton>
        <StyledButton onClick={() => navigate("settings")}>
          Settings
        </StyledButton>
      </StyledStack>
    </StyledAppBar>
  );
};

const StyledAppBar = styled(AppBar)`
  margin-bottom: 32px;
  padding: 16px;
`;

const StyledStack = styled(Stack)`
  justify-content: center;
`;

const StyledButton = styled(Button)`
  color: #ffffff;
  border-color: #ffffff;
  margin: 0 16px;
  font-weight: bold;
`;

export { Menu };
