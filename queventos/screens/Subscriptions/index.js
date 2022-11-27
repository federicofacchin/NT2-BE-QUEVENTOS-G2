import { useState, useEffect, useContext } from 'react'
import { View , Button, ActivityIndicator, Text} from 'react-native'
import styles from './styles'
import SubscriptionsFlatList from '../../components/SubscriptionFlatList'
import {getSubscriptions} from '../../services/subscriptions'
import AuthContext from '../../globals/AuthContext'
import EmptyStateMessage from '../../components/EmptyStateMessage'
import FileTray from '../../components/Icon/FileTray'

export default ({navigation})=> {
    const [isLoading, setIsLoading]= useState(true)   
    const {authenticationData, setAuthenticationContext} = useContext(AuthContext) 
    const [subscriptions, setSubscriptions] = useState([])
    const [ contador, setContador ] = useState()

    //console.log(navigation)

    useEffect(()=>{
        getSubscriptions(authenticationData.uid).then((results) => {
            setSubscriptions(results)
            setContador(results.length)
        })
        .catch(error => error)
        .finally(()=>setIsLoading(prev=> !prev))

    }, [])
    

    return (
        <View style={styles.container}>
            {isLoading ?
                <View style= {styles.loader}>
                    <ActivityIndicator size='large'color='#38bdf8'></ActivityIndicator>
                </View>
                :
                <View style={styles.wrapper}>
                    {contador > 0 ?
                        <SubscriptionsFlatList subscriptions={subscriptions} navigation={navigation}></SubscriptionsFlatList>
                        :
                        <EmptyStateMessage
                        icon={<FileTray size={32} color={"#9ca3af"}></FileTray>}
                        subject={"suscripciones"}>
                    </EmptyStateMessage>
                    }
                </View>
            }
        </View>
   
    )
}