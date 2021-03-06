import React from 'react';
import './App.css';
import Board from './components/Board';

const App = () => {
  return (
    <section>
      <header className="header">
        <h1 className="header__h1"><span className="header__text"> Kal's Inspiration Board</span></h1>
      </header>
      <Board
        url="https://inspiration-board.herokuapp.com/boards/Kal/cards"
        boardName='Kal'
      />
    </section>
  );
};

export default App;
