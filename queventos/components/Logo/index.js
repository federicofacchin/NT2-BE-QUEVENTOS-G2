import { View } from 'react-native'
import Megaphone from '../Icon/Megaphone'
import styles from './styles'


export default () => {
    return (
        <View style={styles.circle}>
            <Megaphone size={32}></Megaphone>
        </View>
    )
}