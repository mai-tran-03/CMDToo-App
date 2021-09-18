import React from 'react';
import styled from 'styled-components/native';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';

const styles = StyleSheet.create({
    styledImage: {
        width: 169,
        height: 207,
        margin: 5,
        top: 30,
        borderRadius: 15,
        zIndex: 0
    }
});

const HomeButton = props => {
    if (props.text.toLowerCase() === 'play') {
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
    } else if (props.text.toLowerCase() === 'how to play') {
        return (
            <TouchableOpacity onPress={props.onPress}>
                <View>
                    <Image
                        source={require('../assets/genconnect_ombre_brightfuture.png')}
                        style={styles.styledImage}
                    />
                </View>
            </TouchableOpacity>
        );
    } else if (props.text.toLowerCase() === 'parent guide') {
        return (
            <TouchableOpacity onPress={props.onPress}>
                <View>
                    <Image
                        source={require('../assets/genconnect_ombre_whatwouldyoudo.png')}
                        style={styles.styledImage}
                    />
                </View>
            </TouchableOpacity>
        );
    } else if (props.text.toLowerCase() === 'parent tips') {
        return (
            <TouchableOpacity onPress={props.onPress}>
                <View>
                    <Image
                        source={require('../assets/genconnect_ombre_dancechallenge.png')}
                        style={styles.styledImage}
                    />
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
