import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

const ButtonContainer = styled.TouchableOpacity`
  align-self: stretch;
  background-color: ${(props) => props.color};
  border-radius: 20px;
  /* padding-vertical: 15px;*/
  margin-vertical: 10px;
  margin-horizontal: 70px;
  flex: 0.1;
  justify-content: flex-end;
`;

const ButtonText = styled.Text`
  flex: 0.7;
  color: white;
  text-align: center;
  font-size: 25px;
  /* padding-bottom: 11px; */
`;

const CustomButton = ({ text, color }) => (
  <ButtonContainer color={color}>
    <ButtonText>{text}</ButtonText>
  </ButtonContainer>
);

export default CustomButton;
