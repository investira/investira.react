import { combineReducers as mergeReducers } from 'redux';
import persisterReducers from './persisterReducers';

const combineReducers = (
    pReducers = {},
    pStoreName,
    pStorage,
    pBlacklist = []
) => {
    let xReducers = pReducers;

    if (pStoreName) {
        xReducers = persisterReducers(
            xReducers,
            pStoreName,
            pStorage,
            pBlacklist
        );
    }

    return mergeReducers(xReducers);
};

export default combineReducers;
