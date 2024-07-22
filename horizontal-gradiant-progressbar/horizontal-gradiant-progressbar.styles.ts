import {StyleSheet} from "react-native";
import {HorizontalGradiantProgressbarStylesProps} from "./interfaces";

const createStyle = ({
  animatedWidthValue,
  colorPrimary,
  colorSecondary,
  stepSize,
  ...props
}: HorizontalGradiantProgressbarStylesProps) => {
  return StyleSheet.create({
    steps: {
      flexDirection: "row",
      width: "100%",
      zIndex: 1,
      justifyContent: "space-between",
      position: "absolute",
    },
    container: {
      width: "100%",
      paddingHorizontal: 20,
      justifyContent: "center",
      alignItems: "center",
    },

    circularContainer: {
      borderRadius: 0,
      backgroundColor: "transparent",
      width: "100%",
      height: 6,
      overflow: "hidden",
      zIndex: 0,
    },
    linearGradient: {
      flex: 1,
      borderRadius: 8,
    },
    animatedView: {
      backgroundColor: "transparent",
      width: animatedWidthValue,
      height: "100%",
    },
    stepUnSelected: {
      borderRadius: 50,
      borderWidth: 1,
      borderColor: colorSecondary,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      width: stepSize,
      height: stepSize,
    },
    stepSelected: {
      borderRadius: 50,
      borderWidth: 1,
      borderColor: colorPrimary,
      width: stepSize,
      height: stepSize,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colorPrimary,
    },
    stepTextSelected: {
      color: "#FFFF",
      fontSize: 16,
    },
    stepTextUnSelected: {
      color: colorPrimary,
      fontSize: 16,
    },
  });
};
export default createStyle;
