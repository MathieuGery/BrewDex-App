import * as React from 'react';
import { Snackbar } from 'react-native-paper';

const MySnackBar = (props) => {
  const onDismissSnackBar = () => props.setIsVisible(false);

  return (
      <Snackbar
  visible={props.isVisible}
  onDismiss={onDismissSnackBar}
  action={{
    label: 'Fermer',
      onPress: () => {
      props.setIsVisible(false);
    },
  }}>
        {props.message}
  </Snackbar>
);
};

export default MySnackBar;
