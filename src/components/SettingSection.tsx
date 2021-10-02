import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';
import {Button, Card, IconButton, Paragraph, TouchableRipple} from "react-native-paper";
import {theme} from "../core/theme";


const SettingSection = ({...props}) => {
  return (
    <Card onPress={() => props.navigation.navigate(props.goto)} style={styles.touchableRipple}>
    <Card.Content style={styles.row}>
      <IconButton
        icon={props.icon}
        color={theme.colors.grey}
        size={20}
        style={styles.icon}
      />
      <Paragraph style={styles.paragraph}>{props.text}</Paragraph>
      <Button style={styles.arrow} icon="chevron-right" mode="text"> </Button>
    </Card.Content>
    </Card>
  )
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    backgroundColor: theme.colors.primary,
    marginVertical: '-0.5%'
  },
  paragraph: {
    marginLeft: "1%"
  },
  arrow: {
    position: "absolute",
    alignItems: "center",
    width: "210%",
  },
  touchableRipple: {
    marginHorizontal: '3%',
    marginVertical: '2%',
    borderRadius: 12
  }
})

export default memo(SettingSection);
