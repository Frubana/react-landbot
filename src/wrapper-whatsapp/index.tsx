import React, { useState, useCallback, Fragment, useContext, useEffect } from "react";
import { ButtonActionStyled } from "../action-button-landbot/styles";
import { ButtonVisible } from "../context";

export type Props = {
  image: string;
  name: string;
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
  const [buttonBool, setButtonBool] = useState(false);
  const context = useContext(ButtonVisible);
  const [disabled, setDisabled] = useState(false);
  const handleCallBack = useCallback(() => {
    setButtonBool(!buttonBool);
    window.open(props.whatsapp, "_blank");
    if (props.callback) props.callback();
  }, [buttonBool]);

  useEffect(()=>{
    const {data} = context;
    if(data.key !== props.name){
        if(data.bool){
          setDisabled(true)
      }
    }
    return () => {
      if(data.key === props.name) {
        context.setState({
          key: '',
          bool: false
        })
        setDisabled(false)
      }
    }
  }, [context])
  return (
    <Fragment>
      { !disabled &&
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
