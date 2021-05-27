import logo from '../../logo.svg';
import './App.css';
import HomeView from "../HomeView";
import  Container  from "@material-ui/core/Container";
import QuizView from '../QuizView';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Container maxWidth = "md">
        <HomeView/>
        <QuizView/>
      </Container>
    </div>
  );
}

export default App;
