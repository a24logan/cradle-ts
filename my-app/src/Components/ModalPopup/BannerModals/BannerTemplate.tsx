import React, { useState } from "react";
import { PopupContent, PopupHeader, PopupText } from "../ModalPopup.styles";
import Banner from "./Banner";
import "../../css/banner.css";

interface BannerProps {
  src?: string;
  headerTxt?: string;
  contentTxt?: string;
}

const BannerTemplate: React.FC<BannerProps> = ({
  src,
  headerTxt,
  contentTxt,
}) => {
  const [isConnected, setIsConnected] = useState(false);

  const toggleModal = () => {
    setIsConnected((isConnected) => !isConnected);
  };

  return (
    <div>
      <button onClick={toggleModal}>{headerTxt}</button>
      <Banner isVisible={isConnected}>
        <img
          className="bannerImg"
          src={require("../../../assets/images/" + src)}
          alt=""
        ></img>
        <div className="connectedWallet">
          <div className="bannerHeader">{headerTxt}</div>
          <div className="bannerText">{contentTxt}</div>
        </div>
      </Banner>
    </div>
  );
};
export default BannerTemplate;
