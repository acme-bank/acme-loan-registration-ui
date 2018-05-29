import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    palette: {
        primary: {
            contrastText: '#fff',
            dark: '#000000',
            light: '#515455',
            main: '#292b2c',
        },
        secondary: {
            contrastText: '#000',
            dark: '#ba000d',
            light: '#ff7961',
            main: '#f44336',
        },
    },
    root: {
        flexGrow: 1,
    },
};

function MainMenu(props: any) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" className={classes.flex}>Title</Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withStyles(styles)(MainMenu);
