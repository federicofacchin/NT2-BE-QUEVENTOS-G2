import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Login from './screens/Login'
import Notificactions from './screens/Notifications'




export default function App() {
  return (
    <View style={styles.container}>
      <Login></Login>
      {/*<Notificactions></Notificactions>*/}
    </View>
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
