import { useState, useEffect } from 'react'
import { ScrollView, View, Text, Button, ActivityIndicator} from 'react-native'
import Divider from '../../components/Divider'
import styles from './styles'
import {subscriptions, cancelSubscription} from '../../services/subscriptions'
import EventLogFlatList from '../../components/EventLogFlatList'
import Store from '../../components/Icon/Store'
import { getLocation } from '../../services/locations'
import { useNavigationState } from '@react-navigation/native';

export default ({ route, navigation })=> {
    const [ data, setData] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)
    const [ contador, setContador ] = useState()
    const routeNames = useNavigationState(state => state.routeNames)
    //console.log(routeNames)

    useEffect(()=>{
        const { id } = route.params

        getLocation(id)
        .then(data => {
                setData(data)
                setContador(data.notifications.length)
            }
        )
        .finally(()=>setIsLoading(prev=>!prev))
    }, [])

    /*useEffect(()=>{
        console.log("Nueva Ejecucion 2")
        console.log(contador)
    }, [contador])*/

    
    return (
        <View style={styles.container}>
            {
    isLoading?
    <View style={styles.loader}><ActivityIndicator size="large" color='#38bdf8'></ActivityIndicator></View>
         :
         <View style={{flex: 1}}>
            <View style={styles.square}>
                <Store size={32} color={"#6b7280"}></Store>
            </View>
            <View style={styles.mediaContainer}>
                <Text style={styles.title}>{data.name}</Text>
                <Text style={styles.description}>{data.address}</Text>
            </View>
            <Divider/>
                { (contador>0)
                ?
                <EventLogFlatList events={data.notifications}></EventLogFlatList>
                :
                <View style={styles.placeholder}>
                    <Text style={styles.muted}>Esta ubicacion no tiene eventos publicados...</Text>
                </View>
               }
            <View>
                <Button
                    title="Desuscribir"
                    color="#dc2626"
                    onPress={() => { 
                        /*navigation.navigate({
                            name: routeNames[0],
                            params: { updatedSubscription: true },
                            merge: true,
                          });*/
                          navigation.reset({
                            index: 0,
                            routes: [
                                {name: routeNames[0], params: { updatedSubscription: true }}]
                            })
                    }}
                />    

          </View>

        </View>
}
</View>
        
    )
}