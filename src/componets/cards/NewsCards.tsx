

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


const NewsCards: FC<Props> = ({ title, author, date, action }: Props) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={action ? (e) => action(e) : () => console.log("action")}
        >

            <Text style={styles.header}>BASED ON YOUR READING HISTORY</Text>

            <View style={styles.content}>

                <View style={styles.wrapper}>
                    <Text style={styles.title}>{title}</Text>

                    <View style={styles.authorContainer}>
                        <Text numberOfLines={2} ellipsizeMode={"tail"} style={styles.author}>{author}</Text>
                        <Text style={styles.date}>{moment(date).locale('es').format("LL")}</Text>
                    </View>
                </View>

                <Image
                    source={require("../../assets/images/background14.jpg")}
                    style={styles.images}
                />
            </View>

        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: COLORS.white,
        borderBottomWidth: 1,
        borderColor: COLORS.grey,
        padding: 10,
    },
    images: {
        width: 60,
        height: 60
    },
    header: {
        fontSize: 15,
        color: COLORS.darkGrey
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: COLORS.black,
        marginTop: 20,
        width: 280
    },
    wrapper: {
        // marginTop: 30
    },
    authorContainer: {
        marginTop: 50
    },
    author: {
        fontSize: 18,
        marginBottom: 5
    },
    date: {
        color: COLORS.darkGrey
    }
});

export default NewsCards;
