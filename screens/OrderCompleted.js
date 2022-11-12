import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import MenuItems from "../components/restaurantDetails/MenuItems";
import firebase from "../firebase";

export default function OrderCompleted() {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: "ديور سوفاج  .",
        description: "مستوحى من عطر: ديور سوفاج مزيج حار ومتوهج .",
        price: "SAR20",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx_9oWsCe93NUUbQFWCltkxhA0nISkha3gAQ&usqp=CAU",
      },
    ],
  });
  ////
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );
  const total = items
    .map((item) => Number(item.price.replace("SAR", "")))
    .reduce((prev, curnt) => prev + curnt, 0);
  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "SAR",
  });
  /////////
  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db
      .collection("ord")
      .orderBy("createdAt", "desc")
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          setLastOrder(doc.data());
        });
      });
    return () => unsubscribe();
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Green checkmark */}
      <View
        style={{
          margin: 15,
          alignItems: "center",
          height: "100%",
        }}
      >
        <LottieView
          style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
          source={require("../assets/animations/check-mark.json")}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          your order at {restaurantName} has been placed for {totalUSD}
        </Text>
        {/* Menu items */}
        <ScrollView>
          {<MenuItems items={lastOrder.items} hideCheckbox={true} />}

          {/* cooking Animations */}
          <LottieView
            style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
            source={require("../assets/animations/cooking.json")}
            autoPlay
            speed={0.5}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
