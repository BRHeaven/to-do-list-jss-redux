import { styled } from "styled-components";

const td = ({...resProps}) => (
    <td {...resProps}></td>
);
export const Td = styled(td)`
    margin: 0;
    border: 1px solid ${props => props.theme.border};
`;