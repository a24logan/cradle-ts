import React from "react";
import ReactDOM from "react-dom";
import Modal from "./Modal";
import "./css/Popup.css";
import {
  PopupContainer,
  PopupContent,
  PopupHeader,
  PopupText,
} from "./ModalPopup.styles";
import CradleButton from "../cradleButton";

interface ConfirmSignatureModalProps {
  isModalVisible: boolean;
  onBackdropClick: () => void;
}

const ConfirmSignatureModal: React.FC<ConfirmSignatureModalProps> = ({
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
            style={{ background: "rgba(0, 204, 153, 0.1)" }}
          >
            <img
              src={require("../../assets/images/lock.png")}
              alt=""
              className="popupImage"
            ></img>
          </div>
          <PopupHeader>Confirm Signature</PopupHeader>
          <PopupText>
            Confirm your signature to proceed with the transaction
          </PopupText>
          <div className="buttonContainer">
            <CradleButton
              src="closeIcon.png"
              onButtonClick={onBackdropClick}
              style={{ background: "#F13E43" }}
              buttonTxt="Decline"
            ></CradleButton>
            <CradleButton
              src="checkIcon.png"
              onButtonClick={onBackdropClick}
              style={{ background: "#00CC99" }}
              buttonTxt="Confirm"
            ></CradleButton>
          </div>
        </PopupContent>
      </PopupContainer>
    </Modal>
  );
};
export default ConfirmSignatureModal;
