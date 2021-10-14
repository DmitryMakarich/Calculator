import { GestureResponderEvent } from "react-native";

export default interface ButtonModel {
  title: string;
  color?: string;
  backgroundColor?: string;
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
  isTopIndex?: boolean;
  isBottomIndex?: boolean;
  onPress: (event?: GestureResponderEvent) => void;
}
