import styled from "styled-components";

export const MainReset = styled.div`
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Raleway", sans-serif;
`;

export const ButtonStyled = styled.button`
    background-color: #445;
    font-weight: bold;
    border: none;
    border-radius: 6px;
    width: 200px;
    height: 40px;
`;

export const HighlightColor = styled.span`
    color: #c508bb;
`;

export const ButtonOption = styled.button`
    color: #e1e1e1;
    cursor: pointer;
    position: relative;
    border: none;
    background: none;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: color;
    width: 80px;

    &:focus,
    &:hover {
        color: #c508bb;
        font-weight: bold;
    }

    &:focus::after,
    &:hover::after {
        width: 100%;
        left: 0%;
    }

    &::after {
        content: "";
        pointer-events: none;
        bottom: -2px;
        left: 50%;
        position: absolute;
        width: 0%;
        height: 2px;
        background-color: #c508bb;
        transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
        transition-duration: 400ms;
        transition-property: width, left;
    }
`;
