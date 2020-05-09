import React, { FC, useEffect, useState } from 'react';
import './App.css';
import FlashCardsMockData from './helpers/mockData/FlashCardsMockData.json';
import { initialData } from './helpers/initialData/FlashCardInitialData';
import { FlashCards } from './helpers/interfaces/FlashCards';
import FlashCard from './components/FlashCard';

const App: FC = () => {
  const [data, setData] = useState<FlashCards[]>(initialData);

  useEffect(() => {
    setData(FlashCardsMockData);
  }, []);

  return (
    <div className="flashcard-wrapper">
      <div className="flashcard-container">
        {data.map((card) => (
          <FlashCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default App;
