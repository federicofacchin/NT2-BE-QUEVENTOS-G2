import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 16,
        paddingRight: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#e5e7eb"
    },
    title: {
      fontSize: 16,
      fontWeight: 700,
      lineHeight: 24,
      color: "#111827"
    },
    description: {
        marginTop: 8,
        marginBottom: 16,
        color: "#374151"
    },
    metaContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 4,
        marginBottom: 4,
    },
    date: {
        marginLeft: 8,
    },
    location: {
        marginLeft: 8,
        fontWeight: 600,
        color: "#0ea5e9"
    }
  });

export default styles