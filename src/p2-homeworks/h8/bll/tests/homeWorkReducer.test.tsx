import { InitialPeopleType } from "../../HW8";
import { homeWorkReducer } from "../homeWorkReducer";

let initialState: Array<InitialPeopleType>;

beforeEach(() => {
    initialState = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55}
    ]
})

test('sort up', () => {
    const newState: Array<InitialPeopleType> = homeWorkReducer(initialState, {type: 'sort', payload: 'up'})
    expect(newState[0].name).toBe('Александр')
})

test('sort down', () => {
    const newState: Array<InitialPeopleType> = homeWorkReducer(initialState, {type: 'sort', payload: 'down'})
    expect(newState[0].name).toBe('Кот')
    expect(newState[newState.length - 1].name).toBe('Александр')
})

test('check age bigger than 18', () => {
    const newState: Array<InitialPeopleType> = homeWorkReducer(initialState, {type: 'check', payload: 18})
    const checkOnAge = newState.filter((el) => el.age < 18)
    expect(checkOnAge.length).toBe(0)
})