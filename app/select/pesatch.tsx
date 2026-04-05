import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const items = [
  { id: 1, label: "เภสัชวัตถุ", path: "/select/pesatchWatuu" },
  { id: 2, label: "สรรพคุณ", path: "/select/sappakhun" },
  { id: 3, label: "เภสัชกรรม", path: "/select/phesatchakam" },
  { id: 4, label: "คณาเภสัช", path: "/select/khana" },
];

const descriptionText =
  "การศึกษาเภสัชกรรมไทยแผนโบราณจำเป็นต้องรู้หลักสำคัญของการศึกษาวิชานี้ เพื่อจดจำง่าย เรียกว่า หลักเภสัช โดยจำแนกออกเป็น 4 ประการ ได้แก่";

export default function Pesatch() {
  return (
    <LinearGradient colors={["#FFE082", "#faedb9", "#FFF3C4", "#FFFFFF"]} style={styles.container}>
      <View style={styles.card}>
          {/* Left: description */}
          <View style={styles.topPanel}>
            <Text style={styles.description}>{descriptionText}</Text>
          </View>

          {/* Right: numbered list */}
          <View style={styles.belowPanel}>
            {items.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.item}
                onPress={() => router.push(item.path as any)}
              >
                <Text style={styles.itemText}>
                  {item.id}.{"  "}
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
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
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  scroll: { flexGrow: 1, justifyContent: "center", padding: 20 },
  card: {
    flexDirection: "column",
    borderRadius: 24,
    overflow: "hidden",
    width: "90%",
  },
  topPanel: {
    backgroundColor: "#4a6741",
    padding: 20,
    // justifyContent: "center",
  },
  description: {
    color: "#fff",
    fontSize: 18,
    lineHeight: 30,
    fontWeight: "500",
  },
  belowPanel: {
    backgroundColor: "#e8dfa0",
    padding: 16,
    // justifyContent: "center",
    gap: 14,
  },
  item: {
    backgroundColor: "#f0e878",
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 18,
  },
  itemText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
});
