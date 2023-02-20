import React, { useCallback, useEffect, useState } from 'react';
import {Settings, SettingsPanel} from "./settings";

import { pubsub } from "@mfe/pubsub";

const SettingsContainer = () => {
    const [settings, setSettings] = useState<Settings>({});

    useEffect(() => {
        return pubsub.subscribe((event) => {
            console.log('Settings changed', event.message);
            if (event.type === 'settingsChange') {
                setSettings(event.message);
            }
        });
    }, []);

    const updateSettings = useCallback((change: Settings) => {
        setSettings(change);
        pubsub.notify('settingsChange', { ...settings, ...change });
    }, [settings]);

    return (
        <SettingsPanel settings={settings} setSettings={updateSettings} />
    );
};

export {SettingsContainer};