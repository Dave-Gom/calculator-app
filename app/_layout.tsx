import { Slot } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const RootLayout = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>_layout</Text>
        <Slot />
      </View>
    </SafeAreaView>
  );
};

export default RootLayout;
