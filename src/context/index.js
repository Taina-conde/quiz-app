import React, { useState, useEffect } from "react";

const Context = React.createContext({
  numQuestions: 0,
  questions: [],
  currentResults: {},
  pastResults: [],
  onSaveQuestions: (questions) => {},
  onSaveNumQuestions: (num) => {},
  onSaveAnswer: (question, answer) => {},
  onSaveResults: (id, currentResults) => {},
});

export const ContextProvider = (props) => {
  const [numQuestions, setNumQuestions] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [currentResults, setCurrentResults] = useState({});
  const [pastResults, setPastResults] = useState([]);

  useEffect(() => {
    const storedPasResults = localStorage.getItem("pastResults");
    if (storedPasResults !== null) {
      setPastResults(storedPasResults);
    }
  }, []);

  const saveQuestionsHandler = (questions) => {
    setQuestions(questions);
  };

  const saveNumQuestionsHandler = (num) => {
    setNumQuestions(num);
  };
  const saveAnswerHandler = (questionText, chosenAnswer, correctAnswer) => {
    let totalCorrect = currentResults.totalCorrect
      ? currentResults.totalCorrect
      : 0;
    let totalIncorrect = currentResults.totalIncorrect
      ? currentResults.totalIncorrect
      : 0;
    if (chosenAnswer === correctAnswer) {
      totalCorrect += 1;
    } else {
      totalIncorrect += 1;
    }
    setCurrentResults({
      ...currentResults,
      totalCorrect,
      totalIncorrect,
      questions: {
        ...currentResults.questions,
        [questionText]: {
          text: questionText,
          correctAnswer,
          chosenAnswer,
        },
      },
    });
  };
  const saveResultsHandler = (id, currentResults) => {
    const storedPastResults = JSON.parse(localStorage.getItem("pastResults"));
    let newPastResults = {};
    if (storedPastResults) {
      newPastResults = {
        ...storedPastResults,
        [id]: {
          ...currentResults,
          timestamp: Date.now(),
        },
      };
    }
    setPastResults(newPastResults);
    localStorage.setItem("pastResults", JSON.stringify(newPastResults));
  };

  return (
    <Context.Provider
      value={{
        numQuestions,
        questions,
        currentResults,
        pastResults,
        onSaveQuestions: saveQuestionsHandler,
        onSaveNumQuestions: saveNumQuestionsHandler,
        onSaveAnswer: saveAnswerHandler,
        onSaveResults: saveResultsHandler,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Context;
