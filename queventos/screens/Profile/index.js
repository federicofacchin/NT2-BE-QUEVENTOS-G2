import { useState, useEffect } from 'react'
import { View, ScrollView, Button} from 'react-native'
import {userData} from '../../services/profile'
import styles from './styles'
import Input from '../../components/Input'



export default ()=> {

    const [data, setData] = useState([])

    useEffect(()=>{
        setData(userData)
    }, [])
    
    const [ notValid, setNotValid ] = useState(false)

    return (
        <View style={styles.container}>
            <ScrollView>
                <View >
                    <Input
                        label={"Nombre"}
                        placeholder={data.name}
                        onChangeHandler={text => setData({...data, name: text})}
                    />
                    <Input
                        label={"Email"}
                        layout={{marginTop: 24}}
                        disabled={true}
                        placeholder={data.email}
                        onChangeHandler={text => false}
                        
                    />
                    <View style={styles.button}>
                        <Button 
                            title="Guardar"
                            disabled={notValid}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
   
    )
}