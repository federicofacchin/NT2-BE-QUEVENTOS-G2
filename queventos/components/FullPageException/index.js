import { View, Text } from 'react-native'
import Warning from '../Icon/Warning'
import styles from './styles'

export default ({message})=>{
    return(
        <View style={styles.container}>
            <Warning size={32} color={"#9ca3af"}></Warning>
            <Text style={styles.title}>Algo salió mal</Text>
            <Text style={styles.description}>{message}</Text>
        </View>
    )
}