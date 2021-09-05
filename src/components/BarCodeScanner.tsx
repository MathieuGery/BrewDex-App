import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Background from "./Background";
import authServices from "../services/Auth";
import { theme } from '../core/theme';
import { ActivityIndicator } from "react-native-paper";

export default function MyBarCodeScanner () {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [beerInfos, setBeerInfos] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBeeInfos = (data) => {
    setIsLoading(false);
    alert(`Bar code with type and data ${data.infos.product.product_name} has been scanned!`);
  };

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    setIsLoading(true);
    await authServices.getBeerInfos(
      { product_id: data},
    )
      .then((data) => handleBeeInfos(data))
      .catch((error) => console.log(error.data.description));
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <Background>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        <ActivityIndicator animating={isLoading} color={theme.colors.primary} size={'large'}/>
        {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    overflow: 'hidden',
    margin: 10,
    marginHorizontal: 30,
  },
});
