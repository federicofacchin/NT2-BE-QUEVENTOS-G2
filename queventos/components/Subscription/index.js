import { View,Text, TouchableOpacity} from "react-native";
import Trash from "../Icon/Trash";
import styles from "./styles";
import {subscriptions,cancelSubscription}  from '../../services/subscriptions';

export default ({subscription}) => {

    const {name,address,id} = subscription
    return (
        <View style= {styles.container}>
            <View style={styles.data}>
                <Text style={styles.title} >{name}</Text>
                <Text style={styles.subtitle} >{address}</Text>
            </View>
            <View>
                <TouchableOpacity onPress={ () => cancelSubscription(id)}>
                    <Trash size={24} color={'#dc2626'}/>
                </TouchableOpacity>
            </View>
        </View> 
    )

}
