import * as React from 'react';
import { Component, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, MenuItem } from 'semantic-ui-react'

interface ITopMenuProps {
    title?: string;
    logo?: JSX.Element;
    text?: string;
    activeItem?: string;
};

class TopMenu extends Component<ITopMenuProps> {

    public render(): ReactNode {

        return (
            <Menu>
                <MenuItem as={NavLink} to="/" exact={true}>Home</MenuItem>
            </Menu>
        );
    };
};

export default TopMenu;
