import React from 'react';
import styled from 'styled-components/native';

import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
const styles = StyleSheet.create({
    styledImage: {
        width: 175,
        height: 220,
        margin: 5,
        top: 30,
        borderRadius: 15,
        zIndex: 0
    },
    styledText: {
        zIndex: 1,
        position: 'absolute',
        fontWeight: 'bold',
        display: 'flex',
        textAlign: 'center',
        fontSize: 35,
        width: 180,
        height: 220,
        padding: 10,
        left: 5,
        top: 100,
        color: 'white',
        position: 'absolute'
    },
    styledTextHow: {
        zIndex: 1,
        position: 'absolute',
        fontWeight: 'bold',
        display: 'flex',
        textAlign: 'center',
        fontSize: 35,
        width: 180,
        height: 220,
        padding: 10,
        left: 5,
        top: 100,
        color: '#EE3282',
        position: 'absolute'
    }
});
const HomeButton = props => {
    if (props.text === 'HOW TO PLAY') {
        return (
            <TouchableOpacity onPress={props.onPress}>
                <View>
                    <Text style={styles.styledTextHow}>{props.text}</Text>
                    <Image source={props.source} style={styles.styledImage} />
                </View>
            </TouchableOpacity>
        );
    } else {
        return (
            <TouchableOpacity onPress={props.onPress}>
                <View>
                    <Text style={styles.styledText}>{props.text}</Text>
                    <Image source={props.source} style={styles.styledImage} />
                </View>
            </TouchableOpacity>
        );
    }
};
export default HomeButton;
