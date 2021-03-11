

//Modules
import React, { FC } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import moment from 'moment';
import "moment/locale/es"

//Constants
import { COLORS } from '../../helpers/constants';


interface Props {
    title: string,
    author: string,
    date: string,
    action: Function
}


const CaruselCards: FC<Props> = ({ title, author, date, action }: Props) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={action ? (e) => action(e) : () => console.log()}
        >

            <Image
                source={require("../../assets/images/background14.jpg")}
                style={styles.images}
            />

            <View style={styles.content}>
                <Text numberOfLines={2} style={styles.title}>{title}</Text>

                <View style={styles.wrapper}>
                    <Text style={styles.author}>{author}</Text>
                    <Text style={styles.date}>{moment(date).locale('es').format("LL")}</Text>
                </View>
            </View>

        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 420,
        elevation: 6,
        shadowColor: 'black',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.4,
        backgroundColor: COLORS.white,
        marginHorizontal: 20,

    },
    images: {
        width: "100%",
        height: 100
    },
    content: {
        padding: 10,
        justifyContent: "space-between",
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        color: COLORS.black
    },
    wrapper: {
        marginTop: 30,
    },
    author: {
        fontSize: 18,
        marginBottom: 5
    },
    date: {
        color: COLORS.darkGrey
    }
});

export default CaruselCards;
