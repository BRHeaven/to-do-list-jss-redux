import { styled } from "styled-components";

const button = ({ ...resProps}) => (
    <button {...resProps}></button>
);
export const ButtonDefault = styled(button)`
    display: block;
    padding: 5px 10px;
    margin: 5px 5px;
    font-size: 1em;
    text-transform: capitalize;
    letter-spacing: .5px;
    transition: all .4s;
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.backgroundButton};
    border: 1px solid ${props => props.theme.buttonBorder};
    &:hover {
        color: ${props => props.theme.hoverText};
        background-color: ${props => props.theme.hoverBackgroundButton};
        border: 1px solid ${props => props.theme.hoverButtonBorder};
    }
`;
export const ButtonCustomTask = styled(ButtonDefault)`
    font-size: 1.2em;
`;