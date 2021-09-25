import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';
import {Button, Card, IconButton, Paragraph, TouchableRipple} from "react-native-paper";
import {theme} from "../core/theme";


const SettingSection = ({...props}) => {
  return (
    <TouchableRipple
      onPress={() => console.log('Pressed')}
      rippleColor={"white"}
      style={styles.touchableRipple}
    >
    <Card onPress={() => console.log("pressed")} style={{borderRadius: 12}}>
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
    </TouchableRipple>
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
    paddingVertical: '2%'
  }
})

export default memo(SettingSection);
