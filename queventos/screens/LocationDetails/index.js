import { useState, useEffect } from 'react'
import { ScrollView, View, Text, Button} from 'react-native'
import Divider from '../../components/Divider'
import styles from './styles'
import {subscriptions, cancelSubscription} from '../../services/subscriptions'
import EventLogFlatList from '../../components/EventLogFlatList'
import Store from '../../components/Icon/Store'


export default ({ route, navigation })=> {
    const [ data, setData] = useState([])
    const [hasNotifications, setHasNotifications] = useState()
    useEffect(()=>{
        const { id } = route.params
        const location = subscriptions.find(obj => {
            return obj.id === id;
          })
          setData(location)
          setHasNotifications(location.notifications.length > 0)
    }, [])


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

            <ScrollView style={styles.eventFeed}>
                { hasNotifications
                ?
                <EventLogFlatList events={data.notifications}></EventLogFlatList>
                :
                <View style={styles.placeholder}>
                    <Text style={styles.muted}>Aquí se mostrarán los eventos publicados...</Text>
                </View>
               }
            </ScrollView>

            <View>
                <Button title="Desuscribir" color="#dc2626"></Button>
            </View>
        </View>
        
    )
}