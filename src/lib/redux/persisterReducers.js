import { persistReducer } from 'redux-persist';
import createStorage from '../storage/createStorage';

const persiterReducers = (pReducers, pPrefix, pStorage) => {
    const xEntries = Object.entries(pReducers);
    const xStorage = createStorage(pStorage);

    const xReducers = xEntries.map(xEntry => {
        return [
            xEntry[0],
            persistReducer(
                {
                    key: `${pPrefix}-${xEntry[0]}`,
                    storage: xStorage
                },
                xEntry[1]
            )
        ];
    });

    return Object.fromEntries(xReducers);
};

export default persiterReducers;
