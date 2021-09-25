import React, {memo} from "react";
import { StyleSheet, View} from "react-native";
import {Card, Paragraph, Text, Title} from "react-native-paper";
import {theme} from "../core/theme";

const ProfileStats = () => {
  return (
    <View style={[styles.container, {
      flexDirection: "row"
    }]}>
      <Card style={styles.cards}>
        <Card.Content style={styles.cardContent}>
          <Title style={{color: theme.colors.primary, fontWeight: "bold"}}>100</Title>
          <Paragraph>Scans</Paragraph>
        </Card.Content>
      </Card>
      <Card style={styles.cards}>
        <Card.Content style={styles.cardContent}>
          <Title style={{color: theme.colors.primary, fontWeight: "bold"}}>34</Title>
          <Paragraph>Favorites</Paragraph>
        </Card.Content>
      </Card>
      <Card style={styles.cards}>
        <Card.Content style={styles.cardContent}>
          <Title style={{color: theme.colors.primary, fontWeight: "bold"}}>10</Title>
          <Paragraph>Followers</Paragraph>
        </Card.Content>
      </Card>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
  },
  cards: {
    marginHorizontal: "4%",
    marginBottom: "5%",
    marginTop: "5%",
    elevation: 5,
    borderRadius: 20,
  },
  cardContent: {
    height: 90,
    width: 100,
    marginTop: 0,
    marginBottom: 0,
  }
})

export default memo(ProfileStats);
