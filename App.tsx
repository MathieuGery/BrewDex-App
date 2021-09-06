import React, {useState} from 'react';
import { Provider, Text } from 'react-native-paper';
import { theme } from './src/core/theme';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Dashboard, ForgotPasswordScreen, HomeScreen, LoginScreen, RegisterScreen} from "./src/screens";
import * as SecureStore from "expo-secure-store";
import {View} from "react-native";
import authServices from "./src/services/Auth";

// @ts-ignore
const AuthContext = React.createContext();
const Stack = createNativeStackNavigator();

function SplashScreen() {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}

export default function Main(){
  const [userToken, setUserToken] = useState('')

  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        // Restore token stored in `SecureStore` or any other encrypted storage
        userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        console.log(data.email.value, data.password.value)
        await authServices.login(
          { email: data.email.value, password: data.password.value},
        )
          .then(async (data) => {await SecureStore.setItemAsync('userToken', data.token);
            dispatch({ type: 'SIGN_IN', token: data.token });})
          .catch((error) => console.log(error));
      },
      signOut: async () => {await SecureStore.deleteItemAsync('userToken');
        dispatch({ type: 'SIGN_OUT' })},
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );

  console.log(userToken)
  return (
    <Provider theme={theme}>
      <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>
          {state.isLoading ? (
            // We haven't finished checking for the token yet
            <Stack.Screen name="Splash" component={SplashScreen} />
          ) : state.userToken == null ? (
            // No token found, user isn't signed in

              // No token found, user isn't signed in
            <React.Fragment>
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                  title: 'Home Screen',
                  // When logging out, a pop animation feels intuitive
                  animationTypeForReplace: state.isSignout ? 'pop' : 'push',
                }}/>
              <Stack.Screen name="LoginScreen">
                {props => <LoginScreen {...props} AuthContext={AuthContext} />}
              </Stack.Screen>
              <Stack.Screen name="RegisterScreen" component={RegisterScreen}/>
              <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen}/>
            </React.Fragment>
          ) : (
            // User is signed in
            <Stack.Screen name="Dashboard">
              {props => <Dashboard {...props} AuthContext={AuthContext} />}
            </Stack.Screen>
          )}
        </Stack.Navigator>
      </NavigationContainer>
      </AuthContext.Provider>
    </Provider>
  )
};
