import React, { useState, useEffect } from 'react'
import { Platform, View , Text, Button} from 'react-native'
import styles from './styles'
import { getAllLocations, getLocation } from '../../services/locations'
import MapView, { Marker, Polyline/*, Callout*/ } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions';
import { REACT_APP_GOOGLE_MAP_API_KEY } from '@env'

import * as Location from 'expo-location';
import LocationPreview from '../../components/LocationPreview'
import Toast from '../../components/Toast'

export default ({route, navigation})=> {

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
        setDestination({ latitude: latitude, longitude: longitude })
    }
    
    const showLocationDetails = (location)=> {
        const {id} = location
        navigation.navigate('Detalle', { id })
    }

    const [showToast, setShowToast] = useState(false);

    useEffect(()=>{

        if((route.params?.geopoint)){
        const{latitude, longitude}= route.params.geopoint
        const paramLocation = {}
        paramLocation.latitude = latitude
        paramLocation.longitude = longitude

        setDestination(paramLocation)
        }
    }, [route.params?.geopoint])

    useEffect(()=>{
        if((route.params?.updatedSubscription)){
            undoSelection('')
            setShowToast(prev => !prev)
            setTimeout(()=>{
                setShowToast(prev => !prev)
            }, 3000)
        }
    }, [route.params?.updatedSubscription])

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
    
    return (
        <View style={styles.container}>

            {showToast ?
                <Toast message={"Cambios guardados"}></Toast>
                :
                null
            }

            {selectedLocation ?
                <LocationPreview location={selectedLocation} onPressDirections={showRoute} onPressClose={undoSelection} onPressDetails={showLocationDetails}></LocationPreview>
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
                        setOrigin(direction.nativeEvent.coordinate)
                    }}
                />
                { locations.map((location) => {
                    const { latitude, longitude } = location.data.coordinates
                    const { name } = location.data.name
                    return(
                        <Marker 
                        pinColor={'#0ea5e9'}
                        key={location.id} 
                        title={name}
                        description={"description"}
                        coordinate={ { latitude: latitude, longitude: longitude }}
                        onPress={() => { 
                            setDestination();
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
                    strokeWidth={6}/> :
                null }
            </MapView>
        </View>
    )
}
