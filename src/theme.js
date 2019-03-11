import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
    primary: '#fff',
    secondary: '#cd5200',
    error: '#cc0000'
}

export default createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
        primary: {
          // light: palette.primary,
          main: palette.primary,
          // dark: palette.primary
        },
        secondary: {
          // light: palette.secondary,
          main: palette.secondary,
          // dark: palette.secondary
        },
        error: {
          // light: palette.error,
          main: palette.error,
          // dark: palette.error
        },
    }
});