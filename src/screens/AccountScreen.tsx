import React, {memo} from "react";
import {Button} from "react-native-paper";

const Account = ({ AuthContext }) => {
  const { signOut } = React.useContext(AuthContext);

  return (
    <Button mode="contained" onPress={() => signOut()}>
      Se Deco
    </Button>
  )
};

export default memo(Account);
