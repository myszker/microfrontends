import React, { ChangeEvent } from "react";
import {
  Box,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  styled,
  Switch,
  TextField,
  Typography,
} from "@mui/material";

interface Settings {
  displayStock?: boolean;
  minCostValue?: number;
  sortBy?: "none" | "label" | "price" | "stock";
}

interface SettingsProps {
  settings: Settings;
  setSettings: (update: Settings) => void;
}

const SettingsPanel = ({ settings, setSettings }: SettingsProps) => {
  const togglePrice = () => {
    setSettings({ displayStock: !settings?.displayStock });
  };

  const filterByPrice = (event: ChangeEvent<HTMLInputElement>) => {
    setSettings({ minCostValue: +event.target.value });
  };

  const orderBy = (event: SelectChangeEvent) => {
    setSettings({
      sortBy: event.target.value as Settings["sortBy"],
    });
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Settings</Typography>
        <StyledBox>
          <FormControlLabel
            control={
              <Switch
                checked={!!settings.displayStock}
                onChange={togglePrice}
              />
            }
            label="Show stock"
          />
        </StyledBox>
        <StyledBox>
          <TextField
            fullWidth
            label="Min price"
            variant="outlined"
            type={"number"}
            value={settings?.minCostValue || ""}
            onChange={filterByPrice}
          />
        </StyledBox>
        <StyledBox>
          <FormControl fullWidth>
            <InputLabel id="orderby">Order by</InputLabel>
            <Select
              labelId="orderby"
              value={settings?.sortBy || "none"}
              label="Order by"
              onChange={orderBy}
            >
              <MenuItem value={"none"}>None</MenuItem>
              <MenuItem value={"label"}>Label</MenuItem>
              <MenuItem value={"price"}>Price</MenuItem>
              <MenuItem value={"stock"}>Stock</MenuItem>
            </Select>
          </FormControl>
        </StyledBox>
      </CardContent>
    </Card>
  );
};

const StyledBox = styled(Box)`
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 8px;
  margin-bottom: 8px;
  padding-top: 8px;
  margin-top: 8px;

  &:last-child {
    border-bottom: none;
  }
`;

export { SettingsPanel, Settings };
