import { InitialPeopleType } from './../HW8';

type SortAction = {
    type: 'sort' 
    payload: 'up' | 'down'
}

type CheckAction = {
    type: 'check' 
    payload: number
}

type ActionType = SortAction | CheckAction

export const homeWorkReducer = (state: Array<InitialPeopleType>, action: ActionType): Array<InitialPeopleType> => {
    switch (action.type) {
        case 'sort': {
            
            let newState = [...state]
            if(action.payload === 'up'){
                
                newState = newState.sort((a, b) => {
                    if(a.name < b.name){
                        return -1 
                    } else{
                        return 1
                    }
                })
            } else if(action.payload === 'down'){
                newState = newState.sort((a, b) => {
                    if(a.name > b.name){
                        return -1
                    } else{
                        return 1
                    }
                })
            }
            return newState
        }
        case 'check': {
            return state.filter((el) => el.age > 18)
        }
        default: 
        return state
    }
};