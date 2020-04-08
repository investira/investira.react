import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { InputBase, IconButton, Divider, FormControl, Chip, Icon } from '../';

import { validators } from 'investira.sdk';
import Style from './SearchBox.module.scss';

const SearchBox = props => {
    const [clearBtn, setClearBtn] = useState(false);
    const [value, setValue] = useState(props.value || '');
    const [querySplited, setQuerySplited] = useState(
        props.value ? props.value.split(' ') : []
    );

    const searchRef = useRef();

    const handleClear = pEvent => {
        setValue('');
        setClearBtn(false);
        setQuerySplited([]);
        props.clearCallback && props.clearCallback(pEvent);
    };

    const handleChange = pEvent => {
        const xValue = pEvent.currentTarget.value;
        //setValue(xValue);
        updateValue(xValue);
    };

    const querySplit = xQuery => {
        //verifica se tem vírgula ou ponto e vírgula
        const xRegex = /,|;/gi;
        const xMatch = validators.isNull(xQuery.match(xRegex));
        const xQuerySplited = xQuery.split(xMatch ? ' ' : xRegex);
        return xQuerySplited;
    };

    const updateValue = pValue => {
        setValue(pValue);
        //querySplit(pValue);

        if (pValue.length >= 1) {
            setClearBtn(true);
            setQuerySplited(querySplit(pValue));
        } else {
            setClearBtn(false);
            setQuerySplited([]);
        }

        props.onChange && props.onChange(pValue);
    };

    const handleFilter = () => {
        props.onClickFilter && props.onClickFilter(true);
    };

    const handleDelete = chipToDelete => {
        const filtered = querySplited.filter(xValue => {
            return xValue !== chipToDelete;
        });

        setQuerySplited(filtered);
        updateValue(filtered.join(' '));
    };

    const closeKeyboard = {
        mount: () => {
            document.addEventListener('keydown', pEvent => {
                if (searchRef.current && pEvent.keyCode === 13) {
                    searchRef.current.blur();
                }
            });
        },
        unmount: () => {
            document.removeEventListener('keydown', pEvent => {
                if (searchRef.current && pEvent.keyCode === 13) {
                    searchRef.current.blur();
                }
            });
        }
    };

    useEffect(() => {
        props.fowardRef && props.fowardRef(searchRef);
        closeKeyboard.mount();

        return () => {
            closeKeyboard.unmount();
        };
    }, []);

    useEffect(() => {
        if (props.value && props.value.length > 0) {
            updateValue(props.value || '');
        }
    }, [props.value]);

    return (
        <div className={Style.root}>
            <div className={Style.searchWrap}>
                <div className={Style.inputWrap}>
                    <FormControl fullWidth>
                        <InputBase
                            inputRef={searchRef}
                            type="search"
                            id={props.id}
                            value={value}
                            onChange={handleChange}
                            onFocus={props.onFocus}
                            onBlur={props.onBlur}
                            placeholder={props.placeholder}
                            inputProps={props.inputProps}
                            startAdornment={
                                !props.onClick ? (
                                    <Icon
                                        iconName={'find'}
                                        className={Style.adornement}
                                        color={'secondaryLight'}
                                    />
                                ) : null
                            }
                        />
                    </FormControl>
                </div>
                {clearBtn && (
                    <IconButton aria-label="busca" onClick={handleClear}>
                        <Icon iconName={'cancel'} size={'16'} />
                    </IconButton>
                )}

                {props.onClick && (
                    <IconButton aria-label="busca" onClick={props.onClick}>
                        <Icon iconName={'find'} />
                    </IconButton>
                )}

                {props.filter && (
                    <IconButton
                        color="primary"
                        aria-label="filtro"
                        onClick={handleFilter}>
                        <Icon iconName={'filter'} />
                    </IconButton>
                )}
            </div>
            <Divider />
            {!validators.isEmpty(querySplited) && (
                <div className={Style.querys}>
                    {querySplited.map((xData, xIndex) => {
                        if (validators.isEmpty(xData)) {
                            return null;
                        } else {
                            return (
                                <div className={Style.chip} key={xIndex}>
                                    <Chip
                                        variant={'outlined'}
                                        color={'primary'}
                                        label={xData}
                                        size={'small'}
                                        onDelete={() => handleDelete(xData)}
                                    />
                                </div>
                            );
                        }
                    })}
                </div>
            )}
        </div>
    );
};

SearchBox.propTypes = {
    id: PropTypes.string,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    inputProps: PropTypes.object,
    filter: PropTypes.bool
};

SearchBox.defaultProps = {
    filter: false,
    id: 'searchbox'
};

export default React.memo(SearchBox);
