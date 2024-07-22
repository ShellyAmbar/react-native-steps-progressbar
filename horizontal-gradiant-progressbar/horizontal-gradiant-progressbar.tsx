import {LinearGradient} from "expo-linear-gradient";
import React, {useState} from "react";
import {Animated, View, Text} from "react-native";
import useHorizontalGradiantProgressbar from "./hooks/useHorizontalGradiantProgressbar";
import createStyle from "./horizontal-gradiant-progressbar.styles";
import {HorizontalGradiantProgressbarProps} from "./interfaces";

const HorizontalGradiantProgressbar = ({
  containerStyle,
  gradiantStyle,
  colorPrimary,
  colorSecondary,
  steps,
  currentStep,
  stepSize = 30,
  stepTextStyle,
  stepSelectedViewStyle,
  stepUnSelectedViewStyle,
  stepSelectedTextStyle,
  stepUnSelectedTextStyle,
  ...props
}: HorizontalGradiantProgressbarProps) => {
  const [width, setwidth] = useState(0);
  const {widthInterpolate} = useHorizontalGradiantProgressbar({
    steps,
    currentStep,
    width,
  });
  const Styles = createStyle({
    animatedWidthValue: widthInterpolate,
    colorPrimary,
    colorSecondary,
    stepSize,
  });

  return (
    <View style={Styles.container}>
      <View
        onLayout={(e) => {
          console.log(e.nativeEvent.layout.width);

          setwidth(e.nativeEvent.layout.width);
        }}
        style={[Styles.circularContainer, {...containerStyle}]}
      >
        <Animated.View style={Styles.animatedView}>
          <LinearGradient
            colors={[colorPrimary, colorSecondary]}
            style={[Styles.linearGradient, {...gradiantStyle}]}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
          />
        </Animated.View>
      </View>
      <View style={Styles.steps}>
        {[...Array(steps)].map((step, index) => {
          return (
            <View
              style={
                currentStep >= index
                  ? [Styles.stepSelected, {...stepSelectedViewStyle}]
                  : [Styles.stepUnSelected, {...stepSelectedTextStyle}]
              }
            >
              <Text
                style={
                  currentStep >= index
                    ? [Styles.stepTextSelected, {...stepUnSelectedViewStyle}]
                    : [Styles.stepTextUnSelected, {...stepUnSelectedTextStyle}]
                }
              >
                {index + 1}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default HorizontalGradiantProgressbar;
