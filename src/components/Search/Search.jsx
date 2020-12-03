import React, {
    memo,
    useState,
    useEffect,
    useRef,
    forwardRef,
    useContext
} from 'react';
import PropTypes from 'prop-types';
import { validators } from 'investira.sdk';
import { SearchBox, CrudConsumer, CrudContext } from '../';

import Style from './Search.module.scss';

const Search = forwardRef((props, ref) => {
    const [params, setParams] = useState({});
    const mount = useRef(false);
    const { onRead } = useContext(CrudContext);

    const handleSearch = pValues => {
        //props.onResetData && props.onResetData({});

        const xParams = {
            pesquisa: validators.isEmpty(pValues) ? undefined : pValues
        };

        setParams(xParams);
    };

    const handleClear = pValue => {
        //props.onResetData && props.onResetData({});
        setParams({ pesquisa: undefined });
    };

    useEffect(() => {
        if (mount.current) {
            props.onResetData && props.onResetData({});
            onRead && onRead(params);
            props.onUpdateParams && props.onUpdateParams(params);
        }
    }, [params.pesquisa]);

    useEffect(() => {
        mount.current = true;
    }, []);

    return (
        <div className={Style.padding}>
            <SearchBox
                ref={ref}
                value={props.value}
                onChange={handleSearch}
                placeholder={props.placeholder}
                clearCallback={handleClear}
            />
        </div>
    );
});

Search.propTypes = {
    onResetData: PropTypes.func,
    forwardRef: PropTypes.func,
    onUpdateParams: PropTypes.func
};

export default memo(Search);
