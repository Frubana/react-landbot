import React, { useState, useCallback, Fragment } from "react";
import { ButtonActionStyled } from "../action-button-landbot/styles";

export type Props = {
  boolDefault: boolean;
  image: string;
  whatsapp: string;
  size?: string;
  sizeImage?: string;
  positionBottom?: string;
  positionRigth?: string;
  color?: string;
  width?: string;
  heigth?: string;
  callback?: Function;
};

export const WrapperWhatsApp = (props: Props) => {
  const [buttonBool, setButtonBool] = useState(props.boolDefault);

  const handleCallBack = useCallback(() => {
    setButtonBool(!buttonBool);
    window.open(props.whatsapp, "_blank");
    if (props.callback) props.callback();
  }, [buttonBool]);
  return (
    <Fragment>
      {
        <ButtonActionStyled
          color={props.color || "blue"}
          positionBottom={props.positionBottom || "10rem"}
          positionRigth={props.positionRigth || "31px"}
          onClick={handleCallBack}
        >
          <img
            src={props.image}
            width={props.sizeImage || "31px"}
            height={props.sizeImage || "31px"}
          />
        </ButtonActionStyled>
      }
    </Fragment>
  );
};
