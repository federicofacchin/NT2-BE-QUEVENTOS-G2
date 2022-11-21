import Constants from 'expo-constants';
import { useState, useEffect } from 'react'
import { ScrollView, View, ActivityIndicator, Button } from 'react-native'
import styles from './styles'
import Logo from '../../components/Logo'
import Title from '../../components/Title'
import Input from '../../components/Input'
import Alert from '../../components/Alert';
import GhostButton from '../../components/GhostButton'
import { auth } from "../../services/firebase"
import { createUser } from "../../services/auth"
import helper from '../../helpers';
import { addUser, searchUserByMail } from '../../services/user'


export default ({navigation})=> {
    //const data = {name: "Nico", email: "sistemas.nicolas@gmail.com"}
    //searchUserByMail(data)
    //addUser(data)

    const [user, setUser] = useState({})
    const [ notValid, setNotValid ] = useState(true)
    const passwordLength = 8

    useEffect(()=>{
        
        const isValid =
            user.name && user.email && user.password ? 
            (helper.emailValidator(user.email) && helper.lengthValidator(user.password, passwordLength))
            :
            false

        setNotValid(!isValid)

    }, [user])

    
    const [isLoading, setIsLoading] = useState(false)

    const [alertMessage, setAlertMessage] = useState('')

    // Levanta las variables de entorno de las constantes de expo
    //console.log(Constants.manifest.extra)

    // Importa el archivo donde está la instancia de auth: se lo pasa más abajo a la función del sign in
    //console.log(auth)

    // Importa la función para el sign in que provee firebase 
    //console.log(createUser)


    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.mediaContainer}>
                    <Logo></Logo>
                    <Title text={"Queventos"} layout={{marginTop: 8}}></Title>
                </View>
                    <View style={styles.formContainer}>
                        { alertMessage
                            ?
                            <Alert message={alertMessage}/>
                            : null
                        }
                        <Input
                            label={"Nombre"}
                            onChangeHandler={text => setUser({...user, name: text})}
                        />
                        <Input
                            label={"Email"}
                            layout={{marginTop: 24}}
                            onChangeHandler={text => setUser({...user, email: text})}
                        />
                        <Input
                            label={"Contraseña"}
                            layout={{marginTop: 24}}
                            onChangeHandler={text => setUser({...user, password: text})}
                            helperText={"Mínimo 8 caracteres"}
                            isSecure={true}
                        />
                    </View>
            </ScrollView>
            <View>

            <View style={styles.buttonWrapper}>
            { isLoading ?
            <View style={styles.loader}>
                <ActivityIndicator size="small" color="#38bdf8" />
            </View>
            : null }
            <Button
                title="Crear cuenta"
                disabled={notValid}
                onPress={()=> {

                    setIsLoading(prev => !prev)

                    createUser(auth, user.email, user.password)
                    .then(result => addUser(user))
                    .catch(err => setAlertMessage(err.message))
                    .finally(()=> {
                        setIsLoading(prev => !prev)
                    })
                }}
            />
            </View>
            <GhostButton
                supportingText={"¿Ya tenés una cuenta?"}
                action={"Iniciá sesión"}
                onPress={() => { !isLoading ? navigation.goBack() : null }}
            />
            </View>
        </View>
    )
}