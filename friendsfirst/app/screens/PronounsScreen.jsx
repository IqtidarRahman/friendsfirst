import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useSignup } from "../SignUpContext.jsx";

export default function PronounsScreen() {
  const { updateSignupData } = useSignup();
  const [selectedPronouns, setSelectedPronouns] = useState("");
  const router = useRouter();

  const handleSelect = (pronoun) => {
    setSelectedPronouns(pronoun);
  };

  const handleNext = () => {
    updateSignupData({ pronouns: selectedPronouns });
    router.push("screens/GenderScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Share your pronouns!</Text>
      {[
        "She/Her",
        "He/Him",
        "They/Them",
        "Other",
      ].map((item) => (
        <TouchableOpacity
          key={item}
          style={[styles.checkbox, selectedPronouns === item && styles.selected]}
          onPress={() => handleSelect(item)}
        >
          <Text style={styles.checkboxText}>{item}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  checkbox: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    padding: 15,
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 10,
    width: "80%",
    justifyContent: "center",
  },
  selected: {
    backgroundColor: "#6EC1E4",
    borderColor: "#6EC1E4",
  },
  checkboxText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "#6EC1E4",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});
