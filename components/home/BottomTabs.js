import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

//////////////////////////Main Function/////////////////////////////
export default function BottomTabs() {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        justifyContent: "space-between",
        marginHorizontal: 30,
      }}
    >
      <Icon icon="home" text="الرئيسية" />
      <Icon icon="search" text="بحث" />
      <Icon icon="shopping-bag" text="السلة" />
      <Icon icon="user" text="الحساب" />
    </View>
  );
}
//////////////////////////////////////////////////////////////////

//////////////Component//////////////////
const Icon = (props) => (
  <TouchableOpacity>
    <View>
      <FontAwesome5
        name={props.icon}
        size={20}
        style={{
          marginBottom: 3,
          alignSelf: "center",
          color: "#06113C",
        }}
      />
      <Text>{props.text}</Text>
    </View>
  </TouchableOpacity>
);
