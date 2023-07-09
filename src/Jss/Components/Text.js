import { styled } from "styled-components";

const Text = ({...resProps}) => (
    <p {...resProps}></p>
);
const TextDefault = styled(Text)`
    color: ${props => props.theme.textTitle};
    letter-spacing: .5px;
    margin: 0;
`;
export const TextH1 = styled(TextDefault)`
    font-size: 1.5em;
    font-weight: bolder;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding-left: 15px;
    margin: 20px 0;
`;
export const TextH2 = styled(TextDefault)`
    font-size: 1.3em;
    font-weight: bolder;
    text-transform: uppercase;
    padding-left: 15px;
    margin: 10px 0;
`;
export const TextH3 = styled(TextDefault)`
    font-size: 1.1em;
    font-weight: bolder;
    text-align: center;
    text-transform: capitalize;
    letter-spacing: 1px;
    padding: 5px 0;
`;
export const TextTask = styled(TextDefault)`
    color : ${props => props.theme.test};
    font-size: 1em;
    padding: 5px 10px;
`;