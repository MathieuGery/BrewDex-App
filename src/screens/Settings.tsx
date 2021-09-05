import React, { memo } from 'react';
import { Navigation } from '../types';
import Button from "../components/Button";
import * as SecureStore from 'expo-secure-store';
import Background from "../components/Background";
import {Text} from "react-native-paper";
import {Route} from "react-native";

type Props = {
  navigation: Navigation;
  route?: Route;
};

export default function Settings({route, navigation}: Props) {
  const _onLoginPressed = () => {
    SecureStore.deleteItemAsync('sltoken');
    // navigation.navigate('AuthLoading');
  }

  return (
    <Background><Text>Comix le bg de oufff</Text>
      <Button mode="contained" onPress={_onLoginPressed}>
        Se connecter
      </Button>
    </Background>
  )
};
