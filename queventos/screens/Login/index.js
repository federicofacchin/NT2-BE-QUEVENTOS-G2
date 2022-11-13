import Constants from 'expo-constants';
import { useState, useEffect } from 'react'
import { ScrollView, View, Button } from 'react-native'
import styles from './styles'
import Logo from '../../components/Logo'
import Title from '../../components/Title'
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
                <Button
                    title="Iniciar sesión"
                    disabled={notValid}
                    onPress={()=> { signIn(auth, user.email, user.password)}}
                />
                <GhostButton
                    supportingText={"¿No tenés cuenta?"}
                    action={"Creá una"}
                    onPress={() => { navigation.navigate('SignUp') }
                }
                />
            </View>
        </View>
    )
}

export default Login