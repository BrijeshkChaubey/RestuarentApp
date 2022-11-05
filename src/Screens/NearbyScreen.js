import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CartCardComponent } from '../components/NearbyCard';
import { Data } from '../model/FlatlistData';
import { Appbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export const NearbyScreen = ({ navigation }) => {
  var Apikey = "AIzaSyBNyC0UrPe7eA-zAYAGlmbpGWalb1ExdoM"
  const [nearbyplaces, setNearbyplaces] = useState()
  return (
    <SafeAreaView>
      <View>
        <View style={{ backgroundColor: 'lightgray' }}>
          <Appbar.Header style={style.header}>

            <Appbar.Content title="NearbyScreen" style={{ alignSelf: 'center' }} />
            <Image source={require('../assets/bannerr/menu.png')} style={{ height: 30, width: 30 }} />
          </Appbar.Header>
        </View>

        <View style={{ paddingBottom: 170 }}>
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
    </SafeAreaView>

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