import { useState, useEffect, useContext } from 'react'
import { View , ActivityIndicator } from 'react-native'
import styles from './styles'
import { getNotifications } from '../../services/notifications'
import NotificationFlatList from '../../components/NotificationFlatList'
import EmptyStateMessage from '../../components/EmptyStateMessage'
import AuthContext from '../../globals/AuthContext'
import FileTray from '../../components/Icon/FileTray'

export default ({navigation}) => {
    const [isLoading, setIsLoading]= useState(true)
    const { authenticationData } = useContext(AuthContext)
    const [data, setData] = useState([])
    const [ contador, setContador ] = useState()

    useEffect(() => {
        getNotifications(authenticationData.uid).then(results => {
            setData(results)
            setContador(results.data.length)
        })
        .catch(err => console.log(err))
        .finally(()=>setIsLoading(prev => !prev))
    }, [])


    return (
        <View style={styles.container}>
            {isLoading ?
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="#38bdf8"/>
                </View>
                :
                <View style={styles.wrapper}>
                    {contador > 0 ?
                        <NotificationFlatList notificactions={data} navigation={navigation}></NotificationFlatList>
                        :
                        <EmptyStateMessage
                            icon={<FileTray size={32} color={"#9ca3af"}></FileTray>}
                            subject={"notificaciones"}>
                        </EmptyStateMessage>
                    }
                </View>
            }
        </View>
    )
}