import { render } from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { StrictMode } from 'react';

import SearchParams from './Components/SearchParams';
import Details from './Components/Details';

function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <div id="my-app">
          <h1>Adopt Me!</h1>
          <Routes>
            <Route path="details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </div>
      </BrowserRouter>
    </StrictMode>
  );
}

render(<App />, document.getElementById('root'));
