import React from 'react'
import { Tr } from '../Jss/Components/Tr'
import { Td } from '../Jss/Components/Td'
import { DivListButton, DivTask, DivText } from '../Jss/Components/Div'
import { TextTask } from '../Jss/Components/Text'
import { ButtonCustomTask } from '../Jss/Components/Button'
import { connect } from 'react-redux'
import { removeTask } from '../Redux/Actions/mainActions'

function TaskCompleted(props) {
  return (
    <Tr>
        <Td>
        <DivTask>
          <DivText><TextTask>{props.object.text}</TextTask></DivText>
          <DivListButton>
            <ButtonCustomTask onClick={()=>{props.removeTask(props.object.id)}}><i className="fa fa-trash-alt" /></ButtonCustomTask>
          </DivListButton>
        </DivTask>
      </Td>
    </Tr>
  )
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeTask : (id) => {
      dispatch(removeTask(id));
    }
  };
};
export default connect(null,mapDispatchToProps)(TaskCompleted);