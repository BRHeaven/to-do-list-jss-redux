/* eslint-disable no-unreachable */
import { DarkBlue } from "../../Jss/Themes/DarkBlue";
import { DarkRed } from "../../Jss/Themes/DarkRed";
import { DarkWhite } from "../../Jss/Themes/DarkWhite";
import { LightRed } from "../../Jss/Themes/LighrRed";
import { LightBlue } from "../../Jss/Themes/LightBlue";
import { LightDark } from "../../Jss/Themes/LightDark";
import { ADD_TASK, CHANGE_THEME_COLOR, COMPLETED_TASK, EDIT_TASK, REMOVE_TASK, UPDATE_EDIT_TASK } from "../Types/mainTypes";

const stateHandle = {
    themeColor : LightDark,
    task : [],
    editTask : {id:0,text:"",flag:false},
};
const handleReducer = ( state = stateHandle, action ) => {
    switch ( action.type ) {
        case CHANGE_THEME_COLOR: {
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
        }; break;
        case ADD_TASK : {
            let updateState = state.task;
            if (action.text.trim() !== '') {
                let index = updateState.findIndex(stateTask => stateTask.text === action.text);
                if (index !== -1) {
                    alert("already in task, can't add!!!");
                    return {...state};
                };
                let newTask = {id:Date.now(),text:action.text,flag:false};
                updateState.push(newTask);
            };
            state.task = updateState;
            return {...state};
        }; break;
        case COMPLETED_TASK : {
            let updateState = state.task;
            let index = updateState.findIndex(stateTask => stateTask.id === action.id);
            if (index !== -1) {
                updateState[index].flag = true;
            }
            state.task = updateState;
            return {...state};
        }; break;
        case REMOVE_TASK : {
            let updateState = state.task;
            let index = updateState.findIndex(stateTask => stateTask.id === action.id);
            if (index !== -1) {
                updateState.splice(index,1);
            };
            state.task = updateState;
            return {...state};
        }; break;
        case EDIT_TASK : {
            let updateState = state;
            let index = updateState.task.findIndex( state => state.id === action.id );
            if ( index !== -1) {
                updateState.editTask = updateState.task[index];
            } 
            state = updateState;
            return {...state};
        };
        case UPDATE_EDIT_TASK : {
            let updateState = state;
            let index = updateState.task.findIndex( state => state.id === action.object);
            console.log(action);
            console.log(updateState.task);
            console.log(index);
            if ( index !== -1 ) {
                updateState.task[index].text = action.text;
            }
            state = updateState;
            return {...state};
        };
        default: ;
    };
    return {...state};
};
export default handleReducer;