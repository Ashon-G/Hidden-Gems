import React, { useState } from "react";
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

const Notes = (props) => {
  const { width, height } = useWindowDimensions();
  const styles = _styles({ width, height });
  let { SyncButton } = props;
  const [isButtonPlayed, setIsButtonPlayed] = useState(false);

  return (
    <View style={styles.container}>
      {SyncButton ? (
        <TouchableOpacity style={styles.syncButtonBody}>
          <View style={styles.ButtonIconBody}>
            <Image
              source={require("../../../assets/7.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.SyncedButtonText}>Synced</Text>
        </TouchableOpacity>
      ) : null}

      <View style={styles.TitleInfoWrapper}>
        <View style={styles.TitleThumbBody}>
          <Image
            source={require("../../../assets/3.png")}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.Titletext}>Our Work Notes</Text>
      </View>
      <View style={styles.TitleInfoWrapper}>
        <Text style={styles.FolderText}>Folder One</Text>
        <View style={styles.DotBody}></View>
        <Text style={styles.TimeText}>1 min ago</Text>
      </View>
      <Text style={styles.DesText}>
        The voice record is playing The voice record is playing The voice record
        is playing The voice{"\n"}record is playing The voice
      </Text>
      {isButtonPlayed ? (
        <View style={styles.playBackBody}>
          <LinearGradient
            colors={["#FB7655", "#DC38BC", "#8A58CF"]}
            style={styles.background}
          />
          <TouchableOpacity
            onPress={() => setIsButtonPlayed(!isButtonPlayed)}
            style={styles.PlayButonBody}
          >
            <Image
              source={require("../../../assets/4.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="stretch"
            />
          </TouchableOpacity>
          <View style={styles.waveBody}>
            <Image
              source={require("../../../assets/wave.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="stretch"
            />
          </View>
          <Text style={styles.TimeText2}>05:26</Text>
        </View>
      ) : (
        <View style={styles.PauseBackBody}>
          <TouchableOpacity
            onPress={() => setIsButtonPlayed(!isButtonPlayed)}
            style={styles.PlayButonBody}
          >
            <Image
              source={require("../../../assets/video.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="stretch"
            />
          </TouchableOpacity>
          <View style={styles.waveBody}>
            <Image
              source={require("../../../assets/wave.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="stretch"
            />
          </View>
          <Text style={styles.TimeText2}>05:26</Text>
        </View>
      )}
    </View>
  );
};

const _styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      height: 195,
      width: getPercent(90, width),
      padding: 15,
      alignSelf: "center",
      backgroundColor: "#1B223E",
      borderRadius: 10,
      justifyContent: "space-between",
      marginBottom: 10,
    },
    syncButtonBody: {
      height: 26,
      width: 78,
      backgroundColor: "#235825",
      borderRadius: 5,
      flexDirection: "row",
      alignItems: "center",
      position: "absolute",
      justifyContent: "center",
      right: 5,
      top: 5,
    },
    SyncedButtonText: {
      fontFamily: "SemiBold",
      fontSize: rf(11),
      color: "#53D258",
    },
    ButtonIconBody: {
      height: 15,
      width: 15,
      marginRight: 5,
    },
    TitleInfoWrapper: {
      flexDirection: "row",
      alignItems: "center",
    },
    TitleThumbBody: {
      height: 20,
      width: 20,
      marginRight: 8,
    },
    Titletext: {
      fontFamily: "SemiBold",
      fontSize: rf(16),
      color: "#F2FDFF",
    },
    FolderText: {
      fontFamily: "Medium",
      fontSize: rf(11),
      color: "#E360C9",
    },
    DotBody: {
      height: 5,
      width: 5,
      borderRadius: 100,
      backgroundColor: "#A8B2C2",
      marginHorizontal: 10,
    },
    TimeText: {
      fontFamily: "Medium",
      fontSize: rf(11),
      color: "#A8B2C2",
    },
    DesText: {
      fontFamily: "Regular",
      fontSize: rf(11),
      color: "#A8B2C2",
      lineHeight: 17,
    },
    playBackBody: {
      height: 45,
      width: "100%",
      flexDirection: "row",
      borderRadius: 20,
      overflow: "hidden",
      alignItems: "center",
      justifyContent: "space-between",
    },
    background: {
      height: "100%",
      width: "100%",
      position: "absolute",
    },
    PlayButonBody: {
      height: 28,
      width: 28,
      shadowColor: "#000",
      borderRadius: 100,
      marginLeft: 10,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    waveBody: {
      height: 23,
      width: 190,
      marginHorizontal: 8,
    },
    TimeText2: {
      fontFamily: "Regular",
      fontSize: rf(9),
      color: "#EAECEE",
      marginRight: 10,
    },
    PauseBackBody: {
      height: 45,
      width: "100%",
      flexDirection: "row",
      borderRadius: 20,
      overflow: "hidden",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "#0F1322",
    },
  });

export default Notes;
