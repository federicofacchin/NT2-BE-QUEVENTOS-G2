import { TouchableOpacity, Text } from 'react-native'
import styles from './styles'

export default ({supportingText, action, onPress})=>{
    return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.supportingText}>{supportingText}</Text>
        <Text style={styles.action}>{action}</Text>
    </TouchableOpacity>
    )
}