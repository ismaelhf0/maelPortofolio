import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'normalize.css';

import './assets/styles/global.scss'// Import global styles
import Switch from './components/themeToggle/Switch.jsx';
<Switch />

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <App />
  </React.StrictMode>,
)
