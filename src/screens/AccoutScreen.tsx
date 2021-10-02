import React, {memo} from "react";
import Background from "../components/BackgroundApp";
import {ListRenderItem, StatusBar, StyleSheet, View} from "react-native";
import {Avatar, Text} from "react-native-paper";
import ProfileStats from "../components/ProfileStats";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import MainScreen from "./MainScreen";

import { Tabs } from 'react-native-collapsible-tab-view'
import {theme} from "../core/theme";
import BeerCardAccount from "../components/BeerCardAccount";

const HEADER_HEIGHT = 400

const Header = () => {
  return (
    <View style={styles.container} pointerEvents={'box-none'}>
      <View style={styles.container1}>
        <Avatar.Image size={100} source={{ uri: 'https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y' }} style={styles.avatar}/>
        <Text style={styles.userName}>Jhone Doe</Text>
        <View style={{flexDirection: "row"}}>
          <Text style={{fontWeight: 'bold'}}>Lille</Text>
          <Text>, France</Text>
        </View>
        <ProfileStats/>
      </View>
      <View style={styles.description}>
        <Text style={{fontWeight: 'bold'}}>Description</Text>
        <Text>Lorem ipsum afndnfnqsnjdkfnq sueesfn</Text>
      </View>
    </View>

  )
}

const AccountScreen: React.FC = () => {
  const renderItem: ListRenderItem<number> = React.useCallback(({ index }) => {
    return (
      <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
        <BeerCardAccount/>
      </View>
    )
  }, [])

  return (
    <Background>
      <Tabs.Container
        renderHeader={Header}
        headerHeight={HEADER_HEIGHT}
        revealHeaderOnScroll={false}
        minHeaderHeight={20}
      >
        <Tabs.Tab name="Favorites">
          <Tabs.FlatList
            data={[0, 1, 2, 3, 4]}
            renderItem={renderItem}
            numColumns={2}
            keyExtractor={(v) => v + ''}
            style={{marginBottom: "25%"}}
          />
        </Tabs.Tab>
        <Tabs.Tab name="Collection">
          <Tabs.FlatList
            data={[0, 1, 2, 3, 4]}
            renderItem={renderItem}
            keyExtractor={(v) => v + ''}
            numColumns={2}
            style={{marginBottom: "25%"}}
          />
        </Tabs.Tab>
      </Tabs.Container>
    </Background>
  )
};

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: theme.colors.primary,
    borderWidth: 1,
    borderBottomColor: "white",
    backgroundColor: "white",
    marginTop: "30%",
    marginBottom: 0,
    margin: "2%",
  },
  container1: {
    alignItems: "center"
  },
  avatar: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: "-15%"
  },
  userName: {
    fontSize: 30,
    fontWeight: "bold"
  },
  description: {
    marginHorizontal: "4%",
    alignItems: "flex-start"
  },

  box: {
    height: 250,
    width: '100%',
  },
  boxA: {
    backgroundColor: 'white',
  },
  boxB: {
    backgroundColor: '#D8D8D8',
  },
  header: {
    height: HEADER_HEIGHT,
    width: '100%',
    backgroundColor: '#2196f3',
  },
})

export default memo(AccountScreen);
