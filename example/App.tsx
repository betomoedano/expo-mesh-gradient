import { StyleSheet, Text, View } from 'react-native';

import * as ExpoMeshGradient from 'expo-mesh-gradient';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoMeshGradient.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
