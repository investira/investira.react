import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { default as WIconButton } from '@material-ui/core/IconButton';
import { classList } from '../../utils/helpers';

const useStyles = makeStyles(theme => ({
    noPadding: {
        padding: '0px'
    }
}));

function IconButton(props) {
    const classes = useStyles();
    const xClassNames = {
        [classes.noPadding]: props.nopadding
    };

    return <WIconButton className={classList(xClassNames)} {...props} />;
}

export default IconButton;
