import { Stack } from "expo-router";

export default function OnboardingLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileName" options={{ title: "Enter Email" }} />
      <Stack.Screen name="EmailScreen" options={{ title: "Enter Email" }} />
      <Stack.Screen name="DOBScreen" options={{ title: "Enter Email" }} />
      <Stack.Screen name="GenderScreen" options={{ title: "Select Gender" }} />
      <Stack.Screen name="StudentTypeScreen" options={{ title: "Are You a Student?" }} />
      <Stack.Screen name="PronounsScreen" options={{ title: "Select Pronouns" }} />
      <Stack.Screen name="LookingForScreen" options={{ title: "Select Pronouns" }} />
    </Stack>
  );
}
