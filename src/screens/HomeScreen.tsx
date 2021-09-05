import React, {memo, useEffect} from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import { Navigation } from '../types';
import * as SecureStore from 'expo-secure-store';
import Auth from "../services/Auth";

type Props = {
  navigation: Navigation;
};

const HomeScreen = ({ navigation }: Props) => {
  // @ts-ignore
  useEffect(() => {
    (async () => {
      const userToken = await SecureStore.getItemAsync('sltoken');
      navigation.navigate(userToken ? 'App': 'Auth');
    })();
  }, []);

  return (
    <Background>
      <Logo/>
      <Header>Brewdex</Header>

      <Paragraph>
        Se souvenir des bieres !
      </Paragraph>
      <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
        Se connecter
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Créer un compte
      </Button>
    </Background>);
};

export default memo(HomeScreen);
