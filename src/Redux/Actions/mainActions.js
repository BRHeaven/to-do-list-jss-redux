import { CHANGE_THEME_COLOR } from "../Types/mainTypes";

export const handleChangeTheme = (value) => {
    return {
        type : CHANGE_THEME_COLOR,
        value,
    };
};