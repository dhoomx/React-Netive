import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

///////////////////////// Main Function  /////////////////////////
export default function HeaderTabs(props) {
  // const [activeTab, setActiveTap] = useState("Delivery");
  return (
    <View
      style={{
        flexDirection: "row",
        alignSelf: "center",
      }}
    >
      <HeaderButton
        text="أطفال"
        btnColor="black"
        textColor="white"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
      <HeaderButton
        text="رجالي"
        btnColor="white"
        textColor="black"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
      <HeaderButton
        text="Delivery"
        btnColor="black"
        textColor="white"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        btnColor="black"
        textColor="white"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
    </View>
  );
}
//////////////////////////////////////////////////////////

//////////////////////////// FUNCTION //////////////////////////////////
const HeaderButton = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activeTab == props.text ? "black" : "white",
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}
    onPress={() => props.setActiveTab(props.text)}
  >
    <Text
      style={{
        color: props.activeTab == props.text ? "white" : "black",
        fontSize: 15,
        fontWeight: "bold",
      }}
    >
      {props.text}
    </Text>
  </TouchableOpacity>
);

///////////////////////// Some Style ////////////////////////
// const styels = (propss) =>
//   StyleSheet.create({
//     btn: {
//       flexDirection: "row",
//       alignSelf: "center",
//     },
//     touch: {
//       backgroundColor: propss.btnColor,
//       paddingVertical: 6,
//       paddingHorizontal: 16,
//       borderRadius: 30,
//     },
//     touText: {
//       color: propss.textColor,
//       fontSize: 15,
//       fontWeight: "900",
//     },
//   });
