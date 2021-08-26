import React from 'react';
import { Image } from 'react-native';
import ellipse from '../assets/BackgroundGeometry/Ellipse.png';
import polygon from '../assets/BackgroundGeometry/Polygon.png';
import rectangle from '../assets/BackgroundGeometry/Rectangle.png';
import star from '../assets/BackgroundGeometry/Star.png';

export default class GeometryBackground extends React.Component {
    render() {
        return (
            <>
                <Image source={ellipse} alt="Ellipse" style={{ position: 'absolute', left: 0, top: '40%' }} />
                <Image source={polygon} alt="Ellipse" style={{ position: 'absolute', right: 0, top: '8%' }} />
                <Image source={rectangle} alt="Ellipse" style={{ position: 'absolute', right: 0, bottom: 0 }} />
                <Image source={star} alt="Ellipse" style={{ position: 'absolute', left: 0, top: '-9%' }} />
            </>
        );
    }
}