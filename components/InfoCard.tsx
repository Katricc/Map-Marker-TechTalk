import { StyleSheet, View, Text, ImageSourcePropType, Image, Button } from "react-native";
import React from "react";

type InfoCardProps = {
    image: ImageSourcePropType,
    title: string,
    description: string,
    buttonTitle?: string,
};

const InfoCard = ({ image, title, description, buttonTitle }: InfoCardProps) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image} />
            <View style={styles.descContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
                {buttonTitle && <Button title={buttonTitle}></Button>}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        maxHeight: 400,
        flexDirection: 'column',
        position: 'absolute',
        bottom: 35,
        left: 35,
        right: 35,
        backgroundColor: 'white',
        borderRadius: 15,
        overflow: 'hidden',
    },
    image: {
        resizeMode: "cover",
        width: '100%',
        height: 200,
    },
    descContainer: {
        padding: 15,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
    },
    description: {
        marginTop: 10,
        marginBottom: 10,
        color: 'gray',
    }
});

export default InfoCard;