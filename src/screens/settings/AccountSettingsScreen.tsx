import React, {memo} from 'react';
import {DevSettings, StyleSheet, View} from "react-native";
import {Card, Headline, Text} from "react-native-paper";
import BackButton from "../../components/BackButton";
import {theme} from "../../core/theme";
import BackgroundApp from "../../components/BackgroundApp";
import SettingHeader from "../../components/settings/SettingHeader";
import SettingSection from "../../components/SettingSection";


const AccountSettingsScreen = ({ navigation }) => {
  return (
    <BackgroundApp>
      <SettingHeader navigation={navigation} title={"Compte"} subtitle={"Modifer les paramètres de votre compte"}/>
      <View style={styles.cardContainer}>
        <Card style={styles.card}>
          <Card.Title title="Globale"/>
        </Card>
      </View>
    </BackgroundApp>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: "-20%",
    marginBottom: "20%",
    marginHorizontal: "5%"
  },
  card: {
    borderRadius: 20,
    elevation: 2,
  }
});

export default memo(AccountSettingsScreen);
