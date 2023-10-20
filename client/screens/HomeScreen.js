import React from "react";
import { ScrollView, StatusBar, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import Catagories from "../components/Catagories";
import FeaturedRow from "../components/FeaturedRow";
import { featured } from "../constants";

const HomeScreen = () => {
  const bgc=themeColors.bgColor(1)
  return (
    <SafeAreaView className="bg-white flex-1 ">
      <View className="flex-row  items-start  pt-2 px-4 space-x-2 mt-4 pb-2">
        <View className="flex-row flex-1 items-center h-10 rounded-full px-3 border border-gray-300">
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput placeholder="Restaurants" className="ml-2 flex-1" />
          <View className="flex-row items-center space-x-1 border-l-2  border-gray-300">
            <Icon.MapPin height="20" width="20" stroke="gray" />
            <Text className="text-gray-600">New York, NYC</Text>
          </View>
        </View>
        <View  style={{backgroundColor:themeColors.bgColor(1)}}  className={"p-3  rounded-full"}>
          <Icon.Sliders
            height="20"
            width="20"
            strokeWidth={2.5}
            stroke="white"
          />
        </View>

      </View>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
        paddingBottom:20
      }} >
        <Catagories/>
        {
          [featured, featured,featured].map((item,index)=>{
            return <FeaturedRow item={item} key={index} />
          })
        }
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
// [#fb923c] 