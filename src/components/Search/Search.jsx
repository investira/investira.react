import React, { memo, useState, useEffect, useRef, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { SearchBox, CrudConsumer } from '../';
import { validators } from 'investira.sdk';
import Style from './Search.module.scss';

const Search = forwardRef((props, ref) => {
    const [params, setParams] = useState();
    const mount = useRef(false);

    let handleRead = null;

    const handleSearch = pValues => {
        props.onResetData && props.onResetData({});

        const xParams = {
            pesquisa: validators.isEmpty(pValues) ? undefined : pValues
        };

        setParams(xParams);
    };

    const handleClear = pValue => {
        props.onResetData && props.onResetData({});
        setParams({ pesquisa: undefined });
    };

    useEffect(() => {
        if (mount.current) {
            handleRead && handleRead(params);
            props.onUpdateParams && props.onUpdateParams(params);
        }
    }, [params]);

    useEffect(() => {
        mount.current = true;
    }, []);

    return (
        <CrudConsumer>
            {({ onRead }) => {
                handleRead = onRead;
                return (
                    <div className={Style.padding}>
                        <SearchBox
                            ref={ref}
                            onChange={handleSearch}
                            placeholder={props.placeholder}
                            clearCallback={handleClear}
                        />
                    </div>
                );
            }}
        </CrudConsumer>
    );
});

Search.propTypes = {
    onResetData: PropTypes.func,
    forwardRef: PropTypes.func,
    onUpdateParams: PropTypes.func
};

export default memo(Search);
