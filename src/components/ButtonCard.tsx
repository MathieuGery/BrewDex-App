import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';
import {Card, IconButton, Paragraph} from "react-native-paper";
import {theme} from "../core/theme";


const ButtonCard = ({...props}) => {
  const {signOut} = React.useContext(props.AuthContext);
  return (
    <Card style={styles.card}>
      <Card.Content style={styles.row}>
        <IconButton
          icon={props.icon}
          color={theme.colors.grey}
          size={30}
          style={styles.button}
          onPress={signOut}
        />
        <Paragraph style={styles.paragraph}>{props.text}</Paragraph>
      </Card.Content>
    </Card>
  )
};

const styles = StyleSheet.create({
  card: {
    marginTop: "10%",
    elevation: 10,
    borderRadius: 20,
  },
  button: {
    backgroundColor: theme.colors.primary,
    marginVertical: '-0.5%'
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
