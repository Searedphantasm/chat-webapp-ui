import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1C1C1C',
            light: '#F3F5F7',
            dark: '#000000',
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#10B981',
            light: '#3B82F6',
            dark: '#F59E0B',
            contrastText: '#FAFAFF',
        },
        error: {
            main: '#FF0000',
            contrastText: '#FFFFFF',
        },
        info: {
            main: '#6366F1',
            contrastText: '#FFFFFF',
        },
        warning: {
            main: '#F59E0B',
            contrastText: '#1C1C1C',
        },
        success: {
            main: '#10B981',
            contrastText: '#FFFFFF',
        },
        text: {
            primary: '#1C1C1C',
            secondary: '#777A7D',
        },
        background: {
            default: '#FAFAFF',
            paper: '#FFFFFF',
        },
        grey: {
            500: '#9AA0A6',
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    },
})

export default theme
