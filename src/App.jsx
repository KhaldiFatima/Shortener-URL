import { useState } from 'react';
import './App.css';
import Background from './Component/Background/Background';
import InputShortener from './Component/InputShortener/InputShortener';
import ResultUrl from './Component/ResultUrl/ResultUrl';

function App() {
  const [inputValue, setInputValue] = useState('');
  return (
    <>
      <div className='container'>
        <InputShortener setInputValue={setInputValue} />
        <ResultUrl inputValue={inputValue} />
        <Background />
      </div>
      <footer className='footer-container'>
        sixth project with : <strong>TG Academy</strong>
      </footer>
    </>
  );
}

export default App;
