import logo from '../../logo.svg';
import './App.css';
import HomeView from "../HomeView";
import  Container  from "@material-ui/core/Container";
import QuizView from '../QuizView';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ResultsView from '../ResultsView';

function App() {
  return (
    <Router className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Container maxWidth = "md">
        <Route path = "/" exact component= {HomeView}/>
        <Route path = "/quiz" component = {QuizView} />
        <Route path = "/results/:resultsId" component = {ResultsView}/>
      </Container>
    </Router>
  );
}

export default App;
