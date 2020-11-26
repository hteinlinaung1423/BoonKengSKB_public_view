import { makeStyles } from '@material-ui/core/styles'
import { themeCommon } from '../../theme'

const useStyles = makeStyles((theme) => ({
    // Drawer
    rootDrawer: {
        width: '300px',
        [theme.breakpoints.down('xs')]: {
            width: '250px',
        },
        '@media (max-width: 520px)': {
            width: '230px',
        },
        '@media (max-width: 400px)': {
            width: '200px',
        },
        '@media (max-width: 350px)': {
            width: '190px',
        },
    },
    containerHeaderDrawer: {
        padding: '0 0 0 15px',
    },
    containerDrawerImage: {
        width: '95px',
        '& > img': {
            maxWidth: '100%',
        }
    },
    containerAvatarUser: {
        position: 'relative',
        cursor: 'pointer',
    },
    containerImageUser: {
        width: '100px',
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '90px',
            height: '90px',
        },
        [theme.breakpoints.down('xs')]: {
            width: '80px',
            height: '80px',
        },
        '@media (max-width: 350px)': {
            width: '70px',
            height: '70px',
        },
        '& > img': {
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            border: '0.5px solid #0492C2',
            objectFit: 'contain',
        }
    },
    containerProfileUser: {
        position: 'absolute',
        top: '0',
        right: '17px',
    },
    wrapperProfileUser: {
        width: '30px',
        height: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
        '& > img': {
            maxWidth: '100%',
        },
        '@media (max-width: 400px)': {
            width: '25px',
            height: '25px',
        },
        '@media (max-width: 350px)': {
            width: '20px',
            height: '20px',
        },
    },
    rootDrawerTime: {
        fontSize: '14px',
        fontWeight: '400',
        color: 'rgba(0, 0, 0, 0.6)',
        margin: '5px 0px 25px 0px',
        fontFamily: "Roboto, sans-serif",  
        lineHeight: '16px',
        color: '#7A7A7A',
        [theme.breakpoints.down('lg')]: {
            fontSize: '13px',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '12px',
        },
        '@media (max-width: 400px)': {
            fontSize: '11px',
            marginBottom: '15px'
        },
    },
    welcomeMessage: {
        fontSize: themeCommon.fontSize18px,
        fontFamily: themeCommon.RobotoBold,
        [theme.breakpoints.down('md')]: {
            fontSize: themeCommon.fontSize16px,
        },
        lineHeight: 'unset',
    },
    timeCurrent: {
        fontSize: themeCommon.fontSize14px,
        color: 'rgba(0, 0, 0, 0.6)',
    },
    containerListMenu: {
        paddingLeft: '15px',
        '@media (max-width: 400px)': {
            paddingLeft: '10px',
        },
        '@media (max-width: 350px)': {
            paddingLeft: '8px',
        },
    },
    containerListMenuLogout: {
        paddingLeft: '15px',
        marginTop: '20px',
        '@media (max-width: 400px)': {
            paddingLeft: '10px',
        },
        '@media (max-width: 350px)': {
            paddingLeft: '8px',
        },
    },
    wrapperListItem: {
        borderRadius: '30px 0 0 30px',
        padding: '0px',
        // transition: '0.3s',
        marginTop: '6px',
        marginBottom: '6px',
        height: '60px',
        '&:hover': {
            background: 'linear-gradient(-93.24deg, #FFFFFF -5.35%, rgba(255, 255, 255, 0) 75.09%), #0492C2',
            // transition: '0.3s',
        },
        '&:hover $textMemu': {
            color: '#FFFFFF',
        },
        '&:hover $iconMenu': {
            filter: 'brightness(0) invert(1)',
        },
        '@media (max-width: 1400px)': {
            height: '56px',
        },
        [theme.breakpoints.down('lg')]: {
            height: '54px',
        },
        [theme.breakpoints.down('md')]: {
            height: '50px',
        },
        '@media (max-width: 400px)': {
            height: '40px',
        },
        '@media (max-width: 350px)': {
            height: '30px',
        },
    },
    menuActive: {
        background: 'linear-gradient(-93.24deg, #FFFFFF -5.35%, rgba(255, 255, 255, 0) 75.09%), #0492C2',
    },
    textMemu: {
        fontSize: themeCommon.fontSize18px,
        color: themeCommon.lightBlue,
        fontFamily: "Roboto, sans-serif",
        '@media (max-width: 1400px)': {
            fontSize: themeCommon.fontSize16px,
        },
        [theme.breakpoints.down('lg')]: {
            fontSize: themeCommon.fontSize16px,
        },
        [theme.breakpoints.down('md')]: {
            fontSize: themeCommon.fontSize14px,
        },
        '@media (max-width: 400px)': {
            fontSize: '12px',
        },
    },
    textMenuActive: {
        fontSize: themeCommon.fontSize18px,
        color: '#FFFFFF',
        '@media (max-width: 1400px)': {
            fontSize: themeCommon.fontSize16px,
        },
        [theme.breakpoints.down('lg')]: {
            fontSize: themeCommon.fontSize16px,
        },
        [theme.breakpoints.down('md')]: {
            fontSize: themeCommon.fontSize14px,
        },
        '@media (max-width: 400px)': {
            fontSize: '12px',
        },
    },
    iconMenu: {
        height: '25px',
        marginLeft: '8px',
        minWidth: '50px !important',
        [theme.breakpoints.down('xs')]: {
            minWidth: '45px !important',
            height: '18px'
        },
        '@media (max-width: 400px)': {
            minWidth: '35px !important',
            height: '15px'
        },
    },
    iconMenuActive: {
        filter: 'brightness(0) invert(1)',
    },
    rootDivider: {
        backgroundColor: themeCommon.lightBlue,
        opacity: '0.6',
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    iconCloseContainer: {
        padding: '6px',
    },
    iconClose: {
        color: themeCommon.lightBlue,
        fontSize: '32px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '28px',
        },
        '@media (max-width: 400px)': {
            fontSize: '20px',
        },
    },

    // Feedback
    feedbackRoot: {
        backgroundColor: 'rgba(47,47,47,0.6)'
    },
    feedbackContainer: {

    },
    feedbackPaper: {
        margin: 0,
        position: 'absolute',
        width: '750px',
        height: '580px',
        borderRadius: '10px',
        [theme.breakpoints.down('md')]: {
            width: '600px',
            height: '560px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '80%',
            height: '63%',
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            height: '60%',
        },
    },
    rootDialogTitle: {
        backgroundColor: '#098EAC',
        color: '#FFFFFF',
        height: '100px',
        padding: '0 30px 0 30px',
        display: 'flex',
        alignItems: 'center',
        '& > h2': {
            fontSize: '22px',
            fontFamily: themeCommon.RobotoBold,
            lineHeight: '25.78px',
            [theme.breakpoints.down('md')]: {
                fontSize: themeCommon.fontSize20px,
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: themeCommon.fontSize18px,
            },
            [theme.breakpoints.down('xs')]: {
                fontSize: themeCommon.fontSize16px,
            },
        },
        [theme.breakpoints.down('md')]: {
            height: '85px',
        },
        [theme.breakpoints.down('sm')]: {
            height: '75px',
        },
        [theme.breakpoints.down('xs')]: {
            height: '65px',
        },
    },
    baseStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
        border: '1px dashed #000000',
        color: '#D7D7D7',
        outline: 'none',
        fontFamily: themeCommon.RobotoBold,
        fontSize: '18px',
        height: '80px',
        transition: 'border .24s ease-in-out',
        marginBottom: '26px',
        marginTop: '4px',
        [theme.breakpoints.down('md')]: {
            fontSize: '16px',
            height: '85px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px',
            height: '75px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '12px',
            height: '65px',
        },
    },

    baseStyleChosen: { 
        display: 'flex',
        backgroundColor: 'skyblue',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
        border: '1px dashed #000000',
        color: 'white',
        outline: 'none',
        fontFamily: themeCommon.RobotoBold,
        fontSize: '18px',
        height: '80px',
        transition: 'border .24s ease-in-out',
        marginBottom: '26px',
        marginTop: '4px',
        [theme.breakpoints.down('md')]: {
            fontSize: '16px',
            height: '85px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px',
            height: '75px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '12px',
            height: '65px',
        },
    },

    baseStyleReject: { 
        display: 'flex',
        backgroundColor: 'rgba(218,42,28,0.6)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
        border: '1px dashed #000000',
        color: 'white',
        outline: 'none',
        fontFamily: themeCommon.RobotoBold,
        fontSize: '18px',
        height: '80px',
        transition: 'border .24s ease-in-out',
        marginBottom: '26px',
        marginTop: '4px',
        [theme.breakpoints.down('md')]: {
            fontSize: '16px',
            height: '85px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px',
            height: '75px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '12px',
            height: '65px',
        },
    },
    
    rootDialogContent: {
        backgroundColor: '#FFFFFF',
        padding: '20px 30px 20px 30px',
    },

    dialogContentTitle: {
        color: '#2F2F2F',
        fontFamily: themeCommon.RobotoBold,
        fontSize: '22px',
        [theme.breakpoints.down('md')]: {
            fontSize: '20px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '18px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '16px',
        },
    },
    rootFeedbackSubject: {
        margin: '4px 0px 4px 0px',
        backgroundColor: '#FFFFFF',
        borderRadius: '10px',
        '& fieldset': {
            borderRadius: '10px',
        },
    },
    inputTextfield: {
        color: 'rgba(47,47,47,1)',
        fontSize: '18px',
        fontFamily: themeCommon.RobotoBold,
        [theme.breakpoints.down('md')]: {
            fontSize: '16px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '12px',
        },
        '&::placeholder': {
            color: 'rgb(47,47,47) !important',
            fontSize: '18px',
            fontFamily: themeCommon.RobotoBold,
            [theme.breakpoints.down('md')]: {
                fontSize: '16px',
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: '14px',
            },
            [theme.breakpoints.down('xs')]: {
                fontSize: '13px',
            },  
    }
    },
    rootFeedbackContent: {
        backgroundColor: '#FFFFFF',
        borderRadius: '10px',
        margin: '4px 0px 4px 0px',
        '& fieldset': {
            borderRadius: '10px',
        },
    },
    rootDialogAction:{
        padding: 0,
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            justifyContent: 'center'
        }, 
    },
    rootButtonCancel: {
        width: '180px',
        height: '50px',
        borderColor: '#098EAC',
        borderRadius: '5px',
        color: '#098EAC',
        textTransform: 'capitalize',
        fontSize: '18px',
        fontFamily: themeCommon.RobotoBold,
        [theme.breakpoints.down('md')]: {
            fontSize: '16px',
            width: '160px',
            height: '45px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px',
            width: '150px',
            height: '40px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '13px',
            width: '140px',
            height: '40px',
        },
    },
    rootButtonOk: {
        width: '180px',
        height: '50px',
        backgroundColor: '#098EAC',
        borderRadius: '5px',
        color: 'white',
        textTransform: 'capitalize',
        fontSize: '18px',
        fontFamily: themeCommon.RobotoBold,
        [theme.breakpoints.down('md')]: {
            fontSize: '16px',
            width: '160px',
            height: '45px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px',
            width: '150px',
            height: '40px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '13px',
            width: '140px',
            height: '40px',
        },
        '&:hover': {
            backgroundColor: '#0492C2'
        } 
    },
    disabledButton: {
        backgroundColor: 'rgba(9,142,172,0.8)'
    },
    //appbar
    rootAppbar: {
        backgroundImage: 'linear-gradient(89.67deg, #FFFFFF 22.21%, rgba(255, 255, 255, 0) 95.06%), linear-gradient(0deg, #0492C2, #0492C2)',
        height: '70px',
        padding: '0',
        paddingLeft: '20px',
        paddingRight: '20px',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'space-between',
            paddingLeft: '10px',
            paddingRight: '10px',
        },

    },
    rootMenuIcon: {
        marginRight: '34px',
        [theme.breakpoints.down('md')]: {
            marginRight: '10px',
        },
        [theme.breakpoints.down('sm')]: {
            flexGrow: 0,
            marginRight: '34px',
        }, 
    },
    rootTextfield: {
        padding: '2px 4px',
        marginRight: '35px',
        marginLeft: '40px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        [theme.breakpoints.down('md')]: {
            marginRight: '10px',
            marginLeft: '10px',
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    },

    rootInput: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },

    rootIconButton: {
        padding: 10,
        color: '#C5C5C5'
    },
    rootSettingIcon: {
        color: '#FFFFFF',
        padding: '12px',
        [theme.breakpoints.down('md')]: {
            padding: '5px',
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    },
    inputField: {
        color: 'rgba(0, 0, 0, 0.63)',
        fontSize: '14px',
        fontFamily: themeCommon.RobotoBold,  
        '&::placeholder': {
            color: 'rgba(29, 29, 29, 0.7)',
            fontSize: '14px',
            fontFamily: themeCommon.RobotoRegular,    
        }
    },
    rootNotify: {
    },
    rootCoin:{     
        flexGrow: 1,
        marginLeft: '40px',
        [theme.breakpoints.down('md')]: {
            marginLeft: '20px',
        },
        [theme.breakpoints.down('sm')]: {
            flexGrow: 0,
            marginLeft: '0px',
        }, 
    }, 
    }), {
    name: 'DrawerHeadContainer',
    index: 1,
})

export default useStyles