import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

const RedScreen = () => {
    return (
            <View style={styles.container}>
            <Text style={styles.welcome}>
            Red Screen
            </Text>
            </View>
            );
}

const styles = StyleSheet.create({
                                 container: {
                                 flex: 1,
                                 justifyContent: 'center',
                                 alignItems: 'center',
                                 backgroundColor: 'red',
                                 },
                                 welcome: {
                                 fontSize: 20,
                                 textAlign: 'center',
                                 margin: 10,
                                 color: '#ffffff',
                                 },
                                 });

export default RedScreen;


