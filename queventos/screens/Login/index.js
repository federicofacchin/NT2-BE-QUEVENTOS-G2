import Constants from 'expo-constants';
import { useState, useEffect } from 'react'
import { ScrollView, View, Button } from 'react-native'
import styles from './styles'
import Logo from '../../components/Logo'
import Title from '../../components/Title'
import Input from '../../components/Input'
import GhostButton from '../../components/GhostButton'
import { auth } from "../../services/firebase"
import { signIn, createUser } from "../../services/auth"
import { emailValidator } from '../../helpers';

export default ()=> {

    const [ hasAccount, setHasAccount ] = useState(true)
    const [ notValid, setNotValid ] = useState(true)

    const [user, setUser] = useState({})
    const [newUser, setNewUser] = useState({})


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
                {
                    hasAccount
                    ?
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
                    :
                    <View style={styles.formContainer}>
                        <Input
                            label={"Nombre"}
                            onChangeHandler={text => setNewUser({...newUser, name: text})}
                        />
                        <Input
                            label={"Email"}
                            layout={{marginTop: 24}}
                            onChangeHandler={text => setNewUser({...newUser, email: text})}
                        />
                        <Input
                            label={"Contraseña"}
                            layout={{marginTop: 24}}
                            onChangeHandler={text => setNewUser({...newUser, password: text})}
                            helperText={"Mínimo 8 caracteres"}
                            isSecure={true}
                        />
                    </View>
                }
            </ScrollView>
            <View>
                {
                    hasAccount
                    ?
                    <View>
                        <Button
                            title="Iniciar sesión"
                            onPress={()=> {
                                signIn(auth, user.email, user.password)
                            }
                            }
                        />
                        <GhostButton
                            supportingText={"¿No tenés cuenta?"}
                            action={"Creá una"}
                            onPress={()=> setHasAccount(prev => !prev)}
                        />
                    </View>
                    :
                    <View>
                        <Button
                            title="Crear cuenta"
                            onPress={()=> {
                                createUser(auth, newUser.email, newUser.password)
                            }}
                        />
                        <GhostButton
                            supportingText={"¿Ya tenés una cuenta?"}
                            action={"Iniciá sesión"}
                            onPress={()=> setHasAccount(prev => !prev)}
                        />
                    </View>
                }
            </View>
        </View>
    )
}