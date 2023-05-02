import { Button, Image, StyleSheet, Text, View } from 'react-native';
import MapView, { Callout, Marker } from "react-native-maps";
import React, { useState } from "react";
import InfoCard from "./components/InfoCard";

const INITIAL_HM_LATITUDE = 48.15346478578679;
const INITIAL_HM_LONGITUDE = 11.552735633537765;

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
    kartoffel: {
        latitude: 48.15362643995874,
        longitude: 11.55443682687525,
    }
};
export default function App() {
    const [dragCoord, setDragCoord] = useState(coordinates.hmMensa);
    const [kartoffelSelected, setKartoffelSelected] = useState(false);
    const [hmSelected, setHmSelected] = useState(false);

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
                    onSelect={() => setHmSelected(true)}
                    onDeselect={() => setHmSelected(false)}
                />

                {/*draggable Marker*/}
                <Marker
                    draggable
                    pinColor="blue"
                    coordinate={dragCoord}
                    onDragEnd={e => {
                        setDragCoord(e.nativeEvent.coordinate);
                    }}
                />

                {/*Custom Callout*/}
                <Marker coordinate={coordinates.tramHaltestelle} pinColor="yellow" onSelect={() => console.log("SELECTED")}
                        onPress={() => console.log("SELECTED2")}
                >
                    {/*"tooltip" needed for Android, otherwise Button is not clickable*/}
                    <Callout>
                        <Text>Tramhaltestelle</Text>
                        <Button title={"press me"}/>
                        {/*<Text style={{height: 100}}><Image style={{height: 50}} source={require("./assets/Logo_Muenchen_Quadrat.png")} resizeMode={"contain"}/></Text>*/}
                    </Callout>
                </Marker>

                <Marker
                    coordinate={coordinates.kartoffel}
                    onSelect={() => setKartoffelSelected(true)}
                    onDeselect={() => setKartoffelSelected(false)}
                >
                    <Image source={require("./assets/kartoffel.png")} style={{height: 35, resizeMode: 'contain'}} />
                </Marker>
            </MapView>
            {kartoffelSelected && (
                <InfoCard image={require('./assets/kartoffel_essen.jpg')} title={"Patatez&Kumpir"} description={"Dachauer Straße 149\n80335 München"} showButton />
            )}
            {hmSelected && (
                <InfoCard image={require('./assets/dm_Lothstrasse64_Haupteingang_2011.jpg')} title={"Hochschule München"} description={"Lothstraße 64\n80335 München"}/>
            )}
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
