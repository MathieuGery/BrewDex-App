import React, {memo} from 'react';
import {ImageBackground, StyleSheet,} from 'react-native';

type Props = {
  children: React.ReactNode;
};

const BackgroundApp = ({children}: Props) => (
  <ImageBackground
    source={require('../assets/background_dot.png')}
    resizeMode="repeat"
    style={styles.background}
  >
    {children}
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
  },
});

export default memo(BackgroundApp);
