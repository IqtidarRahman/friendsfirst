import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function EmailScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What is your email?</Text>
      <Text style={styles.label}>Enter your email</Text>
      <TextInput
        style={styles.input}
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.button} onPress={() => router.push("onboarding/DOBScreen")}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 20, backgroundColor: "#fff" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 30 },
  label: { alignSelf: "flex-start", fontSize: 16, marginBottom: 5 },
  input: { width: "100%", height: 50, borderWidth: 2, borderColor: "#000", borderRadius: 10, paddingHorizontal: 10, fontSize: 16, marginBottom: 20 },
  button: { width: "100%", height: 50, backgroundColor: "#6EC1E4", justifyContent: "center", alignItems: "center", borderRadius: 10, marginTop: 10 },
  buttonText: { fontSize: 18, color: "#fff", fontWeight: "bold" },
});
