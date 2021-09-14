import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { default as WBadge } from '@material-ui/core/Badge';
import { classList } from '../../utils/helpers';

const useStyles = makeStyles(
    theme => ({
        specialAnchor: {
            '& $badge': {
                bottom: '1%'
            }
        },
        // animated: {
        //     '& $badge': {
        //         animation: `$bounceIn 750ms ${theme.transitions.easing.easeInOut}`
        //     }
        // },
        // '@keyframes bounceIn': {
        //     '0%': {
        //         transform: 'scale3d(1, 1, 1)'
        //     },
        //     '5%': {
        //         transform: 'scale3d(0.8, 0.8, 0.8)'
        //     },
        //     '20%': {
        //         transform: 'scale3d(1.1, 1.1, 1.1)'
        //     },
        //     '40%': {
        //         transform: 'scale3d(0.9, 0.9, 0.9)'
        //     },
        //     '60%': {
        //         transform: 'scale3d(1.03, 1.03, 1.03)'
        //     },
        //     '80%': {
        //         transform: 'scale3d(0.97, 0.97, 0.97)'
        //     },
        //     '100%': {
        //         transform: 'scale3d(1, 1, 1)'
        //     }
        // },
        extraLarge: {
            '& $badge': {
                width: theme.spacing(5),
                height: theme.spacing(5),
                borderRadius: theme.spacing(4),
                '& svg': {
                    width: '24px',
                    height: '24px'
                }
            }
        },
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
        // [classes.animated]: props.animated === 'true',
        [classes.specialAnchor]: anchorOrigin?.special,
        [classes.extraLarge]: props.size === 'XL',
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
