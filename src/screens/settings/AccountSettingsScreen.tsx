import React, {memo, useEffect} from 'react';
import {Platform, StyleSheet, View} from "react-native";
import {Avatar, Button, Card, Headline, IconButton, Text} from "react-native-paper";
import BackButton from "../../components/BackButton";
import {theme} from "../../core/theme";
import BackgroundApp from "../../components/BackgroundApp";
import SettingHeader from "../../components/settings/SettingHeader";
import * as ImagePicker from 'expo-image-picker';
import authServices from "../../services/Auth";
import TextInput from "../../components/TextInput";
import {emailValidator, passwordValidator} from "../../core/utils";
import MySnackBar from "../../components/MySnackBar";


const AccountSettingsScreen = ({ navigation }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [userInfos, setUserInfos] = React.useState({
    name: undefined
  });
  const [image, setImage] = React.useState(null);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [location, setLocation] = React.useState("");


  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.2,
      base64: true,
    });
    if (!result.cancelled) {
      await authServices.editUserInfos({'image': result.base64}).then((resp) => setUserInfos(resp.user));
      setImage(result.base64);
    }
  };

  const _updateInfos = async () => {
    await authServices.editUserInfos({'name': name, 'description': description, "location": location, "coutry": country}).then((resp) => {setIsVisible(true); setUserInfos(resp.user)});
  };

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      await authServices.getConnectedUserInfos().then((resp) => {setUserInfos(resp.user)
        setName(resp.user.name);
        setLocation(resp.user.location);
        setDescription(resp.user.description);
        setCountry(resp.user.country);
      });
    })();
  }, []);

  return (
    <BackgroundApp>
      <SettingHeader navigation={navigation} title={"Compte"} subtitle={"Modifer les paramètres de votre compte"}/>
      <MySnackBar message={"Informations mises à jour"} isVisible={isVisible} setIsVisible={setIsVisible}/>
      <View style={styles.cardContainer}>
        <Card style={styles.card}>
          <Card.Title title="Globale"/>
          <Card.Content>

            <Card style={{ borderRadius: 12, elevation: 2}}>
              <Card.Content style={{    flexDirection: "row",
               }}>
                <Avatar.Image size={80} source={{ uri: 'data:image/jpeg;base64,' + userInfos.image }}/>
                <IconButton
                  icon="pencil-outline"
                  color={theme.colors.primary}
                  size={20}
                  onPress={pickImage}
                  style={{position: "absolute", top: 5, left: 60, backgroundColor: "white", borderColor: theme.colors.grey, borderWidth: 2}}
                />
                <View style={{marginLeft: "5%"}}>
                  <Text style={{  fontSize: 25,
                    fontWeight: "bold", paddingTop: "5%"}}>{userInfos.name}</Text>
                  <View style={{flexDirection: "row"}}>
                    <Text style={{fontWeight: 'bold'}}>{userInfos.location}</Text>
                    <Text>, {userInfos.country}</Text>
                  </View>
                </View>
              </Card.Content>
            </Card>

            <Card style={{ borderRadius: 12, elevation: 2, marginTop: "5%"}}>
              <Card.Content style={{flexDirection: "column"}}>
                <TextInput
                  label="Name"
                  value={name}
                  onChangeText={text => setName(text)}
                  returnKeyType="next"
                  autoCapitalize="words"
                />
                <TextInput
                  label="Description"
                  value={description}
                  onChangeText={text => setDescription(text)}
                  returnKeyType="next"
                  autoCapitalize="sentences"
                  multiline={true}
                  numberOfLines={3}
                />
                <View style={{flex: 0, flexDirection: "row", alignItems: "flex-start"}}>
                  <View style={{flex: 1, marginRight: "2%"}}>
                    <TextInput
                      label="Ville"
                      value={location}
                      onChangeText={text => setLocation(text)}
                      returnKeyType="next"
                      autoCapitalize="words"
                    />
                  </View>
                  <View style={{flex: 1, marginLeft: "2%"}}>
                    <TextInput
                      label="Pays"
                      value={country}
                      onChangeText={text => setCountry(text)}
                      returnKeyType="next"
                      autoCapitalize="words"
                    />
                  </View>
                </View>
                <Button mode="contained" onPress={_updateInfos} style={{marginHorizontal: "15%"}}>
                  Sauvegarder
                </Button>
              </Card.Content>
            </Card>
          </Card.Content>
        </Card>
      </View>
    </BackgroundApp>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: "-20%",
    marginBottom: "20%",
    marginHorizontal: "5%"
  },
  card: {
    borderRadius: 20,
    elevation: 2,
  }
});

export default memo(AccountSettingsScreen);
