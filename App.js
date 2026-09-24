import { StatusBar } from "expo-status-bar";
import { Text, Pressable, Alert } from "react-native";
import { NativeRouter } from 'react-router-native';
import Main from "./src/components/Main";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NativeRouter>
        <Main />
      </NativeRouter>
    </>
  );
}

const PressableText = (props) => {
  return (
    <Pressable onPress={() => Alert.alert("You pressed the text!")}>
      <Text>You can press me</Text>
    </Pressable>
  );
};
