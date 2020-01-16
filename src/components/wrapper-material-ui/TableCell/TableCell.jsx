import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { default as WTableCell } from '@material-ui/core/TableCell';
const useStyles = makeStyles(theme => ({
    root: {
        borderBottom: 'none',
        padding: '8px'
    }
}));

const TableCell = props => {
    const classes = useStyles();

    const { naked, ...otherProps } = props;

    return <WTableCell className={naked ? classes.root : ''} {...otherProps} />;
};

export default TableCell;
