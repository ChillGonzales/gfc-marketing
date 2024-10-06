"use client";

import React, { createContext, useContext, useState } from "react";

const GREEN_THEME = {
  name: "green",
  main: "main",
  nav: "main",
  accent: "main",

  // Primary
  main050: "main-050",
  main100: "main-100",
  main200: "main-200",
  main300: "main-300",
  main400: "main-400",
  main500: "main-500",
  main600: "main-600",
  main700: "main-700",
  main800: "main-800",
  main900: "main-900",
  main950: "main-950",

  // Primary
  accent050: "main-050",
  accent100: "main-100",
  accent200: "main-200",
  accent300: "main-300",
  accent400: "main-400",
  accent500: "main-500",
  accent600: "main-600",
  accent700: "main-700",
  accent800: "main-800",
  accent900: "main-900",
  accent950: "main-950",

  // Neutrals
  mainGrey: "blue-grey-050",
  mainGrey050: "blue-grey-050",
  mainGrey100: "blue-grey-100",
  mainGrey200: "blue-grey-200",
  mainGrey300: "blue-grey-300",
  mainGrey400: "blue-grey-400",
  mainGrey500: "blue-grey-500",
  mainGrey600: "blue-grey-600",
  mainGrey700: "blue-grey-700",
  mainGrey800: "blue-grey-800",
  mainGrey900: "blue-grey-900",
};

const DARK_THEME = {
  name: "dark",
  main: "grey-700",
  accent: "red-vivid-500",
  nav: "grey-700",

  // Primary
  main050: "grey-050",
  main100: "grey-100",
  main200: "grey-200",
  main300: "grey-300",
  main400: "grey-400",
  main500: "grey-500",
  main600: "grey-600",
  main700: "grey-700",
  main800: "grey-800",
  main900: "grey-900",
  main950: "grey-900",

  accent050: "orange-vivid-050",
  accent100: "orange-vivid-100",
  accent200: "orange-vivid-200",
  accent300: "orange-vivid-300",
  accent400: "orange-vivid-400",
  accent500: "orange-vivid-500",
  accent600: "orange-vivid-600",
  accent700: "orange-vivid-700",
  accent800: "orange-vivid-800",
  accent900: "orange-vivid-900",
  accent950: "orange-vivid-950",

  // Neutrals
  mainGrey: "grey-050",
  mainGrey050: "grey-050",
  mainGrey100: "grey-100",
  mainGrey200: "grey-200",
  mainGrey300: "grey-300",
  mainGrey400: "grey-400",
  mainGrey500: "grey-500",
  mainGrey600: "grey-600",
  mainGrey700: "grey-700",
  mainGrey800: "grey-800",
  mainGrey900: "grey-900",
};

// Create a context with 'green' as the default value
const ThemeContext = createContext(DARK_THEME);
// can also be 'blue', 'red', 'orange', 'dark'

// ThemeProvider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(DARK_THEME);

  const changeTheme = (newThemeName) => {
    setTheme(newThemeName);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {/*<div className={`hidden`} style={{"--grey800": theme.}}></div>*/}
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the ThemeContext
export const useTheme = () => {
  return useContext(ThemeContext);
};
