import React, { useEffect, useState } from 'react';

const CardComponent = ({ question, answer, onMarkOpened, onUnmarkOpened, isOpened }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  // Reset `showAnswer` when the `question` prop changes
  useEffect(() => {
    setShowAnswer(false);
  }, [question]);

  return (
    <div className="flex p-3 justify-center items-center bg-gray-100"> {/* Centering */}
      <div
        className="border rounded-xl p-8 shadow-xl bg-white w-96 text-center" // Larger width and padding
      >
        <h2 className="text-2xl font-bold">{question}</h2> {/* Bigger text size */}

        <button
          className="mt-6 px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-300" // Larger button
          onClick={toggleAnswer}
        >
          {showAnswer ? 'Скрыть' : 'Показать'}
        </button>

        {showAnswer && (
          <p className="mt-6 text-gray-700 text-lg">{answer}</p> // Larger answer text
        )}

        <div className="mt-6 flex justify-center gap-6">
          <button
            className={`px-6 py-3 rounded-lg ${isOpened ? 'bg-green-300' : 'bg-gray-300'}`}
            onClick={onMarkOpened}
          >
            Выделить
          </button>

          <button
            className="px-6 py-3 rounded-lg bg-gray-200"
            onClick={onUnmarkOpened}
          >
            Не Выделить
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
