import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import "../../css/banner.css";
interface BannerProps {
  isVisible: boolean;
}

const BannerOutline = styled.div`
  position: fixed;
  animation-fill-mode: forwards;
  width: 348px;
  height: 105px;
  top: 44px;
  background: rgba(237, 237, 244, 0.4);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  z-index: 2147483647 !important;
`;

const BannerContent = styled.div`
  position: fixed;
  width: 336px;
  height: 92px;
  display: flex;
  flex-direction: row;
  right: 6px;
  top: 6px;
  background: linear-gradient(0deg, #ffffff, #ffffff);
  border-radius: 10px;
`;

const Banner: React.FC<BannerProps> = ({ isVisible, children }) => {
  if (!isVisible) {
    return null;
  } else {
    return ReactDOM.createPortal(
      <BannerOutline className="bannerOutline">
        <BannerContent>{children}</BannerContent>
      </BannerOutline>,
      document.getElementById("modal-root")!
    );
  }
};
export default Banner;
