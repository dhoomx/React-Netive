import { SafeAreaView, StyleSheet, View, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import ResturentItems, {
  localRestaurants,
} from "../components/home/ResturentItems";
import BottomTabs from "../components/home/BottomTabs";
//import { Divider } from "react-native-elements";

const YALP_API_KEY =
  "rtLzFj88_lftiamHubNrbOPWO1Mhxq0IPthHHbbv--eOSebVj5DtS-BJ9cuwy2dSGImLUbTa7uOCk55dKeUeil62HFR_OR2KYheejKmfv0EDIRlSnvhz71Wm34xQYnYx";

///////////////////////////// Main Function //////////////////////////////////////////////////////////////
export default function Home({ navigation }) {
  const [restaurantData, setResturantData] = useState(localRestaurants);
  const [activeTab, setActiveTab] = useState("Delivery");

  ///////////Function/////
  const getRestaurantFromyelp = () => {
    const yelpUrl =
      "https://api.yelp.com/v3/businesses/search?ierm=restaurants&location=Hollywood";

    ///CONST///
    const apiOpitions = {
      headers: {
        Authorization: `Bearer ${YALP_API_KEY}`,
      },
    };
    ////// Fetch Data from Yelp API //////
    return fetch(yelpUrl, apiOpitions)
      .then((res) => res.json())
      .then((json) =>
        setResturantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getRestaurantFromyelp();
  }, [activeTab]);
  ////////////////////////////////////////
  return (
    <SafeAreaView style={styels.page}>
      <View style={styels.header}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <ResturentItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <BottomTabs />
    </SafeAreaView>
  );
}
///////////////////////////////////////////////////// END Main Function /////////////////////////////////////////////////

///////////////////////// Some Style ////////////////////////
const styels = StyleSheet.create({
  page: {
    paddingTop: 30,
    backgroundColor: "#eee",
    flex: 1,
  },
  header: {
    backgroundColor: "#fff",
    padding: 15,
  },
});
