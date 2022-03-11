import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import "./css/cradleButton.css";
interface cradleButtonProps {
  onButtonClick: () => void;
  src?: string;
  buttonTxt: string;
  style?: object;
}

const Button = styled.div`
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  width: 91px;
  height: 34px;
  border-radius: 5px;
  box-sizing: border-box;
  color: #ffffff;
  margin: 10px 7px;
  padding: 10px;
  font-family: "TT Norms Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  align-items: center;
`;

const CradleButton: React.FC<cradleButtonProps> = ({
  onButtonClick,
  src,
  style,
  buttonTxt,
}) => {
  return (
    <Button onClick={onButtonClick} style={style}>
      {buttonTxt}
      {src ? (
        <img
          src={require("../assets/images/" + src)}
          alt=""
          className="buttonImage"
        ></img>
      ) : (
        ""
      )}
    </Button>
  );
};
export default CradleButton;
