import React, { Component } from 'react'
import Favorities from './Favorities';
import Search from './Search';
import Account from './Account';
import Restaurants from './Restaurants';
import {NavigationContainer} from '@react-navigation/native';
//import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RestaurantsStack from './RestaurantsStack';


export default class Navigation extends Component {
  render() {
    const Tab = createBottomTabNavigator();
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Restaurants" component={Restaurants} options={{title:"Restaurantes"}} />
          <Tab.Screen name="Favorities" component={Favorities} options={{title:"Favoritos"}} />
          <Tab.Screen name="Search" component={Search} options={{title:"Buscar"}} />
          <Tab.Screen name="Account" component={Account} options={{title:"Cuenta"}}  />
        </Tab.Navigator>
      </NavigationContainer>
   
    )
  }
}