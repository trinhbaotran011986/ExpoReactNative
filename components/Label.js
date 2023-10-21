import { Text, TextProps } from "react-native";
import { fontWeight } from "../theme";

export const Label = (props) => {
  return (
    <Text
      allowFontScaling={false}
      {...props}
      style={[{ fontFamily: fontWeight.regular, color: "white" }, props.style]}
    >
      {props.children}
    </Text>
  );
};
