import { FlatList } from "react-native";
import Notificaction from "../Notificaction";

export default ({notificactions, navigation})=>{
   // console.log(notificactions.data)
       const renderNotificaction = ({item})=>{

        return (
            <Notificaction notificaction={item} navigation={navigation}/>
             )
    }

    return (
        <FlatList
            data={notificactions.data}
            renderItem={renderNotificaction}     
        />
    )
}