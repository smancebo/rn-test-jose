
//Modules
import React, { FC, useEffect, useState } from 'react';
import { StyleSheet, View, ActivityIndicator, Alert, FlatList, Text } from 'react-native';

//Components
import SourceCard from '../../componets/cards/SourceCard';

//Constants
import { COLORS } from '../../helpers/constants';


interface Props {
    data: Array,
    action: Function
}

const SourceList: FC<Props> = ({ data, action }) => {
    return (
        <FlatList
            data={data}
            keyExtractor={({ item, key }) => key}
            renderItem={({ item, key }) =>
                <SourceCard
                    key={key}
                    title={item.name}
                    id={item.id}
                    description={item.description}
                    languaje={item.language}
                    action={() => action(item.id)}
                />
            }
        />


    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: COLORS.white
    },
    title: {
        fontSize: 18,
        fontWeight: "500",
        marginBottom: 20
    }
});

export default SourceList;
