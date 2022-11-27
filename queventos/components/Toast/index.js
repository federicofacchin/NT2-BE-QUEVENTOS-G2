import { View, Text } from 'react-native'
import styles from './styles'


export default ({message}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.body}>{message}</Text>
        </View>
    )
}