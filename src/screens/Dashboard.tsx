import React, { memo } from 'react';
import { Navigation } from '../types';
import NavBar from "../components/NavBar";
import Button from "../components/Button";

import * as SecureStore from 'expo-secure-store';
type Props = {
  navigation: Navigation;
};

const Dashboard = ({ navigation }: Props) => {
  return (
    <NavBar/>
  )
};

export default memo(Dashboard);
