import { FlatList } from "react-native";
import Notificaction from "../Notificaction";

export default ({notificactions})=>{

    const renderNotificaction = ({item})=>{

        return (
            <Notificaction notificaction={item}/>
        )
    }

    return (
        <FlatList
            data={notificactions}
            renderItem={renderNotificaction}
        />
    )
}