import {Animated, TextStyle, ViewStyle} from "react-native";

type HorizontalGradiantProgressbarProps = {
  containerStyle?: ViewStyle;
  gradiantStyle?: ViewStyle;
  colorPrimary: string;
  colorSecondary: string;
  steps: number;
  currentStep: number;
  stepSize?: number;
  stepTextStyle?: TextStyle;
  stepSelectedViewStyle?: ViewStyle;
  stepUnSelectedViewStyle?: ViewStyle;
  stepSelectedTextStyle?: TextStyle;
  stepUnSelectedTextStyle?: TextStyle;
};
type HorizontalGradiantProgressbarStylesProps = {
  animatedWidthValue: Animated.AnimatedInterpolation<string | number>;
  colorPrimary?: string;
  colorSecondary?: string;
  stepSize?: number;
};

export {
  HorizontalGradiantProgressbarProps,
  HorizontalGradiantProgressbarStylesProps,
};
