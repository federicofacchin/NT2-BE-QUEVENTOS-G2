import React, { useState, useEffect } from 'react'
import { Platform, View , Text, Button} from 'react-native'
import styles from './styles'
import { getAllLocations, getLocation } from '../../services/locations'
import MapView, { Marker, Polyline/*, Callout*/ } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions';
//import Constants from 'expo-constants';
import { REACT_APP_GOOGLE_MAP_API_KEY } from '@env'
//import { getLocationPermission } from '../../services/map'
import * as Location from 'expo-location';
import LocationPreview from '../../components/LocationPreview'



//export default ({destination})=> {
    export default ()=> {
    //const [data, setData] = useState([])
    const [origin, setOrigin] = useState({
        latitude: -34.5496608737801,
        longitude: -58.45406203477659
    });
    const [destination, setDestination] = useState("");
    const [testDestination, setTestDestination] = useState({
        latitude: -34.60205913117039,
        longitude: -58.36844848950401
    });
    const [locations,setLocations] = useState([])
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const [selectedLocation, setSelectedLocation] = useState('');
    const undoSelection = () => {
        setSelectedLocation('')
    }
    const showRoute = (location)=>{
        const {latitude, longitude } = location.data.coordinates
        //console.log(latitude, longitude)
        //setDestination({ latitude: latitude, longitude: longitude })
    }
    
    useEffect(()=>{
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
              setErrorMsg('Permission to access location was denied');
              return;
            }
            let location = await Location.getCurrentPositionAsync({});
          })

        getAllLocations().then(data => {
            setLocations(data)
        }).catch(err => console.log(err))  
    
    }, [])
    //console.log(locations)
    
    return (
        <View style={styles.container}>

        
            {selectedLocation ?
                // Los datos del componente están harcodeados
                // Hay que pasarle como prop la ubicación y los handlers para activar la ruta y para abrir el detalle
                // Al detalle le debe pasar el id
                <LocationPreview location={selectedLocation} onPressDirections={showRoute} onPressClose={undoSelection}></LocationPreview>
                :
                null
            }
            <MapView 
                style={styles.map}
                initialRegion={{
                    latitude: origin.latitude,
                    longitude: origin.longitude,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.04
                }}>
                <Marker 
                    draggable 
                    coordinate={origin}
                    onDragEnd={(direction) => { 
                    }}
                />
                { locations.map((location) => {
                    const { latitude,longitude } = location.data.coordinates
                    const { name } = location.data.name
                    return(
                        <Marker 
                        key={location.id} 
                        title={name}
                        description={"description"}
                        coordinate={ { latitude: latitude, longitude: longitude }}
                        onPress={() => { 
                            setSelectedLocation(location)          
                        }}
                    />
                    )
                })}
                { destination != "" ?
                <MapViewDirections
                    origin={origin}
                    destination={destination}
                    apikey={REACT_APP_GOOGLE_MAP_API_KEY}
                    strokeColor="#0ea5e9"
                    strokeWidth={10}/> :
                null }
            </MapView>
           {/*{locations.map((location, i) => <Text key={location.id}> {location.data.name}</Text>)}*/}
        </View>
    )
}
