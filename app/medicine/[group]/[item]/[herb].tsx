//app/medicine/[group]/[item]/[herb].tsx
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, router } from "expo-router";
import { ImageBackground } from "react-native";
import { imageMap } from "@/utils/imageMap";
import { ScrollView, Text, View, TouchableOpacity, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import data from "../../../../data/medicine.json";
import Frame from "@/components/Frame";

// 1. Define the shape of your data
interface Herb {
  name: string;
  image: string;
  detail: string;
}

// 2. Define the shape of your route parameters
type HerbPageParams = {
  group: string;
  item: string;
  herb: string;
};

export default function HerbPage() {
  // 3. Use Generics for strict typing on params
  const { group, item, herb } = useLocalSearchParams<HerbPageParams>();
  const insets = useSafeAreaInsets();

  // Guard clause: Ensure params exist and are strings
  if (
    typeof group !== "string" ||
    typeof item !== "string" ||
    typeof herb !== "string"
  ) {
    return null;
  }

  // 4. Safe Data Access in TypeScript
  // We treat 'data' as a flexible Record to avoid "Element implicitly has an 'any' type" errors.
  const typedData = data as Record<string, Record<string, Herb[]>>;

  const groupData = typedData[group];

  // If group not found
  if (!groupData) return null;

  const herbs = groupData[item] || [];
  const herbData = herbs.find((h) => h.name === herb);
  const imageSource = herbData ? imageMap[herbData.image] : null;

  // 5. Handle "Not Found" state
  if (!herbData) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          paddingTop: insets.top,
          paddingHorizontal: 20,
        }}
      >
        <Text style={{ fontSize: 20, color: "red" }}>
          ไม่พบข้อมูลสมุนไพร: {herb}
        </Text>
      </View>
    );
  }

  return (
    <LinearGradient
      colors={["#FFE082","#faedb9" ,"#FFF3C4", "#FFFFFF"]}
      style={{ flex: 1 }}
    >
      <Frame>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{
            padding: 20,
            // 6. Apply safe area insets via padding
            paddingTop: insets.top + 20,
            paddingBottom: insets.bottom + 20,
          }}
        >
          <Text
            style={{
              fontSize: 38,
              fontWeight: "800",
              textAlign: "center",
              color: "#5a3e1b",
              textShadowColor: "#fff",
              textShadowOffset: { width: 3, height: 3 },
              textShadowRadius: 3,
            }}
          >
            {item}
          </Text>
          {/* Image placeholder */}

          <Image
            source={imageSource || require("@/assets/images/")}
            style={{
              width: 350,
              height: 350,
              borderRadius: 20,
              marginTop: 20,
              alignSelf: "center",
            }}
            resizeMode="cover"
          />
          <LinearGradient
            colors={["#FFE0B2", "#FFE0B2"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              marginTop: 25,
              borderRadius: 30,
              padding: 22,

              shadowColor: "#000",
              shadowOpacity: 0.1,
              shadowRadius: 15,
              shadowOffset: { width: 0, height: 10 },
              elevation: 6,
            }}
          >
            <Text style={{ fontSize: 22, color: "#333" }}>
              <Text style={{ fontWeight: "900", color: "#5a3e1b" }}>
              🌿ชื่อ:{" "}
              </Text>
              {herbData.name}
            </Text>
            <Text
              style={{
                marginTop: 10,
                fontSize: 22,
                lineHeight: 28,
                color: "#333",
              }}
            >
              <Text style={{ fontWeight: "bold", color: "#5a3e1b" }}>
              🌿สรรพคุณ:
              </Text>{" "}
              {herbData.detail || "ยังไม่มีรายละเอียด"}
            </Text>
          </LinearGradient>
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
