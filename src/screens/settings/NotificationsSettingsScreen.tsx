import React, {memo, useEffect} from 'react';
import {StyleSheet, View} from "react-native";
import BackgroundApp from "../../components/BackgroundApp";
import SettingHeader from "../../components/settings/SettingHeader";
import {Button, Card, IconButton, Paragraph, Switch} from "react-native-paper";
import SettingSection from "../../components/SettingSection";
import SettingsSubSection from "../../components/settings/SettingsSubSection";
import {theme} from "../../core/theme";
import authServices from "../../services/Auth";




const NotificationsSettingsScreen = ({ navigation }) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(Boolean);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const _updateInfos = async () => {
    setIsSwitchOn(!isSwitchOn);
    console.log(!isSwitchOn)
    await authServices.editUserInfos({'notifications': !isSwitchOn}).then((resp) => {console.log(resp.user.notifications)});
  };

  useEffect(() => {
    (async () => {
      await authServices.getConnectedUserInfos().then((resp) => setIsSwitchOn(resp.user.notifications));
    })();
  }, []);

  return (
    <BackgroundApp>
      <SettingHeader navigation={navigation} title={"Notifications"} subtitle={"Modifer les paramètres de notifications"}/>
      <View style={styles.cardContainer}>
        <Card style={styles.card}>
          <Card.Title title="Notifications"/>
          <SettingsSubSection
            icon={"bell-outline"}
            text={"Activer/Désactiver"}
            rightContent={<Switch value={isSwitchOn} onValueChange={_updateInfos} color={theme.colors.primary}/>}/>
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
