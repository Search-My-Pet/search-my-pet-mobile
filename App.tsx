import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ENVIRONMENT } from "react-native-dotenv";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{ENVIRONMENT}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    textTransform: "capitalize",
  },
});
