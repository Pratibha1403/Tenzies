import './App.css';
import Dice from './Dice';

function App() {
  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p>Roll until all dice are the same. click each die to freeze it at it's current value between rolls.</p>
      <div className="dice-container">
        <Dice value="1"/>
        <Dice value="6"/>
        <Dice value="3"/>
        <Dice value="6"/>
        <Dice value="4"/>
        <Dice value="2"/>
        <Dice value="5"/>
        <Dice value="1"/>
        <Dice value="2"/>
        <Dice value="1"/>
      </div>
      <button className='roll-dice'>Roll</button>
    </main>
  );
}

export default App;
