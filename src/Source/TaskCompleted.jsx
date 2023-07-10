import React from 'react'
import { Tr } from '../Jss/Components/Tr'
import { Td } from '../Jss/Components/Td'
import { DivListButton, DivTask, DivText } from '../Jss/Components/Div'
import { TextTask } from '../Jss/Components/Text'
import { ButtonCustomTask } from '../Jss/Components/Button'

export default function TaskCompleted(props) {
  return (
    <Tr>
        <Td>
        <DivTask>
          <DivText><TextTask>{props.object.text}</TextTask></DivText>
          <DivListButton>
            <ButtonCustomTask><i className="fa fa-trash-alt" /></ButtonCustomTask>
          </DivListButton>
        </DivTask>
      </Td>
    </Tr>
  )
};