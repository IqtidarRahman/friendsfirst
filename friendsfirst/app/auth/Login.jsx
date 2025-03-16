import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebaseConfig"; // Ensure Firebase is configured

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleLogin = async () => {
  //   try {
  //     await signInWithEmailAndPassword(auth, email, password);
  //     router.push("/Home"); // Redirect after login
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // };
  const handleLogin = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />

      <Text style={styles.label}>Password</Text>
      <TextInput style={styles.input} value={password} onChangeText={setPassword} secureTextEntry />

      <TouchableOpacity onPress={() => router.push("/ForgotPassword")}>
        <Text style={styles.forgotText}>Forgot your password</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity> */}
      <TouchableOpacity style={styles.button} onPress={() => router.push("onboarding/ProfileName")}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", justifyContent: "center", paddingHorizontal: 20 },
  title: { fontSize: 32, fontWeight: "bold", marginBottom: 20 },
  label: { fontSize: 16, marginBottom: 5 },
  input: { width: "100%", height: 50, borderWidth: 2, borderColor: "#000", borderRadius: 10, paddingHorizontal: 10, marginBottom: 20 },
  forgotText: { fontSize: 14, textDecorationLine: "underline", marginBottom: 20 },
  button: { width: "100%", height: 50, backgroundColor: "#6EC1E4", justifyContent: "center", alignItems: "center", borderRadius: 10 },
  buttonText: { fontSize: 18, color: "#fff", fontWeight: "bold" },
});
