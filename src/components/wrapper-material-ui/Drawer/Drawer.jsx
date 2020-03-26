import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { default as WDrawer } from '@material-ui/core/Drawer';
import { classList } from '../../utils/helpers';

const useStyles = makeStyles(
    theme => ({
        fullHeight: {
            '& $paper': {
                height: '100vh'
            }
        },
        paper: {}
    }),
    { name: 'MuiDrawer' }
);

function Drawer(props) {
    const { fullHeight, ...otherProps } = props;
    const classes = useStyles();
    const xClassNames = {
        [classes.fullHeight]: fullHeight
    };

    return (
        <WDrawer {...otherProps} className={classList(xClassNames)}>
            {props.children}
        </WDrawer>
    );
}

export default Drawer;
