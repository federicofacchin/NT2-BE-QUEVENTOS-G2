import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignSelf: "stretch",
      backgroundColor: "#fff",
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: '100%',
      height: '80%'
    },
    bubble: {
      flex: 1,
      backgroundColor: 'rgba(255,255,255,0.7)',
      paddingHorizontal: 18,
      paddingVertical: 12,
      borderRadius: 20,
    }
  });

export default styles