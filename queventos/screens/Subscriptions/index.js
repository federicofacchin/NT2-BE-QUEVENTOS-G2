import { useState, useEffect } from 'react'
import { View , Button, ActivityIndicator, Text} from 'react-native'
import styles from './styles'
import SubscriptionsFlatList from '../../components/SubscriptionFlatList'
import {subscriptions} from '../../services/subscriptions'


export default ({navigation})=> {
    const [data, setData] = useState([])

    //console.log(navigation)

    useEffect(()=>{
        setData(subscriptions)
    }, [])
    
    /*console.log(data[0])*/

    return (
        <View style={styles.container}>
            <SubscriptionsFlatList subscriptions={subscriptions} navigation={navigation}>
                
            </SubscriptionsFlatList>
        </View>
   
    )
}