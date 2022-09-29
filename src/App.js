import { render } from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { StrictMode } from 'react';

import SearchParams from './Components/SearchParams';
import Details from './Components/Details';

function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Link to="/">
          <header>
            <Link to="/" >Adopt Me!</Link>
          </header>
        </Link>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}

render(<App />, document.getElementById('root'));
