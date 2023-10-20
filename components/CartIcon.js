import { Text, TouchableOpacity,View } from "react-native"
import { themeColors } from "../theme"
import { useNavigation } from "@react-navigation/native"
import { useSelector } from "react-redux"
import { selectCartItemById, selectCartItems, selectTotalPrice } from "../slices/cartSlice"


const CartIcon = () => {
  const navigation=useNavigation()
  const cartItems=useSelector(selectCartItems)
  const totalPrice=useSelector(selectTotalPrice)
  
  if(!cartItems.length) return;
  return (
    <View className="absolute bottom-5 mx-4 w-full z-50 flex-row justify-between items-center">
        <TouchableOpacity
        onPress={()=>navigation.navigate("Cart")}
        style={{
            backgroundColor:themeColors.bgColor(1)
        }}
        className="flex-row jus items-center   p-4 py-3 shadow rounded-2xl"
        >
            <View className="p-2 px-4 rounded-full bg-[#ffb481]" >
                <Text>{cartItems.length}</Text>
            </View>
            <Text className="flex-1 text-center font-extrabold text-white text-lg " > View Cart  </Text>

            <Text className="font-extrabold text-white text-lg" >
              ${totalPrice}
            </Text>
        </TouchableOpacity>
    </View>
  )
}

export default CartIcon