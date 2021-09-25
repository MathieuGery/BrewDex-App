import React, {memo} from "react";
import Background from "../components/BackgroundApp";
import {ScrollView, StyleSheet, View} from "react-native";
import {Avatar, Text} from "react-native-paper";
import ProfileStats from "../components/ProfileStats";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import MainScreen from "./MainScreen";

function loul() {
  return (
    <ScrollView>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "white"}}>
      <Avatar.Image size={100} source={{ uri: 'https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y' }}/>
    </View>
    </ScrollView>
  );
}

function loul1() {
  return (
      <Text>Settings!</Text>
  );
}

const Tab = createMaterialTopTabNavigator();

const AccountScreen = ({ AuthContext }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Background>
        <View style={styles.container}>
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
        <Tab.Navigator style={styles.tab}>
          <Tab.Screen name="Favorites" component={MainScreen} />
          <Tab.Screen name="Collection" component={loul1} />
        </Tab.Navigator>
    </Background>
  )
};

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
  tab: {
    marginHorizontal: "2%",
    flex: 1
  }
})

export default memo(AccountScreen);
