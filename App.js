import { StatusBar } from "expo-status-bar";
import React, { Fragment } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "./components/CustomButton.js";

export default function App() {
  return (
    <View style={styles.container}>
      <Fragment>
        <Text style={{ fontSize: 35 }}>GEN CONNECT</Text>
        <Text style={{ paddingVertical: 15, fontSize: 18 }}>
          Invite your child to share their feelings
        </Text>
        <CustomButton text="play" color="#9BC53D" />
        <CustomButton text="parent guide" color="#46C1C1" />
        <CustomButton text="how to play" color="#EE3282" />
      </Fragment>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
