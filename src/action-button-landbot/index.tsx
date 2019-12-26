import React, { useState, useCallback, Fragment } from "react";
import { ButtonActionStyled } from "./styles";

export type Props = {
  image: string;
  disabledButton?: boolean;
  textLabel?: string;
  text?: string | JSX.Element;
  size?: string;
  sizeImage?: string;
  color?: string;
  colorText?: string;
  positionBottom?: string;
  positionRigth?: string;
  callback?: Function;
  static?: boolean;
  className?: string;
};

export const ActionButtonLandbot = (props: Props) => {
  const [buttonBool, setButtonBool] = useState(false);

  const handleCallBack = useCallback(() => {
    setButtonBool(!buttonBool);
    if (props.callback) props.callback();
  }, [buttonBool]);
  return (
    <Fragment>
      {
        <ButtonActionStyled
          size={props.size}
          color={props.color || "blue"}
          positionBottom={props.positionBottom}
          positionRigth={props.positionRigth}
          disabledButton={props.disabledButton}
          onClick={handleCallBack}
          colorText={props.colorText}
          static={props.static}
          textLabel={props.textLabel}
        >
          {props.textLabel && (
            <div className="label-help">
              <span>{props.textLabel}</span>
            </div>
          )}
          {props.text ? (
            props.text
          ) : (
            <img
              src={props.image}
              className={props.className}
              width={props.sizeImage || "31px"}
              height={props.sizeImage || "31px"}
            />
          )}
        </ButtonActionStyled>
      }
    </Fragment>
  );
};
