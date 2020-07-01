export default function listenStorage(pStorage, pAction, pChanges = {}) {
    console.log('listenStorage');
    pStorage.db
        .changes({ live: true, include_docs: true, ...pChanges })
        .on('change', change => {
            pAction && pAction(change);
        })
        .on('error', err => {
            console.log(err);
        });
}
