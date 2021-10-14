import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import ButtonModel from "../Models/Button";
import { styles } from "./style";

interface Props {
  buttonTools: ButtonModel;
}

export default function Button({ buttonTools }: Props) {
  const { title, onPress, color, ...newProps } = buttonTools;

  return (
    <TouchableOpacity
      style={[styles.container, { ...newProps }]}
      onPress={onPress}
    >
      {buttonTools.isTopIndex ? (
        HighIndex(title.split(" ")[0], title.split(" ")[1], color)
      ) : buttonTools.isBottomIndex ? (
        LowIndex(title.split(" ")[0], title.split(" ")[1], color)
      ) : (
        <Text style={[styles.text, { color: color, fontWeight: "600" }]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

function HighIndex(base: string, exponent: string, color?: string) {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ alignItems: "flex-end" }}>
        <Text style={{ fontSize: 28, color: color, fontWeight: "600" }}>{base}</Text>
      </View>
      <View style={{ alignItems: "flex-start" }}>
        <Text style={{ fontSize: 18, color: color, fontWeight: "600" }}>{exponent}</Text>
      </View>
    </View>
  );
}

function LowIndex(base: string, exponent: string, color?: string) {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ alignItems: "flex-start" }}>
        <Text style={{ fontSize: 18, color: color, fontWeight: "600" }}>{exponent}</Text>
      </View>
      <View style={{ alignItems: "flex-end" }}>
        <Text style={{ fontSize: 28, color: color, fontWeight: "600" }}>{base}</Text>
      </View>
    </View>
  );
}
