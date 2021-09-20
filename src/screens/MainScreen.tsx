import React, {memo} from "react";
import BackgroundApp from "../components/BackgroundApp";
import BeerCard from "../components/BeerCard";
import {FlatList, RefreshControl, SafeAreaView, StatusBar} from "react-native";
import {StyleSheet} from "react-native";


const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Fir2st Item',
  },
  {
    id: 'dd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Fir2st Item',
  },
  {
    id: 'ed7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Fir2st Item',
  },
  {
    id: 'ed7aaea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Fir3st Item',
  },
]

const MainScreen = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false))
  }, []);

  return (
    <BackgroundApp>
    <SafeAreaView style={styles.container}>
      <FlatList data={DATA} renderItem={BeerCard} keyExtractor={item => item.id} bounces={true} alwaysBounceVertical={true} horizontal={false} refreshControl={<RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
      />}/>
    </SafeAreaView>
    </BackgroundApp>

  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    marginBottom: 50,
  },
})
export default memo(MainScreen)
