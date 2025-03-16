import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
// import { sendPasswordResetEmail } from "firebase/auth";
// import { auth } from "../firebaseConfig"; // Ensure Firebase is configured

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  // const handlePasswordReset = async () => {
  //   try {
  //     await sendPasswordResetEmail(auth, email);
  //     alert("Password reset email sent!");
  //     router.push("/Login"); // Redirect back to login
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // };
  const handlePasswordReset = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot your{"\n"}password?</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />

      <TouchableOpacity style={styles.button} onPress={handlePasswordReset}>
        <Text style={styles.buttonText}>Send Reset Email</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", justifyContent: "center", paddingHorizontal: 20 },
  title: { fontSize: 32, fontWeight: "bold", marginBottom: 20 },
  label: { fontSize: 16, marginBottom: 5 },
  input: { width: "100%", height: 50, borderWidth: 2, borderColor: "#000", borderRadius: 10, paddingHorizontal: 10, marginBottom: 20 },
  button: { width: "100%", height: 50, backgroundColor: "#6EC1E4", justifyContent: "center", alignItems: "center", borderRadius: 10 },
  buttonText: { fontSize: 18, color: "#fff", fontWeight: "bold" },
});
