import React from "react";
import Modal from "./Modal";
import "./css/Popup.css";
import {
  PopupContainer,
  PopupContent,
  PopupHeader,
  PopupText,
} from "./ModalPopup.styles";
import CradleButton from "../cradleButton";

interface ErrorModalProps {
  isModalVisible: boolean;
  onBackdropClick: () => void;
}

const ErrorModal: React.FC<ErrorModalProps> = ({
  onBackdropClick,
  isModalVisible,
}) => {
  if (!isModalVisible) {
    return null;
  }
  return (
    <Modal onBackdropClick={onBackdropClick}>
      <PopupContainer>
        <PopupContent>
          <div
            className="imgContainer"
            style={{ background: "rgba(255, 201, 38, 0.1)" }}
          >
            <img
              src={require("../../assets/images/warning.png")}
              alt=""
              className="warningImage"
            ></img>
          </div>
          <PopupHeader>Something Went Wrong</PopupHeader>
          <PopupText>
            It looks like you’re having issues checking out. Need help with
            that?
          </PopupText>
          <div className="buttonContainer">
            <CradleButton
              src="email.png"
              onButtonClick={onBackdropClick}
              style={{ background: "#119DA4" }}
              buttonTxt="Email Us"
            ></CradleButton>
            <CradleButton
              src="phone.png"
              onButtonClick={onBackdropClick}
              style={{ background: "#00CC99" }}
              buttonTxt="Call Us"
            ></CradleButton>
          </div>
        </PopupContent>
      </PopupContainer>
    </Modal>
  );
};
export default ErrorModal;
