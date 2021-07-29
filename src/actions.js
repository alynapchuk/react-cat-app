export const NAP = 'napping';
export const EAT = 'eating';
export const PLAY = 'playing';

export function actionNap() {
    return {
        type: NAP
    };
}

export function actionEat() {
    return {
        type: EAT
    };
}

export function actionPlay() {
    return {
        type: PLAY
    };
}