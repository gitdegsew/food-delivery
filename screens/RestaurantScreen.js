import React from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import DishCard from "../components/DishCard";
import CartIcon from "../components/CartIcon";

const RestaurantScreen = ({ route, navigation }) => {
  const { restaurant } = route.params;

  return (
    <View className="flex-1">
      <StatusBar />
      <View className="relative">
        <Image source={restaurant.image} className="h-72 w-full" />

        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <Icon.ArrowLeft
            width={30}
            height={30}
            stroke={themeColors.bgColor(1)}
            className="absolute bg-white rounded-full  top-14 left-4"
          />
        </TouchableWithoutFeedback>
      </View>
      <View className="bg-gray-100 rounded-t-[42px] -mt-10 p-3 flex-1">
        <View className="px-3 pb-4 space-y-2  ">
          <Text className="text-lg  pt-2">{restaurant.name}</Text>

          <View className="flex-row items-center space-x-1">
            <Image
              source={require("../assets/images/fullStar.png")}
              className="h-4 w-4"
            />
            <Text className="text-xs">
              <Text className="text-green-700 ">{restaurant.stars}</Text>
              <Text className="text-gray-700">
                ({restaurant.reviews} reviews){" "}
                <Text className="font-semibold">{restaurant.category}</Text>
              </Text>
            </Text>

            <Icon.MapPin color="gray" width="15" height="15" />

            <Text className="text-gray-700 text-xs">
              Nearby {restaurant.address}
            </Text>
          </View>
          <Text className="text-gray-700 text-xs">
            Nearby {restaurant.address}
          </Text>
        </View>

        
          <Text className="text-lg">Menu</Text>
          <ScrollView showsVerticalScrollIndicator={false} >
            {restaurant.dishes.map((dish, index) => {
              return <DishCard key={index} dish={dish} />;
            })}
            
          </ScrollView>
          
        
          
       
      </View>
      <View className="relative mt-4 p-4" >
      <CartIcon />
      </View>
    </View>
  );
};

export default RestaurantScreen;
