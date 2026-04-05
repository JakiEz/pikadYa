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
      colors={["#f5d742", "#f7e9b3"]}
      style={{ flex: 1, }}
    >
       <Frame>
      <Text
        style={{
          fontSize: 39,
          fontWeight: "bold",
          marginTop: 70,
          textAlign: "center",
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
              backgroundColor: "#eee",
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
            <Text style={{ fontSize: 20, textAlign: "center" }}>
              {h.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      </Frame>
    </LinearGradient>
  );
}