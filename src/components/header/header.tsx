import * as React from 'react';
import { Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { TypographyProps } from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = (theme: Theme) => ({
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    root: {
        flexGrow: 1,
    },
});

interface Props {
    text: string;
    variant: TypographyProps['variant'];
    color: TypographyProps['color'];
};

type PropsWithStyles = Props & WithStyles<keyof ReturnType<typeof styles>>;

class Header extends React.Component<PropsWithStyles> {
    render() {
        const { text, variant, color, classes } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant={variant} color={color} className={classes.flex}>{text}</Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
};

export default withStyles(styles)<Props>(Header);
