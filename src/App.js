import React, { useState } from 'react';
import Group from './Group';
import { group1, group2, group3, group4 } from './questionsData';

const groupNames = ['Русская литература I ', 'Русская литература II', 'Узбекская литература', ];

const App = () => {
  const [currentGroup, setCurrentGroup] = useState(0);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  // State to track which questions are opened in each group
  const [openedQuestionsByGroup, setOpenedQuestionsByGroup] = useState({
    0: new Set(),
    1: new Set(),
    2: new Set(),
    3: new Set(),
  });

  // Function to mark a question as opened for the current group
  const markQuestionAsOpened = (questionIndex) => {
    setOpenedQuestionsByGroup((prev) => {
      const updatedSet = new Set(prev[currentGroup]); // Create a new Set
      updatedSet.add(questionIndex); // Add the question index
      return { ...prev, [currentGroup]: updatedSet }; // Return updated state
    });
  };

  // Function to unmark a question for the current group
  const unmarkQuestionAsOpened = (questionIndex) => {
    setOpenedQuestionsByGroup((prev) => {
      const updatedSet = new Set(prev[currentGroup]); // Create a new Set
      updatedSet.delete(questionIndex); // Remove the question index
      return { ...prev, [currentGroup]: updatedSet }; // Return updated state
    });
  };

  const changeGroup = (groupIndex) => {
    setCurrentGroup(groupIndex); // Switch group
    setSelectedQuestion(null);  // Reset selected question
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">80 Unique Questions in 4 Groups</h1>

      {/* Group buttons with distinct names */}
      <div className="flex justify-center gap-4 mb-4">
        {groupNames.map((name, index) => (
          <button
            key={index}
            onClick={() => changeGroup(index)}
            className={`px-4 py-2 rounded-md ${
              index === currentGroup
                ? 'bg-green-500 text-white hover:bg-green-600'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      {/* Render the current group */}
      <Group
        groupData={[group1, group2, group3, group4][currentGroup]}
        groupIndex={currentGroup}
        currentGroup={currentGroup}
        selectedQuestion={selectedQuestion}
        setSelectedQuestion={setSelectedQuestion}
        openedQuestions={openedQuestionsByGroup[currentGroup]} // Pass only the current group's opened questions
        onMarkOpened={(index) => markQuestionAsOpened(index)} // Pass correct event handler
        onUnmarkOpened={(index) => unmarkQuestionAsOpened(index)} // Pass correct event handler
      />
    </div>
  );
};

export default App;
