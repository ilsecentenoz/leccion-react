import React from 'react';//crear componentes etc.
import ReactDOM from 'react-dom';//permite manipular el dom virtual
import './index.css';
import App from './App';//mandar a llamar la clase
import registerServiceWorker from './registerServiceWorker';
import Menu from './components/Menu.jsx';

ReactDOM.render(
<Menu/>, 
document.getElementById('root'));
registerServiceWorker();