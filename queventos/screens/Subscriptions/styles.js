import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignSelf: "stretch",
      backgroundColor: "#fff",
    },
    wrapper: {
      flex: 1,
      alignSelf: "stretch",
    },
    loader: {
      flex: 1,
      alignSelf: 'stretch',
      justifyContent: 'center',
      position: 'absolute',
      top: '25%',
      right: 0,
      left: 0,
      zIndex: 10,
    },
    footer: {
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

export default styles