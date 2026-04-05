import Frame from "@/components/Frame";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

const items = [
  {
    label: "ยารสประธาน 3 รส",
    path: "/select/yarosprataan",
    image: require("../../assets/images/suppakhun.png"),
  },
  {
    label: "รสของตัวยา",
    path: "/select/roskhongtua",
    image: require("../../assets/images/ayaaaa-removebg-preview.png"),
  },
];

const descriptionText =
  "คือ รู้จักสรรพคุณของวัตถุธาตุนานาชนิดชนิดที่นำมาใช้เป็นยา จะต้องรู้รสยาตัวนั้นก่อนนั้นก่อนจึงจะสามารถทราบสรรพคุณได้ภายหลัง";

export default function Sappakhun() {
  return (
    <LinearGradient colors={["#8a9e5a", "#b5c27a"]} style={styles.container}>
      <Frame>
        <View style={styles.centerContainer}>
          <Text style={styles.title}>2.สรรพคุณเภสัช</Text>
          <View style={styles.descCard}>
            <Text style={styles.description}>{descriptionText}</Text>
          </View>
          <View style={styles.row}>
            
            {items.map((item) => (
              <View key={item.label} style={styles.column}>
                
                <Image
                  source={item.image}
                  style={styles.image}
                  resizeMode="contain"
                />
                <View style={styles.button}>
                  
                  <Text style={styles.buttonText}>{item.label}</Text>
                </View>
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

    gap: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  descCard: {
    width: "95%",
    backgroundColor: "#4a6741",
    borderRadius: 20,
    padding: 24,
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: 20,
  },
  description: {
    color: "#fff",
    fontSize: 18,
    lineHeight: 32,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    width: "90%",
    gap: 16,
  },
  column: {
    flex: 1,
    alignItems: "center",
    gap: 12,
  },
  image: {
    width: "100%",
    height: 160,
    borderRadius: 16,
  },
  button: {
    width: "100%",
    backgroundColor: "#f0e878",
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
});
