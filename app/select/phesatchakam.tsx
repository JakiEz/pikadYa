import Frame from "@/components/Frame";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const items = [
  { id: 1, label: "1.วิธีปรุง", path: "/select/withiprung" },
  { id: 2, label: "2.การใช้ยาอันตราย", path: "/select/yarntarai" },
  { id: 3, label: "3.ยาสามัญประจำบ้าน", path: "/select/yasamanprajaambaan" },
];

const descriptionText =
  "รู้จักการปรุงยาผสมเครื่องยาหรือตัวยาตามที่กำหนดในตำรับหรือใบสั่งยา";

export default function Phesatchakam() {
  return (
    <LinearGradient colors={["#8a9e5a", "#b5c27a"]} style={styles.container}>
      {/* Title badge */}
      <Frame>
      <View style={styles.centerContainer}>
    
    <View style={styles.titleBadge}>
      <Text style={styles.titleText}>3.เภสัชกรรม</Text>
    </View>

    <View style={styles.descCard}>
      <Text style={styles.description}>{descriptionText}</Text>
    </View>

    <View style={styles.itemsRow}>
      {items.map((item) => (
        <View key={item.id} style={styles.item}>
          <Text style={styles.itemText}>{item.label}</Text>
        </View>
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
        </Frame>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  
    gap: 24,
  },
  titleBadge: {
    backgroundColor: "#f0e878",
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 32,
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: 24,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  descCard: {
    width: "95%",
    backgroundColor: "#4a6741",
    borderRadius: 20,
    padding: 24,
  },
  description: {
    color: "#fff",
    fontSize: 20,
    lineHeight: 34,
  },
  itemsRow: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  item: {
    flex: 1,
    backgroundColor: "#f0e878",
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center"
  },
  itemText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
    
  },
});
