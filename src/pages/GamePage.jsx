import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import game_bg from '../backgrounds/game_bg.avif';
import gifA from '../gifs/gifA.gif';
import gifB from '../gifs/gifB.gif';
import gifC from '../gifs/gifC.gif';
import gifD from '../gifs/gifD.gif';
import gifE from '../gifs/gifE.gif';
import gifF from '../gifs/gifF.gif';
import gifG from '../gifs/gifG.gif';
import gifH from '../gifs/gifH.gif';
import musicA from '../alphabet_music/a_music.mp3';
import musicB from '../alphabet_music/b_music.mp3';
import musicC from '../alphabet_music/c_music.mp3';
import musicD from '../alphabet_music/d_music.mp3';
import musicE from '../alphabet_music/e_music.mp3';
import musicF from '../alphabet_music/f_music.mp3';
import musicG from '../alphabet_music/g_music.mp3';
import musicH from '../alphabet_music/h_music.mp3';
import bgMusic from '../music/bg_music.mp3';

const GamePage = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [showWord, setShowWord] = useState(false);

  useEffect(() => {
    // Play background music when the component mounts
    const backgroundMusic = new Audio(bgMusic);
    backgroundMusic.play();

    // Clean up the audio element when the component unmounts
    return () => {
      backgroundMusic.pause();
      backgroundMusic.currentTime = 0;
    };
  }, []);

  useEffect(() => {
    // Play alphabet music when selectedButton changes
    const alphabetMusic = new Audio(getAlphabetMusic());
    alphabetMusic.play();

    // Clean up the audio element when the selectedButton changes
    return () => {
      alphabetMusic.pause();
      alphabetMusic.currentTime = 0;
    };
  }, [selectedButton]);

  const getAlphabetMusic = () => {
    switch (selectedButton) {
      case 'A':
        return musicA;
      case 'B':
        return musicB;
      case 'C':
        return musicC;
      case 'D':
        return musicD;
      case 'E':
        return musicE;
      case 'F':
        return musicF;
      case 'G':
        return musicG;
      case 'H':
        return musicH;
      default:
        return null;
    }
  };

  const slideAnimation = useSpring({
    from: { marginLeft: -1000 },
    to: { marginLeft: showWord ? 0 : -1000 },
  });

  const handleButtonClick = (button) => {
    setSelectedButton(button);
    setShowWord(true);
  };

  const renderGifAndWord = (gif, word) => {
    return (
      <div className="text-center">
        <animated.div style={slideAnimation}>
          <img src={gif} alt={`GIF ${selectedButton}`} className="w-96 h-96" />
          <h1 className="font-bold text-6xl mt-4">{word}</h1>
        </animated.div>
      </div>
    );
  };

  const renderGif = () => {
    switch (selectedButton) {
      case 'A':
        return renderGifAndWord(gifA, 'APPLE');
      case 'B':
        return renderGifAndWord(gifB, 'BALL');
      case 'C':
        return renderGifAndWord(gifC, 'CAT');
      case 'D':
        return renderGifAndWord(gifD, 'DOG');
      case 'E':
        return renderGifAndWord(gifE, 'ELEPHANT');
      case 'F':
        return renderGifAndWord(gifF, 'FISH');
      case 'G':
        return renderGifAndWord(gifG, 'GRAPES');
      case 'H':
        return renderGifAndWord(gifH, 'HEN');
      default:
        return (
          <div className='bg-yellow-400 rounded-md p-2 text-white text-3xl'>
            Tap on the below letters!
          </div>
        );
    }
  };

  return (
    <>
      <div
        className="h-screen flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${game_bg})`, backgroundSize: 'cover' }}
      >
        <div className='absolute bottom-5 grid grid-cols-8 gap-4'>
          <button
            onClick={() => handleButtonClick('A')}
            className='bg-sky-500 rounded-md p-2 text-black text-3xl'
          >
            A
          </button>
          <button
            onClick={() => handleButtonClick('B')}
            className='bg-sky-500 rounded-md p-2 text-black text-3xl'
          >
            B
          </button>
          <button
            onClick={() => handleButtonClick('C')}
            className='bg-sky-500 rounded-md p-2 text-black text-3xl'
          >
            C
          </button>
          <button
            onClick={() => handleButtonClick('D')}
            className='bg-sky-500 rounded-md p-2 text-black text-3xl'
          >
            D
          </button>
          <button
            onClick={() => handleButtonClick('E')}
            className='bg-sky-500 rounded-md p-2 text-black text-3xl'
          >
            E
          </button>
          <button
            onClick={() => handleButtonClick('F')}
            className='bg-sky-500 rounded-md p-2 text-black text-3xl'
          >
            F
          </button>
          <button
            onClick={() => handleButtonClick('G')}
            className='bg-sky-500 rounded-md p-2 text-black text-3xl'
          >
            G
          </button>
          <button
            onClick={() => handleButtonClick('H')}
            className='bg-sky-500 rounded-md p-2 text-black text-3xl'
          >
            H
          </button>
        </div>

        {renderGif()}

      </div>
    </>
  );
};

export default GamePage;
