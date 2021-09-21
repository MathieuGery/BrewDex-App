import React, {memo} from "react";
import {Button, Card, Headline, IconButton, Paragraph, Text, Title} from "react-native-paper";
import Background from "../components/BackgroundApp";
import BeerCard from "../components/BeerCard";
import {StyleSheet, View} from "react-native";
import {theme} from "../core/theme";
import {green50} from "react-native-paper/lib/typescript/styles/colors";
import ButtonCard from "../components/ButtonCard";
import NotificationSwitch from "../components/NotificationSwitch";

const SettingsScreen = ({ AuthContext }) => {
  const { signOut } = React.useContext(AuthContext);

  return (
    <Background>
      <View style={styles.container}>
        <Headline>Paramètres</Headline>
        <Text>Vous pouvez modifier les paramètres ici</Text>
      </View>
      <View style={styles.container2}>
        <Card style={styles.cardd}>
          <Card.Title title="Globale"/>
          <NotificationSwitch/>
          <Card.Content>
            <Title>Aide/Contact</Title>
            <Paragraph>Aide contact</Paragraph>
          </Card.Content>
        </Card>
        <ButtonCard icon={"power"} text={"Déconnexion"} AuthContext={AuthContext}/>
      </View>
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
  container2: {
    flex: 1,
    marginTop: "-10%",
    flexDirection: "column",
    marginHorizontal: "5%"
  },
  cardd: {
    borderRadius: 20,
    elevation: 10,
  }
})
export default memo(SettingsScreen);
