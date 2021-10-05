import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';
import authServices from "../services/Auth";
import {theme} from '../core/theme';
import {ActivityIndicator} from "react-native-paper";

export default function MyBarCodeScanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [beerInfos, setBeerInfos] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const {status} = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBeeInfos = (data) => {
    setIsLoading(false);
    alert(`Bar code with type and data ${data.infos.product.product_name} has been scanned!`);
  };

  const handleBarCodeScanned = async ({type, data}) => {
    setScanned(true);
    setIsLoading(true);
    await authServices.getBeerInfos(
      {product_id: data},
    )
      .then((data) => handleBeeInfos(data))
      .catch((error) => {
        setIsLoading(false);
        alert(`Bar code with type and data ${error.data} has been scanned!`)
      });
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <ActivityIndicator animating={isLoading} color={theme.colors.primary} size={'large'}/>
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    overflow: 'hidden',
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
  },
  button: {
    flex: 1
  }
});
