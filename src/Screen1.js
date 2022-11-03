/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';
import React from 'react';
import { View,Text} from 'react-native';
import MapView from 'react-native-maps';  
import { Marker } from 'react-native-maps';  
import { MapViewScreen } from './src/Screens/MapView';
import { NavigationContainer } from '@react-navigation/native';
import { MyTabs } from './src/Navigation/TabNav';
import { CartCardComponent } from './src/components/NearbyCard';
import { MyStack, NearbyStack } from './src/Navigation/Stacknav';
export const Screen1=({navigation})=>{
  return(
  <View>
    <Text>Screen1</Text>
  </View>
  )
};
