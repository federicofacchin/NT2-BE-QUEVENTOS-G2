import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignSelf: "stretch",
      backgroundColor: "#fff",
      alignItems: 'center',
      justifyContent: 'center',
      position: "relative",
      marginTop: Constants.statusBarHeight
    },
    map: {
      width: '100%',
      height: '80%',
      flex: 1
      
    },
    bubble: {
      flex: 1,
      backgroundColor: 'rgba(255,255,255,0.7)',
      paddingHorizontal: 18,
      paddingVertical: 12,
      borderRadius: 20,
    },
    loader: {
      flex: 1,
      alignSelf: "stretch",
      justifyContent: "center",
      al: "center",
      position: 'absolute',
      top:"50%",
      right: 0,
      left: 0,
      zIndex: 10
    }
  });

export default styles