import { combineReducers } from 'redux';

import todoList, {ITodoListReducer} from './todolistReducer';

export default combineReducers({
    todoList
});

export interface IState {
    todoList: ITodoListReducer;
}
