import React, {memo} from "react";
import Background from "../components/BackgroundApp";
import {ScrollView, StatusBar, StyleSheet, View} from "react-native";
import {Avatar, Divider, Text} from "react-native-paper";
import ProfileStats from "../components/ProfileStats";
import Header from "../components/Header";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {theme} from "../core/theme";

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
            <Text>Description</Text>
          </View>
          <Text>Lorem ipsum afndnfnqsnjdkfnq suefuqsefu qsuefnsdfdjksf sjkfesefs ifes sfnfdsksfkesf esjnfskfdskjfsne fkjdskjf skjfensjf esfn</Text>
        </View>
        <Tab.Navigator style={styles.tab}>
          <Tab.Screen name="Favorites" component={loul} />
          <Tab.Screen name="Collection" component={loul1} />
        </Tab.Navigator>
    </Background>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "white",
    marginTop: "30%",
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
    alignItems: "flex-start"
  },
  tab: {
    flex: 1
  }
})

export default memo(AccountScreen);
