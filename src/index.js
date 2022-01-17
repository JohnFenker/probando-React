import React from 'react';
import ReactDOM from 'react-dom';
import { HookApp } from './HookApp';
import { CounterApp } from './components/01-useState/CounterApp';
import { CounterWithCustonHook } from './components/01-useState/CounterWithCustonHook';
import { SimpleForm } from './components/02-useEffect/SimpleForm';

//un contador con un useState no es "directa", ya hay una forma de implementar un useCounter



ReactDOM.render( 
    //<HookApp />, document.getElementById('root'),
    //<CounterApp />, document.getElementById('root')
    //<CounterWithCustonHook />, document.getElementById('root')
    <SimpleForm />, document.getElementById('root')
);
 