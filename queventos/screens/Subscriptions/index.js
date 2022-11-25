import { useState, useEffect, useContext } from 'react'
import { View , Button, ActivityIndicator, Text} from 'react-native'
import styles from './styles'
import SubscriptionsFlatList from '../../components/SubscriptionFlatList'
import {getSubscriptions} from '../../services/subscriptions'
import AuthContext from '../../globals/AuthContext'

export default ({navigation})=> {
    const [isLoading, setIsLoading]= useState(true)   
    const {authenticationData, setAuthenticationContext} = useContext(AuthContext) 
    const [subscriptions, setSubscriptions] = useState([])

    //console.log(navigation)

    useEffect(()=>{
        getSubscriptions(authenticationData.uid).then((results) => setSubscriptions(results))
        .catch(error => error)
        .finally(()=>setIsLoading(prev=> !prev))
    }, [])
    

    return (
        <View style={styles.container}>
            {isLoading?<View style= {styles.loader}><ActivityIndicator size='large'
            color='#38bdf8'>
            </ActivityIndicator></View>
            : <SubscriptionsFlatList subscriptions={subscriptions} navigation={navigation}>
            </SubscriptionsFlatList>
            }
        </View>
   
    )
}