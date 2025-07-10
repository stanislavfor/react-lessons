// src/redux/themeReducer.js
import { TOGGLE_THEME } from './themeActions';

const initialState = {
    isDark: false // false - светлая тема
};

export const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return { ...state, isDark: !state.isDark };
        default:
            return state;
    }
};