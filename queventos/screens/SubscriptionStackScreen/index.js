
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Subscriptions from '../Subscriptions';
import LocationDetails from '../LocationDetails';

const SubscriptionStack = createNativeStackNavigator();

const SubscriptionStackScreen = ({navigation})=>{
  return(
    <SubscriptionStack.Navigator>

    <SubscriptionStack.Screen
    name="Mis subscripciones"
    component={Subscriptions}
    options={
      {
        headerShown: true
      }
    }/>
    <SubscriptionStack.Screen
    name="Ubicación"
    component={LocationDetails}
    options={
      {
        headerShown: true
      }
    }/>

    </SubscriptionStack.Navigator>
  )
}

  export default SubscriptionStackScreen