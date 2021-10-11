import React, {
    memo,
    useState,
    useEffect,
    useCallback,
    useRef,
    forwardRef,
    useContext
} from 'react';
import PropTypes from 'prop-types';
import { validators } from 'investira.sdk';
import { SearchBox, CrudContext } from '../';

import Style from './Search.module.scss';

const Search = forwardRef((props, ref) => {
    const [params, setParams] = useState({});
    const mount = useRef(false);
    const { onRead } = useContext(CrudContext);

    const handleSearch = pValues => {
        //props.onResetData && props.onResetData({});

        const xParams = {
            pesquisa: validators.isEmpty(pValues) ? null : pValues
        };

        setParams(xParams);
    };

    const handleClear = pValue => {
        //props.onResetData && props.onResetData({});
        setParams({ pesquisa: null });
        // props.onUpdateParams &&
        //     props.onUpdateParams({ ...params, pesquisa: undefined });
    };

    const handleRead = useCallback(() => {
        onRead && onRead(params);
    }, [params, onRead]);

    const { onUpdateParams, onResetData } = props;

    const handleUpdateParams = useCallback(() => {
        onUpdateParams && onUpdateParams(params);
    }, [params, onUpdateParams]);

    const handleReset = useCallback(() => {
        onResetData && onResetData({});
    }, [onResetData]);

    useEffect(() => {
        if (mount.current) {
            handleReset();
            handleRead();
            handleUpdateParams();
        }
    }, [params.pesquisa, handleReset, handleRead, handleUpdateParams]);

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
