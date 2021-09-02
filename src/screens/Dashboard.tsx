import React, { memo } from 'react';
import Background from '../components/Background';
import { Navigation } from '../types';
import NavBar from "../components/NavBar";
import {Text} from "react-native-paper";

type Props = {
  navigation: Navigation;
};

const Dashboard = ({ navigation }: Props) => (
    <NavBar/>
);

export default memo(Dashboard);
