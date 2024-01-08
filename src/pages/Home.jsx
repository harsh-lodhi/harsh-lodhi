import React, { useEffect } from 'react';
import home_bcg from '../backgrounds/home_bckgrnd.avif';
import bgMusic from '../music/bg_music.mp3';

const Home = () => {
  
  useEffect(() => { new Audio(bgMusic).play(); }, []); 
  
  return (
    
    <>
      <div
        className="h-screen flex flex-col items-center justify-center bg-cover"
        style={{ backgroundImage: `url(${home_bcg})` }}
      >
        <button
          onClick={() => window.location.href = '/play'}
          className="bg-yellow-500 text-white py-4 px-8 rounded-lg flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
            />
          </svg>
          Start
        </button>
      </div>
    </>
  );
};

export default Home;