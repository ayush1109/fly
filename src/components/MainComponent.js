import React, { Component} from 'react';
import About from './AboutComponent';
import CheckIn from './CheckInComponent';
import Header from './HeaderComponent';
import Heading from './HeadingComponent';
import TextOnImage from './TextOnImageComponent';
import Service from './ServiceComponent';
import Gallery from './GalleryComponent';
import Things from './ThingsToDoComponent';
import Contact from './ContactComponent';
import Maps from './MapComponent';
class Main extends Component {
    render() {
        return (
            <div>
            <Header />
            <Heading />
            <CheckIn />
            <About />
            <TextOnImage />
            <Service />
            <Gallery />
            <Things />
            <Contact />
            <Maps />
            </div>
        );
    }
}

export default Main;