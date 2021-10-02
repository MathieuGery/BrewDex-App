import {Avatar, Badge, Button, Card, Paragraph, Text, Title} from "react-native-paper";
import React, {memo} from "react";
import {Image, StyleSheet} from "react-native";

export default function BeerCardAccount() {

  return (
    <Card style={styles.card} onPress={() => console.log("C'est préssé")}>
      <Card.Content style={{paddingBottom: 5}}>
        <Image style={styles.image} source={{uri: 'https://picsum.photos/700'}}/>
        <Title>toto</Title>
        <Paragraph>comentaires</Paragraph>
        <Paragraph style={{textAlign: "right", fontWeight: "100"}}>10/20/2021</Paragraph>
      </Card.Content>
    </Card>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: "2%",
    borderRadius: 12,
    width: 180
  },
  rightContent: {
    position: "absolute",
    left: '90%',
    height: -10,
    paddingBottom: 80,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 20
  },
})
