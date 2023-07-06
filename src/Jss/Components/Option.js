import { styled } from "styled-components";

const option = ({...resProps}) => (
    <option {...resProps}></option>
);
export const Option = styled(option)`
    font-weight: lighter;
    color: #101011;
    transition: all .5s;
    &:hover {
        color: ${props => props.theme.hoverSelectBorder};
        background-color: ${props => props.theme.background};
    }
`;