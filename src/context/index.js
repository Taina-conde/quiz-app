import React, { useState } from "react";

const Context = React.createContext({
  questions: [],
  currentResults: {},
  pastResults: [],
});

export const ContextProvider = (props) => {
  const [questions, setQuestions] = useState([]);
  const [currentResults, setCurrentResults] = useState({});
  const [pastResults, setPastResults] = useState([]);
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
