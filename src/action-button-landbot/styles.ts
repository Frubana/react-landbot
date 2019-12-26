import styled from "styled-components";

interface Props {
  color?: string;
  static?: boolean;
  disabledButton?: boolean;
  colorText?: string;
  textLabel?: string;
  size?: string;
  positionBottom?: string;
  positionRigth?: string;
}

export const ButtonActionStyled = styled.button<Props>`
  z-index: 3;
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
  & > .label-help {
    display: none;
  }
  ${props => {
    if (props.static) {
      return `
      .label-help {
        opacity: 0.8;
        border-radius: 3px;
        position: absolute;
        background: ${props.color ? props.color : "#296d9c"};
        color: ${props.colorText ? props.colorText : "#000000"};
        right: 94%;
        width: max-content;
        display: ${props.disabledButton ? "none" : "flex"};
        justify-content: center;
        z-index: 10;
        padding: 0.1rem 0.4rem;
        align-items: center;
        bottom: 12px;
      }
      `;
    }
    return `
    @media screen and (min-width: 768px) {
      &:hover {
        z-index: 5;
        .label-help {
          opacity: 0.8;
          border-radius: 3px;
          position: absolute;
          background: ${props.color ? props.color : "#296d9c"};
          color: ${props.colorText ? props.colorText : "#000000"};
          right: 94%;
          width: max-content;
          display: ${props.disabledButton ? "none" : "flex"};
          justify-content: center;
          z-index: 10;
          padding: 0.1rem 0.4rem;
          align-items: center;
          bottom: 12px;
        }
      }
    }
    `
  }}

  &:focus {
    outline: none;
  }
`;
