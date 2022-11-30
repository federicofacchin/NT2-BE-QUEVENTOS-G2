import { TextInput, Text, View } from 'react-native';
import styles from './styles'

export default ({label, layout, placeholder, onChangeHandler, disabled, isSecure, helperText}) => {

    return (
        <View style={layout}>
          <Text style={styles.label}>{label}</Text>
          <TextInput
            style={!disabled ? styles.input: [styles.input, styles.disabled]}
            placeholder={placeholder}
            disabled={disabled}
            secureTextEntry={isSecure}
            onChangeText={text => onChangeHandler(text)}
          />
          { helperText ? <Text style={styles.helperText}> {helperText} </Text> : null }
        </View>
    );
  };
  

  