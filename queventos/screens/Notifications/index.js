import { useState, useEffect, useContext } from 'react'
import { View , Button} from 'react-native'
import styles from './styles'
import notifications from '../../services/notifications'
import NotificationFlatList from '../../components/NotificationFlatList'
import AuthContext from '../../globals/AuthContext'

//const authenticationData = useContext(AuthContext)

export default ()=> {
    const [data, setData] = useState([])

    useEffect(()=>{
        setData(notifications)
        //console.log(authenticationData)
    }, [])
    
    /*console.log(data[0])*/

    return (
        <View style={styles.container}>
           <NotificationFlatList notificactions={notifications}></NotificationFlatList>
        </View>
    )
}