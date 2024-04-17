import {TODO_SELECT} from "./contants";
import {createSelector} from "reselect";

export function selectToDo(id) {
    return {
        type : TODO_SELECT,
        payload : {currentTodo : id},
    };
}

export const selectToDos = state => state.todos;

export const selectCurrentTodo = createSelector(
    selectToDos,
    todos => todos.currentTodo,
);