import React, { memo, useState } from 'react';
import CrudContext from '../CrudContext';

const CrudProvider = memo(props => {
    const [itemData, setItemData] = useState({});

    const state = { itemData };

    const onReadOne = pData => {
        setItemData(pData);
    };

    const onCreate = pValues => {
        props.values.onCreate && props.values.onCreate(pValues);
    };

    const onRead = pParams => {
        props.values.onRead && props.values.onRead(pParams);
    };

    const onUpdate = pValues => {
        props.values.onUpdate && props.values.onUpdate(pValues);
    };

    const onDelete = (pValues, pResolve, pReject) => {
        props.values.onDelete &&
            props.values.onDelete(pValues, pResolve, pReject);
    };

    const actions = {
        onReadOne,
        ...props.actions
        // onCreate,
        // onRead,
        // onUpdate,
        // onDelete
    };

    return (
        <>
            <CrudContext.Provider
                value={{
                    ...state,
                    ...actions
                }}>
                {props.children}
            </CrudContext.Provider>
        </>
    );
});

CrudProvider.displayName = 'CrudProvider';

export default CrudProvider;
