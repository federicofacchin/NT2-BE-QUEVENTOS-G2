import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignSelf: "stretch",
      backgroundColor: "#fff",
      padding: 16
    },
    mediaContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 56
    },
    formContainer: {
      marginTop: 32
    },
    alertContainer: {
      marginBottom: 16
    },
    buttonWrapper: {
      position: "relative"
    },
    loader: {
      position: 'absolute',
      top:"25%",
      right: 0,
      left: 0,
      zIndex: 10
    },
    footer: {
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

export default styles