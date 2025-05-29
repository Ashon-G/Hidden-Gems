import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";

//standardButton Styles starts here
export const standardButtonStyles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      height: getPercent(5, width),
      backgroundColor: "#9CE3AE",
      borderRadius: 8,
      shadowColor: "#000",
      shadowOffset: {
        width: 5,
        height: 6,
      },
      shadowOpacity: 2,
      shadowRadius: 1,
      elevation: 6,
      alignItems: "center",
      justifyContent: "center",
      marginRight: getPercent(3, width),
    },
    text: {
      fontSize: rf(15),
      fontFamily: "SemiBold",
      color: "#000000",
    },
  });

//loader Styles starts here
export const loaderStyles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      width: width,
      height: height,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fff",
      position: "absolute",
      left: 0,
      zIndex: 9999999,
      top: getPercent(20, height),
    },
  });

//  Header starts here

export const Headerstyles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      width: getPercent(100, width),
      height: getPercent(12, height),
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fff",
      backgroundColor: "#0F1322",
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: getPercent(5, width),
      justifyContent: "space-between",
      borderBottomWidth: 1,
      borderColor: "#28374D",
    },
    titlewrapper: {
      flexDirection: "row",
      alignItems: "center",
    },
    titletext: {
      fontFamily: "SemiBold",
      fontSize: 18,
      color: "rgba(255, 255, 255, 1)",
      marginLeft: 10,
      fontWeight: "600",
    },
  });
