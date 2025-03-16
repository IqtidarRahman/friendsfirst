import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function profileName() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let us get to know you!</Text>

      <Text style={styles.label}>First Name</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={firstName}
        onChangeText={setFirstName}
      />

      <Text style={styles.label}>Last Name</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={lastName}
        onChangeText={setLastName}
      />

      <TouchableOpacity style={styles.button} onPress={() => router.push("onboarding/EmailScreen")}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

// ✅ Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
  },
  label: {
    alignSelf: "flex-start",
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#6EC1E4", // Light blue
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});
