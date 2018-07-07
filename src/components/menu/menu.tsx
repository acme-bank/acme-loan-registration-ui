import * as React from 'react';
import { Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { TypographyProps } from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import globalConfig from '../../modules/config';

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

interface IMenuProps {
    title?: string;
    logo?: JSX.Element;
    text?: string;
    variant?: TypographyProps['variant'];
    color?: TypographyProps['color'];
};

interface IMenuState {
    isMobile: boolean;
};

type MenuProps = IMenuProps & WithStyles<keyof ReturnType<typeof styles>>;

class Menu extends React.Component<MenuProps, IMenuState> {

    public componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    public resize() {
        this.setState({ isMobile: window.innerWidth <= globalConfig('mobile_max_window_size') });
    }

    public render() {

        // const { isMobile } = this.state;
        const isMobile = false;
        const { title, logo } = this.props

        if (isMobile) {
            return (
                <AppBar title={title} position="static" color="inherit">
                    <Toolbar>
                        <IconButton color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            );
        } else {
            return (
                <AppBar title={title} position="static" color="inherit">
                    <span>{logo}</span>
                </AppBar>
            );
        }
    };
};

export default withStyles(styles)(Menu);
