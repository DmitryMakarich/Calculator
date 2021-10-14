import React from "react";
import { View, Text } from "react-native";
import DisplayModel from "../Models/Display";
import { styles } from "./style";

interface Props {
  displayProps: DisplayModel;
}

export default function Display({ displayProps }: Props) {
  const { darkMode, value, isPortrait } = displayProps;

  return (
    <View
      style={{
        padding: isPortrait ? 15 : 0,
        paddingBottom: 0,
        paddingTop: isPortrait ? 30: 0,
        width: isPortrait ? "100%" : "70%",
      }}
    >
      <Text
        style={[
          styles.display,
          {
            color: darkMode ? "white" : "black",
            fontSize: isPortrait ? 75 : 50,
            
          },
        ]}
      >
        {value}
      </Text>
    </View>
  );
}
