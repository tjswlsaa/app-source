import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from 'react-native-vector-icons/Ionicons';
import {Button} from 'react-native';

import MyPage from "../pages/MyPagePages/MyPage";
import MyBook from "../pages/MyPagePages/MyBook";
import MyArticle from "../pages/MyPagePages/MyArticle";
import setting from "../pages/MyPagePages/setting";
import Impressed from "../pages/ImpressedPages/Impressed";
import subBook from "../pages/ImpressedPages/subBook";
import readBook from "../pages/ImpressedPages/readBook";
import readArticle from "../pages/ImpressedPages/readArticle";
import likedArticle from "../pages/ImpressedPages/likedArticle";
import recentArticle from "../pages/ImpressedPages/recentArticle";
import Main from "../pages/MainPages/Main";
import PopularBook from "../pages/MainPages/PopularBook";
import PopularArticle from "../pages/MainPages/PopularArticle";
import NewArticle from "../pages/MainPages/NewArticle";
import MakeNewBook from "../pages/MyPagePages/MakeNewBook";
import NewPage from "../pages/MyPagePages/NewPage";






const TabStack = createBottomTabNavigator();
const MainStack = createStackNavigator();
const HomeStack = createStackNavigator();
const ImpressedStack = createStackNavigator();


const MainStackScreen = () => {
    return (
      <MainStack.Navigator>
        <MainStack.Screen
          name="Main"
          component={Main}
          options={{
            title: "모든 이별록",
          }}
        />
        <MainStack.Screen name="NewArticle" component={NewArticle} />
        <MainStack.Screen name="PopularArticle" component={PopularArticle} />
        <MainStack.Screen name="PopularBook" component={PopularBook} />
        <HomeStack.Screen name="readArticle" component={readArticle} />
        <HomeStack.Screen name="readBook" component={readBook} />




  
      </MainStack.Navigator>
    );
  };



const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="MyPage"
        component={MyPage}
        options={{
          title: "나의 이별록",
        }}
      />
      <HomeStack.Screen name="MyBook" component={MyBook} />
      <HomeStack.Screen name="MyArticle" component={MyArticle} />
      <HomeStack.Screen name="setting" component={setting} />
      <HomeStack.Screen name="MakeNewBook" component={MakeNewBook} />
      <HomeStack.Screen 
         options={{
          title: "이별록 지필",
          headerRight: ()=> (
            <Button
            onPress={()=> saveChapter() }
              title="저장하기"
              color="#fff"
            />)}
          
        }
      
      
      name="NewPage" component={NewPage} />



    </HomeStack.Navigator>
  );
};
const ImpressedStackScreen = () => {
    return (
      <ImpressedStack.Navigator>
        <ImpressedStack.Screen
          name="Impressed"
          component={Impressed}
          options={{ title: "감명록" }}
          
        />
      <HomeStack.Screen name="subBook" component={subBook} />
      <HomeStack.Screen name="readBook" component={readBook} />
      <HomeStack.Screen name="readArticle" component={readArticle} />
      <HomeStack.Screen name="likedArticle" component={likedArticle} />
      <HomeStack.Screen name="recentArticle" component={recentArticle} />



      </ImpressedStack.Navigator>
    );
  };



const TabStackScreen = () => {
  return (
    <TabStack.Navigator

         tabBarOptions={{
        showLabel: false}}
        screenOptions={
          ({route})=> ({
      


              tabBarIcon: ({focused,color,size})=> {
                  let iconName;
                  if(route.name==="메인"){
                      iconName="book";}
                      else if (route.name=="나의 이별록"){
                       iconName="person-outline";}
                    else if (route.name=="감명록"){
                        iconName="ios-heart-outline";}

                        return <Icon name={iconName} size={size}  color={color}/>;}
              })
          }
    >
      <TabStack.Screen name="메인" component={MainStackScreen} />
      <TabStack.Screen name="나의 이별록" component={HomeStackScreen} />
      <TabStack.Screen name="감명록" component={ImpressedStackScreen} />

    </TabStack.Navigator>
  );
};



export default TabStackScreen;