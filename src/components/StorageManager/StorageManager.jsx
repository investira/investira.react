// import React from 'react';
import { listenStorage } from '../../lib';

//Em progresso

const StorageManager = props => {
    console.log(props);
    listenStorage(props.storage, ({ id, changes, doc }) => {
        if (!props.storage.docRevs[id]) return;

        if (doc._rev === props.storage.docRevs[id]) return;

        props.storage.docRevs[id] = doc._rev;

        props.store.dispatch({
            type: 'DB_CHANGE',
            payload: doc.doc
        });
    });

    return props.children;
};

export default StorageManager;
