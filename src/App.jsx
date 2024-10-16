import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcepts';
import Examples from './components/Examples';
import { useRef, useState } from 'react';

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
