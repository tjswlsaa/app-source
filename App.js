import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
{/*import { createStackNavigator } from '@react-navigation/stack';*/}
import { StatusBar } from 'expo-status-bar';
{/*import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';*/}

import TabStackScreen from "./navigation/TabStackScreen";

{/*import BottomTabNavigator from "./navigation/TabNavigator";}*/}





 {/*function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}*/}

 {/*const Tab = createBottomTabNavigator();}*/}
{/*const Stack = createStackNavigator();*/}


export default function App () {

  return(

    <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
        <TabStackScreen />
      </SafeAreaView>
  
    </NavigationContainer> 
  );}


