import { Image, Text, View } from "react-native"
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";


const DishCard = ({dish}) => {
    
  return (
   <View className="flex-row bg-white rounded-xl items-center justify-between mt-3 py-3" >
    <View className="flex-row space-x-2" >
        <Image source={dish.image} className="h-20 w-20 rounded-xl" />
        <View>
            <Text>{dish.name}</Text>
            <Text className="text-xs text-gray-500" >{dish.description}</Text>
            <Text>${dish.price}</Text>
        </View>
    </View>
    <View className="flex-row space-x-2" >
        <Icon.Minus height={20} width={20} stroke="white" className={`rounded-full`}  style={{backgroundColor:themeColors.bgColor(1)}}/>
        <Text>2</Text>
        <Icon.Plus height={20} width={20} stroke="white" className={`rounded-full`}  style={{backgroundColor:themeColors.bgColor(1)}} />
    </View>
    
   </View>
  )
}

export default DishCard