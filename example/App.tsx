import * as React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import * as ExpoMeshGradient from "expo-mesh-gradient";

export default function App() {
  const [ignoreSafeAreaInsets, setIgnoreSafeAreaInsets] = React.useState(true);
  return (
    <View style={styles.container}>
      <ExpoMeshGradient.ExpoMeshGradientView
        ignoreSafeAreaInsets={ignoreSafeAreaInsets}
        style={StyleSheet.absoluteFill}
      />
      <Button
        title="Toggle safe area"
        onPress={() => setIgnoreSafeAreaInsets(!ignoreSafeAreaInsets)}
      />
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
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
