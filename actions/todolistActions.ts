import * as actionTypes from './types/todolistTypes';
import {ISingleElementList} from '../entities/todoSingleEl';

export const setNewElemTodoList = (newElem: ISingleElementList) => ({
    type: actionTypes.SET_NEW_ELEM,
    newElem
})

export const removeElemTodoList = (newElem: ISingleElementList) => ({
    type: actionTypes.REMOVE_TODO,
    newElem
})

export const toggleElemTodoList = (newElem: Pick<ISingleElementList,"id">) => ({
    type: actionTypes.TOGGLE_CHECK,
    newElem
})
