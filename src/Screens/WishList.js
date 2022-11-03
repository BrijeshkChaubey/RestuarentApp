import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CartCardComponent } from '../components/NearbyCard';
import { useSelector, useDispatch } from 'react-redux';
import { Appbar } from 'react-native-paper';
import { removefromwishlistAction } from '../redux/action/action';


export const WishListScreen = () => {
  const selector = useSelector(state => state);
  console.log('selectorin Wishlist', selector);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('UseEffect');
  }, [selector.cardata])
  const data = selector.cardata
  return (

    <View>
      <View style={{ backgroundColor: 'lightgray' }}>
        <Appbar.Header style={style.header}>
          <Appbar.Content title="WishListScreen" style={{ alignSelf: 'center' }} />
          <Appbar.Action
            icon="delete"
            color="red"
            size={35}
            onPress={() => {
              dispatch(removefromwishlistAction(data))
            }}
          />
        </Appbar.Header>
      </View>
      <View>
        <FlatList
          data={selector.cardata}
          renderItem={({ item }) => (
            <CartCardComponent
              Title={item.title}
              Image={item.image}
              Description1={item.discription1}
              Description2={item.discription2}
              id={item.id}

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