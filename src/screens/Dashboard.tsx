import React, {memo} from 'react';
import NavBar from "../components/NavBar";
import {StyleSheet} from "react-native";
import {theme} from "../core/theme";

const Dashboard = ({navigation, AuthContext}) => {
  return (
    <NavBar navigation={navigation} AuthContext={AuthContext}/>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default memo(Dashboard);
