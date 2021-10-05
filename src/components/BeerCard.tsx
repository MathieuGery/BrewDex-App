import {Avatar, Button, Card, Paragraph, Title} from "react-native-paper";
import React from "react";
import {Image, StyleSheet} from "react-native";

const LeftContent = props => <Avatar.Image {...props} source={{uri: 'https://picsum.photos/700'}}/>
const RightContent = props => <Image {...props} style={styles.tinyLogo} source={{uri: 'https://picsum.photos/700'}}/>

export default function BeerCard() {

  return (
    <Card style={styles.card}>
      <Card.Title title="This is a good user" subtitle="Embassador" left={LeftContent} right={RightContent}
                  rightStyle={styles.rightContent}/>
      <Card.Content>
        <Title>Card title</Title>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  )
}

const styles = StyleSheet.create({
  card: {
    marginRight: 40,
    marginLeft: 20,
    marginTop: 50,
    flex: 0,
    elevation: 10,
    borderRadius: 12,
  },
  rightContent: {
    position: "absolute",
    left: '90%',
    height: -10,
    paddingBottom: 80,
  },
  tinyLogo: {
    width: 70,
    height: 70,
    borderRadius: 20
  },
})
