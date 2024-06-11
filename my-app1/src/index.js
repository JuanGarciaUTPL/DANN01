import React from 'react';
import ReactDOM from 'react-dom/client';
import {Saludar} from "./components/Saludar";
import {Balance} from './components/Balance';
/*import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
*/

const root = ReactDOM.createRoot(document.getElementById('root'));

/*
  <React.StrictMode>
    <App />
  </React.StrictMode>
  );*/


root.render(
  <>
    <Saludar />
    <Balance title="Balance" cifra="5900,00"/>
    <Balance title="Ingresos" cifra="1300,00"/>
    <Balance title="Egresos" cifra="4600,00"/>
  </>
);

  // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//reportWebVitals();
