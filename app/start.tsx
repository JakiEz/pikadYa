//app/start.tsx
import Frame from "@/components/Frame";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Startpage() {
  const groups = [
    "พิกัดยา 5",
    "พิกัดยา 7",
    "พิกัดยา 9",
    "พิกัดยา 10",
    "พิกัดยาพิเศษ",
  ];
  const groups = [
    "พิกัดยา 5",
    "พิกัดยา 7",
    "พิกัดยา 9",
    "พิกัดยา 10",
    "พิกัดยาพิเศษ",
  ];

  return (
    <LinearGradient colors={["#FFE082", "#faedb9", "#FFF3C4", "#FFFFFF"]} style={styles.container}>
      <Frame>
        <Text style={styles.title}>พิกัดยา</Text>

        {groups.map((g) => (
          <TouchableOpacity
            key={g}
            style={styles.button}
            onPress={() => router.push(`/medicine/${g}` as any)} // Use type assertion
          >
            <Text style={styles.text}>{g}</Text>
          </TouchableOpacity>
        ))}
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
    fontSize: 64,
    fontWeight: "800",
    marginBottom: 20,
    color: "#5a3e1b",
    marginTop: 80,
    textShadowColor: "#fff",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 3,
    textAlign: "center",
  },
  button: {
    padding: 15,
    backgroundColor: "#e3b57b",
    alignSelf: "center",
    borderRadius: 15,
    marginBottom: 10,
    width: "90%",
    marginVertical: 15,
  },
  text: { fontSize: 20, textAlign: "center",fontWeight: "bold", color: "#5a3e1b"  },
});
