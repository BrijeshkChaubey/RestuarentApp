import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MapViewScreen } from '../Screens/MapView';
import { NearbyScreen } from '../Screens/NearbyScreen';
import { MyTabs } from './TabNav';
import { WishListScreen } from '../Screens/WishList';
import { Screen1 } from '../Screen1';

const Stack = createStackNavigator()
const FirstScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NearbyScreen"
        component={NearbyScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="MapView"
        component={MapViewScreen}
      />
    </Stack.Navigator>
  )
}
export { FirstScreenNavigator }

const SecondScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WishlistScreen"
        component={WishListScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="MapView"
        component={MapViewScreen}
      />
    </Stack.Navigator>
  )
}
export { SecondScreenNavigator }

