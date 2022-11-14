import { useState, useEffect } from 'react'
import { View , Button, Text} from 'react-native'
import styles from './styles'
import SubscriptionsFlatList from '../../components/SubscriptionFlatList'
import {subscriptions} from '../../services/subscriptions'


export default ()=> {
    const [data, setData] = useState([])

    useEffect(()=>{
        setData(subscriptions)
    }, [])
    
    /*console.log(data[0])*/

    return (
        <View style={styles.container}>
            <SubscriptionsFlatList subscriptions={subscriptions}>
                
            </SubscriptionsFlatList>
        </View>
   
    )
}