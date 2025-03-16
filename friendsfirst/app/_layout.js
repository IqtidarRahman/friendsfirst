import { Stack } from "expo-router";
import { View, StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="auth" options={{ title: "Authentication" }} />
        <Stack.Screen name="onboarding" options={{ title: "Onboarding" }} />
      </Stack>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", // ✅ Ensures white background
  },
});
