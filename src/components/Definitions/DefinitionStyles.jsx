import styled from "styled-components";

export const DefinitionDiv = styled.div`
    background-color: ${(props) =>
        props.LightMode ? "rgb(28, 32, 36)" : "#fff"};
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
`;

export const HrStyled = styled.hr`
    width: 100%;
`;
