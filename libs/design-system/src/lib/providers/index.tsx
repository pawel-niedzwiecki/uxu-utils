import { ThemeProvider as Theme } from './ThemeProvider';

type WrapperProviderProps = { children: JSX.Element | JSX.Element[] };

export const WrapperProvider = ({ children }: WrapperProviderProps) => <Theme theme={theme}>{children}</Theme>;
