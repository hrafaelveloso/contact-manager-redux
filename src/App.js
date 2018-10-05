import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header branding="Contact Manager" />
                <Contact
                    name="Hélder Veloso"
                    email="rafaelcostaveloso@gmail.com"
                    phone="913056888"
                />
                <Contact
                    name="Jorge Bastos"
                    email="jorgepbastos8@gmail.com"
                    phone="914066275"
                />
                <Contact
                    name="Hélder Veloso"
                    email="rafaelcostaveloso@gmail.com"
                    phone="913056888"
                />
            </div>
        );
    }
}

export default App;
