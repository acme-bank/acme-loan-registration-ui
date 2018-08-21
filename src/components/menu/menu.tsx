import * as React from 'react';
import { Component, ReactNode } from 'react';

import { globalConfig } from '../../core';

interface IMenuProps {
    title?: string;
    logo?: JSX.Element;
    text?: string;
};

class Menu extends Component<IMenuProps> {

    public componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    public resize() {
        this.setState({ isMobile: window.innerWidth <= globalConfig('mobile_max_window_size') });
    }

    public render(): ReactNode {

        const { logo } = this.props

        return (
            <span>{logo}</span>
        );
    };
};

export default Menu;
