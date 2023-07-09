import { styled } from "styled-components";

const Div = ({...resProps}) => {
    return <div {...resProps}></div>;
};
export const DivTask = styled(Div)`
    display : grid;
    grid-template-columns: repeat( 3, 1fr);
`;
export const DivText = styled(Div)`
    grid-column: 1 / span 2;
    display: flex;
    justify-content: start;
    align-items: center;
`;
export const DivListButton = styled(Div)`
    grid-column: 3 / span 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;