import React, { useState, useEffect } from "react";

const Context = React.createContext({
  questions: [],
  currentResults: {},
  pastResults: [],
  onSaveQuestions: (questions) => {},
});

export const ContextProvider = (props) => {
  const [questions, setQuestions] = useState([]);
  const [currentResults, setCurrentResults] = useState({});
  const [pastResults, setPastResults] = useState([]);

  useEffect(() => {
    const storedPasResults = localStorage.getItem('pastResults');
    console.log('stored in localStorage', storedPasResults)
    if (storedPasResults !== null) {
        setPastResults(storedPasResults);
    }
  }, []);

  const saveQuestionsHandler = (questions) => {
      setQuestions(questions);
  }

  return (
    <Context.Provider
      value={{
        questions,
        currentResults,
        pastResults,
        onSaveQuestions: saveQuestionsHandler,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Context;
