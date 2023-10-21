import Constants from "expo-constants";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const COLORS = {
  yellow: "#F8AE33",
  blurYellow: "#373427",
  placeholderYellow: "#ab8033",
  dots: "#d99d39",
  white: "#ffffff",
  white2: "#D5D5D5",
  blue: "#2680F6",
  base: "#2C3333",
  textBlur: "#a4a1a1",
  greyBox: "#484e4e",
  grey: "#4e5454",
  resultText: "#d5d5d5",
  descriptionText: "#878b8b",
  red: "#a30000",
  bottomTools: "#212626",
  card: "#4d4733",
  greyText: "#b6b7b7",
  like: "#2680f6",
  green: "#00ce15",
};

const fontWeight = {
  light: "Poppins-Light",
  regular: "Poppins-Regular",
  medium: "Poppins-Medium",
  semibold: "Poppins-SemiBold",
};

// screen size
const sizes = {
  height,
  width,
};

// status bar height
const statusBarHeight = Constants.statusBarHeight;

export { COLORS, fontWeight, statusBarHeight, sizes };
