import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";
import { Text, TouchableOpacity, ScrollView } from "react-native"; // 👈 เพิ่ม
import data from "../../../data/medicine.json";
import Frame from "@/components/Frame";

export default function ItemDetail() {
  const { group, item } = useLocalSearchParams();

  if (typeof group !== "string" || typeof item !== "string") return null;

  const groupData = data[group as keyof typeof data];
  if (!groupData) return null;

  const herbs: { name: string }[] =
    groupData[item as keyof typeof groupData] || [];

  return (
    <LinearGradient
      colors={["#FFE082", "#faedb9", "#FFF3C4", "#FFFFFF"]}
      style={{ flex: 1, }}
    >
       <Frame>
      <Text
       style={{
        fontSize: 38,
        fontWeight: "800",
        textAlign: "center",
        marginTop:  80,
        color: "#5a3e1b",
        textShadowColor: "#fff",
        textShadowOffset: { width: 3, height: 3 },
        textShadowRadius: 3,
      }}
      >
        {item}
      </Text>

      {/* 👇 ใส่ ScrollView ตรงนี้ */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {herbs.map((h, i) => (
          <TouchableOpacity
            key={i}
            style={{
              padding: 15,
              backgroundColor: "#e3b57b",
              marginTop: 15,
              borderRadius: 15,
              width: "90%",        // 👈 ลดความกว้าง
              alignSelf: "center", // 👈 จัดให้อยู่กลาง
            }}
            onPress={() =>
              router.push(
                `/medicine/${group}/${item}/${encodeURIComponent(h.name)}`
              )
            }
          >
            <Text style={{ fontSize: 20, textAlign: "center",fontWeight: "bold", color: "#5a3e1b" }}>
              {h.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
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