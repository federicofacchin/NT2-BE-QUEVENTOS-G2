import { useState, useEffect } from 'react'
import { View , Text} from 'react-native'
import styles from './styles'
import { getAllLocations,getLocation } from '../../services/locations'



export default ()=> {
    //const [data, setData] = useState([])
    const [locations,setLocations] = useState([])

    useEffect(()=>{
        getAllLocations().then(data => setLocations(data))
    }, [])
    
    //console.log(locations)
    
    return (
        <View style={styles.container}>
           <Text>Aca va el mapa</Text>
           {locations.map((location, i) => <Text key={location.id}> {location.id.data.name}</Text>)}
        </View>
    )
}