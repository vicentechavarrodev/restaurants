import React, { Component } from 'react'
import Restaurants from './Restaurants'
import { createStackNavigator } from '@react-navigation/stack';

export default class RestaurantsStack extends Component {

    
  render() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="RestaurantsStack" component={Restaurants} options={{title:"Restaurantes"}} />
        </Stack.Navigator>
    )
  }
}