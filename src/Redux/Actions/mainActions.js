import { ADD_TASK, CHANGE_THEME_COLOR, COMPLETED_TASK } from "../Types/mainTypes";

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