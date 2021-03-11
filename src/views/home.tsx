
//Modules
import React, { useEffect, FC, useState } from 'react';
import { StyleSheet, View, ScrollView, FlatList, ActivityIndicator, Text } from 'react-native';


//Components
import CaruselCards from '../componets/cards/CaruselCards';
import NewsCards from '../componets/cards/NewsCards';
import CaruselList from '../componets/list/CaruselList';
import NewsList from '../componets/list/NewsList';

//Constants
import { COLORS } from '../helpers/constants';

const Home: FC<{}> = (props) => {

  const [sourceList, setList] = useState<Array<Object>>([])
  const [caurruselList, setCaruselList] = useState<Array<Object>>([])
  const [isLoading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const source = props.route.params.sourceSelected.articles;
    //Set 3 list on carrusel list
    setCaruselList(source.slice(0, 3))
    setList(source.slice(3));
    setLoading(false)

  }, [])


  const viewNews = (e: any) => {
    props.navigation.navigate("WebView", {
      url: e
    })
  }

  return (
    <ScrollView
      nestedScrollEnabled
      style={styles.container}
    >
      {!isLoading ? (
        <>
          <CaruselList
            data={caurruselList}
            action={(e: any) => viewNews(e)}

          />

          <NewsList
            data={sourceList}
            action={(e: any) => viewNews(e)}
          />

        </>
      ) : (
        <ActivityIndicator size={'large'} />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.grey
  },
  caruselScroll: {
    padding: 15,
  },
  listScroll: {
    marginTop: 40,
    paddingBottom: 50
  }
});

export default Home;
