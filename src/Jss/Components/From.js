import { styled } from "styled-components";

const From = ({...resProps}) => (
    <form {...resProps}></form>
);
export const FromTask = styled(From)`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    width: 100%;
    margin: 10px auto;
`;