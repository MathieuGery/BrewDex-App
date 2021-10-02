import React, {memo} from 'react';
import {StyleSheet, View} from "react-native";
import BackgroundApp from "../../components/BackgroundApp";
import SettingHeader from "../../components/settings/SettingHeader";
import {Button, Card, IconButton, Paragraph, Switch} from "react-native-paper";
import SettingSection from "../../components/SettingSection";
import SettingsSubSection from "../../components/settings/SettingsSubSection";
import {theme} from "../../core/theme";




const NotificationsSettingsScreen = ({ navigation }) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <BackgroundApp>
      <SettingHeader navigation={navigation} title={"Notifications"} subtitle={"Modifer les paramètres de notifications"}/>
      <View style={styles.cardContainer}>
        <Card style={styles.card}>
          <Card.Title title="Notifications"/>
          <SettingsSubSection
            icon={"bell-outline"}
            text={"Activer/Désactiver"}
            rightContent={<Switch value={isSwitchOn} onValueChange={onToggleSwitch} color={theme.colors.primary}/>}/>
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
  },
});

export default memo(NotificationsSettingsScreen);
