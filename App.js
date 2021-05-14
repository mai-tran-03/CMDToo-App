import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { Text, View } from "react-native";
import CustomButtom from "./components/CustomButton.js";
import styled from "styled-components/native";

const StyledView = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const AppName = styled.Text`
  font-size: 35px;
`;

const AppDesc = styled.Text`
  padding-vertical: 15px;
  font-size: 18px;
`;

export default function App() {
  return (
    <StyledView>
      <AppName> GEN CONNECT </AppName>
      <AppDesc> Invite your child to share their feelings </AppDesc>
      <CustomButtom text="play" color="#9BC53D" />
      <CustomButtom text="parent guide" color="#46C1C1" />
      <CustomButtom text="how to play" color="#EE3282" />
      <StatusBar style="auto" />
    </StyledView>
  );
}
