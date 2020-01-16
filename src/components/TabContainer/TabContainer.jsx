import React from 'react';
import PropTypes from 'prop-types';
import Style from './TabContainer.module.scss';

const TabContainer = props => {
    return (
        <div className={Style.root}>
            <div id={`tab-${props.activeTab}`} className={Style.content}>
                {props.children[props.activeTab]}
            </div>
        </div>
    );
};

TabContainer.propTypes = {
    activeTab: PropTypes.number
};

export default React.memo(TabContainer);
