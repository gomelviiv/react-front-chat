import React, { FC } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { RecoilRoot } from 'recoil';

import AppRouter from './AppRouter';

import './style.scss';
import './styles/global.scss';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ce93d8',
    },
  },
});

const App: FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <HelmetProvider>
        <BrowserRouter>
          <RecoilRoot>
            <AppRouter />
          </RecoilRoot>
        </BrowserRouter>
      </HelmetProvider>
    </ThemeProvider>
  );
};
export default App;
