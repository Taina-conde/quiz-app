import React, { useState, useEffect } from "react";

const Context = React.createContext({
  numQuestions: 0,
  questions: [],
  currentResults: {},
  pastResults: [],
  onSaveQuestions: (questions) => {},
  onSaveNumQuestions: (num) => {},
});

export const ContextProvider = (props) => {
  const [numQuestions, setNumQuestions] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [currentResults, setCurrentResults] = useState({});
  const [pastResults, setPastResults] = useState([]);

  useEffect(() => {
    const storedPasResults = localStorage.getItem("pastResults");
    console.log("stored in localStorage", storedPasResults);
    if (storedPasResults !== null) {
      setPastResults(storedPasResults);
    }
  }, []);

  const saveQuestionsHandler = (questions) => {
    setQuestions(questions);
  };

  const saveNumQuestionsHandler = (num ) => {
      setNumQuestions(num);
  }

  return (
    <Context.Provider
      value={{
        numQuestions,
        questions,
        currentResults,
        pastResults,
        onSaveQuestions: saveQuestionsHandler,
        onSaveNumQuestions: saveNumQuestionsHandler,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Context;
