import { View, StyleSheet, Pressable,Text,ScrollView } from "react-native";
import Constants from "expo-constants";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "lightblue",
    justifyContent:"space-around"
    // ...
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
        <ScrollView horizontal>
            <Pressable onPress={() => {}}>
        <Text>Repositories</Text>
      </Pressable>
      <Link to="/signin">
        <Text>Sign In</Text>
      </Link>
        </ScrollView>
      
    </View>
  );
};

export default AppBar;
