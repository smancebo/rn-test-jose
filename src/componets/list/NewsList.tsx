
//Modules
import React, { FC, useEffect, useState } from 'react';
import { StyleSheet, View, ActivityIndicator, Alert, FlatList, Text } from 'react-native';

//Components
import NewsCards from '../../componets/cards/NewsCards';

//Constants
import { COLORS } from '../../helpers/constants';


interface Props {
    data: Array,
    action: Function
}

const NewsList: FC<Props> = ({ data, action }) => {
    return (
        <FlatList
            data={data}
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled
            contentContainerStyle={styles.listScroll}
            keyExtractor={({ item, key }) => key}
            renderItem={({ item, key }) =>
                <NewsCards
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
    listScroll: {
        marginTop: 40,
        paddingBottom: 50
    }
});

export default NewsList;
