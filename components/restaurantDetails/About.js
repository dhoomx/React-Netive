import { View, Image, Text } from "react-native";
import React from "react";

/////////////////some data///////////////
// const yelpRestaurantInfo = {
//   name: "Farmhouse kit",
//   image:
//     "https://cdn.salla.sa/bZEQj/T0HK9YOgmYHZHO37Bs9uo9PCj0FQfKQ8C7dLXno4.jpg",
//   price: "$$",
//   review: "1599",
//   rating: "4.9",
//   categories: [
//     { title: "American" },
//     { title: "newamerican" },
//     { title: "Coffee" },
//   ],
// };

///////////data//////////////
// const image =
//   "https://cdn.salla.sa/bZEQj/T0HK9YOgmYHZHO37Bs9uo9PCj0FQfKQ8C7dLXno4.jpg";
// const title = " ديور سوفاج Dior";
// const description = "مستوحى من عطر: ديور سوفاج مزيج حار ومتوهج .";

//////////////////////////Main Function/////////////////////////////
export default function About(props) {
  ///Destructuring/////
  const { name, image, price, reviews, rating, categories } =
    props.route.params;

  /////
  const formattedCategories = categories
    .map((category) => category.title)
    .join(" . ");

  ///1//
  const description = `${formattedCategories} ${price ? " . " + price : ""}  ${
    rating ? " . " + rating : ""
  }`;

  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}
///////////////////////////////////////////////////////////////////////

//////////////Component//////////////////
const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 200 }} />
);
////////////////////////////////////////

///////////////Component////////////////
const RestaurantName = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "bold",
      margin: 5,
      marginHorizontal: 15,
    }}
  >
    {props.name}
  </Text>
);
////////////////////////////////////////

///////////////Component////////////////
const RestaurantDescription = (props) => (
  <Text
    style={{
      fontSize: 18,
      margin: 5,
      marginHorizontal: 15,
    }}
  >
    {props.description}
  </Text>
);
////////////////////////////////////////
