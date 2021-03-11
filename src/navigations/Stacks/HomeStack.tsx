// Modules
import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

// Views

import SourceSelector from '../../views/sourceSelector';

// Options

import { commonHeaderOptions, settingsScreens } from '../NavigationScreens';

// Home Stack ===================================================================================================================

const Stack = createStackNavigator();


export default function HomeNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="SourseSelector"
            screenOptions={{ ...commonHeaderOptions }}
        >

            <Stack.Screen
                name="Sourse Selector"
                component={SourceSelector}
            />

            {/* Settings Screens  */}
            {settingsScreens.map((route, i) => {
                return (
                    <Stack.Screen
                        key={i}
                        name={route.name}
                        component={route.screen}
                        options={{
                            ...route.options,
                        }}
                    />
                );
            })}

        </Stack.Navigator>
    );
}