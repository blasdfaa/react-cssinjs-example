import { useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { Theme } from '../theme';

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(Theme.CHILD);

  const toggleTheme = () => {
    setTheme(theme === Theme.CHILD ? Theme.ADULT : Theme.CHILD);
  };

  return <StyledThemeProvider theme={{ current: theme, toggleTheme }}>{children}</StyledThemeProvider>;
}

export default ThemeProvider;
