import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignSelf: "stretch",
      backgroundColor: "#fff",
      padding: 16
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
    square: {
        marginTop: 16,
        width: 56,
        height: 56,
        backgroundColor: '#f3f4f6',
        borderRadius: 8,        
        paddingVertical: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
      fontSize: 24,
      fontWeight: "700",
      color: "#111827",
      marginTop: 16,
      marginBottom: 8
    },
    description: {
      marginBottom: 16
    },
    eventFeed: {
      marginTop: 8
    },
    placeholder: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 24,
      paddingBottom: 24,
    },
    muted: {
      color: "#9ca3af"
    }
  });

export default styles