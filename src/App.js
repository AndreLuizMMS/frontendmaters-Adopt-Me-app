import { render } from "react-dom";

import Pet from "./Pet";
import SearchParams from "./SearchParams";

function App() {


  return (
    <div id="my-app">
      <h1>Adopt Me</h1>
      <SearchParams/>
      {/* <Pet name="Vick" animal="Dog" breed="York" /> */}
      {/* <Pet name="Toy" animal="Dog" breed="Poodle" /> */}
      {/* <Pet name="xanim" animal="Cat" breed="Demon" /> */}
    </div>
  );
}


render(<App />, document.getElementById('root'))

