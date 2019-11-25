import React, {
  useState,
  useCallback,
  Fragment,
  useContext,
  useEffect
} from "react";
import { ButtonVisible } from "../context";
import { ActionButtonLandbot } from "../action-button-landbot";

export type Props = {
  autoClose?: boolean;
  image: string;
  name: string;
  whatsapp: string;
  size?: string;
  sizeImage?: string;
  positionBottom?: string;
  positionRigth?: string;
  textLabel?: string;
  color?: string;
  colorText?: string;
  callback?: Function;
};

export const WrapperWhatsApp = (props: Props) => {
  const [buttonBool, setButtonBool] = useState(false);
  const context = useContext(ButtonVisible);
  const [disabled, setDisabled] = useState(false);
  const handleCallBack = useCallback(() => {
    setButtonBool(!buttonBool);
    const tst = {
      key: "",
      bool: false
    };
    context.setState(tst);
    if (props.autoClose && props.callback) props.callback();
    window.open(props.whatsapp, "_blank");
  }, [buttonBool]);

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
        <ActionButtonLandbot
          color={props.color || "blue"}
          positionBottom={props.positionBottom || "10rem"}
          positionRigth={props.positionRigth || "31px"}
          image={props.image}
          size={props.size}
          colorText={props.colorText}
          textLabel={props.textLabel}
          callback={handleCallBack}
          sizeImage={props.sizeImage || "31px"}
        />
      )}
    </Fragment>
  );
};
