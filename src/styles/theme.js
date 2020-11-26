// JavaScript source code
import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
    palette: {
        primary: {
            //main: '#556cd6',
            //main: '#F4FF81'
            main: '#cfe8fc'
            //main: '#4486a3',
        },
        secondary: {
            main: '#4486a3',
            //main: '#C6FF00'
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 450,
            md: 600,
            lg: 960,
            xl: 1280,
        },
    },
});

export default theme;

// Colors
const bg_btn = '#098EAC';
const lightBlue = '#0492C2';
const bg_number = '#4DD091';
const hovercolor = '#e0f9ff';
const bg_btn_lightBlue = 'rgba(98, 197, 218, 0.3)';
const borderGray = 'rgb(219, 218, 218)';
const bg_btn_Blue = 'rgba(98, 197, 218, 0.5)';
const lightRed = '#DA2A1C';
const lightGray = '#2F2F2F';

// Font Size
const fontSize6px = '6px'
const fontSize8px = '8px'
const fontSize10px = '10px'
const fontSize11px = '11px'
const fontSize12px = '12px'
const fontSize14px = '14px'
const fontSize15px = '15px'
const fontSize16px = '16px'
const fontSize18px = '18px'
const fontSize20px = '20px'
const fontSize22px = '22px'
const fontSize24px = '24px'
const fontSize26px = '26px'
const fontSize28px = '28px'
const fontSize30px = '30px'
const fontSize32px = '32px'
const fontSize48px = '48px'

// Font family
const RobotoRegular = 'Roboto-Regular';
const RobotoBold = 'Roboto-Bold';

export const themeCommon = {
    bg_btn,
    lightBlue,
    bg_number,
    hovercolor,
    bg_btn_lightBlue,
    bg_btn_Blue,
    borderGray,
    lightRed,
    lightGray,

    fontSize6px,
    fontSize8px,
    fontSize10px,
    fontSize11px,
    fontSize12px,
    fontSize14px,
    fontSize15px,
    fontSize16px,
    fontSize18px,
    fontSize20px,
    fontSize22px,
    fontSize24px,
    fontSize26px,
    fontSize28px,
    fontSize30px,
    fontSize32px,
    fontSize48px,

    RobotoRegular,
    RobotoBold,

}