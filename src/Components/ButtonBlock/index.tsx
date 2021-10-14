import React from "react";
import { useWindowDimensions, View } from "react-native";
import Button from "../Button";
import ButtonModel from "../Models/Button";
import { styles } from "./style";

interface Props {
  buttons: Array<Array<ButtonModel>>;
  landscapeMode?: boolean;
}

export default function ButtonBlock({ buttons, landscapeMode }: Props) {
  let width = useWindowDimensions().width;

  const height = landscapeMode ? 0.075 * width : 0.2 * width;
  width = landscapeMode ? 0.108 * width : 0.2 * width;

  const borderRadius = 0.5 * width;

  return (
    <View style={{ ...styles.buttonBlock, padding: landscapeMode ? 0 : 8 }}>
      {buttons.map((buttonRow, key) => (
        <View key={key} style={styles.buttonRow}>
          {buttonRow.map((button, key) => (
            <Button
              key={key}
              buttonTools={{
                ...button,
                width: button.width ? button.width : width,
                height: height,
                borderRadius: borderRadius,
              }}
            />
          ))}
        </View>
      ))}
    </View>
  );
}
