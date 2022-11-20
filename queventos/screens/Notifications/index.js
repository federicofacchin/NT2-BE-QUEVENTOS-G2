import { useState, useEffect, useContext } from 'react'
import { View , Button} from 'react-native'
import styles from './styles'
import { getNotifications } from '../../services/notifications'
import NotificationFlatList from '../../components/NotificationFlatList'
import AuthContext from '../../globals/AuthContext'


export default ()=> {

    const { authenticationData } = useContext(AuthContext)
    const [data, setData] = useState([])

    useEffect(()=>{
        getNotifications(authenticationData.uid).then(data => {
            setData(data)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <View style={styles.container}>
           <NotificationFlatList notificactions={data}></NotificationFlatList>
        </View>
    )
}