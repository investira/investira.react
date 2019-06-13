import React, { Component } from 'react';
import Style from './View.module.scss';

export class View extends Component {
    render() {
        const { children, ...attrs } = this.props;

        return <div {...attrs}>{children}</div>;
    }
}

export default View;
