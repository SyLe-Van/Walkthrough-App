import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { useEffect } from "react";
function WelcomeScreen() {
  useEffect(() => {
    axios.get(
      "https://walkthroughapp-a32ed-default-rtdb.asia-southeast1.firebasedatabase.app/message.json"
    );
  }, []);
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
