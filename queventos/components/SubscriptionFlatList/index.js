import { FlatList } from "react-native";
import Subscription from "../Subscription"

export default ({subscriptions})=>{

    const renderSubscription = ({item})=>{

        return (
            <Subscription subscription={item}/>
        )
    }

    return (
        <FlatList
            data={subscriptions}
            renderItem={renderSubscription}
        />
    )
}