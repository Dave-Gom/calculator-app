import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.backgoround,
  },
  calculatorContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingBottom: 20,
  },

  mainResult: {
    fontSize: 70,
    color: Colors.textPrimary,
    textAlign: "right",
    fontWeight: "400",
  },
  subResult: {
    color: Colors.textSecondary,
    textAlign: "right",
    fontSize: 30,
    fontWeight: "300",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 18,
    paddingHorizontal: 10,
  },
  button: {
    height: 70,
    width: 70,
    backgroundColor: Colors.darkGray,
    justifyContent: "center",
    marginHorizontal: 10,
    borderRadius: 100,
  },
  buttoText: {
    textAlign: "center",
    padding: 10,
    fontSize: 30,
    color: Colors.white,
    fontFamily: "SpaceMono",
    fontWeight: "300",
  },
});
