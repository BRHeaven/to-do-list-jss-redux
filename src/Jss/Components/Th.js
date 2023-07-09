import { styled } from "styled-components";

const th = ({...resProps}) => (
    <th {...resProps}></th>
);
export const Th = styled(th)`
    margin: 0;
    border: 1px solid ${props => props.theme.border};
    color : ${props => props.theme.textTitle};
`;