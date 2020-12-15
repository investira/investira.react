import React, { memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { Typography } from '../';

import Style from './ContainerList.module.scss';

const ContainerList = memo(props => {
    const { search, filter, bottomLabel } = props;

    const xClassRoot = classNames(Style.root, {
        [Style.withSearch]: search && !filter,
        [Style.withFilter]: filter && !search,
        [Style.withFullHead]: search && filter
    });

    if (React.Children.count(props.children) > 1) {
        console.error('Container list deve possuir apenas 1 elemento filho.');
        return null;
    }

    const xClassFilter = classNames(Style.filterArea, {
        [Style.filterAreaSticky]: props.sticky
    });

    const xClassList = classNames(Style.listArea, {
        [Style.listAreaSticky]: props.sticky
    });

    return (
        <div className={xClassRoot}>
            {search && <div className={Style.searchArea}>{search}</div>}
            {filter && <div className={xClassFilter}>{filter}</div>}
            {bottomLabel && (
                <div className={Style.bottomLabelArea}>
                    {
                        <Typography variant={'caption'} color={'textSecondary'}>
                            {bottomLabel}
                        </Typography>
                    }
                </div>
            )}
            <div className={xClassList}>{props.children}</div>
        </div>
    );
});

ContainerList.propTypes = {
    search: PropTypes.node,
    filter: PropTypes.node,
    bottomLabel: PropTypes.node,
    children: PropTypes.node.isRequired,
    sticky: PropTypes.bool
};

ContainerList.defaultProps = {
    sticky: false
};

export default ContainerList;
