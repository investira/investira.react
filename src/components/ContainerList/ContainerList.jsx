import React, { memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Style from './ContainerList.module.scss';

const ContainerList = memo(props => {
    const { search, filter } = props;

    const xClassRoot = classNames(Style.root, {
        [Style.withSearch]: search && !filter,
        [Style.withFilter]: filter && !search,
        [Style.withFullHead]: search && filter
    });

    if (React.Children.count(props.children) > 1) {
        console.error('Container list deve possuir apenas 1 elemento filho.');
        return null;
    }

    return (
        <div className={xClassRoot}>
            {search && <div className={Style.searchArea}>{search}</div>}
            {filter && <div className={Style.filterArea}>{filter}</div>}
            <div className={Style.listArea}>{props.children}</div>
        </div>
    );
});

ContainerList.propTypes = {
    search: PropTypes.node,
    filters: PropTypes.node,
    children: PropTypes.node.isRequired
};

export default ContainerList;