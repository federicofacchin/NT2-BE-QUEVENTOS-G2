import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login'
import SignUp from './screens/SignUp'
import Notificactions from './screens/Notifications'
import { Stack } from 'native-base';


export default function App() {

  const Stack = createNativeStackNavigator();

  const [authenticationData, setAuthenticationData] = useState(false)

  return (

    <NavigationContainer>
      {
        authenticationData ?
        <Stack.Navigator>
            <Stack.Screen
              name="Notifications"
              component={Notificactions}
              options={
                {
                  title: "Notificaciones",
                }
              }/>
        </Stack.Navigator>
        :
        <Stack.Navigator>
              <Stack.Screen
              name="Login"
              component={Login}
              options={
                {
                  headerShown: false
                }
              }/>
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={
                {
                  headerShown: false
                }
              }/>
        </Stack.Navigator>

      }
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
