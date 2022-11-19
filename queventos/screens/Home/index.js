import { useState, useEffect } from 'react'
import { View , Text} from 'react-native'
import styles from './styles'
import { getAllLocations,getLocation } from '../../services/locations'



export default ()=> {
    //const [data, setData] = useState([])
    const [locations,setLocations] = useState([])

    useEffect(()=>{
        const locations = getAllLocations;
        setLocations(locations)
    }, [])
    
    console.log(locations)
    
    return (
        <View style={styles.container}>
           <Text>Aca va el mapa</Text>
        </View>
    )
}