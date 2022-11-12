import { ScrollView, Text, Image, View } from "react-native";
import React from "react";

//////////////////////////// Some Data ////////////////////////////
const items = [
  {
    image: require("../../assets/images/shopping-bag.png"),
    text: "pick-up",
  },
  {
    image: require("../../assets/images/soft-drink.png"),
    text: "soft-drink",
  },
  {
    image: require("../../assets/images/fast-food.png"),
    text: "fast-food",
  },
  {
    image: require("../../assets/images/fast-food.png"),
    text: "fast-food",
  },
  {
    image: require("../../assets/images/fast-food.png"),
    text: "fast-food",
  },
  {
    image: require("../../assets/images/fast-food.png"),
    text: "fast-food",
  },
];
///////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////Main Function////////////////////////////
export default function Categories() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        marginTop: 5,
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* Loop starts here */}
        {items.map((item, index) => (
          <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
            <Image
              source={item.image}
              style={{ width: 50, height: 40, resizeMode: "contain" }}
            />
            <Text style={{ fontWeight: "bold", fontSize: 13 }}>
              {item.text}
            </Text>
          </View>
        ))}
        {/* Loop ends here */}
      </ScrollView>
    </View>
  );
}
///////////////////////////////////////////////////////////////////////////////////
