import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Card, Title } from 'react-native-paper';
import { Rating } from 'react-native-ratings';
import { Dimensions, PixelRatio } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from "react-redux";
import { addtowhishlistAction, removefromwishlistAction } from '../redux/action/action';
const { width, height } = Dimensions.get('window');
const wp = number => {
  let givenWidth = typeof number === 'number' ? number : parseFloat(number);
  PixelRatio.roundToNearestPixel((width * givenWidth) / 100);
};
const hp = number => {
  let givenHeight = typeof number === 'number' ? number : parseFloat(number);
  PixelRatio.roundToNearestPixel((height * givenHeight) / 100);
};


export const CartCardComponent = ({ ...props }) => {
  const data = { image: props.Image, title: props.Title, discription1: props.Description1, discription2: props.Description2, id: props.id }
  // console.log('ID===>', data.id);
  // const id = props.id;
  const navigation = useNavigation();
  const [favorite, setFavorite] = useState(false)
  const selector = useSelector(state => state);
  // console.log('ID===>', selector.cardata[0].title);

  const Changecolor = (id) => {
    console.log("come inside if");
    if (selector.id === id) {
      setFavorite(favorite)
    } else {
      setFavorite(!favorite)

    }
  }
  const dispatch = useDispatch();
  return (
    <View style={{ height: 200, width: wp('100%'), marginVertical: wp('4%'), justifyContent: 'center', alignSelf: 'center', backgroundColor: 'white' }} >
      <Card style={CardStyl.card}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}>
          <TouchableOpacity>
            <Card.Cover
              source={props.Image}
              style={CardStyl.imageView}
            />
          </TouchableOpacity>
          <Card.Content>
            <Title style={CardStyl.title}>{props.Title}</Title>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <View>
                <Text>Rating</Text>
                <View style={CardStyl.rating}>
                  <Rating
                    type="star"
                    ratingCount={5}
                    imageSize={20}
                    fractions={2}
                    startingValue={4}
                    onFinishRating={5}
                    readonly={true}
                  />
                </View>
                <Text>5.1 M</Text>
              </View>
              <View style={{ marginLeft: 100 }}>
                <TouchableOpacity onPress={() => navigation.navigate("MapView")}>
                  <FontAwesome5 name="directions" size={30} color='blue' />
                </TouchableOpacity>

                <View style={{ marginTop: 30 }}>
                  {
                    props.nearby === 'nearby' ?
                      (
                        <TouchableOpacity onPress={() => { dispatch(addtowhishlistAction(data)); Changecolor(data.id) }}>
                          <FontAwesome name="heart" size={30} color={favorite ? 'pink' : 'red'}
                          />
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity onPress={() => { dispatch(removefromwishlistAction(data.id)); Changecolor(data.id) }}>
                          <FontAwesome name="heart" size={30} color={favorite ? 'pink' : 'red'}
                          />
                        </TouchableOpacity>
                      )
                  }
                </View>
              </View>
            </View>
          </Card.Content>
        </View>
        <View>
          <Text>{props.Description1}</Text>
          <Text>{props.Description2}</Text>
          <TouchableOpacity onPress={() => navigation.navigate("MapView")}>
            <Text style={{ color: 'blue' }}>Open now</Text>
          </TouchableOpacity>

        </View>
      </Card>
    </View>
  );
};

const CardStyl = StyleSheet.create({
  card: {
    paddingLeft: 20,
    backgroundColor: 'white',
    height: hp('28%'),
    borderRadius: wp('8%'),
    width: 400,
    marginVertical: 30,
  },

  imageView: {
    width: 100, height: 100, borderRadius: 200 / 2
  },
  title: {
    marginTop: hp('4%'),
    marginBottom: hp('1%'),
  },
  rating: {
    marginTop: hp('2%'),
    alignSelf: 'flex-start',
    marginLeft: wp('3%'),
  },
  ratingTxt: {
    color: 'gray',
  },
  star: {
    color: '#FF8C00'
  }
});