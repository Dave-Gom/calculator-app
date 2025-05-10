import CalculatorButton from "@/components/CalculatorButton";
import ThemedText from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/styles/global-styles";
import * as NavigationBar from "expo-navigation-bar";
import React from "react";
import { Platform, View } from "react-native";

const isAndroid = Platform.OS === "android";

if (isAndroid) {
  NavigationBar.setBackgroundColorAsync("#000000");
}

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
          color={Colors.orange}
          onPress={() => {
            console.log("÷");
          }}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          label="7"
          darkeText
          onPress={() => {
            console.log("7");
          }}
          color={Colors.lightGray}
        />
        <CalculatorButton
          label="8"
          darkeText
          onPress={() => {
            console.log("8");
          }}
          color={Colors.lightGray}
        />
        <CalculatorButton
          label="9"
          darkeText
          onPress={() => {
            console.log("9");
          }}
          color={Colors.lightGray}
        />
        <CalculatorButton
          label="x"
          color={Colors.orange}
          onPress={() => {
            console.log("x");
          }}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          label="4"
          darkeText
          onPress={() => {
            console.log("4");
          }}
          color={Colors.lightGray}
        />
        <CalculatorButton
          label="5"
          darkeText
          onPress={() => {
            console.log("5");
          }}
          color={Colors.lightGray}
        />
        <CalculatorButton
          label="6"
          darkeText
          onPress={() => {
            console.log("6");
          }}
          color={Colors.lightGray}
        />
        <CalculatorButton
          label="-"
          color={Colors.orange}
          onPress={() => {
            console.log("-");
          }}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          label="1"
          darkeText
          onPress={() => {
            console.log("1");
          }}
          color={Colors.lightGray}
        />
        <CalculatorButton
          label="2"
          darkeText
          onPress={() => {
            console.log("2");
          }}
          color={Colors.lightGray}
        />
        <CalculatorButton
          label="3"
          darkeText
          onPress={() => {
            console.log("3");
          }}
          color={Colors.lightGray}
        />
        <CalculatorButton
          label="+"
          color={Colors.orange}
          onPress={() => {
            console.log("+");
          }}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          label="0"
          doubleSize
          darkeText
          onPress={() => {
            console.log("0");
          }}
          color={Colors.lightGray}
        />
        <CalculatorButton
          label="."
          darkeText
          onPress={() => {
            console.log(".");
          }}
          color={Colors.lightGray}
        />
        <CalculatorButton
          label="="
          color={Colors.orange}
          onPress={() => {
            console.log("=");
          }}
        />
      </View>
      s
    </View>
  );
};

export default CalculatorApp;
