import ReactDOM from 'react-dom/client';
import App from './App';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
let root = ReactDOM.createRoot(document.getElementById('root'));

//rendering on the root
root.render(
    <StrictMode>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
        
    </StrictMode>

);