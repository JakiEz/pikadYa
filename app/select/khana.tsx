import Frame from "@/components/Frame";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const items = [
  { id: 1, label: "1.จุลพิกัด", path: "/select/khana/junlaphikat" },
  { id: 2, label: "2. พิกัดยา", path: "/select/khana/phikatyaa" },
  { id: 3, label: "3. มหาพิกัด", path: "/select/khana/mahaphikat" },
];

const descriptionText =
  "หมายถึง การจัดหมวดหมู่ตัวยาหลายสิ่งหลายอย่าง เรียกเป็นชื่อเดียวกัน แบ่งออกเป็น 3 หมวด ได้แก่";

export default function Khana() {
  return (
    <LinearGradient colors={["#FFE082", "#faedb9", "#FFF3C4", "#FFFFFF"]} style={styles.container}>
      <Frame>
      <View style={styles.centerContainer}>
    <View style={styles.card}>
      <Text style={styles.title}>4.คณาเภสัช</Text>

      <View style={styles.body}>
        <Text style={styles.description}>{descriptionText}</Text>

        {items.map((item) => (
          <View key={item.id}>
            <Text style={styles.itemText}>{item.label}</Text>
          </View>
        ))}
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
  container: { flex: 1, },
  card: {
    width: "90%",
    borderRadius: 24,
    backgroundColor: "#ffe854",
    overflow: "hidden",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 16,
    backgroundColor: "#ffe854",
  },
  body: {
    backgroundColor: "#4a6741",
    margin: 12,
    borderRadius: 16,
    padding: 24,
    gap: 16,
  },
  description: {
    color: "#fff",
    fontSize: 18,
    lineHeight: 30,
    marginBottom: 8,
  },
  itemText: {
    color: "#fff",
    fontSize: 18,
    lineHeight: 30,
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
