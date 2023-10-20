import { Image, Text, TouchableOpacity, View } from "react-native"
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import { useDispatch, useSelector } from "react-redux";
import { addTocart, removeFromCart, selectCartItemById} from "../slices/cartSlice";


const DishCard = ({dish}) => {

    const totalItems=useSelector(state=>selectCartItemById(state,dish.id))

    const dispatch=useDispatch()
    const handleIncrease=()=>{
        dispatch(addTocart(dish))
    }

    const handleDecrease=()=>{
        dispatch(removeFromCart({id:dish.id}))
    }


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
        <TouchableOpacity 
        disabled={!totalItems.length}
        onPress={handleDecrease} >
        <Icon.Minus height={20} width={20} stroke="white" className={`rounded-full`}  style={{backgroundColor:themeColors.bgColor(1)}}/>
        </TouchableOpacity>
        <Text> {totalItems.length} </Text>
        <TouchableOpacity onPress={handleIncrease} >
        <Icon.Plus height={20} width={20} stroke="white" className={`rounded-full`}  style={{backgroundColor:themeColors.bgColor(1)}} />
        </TouchableOpacity>
    </View>
    
   </View>
  )
}

export default DishCard