import Frame from "@/components/Frame";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const items = [
  { id: 1, label: "พืชวัตถุ", path: "/select/phuechaWattu" },
  { id: 2, label: "สัตว์วัตถุ", path: "/select/satWattu" },
  { id: 3, label: "ธาตุวัตถุ", path: "/select/thatuWattu" },
];

const descriptionText =
  "คือ รู้จักวัตถุธาตุนานาชนิดที่นำมาใช้ในการรักษาโรค ต้องรู้จักชื่อ ลักษณะ สี กลิ่น และรส แบ่งได้เป็น 3 ประเภท";

export default function PesatchWatuu() {
  return (
    <LinearGradient colors={["#FFE082", "#faedb9", "#FFF3C4", "#FFFFFF"]} style={styles.container}>
      <Frame>
  <View style={styles.centerContainer}>
    <View style={styles.card}>
      <Text style={styles.title}>1. เภสัชวัตถุ</Text>

      <View style={styles.body}>
        <Text style={styles.description}>{descriptionText}</Text>

        <View style={styles.listContainer}>
          {items.map((item) => (
            <View key={item.id} style={styles.item}>
              <Text style={styles.itemText}>{item.label}</Text>
            </View>
          ))}
        </View>
      </View>
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
  container: { flex: 1,},
  card: {
    width: "90%",
    borderRadius: 24,
    overflow: "hidden",
    
    backgroundColor: "#ffe854",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 16,
    backgroundColor: "#ffe854",
  },
  body: {
    backgroundColor: "#4a6741",
    margin: 12,
    borderRadius: 16,
    padding: 20,
    gap: 20,
  },
  description: {
    color: "#fff",
    fontSize: 18,
    lineHeight: 30,
  },
  listContainer: {
    gap: 14,
  },
  item: {
    backgroundColor: "#4a6741",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "#6a8a60",
  },
  itemText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#d4e8c2",
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center", // กลางแนวตั้ง
    alignItems: "center",     // กลางแนวนอน
  },
});
