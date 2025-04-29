import { globalStyles } from "@/styles/global-styles";
import React from "react";
import { Text, TextProps } from "react-native";

interface ThemedTextProps extends TextProps {
  variant?: "h1" | "h2";
}

const ThemedText = ({ ...props }: ThemedTextProps) => {
  return (
    <Text
      style={[
        {
          fontFamily: "SpaceMono",
          color: "#fff",
        },
        props.variant === "h1" && globalStyles.mainResult,
        props.variant === "h2" && globalStyles.subResult,
      ]}
      numberOfLines={1}
      adjustsFontSizeToFit
      {...props}
    />
  );
};

export default ThemedText;
