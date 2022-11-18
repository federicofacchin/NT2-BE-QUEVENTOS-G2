import { useState, useEffect, useContext } from 'react'
import { View, ActivityIndicator, Button} from 'react-native'
import styles from './styles'
import FullPageException from '../../components/FullPageException'
import Input from '../../components/Input'
import { getUser, updateUser } from '../../services/user'
import AuthContext from '../../globals/AuthContext'

export default ()=> {

    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState()
    const [isUpdating, setIsUpdating] = useState(false)
    const {authenticationData, setAuthenticationContext} = useContext(AuthContext) 

    useEffect(()=>{
        console.log(authenticationData)
        getUser(authenticationData.uid)
        .then(data => setData(data))
        .catch(err => setErrorMessage(err.message))
        .finally(()=> {
            setIsLoading(prev => !prev)
        })
        
    }, [])

    /*useEffect(()=>{
        console.log("Detectó un cambio: " + data)

    }, [data])*/
    
    const [ notValid, setNotValid ] = useState(false)


    return (
        <View style={styles.container}>
            { isLoading ? 
                <View style={styles.loader}><ActivityIndicator size="large" color="#38bdf8"/></View>
                : 
                <View style={styles.wrapper}>
                    { errorMessage 
                    ?
                    <FullPageException message={errorMessage}/>
                    :
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
                        <View style={styles.containedButtonWrapper}>
                                { isUpdating ?
                                <View style={styles.loader}>
                                    <ActivityIndicator size="small" color="#38bdf8" />
                                </View>
                                : null }
                                <Button 
                                    title="Guardar"
                                    disabled={isUpdating}
                                    onPress={() => { 
                                        setIsUpdating(prev => !prev)
                                        updateUser(data,authenticationData.uid)
                                        .then(result => result)
                                        .catch(err => err)
                                        .finally(()=> {setIsUpdating(prev => !prev)})
                                    }}
                                />

                        </View>
                    </View>
                    }
                </View>
                }
        </View>
   
    )
}