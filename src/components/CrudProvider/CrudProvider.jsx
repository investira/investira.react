import React, { memo, useState } from 'react';
import CrudContext from '../CrudContext';

const CrudProvider = memo(props => {
    const onCreate = pValues => {
        props.values.onCreate && props.values.onCreate(pValues);
    };

    const onRead = pParams => {
        props.values.onRead && props.values.onRead(pParams);
    };

    const onUpdate = pValues => {
        props.values.onUpdate && props.values.onUpdate(pValues);
    };

    const onDelete = pValues => {
        props.values.onDelete && props.values.onDelete(pValues);
    };

    return (
        <>
            <CrudContext.Provider
                value={{
                    ...props.value,
                    onCreate,
                    onRead,
                    onUpdate,
                    onDelete
                }}>
                {props.children}
            </CrudContext.Provider>
        </>
    );
});

CrudProvider.displayName = 'CrudProvider';

export default CrudProvider;
