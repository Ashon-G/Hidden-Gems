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
import { getPercent } from "../../middleware";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { LinearGradient } from "expo-linear-gradient";
import Header from "./components/Header";
import Memos from "./components/Memos";
import Notes from "./components/Notes";

const Allmemos = (props) => {
  const { width, height } = useWindowDimensions();
  const styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <Header title={"All Memos"} />
      <View style={styles.YourFoldersTextBody}>
        <Text style={styles.FoldersText}>Your Folders</Text>
        <Text style={styles.SeeAllText}>See All</Text>
      </View>
      <Memos />
      <View style={styles.SearchBarWrapper}>
        <View style={styles.SearchBarBody}>
          <View style={styles.SearchIconBody}>
            <Image
              source={require("../../assets/11.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </View>
          <TextInput
            placeholder="Search Any Note..."
            placeholderTextColor={"#BEC3CA"}
            style={styles.Input}
          />
        </View>
        <TouchableOpacity style={styles.filterIconBody}>
          <Image
            source={require("../../assets/2.png")}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={{ marginBottom: getPercent(5, height) }}>
          <Notes SyncButton />
          <Notes />
          <Notes />
          <Notes SyncButton />
          <Notes />
        </View>
      </ScrollView>
    </View>
  );
};

const _styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#070B1B",
    },
    YourFoldersTextBody: {
      height: getPercent(6, height),
      width: getPercent(100, width),
      paddingHorizontal: getPercent(5, width),
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "space-between",
    },
    FoldersText: {
      fontFamily: "SemiBold",
      fontSize: rf(13),
      color: "#fff",
    },
    SeeAllText: {
      fontFamily: "SemiBold",
      fontSize: rf(11),
      color: "#FB7655",
    },
    SearchBarWrapper: {
      height: getPercent(12, height),
      width: getPercent(100, width),
      paddingHorizontal: getPercent(5, width),
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    SearchBarBody: {
      height: 40,
      width: 285,
      backgroundColor: "#1B223E",
      borderRadius: 10,
      flexDirection: "row",
      paddingLeft: 10,
      alignItems: "center",
    },
    filterIconBody: {
      height: 30,
      width: 30,
      justifyContent: "center",
      alignItems: "center",
    },
    SearchIconBody: {
      height: 20,
      width: 20,
    },
    Input: {
      fontFamily: "Medium",
      fontSize: rf(13),
      color: "#fff",
      marginLeft: 7,
    },
  });

export default Allmemos;
