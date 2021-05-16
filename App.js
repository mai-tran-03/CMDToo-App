import { StatusBar } from "expo-status-bar";
import React from "react";
import CustomButtom from "./components/CustomButton.js";
import styled from "styled-components/native";
import { ThemeProvider } from 'styled-components';
import COLORS from "./components/GlobalStyles.js";

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
    <ThemeProvider theme={{ colors: COLORS }} >
      <StyledView>
      <AppName> GEN CONNECT </AppName>
      <AppDesc> Invite your child to share their feelings </AppDesc>
      <CustomButtom text="play" color="dance challenge" />
      <CustomButtom text="parent guide" color="all about me" />
      <CustomButtom text="how to play" color="the inner me" />
    <StatusBar style="auto" />
    </StyledView>
    </ThemeProvider>
  );
}
