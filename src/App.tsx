import React from 'react';
import './App.css'; // Import globalnych stylów

// Zaimportuj swoje komponenty
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Stats from './components/Stats/Stats';
import TechStack from './components/TechStack/TechStack';
import PortfolioBuild from './components/PortfolioBuild/PortfolioBuild';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <main> {/* Opcjonalnie: opakuj główne sekcje w <main> */}
                <Hero />
                <Stats />
                <TechStack />
                <PortfolioBuild />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;