import { styled } from "styled-components";

export const Containers = styled.section`
    display: block;
    width : 90%;
    padding: 5px 10px;
    margin: 50px auto 0;
    border: 3px solid ${props => props.theme.backgroundBorder};
`;