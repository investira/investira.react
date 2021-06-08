// import React from 'react';
import { listenStorage } from '../../lib';

const StorageManager = ({ storage, store, children }) => {
    //console.log(props);
    // listenStorage(props.storage, ({ id, changes, doc }) => {
    //     if (!props.storage.docRevs[id]) return;

    //     if (doc._rev === props.storage.docRevs[id]) return;

    //     props.storage.docRevs[id] = doc._rev;

    //     props.store.dispatch({
    //         type: 'DB_CHANGE',
    //         payload: doc.doc
    //     });
    // });

    listenStorage(storage, store);

    return children;
};

export default StorageManager;
