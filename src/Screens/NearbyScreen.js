import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CartCardComponent } from '../components/NearbyCard';
import { Data } from '../model/FlatlistData';
import { Appbar } from 'react-native-paper';

export const NearbyScreen = ({ navigation }) => {
  var Apikey = "AIzaSyBNyC0UrPe7eA-zAYAGlmbpGWalb1ExdoM"
  const [nearbyplaces, setNearbyplaces] = useState()
  return (
    <View>
      <View style={{ backgroundColor: 'lightgray' }}>
        <Appbar.Header style={style.header}>

          <Appbar.Content title="NearbyScreen" style={{ alignSelf: 'center' }} />
          <Appbar.Action
            icon="menu"
            color="red"
            size={35}
          />
        </Appbar.Header>
      </View>

      <View style={{ paddingBottom: 110 }}>
        <FlatList
          data={Data}
          renderItem={({ item }) => (
            <CartCardComponent
              Title={item.Title}
              Image={item.image}
              Description1={item.Descriptiopn}
              Description2={item.Description2}
              id={item.id}
              nearby='nearby'
            />

          )}
        />
      </View>
    </View>
  )
}
const style = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: '1%',
    backgroundColor: '#F5F5F5',
  },
})