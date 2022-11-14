import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react'
import { StyleSheet, View, Button, Text, TouchableOpacity } from 'react-native';
import { authStateListener } from './services/auth'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './screens/Login'
import SignUp from './screens/SignUp'
import Home from './screens/Home'
import Globe from './components/Icon/Globe';
import Notifications from './screens/Notifications'
import NotificationBell from './components/Icon/NotificationBell';
import Subscriptions from './screens/Subscriptions';
import Newspaper from './components/Icon/Newspaper';
import Profile from './screens/Profile'
import Person from './components/Icon/Person';
import SignOutButton from './components/SignOutButton';


export default function App() {

  const [authenticationData, setAuthenticationData] = useState(false)

  useEffect(()=>{
    authStateListener(setAuthenticationData)
  }, [])

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  return (

    <NavigationContainer>
      {
        authenticationData ?
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: '#0ea5e9',
          tabBarInactiveTintColor: '#6b7280',
        })}
        >
          <Tab.Screen
            name="Ubicaciones"
            component={Home}
            options={
              {
                headerShown: false,
                tabBarLabel: "Ubicaciones",
                tabBarIcon: ({ color, size }) => (
                  <Globe size={size} color={color} />
                )
              }
            }
          />
          <Tab.Screen
            name="Mis notificaciones"
            component={Notifications}
            options={
              {
                tabBarLabel: "Notificaciones",
                tabBarIcon: ({ color, size }) => (
                  <NotificationBell size={size} color={color} />
                )
              }
            }
          />
          <Tab.Screen
            name="Mis suscripciones"
            component={Subscriptions}
            options={
              {
                tabBarLabel: "Suscripciones",
                tabBarIcon: ({ color, size }) => (
                  <Newspaper size={size} color={color} />
                )
              }
            }
          />
          <Tab.Screen
            name="Mi perfil"
            component={Profile}
            options={({navigation, route }) => ({
              tabBarLabel: "Perfil",
              headerRight: () => (
                <SignOutButton/>
              ),
              tabBarIcon: ({ color, size }) => (
                <Person size={size} color={color} />
              )
            })}
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
