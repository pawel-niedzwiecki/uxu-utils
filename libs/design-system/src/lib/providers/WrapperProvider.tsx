import { ThemeProvider } from './ThemeProvider';

type WrapperProviderProps = { children: JSX.Element | JSX.Element[] };

export const WrapperProvider = ({ children }: WrapperProviderProps) => <ThemeProvider>{children}</ThemeProvider>;
