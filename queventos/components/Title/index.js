import { Text } from 'react-native'
import styles from './styles'

export default ({text, layout}) => {

    return (
        <Text style={[styles.text, layout]}>{text}</Text>
    )
}
