import React, { useEffect, useState } from "react";
import { Products, Settings } from "./products";

// Poniższa funkcja pomocnicza służy do wysłania komunikatu do shella z prośbą o zwrócenie
// aktualnego stanu ustawień, i oczekuje na odpowiedź.
function fetchSettingsValue(): Promise<Settings> {
  return new Promise((resolve, reject) => {
    const listener = (message: MessageEvent) => {
      if (message.data?.type === "settingsValue") {
        window.removeEventListener("message", listener);
        resolve(message.data.data);
      }
    };
    window.addEventListener("message", listener, false);
    window.parent.postMessage({ type: "sendSettingsValue" }, "*");

    setTimeout(() => reject("timeout"), 1000);
  });
}

const ProductsContainer = () => {
  const [settings, setSettings] = useState<Settings | null>(null);

  useEffect(() => {
    let mounted = true;
    fetchSettingsValue().then(
      (s) => mounted && setSettings(s),
      () => mounted && setSettings({})
    );

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    const listener = (event: MessageEvent) => {
      if (event.data?.type === "settingsValue") {
        setSettings({ ...event.data.data });
      }
    };

    window.addEventListener("message", listener, false);

    return () => {
      window.removeEventListener("message", listener);
    };
  }, []);

  if (!settings) {
    return <>Loading...</>;
  }

  return <Products settings={settings} />;
};

export { ProductsContainer };
