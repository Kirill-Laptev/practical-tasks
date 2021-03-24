enum ACTIONS_TYPE {
    CHANGE_THEME = 'theme/CHANGE_THEME'
}

type ChangeThemeType = {
    type: ACTIONS_TYPE.CHANGE_THEME
    theme: string
}

type InitStateType = {
    themes: string[]
    currentTheme: string
}

const initState = {
    themes: ['default', 'dark', 'red', 'purple'],
    currentTheme: 'default'
};

export const themeReducer = (state: InitStateType = initState, action: ChangeThemeType): InitStateType => { // fix any
    switch (action.type) {
        case ACTIONS_TYPE.CHANGE_THEME: {
            return {
                ...state,
                currentTheme: action.theme
            }
        }
        default:
            return state;
    }
};

export const changeThemeAC = (theme: string): ChangeThemeType => {
    return {type: ACTIONS_TYPE.CHANGE_THEME, theme}
}