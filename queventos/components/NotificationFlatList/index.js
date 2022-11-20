import { FlatList } from "react-native";
import Notificaction from "../Notificaction";

export default ({notificactions})=>{
    console.log(notificactions.data)
    const renderNotificaction = ({item})=>{

        return (
            <Notificaction notificaction={item}/>
        )
    }

    return (
        <FlatList
            data={notificactions.data}
            renderItem={renderNotificaction}
        />
    )
}