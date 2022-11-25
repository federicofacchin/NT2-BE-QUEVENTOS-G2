import { useState, useEffect, useContext } from 'react'
import { View , Button, ActivityIndicator } from 'react-native'
import styles from './styles'
import { getNotifications } from '../../services/notifications'
import NotificationFlatList from '../../components/NotificationFlatList'
import AuthContext from '../../globals/AuthContext'




export default ()=> {
    const [isLoading, setIsLoading]= useState(true)
    const { authenticationData } = useContext(AuthContext)
    const [data, setData] = useState([])

    useEffect(()=>{
        getNotifications(authenticationData.uid).then(data => {
            setData(data)
        })
        .catch(err => console.log(err))
        .finally(()=>setIsLoading(prev => !prev))
    }, [])

    return (
        <View style={styles.container}>
            {isLoading? <View style= {styles.loader}><ActivityIndicator size="large"
            color="#38bdf8"
            /></View>:
           <NotificationFlatList notificactions={data}></NotificationFlatList>}
        </View>
    )
}