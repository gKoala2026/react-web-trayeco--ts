import logo from './logo.svg';
import './App.css';
import "@fontsource/inter";

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import HouseHold from './pages/HouseHold';

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

function App() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );



  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
        typography: {
          fontFamily: "Inter",
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HouseHold />}>
              {/* <Route index element={<MyApp />} /> */}
              {/*<Route path="household" element={<HouseHold />} />*/}
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
