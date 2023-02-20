import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  createTheme,
  CssBaseline,
  GlobalStyles,
  Grid,
  styled,
  ThemeProvider,
} from "@mui/material";
import { Settings, SettingsPanel } from "./components/settings";
import { Menu } from "./components/menu";

const theme = createTheme();

const customStyles = (
  <GlobalStyles styles={{ body: { backgroundColor: "#eeeeee" } }} />
);
const hash = () => {
  return Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substr(0, 5);
};

const App = () => {
  const [iframeSrc, setIframeSrc] = useState("/home.html");
  const [settings, setSettings] = useState<Settings>({});
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const activateChildApp = (src: string) => {
    setIframeSrc(`${src}?${hash()}`);
  };

  const updateSettings = (update: Settings) => {
    const newSettings = {
      ...settings,
      ...update,
    };
    setSettings(newSettings);
    // post message to active child iframe
    iframeRef.current!.contentWindow!.postMessage(
      { type: "settingsValue", data: newSettings },
      "*"
    );
  };

  useEffect(() => {
    const listener = (event: MessageEvent) => {
      if (event.data?.type === "sendSettingsValue") {
        iframeRef.current!.contentWindow!.postMessage(
          { type: "settingsValue", data: settings },
          "*"
        );
      }

      if (event.data?.type === "updateIframeHeight") {
        iframeRef.current!.style.height = event.data.height + "px";
      }
    };

    window.addEventListener("message", listener, false);

    return () => {
      window.removeEventListener("message", listener);
    };
  });

  useEffect(() => {
    if ((window as any).iFrameResize) {
      (window as any).iFrameResize({ log: false }, iframeRef.current);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {customStyles}
      <Menu activateChildApp={activateChildApp} />
      <Container fixed>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <StyledIframe
              name="content"
              src={iframeSrc}
              ref={iframeRef}
              title="Iframe z mikro-frontem"
            />
          </Grid>
          <Grid item xs={4}>
            <SettingsPanel settings={settings} setSettings={updateSettings} />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

const StyledIframe = styled("iframe")`
  display: block;
  width: 100%;
  border: 0;
  background: none;
  min-height: 100px;
`;

export { App };
