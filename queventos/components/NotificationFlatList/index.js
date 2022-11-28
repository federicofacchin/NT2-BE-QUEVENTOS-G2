import { FlatList } from "react-native";
import Notification from "../Notification";

export default ({notifications, navigation})=>{

        const renderNotificaction = ({item})=>{

        return (
            <Notification notification={item} navigation={navigation}/>
        )
    }

    return (
        <FlatList
            data={notifications}
            renderItem={renderNotificaction}     
        />
    )
}