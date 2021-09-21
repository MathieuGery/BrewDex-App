import * as React from 'react';
import {Switch, Text} from 'react-native-paper';
import {theme} from "../core/theme";
import {StyleSheet, View} from "react-native";

const NotificationSwitch = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Activer/Desactiver les notifications</Text>
      <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color={theme.colors.primary} style={styles.switch}/>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    marginLeft: "5%"
  },
  switch: {
    flex: 2,
    marginRight: "5%"
  }
})

export default NotificationSwitch;
