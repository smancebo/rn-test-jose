//Modules
import React, { FC } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    ActivityIndicator,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { COLORS } from '../helpers/constants';


const WebViews: FC<Props> = (props) => {
    return (
        <SafeAreaView
            style={styles.container}
        >
            <WebView
                source={{ uri: props.route.params.url }}
                scalesPageToFit
                nativeConfig
                javaScriptEnabled
                renderLoading={() => <ActivityIndicator size={'large'} color={COLORS.black} />}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

});

export default WebViews;
