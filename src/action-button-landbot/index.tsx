import React, { useState, useCallback, Fragment } from "react";
import { ButtonActionStyled } from "./styles";

export type Props = {
  image: string;
  textLabel?: string;
  text?: string | JSX.Element;
  size?: string;
  sizeImage?: string;
  color?: string;
  colorText?: string;
  positionBottom?: string;
  positionRigth?: string;
  callback?: Function;
};

export const ActionButtonLandbot = (props: Props) => {
  const [buttonBool, setButtonBool] = useState(false);

  const handleCallBack = useCallback(() => {
    setButtonBool(!buttonBool);
    if (props.callback) props.callback();
  }, [buttonBool]);
  console.log(props);
  return (
    <Fragment>
      {
        <ButtonActionStyled
          size={props.size}
          color={props.color || "blue"}
          positionBottom={props.positionBottom}
          positionRigth={props.positionRigth}
          onClick={handleCallBack}
          colorText={props.colorText}
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
              width={props.sizeImage || "31px"}
              height={props.sizeImage || "31px"}
            />
          )}
        </ButtonActionStyled>
      }
    </Fragment>
  );
};
