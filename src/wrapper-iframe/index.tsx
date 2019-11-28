import React, {
  useState,
  useCallback,
  Fragment,
  useEffect,
  useContext
} from "react";
import { WrapperIframeStyled, WrapperChildStyled } from "./styles";
import { ButtonVisible } from "../context";
import { ActionButtonLandbot } from "../action-button-landbot";

export type Props = {
  image: string;
  name: string;
  iframe: string;
  size?: string;
  sizeImage?: string;
  textLabel?: string;
  color?: string;
  colorText?: string;
  width?: string;
  heigth?: string;
  positionBottom?: string;
  positionRigth?: string;
  header?: JSX.Element;
  callback?: Function;
};

export const WrapperIframe = (props: Props) => {
  const [buttonBool, setButtonBool] = useState(false);
  const context = useContext(ButtonVisible);
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleCallBack = useCallback(() => {
    if(props.callback) props.callback()
    setButtonBool(!buttonBool);
    const tst = {
      key: props.name,
      bool: true
    };
    context.setState(tst);
    if (!loading) {
      setLoading(true);
    }
  }, [buttonBool]);
  const handleLoading = useCallback(() => {
    setLoading(false);
  }, [loading]);

  useEffect(() => {
    const { data } = context;
    if (data.key !== props.name) {
      if (data.bool) {
        setDisabled(true);
      }
    }
    return () => {
      if (data.key === props.name) {
        context.setState({
          key: "",
          bool: false
        });
        setDisabled(false);
      }
    };
  }, [context]);
  return (
    <Fragment>
      {!disabled && (
        <Fragment>
          {!buttonBool && (
            <ActionButtonLandbot
              image={props.image}
              positionBottom={props.positionBottom || "6rem"}
              positionRigth={props.positionRigth || "31px"}
              size={props.size}
              color={props.color || "red"}
              colorText={props.colorText}
              textLabel={props.textLabel}
              callback={handleCallBack}
              sizeImage={props.sizeImage || "31px"}
            />
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
      )}
    </Fragment>
  );
};
