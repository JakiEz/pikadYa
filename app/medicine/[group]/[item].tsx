import Frame from "@/components/Frame";
import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native"; // 👈 เพิ่ม
import data from "../../../data/medicine.json";
import summary from "../../../data/medicine_summary.json";

export default function ItemDetail() {
  const { group, item } = useLocalSearchParams();

  if (typeof group !== "string" || typeof item !== "string") return null;

  const groupData = data[group as keyof typeof data];
  if (!groupData) return null;

  const herbs: { name: string }[] =
    groupData[item as keyof typeof groupData] || [];

  const typedSummary = summary as Record<string, Record<string, { สรรพคุณรวม: string; หลักการจำ: string }>>;
  const itemSummary = typedSummary[group]?.[item];

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
          <View
          key={i}
          style={{
            borderRadius: 15,
            elevation: 6,
            width: "90%",
            alignSelf: "center",
            marginTop: 15,
          }}
        >
          {/* 🔥 กรอบ */}
          <LinearGradient
            colors={["#5a3e1b", "#5a3e1b"]}
            style={{
              borderRadius: 15,
              padding: 3,
            }}
          >
            <TouchableOpacity
              onPress={() =>
                router.push(
                  `/medicine/${group}/${item}/${encodeURIComponent(h.name)}`
                )
              }
              activeOpacity={0.8}
            >
              {/* 🔥 พื้นปุ่ม */}
              <LinearGradient
                colors={["#e3b57b", "#e3b57b"]}
                style={{
                  borderRadius: 12,
                  padding: 15,
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "#5a3e1b",
                  }}
                >
                  {h.name}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </LinearGradient>
        </View>
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
        {itemSummary && (
          <View style={{ marginBottom: "30%", backgroundColor: "#f5e6c8", padding: 20, borderRadius: 30, margin: 20, borderColor: "#3b2410", borderWidth: 3 }}>
            <Text style={{ color: "#3b2410", fontSize: 24, fontWeight: "bold", marginBottom: 6 }}>
              สรรพคุณรวม
            </Text>
            <Text style={{ color: "#3b2410", fontSize: 18, marginBottom: 12 }}>
              {itemSummary.สรรพคุณรวม}
            </Text>
            <Text style={{ color: "#3b2410", fontSize: 24, fontWeight: "bold", marginBottom: 6 }}>
              หลักการจำ
            </Text>
            <Text style={{ color: "#3b2410", fontSize: 17 }}>
              {itemSummary.หลักการจำ}
            </Text>
          </View>
        )}
      </Frame>
    </LinearGradient>
  );
}