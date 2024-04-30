import React from 'react';
import CardComponent from './CardComponent';

const Group = ({
  groupData,
  groupIndex,
  currentGroup,
  selectedQuestion,
  setSelectedQuestion,
  openedQuestions,
  onMarkOpened,
  onUnmarkOpened,
}) => {
  return (
    <div>
      {groupIndex === currentGroup && (
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {groupData.map((q, index) => (
            <button
              key={index}
              onClick={() => setSelectedQuestion({ ...q, index })}  // Correct event handler
              className={`px-4 py-2 border rounded-md ${
                openedQuestions.has(index)
                  ? 'bg-green-200 border-green-300'
                  : 'bg-gray-200 border-gray-300'
              } hover:bg-gray-300`}
            >
              {`Вопрос ${index + 1}`}
            </button>
          ))}
        </div>
      )}

      {selectedQuestion && (
        <CardComponent
          question={selectedQuestion.question}
          answer={selectedQuestion.answer}
          onMarkOpened={() => onMarkOpened(selectedQuestion.index)} // Pass correct event handler
          onUnmarkOpened={() => onUnmarkOpened(selectedQuestion.index)} // Pass correct event handler
          isOpened={openedQuestions.has(selectedQuestion.index)} // Check if question is opened
        />
      )}
    </div>
  );
};

export default Group;
