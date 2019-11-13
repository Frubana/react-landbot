import styled from "styled-components";

interface PropsWrapperIframe {
  heigth?: string;
  width?: string;
}

export const WrapperIframeStyled = styled.div<PropsWrapperIframe>`
  display: flex;
  position: fixed;
  bottom: 5.2rem;
  height: ${props => props.heigth ? props.heigth : '400px'};
  width: ${props => props.width ? props.width : '280px'};
  right: 1rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  .cssload-dots {
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    outline: 1px solid red;
    filter: url(#goo);
    -o-filter: url(#goo);
    -ms-filter: url(#goo);
    -webkit-filter: url(#goo);
    -moz-filter: url(#goo);
  }

  .cssload-dot {
    width: 0;
    height: 0;
    position: absolute;
    left: 0;
    top: 0;
  }
  .cssload-dot:before {
    content: "";
    width: 34px;
    height: 34px;
    border-radius: 49px;
    background: rgb(251, 211, 1);
    position: absolute;
    left: 50%;
    transform: translateY(0);
    -o-transform: translateY(0);
    -ms-transform: translateY(0);
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    margin-left: -17.5px;
    margin-top: -17.5px;
  }

  .cssload-dot:nth-child(5):before {
    z-index: 100;
    width: 44.5px;
    height: 44.5px;
    margin-left: -21.75px;
    margin-top: -21.75px;
    animation: cssload-dot-colors 4.6s ease infinite;
    -o-animation: cssload-dot-colors 4.6s ease infinite;
    -ms-animation: cssload-dot-colors 4.6s ease infinite;
    -webkit-animation: cssload-dot-colors 4.6s ease infinite;
    -moz-animation: cssload-dot-colors 4.6s ease infinite;
  }

  .cssload-dot:nth-child(1) {
    animation: cssload-dot-rotate-1 4.6s 0s linear infinite;
    -o-animation: cssload-dot-rotate-1 4.6s 0s linear infinite;
    -ms-animation: cssload-dot-rotate-1 4.6s 0s linear infinite;
    -webkit-animation: cssload-dot-rotate-1 4.6s 0s linear infinite;
    -moz-animation: cssload-dot-rotate-1 4.6s 0s linear infinite;
  }
  .cssload-dot:nth-child(1):before {
    background-color: rgb(255, 50, 112);
    animation: cssload-dot-move 4.6s 0s ease infinite;
    -o-animation: cssload-dot-move 4.6s 0s ease infinite;
    -ms-animation: cssload-dot-move 4.6s 0s ease infinite;
    -webkit-animation: cssload-dot-move 4.6s 0s ease infinite;
    -moz-animation: cssload-dot-move 4.6s 0s ease infinite;
  }

  .cssload-dot:nth-child(2) {
    animation: cssload-dot-rotate-2 4.6s 1.15s linear infinite;
    -o-animation: cssload-dot-rotate-2 4.6s 1.15s linear infinite;
    -ms-animation: cssload-dot-rotate-2 4.6s 1.15s linear infinite;
    -webkit-animation: cssload-dot-rotate-2 4.6s 1.15s linear infinite;
    -moz-animation: cssload-dot-rotate-2 4.6s 1.15s linear infinite;
  }
  .cssload-dot:nth-child(2):before {
    background-color: rgb(32, 139, 241);
    animation: cssload-dot-move 4.6s 1.15s ease infinite;
    -o-animation: cssload-dot-move 4.6s 1.15s ease infinite;
    -ms-animation: cssload-dot-move 4.6s 1.15s ease infinite;
    -webkit-animation: cssload-dot-move 4.6s 1.15s ease infinite;
    -moz-animation: cssload-dot-move 4.6s 1.15s ease infinite;
  }

  .cssload-dot:nth-child(3) {
    animation: cssload-dot-rotate-3 4.6s 2.3s linear infinite;
    -o-animation: cssload-dot-rotate-3 4.6s 2.3s linear infinite;
    -ms-animation: cssload-dot-rotate-3 4.6s 2.3s linear infinite;
    -webkit-animation: cssload-dot-rotate-3 4.6s 2.3s linear infinite;
    -moz-animation: cssload-dot-rotate-3 4.6s 2.3s linear infinite;
  }
  .cssload-dot:nth-child(3):before {
    background-color: rgb(175, 225, 2);
    animation: cssload-dot-move 4.6s 2.3s ease infinite;
    -o-animation: cssload-dot-move 4.6s 2.3s ease infinite;
    -ms-animation: cssload-dot-move 4.6s 2.3s ease infinite;
    -webkit-animation: cssload-dot-move 4.6s 2.3s ease infinite;
    -moz-animation: cssload-dot-move 4.6s 2.3s ease infinite;
  }

  .cssload-dot:nth-child(4) {
    animation: cssload-dot-rotate-4 4.6s 3.45s linear infinite;
    -o-animation: cssload-dot-rotate-4 4.6s 3.45s linear infinite;
    -ms-animation: cssload-dot-rotate-4 4.6s 3.45s linear infinite;
    -webkit-animation: cssload-dot-rotate-4 4.6s 3.45s linear infinite;
    -moz-animation: cssload-dot-rotate-4 4.6s 3.45s linear infinite;
  }
  .cssload-dot:nth-child(4):before {
    background-color: rgb(251, 211, 1);
    animation: cssload-dot-move 4.6s 3.45s ease infinite;
    -o-animation: cssload-dot-move 4.6s 3.45s ease infinite;
    -ms-animation: cssload-dot-move 4.6s 3.45s ease infinite;
    -webkit-animation: cssload-dot-move 4.6s 3.45s ease infinite;
    -moz-animation: cssload-dot-move 4.6s 3.45s ease infinite;
  }

  @keyframes cssload-dot-move {
    0% {
      transform: translateY(0);
    }
    18%,
    22% {
      transform: translateY(-68px);
    }
    40%,
    100% {
      transform: translateY(0);
    }
  }

  @-o-keyframes cssload-dot-move {
    0% {
      -o-transform: translateY(0);
    }
    18%,
    22% {
      -o-transform: translateY(-68px);
    }
    40%,
    100% {
      -o-transform: translateY(0);
    }
  }

  @-ms-keyframes cssload-dot-move {
    0% {
      -ms-transform: translateY(0);
    }
    18%,
    22% {
      -ms-transform: translateY(-68px);
    }
    40%,
    100% {
      -ms-transform: translateY(0);
    }
  }

  @-webkit-keyframes cssload-dot-move {
    0% {
      -webkit-transform: translateY(0);
    }
    18%,
    22% {
      -webkit-transform: translateY(-68px);
    }
    40%,
    100% {
      -webkit-transform: translateY(0);
    }
  }

  @-moz-keyframes cssload-dot-move {
    0% {
      -moz-transform: translateY(0);
    }
    18%,
    22% {
      -moz-transform: translateY(-68px);
    }
    40%,
    100% {
      -moz-transform: translateY(0);
    }
  }

  @keyframes cssload-dot-colors {
    0% {
      background-color: rgb(251, 211, 1);
    }
    25% {
      background-color: rgb(255, 50, 112);
    }
    50% {
      background-color: rgb(32, 139, 241);
    }
    75% {
      background-color: rgb(175, 225, 2);
    }
    100% {
      background-color: rgb(251, 211, 1);
    }
  }

  @-o-keyframes cssload-dot-colors {
    0% {
      background-color: rgb(251, 211, 1);
    }
    25% {
      background-color: rgb(255, 50, 112);
    }
    50% {
      background-color: rgb(32, 139, 241);
    }
    75% {
      background-color: rgb(175, 225, 2);
    }
    100% {
      background-color: rgb(251, 211, 1);
    }
  }

  @-ms-keyframes cssload-dot-colors {
    0% {
      background-color: rgb(251, 211, 1);
    }
    25% {
      background-color: rgb(255, 50, 112);
    }
    50% {
      background-color: rgb(32, 139, 241);
    }
    75% {
      background-color: rgb(175, 225, 2);
    }
    100% {
      background-color: rgb(251, 211, 1);
    }
  }

  @-webkit-keyframes cssload-dot-colors {
    0% {
      background-color: rgb(251, 211, 1);
    }
    25% {
      background-color: rgb(255, 50, 112);
    }
    50% {
      background-color: rgb(32, 139, 241);
    }
    75% {
      background-color: rgb(175, 225, 2);
    }
    100% {
      background-color: rgb(251, 211, 1);
    }
  }

  @-moz-keyframes cssload-dot-colors {
    0% {
      background-color: rgb(251, 211, 1);
    }
    25% {
      background-color: rgb(255, 50, 112);
    }
    50% {
      background-color: rgb(32, 139, 241);
    }
    75% {
      background-color: rgb(175, 225, 2);
    }
    100% {
      background-color: rgb(251, 211, 1);
    }
  }

  @keyframes cssload-dot-rotate-1 {
    0% {
      transform: rotate(-105deg);
    }
    100% {
      transform: rotate(270deg);
    }
  }

  @-o-keyframes cssload-dot-rotate-1 {
    0% {
      -o-transform: rotate(-105deg);
    }
    100% {
      -o-transform: rotate(270deg);
    }
  }

  @-ms-keyframes cssload-dot-rotate-1 {
    0% {
      -ms-transform: rotate(-105deg);
    }
    100% {
      -ms-transform: rotate(270deg);
    }
  }

  @-webkit-keyframes cssload-dot-rotate-1 {
    0% {
      -webkit-transform: rotate(-105deg);
    }
    100% {
      -webkit-transform: rotate(270deg);
    }
  }

  @-moz-keyframes cssload-dot-rotate-1 {
    0% {
      -moz-transform: rotate(-105deg);
    }
    100% {
      -moz-transform: rotate(270deg);
    }
  }

  @keyframes cssload-dot-rotate-2 {
    0% {
      transform: rotate(165deg);
    }
    100% {
      transform: rotate(540deg);
    }
  }

  @-o-keyframes cssload-dot-rotate-2 {
    0% {
      -o-transform: rotate(165deg);
    }
    100% {
      -o-transform: rotate(540deg);
    }
  }

  @-ms-keyframes cssload-dot-rotate-2 {
    0% {
      -ms-transform: rotate(165deg);
    }
    100% {
      -ms-transform: rotate(540deg);
    }
  }

  @-webkit-keyframes cssload-dot-rotate-2 {
    0% {
      -webkit-transform: rotate(165deg);
    }
    100% {
      -webkit-transform: rotate(540deg);
    }
  }

  @-moz-keyframes cssload-dot-rotate-2 {
    0% {
      -moz-transform: rotate(165deg);
    }
    100% {
      -moz-transform: rotate(540deg);
    }
  }

  @keyframes cssload-dot-rotate-3 {
    0% {
      transform: rotate(435deg);
    }
    100% {
      transform: rotate(810deg);
    }
  }

  @-o-keyframes cssload-dot-rotate-3 {
    0% {
      -o-transform: rotate(435deg);
    }
    100% {
      -o-transform: rotate(810deg);
    }
  }

  @-ms-keyframes cssload-dot-rotate-3 {
    0% {
      -ms-transform: rotate(435deg);
    }
    100% {
      -ms-transform: rotate(810deg);
    }
  }

  @-webkit-keyframes cssload-dot-rotate-3 {
    0% {
      -webkit-transform: rotate(435deg);
    }
    100% {
      -webkit-transform: rotate(810deg);
    }
  }

  @-moz-keyframes cssload-dot-rotate-3 {
    0% {
      -moz-transform: rotate(435deg);
    }
    100% {
      -moz-transform: rotate(810deg);
    }
  }

  @keyframes cssload-dot-rotate-4 {
    0% {
      transform: rotate(705deg);
    }
    100% {
      transform: rotate(1080deg);
    }
  }

  @-o-keyframes cssload-dot-rotate-4 {
    0% {
      -o-transform: rotate(705deg);
    }
    100% {
      -o-transform: rotate(1080deg);
    }
  }

  @-ms-keyframes cssload-dot-rotate-4 {
    0% {
      -ms-transform: rotate(705deg);
    }
    100% {
      -ms-transform: rotate(1080deg);
    }
  }

  @-webkit-keyframes cssload-dot-rotate-4 {
    0% {
      -webkit-transform: rotate(705deg);
    }
    100% {
      -webkit-transform: rotate(1080deg);
    }
  }

  @-moz-keyframes cssload-dot-rotate-4 {
    0% {
      -moz-transform: rotate(705deg);
    }
    100% {
      -moz-transform: rotate(1080deg);
    }
  }
`;

interface PropsWrapperChild {
  color?: string;
  heigth?: string;
  width?: string;
}

export const WrapperChildStyled = styled.div<PropsWrapperChild>`
  background-color: #eaeaeafa;
  border: 1px solid ${props => props.color && props.color};
  height: ${props => props.heigth ? props.heigth : '400px'};
  width: ${props => props.width ? props.width : '280px'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  text-align: center;
`;
