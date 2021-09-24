import React, {memo} from "react";
import Background from "../components/BackgroundApp";
import {StatusBar, StyleSheet, View} from "react-native";
import {Searchbar} from "react-native-paper";

const SearchScreen = ({ AuthContext }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Background>
      <View style={styles.container}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
    </Background>
  )
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight + 15,
    margin: "5%",
  }
})

export default memo(SearchScreen);
