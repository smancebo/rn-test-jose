

//Modules
import React, { FC } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

//Constants
import { COLORS } from '../../helpers/constants';


interface Props {
    title: string,
    id: string,
    description: string,
    languaje: string,
    action: Function,
    key: number
}


const SourceCard: FC<Props> = ({ title, id, description, languaje, action, key }: Props) => {
    return (
        <TouchableOpacity
            key={key}
            style={styles.container}
            onPress={action ? (e) => action(e) : () => console.log("action")}
        >
            <Text style={styles.title}>{title} - {languaje}</Text>
            <Text style={styles.description}>{description}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: COLORS.white,
        padding: 10
    },
    title: {
        fontSize: 14,
        fontWeight: "bold",
        color: COLORS.black
    },
    wrapper: {
        marginTop: 30
    },
    description: {
        fontSize: 13,
        marginBottom: 5
    },
});

export default SourceCard;
