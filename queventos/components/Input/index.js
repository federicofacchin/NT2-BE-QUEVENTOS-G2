import { TextInput, Text, View, StyleSheet } from 'react-native';
import styles from './styles'


export default ({label, layout, isSecure}) => {

    return (
        <View style={layout}>
          <Text style={styles.label}>{label}</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={isSecure}
          />
        </View>
    );
  };
  

  