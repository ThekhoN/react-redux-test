import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import './global-style.css';
import Test from './component/test';
import TestComponent from './component/TestComponent';
import QuoteComponent from './component/quoteComponent';
import store from './store';

const frameworks = ['React', 'Preact', 'Vue', 'Angular', 'Ember'];
const mountNode = document.getElementById('root');

const text = [...frameworks, 'Mithril'].join(', ');
const App = () => (<div>{text}<br /><br /><TestComponent /><br /><QuoteComponent /><br /><Test /></div>);

render(<Provider store={store}>
  <App />
</Provider>, mountNode);
