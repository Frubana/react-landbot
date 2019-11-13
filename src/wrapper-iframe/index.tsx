import React, { useState, useCallback, Fragment } from "react";
import { WrapperIframeStyled, WrapperChildStyled } from "./styles";
import { ButtonActionStyled } from "../action-button-landbot/styles";

export type Props = {
  image: string;
  iframe: string;
  size?: string;
  sizeImage?: string;
  color?: string;
  width?: string;
  heigth?: string;
  positionBottom?: string;
  positionRigth?: string;
  header?: JSX.Element;
};

export const WrapperIframe = (props: Props) => {
  const [buttonBool, setButtonBool] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleCallBack = useCallback(() => {
    setButtonBool(!buttonBool);
    if (!loading) {
      setLoading(true);
    }
  }, [buttonBool]);
  const handleLoading = useCallback(() => {
    setLoading(false);
  }, [loading]);
  return (
    <Fragment>
      {!buttonBool && (
        <ButtonActionStyled
          color={props.color || "red"}
          positionBottom={props.positionBottom || "6rem"}
          positionRigth={props.positionRigth || "31px"}
          onClick={handleCallBack}
        >
          <img
            src={props.image}
            width={props.sizeImage || "31px"}
            height={props.sizeImage || "31px"}
          />
        </ButtonActionStyled>
      )}
      {buttonBool && (
        <WrapperIframeStyled heigth={props.heigth} width={props.width}>
          {props.header && props.header}
          {loading && (
            <WrapperChildStyled
              heigth={props.heigth}
              width={props.width}
              color={props.color}
            >
              <div className="cssload-dots" onClick={handleCallBack}>
                <div className="cssload-dot"></div>
                <div className="cssload-dot"></div>
                <div className="cssload-dot"></div>
                <div className="cssload-dot"></div>
                <div className="cssload-dot"></div>
              </div>
            </WrapperChildStyled>
          )}
          <iframe
            src={props.iframe}
            width={props.width || "280px"}
            height={props.heigth || "400px"}
            onLoad={handleLoading}
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
          />
        </WrapperIframeStyled>
      )}
    </Fragment>
  );
};
