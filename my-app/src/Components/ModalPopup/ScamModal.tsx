import React from "react";
import ReactDOM from "react-dom";
import Modal from "./Modal";
import "../css/Popup.css";
import {
  PopupContainer,
  PopupContent,
  PopupHeader,
  PopupText,
} from "./ModalPopup.styles";
import CradleButton from "../cradleButton";

interface ScamModalProps {
  isModalVisible: boolean;
  onBackdropClick: () => void;
}

const ScamModal: React.FC<ScamModalProps> = ({
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
            className="popupImgContainer"
            style={{ background: "rgba(241, 62, 67, 0.1)" }}
          >
            <img src={require("../../assets/images/redX.png")} alt=""></img>
          </div>
          <PopupHeader>Scam Reported</PopupHeader>
          <PopupText>
            We’ve had user reports that a contract you’ve previously authorized
            has been involved in a scam.
          </PopupText>
          <CradleButton
            onButtonClick={onBackdropClick}
            style={{
              background: "#F13E43",
              width: "150px",
              alignItems: "center",
              textAlign: "center",
              marginBottom: "5px",
            }}
            buttonTxt="Revoke Access"
          ></CradleButton>
          <button
            onClick={onBackdropClick}
            style={{
              color: "#000000",
              width: "150px",
              border: "0px",
              background: "#FFFFFF",
              fontFamily: "TT Norms Pro",
              fontWeight: 400,
              fontSize: "12px",
              marginBottom: "10px",
            }}
          >
            Learn More -{">"}
          </button>
        </PopupContent>
      </PopupContainer>
    </Modal>
  );
};
export default ScamModal;
