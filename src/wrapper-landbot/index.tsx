import React, { useState, useCallback, Fragment } from "react";
import { ButtonActionStyled } from "../action-button-landbot/styles";
import { ButtonVisible } from "../context";

export type Props = {
  image: string;
  imageClose: string;
  size?: string;
  sizeImage?: string;
  textLabel?: string;
  color?: string;
  colorText?: string;
  positionBottom?: string;
  positionRigth?: string;
  children: JSX.Element[] | JSX.Element;
};

export const WrapperLandbot = (props: Props) => {
  const [buttonBool, setButtonBool] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState({
    key: "",
    bool: false
  });
  const handleCallBack = useCallback(() => {
    setButtonBool(!buttonBool);
  }, [buttonBool]);
  return (
    <ButtonVisible.Provider
      value={{ data: buttonDisabled, setState: setButtonDisabled }}
    >
      <Fragment>
        <ButtonActionStyled
          positionBottom={props.positionBottom}
          positionRigth={props.positionRigth}
          size={props.size}
          disabledButton={buttonBool}
          color={props.color}
          colorText={props.colorText}
          textLabel={props.textLabel}
          onClick={handleCallBack}
        >
          {props.textLabel && (
            <div className="label-help">
              <span>{props.textLabel}</span>
            </div>
          )}
          <img
            className={buttonBool ? "open-options" : "close-options"}
            width={props.sizeImage || "31px"}
            height={props.sizeImage || "31px"}
            src={
              buttonBool
                ? props.imageClose ||
                  "https://pngimage.net/wp-content/uploads/2018/05/close-png-image-1.png"
                : props.image
            }
          />
        </ButtonActionStyled>
        {buttonBool &&
          React.Children.map(props.children, child => {
            let callback = handleCallBack;
            if (child.props.callback) {
              callback = () => {
                child.props.callback();
                handleCallBack();
              };
            }
            return React.cloneElement(child, {
              ...child.props,
              callback: callback
            });
          })}
      </Fragment>
    </ButtonVisible.Provider>
  );
};
