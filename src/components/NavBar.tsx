import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import {StyleSheet, View} from "react-native";
import Background from "./Background";
import { theme } from '../core/theme';
import MyBarCodeScanner from "./BarCodeScanner";

const MusicRoute = () => <Background><Text>Comix le bg</Text></Background>;
const AlbumsRoute = () => <Text>Albums</Text>;

type RoutesState = Array<{
  key: string;
  title: string;
  icon: string;
  color?: string;
  badge?: boolean;
  getAccessibilityLabel?: string;
  getTestID?: string;
}>;
type Route = { route: { key: string } };

const MyNavBar = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState<RoutesState>([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'camera', title: 'Camera', icon: 'camera' },
    { key: 'compte', title: 'Compte', icon: 'account-circle-outline' },
  ]);

  return (
    <BottomNavigation
      barStyle={styles.barStyle}
      navigationState={{ index, routes }}
      onIndexChange={index => setIndex(index)}
      renderScene={BottomNavigation.SceneMap({
        home: MusicRoute,
        camera: MyBarCodeScanner,
        compte: MusicRoute,
      })}
      inactiveColor={theme.colors.primary}
      activeColor={theme.colors.primary}
      sceneAnimationEnabled={false}
    />

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
