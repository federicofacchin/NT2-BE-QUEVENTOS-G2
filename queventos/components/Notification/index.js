import { View, Text, TouchableOpacity } from 'react-native'
import Calendar from '../Icon/Calendar'
import Globe from '../Icon/Globe'
import styles from './styles'

export default ({notification, navigation}) => {
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{notification.title}</Text>
            <Text style={styles.description}>{notification.description}</Text>
            <View style={styles.metaContainer}>
                <Calendar size={16} color={"#6b7280"}></Calendar>
                <Text style={styles.date}>{notification.date}</Text>
            </View>
            <TouchableOpacity 
            style={styles.metaContainer}
             onPress={()=>
                navigation.navigate("Ubicaciones",{screen: "Mapa", params:{geopoint: notification.coordinates} })} 
    >
                <Globe size={16} color={"#0ea5e9"}></Globe>
                <Text style={styles.location}>
                    {notification.location}</Text>
            </TouchableOpacity>
        </View>
    )
}