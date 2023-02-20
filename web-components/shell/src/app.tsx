import React, {useCallback, useEffect, useState} from "react";
import {
  createTheme,
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
} from "@mui/material";
import { Settings, SettingsPanel } from "./components/settings";

const theme = createTheme();

const customStyles = (
  <GlobalStyles styles={{ body: { backgroundColor: "#eeeeee" } }} />
);

const App = () => {
  const [settings, setSettings] = useState<Settings >({});

  useEffect(() => {
    return window.PubSub.subscribe((event) => {
      console.log('Settings changed', event.message);
      if (event.type === 'settingsChange') {
        setSettings(event.message);
      }
    });
  }, []);

  const updateSettings = useCallback((change: Settings) => {
    setSettings(change);
    window.PubSub.notify('settingsChange', { ...settings, ...change });
  }, [settings]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {customStyles}
      <SettingsPanel settings={settings} setSettings={updateSettings} />
    </ThemeProvider>
  );
};

export { App };
