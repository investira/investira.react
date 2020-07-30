import React, { memo, useState } from 'react';
import { Chip, Menu, MenuItem } from '../';

import CrudContext from '../CrudContext';

import Style from './ListFilter.module.scss';

const SearchFilters = memo(props => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelected] = React.useState([]);
    const [filters, setFilters] = useState([]);

    const [params, setParams] = useState({});

    const valuesSelectedRef = React.useRef([]);

    const updateParams = (pParam, pValues, pAction) => {
        props.onResetData && props.onResetData({});

        const xParams = {
            ...params,
            [pParam]: pValues.value
        };

        setParams(xParams);
        pAction(xParams);
        props.onUpdateParams && props.onUpdateParams(xParams);
    };

    const isSelected = (pFilterIndex, pSelectedIndex, pOptionIndex) => {
        if (pSelectedIndex[pFilterIndex]) {
            return pSelectedIndex[pFilterIndex].includes(pOptionIndex);
        }

        return false;
    };

    const handleClickChip = (pValue, pEvent) => {
        setAnchorEl(pEvent.currentTarget);
    };

    const handleMenuItemClick = pFilter => {
        const xMenuSelectType = pFilter.type || 'single'; //Define single como default

        if (xMenuSelectType === 'multiple') {
            handleMultipleSelect(pFilter);
        } else {
            handleSelect(pFilter);
        }
    };

    const handleSelect = pFilter => {
        const {
            action,
            filterIndex,
            filterOptions,
            filterParam,
            optionIndex
        } = pFilter;
        const xFilters = [...filters];
        const xSelected = [...selectedIndex];

        xFilters[filterIndex] = {
            ...filterOptions[optionIndex],
            param: filterParam
        };
        xSelected[filterIndex] = [optionIndex];

        setSelected(xSelected);
        setFilters(xFilters);
        updateParams(filterParam, xFilters[filterIndex], action);
        setAnchorEl(null);
    };

    const handleMultipleSelect = pFilter => {
        const {
            action,
            filterIndex,
            filterOptions,
            filterParam,
            optionIndex
        } = pFilter;

        const xFilters = [...filters];
        const xSelected = [...selectedIndex];
        const xNewValue = filterOptions[optionIndex].value;

        let xLabel = null;

        if (isSelected(filterIndex, selectedIndex, optionIndex)) {
            xSelected[filterIndex].splice(
                xSelected[filterIndex].indexOf(optionIndex),
                1
            );
            valuesSelectedRef.current.splice(
                valuesSelectedRef.current.indexOf(xNewValue),
                1
            );

            const xCurrentLastValue =
                valuesSelectedRef.current[valuesSelectedRef.current.length - 1];

            if (xCurrentLastValue) {
                xLabel = filterOptions.filter(xItem => {
                    return xItem.value === xCurrentLastValue;
                })[0].label;
            }
        } else {
            xSelected[filterIndex] = xSelected[filterIndex]
                ? [...xSelected[filterIndex], optionIndex]
                : [optionIndex];

            valuesSelectedRef.current.push(xNewValue);

            xLabel = filterOptions[optionIndex].label;
        }

        const xSize = valuesSelectedRef.current.length;

        const xNewLabel = Boolean(xSize - 1)
            ? `${xLabel} +${xSize - 1}`
            : xLabel;

        if (xSize > 0) {
            xFilters[filterIndex] = {
                label: xNewLabel,
                param: filterParam,
                value: valuesSelectedRef.current.toString()
            };
        } else {
            xFilters[filterIndex] = {};
        }

        setSelected(xSelected);
        setFilters(xFilters);
        updateParams(filterParam, xFilters[filterIndex], action);
    };

    const handleRemove = pFilter => {
        const xFilters = [...filters];
        const xSelected = [...selectedIndex];
        const { action, filterIndex, filterParam } = pFilter;

        delete xSelected[filterIndex];
        delete xFilters[filterIndex];

        valuesSelectedRef.current = [];

        setSelected(xSelected);
        setFilters(xFilters);

        updateParams(filterParam, {}, action);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <CrudContext.Consumer>
            {({ onRead }) => {
                return (
                    <div className={Style.root}>
                        <div className={Style.filtersWarp}>
                            <div className={Style.horizontalScrollable}>
                                {props.filters &&
                                    props.filters.map((xFilter, xIndex) => {
                                        const xChipProps = {
                                            icon: xFilter.icon,
                                            label: xFilter.label,
                                            className: xFilter.className
                                        };

                                        const xChipId = `chip-${xIndex}`;

                                        return (
                                            <div
                                                className={Style.item}
                                                key={xIndex}>
                                                <Chip
                                                    key={xIndex}
                                                    id={xChipId}
                                                    onClick={e =>
                                                        handleClickChip(
                                                            xFilter,
                                                            e
                                                        )
                                                    }
                                                    {...xChipProps}
                                                    color={'primary'}
                                                    variant={'outlined'}
                                                />
                                                <Menu
                                                    id={`chip-menu-${xIndex}`}
                                                    anchorEl={anchorEl}
                                                    anchorOrigin={{
                                                        vertical: 'bottom',
                                                        horizontal: 'center'
                                                    }}
                                                    transformOrigin={{
                                                        vertical: 'top',
                                                        horizontal: 'center'
                                                    }}
                                                    elevation={1}
                                                    keepMounted
                                                    open={
                                                        Boolean(anchorEl) &&
                                                        anchorEl.id === xChipId
                                                    }
                                                    onClose={handleClose}>
                                                    {xFilter.options.map(
                                                        (
                                                            xOption,
                                                            xOptionIndex
                                                        ) => {
                                                            return (
                                                                <MenuItem
                                                                    key={
                                                                        xOption.value
                                                                    }
                                                                    // disabled={index === 0}
                                                                    selected={isSelected(
                                                                        xIndex,
                                                                        selectedIndex,
                                                                        xOptionIndex
                                                                    )}
                                                                    onClick={() =>
                                                                        handleMenuItemClick(
                                                                            {
                                                                                type:
                                                                                    xFilter.type,
                                                                                filterParam:
                                                                                    xFilter.param,
                                                                                filterOptions:
                                                                                    xFilter.options,
                                                                                filterIndex: xIndex,
                                                                                optionIndex: xOptionIndex,
                                                                                action: onRead
                                                                            }
                                                                        )
                                                                    }>
                                                                    {
                                                                        xOption.label
                                                                    }
                                                                </MenuItem>
                                                            );
                                                        }
                                                    )}
                                                </Menu>
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>

                        <div className={Style.selected}>
                            {filters &&
                                filters.map((xFilter, xIndex) => {
                                    if (xFilter) {
                                        return (
                                            <div
                                                className={Style.filter}
                                                key={`filter-${xIndex}`}>
                                                <Chip
                                                    variant={'outlined'}
                                                    color={'primary'}
                                                    label={xFilter.label}
                                                    size={'small'}
                                                    onDelete={() =>
                                                        handleRemove({
                                                            filterIndex: xIndex,
                                                            filterParam:
                                                                xFilter.param,
                                                            action: onRead
                                                        })
                                                    }
                                                />
                                            </div>
                                        );
                                    }
                                })}
                        </div>
                    </div>
                );
            }}
        </CrudContext.Consumer>
    );
});

export default SearchFilters;
