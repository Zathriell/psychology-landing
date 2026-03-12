import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: "#6A5ACD",
        },
        secondary: {
            main: "#FFB6C1",
        },
        background: {
            default: "#f8f9fa",
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
        },
    });

export default theme;