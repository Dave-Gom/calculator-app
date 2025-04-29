import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/styles/global-styles";
import React from "react";
import { ColorValue, Pressable, Text } from "react-native";

interface CalculatorButtonProps {
  label: string;
  color?: ColorValue;
  darkeText?: boolean;
  onPress?: () => void;
}

const CalculatorButton = ({
  label,
  color = Colors.darkGray,
  darkeText,
  onPress,
}: CalculatorButtonProps) => {
  return (
    <Pressable style={globalStyles.button} onPress={onPress}>
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
