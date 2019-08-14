import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
    primary: '#fff',
    secondary: '#cd5200',
    error: '#cc0000'
}

export default createMuiTheme({
    typography: {
        useNextVariants: true,
        fontFamily: [
        '"Lora", serif',
        ]
    },
    palette: {
        primary: {
            main: palette.primary,
        },
        secondary: {
            main: palette.secondary,
        },
        error: {
            main: palette.error,
        },
    }
});