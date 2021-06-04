import logo from "../../logo.svg";
import "./App.css";
import HomeView from "../HomeView";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import QuizView from "../QuizView";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ResultsView from "../ResultsView";
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 0,

  },
  box: {
    height: "100vh",
    backgroundColor: "white",
  }
}))
function App() {
  const classes = useStyles();
  return (
    <Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Container maxWidth="md" className = {classes.container}>
        <Box boxShadow= {2} p={4} className = {classes.box} >
          <Route path="/" exact component={HomeView} />
          <Route path="/quiz" component={QuizView} />
          <Route path="/results/:resultsId" component={ResultsView} />
        </Box>
      </Container>
    </Router>
  );
}

export default App;
