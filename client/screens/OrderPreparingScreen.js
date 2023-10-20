import React, { useEffect } from 'react'
import { Text, View ,Image} from 'react-native'

const OrderPreparingScreen = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate("Delivery")
        },3000)
    },[])

  return (
    <View className="flex-1 bg-white justify-center items-start" >
        <Image source={require('../assets/images/delivery.gif')}  className="h-80 w-80" />
    </View>
  )
}

export default OrderPreparingScreen