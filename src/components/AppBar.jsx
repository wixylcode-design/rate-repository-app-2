import { View, StyleSheet, Pressable,Text } from "react-native";
import Constants from "expo-constants";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "lightblue"
    // ...
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => {}}>
        <Text>Repositories</Text>
      </Pressable>
      <Link to="/signin">
        <Text>Sign In</Text>
      </Link>
    </View>
  );
};

export default AppBar;
