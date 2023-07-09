import { styled } from "styled-components";

const Input = ({name, id, ...resProps}) => (
    <input name={name} id={id} {...resProps}/>
);
export const InputTask = styled(Input)`
    grid-column: 2 / span 5;
    display: block;
    padding: 5px;
    margin: 5px auto;
    width: 90%;
    background-color: ${props => props.theme.transparent};
    color: ${props => props.theme.text};
    border: 1px solid ${props => props.theme.inputBorder};
    transition: all .4s;
    &:hover {
        border: 1px solid ${props => props.theme.hoverInputBorder};
    }
    &:focus {
        outline: none;
    }
`;