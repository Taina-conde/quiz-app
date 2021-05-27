import React, { useState, useEffect } from "react";

const Context = React.createContext({
  questions: [],
  currentResults: {},
  pastResults: [],
});

export const ContextProvider = (props) => {
  const [questions, setQuestions] = useState([]);
  const [currentResults, setCurrentResults] = useState({});
  const [pastResults, setPastResults] = useState([]);

  useEffect(() => {
    const storedPasResults = localStorage.getItem('pastResults');
    console.log('stored info', storedPasResults)
  }, [])

  return (
    <Context.Provider
      value={{
        questions,
        currentResults,
        pastResults,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Context;
