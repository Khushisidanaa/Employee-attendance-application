import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LandingScreen from "./screens/LandingScreen";
import { MainStackNavigator } from "./Navigation";

export default function App() {
  return <MainStackNavigator />;
}
