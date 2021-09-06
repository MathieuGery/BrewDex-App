// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import { createSwitchNavigator} from "react-navigation";
//
// import {
//   HomeScreen,
//   LoginScreen,
//   RegisterScreen,
//   ForgotPasswordScreen,
//   Dashboard,
//   AuthLoading,
// } from './screens';
//
// const AppStack = createStackNavigator(
//   {
//     Dashboard,
//   },
//   {
//     initialRouteName: 'Dashboard',
//   }
// )
// const AuthStack = createStackNavigator(
//   {
//     HomeScreen,
//     LoginScreen,
//     RegisterScreen,
//     ForgotPasswordScreen,
//   },
//   {
//     initialRouteName: 'HomeScreen',
//     headerMode: 'none',
//   }
// );
//
// export default createAppContainer(createSwitchNavigator(
//   {
//     AuthLoading: AuthLoading,
//     App: AppStack,
//     Auth: AuthStack,
//   },
//   {
//     initialRouteName: 'AuthLoading',
//   }
// ));
