import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, Text,TouchableWithoutFeedback,View } from 'react-native'
import * as Icon from "react-native-feather";


const RestaurantCard = ({restaurant}) => {
    const navigation=useNavigation()
   
  return (
    <TouchableWithoutFeedback
        onPress={()=>navigation.navigate("Restaurant",{restaurant})}
        >
        <View className="mr-6 bg-white rounded-3xl shadow-lg  mt-4" >
            <Image className="h-36 w-64 rounded-t-3xl" source={restaurant.image} />
            <View className="px-3 pb-4 space-y-2" >
                <Text  className="text-lg  pt-2" >{restaurant.name}</Text>
                <View className="flex-row items-center space-x-1" >
                    <Image source={require("../assets/images/fullStar.png")} className="h-4 w-4" />
                    <Text className="text-xs">
                        <Text className="text-green-700 " >{restaurant.stars}</Text>
                        <Text className="text-gray-700">
                            ({restaurant.reviews} reviews) <Text className="font-semibold" >{restaurant.category}</Text>
                        </Text>
                    </Text>
                </View>

                <View className="flex-row items-center space-x-1" >
                    <Icon.MapPin color="gray" width="15" height="15" />
                    
                        <Text className="text-gray-700 text-xs" >Nearby {restaurant.address}</Text>
                        
                   
                </View>

            </View>
        </View>
    </TouchableWithoutFeedback>
   
  )
}

export default RestaurantCard