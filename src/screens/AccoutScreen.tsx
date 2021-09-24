import React, {memo} from "react";
import Background from "../components/BackgroundApp";
import {ScrollView, StatusBar, StyleSheet, View} from "react-native";
import {Avatar, Card, Searchbar} from "react-native-paper";
import ProfileStats from "../components/ProfileStats";

const AccountScreen = ({ AuthContext }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Background>
      <ScrollView>
        <View style={styles.container}>
          <Avatar.Image size={100} source={{ uri: 'https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y' }} style={styles.avatar}/>
          <ProfileStats/>
        </View>
      </ScrollView>
    </Background>
  )
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "white",
    marginTop: "30%",
    margin: "2%",
  },
  avatar: {
    marginTop: "-15%"
  }
})

export default memo(AccountScreen);
