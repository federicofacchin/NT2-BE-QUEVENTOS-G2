import { useState, useEffect,useContext } from 'react'
import { View, Text, Button, ActivityIndicator} from 'react-native'
import Divider from '../../components/Divider'
import styles from './styles'
import {modifySubscription} from '../../services/subscriptions'
import EventLogFlatList from '../../components/EventLogFlatList'
import Store from '../../components/Icon/Store'
import { getLocation } from '../../services/locations'
import { useNavigationState } from '@react-navigation/native';
import AuthContext from '../../globals/AuthContext'


export default ({ route, navigation })=> {
    const [ data, setData] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)
    const [ contador, setContador ] = useState()
    const routeNames = useNavigationState(state => state.routeNames)
    const {authenticationData, setAuthenticationContext} = useContext(AuthContext) 
    const [ activeSubscription, setActiveSubscription ] = useState(false)
    useEffect(()=>{
        const { id } = route.params
        getLocation(id)
        .then(data =>
            {
                setData(data)
                setContador(data.notifications.length)
            return data
            }
        ).then(data => { setContador(data.notifications.length > 0 ? data.notifications.length : 0)
            const subscription = data.subscribers.find(subscriber => subscriber === authenticationData.uid)
            return subscription
            
        }).then(subscription => {
            subscription ? setActiveSubscription(true) : setActiveSubscription(false)
        })
        .catch(err => console.log(err))
        .finally(()=>setIsLoading(prev=>!prev))
    }, [])
    
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
                {(activeSubscription)
                // devuelve una promesa hay que validar que sea verdadera
                ?
                <Button title="Desuscribir" color="#dc2626" onPress={() => {
                    modifySubscription(activeSubscription,route.params.id,authenticationData.uid)
                    .finally(() => navigation.reset({
                        index: 0,
                        routes: [
                            {name: routeNames[0], params: { updatedSubscription: true }}]
                        }))
                }}></Button>
                :
                <Button title="Subscribir" color="#38bdf8" onPress={() => {
                    modifySubscription(activeSubscription,route.params.id,authenticationData.uid)
                    .finally(() => navigation.reset({
                        index: 0,
                        routes: [
                            {name: routeNames[0], params: { updatedSubscription: true }}]
                        }))
                }}></Button>
                }
            </View>

        </View>
}
</View>
        
    )
}