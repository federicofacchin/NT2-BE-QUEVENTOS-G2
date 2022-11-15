import Constants from 'expo-constants';
import { useState, useEffect } from 'react'
import { ScrollView, View, Button, Text, ActivityIndicator } from 'react-native'
import styles from './styles'
import Logo from '../../components/Logo'
import Title from '../../components/Title'
import Alert from '../../components/Alert';
import Input from '../../components/Input'
import GhostButton from '../../components/GhostButton'
import { auth } from "../../services/firebase"
import { signIn } from "../../services/auth"
import helper from '../../helpers';

const Login = ({navigation})=> {

    const [user, setUser] = useState({})
    const [ notValid, setNotValid ] = useState(true)

    useEffect(()=>{

        const isValid =
            user.email && user.password ? 
            helper.emailValidator(user.email)
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
    //console.log(signIn)
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
                        label={"Email"}
                        onChangeHandler={text => setUser({...user, email: text})}
                    />
                    <Input
                        label={"Contraseña"}
                        layout={{marginTop: 24}}
                        onChangeHandler={text => setUser({...user, password: text})}
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
                    title="Iniciar sesión"
                    disabled={ isLoading ? true : notValid}
                    
                    onPress= {()=> {

                        setIsLoading(prev => !prev)

                        signIn(auth, user.email, user.password)
                        .catch(err => setAlertMessage(err.message))
                        .finally(()=> {
                            setIsLoading(prev => !prev)
                        })
                    }
                    }
                />
                </View>
                
                <GhostButton
                    supportingText={"¿No tenés cuenta?"}
                    action={"Creá una"}
                    onPress={() => { !isLoading ? navigation.navigate('SignUp') : null }
                }
                />
            </View>
        </View>
    )
}

export default Login