import React, {memo} from "react";
import {Button} from "react-native-paper";
import Background from "../components/BackgroundAuth";
import BeerCard from "../components/BeerCard";

const Account = ({ AuthContext }) => {
  const { signOut } = React.useContext(AuthContext);

  return (
    <Background>
      <Button mode="contained" onPress={() => signOut()}>
        Se Deco
      </Button>
    </Background>
  )
};

export default memo(Account);
