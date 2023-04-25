import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from "react-native-maps";

const INITIAL_HM_LATITUDE = 48.15386371978465;
const INITIAL_HM_LONGITUDE = 11.55259067796154;
export default function App() {
    const initialRegion = {
        latitude: INITIAL_HM_LATITUDE,
        longitude: INITIAL_HM_LONGITUDE,
        latitudeDelta: 0.008,
        longitudeDelta: 0.008,
    };

    const hmCoordinates = {
        latitude: 48.15386371978465,
        longitude: 11.55259067796154,
    };

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={initialRegion}
            >
                <Marker coordinate={hmCoordinates} image={require("./assets/Logo_Muenchen_Quadrat.png")} />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        height: '100%',
        width: '100%',
    }
});
