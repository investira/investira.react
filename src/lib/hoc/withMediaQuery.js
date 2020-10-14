import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const withMediaQuery = Component => {
    function wrapComponent(props) {
        const theme = useTheme();
        const isXs = useMediaQuery(theme.breakpoints.up('xs'));
        const isSm = useMediaQuery(theme.breakpoints.up('sm'));
        const isMd = useMediaQuery(theme.breakpoints.up('md'));
        const isLg = useMediaQuery(theme.breakpoints.up('lg'));
        const isXl = useMediaQuery(theme.breakpoints.up('xl'));
        const xProps = {
            ...props,
            mq:
                (isXl && 'xl') ||
                (isLg && 'lg') ||
                (isMd && 'md') ||
                (isSm && 'sm') ||
                (isXs && 'xs') ||
                'xs'
        };

        return <Component {...xProps} />;
    }

    return wrapComponent;
};

export default withMediaQuery;
