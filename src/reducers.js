import { NAP, EAT, PLAY } from './actions';

export function activity(state, action) {
    switch (action.type) {
        case NAP:
            return {
                activity: state.activity = 'napping'
            }
        case EAT:
            return {
                activity: state.activity = 'eating'
            }
        case PLAY:
            return {
                activity: state.activity = 'playing'
            }
        default: return state;
    }
}