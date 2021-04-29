import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { default as WBadge } from '@material-ui/core/Badge';
import { classList } from '../../utils/helpers';

const useStyles = makeStyles(
    theme => ({
        large: {
            '& $badge': {
                width: theme.spacing(4),
                height: theme.spacing(4),
                borderRadius: theme.spacing(3),
                '& svg': {
                    width: '21px',
                    height: '21px'
                }
            }
        },
        small: {
            '& $badge': {
                width: theme.spacing(2),
                height: theme.spacing(2),
                borderRadius: theme.spacing(2),
                '& svg': {
                    width: '10px',
                    height: '10px'
                }
            }
        },
        badge: {}
    }),
    { name: 'MuiBadge' }
);

function Badge(props) {
    const { anchorOrigin, ...propsProps } = props;
    const classes = useStyles();

    const xClassNames = {
        [classes.large]: props.size === 'large',
        [classes.small]: props.size === 'small'
    };

    return (
        <WBadge
            {...propsProps}
            anchorOrigin={anchorOrigin}
            className={classList(xClassNames)}
        />
    );
}

export default Badge;
