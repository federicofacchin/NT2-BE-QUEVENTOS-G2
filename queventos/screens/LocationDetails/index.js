import { useState, useEffect } from 'react'
import { ScrollView, View, Text, Button} from 'react-native'
import styles from './styles'
import {subscriptions,cancelSubscription} from '../../services/subscriptions'



export default ({ route, navigation })=> {
    const [ data, setData] = useState([])

    useEffect(()=>{
        const { id } = route.params
        const find = subscriptions.find(obj => {
            return obj.id === id;
          })

          //console.log(subscriptions)
          //console.log(find)

          setData(find)
          

    }, [])

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.mediaContainer}>
                    <Text>{data.name}</Text>
                    <Text>{data.address}</Text>
                </View>
            </ScrollView>
            <View>
                <Button title="Desuscribir" color="#dc2626"></Button>
            </View>
        </View>
        
    )
}