import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const LandingPage = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Friends{"\n"}First</Text>
      <Text style={styles.subtitle}>Meet{"\n"}Connect{"\n"}Belong</Text>
      <TouchableOpacity style={styles.registerButton} onPress={() => router.push("/Register")}>
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={() => router.push("/Login")}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.forgotPassword}>Forgot your password</Text>
    </View>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  title: { fontSize: 32, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  subtitle: { fontSize: 18, textAlign: "center", marginBottom: 40 },
  registerButton: { borderWidth: 2, borderColor: "black", padding: 12, borderRadius: 8, marginBottom: 10 },
  registerText: { fontSize: 18, color: "black" },
  loginButton: { backgroundColor: "black", padding: 12, borderRadius: 8, marginBottom: 10 },
  loginText: { fontSize: 18, color: "white" },
  forgotPassword: { fontSize: 14, marginTop: 10, color: "gray" },
});
