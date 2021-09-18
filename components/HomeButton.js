import React from 'react';
import styled from 'styled-components/native';

import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
const styles = StyleSheet.create({
    styledImage: {
        minWidth: 165,
        maxWidth: '30%',
        height: 185,
        margin: 5,
        borderRadius: 15,
        zIndex: 0,
        top: 30
    },
    styledText: {
        zIndex: 1,
        position: 'absolute',
        fontWeight: 'bold',
        display: 'flex',
        textAlign: 'center',
        fontSize: 30,
        minWidth: 165,
        minHeight: 220,
        padding: 10,
        left: 5,
        top: 70,
        color: 'white',
        position: 'absolute'
    },
    styledTextHow: {
        zIndex: 1,
        position: 'absolute',
        fontWeight: 'bold',
        display: 'flex',
        textAlign: 'center',
        fontSize: 30,
        minWidth: 165,
        minHeight: 220,
        padding: 10,
        left: 5,
        top: 70,
        color: '#EE3282',
        position: 'absolute'
    }
});

const HomeButton = props => {
    if (props.text.toLowerCase() === 'play') {
        return (
            <TouchableOpacity onPress={props.onPress}>
                <View>
                    <Text style={styles.styledTextHow}>{props.text}</Text>
                    <Image source={props.source} style={styles.styledImage} />
                </View>
            </TouchableOpacity>
        );
    } else if (props.text.toLowerCase() === 'how to play') {
        return (
            <TouchableOpacity onPress={props.onPress}>
                <View>
                    <Text style={styles.styledText}>{props.text}</Text>
                    <Image source={props.source} style={styles.styledImage} />
                </View>
            </TouchableOpacity>
        );
    } else if (props.text.toLowerCase() === 'cmdtoo website') {
        return (
            <TouchableOpacity onPress={props.onPress}>
                <View>
                    <Image
                        source={require('../assets/genconnect_ombre_favorites.png')}
                        style={styles.styledImage}
                    />
                </View>
            </TouchableOpacity>
        );
    } else if (props.text.toLowerCase() === 'survey') {
        return (
            <TouchableOpacity onPress={props.onPress}>
                <View>
                    <Image
                        source={require('../assets/genconnect_ombre_allaboutme.png')}
                        style={styles.styledImage}
                    />
                </View>
            </TouchableOpacity>
        );
    } else if (props.text.toLowerCase() === 'home') {
        return (
            <TouchableOpacity onPress={props.onPress}>
                <View>
                    <Image
                        source={require('../assets/genconnect_ombre_innerme.png')}
                        style={styles.styledImage}
                    />
                </View>
            </TouchableOpacity>
        );
    }
};
export default HomeButton;
