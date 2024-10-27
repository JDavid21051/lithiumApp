import React, {createContext, ReactNode, useContext} from 'react';
import {ConfigModel} from '../models/context.model';

export const APP_URL: string = 'https://auction-api-x15b.onrender.com/api/';

const ConfigContext = createContext<ConfigModel | null>(null);

export const LithiumConfigProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const config: ConfigModel = {
        apiUrl: 'https://auction-api-x15b.onrender.com/api/',
    };

    return <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>;
};

export const useLithiumConfig = (): ConfigModel => {
    const context = useContext(ConfigContext);
    if (!context) {
        throw new Error('useConfig must be used within a ConfigProvider');
    }
    return context;
};