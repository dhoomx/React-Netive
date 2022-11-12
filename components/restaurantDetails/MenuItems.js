import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";
import { Divider } from "@rneui/themed";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";

/////////////////////////////Main Function/////////////////////////////
export default function MenuItems({
  restaurantName,
  items,
  hideCheckbox,
  marginLeft,
}) {
  //Select Item Function//
  const dispatch = useDispatch();

  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });

  /////////Handle Cart //////////
  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );
  const isItemInCart = (prod, cartItems) =>
    Boolean(cartItems.find((item) => item.title === prod.title));
  //////////////////////

  return (
    <SafeAreaView style={styels.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {items.map((prod, index) => (
          <View key={index}>
            <View style={styles.menuItemsStyle}>
              {hideCheckbox ? (
                <></>
              ) : (
                <BouncyCheckbox
                  iconStyle={{
                    borderColor: "lightgray",
                    borderRadius: 0,
                  }}
                  fillColor="blue"
                  isChecked={isItemInCart(prod, cartItems)}
                  onPress={(checkboxValue) => selectItem(prod, checkboxValue)}
                />
              )}
              <ItemInfo prod={prod} />
              <ItemImg prod={prod} marginLeft={marginLeft ? marginLeft : 0} />
            </View>
            <Divider
              width={0.5}
              orientation="vertical"
              style={{ marginHorizontal: 20 }}
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
/////////////////////////////////////////////////////////////////////

const styels = StyleSheet.create({
  page: {
    paddingTop: 1,
    backgroundColor: "#eee",
    flex: 1,
  },
});

///////////////Component/////////////
const ItemInfo = (props) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={styles.itemTitle}>{props.prod.title}</Text>
    <Text style={{ textAlign: "right", marginRight: 1 }}>
      {props.prod.description}
    </Text>
    <Text style={{ textAlign: "right", marginRight: 1 }}>
      {props.prod.price}
    </Text>
  </View>
);

//////////component/////////////
const ItemImg = ({ marginLeft, ...props }) => (
  <View>
    <Image
      source={{ uri: props.prod.image }}
      style={{
        width: 100,
        height: 100,
        borderRadius: 8,
        marginLeft: marginLeft,
      }}
    />
  </View>
);
////////////////////////////////

/////////////Styles//////////////
const styles = StyleSheet.create({
  menuItemsStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "right",
    marginRight: 1,
  },
});
