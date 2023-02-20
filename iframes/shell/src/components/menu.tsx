import React from "react";
import { AppBar, Button, Stack, styled } from "@mui/material";

interface MenuProps {
  activateChildApp: (src: string) => void;
}
const Menu = ({ activateChildApp }: MenuProps) => {
  return (
    <StyledAppBar position="static">
      <StyledStack direction={"row"}>
        <StyledButton onClick={() => activateChildApp("/home.html")}>
          Home
        </StyledButton>
        <StyledButton onClick={() => activateChildApp("//localhost:3011")}>
          Shop #1
        </StyledButton>
        <StyledButton onClick={() => activateChildApp("//localhost:3012")}>
          Shop #2
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
