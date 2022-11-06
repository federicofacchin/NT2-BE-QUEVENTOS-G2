import { useState, useEffect } from 'react'
import { View } from 'react-native'
import styles from './styles'
import notifications from '../../services/notifications'
import NotificationFlatList from '../../components/NotificationFlatList'

export default ()=> {
    const [data, setData] = useState([])

    useEffect(()=>{
        setData(notifications)
    }, [])
    
    /*console.log(data[0])*/

    return (
        <View style={styles.container}>
           <NotificationFlatList notificactions={notifications}></NotificationFlatList>
        </View>
    )
}