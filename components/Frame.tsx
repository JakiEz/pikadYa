import { View, Image } from "react-native";

export default function Frame({ children }: any) {
  return (
    <View style={{ flex: 1 }}>
      
      {/* มุม */}
      <Image
        source={require("../assets/frame/top-left.png")}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 160,
          height: 190,
        }}
      />

         <Image
          source={require("../assets/frame/top-right.png")}
          style={{
             position: "absolute",
             top: 0,
             right: 0,
             width: 160,
             height: 190,
          }}
          />
      <Image
        source={require("../assets/frame/bottom-left.png")}
        style={{
          position: "absolute",
          bottom: 0,
          left: -6,
          width: 160,
          height: 190,
        }}
      />

      <Image
        source={require("../assets/frame/bottom-right.png")}
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: 160,
          height: 190,
        }}
      />

      {/* content */}
      <View style={{ flex: 1 }}>{children}</View>
    </View>
  );
}