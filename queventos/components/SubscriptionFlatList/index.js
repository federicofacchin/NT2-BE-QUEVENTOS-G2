import { FlatList } from "react-native";
import Subscription from "../Subscription"

export default ({subscriptions, navigation})=>{

    const renderSubscription = ({item})=>{

        return (
            <Subscription subscription={item} navigation={navigation}/>
        )
    }

    return (
        <FlatList
            data={subscriptions}
            renderItem={renderSubscription}
        />
    )
}