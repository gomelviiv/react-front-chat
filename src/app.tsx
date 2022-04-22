import React, { FC } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import AppRouter from './AppRouter';

import './style.scss';
import './styles/global.scss';
import { RecoilRoot } from 'recoil';
// import { pink } from '@mui/material/colors';

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
