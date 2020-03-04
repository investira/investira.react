import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import { Typography } from '..';

export const styles = {
    root: {
        border: 'none',
        marginBottom: '24px'
    },
    legend: {
        marginBottom: '8px'
    }
};

function Fieldset(props) {
    const { classes, className, legend, children, ...otherProps } = this.props;

    let xClass = classNames(classes.root, className, {});

    return (
        <fieldset className={xClass} {...otherProps}>
            <legend className={classes.legend}>
                <Typography variant={'caption'}>
                    <b>{legend}</b>
                </Typography>
            </legend>
            {children}
        </fieldset>
    );
}

Fieldset.protoTypes = {
    children: PropTypes.node,
    legend: PropTypes.string
};

export default withStyles(styles, { name: 'MuiFieldset' })(Fieldset);
