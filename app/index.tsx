import CookiesItem from "@/components/CookiesItem";
import lcookies from "@/data/cookies";
import rcookies from "@/data/rcookies";
import { LinearGradient } from "expo-linear-gradient";
import { Image, ScrollView, Text, View } from "react-native";

export default function Index() {
  return (
    <LinearGradient
      colors={["#ffffff", "#e45d70"]}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 22,
          fontWeight: "bold",
          marginBottom: 20,
          marginTop: 20,
        }}
      >
        UR Cookies
      </Text>
      <Text style={{ marginBottom: 10 }}>YES, IT'S UR COOKIES</Text>

      <Image
        source={{ uri: "https://248am.com/images/2024/12/urcookies1.jpg" }}
        style={{
          width: 170,
          height: 170,
          borderRadius: 20,
          marginBottom: 30,
          borderWidth: 1,
        }}
      />
      <ScrollView>
        <View style={{ flexDirection: "row", gap: 40 }}>
          <View style={{ flexDirection: "column" }}>
            {lcookies.map((cookie) => {
              return <CookiesItem cookie1={cookie} />;
            })}
          </View>
          <View style={{ flexDirection: "column" }}>
            {rcookies.map((cookie) => {
              return <CookiesItem cookie1={cookie} />;
            })}
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
