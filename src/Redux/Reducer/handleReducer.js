/* eslint-disable no-unreachable */
import { DarkBlue } from "../../Jss/Themes/DarkBlue";
import { DarkRed } from "../../Jss/Themes/DarkRed";
import { DarkWhite } from "../../Jss/Themes/DarkWhite";
import { LightRed } from "../../Jss/Themes/LighrRed";
import { LightBlue } from "../../Jss/Themes/LightBlue";
import { LightDark } from "../../Jss/Themes/LightDark";
import { CHANGE_THEME_COLOR } from "../Types/mainTypes";

const stateHandle = {
    themeColor : LightDark,
    task : []
};
const handleReducer = ( state = stateHandle, action ) => {
    switch ( action.type ) {
        case CHANGE_THEME_COLOR: 
            let updateState = state.themeColor;
            let index = parseInt(action.value);
            switch ( index ) {
                case 1: updateState = LightDark; break;
                case 2: updateState = LightBlue; break;
                case 3: updateState = LightRed; break;
                case 4: updateState = DarkWhite; break;
                case 5: updateState = DarkBlue; break;
                case 6: updateState = DarkRed; break;
                default: ;
            }
            state.themeColor = updateState;
            return {...state};
        ; break;
        default: ;
    };
    return {...state};
};
export default handleReducer;