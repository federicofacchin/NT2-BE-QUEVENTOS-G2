import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login'
import SignUp from './screens/SignUp'
import Notifications from './screens/Notifications'
import Subscriptions from './screens/Subscriptions';
import { Stack } from 'native-base';
import { authStateListener } from './services/auth'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function App() {

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const [authenticationData, setAuthenticationData] = useState(false)

  useEffect(()=>{
    authStateListener(setAuthenticationData)
  }, [])

  return (

    <NavigationContainer>
      {
        authenticationData ?
        <Tab.Navigator>
          <Tab.Screen
            name= "Subscriptions"
            component = {Subscriptions}
          />
           <Tab.Screen
            name= "Notifications"
            component = {Notifications}
          />
        </Tab.Navigator>
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
