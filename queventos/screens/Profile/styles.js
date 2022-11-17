import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignSelf: "stretch",
      backgroundColor: "#fff",
      padding: 16
    },
    wrapper: {
      flex: 1,
      alignSelf: "stretch",
    },
    containedButtonWrapper: {
        marginTop: 32,
        alignSelf: "flex-start",
        position: "relative"
    },
    loader: {
      flex: 1,
      alignSelf: "stretch",
      justifyContent: "center",
      position: 'absolute',
      top:"25%",
      right: 0,
      left: 0,
      zIndex: 10
    }
  });

export default styles