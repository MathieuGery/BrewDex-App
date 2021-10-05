import React, {memo} from 'react';
import {StyleSheet, View} from "react-native";
import {Card, IconButton, Paragraph} from "react-native-paper";
import {theme} from "../../core/theme";

const SettingsSubSection = ({...props}) => {
  return (
    <Card style={styles.card}>
      <Card.Content style={styles.row}>
        <IconButton
          icon={props.icon}
          color={theme.colors.grey}
          size={20}
          style={styles.icon}
        />
        <Paragraph style={styles.paragraph}>{props.text}</Paragraph>
        <View style={styles.rightContent}>{props.rightContent}</View>
      </Card.Content>
    </Card>
  )
}

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
  rightContent: {
    position: "absolute",
    alignItems: "center",
    width: "200%",
    transform: [{scaleX: 1}, {scaleY: 1}]
  },
  card: {
    marginHorizontal: '3%',
    marginVertical: '2%',
    borderRadius: 12
  }
});

export default memo(SettingsSubSection);
