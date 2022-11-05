import { useState, useEffect } from 'react'
import { ScrollView, View, Button } from 'react-native'
import styles from './styles'
import Logo from '../../components/Logo'
import Title from '../../components/Title'
import Input from '../../components/Input'
import GhostButton from '../../components/GhostButton'


export default ()=> {

    const [ notValid, setNotValid ] = useState(true)
    const [ hasAccount, setHasAccount ] = useState(false)

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
                        />
                        <Input
                            label={"Contraseña"}
                            layout={{marginTop: 24}}
                            isSecure={true}
                        />
                    </View>
                    :
                    <View style={styles.formContainer}>
                        <Input
                            label={"Nombre"}
                        />
                        <Input
                            label={"Teléfono"}
                            layout={{marginTop: 24}}
                            isSecure={true}
                        />
                        <Input
                            label={"Email"}
                            layout={{marginTop: 24}}
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