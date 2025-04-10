import React from 'react';
import ReactDOM from 'react-dom/client'; // Ważne: import z 'react-dom/client' dla React 18+
import './App.css'; // Import globalnych stylów (lub './App.css', jeśli tam je przeniosłeś)
import App from './App'; // Import głównego komponentu aplikacji
import reportWebVitals from './reportWebVitals'; // Opcjonalne: do mierzenia wydajności

// 1. Znajdź element DOM, w którym aplikacja React ma zostać wyrenderowana.
//    Ten element (<div id="root"></div>) znajduje się zazwyczaj w public/index.html
const rootElement = document.getElementById('root');

// 2. Sprawdź, czy element został znaleziony (dobre praktyki TypeScript)
if (!rootElement) {
    throw new Error("Failed to find the root element with id 'root'");
}

// 3. Utwórz "korzeń" renderowania React dla znalezionego elementu DOM.
//    Używamy `ReactDOM.createRoot` zgodnie z API React 18.
const root = ReactDOM.createRoot(rootElement);

// 4. Wyrenderuj główny komponent aplikacji (<App />) wewnątrz korzenia.
//    <React.StrictMode> to narzędzie do podświetlania potencjalnych problemów w aplikacji.
//    Działa tylko w trybie deweloperskim i nie wpływa na build produkcyjny.
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// 5. Opcjonalne: Jeśli chcesz zacząć mierzyć wydajność w swojej aplikacji,
//    przekaż funkcję do logowania wyników (np. reportWebVitals(console.log))
//    lub wyślij do punktu końcowego analityki. Dowiedz się więcej: https://bit.ly/CRA-vitals
reportWebVitals();