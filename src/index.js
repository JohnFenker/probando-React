import React from 'react';
import ReactDOM from 'react-dom';
import { HookApp } from './HookApp';
import { CounterApp } from './components/01-useState/CounterApp';
import { CounterWithCustonHook } from './components/01-useState/CounterWithCustonHook';
import { SimpleForm } from './components/02-useEffect/SimpleForm';
import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook'; 
import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
import { FocusScreen } from './components/04-useRef/FocusScreen';
import { RealExampleRef } from './components/04-useRef/RealExampleRef';
import { Layout } from './components/05-useLayoutEffect/Layout'; 
import { Memorize } from './components/06-memos/Memorize';
import { MemoHook } from './components/06-memos/MemoHook';
import { CallbackHook } from './components/06-memos/CallbackHook';

//un contador con un useState no es "directa", ya hay una forma de implementar un useCounter



ReactDOM.render( 
    //<HookApp />, document.getElementById('root'),
    //<CounterApp />, document.getElementById('root')
    //<CounterWithCustonHook />, document.getElementById('root')
    //<SimpleForm />, document.getElementById('root')
    //<FormWithCustomHook />, document.getElementById('root')
    //<MultipleCustomHooks />, document.getElementById('root')
    //<FocusScreen />, document.getElementById('root')
    //<RealExampleRef />, document.getElementById('root') 
    //<Layout />, document.getElementById('root') 
    //<Memorize />, document.getElementById('root') 
    //<MemoHook />, document.getElementById('root') 
    <CallbackHook />, document.getElementById('root') 
    
    

);
 