import { useState } from "react";
import styled from "styled-components";
import GasCard from "./GasCard";
const types = ["Slow", "Quick", "Fast", "Custom"];

const GasCardContainer: React.FC = () => {
  const [active, setActive] = useState(types[0]);

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "left",
      }}
    >
      {types.map((type) => (
        <GasCard
          active={active === type}
          src="person.png"
          headerTxt="Take your time"
          color="#011936"
          contentTxt="0.0005 eth"
          onClick={() => setActive(type)}
        ></GasCard>
      ))}
    </div>
  );
};

interface Props {
  active: boolean;
}

const ButtonToggle = styled.div<Props>`
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

export default GasCardContainer;
