import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export interface Cookie {
  name: string;
  img: string;
  price: number;
}
interface CookiesItemProps {
  cookie1: Cookie;
}

const cookiesItem = ({ cookie1 }: CookiesItemProps) => {
  return (
    <View
      style={{
        flex: 0,
        flexDirection: "row",
        gap: 50,
      }}
    >
      <View
        style={{
          flex: 0,
          alignItems: "center",
        }}
      >
        <Image
          source={{
            uri: cookie1.img,
          }}
          style={{
            width: 130,
            height: 130,
            borderRadius: 20,
            borderWidth: 1,
          }}
        />
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderRadius: 10,
            width: 130,
            height: 50,
            marginTop: 5,
            marginBottom: 20,
          }}
        >
          <Text style={{ marginBottom: 5 }}>{cookie1.name}</Text>
          <Text>Price: {cookie1.price}KD</Text>
        </TouchableOpacity>
      </View>
      {/* <View
        style={{
          flex: 0,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image
          source={{
            uri: cookie1.img,
          }}
          style={{ width: 130, height: 130, borderRadius: 20, borderWidth: 1 }}
        />
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderRadius: 10,
            width: 130,
            height: 50,
            marginTop: 5,
            marginBottom: 20,
          }}
        >
          <Text style={{ marginBottom: 5 }}>{cookie1.name}</Text>
          <Text>Price: {cookie1.price}KD</Text>
        </View>
      </View> */}
    </View>
  );
};

export default cookiesItem;
