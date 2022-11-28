import { View, Text } from 'react-native'
import Warning from '../Icon/Warning'
import styles from './styles'

export default ({message}) => {
    return (
        <View style={styles.container}>
            <Warning size={24} color={"#ef4444"}></Warning>
            <Text style={styles.body}>{message}</Text>
        </View>
    )
}