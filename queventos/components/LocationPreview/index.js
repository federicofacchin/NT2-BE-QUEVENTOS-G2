import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import Close from '../Icon/Close'

const LocationPreview = ({location, onPressDirections, onPressClose,onPressDetails}) => {

    return (
        <View style={styles.container}>
            <View style={styles.meta}>
                <Text style={styles.title}>{location.name}</Text>
                <Text>{location.address}</Text>
            </View>
            <TouchableOpacity style={styles.closePreviewButton} onPress={()=> onPressClose()}>
                <Close size={24} color={"#9ca3af"}></Close>
            </TouchableOpacity>
            <View style={styles.actionsContainer}>
                <TouchableOpacity style={[styles.action, {marginRight: 4}]} onPress={()=> onPressDirections(location)}>
                    <Text>Cómo llegar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.action, {marginLeft: 4}]} onPress={() => onPressDetails(location)}>
                    <Text>Detalles</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LocationPreview