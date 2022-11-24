import { useState, useEffect, useContext } from 'react'
import { View , Button, ActivityIndicator, Text} from 'react-native'
import styles from './styles'
import SubscriptionsFlatList from '../../components/SubscriptionFlatList'
import {getSubscriptions} from '../../services/subscriptions'
import AuthContext from '../../globals/AuthContext'

export default ({navigation})=> {
    const {authenticationData, setAuthenticationContext} = useContext(AuthContext) 
    const [subscriptions, setSubscriptions] = useState([])

    //console.log(navigation)

    useEffect(()=>{
        getSubscriptions(authenticationData.uid).then((results) => setSubscriptions(results)).catch(error => error)
        
    }, [])
    

    return (
        <View style={styles.container}>
            <SubscriptionsFlatList subscriptions={subscriptions} navigation={navigation}>
                
            </SubscriptionsFlatList>
        </View>
   
    )
}