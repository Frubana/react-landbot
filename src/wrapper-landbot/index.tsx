import React, { useState, useCallback, Fragment } from "react";
import { ButtonActionStyled } from "../action-button-landbot/styles";

export type Props = {
  image: string;
  size?: string;
  sizeImage?: string;
  color?: string;
  positionBottom?: string;
  positionRigth?: string;
  children: JSX.Element;
};

export const WrapperLandbot = (props: Props) => {
  const [buttonBool, setButtonBool] = useState(false);
  const handleCallBack = useCallback(() => {
    setButtonBool(!buttonBool);
  }, [buttonBool]);
  return (
    <Fragment>
      <ButtonActionStyled
        positionBottom={props.positionBottom}
        positionRigth={props.positionRigth}
        size={props.size}
        color={props.color}
        onClick={handleCallBack}
      >
        <img
          width={props.sizeImage || "31px"}
          height={props.sizeImage || "31px"}
          src={
            buttonBool
              ? "https://pngimage.net/wp-content/uploads/2018/05/close-png-image-1.png"
              : props.image
          }
        />
      </ButtonActionStyled>
      {buttonBool &&
        React.Children.map(props.children, child => {
          console.log(child.props);
          let callback = handleCallBack;
          if (child.props.callback) {
            callback = () => {
              child.props.callback();
              handleCallBack();
            };
          }
          return React.cloneElement(child, {
            ...child.props,
            boolDefault: false,
            callback: callback
          });
        })}
    </Fragment>
  );
};
