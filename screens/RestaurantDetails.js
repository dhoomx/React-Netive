import { View } from "react-native";
import React from "react";
import { Divider } from "@rneui/themed";

import About from "../components/restaurantDetails/About";
import MenuItems from "../components/restaurantDetails/MenuItems";
import ViewCart from "../components/restaurantDetails/ViewCart";

// ///////////////////////////////// Some Data ///////////////////////////////////
const items = [
  {
    title: "ديور سوفاج  .",
    description: "مستوحى من عطر: ديور سوفاج مزيج حار ومتوهج .",
    price: "SAR20",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx_9oWsCe93NUUbQFWCltkxhA0nISkha3gAQ&usqp=CAU",
  },
  {
    title: "Benihana",
    description: "مستوحى من عطر: ديور سوفاج مزيج حار ومتوهج .",
    price: "SAR20",
    image:
      "https://cdn.salla.sa/bZEQj/T0HK9YOgmYHZHO37Bs9uo9PCj0FQfKQ8C7dLXno4.jpg",
  },
  {
    title: "India's Grill",
    description: "مستوحى من عطر: ديور سوفاج مزيج حار ومتوهج .",
    price: "SAR20",
    image:
      "https://cdn.salla.sa/bZEQj/T0HK9YOgmYHZHO37Bs9uo9PCj0FQfKQ8C7dLXno4.jpg",
  },
  {
    title: "India's Grill",
    description: "مستوحى من عطر: ديور سوفاج مزيج حار ومتوهج .",
    price: "SAR20",
    image:
      "https://cdn.salla.sa/bZEQj/T0HK9YOgmYHZHO37Bs9uo9PCj0FQfKQ8C7dLXno4.jpg",
  },
  {
    title: "India's Grill",
    description: "مستوحى من عطر: ديور سوفاج مزيج حار ومتوهج .",
    price: "SAR20",
    image:
      "https://cdn.salla.sa/bZEQj/T0HK9YOgmYHZHO37Bs9uo9PCj0FQfKQ8C7dLXno4.jpg",
  },
  {
    title: "India's Grill",
    description: "مستوحى من عطر: ديور سوفاج مزيج حار ومتوهج .",
    price: "SAR20",
    image:
      "https://cdn.salla.sa/bZEQj/T0HK9YOgmYHZHO37Bs9uo9PCj0FQfKQ8C7dLXno4.jpg",
  },
  {
    title: "India's Grill",
    description: "مستوحى من عطر: ديور سوفاج مزيج حار ومتوهج .",
    price: "SAR20",
    image:
      "https://cdn.salla.sa/bZEQj/T0HK9YOgmYHZHO37Bs9uo9PCj0FQfKQ8C7dLXno4.jpg",
  },
  {
    title: "India's Grill",
    description: "مستوحى من عطر: ديور سوفاج مزيج حار ومتوهج .",
    price: "SAR20",
    image:
      "https://cdn.salla.sa/bZEQj/T0HK9YOgmYHZHO37Bs9uo9PCj0FQfKQ8C7dLXno4.jpg",
  },
  {
    title: "India's Grill",
    description: "مستوحى من عطر: ديور سوفاج مزيج حار ومتوهج .",
    price: "SAR20",
    image:
      "https://cdn.salla.sa/bZEQj/T0HK9YOgmYHZHO37Bs9uo9PCj0FQfKQ8C7dLXno4.jpg",
  },
  {
    title: "India's Grill",
    description: "مستوحى من عطر: ديور سوفاج مزيج حار ومتوهج .",
    price: "SAR20",
    image:
      "https://cdn.salla.sa/bZEQj/T0HK9YOgmYHZHO37Bs9uo9PCj0FQfKQ8C7dLXno4.jpg",
  },
];
/////////////////////////////////////////////////////////////////////////////////////

/////////////////////Main Function////////////////////////////////////////////////////
export default function RestaurantDetails({ route, navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 5 }} />
      <MenuItems restaurantName={route.params.name} items={items} />
      <ViewCart navigation={navigation} />
    </View>
  );
}
