export default function listenStorage(pStorage, pAction, pChanges = {}) {
    pStorage.db
        .changes({ live: true, include_docs: true, ...pChanges })
        .on('change', data => {
            // const { changes, doc, id, seq } = data;
            // if (!pStorage.docRevs[id] || doc._rev === pStorage.docRevs[id]) {
            //     return null;
            // }

            pAction && pAction(data);
        });
}
