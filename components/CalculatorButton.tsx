import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/styles/global-styles";
import * as Haptics from "expo-haptics";
import React from "react";
import { ColorValue, Pressable, Text } from "react-native";

interface CalculatorButtonProps {
  label: string;
  color?: ColorValue;
  darkeText?: boolean;
  onPress?: () => void;
  doubleSize?: boolean;
}

const CalculatorButton = ({
  label,
  color = Colors.darkGray,
  darkeText,
  onPress,
  doubleSize = false,
}: CalculatorButtonProps) => {
  const handleOnPress = () => {
    Haptics.selectionAsync();
    if (onPress) {
      onPress();
    }
  };

  return (
    <Pressable
      style={({ pressed }) => ({
        ...globalStyles.button,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1,
        width: doubleSize ? 170 : 70,
      })}
      onPress={handleOnPress}
    >
      <Text
        style={{
          ...globalStyles.buttoText,
          color: darkeText ? "black" : "white",
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default CalculatorButton;
