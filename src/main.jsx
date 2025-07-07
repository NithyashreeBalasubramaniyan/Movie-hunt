import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import {createRoot} from 'react-dom/client'
import { ScrollToTop } from './ScrollToTop.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ScrollToTop />
        <App />
  </BrowserRouter>

)
