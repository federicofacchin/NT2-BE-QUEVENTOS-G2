import { View, Text } from 'react-native'
import styles from './styles'

export default ({event}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.date}>{event.date}</Text>
            <Text style={styles.body}>{event.title}</Text>
        </View>
    )
}