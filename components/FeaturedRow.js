import React from 'react'
import { ScrollView, Text,View } from 'react-native'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({item}) => {
  return (
    <View className="flex-1 bg-gray-100">

    
    <View className="flex-row justify-between items-center mt-4 px-4" >
        <View>
            <Text className=" text-xl font-medium" >
                {item.title}
            </Text>
            <Text className="text-sm text-gray-600" >{item.description}</Text>
        </View>
        <Text className="text-orange-300" >See All</Text>
    </View>

    <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={
            {
                paddingHorizontal:15
            }
        }
        >
    {
        item.restaurants.map((restaurant,index)=>{
            return <RestaurantCard restaurant={restaurant} key={index} />

        })
    }
    </ScrollView>

    

    </View>
  )
}

export default FeaturedRow