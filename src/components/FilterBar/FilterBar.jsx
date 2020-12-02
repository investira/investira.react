import React, { useState } from 'react';
import { Icon } from '../';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Style from './FilterBar.module.scss';

const FilterBar = props => {
    const [active, setActive] = useState(props.initialValue);

    const handleClick = pEvent => {
        const xDataset = pEvent.currentTarget.dataset;
        setActive(Number(xDataset.index));
        props.onClick && props.onClick(xDataset.index, Number(xDataset.value));
    };

    const xData = props.data || [];

    const xClass = classNames(Style.root, {
        [Style.margin]: props.margin
    });

    return (
        <div className={xClass}>
            <nav className={Style.nav}>
                {xData.map((xItem, xIndex) => {
                    return (
                        <button
                            id={`btn-filter-${xItem.value}`}
                            data-value={xItem.value}
                            data-index={xIndex}
                            key={xIndex}
                            className={`${Style.button} ${
                                active === xIndex ? Style.active : null
                            }`}
                            onClick={handleClick}>
                            <Icon
                                className={Style.icon}
                                iconName={xItem.iconName}
                                color={
                                    active === xIndex
                                        ? xItem.default
                                        : xItem.color
                                }
                            />
                            {xItem.label}
                        </button>
                    );
                })}
            </nav>
        </div>
    );
};

FilterBar.defaultProps = {
    margin: true
};

FilterBar.propTypes = {
    onClick: PropTypes.func,
    data: PropTypes.array
};

export default FilterBar;
