import { Image, StyleSheet, Text, View } from 'react-native';
import MapView, { Callout, Marker } from "react-native-maps";
import React, { useState } from "react";

const INITIAL_HM_LATITUDE = 48.15346478578679;
const INITIAL_HM_LONGITUDE = 11.552735633537765;
export default function App() {
    const initialRegion = {
        latitude: INITIAL_HM_LATITUDE,
        longitude: INITIAL_HM_LONGITUDE,
        latitudeDelta: 0.008,
        longitudeDelta: 0.008,
    };

    const coordinates = {
        hmMensa: {
            latitude: 48.153861655968925,
            longitude: 11.552529917268192,
        },
        hmRoterWuerfel: {
            latitude: 48.15511112929416,
            longitude: 11.55582507820804,
        },
        tramHaltestelle: {
            latitude: 48.154054356940144,
            longitude: 11.55420352548773,
        },
    };

    const [dragCoord, setDragCoord] = useState(coordinates.hmMensa);

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={initialRegion}
            >
                {/*normaler marker mit HM Logo*/}
                <Marker
                    coordinate={coordinates.hmRoterWuerfel} image={require("./assets/Logo_Muenchen_Quadrat.png")}
                    title="Hello2"
                    description="Desc"
                />

                {/*draggable Marker*/}
                <Marker
                    draggable
                    pinColor="blue"
                    coordinate={dragCoord}
                    onDragEnd={e => {
                        setDragCoord(e.nativeEvent.coordinate);
                        console.log("DRAGGED")
                    }}
                />

                {/*Custom Callout*/}
                <Marker coordinate={coordinates.tramHaltestelle} pinColor="yellow">
                    {/*"tooltip" needed for Android, otherwise Button is not clickable*/}
                    <Callout>
                        <Text>Tramhaltestelle</Text>
                        <Text style={{height: 100}}><Image style={{height: 50}} source={require("./assets/Logo_Muenchen_Quadrat.png")} resizeMode={"contain"}/></Text>
                    </Callout>
                </Marker>
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
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
