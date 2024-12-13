import {
  View,
  StatusBar,
  ImageBackground,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";

import { ReactNode } from "react";

const BackgroundScreen = ({ children }: { children: ReactNode }) => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          source={require("../assets/background.png")}
          style={styles.background}
        >
          {children}
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1, // Makes the background cover the entire screen
    resizeMode: "cover", // Ensures the image is not stretched
  },
});

export default BackgroundScreen;
