import { TextInput, Text, View, StyleSheet } from 'react-native';
import styles from './styles'


export default ({label, layout, onChangeHandler, isSecure, helperText}) => {

    return (
        <View style={layout}>
          <Text style={styles.label}>{label}</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={isSecure}
            onChangeText={text => onChangeHandler(text)}
          />
          { helperText ? <Text style={styles.helperText}> {helperText} </Text> : null }
        </View>
    );
  };
  

  