
//Modules
import React, { FC, useEffect, useState } from 'react';
import { StyleSheet, View, ActivityIndicator, Alert, FlatList, Text } from 'react-native';

//Components
import CaruselCards from '../../componets/cards/CaruselCards';

//Constants
import { COLORS } from '../../helpers/constants';


interface Props {
    data: Array,
    action: Function
}

const CaruselList: FC<Props> = ({ data, action }) => {
    return (
        <FlatList
            data={data}
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled
            horizontal
            contentContainerStyle={styles.caruselScroll}
            keyExtractor={({ item, key }) => key}
            renderItem={({ item, key }) =>
                <CaruselCards
                    key={key}
                    title={item.title}
                    author={item.author}
                    date={item.publishedAt}
                    action={() => action(item.url)}
                />
            }
        />


    );
};

const styles = StyleSheet.create({
    caruselScroll: {
        padding: 15,
      },
});

export default CaruselList;
