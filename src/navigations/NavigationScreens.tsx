import { COLORS } from "../helpers/constants";
import Home from "../views/home";
import WebView from "../views/webview";

export const settingsScreens = [
    {
        name: 'Home',
        screen: Home,
        options: {
            headerTransparent: false,
            headerShown: true,
            headerTitle: "Home",
            headerTintColor: COLORS.white,
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 19,
            },
            headerStyle: {        
                shadowRadius: 0,
                shadowOffset: { height: 0 },
                backgroundColor: COLORS.black
            }
        }
    },
    {
        name: 'WebView',
        screen: WebView,
        options: {
            headerTransparent: false,
            headerShown: true,
            headerTitle: "Information",
            headerTintColor: COLORS.white,
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 19,
            },
            headerStyle: {        
                shadowRadius: 0,
                shadowOffset: { height: 0 },
                backgroundColor: COLORS.black
            }
        }
    }
]

// Common Header Options

export const commonHeaderOptions = {
    headerTransparent: false,
    headerTintColor: COLORS.white,
    headerBackTitleVisible: false,
    headerStyle: {
        backgroundColor: COLORS.black
      },
}