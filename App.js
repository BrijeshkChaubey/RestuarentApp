/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';
import React from 'react';
import { View,} from 'react-native';
import MapView from 'react-native-maps';  
import { Marker } from 'react-native-maps';  
import { MapViewScreen } from './src/Screens/MapView';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { MyTabs } from './src/Navigation/TabNav';
import { CartCardComponent } from './src/components/NearbyCard';
import { FirstScreenNavigator, MapviewStack, MyStack, SecondScreenNavigator } from './src/Navigation/Stacknav';
import {Provider} from 'react-redux';
import { store } from './src/redux/store';
const App=()=>{
  const Tab = createMaterialBottomTabNavigator()
 
  return(
  //  <View><CartCardComponent/></View>
  <Provider store={store}>
  <NavigationContainer>
    <Tab.Navigator
           activeColor="#000080"
           inactiveColor="grey"
           barStyle={{ backgroundColor: '#D3D3D3' 
           }}
         >
           <Tab.Screen
             name="Nearby"
             component={FirstScreenNavigator}
             options={{
              tabBarIcon: () => (
                <MaterialCommunityIcons name="google-maps" size={30} />
              ),
            }} 
           />
           <Tab.Screen
             name="Wishlist"
             component={SecondScreenNavigator}
             options={{
              tabBarIcon: () => (
                <EvilIcons name="heart" size={30} />
              )
            }}
           />
           
         </Tab.Navigator>
    </NavigationContainer>
   </Provider>
  )
};
export default App;
