import { useState } from "react";
import styled from "styled-components";
import GasCard, { GasCardProps } from "./GasCard";
const types = ["Slow", "Quick", "Fast", "Custom"];
const gasCardProps: GasCardProps[] = [
  {
    src: "person.png",
    headerTxt: "Take your Time",
    contentTxt: "0.0005 eth",
    color: "#011936",
    active: false,
  },
  {
    src: "car.png",
    headerTxt: "Ideally Quick",
    contentTxt: "0.0005 eth",
    color: "#119DA4",
    active: false,
  },
  {
    src: "rocket.png",
    headerTxt: "Need Asap",
    contentTxt: "0.0005 eth",
    color: "#F13E43",
    active: false,
  },
  {
    src: "pencil.png",
    headerTxt: "Custom",
    contentTxt: "Enter Amount",
    color: "#4E4D5C",
    active: false,
  },
];
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
      {types.map((type, index) => (
        <GasCard
          {...gasCardProps[index]}
          active={active === type}
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
