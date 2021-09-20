import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';
import {Card, IconButton, Paragraph} from "react-native-paper";
import {theme} from "../core/theme";

const ButtonCard = ({...props}) => (
  <Card style={styles.card}>
    <Card.Content style={styles.row}>
      <IconButton
        icon={props.icon}
        color={theme.colors.grey}
        size={30}
        style={styles.button}
        onPress={() => console.log('Pressed')}
      />
      <Paragraph style={styles.paragraph}>{props.text}</Paragraph>
    </Card.Content>
  </Card>
);

const styles = StyleSheet.create({
  card: {
    marginTop: -50,
    marginHorizontal: "5%",
    borderRadius: 20,
  },
  button: {
    backgroundColor: theme.colors.primary
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  paragraph: {
   marginLeft: "50%"
  }
})

export default memo(ButtonCard);
