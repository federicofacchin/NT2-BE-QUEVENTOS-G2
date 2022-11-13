import { Flex } from 'native-base';
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 16,
        paddingRight: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#e5e7eb",
        flexDirection : 'row',
        alignItems: 'center',
    },
    title: {
      fontSize: 16,
      fontWeight: 700,
      lineHeight: 24,
      color: "#111827"
    },
    subtitle: {
        marginTop: 8,
        marginBottom: 16,
        color: "#374151"
    },
    data: {
        flex: 1,

    },

  });

export default styles