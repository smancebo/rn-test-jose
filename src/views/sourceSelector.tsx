
//Modules
import React, { FC, useEffect, useState } from 'react';
import { StyleSheet, View, ActivityIndicator, Alert, FlatList, Text} from 'react-native';

//Components
import SourcesService from '../api/models/sources.service';
import NewsCards from '../componets/cards/NewsCards';
import SourceCard from '../componets/cards/SourceCard';
import SourceList from '../componets/list/SourceList';

//Constants
import { COLORS } from '../helpers/constants';


const SourceSelector: FC<Props> = (props) => {
    //States
    const [sourceList, setList] = useState<Array<Object>>([])
    const [isLoading, setLoading] = useState<boolean>(true)


    useEffect(() => {
        getSources();
    }, [])


    const getSources = async () => {
        const response = await SourcesService.getAllSources()
        if (response.data) {
            setList(response.data.sources);
            setLoading(false)
        }
    }

    const setSource = async (e: string) => {
        const sourceSelected = await SourcesService.getInfoFromsource(e);
        if (sourceSelected.data) {
            console.log("success", sourceSelected.data);
            props.navigation.navigate("Home", {
                sourceSelected: sourceSelected.data
            })
        } else {
            Alert.alert("Error", "an error has ocurred.")
        }
    }

    return (
        <View style={styles.container}>

        <Text style={styles.title}>Please select the Source you want to use</Text>

            {!isLoading ? (
                <SourceList
                    action={(e: string) => setSource(e)}
                    data={sourceList}
                />

            ) : (
                <ActivityIndicator
                    size={'large'}
                />
            )
            }


        </View>
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

export default SourceSelector;
