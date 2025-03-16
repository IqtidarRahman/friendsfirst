import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* App Title */}
      <Text style={styles.title}>Friends{"\n"}First</Text>

      {/* Tagline */}
      <Text style={styles.subtitle}>Meet{"\n"}Connect{"\n"}Belong</Text>

      {/* Register Button */}
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => router.push("auth/Register")}
      >
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => router.push("auth/Login")}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      {/* Forgot Password */}
      <TouchableOpacity onPress={() => router.push("/ForgotPassword")}>
        <Text style={styles.forgotText}>Forgot your password</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", // White background
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    textAlign: "center",
    lineHeight: 28,
    marginBottom: 40,
  },
  registerButton: {
    width: "80%",
    height: 50,
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  registerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  loginButton: {
    width: "80%",
    height: 50,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 15,
  },
  loginText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  forgotText: {
    fontSize: 14,
    textDecorationLine: "underline",
    color: "#000",
  },
});
