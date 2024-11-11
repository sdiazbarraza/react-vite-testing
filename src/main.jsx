import React from 'react';
//Importamos para renderizar el componente en web, puede ser en react-native o react-vr
import ReactDOM from 'react-dom/client';

import {App} from './HelloWorldApp';
import {FirstApp} from './FirstApp';
import {CounterApp} from './CounterApp';
import './style.css';
//Renderizamos el componente en el DOM
ReactDOM.createRoot(document.getElementById('root'))
        .render(
            <React.StrictMode>
               <CounterApp value={12}/>
               {/* <FirstApp title="Hola soy german" subTitle={12}/>*/}
            </React.StrictMode>
        );