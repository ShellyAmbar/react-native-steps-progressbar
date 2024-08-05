import {useEffect, useRef} from "react";
import {Animated} from "react-native";
import UseHorizontalGradiantProgressbarProps from "./interfaces";

const useHorizontalGradiantProgressbar = ({
  currentStep,
  steps,
  width,
  stepSize,
  ...props
}: UseHorizontalGradiantProgressbarProps) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const widthInterpolate = animatedValue.interpolate({
    inputRange: [0, width],
    outputRange: ["0%", "100%"],
    extrapolate: "clamp",
  });

  const slideHorizontal = () => {
    Animated.timing(animatedValue, {
      toValue: (width / steps) * currentStep + stepSize,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    slideHorizontal();
  }, [width, currentStep]);

  return {
    widthInterpolate,
  };
};

export default useHorizontalGradiantProgressbar;
