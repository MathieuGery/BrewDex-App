import React, {memo, useEffect} from "react";
import * as SecureStore from "expo-secure-store";
import {theme} from "../core/theme";
import {ActivityIndicator} from "react-native-paper";
import {Navigation} from "../types";

type Props = {
  navigation: Navigation;
};

const AuthLoading = ({ navigation }: Props) => {
  // @ts-ignore
  useEffect(() => {
    (async () => {
      const userToken = await SecureStore.getItemAsync('sltoken');
      navigation.navigate(userToken ? 'App': 'Auth');
    })();
  }, []);

  return (
    <ActivityIndicator animating={true} color={theme.colors.primary} />
   );
};

export default memo(AuthLoading);
