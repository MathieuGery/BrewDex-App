import React, {memo} from 'react';
import {StyleSheet} from 'react-native';
import {Card, IconButton, Paragraph} from "react-native-paper";
import {theme} from "../core/theme";


const ButtonCard = ({...props}) => {
  const {signOut} = React.useContext(props.AuthContext);

  return (
    <Card style={styles.card}>
      <Card.Content style={styles.row}>
        <IconButton
          icon={props.icon}
          color={theme.colors.error}
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
    marginBottom: "10%",
    elevation: 2,
    borderRadius: 20,
  },
  button: {
    backgroundColor: theme.colors.grey,
    marginVertical: '-0.5%'
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  paragraph: {
    marginLeft: "1%",
    color: theme.colors.error
  }
})

export default memo(ButtonCard);
