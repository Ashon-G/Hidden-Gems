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

const Header = (props) => {
  const { width, height } = useWindowDimensions();
  const styles = _styles({ width, height });
  let { title } = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.IconBody}>
        <Image
          source={require("../../../assets/back.png")}
          style={{ height: "60%", width: "60%" }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={{ flex: 1, paddingLeft: 10 }}>
        <Text style={styles.Titletext}>{title}</Text>
      </View>
      <TouchableOpacity style={styles.IconBody}>
        <Image
          source={require("../../../assets/10.png")}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

const _styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      height: getPercent(13, height),
      width: getPercent(100, width),
      backgroundColor: "#0F1322",
      paddingTop: getPercent(4, height),
      borderBottomWidth: 1,
      borderColor: "#28374D",
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: getPercent(5, width),
    },
    IconBody: {
      height: 20,
      width: 20,
      justifyContent: "center",
      alignItems: "center",
    },
    Titletext: {
      fontFamily: "SemiBold",
      fontSize: rf(16),
      color: "#fff",
    },
  });

export default Header;
