import { useWindowDimensions } from "react-native";
import { store } from "../Store";

const { bufferStore } = store;

export function getDefaultButtonTypes(landscape?: boolean) {
  const width = 0.2 * useWindowDimensions().width;

  return [
    [
      {
        title: "AC",
        color: "black",
        backgroundColor: "#a5a5a5",
        onPress: () => bufferStore.reset(),
      },
      {
        title: "C",
        color: "black",
        backgroundColor: "#a5a5a5",
        onPress: () => bufferStore.delete(),
      },
      {
        title: "+/-",
        color: "black",
        backgroundColor: "#a5a5a5",
        onPress: () => bufferStore.inversion(),
      },
      {
        title: "÷",
        color: "white",
        backgroundColor: "#FF9E00",
        onPress: () => bufferStore.setValue("/"),
      },
    ],
    [
      {
        title: "7",
        color: "white",
        backgroundColor: "#303030",
        onPress: () => bufferStore.setValue("7"),
      },
      {
        title: "8",
        color: "white",
        backgroundColor: "#303030",
        onPress: () => bufferStore.setValue("8"),
      },
      {
        title: "9",
        color: "white",
        backgroundColor: "#303030",
        onPress: () => bufferStore.setValue("9"),
      },
      {
        title: "x",
        color: "white",
        backgroundColor: "#FF9E00",
        onPress: () => bufferStore.setValue("*"),
      },
    ],
    [
      {
        title: "4",
        color: "white",
        backgroundColor: "#303030",
        onPress: () => bufferStore.setValue("4"),
      },
      {
        title: "5",
        color: "white",
        backgroundColor: "#303030",
        onPress: () => bufferStore.setValue("5"),
      },
      {
        title: "6",
        color: "white",
        backgroundColor: "#303030",
        onPress: () => bufferStore.setValue("6"),
      },
      {
        title: "-",
        color: "white",
        backgroundColor: "#FF9E00",
        onPress: () => bufferStore.setValue("-"),
      },
    ],
    [
      {
        title: "1",
        color: "white",
        backgroundColor: "#303030",
        onPress: () => bufferStore.setValue("1"),
      },
      {
        title: "2",
        color: "white",
        backgroundColor: "#303030",
        onPress: () => bufferStore.setValue("2"),
      },
      {
        title: "3",
        color: "white",
        backgroundColor: "#303030",
        onPress: () => bufferStore.setValue("3"),
      },
      {
        title: "+",
        color: "white",
        backgroundColor: "#FF9E00",
        onPress: () => bufferStore.setValue("+"),
      },
    ],
    [
      {
        title: "0",
        color: "white",
        width: landscape ? 1.15 * width : 2.1 * width,
        backgroundColor: "#303030",
        onPress: () => bufferStore.setValue("0"),
      },
      {
        title: ".",
        color: "white",
        backgroundColor: "#303030",
        onPress: () => bufferStore.setValue("."),
      },
      {
        title: "=",
        color: "white",
        backgroundColor: "#FF9E00",
        onPress: () => bufferStore.calculate(),
      },
    ],
  ];
}

export function getScientificButtonTypes() {
  return [
    [
      {
        title: "MC",
        color: "black",
        backgroundColor: "#a5a5a5",
        onPress: () => bufferStore.cleanMemory(),
      },
      {
        title: "M+",
        color: "black",
        backgroundColor: "#a5a5a5",
        onPress: () => bufferStore.pushToMemory(),
      },
      {
        title: "M-",
        color: "black",
        backgroundColor: "#a5a5a5",
        onPress: () => bufferStore.popFromMemory(),
      },
      {
        title: "MR",
        color: "black",
        backgroundColor: "#a5a5a5",
        onPress: () => bufferStore.readMemory(),
      },
    ],
    [
      {
        title: "(",
        color: "white",
        backgroundColor: "#212121",
        isTopIndex: true,
        onPress: () => bufferStore.setValue("("),
      },
      {
        title: "x 2",
        color: "white",
        backgroundColor: "#212121",
        isTopIndex: true,
        onPress: () => bufferStore.setValue("^2"),
      },
      {
        title: "x y",
        color: "white",
        backgroundColor: "#212121",
        isTopIndex: true,
        onPress: () => bufferStore.setValue("^"),
      },
      {
        title: "e x",
        color: "white",
        backgroundColor: "#212121",
        isTopIndex: true,
        onPress: () => bufferStore.setValue("e^"),
      },
    ],
    [
      {
        title: ")",
        color: "white",
        backgroundColor: "#212121",
        onPress: () => bufferStore.setValue(")"),
      },
      {
        title: "\u{221A}x",
        color: "white",
        backgroundColor: "#212121",
        isBottomIndex: true,
        onPress: () => bufferStore.setValue("\u{221A}"),
      },
      {
        title: "\u{221A}x y",
        color: "white",
        backgroundColor: "#212121",
        isBottomIndex: true,
        onPress: () => bufferStore.setValue("\u{221A}"),
      },
      {
        title: "Rand",
        color: "white",
        backgroundColor: "#212121",
        onPress: () => bufferStore.getRandom(),
      },
    ],
    [
      {
        title: "x!",
        color: "white",
        backgroundColor: "#212121",
        onPress: () => bufferStore.factorial(),
      },
      {
        title: "lg",
        color: "white",
        backgroundColor: "#212121",
        isIndex: true,
        onPress: () => bufferStore.setValue("lg("),
      },
      {
        title: "ln",
        color: "white",
        backgroundColor: "#212121",
        onPress: () => bufferStore.setValue("ln("),
      },
      {
        title: "e",
        color: "white",
        backgroundColor: "#212121",
        onPress: () => bufferStore.setValue("e"),
      },
    ],
    [
      {
        title: "sin",
        color: "white",
        backgroundColor: "#212121",
        onPress: () => bufferStore.setValue("sin("),
      },
      {
        title: "cos",
        color: "white",
        backgroundColor: "#212121",
        onPress: () => bufferStore.setValue("cos("),
      },
      {
        title: "tg",
        color: "white",
        backgroundColor: "#212121",
        onPress: () => bufferStore.setValue("tan("),
      },
      {
        title: "π",
        color: "white",
        backgroundColor: "#212121",
        onPress: () => bufferStore.setValue("pi"),
      },
    ],
  ];
}
