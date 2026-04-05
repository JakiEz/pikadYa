//medicine/[group]/index.tsx
import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";
import { Text, TouchableOpacity,ScrollView } from "react-native";
import data from "../../../data/medicine.json";
import Frame from "@/components/Frame";
// import pic from "@assets/";

export default function GroupPage() {
  const { group } = useLocalSearchParams();
  const categories = Object.keys(data[group as keyof typeof data]);
  
  return (
    <LinearGradient  colors={["#FFE082", "#faedb9", "#FFF3C4", "#FFFFFF"]} style={{ flex: 1 }}>
      <Frame>
      <Text style={{ fontSize: 60, fontWeight: "900", textAlign: "center", marginTop: 90}}>
        {group}
      </Text>
      <ScrollView style={{ marginTop: 30, borderRadius: 20 }}>
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={{
              padding: 15,
              backgroundImage: "",
              backgroundColor: "#ddd",
              marginTop: 1,
              borderRadius: 20,
              marginVertical: 15,
              width: "90%",        // 👈 ลดความกว้าง
              alignSelf: "center", // 👈 จัดให้อยู่กลาง
            }}
            onPress={() => router.push(`/medicine/${group}/${cat}` as any)} // Use type assertion
          >
            <Text style={{ textAlign: "center", fontSize: 20 }}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      </Frame>
    </LinearGradient>
  );
}
