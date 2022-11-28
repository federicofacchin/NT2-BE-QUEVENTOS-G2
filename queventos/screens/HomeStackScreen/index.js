
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Home';
import LocationDetails from '../LocationDetails';

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = ({navigation}) =>{
    return(
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Mapa"
          component={Home}
          options={
            {
              headerShown: false
            }
          }
        />
         <HomeStack.Screen
          name="Detalle"
          component={LocationDetails}
          options={
            {
              headerShown: true,
              title: "Ubicación"
            }
          }
        />
      </HomeStack.Navigator>
    )
  }

  export default HomeStackScreen