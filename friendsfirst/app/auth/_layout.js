import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" options={{ title: "Sign In" }} />
      <Stack.Screen name="ForgotPassword" options={{ title: "Reset Password" }} />
    </Stack>
  );
}
