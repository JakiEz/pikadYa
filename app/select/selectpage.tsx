//app/pesatch/pesatch.tsx
import Frame from "@/components/Frame";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Pesatch() {
  return (
    <LinearGradient colors={["#FFE082", "#faedb9", "#FFF3C4", "#FFFFFF"]} style={styles.container}>
      <Frame>
        <View style={styles.centerContainer}>
          <Text style={styles.title}>พิกัดยา</Text>

          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={[styles.button, styles.greenButton]}
              onPress={() => router.push("/start" as any)}
            >
              <Text style={styles.text}>พิกัดยา</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.grayButton]}
              onPress={() => router.push("/select/pesatch" as any)}
            >
              <Text style={styles.text}>หลักเภสัช</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => router.back()}
          style={{
            position: "absolute",
            bottom: 30,
            left: 20,
            backgroundColor: "#5a3e1b",
            paddingVertical: 12,
            paddingHorizontal: 18,
            borderRadius: 30,

            shadowColor: "#000",
            shadowOpacity: 0.3,
            shadowRadius: 5,
            shadowOffset: { width: 0, height: 3 },
            elevation: 5,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
            ← ย้อนกลับ
          </Text>
        </TouchableOpacity>
      </Frame>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  title: {
    fontSize: 60,
    fontWeight: "800",
    marginBottom: 40,
    alignContent: "center",
    textAlign: "center",
    color: "#5a3e1b",
    textShadowColor: "#fff",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 3,
  },
  buttonGroup: { width: "100%", alignItems: "center", gap: 50 },
  button: {
    width: 300,
    height: 70,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 20, // ⭐ ปรับเพื่อให้ icon ซ้ายไม่บังปุ่ม

    shadowColor: "#000",
    shadowOpacity: 4,
    shadowRadius: 2,
    shadowOffset: { width: 7, height: 9 },
    elevation: 8,
  },
  greenButton: { backgroundColor: "#8bd969" },
  grayButton: { backgroundColor: "#d4d4d4" },
  text: { fontSize: 28, fontWeight: "bold" },

  centerContainer: {
    flex: 1,
    justifyContent: "center", // แนวตั้ง
    alignItems: "center", // แนวนอน
  },
});
