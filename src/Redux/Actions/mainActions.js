import { ADD_TASK, CHANGE_THEME_COLOR, COMPLETED_TASK, EDIT_TASK, REMOVE_TASK, UPDATE_EDIT_TASK } from "../Types/mainTypes";

export const handleChangeTheme = (value) => {
    return {
        type : CHANGE_THEME_COLOR,
        value,
    };
};
export const addTask = (text) => {
    return {
        type : ADD_TASK,
        text,
    };
};
export const completedTask = (id) => {
    return {
        type : COMPLETED_TASK,
        id,
    };
};
export const removeTask = (id) => {
    return {
        type : REMOVE_TASK,
        id,
    };
};
export const editTask = (id) => {
    return {
        type : EDIT_TASK,
        id
    };
};
export const updateEditTask = (object,text) => {
    return {
        type : UPDATE_EDIT_TASK,
        object,
        text,
    };
};