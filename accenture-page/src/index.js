import React from "react";
import ReactDOM from 'react-dom';
import { IntlProvider } from "react-intl";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import messages_de from "./translations/de.json";
import messages_en from "./translations/en.json";

const messages = {
    'de': messages_de,
    'en': messages_en
};

const lang = navigator.language.split(/[-_]/)[0]; 

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale={lang} messages={messages[lang]} >
      <App />
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
