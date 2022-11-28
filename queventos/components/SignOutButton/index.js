import { TouchableOpacity, Text } from 'react-native'
import styles from './styles'
import LogOut from '../Icon/LogOut'
import { signOut } from '../../services/auth'

export default ()=>{
    return (
        <TouchableOpacity style={styles.container} onPress={()=> signOut()}>
            <Text style={styles.action}>Salir</Text>
            <LogOut size={24} color={"#0ea5e9"}></LogOut>
        </TouchableOpacity>
    )
}
