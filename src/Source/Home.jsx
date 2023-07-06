import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Containers } from '../Jss/Containers/Containers';
import { connect } from 'react-redux';
import { LightDark } from '../Jss/Themes/LightDark';
import { Select } from '../Jss/Components/Select';
import { Option } from '../Jss/Components/Option';

function Home(props) {

  return (
    <ThemeProvider theme={LightDark}>
        <Containers>
            <Select name="selectTheme" id="theme">
                <Option value={1}>light dark</Option>
                <Option value={2}>light blue</Option>
                <Option value={3}>light red</Option>
                <Option value={4}>dark white</Option>
                <Option value={5}>dark blue</Option>
                <Option value={6}>dark red</Option>
            </Select>
        </Containers>
    </ThemeProvider>
  )
}
export default connect(null,null)(Home);