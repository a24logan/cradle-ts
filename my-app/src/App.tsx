import React from "react";
import { useState } from "react";
import GasPopup from "./Components/gasPopup/gasPopup";
import BannerTemplate from "./Components/ModalPopup/BannerModals/BannerTemplate";
import ConnectedBanner from "./Components/ModalPopup/BannerModals/ConnectedBanner";
import ConfirmSignatureModal from "./Components/ModalPopup/ConfirmSignatureModal";
import ErrorModal from "./Components/ModalPopup/ErrorModal";
import ScamModal from "./Components/ModalPopup/ScamModal";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [isScamVisible, setIsScamVisible] = useState(false);
  const [isGasPopupVisible, setIsGasPopupVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible((isModalVisible) => !isModalVisible);
  };
  const toggleErrorModal = () => {
    setIsErrorVisible((isErrorVisible) => !isErrorVisible);
  };

  const toggleScamModal = () => {
    setIsScamVisible((isScamVisible) => !isScamVisible);
  };

  const toggleGasPopup = () => {
    setIsGasPopupVisible((isGasPopupVisible) => !isGasPopupVisible);
  };

  return (
    <div className="App">
      <button onClick={toggleModal}>Show Modal</button>
      <ConfirmSignatureModal
        isModalVisible={isModalVisible}
        onBackdropClick={toggleModal}
      ></ConfirmSignatureModal>

      <button onClick={toggleErrorModal}>Show Error Modal</button>
      <ErrorModal
        isModalVisible={isErrorVisible}
        onBackdropClick={toggleErrorModal}
      ></ErrorModal>

      <ScamModal
        isModalVisible={isScamVisible}
        onBackdropClick={toggleScamModal}
      ></ScamModal>
      <button onClick={toggleGasPopup}>Show Gas Modal</button>

      <GasPopup
        isModalVisible={isGasPopupVisible}
        onBackdropClick={toggleGasPopup}
      ></GasPopup>

      <ConnectedBanner></ConnectedBanner>

      <BannerTemplate
        src="warning.png"
        headerTxt="Warning!"
        contentTxt="This site is on a list of known phishing scams. Please proceed with caution."
      ></BannerTemplate>
    </div>
  );
}

export default App;
