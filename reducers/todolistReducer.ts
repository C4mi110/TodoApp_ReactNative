import * as actionTypes from '../actions/types/todolistTypes';
import { ISingleElementList } from '../entities/todoSingleEl';

export interface ITodoListReducer {
    todoList: ISingleElementList[];
}

const defaultState = (): ITodoListReducer => ({
    todoList: [{
        name: "First Example",
        desc: "Loooooooooooooooooooooooooonger description",
        id: Date.now(),
        date: Date.now(),
        checked: false
    }]
});

export default (state= defaultState(), action: any): ITodoListReducer => {
    switch (action.type) {
        case actionTypes.SET_NEW_ELEM: {
            return {
                ...state,
                todoList: [...state.todoList, action.newElem]
            }};

        case actionTypes.REMOVE_TODO: {
            const filteredTodos = state.todoList.filter((item: ISingleElementList, index: number) => {
                return item.id !== action.newElem.id;
            });
            return { 
                ...state, 
                todoList: filteredTodos 
            }};

        case actionTypes.TOGGLE_CHECK: {
            const markedTodos = state.todoList.map((item: ISingleElementList, index: number) => {
            if (item.id === action.newElem.id) {
                item.checked = !item.checked;
            }
            return item;
            });
            return { 
                ...state, 
                todoList: markedTodos 
            }};
        
        default: {
            return state;
        };
    }
};

