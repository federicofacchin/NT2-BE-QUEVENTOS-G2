import { View,Text, TouchableOpacity} from "react-native";
import Arrow from "../Icon/Arrow";
import styles from "./styles";
import {subscriptions}  from '../../services/subscriptions';

export default ({subscription, navigation}) => {

    const {name,address,id} = subscription
    return (
        <View style= {styles.container}>
            <View style={styles.data}>
                <Text style={styles.title} >{name}</Text>
                <Text style={styles.subtitle} >{address}</Text>
            </View>
            <View>
                <TouchableOpacity onPress={() => { navigation.navigate('Ubicación', { id })}}>
                    <Arrow size={24} color={'#9ca3af'}/>
                </TouchableOpacity>
            </View>
        </View> 
    )

}
