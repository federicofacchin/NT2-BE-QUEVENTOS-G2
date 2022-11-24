import { useState, useEffect } from 'react'
import { ScrollView, View, Text, Button} from 'react-native'
import Divider from '../../components/Divider'
import styles from './styles'
import {subscriptions, cancelSubscription} from '../../services/subscriptions'
import EventLogFlatList from '../../components/EventLogFlatList'
import Store from '../../components/Icon/Store'
import { getLocation } from '../../services/locations'
import { getIconType } from '@rneui/base'

export default ({ route, navigation })=> {
    const [ data, setData] = useState([])
    const [ hasNotifications, setHasNotifications ] = useState(false)
    const [ tengoNotifications, setTengoNotifications ] = useState(0)
    const [ contador, setContador ] = useState()
    useEffect(()=>{
        const { id } = route.params

        getLocation(id)
        .then(data =>
            {
                setData(data)
                //console.log(data.notifications.lenght)
                //console.log(data.notifications)
                return data
            }
        ).then(data => {
            const count = data.notifications.reduce((previousValue, element) => {
                previousValue + element
                //console.log("element: " + element)
                //setContador(contador => contador += element)//acum + element
                return previousValue
            },0)
            console.log(data.notifications.length)
            setContador(data.notifications.length)
            
            //console.log(data.notifications.length)
            //data.notifications.length > 0 ?
            //console.log(hasNotifications)
//            count > 0 ? data.notifications.lenght > 0 ? setHasNotifications(true) : setHasNotifications(false) 
            //console.log(data.notifications.length)
            //setHasNotifications(data.notifications.length > 0)
        })
    }, [])

    useEffect(()=>{
        console.log("Nueva Ejecucion 2")
        console.log(contador)
    }, [contador])
    
    return (
        <View style={styles.container}>
            
            <View style={styles.square}>
                <Store size={32} color={"#6b7280"}></Store>
            </View>
            <View style={styles.mediaContainer}>
                <Text style={styles.title}>{data.name}</Text>
                <Text style={styles.description}>{data.address}</Text>
            </View>
            <Divider/>
        <View>
            
        </View>



{/*            <ScrollView style={styles.eventFeed}> */}
                { (contador>0)
                ?
                <EventLogFlatList events={data.notifications}></EventLogFlatList>
                :
                <View style={styles.placeholder}>
                    <Text style={styles.muted}>Esta ubicacion no tiene eventos publicados...</Text>
                </View>
               }
{/*            </ScrollView> */}


            <View>
                <Button title="Desuscribir" color="#dc2626"></Button>
            </View>
        </View>
        
    )
}