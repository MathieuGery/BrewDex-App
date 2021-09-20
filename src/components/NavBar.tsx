import * as React from 'react';
import {StyleSheet, View} from "react-native";
import {theme} from "../core/theme";
import MyBarCodeScanner from "./BarCodeScanner";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SettingsScreen from "../screens/SettingsScreen";
import MainScreen from "../screens/MainScreen";

const Tab = createMaterialBottomTabNavigator();

const MyNavBar = ({AuthContext}) => {
  return (
    <Tab.Navigator
      barStyle={styles.barStyle}
      inactiveColor={theme.colors.secondary}
      activeColor={theme.colors.primary}>
      <Tab.Screen name="Home" component={MainScreen} options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home-circle-outline" color={color} size={26} />
        ),
      }}/>
      <Tab.Screen name="Camera" component={MyBarCodeScanner} options={{
        tabBarLabel: 'Camera',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="camera" color={color} size={26} />
        ),
      }}/>
      <Tab.Screen name="AccountScreen" options={{
        tabBarLabel: 'AccountScreen',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account-circle-outline" color={color} size={26} />
        ),
      }}>
        {props => <SettingsScreen {...props} AuthContext={AuthContext} />}
      </Tab.Screen>
    </Tab.Navigator>

  );
};

const styles = StyleSheet.create({
  barStyle: {
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius:10,
    backgroundColor:"white",
    position: 'absolute',
    overflow:'hidden',
    left: 0,
    bottom: 0,
    right: 0,
    padding:0,
    elevation: 10,
  },
});

export default MyNavBar;
