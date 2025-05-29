import {
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { connect } from "react-redux";
import { Headerstyles } from "../styles/Global/main";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { RFValue as rf } from "react-native-responsive-fontsize";

const Header = (props) => {
  let { title } = props;
  let { width, height } = useWindowDimensions();
  let styles = Headerstyles({ width, height });

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.titlewrapper}>
        <Ionicons name="chevron-back" size={rf(16)} color="#fff" />
        <Text style={styles.titletext}>{title}</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Entypo name="dots-three-vertical" size={rf(18)} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Header);
