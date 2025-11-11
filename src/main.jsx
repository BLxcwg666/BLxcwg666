import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

console.log('' +
    '________________                                                    \n' +
    '___  /__(_)__  /_____  ___________________  _______ _ _____________ \n' +
    '__  /__  /__  __ \\_  |/_/  ___/_  __ \\_  / / /  __ `/ __  ___/  __ \\\n' +
    '_  / _  / _  /_/ /_>  < / /__ _  / / /  /_/ // /_/ /___(__  )/ /_/ /\n' +
    '/_/  /_/  /_.___//_/|_| \\___/ /_/ /_/_\\__, / \\__,_/_(_)____/ \\____/ \n' +
    '                                     /____/                         ' +
    '\n\n' +
    'Copyright © 2019-2025 libxcnya.so (a.k.a BLxcwg666). All rights reserved.\n' +
    '「命に嫌われている」\n')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

