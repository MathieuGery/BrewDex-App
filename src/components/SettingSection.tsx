import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';
import {Button, Card, IconButton, Paragraph, TouchableRipple} from "react-native-paper";
import {theme} from "../core/theme";


const SettingSection = ({...props}) => {
  return (
    <Card style={styles.card} onPress={() => console.log("pressed")}>
    <TouchableRipple
      onPress={() => console.log('Pressed')}
      rippleColor={theme.colors.primary}
    >
    <Card.Content style={styles.row}>
      <IconButton
        icon={props.icon}
        color={theme.colors.grey}
        size={30}
        style={styles.button}
      />
      <Paragraph style={styles.paragraph}>{props.text}</Paragraph>
      <Button style={styles.arrow} icon="chevron-right" mode="text"> </Button>
    </Card.Content>
    </TouchableRipple>
    </Card>
  )
};

const styles = StyleSheet.create({
  row: {
    paddingTop: '2%',
    paddingBottom: '2%',
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    backgroundColor: theme.colors.primary,
    marginVertical: '-0.5%'
  },
  paragraph: {
    marginLeft: "1%"
  },
  arrow: {
    paddingLeft: "45%",
  },
  card: {
    borderRadius: 15,
    elevation: 1,
    marginHorizontal: '3%',
    marginVertical: '2%',
    paddingVertical: '2%'
  }
})

export default memo(SettingSection);
