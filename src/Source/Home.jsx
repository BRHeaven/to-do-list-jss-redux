import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Containers } from '../Jss/Containers/Containers';
import { connect } from 'react-redux';
import { Select } from '../Jss/Components/Select';
import { Option } from '../Jss/Components/Option';
import { TextH1, TextH2, TextH3} from '../Jss/Components/Text';
import { FromTask } from '../Jss/Components/From';
import { InputTask } from '../Jss/Components/Input.';
import { LabelTask } from '../Jss/Components/Label';
import { ButtonDefault } from '../Jss/Components/Button';
import { Table } from '../Jss/Components/Table';
import { Thead } from '../Jss/Components/Thead';
import { Tbody } from '../Jss/Components/Tbody';
import { Tfoot } from '../Jss/Components/Tfoot';
import { Tr } from '../Jss/Components/Tr';
import { Th } from '../Jss/Components/Th';
import { addTask, handleChangeTheme } from '../Redux/Actions/mainActions';
import TaskUnfinished from './TaskUnfinished';
import TaskCompleted from './TaskCompleted';

function Home(props) {
  let newTask = '';
  const renderTaskUnfinished = () => {
    return props.handle.task.map((object,index) => {
      if(!object.flag) {
        return <TaskUnfinished key={index} object={object}/>
      } else {
        return null;
      };
    });
  };
  const renderTaskCompleted = () => {
    return props.handle.task.map((object,index) => {
      if(object.flag) {
        return <TaskCompleted key={index} object={object}/>
      } else {
        return null;
      };
    });
  };
  return (
    <ThemeProvider theme={props.handle.themeColor}>
        <Containers>
            <Select name="selectTheme" id="theme" onChange={(i) => {let {value} = i.target; props.handleTheme(value);}}>
                <Option value={1}>light dark</Option>
                <Option value={2}>light blue</Option>
                <Option value={3}>light red</Option>
                <Option value={4}>dark white</Option>
                <Option value={5}>dark blue</Option>
                <Option value={6}>dark red</Option>
            </Select>
            <TextH1>to do list</TextH1>
            <FromTask>
              <LabelTask forId="task"><span>task name</span></LabelTask>
              <InputTask name={"task"} id={"task"} onChange={(i) => {return newTask = i.target.value;}}/>
              <ButtonDefault type="button" onClick={()=>{props.addTask(newTask)}}>add task</ButtonDefault>
              <ButtonDefault type="button">update task</ButtonDefault>
            </FromTask>
            <TextH2>task to do</TextH2>
            <Table>
              <Thead>
                <Tr>
                  <Th colSpan={2}>
                    <TextH3>unfinished work</TextH3>
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {renderTaskUnfinished()}
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th colSpan={2}>
                    <i className="fa fa-leaf" />
                  </Th>
                </Tr>
              </Tfoot>
            </Table>
            <TextH2>task completed</TextH2>
            <Table>
              <Thead>
                <Tr >
                  <Th colSpan={2}>
                    <TextH3>completed work</TextH3>
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {renderTaskCompleted()}
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th colSpan={2}>
                    <i className="fa fa-leaf" />
                  </Th>
                </Tr>
              </Tfoot>
            </Table>
        </Containers>
    </ThemeProvider>
  )
};
const mapStateToProps = state => {
  return {
    handle : state.handleReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleTheme : (value) => {
      dispatch(handleChangeTheme(value));
    },
    addTask : (text) => {
      dispatch(addTask(text));
    }
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(Home);