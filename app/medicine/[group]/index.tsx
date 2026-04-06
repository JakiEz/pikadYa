//medicine/[group]/index.tsx
import Frame from "@/components/Frame";
import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import data from "../../../data/medicine.json";
// import pic from "@assets/";

export default function GroupPage() {
  const { group } = useLocalSearchParams();
  const categories = Object.keys(data[group as keyof typeof data]);
  
  return (
    <LinearGradient  colors={["#FFE082", "#faedb9", "#FFF3C4", "#FFFFFF"]} style={{ flex: 1 }}>
      <Frame>
      <Text  style={{
              fontSize: 50,
              fontWeight: "800",
              textAlign: "center",
              marginTop:  70,
              color: "#5a3e1b",
              textShadowColor: "#fff",
              textShadowOffset: { width: 3, height: 3 },
              textShadowRadius: 3,
            }}>
        {group}
      </Text>
      <ScrollView style={{ marginTop: 30, borderRadius: 20 }}>
      {categories.map((cat) => (
  <View
    key={cat}
    style={{
      borderRadius: 15,
      elevation: 6,
      width: "90%",
      alignSelf: "center",
      marginVertical: 12,
    }}
  >
    {/* 🔥 กรอบสีน้ำตาล */}
    <LinearGradient
      colors={["#5a3e1b", "#5a3e1b"]}
      style={{
        borderRadius: 15,
        padding: 3,
      }}
    >
      <TouchableOpacity
        onPress={() => router.push(`/medicine/${group}/${cat}` as any)}
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
              textAlign: "center",
              fontSize: 20,
              fontWeight: "bold",
              color: "#5a3e1b",
            }}
          >
            {cat}
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
      </Frame>
    </LinearGradient>
  );
}
