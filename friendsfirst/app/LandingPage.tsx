import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const LandingPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Friends{"\n"}First</Text>
      <Text style={styles.subtitle}>Meet{"\n"}Connect{"\n"}Belong</Text>
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.forgotPassword}>Forgot your password</Text>
    </View>
  );
};

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
    </View>
  );
};

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Landing" component={LandingPage} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 40,
  },
  registerButton: {
    borderWidth: 2,
    borderColor: "black",
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 8,
    marginBottom: 10,
  },
  registerText: {
    fontSize: 18,
    color: "black",
  },
  loginButton: {
    backgroundColor: "black",
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderRadius: 8,
    marginBottom: 10,
  },
  loginText: {
    fontSize: 18,
    color: "white",
  },
  forgotPassword: {
    fontSize: 14,
    marginTop: 10,
    color: "gray",
  },
});
