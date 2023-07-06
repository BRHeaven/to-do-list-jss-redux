import { styled } from "styled-components";

const select = ({...resProps}) => (
    <select {...resProps}></select>
);

export const Select = styled(select)`
    display: block;
    width: 100%;
    padding: 5px 10px;
    font-size: 1em;
    font-weight: bold;
    text-transform: capitalize;
    letter-spacing: .5px;
    color: ${props => props.theme.text};
    border: 2px solid ${props => props.theme.selectBorder};
    &:hover {
        background-color: ${props => props.theme.transparent};
    }
`;