import React, { useState } from "react";
import styled from "styled-components";

interface GasCardProps {
  src?: string;
  headerTxt?: string;
  contentTxt?: string;
  color?: string;
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
  return <GasCardOutline active={active} onClick={onClick}></GasCardOutline>;
};
export default GasCard;

interface Props {
  active: boolean;
}

const GasCardOutline = styled.div<Props>`
  box-sizing: border-box;
  position: relative;
  display: flex;
  padding: 15px 15px 8px 15px;
  flex-direction: column;
  width: 130px;
  height: 76px;
  color: #011936;
  background: rgba(1, 25, 54, 0.1);
  border-radius: 5.36914px;
  margin-right: 15px;
  margin-top: 20px;
  opacity: 0.7;
  ${({ active }) =>
    active &&
    `
    opacity: 1; 
  `}
`;
