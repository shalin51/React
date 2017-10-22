
import React, { Component } from 'react';
import {
  StyleSheet,
  View,Button
} from 'react-native';
import {DrawerNavigator,StackNavigator} from 'react-navigation';
import HomeScreen from './Screens/Home';
import AccountScreen from './Screens/Account';
import ReportScreen from './Screens/Report';
import HistoryScreen from './Screens/History';
import LogoutScreen from './Screens/Logout';
import  Icon  from 'react-native-vector-icons/FontAwesome'




 const AppDrawer =DrawerNavigator(
    {
      Home:{
        path:'/',
        screen:HomeScreen,
        navigationOptions: {
          title:'Home',
          drawerLabel: 'Home',
          drawerIcon: 
            <Icon name="home" size={30} color="#900" />
           
      }
    },
      Account:{
        path:'/',
        screen:AccountScreen,
        navigationOptions: {
          title:'Account',
          drawerLabel: 'Account',
          drawerIcon: () => (
            <Icon name='sc-telegram'
            type='evilicon'
            color='#517fa4' />
            )
      }
      },
      
        Report:{
          path:'/',
          screen:ReportScreen,
          navigationOptions: ({ navigation }) => ({
            title: 'Report',
            headerLeft: <Icon name='fontawesome|square' size={30}  onPress={() => navigation.navigate('DrawerOpen')} />,                                        
            drawerLabel: 'Report',
            drawerIcon: () => (
              <Icon name='' size={25} />
              )})
        },
      History:{
        path:'/',
        screen:HistoryScreen,
        navigationOptions: {
          title:'History',
          drawerLabel: 'History',
          drawerIcon: () => (
            <Icon name='' size={25} />
            )
      }
      }, 
      Logout:{
        path:'/',
        screen:LogoutScreen,
        navigationOptions: {
          title:'Logout',
          drawerLabel: 'Logout',
          drawerIcon: () => (
            <Icon name='' size={25} />
            )
      }
      }
    },{
    initialRouteName:'Home',
    drawerPosition:'left',
    drawerWidth:250,
    drawerBackgroundColor:'#FF0345'
    }
 );
 
 const AppStack=StackNavigator(
  {
    Home: {
      screen : AppDrawer,
      navigationOptions: ({ navigation }) => ({
        
      }),
  },
  Account: {
    screen : AppDrawer,
    navigationOptions: ({ navigation }) => ({
      
    }),
},
Report: {
  screen : AppDrawer,
},
History: {
  screen : AppDrawer,
  navigationOptions: ({ navigation }) => ({
    
  }),
}
}
)

export default class App extends Component{
      render(){
        return(         
              <AppStack/>         
        )
      }
};