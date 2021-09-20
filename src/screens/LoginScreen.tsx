import React, { memo, useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Background from '../components/BackgroundAuth';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import { theme } from '../core/theme';
import { emailValidator, passwordValidator } from '../core/utils';
import MySnackBar from "../components/MySnackBar";

const LoginScreen = ({ navigation, AuthContext }) => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [IsVisible, setIsVisible] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState('');

  const { signIn } = React.useContext(AuthContext);

  const _onLoginPressed = async () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
    signIn({ email, password }, setIsVisible, setErrorMessage)
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate('HomeScreen')} />

      <Logo />

      <Header>De retour</Header>

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Mot de passe"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPasswordScreen')}
        >
          <Text style={styles.label}>Mot de passe oublié ?</Text>
        </TouchableOpacity>
      </View>

      <Button mode="contained" onPress={_onLoginPressed}>
        Se connecter
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Pas encore de compte ? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.link}>Créer en un</Text>
        </TouchableOpacity>
      </View>
      <MySnackBar message={ErrorMessage} isVisible={IsVisible} setIsVisible={setIsVisible}/>
    </Background>
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

export default memo(LoginScreen);
