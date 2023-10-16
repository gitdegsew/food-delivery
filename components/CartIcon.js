import { Text, TouchableOpacity,View } from "react-native"
import { themeColors } from "../theme"
import { useNavigation } from "@react-navigation/native"


const CartIcon = () => {
  const navigation=useNavigation()
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
                <Text>3</Text>
            </View>
            <Text className="flex-1 text-center font-extrabold text-white text-lg " > View Cart  </Text>

            <Text className="font-extrabold text-white text-lg" >
              ${23}
            </Text>
        </TouchableOpacity>
    </View>
  )
}

export default CartIcon