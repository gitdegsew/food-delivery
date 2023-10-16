import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { themeColors } from '../theme'
import * as Icon from "react-native-feather";
import { featured } from '../constants';


const CartScreen = ({navigation}) => {
    const restaurant=featured.restaurants[0]

  return (
    <View className="flex-1">
        <View className="relative bg-white justify-center items-center p-4" >
            <TouchableOpacity 
                onPress={()=>navigation.goBack()}
                style={{backgroundColor:themeColors.bgColor(1)}}
                className="rounded-full justify-center items-center h-10 w-10 absolute top-4 left-3"
             >
                <Icon.ArrowLeft
            width={30}
            height={30}
            stroke="white"
            strokeWidth={2}
          />
            </TouchableOpacity>
            <Text className="text-lg font-bold" >Your cart</Text>
            <Text className="text-xs text-gray-400" >{restaurant.name} </Text>

        </View>
        <View className="flex-row px-4 justify-between items-center" style={{backgroundColor:themeColors.bgColor(0.2)}} >
            <Image source={require("../assets/images/bikeGuy.png")} className="h-20 w-20" />
            <Text className="text-gray-700" >Deliver in 20-30 minutes</Text>
            <Text className=" text-orange-600" >change</Text>
           
            
        </View>
        <View className="flex-1" >
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal:15
            }}
            className=" space-y-2 mt-2 "
        >
                {
                    restaurant.dishes.map((dish,index)=>{
                        return (
                            <View key={index}
                                className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl"
                             >
                                <Text className="font-bold" style={{color:themeColors.text}} >
                                    2 x 
                                </Text>
                                <Image source={dish.image} className="h-12 w-12 rounded-full" />
                                <Text className="flex-1 font-bold text-gray-700" >{dish.name}</Text>
                                <Text className="font-semibold text-base"> ${dish.price} </Text>
                                <TouchableOpacity
                                    className="p-1 rounded-full"
                                    style={{backgroundColor:themeColors.bgColor(1)}}
                                >
                                <Icon.Minus strokeWidth={2} width={20} stroke="white" />
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
        
            <View style={{backgroundColor:themeColors.bgColor(0.2)}} className="p-6 px-8 space-y-2 rounded-t-lg mt-2"  >
                <View className="flex-row justify-between" >
                    <Text className="text-gray-700" >Subtotal</Text>
                    <Text className="text-gray-700" >$2</Text>
                </View>
                <View className="flex-row justify-between" >
                    <Text className="text-gray-700" >Delivery Fee</Text>
                    <Text className="text-gray-700" >$2</Text>
                </View>
                <View className="flex-row justify-between" >
                    <Text className="text-gray-700" >Order Total</Text>
                    <Text className="text-gray-700" >$2</Text>
                </View>

                <View>
                <TouchableOpacity 
                onPress={()=>navigation.navigate("OrderPreparing")}
                style={{backgroundColor:themeColors.bgColor(1)}}
                className="p-3 rounded-full"
                >
                    <Text className="text-white text-center font-bold text-lg" >Place Order</Text>
                </TouchableOpacity>
            </View>
                
            </View>
           

    </View>
  )
}

export default CartScreen