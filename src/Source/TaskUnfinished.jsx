import React from 'react'
import { Tr } from '../Jss/Components/Tr'
import { Td } from '../Jss/Components/Td'
import { DivListButton, DivTask, DivText } from '../Jss/Components/Div'
import { TextTask } from '../Jss/Components/Text'
import { ButtonCustomTask } from '../Jss/Components/Button'
import { connect } from 'react-redux'
import { completedTask, editTask, removeTask } from '../Redux/Actions/mainActions'

function TaskUnfinished(props) {
  return (
    <Tr>
        <Td>
            <DivTask>
              <DivText><TextTask>{props.object.text}</TextTask></DivText>
              <DivListButton>
                <ButtonCustomTask onClick={()=>{props.removeTask(props.object.id)}}><i className="fa fa-trash-alt" /></ButtonCustomTask>
                <ButtonCustomTask onClick={()=>{props.editTask(props.object.id)}}><i className="fa fa-edit" /></ButtonCustomTask>
                <ButtonCustomTask onClick={()=>{props.completedTask(props.object.id)}}><i className="fa fa-check" /></ButtonCustomTask>
              </DivListButton>
            </DivTask>
        </Td>
    </Tr>
  )
};
const mapStateToProps = state => {
  return {
    handle : state.handleReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
    return {
      completedTask : (id) => {
        dispatch(completedTask(id));
      },
      removeTask : (id) => {
        dispatch(removeTask(id));
      },
      editTask : (id) => {
        dispatch(editTask(id))
      },
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(TaskUnfinished);