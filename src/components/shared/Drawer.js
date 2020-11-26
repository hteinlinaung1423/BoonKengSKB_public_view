import React from 'react';
import { useLocation } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SettingsIcon from '@material-ui/icons/Settings';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid';
import { useHistory } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Fab from '@material-ui/core/Fab';
import useStyles from '../../styles/components/drawer/styleDrawer'
import { getIconDrawer } from '../../utils/helpers/icon/iconHelper'
import { getIconProfile } from '../../utils/helpers/icon/iconHelper';
import clsx from 'clsx';

export default function MainMenuDrawer({ noAppBar }) {
    const history = useHistory();
    const location = useLocation();
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const [isLoading, setIsLoading] = React.useState(false);

    const logout = async () => {
        sessionStorage.clear();
        history.push('/')
    }

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    function renderIcon(param) {
        switch (param) {
            case 0:
                return <img src={`${getIconDrawer().ic_menu_home}`} />;
            case 1:
                return <img src={`${getIconDrawer().ic_menu_profile}`} />;
            case 3:
                return <img src={`${getIconDrawer().ic_menu_logout}`} />;
        }
    };

    const itemMenuActive = (text, index) => {
        const cutString = text.substring(0, 4)
        let active = location.pathname.includes(cutString)
        if (index === 2 && location.pathname.includes('Assement')) return active = true
        return active
    }


    function renderRoute(param) {
        switch (param) {
            case 0:
                return history.push("/Home");
            case 1:
                return history.push("/Profile");
            default:
                return history.push("/");
        }
    };

    const sideList = side => (
        <div
            className={classes.rootDrawer}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <div className={classes.containerAvatarUser}>
                <Grid
                    container
                    direction="column"
                    justify="space-between"
                    alignItems="center">
                    <div className={classes.containerImageUser}>
                        <img src={getIconProfile().img_profile_ict} />
                    </div>
                </Grid>
            </div>
            <div>
                <List>
                    <ListItem style={{ textAlign: 'center', padding: 0 }}>
                        <ListItemText>
                            <Typography classes={{ root: classes.welcomeMessage }}> Hello User</Typography>
                        </ListItemText>
                    </ListItem>
                </List>
            </div>
            <Divider classes={{ root: classes.rootDivider }} />
            <List disablePadding classes={{ root: classes.containerListMenu }}>
                {['Home', 'Profile'].map((text, index) => (
                    <ListItem
                        className={clsx(itemMenuActive(text, index) && classes.menuActive)}
                        classes={{ root: classes.wrapperListItem }}
                        button
                        key={text}
                        onClick={() => renderRoute(index)}
                    >
                        <ListItemIcon
                            classes={{ root: itemMenuActive(text, index) && classes.iconMenuActive }}
                            className={classes.iconMenu}
                        >
                            {renderIcon(index)}
                        </ListItemIcon>
                        <ListItemText
                            primary={text}
                            classes={{ primary: itemMenuActive(text, index) ? classes.textMenuActive : classes.textMemu }}
                        />
                    </ListItem>
                ))}
            </List>
            <List disablePadding classes={{ root: classes.containerListMenuLogout }}>
                {['Logout'].map((text, index) => (
                    <ListItem
                        button
                        key={text}
                        onClick={() => logout()}
                        className={clsx(itemMenuActive(text, index) && classes.menuActive)}
                        classes={{ root: classes.wrapperListItem }}
                    >
                        <ListItemIcon
                            classes={{ root: itemMenuActive(text, index) && classes.iconMenuActive }}
                            className={classes.iconMenu}
                        >
                            {renderIcon(3)}
                        </ListItemIcon>
                        <ListItemText
                            primary={text}
                            classes={{ primary: itemMenuActive(text, index) ? classes.textMenuActive : classes.textMemu }}
                        />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <>
            {
                noAppBar ?
                    <Fab
                        size="medium"
                        color="primary" className="adventurelearn__menuIcon" onClick={toggleDrawer('left', true)}>
                        {
                            <MenuIcon />
                        }
                    </Fab>
                    :
                    <AppBar position="static">
                        <Toolbar classes={{ root: classes.rootAppbar }}>
                            <IconButton edge='start' classes={{ root: classes.rootMenuIcon }} aria-label="menu" onClick={toggleDrawer('left', true)}>
                                <MenuIcon style={{ color: '#0492C2', fontSize: '38px' }} />
                            </IconButton>
                            <div className={clsx(classes.rootCoin)} >
                            </div>
                            <Paper elevation={0} classes={{ root: classes.rootTextfield }}>
                                <InputBase
                                    classes={{ root: classes.rootInput, input: classes.inputField }}
                                    placeholder="Search"
                                    type='search'
                                />
                                <IconButton classes={{ root: classes.rootIconButton }} aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                            </Paper>
                        </Toolbar>
                    </AppBar>
            }


            <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                <Grid container justify="center" alignItems="center" classes={{ root: classes.containerHeaderDrawer }}>
                    <Grid item xs={6}>
                    </Grid>
                    <Grid item xs={6}>
                        <div className={classes.toolbar}>
                            <IconButton className={classes.iconCloseContainer} onClick={toggleDrawer('left', false)}>
                                <CloseIcon classes={{ root: classes.iconClose }} />
                            </IconButton>
                        </div>
                    </Grid>

                </Grid>
                {sideList('left')}
            </Drawer>
        </>
    );
}