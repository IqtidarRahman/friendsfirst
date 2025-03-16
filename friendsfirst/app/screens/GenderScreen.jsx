import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useSignup } from "../SignUpContext.jsx";

export default function PronounsScreen({ navigation }) {
    const { updateSignupData } = useSignup();
  const [selectedPronouns, setSelectedPronouns] = useState("");
  const router = useRouter();

  const handleSelect = (pronoun) => {
    setSelectedPronouns(pronoun);
  };
  const handleNext = () => {
    updateSignupData({ pronouns: selectedPronouns });
    router.push("screens/LookingForScreen");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Share your pronouns!</Text>
      {["She/Her", "He/Him", "They/Them", "Other"].map((item) => (
        <TouchableOpacity key={item} style={[styles.checkbox, selectedPronouns === item && styles.selected]} onPress={() => handleSelect(item)}>
          <Text>{item}</Text>
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
  checkbox: { flexDirection: "row", alignItems: "center", marginVertical: 10, padding: 10, borderWidth: 2, borderRadius: 5 },
  selected: { backgroundColor: "#6EC1E4" },
});
