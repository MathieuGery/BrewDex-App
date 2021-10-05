import React, {memo, useEffect} from "react";
import Background from "../components/BackgroundApp";
import {ListRenderItem, StatusBar, StyleSheet, View} from "react-native";
import {Avatar, Card, Text} from "react-native-paper";
import ProfileStats from "../components/ProfileStats";
import { Tabs } from 'react-native-collapsible-tab-view'
import BeerCardAccount from "../components/BeerCardAccount";
import authServices from "../services/Auth";

const HEADER_HEIGHT = 400

const Header = () => {
  const [userInfos, setUserInfos] = React.useState({
    name: undefined
  });

  useEffect(() => {
    (async () => {
      await authServices.getConnectedUserInfos().then((resp) => setUserInfos(resp.user));
    })();
  }, []);

  return (
    <Background>
    <Card style={styles.container} pointerEvents={'box-none'}>
      <View style={styles.container1}>
        <Avatar.Image size={100} source={{ uri: 'data:image/jpeg;base64,' + userInfos.image }} style={styles.avatar}/>
        <Text style={styles.userName}>{userInfos.name}</Text>
        <View style={{flexDirection: "row"}}>
          <Text style={{fontWeight: 'bold'}}>Lille</Text>
          <Text>, France</Text>
        </View>
        <ProfileStats stats={userInfos}/>
      </View>
      <View style={styles.description}>
        <Text style={{fontWeight: 'bold'}}>Description</Text>
        <Text>Lorem ipsum afndnfnqsnjdkfnq sueesfn</Text>
      </View>
    </Card>
    </Background>

  )
}

const AccountScreen: React.FC = () => {
  const [userInfos, setUserInfos] = React.useState({});

  useEffect(() => {
    (async () => {
      await authServices.getConnectedUserInfos().then((resp) => {setUserInfos(resp.user);  console.log(userInfos.beers)});
    })();
  }, []);

  const renderItem: ListRenderItem<number> = React.useCallback(({ index }) => {
    return (
      <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
        <BeerCardAccount comment={index}/>
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
            data={userInfos.beers}
            renderItem={({ item }) => (
              <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
                <BeerCardAccount comment={item.comment}/>
              </View>
            )}
            numColumns={2}
            keyExtractor={item => item.code}
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
    // borderColor: theme.colors.primary,
    backgroundColor: "white",
    elevation: 12,
    borderWidth: 1,
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
  header: {
    height: HEADER_HEIGHT,
    width: '100%',
    backgroundColor: '#2196f3',
  },
})

export default memo(AccountScreen);


