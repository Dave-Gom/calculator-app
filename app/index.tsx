import CalculatorButton from "@/components/CalculatorButton";
import ThemedText from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/styles/global-styles";
import React from "react";
import { View } from "react-native";

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <ThemedText variant="h1">CalculatorApp</ThemedText>
        <ThemedText variant="h2">CalculatorApp</ThemedText>
      </View>

      {/* Botones */}
      <View style={globalStyles.row}>
        <CalculatorButton
          label="C"
          darkeText
          onPress={() => {
            console.log("C");
          }}
          color={Colors.lightGray}
        />
        <CalculatorButton
          label="+/-"
          darkeText
          onPress={() => {
            console.log("+/-");
          }}
          color={Colors.lightGray}
        />
        <CalculatorButton
          label="del"
          darkeText
          onPress={() => {
            console.log("del");
          }}
          color={Colors.lightGray}
        />
        <CalculatorButton
          label="÷"
          onPress={() => {
            console.log("÷");
          }}
        />
      </View>
    </View>
  );
};

export default CalculatorApp;
