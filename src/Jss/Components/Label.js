import { styled } from "styled-components";

const Label = ({ forId, ...resProps }) => (
    <label htmlFor={forId} {...resProps}></label>
);
export const LabelTask = styled(Label)`
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 1em;
    font-weight: bold;
    text-transform: capitalize;
    letter-spacing: .5px;
    color: ${props => props.theme.text};
`;