import React, { useState } from "react";
import List from "./List";
import Data from "./Data";

const App = () => {
  const [people, setPeople] = useState(Data);

  const clearAll = () => {
    setPeople([]);
  };

  const rerender = () => {
    setPeople(Data);
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays Today</h3>
        <List People={people} />
        <button onClick={clearAll}>Clear All</button>
        <button onClick={rerender}>Re-render</button>
      </section>
    </main>
  );
};

export default App;
