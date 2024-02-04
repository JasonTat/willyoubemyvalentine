'use client';
import { createTheme } from "@mui/material";

const themeSetup = {
 palette: {
    primary: {
        main: '#ef5350'
    },
    secondary: {
        main: '#455a64'
    }
 }
};

const theme = createTheme(themeSetup);

export { theme }
