import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      position: "absolute",
      left: 16,
      right: 16,
      bottom: 16,
      padding: 16,
      borderColor: '#e5e7eb',
      borderWidth: 1,
      borderRadius: 8
    },
    meta: {
      marginBottom: 16,
    },
    title: {
      fontWeight: "700",
      fontSize: 18,
      marginBottom: 4
    },
    description: {
      color: "#9ca3af"
    },
    actionsContainer: {
      flex: 1,
      flexDirection: "row",
      alignSelf: "stretch",
    },
    closePreviewButton: {
      position: "absolute",
      top: 0,
      right: 0,
      paddingLeft: 16,
      paddingTop: 12,
      paddingBottom: 12,
      paddingRight: 16
    },
    action: {
      flex: 1,
      paddingLeft: 8,
      paddingTop: 12,
      paddingRight: 8,
      paddingBottom: 12,
      alignItems: "center",
      backgroundColor: "#f3f4f6",
      color: "#0ea5e9",
      borderRadius: 24,
    }
  });

export default styles