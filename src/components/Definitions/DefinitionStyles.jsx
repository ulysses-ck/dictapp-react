import styled from "styled-components";

export const DefinitionDiv = styled.div`
    background-color: ${(props) =>
        props.LightMode ? "rgb(28, 32, 36)" : "#f5f5f5ed"};
    color: ${(props) => (props.LightMode ? "#FFF" : "#000")};
    box-shadow: ${(props) =>
                props.LightMode
                    ? "rgba(255, 255, 255, 0.124)"
                    : "rgba(40, 44, 52, 0.124)"}
            0px 6px 24px 0px,
        ${(props) =>
                props.LightMode
                    ? "rgba(255, 255, 255, 0.124)"
                    : "rgba(40, 44, 52, 0.124)"}
            0px 0px 0px 1px;
    &:hover {
        background-color: ${(props) =>
            props.LightMode ? "rgb(38, 46, 55)" : "#f5f5f5ee"};
        transition-property: background-color;
        transition-duration: 0.3s;
        transition-timing-function: ease-in-out;
    }
`;

export const HrStyled = styled.hr`
    width: 100%;
`;

export const ErrorDefinitionDiv = styled.div`
    background-color: rgba(239, 72, 111, 0.55);
    color: ${(props) => (props.LightMode ? "#fff" : "#000")};
    border-radius: 10px;
    font-size: 26px;
    padding: 10px;
    text-align: center;
    font-family: Montserrat, Oxygen, Ubuntu, Cantarell, "Open Sans",
        "Helvetica Neue", sans-serif;
`;
