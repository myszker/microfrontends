import React, { useEffect, useState } from "react";
import { Products, Settings } from "./products";

export type SubscriberFn = (e: { type: string, message?: any }) => void;

export interface PubSub {
  subscribe(subFn: SubscriberFn): void;
  notify(type: string, message?: any): void;
}
declare global {
  interface Window {
    PubSub: PubSub;
  }
}

const ProductsContainer = () => {
  const [settings, setSettings] = useState<Settings>({});

  useEffect(() => {
    // Pubsub działa jak BehaviorSubject - po zasubskrybowaniu dostajemy aktualną
    // wartość. Dzięki temu możemy się zsynchronizować z aktualnym stanem ustawień.
    return window.PubSub.subscribe((event) => {
      if (event.type === 'settingsChange') {
        setSettings(event.message);
      }
    });
  }, []);

  return <Products settings={settings} />;
};

export { ProductsContainer };
