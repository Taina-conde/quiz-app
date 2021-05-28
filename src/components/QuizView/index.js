import { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Context from "../../context";
import QuizInitialButtons from "./QuizInitialButtons";
import Question from "./Question";
import { makeStyles } from "@material-ui/core/styles";
import { generateUID } from "../../utils/helpers";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  resultsBtn: {
    alignSelf: "center",
  },
}));
const QuizView = () => {
  const ctx = useContext(Context);
  const history = useHistory();
  const { questions, numQuestions, currentResults } = ctx;
  
  const questionsAnsweredArr = currentResults.questions
    ? Object.keys(currentResults.questions)
    : [];
  const totalQuestionsAnswered = questionsAnsweredArr.length;

  const classes = useStyles();

  const submitResultsHandler= () => {
    const resultsId = generateUID();
    ctx.onSaveResults(resultsId, currentResults);
    history.push(`/results/${resultsId}`)
  }

  if (numQuestions !== 0) {
    return (
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <QuizInitialButtons />
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid container direction="column" spacing={5}>
      {questions.map((question, index) => (
        <Question key={index} question={question} id={index + 1} />
      ))}
      <Grid item className={classes.resultsBtn}>
        <Button
          variant="contained"
          color="primary"
          disabled={questions.length !== totalQuestionsAnswered}
          onClick = {submitResultsHandler}
        >
          See results
        </Button>
      </Grid>
    </Grid>
  );
};
export default QuizView;
