import React, { useState } from "react";
import { PopupContent, PopupHeader, PopupText } from "../ModalPopup.styles";
import Banner from "./Banner";
import "../../css/banner.css";

const ConnectedBanner: React.FC = () => {
  const [isConnected, setIsConnected] = useState(false);

  const toggleModal = () => {
    setIsConnected((isConnected) => !isConnected);
  };

  return (
    <div>
      <button onClick={toggleModal}>banner</button>
      <Banner isVisible={isConnected}>
        <div
          className="imgContainer"
          style={{ background: "rgba(0, 204, 153, 0.1)" }}
        >
          <img src={require("../../../assets/images/wallet.png")} alt=""></img>
        </div>
        <div className="connectedWallet">
          <div className="bannerHeader">Wallet Connected</div>
          <div className="bannerText">
            Success! You can now use your wallet while playing.
          </div>
        </div>
      </Banner>
    </div>
  );
};
export default ConnectedBanner;
