import React, {memo} from 'react';
import {StyleSheet, View} from "react-native";
import {Headline, Text} from "react-native-paper";
import BackButton from "../../components/BackButton";
import {theme} from "../../core/theme";
import BackgroundApp from "../../components/BackgroundApp";


const SettingHeader = ({ navigation, title, subtitle }) => {
  return (
    <View style={styles.headerContainer}>
      <BackButton goBack={() => navigation.goBack()} />
      <Headline style={{marginTop: "5%"}}>{title}</Headline>
      <Text>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 0,
    height: "30%",
    paddingTop: "20%",
    paddingLeft: 10,
    backgroundColor: theme.colors.primary,
  },
});

export default memo(SettingHeader);
