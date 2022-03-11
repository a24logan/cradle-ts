import styled from "styled-components";

export const PopupContainer = styled.div`
  position: fixed;
  width: 286px;
  height: 271px;
  right: 44px;
  top: 44px;
  background: rgba(237, 237, 244, 0.4);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 15px;
`;

export const PopupContent = styled.div`
  position: absolute;
  width: 260px;
  box-sizing: border-box;
  height: 246px;
  display: flex;
  text-align: center;
  padding-top: 35px;
  flex-direction: column;
  align-items: center;
  right: 13px;
  top: 13px;
  background: linear-gradient(0deg, #ffffff, #ffffff);
  border-radius: 10px;
`;

export const PopupHeader = styled.h3`
  position: relative;
  font-family: TT Norms Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  margin: 12px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: #2d4654;
`;

export const PopupText = styled.div`
  position: relative;
  font-family: TT Norms Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  color: #4e4d5c;
  margin: 0px 25px;
`;
