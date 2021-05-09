import React from "react";
import { Text, View, Button, Alert, StyleSheet } from "react-native";

const CustomButton = (props) => {
  return (
    <View style={(styles.container, buttonStyles.container)}>
      <Button
        title={props.text}
        color="white"
        onPress={() => alert("Button has been pressed!")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    justifyContent: "flex-end",
  },
});

const buttonStyles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    backgroundColor: "#46C1C1",
    borderRadius: 20,
    paddingVertical: 15,
    marginVertical: 10,
    marginHorizontal: 70,
  },
});

// alert(buttonStyles.container.backgroundColor);

export default CustomButton;
