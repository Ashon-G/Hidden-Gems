import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";
import { getPercent } from "../../../middleware";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { LinearGradient } from "expo-linear-gradient";

const Memos = (props) => {
  const { width, height } = useWindowDimensions();
  const styles = _styles({ width, height });
  let { title } = props;

  let memosData = [
    {
      gradientColors: ["#FB7655", "#DC38BC", "#8A58CF"],
      color: "#FB7655",
    },
    {
      gradientColors: ["#FF8C00", "#FF8C00"],
      color: "#fff",
    },
    {
      gradientColors: ["#8A58CF", "#8A58CF"],
      color: "#fff",
    },
    {
      gradientColors: ["#FB7655", "#FB7655"],
      color: "#fff",
    },
    {
      gradientColors: ["#8C6C00", "#8C6C00"],
      color: "#fff",
    },
    {
      gradientColors: ["#DC38BC", "#DC38BC"],
      color: "#fff",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.InnerWrapper}>
        {memosData?.map((item, index) => {
          return (
            <View style={styles.Iconwrapper}>
              <TouchableOpacity style={styles.GradientIconbody}>
                <LinearGradient
                  colors={item?.gradientColors}
                  style={styles.background}
                />
                <Image
                  source={require("../../../assets/1.png")}
                  style={{ height: "55%", width: "55%" }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <Text
                style={[
                  styles.MemosText,
                  {
                    color: item?.color,
                  },
                ]}
              >
                All Memos
              </Text>
            </View>
          );
        })}
      </View>
      <View style={styles.navigationDotWrapper}>
        <View style={styles.NavigationCircleBody}></View>
        <View style={styles.ActiveNavigationCircleBody}></View>
        <View style={styles.NavigationCircleBody}></View>
      </View>
    </View>
  );
};

const _styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      height: 205,
      width: getPercent(90, width),
      alignSelf: "center",
      backgroundColor: "#1B223E",
      borderRadius: 10,
      marginTop: getPercent(2, height),
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    InnerWrapper: {
      height: "70%",
      width: "90%",
      //   backgroundColor: "purple",
      justifyContent: "space-between",
      alignSelf: "center",
      marginTop: 8,
      flexDirection: "row",
      flexWrap: "wrap",
    },
    Iconwrapper: {
      alignItems: "center",
      height: "55%",
      width: "30%",
      //   backgroundColor: "red",
      justifyContent: "flex-end",
    },
    GradientIconbody: {
      height: 40,
      width: 40,
      borderRadius: 100,
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    MemosText: {
      fontFamily: "SemiBold",
      fontSize: rf(13),
      color: "#FB7655",
      marginTop: 7,
    },
    background: {
      height: "100%",
      width: "100%",
      position: "absolute",
    },
    navigationDotWrapper: {
      flexDirection: "row",
      alignItems: "flex-end",
      alignSelf: "center",
      height: "18%",
      //   backgroundColor: "yellow",
    },
    NavigationCircleBody: {
      height: 5,
      width: 5,
      borderRadius: 100,
      backgroundColor: "#fff",
    },
    ActiveNavigationCircleBody: {
      height: 5,
      width: 20,
      borderRadius: 100,
      backgroundColor: "#3D2BE2",
      marginHorizontal: 5,
    },
  });

export default Memos;
