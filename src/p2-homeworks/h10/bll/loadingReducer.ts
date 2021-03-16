enum ACTIONS_TYPE {
   SET_LOADING = 'loading/SET_LOADING'
}

type LoadingStateType = {
    isLoading: boolean
}

type LoadingType = {
    type: ACTIONS_TYPE.SET_LOADING
    payload: {
        isLoading: boolean
    }
}

const initState: LoadingStateType  = {
    isLoading: false
};

export const loadingReducer = (state = initState, action: LoadingType): LoadingStateType => { // fix any
    switch (action.type) {
        case ACTIONS_TYPE.SET_LOADING: {
            return {
                ...state, 
                isLoading: action.payload.isLoading
            }
        }
        default: return state;
    }
};


export const loadingAC = (isLoading: boolean): any => {
    return {type: ACTIONS_TYPE.SET_LOADING, payload: {isLoading}}
}; // fix any