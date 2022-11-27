import { View, Text } from 'react-native'
import styles from './styles'

export default ({icon, subject})=>{
    return(
        <View style={styles.container}>
            {icon}
            <Text style={styles.title}>No tenés {subject}</Text>
            <Text style={styles.description}>Aquí se mostrarán tus {subject}</Text>
        </View>
    )
}