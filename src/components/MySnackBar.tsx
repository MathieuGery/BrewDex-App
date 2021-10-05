import * as React from 'react';
import {Snackbar} from 'react-native-paper';
import {theme} from "../core/theme";

const MySnackBar = (props) => {
  const onDismissSnackBar = () => props.setIsVisible(false);

  return (
    <Snackbar
      visible={props.isVisible}
      onDismiss={onDismissSnackBar}
      action={{
        label: 'Fermer',
        color: theme.colors.primary,
        onPress: () => {
          props.setIsVisible(false);
        },
      }}>
      {props.message}
    </Snackbar>
  );
};

export default MySnackBar;
