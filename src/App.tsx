import React from 'react';
import { Button } from './components/Button';
import { ButtonChildren } from './components/ButtonChildren';
import { ButtonCounter } from './components/ButtonCounter';

import './services/firebase';

function App() {
    return (
        <div className="App">
            <h1>Hello World</h1>
            <Button text="Botão 1" />
            <Button />
            <Button />
            <Button />
            <ButtonChildren >
                Ummm
            </ButtonChildren>
            <ButtonCounter />
        </div>
    );
}

export default App;
