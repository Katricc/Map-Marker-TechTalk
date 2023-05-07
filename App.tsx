import { Button, Image, ImageSourcePropType, Text, View } from 'react-native';
import MapView, { Callout, Marker } from "react-native-maps";
import React, { useState } from "react";
import InfoCard from "./components/InfoCard";
import { infoCards, initialRegion } from "./constants/constants";
import { styles } from "./styles";

interface InfoCardState {
    image: ImageSourcePropType,
    title: string,
    description: string,
    buttonTitle?: string,
}

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
    },
    hmBib: {
        latitude: 48.15384011013381,
        longitude: 11.552294275901358
    }
};

const App = () => {
    const [selectedCard, setSelectedCard] = useState<InfoCardState | null>(null);

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={initialRegion}
            >
                {/*Marker mit Titel und Beschreibung (Callout)*/}
                <Marker
                    coordinate={coordinates.hmBib}
                    title="Bibliothek der Hochschule München"
                    description="Bibliothek"
                />

                {/*Marker mit HM Logo*/}
                <Marker
                    coordinate={coordinates.hmRoterWuerfel}
                    image={require("./assets/Logo_Muenchen_Quadrat.png")}
                    onSelect={() => setSelectedCard(infoCards.hmRoterWuerfel)}
                    onDeselect={() => setSelectedCard(null)}
                />

                {/*draggable Marker*/}
                <Marker
                    draggable
                    pinColor="blue"
                    coordinate={coordinates.hmMensa}
                    onDragEnd={e => {
                        alert(`${e.nativeEvent.coordinate.longitude} ${e.nativeEvent.coordinate.latitude}`);
                    }}
                />

                {/*Benutzerdefiniertes Callout*/}
                <Marker
                    coordinate={coordinates.tramHaltestelle}
                    pinColor="yellow"
                >
                    <Callout>
                        <Text>Tramhaltestelle</Text>
                        <Button title={"press me"} />
                    </Callout>
                </Marker>

                {/*Marker mit Image als Child Component*/}
                <Marker
                    coordinate={coordinates.kartoffel}
                    onSelect={() => setSelectedCard(infoCards.kartoffel)}
                    onDeselect={() => setSelectedCard(null)}
                    onPress={() => setSelectedCard(infoCards.kartoffel)}
                >
                    <Image
                        source={require("./assets/kartoffel.png")}
                        style={{ height: 35, width: 35 }}
                    />
                </Marker>
            </MapView>
            {selectedCard && (
                <InfoCard
                    image={selectedCard.image}
                    title={selectedCard.title}
                    description={selectedCard.description}
                    buttonTitle={selectedCard.buttonTitle}
                />
            )}
        </View>
    );
}

export default App;
