import React, { FC, useState } from 'react';
import { FlashCards } from '../helpers/interfaces/FlashCards';
import { ReactComponent as FlipIcon } from '../icons/flipIcon.svg';

interface IProps {
  card: FlashCards;
}
const FlashCard: FC<IProps> = ({ card }) => {
  const [toggle, setToggle] = useState(false);

  const {
    data: { front, back },
  } = card;

  const onToggle = () => {
    setToggle(!toggle);
  };

  const imgLoaded = () => {
    console.log('image loaded!');
  };

  const FlipButton = () => (
    <div className="flip-button" title="Click to flip">
      <FlipIcon />
    </div>
  );

  const BackOfCard = () => (
    <div className="back">
      <div className="content">
        {back.text && (
          <div className="text">
            <span>{back.text}</span>
          </div>
        )}
        {back.imgUrl && (
          <img
            onLoad={imgLoaded}
            className="img-url"
            src={back.imgUrl}
            alt={back.text || 'a special back image'}
          />
        )}
      </div>
      <FlipButton />
    </div>
  );

  const FrontOfCard = () => (
    <div className="front">
      <div className="content">
        {front.text && (
          <div className="text">
            <span>{front.text}</span>
          </div>
        )}
        {front.imgUrl && (
          <img
            onLoad={imgLoaded}
            className="img-url"
            src={front.imgUrl}
            alt={front.text || 'a front special image'}
          />
        )}
      </div>
      <FlipButton />
    </div>
  );

  return (
    <div
      onClick={onToggle}
      className={`flashcard-scene ${toggle ? 'is-scaled' : ''}`}
    >
      <div className={`flashcard ${toggle ? 'is-flipped' : ''}`}>
        <BackOfCard />
        <FrontOfCard />
      </div>
    </div>
  );
};

export default FlashCard;
