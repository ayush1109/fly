import React, { Component } from 'react';
import {Map} from '@joeattardi/react-mapquest-static-map';
class Maps extends Component {
    render() {
        return (
            <div id="map">
                <Map apiKey="vxsAtWAQTAWYpeH3bfkqDnMLT1Bm6BS1" center="Boston, MA" width="1500" height="500" />
            </div>
        );
    }
}

export default Maps;