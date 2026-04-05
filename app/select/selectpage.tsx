//app/pesatch/pesatch.tsx
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Pesatch() {
  return (
    <LinearGradient colors={["#f5d742", "#f7e9b3"]} style={styles.container}>
      <Text style={styles.title}>พิกัดยา</Text>

      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={[styles.button, styles.greenButton]}
          onPress={() => router.push("/start" as any)}
        >
          <Text style={styles.text}>ยา</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.grayButton]}
          onPress={() => router.push("/select/pesatch" as any)}
        >
          <Text style={styles.text}>เภสัช</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 64, fontWeight: "bold", marginBottom: 40 },
  buttonGroup: { width: "100%", alignItems: "center", gap: 20 },
  button: {
    width: "70%",
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 2, height: 4 },
    elevation: 4,
  },
  greenButton: { backgroundColor: "#8bd969" },
  grayButton: { backgroundColor: "#d4d4d4" },
  text: { fontSize: 28, fontWeight: "bold" },
});
