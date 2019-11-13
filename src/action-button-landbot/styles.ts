import styled from "styled-components";

interface Props {
  color?: string;
  size?: string;
  positionBottom?: string;
  positionRigth?: string;
}

export const ButtonActionStyled = styled.button<Props>`
  bottom: ${props => (props.positionBottom ? props.positionBottom : "31px")};
  right: ${props => (props.positionRigth ? props.positionRigth : "31px")};
  display: flex;
  position: fixed;
  border-radius: 100%;
  width: ${props => (props.size ? props.size : "3rem")};
  height: ${props => (props.size ? props.size : "3rem")};
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1em;
  background: ${props => (props.color ? props.color : "#296d9c")};
  border: 1px solid ${props => (props.color ? props.color : "#296d9c")};
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.18);
`;
