import { combineReducers as mergeReducers } from 'redux';
import { bindStateToLocalStorage } from '..';

const combineReducers = (pReducers = {}, pStoreName) => {
    return bindStateToLocalStorage(mergeReducers(pReducers), pStoreName);
};

export default combineReducers;
