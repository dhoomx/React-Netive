import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";
import firebase from "../../firebase";

export default function ViewCart({ navigation }) {
  ///
  const [modalVisible, setModalVisible] = useState(false);
  ///
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
  /////Firebase Function////
  const addOrderToFireBase = () => {
    const db = firebase.firestore();
    db.collection("ord").add({
      items: items,
      restaurantName: restaurantName,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setModalVisible(false);
    navigation.navigate("OrderCompleted");
  };

  console.log(totalUSD);

  ////MODAL FUNCTION////
  const checkoutModalContent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
            {items.map((item, index) => (
              <OrderItem key={index} item={item} />
            ))}
            <View style={styles.subTotalContainer}>
              <Text style={styles.subTotalText}>Sub Total</Text>
              <Text style={styles.subTotalPrice}>{totalUSD}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity
                style={{
                  marginTop: 20,
                  backgroundColor: "#000",
                  alignItems: "center",
                  padding: 13,
                  borderRadius: 30,
                  width: "75%",
                  position: "relative",
                }}
                onPress={() => {
                  addOrderToFireBase();
                }}
              >
                <Text style={{ color: "#fff", fontSize: 20 }}>Checkout</Text>
                <Text
                  style={{
                    color: "#fff",
                    position: "absolute",
                    right: 20,
                    fontSize: 15,
                    top: 17,
                  }}
                >
                  {" "}
                  {total ? totalUSD : ""}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };

  return (
    <>
      <Modal
        animationType="sold"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        {checkoutModalContent()}
      </Modal>
      {total ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            position: "absolute",
            bottom: 50,
            zIndex: 999,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: "#000",
                flexDirection: "row",
                justifyContent: "flex-end",
                padding: 13,
                borderRadius: 30,
                width: 300,
                position: "relative",
              }}
              onPress={() => setModalVisible(true)}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 20,
                  fontWeight: "bold",
                  marginRight: 30,
                }}
              >
                السلة
              </Text>
              <Text style={{ color: "#fff", fontSize: 20 }}> {totalUSD}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}

////////////////////style/////////////
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  modalCheckoutContainer: {
    backgroundColor: "white",
    padding: 16,
    height: 500,
    borderWidth: 1,
  },
  restaurantName: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 18,
    marginBottom: 10,
  },
  subTotalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  subTotalText: {
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 10,
  },
});
