import { createStore } from 'redux';
import { activity } from './reducers';

const defaultState = {
    activity: 'napping'
};

export const store = createStore(activity, defaultState);