import React from "react";
import Modal from "../ModalPopup/Modal";
import "../css/Popup.css";
import { PopupHeader, PopupText } from "../ModalPopup/ModalPopup.styles";
import CradleButton from "../cradleButton";
import styled from "styled-components";
import GasCard from "./GasCardContainer";
import GasCardContainer from "./GasCardContainer";

interface GasPopupProps {
  isModalVisible: boolean;
  onBackdropClick: () => void;
}

const GasPopupContainer = styled.div`
  position: fixed;
  width: 388px;
  height: 481px;
  right: 44px;
  top: 44px;
  background: rgba(237, 237, 244, 0.4);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 15px;
`;

const GasPopupContent = styled.div`
  position: absolute;
  width: 357px;
  box-sizing: border-box;
  height: 456px;
  display: flex-wrap;
  text-align: center;
  flex-direction: row;
  align-items: center;
  right: 13px;
  top: 13px;
  background: linear-gradient(0deg, #ffffff, #ffffff);
  border-radius: 10px;
  padding: 25px 28px;
`;
const UnderLine = styled.div`
  position: relative;
  width: 284.1px;
  border: 0.5px solid rgba(171, 170, 177, 0.3);
  margin: 0px 0px 10px 0px;
`;

const ImgContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 35px;
  height: 33px;
  border-radius: 50%;
  background: rgba(0, 204, 153, 0.1);
  justify-content: center;
`;
const GasPopup: React.FC<GasPopupProps> = ({
  onBackdropClick,
  isModalVisible,
}) => {
  if (!isModalVisible) {
    return null;
  }
  return (
    <Modal onBackdropClick={onBackdropClick}>
      <GasPopupContainer>
        <GasPopupContent>
          <div
            style={{
              display: "flex",
              width: "346px",
              height: "40px",
            }}
          >
            <ImgContainer>
              <img
                src={require("../../assets/images/cube.png")}
                alt=""
                style={{ height: "14px" }}
              ></img>
            </ImgContainer>

            <PopupHeader style={{ margin: "0px 10px" }}>
              Confirm Gas Fees
            </PopupHeader>
          </div>
          <UnderLine></UnderLine>

          <PopupText
            style={{ margin: "0px", color: "#ABAAB1", textAlign: "left" }}
          >
            Select one of the following gas speeds to finish the transaction.
          </PopupText>

          <GasCardContainer></GasCardContainer>
          <PopupText
            style={{ margin: "0px", color: "#ABAAB1", textAlign: "left" }}
          >
            Enter Amount{" "}
          </PopupText>
          {/* add Eth value here */}
          <UnderLine></UnderLine>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <CradleButton
              src="closeIcon.png"
              onButtonClick={onBackdropClick}
              style={{ background: "#F13E43" }}
              buttonTxt="Cancel"
            ></CradleButton>
            <CradleButton
              src="checkIcon.png"
              onButtonClick={onBackdropClick}
              style={{ background: "#00CC99" }}
              buttonTxt="Confirm"
            ></CradleButton>
          </div>
        </GasPopupContent>
      </GasPopupContainer>
    </Modal>
  );
};
export default GasPopup;
