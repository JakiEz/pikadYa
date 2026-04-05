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
    <LinearGradient colors={["#f5d742", "#f7e9b3"]} style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>1. เภสัชวัตถุ</Text>

        <View style={styles.body}>
          <Text style={styles.description}>{descriptionText}</Text>

          <View style={styles.listContainer}>
            {items.map((item) => (
              <View
                key={item.id}
                style={styles.item}
              >
                <Text style={styles.itemText}>{item.label}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  card: {
    width: "90%",
    borderRadius: 24,
    overflow: "hidden",
    backgroundColor: "#f5f0c0",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 16,
    backgroundColor: "#f5f0c0",
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
});
