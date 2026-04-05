//app/medicine/[group]/[item]/[herb].tsx
import Frame from "@/components/Frame";
import { imageMap } from "@/utils/imageMap";
import { nameMap } from "@/utils/nameMap";
import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import data from "../../../../data/medicine.json";

// 1. Define the shape of your data
interface Herb {
  name: string;
  image: string | string[];
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
  const images = Array.isArray(herbData.image)
    ? herbData.image
    : [herbData.image];

  return (
    <LinearGradient
      colors={["#FFE082", "#faedb9", "#FFF3C4", "#FFFFFF"]}
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
          <View
            style={{
              borderRadius: 30,

              // 🔥 Shadow ตัวจริง
              shadowColor: "#000",
              shadowOpacity: 0.1,
              shadowRadius: 15,
              shadowOffset: { width: 0, height: 10 },

              elevation: 8, // Android
            }}
          >
            {images.length > 1 ? (
              <View style={{ alignItems: "center" }}>
                {/* 🔥 แถวบน (2 รูปแรก) */}
                <View
                  style={{ flexDirection: "row", justifyContent: "center" }}
                >
                  {images.slice(0, 2).map((img, index) => (
                    <View
                      key={index}
                      style={{ alignItems: "center", margin: 5 }}
                    >
                      <Image
                        source={imageMap[img]}
                        style={{
                          width: 160,
                          height: 160,
                          borderRadius: 15,
                        }}
                      />
                      <Text  style={{
              fontSize: 17,
              fontWeight: "800",
              textAlign: "center",
              color: "#5a3e1b",
              textShadowColor: "#fff",
              textShadowOffset: { width: 1, height: 1 },
              textShadowRadius: 3,
            }}>
                        {nameMap[img] || img}
                      </Text>
                    </View>
                  ))}
                </View>

                {/* 🔥 แถวล่าง (รูปที่ 3) */}
                {images[2] && (
                  <View style={{ alignItems: "center", marginTop: 10 }}>
                    <Image
                      source={imageMap[images[2]]}
                      style={{
                        width: 200,
                        height: 200,
                        borderRadius: 15,
                      }}
                    />
                 <Text  style={{
              fontSize: 17,
              fontWeight: "800",
              textAlign: "center",
              color: "#5a3e1b",
              textShadowColor: "#fff",
              textShadowOffset: { width: 1, height: 1 },
              textShadowRadius: 3,
            }}>
                      {nameMap[images[2]] || images[2]}ื
                    </Text>
                  </View>
                )}
              </View>
            ) : (
              // 🔥 กรณีมีรูปเดียว (fallback)
              <Image
                source={imageMap[images[0]]}
                style={{
                  width: 350,
                  height: 350,
                  borderRadius: 20,
                  marginTop: 20,
                  alignSelf: "center",
                }}
              />
            )}
          </View>
          <View
            style={{
              borderRadius: 32,
              shadowColor: "#000",
              shadowOpacity: 0.5,
              shadowRadius: 15,
              shadowOffset: { width: 0, height: 10 },
              elevation: 8,
            }}
          >
            {/* 🔥 กรอบ */}
            <LinearGradient
              colors={["#FFB74D", "#FFD54F", "#FFE082"]}
              style={{
                borderRadius: 32,
                padding: 3, // ความหนากรอบ
                marginTop: 25,
              }}
            >
              {/* 🔥 ตัวกล่องจริง */}
              <LinearGradient
                colors={["#FFE0B2", "#FFF3E0"]}
                style={{
                  borderRadius: 28,
                  padding: 22,
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
            </LinearGradient>
          </View>
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
