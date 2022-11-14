import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    label: {
      fontWeight: 600,
    },
    input: {
      marginTop: 6,
      paddingLeft: 13,
      paddingRight: 1,
      height: 40,
      borderColor: '#d1d5db',
      borderWidth: 1,
      borderRadius: 6,
    },
    helperText: {
      marginTop: 4,
      fontSize: 12,
      lineHeight: 24,
      color: "#6b7280"
    },
    disabled: {
      color: "#6b7280",
      backgroundColor: "#f3f4f6"
    }

  });

export default styles