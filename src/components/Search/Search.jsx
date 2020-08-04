import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { SearchBox } from '../';
import { validators } from 'investira.sdk';
import CrudConsumer from '../CrudConsumer';

const Search = memo(props => {
    const [params, setParams] = useState({});

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
        handleRead && handleRead(params);

        props.onUpdateParams && props.onUpdateParams(params);
    }, [params]);

    return (
        <CrudConsumer>
            {({ onRead }) => {
                handleRead = onRead;
                return (
                    <SearchBox
                        onChange={handleSearch}
                        placeholder={props.placeholder}
                        clearCallback={handleClear}
                    />
                );
            }}
        </CrudConsumer>
    );
});

Search.propTypes = {
    onResetData: PropTypes.func
};

export default Search;
