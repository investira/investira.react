import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { default as WAvatar } from '@material-ui/core/Avatar';
import {
    red,
    purple,
    yellow,
    lightGreen,
    lightBlue,
    amber
} from '@material-ui/core/colors';
import { classList } from '../../utils/helpers';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1)
        }
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3)
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7)
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7)
    },
    red: {
        color: theme.palette.getContrastText(red[500]),
        backgroundColor: red[500]
    },
    blue: {
        color: theme.palette.getContrastText(lightBlue[500]),
        backgroundColor: lightBlue[500]
    },
    yellow: {
        color: theme.palette.getContrastText(yellow[500]),
        backgroundColor: yellow[500]
    },
    orange: {
        color: theme.palette.getContrastText(amber[500]),
        backgroundColor: amber[500]
    },
    green: {
        color: theme.palette.getContrastText(lightGreen[500]),
        backgroundColor: lightGreen[500]
    },
    purple: {
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500]
    }
}));

function Avatar(props) {
    const classes = useStyles();

    const xClassNames = {
        [classes.small]: props.size === 'small',
        [classes.large]: props.size === 'large',
        [classes.red]: props.color === 'red',
        [classes.blue]: props.color === 'blue',
        [classes.yellow]: props.color === 'yellow',
        [classes.orange]: props.color === 'orange',
        [classes.green]: props.color === 'green',
        [classes.purple]: props.color === 'purple'
    };

    return <WAvatar {...props} className={classList(xClassNames)} />;
}

export default Avatar;
