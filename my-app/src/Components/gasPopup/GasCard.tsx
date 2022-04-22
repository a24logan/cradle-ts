import React, { useState } from "react";
import styled from "styled-components";

interface GasCardProps {
  src: string;
  headerTxt: string;
  contentTxt: string;
  color: string;
  active: boolean;
  onClick: () => void;
}

const GasCard: React.FC<GasCardProps> = ({
  src,
  headerTxt,
  contentTxt,
  color,
  active,
  onClick,
}) => {
  if (active) {
    return (
      <GasCardOutline
        active={active}
        color="#FFFFFF"
        background={color}
        onClick={onClick}
      >
        <img
          alt=""
          src={require("../../assets/images/white-" + src)}
          style={{ width: "7px", height: "14px" }}
        ></img>
        <Circle color="#FFFFFF"></Circle>
        <Header>{headerTxt}</Header>
        <SubTitle>{contentTxt}</SubTitle>
      </GasCardOutline>
    );
  }
  return (
    <GasCardOutline active={active} color={color} onClick={onClick}>
      <img
        alt=""
        src={require("../../assets/images/" + src)}
        style={{ width: "7px", height: "14px" }}
      ></img>
      <Circle color={color}></Circle>
      <Header>{headerTxt}</Header>
      <SubTitle>{contentTxt}</SubTitle>
    </GasCardOutline>
  );
};
export default GasCard;

interface Props {
  active: boolean;
  color: string;
  background?: string;
}

const GasCardOutline = styled.div<Props>`
  box-sizing: border-box;
  position: relative;
  display: flex;
  padding: 15px 15px 8px 15px;
  flex-direction: column;
  width: 130px;
  height: 76px;
  color: ${(props) => props.color};
  background: rgba(1, 25, 54, 0.1);
  border-radius: 5.36914px;
  margin-right: 15px;
  margin-top: 20px;
  opacity: 0.7;
  ${({ active, background }) =>
    active &&
    `
    opacity: 1; 
      background : ${background};

    
  `}
`;
interface CircleProps {
  color: string;
}

const Circle = styled.div<CircleProps>`
  position: relative;
  width: 9px;
  height: 9px;
  border: 2px solid ${(props) => props.color};
  left: 100px;
  border-radius: 50%;
`;

const Header = styled.div`
  position: relative;
  font-family: TT Norms Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 13px;
  display: flex;
`;
const SubTitle = styled.div`
  position: relative;
  font-family: TT Norms Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  display: flex;
`;
