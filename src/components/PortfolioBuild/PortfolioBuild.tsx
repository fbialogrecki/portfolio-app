import React, { useState } from 'react';
import styles from './PortfolioBuild.module.css'; // Importujemy style CSS Modules

// Definicja typu dla pojedynczego kroku
interface PortfolioStep {
    id: number;
    title: string;
    description?: string; // Opcjonalny opis
    imageUrl: string; // Ścieżka do obrazka
}

// Dane dla kroków - zastąp prawdziwymi danymi i ścieżkami do obrazków
const stepsData: PortfolioStep[] = [
    { id: 1, title: 'Lorem ipsum dolor sit amet 1', imageUrl: '/images/step1.jpg' },
    { id: 2, title: 'Lorem ipsum dolor sit amet 2', imageUrl: '/images/step2.jpg' },
    { id: 3, title: 'Lorem ipsum dolor sit amet 3', imageUrl: '/images/step3.jpg' },
    { id: 4, title: 'Lorem ipsum dolor sit amet 4', imageUrl: '/images/step4.jpg' },
    // Dodaj więcej kroków zgodnie z potrzebami
];

const PortfolioBuild: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0); // Stan przechowujący indeks aktywnego kroku

    const handleStepClick = (index: number) => {
        setActiveIndex(index);
    };

    const currentStep = stepsData[activeIndex];

    return (
        <section className={styles.portfolioBuildSection}>
            <h2>How I build my portfolio</h2>
            <p className={styles.subtitle}>Step by step</p>

            <div className={styles.contentWrapper}>
                {/* Kontener na obrazek po lewej */}
                <div className={styles.imageContainer}>
                    {/*
            Używamy `key`, aby React wiedział, że obrazek się *zmienia*,
            co pomaga w zastosowaniu przejścia CSS.
            Można też zastosować bardziej zaawansowane techniki z dwoma obrazkami
            i przełączaniem opacity, jeśli samo przejście opacity na jednym
            obrazku nie działa płynnie we wszystkich przeglądarkach.
          */}
                    <img
                        key={currentStep.id} // Klucz pomaga w animacji
                        src={currentStep.imageUrl}
                        alt={`Step ${activeIndex + 1}: ${currentStep.title}`}
                        className={styles.portfolioImage} // Klasa do stylizacji i animacji
                    />
                </div>

                {/* Lista kroków po prawej */}
                <div className={styles.stepsList}>
                    {stepsData.map((step, index) => (
                        <div
                            key={step.id}
                            className={`${styles.stepItem} ${index === activeIndex ? styles.active : ''}`}
                            onClick={() => handleStepClick(index)}
                        >
                            <div className={styles.timelineDot}></div>
                            <div className={styles.stepContent}>
                                <p>{step.title}</p>
                                {/* Możesz dodać opis: {step.description && <span>{step.description}</span>} */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioBuild;