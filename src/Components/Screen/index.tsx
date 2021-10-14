import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Display from "../Display";
interface Props {
  darkMode: boolean;
  setMode: () => void;
  isPortrait: boolean;
  value: string;
}

function CalculatorScreen({
  children,
  darkMode,
  setMode,
  isPortrait,
  value
}: React.PropsWithChildren<Props>) {
  const styles = StyleSheet.create({
    calculatorScreen: {
      flex: 1,
      padding: 10,
      backgroundColor: darkMode ? "black" : "white",
    },
    container: {
      flex: 1,
      justifyContent: "flex-end",
    },
    themeButton: {
      alignSelf: "flex-start",
      margin: 5,
      marginTop: isPortrait ? 20 : 5,
      backgroundColor: darkMode ? "#7b8084" : "#e5e5e5",
      alignItems: "center",
      justifyContent: "center",
      width: 50,
      height: isPortrait ? 50 : 45,
      borderRadius: 25,
    },
    text: {
      color: darkMode ? "white" : "black",
    },
  });

  return (
    <View style={styles.calculatorScreen}>
      <View style={{display: "flex", flexDirection: isPortrait ? "column": "row", justifyContent: "space-between"}}> 
        <TouchableOpacity style={styles.themeButton} onPress={setMode}>
          <Entypo
            name={darkMode ? "light-up" : "moon"}
            size={24}
            color={darkMode ? "white" : "black"}
          />
        </TouchableOpacity>
        <Display
          displayProps={{
            darkMode: darkMode,
            value: value,
            isPortrait: isPortrait,
          }}
        />
      </View>
      <View style={styles.container}>{children}</View>
    </View>
  );
}

export default CalculatorScreen;
