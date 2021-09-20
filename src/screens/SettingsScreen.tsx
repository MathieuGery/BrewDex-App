import React, {memo} from "react";
import {Button, Card, Headline, IconButton, Paragraph, Text, Title} from "react-native-paper";
import Background from "../components/BackgroundApp";
import BeerCard from "../components/BeerCard";
import {StyleSheet, View} from "react-native";
import {theme} from "../core/theme";
import {green50} from "react-native-paper/lib/typescript/styles/colors";
import ButtonCard from "../components/ButtonCard";

const SettingsScreen = ({ AuthContext }) => {
  const { signOut } = React.useContext(AuthContext);

  return (
    <Background>
      <View style={styles.container}>
        <Headline>Paramètres</Headline>
        <Text>Vous pouvez modifier les paramètres ici</Text>
      </View>
      
      <ButtonCard icon={"power"} text={"Déconnexion"}/>
    </Background>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    height: "30%",
    paddingTop: "20%",
    paddingLeft: 10,
    backgroundColor: theme.colors.primary,
  },
})
export default memo(SettingsScreen);
