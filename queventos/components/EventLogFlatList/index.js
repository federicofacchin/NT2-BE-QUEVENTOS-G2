import { FlatList } from "react-native";
import Event from "../Event";

export default ({events})=>{

    //console.log(events)

    const renderEvent = ({item})=>{

        return (
            <Event event={item}/>
        )
    }

    return (
        <FlatList
            data={events}
            renderItem={renderEvent}
        />
    )
}