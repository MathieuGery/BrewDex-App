import React, {memo} from "react";
import { Card, Headline, Text } from "react-native-paper";
import Background from "../components/BackgroundApp";
import { StyleSheet, View} from "react-native";
import {theme} from "../core/theme";
import ButtonCard from "../components/ButtonCard";
import SettingSection from "../components/SettingSection";

const SettingsScreen = ({ navigation, AuthContext }) => {
  return (
    <Background>
      <View style={styles.headerContainer}>
        <Headline>Paramètres</Headline>
        <Text>Vous pouvez modifier les paramètres ici</Text>
      </View>

      <View style={styles.cardContainer}>
        <Card style={styles.card}>
          <Card.Title title="Globale"/>
          <SettingSection icon={"account-circle-outline"} text={"Compte"} navigation={navigation} goto={"AccountSettingsScreen"}/>
          <SettingSection icon={"bell-outline"} text={"Notifications"} navigation={navigation} goto={"NotificationsSettingsScreen"}/>
          <Card.Title title="Aide/Contact"/>
          <SettingSection icon={"email-outline"} text={"Contact"} navigation={navigation} goto={"AccountSettingsScreen"}/>
          <SettingSection icon={"shield-check-outline"} text={"Condition Général"} navigation={navigation} goto={"AccountSettingsScreen"}/>
          <SettingSection icon={"gift-outline"} text={"Soutenir l'application"} navigation={navigation} goto={"AccountSettingsScreen"}/>
        </Card>
        <ButtonCard icon={"power"} text={"Déconnexion"} AuthContext={AuthContext}/>
      </View>
    </Background>
  )
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 0,
    height: "30%",
    paddingTop: "20%",
    paddingLeft: 10,
    backgroundColor: theme.colors.primary,
  },
  cardContainer: {
    marginTop: "-20%",
    marginBottom: "20%",
    marginHorizontal: "5%"
  },
  card: {
    borderRadius: 20,
    elevation: 2,
  }
})
export default memo(SettingsScreen);
