import CalculatorScreen from "./src/Components/Screen";
import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Button from "./src/Components/Button";
import {
  getDefaultButtonTypes,
  getScientificButtonTypes,
} from "./src/Tools/Buttons";
import { useStore } from "./src/Store";
import { observer } from "mobx-react-lite";
import Display from "./src/Components/Display";
import ScrollViewOffset from "./src/Tools/ScrollViewOffset";
import ButtonBlock from "./src/Components/ButtonBlock";

function App() {
  const { themeStore, bufferStore } = useStore();
  const defaultButtons = getDefaultButtonTypes();
  const scientificButtons = getScientificButtonTypes();
  const defaultLanscapeButtons = getDefaultButtonTypes(true);
  const isDemo = false;

  const [isPortrait, setIsPortrait] = useState(
    Dimensions.get("screen").width < Dimensions.get("screen").height
  );

  useEffect(() => {
    Dimensions.addEventListener("change", ({ window: { width, height } }) => {
      if (width < height) {
        setIsPortrait(true);
      } else {
        setIsPortrait(false);
      }
    });

    return Dimensions.removeEventListener(
      "change",
      ({ window: { width, height } }) => {
        if (width < height) {
          setIsPortrait(true);
        } else {
          setIsPortrait(false);
        }
      }
    );
  }, []);

  return (
    <CalculatorScreen
      darkMode={themeStore.darkMode}
      setMode={themeStore.setMode}
      isPortrait={isPortrait}
      value={bufferStore.displayValue}
    >
      {isPortrait ? (
        <ScrollViewOffset
          decelerationRate="fast"
          horizontal
          snapToInterval={1.9 * Dimensions.get("window").width}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            display: "flex",
            width: 1.9 * Dimensions.get("window").width,
          }}
          startAtEnd
        >
          <ButtonBlock buttons={defaultButtons} />
          {isDemo ? (
            <View
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "50%",
              }}
            >
              <Text
                style={{
                  color: themeStore.darkMode ? "white" : "black",
                  fontSize: 40,
                }}
              >
                Demo version
              </Text>
            </View>
          ) : (
            <ButtonBlock buttons={scientificButtons} />
          )}
        </ScrollViewOffset>
      ) : (
        <View style={{ display: "flex", flexDirection: "row" }}>
          <ButtonBlock landscapeMode buttons={scientificButtons} />
          <ButtonBlock landscapeMode buttons={defaultLanscapeButtons} />
        </View>
      )}
    </CalculatorScreen>
  );
}

export default observer(App);
