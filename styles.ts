import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    calloutContainer: {
        zIndex: 1000,
        height: 100,
        width: 100,
        position: 'absolute',
        pointerEvents: 'box-none',
    },
    callout: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'transparent',
        borderWidth: 1,
    },
    calloutTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    calloutDescription: {
        fontSize: 12,
        marginTop: 5,
    },
    calloutButtonContainer: {
        marginTop: 10,
    },
    calloutButton: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
    map: {
        height: '100%',
        width: '100%'
    }
});