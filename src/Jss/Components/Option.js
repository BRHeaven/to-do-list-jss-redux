import { styled } from "styled-components";

const option = ({...resProps}) => (
    <option {...resProps}></option>
);
export const Option = styled(option)`
    font-weight: lighter;
    color: ${props => props.theme.text};
`;