import React from "react";
import styled from "styled-components/native";

const ButtonContainer = styled.View`
  align-self: stretch;
  background-color: ${(props) => props.theme.colors[props.color]};
  border-radius: 20px;
  /* padding-vertical: 15px;*/
  margin-vertical: 10px;
  margin-horizontal: 30px;
  flex: 0.1;
  justify-content: center;
`;

const ButtonText = styled.Text`
  color: white;
  text-align: center;
  font-size: 25px;
  margin: 0 30px;
  /* padding-bottom: 11px; */
`;

const Count = styled.Text`
  position: absolute;
  top: 6px;
  left: 6px;
  color: ${(props) => props.theme.colors.white}
`;

const CustomText = ({ text, color, count }) => (
  <ButtonContainer color={color}>
    <Count>{count}.</Count>
    <ButtonText>{text}</ButtonText>
  </ButtonContainer>
);

export default CustomText;
